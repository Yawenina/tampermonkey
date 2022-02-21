// 放在一个闭包里面避免全局变量冲突
(function() {
  // export function
  window.lzdSellerMedusaPluginDoc = function() {
    GM_registerMenuCommand("View Documentation", () => {
      tpmMds.reportUsage({ spmd: 'view_doc' });
      GM_openInTab('https://yuque.antfin.com/docs/share/2964a59f-5c54-4c11-88ad-97693103a032');
    });
  }
}());
