import { h, render } from 'preact';
import { everytime } from './utils';
import Button from './components/clean-cache-button';
import { monkeyWindow } from '$';

export default function cleanCache() {
  const $ = monkeyWindow.$;
  everytime(
    () => {
      const astoreModuleInfo = $('.module-detail-info .module-base-desc .module-header .next-btn-group');
      const astorePublishInfo = $('.publish-status-bar .next-form-item-control p');

      return $(astoreModuleInfo).get(0) || astorePublishInfo.get(0);
    },
    (parentNode) => {
      const firstButtonNode = parentNode.querySelectorAll('.next-btn')[0];
      const prdCacheButtonNode = document.createElement('button');
      const preCacheButtonNode = document.createElement('button');

      const prdReferanceNode = parentNode.insertBefore(prdCacheButtonNode, firstButtonNode);
      prdCacheButtonNode.className = 'next-btn next-medium next-btn-normal';
      prdCacheButtonNode.style.margin = '0px 5px';

      render(h(Button, { text: '预发缓存清除', env: 'prod' } as any), prdReferanceNode);

      const preReferanceNode = parentNode.insertBefore(preCacheButtonNode, firstButtonNode);
      preCacheButtonNode.className = 'next-btn next-medium next-btn-secondary';
      preCacheButtonNode.style.margin = '0px 5px';
      render(h(Button, { text: '线上缓存清除', env: 'pre' } as any), preReferanceNode);
    },
  );
}
