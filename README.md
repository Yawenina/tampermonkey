# 🐒 Tampermonkey 油猴脚本合计

**没什么好说的，外挂，纯纯的外挂**

**外挂，知道吧？就是那种用起来很爽的东西**

## 咋用？

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器插件
2. 点击下面的链接安装脚本
   - [Lazada 开发用我，每天节省 30 分钟](https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/%2FUsers%2Fyee.wang%2FCode%2Flibs%2Ftampermonkey/dist/Lazada%20%E5%BC%80%E5%8F%91%E7%94%A8%E6%88%91%EF%BC%8C%E6%AF%8F%E5%A4%A9%E8%8A%82%E7%9C%81%2030%20%E5%88%86%E9%92%9F%EF%BC%81.js)
   - [SLS 日志快速打开](https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/vite-aone-sls-quick-open/dist/aone-sls-quick-open.user.js)
   - [Aplus 埋点快速校验](https://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/aplus-auto-checker/index.user.js)
   - [Iconfont React 组件扩展](https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/iconfont-react/index.user.js)
   - [iTrace 页面情况，快速查看](https://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/itrace-quick-view/index.user.js)

## 咋开发？

你也想做外挂？赶紧来，简单的很

1. clone 本项目，用 `pnpm i` 安装依赖
2. 复制 `start-template` 文件夹，重命名为你的脚本名字
3. cd 到对应目录下，`pnpm dev` 启动开发
4. 改巴改巴，开发完成后，`pnpm build` 打包
5. 推送到 gitlab，完事了

**多说一嘴**

- `shared` 目录是公共的工具库，可以在你的脚本中直接引用，不用重复造轮子
- `start-template` 目录是脚本的模板，你可以直接复制，然后改名字，改内容，改版本号，改描述
- `dist` 目录得传到 gitlab，不然别人怎么用呢
- 发布新版本的时候，记得改 `package.json` 里的 `version` 字段

# 🐒 Tampermonkey Scripts Collection

No need to explain much, it's all about cheating, pure and simple cheating.
Cheating, you know? It's that kind of thing that feels great to use.

## How to Use?

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension.
2. Click on the script links below to install them:
   - [Lazada Dev Helper - Save 30 mins every day!](https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/%2FUsers%2Fyee.wang%2FCode%2Flibs%2Ftampermonkey/dist/Lazada%20%E5%BC%80%E5%8F%91%E7%94%A8%E6%88%91%EF%BC%8C%E6%AF%8F%E5%A4%A9%E8%8A%82%E7%9C%81%2030%20%E5%88%86%E9%92%9F%EF%BC%81.js)
   - [SLS Log Quick Open](https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/vite-aone-sls-quick-open/dist/aone-sls-quick-open.user.js)
   - [Aplus Auto Checker](https://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/aplus-auto-checker/index.user.js)
   - [Iconfont React Component Extensions](https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/iconfont-react/index.user.js)
   - [iTrace Quick View](https://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/itrace-quick-view/index.user.js)

## How to Develop?

Do you also want to cheat? Come and join us, it's simple!

1. Clone this project and install dependencies using `pnpm i`.
2. Copy the `start-template` folder and rename it to your script name.
3. Change directory to your script folder and run `pnpm dev` to start developing.
4. Edit and modify as you wish. When done, run `pnpm build` to build.
5. Push your changes to GitLab and you're done.

**A few more tips:**

- The `shared` folder contains shared utility libraries that can be directly used in your script without reinventing the wheel.
- The `start-template` folder is a script template that you can simply copy, rename, and customize.
- The `dist` folder needs to be uploaded to GitLab so that others can use it.
- When publishing a new version, remember to update the `version` field in `package.json`.
