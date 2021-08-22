// 放在一个闭包里面避免全局变量冲突
(function() {
  const textKeyMap = {};
  const extractDocument = el => {
    // console.log('----- extractDocument ------');
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
          const tipSeted = pnode.getAttribute('data-tipseted');

          if (!tipSeted) {
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
                const atIdx = medusaObj.id.indexOf('@');
                if (medusaObj.app === 'null' && atIdx !== -1) {
                  medusaObj.app = medusaObj.id.substr(0, atIdx);
                  medusaObj.id = medusaObj.id.substr(atIdx + 1);
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


              const div = document.createElement('div');
              div.setAttribute('class', 'tamplemonkey-medusa-tip-wrap');
              div.setAttribute('style', 'position:relative;z-index:100;width:0px;height:0px;display:inline;float:left;');
              div.innerHTML = `
                <div class="tamplemonkey-medusa-tip" data-id="${medusaObj.id}" data-app="${medusaObj.app}" data-dm="${encodeURIComponent(medusaObj.defaultMessage)}" >
                  <span class="tp-medusa-js-icon" title="Copy JS: ${medusaObj.app}@${medusaObj.id}">js</span>
                  <span class="tp-medusa-key-icon" title="Copy Key: ${medusaObj.app}@${medusaObj.id}">key</span>
                  <img class="tp-medusa-key-edit" title="Edit Value: ${medusaObj.app}@${medusaObj.id}" data-href="https://mds-portal.alibaba-inc.com/applications/detail?currentPageInfo=${encodeURIComponent(JSON.stringify({searchValue: medusaObj.id}))}&navItemType=keyList&appName=${medusaObj.app}" src="https://img.alicdn.com/imgextra/i3/O1CN01kSOVbh1kviQdl7gxG_!!6000000004746-2-tps-64-64.png" />
                </div>
              `;
              pnode.setAttribute('data-tipseted', 'y');
              pnode.prepend(div);
            }
          }
        }
      }
    }
  }


  window.lzdSellerMedusaKeysPageKeys = function() {
    const lang = tpmMds.getCookie('_lang');
    const host = unsafeWindow.location.host;
    // console.log(`------ current lang: ${lang}`);
    if (host.indexOf('sellercenter-staging') !== 0) {
      return;
    }

    const domain = host.replace(/^sellercenter(-staging)?/, '');
    if (lang !== 'pd_KV') {
      GM_registerMenuCommand("Show Page Medusa Keys", () => {
        tpmMds.setCookie('_lang', 'pd_KV', domain);
        unsafeWindow.location.reload();
      });
      return;
    }

    GM_registerMenuCommand("Hide Page Medusa Keys", () => {
      tpmMds.setCookie('_lang', 'en_US', domain);
      unsafeWindow.location.reload();
    });

    // 设置 tip 全局样式
    const style = document.createElement('style');
    style.innerHTML = `
      .tamplemonkey-medusa-tip {display:block;width:20px;height:20px;overflow: hidden;background: #fff;box-shadow: 0px 0px 10px #888888;padding: 2px;box-sizing: content-box;border-radius: 4px;}
      .tamplemonkey-medusa-tip:hover {width:64px;display:flex;align-items: center;}
      .tamplemonkey-medusa-tip span.tp-medusa-js-icon, .tamplemonkey-medusa-tip span.tp-medusa-key-icon {position:relative !important;color:#fff;cursor:pointer; display:block;margin-bottom:2px;margin-right:2px;line-height:20px;height:20px;width:20px;background:#660099;border-radius:10px;font-size:10px;color:#fff !important;text-align:center;}
      .tamplemonkey-medusa-tip img.tp-medusa-key-edit{ position:relative !important;cursor:pointer;width:20px !important;height:20px !important;display:flex !important;align-items: center;}
      .tamplemonkey-medusa-tip a, .tamplemonkey-medusa-tip span {font-size: 12px;font-weight:300;}
    `;
    document.body.appendChild(style);


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
      if (type) {
        const pnode = e.target.parentNode;
        tpmMds.copyAction({
          english: decodeURIComponent(pnode.getAttribute('data-dm')),
          app: pnode.getAttribute('data-app'),
          key: pnode.getAttribute('data-id'),
        }, type, true);
        e.stopPropagation();
        e.preventDefault();
      }

    });


    // 创建一个链接到回调函数的观察者实例
    const root = document.body;
    const runExtract = () => extractDocument(root);
    const shortThrottleExtract = tpmMds.throttle(runExtract, 500);
    if (root) {
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
          shortThrottleExtract();
        });
      });
      // 开始观察已配置突变的目标节点
      observer.observe(root, { attributes: false, childList: true, subtree: true });
    }

    document.onscroll = shortThrottleExtract;
  }

}());
