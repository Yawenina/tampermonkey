// ==UserScript==
// @name         LzdSeller Medusa Keys
// @namespace    lazada
// @version      1.1.0
// @description  try to take over the world!
// @author       Zernmal
// @include      https://*.lazada.*/*
// @include      https://*.lazada.*.*/*
// @match        https://*.lazada-seller.cn/*
// @updateURL    https://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/lzdseller-medusa-keys/index.user.js
// @downloadURL  https://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/lzdseller-medusa-keys/index.user.js
// @grant        unsafeWindow
// @grant        GM_log
// @grant        GM_info
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// @connect      *
// ==/UserScript==


// 弹框面板
let infoPanel = null;
let app = null;


//////////////////////////////////////////// 公共方法
const reportUsage = ({ spmd = 'open', data = {} } = {}) => {
  if (!unsafeWindow.goldlog || !unsafeWindow.goldlog.record) {
    return setTimeout(() => {
      reportUsage({ spmd, data });
    }, 1000);
  }

  const params = [`version=${GM_info.script.version}`];
  const spmAb = unsafeWindow.goldlog && unsafeWindow.goldlog.spm_ab || [];
  if (spmAb.length) {
    params.push(`spm=${spmAb.join('.')}.tpmedusa.${spmd}`);
  }

  Object.keys(data).forEach(key => {
    params.push(`${key}=${data[key]}`);
  });
  unsafeWindow.goldlog.record('/lzdseller.tampermoneky.medusa', 'CLK', params.join('&'));
}


function setStyle(el, style) {
  if (Object.prototype.toString.call(style) === '[object Object]') {
    Object.keys(style).forEach(ele => {
      el.style[ele] = style[ele];
    })
    return el;
  }
  return el;
}

function setArribute(el, atrr) {
  if (Object.prototype.toString.call(atrr) === '[object Object]') {
    Object.keys(atrr).forEach(ele => {
      el.setAttribute(ele, atrr[ele]);
    })
    return el;
  }
  return el;
}


function requestData({ url, data, method = 'GET' }) {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      url,
      method,
      data: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      onload: (xhr) => resolve(JSON.parse(xhr.responseText)),
      onerror: reject
    });
  })
}

function loadScript(url) {
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.defer = true;
    script.onload = function () {
      resolve();
    }
    document.body.appendChild(script);
  });
}

function loadCss(url) {
  return new Promise(resolve => {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    link.onload = () => {
      resolve();
    }
    document.getElementsByTagName('head')[0].appendChild(link);
  });
}




//////////////////////////////////////////// 页面 DOM 处理
const removePanel = () => {
  if (!!app) {
    app.unmount();
    apps = null;
  }
  if (!!infoPanel) {
    document.body.removeChild(infoPanel);
    infoPanel = null;
  }
}

const createInfoPanel = () => {
  infoPanel = document.createElement('div');
  infoPanel.id = 'infoPanel';
  infoPanel.innerHTML = `<top-menu></top-menu>`;
  infoPanel = setStyle(infoPanel, {
    position: 'fixed',
    padding: '16px',
    left: '50%',
    top: '50%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    zIndex: 1002,
    transform: 'translateX(-50%) translateY(-50%)',
    boxShadow: '0px 0px 10px black'
  });
  document.body.appendChild(infoPanel);
}



const addPanel = () => {
  createInfoPanel();
  createComponent();
}

const copyAction = ({ english, key, app}, type = 'js', byPage = false) => {
  const data = type === 'js' ?
    `i18n.formatMessage({
id: '${key}',
defaultMessage: '${english}',
app: '${app}'
})` : `${app}@${key}`;
  GM_setClipboard(data, { type: 'text', mimetype: 'text/plain' });
  ElementPlus.ElMessage.success({ message: 'Copy Success', type: 'success' });
  reportUsage({ spmd: byPage ? `copy_single_page_${type}`: `copy_single_${type}`, data: { 'data-more': key } });
};



/////////////////////////////////////////// vue组件
function createComponent() {
  app = Vue.createApp({});
  app.use(ElementPlus);
  app.component('top-menu', {
    data() {
      return {
        actived: '',
        input: '',
        groups: [],
        multipleSelection: [],
        loading: false,
        error: false
      }
    },
    computed: {
      list: function () {
        if (!this.actived) {
          return [];
        }
        const idx = parseInt(this.actived.replace('g', '')) || 0;
        const list = this.groups[idx].list || [];

        if (!this.input) {
          return list;
        }

        return list.filter(item => {
          const reg = new RegExp(this.input, 'i');
          const matched = item.english.match(reg);
          return !!matched;
        });
      }
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData() {
        return requestData({
          url: 'https://dip.alibaba-inc.com/api/v2/services/schema/mock/212106'
        }).then(res => {
          this.loading = false;
          this.groups = res;
          this.actived = 'g0';
        }).catch(err => {
          console.error(err);
          this.loading = false;
          this.error = true;
          return '';
        });
      },
      handleSelect(key) {
        this.actived = key;
      },
      closePanel() {
        removePanel();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      copySelected() {
        const data = this.multipleSelection.map((item, idx) => `
export const key${idx} = i18n.formatMessage({
  id: '${item.key}',
  defaultMessage: '${item.english}',
  app: '${item.app}'
});
`);
        data.unshift(`import * as i18n from '@alife/lazada-i18n';

        `);
        GM_setClipboard(data.join(''), { type: 'text', mimetype: 'text/plain' });
        ElementPlus.ElMessage.success({ message: 'Copy Success', type: 'success' });
        reportUsage({ spmd: 'copy_selected' });

      },
//       handleCopy(row, type) {
//         const data = type === 'js' ?
//           `i18n.formatMessage({
//   id: '${row.key}',
//   defaultMessage: '${row.english}',
//   app: '${row.app}'
// })` : `${row.app}@${row.key}`;
//         GM_setClipboard(data, { type: 'text', mimetype: 'text/plain' });
//         ElementPlus.ElMessage.success({ message: 'Copy Success', type: 'success' });
//         reportUsage({ spmd: `copy_single_${type}`, data: { 'data-more': row.key } });
//       },
      handleCopy() {
        copyAction(row, type, false);
      },

      reportEdit() {
        reportUsage({ spmd: 'edit' });
      }
    },
    template: `
      <el-button style="position: absolute; right: -10px; top: -10px; z-index: 100;" type="danger" @click="closePanel" icon="el-icon-close" circle></el-button>
      <el-row :gutter="20" >
        <el-col :span="18">
          <el-menu :default-active="actived" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item v-for="(item, idx) in groups" :key="'g' + idx"  :index="'g' + idx" >{{item.groupName}}</el-menu-item>
        </el-menu>
        </el-col>
        <el-col :span="6" style="align-items: flex-end; display: flex;">
        <el-input placeholder="English Value Filter" v-model="input" clearable></el-input>
        </el-col>
      </el-row>

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
              <a target="_blank" :href="'https://mds-portal.alibaba-inc.com/applications/detail?currentPageInfo=' + encodeURIComponent(JSON.stringify({searchValue: scope.row.key})) + '&navItemType=keyList&appName='+ scope.row.app">{{scope.row.key}}</a>
            </template>
          </el-table-column>
          <el-table-column label="English Value" prop="english" width="300"></el-table-column>
          <el-table-column label="Operations" prop="app" width="220">
            <template #default="scope">
              <el-button @click="handleCopy(scope.row, 'js')" icon="el-icon-document-copy" type="primary" plain size="small">Copy JS</el-button>
              <el-button @click="handleCopy(scope.row, 'key')"  plain size="small">Copy Key</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div v-if="loading"  style="width:1050px;height:550px;text-align:center;line-height:200px;" >loading...</div>
      <el-row :gutter="20" style="padding-top:10px;">
        <el-col :span="16">
          <el-button :disabled="!multipleSelection.length" @click="copySelected" icon="el-icon-document-copy" type="primary" plain size="small">Copy Selected As JS</el-button>
        </el-col>
        <el-col :span="8" style="text-align: right;">
        <el-tooltip placement="top-start" :append-to-body="false" effect="dark">
          <template #content>
            <img style="width: 500px;" src="https://img.alicdn.com/imgextra/i2/O1CN01lsgaxy1mCwwgMbt1W_!!6000000004919-2-tps-1830-940.png" alt="" />
          </template>
           <el-link icon="el-icon-edit-outline" @click="reportEdit" :underline="false" style="display: inline-block; line-height: 32px" href="http://dip.alibaba-inc.com/edit?schemaId=212106" target="_blank" type="primary" >Go to edit</el-link>
        </el-tooltip>
        </el-col>
      </el-row>
    `
  })
  app.mount('#infoPanel');
}

const throttle = (method, delay) => {
  let timer = null;
  return () => {
    const context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
        method.apply(context,args);
    }, delay);
  }
}

const getCookie = (c_name) => {
  if (!document.cookie.length) {
    return;
  }
  let c_start = document.cookie.indexOf(c_name + '=');
  if (c_start != -1) {
    c_start = c_start + c_name.length + 1;
    c_end = document.cookie.indexOf(';', c_start);
    if (c_end == -1) c_end = document.cookie.length;
    return unescape(document.cookie.substring(c_start, c_end));
  }
  return '';
}

const textKeyMap = {};
const extractDocument = el => {
  const childNodes = el.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    const textNode = childNodes[i];
    if (textNode.nodeType === 1) {
      extractDocument(textNode);
    } else if (textNode.nodeType === 3 && textNode.nodeName === '#text') {
      if (['SCRIPT', 'STYLE'].includes(textNode.parentNode.nodeName) || !textNode.nodeValue ) {
        return;
      }

      // ##@@@page.index.promotions.products##lazada-seller-center@@@##Products
      const i18nRgx = /^##@@@(.+)##(.+)@@@##(.+)/;
      const nodeValue = textNode.nodeValue.trim();
      let medusaObj = textKeyMap[nodeValue];
      if (!medusaObj) {
        const matched = nodeValue.match(i18nRgx);
        if (matched) {
          // console.log(matched[1], matched[2], matched[3]);
          medusaObj = {
            id: matched[1],
            app: matched[2],
            defaultMessage: matched[3]
          };
          const atIdx = medusaObj.id.indexOf('@');
          if (medusaObj.app === 'null' && atIdx !== -1) {
            medusaObj.app = medusaObj.id.substr(0, atIdx);
            medusaObj.id = medusaObj.id.substr(atIdx + 1);
          }
          textKeyMap[nodeValue] = medusaObj;
        }
      }

      if (medusaObj) {
        textNode.nodeValue = medusaObj.defaultMessage;
        const pnode = textNode.parentNode;
        const tipSetted = pnode.getAttribute('data-tipSetted');
        const style = [ 'position:absolute', 'z-index: 1100', `top:${pnode.offsetTop - 24}px`, `left:${pnode.offsetLeft}px` ];
        if (!tipSetted) {
          const domId = `${medusaObj.id}${Math.random(Math.random().toString().substr(2, 5))}`;
          const div = document.createElement('div');

          div.setAttribute('id', domId);
          div.setAttribute('style', style.join(';'));
          div.innerHTML = `
            <div class="tamplemonkey-medusa-tip" data-id="${medusaObj.id}" data-app="${medusaObj.app}" data-dm="${encodeURIComponent(medusaObj.defaultMessage)}">
              <img class="icon" src="https://img.alicdn.com/imgextra/i3/O1CN01aWoZVt1PtmpSOSkrT_!!6000000001899-2-tps-64-64.png"/>
              <a style="display:none;" href="https://mds-portal.alibaba-inc.com/applications?groupPage=1&listPage=1&buId=&activeKey=all&listType=app&searchKey=${medusaObj.app}">${medusaObj.app}</a>
              <span style="display:none;">@</span>
              <span class="icon tp-medusa-js-icon">js</span>
              <span class="icon tp-medusa-key-icon">key</span>
              <a target="_blank" href="https://mds-portal.alibaba-inc.com/applications/detail?currentPageInfo=${encodeURIComponent(JSON.stringify({searchValue: medusaObj.id}))}&navItemType=keyList&appName=${medusaObj.app}">${medusaObj.id}</a>
            </div>
          `;
          pnode.setAttribute('data-tipSetted', domId);
          document.body.prepend(div);
        } else {
          // 重设位置
          const div = document.getElementById(tipSetted);
          div.setAttribute('style', style.join(';'));
        }
      }
    }
  }
}


const getPageWordsKey = () => {
  const lang = getCookie('_lang');
  if (lang !== 'pd_KV') {
    return;
  }

  // 设置 tip 全局样式
  const style = document.createElement('style');
  style.innerHTML = `
    .tamplemonkey-medusa-tip {height:24px;width: 24px; overflow: hidden; display: flex;background: #fff;box-shadow: 0px 0px 10px #888888;padding: 3px;box-sizing: content-box;border-radius: 4px;}
    .tamplemonkey-medusa-tip:hover {width: auto; overflow: hidden;}
    .tamplemonkey-medusa-tip .icon {width:24px;height:24px; cursor: pointer; margin-right: 5px;}
    .tamplemonkey-medusa-tip .tp-medusa-js-icon, .tamplemonkey-medusa-tip .tp-medusa-key-icon {background:#660099;border-radius:12px;font-size:12px;color:#fff;text-align:center;line-height:24px;}
    .tamplemonkey-medusa-tip a, .tamplemonkey-medusa-tip span {font-size: 14px;}
  `;
  document.body.appendChild(style);


  document.body.addEventListener('click', (e) => {
    const cls = e.target.className || '';
    let type;
    if (cls.indexOf('tp-medusa-js-icon') > -1) {
      type = 'js';
    }
    if (cls.indexOf('tp-medusa-key-icon') > -1) {
      type = 'key';
    }
    if (type) {
      const pnode = e.target.parentNode;
      copyAction({
        english: decodeURIComponent(pnode.getAttribute('data-dm')),
        app: pnode.getAttribute('data-app'),
        key: pnode.getAttribute('data-id'),
      }, type, true);
    }
  });


  // 创建一个链接到回调函数的观察者实例
  const root = document.getElementById('root');
  const runExtract = () => extractDocument(root);
  const longThrottleExtract = throttle(runExtract, 1000);
  const shortThrottleExtract = throttle(runExtract, 500);
  if (root) {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach(function(item){
        if (item.type !== 'childList') {
          return;
        }
        if (['svg', 'g'].includes(item.target.nodeName) ) {
          return;
        }
        longThrottleExtract();
      });
    });
    // 开始观察已配置突变的目标节点
    observer.observe(root, { attributes: false, childList: true, subtree: true });
  }

  document.onscroll = shortThrottleExtract;
}

// main function
(function () {
  console.log(`[Lazada Seller Medusa Keys] version ${GM_info.script.version}`);

  // GM_registerMenuCommand("Get Page Words Key", () => {

  // });

  getPageWordsKey();


  Promise.all([
    loadCss('https://unpkg.com/element-plus@1.0.2-beta.36/lib/theme-chalk/index.css'),
    loadScript('https://cdn.staticfile.org/vue/3.0.5/vue.global.js'),
    loadScript('https://unpkg.com/element-plus@1.0.2-beta.36/lib/index.full.js')
  ]).then(() => {
    reportUsage({ spmd: 'load' });
    GM_registerMenuCommand("Open Medusa Popup", () => {
      if (!!infoPanel) {
        removePanel();
      } else {
        addPanel();
        reportUsage({ spmd: 'open' });
      }
    });
  }).catch(error => {
    console.error(error);
  });
})();
