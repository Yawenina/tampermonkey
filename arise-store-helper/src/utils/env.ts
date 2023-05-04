export function isLAGO() {
  return !!document.querySelector("meta[name='env-lago']");
}

export function isDADA() {
  const html = document.querySelector('html').outerHTML;
  return !isLAGO() && html.includes('dadaConfig');
}

export function isGCP() {
  const domains = ['gcp.alibaba-inc.com', 'gcp.miravia.net', 'gcp.miravia.es', 'gcp.miravia.com'];
  return domains.includes(location.hostname);
}

export function isPre() {
  return location.hostname.includes('pre-');
}

export function isMobile() {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
}
