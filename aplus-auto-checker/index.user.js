// ==UserScript==
// @name         Aplus auto checker
// @namespace    http://tampermonkey.net/
// @version      1.11.1
// @description  try to take over the world!
// @author       You
// @include      /^https:\/\/sellercenter(-staging)?\.lazada\..*$/
// @include      /^https:\/\/(pre-)?workstation\.lazada\..*$/
// @include      /^https:\/\/gsp(-stg)?\.lazada\..*$/
// @include      /^https:\/\/(education|university)(-staging)?\.lazada\..*$/
// @include      /^https:\/\/.*\.lazada-seller\.cn.*$/
// @include      /^https:\/\/lazada\.kr.*$/
// @grant        unsafeWindow
// @grant        GM_info
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
 (function() {
  'use strict';
  console.log(`[AplusChecker] version ${GM_info.script.version}`);

  const typeColor = (type = 'default') => {
      let color = ''
      switch (type) {
          case 'primary':
              color = '#2d8cf0'
              break
          case 'success':
              color = '#19be6b'
              break
          case 'info':
              color = '#909399'
              break
          case 'warning':
              color = '#ff9900'
              break
          case 'danger':
              color = '#f03f14'
              break
          case 'default':
              color = '#35495E'
              break
          default:
              color = type
              break
      }
      return color
  }

  const logPretty = (event = '', logkey = '', spm = '', error) => {
      const color = typeColor(error ? 'danger' : 'primary');
      console.log(
          `%c ${event} %c ${logkey} %c ${spm} %c ${error || 'good'} %c`,
          `background:${color};border:1px solid ${color}; padding: 2px; border-radius: 4px 0 0 4px; color: #fff;`,
          `border:1px solid ${color}; padding: 2px; border-right: 0; color: ${color};`,
          `border:1px solid ${color}; padding: 2px; border-right: 0; color: ${color};`,
          `border:1px solid ${color}; padding: 2px; border-radius: 0 4px 4px 0; color: ${color};`,
          'background:transparent'
      )
  }

  let printLogs = [];
  const printMsgDebounce = _.debounce(() => {
      console.table(printLogs);
      printLogs = [];
  }, 500);
  const printMsg = obj => {
     // printLogs.push({ event: obj.event, logkey: obj.logkey, spm: obj.spm, error: obj.error });
     // printMsgDebounce();
     logPretty(obj.event, obj.logkey, obj.spm, obj.error );

  };

  const expSPMCache = {};
  const getValidSpmDErrorMsg = str => {
      if (!str) {
          return 'No_SPM';
      }

      const arr = str.split('.');
      for ( let i = 0; i < arr.length; i+= 1) {
          const item = arr[i];
          if (item === '0' && i === 0) {
              return 'No_SPM_A';
          }
          if (item === '0' && i === 1) {
              return 'No_SPM_B';
          }
          if (item === '0' && i === 2) {
              return 'No_SPM_C';
          }
          // if (item === '0' && i === 3) {
          //     return 'No_SPM_D';
          // }

          if (item.indexOf('-') > -1) {
              return 'Dont_use_strikethrough';
          }

          if (item.match(/^.*[A-Z]+.*$/)) {
              return 'Dont_use_capital';
          }
      }
      return false;
  };
  const getRepeatReportErrorMsg = (event, spm) => {
      if (event === 'EXP' && spm) {
          if (!expSPMCache[spm]) {
              expSPMCache[spm] = 1;
          } else {
              expSPMCache[spm] = expSPMCache[spm] + 1;
              return `Repeated_reporting_${expSPMCache[spm]}_times`;
          }
      }
      return false;
  }
  const getClickReportAfterExpErrorMsg = (event, spm) => {
      if (event === 'CLK' && spm) {
          if (!expSPMCache[spm]) {
              return 'Clk_report_must_after_exp';
          }
      }
      return false;
  };
  const getTotalErrorMsg = (logkey, event, spm) => {
      const error = [];
      const error1 = getValidSpmDErrorMsg(spm);
      const error2 = getRepeatReportErrorMsg(event, spm);
      const error3 = getClickReportAfterExpErrorMsg(event, spm);
      if (error1) {
          error.push(error1);
      }
      if (error2) {
          error.push(error2);
      }
      if (error3) {
          error.push(error3);
      }
      return error.length ? error.join(','): false;
  }
  const checkLog = (logkey, event, gokey = '') => {
      if (['/x.p.d'].includes(logkey)) {
          return;
      }

      const autoKeys = [
          '/lzdkr.aplus-auto.exp',
          '/lzdseller.aplus-module-auto.exp',
          '/lzdkr.aplus-module-auto.exp',
          '/lzdseller.aplus-module-auto.exp',
          '/lzdseller.aplus-auto.exp',
          '/lzdseller.aplus-auto.clk',
          '/lzdws.aplus-auto.exp',
          '/lzdws.aplus-auto.clk'
      ];;
      if (autoKeys.includes(logkey)) {
          const expList = JSON.parse(decodeURIComponent(gokey).split('=')[1].split('&')[0]);
          for ( const item of expList) {
              printMsg({ event, logkey, spm: item.spm, error: getTotalErrorMsg(logkey, event, item.spm)});
          }
          return;
      }

      let spm = '';
      for ( const gokeyItem of gokey.split('&')) {
          if (gokeyItem.indexOf('spm=') === 0) {
              spm = gokeyItem.split('=')[1];
              break;
          }
      }


      printMsg({ event, logkey, spm, error: getTotalErrorMsg(logkey, event, spm) });
  };



  let tempFunc;
  unsafeWindow.goldlog = {};
  Object.defineProperty(unsafeWindow.goldlog, 'record', {
      get() {
          return tempFunc;
      },
      set(val) {
          tempFunc = function() {
              const args =[].slice.call(arguments);
              checkLog(args[0], args[1], args[2]);
              val.apply(unsafeWindow.goldlog, arguments);
          }
      }
  });
})();

