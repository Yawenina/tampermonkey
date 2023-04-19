import { message } from 'antd';
import { get } from 'lodash-es';
import { monkeyRequest } from 'shared';
import { monkeyWindow } from '$';

export async function openDefPage(gitPath) {
  const close = message.loading('Getting DEF info...');
  try {
    const res = await monkeyRequest({
      url: `https://work.def.alibaba-inc.com/api/search?q=${encodeURIComponent(gitPath)}&t=app`,
    });

    const id = get(res, 'data.apps.0.id');

    monkeyWindow.open(`https://work.def.alibaba-inc.com/app/${id}/index`);
  } catch (e) {
    console.log(e, 'xxx');
    message.error(e.error);
  } finally {
    close();
  }
}
