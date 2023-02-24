export default (async () => {
  const host = location.hostname;

  if (host.includes('sellercenter')) {
    ASCScript();
  } else {
    GCPScript();
  }
})();
