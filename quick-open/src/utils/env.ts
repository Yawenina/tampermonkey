export function isLAGO() {
  return !!document.querySelector("meta[name='env-lago']");
}

export function isDADA() {
  const html = document.querySelector('html').outerHTML;
  return !isLAGO() && html.includes('dadaConfig');
}

export function isGCP() {
  if (location.hostname === 'gcp.lazada.com' || location.hostname === 'gcp.alibaba-inc.com') return true;

  const href = location.href;

  // www.lazada.sg, www.lazada.com.my, www.lazada.co.th, www.lazada.co.id, www.lazada.com.ph, www.lazada.vn
  // pre-www.lazada.sg, pre-www.lazada.com.my, pre-www.lazada.co.th, pre-www.lazada.co.id, pre-www.lazada.com.ph, pre-www.lazada.vn
  const isBuyerSide =
    /(www|wormhole|pages)\.lazada\.(sg|com\.my|co\.th|co\.id|com\.ph|vn)|pre-www\.lazada\.(sg|com\.my|co\.th|co\.id|com\.ph|vn)/.test(
      href,
    );

  return isBuyerSide;
}
