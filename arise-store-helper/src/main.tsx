import { h, render } from 'preact';
import { GM_registerMenuCommand } from '$';
import { openDefPage } from './utils/def';
import { getGitPath, openEditPage, openPublishPage, openStoreGcpPage } from './utils/lago&dada';
import { isDADA, isGCP, isLAGO } from './utils/env';
import { everytime } from './utils';

import { monkeyWindow, unsafeWindow } from '$';

import renderCacheButton from './cache';
import renderDeveloperTools from './store';

declare global {
  interface Window {
    $pegasus: any;
  }
}

export default (async () => {
  renderCacheButton();
  renderDeveloperTools();

  monkeyWindow.GM_registerMenuCommand('🚀 Open GCP Publish Page', openStoreGcpPage);
})();
