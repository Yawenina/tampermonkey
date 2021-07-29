// ==UserScript==
// @name         Dada Page Quick Open
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  To quick open the dada editing path
// @author       Yee Wang
// @include      *://*.lazada.*
// @include      *://*.lazada-seller.cn/*
// @require      https://cdn.bootcss.com/lodash.js/4.17.15/lodash.min.js
// @updateURL    http://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/dada-page-quick-edit.user.js
// @downloadURL  http://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/dada-page-quick-edit.user.js
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// ==/UserScript==

GM_registerMenuCommand("Open Dada Edit", openEditPage);
GM_registerMenuCommand("Open Dada Publish", openPublishPage);
GM_registerMenuCommand("Open DEF Iteration Page", openDefPage);


const { get } = _ || {};

async function openDefPage() {
  const Next = (unsafeWindow.proxy || unsafeWindow).Next;
  try {
    try {
      Next.Message.loading("Getting DEF info...");
    } catch (e) {}

    let resource = get(unsafeWindow, "lzdCommonData.dadaConfig.resource");

    if (typeof resource !== "string") {
      throw new Error("It's not a valid source code project!");
    }
    // resource = resource.replace(/\{HOST}/g, unsafeWindow.dadaConfig.host);

    const [, gitPath] = resource.match(/{HOST}\/(.+?\/.+?)\/.+/) || [];

    const res = await request({
      url: `https://work.def.alibaba-inc.com/api/search?q=${encodeURIComponent(
        gitPath
      )}&t=app`,
    });

    const id = get(res, "data.apps.0.id");

    window.open(`https://work.def.alibaba-inc.com/app/${id}/index`);
  } catch (e) {
    Next.Message.error(e.error);
  } finally {
    Next.Message.hide();
  }
}

async function openEditPage() {
  const dadaId = await getDadaId();
  window.open(
    `https://dada.alibaba-inc.com/dada/pdEditor?id=${dadaId}&action=page`
  );
}

async function openPublishPage() {
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
      }&pageSize=10${bizName ? `&bizName=${bizName}` : ""}`,
    });

    const data = result.data.filter((item) => item.data.match(bizName));

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
