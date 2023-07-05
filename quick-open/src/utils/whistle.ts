import { GM_setClipboard, unsafeWindow } from '$';
import { message } from 'antd';

export async function copyWhistleRule(gitPath: string) {
  if (!gitPath) {
    message.error("It's not a valid source code project!");
    return;
  }

  const whistle = `/g.alicdn.com/${gitPath}/.+?/(.+)/ http://localhost:3000/$1`;

  GM_setClipboard(whistle, 'text');

  alert('🎉 Whistle rule copied! Please paste it in Whistle.');

  unsafeWindow.open('http://127.0.0.1:8899/');
}
