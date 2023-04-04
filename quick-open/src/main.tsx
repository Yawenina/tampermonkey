import { GM_registerMenuCommand } from '$';
import { openDefPage } from './utils/def';
import { getGitPath, openEditPage, openPublishPage } from './utils/lago&dada';
import { openGitLabPage, openGcpDefPage, openPreReleasePage } from './utils/gcp'
import { debug } from './utils';
import { isDADA, isGCP, isLAGO } from './utils/env';
import { copyWhistleRule } from './utils/whistle';

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
}

function GCPScript() {
  debug('Run in GCP.');
  GM_registerMenuCommand(`🚀 Open GCP GitLab Page`, openGitLabPage);
  GM_registerMenuCommand(`🚀 Open GCP DEF Iteration Page`, openGcpDefPage);
  GM_registerMenuCommand(`🚀 Open GCP Pre-release Page`, openPreReleasePage);
}
