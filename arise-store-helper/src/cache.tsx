import { h, render } from 'preact';
import { everytime } from './utils';
import NextButton from './components/clean-cache-button';
import CleanAllButton from './components/clean-all-button';

import $ from 'jquery';

export default function cleanCache() {
  everytime(
    () => {
      const astoreModuleInfo = $('.module-detail-info .module-base-desc .module-header .next-btn-group');
      // const astorePublishInfo = $('.publish-status-bar .next-form-item-control p');

      return $(astoreModuleInfo).get(0);
    },
    (parentNode) => {
      const firstButtonNode = parentNode.querySelectorAll('.next-btn')[0];
      const prdCacheButtonNode = document.createElement('button');
      const preCacheButtonNode = document.createElement('button');
      const preAllCacheButtonNode = document.createElement('button');
      const prdAllCacheButtonNode = document.createElement('button');

      const preAllReferanceNode = parentNode.insertBefore(preAllCacheButtonNode, firstButtonNode);
      preAllReferanceNode.className = 'next-btn next-medium next-btn-normal';
      preAllReferanceNode.style.margin = '0px 5px';
      render(h(CleanAllButton, { text: '一键清除预发', env: 'pre' } as any), preAllReferanceNode);

      const prdAllReferanceNode = parentNode.insertBefore(prdAllCacheButtonNode, firstButtonNode);
      prdAllReferanceNode.className = 'next-btn next-medium next-btn-normal next-btn-warning';
      prdAllReferanceNode.style.margin = '0px 5px';
      render(h(CleanAllButton, { text: '一键清除线上', env: 'prod' } as any), prdAllReferanceNode);

      const preReferanceNode = parentNode.insertBefore(preCacheButtonNode, firstButtonNode);
      preCacheButtonNode.className = 'next-btn next-medium next-btn-normal';
      preCacheButtonNode.style.margin = '0px 5px';
      render(h(NextButton, { text: '清除预发缓存', env: 'pre' } as any), preReferanceNode);

      const prdReferanceNode = parentNode.insertBefore(prdCacheButtonNode, firstButtonNode);
      prdCacheButtonNode.className = 'next-btn next-medium next-btn-secondary';
      prdCacheButtonNode.style.margin = '0px 5px';
      render(h(NextButton, { text: '清除线上缓存', env: 'prod' } as any), prdReferanceNode);
    },
  );
}
