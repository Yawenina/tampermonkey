// ==UserScript==
// @name         ASC Page Quick Open
// @namespace    http://tampermonkey.net/
// @version      1.8
// @description  To quick open the dada editing path
// @author       Yee Wang
// @include      *://*.lazada.*
// @include      *://*.lazada-seller.cn/*
// @require      https://cdn.bootcss.com/lodash.js/4.17.15/lodash.min.js
// @updateURL    http://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/dada-page-quick-edit/index.user.js
// @downloadURL  http://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/dada-page-quick-edit/index.user.js
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// ==/UserScript==

const platform = isLAGO() ? "LAGO" : "DADA";
GM_registerMenuCommand(`Open ${platform} Edit`, openEditPage);
GM_registerMenuCommand(`Open ${platform} Publish`, openPublishPage);
GM_registerMenuCommand("Open DEF Iteration Page", openDefPage);

const { get } = _ || {};

async function openDefPage() {
  const Next = (unsafeWindow.proxy || unsafeWindow).Next;
  try {
    try {
      Next.Message.loading("Getting DEF info...");
    } catch (e) {}

    let resource =
      get(unsafeWindow, "lzdCommonData.dadaConfig.resource.js") ??
      get(unsafeWindow, "lzdCommonData.dadaConfig.resource");

    if (typeof resource !== "string") {
      throw new Error("It's not a valid source code project!");
    }
    resource = resource.replace(/\{HOST}/g, "g.alicdn.com");

    const [, gitPath] = resource.match(/[\w.]+\/(.+?\/.+?)\/.+/) || [];

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
  const meta = document.querySelector('meta[name="wt-biz"]');
  return !meta?.content;
}

async function getLAGOUrl(action) {
  try {
    Next.Message.loading("Getting page detail info from LAGO platform...");
  } catch (e) {}

  try {
    const result = await request({
      url: `https://pre-lago.alibaba-inc.com/api/common/open/page/${action}?pathname=${location.pathname}&domain=${location.host}`,
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

    const result = await request({
      url: `https://dada.alibaba-inc.com/open/api/dada/read?livePage=${
        location.pathname
      }&pageSize=30${bizName ? `&bizName=${bizName}` : ""}`,
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
