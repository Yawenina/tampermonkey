import { h, render } from 'preact';
import { GM_registerMenuCommand } from '$';
import { openDefPage } from './utils/def';
import { getGitPath, openEditPage, openPublishPage } from './utils/lago&dada';
import { debug } from './utils';
import { isDADA, isGCP, isLAGO } from './utils/env';
import { copyWhistleRule } from './utils/whistle';
import LAGO from './components/lago';
import { BRADGE_REQUEST, isReady } from '../../shared/iframe-bradge';

export default (async () => {
  ['lago.alibaba-inc.com'].includes(location.host) && runCC();
  if (isLAGO()) {
    LAGOScript();
  } else if (isDADA()) {
    DADAScript();
  } else if (isGCP()) {
    GCPScript();
  }
})();

function runCC() {
  isReady.connect();
  BRADGE_REQUEST.connect();
}

function renderQuickComp() {
  if (!isLAGO()) return;
  const body = document.querySelector('body');
  const preactDom = document.createElement('div');
  body.insertBefore(preactDom, body.children[0]);
  render(h(LAGO, {}), preactDom);
}
function DADAScript() {
  debug('Run in Dada.');
  GM_registerMenuCommand(`Open Dada Edit`, openEditPage);
  GM_registerMenuCommand(`Open Dada Publish`, openPublishPage);

  const gitPath = getGitPath();
  if (!!gitPath) {
    GM_registerMenuCommand('🚀 Open DEF Iteration Page', () => openDefPage(gitPath));
    GM_registerMenuCommand('🎉 Copy Whistle Rule', () => copyWhistleRule(gitPath));
  }
}
function LAGOScript() {
  debug('Run in LAGO.');
  GM_registerMenuCommand(`🚀 Open LAGO Edit`, openEditPage);
  GM_registerMenuCommand(`🚀 Open LAGO Publish`, openPublishPage);

  const gitPath = getGitPath();
  if (!!gitPath) {
    GM_registerMenuCommand('🚀 Open DEF Iteration Page', () => openDefPage(gitPath));
    GM_registerMenuCommand('🎉 Copy Whistle Rule', () => copyWhistleRule(gitPath));
  }
  renderQuickComp();
}

function GCPScript() {
  debug('Run in GCP.');
}
