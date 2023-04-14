import { h, render } from 'preact';
import { GM_registerMenuCommand } from '$';
import { openDefPage } from './utils/def';
import { getGitPath, openEditPage, openPublishPage } from './utils/lago&dada';
import { isDADA, isGCP, isLAGO } from './utils/env';
import { everytime } from './utils';
import renderCacheButton from './cache';
import renderDeveloperTools from './store';
export default (async () => {
  renderCacheButton();
  renderDeveloperTools();
})();
