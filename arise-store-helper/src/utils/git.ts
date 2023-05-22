import { get } from 'lodash-es';
import { message } from 'antd';
import { monkeyRequest } from 'shared';
import { monkeyWindow } from '$';

export async function openGitLabPage(gitPath) {
  const close = message.loading('Getting Git info...');
  try {
    const res = await monkeyRequest({
      url: `https://work.def.alibaba-inc.com/api/search?q=${encodeURIComponent(gitPath)}&t=app`,
    });

    const groupName = get(res, 'data.apps.0.group');
    const projectName = get(res, 'data.apps.0.project');

    monkeyWindow.open(`https://code.alibaba-inc.com/${groupName}/${projectName}`);
  } catch (e) {
    message.error(e.error);
  } finally {
    close();
  }
}

export async function openAstorePage(moduleName) {
  const close = message.loading('Getting Astore info...');
  try {
    const res = await monkeyRequest({
      url: `https://astore.alibaba-inc.com/module/getMyModuleList?siteId=163&keyword=${encodeURIComponent(
        moduleName,
      )}&pageSize=20&currentPage=1&moduleType=biz`,
    });
    const bizModuleId = get(res, 'data.dataList.0.id');

    monkeyWindow.open(`https://astore.alibaba-inc.com/?#/site/163/module/biz-module/${bizModuleId}`);
  } catch (e) {
    message.error(e.error);
  } finally {
    close();
  }
}
