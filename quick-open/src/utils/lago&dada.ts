import { get } from 'lodash-es';
import { isLAGO } from './env';
import { message as Message } from 'antd';
import { monkeyRequest } from 'shared';
import { unsafeWindow } from '$';

export async function openEditPage() {
  if (isLAGO()) {
    const url = await getLAGOUrl('editor');
    url && unsafeWindow.open(url);
    return;
  }

  const dadaId = await getDadaId();
  unsafeWindow.open(`https://dada.alibaba-inc.com/dada/pdEditor?id=${dadaId}&action=page`);
}

export async function openPublishPage() {
  if (isLAGO()) {
    const url = await getLAGOUrl('publish');
    url && unsafeWindow.open(url);
    return;
  }
  const dadaId = await getDadaId();
  unsafeWindow.open(`https://dada.alibaba-inc.com/dada/publish?pageId=${dadaId}`);
}

async function getLAGOUrl(action) {
  const close = Message.loading('Getting page detail info from LAGO platform...');

  try {
    // asctraffic.pre-workstation.lazada.com -> pre-workstation.lazada.com
    const domain = (() => {
      if (
        location.host.includes('workstation.lazada.com') &&
        !/^(pre-)?workstation\.lazada\.com$/.test(location.host)
      ) {
        // 子应用
        return location.host.split('.').slice(1).join('.');
      }
      return location.host;
    })();
    const url = `https://lago.alibaba-inc.com/api/common/open/page/${action}?pathname=${location.pathname}&domain=${domain}`;
    console.log('🚀 #### ~ getLAGOUrl ~ url', url);
    const result = await monkeyRequest({
      url,
    });

    const resultUrl = result.data;

    return resultUrl?.replace?.(/publish$/, 'publish/list');
  } catch (e) {
    console.error(e);
    Message.error('Getting info error, pls confirm that the page is published by LAGO platform!');
  } finally {
    close();
  }
}

async function getDadaId() {
  const data = await getDadaJson();
  const dadaId = get(data, 'id');
  if (!dadaId) {
    throw new Error();
  }

  return dadaId;
}

async function getDadaJson() {
  const close = Message.loading('Getting page detail info from dada platform...');
  try {
    const bizName = get(unsafeWindow, 'lzdCommonData.dadaConfig.bizName');
    const pathName = location.pathname === '/' ? '/apps/home/new' : location.pathname;
    const result = await monkeyRequest({
      url: `https://dada.alibaba-inc.com/open/api/dada/read?livePage=${pathName}&pageSize=30${
        bizName ? `&bizName=${bizName}` : ''
      }`,
    });
    const data = result.data.filter((item) => item?.biz === bizName);

    return data?.[0] || {};
  } catch (e) {
    console.error(e);
    Message.error('Getting info error, pls confirm that the page is published by Dada platform!');
  } finally {
    close();
  }
}

export function getGitPath() {
  let resource: string =
    get(unsafeWindow, 'lzdCommonData.dadaConfig.resource.js') ?? get(unsafeWindow, 'lzdCommonData.dadaConfig.resource');

  if (!resource) {
    // get meta tag content
    // @ts-ignore
    const js = document.querySelector('link[data-main-js]')?.href;
    js && (resource = js);
  }

  if (typeof resource !== 'string') {
    throw new Error("It's not a valid source code project!");
  }

  resource = resource.replace(/\{HOST}/g, 'g.alicdn.com');

  const [, gitPath] = resource.match(/[\w.]+\/(.+?\/.+?)\/.+/) || [];

  return gitPath;
}
