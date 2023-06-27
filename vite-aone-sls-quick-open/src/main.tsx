import { h, render } from 'preact';
import { BRADGE_REQUEST, isReady } from './bradge';
import { Panel } from './panel';
import { everytime } from './utils';

location.host === 'cc.alibaba-inc.com' ? runCC() : runAone();

function runCC() {
  isReady.connect();
  BRADGE_REQUEST.connect();
}

function runAone() {
  everytime(
    () => {
      const elements = document.querySelectorAll('[class^="BasicMessage--BasicContainer-"]');

      return elements[0];
    },
    (leftPanels) => {

      // preact render to dom
      const preactDom = document.createElement('div');
      preactDom.className = 'nextV2-responsive-grid';

      leftPanels.insertBefore(preactDom, leftPanels.children[2]);

      render(h(Panel, {}), preactDom);
    },
  );
}
