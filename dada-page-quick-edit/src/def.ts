import { message } from 'antd';
import { get } from 'lodash-es';
import { monkeyRequest } from 'shared';

export async function openDefPage(gitPath) {
  const close = message.loading('Getting DEF info...');
  try {
    const res = await monkeyRequest({
      url: `https://work.def.alibaba-inc.com/api/search?q=${encodeURIComponent(gitPath)}&t=app`,
    });

    const id = get(res, 'data.apps.0.id');

    window.open(`https://work.def.alibaba-inc.com/app/${id}/index`);
  } catch (e) {
    message.error(e.error);
  } finally {
    close();
  }
}
