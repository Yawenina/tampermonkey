// 放在一个闭包里面避免全局变量冲突
(function() {
  // export function
  window.lzdSellerMedusaPluginDoc = function() {
    GM_registerMenuCommand("View Documentation", () => {
      tpmMds.reportUsage({ spmd: 'view_doc' });
      GM_openInTab('https://yuque.antfin-inc.com/docs/share/8a070e3b-9a39-487c-aa97-f8820b015379');
    });
  }
}());
