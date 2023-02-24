import { GM_registerMenuCommand } from '$';
import { openDefPage } from './def';
import { getGitPath, openEditPage, openPublishPage } from './lago&dada';
import { debug } from './utils';
import { isDADA, isGCP, isLAGO } from './utils/env';

export default (async () => {
  if (isLAGO()) {
    LAGOScript();
  } else if (isDADA()) {
    DADAScript();
  } else if (isGCP()) {
    GCPScript();
  }
})();

function DADAScript() {
  debug('Run in Dada.');
  GM_registerMenuCommand(`Open Dada Edit`, openEditPage);
  GM_registerMenuCommand(`Open Dada Publish`, openPublishPage);

  const gitPath = getGitPath();
  if (!!gitPath) {
    GM_registerMenuCommand('🚀 Open DEF Iteration Page', () => openDefPage(gitPath));
    GM_registerMenuCommand('🎉 Copy Whistle Rule', copyWhistleRule);
  }
}
function LAGOScript() {
  debug('Run in LAGO.');
  GM_registerMenuCommand(`🚀 Open LAGO Edit`, openEditPage);
  GM_registerMenuCommand(`🚀 Open LAGO Publish`, openPublishPage);

  const gitPath = getGitPath();
  if (!!gitPath) {
    GM_registerMenuCommand('🚀 Open DEF Iteration Page', () => openDefPage(gitPath));
    GM_registerMenuCommand('🎉 Copy Whistle Rule', copyWhistleRule);
  }
}

function GCPScript() {
  debug('Run in GCP.');
}
