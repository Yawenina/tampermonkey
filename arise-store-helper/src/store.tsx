import { h, render } from 'preact';
import { sleep } from './utils';
import h5ModuleDevTools from './components/h5-module-dev-tools';
import pcModuleDevTools from './components/pc-module-dev-tools';
import { monkeyWindow, unsafeWindow } from '$';
import randomColor from 'randomcolor';
import $ from 'jquery';

declare global {
  interface Window {
    $: any;
  }
}

function h5DevTools() {
  // const $ = monkeyWindow.$ || unsafeWindow.$;
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
          h(h5ModuleDevTools, {
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

function pcDevTools() {
  // const $ = monkeyWindow.$;
  const ua = monkeyWindow.navigator.userAgent;
  const isMobile = ua.includes('Mobile') || ua.includes('Android');
  const prefix = isMobile ? 'arise-wl-' : 'arise-pc-';
  const parentNode = $('.pi-layout-container');
  const colours = randomColor({
    count: 100,
    format: 'rgba',
    alpha: 0.7,
  });

  $(document).on('scroll', init);

  init();

  function init() {
    $(parentNode)
      .find('*[data-modulename]')
      .not('.module-tools-panel')
      .each(async (index, moduleNode) => {
        // if moduel width is 0, it means the module is not visible
        const moduleNameId = $(moduleNode).attr('data-modulename');

        if (!moduleNameId) return null;

        if ($(moduleNode).height() > 20) {
          $(moduleNode).addClass('module-tools-panel').append('<div class="store-dev-tools"></div>');
        } else {
          $(moduleNode).addClass('module-unuse-panel');
        }

        await sleep(300);

        if ($(moduleNode).find('.store-dev-tools').get(0)) {
          render(
            h(pcModuleDevTools, {
              moduleAliasName: prefix + moduleNameId,
              moduleName: moduleNameId,
              backgroundColor: colours[index],
            }),
            $(moduleNode).find('.store-dev-tools').get(0),
          );
        }
      });
  }
}

export default function StoreDeveloperTools() {
  const ua = monkeyWindow.navigator.userAgent;
  const isMobile = ua.includes('Mobile') || ua.includes('Android');
  isMobile ? h5DevTools() : pcDevTools();
}
