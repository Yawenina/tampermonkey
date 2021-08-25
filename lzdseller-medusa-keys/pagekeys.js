// 放在一个闭包里面避免全局变量冲突
(function() {
  const textKeyMap = {};
  const necessaryLangs = ['zh_CN', 'en_US', 'ms_MY', 'th_TH', 'vi_VN' ];
  const localEnglish = ['en_SG', 'en_MY', 'en_TH', 'en_VN', 'en_ID',  'en_PH'];
  const allLangs = [...necessaryLangs, ...localEnglish];

  const getMode = () => GM_getValue('medusa_extract_mode') || 'DEV';
  const switchMode = () => {
    const targetMode = getMode() === 'DEV'? 'QA': 'DEV';
    GM_setValue('medusa_extract_mode', targetMode);
    return targetMode;
  };


  const addTipForNode = (pnode, medusaObj) => {
    const div = document.createElement('div');
    const dmEncoded = encodeURIComponent(medusaObj.defaultMessage);
    div.setAttribute('class', 'tamplemonkey-medusa-tip-wrap');
    div.setAttribute('style', 'position:relative;z-index:100;width:0px;height:0px;display:inline;float:left;');
    div.innerHTML = `
      <div class="tamplemonkey-medusa-tip" data-id="${medusaObj.id}" data-app="${medusaObj.app}" data-dm="${dmEncoded}" >
        <span class="tp-medusa-qa-icon" title="Key: ${medusaObj.app}@${medusaObj.id}">QA</span>
        <span class="tp-medusa-js-icon" title="Copy JS: ${medusaObj.app}@${medusaObj.id}">js</span>
        <span class="tp-medusa-key-icon" title="Copy Key: ${medusaObj.app}@${medusaObj.id}">key</span>
        <img class="tp-medusa-key-edit" title="Edit Value: ${medusaObj.app}@${medusaObj.id}" data-href="https://mds-portal.alibaba-inc.com/applications/detail?currentPageInfo=${encodeURIComponent(JSON.stringify({searchValue: medusaObj.id}))}&navItemType=keyList&appName=${medusaObj.app}" src="https://img.alicdn.com/imgextra/i3/O1CN01kSOVbh1kviQdl7gxG_!!6000000004746-2-tps-64-64.png" />
      </div>
    `;
    pnode.setAttribute('data-tipdm', dmEncoded);
    pnode.prepend(div);
  }
  const isAddedTipForNode = (pnode, nodeValue) => pnode.getAttribute('data-tipdm') === encodeURIComponent(nodeValue);

  const calculateQuality = (obj = {}) => {
    const res = {
      score: '',
      translated: [],
      missed: []
    }

    for (const lang of necessaryLangs) {
      if (obj[lang]) {
        res.translated.push(lang);
      } else {
        res.score = res.score || 'bad';
        res.missed.push(lang);
      }
    }

    for (const lang of localEnglish) {
      if (obj[lang]) {
        res.translated.push(lang);
      } else {
        res.score = res.score || 'good';
        res.missed.push(lang);
      }
    }

    res.score = res.score || 'excellent';
    return res;
  };
  const setQualityColor = (app, keyRes) => {
    const nodes = document.querySelectorAll(`.tamplemonkey-medusa-tip[data-app=${app}]`);

    nodes.forEach(node => {
      const key = node.getAttribute('data-id');
      if (!keyRes[key]) {
        return;
      }
      const res = calculateQuality(keyRes[key]);
      node.classList.add(res.score);

      node.childNodes.forEach(child => {
        if (child.classList && child.classList.contains('tp-medusa-qa-icon')) {
          child.setAttribute('title', `Key: ${app}@${key}\r\nTranslated: ${res.translated.join(',')}\r\nMissed: ${res.missed.join(',')}`);
        }
      });
    });
  }

  const checkTranslateQuality = () => {
    const appKeys = {};

    if (getMode() === 'DEV') {
      return;
    }

    Object.keys(textKeyMap).map(key => {
      const item = textKeyMap[key];
      if (item.checked) {
        return;
      }
      textKeyMap[key].checked = true;
      if (!appKeys[item.app]) {
        appKeys[item.app] = [];
      }
      appKeys[item.app].push(item.id);
    });

    if (Object.keys(appKeys).length === 0) {
      return;
    }

    // Object.keys(appKeys).map(appName => {
    //   const target = {};
    //   appKeys[appName].forEach(key => {
    //     target[key] = {
    //       'zh_CN': '测试_中文',
    //       'en_US': 'test_us',
    //       'en_SG': 'test_sg'
    //     }
    //   });
    //   setQualityColor(appName, target);
    // });


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
        setQualityColor(appName, res.target);
      }).catch(err => {
        console.error(err);
      });
    });
  };

  const extractDocument = el => {
    if (!el) {
      return;
    }
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
          const i18nRgx = /^##@@@(.+)##(.+)@@@##(.+)?/;
          const pnode = textNode.parentNode;

          if (!isAddedTipForNode(pnode, nodeValue)) {
            let medusaObj = textKeyMap[nodeValue];
            if (!medusaObj) {
              const matched = nodeValue.match(i18nRgx);
              if (matched) {
                // console.log(matched[1], matched[2], matched[3]);
                medusaObj = {
                  id: matched[1],
                  app: matched[2],
                  defaultMessage: matched[3] || ''
                };

                // 兼容导航栏错误的伪语言
                const atIdx = medusaObj.id.indexOf('@');
                if (medusaObj.app === 'null' && atIdx !== -1) {
                  medusaObj.app = medusaObj.id.substr(0, atIdx);
                  // medusaObj.id = medusaObj.id.substr(atIdx + 1);
                }
                textKeyMap[nodeValue] = medusaObj;
              }
            }

            if (medusaObj) {
              if (isTextInput) {
                textNode.setAttribute('placeholder', medusaObj.defaultMessage);
              } else {
                textNode.nodeValue = medusaObj.defaultMessage;
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
      .tamplemonkey-medusa-tip.bad span.tp-medusa-qa-icon {background: #ff0000; color:#fff !important;}
      .tamplemonkey-medusa-tip.good span.tp-medusa-qa-icon {background:#ccff00;}
      .tamplemonkey-medusa-tip.excellent span.tp-medusa-qa-icon {background:#00ff00;}
      .tamplemonkey-medusa-tip img.tp-medusa-key-edit{ position:relative !important;cursor:pointer;width:20px !important;height:20px !important;display:flex !important;align-items: center;}
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
        const store = db.transaction([transKey], 'readwrite').objectStore(transKey);
        store.clear();
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
      extractDocument();
      checkTranslateQuality();
      tpmMds.globalToast(`Switch to ${targetMode} mode successfully`);
    });
  }


  const registerEventListener = () => {
    document.body.addEventListener('click', (e) => {
      const cls = e.target.className || '';
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

      // todo: add QA action

      if (type) {
        e.stopPropagation();
        e.preventDefault();
      }
    });



    // 监听 dom 的变化和页面滚动，重新索引页面元素
    const root = document.body;
    const throttleExtractAndCheck = tpmMds.throttle(() => {
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
  }
}());
