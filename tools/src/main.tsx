import { GM_registerMenuCommand } from '$';
import DecodeURIComponent from "@/decodeURIComponent";
import {decodeByKey} from "@/utils";

export default (async () => {
  // 这是一个快速启动项目，你可以在这里开始写脚本
  (window as any).zyParse = decodeByKey;
  (window as any).zyAEMParse = (str, key = 'msg') => decodeByKey(str, key);
  GM_registerMenuCommand(`🚀 decodeURIComponent`, DecodeURIComponent);
})();
