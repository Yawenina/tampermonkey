// 放在一个闭包里面避免全局变量冲突
(function() {
  let loadCdnResource = false;
  let loadExcelCdnResource = false;
  let qualityPanel = null;
  let app = null;

  let onSuccess = null; // vue 视图依赖资源加载完毕后的回调

  const GRADE_BAD = 'bad';
  const GRADE_GOOD = 'good';
  const GRADE_EXCELLENT = 'excellent';
  const qualityColorMap = {
    [GRADE_BAD]: '#ff0000',
    [GRADE_GOOD]: '#ccff00',
    [GRADE_EXCELLENT]: '#00ff00'
  };
  const qualityFontColorMap = {
    [GRADE_BAD]: '#ffffff',
    [GRADE_GOOD]: '#333333',
    [GRADE_EXCELLENT]: '#333333'
  };

  let translationLibrary = {};

  /**
   * Medusa key 质量检查结果
   * [key] : {
   *  id                  // Medusa key
   *  app                 // Medusa app
   *  text                // PDKV
   *  defaultMessage      // 默认文案
   *  preText             // Medusa key 前面的文案
   *  checked             // 是否请求了接口检查翻译情况
   *  hasCalculatedScore  // 是否拿到了接口响应，计算了质量分
   *  score               // 质量评级 GRADE_BAD｜GRADE_GOOD｜GRADE_EXCELLENT
   *  scoreNum            // 质量得分
   *  missed              // 未翻译的语言
   *  translated          // 已翻译的语言
   *  translatedObj       // 已翻译的语言内容
   *  translatedDetail    // 各语言翻译详情描述
   *  title               // 翻译详情
   *  nLangsTransCount    // necessaryLangs 的翻译数量
   *  lLangsTransCount    // localEnglish 的翻译数量
   * }
   */
  const qualityRes = {};
  const excludeFromTatalScore = ['s-wb-common'];

  const i18nRgx = /(.+)?##@@@(.+)##(.+)@@@##(.+)?/;

  const necessaryLangs = ['zh_CN', 'en_US', 'ms_MY', 'th_TH', 'vi_VN', 'id_ID' ];
  const localEnglish = ['en_SG', 'en_MY', 'en_TH', 'en_VN', 'en_ID',  'en_PH'];
  const allLangs = [...necessaryLangs, ...localEnglish];
  let lastChoosedLangs = GM_getValue('medusa_selected_langs') || necessaryLangs;

  const getMode = () => GM_getValue('medusa_extract_mode') || 'QA';
  const switchMode = () => {
    const targetMode = getMode() === 'DEV'? 'QA': 'DEV';
    GM_setValue('medusa_extract_mode', targetMode);
    return targetMode;
  };


  const getQualityInfoForKey = key => {
    const res = qualityRes[key];
    if (!res || !res.hasCalculatedScore) return;
    res.title =  `Key:\r\n${res.app}@${key}\r\nTranslated:\r\n${res.translated.join(',')}\r\nMissed:\r\n${res.missed.join(',')}`;
    return res;
  }

  const addTipForNode = (pnode, medusaObj) => {
    const div = document.createElement('div');
    const dmEncoded = encodeURIComponent(medusaObj.defaultMessage);
    const res = getQualityInfoForKey(medusaObj.id);
    div.setAttribute('class', 'tamplemonkey-medusa-tip-wrap');
    div.setAttribute('style', 'position:relative;z-index:100;width:0px;height:0px;display:inline;float:left;');

    // 适配feedback
    const showA = medusaObj.id && medusaObj.id.indexOf('asc-fb.feedback-form.') == 0;
    const href = tpmMds.getMdsHref(medusaObj.app, medusaObj.id);
    div.innerHTML = `
      <div class="tamplemonkey-medusa-tip ${res? res.score: ''}" data-id="${medusaObj.id}" data-app="${medusaObj.app}" data-dm="${dmEncoded}" >
        <span class="tp-medusa-qa-icon" title="${res? res.title: `Key: ${medusaObj.app}@${medusaObj.id}`}">QA</span>
        <span class="tp-medusa-js-icon" title="Copy JS: ${medusaObj.app}@${medusaObj.id}">js</span>
        <span class="tp-medusa-key-icon" title="Copy Key: ${medusaObj.app}@${medusaObj.id}">key</span>
        ${showA ? `<a target="_blank" href="${href}"><img class="tp-medusa-key-link" title="Edit Value: ${medusaObj.app}@${medusaObj.id}" src="https://img.alicdn.com/imgextra/i3/O1CN01kSOVbh1kviQdl7gxG_!!6000000004746-2-tps-64-64.png" /></a>` : `<img class="tp-medusa-key-edit" title="Edit Value: ${medusaObj.app}@${medusaObj.id}" src="https://img.alicdn.com/imgextra/i3/O1CN01kSOVbh1kviQdl7gxG_!!6000000004746-2-tps-64-64.png" />`}
      </div>
    `;
    pnode.setAttribute('data-tipdm', dmEncoded);
    pnode.prepend(div);
  }
  const isAddedTipForNode = (pnode, nodeValue) => pnode.getAttribute('data-tipdm') === encodeURIComponent(nodeValue);

  const calculateTotalQuality = () => {
    let translationRate = 0;
    let scoreSum = 0;
    let count = 0;
    let missedNecessaryLangs = false;
    Object.keys(qualityRes).forEach(key => {
      if (excludeFromTatalScore.includes(qualityRes[key].app)) return;
      if (!qualityRes[key].hasCalculatedScore) return;
      count ++;
      scoreSum += qualityRes[key].scoreNum;
      if (qualityRes[key].scoreNum < 80) missedNecessaryLangs = true;
      translationRate += qualityRes[key].nLangsTransCount;
    });
    // 总分评分规则
    let score = count == 0 ? 0 : parseInt(scoreSum / count);
    score = missedNecessaryLangs && score >= 80 ? 79 : score;
    translationRate = `${(100 * translationRate / count / necessaryLangs.length).toFixed(2)}%`;
    return {
      translationRate,
      score,
      status: score >= 95 ? GRADE_EXCELLENT : score >= 80 ? GRADE_GOOD : GRADE_BAD
    };
  };

  const calculateQuality = (target, obj = {}) => {
    const res = {
      ...target,
      hasCalculatedScore: true,
      score: '',
      scoreNum: 0,
      nLangsTransCount: 0,
      lLangsTransCount: 0,
      missed: [],
      translated: [],
      translatedObj: obj,
      translatedDetail: `defaultMessage:\r\n${target.defaultMessage}`
    }

    for (const lang of necessaryLangs) {
      if (obj[lang]) {
        res.translated.push(lang);
        res.translatedDetail += `\r\n${lang}:\r\n${obj[lang]}`;
        res.nLangsTransCount ++;
      } else {
        res.missed.push(lang);
        res.score = res.score || GRADE_BAD;
      }
    }
    const missedNecessaryLangsLength = res.missed.length;

    for (const lang of localEnglish) {
      if (obj[lang]) {
        res.translated.push(lang);
        res.translatedDetail += `\r\n${lang}:\r\n${obj[lang]}`;
        res.lLangsTransCount ++;
      } else {
        res.missed.push(lang);
        res.score = res.score || GRADE_GOOD;
      }
    }
    const missedLocalEnglishLength = res.missed.length - missedNecessaryLangsLength;

    // 单项评分规则
    res.scoreNum = missedNecessaryLangsLength > 0 ? 80 : 100;
    res.scoreNum = parseInt((res.scoreNum * (100 - (80 * missedNecessaryLangsLength) / necessaryLangs.length - (20 * missedLocalEnglishLength) / localEnglish.length)) / 100);

    res.score = res.score || GRADE_EXCELLENT;
    return res;
  };

  const setQualityColor = app => {
    const nodes = document.querySelectorAll(`.tamplemonkey-medusa-tip[data-app=${app}]`);
    nodes.forEach(node => {
      const key = node.getAttribute('data-id');
      const res = getQualityInfoForKey(key);
      if (res) {
        node.classList.add(res.score);
        node.childNodes.forEach(child => {
          if (child.classList && child.classList.contains('tp-medusa-qa-icon')) {
            child.setAttribute('title', res.title);
          }
        });
      }
    });
  }

  const addPanel = () => {
    if (!qualityPanel) {
      qualityPanel = document.createElement('div');
      qualityPanel.setAttribute('id', 'medusaQualityPanel');
      qualityPanel.setAttribute('title', '');
      qualityPanel.innerHTML = `<quality-panel>loading...</quality-panel>`;
      qualityPanel = tpmMds.setStyle(qualityPanel, {
        position: 'fixed',
        padding: '16px',
        left: '50%',
        top: '50%',
        backgroundColor: '#fff',
        borderRadius: '10px',
        zIndex: 1002,
        transform: 'translateX(-50%) translateY(-50%)',
        boxShadow: '0px 0px 10px black',
        display: 'none'
      });
      document.body.appendChild(qualityPanel);
    }
    onSuccess = () => {
      if (!app) {
        app = Vue.createApp({});
        app.use(ElementPlus);
        component = app.component('quality-panel', {
          data() {
            return {
              keysNumber: 0,
              multipleSelection: [],
              autoCompleteNum: 0,
              exportLoading: false,
              completeAExportLoading: false,
              loading: false,
              error: false,
              allLangs,
              allTags: allLangs.map(d => ({
                label: d,
                effect: lastChoosedLangs.includes(d) ? 'dark' : 'plain'
              })),
              appTags: getAppTags().map(appName => ({
                  label: appName,
                  effect: excludeFromTatalScore.includes(appName) ? 'plain' : 'dark'
              })),
              qualityRes
            }
          },
          computed: {
            list: function () {
              const lastApptagNames = this.appTags.map(item => item.label);
              const newApptags = getAppTags().filter(appName => !lastApptagNames.includes(appName)).map(appName => ({
                label: appName,
                effect: excludeFromTatalScore.includes(appName) ? 'plain' : 'dark'
              }));
              this.appTags = [...this.appTags, ...newApptags];

              const filterLang = this.allTags?.filter(t => t.effect === 'dark');
              const filterApp = this.appTags?.filter(t => t.effect === 'dark');
              let filterData= [];
              let data = Object.keys(this.qualityRes).filter(q => this.qualityRes[q].hasCalculatedScore).map(d => {
                const qualityRes = this.qualityRes[d] || {};
                const { app, defaultMessage, score, scoreNum, missed, translated, translatedObj, translatedDetail } = qualityRes;
                return {
                  app,
                  key: d,
                  defaultMessage,
                  translatedObj,
                  translatedDetail,
                  scoreNum,
                  scoreColor: `font-weight:bold;cursor:pointer;color:${qualityColorMap[score]}`,
                  scoreTip: `Translated:\r\n${translated.join(',')}\r\nMissed:\r\n${missed.join(',')}`,
                  missed
                }
              });
              if (filterLang?.length > 0 && filterApp?.length > 0) {
                filterData = data.filter(d => {
                  let result = false;
                  filterLang.forEach(l => {
                    if (d.missed.includes(l.label)) result = true;
                  })
                  return result;
                }).filter(d => {
                  let result = false;
                  filterApp.forEach(a => {
                    if (d.app === a.label) result = true;
                  })
                  return result;
                });
              }
              return this.keysNumber < 0 ? filterData.slice(0, 10) : filterData;
            }
          },
          methods: {
            reRender() {
              const length = Object.keys(this.qualityRes).length;
              if (this.keysNumber < length) this.keysNumber = length;
            },
            closePanel() {
              togglePanel();
            },
            toggleTag(index, type) {
              if (type === 'allTags') {
                const effect = this.allTags[index].effect;
                const newData = [...this.allTags];
                if (effect === 'plain') {
                  this.allTags[index].effect = 'dark';
                } else {
                  this.allTags[index].effect = 'plain';
                }
                this.allTags = newData;
              } else if (type === 'appTags') {
                const effect = this.appTags[index].effect;
                const newData = [...this.appTags];
                if (effect === 'plain') {
                  newData[index].effect = 'dark';
                } else {
                  newData[index].effect = 'plain';
                }
                this.appTags = newData;
              }
              const filterLang = this.allTags?.filter(t => t.effect === 'dark').map(v => v.label);
              GM_setValue('medusa_selected_langs', filterLang);
            },
            handleSelectionChange(val) {
              this.multipleSelection = val;
            },
            createExcel(autoComplete) {
              const selectedApps = this.appTags.filter(item => item.effect === 'dark').map(item => item.label);

              selectedApps.forEach(mapApp => {
                const workbook = new ExcelJS.Workbook();
                workbook.created = new Date();
                workbook.modified = new Date();
                worksheet = workbook.addWorksheet("Sheet0");
                worksheet.columns = [
                  { header: 'AppName', id: 'app' },
                  { header: 'Key', id: 'key' },
                  { header: 'English', id: 'en_US' },
                  { header: 'Simplified Chinese', id: 'zh_CN' },
                  { header: 'Thai', id: 'th_TH' },
                  { header: 'Vietnamese', id: 'vi_VN' },
                  { header: 'Indonesian', id: 'id_ID' },
                  { header: 'Malay', id: 'ms_MY' },
                  { header: 'singapore english', id: 'en_SG' },
                  { header: 'Thai English', id: 'en_TH' },
                  { header: 'Philippines English', id: 'en_PH' },
                  { header: 'Malaysia English', id: 'en_MY' },
                  { header: 'Vietnamese English', id: 'en_VN' },
                  { header: 'Indonesian English', id: 'en_ID' }
                ];
                let index = 2;
                let completeNum = 0;
                if (autoComplete) console.group('Medusa Plugin Auto Complete Translations');
                this.multipleSelection.forEach(({ app, key: medusaKey, translatedObj }) => {
                  if (app != mapApp) return;
                  const row = worksheet.getRow(index);
                  if (autoComplete && translatedObj.en_US) {
                    const key = translatedObj.en_US.replace(/\s/g, '');
                    if (translationLibrary && translationLibrary[key]) {
                      allLangs.forEach(lang => {
                        if (!translatedObj[lang] && translationLibrary[key][lang]) {
                          translatedObj[lang] = translationLibrary[key][lang];
                          this.autoCompleteNum ++;
                          completeNum ++;
                          console.log(`${this.autoCompleteNum}: ${app} ${medusaKey} ${lang} ${translationLibrary[key][lang]}`);
                        }
                      });
                    }
                  }
                  row.values = [
                    app,
                    medusaKey,
                    translatedObj.en_US,
                    translatedObj.zh_CN,
                    translatedObj.th_TH,
                    translatedObj.vi_VN,
                    translatedObj.id_ID,
                    translatedObj.ms_MY,
                    translatedObj.en_SG,
                    translatedObj.en_TH,
                    translatedObj.en_PH,
                    translatedObj.en_MY,
                    translatedObj.en_VN,
                    translatedObj.en_ID
                  ]
                  index ++;
                });
                if (autoComplete) console.groupEnd();
                if (index === 2) return;
                workbook.xlsx.writeBuffer().then(buffer => {
                  saveAs(new Blob([buffer], {
                    type: 'application/octet-stream'
                  }), `${mapApp}-excel.xlsx`);
                }).finally(() => {
                  if (autoComplete) {
                    this.completeAExportLoading = false;
                    tpmMds.reportUsage({ spmd: 'complete_and_export_selected_done', data: {
                      autoCompleteNum: completeNum
                    }});
                  } else {
                    this.exportLoading = false;
                  }
                });
              });
            },
            exportSelected() {
              tpmMds.reportUsage({ spmd: 'export_selected' });
              this.exportLoading = true;

              if (loadExcelCdnResource) {
                this.createExcel();
                return;
              }
              Promise.all([
                tpmMds.loadScript('https://dev.g.alicdn.com/lazada/medusa-cdnjs/0.0.1/babel-polyfill_6.26.0_polifill.js'),
                tpmMds.loadScript('https://dev.g.alicdn.com/lazada/medusa-cdnjs/0.0.1/exceljs_4.3.0_exceljs.min.js'),
                tpmMds.loadScript('https://dev.g.alicdn.com/lazada/medusa-cdnjs/0.0.1/file-saver_2.0.5_fileSaver.min.js'),
              ]).then(() => {
                loadExcelCdnResource = true;
                this.createExcel();
              }).catch(error => {
                console.error(error);
              });
            },
            completeAExportSelected() {
              tpmMds.reportUsage({ spmd: 'complete_and_export_selected' });
              this.completeAExportLoading = true;

              if (loadExcelCdnResource) {
                this.createExcel(true);
                return;
              }
              Promise.all([
                tpmMds.loadScript('https://dev.g.alicdn.com/lazada/medusa-cdnjs/0.0.1/babel-polyfill_6.26.0_polifill.js'),
                tpmMds.loadScript('https://dev.g.alicdn.com/lazada/medusa-cdnjs/0.0.1/exceljs_4.3.0_exceljs.min.js'),
                tpmMds.loadScript('https://dev.g.alicdn.com/lazada/medusa-cdnjs/0.0.1/file-saver_2.0.5_fileSaver.min.js'),
              ]).then(() => {
                loadExcelCdnResource = true;
                this.createExcel(true);
              }).catch(error => {
                console.error(error);
              });
            },
            handleUrl(row) {
              tpmMds.openEditPage(row.app, row.key, false);
            }
          },
          template: `
          <div @mouseMove="reRender">
            <div style="display:none;">keysNumber:{{keysNumber}}</div>
            <el-button style="position: absolute; right: -10px; top: -10px; z-index: 100;" type="danger" @click="closePanel" icon="el-icon-close" circle></el-button>
            <table>
              <tbody>
                <tr>
                  <td><span style="white-space: nowrap;">Not Translate: </span></td>
                  <td>
                    <el-tag
                      v-for="(item, index) in allTags"
                      :key="item.label"
                      :effect="item.effect"
                      @click="toggleTag(index, 'allTags')"
                      style="margin-left:5px;margin-bottom:5px;cursor:pointer;"
                    >
                      {{ item.label }}
                    </el-tag>
                  </td>
                </tr>
                <tr>
                  <td><span style="white-space: nowrap;">Medusa App: </span></td>
                  <td>
                    <el-tag
                      v-for="(item, index) in appTags"
                      :key="item.label"
                      :effect="item.effect"
                      @click="toggleTag(index, 'appTags')"
                      style="margin-left:5px;margin-bottom:5px;cursor:pointer;"
                    >
                      {{ item.label }}
                    </el-tag>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="!loading">
              <div v-if="error"  style="width:1050px;height:550px;text-align:center;line-height:200px;" ><div>Fetch data error.（pls contact @擎空 if it always show this error）</div> <span @click="loadData">Try Again</span></div>
              <el-table
                ref="multipleTable"
                :data="list"
                :height="500"
                style="width: 100%;"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="Medusa App" prop="app" width="200">
                  <template #default="scope">
                    <a target="_blank" :href="'https://mds-portal.alibaba-inc.com/applications?groupPage=1&listPage=1&buId=&activeKey=all&listType=app&searchKey=' + scope.row.app">{{scope.row.app}}</a>
                  </template>
                </el-table-column>
                <el-table-column label="Medusa Key" prop="key" width="350">
                  <template #default="scope">
                    <a href="javascript:;" @click="handleUrl(scope.row)" >{{scope.row.key}}</a>
                  </template>
                </el-table-column>
                <el-table-column label="English Value" prop="defaultMessage" width="300">
                  <template #default="scope">
                    <span :title="scope.row.translatedDetail" style="overflow:hidden;text-overflow:text-overflow;white-space:nowrap;cursor:pointer;">{{scope.row.defaultMessage}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Score" prop="scoreNum" width="100">
                  <template #default="scope">
                    <span :title="scope.row.scoreTip" :style="scope.row.scoreColor">{{ scope.row.scoreNum }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Operations" prop="app" width="120">
                  <template #default="scope">
                    <el-button @click="handleUrl(scope.row)" icon="el-icon-edit-outline" type="primary" plain size="small">Edit</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div v-if="loading"  style="width:1050px;height:550px;text-align:center;line-height:200px;" >loading...</div>
            <el-row :gutter="20" style="padding-top:10px;">
              <el-col :span="16">
                <span style="line-height: 32px;margin-right:10px;">Total:{{list.length}}</span>
                <el-button :disabled="!multipleSelection.length" :loading="exportLoading" @click="exportSelected" icon="el-icon-download" type="primary" plain size="small" style="margin-right:10px;">Export</el-button>
                <el-button :disabled="!multipleSelection.length" :loading="completeAExportLoading" @click="completeAExportSelected" icon="el-icon-download" type="primary" plain size="small" style="margin-right:10px;">Auto Complete ({{autoCompleteNum}}) & Export</el-button>
                <span style="line-height: 32px;">Selected:{{multipleSelection.length}}</span>
              </el-col>
              <el-col :span="8">
                <el-link :underline="false" style="display: inline-block; line-height: 32px;float:right;" href="https://dip.alibaba-inc.com/api/v2/services/schema/mock/219022?0" target="_blank" type="primary" >Translation Library</el-link>
              </el-col>
            </el-row>
          </div>
          `
        });
        app.mount('#medusaQualityPanel');
      }
    }
    if (loadCdnResource) onSuccess();
  };

  const togglePanel = () => {
    const qualityPanelContainer = document.querySelector('#medusaQualityPanel');
    if (!qualityPanelContainer) return;
    if (qualityPanelContainer.style.display == 'none') {
      qualityPanel = tpmMds.setStyle(qualityPanel, {
        display: 'block'
      });
    } else {
      qualityPanel = tpmMds.setStyle(qualityPanel, {
        display: 'none'
      });
    }
  }

  const setQualityDetail = () => {
    const qualityToolDomId = 'medusa-page-quality-tools';
    let toolsContainer = document.querySelector(`#${qualityToolDomId}`);
    const totalQuality = calculateTotalQuality();
    if (!toolsContainer) {
      toolsContainer = document.createElement('div');
      toolsContainer.setAttribute('id', qualityToolDomId);

      toolsContainer = tpmMds.setStyle(toolsContainer, {
        position: 'fixed',
        right: '80px',
        bottom: '25px',
        borderRadius: '50%',
        width: '90px',
        height: '90px',
        paddingTop: '15px',
        zIndex: 1002,
        boxShadow: 'rgb(0 0 0 / 38%) 0px 3px 16px 1px',
        cursor: 'pointer',
        textAlign: 'center',
      });
      document.body.appendChild(toolsContainer);
      toolsContainer.addEventListener('click', e  => {
        togglePanel();
      });
    }
    toolsContainer.style.backgroundColor = qualityColorMap[totalQuality.status];
    toolsContainer.style.color = qualityFontColorMap[totalQuality.status];
    toolsContainer.innerHTML = `
      <div style="line-height: 40px; font-weight: 800; font-size: 30px;">${totalQuality.score}</div>
      <div style="text-shadow: 2px 0 #999; font-weight: 700;transform: scale(0.9); font-size: 12px; ">Mcms Score</div>
    `;
    toolsContainer.setAttribute('title', `1. Calculate whole page keys translation rate except layout.
2. You can get 80 score after the necessary languages (${necessaryLangs.join(',')}) are translated.
3. You can get 100 score after the necessary languages and local english (${localEnglish.join(',')}) are translated.

Note: The dynamic caculated translation rate of necessary languages is ${totalQuality.translationRate}.`);

    addPanel();
  };

  const getAppTags = () => {
    let appKeyMaps = {};
    Object.keys(qualityRes).map(key => {
      const app = qualityRes[key].app;
      if (!appKeyMaps[app]) appKeyMaps[app] = true;
    });
    return Object.keys(appKeyMaps);
  };

  const checkTranslateQuality = () => {
    if (getMode() === 'DEV') return;

    let appKeys = {};
    Object.keys(qualityRes).map(key => {
      const item = qualityRes[key];
      if (item.checked) return;
      qualityRes[key].checked = true;
      if (!appKeys[item.app]) {
        appKeys[item.app] = [];
      }
      appKeys[item.app].push(item.id);
    });

    if (Object.keys(appKeys).length === 0) return;

    Object.keys(appKeys).map(appName => {
      tpmMds.requestData({
        url: 'https://mds-portal.alibaba-inc.com/api/openapi/getAppKeyResourcesByLanguage',
        method: 'POST',
        data: {
          appName,
          keyResourceDTOList: appKeys[appName].map(key => ({ key, languages: allLangs}))
        },
        headers: {
          authName: 'lzdseller',
          token: '323d85e73c4a40238d62cfd26452c39e'
        }
      }).then(res => {
        if (!res.resultCode || !res.resultCode.success) {
          throw res;
        }
        // 计算质量分
        for (let key in res.target) {
          const value = res.target[key] || {};
          qualityRes[key] = calculateQuality(qualityRes[key], value);
        }
        setQualityColor(appName);
        setQualityDetail();
      }).catch(err => {
        console.error(err);
      });
    });
  };

  let hasExtractedPageConfig = false;
  const extractPageConfig = () => {
    if (hasExtractedPageConfig) return;
    const pageConfigs = unsafeWindow.lzdCommonData?.locale;
    if (pageConfigs) {
      hasExtractedPageConfig = true;
      for (let id in pageConfigs) {
        const pdkv = pageConfigs[id];
        const matched = pdkv.match(i18nRgx);

        if (matched) {
          qualityRes[matched[2]] = {
            id: matched[2],
            app: matched[3],
            text: pdkv,
            defaultMessage: matched[4] || ''
          }
        }
      }
    }
  };

  const extractDocument = el => {
    if (!el) return;
    const childNodes = el.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      const textNode = childNodes[i];
      const typeAttribute = (textNode.getAttribute && textNode.getAttribute('type')) || 'text';
      const isTextInput = textNode.nodeName === 'INPUT' && ['text', 'number'].includes(typeAttribute);

      if (textNode.nodeType === 1 && !isTextInput) {
        extractDocument(textNode);
      } else if ((textNode.nodeType === 3 && textNode.nodeName === '#text') || isTextInput ) {
        const nodeValue = (isTextInput ? (textNode.getAttribute('placeholder') || ''): textNode.nodeValue).trim();
        if (!['SCRIPT', 'STYLE'].includes(textNode.parentNode.nodeName) && nodeValue) {
          // ##@@@page.index.promotions.products##lazada-seller-center@@@##Products
          const pnode = textNode.parentNode;
          if (!isAddedTipForNode(pnode, nodeValue)) {
            let medusaObj;
            const matched = nodeValue.match(i18nRgx);
            if (matched) {
              // console.log(matched[1], matched[2], matched[3]);
              let key = matched[2];
              medusaObj = qualityRes[key];
              if (!medusaObj) {
                medusaObj = {
                  id: key,
                  app: matched[3],
                  text: nodeValue,
                  defaultMessage: matched[4] || '',
                  preText: matched[1],
                };

                // 兼容导航栏错误的伪语言
                const atIdx = key.indexOf('@');
                if (medusaObj.app === 'null' && atIdx !== -1) medusaObj.app = key.substr(0, atIdx);
                qualityRes[key] = medusaObj;

                // 兼容商品发布页的错误伪语言
                if (unsafeWindow.location.href.indexOf('/apps/product/publish') > 0 && ['null', 'data.label', 'data.info_top', 'data.variation', 'data.name', 'data.options', 'data.input_placeholder', 'data.maximumImage', 'data.addImage'].includes(medusaObj.app)) medusaObj.app = 'gpf-i18n';
              }
            }

            if (medusaObj) {
              const showText = `${medusaObj.preText || ''}${medusaObj.defaultMessage}`;
              if (isTextInput) {
                textNode.setAttribute('placeholder', showText);
              } else {
                textNode.nodeValue = showText;
              }
              addTipForNode(pnode, medusaObj);
            }
          }
        }
      }
    }
  }

  const setBodyClsForMode = () => {
    const currentMode = getMode();
    const qaModeCls = 'qa-mode';
    const devModeCls = 'dev-mode';

    document.body.classList.remove(qaModeCls);
    document.body.classList.remove(devModeCls);
    document.body.classList.add(currentMode === 'DEV'? devModeCls: qaModeCls );
  };

  const addGlobalStyle = () => {
    // 设置 tip 全局样式
    setBodyClsForMode();
    const style = document.createElement('style');
    style.innerHTML = `
      .tamplemonkey-medusa-tip {display:block;width:20px;height:20px;overflow: hidden;background: #fff;box-shadow: 0px 0px 10px #888888;padding: 2px;box-sizing: content-box;border-radius: 4px;}
      .tamplemonkey-medusa-tip:hover {width:64px;display:flex;align-items: center;}
      .tamplemonkey-medusa-tip span.tp-medusa-qa-icon,
      .tamplemonkey-medusa-tip span.tp-medusa-js-icon,
      .tamplemonkey-medusa-tip span.tp-medusa-key-icon {position:relative !important;color:#fff;cursor:pointer; display:block;margin-bottom:2px;margin-right:2px;line-height:20px;height:20px;width:20px;background:#660099;border-radius:10px;font-size:10px;color:#fff !important;text-align:center;}
      .tamplemonkey-medusa-tip span.tp-medusa-qa-icon {display: none; background: #ccc; color:#333 !important;}
      .tamplemonkey-medusa-tip.bad span.tp-medusa-qa-icon {background:${qualityColorMap[GRADE_BAD]}; color:#fff !important;}
      .tamplemonkey-medusa-tip.good span.tp-medusa-qa-icon {background:${qualityColorMap[GRADE_GOOD]};}
      .tamplemonkey-medusa-tip.excellent span.tp-medusa-qa-icon {background:${qualityColorMap[GRADE_EXCELLENT]};}
      .tamplemonkey-medusa-tip img.tp-medusa-key-edit, .tamplemonkey-medusa-tip img.tp-medusa-key-link{ position:relative !important;cursor:pointer;width:20px !important;height:20px !important;display:flex !important;align-items: center;}
      .tamplemonkey-medusa-tip a, .tamplemonkey-medusa-tip span {font-size: 12px;font-weight:300;}
      body.qa-mode .tamplemonkey-medusa-tip:hover { width: 42px; }
      body.qa-mode .tamplemonkey-medusa-tip span.tp-medusa-qa-icon { display: block;}
      body.qa-mode .tamplemonkey-medusa-tip span.tp-medusa-js-icon,
      body.qa-mode .tamplemonkey-medusa-tip span.tp-medusa-key-icon {display: none;}
    `;
    document.body.appendChild(style);
  }

  const clearLayoutCache = () => {
    return new Promise(resolve => {
      const DB = window.indexedDB || window['mozIndexedDB'] || window['webkitIndexedDB'] || window['msIndexedDB'];
      const request = DB.open('indexdatabaselayoutcache', 1);
      const transKey = 'sellercenter.lazada.lazada.seller.layout.left.menu';
      request.onsuccess = res => {
        const db = res.target.result;
        let store
        try {
          store = db.transaction([transKey], 'readwrite').objectStore(transKey);
        } catch (e) {}
        store && store.clear();
        resolve();
      };
    });
  }

  const switchLang = (language, domain) => {
    clearLayoutCache().then(() => {
      if (tpmMds.getCookie('_lang')) {
        tpmMds.setCookie('_lang', language, domain);
        unsafeWindow.location.reload();
      } else {
        // SG 预发 _lang cookie 是 http-only 的，掉用接口切换语言
        tpmMds.requestData({
          url: '/apps/language/switch',
          data: { language }
        }).then(() => {
          unsafeWindow.location.reload();
        }).catch(e => console.error);
      }
    });
  }

  const registerMenus = (host) => {
    const lang = tpmMds.getCookie('_lang');
    const domain = host.replace(/^sellercenter(-staging)?/, '');
    const isShowingKeys = lang === 'pd_KV';
    if (!isShowingKeys) {
      GM_registerMenuCommand("Show Page Medusa Keys", () => {
        switchLang('pd_KV', domain);
      });
      return;
    }

    GM_registerMenuCommand("Hide Page Medusa Keys", () => {
      switchLang('en_US', domain);
    });

    GM_registerMenuCommand("Switch to DEV/QA Mode", () => {
      const targetMode = switchMode();
      setBodyClsForMode();
      tpmMds.globalToast(`Switch to ${targetMode} mode successfully`);
    });
  }


  const registerEventListener = () => {
    document.body.addEventListener('click', (e) => {
      const cls = typeof e.target.className === 'string' ? e.target.className || '' : '';
      if (cls.indexOf('tp-medusa-key-edit') > -1) {
        const pnode = e.target.parentNode;
        tpmMds.openEditPage(pnode.getAttribute('data-app'), pnode.getAttribute('data-id'), true);
        // const url = e.target.getAttribute('data-href');
        // GM_openInTab(url);
        e.stopPropagation();
        e.preventDefault();
        return;
      }

      let type;
      if (cls.indexOf('tp-medusa-js-icon') > -1) {
        type = 'js';
      }
      if (cls.indexOf('tp-medusa-key-icon') > -1) {
        type = 'key';
      }
      if (cls.indexOf('tp-medusa-qa-icon') > -1) {
        type = 'qa';
      }

      if (['js', 'key'].includes(type)) {
        const pnode = e.target.parentNode;
        tpmMds.copyAction({
          english: decodeURIComponent(pnode.getAttribute('data-dm')),
          app: pnode.getAttribute('data-app'),
          key: pnode.getAttribute('data-id'),
        }, type, true);
      }

      if (type) {
        e.stopPropagation();
        e.preventDefault();
      }
    });



    // 监听 dom 的变化和页面滚动，重新索引页面元素
    const root = document.body;
    const throttleExtractAndCheck = tpmMds.throttle(() => {
      extractPageConfig();
      extractDocument(root);
      checkTranslateQuality();
    }, 500);
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach(function(item){
        if (item.type !== 'childList') {
          return;
        }
        if (['svg', 'g'].includes(item.target.nodeName) ) {
          return;
        }
        if (item.target.classList && item.target.classList.contains('tamplemonkey-medusa-tip')) {
          return;
        }
        throttleExtractAndCheck();
      });
    });
    // 开始观察已配置突变的目标节点
    observer.observe(root, { attributes: false, childList: true, subtree: true });
    document.onscroll = throttleExtractAndCheck;
  }


  window.lzdSellerMedusaKeysPageKeys = function() {
    const host = unsafeWindow.location.host;
    // console.log(`------ current lang: ${lang}`);
    // if (host.indexOf('sellercenter-staging') !== 0) {
    //   return;
    // }

    addGlobalStyle();
    registerMenus(host);
    registerEventListener();

    Promise.all([
      tpmMds.loadCss('https://unpkg.com/element-plus@1.0.2-beta.36/lib/theme-chalk/index.css'),
      tpmMds.loadScript('https://cdn.staticfile.org/vue/3.0.5/vue.global.js'),
      tpmMds.loadScript('https://unpkg.com/element-plus@1.0.2-beta.36/lib/index.full.js')
    ]).then(() => {
      loadCdnResource = true;
      onSuccess && onSuccess();
    }).catch(error => {
      console.error(error);
    });

    tpmMds.requestData({
      url: 'https://dip.alibaba-inc.com/api/v2/services/schema/mock/219023?0'
    }).then(res => {
      translationLibrary = res.library || {};
    });
  }
}());
