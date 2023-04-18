import { BRADGE_REQUEST } from '../../../shared/iframe-bradge';
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
    async getPageInfo({ pathname, workspaceId }) {
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
          workspaceId,
        },
      });
      const pageId = get(pageList, 'list').find((item) => item.pathname === pathname);
      return pageId;
    },
    async updatePageInfo({ appId, ...config }) {
      const { data } = await request({
        url: `https://lago.alibaba-inc.com/api/page/content/update`,
        method: 'POST',
        data: {
          appId,
          device: 'PC',
          env: 'pre',
          content: config,
        },
      });
      return data;
    },
  };
}
