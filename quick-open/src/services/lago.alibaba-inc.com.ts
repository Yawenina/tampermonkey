import { BRADGE_REQUEST } from '../bradge';
import { get } from 'lodash-es';

export function createLAGOCCService(request: ReturnType<typeof BRADGE_REQUEST.createRequest>) {
  return {
    async pagePubPre({ appId }) {
      const { data } = await request({
        url: `//lago.alibaba-inc.com/api/publish/page/push`,
        method: 'POST',
        data: {
          env: ['pre', 'daily'],
          device: 'PC',
          appId,
        },
      });
      return data;
    },
    // 获取页面信息
    async getPageInfo({ pathname }) {
      const { data: pageList } = await request({
        url: `https://lago.alibaba-inc.com/api/page/list`,
        method: 'POST',
        data: {
          pageSize: 10,
          current: 1,
          isOwner: false,
          filters: {
            pathname,
          },
          workspaceId: 'lzd_asc',
        },
      });
      const pageId = get(pageList, 'list[0].id');
      return pageId;
    },
    async updatePageInfo({ appId, env, LAGO_SPMB, LAGO_RESOURCE_JS, LAGO_RESOURCE_CSS }) {
      const { data } = await request({
        url: `https://lago.alibaba-inc.com/api/page/content/update`,
        method: 'POST',
        data: {
          appId: '8153',
          device: 'PC',
          env: 'pre',
          content: {
            LAGO_SPMB: '23555074',
            LAGO_RESOURCE_JS: '/lazada/review-managements/2.0.3/manage/index.js',
            LAGO_RESOURCE_CSS: '/lazada/review-managements/2.0.3/manage/index.css ',
          },
        },
      });
      return data;
    },
  };
}
