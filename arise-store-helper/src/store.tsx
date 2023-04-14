import { h, render } from 'preact';
import { everytime } from './utils';
import moduleDevTools from './components/module-dev-tools';
import { monkeyWindow } from '$';
import randomColor from 'randomcolor';

declare global {
  interface Window {
    $: any;
  }
}

export default function StoreDeveloperTools() {
  const $ = monkeyWindow.$;
  const ua = monkeyWindow.navigator.userAgent;
  const isMobile = ua.includes('Mobile') || ua.includes('Android');
  const prefix = isMobile ? 'arise-wl-' : 'arise-pc-';
  const parentNode = $('*[data-spm-protocol="i"]');
  const colours = randomColor({
    count: 100,
    format: 'rgba',
    alpha: 0.7,
  });

  $(document).on('scroll', init);

  init();

  function init() {
    $(parentNode)
      .children()
      .not('.module-tools-panel')
      .each((index, moduleNode) => {
        // if moduel width is 0, it means the module is not visible
        const moduleNameId = $(moduleNode).attr('data-spm-module');

        if (!moduleNameId) return;

        const moduleDevToolsNode = render(
          h(moduleDevTools, {
            moduleAliasName: prefix + moduleNameId,
            moduleName: moduleNameId,
            backgroundColor: colours[index],
          }),
          moduleNode,
        );

        if ($(moduleNode).height() > 20) {
          $(moduleNode).addClass('module-tools-panel');
          $(moduleDevToolsNode).insertBefore($(moduleNode).children().get(0));
        } else {
          $(moduleNode).addClass('module-unuse-panel');
        }
      });
  }
}
