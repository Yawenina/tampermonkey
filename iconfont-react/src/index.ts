import { isEmptyColor, parseColors } from "@iconify/tools/lib/colors/parse";
import { removeBadAttributes } from "@iconify/tools/lib/svg/cleanup/attribs";
import { checkBadTags } from "@iconify/tools/lib/svg/cleanup/bad-tags";
import { cleanupInlineStyle } from "@iconify/tools/lib/svg/cleanup/inline-style";
import { cleanupRootStyle } from "@iconify/tools/lib/svg/cleanup/root-style";
import { cleanupSVGRoot } from "@iconify/tools/lib/svg/cleanup/root-svg";
// import { convertStyleToAttrs } from "@iconify/tools/lib/svg/cleanup/svgo-style";
import { SVG } from "@iconify/tools/lib/svg/index";

declare const unsafeWindow: any;
declare const $: any;

async function cleanupSVG(svg) {
  await cleanupInlineStyle(svg);
  //   await convertStyleToAttrs(svg);
  cleanupSVGRoot(svg);
  await checkBadTags(svg);
  await removeBadAttributes(svg);
  await cleanupRootStyle(svg);
}

const reactTemplate = (svgName, svgStr) => {
  svgName = svgName
    .replace(/-(\w)/g, (all, letter) => letter.toUpperCase())
    .replace(/^[a-z]/, (s) => s.toUpperCase());

  svgStr = svgStr.replace(/^<svg /, `<svg {...props} `);

  return [
    `import React from "react";`,
    "",
    `export const ${svgName}Icon = (props) => {`,
    `	return ${svgStr};`,
    `};`,
  ].join("\n");
};

// @ts-ignore
window.iconfontRunMain = async () => {
  everytime(
    () =>
      !!document.querySelector(".mp-e2e-content .download-btns") &&
      !document.getElementById("react-download"),
    () => {
      const btns = document.querySelector(".mp-e2e-content .download-btns");
      unsafeWindow.downloadReactFile = async function () {
        const svgStr = $(".stage.J_stage svg")[0].outerHTML;
        const svg = new SVG(svgStr);
        await cleanupSVG(svg);
        await parseColors(svg, {
          defaultColor: "currentColor",
          callback: (attr, colorStr, color) => {
            return !color || isEmptyColor(color) ? colorStr : "currentColor";
          },
        });

        const finalSvg = svg.toString();

        const svgName = $(".mp-e2e-body .top-title span")[0].innerText;
        const reactStr = reactTemplate(svgName, finalSvg);

        downloadReactFile(`${svgName}.tsx`, reactStr);
      };
      $(btns).prepend(
        `<span id="react-download" class="btn btn-normal mr20" onclick="downloadReactFile()" >React \u4E0B\u8F7D</span>`
      );
    }
  );
};

function downloadReactFile(name, content) {
  const aLink = document.createElement("a");
  const blob = new Blob([content]);
  aLink.download = name;
  aLink.href = URL.createObjectURL(blob);

  aLink.click();
}

function wait(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

async function everytime(fn, callback) {
  while (true) {
    await wait(500);
    const result = fn();
    if (result) {
      callback(result);
    }
  }
}

async function waitFor(fn) {
  do {
    await wait(500);
  } while (!fn());

  return fn();
}
