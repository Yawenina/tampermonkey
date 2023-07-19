import { createDebug } from 'shared/log';
import { name } from '../../package.json';

// You can use `localStorage.debug = 'tampermonkey:*'` to enable all debug logs
export const debug = createDebug(name);

export const decodeByKey = (str, key?) => {
  const str1 = decodeURIComponent(str)?.split("&").map(substr => decodeURIComponent(substr));
  if (!key) return str1;
  const str2 = str1?.find(item => item?.startsWith(key));
  if (!str2) {
    return str1
  } else {
    return decodeByKey(str2);
  }
}
