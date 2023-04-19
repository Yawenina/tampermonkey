import { get } from 'lodash-es';
import { isGCP } from './env';
import { message as Message } from 'antd';
import { monkeyRequest } from 'shared';
import { unsafeWindow } from '$';

function getGitRepositoryName() {
  const scriptTagArr = document.getElementsByTagName('script');
  let path = '';
  for (let i = 0; i < scriptTagArr.length; i++) {
    if (scriptTagArr.item(i).src.search(/gcp-lzd-project-/) !== -1) {
      path = scriptTagArr.item(i).src;
      break;
    }
  }
  const [gitReoisitoryName] = path.match(/(?<=gcp-lzd-project-)[\w+-]+\w+/);
  return gitReoisitoryName;
}

export async function openGitLabPage() {
  if (isGCP()) {
    try {
      const name = getGitRepositoryName();
      if (typeof name !== 'string') {
        throw new Error("It's not a valid source code project!");
      }
      window.open(`http://gitlab.alibaba-inc.com/gcp-lzd-project/${name}`);
    } catch (e) {
      alert(e);
    }
  }
}

export async function openGcpDefPage() {
  if (isGCP()) {
    try {
      const name = getGitRepositoryName();
      if (typeof name !== 'string') {
        throw new Error("It's not a valid source code project!");
      }

      const res = await monkeyRequest({
        url: `https://work.def.alibaba-inc.com/api/search?q=${encodeURIComponent(name)}&t=app`,
      });

      const id = get(res, 'data.apps.0.id');
      window.open(`https://work.def.alibaba-inc.com/app/${id}/index`);
    } catch (e) {
      alert(e);
    }
  }
}

export function openPreReleasePage() {
  if (isGCP()) {
    const elmArr = document.getElementsByTagName('a');
    let path = elmArr[elmArr.length - 2].href;
    window.open(path.replace('pre-www', 'pre-wormhole'));
  }
}
