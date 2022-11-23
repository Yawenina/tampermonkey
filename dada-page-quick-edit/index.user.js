// ==UserScript==
// @name         ASC Page Quick Open
// @namespace    http://tampermonkey.net/
// @version      1.16
// @description  To quick open the dada editing path
// @author       Yee Wang
// @include      *://*.lazada.*
// @include      *://*.lazada-seller.cn/*
// @include      *://*.miravia.es/*
// @require      https://cdn.bootcss.com/lodash.js/4.17.15/lodash.min.js
// @updateURL    https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/dada-page-quick-edit/index.user.js
// @downloadURL  https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/dada-page-quick-edit/index.user.js
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// ==/UserScript==

const platform = isLAGO() ? "LAGO" : "DADA";
GM_registerMenuCommand(`🚀 Open ${platform} Edit`, openEditPage);
GM_registerMenuCommand(`🚀 Open ${platform} Publish`, openPublishPage);

const { get } = _ || {};

(function main() {
  try {
    const gitPath = getGitPath();
    if (!!gitPath) {
      GM_registerMenuCommand("🚀 Open DEF Iteration Page", openDefPage);
      GM_registerMenuCommand("🎉 Copy Whistle Rule", copyWhistleRule);
    }
  } catch (e) {
    console.log("Not a valid page");
  }
})();

async function copyWhistleRule() {
  const Next = (unsafeWindow.proxy || unsafeWindow).Next;
  const gitPath = getGitPath();

  if (!gitPath) {
    Next.Message.error("It's not a valid source code project!");
    return;
  }

  const whistle = `/g.alicdn.com/${gitPath}/.+?/(.+)/ https://localhost:3000/$1`;

  GM_setClipboard(whistle);

  alert("🎉 Whistle rule copied! Please paste it in Whistle.");

  unsafeWindow.open("http://127.0.0.1:8899/");
}

async function openDefPage() {
  const Next = (unsafeWindow.proxy || unsafeWindow).Next;
  try {
    try {
      Next.Message.loading("Getting DEF info...");
    } catch (e) {}

    const gitPath = getGitPath();

    const res = await request({
      url: `https://work.def.alibaba-inc.com/api/search?q=${encodeURIComponent(
        gitPath
      )}&t=app`,
    });

    const id = get(res, "data.apps.0.id");

    window.open(`https://work.def.alibaba-inc.com/app/${id}/index`);

    Next.Message.hide();
  } catch (e) {
    Next.Message.error(e.error);
  }
}

function getGitPath() {
  let resource =
    get(unsafeWindow, "lzdCommonData.dadaConfig.resource.js") ??
    get(unsafeWindow, "lzdCommonData.dadaConfig.resource");

  if (!resource) {
    // get meta tag content
    const js = document.querySelector("link[data-main-js]")?.href;
    js && (resource = js);
  }

  if (typeof resource !== "string") {
    throw new Error("It's not a valid source code project!");
  }

  resource = resource.replace(/\{HOST}/g, "g.alicdn.com");

  const [, gitPath] = resource.match(/[\w.]+\/(.+?\/.+?)\/.+/) || [];

  return gitPath;
}

async function openEditPage() {
  if (isLAGO()) {
    const url = await getLAGOUrl("editor");
    url && window.open(url);
    return;
  }

  const dadaId = await getDadaId();
  window.open(
    `https://dada.alibaba-inc.com/dada/pdEditor?id=${dadaId}&action=page`
  );
}

function isLAGO() {
  return !!document.querySelector("meta[name='env-lago']");
}

async function getLAGOUrl(action) {
  try {
    Next.Message.loading("Getting page detail info from LAGO platform...");
  } catch (e) {}

  try {
    const result = await request({
      url: `https://lago.alibaba-inc.com/api/common/open/page/${action}?pathname=${location.pathname}&domain=${location.host}`,
    });

    return result.data;
  } catch (e) {
    console.error(e);
    Next.Message.error(
      "Getting info error, pls confirm that the page is published by LAGO platform!"
    );
  } finally {
    Next.Message.hide();
  }
}

async function openPublishPage() {
  if (isLAGO()) {
    const url = await getLAGOUrl("publish");
    url && window.open(url);
    return;
  }
  const dadaId = await getDadaId();
  window.open(`https://dada.alibaba-inc.com/dada/publish?pageId=${dadaId}`);
}

async function getDadaJson() {
  const Next = (unsafeWindow.proxy || unsafeWindow).Next;
  try {
    try {
      Next.Message.loading("Getting page detail info from dada platform...");
    } catch (e) {}
    const bizName = get(unsafeWindow, "lzdCommonData.dadaConfig.bizName");
    const pathName =
      location.pathname === "/" ? "/apps/home/new" : location.pathname;
    const result = await request({
      url: `https://dada.alibaba-inc.com/open/api/dada/read?livePage=${pathName}&pageSize=30${
        bizName ? `&bizName=${bizName}` : ""
      }`,
    });
    const data = result.data.filter((item) => item?.biz === bizName);

    return data?.[0] || {};
  } catch (e) {
    console.error(e);
    Next.Message.error(
      "Getting info error, pls confirm that the page is published by Dada platform!"
    );
  } finally {
    Next.Message.hide();
  }
}

async function getDadaId() {
  const data = await getDadaJson();
  const dadaId = get(data, "id");
  if (!dadaId) {
    throw new Error();
  }

  return dadaId;
}

async function request({ url }) {
  const headers = {
    "Content-Type": "application/json",
  };

  return new Promise((resolve, reject) => {
    // 跨域
    GM_xmlhttpRequest({
      method: "GET",
      headers,
      url,
      onload: function (res) {
        if (res.status === 200) {
          const text = res.responseText;
          const json = JSON.parse(text);
          resolve(json);
        } else {
          reject(res);
        }
      },
    });
  });
}
