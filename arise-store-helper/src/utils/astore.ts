import { get } from 'lodash-es';
import { message } from 'antd';
import { monkeyRequest } from 'shared';

export async function getAstoreAllModules() {
  try {
    const res = await monkeyRequest({
      url: `https://astore.alibaba-inc.com/module/getMyModuleList?siteId=163&keyword=&pageSize=100&currentPage=1&moduleType=biz`,
    });
    return res;
  } catch (e) {
    message.error(e.error);
  }
}
