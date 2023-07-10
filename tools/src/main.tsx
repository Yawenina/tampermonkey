import { GM_registerMenuCommand } from '$';
import DecodeURIComponent from "@/decodeURIComponent";

export default (async () => {
  // 这是一个快速启动项目，你可以在这里开始写脚本
  GM_registerMenuCommand(`🚀 decodeURIComponent`, DecodeURIComponent);
})();
