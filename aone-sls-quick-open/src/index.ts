import { h, render } from "preact";
import { BRADGE_REQUEST, isReady } from "./bradge";
import { Panel } from "./panel";
import { everytime } from "./utils";

// @ts-ignore
window.runTampermonkey = function () {
  location.host === "cc.alibaba-inc.com" ? runCC() : runAone();
};

// @ts-ignore
function runCC() {
  isReady.connect();
  BRADGE_REQUEST.connect();
}

function runAone() {
  everytime(
    () => document.querySelector("#appcenter-app-detail-basic"),
    (dom) => {
      const leftPanels = dom.querySelector(".col-md-8.zero-padding-right");

      // preact render to dom
      const preactDom = document.createElement("div");
      preactDom.className = "panel panel-default box clearfix";

      leftPanels.insertBefore(preactDom, leftPanels.children[1]);

      render(h(Panel, {}), preactDom);
    }
  );
}
