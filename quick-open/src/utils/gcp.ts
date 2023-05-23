import { get } from 'lodash-es';
import { isGCP } from './env';
import { message as Message } from 'antd';
import { monkeyRequest } from 'shared';
import { unsafeWindow } from '$';


const getUrl = () => {
  return document.getElementsByTagName('link')[1].baseURI;
}

const pageLink = getUrl();

function isGCPUrlEqual(pageURL, val, isModulePage) {
  if (isModulePage != -1) {
    const onlineURL = val.pageUrl;
    const preURL = val.prePageUrl;
    if (pageURL.match(/(?<=[?&])(?:wh_pid=)([^&]+)/)[0] === onlineURL.match(/(?<=[?&])(?:wh_pid=)([^&]+)/)[0] || 
      pageURL.match(/(?<=[?&])(?:wh_pid=)([^&]+)/)[0] === preURL.match(/(?<=[?&])(?:wh_pid=)([^&]+)/)[0]  || 
      preURL.replace('pre-wormhole','pre-www').match(/^[^?]+(?=\?|$)/)[0] === pageLink.match(/^[^?]+(?=\?|$)/)[0]
    ) {
    return true;
  }
  } else {
    if (pageLink.match(val.path)) return true;
  } 
  return false;
}

export function openPreReleasePage() {
  if (isGCP()) {
    const elmArr = document.getElementsByTagName('a');
    let path = elmArr[elmArr.length - 2].href;
    window.open(path.replace('pre-www','pre-wormhole'));
}}

if (pageLink.includes('https://gcp.lazada.com/lazada/page/channels/')) {
  const token = document.cookie.match(/(?<=csrfToken=).+?;/)[0].slice(0, -1);document.cookie.match(/(?<=csrfToken=).+?;/)[0].slice(0, -1);
  window.opener.postMessage(token, '*');
}

export function refreshToken() {
  let newWindow = null;
  const receiveMessage = (event) => {
    if(event.origin != 'https://gcp.lazada.com') return;
    const token = event.data;
    document.cookie=`csrfToken=${token}`;
    window.onmessage = null;
    newWindow.close();
  }
  window.onmessage = receiveMessage;
  newWindow = window.open('https://gcp.lazada.com/lazada/page/channels');
}

export function openGCPPublishPage() {
  const goToPage = async() => {
    try {
      const isModulePage = pageLink.search(/route/);
      const title = document.getElementsByTagName('title')[0].innerText;
      let data = [], res = [];
      if (isModulePage != -1) {
        const region = pageLink.match(/(?<=route\/lazada\/)\w+/)[0];
        const regionCode = region.toUpperCase();
        data =[
          {
            "buCode": "lazada",
            "pageNum": 1,
            "pageSize": 10,
            "keywords": `${title}`,
            "regionCode": `${regionCode}`
          }
        ]
        res = await monkeyRequest({
          url:'https://gcp.lazada.com/lazada/v2/proxy/basecamp/queryList',
          method: 'POST',
          headers: {"x-csrf-token": token},
          data: JSON.stringify(data)
        })
        let channelId = 0;
        let pageId = 0;
        //@ts-ignore
        res.data.map((val, index) => {
          if (isGCPUrlEqual(pageLink, val, isModulePage)) {
            pageId= val.id;
            channelId = val.campaignId;
            return;
          }
        })
        window.open(`https://gcp.lazada.com/lazada/page/campaign/${channelId}/page/design/${pageId}`);
      } else {
        const region = pageLink.match(/(?<=lazada.)\w+[.\w+]*/)[0];
        const regionId = {
          'sg': 1,
          'com.my': 2,
          'co.id': 3,
          'com.ph': 4,
          'vn': 5,
          'co.th': 6
        };
        //ph:4 my:2 th:6 sg:1 vn:5 id:3
        data = [{
          "buCode": "lazada",
          "page": 1,
          "pageSize": 10,
          "name": title,
          "categoryOne": `${regionId[region]}`
        }];
        res = await monkeyRequest({
          url:'https://gcp.lazada.com/lazada/v2/proxy/gcpSource/queryPageList',
          method: 'POST',
          headers: {"x-csrf-token": token},
          data: JSON.stringify(data)
        })
        //@ts-ignore
        if (res.code == 500) {
          //@ts-ignore
          throw `${res.message}, you need to click refresh token button.`;
        } else if ((res as any)?.data.length === 0) {
          throw `Didn't find the gcp publish page: ${title}.`;
        }
        let channelId = 0;
        let pageId = 0;
        //@ts-ignore
        res.data.map((val, index) => {
          if (isGCPUrlEqual(pageLink, val,isModulePage)) {
            pageId= val.id;
            channelId = val.categoryTwo;
            return;
          }
        })
        window.open(`https://gcp.lazada.com/lazada/page/campaign/${channelId}/source/design/${pageId}`);
      }
    } catch (e) {
      alert(e);
    }
  }

  let token = '';
  let newWindow = null;
  if(document.cookie.includes('csrfToken')) {
    token = document.cookie.match(/(?<=csrfToken=).+?;/)[0].slice(0, -1);
    goToPage();
  } else {
    const receiveMessage = (event) => {
      if(event.origin != 'https://gcp.lazada.com') return;
      token = event.data;
      document.cookie=`csrfToken=${token}`;
      goToPage();
      window.onmessage = null;
      newWindow.close();
    }
    window.onmessage = receiveMessage;
    newWindow = window.open('https://gcp.lazada.com/lazada/page/channels/');
  }
}