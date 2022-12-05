// ==UserScript==
// @name         Aplus auto checker
// @namespace    http://tampermonkey.net/
// @version      1.14.0
// @description  try to take over the world!
// @author       You
// @include      /^https:\/\/sellercenter(-staging)?\.lazada\..*$/
// @include      /^https:\/\/(.+)(pre-)?workstation\.lazada\..*$/
// @include      /^https:\/\/gsp(-stg)?\.lazada\..*$/
// @include      /^https:\/\/(education|university)(-staging)?\.lazada\..*$/
// @include      /^https:\/\/.*\.lazada-seller\.cn.*$/
// @include      /^https:\/\/(pages|pre-wormhole).lazada\..*$/
// @include      /^https:\/\/lazada\.kr.*$/
// @grant        unsafeWindow
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @run-at       document-body
// @require      https://cdn.bootcdn.net/ajax/libs/underscore.js/1.11.0/underscore.min.js
// @updateURL    https://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/aplus-auto-checker/index.user.js
// @downloadURL  https://gitlab.alibaba-inc.com/lazada/tampermonkey/raw/master/aplus-auto-checker/index.user.js
// ==/UserScript==

/**
 * this script will check the follow cases:
 * 1. Valid SPM D
 * 2. Report report SPM D exposure
 * 3. Is click report after exposure
 */
 (function () {
  "use strict";
  console.log(`[AplusChecker] version ${GM_info.script.version}`);

  const reportUsage = () => {
    if (
      !unsafeWindow.goldlog ||
      !unsafeWindow.goldlog.record ||
      !unsafeWindow.goldlog.spm_ab
    ) {
      return setTimeout(reportUsage, 1000);
    }

    const params = [`version=${GM_info.script.version}`];
    const spmAb = unsafeWindow.goldlog.spm_ab;
    const pvparams = [...params];
    if (spmAb.length) {
      pvparams.push(`spm=${spmAb.join(".")}.apluschecker.open`);
    }
    unsafeWindow.goldlog.record(
      "/lzdseller.tampermoneky.apluschecker",
      "CLK",
      pvparams.join("&")
    );

    // set menu
    GM_registerMenuCommand("Open Aplus Page", () => {
      const pageparams = [...params];
      pageparams.push(`spm=${spmAb.join(".")}.apluschecker.page`);
      unsafeWindow.goldlog.record(
        "/lzdseller.tampermoneky.apluschecker",
        "CLK",
        pageparams.join("&")
      );
      window.open(
        `https://aplus-sg.alibaba-inc.com/aplus/page.htm?pageId=170&bu_code=a&id=${spmAb.join(
          "."
        )}`
      );
    });
  };

  const typeColor = (type = "default") => {
    let color = "";
    switch (type) {
      case "primary":
        color = "#2d8cf0";
        break;
      case "success":
        color = "#19be6b";
        break;
      case "info":
        color = "#909399";
        break;
      case "warning":
        color = "#ff9900";
        break;
      case "danger":
        color = "#f03f14";
        break;
      case "default":
        color = "#35495E";
        break;
      default:
        color = type;
        break;
    }
    return color;
  };

  const logPretty = (
    event = "",
    logkey = "",
    spm = "",
    argString = "",
    error
  ) => {
    const color = typeColor(error ? "danger" : "primary");
    console.log(
      `%c ${event} %c ${logkey} %c ${spm} %c  ${argString || "--"} %c ${
        error || "good"
      } %c`,
      `background:${color};border:1px solid ${color}; padding: 2px; border-radius: 4px 0 0 4px; color: #fff;`,
      `border:1px solid ${color}; padding: 2px; border-right: 0; color: ${color};`,
      `border:1px solid ${color}; padding: 2px; border-right: 0; color: ${color};`,
      `border:1px solid ${color}; padding: 2px; border-right: 0; color: ${color};`,
      `border:1px solid ${color}; padding: 2px; border-radius: 0 4px 4px 0; color: ${color};`,
      "background:transparent"
    );
  };

  const dataFields = ["data-skuid", "data-more", "data-orderid", "data-itemid"];

  const printMsg = (obj) => {
    const argString = obj.exargs
      ? Object.keys(obj.exargs)
          .filter((key) => dataFields.includes(key))
          .map((key) => {
            return `${key}=${decodeURIComponent(obj.exargs[key])}`;
          })
          .join("&")
      : "";

    logPretty(obj.event, obj.logkey, obj.spm, argString, obj.error);
  };

  const expSPMCache = {};
  const VALID_STRATEGY = {
    spm: ({ spm }) => {
      if (!spm) {
        return "No_SPM";
      }

      if (spm.match(/^.*[A-Z]+.*$/)) {
        return "Dont_use_capital";
      }

      const [spma, spmb, spmc, spmd] = spm.split(".");
      if (!spma || spma === "0") {
        return "No_SPM_A";
      }

      if (!spmb || spmb === "0") {
        return "No_SPM_B";
      }

      if (!spmc || spmc === "0") {
        return "No_SPM_C";
      }

      const spmSubfixReg = /_\d{3,}$/;
      if (spmc.match(spmSubfixReg)) {
        return "Dnot_use_business_id_on_SPM_C";
      }
      if (spmd.match(spmSubfixReg)) {
        return "Dnot_use_business_id_on_SPM_D";
      }

      // some site spma have strikethrough, we just ignore it
      if (
        spmb.indexOf("-") > -1 ||
        spmc.indexOf("-") > -1 ||
        spmd.indexOf("-") > -1
      ) {
        return "Dont_use_strikethrough";
      }
      return false;
    },
    repeat: ({ event, spm }) => {
      if (event === "EXP" && spm) {
        if (!expSPMCache[spm]) {
          expSPMCache[spm] = 1;
        } else {
          expSPMCache[spm] = expSPMCache[spm] + 1;
          return `Repeated_reporting_${expSPMCache[spm]}_times`;
        }
      }
      return false;
    },
    order: ({ event, spm, logkey }) => {
      if (
        event === "CLK" &&
        spm &&
        logkey.indexOf("/lzdseller.tampermoneky") !== 0
      ) {
        if (!expSPMCache[spm]) {
          return "Clk_report_must_after_exp";
        }
      }
      return false;
    },
  };
  const getTotalErrorMsg = ({
    logkey,
    event,
    spm,
    scope = ["spm", "repeat", "order"],
  }) => {
    const error = [];
    for (const strategy of scope) {
      if (VALID_STRATEGY[strategy]) {
        const errorItem = VALID_STRATEGY[strategy]({ logkey, event, spm });
        if (errorItem) {
          error.push(errorItem);
        }
      }
    }

    return error.length ? error.join(",") : false;
  };
  const checkLog = (logkey, event, gokey = "") => {
    if (["/x.p.d"].includes(logkey)) {
      return;
    }

    const autoKeys = [
      "/lzdkr.aplus-auto.exp",
      "/lzdseller.aplus-module-auto.exp",
      "/lzdkr.aplus-module-auto.exp",
      "/lzdseller.aplus-module-auto.exp",
      "/lzdseller.aplus-auto.exp",
      "/lzdseller.aplus-auto.clk",
      "/lzdws.aplus-auto.exp",
      "/lzdws.aplus-auto.clk",
      '/lzd.aplus-auto.exp',
      '/lzd.aplus-module-auto.exp',
      '/lzd.aplus-auto.clk',
      '/lzd.aplus-module-manual.exp',
      '/lzd.aplus-manual.exp',
      '/lzd.aplus-manual.clk',
      '/lzd.aplus-manual.other'
    ];
    if (autoKeys.includes(logkey)) {
      const eachVal = gokey.split("=")[1].split("&")[0];
      const expList = JSON.parse(decodeURIComponent(eachVal));
      for (const item of expList) {
        printMsg({
          event,
          logkey,
          spm: item.spm,
          exargs: item.exargs,
          error: getTotalErrorMsg({ logkey, event, spm: item.spm }),
        });
      }
      return;
    }

    // the follow process is not auto keys
    // only need to check is SPM valid
    let spm = "";
    const exargs = {};
    for (const gokeyItem of gokey.split("&")) {
      if (gokeyItem.indexOf("spm=") === 0) {
        spm = gokeyItem.split("=")[1];
      } else {
        const itemArray = gokeyItem.split("=");
        if (itemArray.length === 2) {
          exargs[itemArray[0]] = itemArray[1];
        }
      }
    }

    let error = "";
    if (spm) {
      error = getTotalErrorMsg({ logkey, event, spm, scope: ["spm"] });
    }

    printMsg({ event, logkey, spm, exargs, error });
  };

  reportUsage();

  let tempFunc;
  unsafeWindow.goldlog = {};
  Object.defineProperty(unsafeWindow.goldlog, "record", {
    get() {
      return tempFunc;
    },
    set(val) {
      tempFunc = function () {
        const args = [].slice.call(arguments);
        checkLog(args[0], args[1], args[2]);
        val.apply(unsafeWindow.goldlog, arguments);
      };
    },
  });
})();
