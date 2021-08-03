// ==UserScript==
// @name         ITrace quick view
// @namespace    lazada
// @version      2.1.7
// @description  try to take over the world!
// @author       ShuQiang, Zernmal
// @include      https://*.lazada.*/*
// @include      https://*.lazada.*.*/*
// @match        https://*.lazada-seller.cn/*
// @updateURL    https://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/itrace-quick-view/index.user.js
// @downloadURL  https://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/itrace-quick-view/index.user.js
// @grant        unsafeWindow
// @grant        GM_log
// @grant        GM_info
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @connect      *
// ==/UserScript==


let bid = unsafeWindow.__wpk? unsafeWindow.__wpk.bid: null;
// console.log(`__wpk.bid:  ${bid}`);
if (!bid) {
  const BIDS = {
    asc: 'dque73fh-cp07ckll',
    gsp: '91weynmb-so00ubm3',
    workstation: '28lzz6z8-fqir9rfe'
  };
  const host = location.host;
  if (host.indexOf('gsp.') === 0) {
    bid = BIDS.gsp;
  } else if (host.indexOf('workstation.lazada.com') !== -1) {
    bid = BIDS.workstation;
  } else {
    bid = BIDS.asc;
  }
}


const formatDate = (m) => {
    return m.getUTCFullYear() + "-" +
    ("0" + (m.getUTCMonth()+1)).slice(-2) + "-" +
    ("0" + m.getUTCDate()).slice(-2) + " " +
    ("0" + m.getUTCHours()).slice(-2) + ":" +
    ("0" + m.getUTCMinutes()).slice(-2) + ":" +
    ("0" + m.getUTCSeconds()).slice(-2);
};


const url = `${location.origin}${location.pathname}`;


// 弹框面板
let infoPanel = null;
let app = null;

//////////////////////////////////////////// 资源加载
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

////////////////////////////////////////////元素挂载
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

const addPanel = () => {
  createInfoPanel();
  createComponent();
}

function createInfoPanel() {
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

//////////////////////////////////////////// 数据获取展示
// 网络请求
function postData(url, data) {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      url,
      method: 'POST',
      data: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      onload:(xhr) => {
          resolve(JSON.parse(xhr.responseText));
      },
      onerror: err => {
        reject(err);
      }
    });
  })
}

/////////////////////////////////////////// vue组件
function createComponent() {
  app = Vue.createApp({
  });
  app.use(ElementPlus);
  app.component('top-menu', {
    data() {
      return {
        actived: 'jserror',
        token: '',
        loading: false,
        error: false
      }
    },
    computed: {
      iframeUrl: function() {
        let urlParams = encodeURIComponent(this.getParams(this.actived));
        const target = this.actived === 'api'? 'advanced': this.actived;
        const res = `https://paas-itrace.effirst.net/open/${bid}?target=${target}&token=${this.token}&hs=true&hh=true&sbc=false&issue=false&ntab=false&urlParams=${urlParams}`;
        // console.log(res);
        return res;
      }
    },
    mounted() {
      this.loadData();
    },
    methods: {
      getParams(type){
        switch(type) {
          case 'api': {
            return `cid=all&submit=true&dk=agg&limit=200&um=false&code=2&filterCondition=${encodeURIComponent(JSON.stringify([
              { key: 'w_url', uniqueId: 'w_url', op: 'wildcard', value: url},
              { key: 'w_res', op: 'notLike', uniqueId: 'w_res', value: '.js' },
              { key: 'w_res', op: 'notLike', uniqueId: 'w_res', value: '.json' }
            ]))}`;
          }
          case 'perf': {
            return `cond=${encodeURIComponent(JSON.stringify(['w_url`' + url]))}`;
          }
          case 'jserror': {
            return `cond=${encodeURIComponent(JSON.stringify(['w_url`' + url]))}`;
          }
          case 'resErr': {
            return `cond=${encodeURIComponent(JSON.stringify(['w_url`' + url]))}`;
          }
          case 'pageAnls': {
            return `cid=all&k=w_url&v=${encodeURIComponent(url)}&grain=60&df=${formatDate(new Date(Date.now() - 24 * 60 * 60 * 1000))}&dt=${formatDate(new Date())}`;
          }
          default:
            return '';
        }
      },
      getItraceLink(type) {
        const pre = `https://wpk-intl.ucweb.com/#/${bid}/h5/`;

        const pathMap = {
          api: 'advanced',
          perf: 'perf/index',
          jserror: 'js-error/index',
          resErr: 'res-err/index',
          pageAnls: 'page/analysis'
        };
        return `${pre}${pathMap[type]}?${this.getParams(type)}`;
      },
      getToken() {
        this.loading = true;
        const secret = 'wgfm7nft7865m6r2g11gr6gkmx4cnw0t';
        const now = Date.now();
        const clientId = 'myfpccnajcbo';
        const body = { uid: '83074', account: 'zhenwu.czw', name: '陈振武', app: bid, accountType: 'buc' };
        const sortString = `app=${bid}body=${JSON.stringify(body)}`;
        const signature = md5(`${clientId}${secret}${now}${sortString}`);
        const url = `https://wpk-intl.ucweb.com/rest/v2/api/open-auth/token/generate?app=${bid}&clientId=${clientId}&timestamp=${now}&signature=${signature}`;
        return postData( url, body ).then(res => {
            this.loading = false;
            return res.data.token;
          }).catch(err => {
            console.error(err);
            this.loading = false;
            this.error = true;
            return '';
          });
      },
      loadData() {
        this.getToken().then(token => {
          this.token = token;
        });
      },
      handleSelect(key) {
        this.actived = key;
        this.loadData();
      },
      closePanel() {
        removePanel();
      }
    },
    template: `
      <el-button style="position: absolute; right: -10px; top: -10px; z-index: 100;" type="danger" @click="closePanel" icon="el-icon-close" circle></el-button>
          <el-menu :default-active="actived" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="jserror">JS Error</el-menu-item>
          <el-menu-item index="api">API</el-menu-item>
          <el-menu-item index="resErr">Resource Error</el-menu-item>
          <el-menu-item index="perf">Performance</el-menu-item>
          <el-menu-item index="pageAnls">PV/UV</el-menu-item>
      </el-menu>
      <div v-if="!loading">
        <iframe style="border:none;" :src="iframeUrl" v-if="!error" width="1050" height="550" ></iframe>
        <div v-if="error"  style="width:1050px;height:550px;text-align:center;line-height:200px;" ><div>Fetch token error.（pls contact @翰哥 @擎空 if it always show this error）</div> <span @click="loadData">Try Again</span></div>
      </div>
      <div v-if="loading"  style="width:1050px;height:550px;text-align:center;line-height:200px;" >loading...</div>
      <div style="line-height: 40px;">
        <span>Go Detail for: </span>
        <a target="_blank" :href="getItraceLink('jserror')">JS Error</a>
        <span>&nbsp;|&nbsp;</span>
        <a target="_blank" :href="getItraceLink('api')">API</a>
        <span>&nbsp;|&nbsp;</span>
        <a target="_blank" :href="getItraceLink('resErr')">Resource Error</a>
        <span>&nbsp;|&nbsp;</span>
        <a target="_blank" :href="getItraceLink('perf')">Performance</a>
        <span>&nbsp;|&nbsp;</span>
        <a target="_blank" :href="getItraceLink('pageAnls')">PV/UV</a>
      </div>
    `
  })
  app.mount('#infoPanel');
}


const reportUsage = () => {
  if (!unsafeWindow.goldlog || !unsafeWindow.goldlog.record) {
    return setTimeout(reportUsage, 1000);
  }

  const params = [`version=${GM_info.script.version}`];
  const spmAb = unsafeWindow.goldlog && unsafeWindow.goldlog.spm_ab || [];
  if (spmAb.length) {
    params.push(`spm=${spmAb.join('.')}.tampermoneky.open`);
  }
  unsafeWindow.goldlog.record('/lzdseller.tampermoneky.itrace', 'CLK', params.join('&'));
}


// main function
(function () {
  console.log(`[Lazada Seller iTrace Quick view] version ${GM_info.script.version}`);
  Promise.all([
    loadCss('https://unpkg.com/element-plus@1.0.2-beta.36/lib/theme-chalk/index.css'),
    loadScript('https://cdn.staticfile.org/vue/3.0.5/vue.global.js'),
    loadScript('https://unpkg.com/element-plus@1.0.2-beta.36/lib/index.full.js'),
    loadScript('https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.18.0/js/md5.min.js')
  ]).then(() => {
    GM_registerMenuCommand("Open Itrace Popup", () => {
      if (!!infoPanel) {
        removePanel();
      } else {
        addPanel();
        reportUsage();
      }
    });
  }).catch(error => {
    console.error(error);
  });
})();
