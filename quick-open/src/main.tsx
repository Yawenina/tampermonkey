import { h, render } from 'preact';
import { GM_registerMenuCommand } from '$';
import { openDefPage } from './utils/def';
import { getGitPath, openEditPage, openPublishPage } from './utils/lago&dada';
import { debug } from './utils';
import { isDADA, isGCP, isLAGO } from './utils/env';
import { everytime } from './utils/utils';
import { copyWhistleRule } from './utils/whistle';
import LAGO from './components/lago';
import { BRADGE_REQUEST, isReady } from './bradge';

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
  BRADGE_REQUEST.domListen('.ant-table-row-level-0', (dom) => {
    return dom.querySelectorAll('.ant-table-cell')[5].textContent;
  });
}

function renderQuickComp() {
  if (!isLAGO()) return;
  everytime(
    () => document.querySelector('.layout-container'),
    (dom) => {
      const leftPanels = dom.querySelector('.a-l-right-item-list');
      // preact render to dom
      const preactDom = document.createElement('div');
      leftPanels.insertBefore(preactDom, leftPanels.children[0]);

      render(h(LAGO, { children: 'LAGO' }), preactDom);
    },
  );
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
