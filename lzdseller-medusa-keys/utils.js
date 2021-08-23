// set a global namespace to avoid conflict with other tampermonkey script
const tpmMds = {};

tpmMds.reportUsage = function({ spmd = 'open', data = {} } = {}) {
  if (!unsafeWindow.goldlog || !unsafeWindow.goldlog.record) {
    return setTimeout(() => {
      tpmMds.reportUsage({ spmd, data });
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
};


tpmMds.globalToast = (message, type = 'success') => {
  try {
    // ELementPlus may not exists
    ElementPlus.ElMessage({ message, type });
  } catch (error) {
    console.error(error);
  }
}




tpmMds.setStyle = function(el, style) {
  if (Object.prototype.toString.call(style) === '[object Object]') {
    Object.keys(style).forEach(ele => {
      el.style[ele] = style[ele];
    })
    return el;
  }
  return el;
};


tpmMds.requestData = function({ url, data, method = 'GET', headers = {} }) {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      url,
      method,
      data: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' , ...headers},
      onload: (xhr) => {
        try {
          resolve(JSON.parse(xhr.responseText))
        } catch (error) {
          reject(xhr.responseText);
        }
      },
      onerror: reject
    });
  })
};

tpmMds.loadScript = function(url) {
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
};

tpmMds.loadCss = function(url) {
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
};


tpmMds.copyAction = function({ english, key, app}, type = 'js', byPage = false) {
  const data = type === 'js' ?
    `i18n.formatMessage({
  id: '${key}',
  defaultMessage: '${english}',
  app: '${app}'
})` : `${app}@${key}`;
  GM_setClipboard(data, { type: 'text', mimetype: 'text/plain' });
  tpmMds.globalToast('Copy Success');
  tpmMds.reportUsage({ spmd: byPage ? `copy_single_page_${type}`: `copy_single_${type}`, data: { 'data-more': `${app}@${key}` } });
};




tpmMds.throttle = function(method, delay) {
  let timer = null;
  return () => {
    const context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
        method.apply(context,args);
    }, delay);
  }
};


tpmMds.setCookie = function(name, value, domain, day, path){
  day = day || 30;
	path = path || '/';
	let str = name + '=' + value + '; ';
	if(day) str += 'expires=' + new Date(Date.now() + day * 24 * 3600 * 1000).toGMTString() + '; ';
	if(path) str += 'path=' + path + '; ';
	if(domain) str += 'domain=' + domain;
	document.cookie = str;
};



tpmMds.getCookie = function(c_name) {
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
};


tpmMds.openEditPage = function(showDetailAppName, showDetailKeys, byPage = false) {
  // debugger
  if (!showDetailAppName || !showDetailKeys) {
    return;
  }



  const currentPageInfo = encodeURIComponent(JSON.stringify({
    "searchValue": showDetailKeys,
    "pageSize": 10,
    "senior": false,
    "pageNumber": 1,
    "showKeyDetail": true,
    "pageTagesBuffer": "en_US,zh_CN,tag",
    "showDetailAppName": showDetailAppName,
    "showDetailKeys": showDetailKeys,
    "searchCriteria": {
        "key": "",
        "string": "",
        "missTrans": "",
        "tags": "",
        "published": "",
        "reviewed": "",
        "tested": "",
        "translated": "",
        "transSource": "",
        "user": ""
    }
  }));

  const url = `https://mds-portal.alibaba-inc.com/applications/detail?currentPageInfo=${currentPageInfo}&navItemType=keyList&appName=${showDetailAppName}`;


  // const url = `https://mds-portal.alibaba-inc.com/melody/edit?currentPageInfo=${encodeURIComponent(JSON.stringify({ showDetailAppName, showDetailKeys}))}`;
  // console.log('url:', url);
  GM_openInTab(url);
  tpmMds.reportUsage({spmd: byPage ? 'page_url': 'url', data: { 'data-more': `${showDetailAppName}@${showDetailKeys}` }});
};



