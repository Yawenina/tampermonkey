// ==UserScript==
// @name         Arise Store Helper
// @namespace    miravia
// @version      1.0.4
// @author       Alan Yi
// @icon         https://img.alicdn.com/imgextra/i4/O1CN01UvYSTJ1Y7XjzREWkC_!!6000000003012-55-tps-30-30.svg
// @downloadURL  https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/arise-store-helper/dist/Arise%20Store%20Helper.user.js
// @updateURL    https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/arise-store-helper/dist/Arise%20Store%20Helper.user.js
// @match        *://*.miravia.es/shop/*
// @match        *://*.miravia.es/cl/store-test/*
// @match        *://*.miravia.es/cl/store/*
// @match        *://astore.alibaba-inc.com/*
// @require      https://cdn.jsdelivr.net/npm/preact@10.12.1/dist/preact.min.js
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// ==/UserScript==

((e) => {
  const t = document.createElement('style');
  (t.dataset.source = 'vite-plugin-monkey'), (t.innerText = e), document.head.appendChild(t);
})(` .store-dev-tools{position:absolute;z-index:3;top:0;bottom:0;right:0;width:48px;display:flex;flex-direction:column;align-items:center;justify-content:center}.store-dev-tools{position:absolute;z-index:10;top:0;bottom:0;right:0;width:48px;display:flex;flex-direction:column;align-items:center;justify-content:center}.store-dev-tools-icon{display:flex;justify-content:center;align-items:center;width:32px;height:32px;text-align:right;color:#6b5ff2;margin-bottom:16px;background:rgba(255,255,255,.7);font-size:18px;border-radius:50%}.store-dev-tools-panel{background-color:#dfe3e6b3;border-radius:8px;padding:2px 8px}.store-dev-tools-list{margin-top:20px}.store-dev-tools-list .store-btn-copy{color:#4361e4;margin-left:4px}
 `);

var __plugin_monkey_exposed = (function (b) {
  'use strict';
  var km = typeof global == 'object' && global && global.Object === Object && global;
  const Vm = km;
  var Wm = typeof self == 'object' && self && self.Object === Object && self,
    Um = Vm || Wm || Function('return this')();
  const Al = Um;
  var Gm = Al.Symbol;
  const Ri = Gm;
  var Cu = Object.prototype,
    qm = Cu.hasOwnProperty,
    Km = Cu.toString,
    po = Ri ? Ri.toStringTag : void 0;
  function Xm(e) {
    var t = qm.call(e, po),
      n = e[po];
    try {
      e[po] = void 0;
      var r = !0;
    } catch {}
    var i = Km.call(e);
    return r && (t ? (e[po] = n) : delete e[po]), i;
  }
  var Ym = Object.prototype,
    Qm = Ym.toString;
  function Jm(e) {
    return Qm.call(e);
  }
  var Zm = '[object Null]',
    ev = '[object Undefined]',
    Su = Ri ? Ri.toStringTag : void 0;
  function xu(e) {
    return e == null ? (e === void 0 ? ev : Zm) : Su && Su in Object(e) ? Xm(e) : Jm(e);
  }
  function tv(e) {
    return e != null && typeof e == 'object';
  }
  var nv = '[object Symbol]';
  function Dl(e) {
    return typeof e == 'symbol' || (tv(e) && xu(e) == nv);
  }
  function rv(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; ) i[n] = t(e[n], n, e);
    return i;
  }
  var iv = Array.isArray;
  const Fl = iv;
  var ov = 1 / 0,
    wu = Ri ? Ri.prototype : void 0,
    Eu = wu ? wu.toString : void 0;
  function $u(e) {
    if (typeof e == 'string') return e;
    if (Fl(e)) return rv(e, $u) + '';
    if (Dl(e)) return Eu ? Eu.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -ov ? '-0' : t;
  }
  function Ou(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var av = '[object AsyncFunction]',
    lv = '[object Function]',
    sv = '[object GeneratorFunction]',
    cv = '[object Proxy]';
  function uv(e) {
    if (!Ou(e)) return !1;
    var t = xu(e);
    return t == lv || t == sv || t == av || t == cv;
  }
  var dv = Al['__core-js_shared__'];
  const jl = dv;
  var _u = (function () {
    var e = /[^.]+$/.exec((jl && jl.keys && jl.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
  function fv(e) {
    return !!_u && _u in e;
  }
  var pv = Function.prototype,
    gv = pv.toString;
  function hv(e) {
    if (e != null) {
      try {
        return gv.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var mv = /[\\^$.*+?()[\]{}|]/g,
    vv = /^\[object .+?Constructor\]$/,
    bv = Function.prototype,
    yv = Object.prototype,
    Cv = bv.toString,
    Sv = yv.hasOwnProperty,
    xv = RegExp(
      '^' +
        Cv.call(Sv)
          .replace(mv, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$',
    );
  function wv(e) {
    if (!Ou(e) || fv(e)) return !1;
    var t = uv(e) ? xv : vv;
    return t.test(hv(e));
  }
  function Ev(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Tu(e, t) {
    var n = Ev(e, t);
    return wv(n) ? n : void 0;
  }
  function $v(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var Ov = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    _v = /^\w*$/;
  function Tv(e, t) {
    if (Fl(e)) return !1;
    var n = typeof e;
    return n == 'number' || n == 'symbol' || n == 'boolean' || e == null || Dl(e)
      ? !0
      : _v.test(e) || !Ov.test(e) || (t != null && e in Object(t));
  }
  var Iv = Tu(Object, 'create');
  const go = Iv;
  function Pv() {
    (this.__data__ = go ? go(null) : {}), (this.size = 0);
  }
  function Nv(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var Rv = '__lodash_hash_undefined__',
    Mv = Object.prototype,
    Av = Mv.hasOwnProperty;
  function Dv(e) {
    var t = this.__data__;
    if (go) {
      var n = t[e];
      return n === Rv ? void 0 : n;
    }
    return Av.call(t, e) ? t[e] : void 0;
  }
  var Fv = Object.prototype,
    jv = Fv.hasOwnProperty;
  function zv(e) {
    var t = this.__data__;
    return go ? t[e] !== void 0 : jv.call(t, e);
  }
  var Lv = '__lodash_hash_undefined__';
  function Hv(e, t) {
    var n = this.__data__;
    return (this.size += this.has(e) ? 0 : 1), (n[e] = go && t === void 0 ? Lv : t), this;
  }
  function oi(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (oi.prototype.clear = Pv),
    (oi.prototype.delete = Nv),
    (oi.prototype.get = Dv),
    (oi.prototype.has = zv),
    (oi.prototype.set = Hv);
  function Bv() {
    (this.__data__ = []), (this.size = 0);
  }
  function Ko(e, t) {
    for (var n = e.length; n--; ) if ($v(e[n][0], t)) return n;
    return -1;
  }
  var kv = Array.prototype,
    Vv = kv.splice;
  function Wv(e) {
    var t = this.__data__,
      n = Ko(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : Vv.call(t, n, 1), --this.size, !0;
  }
  function Uv(e) {
    var t = this.__data__,
      n = Ko(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function Gv(e) {
    return Ko(this.__data__, e) > -1;
  }
  function qv(e, t) {
    var n = this.__data__,
      r = Ko(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  }
  function Mi(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (Mi.prototype.clear = Bv),
    (Mi.prototype.delete = Wv),
    (Mi.prototype.get = Uv),
    (Mi.prototype.has = Gv),
    (Mi.prototype.set = qv);
  var Kv = Tu(Al, 'Map');
  const Xv = Kv;
  function Yv() {
    (this.size = 0), (this.__data__ = { hash: new oi(), map: new (Xv || Mi)(), string: new oi() });
  }
  function Qv(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean' ? e !== '__proto__' : e === null;
  }
  function Xo(e, t) {
    var n = e.__data__;
    return Qv(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
  }
  function Jv(e) {
    var t = Xo(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function Zv(e) {
    return Xo(this, e).get(e);
  }
  function e0(e) {
    return Xo(this, e).has(e);
  }
  function t0(e, t) {
    var n = Xo(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  }
  function ai(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (ai.prototype.clear = Yv),
    (ai.prototype.delete = Jv),
    (ai.prototype.get = Zv),
    (ai.prototype.has = e0),
    (ai.prototype.set = t0);
  var n0 = 'Expected a function';
  function zl(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(n0);
    var n = function () {
      var r = arguments,
        i = t ? t.apply(this, r) : r[0],
        o = n.cache;
      if (o.has(i)) return o.get(i);
      var l = e.apply(this, r);
      return (n.cache = o.set(i, l) || o), l;
    };
    return (n.cache = new (zl.Cache || ai)()), n;
  }
  zl.Cache = ai;
  var r0 = 500;
  function i0(e) {
    var t = zl(e, function (r) {
        return n.size === r0 && n.clear(), r;
      }),
      n = t.cache;
    return t;
  }
  var o0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    a0 = /\\(\\)?/g,
    l0 = i0(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(o0, function (n, r, i, o) {
          t.push(i ? o.replace(a0, '$1') : r || n);
        }),
        t
      );
    });
  const s0 = l0;
  function c0(e) {
    return e == null ? '' : $u(e);
  }
  function u0(e, t) {
    return Fl(e) ? e : Tv(e, t) ? [e] : s0(c0(e));
  }
  var d0 = 1 / 0;
  function f0(e) {
    if (typeof e == 'string' || Dl(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -d0 ? '-0' : t;
  }
  function p0(e, t) {
    t = u0(t, e);
    for (var n = 0, r = t.length; e != null && n < r; ) e = e[f0(t[n++])];
    return n && n == r ? e : void 0;
  }
  function Yo(e, t, n) {
    var r = e == null ? void 0 : p0(e, t);
    return r === void 0 ? n : r;
  }
  function Iu() {
    return location.hostname.includes('pre-');
  }
  function zn(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  }
  function Et(e) {
    return (
      (Et =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      Et(e)
    );
  }
  function g0(e, t) {
    if (Et(e) !== 'object' || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t || 'default');
      if (Et(r) !== 'object') return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
  }
  function Pu(e) {
    var t = g0(e, 'string');
    return Et(t) === 'symbol' ? t : String(t);
  }
  function Nu(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, Pu(r.key), r);
    }
  }
  function Ln(e, t, n) {
    return t && Nu(e.prototype, t), n && Nu(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
  }
  function Ll(e, t) {
    return (
      (Ll = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, i) {
            return (r.__proto__ = i), r;
          }),
      Ll(e, t)
    );
  }
  function li(e, t) {
    if (typeof t != 'function' && t !== null) throw new TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      t && Ll(e, t);
  }
  function Qo(e) {
    return (
      (Qo = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          }),
      Qo(e)
    );
  }
  function h0() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
      return !1;
    }
  }
  function Jo(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function m0(e, t) {
    if (t && (Et(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return Jo(e);
  }
  function si(e) {
    var t = h0();
    return function () {
      var r = Qo(e),
        i;
      if (t) {
        var o = Qo(this).constructor;
        i = Reflect.construct(r, arguments, o);
      } else i = r.apply(this, arguments);
      return m0(this, i);
    };
  }
  var Ru =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : typeof self < 'u'
        ? self
        : {},
    Hl = {},
    v0 = {
      get exports() {
        return Hl;
      },
      set exports(e) {
        Hl = e;
      },
    };
  /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
      var t = {}.hasOwnProperty;
      function n() {
        for (var r = [], i = 0; i < arguments.length; i++) {
          var o = arguments[i];
          if (o) {
            var l = typeof o;
            if (l === 'string' || l === 'number') r.push(o);
            else if (Array.isArray(o)) {
              if (o.length) {
                var s = n.apply(null, o);
                s && r.push(s);
              }
            } else if (l === 'object') {
              if (o.toString !== Object.prototype.toString && !o.toString.toString().includes('[native code]')) {
                r.push(o.toString());
                continue;
              }
              for (var d in o) t.call(o, d) && o[d] && r.push(d);
            }
          }
        }
        return r.join(' ');
      }
      e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
  })(v0);
  const he = Hl;
  function rt() {
    return (
      (rt = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      rt.apply(this, arguments)
    );
  }
  var jr,
    Vt,
    Bl,
    Mu,
    Ai = 0,
    Au = [],
    Zo = [],
    Du = b.options.__b,
    Fu = b.options.__r,
    ju = b.options.diffed,
    zu = b.options.__c,
    Lu = b.options.unmount;
  function ci(e, t) {
    b.options.__h && b.options.__h(Vt, e, Ai || t), (Ai = 0);
    var n = Vt.__H || (Vt.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({ __V: Zo }), n.__[e];
  }
  function we(e) {
    return (Ai = 1), ea(Vu, e);
  }
  function ea(e, t, n) {
    var r = ci(jr++, 2);
    if (
      ((r.t = e),
      !r.__c &&
        ((r.__ = [
          n ? n(t) : Vu(void 0, t),
          function (o) {
            var l = r.__N ? r.__N[0] : r.__[0],
              s = r.t(l, o);
            l !== s && ((r.__N = [s, r.__[1]]), r.__c.setState({}));
          },
        ]),
        (r.__c = Vt),
        !Vt.u))
    ) {
      Vt.u = !0;
      var i = Vt.shouldComponentUpdate;
      Vt.shouldComponentUpdate = function (o, l, s) {
        if (!r.__c.__H) return !0;
        var d = r.__c.__H.__.filter(function (p) {
          return p.__c;
        });
        if (
          d.every(function (p) {
            return !p.__N;
          })
        )
          return !i || i.call(this, o, l, s);
        var f = !1;
        return (
          d.forEach(function (p) {
            if (p.__N) {
              var h = p.__[0];
              (p.__ = p.__N), (p.__N = void 0), h !== p.__[0] && (f = !0);
            }
          }),
          !(!f && r.__c.props === o) && (!i || i.call(this, o, l, s))
        );
      };
    }
    return r.__N || r.__;
  }
  function Fe(e, t) {
    var n = ci(jr++, 3);
    !b.options.__s && Vl(n.__H, t) && ((n.__ = e), (n.i = t), Vt.__H.__h.push(n));
  }
  function zr(e, t) {
    var n = ci(jr++, 4);
    !b.options.__s && Vl(n.__H, t) && ((n.__ = e), (n.i = t), Vt.__h.push(n));
  }
  function ie(e) {
    return (
      (Ai = 5),
      De(function () {
        return { current: e };
      }, [])
    );
  }
  function on(e, t, n) {
    (Ai = 6),
      zr(
        function () {
          return typeof e == 'function'
            ? (e(t()),
              function () {
                return e(null);
              })
            : e
            ? ((e.current = t()),
              function () {
                return (e.current = null);
              })
            : void 0;
        },
        n == null ? n : n.concat(e),
      );
  }
  function De(e, t) {
    var n = ci(jr++, 7);
    return Vl(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
  }
  function Qt(e, t) {
    return (
      (Ai = 8),
      De(function () {
        return e;
      }, t)
    );
  }
  function je(e) {
    var t = Vt.context[e.__c],
      n = ci(jr++, 9);
    return (n.c = e), t ? (n.__ == null && ((n.__ = !0), t.sub(Vt)), t.props.value) : e.__;
  }
  function Hu(e, t) {
    b.options.useDebugValue && b.options.useDebugValue(t ? t(e) : e);
  }
  function b0(e) {
    var t = ci(jr++, 10),
      n = we();
    return (
      (t.__ = e),
      Vt.componentDidCatch ||
        (Vt.componentDidCatch = function (r, i) {
          t.__ && t.__(r, i), n[1](r);
        }),
      [
        n[0],
        function () {
          n[1](void 0);
        },
      ]
    );
  }
  function Bu() {
    var e = ci(jr++, 11);
    if (!e.__) {
      for (var t = Vt.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = 'P' + n[0] + '-' + n[1]++;
    }
    return e.__;
  }
  function y0() {
    for (var e; (e = Au.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(ta), e.__H.__h.forEach(kl), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), b.options.__e(t, e.__v);
        }
  }
  (b.options.__b = function (e) {
    (Vt = null), Du && Du(e);
  }),
    (b.options.__r = function (e) {
      Fu && Fu(e), (jr = 0);
      var t = (Vt = e.__c).__H;
      t &&
        (Bl === Vt
          ? ((t.__h = []),
            (Vt.__h = []),
            t.__.forEach(function (n) {
              n.__N && (n.__ = n.__N), (n.__V = Zo), (n.__N = n.i = void 0);
            }))
          : (t.__h.forEach(ta), t.__h.forEach(kl), (t.__h = []))),
        (Bl = Vt);
    }),
    (b.options.diffed = function (e) {
      ju && ju(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((Au.push(t) !== 1 && Mu === b.options.requestAnimationFrame) ||
            ((Mu = b.options.requestAnimationFrame) || C0)(y0)),
        t.__H.__.forEach(function (n) {
          n.i && (n.__H = n.i), n.__V !== Zo && (n.__ = n.__V), (n.i = void 0), (n.__V = Zo);
        })),
        (Bl = Vt = null);
    }),
    (b.options.__c = function (e, t) {
      t.some(function (n) {
        try {
          n.__h.forEach(ta),
            (n.__h = n.__h.filter(function (r) {
              return !r.__ || kl(r);
            }));
        } catch (r) {
          t.some(function (i) {
            i.__h && (i.__h = []);
          }),
            (t = []),
            b.options.__e(r, n.__v);
        }
      }),
        zu && zu(e, t);
    }),
    (b.options.unmount = function (e) {
      Lu && Lu(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (r) {
          try {
            ta(r);
          } catch (i) {
            t = i;
          }
        }),
        (n.__H = void 0),
        t && b.options.__e(t, n.__v));
    });
  var ku = typeof requestAnimationFrame == 'function';
  function C0(e) {
    var t,
      n = function () {
        clearTimeout(r), ku && cancelAnimationFrame(t), setTimeout(e);
      },
      r = setTimeout(n, 100);
    ku && (t = requestAnimationFrame(n));
  }
  function ta(e) {
    var t = Vt,
      n = e.__c;
    typeof n == 'function' && ((e.__c = void 0), n()), (Vt = t);
  }
  function kl(e) {
    var t = Vt;
    (e.__c = e.__()), (Vt = t);
  }
  function Vl(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (n, r) {
        return n !== e[r];
      })
    );
  }
  function Vu(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Wu(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function Wl(e, t) {
    for (var n in e) if (n !== '__source' && !(n in t)) return !0;
    for (var r in t) if (r !== '__source' && e[r] !== t[r]) return !0;
    return !1;
  }
  function Ul(e, t) {
    return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e != e && t != t);
  }
  function na(e) {
    this.props = e;
  }
  function ra(e, t) {
    function n(i) {
      var o = this.props.ref,
        l = o == i.ref;
      return !l && o && (o.call ? o(null) : (o.current = null)), t ? !t(this.props, i) || !l : Wl(this.props, i);
    }
    function r(i) {
      return (this.shouldComponentUpdate = n), b.createElement(e, i);
    }
    return (
      (r.displayName = 'Memo(' + (e.displayName || e.name) + ')'), (r.prototype.isReactComponent = !0), (r.__f = !0), r
    );
  }
  ((na.prototype = new b.Component()).isPureReactComponent = !0),
    (na.prototype.shouldComponentUpdate = function (e, t) {
      return Wl(this.props, e) || Wl(this.state, t);
    });
  var Uu = b.options.__b;
  b.options.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), Uu && Uu(e);
  };
  var S0 = (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.forward_ref')) || 3911;
  function We(e) {
    function t(n) {
      var r = Wu({}, n);
      return delete r.ref, e(r, n.ref || null);
    }
    return (
      (t.$$typeof = S0),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
      t
    );
  }
  var Gu = function (e, t) {
      return e == null ? null : b.toChildArray(b.toChildArray(e).map(t));
    },
    ui = {
      map: Gu,
      forEach: Gu,
      count: function (e) {
        return e ? b.toChildArray(e).length : 0;
      },
      only: function (e) {
        var t = b.toChildArray(e);
        if (t.length !== 1) throw 'Children.only';
        return t[0];
      },
      toArray: b.toChildArray,
    },
    x0 = b.options.__e;
  b.options.__e = function (e, t, n, r) {
    if (e.then) {
      for (var i, o = t; (o = o.__); )
        if ((i = o.__c) && i.__c) return t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), i.__c(e, t);
    }
    x0(e, t, n, r);
  };
  var qu = b.options.unmount;
  function Ku(e, t, n) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (r) {
            typeof r.__c == 'function' && r.__c();
          }),
          (e.__c.__H = null)),
        (e = Wu({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (r) {
            return Ku(r, t, n);
          }))),
      e
    );
  }
  function Xu(e, t, n) {
    return (
      e &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (r) {
            return Xu(r, t, n);
          })),
        e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), (e.__c.__e = !0), (e.__c.__P = n))),
      e
    );
  }
  function ho() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function Yu(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function Qu(e) {
    var t, n, r;
    function i(o) {
      if (
        (t ||
          (t = e()).then(
            function (l) {
              n = l.default || l;
            },
            function (l) {
              r = l;
            },
          ),
        r)
      )
        throw r;
      if (!n) throw t;
      return b.createElement(n, o);
    }
    return (i.displayName = 'Lazy'), (i.__f = !0), i;
  }
  function Di() {
    (this.u = null), (this.o = null);
  }
  (b.options.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), qu && qu(e);
  }),
    ((ho.prototype = new b.Component()).__c = function (e, t) {
      var n = t.__c,
        r = this;
      r.t == null && (r.t = []), r.t.push(n);
      var i = Yu(r.__v),
        o = !1,
        l = function () {
          o || ((o = !0), (n.__R = null), i ? i(s) : s());
        };
      n.__R = l;
      var s = function () {
          if (!--r.__u) {
            if (r.state.__a) {
              var f = r.state.__a;
              r.__v.__k[0] = Xu(f, f.__c.__P, f.__c.__O);
            }
            var p;
            for (r.setState({ __a: (r.__b = null) }); (p = r.t.pop()); ) p.forceUpdate();
          }
        },
        d = t.__h === !0;
      r.__u++ || d || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(l, l);
    }),
    (ho.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (ho.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement('div'),
            r = this.__v.__k[0].__c;
          this.__v.__k[0] = Ku(this.__b, n, (r.__O = r.__P));
        }
        this.__b = null;
      }
      var i = t.__a && b.createElement(b.Fragment, null, e.fallback);
      return i && (i.__h = null), [b.createElement(b.Fragment, null, t.__a ? null : e.children), i];
    });
  var Ju = function (e, t, n) {
    if ((++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== 't' || !e.o.size)))
      for (n = e.u; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.u = n = n[2];
      }
  };
  function w0(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function E0(e) {
    var t = this,
      n = e.i;
    (t.componentWillUnmount = function () {
      b.render(null, t.l), (t.l = null), (t.i = null);
    }),
      t.i && t.i !== n && t.componentWillUnmount(),
      e.__v
        ? (t.l ||
            ((t.i = n),
            (t.l = {
              nodeType: 1,
              parentNode: n,
              childNodes: [],
              appendChild: function (r) {
                this.childNodes.push(r), t.i.appendChild(r);
              },
              insertBefore: function (r, i) {
                this.childNodes.push(r), t.i.appendChild(r);
              },
              removeChild: function (r) {
                this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
              },
            })),
          b.render(b.createElement(w0, { context: t.context }, e.__v), t.l))
        : t.l && t.componentWillUnmount();
  }
  function ia(e, t) {
    var n = b.createElement(E0, { __v: e, i: t });
    return (n.containerInfo = t), n;
  }
  ((Di.prototype = new b.Component()).__a = function (e) {
    var t = this,
      n = Yu(t.__v),
      r = t.o.get(e);
    return (
      r[0]++,
      function (i) {
        var o = function () {
          t.props.revealOrder ? (r.push(i), Ju(t, e, r)) : i();
        };
        n ? n(o) : o();
      }
    );
  }),
    (Di.prototype.render = function (e) {
      (this.u = null), (this.o = new Map());
      var t = b.toChildArray(e.children);
      e.revealOrder && e.revealOrder[0] === 'b' && t.reverse();
      for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
      return e.children;
    }),
    (Di.prototype.componentDidUpdate = Di.prototype.componentDidMount =
      function () {
        var e = this;
        this.o.forEach(function (t, n) {
          Ju(e, n, t);
        });
      });
  var Zu = (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.element')) || 60103,
    $0 =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    O0 = typeof document < 'u',
    _0 = function (e) {
      return (typeof Symbol < 'u' && typeof Symbol() == 'symbol' ? /fil|che|rad/i : /fil|che|ra/i).test(e);
    };
  function ed(e, t, n) {
    return t.__k == null && (t.textContent = ''), b.render(e, t), typeof n == 'function' && n(), e ? e.__c : null;
  }
  function td(e, t, n) {
    return b.hydrate(e, t), typeof n == 'function' && n(), e ? e.__c : null;
  }
  (b.Component.prototype.isReactComponent = {}),
    ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (e) {
      Object.defineProperty(b.Component.prototype, e, {
        configurable: !0,
        get: function () {
          return this['UNSAFE_' + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
        },
      });
    });
  var nd = b.options.event;
  function T0() {}
  function I0() {
    return this.cancelBubble;
  }
  function P0() {
    return this.defaultPrevented;
  }
  b.options.event = function (e) {
    return (
      nd && (e = nd(e)),
      (e.persist = T0),
      (e.isPropagationStopped = I0),
      (e.isDefaultPrevented = P0),
      (e.nativeEvent = e)
    );
  };
  var rd,
    id = {
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    od = b.options.vnode;
  b.options.vnode = function (e) {
    var t = e.type,
      n = e.props,
      r = n;
    if (typeof t == 'string') {
      var i = t.indexOf('-') === -1;
      for (var o in ((r = {}), n)) {
        var l = n[o];
        (O0 && o === 'children' && t === 'noscript') ||
          (o === 'value' && 'defaultValue' in n && l == null) ||
          (o === 'defaultValue' && 'value' in n && n.value == null
            ? (o = 'value')
            : o === 'download' && l === !0
            ? (l = '')
            : /ondoubleclick/i.test(o)
            ? (o = 'ondblclick')
            : /^onchange(textarea|input)/i.test(o + t) && !_0(n.type)
            ? (o = 'oninput')
            : /^onfocus$/i.test(o)
            ? (o = 'onfocusin')
            : /^onblur$/i.test(o)
            ? (o = 'onfocusout')
            : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)
            ? (o = o.toLowerCase())
            : i && $0.test(o)
            ? (o = o.replace(/[A-Z0-9]/g, '-$&').toLowerCase())
            : l === null && (l = void 0),
          /^oninput$/i.test(o) && ((o = o.toLowerCase()), r[o] && (o = 'oninputCapture')),
          (r[o] = l));
      }
      t == 'select' &&
        r.multiple &&
        Array.isArray(r.value) &&
        (r.value = b.toChildArray(n.children).forEach(function (s) {
          s.props.selected = r.value.indexOf(s.props.value) != -1;
        })),
        t == 'select' &&
          r.defaultValue != null &&
          (r.value = b.toChildArray(n.children).forEach(function (s) {
            s.props.selected = r.multiple
              ? r.defaultValue.indexOf(s.props.value) != -1
              : r.defaultValue == s.props.value;
          })),
        (e.props = r),
        n.class != n.className &&
          ((id.enumerable = 'className' in n),
          n.className != null && (r.class = n.className),
          Object.defineProperty(r, 'className', id));
    }
    (e.$$typeof = Zu), od && od(e);
  };
  var ad = b.options.__r;
  b.options.__r = function (e) {
    ad && ad(e), (rd = e.__c);
  };
  var ld = {
      ReactCurrentDispatcher: {
        current: {
          readContext: function (e) {
            return rd.__n[e.__c].props.value;
          },
        },
      },
    },
    N0 = '17.0.2';
  function sd(e) {
    return b.createElement.bind(null, e);
  }
  function Vn(e) {
    return !!e && e.$$typeof === Zu;
  }
  function un(e) {
    return Vn(e) ? b.cloneElement.apply(null, arguments) : e;
  }
  function cd(e) {
    return !!e.__k && (b.render(null, e), !0);
  }
  function ud(e) {
    return (e && (e.base || (e.nodeType === 1 && e))) || null;
  }
  var dd = function (e, t) {
      return e(t);
    },
    fd = function (e, t) {
      return e(t);
    },
    pd = b.Fragment;
  function Gl(e) {
    e();
  }
  function gd(e) {
    return e;
  }
  function hd() {
    return [!1, Gl];
  }
  var md = zr;
  function vd(e, t) {
    var n = t(),
      r = we({ h: { __: n, v: t } }),
      i = r[0].h,
      o = r[1];
    return (
      zr(
        function () {
          (i.__ = n), (i.v = t), Ul(i.__, t()) || o({ h: i });
        },
        [e, n, t],
      ),
      Fe(
        function () {
          return (
            Ul(i.__, i.v()) || o({ h: i }),
            e(function () {
              Ul(i.__, i.v()) || o({ h: i });
            })
          );
        },
        [e],
      ),
      n
    );
  }
  var be = {
    useState: we,
    useId: Bu,
    useReducer: ea,
    useEffect: Fe,
    useLayoutEffect: zr,
    useInsertionEffect: md,
    useTransition: hd,
    useDeferredValue: gd,
    useSyncExternalStore: vd,
    startTransition: Gl,
    useRef: ie,
    useImperativeHandle: on,
    useMemo: De,
    useCallback: Qt,
    useContext: je,
    useDebugValue: Hu,
    version: '17.0.2',
    Children: ui,
    render: ed,
    hydrate: td,
    unmountComponentAtNode: cd,
    createPortal: ia,
    createElement: b.createElement,
    createContext: b.createContext,
    createFactory: sd,
    cloneElement: un,
    createRef: b.createRef,
    Fragment: b.Fragment,
    isValidElement: Vn,
    findDOMNode: ud,
    Component: b.Component,
    PureComponent: na,
    memo: ra,
    forwardRef: We,
    flushSync: fd,
    unstable_batchedUpdates: dd,
    StrictMode: pd,
    Suspense: ho,
    SuspenseList: Di,
    lazy: Qu,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ld,
  };
  const ql = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Children: ui,
        Component: b.Component,
        Fragment: b.Fragment,
        PureComponent: na,
        StrictMode: pd,
        Suspense: ho,
        SuspenseList: Di,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ld,
        cloneElement: un,
        createContext: b.createContext,
        createElement: b.createElement,
        createFactory: sd,
        createPortal: ia,
        createRef: b.createRef,
        default: be,
        findDOMNode: ud,
        flushSync: fd,
        forwardRef: We,
        hydrate: td,
        isValidElement: Vn,
        lazy: Qu,
        memo: ra,
        render: ed,
        startTransition: Gl,
        unmountComponentAtNode: cd,
        unstable_batchedUpdates: dd,
        useCallback: Qt,
        useContext: je,
        useDebugValue: Hu,
        useDeferredValue: gd,
        useEffect: Fe,
        useErrorBoundary: b0,
        useId: Bu,
        useImperativeHandle: on,
        useInsertionEffect: md,
        useLayoutEffect: zr,
        useMemo: De,
        useReducer: ea,
        useRef: ie,
        useState: we,
        useSyncExternalStore: vd,
        useTransition: hd,
        version: N0,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
  var oa = {},
    R0 = {
      get exports() {
        return oa;
      },
      set exports(e) {
        oa = e;
      },
    },
    Mt = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Cn = typeof Symbol == 'function' && Symbol.for,
    Kl = Cn ? Symbol.for('react.element') : 60103,
    Xl = Cn ? Symbol.for('react.portal') : 60106,
    aa = Cn ? Symbol.for('react.fragment') : 60107,
    la = Cn ? Symbol.for('react.strict_mode') : 60108,
    sa = Cn ? Symbol.for('react.profiler') : 60114,
    ca = Cn ? Symbol.for('react.provider') : 60109,
    ua = Cn ? Symbol.for('react.context') : 60110,
    Yl = Cn ? Symbol.for('react.async_mode') : 60111,
    da = Cn ? Symbol.for('react.concurrent_mode') : 60111,
    fa = Cn ? Symbol.for('react.forward_ref') : 60112,
    pa = Cn ? Symbol.for('react.suspense') : 60113,
    M0 = Cn ? Symbol.for('react.suspense_list') : 60120,
    ga = Cn ? Symbol.for('react.memo') : 60115,
    ha = Cn ? Symbol.for('react.lazy') : 60116,
    A0 = Cn ? Symbol.for('react.block') : 60121,
    D0 = Cn ? Symbol.for('react.fundamental') : 60117,
    F0 = Cn ? Symbol.for('react.responder') : 60118,
    j0 = Cn ? Symbol.for('react.scope') : 60119;
  function Wn(e) {
    if (typeof e == 'object' && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Kl:
          switch (((e = e.type), e)) {
            case Yl:
            case da:
            case aa:
            case sa:
            case la:
            case pa:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case ua:
                case fa:
                case ha:
                case ga:
                case ca:
                  return e;
                default:
                  return t;
              }
          }
        case Xl:
          return t;
      }
    }
  }
  function bd(e) {
    return Wn(e) === da;
  }
  (Mt.AsyncMode = Yl),
    (Mt.ConcurrentMode = da),
    (Mt.ContextConsumer = ua),
    (Mt.ContextProvider = ca),
    (Mt.Element = Kl),
    (Mt.ForwardRef = fa),
    (Mt.Fragment = aa),
    (Mt.Lazy = ha),
    (Mt.Memo = ga),
    (Mt.Portal = Xl),
    (Mt.Profiler = sa),
    (Mt.StrictMode = la),
    (Mt.Suspense = pa),
    (Mt.isAsyncMode = function (e) {
      return bd(e) || Wn(e) === Yl;
    }),
    (Mt.isConcurrentMode = bd),
    (Mt.isContextConsumer = function (e) {
      return Wn(e) === ua;
    }),
    (Mt.isContextProvider = function (e) {
      return Wn(e) === ca;
    }),
    (Mt.isElement = function (e) {
      return typeof e == 'object' && e !== null && e.$$typeof === Kl;
    }),
    (Mt.isForwardRef = function (e) {
      return Wn(e) === fa;
    }),
    (Mt.isFragment = function (e) {
      return Wn(e) === aa;
    }),
    (Mt.isLazy = function (e) {
      return Wn(e) === ha;
    }),
    (Mt.isMemo = function (e) {
      return Wn(e) === ga;
    }),
    (Mt.isPortal = function (e) {
      return Wn(e) === Xl;
    }),
    (Mt.isProfiler = function (e) {
      return Wn(e) === sa;
    }),
    (Mt.isStrictMode = function (e) {
      return Wn(e) === la;
    }),
    (Mt.isSuspense = function (e) {
      return Wn(e) === pa;
    }),
    (Mt.isValidElementType = function (e) {
      return (
        typeof e == 'string' ||
        typeof e == 'function' ||
        e === aa ||
        e === da ||
        e === sa ||
        e === la ||
        e === pa ||
        e === M0 ||
        (typeof e == 'object' &&
          e !== null &&
          (e.$$typeof === ha ||
            e.$$typeof === ga ||
            e.$$typeof === ca ||
            e.$$typeof === ua ||
            e.$$typeof === fa ||
            e.$$typeof === D0 ||
            e.$$typeof === F0 ||
            e.$$typeof === j0 ||
            e.$$typeof === A0))
      );
    }),
    (Mt.typeOf = Wn),
    (function (e) {
      e.exports = Mt;
    })(R0);
  function wr(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [];
    return (
      be.Children.forEach(e, function (r) {
        (r == null && !t.keepEmpty) ||
          (Array.isArray(r)
            ? (n = n.concat(wr(r)))
            : oa.isFragment(r) && r.props
            ? (n = n.concat(wr(r.props.children, t)))
            : n.push(r));
      }),
      n
    );
  }
  var yd = {};
  function z0(e, t) {}
  function L0(e, t, n) {
    !t && !yd[n] && (e(!1, n), (yd[n] = !0));
  }
  function tr(e, t) {
    L0(z0, e, t);
  }
  function Ie(e, t, n) {
    return (
      (t = Pu(t)),
      t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
      e
    );
  }
  function Cd(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function G(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Cd(Object(n), !0).forEach(function (r) {
            Ie(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Cd(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function ma(e, t, n) {
    var r = ie({});
    return (
      (!('value' in r.current) || n(r.current.condition, t)) && ((r.current.value = e()), (r.current.condition = t)),
      r.current.value
    );
  }
  function Ql(e, t) {
    typeof e == 'function' ? e(t) : Et(e) === 'object' && e && 'current' in e && (e.current = t);
  }
  function di() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var r = t.filter(function (i) {
      return i;
    });
    return r.length <= 1
      ? r[0]
      : function (i) {
          t.forEach(function (o) {
            Ql(o, i);
          });
        };
  }
  function Jl() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return ma(
      function () {
        return di.apply(void 0, t);
      },
      t,
      function (r, i) {
        return (
          r.length === i.length &&
          r.every(function (o, l) {
            return o === i[l];
          })
        );
      },
    );
  }
  function mo(e) {
    var t,
      n,
      r = oa.isMemo(e) ? e.type.type : e.type;
    return !(
      (typeof r == 'function' && !((t = r.prototype) !== null && t !== void 0 && t.render)) ||
      (typeof e == 'function' && !((n = e.prototype) !== null && n !== void 0 && n.render))
    );
  }
  function va(e) {
    return e instanceof HTMLElement ? e : e instanceof be.Component ? be.findDOMNode(e) : null;
  }
  var Sd = (function () {
      if (typeof Map < 'u') return Map;
      function e(t, n) {
        var r = -1;
        return (
          t.some(function (i, o) {
            return i[0] === n ? ((r = o), !0) : !1;
          }),
          r
        );
      }
      return (function () {
        function t() {
          this.__entries__ = [];
        }
        return (
          Object.defineProperty(t.prototype, 'size', {
            get: function () {
              return this.__entries__.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.get = function (n) {
            var r = e(this.__entries__, n),
              i = this.__entries__[r];
            return i && i[1];
          }),
          (t.prototype.set = function (n, r) {
            var i = e(this.__entries__, n);
            ~i ? (this.__entries__[i][1] = r) : this.__entries__.push([n, r]);
          }),
          (t.prototype.delete = function (n) {
            var r = this.__entries__,
              i = e(r, n);
            ~i && r.splice(i, 1);
          }),
          (t.prototype.has = function (n) {
            return !!~e(this.__entries__, n);
          }),
          (t.prototype.clear = function () {
            this.__entries__.splice(0);
          }),
          (t.prototype.forEach = function (n, r) {
            r === void 0 && (r = null);
            for (var i = 0, o = this.__entries__; i < o.length; i++) {
              var l = o[i];
              n.call(r, l[1], l[0]);
            }
          }),
          t
        );
      })();
    })(),
    Zl = typeof window < 'u' && typeof document < 'u' && window.document === document,
    ba = (function () {
      return typeof global < 'u' && global.Math === Math
        ? global
        : typeof self < 'u' && self.Math === Math
        ? self
        : typeof window < 'u' && window.Math === Math
        ? window
        : Function('return this')();
    })(),
    H0 = (function () {
      return typeof requestAnimationFrame == 'function'
        ? requestAnimationFrame.bind(ba)
        : function (e) {
            return setTimeout(function () {
              return e(Date.now());
            }, 1e3 / 60);
          };
    })(),
    B0 = 2;
  function k0(e, t) {
    var n = !1,
      r = !1,
      i = 0;
    function o() {
      n && ((n = !1), e()), r && s();
    }
    function l() {
      H0(o);
    }
    function s() {
      var d = Date.now();
      if (n) {
        if (d - i < B0) return;
        r = !0;
      } else (n = !0), (r = !1), setTimeout(l, t);
      i = d;
    }
    return s;
  }
  var V0 = 20,
    W0 = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
    U0 = typeof MutationObserver < 'u',
    G0 = (function () {
      function e() {
        (this.connected_ = !1),
          (this.mutationEventsAdded_ = !1),
          (this.mutationsObserver_ = null),
          (this.observers_ = []),
          (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
          (this.refresh = k0(this.refresh.bind(this), V0));
      }
      return (
        (e.prototype.addObserver = function (t) {
          ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
        }),
        (e.prototype.removeObserver = function (t) {
          var n = this.observers_,
            r = n.indexOf(t);
          ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
        }),
        (e.prototype.refresh = function () {
          var t = this.updateObservers_();
          t && this.refresh();
        }),
        (e.prototype.updateObservers_ = function () {
          var t = this.observers_.filter(function (n) {
            return n.gatherActive(), n.hasActive();
          });
          return (
            t.forEach(function (n) {
              return n.broadcastActive();
            }),
            t.length > 0
          );
        }),
        (e.prototype.connect_ = function () {
          !Zl ||
            this.connected_ ||
            (document.addEventListener('transitionend', this.onTransitionEnd_),
            window.addEventListener('resize', this.refresh),
            U0
              ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                this.mutationsObserver_.observe(document, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                }))
              : (document.addEventListener('DOMSubtreeModified', this.refresh), (this.mutationEventsAdded_ = !0)),
            (this.connected_ = !0));
        }),
        (e.prototype.disconnect_ = function () {
          !Zl ||
            !this.connected_ ||
            (document.removeEventListener('transitionend', this.onTransitionEnd_),
            window.removeEventListener('resize', this.refresh),
            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
            this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh),
            (this.mutationsObserver_ = null),
            (this.mutationEventsAdded_ = !1),
            (this.connected_ = !1));
        }),
        (e.prototype.onTransitionEnd_ = function (t) {
          var n = t.propertyName,
            r = n === void 0 ? '' : n,
            i = W0.some(function (o) {
              return !!~r.indexOf(o);
            });
          i && this.refresh();
        }),
        (e.getInstance = function () {
          return this.instance_ || (this.instance_ = new e()), this.instance_;
        }),
        (e.instance_ = null),
        e
      );
    })(),
    xd = function (e, t) {
      for (var n = 0, r = Object.keys(t); n < r.length; n++) {
        var i = r[n];
        Object.defineProperty(e, i, { value: t[i], enumerable: !1, writable: !1, configurable: !0 });
      }
      return e;
    },
    Fi = function (e) {
      var t = e && e.ownerDocument && e.ownerDocument.defaultView;
      return t || ba;
    },
    wd = Ca(0, 0, 0, 0);
  function ya(e) {
    return parseFloat(e) || 0;
  }
  function Ed(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function (r, i) {
      var o = e['border-' + i + '-width'];
      return r + ya(o);
    }, 0);
  }
  function q0(e) {
    for (var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, i = t; r < i.length; r++) {
      var o = i[r],
        l = e['padding-' + o];
      n[o] = ya(l);
    }
    return n;
  }
  function K0(e) {
    var t = e.getBBox();
    return Ca(0, 0, t.width, t.height);
  }
  function X0(e) {
    var t = e.clientWidth,
      n = e.clientHeight;
    if (!t && !n) return wd;
    var r = Fi(e).getComputedStyle(e),
      i = q0(r),
      o = i.left + i.right,
      l = i.top + i.bottom,
      s = ya(r.width),
      d = ya(r.height);
    if (
      (r.boxSizing === 'border-box' &&
        (Math.round(s + o) !== t && (s -= Ed(r, 'left', 'right') + o),
        Math.round(d + l) !== n && (d -= Ed(r, 'top', 'bottom') + l)),
      !Q0(e))
    ) {
      var f = Math.round(s + o) - t,
        p = Math.round(d + l) - n;
      Math.abs(f) !== 1 && (s -= f), Math.abs(p) !== 1 && (d -= p);
    }
    return Ca(i.left, i.top, s, d);
  }
  var Y0 = (function () {
    return typeof SVGGraphicsElement < 'u'
      ? function (e) {
          return e instanceof Fi(e).SVGGraphicsElement;
        }
      : function (e) {
          return e instanceof Fi(e).SVGElement && typeof e.getBBox == 'function';
        };
  })();
  function Q0(e) {
    return e === Fi(e).document.documentElement;
  }
  function J0(e) {
    return Zl ? (Y0(e) ? K0(e) : X0(e)) : wd;
  }
  function Z0(e) {
    var t = e.x,
      n = e.y,
      r = e.width,
      i = e.height,
      o = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
      l = Object.create(o.prototype);
    return xd(l, { x: t, y: n, width: r, height: i, top: n, right: t + r, bottom: i + n, left: t }), l;
  }
  function Ca(e, t, n, r) {
    return { x: e, y: t, width: n, height: r };
  }
  var eb = (function () {
      function e(t) {
        (this.broadcastWidth = 0), (this.broadcastHeight = 0), (this.contentRect_ = Ca(0, 0, 0, 0)), (this.target = t);
      }
      return (
        (e.prototype.isActive = function () {
          var t = J0(this.target);
          return (this.contentRect_ = t), t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
        }),
        (e.prototype.broadcastRect = function () {
          var t = this.contentRect_;
          return (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t;
        }),
        e
      );
    })(),
    tb = (function () {
      function e(t, n) {
        var r = Z0(n);
        xd(this, { target: t, contentRect: r });
      }
      return e;
    })(),
    nb = (function () {
      function e(t, n, r) {
        if (((this.activeObservations_ = []), (this.observations_ = new Sd()), typeof t != 'function'))
          throw new TypeError('The callback provided as parameter 1 is not a function.');
        (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
      }
      return (
        (e.prototype.observe = function (t) {
          if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
          if (!(typeof Element > 'u' || !(Element instanceof Object))) {
            if (!(t instanceof Fi(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var n = this.observations_;
            n.has(t) || (n.set(t, new eb(t)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }),
        (e.prototype.unobserve = function (t) {
          if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
          if (!(typeof Element > 'u' || !(Element instanceof Object))) {
            if (!(t instanceof Fi(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var n = this.observations_;
            n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
          }
        }),
        (e.prototype.disconnect = function () {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }),
        (e.prototype.gatherActive = function () {
          var t = this;
          this.clearActive(),
            this.observations_.forEach(function (n) {
              n.isActive() && t.activeObservations_.push(n);
            });
        }),
        (e.prototype.broadcastActive = function () {
          if (this.hasActive()) {
            var t = this.callbackCtx_,
              n = this.activeObservations_.map(function (r) {
                return new tb(r.target, r.broadcastRect());
              });
            this.callback_.call(t, n, t), this.clearActive();
          }
        }),
        (e.prototype.clearActive = function () {
          this.activeObservations_.splice(0);
        }),
        (e.prototype.hasActive = function () {
          return this.activeObservations_.length > 0;
        }),
        e
      );
    })(),
    $d = typeof WeakMap < 'u' ? new WeakMap() : new Sd(),
    Od = (function () {
      function e(t) {
        if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        var n = G0.getInstance(),
          r = new nb(t, n, this);
        $d.set(this, r);
      }
      return e;
    })();
  ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    Od.prototype[e] = function () {
      var t;
      return (t = $d.get(this))[e].apply(t, arguments);
    };
  });
  var rb = (function () {
      return typeof ba.ResizeObserver < 'u' ? ba.ResizeObserver : Od;
    })(),
    Lr = new Map();
  function ib(e) {
    e.forEach(function (t) {
      var n,
        r = t.target;
      (n = Lr.get(r)) === null ||
        n === void 0 ||
        n.forEach(function (i) {
          return i(r);
        });
    });
  }
  var _d = new rb(ib);
  function ob(e, t) {
    Lr.has(e) || (Lr.set(e, new Set()), _d.observe(e)), Lr.get(e).add(t);
  }
  function ab(e, t) {
    Lr.has(e) && (Lr.get(e).delete(t), Lr.get(e).size || (_d.unobserve(e), Lr.delete(e)));
  }
  var lb = (function (e) {
      li(n, e);
      var t = si(n);
      function n() {
        return zn(this, n), t.apply(this, arguments);
      }
      return (
        Ln(n, [
          {
            key: 'render',
            value: function () {
              return this.props.children;
            },
          },
        ]),
        n
      );
    })(b.Component),
    es = b.createContext(null);
  function sb(e) {
    var t = e.children,
      n = e.onBatchResize,
      r = ie(0),
      i = ie([]),
      o = je(es),
      l = Qt(
        function (s, d, f) {
          r.current += 1;
          var p = r.current;
          i.current.push({ size: s, element: d, data: f }),
            Promise.resolve().then(function () {
              p === r.current && (n == null || n(i.current), (i.current = []));
            }),
            o == null || o(s, d, f);
        },
        [n, o],
      );
    return b.createElement(es.Provider, { value: l }, t);
  }
  function cb(e, t) {
    var n = e.children,
      r = e.disabled,
      i = ie(null),
      o = ie(null),
      l = je(es),
      s = typeof n == 'function',
      d = s ? n(i) : n,
      f = ie({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
      p = !s && Vn(d) && mo(d),
      h = p ? d.ref : null,
      v = De(
        function () {
          return di(h, i);
        },
        [h, i],
      ),
      x = function () {
        return va(i.current) || va(o.current);
      };
    on(t, function () {
      return x();
    });
    var y = ie(e);
    y.current = e;
    var C = Qt(function (O) {
      var E = y.current,
        _ = E.onResize,
        P = E.data,
        N = O.getBoundingClientRect(),
        j = N.width,
        u = N.height,
        $ = O.offsetWidth,
        I = O.offsetHeight,
        M = Math.floor(j),
        D = Math.floor(u);
      if (
        f.current.width !== M ||
        f.current.height !== D ||
        f.current.offsetWidth !== $ ||
        f.current.offsetHeight !== I
      ) {
        var B = { width: M, height: D, offsetWidth: $, offsetHeight: I };
        f.current = B;
        var F = $ === Math.round(j) ? j : $,
          A = I === Math.round(u) ? u : I,
          z = G(G({}, B), {}, { offsetWidth: F, offsetHeight: A });
        l == null || l(z, O, P),
          _ &&
            Promise.resolve().then(function () {
              _(z, O);
            });
      }
    }, []);
    return (
      Fe(
        function () {
          var O = x();
          return (
            O && !r && ob(O, C),
            function () {
              return ab(O, C);
            }
          );
        },
        [i.current, r],
      ),
      b.createElement(lb, { ref: o }, p ? un(d, { ref: v }) : d)
    );
  }
  var ub = We(cb),
    db = 'rc-observer-key';
  function fb(e, t) {
    var n = e.children,
      r = typeof n == 'function' ? [n] : wr(n);
    return r.map(function (i, o) {
      var l = (i == null ? void 0 : i.key) || ''.concat(db, '-').concat(o);
      return b.createElement(ub, rt({}, e, { key: l, ref: o === 0 ? t : void 0 }), i);
    });
  }
  var Hr = We(fb);
  Hr.Collection = sb;
  function ji(e, t) {
    var n = G({}, e);
    return (
      Array.isArray(t) &&
        t.forEach(function (r) {
          delete n[r];
        }),
      n
    );
  }
  function ts(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function pb(e) {
    if (Array.isArray(e)) return ts(e);
  }
  function Td(e) {
    if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
  }
  function ns(e, t) {
    if (e) {
      if (typeof e == 'string') return ts(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
        return Array.from(e);
      if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ts(e, t);
    }
  }
  function gb() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function ze(e) {
    return pb(e) || Td(e) || ns(e) || gb();
  }
  function rs(e) {
    for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
      (n =
        (e.charCodeAt(r) & 255) |
        ((e.charCodeAt(++r) & 255) << 8) |
        ((e.charCodeAt(++r) & 255) << 16) |
        ((e.charCodeAt(++r) & 255) << 24)),
        (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
        (n ^= n >>> 24),
        (t =
          ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (i) {
      case 3:
        t ^= (e.charCodeAt(r + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(r + 1) & 255) << 8;
      case 1:
        (t ^= e.charCodeAt(r) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  function hb(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      i,
      o;
    for (o = 0; o < r.length; o++) (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function qt(e, t) {
    if (e == null) return {};
    var n = hb(e, t),
      r,
      i;
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++)
        (r = o[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }
  function mb(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      r = new Set();
    function i(o, l) {
      var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
        d = r.has(o);
      if ((tr(!d, 'Warning: There may be circular references'), d)) return !1;
      if (o === l) return !0;
      if (n && s > 1) return !1;
      r.add(o);
      var f = s + 1;
      if (Array.isArray(o)) {
        if (!Array.isArray(l) || o.length !== l.length) return !1;
        for (var p = 0; p < o.length; p++) if (!i(o[p], l[p], f)) return !1;
        return !0;
      }
      if (o && l && Et(o) === 'object' && Et(l) === 'object') {
        var h = Object.keys(o);
        return h.length !== Object.keys(l).length
          ? !1
          : h.every(function (v) {
              return i(o[v], l[v], f);
            });
      }
      return !1;
    }
    return i(e, t);
  }
  var vb = (function () {
      function e() {
        zn(this, e), Ie(this, 'cache', new Map());
      }
      return (
        Ln(e, [
          {
            key: 'get',
            value: function (n) {
              return this.cache.get(n.join('%')) || null;
            },
          },
          {
            key: 'update',
            value: function (n, r) {
              var i = n.join('%'),
                o = this.cache.get(i),
                l = r(o);
              l === null ? this.cache.delete(i) : this.cache.set(i, l);
            },
          },
        ]),
        e
      );
    })(),
    is = 'data-token-hash',
    fi = 'data-css-hash',
    vo = '__cssinjs_instance__',
    Sa = Math.random().toString(12).slice(2);
  function bb() {
    if (typeof document < 'u' && document.head && document.body) {
      var e = document.body.querySelectorAll('style['.concat(fi, ']')) || [],
        t = document.head.firstChild;
      Array.from(e).forEach(function (r) {
        (r[vo] = r[vo] || Sa), document.head.insertBefore(r, t);
      });
      var n = {};
      Array.from(document.querySelectorAll('style['.concat(fi, ']'))).forEach(function (r) {
        var i = r.getAttribute(fi);
        if (n[i]) {
          if (r[vo] === Sa) {
            var o;
            (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
          }
        } else n[i] = !0;
      });
    }
    return new vb();
  }
  var Id = b.createContext({ hashPriority: 'low', cache: bb(), defaultCache: !0 });
  function Pd(e) {
    if (Array.isArray(e)) return e;
  }
  function yb(e, t) {
    var n = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (n != null) {
      var r,
        i,
        o,
        l,
        s = [],
        d = !0,
        f = !1;
      try {
        if (((o = (n = n.call(e)).next), t === 0)) {
          if (Object(n) !== n) return;
          d = !1;
        } else for (; !(d = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); d = !0);
      } catch (p) {
        (f = !0), (i = p);
      } finally {
        try {
          if (!d && n.return != null && ((l = n.return()), Object(l) !== l)) return;
        } finally {
          if (f) throw i;
        }
      }
      return s;
    }
  }
  function Nd() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function ge(e, t) {
    return Pd(e) || yb(e, t) || ns(e, t) || Nd();
  }
  function Rd(e, t, n, r) {
    var i = je(Id),
      o = i.cache,
      l = [e].concat(ze(t));
    return (
      De(
        function () {
          o.update(l, function (s) {
            var d = s || [],
              f = ge(d, 2),
              p = f[0],
              h = p === void 0 ? 0 : p,
              v = f[1],
              x = v,
              y = x || n();
            return [h + 1, y];
          });
        },
        [l.join('_')],
      ),
      Fe(function () {
        return function () {
          o.update(l, function (s) {
            var d = s || [],
              f = ge(d, 2),
              p = f[0],
              h = p === void 0 ? 0 : p,
              v = f[1],
              x = h - 1;
            return x === 0 ? (r == null || r(v, !1), null) : [h - 1, v];
          });
        };
      }, l),
      o.get(l)[1]
    );
  }
  function An() {
    return !!(typeof window < 'u' && window.document && window.document.createElement);
  }
  function os(e, t) {
    if (!e) return !1;
    if (e.contains) return e.contains(t);
    for (var n = t; n; ) {
      if (n === e) return !0;
      n = n.parentNode;
    }
    return !1;
  }
  var Md = 'data-rc-order',
    Cb = 'rc-util-key',
    as = new Map();
  function Ad() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.mark;
    return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : Cb;
  }
  function xa(e) {
    if (e.attachTo) return e.attachTo;
    var t = document.querySelector('head');
    return t || document.body;
  }
  function Sb(e) {
    return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append';
  }
  function Dd(e) {
    return Array.from((as.get(e) || e).children).filter(function (t) {
      return t.tagName === 'STYLE';
    });
  }
  function Fd(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!An()) return null;
    var n = t.csp,
      r = t.prepend,
      i = document.createElement('style');
    i.setAttribute(Md, Sb(r)), n != null && n.nonce && (i.nonce = n == null ? void 0 : n.nonce), (i.innerHTML = e);
    var o = xa(t),
      l = o.firstChild;
    if (r) {
      if (r === 'queue') {
        var s = Dd(o).filter(function (d) {
          return ['prepend', 'prependQueue'].includes(d.getAttribute(Md));
        });
        if (s.length) return o.insertBefore(i, s[s.length - 1].nextSibling), i;
      }
      o.insertBefore(i, l);
    } else o.appendChild(i);
    return i;
  }
  function jd(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = xa(t);
    return Dd(n).find(function (r) {
      return r.getAttribute(Ad(t)) === e;
    });
  }
  function wa(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = jd(e, t);
    if (n) {
      var r = xa(t);
      r.removeChild(n);
    }
  }
  function xb(e, t) {
    var n = as.get(e);
    if (!n || !os(document, n)) {
      var r = Fd('', t),
        i = r.parentNode;
      as.set(e, i), e.removeChild(r);
    }
  }
  function zi(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      r = xa(n);
    xb(r, n);
    var i = jd(t, n);
    if (i) {
      var o, l;
      if (
        (o = n.csp) !== null &&
        o !== void 0 &&
        o.nonce &&
        i.nonce !== ((l = n.csp) === null || l === void 0 ? void 0 : l.nonce)
      ) {
        var s;
        i.nonce = (s = n.csp) === null || s === void 0 ? void 0 : s.nonce;
      }
      return i.innerHTML !== e && (i.innerHTML = e), i;
    }
    var d = Fd(e, n);
    return d.setAttribute(Ad(n), t), d;
  }
  function Ea(e) {
    var t = '';
    return (
      Object.keys(e).forEach(function (n) {
        var r = e[n];
        (t += n), r && Et(r) === 'object' ? (t += Ea(r)) : (t += r);
      }),
      t
    );
  }
  function wb(e, t) {
    return rs(''.concat(t, '_').concat(Ea(e)));
  }
  var bo = 'layer-'.concat(Date.now(), '-').concat(Math.random()).replace(/\./g, ''),
    zd = '903px';
  function Eb(e, t) {
    if (An()) {
      var n;
      zi(e, bo);
      var r = document.createElement('div');
      (r.style.position = 'fixed'),
        (r.style.left = '0'),
        (r.style.top = '0'),
        t == null || t(r),
        document.body.appendChild(r);
      var i = getComputedStyle(r).width === zd;
      return (n = r.parentNode) === null || n === void 0 || n.removeChild(r), wa(bo), i;
    }
    return !1;
  }
  var ls = void 0;
  function $b() {
    return (
      ls === void 0 &&
        (ls = Eb('@layer '.concat(bo, ' { .').concat(bo, ' { width: ').concat(zd, '!important; } }'), function (e) {
          e.className = bo;
        })),
      ls
    );
  }
  var Ob = {},
    _b = 'css',
    pi = new Map();
  function Tb(e) {
    pi.set(e, (pi.get(e) || 0) + 1);
  }
  function Ib(e) {
    if (typeof document < 'u') {
      var t = document.querySelectorAll('style['.concat(is, '="').concat(e, '"]'));
      t.forEach(function (n) {
        if (n[vo] === Sa) {
          var r;
          (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
        }
      });
    }
  }
  function Pb(e) {
    pi.set(e, (pi.get(e) || 0) - 1);
    var t = Array.from(pi.keys()),
      n = t.filter(function (r) {
        var i = pi.get(r) || 0;
        return i <= 0;
      });
    n.length < t.length &&
      n.forEach(function (r) {
        Ib(r), pi.delete(r);
      });
  }
  function Nb(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      r = n.salt,
      i = r === void 0 ? '' : r,
      o = n.override,
      l = o === void 0 ? Ob : o,
      s = n.formatToken,
      d = De(
        function () {
          return Object.assign.apply(Object, [{}].concat(ze(t)));
        },
        [t],
      ),
      f = De(
        function () {
          return Ea(d);
        },
        [d],
      ),
      p = De(
        function () {
          return Ea(l);
        },
        [l],
      ),
      h = Rd(
        'token',
        [i, e.id, f, p],
        function () {
          var v = e.getDerivativeToken(d),
            x = G(G({}, v), l);
          s && (x = s(x));
          var y = wb(x, i);
          (x._tokenKey = y), Tb(y);
          var C = ''.concat(_b, '-').concat(rs(y));
          return (x._hashId = C), [x, C];
        },
        function (v) {
          Pb(v[0]._tokenKey);
        },
      );
    return h;
  }
  var Rb = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    Ld = 'comm',
    Hd = 'rule',
    Bd = 'decl',
    Mb = '@import',
    Ab = '@keyframes',
    Db = Math.abs,
    ss = String.fromCharCode;
  function kd(e) {
    return e.trim();
  }
  function cs(e, t, n) {
    return e.replace(t, n);
  }
  function Fb(e, t) {
    return e.indexOf(t);
  }
  function yo(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function Co(e, t, n) {
    return e.slice(t, n);
  }
  function Br(e) {
    return e.length;
  }
  function Vd(e) {
    return e.length;
  }
  function $a(e, t) {
    return t.push(e), e;
  }
  var Oa = 1,
    Li = 1,
    Wd = 0,
    nr = 0,
    dn = 0,
    Hi = '';
  function us(e, t, n, r, i, o, l) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: i,
      children: o,
      line: Oa,
      column: Li,
      length: l,
      return: '',
    };
  }
  function jb() {
    return dn;
  }
  function zb() {
    return (dn = nr > 0 ? yo(Hi, --nr) : 0), Li--, dn === 10 && ((Li = 1), Oa--), dn;
  }
  function fr() {
    return (dn = nr < Wd ? yo(Hi, nr++) : 0), Li++, dn === 10 && ((Li = 1), Oa++), dn;
  }
  function gi() {
    return yo(Hi, nr);
  }
  function _a() {
    return nr;
  }
  function Ta(e, t) {
    return Co(Hi, e, t);
  }
  function ds(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function Lb(e) {
    return (Oa = Li = 1), (Wd = Br((Hi = e))), (nr = 0), [];
  }
  function Hb(e) {
    return (Hi = ''), e;
  }
  function fs(e) {
    return kd(Ta(nr - 1, ps(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Bb(e) {
    for (; (dn = gi()) && dn < 33; ) fr();
    return ds(e) > 2 || ds(dn) > 3 ? '' : ' ';
  }
  function kb(e, t) {
    for (; --t && fr() && !(dn < 48 || dn > 102 || (dn > 57 && dn < 65) || (dn > 70 && dn < 97)); );
    return Ta(e, _a() + (t < 6 && gi() == 32 && fr() == 32));
  }
  function ps(e) {
    for (; fr(); )
      switch (dn) {
        case e:
          return nr;
        case 34:
        case 39:
          e !== 34 && e !== 39 && ps(dn);
          break;
        case 40:
          e === 41 && ps(e);
          break;
        case 92:
          fr();
          break;
      }
    return nr;
  }
  function Vb(e, t) {
    for (; fr() && e + dn !== 57; ) if (e + dn === 84 && gi() === 47) break;
    return '/*' + Ta(t, nr - 1) + '*' + ss(e === 47 ? e : fr());
  }
  function Wb(e) {
    for (; !ds(gi()); ) fr();
    return Ta(e, nr);
  }
  function Ub(e) {
    return Hb(Ia('', null, null, null, [''], (e = Lb(e)), 0, [0], e));
  }
  function Ia(e, t, n, r, i, o, l, s, d) {
    for (
      var f = 0, p = 0, h = l, v = 0, x = 0, y = 0, C = 1, O = 1, E = 1, _ = 0, P = '', N = i, j = o, u = r, $ = P;
      O;

    )
      switch (((y = _), (_ = fr()))) {
        case 40:
          if (y != 108 && yo($, h - 1) == 58) {
            Fb(($ += cs(fs(_), '&', '&\f')), '&\f') != -1 && (E = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          $ += fs(_);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          $ += Bb(y);
          break;
        case 92:
          $ += kb(_a() - 1, 7);
          continue;
        case 47:
          switch (gi()) {
            case 42:
            case 47:
              $a(Gb(Vb(fr(), _a()), t, n), d);
              break;
            default:
              $ += '/';
          }
          break;
        case 123 * C:
          s[f++] = Br($) * E;
        case 125 * C:
        case 59:
        case 0:
          switch (_) {
            case 0:
            case 125:
              O = 0;
            case 59 + p:
              x > 0 && Br($) - h && $a(x > 32 ? Gd($ + ';', r, n, h - 1) : Gd(cs($, ' ', '') + ';', r, n, h - 2), d);
              break;
            case 59:
              $ += ';';
            default:
              if (($a((u = Ud($, t, n, f, p, i, s, P, (N = []), (j = []), h)), o), _ === 123))
                if (p === 0) Ia($, t, u, u, N, o, h, s, j);
                else
                  switch (v === 99 && yo($, 3) === 110 ? 100 : v) {
                    case 100:
                    case 109:
                    case 115:
                      Ia(e, u, u, r && $a(Ud(e, u, u, 0, 0, i, s, P, i, (N = []), h), j), i, j, h, s, r ? N : j);
                      break;
                    default:
                      Ia($, u, u, u, [''], j, 0, s, j);
                  }
          }
          (f = p = x = 0), (C = E = 1), (P = $ = ''), (h = l);
          break;
        case 58:
          (h = 1 + Br($)), (x = y);
        default:
          if (C < 1) {
            if (_ == 123) --C;
            else if (_ == 125 && C++ == 0 && zb() == 125) continue;
          }
          switch ((($ += ss(_)), _ * C)) {
            case 38:
              E = p > 0 ? 1 : (($ += '\f'), -1);
              break;
            case 44:
              (s[f++] = (Br($) - 1) * E), (E = 1);
              break;
            case 64:
              gi() === 45 && ($ += fs(fr())), (v = gi()), (p = h = Br((P = $ += Wb(_a())))), _++;
              break;
            case 45:
              y === 45 && Br($) == 2 && (C = 0);
          }
      }
    return o;
  }
  function Ud(e, t, n, r, i, o, l, s, d, f, p) {
    for (var h = i - 1, v = i === 0 ? o : [''], x = Vd(v), y = 0, C = 0, O = 0; y < r; ++y)
      for (var E = 0, _ = Co(e, h + 1, (h = Db((C = l[y])))), P = e; E < x; ++E)
        (P = kd(C > 0 ? v[E] + ' ' + _ : cs(_, /&\f/g, v[E]))) && (d[O++] = P);
    return us(e, t, n, i === 0 ? Hd : s, d, f, p);
  }
  function Gb(e, t, n) {
    return us(e, t, n, Ld, ss(jb()), Co(e, 2, -2), 0);
  }
  function Gd(e, t, n, r) {
    return us(e, t, n, Bd, Co(e, 0, r), Co(e, r + 1, -1), r);
  }
  function gs(e, t) {
    for (var n = '', r = Vd(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || '';
    return n;
  }
  function qb(e, t, n, r) {
    switch (e.type) {
      case Mb:
      case Bd:
        return (e.return = e.return || e.value);
      case Ld:
        return '';
      case Ab:
        return (e.return = e.value + '{' + gs(e.children, r) + '}');
      case Hd:
        e.value = e.props.join(',');
    }
    return Br((n = gs(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
  }
  var qd = An(),
    Kb = '_skip_check_';
  function Kd(e) {
    var t = gs(Ub(e), qb);
    return t.replace(/\{%%%\:[^;];}/g, ';');
  }
  function Xb(e) {
    return Et(e) === 'object' && e && Kb in e;
  }
  function Yb(e, t, n) {
    if (!t) return e;
    var r = '.'.concat(t),
      i = n === 'low' ? ':where('.concat(r, ')') : r,
      o = e.split(',').map(function (l) {
        var s,
          d = l.trim().split(/\s+/),
          f = d[0] || '',
          p = ((s = f.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || '';
        return (f = ''.concat(p).concat(i).concat(f.slice(p.length))), [f].concat(ze(d.slice(1))).join(' ');
      });
    return o.join(',');
  }
  var Xd = new Set(),
    Qb = function e(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { root: !0, parentSelectors: [] },
        i = r.root,
        o = r.injectHash,
        l = r.parentSelectors,
        s = n.hashId,
        d = n.layer;
      n.path;
      var f = n.hashPriority,
        p = n.transformers,
        h = p === void 0 ? [] : p;
      n.linters;
      var v = '',
        x = {};
      function y(P) {
        var N = P.getName(s);
        if (!x[N]) {
          var j = e(P.style, n, { root: !1, parentSelectors: l }),
            u = ge(j, 1),
            $ = u[0];
          x[N] = '@keyframes '.concat(P.getName(s)).concat($);
        }
      }
      function C(P) {
        var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        return (
          P.forEach(function (j) {
            Array.isArray(j) ? C(j, N) : j && N.push(j);
          }),
          N
        );
      }
      var O = C(Array.isArray(t) ? t : [t]);
      if (
        (O.forEach(function (P) {
          var N = typeof P == 'string' && !i ? {} : P;
          if (typeof N == 'string')
            v += ''.concat(
              N,
              `
`,
            );
          else if (N._keyframe) y(N);
          else {
            var j = h.reduce(function (u, $) {
              var I;
              return ($ == null || (I = $.visit) === null || I === void 0 ? void 0 : I.call($, u)) || u;
            }, N);
            Object.keys(j).forEach(function (u) {
              var $ = j[u];
              if (Et($) === 'object' && $ && (u !== 'animationName' || !$._keyframe) && !Xb($)) {
                var I = !1,
                  M = u.trim(),
                  D = !1;
                (i || o) && s
                  ? M.startsWith('@')
                    ? (I = !0)
                    : (M = Yb(u, s, f))
                  : i && !s && (M === '&' || M === '') && ((M = ''), (D = !0));
                var B = e($, n, { root: D, injectHash: I, parentSelectors: [].concat(ze(l), [M]) }),
                  F = ge(B, 2),
                  A = F[0],
                  z = F[1];
                (x = G(G({}, x), z)), (v += ''.concat(M).concat(A));
              } else {
                var V,
                  U = (V = $ == null ? void 0 : $.value) !== null && V !== void 0 ? V : $,
                  X = u.replace(/[A-Z]/g, function (ee) {
                    return '-'.concat(ee.toLowerCase());
                  }),
                  Z = U;
                !Rb[u] && typeof Z == 'number' && Z !== 0 && (Z = ''.concat(Z, 'px')),
                  u === 'animationName' && $ !== null && $ !== void 0 && $._keyframe && (y($), (Z = $.getName(s))),
                  (v += ''.concat(X, ':').concat(Z, ';'));
              }
            });
          }
        }),
        !i)
      )
        v = '{'.concat(v, '}');
      else if (d && $b()) {
        var E = d.split(','),
          _ = E[E.length - 1].trim();
        (v = '@layer '.concat(_, ' {').concat(v, '}')), E.length > 1 && (v = '@layer '.concat(d, '{%%%:%}').concat(v));
      }
      return [v, x];
    };
  function Jb(e, t) {
    return rs(''.concat(e.join('%')).concat(t));
  }
  function Zb() {
    return null;
  }
  function hs(e, t) {
    var n = e.token,
      r = e.path,
      i = e.hashId,
      o = e.layer,
      l = je(Id),
      s = l.autoClear;
    l.mock;
    var d = l.defaultCache,
      f = l.hashPriority,
      p = l.container,
      h = l.ssrInline,
      v = l.transformers,
      x = l.linters,
      y = n._tokenKey,
      C = [y].concat(ze(r)),
      O = qd,
      E = Rd(
        'style',
        C,
        function () {
          var u = t(),
            $ = Qb(u, { hashId: i, hashPriority: f, layer: o, path: r.join('-'), transformers: v, linters: x }),
            I = ge($, 2),
            M = I[0],
            D = I[1],
            B = Kd(M),
            F = Jb(C, B);
          if (O) {
            var A = zi(B, F, { mark: fi, prepend: 'queue', attachTo: p });
            (A[vo] = Sa),
              A.setAttribute(is, y),
              Object.keys(D).forEach(function (z) {
                Xd.has(z) ||
                  (Xd.add(z), zi(Kd(D[z]), '_effect-'.concat(z), { mark: fi, prepend: 'queue', attachTo: p }));
              });
          }
          return [B, y, F];
        },
        function (u, $) {
          var I = ge(u, 3),
            M = I[2];
          ($ || s) && qd && wa(M, { mark: fi });
        },
      ),
      _ = ge(E, 3),
      P = _[0],
      N = _[1],
      j = _[2];
    return function (u) {
      var $;
      if (!h || O || !d) $ = b.createElement(Zb, null);
      else {
        var I;
        $ = b.createElement(
          'style',
          rt({}, ((I = {}), Ie(I, is, N), Ie(I, fi, j), I), { dangerouslySetInnerHTML: { __html: P } }),
        );
      }
      return b.createElement(b.Fragment, null, $, u);
    };
  }
  var St = (function () {
    function e(t, n) {
      zn(this, e),
        Ie(this, 'name', void 0),
        Ie(this, 'style', void 0),
        Ie(this, '_keyframe', !0),
        (this.name = t),
        (this.style = n);
    }
    return (
      Ln(e, [
        {
          key: 'getName',
          value: function () {
            var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
            return n ? ''.concat(n, '-').concat(this.name) : this.name;
          },
        },
      ]),
      e
    );
  })();
  function ey(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  var ms = (function () {
    function e() {
      zn(this, e),
        Ie(this, 'cache', void 0),
        Ie(this, 'keys', void 0),
        Ie(this, 'cacheCallTimes', void 0),
        (this.cache = new Map()),
        (this.keys = []),
        (this.cacheCallTimes = 0);
    }
    return (
      Ln(e, [
        {
          key: 'size',
          value: function () {
            return this.keys.length;
          },
        },
        {
          key: 'internalGet',
          value: function (n) {
            var r,
              i,
              o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
              l = { map: this.cache };
            return (
              n.forEach(function (s) {
                if (!l) l = void 0;
                else {
                  var d, f;
                  l = (d = l) === null || d === void 0 || (f = d.map) === null || f === void 0 ? void 0 : f.get(s);
                }
              }),
              (r = l) !== null && r !== void 0 && r.value && o && (l.value[1] = this.cacheCallTimes++),
              (i = l) === null || i === void 0 ? void 0 : i.value
            );
          },
        },
        {
          key: 'get',
          value: function (n) {
            var r;
            return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
          },
        },
        {
          key: 'has',
          value: function (n) {
            return !!this.internalGet(n);
          },
        },
        {
          key: 'set',
          value: function (n, r) {
            var i = this;
            if (!this.has(n)) {
              if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
                var o = this.keys.reduce(
                    function (f, p) {
                      var h = ge(f, 2),
                        v = h[1];
                      return i.internalGet(p)[1] < v ? [p, i.internalGet(p)[1]] : f;
                    },
                    [this.keys[0], this.cacheCallTimes],
                  ),
                  l = ge(o, 1),
                  s = l[0];
                this.delete(s);
              }
              this.keys.push(n);
            }
            var d = this.cache;
            n.forEach(function (f, p) {
              if (p === n.length - 1) d.set(f, { value: [r, i.cacheCallTimes++] });
              else {
                var h = d.get(f);
                h ? h.map || (h.map = new Map()) : d.set(f, { map: new Map() }), (d = d.get(f).map);
              }
            });
          },
        },
        {
          key: 'deleteByPath',
          value: function (n, r) {
            var i = n.get(r[0]);
            if (r.length === 1) {
              var o;
              return (
                i.map ? n.set(r[0], { map: i.map }) : n.delete(r[0]),
                (o = i.value) === null || o === void 0 ? void 0 : o[0]
              );
            }
            var l = this.deleteByPath(i.map, r.slice(1));
            return (!i.map || i.map.size === 0) && !i.value && n.delete(r[0]), l;
          },
        },
        {
          key: 'delete',
          value: function (n) {
            if (this.has(n))
              return (
                (this.keys = this.keys.filter(function (r) {
                  return !ey(r, n);
                })),
                this.deleteByPath(this.cache, n)
              );
          },
        },
      ]),
      e
    );
  })();
  Ie(ms, 'MAX_CACHE_SIZE', 20), Ie(ms, 'MAX_CACHE_OFFSET', 5);
  var Yd = 0,
    ty = (function () {
      function e(t) {
        zn(this, e),
          Ie(this, 'derivatives', void 0),
          Ie(this, 'id', void 0),
          (this.derivatives = Array.isArray(t) ? t : [t]),
          (this.id = Yd),
          t.length === 0 && (t.length > 0, void 0),
          (Yd += 1);
      }
      return (
        Ln(e, [
          {
            key: 'getDerivativeToken',
            value: function (n) {
              return this.derivatives.reduce(function (r, i) {
                return i(n, r);
              }, void 0);
            },
          },
        ]),
        e
      );
    })(),
    vs = new ms();
  function Qd(e) {
    var t = Array.isArray(e) ? e : [e];
    return vs.has(t) || vs.set(t, new ty(t)), vs.get(t);
  }
  function Bi(e) {
    return (e.notSplit = !0), e;
  }
  Bi(['borderTop', 'borderBottom']),
    Bi(['borderTop']),
    Bi(['borderBottom']),
    Bi(['borderLeft', 'borderRight']),
    Bi(['borderLeft']),
    Bi(['borderRight']);
  var ny = b.createContext({});
  const bs = ny;
  var hi = 'RC_FORM_INTERNAL_HOOKS',
    At = function () {
      tr(!1, 'Can not find FormContext. Please make sure you wrap Field under Form.');
    },
    ki = b.createContext({
      getFieldValue: At,
      getFieldsValue: At,
      getFieldError: At,
      getFieldWarning: At,
      getFieldsError: At,
      isFieldsTouched: At,
      isFieldTouched: At,
      isFieldValidating: At,
      isFieldsValidating: At,
      resetFields: At,
      setFields: At,
      setFieldValue: At,
      setFieldsValue: At,
      validateFields: At,
      submit: At,
      getInternalHooks: function () {
        return (
          At(),
          {
            dispatch: At,
            initEntityValue: At,
            registerField: At,
            useSubscribe: At,
            setInitialValues: At,
            destroyForm: At,
            setCallbacks: At,
            registerWatch: At,
            getFields: At,
            setValidateMessages: At,
            setPreserve: At,
            getInitialValue: At,
          }
        );
      },
    });
  function ys(e) {
    return e == null ? [] : Array.isArray(e) ? e : [e];
  }
  function Un() {
    Un = function () {
      return e;
    };
    var e = {},
      t = Object.prototype,
      n = t.hasOwnProperty,
      r =
        Object.defineProperty ||
        function (F, A, z) {
          F[A] = z.value;
        },
      i = typeof Symbol == 'function' ? Symbol : {},
      o = i.iterator || '@@iterator',
      l = i.asyncIterator || '@@asyncIterator',
      s = i.toStringTag || '@@toStringTag';
    function d(F, A, z) {
      return Object.defineProperty(F, A, { value: z, enumerable: !0, configurable: !0, writable: !0 }), F[A];
    }
    try {
      d({}, '');
    } catch {
      d = function (z, V, U) {
        return (z[V] = U);
      };
    }
    function f(F, A, z, V) {
      var U = A && A.prototype instanceof v ? A : v,
        X = Object.create(U.prototype),
        Z = new M(V || []);
      return r(X, '_invoke', { value: j(F, z, Z) }), X;
    }
    function p(F, A, z) {
      try {
        return { type: 'normal', arg: F.call(A, z) };
      } catch (V) {
        return { type: 'throw', arg: V };
      }
    }
    e.wrap = f;
    var h = {};
    function v() {}
    function x() {}
    function y() {}
    var C = {};
    d(C, o, function () {
      return this;
    });
    var O = Object.getPrototypeOf,
      E = O && O(O(D([])));
    E && E !== t && n.call(E, o) && (C = E);
    var _ = (y.prototype = v.prototype = Object.create(C));
    function P(F) {
      ['next', 'throw', 'return'].forEach(function (A) {
        d(F, A, function (z) {
          return this._invoke(A, z);
        });
      });
    }
    function N(F, A) {
      function z(U, X, Z, ee) {
        var le = p(F[U], F, X);
        if (le.type !== 'throw') {
          var ce = le.arg,
            xe = ce.value;
          return xe && Et(xe) == 'object' && n.call(xe, '__await')
            ? A.resolve(xe.__await).then(
                function (Q) {
                  z('next', Q, Z, ee);
                },
                function (Q) {
                  z('throw', Q, Z, ee);
                },
              )
            : A.resolve(xe).then(
                function (Q) {
                  (ce.value = Q), Z(ce);
                },
                function (Q) {
                  return z('throw', Q, Z, ee);
                },
              );
        }
        ee(le.arg);
      }
      var V;
      r(this, '_invoke', {
        value: function (X, Z) {
          function ee() {
            return new A(function (le, ce) {
              z(X, Z, le, ce);
            });
          }
          return (V = V ? V.then(ee, ee) : ee());
        },
      });
    }
    function j(F, A, z) {
      var V = 'suspendedStart';
      return function (U, X) {
        if (V === 'executing') throw new Error('Generator is already running');
        if (V === 'completed') {
          if (U === 'throw') throw X;
          return B();
        }
        for (z.method = U, z.arg = X; ; ) {
          var Z = z.delegate;
          if (Z) {
            var ee = u(Z, z);
            if (ee) {
              if (ee === h) continue;
              return ee;
            }
          }
          if (z.method === 'next') z.sent = z._sent = z.arg;
          else if (z.method === 'throw') {
            if (V === 'suspendedStart') throw ((V = 'completed'), z.arg);
            z.dispatchException(z.arg);
          } else z.method === 'return' && z.abrupt('return', z.arg);
          V = 'executing';
          var le = p(F, A, z);
          if (le.type === 'normal') {
            if (((V = z.done ? 'completed' : 'suspendedYield'), le.arg === h)) continue;
            return { value: le.arg, done: z.done };
          }
          le.type === 'throw' && ((V = 'completed'), (z.method = 'throw'), (z.arg = le.arg));
        }
      };
    }
    function u(F, A) {
      var z = A.method,
        V = F.iterator[z];
      if (V === void 0)
        return (
          (A.delegate = null),
          (z === 'throw' &&
            F.iterator.return &&
            ((A.method = 'return'), (A.arg = void 0), u(F, A), A.method === 'throw')) ||
            (z !== 'return' &&
              ((A.method = 'throw'), (A.arg = new TypeError("The iterator does not provide a '" + z + "' method")))),
          h
        );
      var U = p(V, F.iterator, A.arg);
      if (U.type === 'throw') return (A.method = 'throw'), (A.arg = U.arg), (A.delegate = null), h;
      var X = U.arg;
      return X
        ? X.done
          ? ((A[F.resultName] = X.value),
            (A.next = F.nextLoc),
            A.method !== 'return' && ((A.method = 'next'), (A.arg = void 0)),
            (A.delegate = null),
            h)
          : X
        : ((A.method = 'throw'), (A.arg = new TypeError('iterator result is not an object')), (A.delegate = null), h);
    }
    function $(F) {
      var A = { tryLoc: F[0] };
      1 in F && (A.catchLoc = F[1]), 2 in F && ((A.finallyLoc = F[2]), (A.afterLoc = F[3])), this.tryEntries.push(A);
    }
    function I(F) {
      var A = F.completion || {};
      (A.type = 'normal'), delete A.arg, (F.completion = A);
    }
    function M(F) {
      (this.tryEntries = [{ tryLoc: 'root' }]), F.forEach($, this), this.reset(!0);
    }
    function D(F) {
      if (F) {
        var A = F[o];
        if (A) return A.call(F);
        if (typeof F.next == 'function') return F;
        if (!isNaN(F.length)) {
          var z = -1,
            V = function U() {
              for (; ++z < F.length; ) if (n.call(F, z)) return (U.value = F[z]), (U.done = !1), U;
              return (U.value = void 0), (U.done = !0), U;
            };
          return (V.next = V);
        }
      }
      return { next: B };
    }
    function B() {
      return { value: void 0, done: !0 };
    }
    return (
      (x.prototype = y),
      r(_, 'constructor', { value: y, configurable: !0 }),
      r(y, 'constructor', { value: x, configurable: !0 }),
      (x.displayName = d(y, s, 'GeneratorFunction')),
      (e.isGeneratorFunction = function (F) {
        var A = typeof F == 'function' && F.constructor;
        return !!A && (A === x || (A.displayName || A.name) === 'GeneratorFunction');
      }),
      (e.mark = function (F) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(F, y) : ((F.__proto__ = y), d(F, s, 'GeneratorFunction')),
          (F.prototype = Object.create(_)),
          F
        );
      }),
      (e.awrap = function (F) {
        return { __await: F };
      }),
      P(N.prototype),
      d(N.prototype, l, function () {
        return this;
      }),
      (e.AsyncIterator = N),
      (e.async = function (F, A, z, V, U) {
        U === void 0 && (U = Promise);
        var X = new N(f(F, A, z, V), U);
        return e.isGeneratorFunction(A)
          ? X
          : X.next().then(function (Z) {
              return Z.done ? Z.value : X.next();
            });
      }),
      P(_),
      d(_, s, 'Generator'),
      d(_, o, function () {
        return this;
      }),
      d(_, 'toString', function () {
        return '[object Generator]';
      }),
      (e.keys = function (F) {
        var A = Object(F),
          z = [];
        for (var V in A) z.push(V);
        return (
          z.reverse(),
          function U() {
            for (; z.length; ) {
              var X = z.pop();
              if (X in A) return (U.value = X), (U.done = !1), U;
            }
            return (U.done = !0), U;
          }
        );
      }),
      (e.values = D),
      (M.prototype = {
        constructor: M,
        reset: function (A) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = void 0),
            this.tryEntries.forEach(I),
            !A)
          )
            for (var z in this) z.charAt(0) === 't' && n.call(this, z) && !isNaN(+z.slice(1)) && (this[z] = void 0);
        },
        stop: function () {
          this.done = !0;
          var A = this.tryEntries[0].completion;
          if (A.type === 'throw') throw A.arg;
          return this.rval;
        },
        dispatchException: function (A) {
          if (this.done) throw A;
          var z = this;
          function V(ce, xe) {
            return (Z.type = 'throw'), (Z.arg = A), (z.next = ce), xe && ((z.method = 'next'), (z.arg = void 0)), !!xe;
          }
          for (var U = this.tryEntries.length - 1; U >= 0; --U) {
            var X = this.tryEntries[U],
              Z = X.completion;
            if (X.tryLoc === 'root') return V('end');
            if (X.tryLoc <= this.prev) {
              var ee = n.call(X, 'catchLoc'),
                le = n.call(X, 'finallyLoc');
              if (ee && le) {
                if (this.prev < X.catchLoc) return V(X.catchLoc, !0);
                if (this.prev < X.finallyLoc) return V(X.finallyLoc);
              } else if (ee) {
                if (this.prev < X.catchLoc) return V(X.catchLoc, !0);
              } else {
                if (!le) throw new Error('try statement without catch or finally');
                if (this.prev < X.finallyLoc) return V(X.finallyLoc);
              }
            }
          }
        },
        abrupt: function (A, z) {
          for (var V = this.tryEntries.length - 1; V >= 0; --V) {
            var U = this.tryEntries[V];
            if (U.tryLoc <= this.prev && n.call(U, 'finallyLoc') && this.prev < U.finallyLoc) {
              var X = U;
              break;
            }
          }
          X && (A === 'break' || A === 'continue') && X.tryLoc <= z && z <= X.finallyLoc && (X = null);
          var Z = X ? X.completion : {};
          return (
            (Z.type = A), (Z.arg = z), X ? ((this.method = 'next'), (this.next = X.finallyLoc), h) : this.complete(Z)
          );
        },
        complete: function (A, z) {
          if (A.type === 'throw') throw A.arg;
          return (
            A.type === 'break' || A.type === 'continue'
              ? (this.next = A.arg)
              : A.type === 'return'
              ? ((this.rval = this.arg = A.arg), (this.method = 'return'), (this.next = 'end'))
              : A.type === 'normal' && z && (this.next = z),
            h
          );
        },
        finish: function (A) {
          for (var z = this.tryEntries.length - 1; z >= 0; --z) {
            var V = this.tryEntries[z];
            if (V.finallyLoc === A) return this.complete(V.completion, V.afterLoc), I(V), h;
          }
        },
        catch: function (A) {
          for (var z = this.tryEntries.length - 1; z >= 0; --z) {
            var V = this.tryEntries[z];
            if (V.tryLoc === A) {
              var U = V.completion;
              if (U.type === 'throw') {
                var X = U.arg;
                I(V);
              }
              return X;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (A, z, V) {
          return (
            (this.delegate = { iterator: D(A), resultName: z, nextLoc: V }),
            this.method === 'next' && (this.arg = void 0),
            h
          );
        },
      }),
      e
    );
  }
  function Jd(e, t, n, r, i, o, l) {
    try {
      var s = e[o](l),
        d = s.value;
    } catch (f) {
      n(f);
      return;
    }
    s.done ? t(d) : Promise.resolve(d).then(r, i);
  }
  function Vi(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var o = e.apply(t, n);
        function l(d) {
          Jd(o, r, i, l, s, 'next', d);
        }
        function s(d) {
          Jd(o, r, i, l, s, 'throw', d);
        }
        l(void 0);
      });
    };
  }
  function mi() {
    return (
      (mi = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      mi.apply(this, arguments)
    );
  }
  function ry(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), So(e, t);
  }
  function Cs(e) {
    return (
      (Cs = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          }),
      Cs(e)
    );
  }
  function So(e, t) {
    return (
      (So = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, i) {
            return (r.__proto__ = i), r;
          }),
      So(e, t)
    );
  }
  function iy() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
      return !1;
    }
  }
  function Pa(e, t, n) {
    return (
      iy()
        ? (Pa = Reflect.construct.bind())
        : (Pa = function (i, o, l) {
            var s = [null];
            s.push.apply(s, o);
            var d = Function.bind.apply(i, s),
              f = new d();
            return l && So(f, l.prototype), f;
          }),
      Pa.apply(null, arguments)
    );
  }
  function oy(e) {
    return Function.toString.call(e).indexOf('[native code]') !== -1;
  }
  function Ss(e) {
    var t = typeof Map == 'function' ? new Map() : void 0;
    return (
      (Ss = function (r) {
        if (r === null || !oy(r)) return r;
        if (typeof r != 'function') throw new TypeError('Super expression must either be null or a function');
        if (typeof t < 'u') {
          if (t.has(r)) return t.get(r);
          t.set(r, i);
        }
        function i() {
          return Pa(r, arguments, Cs(this).constructor);
        }
        return (
          (i.prototype = Object.create(r.prototype, {
            constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
          })),
          So(i, r)
        );
      }),
      Ss(e)
    );
  }
  var ay = /%[sdj%]/g,
    ly = function () {};
  typeof process < 'u' && process.env;
  function xs(e) {
    if (!e || !e.length) return null;
    var t = {};
    return (
      e.forEach(function (n) {
        var r = n.field;
        (t[r] = t[r] || []), t[r].push(n);
      }),
      t
    );
  }
  function Gn(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    var i = 0,
      o = n.length;
    if (typeof e == 'function') return e.apply(null, n);
    if (typeof e == 'string') {
      var l = e.replace(ay, function (s) {
        if (s === '%%') return '%';
        if (i >= o) return s;
        switch (s) {
          case '%s':
            return String(n[i++]);
          case '%d':
            return Number(n[i++]);
          case '%j':
            try {
              return JSON.stringify(n[i++]);
            } catch {
              return '[Circular]';
            }
            break;
          default:
            return s;
        }
      });
      return l;
    }
    return e;
  }
  function sy(e) {
    return e === 'string' || e === 'url' || e === 'hex' || e === 'email' || e === 'date' || e === 'pattern';
  }
  function hn(e, t) {
    return !!(e == null || (t === 'array' && Array.isArray(e) && !e.length) || (sy(t) && typeof e == 'string' && !e));
  }
  function cy(e, t, n) {
    var r = [],
      i = 0,
      o = e.length;
    function l(s) {
      r.push.apply(r, s || []), i++, i === o && n(r);
    }
    e.forEach(function (s) {
      t(s, l);
    });
  }
  function Zd(e, t, n) {
    var r = 0,
      i = e.length;
    function o(l) {
      if (l && l.length) {
        n(l);
        return;
      }
      var s = r;
      (r = r + 1), s < i ? t(e[s], o) : n([]);
    }
    o([]);
  }
  function uy(e) {
    var t = [];
    return (
      Object.keys(e).forEach(function (n) {
        t.push.apply(t, e[n] || []);
      }),
      t
    );
  }
  var ef = (function (e) {
    ry(t, e);
    function t(n, r) {
      var i;
      return (i = e.call(this, 'Async Validation Error') || this), (i.errors = n), (i.fields = r), i;
    }
    return t;
  })(Ss(Error));
  function dy(e, t, n, r, i) {
    if (t.first) {
      var o = new Promise(function (v, x) {
        var y = function (E) {
            return r(E), E.length ? x(new ef(E, xs(E))) : v(i);
          },
          C = uy(e);
        Zd(C, n, y);
      });
      return (
        o.catch(function (v) {
          return v;
        }),
        o
      );
    }
    var l = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
      s = Object.keys(e),
      d = s.length,
      f = 0,
      p = [],
      h = new Promise(function (v, x) {
        var y = function (O) {
          if ((p.push.apply(p, O), f++, f === d)) return r(p), p.length ? x(new ef(p, xs(p))) : v(i);
        };
        s.length || (r(p), v(i)),
          s.forEach(function (C) {
            var O = e[C];
            l.indexOf(C) !== -1 ? Zd(O, n, y) : cy(O, n, y);
          });
      });
    return (
      h.catch(function (v) {
        return v;
      }),
      h
    );
  }
  function fy(e) {
    return !!(e && e.message !== void 0);
  }
  function py(e, t) {
    for (var n = e, r = 0; r < t.length; r++) {
      if (n == null) return n;
      n = n[t[r]];
    }
    return n;
  }
  function tf(e, t) {
    return function (n) {
      var r;
      return (
        e.fullFields ? (r = py(t, e.fullFields)) : (r = t[n.field || e.fullField]),
        fy(n)
          ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
          : { message: typeof n == 'function' ? n() : n, fieldValue: r, field: n.field || e.fullField }
      );
    };
  }
  function nf(e, t) {
    if (t) {
      for (var n in t)
        if (t.hasOwnProperty(n)) {
          var r = t[n];
          typeof r == 'object' && typeof e[n] == 'object' ? (e[n] = mi({}, e[n], r)) : (e[n] = r);
        }
    }
    return e;
  }
  var rf = function (t, n, r, i, o, l) {
      t.required && (!r.hasOwnProperty(t.field) || hn(n, l || t.type)) && i.push(Gn(o.messages.required, t.fullField));
    },
    gy = function (t, n, r, i, o) {
      (/^\s+$/.test(n) || n === '') && i.push(Gn(o.messages.whitespace, t.fullField));
    },
    Na,
    hy = function () {
      if (Na) return Na;
      var e = '[a-fA-F\\d:]',
        t = function (N) {
          return N && N.includeBoundaries ? '(?:(?<=\\s|^)(?=' + e + ')|(?<=' + e + ')(?=\\s|$))' : '';
        },
        n = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
        r = '[a-fA-F\\d]{1,4}',
        i = (
          `
(?:
(?:` +
          r +
          ':){7}(?:' +
          r +
          `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` +
          r +
          ':){6}(?:' +
          n +
          '|:' +
          r +
          `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` +
          r +
          ':){5}(?::' +
          n +
          '|(?::' +
          r +
          `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` +
          r +
          ':){4}(?:(?::' +
          r +
          '){0,1}:' +
          n +
          '|(?::' +
          r +
          `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` +
          r +
          ':){3}(?:(?::' +
          r +
          '){0,2}:' +
          n +
          '|(?::' +
          r +
          `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` +
          r +
          ':){2}(?:(?::' +
          r +
          '){0,3}:' +
          n +
          '|(?::' +
          r +
          `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` +
          r +
          ':){1}(?:(?::' +
          r +
          '){0,4}:' +
          n +
          '|(?::' +
          r +
          `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` +
          r +
          '){0,5}:' +
          n +
          '|(?::' +
          r +
          `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
        )
          .replace(/\s*\/\/.*$/gm, '')
          .replace(/\n/g, '')
          .trim(),
        o = new RegExp('(?:^' + n + '$)|(?:^' + i + '$)'),
        l = new RegExp('^' + n + '$'),
        s = new RegExp('^' + i + '$'),
        d = function (N) {
          return N && N.exact ? o : new RegExp('(?:' + t(N) + n + t(N) + ')|(?:' + t(N) + i + t(N) + ')', 'g');
        };
      (d.v4 = function (P) {
        return P && P.exact ? l : new RegExp('' + t(P) + n + t(P), 'g');
      }),
        (d.v6 = function (P) {
          return P && P.exact ? s : new RegExp('' + t(P) + i + t(P), 'g');
        });
      var f = '(?:(?:[a-z]+:)?//)',
        p = '(?:\\S+(?::\\S*)?@)?',
        h = d.v4().source,
        v = d.v6().source,
        x = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
        y = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
        C = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
        O = '(?::\\d{2,5})?',
        E = '(?:[/?#][^\\s"]*)?',
        _ = '(?:' + f + '|www\\.)' + p + '(?:localhost|' + h + '|' + v + '|' + x + y + C + ')' + O + E;
      return (Na = new RegExp('(?:^' + _ + '$)', 'i')), Na;
    },
    of = {
      email:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
      hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
    },
    xo = {
      integer: function (t) {
        return xo.number(t) && parseInt(t, 10) === t;
      },
      float: function (t) {
        return xo.number(t) && !xo.integer(t);
      },
      array: function (t) {
        return Array.isArray(t);
      },
      regexp: function (t) {
        if (t instanceof RegExp) return !0;
        try {
          return !!new RegExp(t);
        } catch {
          return !1;
        }
      },
      date: function (t) {
        return (
          typeof t.getTime == 'function' &&
          typeof t.getMonth == 'function' &&
          typeof t.getYear == 'function' &&
          !isNaN(t.getTime())
        );
      },
      number: function (t) {
        return isNaN(t) ? !1 : typeof t == 'number';
      },
      object: function (t) {
        return typeof t == 'object' && !xo.array(t);
      },
      method: function (t) {
        return typeof t == 'function';
      },
      email: function (t) {
        return typeof t == 'string' && t.length <= 320 && !!t.match(of.email);
      },
      url: function (t) {
        return typeof t == 'string' && t.length <= 2048 && !!t.match(hy());
      },
      hex: function (t) {
        return typeof t == 'string' && !!t.match(of.hex);
      },
    },
    my = function (t, n, r, i, o) {
      if (t.required && n === void 0) {
        rf(t, n, r, i, o);
        return;
      }
      var l = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'],
        s = t.type;
      l.indexOf(s) > -1
        ? xo[s](n) || i.push(Gn(o.messages.types[s], t.fullField, t.type))
        : s && typeof n !== t.type && i.push(Gn(o.messages.types[s], t.fullField, t.type));
    },
    vy = function (t, n, r, i, o) {
      var l = typeof t.len == 'number',
        s = typeof t.min == 'number',
        d = typeof t.max == 'number',
        f = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        p = n,
        h = null,
        v = typeof n == 'number',
        x = typeof n == 'string',
        y = Array.isArray(n);
      if ((v ? (h = 'number') : x ? (h = 'string') : y && (h = 'array'), !h)) return !1;
      y && (p = n.length),
        x && (p = n.replace(f, '_').length),
        l
          ? p !== t.len && i.push(Gn(o.messages[h].len, t.fullField, t.len))
          : s && !d && p < t.min
          ? i.push(Gn(o.messages[h].min, t.fullField, t.min))
          : d && !s && p > t.max
          ? i.push(Gn(o.messages[h].max, t.fullField, t.max))
          : s && d && (p < t.min || p > t.max) && i.push(Gn(o.messages[h].range, t.fullField, t.min, t.max));
    },
    Wi = 'enum',
    by = function (t, n, r, i, o) {
      (t[Wi] = Array.isArray(t[Wi]) ? t[Wi] : []),
        t[Wi].indexOf(n) === -1 && i.push(Gn(o.messages[Wi], t.fullField, t[Wi].join(', ')));
    },
    yy = function (t, n, r, i, o) {
      if (t.pattern) {
        if (t.pattern instanceof RegExp)
          (t.pattern.lastIndex = 0),
            t.pattern.test(n) || i.push(Gn(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
        else if (typeof t.pattern == 'string') {
          var l = new RegExp(t.pattern);
          l.test(n) || i.push(Gn(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
        }
      }
    },
    yt = { required: rf, whitespace: gy, type: my, range: vy, enum: by, pattern: yy },
    Cy = function (t, n, r, i, o) {
      var l = [],
        s = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (s) {
        if (hn(n, 'string') && !t.required) return r();
        yt.required(t, n, i, l, o, 'string'),
          hn(n, 'string') ||
            (yt.type(t, n, i, l, o),
            yt.range(t, n, i, l, o),
            yt.pattern(t, n, i, l, o),
            t.whitespace === !0 && yt.whitespace(t, n, i, l, o));
      }
      r(l);
    },
    Sy = function (t, n, r, i, o) {
      var l = [],
        s = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (s) {
        if (hn(n) && !t.required) return r();
        yt.required(t, n, i, l, o), n !== void 0 && yt.type(t, n, i, l, o);
      }
      r(l);
    },
    xy = function (t, n, r, i, o) {
      var l = [],
        s = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (s) {
        if ((n === '' && (n = void 0), hn(n) && !t.required)) return r();
        yt.required(t, n, i, l, o), n !== void 0 && (yt.type(t, n, i, l, o), yt.range(t, n, i, l, o));
      }
      r(l);
    },
    wy = function (t, n, r, i, o) {
      var l = [],
        s = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (s) {
        if (hn(n) && !t.required) return r();
        yt.required(t, n, i, l, o), n !== void 0 && yt.type(t, n, i, l, o);
      }
      r(l);
    },
    Ey = function (t, n, r, i, o) {
      var l = [],
        s = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (s) {
        if (hn(n) && !t.required) return r();
        yt.required(t, n, i, l, o), hn(n) || yt.type(t, n, i, l, o);
      }
      r(l);
    },
    $y = function (t, n, r, i, o) {
      var l = [],
        s = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (s) {
        if (hn(n) && !t.required) return r();
        yt.required(t, n, i, l, o), n !== void 0 && (yt.type(t, n, i, l, o), yt.range(t, n, i, l, o));
      }
      r(l);
    },
    Oy = function (t, n, r, i, o) {
      var l = [],
        s = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (s) {
        if (hn(n) && !t.required) return r();
        yt.required(t, n, i, l, o), n !== void 0 && (yt.type(t, n, i, l, o), yt.range(t, n, i, l, o));
      }
      r(l);
    },
    _y = function (t, n, r, i, o) {
      var l = [],
        s = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (s) {
        if (n == null && !t.required) return r();
        yt.required(t, n, i, l, o, 'array'), n != null && (yt.type(t, n, i, l, o), yt.range(t, n, i, l, o));
      }
      r(l);
    },
    Ty = function (t, n, r, i, o) {
      var l = [],
        s = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (s) {
        if (hn(n) && !t.required) return r();
        yt.required(t, n, i, l, o), n !== void 0 && yt.type(t, n, i, l, o);
      }
      r(l);
    },
    Iy = 'enum',
    Py = function (t, n, r, i, o) {
      var l = [],
        s = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (s) {
        if (hn(n) && !t.required) return r();
        yt.required(t, n, i, l, o), n !== void 0 && yt[Iy](t, n, i, l, o);
      }
      r(l);
    },
    Ny = function (t, n, r, i, o) {
      var l = [],
        s = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (s) {
        if (hn(n, 'string') && !t.required) return r();
        yt.required(t, n, i, l, o), hn(n, 'string') || yt.pattern(t, n, i, l, o);
      }
      r(l);
    },
    Ry = function (t, n, r, i, o) {
      var l = [],
        s = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (s) {
        if (hn(n, 'date') && !t.required) return r();
        if ((yt.required(t, n, i, l, o), !hn(n, 'date'))) {
          var d;
          n instanceof Date ? (d = n) : (d = new Date(n)),
            yt.type(t, d, i, l, o),
            d && yt.range(t, d.getTime(), i, l, o);
        }
      }
      r(l);
    },
    My = function (t, n, r, i, o) {
      var l = [],
        s = Array.isArray(n) ? 'array' : typeof n;
      yt.required(t, n, i, l, o, s), r(l);
    },
    ws = function (t, n, r, i, o) {
      var l = t.type,
        s = [],
        d = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (d) {
        if (hn(n, l) && !t.required) return r();
        yt.required(t, n, i, s, o, l), hn(n, l) || yt.type(t, n, i, s, o);
      }
      r(s);
    },
    Ay = function (t, n, r, i, o) {
      var l = [],
        s = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (s) {
        if (hn(n) && !t.required) return r();
        yt.required(t, n, i, l, o);
      }
      r(l);
    },
    wo = {
      string: Cy,
      method: Sy,
      number: xy,
      boolean: wy,
      regexp: Ey,
      integer: $y,
      float: Oy,
      array: _y,
      object: Ty,
      enum: Py,
      pattern: Ny,
      date: Ry,
      url: ws,
      hex: ws,
      email: ws,
      required: My,
      any: Ay,
    };
  function Es() {
    return {
      default: 'Validation error on field %s',
      required: '%s is required',
      enum: '%s must be one of %s',
      whitespace: '%s cannot be empty',
      date: {
        format: '%s date %s is invalid for format %s',
        parse: '%s date could not be parsed, %s is invalid ',
        invalid: '%s date %s is invalid',
      },
      types: {
        string: '%s is not a %s',
        method: '%s is not a %s (function)',
        array: '%s is not an %s',
        object: '%s is not an %s',
        number: '%s is not a %s',
        date: '%s is not a %s',
        boolean: '%s is not a %s',
        integer: '%s is not an %s',
        float: '%s is not a %s',
        regexp: '%s is not a valid %s',
        email: '%s is not a valid %s',
        url: '%s is not a valid %s',
        hex: '%s is not a valid %s',
      },
      string: {
        len: '%s must be exactly %s characters',
        min: '%s must be at least %s characters',
        max: '%s cannot be longer than %s characters',
        range: '%s must be between %s and %s characters',
      },
      number: {
        len: '%s must equal %s',
        min: '%s cannot be less than %s',
        max: '%s cannot be greater than %s',
        range: '%s must be between %s and %s',
      },
      array: {
        len: '%s must be exactly %s in length',
        min: '%s cannot be less than %s in length',
        max: '%s cannot be greater than %s in length',
        range: '%s must be between %s and %s in length',
      },
      pattern: { mismatch: '%s value %s does not match pattern %s' },
      clone: function () {
        var t = JSON.parse(JSON.stringify(this));
        return (t.clone = this.clone), t;
      },
    };
  }
  var $s = Es(),
    Eo = (function () {
      function e(n) {
        (this.rules = null), (this._messages = $s), this.define(n);
      }
      var t = e.prototype;
      return (
        (t.define = function (r) {
          var i = this;
          if (!r) throw new Error('Cannot configure a schema with no rules');
          if (typeof r != 'object' || Array.isArray(r)) throw new Error('Rules must be an object');
          (this.rules = {}),
            Object.keys(r).forEach(function (o) {
              var l = r[o];
              i.rules[o] = Array.isArray(l) ? l : [l];
            });
        }),
        (t.messages = function (r) {
          return r && (this._messages = nf(Es(), r)), this._messages;
        }),
        (t.validate = function (r, i, o) {
          var l = this;
          i === void 0 && (i = {}), o === void 0 && (o = function () {});
          var s = r,
            d = i,
            f = o;
          if ((typeof d == 'function' && ((f = d), (d = {})), !this.rules || Object.keys(this.rules).length === 0))
            return f && f(null, s), Promise.resolve(s);
          function p(C) {
            var O = [],
              E = {};
            function _(N) {
              if (Array.isArray(N)) {
                var j;
                O = (j = O).concat.apply(j, N);
              } else O.push(N);
            }
            for (var P = 0; P < C.length; P++) _(C[P]);
            O.length ? ((E = xs(O)), f(O, E)) : f(null, s);
          }
          if (d.messages) {
            var h = this.messages();
            h === $s && (h = Es()), nf(h, d.messages), (d.messages = h);
          } else d.messages = this.messages();
          var v = {},
            x = d.keys || Object.keys(this.rules);
          x.forEach(function (C) {
            var O = l.rules[C],
              E = s[C];
            O.forEach(function (_) {
              var P = _;
              typeof P.transform == 'function' && (s === r && (s = mi({}, s)), (E = s[C] = P.transform(E))),
                typeof P == 'function' ? (P = { validator: P }) : (P = mi({}, P)),
                (P.validator = l.getValidationMethod(P)),
                P.validator &&
                  ((P.field = C),
                  (P.fullField = P.fullField || C),
                  (P.type = l.getType(P)),
                  (v[C] = v[C] || []),
                  v[C].push({ rule: P, value: E, source: s, field: C }));
            });
          });
          var y = {};
          return dy(
            v,
            d,
            function (C, O) {
              var E = C.rule,
                _ =
                  (E.type === 'object' || E.type === 'array') &&
                  (typeof E.fields == 'object' || typeof E.defaultField == 'object');
              (_ = _ && (E.required || (!E.required && C.value))), (E.field = C.field);
              function P(u, $) {
                return mi({}, $, {
                  fullField: E.fullField + '.' + u,
                  fullFields: E.fullFields ? [].concat(E.fullFields, [u]) : [u],
                });
              }
              function N(u) {
                u === void 0 && (u = []);
                var $ = Array.isArray(u) ? u : [u];
                !d.suppressWarning && $.length && e.warning('async-validator:', $),
                  $.length && E.message !== void 0 && ($ = [].concat(E.message));
                var I = $.map(tf(E, s));
                if (d.first && I.length) return (y[E.field] = 1), O(I);
                if (!_) O(I);
                else {
                  if (E.required && !C.value)
                    return (
                      E.message !== void 0
                        ? (I = [].concat(E.message).map(tf(E, s)))
                        : d.error && (I = [d.error(E, Gn(d.messages.required, E.field))]),
                      O(I)
                    );
                  var M = {};
                  E.defaultField &&
                    Object.keys(C.value).map(function (F) {
                      M[F] = E.defaultField;
                    }),
                    (M = mi({}, M, C.rule.fields));
                  var D = {};
                  Object.keys(M).forEach(function (F) {
                    var A = M[F],
                      z = Array.isArray(A) ? A : [A];
                    D[F] = z.map(P.bind(null, F));
                  });
                  var B = new e(D);
                  B.messages(d.messages),
                    C.rule.options && ((C.rule.options.messages = d.messages), (C.rule.options.error = d.error)),
                    B.validate(C.value, C.rule.options || d, function (F) {
                      var A = [];
                      I && I.length && A.push.apply(A, I), F && F.length && A.push.apply(A, F), O(A.length ? A : null);
                    });
                }
              }
              var j;
              if (E.asyncValidator) j = E.asyncValidator(E, C.value, N, C.source, d);
              else if (E.validator) {
                try {
                  j = E.validator(E, C.value, N, C.source, d);
                } catch (u) {
                  console.error == null || console.error(u),
                    d.suppressValidatorError ||
                      setTimeout(function () {
                        throw u;
                      }, 0),
                    N(u.message);
                }
                j === !0
                  ? N()
                  : j === !1
                  ? N(
                      typeof E.message == 'function'
                        ? E.message(E.fullField || E.field)
                        : E.message || (E.fullField || E.field) + ' fails',
                    )
                  : j instanceof Array
                  ? N(j)
                  : j instanceof Error && N(j.message);
              }
              j &&
                j.then &&
                j.then(
                  function () {
                    return N();
                  },
                  function (u) {
                    return N(u);
                  },
                );
            },
            function (C) {
              p(C);
            },
            s,
          );
        }),
        (t.getType = function (r) {
          if (
            (r.type === void 0 && r.pattern instanceof RegExp && (r.type = 'pattern'),
            typeof r.validator != 'function' && r.type && !wo.hasOwnProperty(r.type))
          )
            throw new Error(Gn('Unknown rule type %s', r.type));
          return r.type || 'string';
        }),
        (t.getValidationMethod = function (r) {
          if (typeof r.validator == 'function') return r.validator;
          var i = Object.keys(r),
            o = i.indexOf('message');
          return (
            o !== -1 && i.splice(o, 1),
            i.length === 1 && i[0] === 'required' ? wo.required : wo[this.getType(r)] || void 0
          );
        }),
        e
      );
    })();
  (Eo.register = function (t, n) {
    if (typeof n != 'function') throw new Error('Cannot register a validator by type, validator is not a function');
    wo[t] = n;
  }),
    (Eo.warning = ly),
    (Eo.messages = $s),
    (Eo.validators = wo);
  var qn = "'${name}' is not a valid ${type}",
    af = {
      default: "Validation error on field '${name}'",
      required: "'${name}' is required",
      enum: "'${name}' must be one of [${enum}]",
      whitespace: "'${name}' cannot be empty",
      date: {
        format: "'${name}' is invalid for format date",
        parse: "'${name}' could not be parsed as date",
        invalid: "'${name}' is invalid date",
      },
      types: {
        string: qn,
        method: qn,
        array: qn,
        object: qn,
        number: qn,
        date: qn,
        boolean: qn,
        integer: qn,
        float: qn,
        regexp: qn,
        email: qn,
        url: qn,
        hex: qn,
      },
      string: {
        len: "'${name}' must be exactly ${len} characters",
        min: "'${name}' must be at least ${min} characters",
        max: "'${name}' cannot be longer than ${max} characters",
        range: "'${name}' must be between ${min} and ${max} characters",
      },
      number: {
        len: "'${name}' must equal ${len}",
        min: "'${name}' cannot be less than ${min}",
        max: "'${name}' cannot be greater than ${max}",
        range: "'${name}' must be between ${min} and ${max}",
      },
      array: {
        len: "'${name}' must be exactly ${len} in length",
        min: "'${name}' cannot be less than ${min} in length",
        max: "'${name}' cannot be greater than ${max} in length",
        range: "'${name}' must be between ${min} and ${max} in length",
      },
      pattern: { mismatch: "'${name}' does not match pattern ${pattern}" },
    };
  function lf(e, t) {
    for (var n = e, r = 0; r < t.length; r += 1) {
      if (n == null) return;
      n = n[t[r]];
    }
    return n;
  }
  function sf(e) {
    return Pd(e) || Td(e) || ns(e) || Nd();
  }
  function cf(e, t, n, r) {
    if (!t.length) return n;
    var i = sf(t),
      o = i[0],
      l = i.slice(1),
      s;
    return (
      !e && typeof o == 'number' ? (s = []) : Array.isArray(e) ? (s = ze(e)) : (s = G({}, e)),
      r && n === void 0 && l.length === 1 ? delete s[o][l[0]] : (s[o] = cf(s[o], l, n, r)),
      s
    );
  }
  function Dy(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    return t.length && r && n === void 0 && !lf(e, t.slice(0, -1)) ? e : cf(e, t, n, r);
  }
  function Ra(e) {
    return Array.isArray(e) ? jy(e) : Et(e) === 'object' && e !== null ? Fy(e) : e;
  }
  function Fy(e) {
    if (Object.getPrototypeOf(e) === Object.prototype) {
      var t = {};
      for (var n in e) t[n] = Ra(e[n]);
      return t;
    }
    return e;
  }
  function jy(e) {
    return e.map(function (t) {
      return Ra(t);
    });
  }
  function an(e) {
    return ys(e);
  }
  function kr(e, t) {
    var n = lf(e, t);
    return n;
  }
  function Vr(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
      i = Dy(e, t, n, r);
    return i;
  }
  function uf(e, t) {
    var n = {};
    return (
      t.forEach(function (r) {
        var i = kr(e, r);
        n = Vr(n, r, i);
      }),
      n
    );
  }
  function $o(e, t) {
    return (
      e &&
      e.some(function (n) {
        return pf(n, t);
      })
    );
  }
  function df(e) {
    return Et(e) === 'object' && e !== null && Object.getPrototypeOf(e) === Object.prototype;
  }
  function ff(e, t) {
    var n = Array.isArray(e) ? ze(e) : G({}, e);
    return (
      t &&
        Object.keys(t).forEach(function (r) {
          var i = n[r],
            o = t[r],
            l = df(i) && df(o);
          n[r] = l ? ff(i, o || {}) : Ra(o);
        }),
      n
    );
  }
  function Oo(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.reduce(function (i, o) {
      return ff(i, o);
    }, e);
  }
  function pf(e, t) {
    return !e || !t || e.length !== t.length
      ? !1
      : e.every(function (n, r) {
          return t[r] === n;
        });
  }
  function zy(e, t) {
    if (e === t) return !0;
    if ((!e && t) || (e && !t) || !e || !t || Et(e) !== 'object' || Et(t) !== 'object') return !1;
    var n = Object.keys(e),
      r = Object.keys(t),
      i = new Set([].concat(n, r));
    return ze(i).every(function (o) {
      var l = e[o],
        s = t[o];
      return typeof l == 'function' && typeof s == 'function' ? !0 : l === s;
    });
  }
  function Ly(e) {
    var t = arguments.length <= 1 ? void 0 : arguments[1];
    return t && t.target && Et(t.target) === 'object' && e in t.target ? t.target[e] : t;
  }
  function gf(e, t, n) {
    var r = e.length;
    if (t < 0 || t >= r || n < 0 || n >= r) return e;
    var i = e[t],
      o = t - n;
    return o > 0
      ? [].concat(ze(e.slice(0, n)), [i], ze(e.slice(n, t)), ze(e.slice(t + 1, r)))
      : o < 0
      ? [].concat(ze(e.slice(0, t)), ze(e.slice(t + 1, n + 1)), [i], ze(e.slice(n + 1, r)))
      : e;
  }
  var Hy = Eo;
  function By(e, t) {
    return e.replace(/\$\{\w+\}/g, function (n) {
      var r = n.slice(2, -1);
      return t[r];
    });
  }
  var hf = 'CODE_LOGIC_ERROR';
  function Os(e, t, n, r, i) {
    return _s.apply(this, arguments);
  }
  function _s() {
    return (
      (_s = Vi(
        Un().mark(function e(t, n, r, i, o) {
          var l, s, d, f, p, h, v, x, y;
          return Un().wrap(
            function (O) {
              for (;;)
                switch ((O.prev = O.next)) {
                  case 0:
                    return (
                      (l = G({}, r)),
                      delete l.ruleIndex,
                      l.validator &&
                        ((s = l.validator),
                        (l.validator = function () {
                          try {
                            return s.apply(void 0, arguments);
                          } catch (E) {
                            return console.error(E), Promise.reject(hf);
                          }
                        })),
                      (d = null),
                      l && l.type === 'array' && l.defaultField && ((d = l.defaultField), delete l.defaultField),
                      (f = new Hy(Ie({}, t, [l]))),
                      (p = Oo({}, af, i.validateMessages)),
                      f.messages(p),
                      (h = []),
                      (O.prev = 9),
                      (O.next = 12),
                      Promise.resolve(f.validate(Ie({}, t, n), G({}, i)))
                    );
                  case 12:
                    O.next = 17;
                    break;
                  case 14:
                    (O.prev = 14),
                      (O.t0 = O.catch(9)),
                      O.t0.errors &&
                        (h = O.t0.errors.map(function (E, _) {
                          var P = E.message,
                            N = P === hf ? p.default : P;
                          return Vn(N) ? un(N, { key: 'error_'.concat(_) }) : N;
                        }));
                  case 17:
                    if (!(!h.length && d)) {
                      O.next = 22;
                      break;
                    }
                    return (
                      (O.next = 20),
                      Promise.all(
                        n.map(function (E, _) {
                          return Os(''.concat(t, '.').concat(_), E, d, i, o);
                        }),
                      )
                    );
                  case 20:
                    return (
                      (v = O.sent),
                      O.abrupt(
                        'return',
                        v.reduce(function (E, _) {
                          return [].concat(ze(E), ze(_));
                        }, []),
                      )
                    );
                  case 22:
                    return (
                      (x = G(G({}, r), {}, { name: t, enum: (r.enum || []).join(', ') }, o)),
                      (y = h.map(function (E) {
                        return typeof E == 'string' ? By(E, x) : E;
                      })),
                      O.abrupt('return', y)
                    );
                  case 25:
                  case 'end':
                    return O.stop();
                }
            },
            e,
            null,
            [[9, 14]],
          );
        }),
      )),
      _s.apply(this, arguments)
    );
  }
  function ky(e, t, n, r, i, o) {
    var l = e.join('.'),
      s = n
        .map(function (p, h) {
          var v = p.validator,
            x = G(G({}, p), {}, { ruleIndex: h });
          return (
            v &&
              (x.validator = function (y, C, O) {
                var E = !1,
                  _ = function () {
                    for (var j = arguments.length, u = new Array(j), $ = 0; $ < j; $++) u[$] = arguments[$];
                    Promise.resolve().then(function () {
                      tr(!E, 'Your validator function has already return a promise. `callback` will be ignored.'),
                        E || O.apply(void 0, u);
                    });
                  },
                  P = v(y, C, _);
                (E = P && typeof P.then == 'function' && typeof P.catch == 'function'),
                  tr(E, '`callback` is deprecated. Please return a promise instead.'),
                  E &&
                    P.then(function () {
                      O();
                    }).catch(function (N) {
                      O(N || ' ');
                    });
              }),
            x
          );
        })
        .sort(function (p, h) {
          var v = p.warningOnly,
            x = p.ruleIndex,
            y = h.warningOnly,
            C = h.ruleIndex;
          return !!v == !!y ? x - C : v ? 1 : -1;
        }),
      d;
    if (i === !0)
      d = new Promise(
        (function () {
          var p = Vi(
            Un().mark(function h(v, x) {
              var y, C, O;
              return Un().wrap(function (_) {
                for (;;)
                  switch ((_.prev = _.next)) {
                    case 0:
                      y = 0;
                    case 1:
                      if (!(y < s.length)) {
                        _.next = 12;
                        break;
                      }
                      return (C = s[y]), (_.next = 5), Os(l, t, C, r, o);
                    case 5:
                      if (((O = _.sent), !O.length)) {
                        _.next = 9;
                        break;
                      }
                      return x([{ errors: O, rule: C }]), _.abrupt('return');
                    case 9:
                      (y += 1), (_.next = 1);
                      break;
                    case 12:
                      v([]);
                    case 13:
                    case 'end':
                      return _.stop();
                  }
              }, h);
            }),
          );
          return function (h, v) {
            return p.apply(this, arguments);
          };
        })(),
      );
    else {
      var f = s.map(function (p) {
        return Os(l, t, p, r, o).then(function (h) {
          return { errors: h, rule: p };
        });
      });
      d = (i ? Wy(f) : Vy(f)).then(function (p) {
        return Promise.reject(p);
      });
    }
    return (
      d.catch(function (p) {
        return p;
      }),
      d
    );
  }
  function Vy(e) {
    return Ts.apply(this, arguments);
  }
  function Ts() {
    return (
      (Ts = Vi(
        Un().mark(function e(t) {
          return Un().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return r.abrupt(
                    'return',
                    Promise.all(t).then(function (i) {
                      var o,
                        l = (o = []).concat.apply(o, ze(i));
                      return l;
                    }),
                  );
                case 1:
                case 'end':
                  return r.stop();
              }
          }, e);
        }),
      )),
      Ts.apply(this, arguments)
    );
  }
  function Wy(e) {
    return Is.apply(this, arguments);
  }
  function Is() {
    return (
      (Is = Vi(
        Un().mark(function e(t) {
          var n;
          return Un().wrap(function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (
                    (n = 0),
                    i.abrupt(
                      'return',
                      new Promise(function (o) {
                        t.forEach(function (l) {
                          l.then(function (s) {
                            s.errors.length && o([s]), (n += 1), n === t.length && o([]);
                          });
                        });
                      }),
                    )
                  );
                case 2:
                case 'end':
                  return i.stop();
              }
          }, e);
        }),
      )),
      Is.apply(this, arguments)
    );
  }
  var Uy = ['name'],
    rr = [];
  function mf(e, t, n, r, i, o) {
    return typeof e == 'function' ? e(t, n, 'source' in o ? { source: o.source } : {}) : r !== i;
  }
  var Ps = (function (e) {
    li(n, e);
    var t = si(n);
    function n(r) {
      var i;
      if (
        (zn(this, n),
        (i = t.call(this, r)),
        (i.state = { resetCount: 0 }),
        (i.cancelRegisterFunc = null),
        (i.mounted = !1),
        (i.touched = !1),
        (i.dirty = !1),
        (i.validatePromise = null),
        (i.prevValidating = void 0),
        (i.errors = rr),
        (i.warnings = rr),
        (i.cancelRegister = function () {
          var d = i.props,
            f = d.preserve,
            p = d.isListField,
            h = d.name;
          i.cancelRegisterFunc && i.cancelRegisterFunc(p, f, an(h)), (i.cancelRegisterFunc = null);
        }),
        (i.getNamePath = function () {
          var d = i.props,
            f = d.name,
            p = d.fieldContext,
            h = p.prefixName,
            v = h === void 0 ? [] : h;
          return f !== void 0 ? [].concat(ze(v), ze(f)) : [];
        }),
        (i.getRules = function () {
          var d = i.props,
            f = d.rules,
            p = f === void 0 ? [] : f,
            h = d.fieldContext;
          return p.map(function (v) {
            return typeof v == 'function' ? v(h) : v;
          });
        }),
        (i.refresh = function () {
          i.mounted &&
            i.setState(function (d) {
              var f = d.resetCount;
              return { resetCount: f + 1 };
            });
        }),
        (i.triggerMetaEvent = function (d) {
          var f = i.props.onMetaChange;
          f == null || f(G(G({}, i.getMeta()), {}, { destroy: d }));
        }),
        (i.onStoreChange = function (d, f, p) {
          var h = i.props,
            v = h.shouldUpdate,
            x = h.dependencies,
            y = x === void 0 ? [] : x,
            C = h.onReset,
            O = p.store,
            E = i.getNamePath(),
            _ = i.getValue(d),
            P = i.getValue(O),
            N = f && $o(f, E);
          switch (
            (p.type === 'valueUpdate' &&
              p.source === 'external' &&
              _ !== P &&
              ((i.touched = !0),
              (i.dirty = !0),
              (i.validatePromise = null),
              (i.errors = rr),
              (i.warnings = rr),
              i.triggerMetaEvent()),
            p.type)
          ) {
            case 'reset':
              if (!f || N) {
                (i.touched = !1),
                  (i.dirty = !1),
                  (i.validatePromise = null),
                  (i.errors = rr),
                  (i.warnings = rr),
                  i.triggerMetaEvent(),
                  C == null || C(),
                  i.refresh();
                return;
              }
              break;
            case 'remove': {
              if (v) {
                i.reRender();
                return;
              }
              break;
            }
            case 'setField': {
              if (N) {
                var j = p.data;
                'touched' in j && (i.touched = j.touched),
                  'validating' in j &&
                    !('originRCField' in j) &&
                    (i.validatePromise = j.validating ? Promise.resolve([]) : null),
                  'errors' in j && (i.errors = j.errors || rr),
                  'warnings' in j && (i.warnings = j.warnings || rr),
                  (i.dirty = !0),
                  i.triggerMetaEvent(),
                  i.reRender();
                return;
              }
              if (v && !E.length && mf(v, d, O, _, P, p)) {
                i.reRender();
                return;
              }
              break;
            }
            case 'dependenciesUpdate': {
              var u = y.map(an);
              if (
                u.some(function ($) {
                  return $o(p.relatedFields, $);
                })
              ) {
                i.reRender();
                return;
              }
              break;
            }
            default:
              if (N || ((!y.length || E.length || v) && mf(v, d, O, _, P, p))) {
                i.reRender();
                return;
              }
              break;
          }
          v === !0 && i.reRender();
        }),
        (i.validateRules = function (d) {
          var f = i.getNamePath(),
            p = i.getValue(),
            h = Promise.resolve().then(function () {
              if (!i.mounted) return [];
              var v = i.props,
                x = v.validateFirst,
                y = x === void 0 ? !1 : x,
                C = v.messageVariables,
                O = d || {},
                E = O.triggerName,
                _ = i.getRules();
              E &&
                (_ = _.filter(function (N) {
                  return N;
                }).filter(function (N) {
                  var j = N.validateTrigger;
                  if (!j) return !0;
                  var u = ys(j);
                  return u.includes(E);
                }));
              var P = ky(f, p, _, d, y, C);
              return (
                P.catch(function (N) {
                  return N;
                }).then(function () {
                  var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : rr;
                  if (i.validatePromise === h) {
                    var j;
                    i.validatePromise = null;
                    var u = [],
                      $ = [];
                    (j = N.forEach) === null ||
                      j === void 0 ||
                      j.call(N, function (I) {
                        var M = I.rule.warningOnly,
                          D = I.errors,
                          B = D === void 0 ? rr : D;
                        M ? $.push.apply($, ze(B)) : u.push.apply(u, ze(B));
                      }),
                      (i.errors = u),
                      (i.warnings = $),
                      i.triggerMetaEvent(),
                      i.reRender();
                  }
                }),
                P
              );
            });
          return (
            (i.validatePromise = h),
            (i.dirty = !0),
            (i.errors = rr),
            (i.warnings = rr),
            i.triggerMetaEvent(),
            i.reRender(),
            h
          );
        }),
        (i.isFieldValidating = function () {
          return !!i.validatePromise;
        }),
        (i.isFieldTouched = function () {
          return i.touched;
        }),
        (i.isFieldDirty = function () {
          if (i.dirty || i.props.initialValue !== void 0) return !0;
          var d = i.props.fieldContext,
            f = d.getInternalHooks(hi),
            p = f.getInitialValue;
          return p(i.getNamePath()) !== void 0;
        }),
        (i.getErrors = function () {
          return i.errors;
        }),
        (i.getWarnings = function () {
          return i.warnings;
        }),
        (i.isListField = function () {
          return i.props.isListField;
        }),
        (i.isList = function () {
          return i.props.isList;
        }),
        (i.isPreserve = function () {
          return i.props.preserve;
        }),
        (i.getMeta = function () {
          i.prevValidating = i.isFieldValidating();
          var d = {
            touched: i.isFieldTouched(),
            validating: i.prevValidating,
            errors: i.errors,
            warnings: i.warnings,
            name: i.getNamePath(),
          };
          return d;
        }),
        (i.getOnlyChild = function (d) {
          if (typeof d == 'function') {
            var f = i.getMeta();
            return G(G({}, i.getOnlyChild(d(i.getControlled(), f, i.props.fieldContext))), {}, { isFunction: !0 });
          }
          var p = wr(d);
          return p.length !== 1 || !Vn(p[0]) ? { child: p, isFunction: !1 } : { child: p[0], isFunction: !1 };
        }),
        (i.getValue = function (d) {
          var f = i.props.fieldContext.getFieldsValue,
            p = i.getNamePath();
          return kr(d || f(!0), p);
        }),
        (i.getControlled = function () {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            f = i.props,
            p = f.trigger,
            h = f.validateTrigger,
            v = f.getValueFromEvent,
            x = f.normalize,
            y = f.valuePropName,
            C = f.getValueProps,
            O = f.fieldContext,
            E = h !== void 0 ? h : O.validateTrigger,
            _ = i.getNamePath(),
            P = O.getInternalHooks,
            N = O.getFieldsValue,
            j = P(hi),
            u = j.dispatch,
            $ = i.getValue(),
            I =
              C ||
              function (F) {
                return Ie({}, y, F);
              },
            M = d[p],
            D = G(G({}, d), I($));
          D[p] = function () {
            (i.touched = !0), (i.dirty = !0), i.triggerMetaEvent();
            for (var F, A = arguments.length, z = new Array(A), V = 0; V < A; V++) z[V] = arguments[V];
            v ? (F = v.apply(void 0, z)) : (F = Ly.apply(void 0, [y].concat(z))),
              x && (F = x(F, $, N(!0))),
              u({ type: 'updateValue', namePath: _, value: F }),
              M && M.apply(void 0, z);
          };
          var B = ys(E || []);
          return (
            B.forEach(function (F) {
              var A = D[F];
              D[F] = function () {
                A && A.apply(void 0, arguments);
                var z = i.props.rules;
                z && z.length && u({ type: 'validateField', namePath: _, triggerName: F });
              };
            }),
            D
          );
        }),
        r.fieldContext)
      ) {
        var o = r.fieldContext.getInternalHooks,
          l = o(hi),
          s = l.initEntityValue;
        s(Jo(i));
      }
      return i;
    }
    return (
      Ln(n, [
        {
          key: 'componentDidMount',
          value: function () {
            var i = this.props,
              o = i.shouldUpdate,
              l = i.fieldContext;
            if (((this.mounted = !0), l)) {
              var s = l.getInternalHooks,
                d = s(hi),
                f = d.registerField;
              this.cancelRegisterFunc = f(this);
            }
            o === !0 && this.reRender();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.cancelRegister(), this.triggerMetaEvent(!0), (this.mounted = !1);
          },
        },
        {
          key: 'reRender',
          value: function () {
            this.mounted && this.forceUpdate();
          },
        },
        {
          key: 'render',
          value: function () {
            var i = this.state.resetCount,
              o = this.props.children,
              l = this.getOnlyChild(o),
              s = l.child,
              d = l.isFunction,
              f;
            return (
              d
                ? (f = s)
                : Vn(s)
                ? (f = un(s, this.getControlled(s.props)))
                : (tr(!s, '`children` of Field is not validate ReactElement.'), (f = s)),
              b.createElement(b.Fragment, { key: i }, f)
            );
          },
        },
      ]),
      n
    );
  })(b.Component);
  (Ps.contextType = ki), (Ps.defaultProps = { trigger: 'onChange', valuePropName: 'value' });
  function vf(e) {
    var t = e.name,
      n = qt(e, Uy),
      r = je(ki),
      i = t !== void 0 ? an(t) : void 0,
      o = 'keep';
    return (
      n.isListField || (o = '_'.concat((i || []).join('_'))),
      b.createElement(Ps, rt({ key: o, name: i }, n, { fieldContext: r }))
    );
  }
  var Gy = b.createContext(null),
    qy = function (t) {
      var n = t.name,
        r = t.initialValue,
        i = t.children,
        o = t.rules,
        l = t.validateTrigger,
        s = je(ki),
        d = ie({ keys: [], id: 0 }),
        f = d.current,
        p = De(
          function () {
            var y = an(s.prefixName) || [];
            return [].concat(ze(y), ze(an(n)));
          },
          [s.prefixName, n],
        ),
        h = De(
          function () {
            return G(G({}, s), {}, { prefixName: p });
          },
          [s, p],
        ),
        v = De(
          function () {
            return {
              getKey: function (C) {
                var O = p.length,
                  E = C[O];
                return [f.keys[E], C.slice(O + 1)];
              },
            };
          },
          [p],
        );
      if (typeof i != 'function') return tr(!1, 'Form.List only accepts function as children.'), null;
      var x = function (C, O, E) {
        var _ = E.source;
        return _ === 'internal' ? !1 : C !== O;
      };
      return b.createElement(
        Gy.Provider,
        { value: v },
        b.createElement(
          ki.Provider,
          { value: h },
          b.createElement(
            vf,
            { name: [], shouldUpdate: x, rules: o, validateTrigger: l, initialValue: r, isList: !0 },
            function (y, C) {
              var O = y.value,
                E = O === void 0 ? [] : O,
                _ = y.onChange,
                P = s.getFieldValue,
                N = function () {
                  var I = P(p || []);
                  return I || [];
                },
                j = {
                  add: function (I, M) {
                    var D = N();
                    M >= 0 && M <= D.length
                      ? ((f.keys = [].concat(ze(f.keys.slice(0, M)), [f.id], ze(f.keys.slice(M)))),
                        _([].concat(ze(D.slice(0, M)), [I], ze(D.slice(M)))))
                      : ((f.keys = [].concat(ze(f.keys), [f.id])), _([].concat(ze(D), [I]))),
                      (f.id += 1);
                  },
                  remove: function (I) {
                    var M = N(),
                      D = new Set(Array.isArray(I) ? I : [I]);
                    D.size <= 0 ||
                      ((f.keys = f.keys.filter(function (B, F) {
                        return !D.has(F);
                      })),
                      _(
                        M.filter(function (B, F) {
                          return !D.has(F);
                        }),
                      ));
                  },
                  move: function (I, M) {
                    if (I !== M) {
                      var D = N();
                      I < 0 || I >= D.length || M < 0 || M >= D.length || ((f.keys = gf(f.keys, I, M)), _(gf(D, I, M)));
                    }
                  },
                },
                u = E || [];
              return (
                Array.isArray(u) || (u = []),
                i(
                  u.map(function ($, I) {
                    var M = f.keys[I];
                    return (
                      M === void 0 && ((f.keys[I] = f.id), (M = f.keys[I]), (f.id += 1)),
                      { name: I, key: M, isListField: !0 }
                    );
                  }),
                  j,
                  C,
                )
              );
            },
          ),
        ),
      );
    };
  function Ky(e) {
    var t = !1,
      n = e.length,
      r = [];
    return e.length
      ? new Promise(function (i, o) {
          e.forEach(function (l, s) {
            l.catch(function (d) {
              return (t = !0), d;
            }).then(function (d) {
              (n -= 1), (r[s] = d), !(n > 0) && (t && o(r), i(r));
            });
          });
        })
      : Promise.resolve([]);
  }
  var bf = '__@field_split__';
  function Ns(e) {
    return e
      .map(function (t) {
        return ''.concat(Et(t), ':').concat(t);
      })
      .join(bf);
  }
  var Ui = (function () {
      function e() {
        zn(this, e), (this.kvs = new Map());
      }
      return (
        Ln(e, [
          {
            key: 'set',
            value: function (n, r) {
              this.kvs.set(Ns(n), r);
            },
          },
          {
            key: 'get',
            value: function (n) {
              return this.kvs.get(Ns(n));
            },
          },
          {
            key: 'update',
            value: function (n, r) {
              var i = this.get(n),
                o = r(i);
              o ? this.set(n, o) : this.delete(n);
            },
          },
          {
            key: 'delete',
            value: function (n) {
              this.kvs.delete(Ns(n));
            },
          },
          {
            key: 'map',
            value: function (n) {
              return ze(this.kvs.entries()).map(function (r) {
                var i = ge(r, 2),
                  o = i[0],
                  l = i[1],
                  s = o.split(bf);
                return n({
                  key: s.map(function (d) {
                    var f = d.match(/^([^:]*):(.*)$/),
                      p = ge(f, 3),
                      h = p[1],
                      v = p[2];
                    return h === 'number' ? Number(v) : v;
                  }),
                  value: l,
                });
              });
            },
          },
          {
            key: 'toJSON',
            value: function () {
              var n = {};
              return (
                this.map(function (r) {
                  var i = r.key,
                    o = r.value;
                  return (n[i.join('.')] = o), null;
                }),
                n
              );
            },
          },
        ]),
        e
      );
    })(),
    Xy = ['name', 'errors'],
    Yy = Ln(function e(t) {
      var n = this;
      zn(this, e),
        (this.formHooked = !1),
        (this.forceRootUpdate = void 0),
        (this.subscribable = !0),
        (this.store = {}),
        (this.fieldEntities = []),
        (this.initialValues = {}),
        (this.callbacks = {}),
        (this.validateMessages = null),
        (this.preserve = null),
        (this.lastValidatePromise = null),
        (this.getForm = function () {
          return {
            getFieldValue: n.getFieldValue,
            getFieldsValue: n.getFieldsValue,
            getFieldError: n.getFieldError,
            getFieldWarning: n.getFieldWarning,
            getFieldsError: n.getFieldsError,
            isFieldsTouched: n.isFieldsTouched,
            isFieldTouched: n.isFieldTouched,
            isFieldValidating: n.isFieldValidating,
            isFieldsValidating: n.isFieldsValidating,
            resetFields: n.resetFields,
            setFields: n.setFields,
            setFieldValue: n.setFieldValue,
            setFieldsValue: n.setFieldsValue,
            validateFields: n.validateFields,
            submit: n.submit,
            _init: !0,
            getInternalHooks: n.getInternalHooks,
          };
        }),
        (this.getInternalHooks = function (r) {
          return r === hi
            ? ((n.formHooked = !0),
              {
                dispatch: n.dispatch,
                initEntityValue: n.initEntityValue,
                registerField: n.registerField,
                useSubscribe: n.useSubscribe,
                setInitialValues: n.setInitialValues,
                destroyForm: n.destroyForm,
                setCallbacks: n.setCallbacks,
                setValidateMessages: n.setValidateMessages,
                getFields: n.getFields,
                setPreserve: n.setPreserve,
                getInitialValue: n.getInitialValue,
                registerWatch: n.registerWatch,
              })
            : (tr(!1, '`getInternalHooks` is internal usage. Should not call directly.'), null);
        }),
        (this.useSubscribe = function (r) {
          n.subscribable = r;
        }),
        (this.prevWithoutPreserves = null),
        (this.setInitialValues = function (r, i) {
          if (((n.initialValues = r || {}), i)) {
            var o,
              l = Oo({}, r, n.store);
            (o = n.prevWithoutPreserves) === null ||
              o === void 0 ||
              o.map(function (s) {
                var d = s.key;
                l = Vr(l, d, kr(r, d));
              }),
              (n.prevWithoutPreserves = null),
              n.updateStore(l);
          }
        }),
        (this.destroyForm = function () {
          var r = new Ui();
          n.getFieldEntities(!0).forEach(function (i) {
            n.isMergedPreserve(i.isPreserve()) || r.set(i.getNamePath(), !0);
          }),
            (n.prevWithoutPreserves = r);
        }),
        (this.getInitialValue = function (r) {
          var i = kr(n.initialValues, r);
          return r.length ? Ra(i) : i;
        }),
        (this.setCallbacks = function (r) {
          n.callbacks = r;
        }),
        (this.setValidateMessages = function (r) {
          n.validateMessages = r;
        }),
        (this.setPreserve = function (r) {
          n.preserve = r;
        }),
        (this.watchList = []),
        (this.registerWatch = function (r) {
          return (
            n.watchList.push(r),
            function () {
              n.watchList = n.watchList.filter(function (i) {
                return i !== r;
              });
            }
          );
        }),
        (this.notifyWatch = function () {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          if (n.watchList.length) {
            var i = n.getFieldsValue();
            n.watchList.forEach(function (o) {
              o(i, r);
            });
          }
        }),
        (this.timeoutId = null),
        (this.warningUnhooked = function () {}),
        (this.updateStore = function (r) {
          n.store = r;
        }),
        (this.getFieldEntities = function () {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return r
            ? n.fieldEntities.filter(function (i) {
                return i.getNamePath().length;
              })
            : n.fieldEntities;
        }),
        (this.getFieldsMap = function () {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
            i = new Ui();
          return (
            n.getFieldEntities(r).forEach(function (o) {
              var l = o.getNamePath();
              i.set(l, o);
            }),
            i
          );
        }),
        (this.getFieldEntitiesForNamePathList = function (r) {
          if (!r) return n.getFieldEntities(!0);
          var i = n.getFieldsMap(!0);
          return r.map(function (o) {
            var l = an(o);
            return i.get(l) || { INVALIDATE_NAME_PATH: an(o) };
          });
        }),
        (this.getFieldsValue = function (r, i) {
          if ((n.warningUnhooked(), r === !0 && !i)) return n.store;
          var o = n.getFieldEntitiesForNamePathList(Array.isArray(r) ? r : null),
            l = [];
          return (
            o.forEach(function (s) {
              var d,
                f = 'INVALIDATE_NAME_PATH' in s ? s.INVALIDATE_NAME_PATH : s.getNamePath();
              if (!(!r && !((d = s.isListField) === null || d === void 0) && d.call(s)))
                if (!i) l.push(f);
                else {
                  var p = 'getMeta' in s ? s.getMeta() : null;
                  i(p) && l.push(f);
                }
            }),
            uf(n.store, l.map(an))
          );
        }),
        (this.getFieldValue = function (r) {
          n.warningUnhooked();
          var i = an(r);
          return kr(n.store, i);
        }),
        (this.getFieldsError = function (r) {
          n.warningUnhooked();
          var i = n.getFieldEntitiesForNamePathList(r);
          return i.map(function (o, l) {
            return o && !('INVALIDATE_NAME_PATH' in o)
              ? { name: o.getNamePath(), errors: o.getErrors(), warnings: o.getWarnings() }
              : { name: an(r[l]), errors: [], warnings: [] };
          });
        }),
        (this.getFieldError = function (r) {
          n.warningUnhooked();
          var i = an(r),
            o = n.getFieldsError([i])[0];
          return o.errors;
        }),
        (this.getFieldWarning = function (r) {
          n.warningUnhooked();
          var i = an(r),
            o = n.getFieldsError([i])[0];
          return o.warnings;
        }),
        (this.isFieldsTouched = function () {
          n.warningUnhooked();
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
          var l = i[0],
            s = i[1],
            d,
            f = !1;
          i.length === 0
            ? (d = null)
            : i.length === 1
            ? Array.isArray(l)
              ? ((d = l.map(an)), (f = !1))
              : ((d = null), (f = l))
            : ((d = l.map(an)), (f = s));
          var p = n.getFieldEntities(!0),
            h = function (O) {
              return O.isFieldTouched();
            };
          if (!d) return f ? p.every(h) : p.some(h);
          var v = new Ui();
          d.forEach(function (C) {
            v.set(C, []);
          }),
            p.forEach(function (C) {
              var O = C.getNamePath();
              d.forEach(function (E) {
                E.every(function (_, P) {
                  return O[P] === _;
                }) &&
                  v.update(E, function (_) {
                    return [].concat(ze(_), [C]);
                  });
              });
            });
          var x = function (O) {
              return O.some(h);
            },
            y = v.map(function (C) {
              var O = C.value;
              return O;
            });
          return f ? y.every(x) : y.some(x);
        }),
        (this.isFieldTouched = function (r) {
          return n.warningUnhooked(), n.isFieldsTouched([r]);
        }),
        (this.isFieldsValidating = function (r) {
          n.warningUnhooked();
          var i = n.getFieldEntities();
          if (!r)
            return i.some(function (l) {
              return l.isFieldValidating();
            });
          var o = r.map(an);
          return i.some(function (l) {
            var s = l.getNamePath();
            return $o(o, s) && l.isFieldValidating();
          });
        }),
        (this.isFieldValidating = function (r) {
          return n.warningUnhooked(), n.isFieldsValidating([r]);
        }),
        (this.resetWithFieldInitialValue = function () {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            i = new Ui(),
            o = n.getFieldEntities(!0);
          o.forEach(function (d) {
            var f = d.props.initialValue,
              p = d.getNamePath();
            if (f !== void 0) {
              var h = i.get(p) || new Set();
              h.add({ entity: d, value: f }), i.set(p, h);
            }
          });
          var l = function (f) {
              f.forEach(function (p) {
                var h = p.props.initialValue;
                if (h !== void 0) {
                  var v = p.getNamePath(),
                    x = n.getInitialValue(v);
                  if (x !== void 0)
                    tr(
                      !1,
                      "Form already set 'initialValues' with path '".concat(
                        v.join('.'),
                        "'. Field can not overwrite it.",
                      ),
                    );
                  else {
                    var y = i.get(v);
                    if (y && y.size > 1)
                      tr(
                        !1,
                        "Multiple Field with path '".concat(
                          v.join('.'),
                          "' set 'initialValue'. Can not decide which one to pick.",
                        ),
                      );
                    else if (y) {
                      var C = n.getFieldValue(v);
                      (!r.skipExist || C === void 0) && n.updateStore(Vr(n.store, v, ze(y)[0].value));
                    }
                  }
                }
              });
            },
            s;
          r.entities
            ? (s = r.entities)
            : r.namePathList
            ? ((s = []),
              r.namePathList.forEach(function (d) {
                var f = i.get(d);
                if (f) {
                  var p;
                  (p = s).push.apply(
                    p,
                    ze(
                      ze(f).map(function (h) {
                        return h.entity;
                      }),
                    ),
                  );
                }
              }))
            : (s = o),
            l(s);
        }),
        (this.resetFields = function (r) {
          n.warningUnhooked();
          var i = n.store;
          if (!r) {
            n.updateStore(Oo({}, n.initialValues)),
              n.resetWithFieldInitialValue(),
              n.notifyObservers(i, null, { type: 'reset' }),
              n.notifyWatch();
            return;
          }
          var o = r.map(an);
          o.forEach(function (l) {
            var s = n.getInitialValue(l);
            n.updateStore(Vr(n.store, l, s));
          }),
            n.resetWithFieldInitialValue({ namePathList: o }),
            n.notifyObservers(i, o, { type: 'reset' }),
            n.notifyWatch(o);
        }),
        (this.setFields = function (r) {
          n.warningUnhooked();
          var i = n.store,
            o = [];
          r.forEach(function (l) {
            var s = l.name;
            l.errors;
            var d = qt(l, Xy),
              f = an(s);
            o.push(f),
              'value' in d && n.updateStore(Vr(n.store, f, d.value)),
              n.notifyObservers(i, [f], { type: 'setField', data: l });
          }),
            n.notifyWatch(o);
        }),
        (this.getFields = function () {
          var r = n.getFieldEntities(!0),
            i = r.map(function (o) {
              var l = o.getNamePath(),
                s = o.getMeta(),
                d = G(G({}, s), {}, { name: l, value: n.getFieldValue(l) });
              return Object.defineProperty(d, 'originRCField', { value: !0 }), d;
            });
          return i;
        }),
        (this.initEntityValue = function (r) {
          var i = r.props.initialValue;
          if (i !== void 0) {
            var o = r.getNamePath(),
              l = kr(n.store, o);
            l === void 0 && n.updateStore(Vr(n.store, o, i));
          }
        }),
        (this.isMergedPreserve = function (r) {
          var i = r !== void 0 ? r : n.preserve;
          return i ?? !0;
        }),
        (this.registerField = function (r) {
          n.fieldEntities.push(r);
          var i = r.getNamePath();
          if ((n.notifyWatch([i]), r.props.initialValue !== void 0)) {
            var o = n.store;
            n.resetWithFieldInitialValue({ entities: [r], skipExist: !0 }),
              n.notifyObservers(o, [r.getNamePath()], { type: 'valueUpdate', source: 'internal' });
          }
          return function (l, s) {
            var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
            if (
              ((n.fieldEntities = n.fieldEntities.filter(function (h) {
                return h !== r;
              })),
              !n.isMergedPreserve(s) && (!l || d.length > 1))
            ) {
              var f = l ? void 0 : n.getInitialValue(i);
              if (
                i.length &&
                n.getFieldValue(i) !== f &&
                n.fieldEntities.every(function (h) {
                  return !pf(h.getNamePath(), i);
                })
              ) {
                var p = n.store;
                n.updateStore(Vr(p, i, f, !0)),
                  n.notifyObservers(p, [i], { type: 'remove' }),
                  n.triggerDependenciesUpdate(p, i);
              }
            }
            n.notifyWatch([i]);
          };
        }),
        (this.dispatch = function (r) {
          switch (r.type) {
            case 'updateValue': {
              var i = r.namePath,
                o = r.value;
              n.updateValue(i, o);
              break;
            }
            case 'validateField': {
              var l = r.namePath,
                s = r.triggerName;
              n.validateFields([l], { triggerName: s });
              break;
            }
          }
        }),
        (this.notifyObservers = function (r, i, o) {
          if (n.subscribable) {
            var l = G(G({}, o), {}, { store: n.getFieldsValue(!0) });
            n.getFieldEntities().forEach(function (s) {
              var d = s.onStoreChange;
              d(r, i, l);
            });
          } else n.forceRootUpdate();
        }),
        (this.triggerDependenciesUpdate = function (r, i) {
          var o = n.getDependencyChildrenFields(i);
          return (
            o.length && n.validateFields(o),
            n.notifyObservers(r, o, { type: 'dependenciesUpdate', relatedFields: [i].concat(ze(o)) }),
            o
          );
        }),
        (this.updateValue = function (r, i) {
          var o = an(r),
            l = n.store;
          n.updateStore(Vr(n.store, o, i)),
            n.notifyObservers(l, [o], { type: 'valueUpdate', source: 'internal' }),
            n.notifyWatch([o]);
          var s = n.triggerDependenciesUpdate(l, o),
            d = n.callbacks.onValuesChange;
          if (d) {
            var f = uf(n.store, [o]);
            d(f, n.getFieldsValue());
          }
          n.triggerOnFieldsChange([o].concat(ze(s)));
        }),
        (this.setFieldsValue = function (r) {
          n.warningUnhooked();
          var i = n.store;
          if (r) {
            var o = Oo(n.store, r);
            n.updateStore(o);
          }
          n.notifyObservers(i, null, { type: 'valueUpdate', source: 'external' }), n.notifyWatch();
        }),
        (this.setFieldValue = function (r, i) {
          n.setFields([{ name: r, value: i }]);
        }),
        (this.getDependencyChildrenFields = function (r) {
          var i = new Set(),
            o = [],
            l = new Ui();
          n.getFieldEntities().forEach(function (d) {
            var f = d.props.dependencies;
            (f || []).forEach(function (p) {
              var h = an(p);
              l.update(h, function () {
                var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Set();
                return v.add(d), v;
              });
            });
          });
          var s = function d(f) {
            var p = l.get(f) || new Set();
            p.forEach(function (h) {
              if (!i.has(h)) {
                i.add(h);
                var v = h.getNamePath();
                h.isFieldDirty() && v.length && (o.push(v), d(v));
              }
            });
          };
          return s(r), o;
        }),
        (this.triggerOnFieldsChange = function (r, i) {
          var o = n.callbacks.onFieldsChange;
          if (o) {
            var l = n.getFields();
            if (i) {
              var s = new Ui();
              i.forEach(function (f) {
                var p = f.name,
                  h = f.errors;
                s.set(p, h);
              }),
                l.forEach(function (f) {
                  f.errors = s.get(f.name) || f.errors;
                });
            }
            var d = l.filter(function (f) {
              var p = f.name;
              return $o(r, p);
            });
            o(d, l);
          }
        }),
        (this.validateFields = function (r, i) {
          n.warningUnhooked();
          var o = !!r,
            l = o ? r.map(an) : [],
            s = [];
          n.getFieldEntities(!0).forEach(function (p) {
            if ((o || l.push(p.getNamePath()), i != null && i.recursive && o)) {
              var h = p.getNamePath();
              h.every(function (y, C) {
                return r[C] === y || r[C] === void 0;
              }) && l.push(h);
            }
            if (!(!p.props.rules || !p.props.rules.length)) {
              var v = p.getNamePath();
              if (!o || $o(l, v)) {
                var x = p.validateRules(G({ validateMessages: G(G({}, af), n.validateMessages) }, i));
                s.push(
                  x
                    .then(function () {
                      return { name: v, errors: [], warnings: [] };
                    })
                    .catch(function (y) {
                      var C,
                        O = [],
                        E = [];
                      return (
                        (C = y.forEach) === null ||
                          C === void 0 ||
                          C.call(y, function (_) {
                            var P = _.rule.warningOnly,
                              N = _.errors;
                            P ? E.push.apply(E, ze(N)) : O.push.apply(O, ze(N));
                          }),
                        O.length
                          ? Promise.reject({ name: v, errors: O, warnings: E })
                          : { name: v, errors: O, warnings: E }
                      );
                    }),
                );
              }
            }
          });
          var d = Ky(s);
          (n.lastValidatePromise = d),
            d
              .catch(function (p) {
                return p;
              })
              .then(function (p) {
                var h = p.map(function (v) {
                  var x = v.name;
                  return x;
                });
                n.notifyObservers(n.store, h, { type: 'validateFinish' }), n.triggerOnFieldsChange(h, p);
              });
          var f = d
            .then(function () {
              return n.lastValidatePromise === d ? Promise.resolve(n.getFieldsValue(l)) : Promise.reject([]);
            })
            .catch(function (p) {
              var h = p.filter(function (v) {
                return v && v.errors.length;
              });
              return Promise.reject({
                values: n.getFieldsValue(l),
                errorFields: h,
                outOfDate: n.lastValidatePromise !== d,
              });
            });
          return (
            f.catch(function (p) {
              return p;
            }),
            f
          );
        }),
        (this.submit = function () {
          n.warningUnhooked(),
            n
              .validateFields()
              .then(function (r) {
                var i = n.callbacks.onFinish;
                if (i)
                  try {
                    i(r);
                  } catch (o) {
                    console.error(o);
                  }
              })
              .catch(function (r) {
                var i = n.callbacks.onFinishFailed;
                i && i(r);
              });
        }),
        (this.forceRootUpdate = t);
    });
  function yf(e) {
    var t = ie(),
      n = we({}),
      r = ge(n, 2),
      i = r[1];
    if (!t.current)
      if (e) t.current = e;
      else {
        var o = function () {
            i({});
          },
          l = new Yy(o);
        t.current = l.getForm();
      }
    return [t.current];
  }
  var Rs = b.createContext({
      triggerFormChange: function () {},
      triggerFormFinish: function () {},
      registerForm: function () {},
      unregisterForm: function () {},
    }),
    Cf = function (t) {
      var n = t.validateMessages,
        r = t.onFormChange,
        i = t.onFormFinish,
        o = t.children,
        l = je(Rs),
        s = ie({});
      return b.createElement(
        Rs.Provider,
        {
          value: G(
            G({}, l),
            {},
            {
              validateMessages: G(G({}, l.validateMessages), n),
              triggerFormChange: function (f, p) {
                r && r(f, { changedFields: p, forms: s.current }), l.triggerFormChange(f, p);
              },
              triggerFormFinish: function (f, p) {
                i && i(f, { values: p, forms: s.current }), l.triggerFormFinish(f, p);
              },
              registerForm: function (f, p) {
                f && (s.current = G(G({}, s.current), {}, Ie({}, f, p))), l.registerForm(f, p);
              },
              unregisterForm: function (f) {
                var p = G({}, s.current);
                delete p[f], (s.current = p), l.unregisterForm(f);
              },
            },
          ),
        },
        o,
      );
    },
    Qy = [
      'name',
      'initialValues',
      'fields',
      'form',
      'preserve',
      'children',
      'component',
      'validateMessages',
      'validateTrigger',
      'onValuesChange',
      'onFieldsChange',
      'onFinish',
      'onFinishFailed',
    ],
    Jy = function (t, n) {
      var r = t.name,
        i = t.initialValues,
        o = t.fields,
        l = t.form,
        s = t.preserve,
        d = t.children,
        f = t.component,
        p = f === void 0 ? 'form' : f,
        h = t.validateMessages,
        v = t.validateTrigger,
        x = v === void 0 ? 'onChange' : v,
        y = t.onValuesChange,
        C = t.onFieldsChange,
        O = t.onFinish,
        E = t.onFinishFailed,
        _ = qt(t, Qy),
        P = je(Rs),
        N = yf(l),
        j = ge(N, 1),
        u = j[0],
        $ = u.getInternalHooks(hi),
        I = $.useSubscribe,
        M = $.setInitialValues,
        D = $.setCallbacks,
        B = $.setValidateMessages,
        F = $.setPreserve,
        A = $.destroyForm;
      on(n, function () {
        return u;
      }),
        Fe(
          function () {
            return (
              P.registerForm(r, u),
              function () {
                P.unregisterForm(r);
              }
            );
          },
          [P, u, r],
        ),
        B(G(G({}, P.validateMessages), h)),
        D({
          onValuesChange: y,
          onFieldsChange: function (xe) {
            if ((P.triggerFormChange(r, xe), C)) {
              for (var Q = arguments.length, Ce = new Array(Q > 1 ? Q - 1 : 0), Se = 1; Se < Q; Se++)
                Ce[Se - 1] = arguments[Se];
              C.apply(void 0, [xe].concat(Ce));
            }
          },
          onFinish: function (xe) {
            P.triggerFormFinish(r, xe), O && O(xe);
          },
          onFinishFailed: E,
        }),
        F(s);
      var z = ie(null);
      M(i, !z.current),
        z.current || (z.current = !0),
        Fe(function () {
          return A;
        }, []);
      var V,
        U = typeof d == 'function';
      if (U) {
        var X = u.getFieldsValue(!0);
        V = d(X, u);
      } else V = d;
      I(!U);
      var Z = ie();
      Fe(
        function () {
          zy(Z.current || [], o || []) || u.setFields(o || []), (Z.current = o);
        },
        [o, u],
      );
      var ee = De(
          function () {
            return G(G({}, u), {}, { validateTrigger: x });
          },
          [u, x],
        ),
        le = b.createElement(ki.Provider, { value: ee }, V);
      return p === !1
        ? le
        : b.createElement(
            p,
            rt({}, _, {
              onSubmit: function (xe) {
                xe.preventDefault(), xe.stopPropagation(), u.submit();
              },
              onReset: function (xe) {
                var Q;
                xe.preventDefault(), u.resetFields(), (Q = _.onReset) === null || Q === void 0 || Q.call(_, xe);
              },
            }),
            le,
          );
    };
  function Sf(e) {
    try {
      return JSON.stringify(e);
    } catch {
      return Math.random();
    }
  }
  function Zy() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var r = t[0],
      i = r === void 0 ? [] : r,
      o = t[1],
      l = we(),
      s = ge(l, 2),
      d = s[0],
      f = s[1],
      p = De(
        function () {
          return Sf(d);
        },
        [d],
      ),
      h = ie(p);
    h.current = p;
    var v = je(ki),
      x = o || v,
      y = x && x._init,
      C = an(i),
      O = ie(C);
    return (
      (O.current = C),
      Fe(
        function () {
          if (y) {
            var E = x.getFieldsValue,
              _ = x.getInternalHooks,
              P = _(hi),
              N = P.registerWatch,
              j = N(function ($) {
                var I = kr($, O.current),
                  M = Sf(I);
                h.current !== M && ((h.current = M), f(I));
              }),
              u = kr(E(), O.current);
            return f(u), j;
          }
        },
        [y],
      ),
      d
    );
  }
  var eC = We(Jy),
    _o = eC;
  (_o.FormProvider = Cf), (_o.Field = vf), (_o.List = qy), (_o.useForm = yf), (_o.useWatch = Zy);
  const xf = {
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: 'Page',
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
    page_size: 'Page Size',
  };
  var tC = {
    locale: 'en_US',
    today: 'Today',
    now: 'Now',
    backToToday: 'Back to today',
    ok: 'OK',
    clear: 'Clear',
    month: 'Month',
    year: 'Year',
    timeSelect: 'select time',
    dateSelect: 'select date',
    weekSelect: 'Choose a week',
    monthSelect: 'Choose a month',
    yearSelect: 'Choose a year',
    decadeSelect: 'Choose a decade',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: !0,
    previousMonth: 'Previous month (PageUp)',
    nextMonth: 'Next month (PageDown)',
    previousYear: 'Last year (Control + left)',
    nextYear: 'Next year (Control + right)',
    previousDecade: 'Last decade',
    nextDecade: 'Next decade',
    previousCentury: 'Last century',
    nextCentury: 'Next century',
  };
  const wf = { placeholder: 'Select time', rangePlaceholder: ['Start time', 'End time'] },
    Ef = {
      lang: Object.assign(
        {
          placeholder: 'Select date',
          yearPlaceholder: 'Select year',
          quarterPlaceholder: 'Select quarter',
          monthPlaceholder: 'Select month',
          weekPlaceholder: 'Select week',
          rangePlaceholder: ['Start date', 'End date'],
          rangeYearPlaceholder: ['Start year', 'End year'],
          rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
          rangeMonthPlaceholder: ['Start month', 'End month'],
          rangeWeekPlaceholder: ['Start week', 'End week'],
        },
        tC,
      ),
      timePickerLocale: Object.assign({}, wf),
    },
    Kn = '${label} is not a valid ${type}',
    Gi = {
      locale: 'en',
      Pagination: xf,
      DatePicker: Ef,
      TimePicker: wf,
      Calendar: Ef,
      global: { placeholder: 'Please select' },
      Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        filterEmptyText: 'No filters',
        filterCheckall: 'Select all items',
        filterSearchPlaceholder: 'Search in filters',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page',
        selectNone: 'Clear all data',
        selectionAll: 'Select all data',
        sortTitle: 'Sort',
        expand: 'Expand row',
        collapse: 'Collapse row',
        triggerDesc: 'Click to sort descending',
        triggerAsc: 'Click to sort ascending',
        cancelSort: 'Click to cancel sorting',
      },
      Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
      Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
      Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
      Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items',
        remove: 'Remove',
        selectCurrent: 'Select current page',
        removeCurrent: 'Remove current page',
        selectAll: 'Select all data',
        removeAll: 'Remove all data',
        selectInvert: 'Invert current page',
      },
      Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file',
        downloadFile: 'Download file',
      },
      Empty: { description: 'No data' },
      Icon: { icon: 'icon' },
      Text: { edit: 'Edit', copy: 'Copy', copied: 'Copied', expand: 'Expand' },
      PageHeader: { back: 'Back' },
      Form: {
        optional: '(optional)',
        defaultValidateMessages: {
          default: 'Field validation error for ${label}',
          required: 'Please enter ${label}',
          enum: '${label} must be one of [${enum}]',
          whitespace: '${label} cannot be a blank character',
          date: {
            format: '${label} date format is invalid',
            parse: '${label} cannot be converted to a date',
            invalid: '${label} is an invalid date',
          },
          types: {
            string: Kn,
            method: Kn,
            array: Kn,
            object: Kn,
            number: Kn,
            date: Kn,
            boolean: Kn,
            integer: Kn,
            float: Kn,
            regexp: Kn,
            email: Kn,
            url: Kn,
            hex: Kn,
          },
          string: {
            len: '${label} must be ${len} characters',
            min: '${label} must be at least ${min} characters',
            max: '${label} must be up to ${max} characters',
            range: '${label} must be between ${min}-${max} characters',
          },
          number: {
            len: '${label} must be equal to ${len}',
            min: '${label} must be minimum ${min}',
            max: '${label} must be maximum ${max}',
            range: '${label} must be between ${min}-${max}',
          },
          array: {
            len: 'Must be ${len} ${label}',
            min: 'At least ${min} ${label}',
            max: 'At most ${max} ${label}',
            range: 'The amount of ${label} must be between ${min}-${max}',
          },
          pattern: { mismatch: '${label} does not match the pattern ${pattern}' },
        },
      },
      Image: { preview: 'Preview' },
      QRCode: { expired: 'QR code expired', refresh: 'Refresh' },
    };
  let Ma = Object.assign({}, Gi.Modal);
  function $f(e) {
    e ? (Ma = Object.assign(Object.assign({}, Ma), e)) : (Ma = Object.assign({}, Gi.Modal));
  }
  function Of() {
    return Ma;
  }
  const Ms = b.createContext(void 0),
    nC = 'internalMark',
    rC = (e) => {
      const { locale: t = {}, children: n, _ANT_MARK__: r } = e;
      Fe(
        () => (
          $f(t && t.Modal),
          () => {
            $f();
          }
        ),
        [t],
      );
      const i = De(() => Object.assign(Object.assign({}, t), { exist: !0 }), [t]);
      return b.createElement(Ms.Provider, { value: i }, n);
    },
    iC = '5.3.0',
    Aa = [
      'blue',
      'purple',
      'cyan',
      'green',
      'magenta',
      'pink',
      'red',
      'orange',
      'yellow',
      'volcano',
      'geekblue',
      'lime',
      'gold',
    ];
  function $n(e, t) {
    oC(e) && (e = '100%');
    var n = aC(e);
    return (
      (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
      n && (e = parseInt(String(e * t), 10) / 100),
      Math.abs(e - t) < 1e-6
        ? 1
        : (t === 360
            ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
            : (e = (e % t) / parseFloat(String(t))),
          e)
    );
  }
  function Da(e) {
    return Math.min(1, Math.max(0, e));
  }
  function oC(e) {
    return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
  }
  function aC(e) {
    return typeof e == 'string' && e.indexOf('%') !== -1;
  }
  function _f(e) {
    return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
  }
  function Fa(e) {
    return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
  }
  function vi(e) {
    return e.length === 1 ? '0' + e : String(e);
  }
  function lC(e, t, n) {
    return { r: $n(e, 255) * 255, g: $n(t, 255) * 255, b: $n(n, 255) * 255 };
  }
  function Tf(e, t, n) {
    (e = $n(e, 255)), (t = $n(t, 255)), (n = $n(n, 255));
    var r = Math.max(e, t, n),
      i = Math.min(e, t, n),
      o = 0,
      l = 0,
      s = (r + i) / 2;
    if (r === i) (l = 0), (o = 0);
    else {
      var d = r - i;
      switch (((l = s > 0.5 ? d / (2 - r - i) : d / (r + i)), r)) {
        case e:
          o = (t - n) / d + (t < n ? 6 : 0);
          break;
        case t:
          o = (n - e) / d + 2;
          break;
        case n:
          o = (e - t) / d + 4;
          break;
      }
      o /= 6;
    }
    return { h: o, s: l, l: s };
  }
  function As(e, t, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 0.16666666666666666
        ? e + (t - e) * (6 * n)
        : n < 0.5
        ? t
        : n < 0.6666666666666666
        ? e + (t - e) * (0.6666666666666666 - n) * 6
        : e
    );
  }
  function sC(e, t, n) {
    var r, i, o;
    if (((e = $n(e, 360)), (t = $n(t, 100)), (n = $n(n, 100)), t === 0)) (i = n), (o = n), (r = n);
    else {
      var l = n < 0.5 ? n * (1 + t) : n + t - n * t,
        s = 2 * n - l;
      (r = As(s, l, e + 0.3333333333333333)), (i = As(s, l, e)), (o = As(s, l, e - 0.3333333333333333));
    }
    return { r: r * 255, g: i * 255, b: o * 255 };
  }
  function Ds(e, t, n) {
    (e = $n(e, 255)), (t = $n(t, 255)), (n = $n(n, 255));
    var r = Math.max(e, t, n),
      i = Math.min(e, t, n),
      o = 0,
      l = r,
      s = r - i,
      d = r === 0 ? 0 : s / r;
    if (r === i) o = 0;
    else {
      switch (r) {
        case e:
          o = (t - n) / s + (t < n ? 6 : 0);
          break;
        case t:
          o = (n - e) / s + 2;
          break;
        case n:
          o = (e - t) / s + 4;
          break;
      }
      o /= 6;
    }
    return { h: o, s: d, v: l };
  }
  function cC(e, t, n) {
    (e = $n(e, 360) * 6), (t = $n(t, 100)), (n = $n(n, 100));
    var r = Math.floor(e),
      i = e - r,
      o = n * (1 - t),
      l = n * (1 - i * t),
      s = n * (1 - (1 - i) * t),
      d = r % 6,
      f = [n, l, o, o, s, n][d],
      p = [s, n, n, l, o, o][d],
      h = [o, o, s, n, n, l][d];
    return { r: f * 255, g: p * 255, b: h * 255 };
  }
  function Fs(e, t, n, r) {
    var i = [vi(Math.round(e).toString(16)), vi(Math.round(t).toString(16)), vi(Math.round(n).toString(16))];
    return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1))
      ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
      : i.join('');
  }
  function uC(e, t, n, r, i) {
    var o = [vi(Math.round(e).toString(16)), vi(Math.round(t).toString(16)), vi(Math.round(n).toString(16)), vi(dC(r))];
    return i &&
      o[0].startsWith(o[0].charAt(1)) &&
      o[1].startsWith(o[1].charAt(1)) &&
      o[2].startsWith(o[2].charAt(1)) &&
      o[3].startsWith(o[3].charAt(1))
      ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
      : o.join('');
  }
  function dC(e) {
    return Math.round(parseFloat(e) * 255).toString(16);
  }
  function If(e) {
    return Xn(e) / 255;
  }
  function Xn(e) {
    return parseInt(e, 16);
  }
  function fC(e) {
    return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
  }
  var js = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
  };
  function qi(e) {
    var t = { r: 0, g: 0, b: 0 },
      n = 1,
      r = null,
      i = null,
      o = null,
      l = !1,
      s = !1;
    return (
      typeof e == 'string' && (e = hC(e)),
      typeof e == 'object' &&
        (Er(e.r) && Er(e.g) && Er(e.b)
          ? ((t = lC(e.r, e.g, e.b)), (l = !0), (s = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
          : Er(e.h) && Er(e.s) && Er(e.v)
          ? ((r = Fa(e.s)), (i = Fa(e.v)), (t = cC(e.h, r, i)), (l = !0), (s = 'hsv'))
          : Er(e.h) && Er(e.s) && Er(e.l) && ((r = Fa(e.s)), (o = Fa(e.l)), (t = sC(e.h, r, o)), (l = !0), (s = 'hsl')),
        Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
      (n = _f(n)),
      {
        ok: l,
        format: e.format || s,
        r: Math.min(255, Math.max(t.r, 0)),
        g: Math.min(255, Math.max(t.g, 0)),
        b: Math.min(255, Math.max(t.b, 0)),
        a: n,
      }
    );
  }
  var pC = '[-\\+]?\\d+%?',
    gC = '[-\\+]?\\d*\\.\\d+%?',
    Wr = '(?:'.concat(gC, ')|(?:').concat(pC, ')'),
    zs = '[\\s|\\(]+('.concat(Wr, ')[,|\\s]+(').concat(Wr, ')[,|\\s]+(').concat(Wr, ')\\s*\\)?'),
    Ls = '[\\s|\\(]+('
      .concat(Wr, ')[,|\\s]+(')
      .concat(Wr, ')[,|\\s]+(')
      .concat(Wr, ')[,|\\s]+(')
      .concat(Wr, ')\\s*\\)?'),
    pr = {
      CSS_UNIT: new RegExp(Wr),
      rgb: new RegExp('rgb' + zs),
      rgba: new RegExp('rgba' + Ls),
      hsl: new RegExp('hsl' + zs),
      hsla: new RegExp('hsla' + Ls),
      hsv: new RegExp('hsv' + zs),
      hsva: new RegExp('hsva' + Ls),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    };
  function hC(e) {
    if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
    var t = !1;
    if (js[e]) (e = js[e]), (t = !0);
    else if (e === 'transparent') return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    var n = pr.rgb.exec(e);
    return n
      ? { r: n[1], g: n[2], b: n[3] }
      : ((n = pr.rgba.exec(e)),
        n
          ? { r: n[1], g: n[2], b: n[3], a: n[4] }
          : ((n = pr.hsl.exec(e)),
            n
              ? { h: n[1], s: n[2], l: n[3] }
              : ((n = pr.hsla.exec(e)),
                n
                  ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                  : ((n = pr.hsv.exec(e)),
                    n
                      ? { h: n[1], s: n[2], v: n[3] }
                      : ((n = pr.hsva.exec(e)),
                        n
                          ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                          : ((n = pr.hex8.exec(e)),
                            n
                              ? { r: Xn(n[1]), g: Xn(n[2]), b: Xn(n[3]), a: If(n[4]), format: t ? 'name' : 'hex8' }
                              : ((n = pr.hex6.exec(e)),
                                n
                                  ? { r: Xn(n[1]), g: Xn(n[2]), b: Xn(n[3]), format: t ? 'name' : 'hex' }
                                  : ((n = pr.hex4.exec(e)),
                                    n
                                      ? {
                                          r: Xn(n[1] + n[1]),
                                          g: Xn(n[2] + n[2]),
                                          b: Xn(n[3] + n[3]),
                                          a: If(n[4] + n[4]),
                                          format: t ? 'name' : 'hex8',
                                        }
                                      : ((n = pr.hex3.exec(e)),
                                        n
                                          ? {
                                              r: Xn(n[1] + n[1]),
                                              g: Xn(n[2] + n[2]),
                                              b: Xn(n[3] + n[3]),
                                              format: t ? 'name' : 'hex',
                                            }
                                          : !1)))))))));
  }
  function Er(e) {
    return Boolean(pr.CSS_UNIT.exec(String(e)));
  }
  var mn = (function () {
      function e(t, n) {
        t === void 0 && (t = ''), n === void 0 && (n = {});
        var r;
        if (t instanceof e) return t;
        typeof t == 'number' && (t = fC(t)), (this.originalInput = t);
        var i = qi(t);
        (this.originalInput = t),
          (this.r = i.r),
          (this.g = i.g),
          (this.b = i.b),
          (this.a = i.a),
          (this.roundA = Math.round(100 * this.a) / 100),
          (this.format = (r = n.format) !== null && r !== void 0 ? r : i.format),
          (this.gradientType = n.gradientType),
          this.r < 1 && (this.r = Math.round(this.r)),
          this.g < 1 && (this.g = Math.round(this.g)),
          this.b < 1 && (this.b = Math.round(this.b)),
          (this.isValid = i.ok);
      }
      return (
        (e.prototype.isDark = function () {
          return this.getBrightness() < 128;
        }),
        (e.prototype.isLight = function () {
          return !this.isDark();
        }),
        (e.prototype.getBrightness = function () {
          var t = this.toRgb();
          return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
        }),
        (e.prototype.getLuminance = function () {
          var t = this.toRgb(),
            n,
            r,
            i,
            o = t.r / 255,
            l = t.g / 255,
            s = t.b / 255;
          return (
            o <= 0.03928 ? (n = o / 12.92) : (n = Math.pow((o + 0.055) / 1.055, 2.4)),
            l <= 0.03928 ? (r = l / 12.92) : (r = Math.pow((l + 0.055) / 1.055, 2.4)),
            s <= 0.03928 ? (i = s / 12.92) : (i = Math.pow((s + 0.055) / 1.055, 2.4)),
            0.2126 * n + 0.7152 * r + 0.0722 * i
          );
        }),
        (e.prototype.getAlpha = function () {
          return this.a;
        }),
        (e.prototype.setAlpha = function (t) {
          return (this.a = _f(t)), (this.roundA = Math.round(100 * this.a) / 100), this;
        }),
        (e.prototype.isMonochrome = function () {
          var t = this.toHsl().s;
          return t === 0;
        }),
        (e.prototype.toHsv = function () {
          var t = Ds(this.r, this.g, this.b);
          return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
        }),
        (e.prototype.toHsvString = function () {
          var t = Ds(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            i = Math.round(t.v * 100);
          return this.a === 1
            ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(i, '%)')
            : 'hsva('.concat(n, ', ').concat(r, '%, ').concat(i, '%, ').concat(this.roundA, ')');
        }),
        (e.prototype.toHsl = function () {
          var t = Tf(this.r, this.g, this.b);
          return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
        }),
        (e.prototype.toHslString = function () {
          var t = Tf(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            i = Math.round(t.l * 100);
          return this.a === 1
            ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(i, '%)')
            : 'hsla('.concat(n, ', ').concat(r, '%, ').concat(i, '%, ').concat(this.roundA, ')');
        }),
        (e.prototype.toHex = function (t) {
          return t === void 0 && (t = !1), Fs(this.r, this.g, this.b, t);
        }),
        (e.prototype.toHexString = function (t) {
          return t === void 0 && (t = !1), '#' + this.toHex(t);
        }),
        (e.prototype.toHex8 = function (t) {
          return t === void 0 && (t = !1), uC(this.r, this.g, this.b, this.a, t);
        }),
        (e.prototype.toHex8String = function (t) {
          return t === void 0 && (t = !1), '#' + this.toHex8(t);
        }),
        (e.prototype.toHexShortString = function (t) {
          return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
        }),
        (e.prototype.toRgb = function () {
          return { r: Math.round(this.r), g: Math.round(this.g), b: Math.round(this.b), a: this.a };
        }),
        (e.prototype.toRgbString = function () {
          var t = Math.round(this.r),
            n = Math.round(this.g),
            r = Math.round(this.b);
          return this.a === 1
            ? 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')')
            : 'rgba('.concat(t, ', ').concat(n, ', ').concat(r, ', ').concat(this.roundA, ')');
        }),
        (e.prototype.toPercentageRgb = function () {
          var t = function (n) {
            return ''.concat(Math.round($n(n, 255) * 100), '%');
          };
          return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
        }),
        (e.prototype.toPercentageRgbString = function () {
          var t = function (n) {
            return Math.round($n(n, 255) * 100);
          };
          return this.a === 1
            ? 'rgb('.concat(t(this.r), '%, ').concat(t(this.g), '%, ').concat(t(this.b), '%)')
            : 'rgba('
                .concat(t(this.r), '%, ')
                .concat(t(this.g), '%, ')
                .concat(t(this.b), '%, ')
                .concat(this.roundA, ')');
        }),
        (e.prototype.toName = function () {
          if (this.a === 0) return 'transparent';
          if (this.a < 1) return !1;
          for (var t = '#' + Fs(this.r, this.g, this.b, !1), n = 0, r = Object.entries(js); n < r.length; n++) {
            var i = r[n],
              o = i[0],
              l = i[1];
            if (t === l) return o;
          }
          return !1;
        }),
        (e.prototype.toString = function (t) {
          var n = Boolean(t);
          t = t ?? this.format;
          var r = !1,
            i = this.a < 1 && this.a >= 0,
            o = !n && i && (t.startsWith('hex') || t === 'name');
          return o
            ? t === 'name' && this.a === 0
              ? this.toName()
              : this.toRgbString()
            : (t === 'rgb' && (r = this.toRgbString()),
              t === 'prgb' && (r = this.toPercentageRgbString()),
              (t === 'hex' || t === 'hex6') && (r = this.toHexString()),
              t === 'hex3' && (r = this.toHexString(!0)),
              t === 'hex4' && (r = this.toHex8String(!0)),
              t === 'hex8' && (r = this.toHex8String()),
              t === 'name' && (r = this.toName()),
              t === 'hsl' && (r = this.toHslString()),
              t === 'hsv' && (r = this.toHsvString()),
              r || this.toHexString());
        }),
        (e.prototype.toNumber = function () {
          return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
        }),
        (e.prototype.clone = function () {
          return new e(this.toString());
        }),
        (e.prototype.lighten = function (t) {
          t === void 0 && (t = 10);
          var n = this.toHsl();
          return (n.l += t / 100), (n.l = Da(n.l)), new e(n);
        }),
        (e.prototype.brighten = function (t) {
          t === void 0 && (t = 10);
          var n = this.toRgb();
          return (
            (n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100))))),
            (n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100))))),
            (n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100))))),
            new e(n)
          );
        }),
        (e.prototype.darken = function (t) {
          t === void 0 && (t = 10);
          var n = this.toHsl();
          return (n.l -= t / 100), (n.l = Da(n.l)), new e(n);
        }),
        (e.prototype.tint = function (t) {
          return t === void 0 && (t = 10), this.mix('white', t);
        }),
        (e.prototype.shade = function (t) {
          return t === void 0 && (t = 10), this.mix('black', t);
        }),
        (e.prototype.desaturate = function (t) {
          t === void 0 && (t = 10);
          var n = this.toHsl();
          return (n.s -= t / 100), (n.s = Da(n.s)), new e(n);
        }),
        (e.prototype.saturate = function (t) {
          t === void 0 && (t = 10);
          var n = this.toHsl();
          return (n.s += t / 100), (n.s = Da(n.s)), new e(n);
        }),
        (e.prototype.greyscale = function () {
          return this.desaturate(100);
        }),
        (e.prototype.spin = function (t) {
          var n = this.toHsl(),
            r = (n.h + t) % 360;
          return (n.h = r < 0 ? 360 + r : r), new e(n);
        }),
        (e.prototype.mix = function (t, n) {
          n === void 0 && (n = 50);
          var r = this.toRgb(),
            i = new e(t).toRgb(),
            o = n / 100,
            l = {
              r: (i.r - r.r) * o + r.r,
              g: (i.g - r.g) * o + r.g,
              b: (i.b - r.b) * o + r.b,
              a: (i.a - r.a) * o + r.a,
            };
          return new e(l);
        }),
        (e.prototype.analogous = function (t, n) {
          t === void 0 && (t = 6), n === void 0 && (n = 30);
          var r = this.toHsl(),
            i = 360 / n,
            o = [this];
          for (r.h = (r.h - ((i * t) >> 1) + 720) % 360; --t; ) (r.h = (r.h + i) % 360), o.push(new e(r));
          return o;
        }),
        (e.prototype.complement = function () {
          var t = this.toHsl();
          return (t.h = (t.h + 180) % 360), new e(t);
        }),
        (e.prototype.monochromatic = function (t) {
          t === void 0 && (t = 6);
          for (var n = this.toHsv(), r = n.h, i = n.s, o = n.v, l = [], s = 1 / t; t--; )
            l.push(new e({ h: r, s: i, v: o })), (o = (o + s) % 1);
          return l;
        }),
        (e.prototype.splitcomplement = function () {
          var t = this.toHsl(),
            n = t.h;
          return [this, new e({ h: (n + 72) % 360, s: t.s, l: t.l }), new e({ h: (n + 216) % 360, s: t.s, l: t.l })];
        }),
        (e.prototype.onBackground = function (t) {
          var n = this.toRgb(),
            r = new e(t).toRgb(),
            i = n.a + r.a * (1 - n.a);
          return new e({
            r: (n.r * n.a + r.r * r.a * (1 - n.a)) / i,
            g: (n.g * n.a + r.g * r.a * (1 - n.a)) / i,
            b: (n.b * n.a + r.b * r.a * (1 - n.a)) / i,
            a: i,
          });
        }),
        (e.prototype.triad = function () {
          return this.polyad(3);
        }),
        (e.prototype.tetrad = function () {
          return this.polyad(4);
        }),
        (e.prototype.polyad = function (t) {
          for (var n = this.toHsl(), r = n.h, i = [this], o = 360 / t, l = 1; l < t; l++)
            i.push(new e({ h: (r + l * o) % 360, s: n.s, l: n.l }));
          return i;
        }),
        (e.prototype.equals = function (t) {
          return this.toRgbString() === new e(t).toRgbString();
        }),
        e
      );
    })(),
    ja = 2,
    Pf = 0.16,
    mC = 0.05,
    vC = 0.05,
    bC = 0.15,
    Nf = 5,
    Rf = 4,
    yC = [
      { index: 7, opacity: 0.15 },
      { index: 6, opacity: 0.25 },
      { index: 5, opacity: 0.3 },
      { index: 5, opacity: 0.45 },
      { index: 5, opacity: 0.65 },
      { index: 5, opacity: 0.85 },
      { index: 4, opacity: 0.9 },
      { index: 3, opacity: 0.95 },
      { index: 2, opacity: 0.97 },
      { index: 1, opacity: 0.98 },
    ];
  function Mf(e) {
    var t = e.r,
      n = e.g,
      r = e.b,
      i = Ds(t, n, r);
    return { h: i.h * 360, s: i.s, v: i.v };
  }
  function za(e) {
    var t = e.r,
      n = e.g,
      r = e.b;
    return '#'.concat(Fs(t, n, r, !1));
  }
  function CC(e, t, n) {
    var r = n / 100,
      i = { r: (t.r - e.r) * r + e.r, g: (t.g - e.g) * r + e.g, b: (t.b - e.b) * r + e.b };
    return i;
  }
  function Af(e, t, n) {
    var r;
    return (
      Math.round(e.h) >= 60 && Math.round(e.h) <= 240
        ? (r = n ? Math.round(e.h) - ja * t : Math.round(e.h) + ja * t)
        : (r = n ? Math.round(e.h) + ja * t : Math.round(e.h) - ja * t),
      r < 0 ? (r += 360) : r >= 360 && (r -= 360),
      r
    );
  }
  function Df(e, t, n) {
    if (e.h === 0 && e.s === 0) return e.s;
    var r;
    return (
      n ? (r = e.s - Pf * t) : t === Rf ? (r = e.s + Pf) : (r = e.s + mC * t),
      r > 1 && (r = 1),
      n && t === Nf && r > 0.1 && (r = 0.1),
      r < 0.06 && (r = 0.06),
      Number(r.toFixed(2))
    );
  }
  function Ff(e, t, n) {
    var r;
    return n ? (r = e.v + vC * t) : (r = e.v - bC * t), r > 1 && (r = 1), Number(r.toFixed(2));
  }
  function $r(e) {
    for (
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = qi(e), i = Nf;
      i > 0;
      i -= 1
    ) {
      var o = Mf(r),
        l = za(qi({ h: Af(o, i, !0), s: Df(o, i, !0), v: Ff(o, i, !0) }));
      n.push(l);
    }
    n.push(za(r));
    for (var s = 1; s <= Rf; s += 1) {
      var d = Mf(r),
        f = za(qi({ h: Af(d, s), s: Df(d, s), v: Ff(d, s) }));
      n.push(f);
    }
    return t.theme === 'dark'
      ? yC.map(function (p) {
          var h = p.index,
            v = p.opacity,
            x = za(CC(qi(t.backgroundColor || '#141414'), qi(n[h]), v * 100));
          return x;
        })
      : n;
  }
  var Hs = {
      red: '#F5222D',
      volcano: '#FA541C',
      orange: '#FA8C16',
      gold: '#FAAD14',
      yellow: '#FADB14',
      lime: '#A0D911',
      green: '#52C41A',
      cyan: '#13C2C2',
      blue: '#1677FF',
      geekblue: '#2F54EB',
      purple: '#722ED1',
      magenta: '#EB2F96',
      grey: '#666666',
    },
    La = {},
    Bs = {};
  Object.keys(Hs).forEach(function (e) {
    (La[e] = $r(Hs[e])),
      (La[e].primary = La[e][5]),
      (Bs[e] = $r(Hs[e], { theme: 'dark', backgroundColor: '#141414' })),
      (Bs[e].primary = Bs[e][5]);
  });
  var SC = La.gold;
  const jf = (e) => {
    const { controlHeight: t } = e;
    return { controlHeightSM: t * 0.75, controlHeightXS: t * 0.5, controlHeightLG: t * 1.25 };
  };
  function xC(e) {
    const { sizeUnit: t, sizeStep: n } = e;
    return {
      sizeXXL: t * (n + 8),
      sizeXL: t * (n + 4),
      sizeLG: t * (n + 2),
      sizeMD: t * (n + 1),
      sizeMS: t * n,
      size: t * n,
      sizeSM: t * (n - 1),
      sizeXS: t * (n - 2),
      sizeXXS: t * (n - 3),
    };
  }
  const ks = {
      blue: '#1677ff',
      purple: '#722ED1',
      cyan: '#13C2C2',
      green: '#52C41A',
      magenta: '#EB2F96',
      pink: '#eb2f96',
      red: '#F5222D',
      orange: '#FA8C16',
      yellow: '#FADB14',
      volcano: '#FA541C',
      geekblue: '#2F54EB',
      gold: '#FAAD14',
      lime: '#A0D911',
    },
    Ha = Object.assign(Object.assign({}, ks), {
      colorPrimary: '#1677ff',
      colorSuccess: '#52c41a',
      colorWarning: '#faad14',
      colorError: '#ff4d4f',
      colorInfo: '#1677ff',
      colorTextBase: '',
      colorBgBase: '',
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
      fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
      fontSize: 14,
      lineWidth: 1,
      lineType: 'solid',
      motionUnit: 0.1,
      motionBase: 0,
      motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
      motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
      motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
      motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
      motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
      borderRadius: 6,
      sizeUnit: 4,
      sizeStep: 4,
      sizePopupArrow: 16,
      controlHeight: 32,
      zIndexBase: 0,
      zIndexPopupBase: 1e3,
      opacityImage: 1,
      wireframe: !1,
    });
  function zf(e, t) {
    let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t;
    const {
        colorSuccess: i,
        colorWarning: o,
        colorError: l,
        colorInfo: s,
        colorPrimary: d,
        colorBgBase: f,
        colorTextBase: p,
      } = e,
      h = n(d),
      v = n(i),
      x = n(o),
      y = n(l),
      C = n(s),
      O = r(f, p);
    return Object.assign(Object.assign({}, O), {
      colorPrimaryBg: h[1],
      colorPrimaryBgHover: h[2],
      colorPrimaryBorder: h[3],
      colorPrimaryBorderHover: h[4],
      colorPrimaryHover: h[5],
      colorPrimary: h[6],
      colorPrimaryActive: h[7],
      colorPrimaryTextHover: h[8],
      colorPrimaryText: h[9],
      colorPrimaryTextActive: h[10],
      colorSuccessBg: v[1],
      colorSuccessBgHover: v[2],
      colorSuccessBorder: v[3],
      colorSuccessBorderHover: v[4],
      colorSuccessHover: v[4],
      colorSuccess: v[6],
      colorSuccessActive: v[7],
      colorSuccessTextHover: v[8],
      colorSuccessText: v[9],
      colorSuccessTextActive: v[10],
      colorErrorBg: y[1],
      colorErrorBgHover: y[2],
      colorErrorBorder: y[3],
      colorErrorBorderHover: y[4],
      colorErrorHover: y[5],
      colorError: y[6],
      colorErrorActive: y[7],
      colorErrorTextHover: y[8],
      colorErrorText: y[9],
      colorErrorTextActive: y[10],
      colorWarningBg: x[1],
      colorWarningBgHover: x[2],
      colorWarningBorder: x[3],
      colorWarningBorderHover: x[4],
      colorWarningHover: x[4],
      colorWarning: x[6],
      colorWarningActive: x[7],
      colorWarningTextHover: x[8],
      colorWarningText: x[9],
      colorWarningTextActive: x[10],
      colorInfoBg: C[1],
      colorInfoBgHover: C[2],
      colorInfoBorder: C[3],
      colorInfoBorderHover: C[4],
      colorInfoHover: C[4],
      colorInfo: C[6],
      colorInfoActive: C[7],
      colorInfoTextHover: C[8],
      colorInfoText: C[9],
      colorInfoTextActive: C[10],
      colorBgMask: new mn('#000').setAlpha(0.45).toRgbString(),
      colorWhite: '#fff',
    });
  }
  const wC = (e) => {
    let t = e,
      n = e,
      r = e,
      i = e;
    return (
      e < 6 && e >= 5 ? (t = e + 1) : e < 16 && e >= 6 ? (t = e + 2) : e >= 16 && (t = 16),
      e < 7 && e >= 5
        ? (n = 4)
        : e < 8 && e >= 7
        ? (n = 5)
        : e < 14 && e >= 8
        ? (n = 6)
        : e < 16 && e >= 14
        ? (n = 7)
        : e >= 16 && (n = 8),
      e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
      e > 4 && e < 8 ? (i = 4) : e >= 8 && (i = 6),
      { borderRadius: e > 16 ? 16 : e, borderRadiusXS: r, borderRadiusSM: n, borderRadiusLG: t, borderRadiusOuter: i }
    );
  };
  function EC(e) {
    const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: i } = e;
    return Object.assign(
      {
        motionDurationFast: `${(n + t).toFixed(1)}s`,
        motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
        motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
        lineWidthBold: i + 1,
      },
      wC(r),
    );
  }
  const Or = (e, t) => new mn(e).setAlpha(t).toRgbString(),
    To = (e, t) => new mn(e).darken(t).toHexString(),
    $C = (e) => {
      const t = $r(e);
      return { 1: t[0], 2: t[1], 3: t[2], 4: t[3], 5: t[4], 6: t[5], 7: t[6], 8: t[4], 9: t[5], 10: t[6] };
    },
    OC = (e, t) => {
      const n = e || '#fff',
        r = t || '#000';
      return {
        colorBgBase: n,
        colorTextBase: r,
        colorText: Or(r, 0.88),
        colorTextSecondary: Or(r, 0.65),
        colorTextTertiary: Or(r, 0.45),
        colorTextQuaternary: Or(r, 0.25),
        colorFill: Or(r, 0.15),
        colorFillSecondary: Or(r, 0.06),
        colorFillTertiary: Or(r, 0.04),
        colorFillQuaternary: Or(r, 0.02),
        colorBgLayout: To(n, 4),
        colorBgContainer: To(n, 0),
        colorBgElevated: To(n, 0),
        colorBgSpotlight: Or(r, 0.85),
        colorBorder: To(n, 15),
        colorBorderSecondary: To(n, 6),
      };
    };
  function _C(e) {
    const t = new Array(10).fill(null).map((n, r) => {
      const i = r - 1,
        o = e * Math.pow(2.71828, i / 5),
        l = r > 1 ? Math.floor(o) : Math.ceil(o);
      return Math.floor(l / 2) * 2;
    });
    return (
      (t[1] = e),
      t.map((n) => {
        const r = n + 8;
        return { size: n, lineHeight: r / n };
      })
    );
  }
  const Lf = (e) => {
    const t = _C(e),
      n = t.map((i) => i.size),
      r = t.map((i) => i.lineHeight);
    return {
      fontSizeSM: n[0],
      fontSize: n[1],
      fontSizeLG: n[2],
      fontSizeXL: n[3],
      fontSizeHeading1: n[6],
      fontSizeHeading2: n[5],
      fontSizeHeading3: n[4],
      fontSizeHeading4: n[3],
      fontSizeHeading5: n[2],
      lineHeight: r[1],
      lineHeightLG: r[2],
      lineHeightSM: r[0],
      lineHeightHeading1: r[6],
      lineHeightHeading2: r[5],
      lineHeightHeading3: r[4],
      lineHeightHeading4: r[3],
      lineHeightHeading5: r[2],
    };
  };
  function Ba(e) {
    const t = Object.keys(ks)
      .map((n) => {
        const r = $r(e[n]);
        return new Array(10)
          .fill(1)
          .reduce((i, o, l) => ((i[`${n}-${l + 1}`] = r[l]), (i[`${n}${l + 1}`] = r[l]), i), {});
      })
      .reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {});
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, e), t),
              zf(e, { generateColorPalettes: $C, generateNeutralColorPalettes: OC }),
            ),
            Lf(e.fontSize),
          ),
          xC(e),
        ),
        jf(e),
      ),
      EC(e),
    );
  }
  function Vs(e) {
    return e >= 0 && e <= 255;
  }
  function ka(e, t) {
    const { r: n, g: r, b: i, a: o } = new mn(e).toRgb();
    if (o < 1) return e;
    const { r: l, g: s, b: d } = new mn(t).toRgb();
    for (let f = 0.01; f <= 1; f += 0.01) {
      const p = Math.round((n - l * (1 - f)) / f),
        h = Math.round((r - s * (1 - f)) / f),
        v = Math.round((i - d * (1 - f)) / f);
      if (Vs(p) && Vs(h) && Vs(v)) return new mn({ r: p, g: h, b: v, a: Math.round(f * 100) / 100 }).toRgbString();
    }
    return new mn({ r: n, g: r, b: i, a: 1 }).toRgbString();
  }
  var TC =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  function IC(e) {
    const { override: t } = e,
      n = TC(e, ['override']),
      r = Object.assign({}, t);
    Object.keys(Ha).forEach((v) => {
      delete r[v];
    });
    const i = Object.assign(Object.assign({}, n), r),
      o = 480,
      l = 576,
      s = 768,
      d = 992,
      f = 1200,
      p = 1600;
    return Object.assign(
      Object.assign(Object.assign({}, i), {
        colorLink: i.colorInfoText,
        colorLinkHover: i.colorInfoHover,
        colorLinkActive: i.colorInfoActive,
        colorFillContent: i.colorFillSecondary,
        colorFillContentHover: i.colorFill,
        colorFillAlter: i.colorFillQuaternary,
        colorBgContainerDisabled: i.colorFillTertiary,
        colorBorderBg: i.colorBgContainer,
        colorSplit: ka(i.colorBorderSecondary, i.colorBgContainer),
        colorTextPlaceholder: i.colorTextQuaternary,
        colorTextDisabled: i.colorTextQuaternary,
        colorTextHeading: i.colorText,
        colorTextLabel: i.colorTextSecondary,
        colorTextDescription: i.colorTextTertiary,
        colorTextLightSolid: i.colorWhite,
        colorHighlight: i.colorError,
        colorBgTextHover: i.colorFillSecondary,
        colorBgTextActive: i.colorFill,
        colorIcon: i.colorTextTertiary,
        colorIconHover: i.colorText,
        colorErrorOutline: ka(i.colorErrorBg, i.colorBgContainer),
        colorWarningOutline: ka(i.colorWarningBg, i.colorBgContainer),
        fontSizeIcon: i.fontSizeSM,
        lineWidthFocus: i.lineWidth * 4,
        lineWidth: i.lineWidth,
        controlOutlineWidth: i.lineWidth * 2,
        controlInteractiveSize: i.controlHeight / 2,
        controlItemBgHover: i.colorFillTertiary,
        controlItemBgActive: i.colorPrimaryBg,
        controlItemBgActiveHover: i.colorPrimaryBgHover,
        controlItemBgActiveDisabled: i.colorFill,
        controlTmpOutline: i.colorFillQuaternary,
        controlOutline: ka(i.colorPrimaryBg, i.colorBgContainer),
        lineType: i.lineType,
        borderRadius: i.borderRadius,
        borderRadiusXS: i.borderRadiusXS,
        borderRadiusSM: i.borderRadiusSM,
        borderRadiusLG: i.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: 'none',
        linkHoverDecoration: 'none',
        linkFocusDecoration: 'none',
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: i.sizeXXS,
        paddingXS: i.sizeXS,
        paddingSM: i.sizeSM,
        padding: i.size,
        paddingMD: i.sizeMD,
        paddingLG: i.sizeLG,
        paddingXL: i.sizeXL,
        paddingContentHorizontalLG: i.sizeLG,
        paddingContentVerticalLG: i.sizeMS,
        paddingContentHorizontal: i.sizeMS,
        paddingContentVertical: i.sizeSM,
        paddingContentHorizontalSM: i.size,
        paddingContentVerticalSM: i.sizeXS,
        marginXXS: i.sizeXXS,
        marginXS: i.sizeXS,
        marginSM: i.sizeSM,
        margin: i.size,
        marginMD: i.sizeMD,
        marginLG: i.sizeLG,
        marginXL: i.sizeXL,
        marginXXL: i.sizeXXL,
        boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
        screenXS: o,
        screenXSMin: o,
        screenXSMax: l - 1,
        screenSM: l,
        screenSMMin: l,
        screenSMMax: s - 1,
        screenMD: s,
        screenMDMin: s,
        screenMDMax: d - 1,
        screenLG: d,
        screenLGMin: d,
        screenLGMax: f - 1,
        screenXL: f,
        screenXLMin: f,
        screenXLMax: p - 1,
        screenXXL: p,
        screenXXLMin: p,
        boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
        boxShadowCard: `
      0 1px 2px -2px ${new mn('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new mn('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new mn('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
        boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
      }),
      r,
    );
  }
  const Hf = (e) => ({
    color: e.colorLink,
    textDecoration: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: `color ${e.motionDurationSlow}`,
    '&:focus, &:hover': { color: e.colorLinkHover },
    '&:active': { color: e.colorLinkActive },
  });
  function PC(e, t) {
    return Aa.reduce((n, r) => {
      const i = e[`${r}1`],
        o = e[`${r}3`],
        l = e[`${r}6`],
        s = e[`${r}7`];
      return Object.assign(
        Object.assign({}, n),
        t(r, { lightColor: i, lightBorderColor: o, darkColor: l, textColor: s }),
      );
    }, {});
  }
  const NC = (e, t, n, r, i) => {
      const o = e / 2,
        l = 0,
        s = o,
        d = (n * 1) / Math.sqrt(2),
        f = o - n * (1 - 1 / Math.sqrt(2)),
        p = o - t * (1 / Math.sqrt(2)),
        h = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)),
        v = 2 * o - p,
        x = h,
        y = 2 * o - d,
        C = f,
        O = 2 * o - l,
        E = s,
        _ = o * Math.sqrt(2) + n * (Math.sqrt(2) - 2);
      return {
        pointerEvents: 'none',
        width: e,
        height: e,
        overflow: 'hidden',
        '&::before': {
          position: 'absolute',
          bottom: 0,
          insetInlineStart: 0,
          width: e,
          height: e / 2,
          background: r,
          clipPath: `path('M ${l} ${s} A ${n} ${n} 0 0 0 ${d} ${f} L ${p} ${h} A ${t} ${t} 0 0 1 ${v} ${x} L ${y} ${C} A ${n} ${n} 0 0 0 ${O} ${E} Z')`,
          content: '""',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: _,
          height: _,
          bottom: 0,
          insetInline: 0,
          margin: 'auto',
          borderRadius: { _skip_check_: !0, value: `0 0 ${t}px 0` },
          transform: 'translateY(50%) rotate(-135deg)',
          boxShadow: i,
          zIndex: 0,
          background: 'transparent',
        },
      };
    },
    Io = { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' },
    ir = (e) => ({
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      listStyle: 'none',
      fontFamily: e.fontFamily,
    }),
    Ws = () => ({
      display: 'inline-flex',
      alignItems: 'center',
      color: 'inherit',
      fontStyle: 'normal',
      lineHeight: 0,
      textAlign: 'center',
      textTransform: 'none',
      verticalAlign: '-0.125em',
      textRendering: 'optimizeLegibility',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      '> *': { lineHeight: 1 },
      svg: { display: 'inline-block' },
    }),
    Bf = () => ({
      '&::before': { display: 'table', content: '""' },
      '&::after': { display: 'table', clear: 'both', content: '""' },
    }),
    RC = (e) => ({
      a: {
        color: e.colorLink,
        textDecoration: e.linkDecoration,
        backgroundColor: 'transparent',
        outline: 'none',
        cursor: 'pointer',
        transition: `color ${e.motionDurationSlow}`,
        '-webkit-text-decoration-skip': 'objects',
        '&:hover': { color: e.colorLinkHover },
        '&:active': { color: e.colorLinkActive },
        [`&:active,
  &:hover`]: { textDecoration: e.linkHoverDecoration, outline: 0 },
        '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
        '&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' },
      },
    }),
    MC = (e, t) => {
      const { fontFamily: n, fontSize: r } = e,
        i = `[class^="${t}"], [class*=" ${t}"]`;
      return {
        [i]: {
          fontFamily: n,
          fontSize: r,
          boxSizing: 'border-box',
          '&::before, &::after': { boxSizing: 'border-box' },
          [i]: { boxSizing: 'border-box', '&::before, &::after': { boxSizing: 'border-box' } },
        },
      };
    },
    Us = (e) => ({
      outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
      outlineOffset: 1,
      transition: 'outline-offset 0s, outline 0s',
    }),
    Gs = (e) => ({ '&:focus-visible': Object.assign({}, Us(e)) }),
    qs = 'anticon',
    AC = (e, t) => t || (e ? `ant-${e}` : 'ant'),
    xt = b.createContext({ getPrefixCls: AC, iconPrefixCls: qs });
  function On(e, t, n) {
    return (r) => {
      const [i, o, l] = bi(),
        { getPrefixCls: s, iconPrefixCls: d } = je(xt),
        f = s();
      return (
        hs({ theme: i, token: o, hashId: l, path: ['Shared', f] }, () => [{ '&': RC(o) }]),
        [
          hs({ theme: i, token: o, hashId: l, path: [e, r, d] }, () => {
            const { token: p, flush: h } = FC(o),
              v = typeof n == 'function' ? n(p) : n,
              x = Object.assign(Object.assign({}, v), o[e]),
              y = `.${r}`,
              C = jt(p, { componentCls: y, prefixCls: r, iconCls: `.${d}`, antCls: `.${f}` }, x),
              O = t(C, { hashId: l, prefixCls: r, rootPrefixCls: f, iconPrefixCls: d, overrideComponentToken: o[e] });
            return h(e, x), [MC(o, r), O];
          }),
          l,
        ]
      );
    };
  }
  const kf = typeof CSSINJS_STATISTIC < 'u';
  let Ks = !0;
  function jt() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    if (!kf) return Object.assign.apply(Object, [{}].concat(t));
    Ks = !1;
    const r = {};
    return (
      t.forEach((i) => {
        Object.keys(i).forEach((l) => {
          Object.defineProperty(r, l, { configurable: !0, enumerable: !0, get: () => i[l] });
        });
      }),
      (Ks = !0),
      r
    );
  }
  function DC() {}
  function FC(e) {
    let t,
      n = e,
      r = DC;
    return (
      kf &&
        ((t = new Set()),
        (n = new Proxy(e, {
          get(i, o) {
            return Ks && t.add(o), i[o];
          },
        })),
        (r = (i, o) => {
          Array.from(t);
        })),
      { token: n, keys: t, flush: r }
    );
  }
  const jC = Qd(Ba),
    Va = { token: Ha, hashed: !0 },
    Vf = be.createContext(Va);
  function bi() {
    const { token: e, hashed: t, theme: n, components: r } = be.useContext(Vf),
      i = `${iC}-${t || ''}`,
      o = n || jC,
      [l, s] = Nb(o, [Ha, e], { salt: i, override: Object.assign({ override: e }, r), formatToken: IC });
    return [o, l, t ? s : ''];
  }
  const zC = `-ant-${Date.now()}-${Math.random()}`;
  function LC(e, t) {
    const n = {},
      r = (l, s) => {
        let d = l.clone();
        return (d = (s == null ? void 0 : s(d)) || d), d.toRgbString();
      },
      i = (l, s) => {
        const d = new mn(l),
          f = $r(d.toRgbString());
        (n[`${s}-color`] = r(d)),
          (n[`${s}-color-disabled`] = f[1]),
          (n[`${s}-color-hover`] = f[4]),
          (n[`${s}-color-active`] = f[6]),
          (n[`${s}-color-outline`] = d.clone().setAlpha(0.2).toRgbString()),
          (n[`${s}-color-deprecated-bg`] = f[0]),
          (n[`${s}-color-deprecated-border`] = f[2]);
      };
    if (t.primaryColor) {
      i(t.primaryColor, 'primary');
      const l = new mn(t.primaryColor),
        s = $r(l.toRgbString());
      s.forEach((f, p) => {
        n[`primary-${p + 1}`] = f;
      }),
        (n['primary-color-deprecated-l-35'] = r(l, (f) => f.lighten(35))),
        (n['primary-color-deprecated-l-20'] = r(l, (f) => f.lighten(20))),
        (n['primary-color-deprecated-t-20'] = r(l, (f) => f.tint(20))),
        (n['primary-color-deprecated-t-50'] = r(l, (f) => f.tint(50))),
        (n['primary-color-deprecated-f-12'] = r(l, (f) => f.setAlpha(f.getAlpha() * 0.12)));
      const d = new mn(s[0]);
      (n['primary-color-active-deprecated-f-30'] = r(d, (f) => f.setAlpha(f.getAlpha() * 0.3))),
        (n['primary-color-active-deprecated-d-02'] = r(d, (f) => f.darken(2)));
    }
    return (
      t.successColor && i(t.successColor, 'success'),
      t.warningColor && i(t.warningColor, 'warning'),
      t.errorColor && i(t.errorColor, 'error'),
      t.infoColor && i(t.infoColor, 'info'),
      `
  :root {
    ${Object.keys(n).map((l) => `--${e}-${l}: ${n[l]};`).join(`
`)}
  }
  `.trim()
    );
  }
  function HC(e, t) {
    const n = LC(e, t);
    An() && zi(n, `${zC}-dynamic-theme`);
  }
  const Xs = b.createContext(!1),
    BC = (e) => {
      let { children: t, disabled: n } = e;
      const r = je(Xs);
      return b.createElement(Xs.Provider, { value: n ?? r }, t);
    },
    Wa = Xs,
    Ys = b.createContext(void 0),
    kC = (e) => {
      let { children: t, size: n } = e;
      const r = je(Ys);
      return b.createElement(Ys.Provider, { value: n || r }, t);
    },
    Ki = Ys;
  function VC() {
    const e = je(Wa),
      t = je(Ki);
    return { componentDisabled: e, componentSize: t };
  }
  function WC(e, t) {
    const n = e || {},
      r = n.inherit === !1 || !t ? Va : t;
    return ma(
      () => {
        if (!e) return t;
        const o = Object.assign({}, r.components);
        return (
          Object.keys(e.components || {}).forEach((l) => {
            o[l] = Object.assign(Object.assign({}, o[l]), e.components[l]);
          }),
          Object.assign(Object.assign(Object.assign({}, r), n), {
            token: Object.assign(Object.assign({}, r.token), n.token),
            components: o,
          })
        );
      },
      [n, r],
      (o, l) =>
        o.some((s, d) => {
          const f = l[d];
          return !mb(s, f, !0);
        }),
    );
  }
  const UC = (e) => {
    const [t, n] = bi();
    return hs({ theme: t, token: n, hashId: '', path: ['ant-design-icons', e] }, () => [
      { [`.${e}`]: Object.assign(Object.assign({}, Ws()), { [`.${e} .${e}-icon`]: { display: 'block' } }) },
    ]);
  };
  var GC =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const qC = [
      'getTargetContainer',
      'getPopupContainer',
      'renderEmpty',
      'pageHeader',
      'input',
      'pagination',
      'form',
      'select',
    ],
    KC = 'ant';
  let Ua, Wf;
  function Ga() {
    return Ua || KC;
  }
  function XC() {
    return Wf || qs;
  }
  const YC = (e) => {
      let { prefixCls: t, iconPrefixCls: n, theme: r } = e;
      t !== void 0 && (Ua = t), n !== void 0 && (Wf = n), r && HC(Ga(), r);
    },
    Qs = () => ({
      getPrefixCls: (e, t) => t || (e ? `${Ga()}-${e}` : Ga()),
      getIconPrefixCls: XC,
      getRootPrefixCls: () => Ua || Ga(),
    }),
    QC = (e) => {
      const {
          children: t,
          csp: n,
          autoInsertSpaceInButton: r,
          form: i,
          locale: o,
          componentSize: l,
          direction: s,
          space: d,
          virtual: f,
          dropdownMatchSelectWidth: p,
          legacyLocale: h,
          parentContext: v,
          iconPrefixCls: x,
          theme: y,
          componentDisabled: C,
        } = e,
        O = Qt(
          (A, z) => {
            const { prefixCls: V } = e;
            if (z) return z;
            const U = V || v.getPrefixCls('');
            return A ? `${U}-${A}` : U;
          },
          [v.getPrefixCls, e.prefixCls],
        ),
        E = x || v.iconPrefixCls || qs,
        _ = E !== v.iconPrefixCls,
        P = n || v.csp,
        N = UC(E),
        j = WC(y, v.theme),
        u = {
          csp: P,
          autoInsertSpaceInButton: r,
          locale: o || h,
          direction: s,
          space: d,
          virtual: f,
          dropdownMatchSelectWidth: p,
          getPrefixCls: O,
          iconPrefixCls: E,
          theme: j,
        },
        $ = Object.assign({}, v);
      Object.keys(u).forEach((A) => {
        u[A] !== void 0 && ($[A] = u[A]);
      }),
        qC.forEach((A) => {
          const z = e[A];
          z && ($[A] = z);
        });
      const I = ma(
          () => $,
          $,
          (A, z) => {
            const V = Object.keys(A),
              U = Object.keys(z);
            return V.length !== U.length || V.some((X) => A[X] !== z[X]);
          },
        ),
        M = De(() => ({ prefixCls: E, csp: P }), [E, P]);
      let D = _ ? N(t) : t;
      const B = De(() => {
        var A, z, V;
        return Oo(
          {},
          ((A = Gi.Form) === null || A === void 0 ? void 0 : A.defaultValidateMessages) || {},
          ((V = (z = I.locale) === null || z === void 0 ? void 0 : z.Form) === null || V === void 0
            ? void 0
            : V.defaultValidateMessages) || {},
          (i == null ? void 0 : i.validateMessages) || {},
        );
      }, [I, i == null ? void 0 : i.validateMessages]);
      Object.keys(B).length > 0 && (D = b.createElement(Cf, { validateMessages: B }, t)),
        o && (D = b.createElement(rC, { locale: o, _ANT_MARK__: nC }, D)),
        (E || P) && (D = b.createElement(bs.Provider, { value: M }, D)),
        l && (D = b.createElement(kC, { size: l }, D));
      const F = De(() => {
        const A = j || {},
          { algorithm: z, token: V } = A,
          U = GC(A, ['algorithm', 'token']),
          X = z && (!Array.isArray(z) || z.length > 0) ? Qd(z) : void 0;
        return Object.assign(Object.assign({}, U), { theme: X, token: Object.assign(Object.assign({}, Ha), V) });
      }, [j]);
      return (
        y && (D = b.createElement(Vf.Provider, { value: F }, D)),
        C !== void 0 && (D = b.createElement(BC, { disabled: C }, D)),
        b.createElement(xt.Provider, { value: I }, D)
      );
    },
    Xi = (e) => {
      const t = je(xt),
        n = je(Ms);
      return b.createElement(QC, Object.assign({ parentContext: t, legacyLocale: n }, e));
    };
  (Xi.ConfigContext = xt),
    (Xi.SizeContext = Ki),
    (Xi.config = YC),
    (Xi.useConfig = VC),
    Object.defineProperty(Xi, 'SizeContext', { get: () => Ki });
  const Js = Xi;
  var Uf = function (t) {
      return +setTimeout(t, 16);
    },
    Gf = function (t) {
      return clearTimeout(t);
    };
  typeof window < 'u' &&
    'requestAnimationFrame' in window &&
    ((Uf = function (t) {
      return window.requestAnimationFrame(t);
    }),
    (Gf = function (t) {
      return window.cancelAnimationFrame(t);
    }));
  var qf = 0,
    Zs = new Map();
  function Kf(e) {
    Zs.delete(e);
  }
  var Sn = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    qf += 1;
    var r = qf;
    function i(o) {
      if (o === 0) Kf(r), t();
      else {
        var l = Uf(function () {
          i(o - 1);
        });
        Zs.set(r, l);
      }
    }
    return i(n), r;
  };
  Sn.cancel = function (e) {
    var t = Zs.get(e);
    return Kf(t), Gf(t);
  };
  var JC = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z',
          },
        },
      ],
    },
    name: 'check-circle',
    theme: 'filled',
  };
  const ZC = JC;
  function e1(e, t) {
    tr(e, '[@ant-design/icons] '.concat(t));
  }
  function Xf(e) {
    return (
      Et(e) === 'object' &&
      typeof e.name == 'string' &&
      typeof e.theme == 'string' &&
      (Et(e.icon) === 'object' || typeof e.icon == 'function')
    );
  }
  function Yf() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(e).reduce(function (t, n) {
      var r = e[n];
      switch (n) {
        case 'class':
          (t.className = r), delete t.class;
          break;
        default:
          t[n] = r;
      }
      return t;
    }, {});
  }
  function ec(e, t, n) {
    return n
      ? be.createElement(
          e.tag,
          G(G({ key: t }, Yf(e.attrs)), n),
          (e.children || []).map(function (r, i) {
            return ec(r, ''.concat(t, '-').concat(e.tag, '-').concat(i));
          }),
        )
      : be.createElement(
          e.tag,
          G({ key: t }, Yf(e.attrs)),
          (e.children || []).map(function (r, i) {
            return ec(r, ''.concat(t, '-').concat(e.tag, '-').concat(i));
          }),
        );
  }
  function Qf(e) {
    return $r(e)[0];
  }
  function Jf(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
  }
  var t1 = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
    n1 = function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t1,
        n = je(bs),
        r = n.csp,
        i = n.prefixCls,
        o = t;
      i && (o = o.replace(/anticon/g, i)),
        Fe(function () {
          zi(o, '@ant-design-icons', { prepend: !0, csp: r });
        }, []);
    },
    r1 = ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor'],
    Po = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
  function i1(e) {
    var t = e.primaryColor,
      n = e.secondaryColor;
    (Po.primaryColor = t), (Po.secondaryColor = n || Qf(t)), (Po.calculated = !!n);
  }
  function o1() {
    return G({}, Po);
  }
  var qa = function (t) {
    var n = t.icon,
      r = t.className,
      i = t.onClick,
      o = t.style,
      l = t.primaryColor,
      s = t.secondaryColor,
      d = qt(t, r1),
      f = Po;
    if (
      (l && (f = { primaryColor: l, secondaryColor: s || Qf(l) }),
      n1(),
      e1(Xf(n), 'icon should be icon definiton, but got '.concat(n)),
      !Xf(n))
    )
      return null;
    var p = n;
    return (
      p && typeof p.icon == 'function' && (p = G(G({}, p), {}, { icon: p.icon(f.primaryColor, f.secondaryColor) })),
      ec(
        p.icon,
        'svg-'.concat(p.name),
        G(
          {
            className: r,
            onClick: i,
            style: o,
            'data-icon': p.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          d,
        ),
      )
    );
  };
  (qa.displayName = 'IconReact'), (qa.getTwoToneColors = o1), (qa.setTwoToneColors = i1);
  const tc = qa;
  function Zf(e) {
    var t = Jf(e),
      n = ge(t, 2),
      r = n[0],
      i = n[1];
    return tc.setTwoToneColors({ primaryColor: r, secondaryColor: i });
  }
  function a1() {
    var e = tc.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }
  var l1 = ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor'];
  Zf('#1890ff');
  var Ka = We(function (e, t) {
    var n,
      r = e.className,
      i = e.icon,
      o = e.spin,
      l = e.rotate,
      s = e.tabIndex,
      d = e.onClick,
      f = e.twoToneColor,
      p = qt(e, l1),
      h = je(bs),
      v = h.prefixCls,
      x = v === void 0 ? 'anticon' : v,
      y = h.rootClassName,
      C = he(
        y,
        x,
        ((n = {}),
        Ie(n, ''.concat(x, '-').concat(i.name), !!i.name),
        Ie(n, ''.concat(x, '-spin'), !!o || i.name === 'loading'),
        n),
        r,
      ),
      O = s;
    O === void 0 && d && (O = -1);
    var E = l ? { msTransform: 'rotate('.concat(l, 'deg)'), transform: 'rotate('.concat(l, 'deg)') } : void 0,
      _ = Jf(f),
      P = ge(_, 2),
      N = P[0],
      j = P[1];
    return b.createElement(
      'span',
      G(G({ role: 'img', 'aria-label': i.name }, p), {}, { ref: t, tabIndex: O, onClick: d, className: C }),
      b.createElement(tc, { icon: i, primaryColor: N, secondaryColor: j, style: E }),
    );
  });
  (Ka.displayName = 'AntdIcon'), (Ka.getTwoToneColor = a1), (Ka.setTwoToneColor = Zf);
  const xn = Ka;
  var ep = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: ZC }));
  };
  ep.displayName = 'CheckCircleFilled';
  const tp = We(ep);
  var s1 = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z',
          },
        },
      ],
    },
    name: 'close-circle',
    theme: 'filled',
  };
  const c1 = s1;
  var np = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: c1 }));
  };
  np.displayName = 'CloseCircleFilled';
  const Xa = We(np);
  var u1 = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
          },
        },
      ],
    },
    name: 'close',
    theme: 'outlined',
  };
  const d1 = u1;
  var rp = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: d1 }));
  };
  rp.displayName = 'CloseOutlined';
  const Ya = We(rp);
  var f1 = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z',
          },
        },
      ],
    },
    name: 'exclamation-circle',
    theme: 'filled',
  };
  const p1 = f1;
  var ip = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: p1 }));
  };
  ip.displayName = 'ExclamationCircleFilled';
  const op = We(ip);
  var g1 = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z',
          },
        },
      ],
    },
    name: 'info-circle',
    theme: 'filled',
  };
  const h1 = g1;
  var ap = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: h1 }));
  };
  ap.displayName = 'InfoCircleFilled';
  const lp = We(ap);
  function sp(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
      (n['Moz'.concat(e)] = 'moz'.concat(t)),
      (n['ms'.concat(e)] = 'MS'.concat(t)),
      (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
      n
    );
  }
  function m1(e, t) {
    var n = { animationend: sp('Animation', 'AnimationEnd'), transitionend: sp('Transition', 'TransitionEnd') };
    return (
      e &&
        ('AnimationEvent' in t || delete n.animationend.animation,
        'TransitionEvent' in t || delete n.transitionend.transition),
      n
    );
  }
  var v1 = m1(An(), typeof window < 'u' ? window : {}),
    cp = {};
  if (An()) {
    var b1 = document.createElement('div');
    cp = b1.style;
  }
  var Qa = {};
  function up(e) {
    if (Qa[e]) return Qa[e];
    var t = v1[e];
    if (t)
      for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
        var o = n[i];
        if (Object.prototype.hasOwnProperty.call(t, o) && o in cp) return (Qa[e] = t[o]), Qa[e];
      }
    return '';
  }
  var dp = up('animationend'),
    fp = up('transitionend'),
    pp = !!(dp && fp),
    gp = dp || 'animationend',
    hp = fp || 'transitionend';
  function mp(e, t) {
    if (!e) return null;
    if (Et(e) === 'object') {
      var n = t.replace(/-\w/g, function (r) {
        return r[1].toUpperCase();
      });
      return e[n];
    }
    return ''.concat(e, '-').concat(t);
  }
  var Yi = 'none',
    Ja = 'appear',
    Za = 'enter',
    el = 'leave',
    vp = 'none',
    _r = 'prepare',
    Qi = 'start',
    Ji = 'active',
    nc = 'end';
  function Ur(e) {
    var t = ie(!1),
      n = we(e),
      r = ge(n, 2),
      i = r[0],
      o = r[1];
    Fe(function () {
      return (
        (t.current = !1),
        function () {
          t.current = !0;
        }
      );
    }, []);
    function l(s, d) {
      (d && t.current) || o(s);
    }
    return [i, l];
  }
  const y1 = function () {
    var e = ie(null);
    function t() {
      Sn.cancel(e.current);
    }
    function n(r) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      t();
      var o = Sn(function () {
        i <= 1
          ? r({
              isCanceled: function () {
                return o !== e.current;
              },
            })
          : n(r, i - 1);
      });
      e.current = o;
    }
    return (
      Fe(function () {
        return function () {
          t();
        };
      }, []),
      [n, t]
    );
  };
  var bp = An() ? zr : Fe,
    yp = [_r, Qi, Ji, nc],
    Cp = !1,
    C1 = !0;
  function Sp(e) {
    return e === Ji || e === nc;
  }
  const S1 = function (e, t) {
      var n = Ur(vp),
        r = ge(n, 2),
        i = r[0],
        o = r[1],
        l = y1(),
        s = ge(l, 2),
        d = s[0],
        f = s[1];
      function p() {
        o(_r, !0);
      }
      return (
        bp(
          function () {
            if (i !== vp && i !== nc) {
              var h = yp.indexOf(i),
                v = yp[h + 1],
                x = t(i);
              x === Cp
                ? o(v, !0)
                : d(function (y) {
                    function C() {
                      y.isCanceled() || o(v, !0);
                    }
                    x === !0 ? C() : Promise.resolve(x).then(C);
                  });
            }
          },
          [e, i],
        ),
        Fe(function () {
          return function () {
            f();
          };
        }, []),
        [p, i]
      );
    },
    x1 = function (e) {
      var t = ie(),
        n = ie(e);
      n.current = e;
      var r = Qt(function (l) {
        n.current(l);
      }, []);
      function i(l) {
        l && (l.removeEventListener(hp, r), l.removeEventListener(gp, r));
      }
      function o(l) {
        t.current && t.current !== l && i(t.current),
          l && l !== t.current && (l.addEventListener(hp, r), l.addEventListener(gp, r), (t.current = l));
      }
      return (
        Fe(function () {
          return function () {
            i(t.current);
          };
        }, []),
        [o, i]
      );
    };
  function w1(e, t, n, r) {
    var i = r.motionEnter,
      o = i === void 0 ? !0 : i,
      l = r.motionAppear,
      s = l === void 0 ? !0 : l,
      d = r.motionLeave,
      f = d === void 0 ? !0 : d,
      p = r.motionDeadline,
      h = r.motionLeaveImmediately,
      v = r.onAppearPrepare,
      x = r.onEnterPrepare,
      y = r.onLeavePrepare,
      C = r.onAppearStart,
      O = r.onEnterStart,
      E = r.onLeaveStart,
      _ = r.onAppearActive,
      P = r.onEnterActive,
      N = r.onLeaveActive,
      j = r.onAppearEnd,
      u = r.onEnterEnd,
      $ = r.onLeaveEnd,
      I = r.onVisibleChanged,
      M = Ur(),
      D = ge(M, 2),
      B = D[0],
      F = D[1],
      A = Ur(Yi),
      z = ge(A, 2),
      V = z[0],
      U = z[1],
      X = Ur(null),
      Z = ge(X, 2),
      ee = Z[0],
      le = Z[1],
      ce = ie(!1),
      xe = ie(null);
    function Q() {
      return n();
    }
    var Ce = ie(!1);
    function Se(ue) {
      var de = Q();
      if (!(ue && !ue.deadline && ue.target !== de)) {
        var Be = Ce.current,
          Xe;
        V === Ja && Be
          ? (Xe = j == null ? void 0 : j(de, ue))
          : V === Za && Be
          ? (Xe = u == null ? void 0 : u(de, ue))
          : V === el && Be && (Xe = $ == null ? void 0 : $(de, ue)),
          V !== Yi && Be && Xe !== !1 && (U(Yi, !0), le(null, !0));
      }
    }
    var me = x1(Se),
      se = ge(me, 1),
      $e = se[0],
      Ee = De(
        function () {
          var ue, de, Be;
          switch (V) {
            case Ja:
              return (ue = {}), Ie(ue, _r, v), Ie(ue, Qi, C), Ie(ue, Ji, _), ue;
            case Za:
              return (de = {}), Ie(de, _r, x), Ie(de, Qi, O), Ie(de, Ji, P), de;
            case el:
              return (Be = {}), Ie(Be, _r, y), Ie(Be, Qi, E), Ie(Be, Ji, N), Be;
            default:
              return {};
          }
        },
        [V],
      ),
      Me = S1(V, function (ue) {
        if (ue === _r) {
          var de = Ee[_r];
          return de ? de(Q()) : Cp;
        }
        if (ne in Ee) {
          var Be;
          le(((Be = Ee[ne]) === null || Be === void 0 ? void 0 : Be.call(Ee, Q(), null)) || null);
        }
        return (
          ne === Ji &&
            ($e(Q()),
            p > 0 &&
              (clearTimeout(xe.current),
              (xe.current = setTimeout(function () {
                Se({ deadline: !0 });
              }, p)))),
          C1
        );
      }),
      Le = ge(Me, 2),
      Re = Le[0],
      ne = Le[1],
      Te = Sp(ne);
    (Ce.current = Te),
      bp(
        function () {
          F(t);
          var ue = ce.current;
          if (((ce.current = !0), !!e)) {
            var de;
            !ue && t && s && (de = Ja),
              ue && t && o && (de = Za),
              ((ue && !t && f) || (!ue && h && !t && f)) && (de = el),
              de && (U(de), Re());
          }
        },
        [t],
      ),
      Fe(
        function () {
          ((V === Ja && !s) || (V === Za && !o) || (V === el && !f)) && U(Yi);
        },
        [s, o, f],
      ),
      Fe(function () {
        return function () {
          (ce.current = !1), clearTimeout(xe.current);
        };
      }, []);
    var He = ie(!1);
    Fe(
      function () {
        B && (He.current = !0),
          B !== void 0 && V === Yi && ((He.current || B) && (I == null || I(B)), (He.current = !0));
      },
      [B, V],
    );
    var oe = ee;
    return Ee[_r] && ne === Qi && (oe = G({ transition: 'none' }, oe)), [V, ne, oe, B ?? t];
  }
  var E1 = (function (e) {
    li(n, e);
    var t = si(n);
    function n() {
      return zn(this, n), t.apply(this, arguments);
    }
    return (
      Ln(n, [
        {
          key: 'render',
          value: function () {
            return this.props.children;
          },
        },
      ]),
      n
    );
  })(b.Component);
  function $1(e) {
    var t = e;
    Et(e) === 'object' && (t = e.transitionSupport);
    function n(i) {
      return !!(i.motionName && t);
    }
    var r = We(function (i, o) {
      var l = i.visible,
        s = l === void 0 ? !0 : l,
        d = i.removeOnLeave,
        f = d === void 0 ? !0 : d,
        p = i.forceRender,
        h = i.children,
        v = i.motionName,
        x = i.leavedClassName,
        y = i.eventProps,
        C = n(i),
        O = ie(),
        E = ie();
      function _() {
        try {
          return O.current instanceof HTMLElement ? O.current : va(E.current);
        } catch {
          return null;
        }
      }
      var P = w1(C, s, _, i),
        N = ge(P, 4),
        j = N[0],
        u = N[1],
        $ = N[2],
        I = N[3],
        M = ie(I);
      I && (M.current = !0);
      var D = Qt(
          function (X) {
            (O.current = X), Ql(o, X);
          },
          [o],
        ),
        B,
        F = G(G({}, y), {}, { visible: s });
      if (!h) B = null;
      else if (j === Yi || !n(i))
        I
          ? (B = h(G({}, F), D))
          : !f && M.current && x
          ? (B = h(G(G({}, F), {}, { className: x }), D))
          : p || (!f && !x)
          ? (B = h(G(G({}, F), {}, { style: { display: 'none' } }), D))
          : (B = null);
      else {
        var A, z;
        u === _r ? (z = 'prepare') : Sp(u) ? (z = 'active') : u === Qi && (z = 'start'),
          (B = h(
            G(
              G({}, F),
              {},
              {
                className: he(
                  mp(v, j),
                  ((A = {}), Ie(A, mp(v, ''.concat(j, '-').concat(z)), z), Ie(A, v, typeof v == 'string'), A),
                ),
                style: $,
              },
            ),
            D,
          ));
      }
      if (Vn(B) && mo(B)) {
        var V = B,
          U = V.ref;
        U || (B = un(B, { ref: D }));
      }
      return b.createElement(E1, { ref: E }, B);
    });
    return (r.displayName = 'CSSMotion'), r;
  }
  const Tr = $1(pp);
  var rc = 'add',
    ic = 'keep',
    oc = 'remove',
    ac = 'removed';
  function O1(e) {
    var t;
    return e && Et(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }), G(G({}, t), {}, { key: String(t.key) });
  }
  function lc() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return e.map(O1);
  }
  function _1() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      n = [],
      r = 0,
      i = t.length,
      o = lc(e),
      l = lc(t);
    o.forEach(function (f) {
      for (var p = !1, h = r; h < i; h += 1) {
        var v = l[h];
        if (v.key === f.key) {
          r < h &&
            ((n = n.concat(
              l.slice(r, h).map(function (x) {
                return G(G({}, x), {}, { status: rc });
              }),
            )),
            (r = h)),
            n.push(G(G({}, v), {}, { status: ic })),
            (r += 1),
            (p = !0);
          break;
        }
      }
      p || n.push(G(G({}, f), {}, { status: oc }));
    }),
      r < i &&
        (n = n.concat(
          l.slice(r).map(function (f) {
            return G(G({}, f), {}, { status: rc });
          }),
        ));
    var s = {};
    n.forEach(function (f) {
      var p = f.key;
      s[p] = (s[p] || 0) + 1;
    });
    var d = Object.keys(s).filter(function (f) {
      return s[f] > 1;
    });
    return (
      d.forEach(function (f) {
        (n = n.filter(function (p) {
          var h = p.key,
            v = p.status;
          return h !== f || v !== oc;
        })),
          n.forEach(function (p) {
            p.key === f && (p.status = ic);
          });
      }),
      n
    );
  }
  var T1 = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
    I1 = ['status'],
    P1 = [
      'eventProps',
      'visible',
      'children',
      'motionName',
      'motionAppear',
      'motionEnter',
      'motionLeave',
      'motionLeaveImmediately',
      'motionDeadline',
      'removeOnLeave',
      'leavedClassName',
      'onAppearStart',
      'onAppearActive',
      'onAppearEnd',
      'onEnterStart',
      'onEnterActive',
      'onEnterEnd',
      'onLeaveStart',
      'onLeaveActive',
      'onLeaveEnd',
    ];
  function N1(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tr,
      n = (function (r) {
        li(o, r);
        var i = si(o);
        function o() {
          var l;
          zn(this, o);
          for (var s = arguments.length, d = new Array(s), f = 0; f < s; f++) d[f] = arguments[f];
          return (
            (l = i.call.apply(i, [this].concat(d))),
            Ie(Jo(l), 'state', { keyEntities: [] }),
            Ie(Jo(l), 'removeKey', function (p) {
              var h = l.state.keyEntities,
                v = h.map(function (x) {
                  return x.key !== p ? x : G(G({}, x), {}, { status: ac });
                });
              return (
                l.setState({ keyEntities: v }),
                v.filter(function (x) {
                  var y = x.status;
                  return y !== ac;
                }).length
              );
            }),
            l
          );
        }
        return (
          Ln(
            o,
            [
              {
                key: 'render',
                value: function () {
                  var s = this,
                    d = this.state.keyEntities,
                    f = this.props,
                    p = f.component,
                    h = f.children,
                    v = f.onVisibleChanged,
                    x = f.onAllRemoved,
                    y = qt(f, T1),
                    C = p || b.Fragment,
                    O = {};
                  return (
                    P1.forEach(function (E) {
                      (O[E] = y[E]), delete y[E];
                    }),
                    delete y.keys,
                    b.createElement(
                      C,
                      y,
                      d.map(function (E) {
                        var _ = E.status,
                          P = qt(E, I1),
                          N = _ === rc || _ === ic;
                        return b.createElement(
                          t,
                          rt({}, O, {
                            key: P.key,
                            visible: N,
                            eventProps: P,
                            onVisibleChanged: function (u) {
                              if ((v == null || v(u, { key: P.key }), !u)) {
                                var $ = s.removeKey(P.key);
                                $ === 0 && x && x();
                              }
                            },
                          }),
                          h,
                        );
                      }),
                    )
                  );
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function (s, d) {
                  var f = s.keys,
                    p = d.keyEntities,
                    h = lc(f),
                    v = _1(p, h);
                  return {
                    keyEntities: v.filter(function (x) {
                      var y = p.find(function (C) {
                        var O = C.key;
                        return x.key === O;
                      });
                      return !(y && y.status === ac && x.status === oc);
                    }),
                  };
                },
              },
            ],
          ),
          o
        );
      })(b.Component);
    return Ie(n, 'defaultProps', { component: 'div' }), n;
  }
  const R1 = N1(pp),
    { isValidElement: No } = ql;
  function xp(e) {
    return e && No(e) && e.type === b.Fragment;
  }
  function M1(e, t, n) {
    return No(e) ? un(e, typeof n == 'function' ? n(e.props || {}) : n) : t;
  }
  function Gr(e, t) {
    return M1(e, e, t);
  }
  var ye = {
      MAC_ENTER: 3,
      BACKSPACE: 8,
      TAB: 9,
      NUM_CENTER: 12,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PAUSE: 19,
      CAPS_LOCK: 20,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      PRINT_SCREEN: 44,
      INSERT: 45,
      DELETE: 46,
      ZERO: 48,
      ONE: 49,
      TWO: 50,
      THREE: 51,
      FOUR: 52,
      FIVE: 53,
      SIX: 54,
      SEVEN: 55,
      EIGHT: 56,
      NINE: 57,
      QUESTION_MARK: 63,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      META: 91,
      WIN_KEY_RIGHT: 92,
      CONTEXT_MENU: 93,
      NUM_ZERO: 96,
      NUM_ONE: 97,
      NUM_TWO: 98,
      NUM_THREE: 99,
      NUM_FOUR: 100,
      NUM_FIVE: 101,
      NUM_SIX: 102,
      NUM_SEVEN: 103,
      NUM_EIGHT: 104,
      NUM_NINE: 105,
      NUM_MULTIPLY: 106,
      NUM_PLUS: 107,
      NUM_MINUS: 109,
      NUM_PERIOD: 110,
      NUM_DIVISION: 111,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      NUMLOCK: 144,
      SEMICOLON: 186,
      DASH: 189,
      EQUALS: 187,
      COMMA: 188,
      PERIOD: 190,
      SLASH: 191,
      APOSTROPHE: 192,
      SINGLE_QUOTE: 222,
      OPEN_SQUARE_BRACKET: 219,
      BACKSLASH: 220,
      CLOSE_SQUARE_BRACKET: 221,
      WIN_KEY: 224,
      MAC_FF_META: 224,
      WIN_IME: 229,
      isTextModifyingKeyEvent: function (t) {
        var n = t.keyCode;
        if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= ye.F1 && n <= ye.F12)) return !1;
        switch (n) {
          case ye.ALT:
          case ye.CAPS_LOCK:
          case ye.CONTEXT_MENU:
          case ye.CTRL:
          case ye.DOWN:
          case ye.END:
          case ye.ESC:
          case ye.HOME:
          case ye.INSERT:
          case ye.LEFT:
          case ye.MAC_FF_META:
          case ye.META:
          case ye.NUMLOCK:
          case ye.NUM_CENTER:
          case ye.PAGE_DOWN:
          case ye.PAGE_UP:
          case ye.PAUSE:
          case ye.PRINT_SCREEN:
          case ye.RIGHT:
          case ye.SHIFT:
          case ye.UP:
          case ye.WIN_KEY:
          case ye.WIN_KEY_RIGHT:
            return !1;
          default:
            return !0;
        }
      },
      isCharacterKey: function (t) {
        if (
          (t >= ye.ZERO && t <= ye.NINE) ||
          (t >= ye.NUM_ZERO && t <= ye.NUM_MULTIPLY) ||
          (t >= ye.A && t <= ye.Z) ||
          (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
        )
          return !0;
        switch (t) {
          case ye.SPACE:
          case ye.QUESTION_MARK:
          case ye.NUM_PLUS:
          case ye.NUM_MINUS:
          case ye.NUM_PERIOD:
          case ye.NUM_DIVISION:
          case ye.SEMICOLON:
          case ye.DASH:
          case ye.EQUALS:
          case ye.COMMA:
          case ye.PERIOD:
          case ye.SLASH:
          case ye.APOSTROPHE:
          case ye.SINGLE_QUOTE:
          case ye.OPEN_SQUARE_BRACKET:
          case ye.BACKSLASH:
          case ye.CLOSE_SQUARE_BRACKET:
            return !0;
          default:
            return !1;
        }
      },
    },
    A1 = We(function (e, t) {
      var n = e.prefixCls,
        r = e.style,
        i = e.className,
        o = e.duration,
        l = o === void 0 ? 4.5 : o,
        s = e.eventKey,
        d = e.content,
        f = e.closable,
        p = e.closeIcon,
        h = p === void 0 ? 'x' : p,
        v = e.props,
        x = e.onClick,
        y = e.onNoticeClose,
        C = e.times,
        O = we(!1),
        E = ge(O, 2),
        _ = E[0],
        P = E[1],
        N = function () {
          y(s);
        },
        j = function (I) {
          (I.key === 'Enter' || I.code === 'Enter' || I.keyCode === ye.ENTER) && N();
        };
      Fe(
        function () {
          if (!_ && l > 0) {
            var $ = setTimeout(function () {
              N();
            }, l * 1e3);
            return function () {
              clearTimeout($);
            };
          }
        },
        [l, _, C],
      );
      var u = ''.concat(n, '-notice');
      return b.createElement(
        'div',
        rt({}, v, {
          ref: t,
          className: he(u, i, Ie({}, ''.concat(u, '-closable'), f)),
          style: r,
          onMouseEnter: function () {
            P(!0);
          },
          onMouseLeave: function () {
            P(!1);
          },
          onClick: x,
        }),
        b.createElement('div', { className: ''.concat(u, '-content') }, d),
        f &&
          b.createElement(
            'a',
            {
              tabIndex: 0,
              className: ''.concat(u, '-close'),
              onKeyDown: j,
              onClick: function (I) {
                I.preventDefault(), I.stopPropagation(), N();
              },
            },
            h,
          ),
      );
    });
  const wp = A1;
  var D1 = We(function (e, t) {
      var n = e.prefixCls,
        r = n === void 0 ? 'rc-notification' : n,
        i = e.container,
        o = e.motion,
        l = e.maxCount,
        s = e.className,
        d = e.style,
        f = e.onAllRemoved,
        p = we([]),
        h = ge(p, 2),
        v = h[0],
        x = h[1],
        y = function ($) {
          var I,
            M = v.find(function (D) {
              return D.key === $;
            });
          M == null || (I = M.onClose) === null || I === void 0 || I.call(M),
            x(function (D) {
              return D.filter(function (B) {
                return B.key !== $;
              });
            });
        };
      on(t, function () {
        return {
          open: function ($) {
            x(function (I) {
              var M = ze(I),
                D = M.findIndex(function (A) {
                  return A.key === $.key;
                }),
                B = G({}, $);
              if (D >= 0) {
                var F;
                (B.times = (((F = I[D]) === null || F === void 0 ? void 0 : F.times) || 0) + 1), (M[D] = B);
              } else (B.times = 0), M.push(B);
              return l > 0 && M.length > l && (M = M.slice(-l)), M;
            });
          },
          close: function ($) {
            y($);
          },
          destroy: function () {
            x([]);
          },
        };
      });
      var C = we({}),
        O = ge(C, 2),
        E = O[0],
        _ = O[1];
      Fe(
        function () {
          var u = {};
          v.forEach(function ($) {
            var I = $.placement,
              M = I === void 0 ? 'topRight' : I;
            M && ((u[M] = u[M] || []), u[M].push($));
          }),
            Object.keys(E).forEach(function ($) {
              u[$] = u[$] || [];
            }),
            _(u);
        },
        [v],
      );
      var P = function ($) {
          _(function (I) {
            var M = G({}, I),
              D = M[$] || [];
            return D.length || delete M[$], M;
          });
        },
        N = ie(!1);
      if (
        (Fe(
          function () {
            Object.keys(E).length > 0 ? (N.current = !0) : N.current && (f == null || f(), (N.current = !1));
          },
          [E],
        ),
        !i)
      )
        return null;
      var j = Object.keys(E);
      return ia(
        b.createElement(
          b.Fragment,
          null,
          j.map(function (u) {
            var $ = E[u],
              I = $.map(function (D) {
                return { config: D, key: D.key };
              }),
              M = typeof o == 'function' ? o(u) : o;
            return b.createElement(
              R1,
              rt(
                {
                  key: u,
                  className: he(r, ''.concat(r, '-').concat(u), s == null ? void 0 : s(u)),
                  style: d == null ? void 0 : d(u),
                  keys: I,
                  motionAppear: !0,
                },
                M,
                {
                  onAllRemoved: function () {
                    P(u);
                  },
                },
              ),
              function (D, B) {
                var F = D.config,
                  A = D.className,
                  z = D.style,
                  V = F.key,
                  U = F.times,
                  X = F.className,
                  Z = F.style;
                return b.createElement(
                  wp,
                  rt({}, F, {
                    ref: B,
                    prefixCls: r,
                    className: he(A, X),
                    style: G(G({}, z), Z),
                    times: U,
                    key: V,
                    eventKey: V,
                    onNoticeClose: y,
                  }),
                );
              },
            );
          }),
        ),
        i,
      );
    }),
    F1 = ['getContainer', 'motion', 'prefixCls', 'maxCount', 'className', 'style', 'onAllRemoved'],
    j1 = function () {
      return document.body;
    },
    Ep = 0;
  function z1() {
    for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return (
      n.forEach(function (i) {
        i &&
          Object.keys(i).forEach(function (o) {
            var l = i[o];
            l !== void 0 && (e[o] = l);
          });
      }),
      e
    );
  }
  function L1() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.getContainer,
      n = t === void 0 ? j1 : t,
      r = e.motion,
      i = e.prefixCls,
      o = e.maxCount,
      l = e.className,
      s = e.style,
      d = e.onAllRemoved,
      f = qt(e, F1),
      p = we(),
      h = ge(p, 2),
      v = h[0],
      x = h[1],
      y = ie(),
      C = b.createElement(D1, {
        container: v,
        ref: y,
        prefixCls: i,
        motion: r,
        maxCount: o,
        className: l,
        style: s,
        onAllRemoved: d,
      }),
      O = we([]),
      E = ge(O, 2),
      _ = E[0],
      P = E[1],
      N = De(function () {
        return {
          open: function (u) {
            var $ = z1(f, u);
            ($.key === null || $.key === void 0) && (($.key = 'rc-notification-'.concat(Ep)), (Ep += 1)),
              P(function (I) {
                return [].concat(ze(I), [{ type: 'open', config: $ }]);
              });
          },
          close: function (u) {
            P(function ($) {
              return [].concat(ze($), [{ type: 'close', key: u }]);
            });
          },
          destroy: function () {
            P(function (u) {
              return [].concat(ze(u), [{ type: 'destroy' }]);
            });
          },
        };
      }, []);
    return (
      Fe(function () {
        x(n());
      }),
      Fe(
        function () {
          y.current &&
            _.length &&
            (_.forEach(function (j) {
              switch (j.type) {
                case 'open':
                  y.current.open(j.config);
                  break;
                case 'close':
                  y.current.close(j.key);
                  break;
                case 'destroy':
                  y.current.destroy();
                  break;
              }
            }),
            P([]));
        },
        [_],
      ),
      [N, C]
    );
  }
  const H1 = (e) => {
      const {
          componentCls: t,
          iconCls: n,
          boxShadow: r,
          colorText: i,
          colorBgElevated: o,
          colorSuccess: l,
          colorError: s,
          colorWarning: d,
          colorInfo: f,
          fontSizeLG: p,
          motionEaseInOutCirc: h,
          motionDurationSlow: v,
          marginXS: x,
          paddingXS: y,
          borderRadiusLG: C,
          zIndexPopup: O,
          messageNoticeContentPadding: E,
        } = e,
        _ = new St('MessageMoveIn', {
          '0%': { padding: 0, transform: 'translateY(-100%)', opacity: 0 },
          '100%': { padding: y, transform: 'translateY(0)', opacity: 1 },
        }),
        P = new St('MessageMoveOut', {
          '0%': { maxHeight: e.height, padding: y, opacity: 1 },
          '100%': { maxHeight: 0, padding: 0, opacity: 0 },
        });
      return [
        {
          [t]: Object.assign(Object.assign({}, ir(e)), {
            color: i,
            position: 'fixed',
            top: x,
            width: '100%',
            pointerEvents: 'none',
            zIndex: O,
            [`${t}-move-up`]: { animationFillMode: 'forwards' },
            [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: { animationName: _, animationDuration: v, animationPlayState: 'paused', animationTimingFunction: h },
            [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: { animationPlayState: 'running' },
            [`${t}-move-up-leave`]: {
              animationName: P,
              animationDuration: v,
              animationPlayState: 'paused',
              animationTimingFunction: h,
            },
            [`${t}-move-up-leave${t}-move-up-leave-active`]: { animationPlayState: 'running' },
            '&-rtl': { direction: 'rtl', span: { direction: 'rtl' } },
          }),
        },
        {
          [`${t}-notice`]: {
            padding: y,
            textAlign: 'center',
            [`${t}-custom-content > ${n}`]: { verticalAlign: 'text-bottom', marginInlineEnd: x, fontSize: p },
            [`${t}-notice-content`]: {
              display: 'inline-block',
              padding: E,
              background: o,
              borderRadius: C,
              boxShadow: r,
              pointerEvents: 'all',
            },
            [`${t}-success > ${n}`]: { color: l },
            [`${t}-error > ${n}`]: { color: s },
            [`${t}-warning > ${n}`]: { color: d },
            [`
        ${t}-info > ${n},
        ${t}-loading > ${n}`]: { color: f },
          },
        },
        { [`${t}-notice-pure-panel`]: { padding: 0, textAlign: 'start' } },
      ];
    },
    $p = On(
      'Message',
      (e) => {
        const t = jt(e, {
          messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`,
        });
        return [H1(t)];
      },
      (e) => ({ height: 150, zIndexPopup: e.zIndexPopupBase + 10 }),
    );
  function B1(e, t) {
    return { motionName: t ?? `${e}-move-up` };
  }
  function sc(e) {
    let t;
    const n = new Promise((i) => {
        t = e(() => {
          i(!0);
        });
      }),
      r = () => {
        t == null || t();
      };
    return (r.then = (i, o) => n.then(i, o)), (r.promise = n), r;
  }
  var k1 = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
          },
        },
      ],
    },
    name: 'loading',
    theme: 'outlined',
  };
  const V1 = k1;
  var Op = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: V1 }));
  };
  Op.displayName = 'LoadingOutlined';
  const tl = We(Op);
  var W1 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const U1 = {
    info: b.createElement(lp, null),
    success: b.createElement(tp, null),
    error: b.createElement(Xa, null),
    warning: b.createElement(op, null),
    loading: b.createElement(tl, null),
  };
  function _p(e) {
    let { prefixCls: t, type: n, icon: r, children: i } = e;
    return b.createElement(
      'div',
      { className: he(`${t}-custom-content`, `${t}-${n}`) },
      r || U1[n],
      b.createElement('span', null, i),
    );
  }
  function G1(e) {
    const { prefixCls: t, className: n, type: r, icon: i, content: o } = e,
      l = W1(e, ['prefixCls', 'className', 'type', 'icon', 'content']),
      { getPrefixCls: s } = je(xt),
      d = t || s('message'),
      [, f] = $p(d);
    return b.createElement(
      wp,
      Object.assign({}, l, {
        prefixCls: d,
        className: he(n, f, `${d}-notice-pure-panel`),
        eventKey: 'pure',
        duration: null,
        content: b.createElement(_p, { prefixCls: d, type: r, icon: i }, o),
      }),
    );
  }
  var q1 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const K1 = 8,
    X1 = 3,
    Y1 = We((e, t) => {
      const {
          top: n,
          prefixCls: r,
          getContainer: i,
          maxCount: o,
          duration: l = X1,
          rtl: s,
          transitionName: d,
          onAllRemoved: f,
        } = e,
        { getPrefixCls: p, getPopupContainer: h } = je(xt),
        v = r || p('message'),
        [, x] = $p(v),
        y = () => ({ left: '50%', transform: 'translateX(-50%)', top: n ?? K1 }),
        C = () => he(x, s ? `${v}-rtl` : ''),
        O = () => B1(v, d),
        E = b.createElement(
          'span',
          { className: `${v}-close-x` },
          b.createElement(Ya, { className: `${v}-close-icon` }),
        ),
        [_, P] = L1({
          prefixCls: v,
          style: y,
          className: C,
          motion: O,
          closable: !1,
          closeIcon: E,
          duration: l,
          getContainer: () => (i == null ? void 0 : i()) || (h == null ? void 0 : h()) || document.body,
          maxCount: o,
          onAllRemoved: f,
        });
      return on(t, () => Object.assign(Object.assign({}, _), { prefixCls: v, hashId: x })), P;
    });
  let Tp = 0;
  function Ip(e) {
    const t = ie(null);
    return [
      De(() => {
        const r = (d) => {
            var f;
            (f = t.current) === null || f === void 0 || f.close(d);
          },
          i = (d) => {
            if (!t.current) {
              const j = () => {};
              return (j.then = () => {}), j;
            }
            const { open: f, prefixCls: p, hashId: h } = t.current,
              v = `${p}-notice`,
              { content: x, icon: y, type: C, key: O, className: E, onClose: _ } = d,
              P = q1(d, ['content', 'icon', 'type', 'key', 'className', 'onClose']);
            let N = O;
            return (
              N == null && ((Tp += 1), (N = `antd-message-${Tp}`)),
              sc(
                (j) => (
                  f(
                    Object.assign(Object.assign({}, P), {
                      key: N,
                      content: b.createElement(_p, { prefixCls: p, type: C, icon: y }, x),
                      placement: 'top',
                      className: he(C && `${v}-${C}`, h, E),
                      onClose: () => {
                        _ == null || _(), j();
                      },
                    }),
                  ),
                  () => {
                    r(N);
                  }
                ),
              )
            );
          },
          l = {
            open: i,
            destroy: (d) => {
              var f;
              d !== void 0 ? r(d) : (f = t.current) === null || f === void 0 || f.destroy();
            },
          };
        return (
          ['info', 'success', 'warning', 'error', 'loading'].forEach((d) => {
            const f = (p, h, v) => {
              let x;
              p && typeof p == 'object' && 'content' in p ? (x = p) : (x = { content: p });
              let y, C;
              typeof h == 'function' ? (C = h) : ((y = h), (C = v));
              const O = Object.assign(Object.assign({ onClose: C, duration: y }, x), { type: d });
              return i(O);
            };
            l[d] = f;
          }),
          l
        );
      }, []),
      b.createElement(Y1, Object.assign({ key: 'message-holder' }, e, { ref: t })),
    ];
  }
  function Q1(e) {
    return Ip(e);
  }
  function J1() {
    const [e, t] = we([]),
      n = Qt(
        (r) => (
          t((i) => [].concat(ze(i), [r])),
          () => {
            t((i) => i.filter((o) => o !== r));
          }
        ),
        [],
      );
    return [e, n];
  }
  var Ro = G({}, ql),
    Z1 = Ro.version,
    eS = Ro.render,
    tS = Ro.unmountComponentAtNode,
    nl;
  try {
    var nS = Number((Z1 || '').split('.')[0]);
    nS >= 18 && (nl = Ro.createRoot);
  } catch {}
  function Pp(e) {
    var t = Ro.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    t && Et(t) === 'object' && (t.usingClientEntryPoint = e);
  }
  var rl = '__rc_react_root__';
  function rS(e, t) {
    Pp(!0);
    var n = t[rl] || nl(t);
    Pp(!1), n.render(e), (t[rl] = n);
  }
  function iS(e, t) {
    eS(e, t);
  }
  function cc(e, t) {
    if (nl) {
      rS(e, t);
      return;
    }
    iS(e, t);
  }
  function oS(e) {
    return uc.apply(this, arguments);
  }
  function uc() {
    return (
      (uc = Vi(
        Un().mark(function e(t) {
          return Un().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return r.abrupt(
                    'return',
                    Promise.resolve().then(function () {
                      var i;
                      (i = t[rl]) === null || i === void 0 || i.unmount(), delete t[rl];
                    }),
                  );
                case 1:
                case 'end':
                  return r.stop();
              }
          }, e);
        }),
      )),
      uc.apply(this, arguments)
    );
  }
  function aS(e) {
    tS(e);
  }
  function Np(e) {
    return dc.apply(this, arguments);
  }
  function dc() {
    return (
      (dc = Vi(
        Un().mark(function e(t) {
          return Un().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  if (nl === void 0) {
                    r.next = 2;
                    break;
                  }
                  return r.abrupt('return', oS(t));
                case 2:
                  aS(t);
                case 3:
                case 'end':
                  return r.stop();
              }
          }, e);
        }),
      )),
      dc.apply(this, arguments)
    );
  }
  const Zi = (e, t) => {
      const n = je(Ms),
        r = De(() => {
          var o;
          const l = t || Gi[e],
            s = (o = n == null ? void 0 : n[e]) !== null && o !== void 0 ? o : {};
          return Object.assign(Object.assign({}, typeof l == 'function' ? l() : l), s || {});
        }, [e, t, n]),
        i = De(() => {
          const o = n == null ? void 0 : n.locale;
          return n != null && n.exist && !o ? Gi.locale : o;
        }, [n]);
      return [r, i];
    },
    lS = (e) => {
      const { componentCls: t } = e;
      return {
        [t]: {
          display: 'inline-flex',
          '&-block': { display: 'flex', width: '100%' },
          '&-vertical': { flexDirection: 'column' },
        },
      };
    },
    sS = (e) => {
      const { componentCls: t } = e;
      return {
        [t]: {
          display: 'inline-flex',
          '&-rtl': { direction: 'rtl' },
          '&-vertical': { flexDirection: 'column' },
          '&-align': {
            flexDirection: 'column',
            '&-center': { alignItems: 'center' },
            '&-start': { alignItems: 'flex-start' },
            '&-end': { alignItems: 'flex-end' },
            '&-baseline': { alignItems: 'baseline' },
          },
          [`${t}-item`]: { '&:empty': { display: 'none' } },
        },
      };
    },
    Rp = On('Space', (e) => [sS(e), lS(e)]);
  var Mp =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const il = b.createContext(null),
    Ap = (e, t) => {
      const n = je(il),
        r = De(() => {
          if (!n) return '';
          const { compactDirection: i, isFirstItem: o, isLastItem: l } = n,
            s = i === 'vertical' ? '-vertical-' : '-';
          return he({
            [`${e}-compact${s}item`]: !0,
            [`${e}-compact${s}first-item`]: o,
            [`${e}-compact${s}last-item`]: l,
            [`${e}-compact${s}item-rtl`]: t === 'rtl',
          });
        }, [e, t, n]);
      return {
        compactSize: n == null ? void 0 : n.compactSize,
        compactDirection: n == null ? void 0 : n.compactDirection,
        compactItemClassnames: r,
      };
    },
    Dp = (e) => {
      let { children: t } = e;
      return b.createElement(il.Provider, { value: null }, t);
    },
    cS = (e) => {
      var { children: t } = e,
        n = Mp(e, ['children']);
      return b.createElement(il.Provider, { value: n }, t);
    },
    uS = (e) => {
      const { getPrefixCls: t, direction: n } = je(xt),
        { size: r = 'middle', direction: i, block: o, prefixCls: l, className: s, rootClassName: d, children: f } = e,
        p = Mp(e, ['size', 'direction', 'block', 'prefixCls', 'className', 'rootClassName', 'children']),
        h = t('space-compact', l),
        [v, x] = Rp(h),
        y = he(h, x, { [`${h}-rtl`]: n === 'rtl', [`${h}-block`]: o, [`${h}-vertical`]: i === 'vertical' }, s, d),
        C = je(il),
        O = wr(f),
        E = De(
          () =>
            O.map((_, P) => {
              const N = (_ && _.key) || `${h}-item-${P}`;
              return b.createElement(
                cS,
                {
                  key: N,
                  compactSize: r,
                  compactDirection: i,
                  isFirstItem: P === 0 && (!C || (C == null ? void 0 : C.isFirstItem)),
                  isLastItem: P === O.length - 1 && (!C || (C == null ? void 0 : C.isLastItem)),
                },
                _,
              );
            }),
          [r, O, C],
        );
      return O.length === 0 ? null : v(b.createElement('div', Object.assign({ className: y }, p), E));
    },
    dS = function (e) {
      if (!e) return !1;
      if (e instanceof HTMLElement && e.offsetParent) return !0;
      if (e instanceof SVGGraphicsElement && e.getBBox) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height;
        if (n || r) return !0;
      }
      if (e instanceof HTMLElement && e.getBoundingClientRect) {
        var i = e.getBoundingClientRect(),
          o = i.width,
          l = i.height;
        if (o || l) return !0;
      }
      return !1;
    },
    fS = (e) => {
      const { componentCls: t, colorPrimary: n } = e;
      return {
        [t]: {
          position: 'absolute',
          background: 'transparent',
          pointerEvents: 'none',
          boxSizing: 'border-box',
          color: `var(--wave-color, ${n})`,
          boxShadow: '0 0 0 0 currentcolor',
          opacity: 0.2,
          '&.wave-motion-appear': {
            transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(','),
            '&-active': { boxShadow: '0 0 0 6px currentcolor', opacity: 0 },
          },
        },
      };
    },
    pS = On('Wave', (e) => [fS(e)]);
  function gS(e) {
    const t = (e || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
    return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
  }
  function fc(e) {
    return (
      e &&
      e !== '#fff' &&
      e !== '#ffffff' &&
      e !== 'rgb(255, 255, 255)' &&
      e !== 'rgba(255, 255, 255, 1)' &&
      gS(e) &&
      !/rgba\((?:\d*, ){3}0\)/.test(e) &&
      e !== 'transparent'
    );
  }
  function hS(e) {
    const { borderTopColor: t, borderColor: n, backgroundColor: r } = getComputedStyle(e);
    return fc(t) ? t : fc(n) ? n : fc(r) ? r : null;
  }
  function pc(e) {
    return Number.isNaN(e) ? 0 : e;
  }
  const mS = (e) => {
    const { className: t, target: n } = e,
      r = ie(null),
      [i, o] = we(null),
      [l, s] = we([]),
      [d, f] = we(0),
      [p, h] = we(0),
      [v, x] = we(0),
      [y, C] = we(0),
      [O, E] = we(!1),
      _ = { left: d, top: p, width: v, height: y, borderRadius: l.map((N) => `${N}px`).join(' ') };
    i && (_['--wave-color'] = i);
    function P() {
      const N = getComputedStyle(n);
      o(hS(n));
      const j = N.position === 'static',
        { borderLeftWidth: u, borderTopWidth: $ } = N;
      f(j ? n.offsetLeft : pc(-parseFloat(u))),
        h(j ? n.offsetTop : pc(-parseFloat($))),
        x(n.offsetWidth),
        C(n.offsetHeight);
      const {
        borderTopLeftRadius: I,
        borderTopRightRadius: M,
        borderBottomLeftRadius: D,
        borderBottomRightRadius: B,
      } = N;
      s([I, M, B, D].map((F) => pc(parseFloat(F))));
    }
    return (
      Fe(() => {
        if (n) {
          const N = Sn(() => {
            P(), E(!0);
          });
          let j;
          return (
            typeof ResizeObserver < 'u' && ((j = new ResizeObserver(P)), j.observe(n)),
            () => {
              Sn.cancel(N), j == null || j.disconnect();
            }
          );
        }
      }, []),
      O
        ? b.createElement(
            Tr,
            {
              visible: !0,
              motionAppear: !0,
              motionName: 'wave-motion',
              motionDeadline: 5e3,
              onAppearEnd: (N, j) => {
                var u;
                if (j.deadline || j.propertyName === 'opacity') {
                  const $ = (u = r.current) === null || u === void 0 ? void 0 : u.parentElement;
                  Np($).then(() => {
                    var I;
                    (I = $.parentElement) === null || I === void 0 || I.removeChild($);
                  });
                }
                return !1;
              },
            },
            (N) => {
              let { className: j } = N;
              return b.createElement('div', { ref: r, className: he(t, j), style: _ });
            },
          )
        : null
    );
  };
  function vS(e, t) {
    const n = document.createElement('div');
    (n.style.position = 'absolute'),
      (n.style.left = '0px'),
      (n.style.top = '0px'),
      e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild),
      cc(b.createElement(mS, { target: e, className: t }), n);
  }
  function bS(e, t) {
    function n() {
      const r = e.current;
      vS(r, t);
    }
    return n;
  }
  const yS = (e) => {
    const { children: t, disabled: n } = e,
      { getPrefixCls: r } = je(xt),
      i = ie(null),
      o = r('wave'),
      [, l] = pS(o),
      s = bS(i, he(o, l));
    if (
      (be.useEffect(() => {
        const f = i.current;
        if (!f || f.nodeType !== 1 || n) return;
        const p = (h) => {
          h.target.tagName === 'INPUT' ||
            !dS(h.target) ||
            !f.getAttribute ||
            f.getAttribute('disabled') ||
            f.disabled ||
            f.className.includes('disabled') ||
            f.className.includes('-leave') ||
            s();
        };
        return (
          f.addEventListener('click', p, !0),
          () => {
            f.removeEventListener('click', p, !0);
          }
        );
      }, [n]),
      !be.isValidElement(t))
    )
      return t ?? null;
    const d = mo(t) ? di(t.ref, i) : i;
    return Gr(t, { ref: d });
  };
  var CS =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const Fp = b.createContext(void 0),
    SS = (e) => {
      const { getPrefixCls: t, direction: n } = je(xt),
        { prefixCls: r, size: i, className: o } = e,
        l = CS(e, ['prefixCls', 'size', 'className']),
        s = t('btn-group', r),
        [, , d] = bi();
      let f = '';
      switch (i) {
        case 'large':
          f = 'lg';
          break;
        case 'small':
          f = 'sm';
          break;
      }
      const p = he(s, { [`${s}-${f}`]: f, [`${s}-rtl`]: n === 'rtl' }, o, d);
      return b.createElement(Fp.Provider, { value: i }, b.createElement('div', Object.assign({}, l, { className: p })));
    },
    jp = /^[\u4e00-\u9fa5]{2}$/,
    gc = jp.test.bind(jp);
  function xS(e) {
    return typeof e == 'string';
  }
  function hc(e) {
    return e === 'text' || e === 'link';
  }
  function wS(e, t) {
    if (e == null) return;
    const n = t ? ' ' : '';
    return typeof e != 'string' && typeof e != 'number' && xS(e.type) && gc(e.props.children)
      ? Gr(e, { children: e.props.children.split('').join(n) })
      : typeof e == 'string'
      ? gc(e)
        ? be.createElement('span', null, e.split('').join(n))
        : be.createElement('span', null, e)
      : xp(e)
      ? be.createElement('span', null, e)
      : e;
  }
  function ES(e, t) {
    let n = !1;
    const r = [];
    return (
      be.Children.forEach(e, (i) => {
        const o = typeof i,
          l = o === 'string' || o === 'number';
        if (n && l) {
          const s = r.length - 1,
            d = r[s];
          r[s] = `${d}${i}`;
        } else r.push(i);
        n = l;
      }),
      be.Children.map(r, (i) => wS(i, t))
    );
  }
  const mc = () => ({ width: 0, opacity: 0, transform: 'scale(0)' }),
    vc = (e) => ({ width: e.scrollWidth, opacity: 1, transform: 'scale(1)' }),
    $S = (e) => {
      let { prefixCls: t, loading: n, existIcon: r } = e;
      const i = !!n;
      return r
        ? be.createElement('span', { className: `${t}-loading-icon` }, be.createElement(tl, null))
        : be.createElement(
            Tr,
            {
              visible: i,
              motionName: `${t}-loading-icon-motion`,
              removeOnLeave: !0,
              onAppearStart: mc,
              onAppearActive: vc,
              onEnterStart: mc,
              onEnterActive: vc,
              onLeaveStart: vc,
              onLeaveActive: mc,
            },
            (o, l) => {
              let { className: s, style: d } = o;
              return be.createElement(
                'span',
                { className: `${t}-loading-icon`, style: d, ref: l },
                be.createElement(tl, { className: s }),
              );
            },
          );
    },
    zp = (e, t) => ({
      [`> span, > ${e}`]: {
        '&:not(:last-child)': { [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineEndColor: t } } },
        '&:not(:first-child)': { [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineStartColor: t } } },
      },
    }),
    OS = (e) => {
      const { componentCls: t, fontSize: n, lineWidth: r, colorPrimaryHover: i, colorErrorHover: o } = e;
      return {
        [`${t}-group`]: [
          {
            position: 'relative',
            display: 'inline-flex',
            [`> span, > ${t}`]: {
              '&:not(:last-child)': { [`&, & > ${t}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 } },
              '&:not(:first-child)': {
                marginInlineStart: -r,
                [`&, & > ${t}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
              },
            },
            [t]: {
              position: 'relative',
              zIndex: 1,
              [`&:hover,
          &:focus,
          &:active`]: { zIndex: 2 },
              '&[disabled]': { zIndex: 0 },
            },
            [`${t}-icon-only`]: { fontSize: n },
          },
          zp(`${t}-primary`, i),
          zp(`${t}-danger`, o),
        ],
      };
    };
  function _S(e, t, n) {
    const { focusElCls: r, focus: i, borderElCls: o } = n,
      l = o ? '> *' : '',
      s = ['hover', i ? 'focus' : null, 'active']
        .filter(Boolean)
        .map((d) => `&:${d} ${l}`)
        .join(',');
    return {
      [`&-item:not(${t}-last-item)`]: { marginInlineEnd: -e.lineWidth },
      '&-item': Object.assign(Object.assign({ [s]: { zIndex: 2 } }, r ? { [`&${r}`]: { zIndex: 2 } } : {}), {
        [`&[disabled] ${l}`]: { zIndex: 0 },
      }),
    };
  }
  function TS(e, t, n) {
    const { borderElCls: r } = n,
      i = r ? `> ${r}` : '';
    return {
      [`&-item:not(${t}-first-item):not(${t}-last-item) ${i}`]: { borderRadius: 0 },
      [`&-item:not(${t}-last-item)${t}-first-item`]: {
        [`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
      },
      [`&-item:not(${t}-first-item)${t}-last-item`]: {
        [`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
      },
    };
  }
  function bc(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { focus: !0 };
    const { componentCls: n } = e,
      r = `${n}-compact`;
    return { [r]: Object.assign(Object.assign({}, _S(e, r, t)), TS(n, r, t)) };
  }
  function IS(e, t) {
    return {
      [`&-item:not(${t}-last-item)`]: { marginBottom: -e.lineWidth },
      '&-item': { '&:hover,&:focus,&:active': { zIndex: 2 }, '&[disabled]': { zIndex: 0 } },
    };
  }
  function PS(e, t) {
    return {
      [`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
      [`&-item${t}-first-item:not(${t}-last-item)`]: {
        [`&, &${e}-sm, &${e}-lg`]: { borderEndEndRadius: 0, borderEndStartRadius: 0 },
      },
      [`&-item${t}-last-item:not(${t}-first-item)`]: {
        [`&, &${e}-sm, &${e}-lg`]: { borderStartStartRadius: 0, borderStartEndRadius: 0 },
      },
    };
  }
  function NS(e) {
    const t = `${e.componentCls}-compact-vertical`;
    return { [t]: Object.assign(Object.assign({}, IS(e, t)), PS(e.componentCls, t)) };
  }
  const RS = (e) => {
      const { componentCls: t, iconCls: n } = e;
      return {
        [t]: {
          outline: 'none',
          position: 'relative',
          display: 'inline-block',
          fontWeight: 400,
          whiteSpace: 'nowrap',
          textAlign: 'center',
          backgroundImage: 'none',
          backgroundColor: 'transparent',
          border: `${e.lineWidth}px ${e.lineType} transparent`,
          cursor: 'pointer',
          transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
          userSelect: 'none',
          touchAction: 'manipulation',
          lineHeight: e.lineHeight,
          color: e.colorText,
          '> span': { display: 'inline-block' },
          [`> ${n} + span, > span + ${n}`]: { marginInlineStart: e.marginXS },
          '> a': { color: 'currentColor' },
          '&:not(:disabled)': Object.assign({}, Gs(e)),
          [`&-icon-only${t}-compact-item`]: { flex: 'none' },
          [`&-compact-item${t}-primary`]: {
            [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
              position: 'relative',
              '&:before': {
                position: 'absolute',
                top: -e.lineWidth,
                insetInlineStart: -e.lineWidth,
                display: 'inline-block',
                width: e.lineWidth,
                height: `calc(100% + ${e.lineWidth * 2}px)`,
                backgroundColor: e.colorPrimaryHover,
                content: '""',
              },
            },
          },
          '&-compact-vertical-item': {
            [`&${t}-primary`]: {
              [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
                position: 'relative',
                '&:before': {
                  position: 'absolute',
                  top: -e.lineWidth,
                  insetInlineStart: -e.lineWidth,
                  display: 'inline-block',
                  width: `calc(100% + ${e.lineWidth * 2}px)`,
                  height: e.lineWidth,
                  backgroundColor: e.colorPrimaryHover,
                  content: '""',
                },
              },
            },
          },
        },
      };
    },
    Ir = (e, t) => ({ '&:not(:disabled)': { '&:hover': e, '&:active': t } }),
    MS = (e) => ({ minWidth: e.controlHeight, paddingInlineStart: 0, paddingInlineEnd: 0, borderRadius: '50%' }),
    AS = (e) => ({
      borderRadius: e.controlHeight,
      paddingInlineStart: e.controlHeight / 2,
      paddingInlineEnd: e.controlHeight / 2,
    }),
    yc = (e) => ({
      cursor: 'not-allowed',
      borderColor: e.colorBorder,
      color: e.colorTextDisabled,
      backgroundColor: e.colorBgContainerDisabled,
      boxShadow: 'none',
    }),
    ol = (e, t, n, r, i, o, l) => ({
      [`&${e}-background-ghost`]: Object.assign(
        Object.assign(
          { color: t || void 0, backgroundColor: 'transparent', borderColor: n || void 0, boxShadow: 'none' },
          Ir(
            Object.assign({ backgroundColor: 'transparent' }, o),
            Object.assign({ backgroundColor: 'transparent' }, l),
          ),
        ),
        { '&:disabled': { cursor: 'not-allowed', color: r || void 0, borderColor: i || void 0 } },
      ),
    }),
    Cc = (e) => ({ '&:disabled': Object.assign({}, yc(e)) }),
    Lp = (e) => Object.assign({}, Cc(e)),
    al = (e) => ({ '&:disabled': { cursor: 'not-allowed', color: e.colorTextDisabled } }),
    Hp = (e) =>
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, Lp(e)), {
              backgroundColor: e.colorBgContainer,
              borderColor: e.colorBorder,
              boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
            }),
            Ir(
              { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
              { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive },
            ),
          ),
          ol(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder),
        ),
        {
          [`&${e.componentCls}-dangerous`]: Object.assign(
            Object.assign(
              Object.assign(
                { color: e.colorError, borderColor: e.colorError },
                Ir(
                  { color: e.colorErrorHover, borderColor: e.colorErrorBorderHover },
                  { color: e.colorErrorActive, borderColor: e.colorErrorActive },
                ),
              ),
              ol(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder),
            ),
            Cc(e),
          ),
        },
      ),
    DS = (e) =>
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, Lp(e)), {
              color: e.colorTextLightSolid,
              backgroundColor: e.colorPrimary,
              boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
            }),
            Ir(
              { color: e.colorTextLightSolid, backgroundColor: e.colorPrimaryHover },
              { color: e.colorTextLightSolid, backgroundColor: e.colorPrimaryActive },
            ),
          ),
          ol(
            e.componentCls,
            e.colorPrimary,
            e.colorPrimary,
            e.colorTextDisabled,
            e.colorBorder,
            { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
            { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive },
          ),
        ),
        {
          [`&${e.componentCls}-dangerous`]: Object.assign(
            Object.assign(
              Object.assign(
                { backgroundColor: e.colorError, boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}` },
                Ir({ backgroundColor: e.colorErrorHover }, { backgroundColor: e.colorErrorActive }),
              ),
              ol(
                e.componentCls,
                e.colorError,
                e.colorError,
                e.colorTextDisabled,
                e.colorBorder,
                { color: e.colorErrorHover, borderColor: e.colorErrorHover },
                { color: e.colorErrorActive, borderColor: e.colorErrorActive },
              ),
            ),
            Cc(e),
          ),
        },
      ),
    FS = (e) => Object.assign(Object.assign({}, Hp(e)), { borderStyle: 'dashed' }),
    jS = (e) =>
      Object.assign(
        Object.assign(
          Object.assign({ color: e.colorLink }, Ir({ color: e.colorLinkHover }, { color: e.colorLinkActive })),
          al(e),
        ),
        {
          [`&${e.componentCls}-dangerous`]: Object.assign(
            Object.assign({ color: e.colorError }, Ir({ color: e.colorErrorHover }, { color: e.colorErrorActive })),
            al(e),
          ),
        },
      ),
    zS = (e) =>
      Object.assign(
        Object.assign(
          Object.assign(
            {},
            Ir(
              { color: e.colorText, backgroundColor: e.colorBgTextHover },
              { color: e.colorText, backgroundColor: e.colorBgTextActive },
            ),
          ),
          al(e),
        ),
        {
          [`&${e.componentCls}-dangerous`]: Object.assign(
            Object.assign({ color: e.colorError }, al(e)),
            Ir(
              { color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
              { color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
            ),
          ),
        },
      ),
    LS = (e) => Object.assign(Object.assign({}, yc(e)), { [`&${e.componentCls}:hover`]: Object.assign({}, yc(e)) }),
    HS = (e) => {
      const { componentCls: t } = e;
      return {
        [`${t}-default`]: Hp(e),
        [`${t}-primary`]: DS(e),
        [`${t}-dashed`]: FS(e),
        [`${t}-link`]: jS(e),
        [`${t}-text`]: zS(e),
        [`${t}-disabled`]: LS(e),
      };
    },
    Sc = function (e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
      const {
          componentCls: n,
          iconCls: r,
          controlHeight: i,
          fontSize: o,
          lineHeight: l,
          lineWidth: s,
          borderRadius: d,
          buttonPaddingHorizontal: f,
        } = e,
        p = Math.max(0, (i - o * l) / 2 - s),
        h = f - s,
        v = `${n}-icon-only`;
      return [
        {
          [`${n}${t}`]: {
            fontSize: o,
            height: i,
            padding: `${p}px ${h}px`,
            borderRadius: d,
            [`&${v}`]: {
              width: i,
              paddingInlineStart: 0,
              paddingInlineEnd: 0,
              [`&${n}-round`]: { width: 'auto' },
              '> span': { transform: 'scale(1.143)' },
            },
            [`&${n}-loading`]: { opacity: e.opacityLoading, cursor: 'default' },
            [`${n}-loading-icon`]: {
              transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
            },
            [`&:not(${v}) ${n}-loading-icon > ${r}`]: { marginInlineEnd: e.marginXS },
          },
        },
        { [`${n}${n}-circle${t}`]: MS(e) },
        { [`${n}${n}-round${t}`]: AS(e) },
      ];
    },
    BS = (e) => Sc(e),
    kS = (e) => {
      const t = jt(e, {
        controlHeight: e.controlHeightSM,
        padding: e.paddingXS,
        buttonPaddingHorizontal: 8,
        borderRadius: e.borderRadiusSM,
      });
      return Sc(t, `${e.componentCls}-sm`);
    },
    VS = (e) => {
      const t = jt(e, { controlHeight: e.controlHeightLG, fontSize: e.fontSizeLG, borderRadius: e.borderRadiusLG });
      return Sc(t, `${e.componentCls}-lg`);
    },
    WS = (e) => {
      const { componentCls: t } = e;
      return { [t]: { [`&${t}-block`]: { width: '100%' } } };
    },
    US = On('Button', (e) => {
      const { controlTmpOutline: t, paddingContentHorizontal: n } = e,
        r = jt(e, { colorOutlineDefault: t, buttonPaddingHorizontal: n });
      return [RS(r), kS(r), BS(r), VS(r), WS(r), HS(r), OS(r), bc(e, { focus: !1 }), NS(e)];
    });
  var GS =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  function Bp(e) {
    return e === 'danger' ? { danger: !0 } : { type: e };
  }
  function qS(e) {
    if (typeof e == 'object' && e) {
      const t = e == null ? void 0 : e.delay;
      return { loading: !1, delay: !Number.isNaN(t) && typeof t == 'number' ? t : 0 };
    }
    return { loading: !!e, delay: 0 };
  }
  const xc = We((e, t) => {
    const {
        loading: n = !1,
        prefixCls: r,
        type: i = 'default',
        danger: o,
        shape: l = 'default',
        size: s,
        disabled: d,
        className: f,
        rootClassName: p,
        children: h,
        icon: v,
        ghost: x = !1,
        block: y = !1,
        htmlType: C = 'button',
      } = e,
      O = GS(e, [
        'loading',
        'prefixCls',
        'type',
        'danger',
        'shape',
        'size',
        'disabled',
        'className',
        'rootClassName',
        'children',
        'icon',
        'ghost',
        'block',
        'htmlType',
      ]),
      { getPrefixCls: E, autoInsertSpaceInButton: _, direction: P } = je(xt),
      N = E('btn', r),
      [j, u] = US(N),
      $ = je(Ki),
      I = je(Wa),
      M = d ?? I,
      D = je(Fp),
      B = De(() => qS(n), [n]),
      [F, A] = we(B.loading),
      [z, V] = we(!1),
      U = t || b.createRef(),
      X = () => ui.count(h) === 1 && !v && !hc(i),
      Z = () => {
        if (!U || !U.current || _ === !1) return;
        const ne = U.current.textContent;
        X() && gc(ne) ? z || V(!0) : z && V(!1);
      };
    Fe(() => {
      let ne = null;
      B.delay > 0
        ? (ne = window.setTimeout(() => {
            (ne = null), A(!0);
          }, B.delay))
        : A(B.loading);
      function Te() {
        ne && (window.clearTimeout(ne), (ne = null));
      }
      return Te;
    }, [B]),
      Fe(Z, [U]);
    const ee = (ne) => {
        const { onClick: Te } = e;
        if (F || M) {
          ne.preventDefault();
          return;
        }
        Te == null || Te(ne);
      },
      le = _ !== !1,
      { compactSize: ce, compactItemClassnames: xe } = Ap(N, P),
      Q = { large: 'lg', small: 'sm', middle: void 0 },
      Ce = ce || D || s || $,
      Se = (Ce && Q[Ce]) || '',
      me = F ? 'loading' : v,
      se = ji(O, ['navigate']),
      $e = se.href !== void 0 && M,
      Ee = he(
        N,
        u,
        {
          [`${N}-${l}`]: l !== 'default' && l,
          [`${N}-${i}`]: i,
          [`${N}-${Se}`]: Se,
          [`${N}-icon-only`]: !h && h !== 0 && !!me,
          [`${N}-background-ghost`]: x && !hc(i),
          [`${N}-loading`]: F,
          [`${N}-two-chinese-chars`]: z && le && !F,
          [`${N}-block`]: y,
          [`${N}-dangerous`]: !!o,
          [`${N}-rtl`]: P === 'rtl',
          [`${N}-disabled`]: $e,
        },
        xe,
        f,
        p,
      ),
      Me = v && !F ? v : b.createElement($S, { existIcon: !!v, prefixCls: N, loading: !!F }),
      Le = h || h === 0 ? ES(h, X() && le) : null;
    if (se.href !== void 0)
      return j(b.createElement('a', Object.assign({}, se, { className: Ee, onClick: ee, ref: U }), Me, Le));
    let Re = b.createElement(
      'button',
      Object.assign({}, O, { type: C, className: Ee, onClick: ee, disabled: M, ref: U }),
      Me,
      Le,
    );
    return hc(i) || (Re = b.createElement(yS, { disabled: !!F }, Re)), j(Re);
  });
  (xc.Group = SS), (xc.__ANT_BUTTON = !0);
  const wc = xc;
  function kp(e) {
    return !!(e && e.then);
  }
  const Vp = (e) => {
      const {
          type: t,
          children: n,
          prefixCls: r,
          buttonProps: i,
          close: o,
          autoFocus: l,
          emitEvent: s,
          quitOnNullishReturnValue: d,
          actionFn: f,
        } = e,
        p = ie(!1),
        h = ie(null),
        [v, x] = Ur(!1),
        y = function () {
          o == null || o.apply(void 0, arguments);
        };
      Fe(() => {
        let E = null;
        return (
          l &&
            (E = setTimeout(() => {
              var _;
              (_ = h.current) === null || _ === void 0 || _.focus();
            })),
          () => {
            E && clearTimeout(E);
          }
        );
      }, []);
      const C = (E) => {
          kp(E) &&
            (x(!0),
            E.then(
              function () {
                y.apply(void 0, arguments), (p.current = !1);
              },
              (_) => (x(!1, !0), (p.current = !1), Promise.reject(_)),
            ));
        },
        O = (E) => {
          if (p.current) return;
          if (((p.current = !0), !f)) {
            y();
            return;
          }
          let _;
          if (s) {
            if (((_ = f(E)), d && !kp(_))) {
              (p.current = !1), y(E);
              return;
            }
          } else if (f.length) (_ = f(o)), (p.current = !1);
          else if (((_ = f()), !_)) {
            y();
            return;
          }
          C(_);
        };
      return b.createElement(wc, Object.assign({}, Bp(t), { onClick: O, loading: v, prefixCls: r }, i, { ref: h }), n);
    },
    KS = (e) => (e !== void 0 && (e === 'topLeft' || e === 'topRight') ? 'slide-down' : 'slide-up'),
    qr = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`);
  var Wp = b.createContext(null),
    Wt = An() ? zr : Fe,
    Up = function (t, n) {
      var r = ie(!0);
      Wt(function () {
        if (!r.current) return t();
      }, n),
        Wt(function () {
          return (
            (r.current = !1),
            function () {
              r.current = !0;
            }
          );
        }, []);
    },
    Gp = [];
  function XS(e, t) {
    var n = we(function () {
        if (!An()) return null;
        var y = document.createElement('div');
        return y;
      }),
      r = ge(n, 1),
      i = r[0],
      o = ie(!1),
      l = je(Wp),
      s = we(Gp),
      d = ge(s, 2),
      f = d[0],
      p = d[1],
      h =
        l ||
        (o.current
          ? void 0
          : function (y) {
              p(function (C) {
                var O = [y].concat(ze(C));
                return O;
              });
            });
    function v() {
      i.parentElement || document.body.appendChild(i), (o.current = !0);
    }
    function x() {
      var y;
      (y = i.parentElement) === null || y === void 0 || y.removeChild(i), (o.current = !1);
    }
    return (
      Wt(
        function () {
          return e ? (l ? l(v) : v()) : x(), x;
        },
        [e],
      ),
      Wt(
        function () {
          f.length &&
            (f.forEach(function (y) {
              return y();
            }),
            p(Gp));
        },
        [f],
      ),
      [i, h]
    );
  }
  var Ec;
  function YS(e) {
    if (typeof document > 'u') return 0;
    if (e || Ec === void 0) {
      var t = document.createElement('div');
      (t.style.width = '100%'), (t.style.height = '200px');
      var n = document.createElement('div'),
        r = n.style;
      (r.position = 'absolute'),
        (r.top = '0'),
        (r.left = '0'),
        (r.pointerEvents = 'none'),
        (r.visibility = 'hidden'),
        (r.width = '200px'),
        (r.height = '150px'),
        (r.overflow = 'hidden'),
        n.appendChild(t),
        document.body.appendChild(n);
      var i = t.offsetWidth;
      n.style.overflow = 'scroll';
      var o = t.offsetWidth;
      i === o && (o = n.clientWidth), document.body.removeChild(n), (Ec = i - o);
    }
    return Ec;
  }
  function QS() {
    return (
      document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) &&
      window.innerWidth > document.body.offsetWidth
    );
  }
  var JS = 'rc-util-locker-'.concat(Date.now()),
    qp = 0;
  function ZS(e) {
    var t = !!e,
      n = we(function () {
        return (qp += 1), ''.concat(JS, '_').concat(qp);
      }),
      r = ge(n, 1),
      i = r[0];
    Wt(
      function () {
        if (t) {
          var o = YS(),
            l = QS();
          zi(
            `
html body {
  overflow-y: hidden;
  `.concat(
              l ? 'width: calc(100% - '.concat(o, 'px);') : '',
              `
}`,
            ),
            i,
          );
        } else wa(i);
        return function () {
          wa(i);
        };
      },
      [t, i],
    );
  }
  var Kp = !1;
  function ex(e) {
    return typeof e == 'boolean' && (Kp = e), Kp;
  }
  var Xp = function (t) {
      return t === !1
        ? !1
        : !An() || !t
        ? null
        : typeof t == 'string'
        ? document.querySelector(t)
        : typeof t == 'function'
        ? t()
        : t;
    },
    ll = We(function (e, t) {
      var n = e.open,
        r = e.autoLock,
        i = e.getContainer;
      e.debug;
      var o = e.autoDestroy,
        l = o === void 0 ? !0 : o,
        s = e.children,
        d = we(n),
        f = ge(d, 2),
        p = f[0],
        h = f[1],
        v = p || n;
      Fe(
        function () {
          (l || n) && h(n);
        },
        [n, l],
      );
      var x = we(function () {
          return Xp(i);
        }),
        y = ge(x, 2),
        C = y[0],
        O = y[1];
      Fe(function () {
        var B = Xp(i);
        O(B ?? null);
      });
      var E = XS(v && !C),
        _ = ge(E, 2),
        P = _[0],
        N = _[1],
        j = C ?? P;
      ZS(r && n && An() && (j === P || j === document.body));
      var u = null;
      if (s && mo(s) && t) {
        var $ = s;
        u = $.ref;
      }
      var I = Jl(u, t);
      if (!v || !An() || C === void 0) return null;
      var M = j === !1 || ex(),
        D = s;
      return t && (D = un(s, { ref: I })), b.createElement(Wp.Provider, { value: N }, M ? D : ia(D, j));
    });
  function tx() {
    var e = G({}, ql);
    return e.useId;
  }
  var Yp = 0;
  function Qp(e) {
    var t = we('ssr-id'),
      n = ge(t, 2),
      r = n[0],
      i = n[1],
      o = tx(),
      l = o == null ? void 0 : o();
    return (
      Fe(function () {
        if (!o) {
          var s = Yp;
          (Yp += 1), i('rc_unique_'.concat(s));
        }
      }, []),
      e || l || r
    );
  }
  var nx = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
    rx = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
    ix = ''
      .concat(nx, ' ')
      .concat(rx)
      .split(/[\s\n]+/),
    ox = 'aria-',
    ax = 'data-';
  function Jp(e, t) {
    return e.indexOf(t) === 0;
  }
  function Mo(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      n;
    t === !1 ? (n = { aria: !0, data: !0, attr: !0 }) : t === !0 ? (n = { aria: !0 }) : (n = G({}, t));
    var r = {};
    return (
      Object.keys(e).forEach(function (i) {
        ((n.aria && (i === 'role' || Jp(i, ox))) || (n.data && Jp(i, ax)) || (n.attr && ix.includes(i))) &&
          (r[i] = e[i]);
      }),
      r
    );
  }
  function lx(e) {
    var t = e.prefixCls,
      n = e.style,
      r = e.visible,
      i = e.maskProps,
      o = e.motionName;
    return b.createElement(
      Tr,
      { key: 'mask', visible: r, motionName: o, leavedClassName: ''.concat(t, '-mask-hidden') },
      function (l, s) {
        var d = l.className,
          f = l.style;
        return b.createElement(
          'div',
          rt({ ref: s, style: G(G({}, f), n), className: he(''.concat(t, '-mask'), d) }, i),
        );
      },
    );
  }
  function Zp(e, t, n) {
    var r = t;
    return !r && n && (r = ''.concat(e, '-').concat(n)), r;
  }
  function eg(e, t) {
    var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
      r = 'scroll'.concat(t ? 'Top' : 'Left');
    if (typeof n != 'number') {
      var i = e.document;
      (n = i.documentElement[r]), typeof n != 'number' && (n = i.body[r]);
    }
    return n;
  }
  function sx(e) {
    var t = e.getBoundingClientRect(),
      n = { left: t.left, top: t.top },
      r = e.ownerDocument,
      i = r.defaultView || r.parentWindow;
    return (n.left += eg(i)), (n.top += eg(i, !0)), n;
  }
  const cx = ra(
    function (e) {
      var t = e.children;
      return t;
    },
    function (e, t) {
      var n = t.shouldUpdate;
      return !n;
    },
  );
  var tg = { width: 0, height: 0, overflow: 'hidden', outline: 'none' },
    ng = be.forwardRef(function (e, t) {
      var n = e.prefixCls,
        r = e.className,
        i = e.style,
        o = e.title,
        l = e.ariaId,
        s = e.footer,
        d = e.closable,
        f = e.closeIcon,
        p = e.onClose,
        h = e.children,
        v = e.bodyStyle,
        x = e.bodyProps,
        y = e.modalRender,
        C = e.onMouseDown,
        O = e.onMouseUp,
        E = e.holderRef,
        _ = e.visible,
        P = e.forceRender,
        N = e.width,
        j = e.height,
        u = ie(),
        $ = ie();
      be.useImperativeHandle(t, function () {
        return {
          focus: function () {
            var z;
            (z = u.current) === null || z === void 0 || z.focus();
          },
          changeActive: function (z) {
            var V = document,
              U = V.activeElement;
            z && U === $.current ? u.current.focus() : !z && U === u.current && $.current.focus();
          },
        };
      });
      var I = {};
      N !== void 0 && (I.width = N), j !== void 0 && (I.height = j);
      var M;
      s && (M = be.createElement('div', { className: ''.concat(n, '-footer') }, s));
      var D;
      o &&
        (D = be.createElement(
          'div',
          { className: ''.concat(n, '-header') },
          be.createElement('div', { className: ''.concat(n, '-title'), id: l }, o),
        ));
      var B;
      d &&
        (B = be.createElement(
          'button',
          { type: 'button', onClick: p, 'aria-label': 'Close', className: ''.concat(n, '-close') },
          f || be.createElement('span', { className: ''.concat(n, '-close-x') }),
        ));
      var F = be.createElement(
        'div',
        { className: ''.concat(n, '-content') },
        B,
        D,
        be.createElement('div', rt({ className: ''.concat(n, '-body'), style: v }, x), h),
        M,
      );
      return be.createElement(
        'div',
        {
          key: 'dialog-element',
          role: 'dialog',
          'aria-labelledby': o ? l : null,
          'aria-modal': 'true',
          ref: E,
          style: G(G({}, i), I),
          className: he(n, r),
          onMouseDown: C,
          onMouseUp: O,
        },
        be.createElement('div', { tabIndex: 0, ref: u, style: tg, 'aria-hidden': 'true' }),
        be.createElement(cx, { shouldUpdate: _ || P }, y ? y(F) : F),
        be.createElement('div', { tabIndex: 0, ref: $, style: tg, 'aria-hidden': 'true' }),
      );
    }),
    rg = We(function (e, t) {
      var n = e.prefixCls,
        r = e.title,
        i = e.style,
        o = e.className,
        l = e.visible,
        s = e.forceRender,
        d = e.destroyOnClose,
        f = e.motionName,
        p = e.ariaId,
        h = e.onVisibleChanged,
        v = e.mousePosition,
        x = ie(),
        y = we(),
        C = ge(y, 2),
        O = C[0],
        E = C[1],
        _ = {};
      O && (_.transformOrigin = O);
      function P() {
        var N = sx(x.current);
        E(v ? ''.concat(v.x - N.left, 'px ').concat(v.y - N.top, 'px') : '');
      }
      return b.createElement(
        Tr,
        {
          visible: l,
          onVisibleChanged: h,
          onAppearPrepare: P,
          onEnterPrepare: P,
          forceRender: s,
          motionName: f,
          removeOnLeave: d,
          ref: x,
        },
        function (N, j) {
          var u = N.className,
            $ = N.style;
          return b.createElement(
            ng,
            rt({}, e, {
              ref: t,
              title: r,
              ariaId: p,
              prefixCls: n,
              holderRef: j,
              style: G(G(G({}, $), i), _),
              className: he(o, u),
            }),
          );
        },
      );
    });
  rg.displayName = 'Content';
  function ux(e) {
    var t = e.prefixCls,
      n = t === void 0 ? 'rc-dialog' : t,
      r = e.zIndex,
      i = e.visible,
      o = i === void 0 ? !1 : i,
      l = e.keyboard,
      s = l === void 0 ? !0 : l,
      d = e.focusTriggerAfterClose,
      f = d === void 0 ? !0 : d,
      p = e.wrapStyle,
      h = e.wrapClassName,
      v = e.wrapProps,
      x = e.onClose,
      y = e.afterClose,
      C = e.transitionName,
      O = e.animation,
      E = e.closable,
      _ = E === void 0 ? !0 : E,
      P = e.mask,
      N = P === void 0 ? !0 : P,
      j = e.maskTransitionName,
      u = e.maskAnimation,
      $ = e.maskClosable,
      I = $ === void 0 ? !0 : $,
      M = e.maskStyle,
      D = e.maskProps,
      B = e.rootClassName,
      F = ie(),
      A = ie(),
      z = ie(),
      V = we(o),
      U = ge(V, 2),
      X = U[0],
      Z = U[1],
      ee = Qp();
    function le() {
      os(A.current, document.activeElement) || (F.current = document.activeElement);
    }
    function ce() {
      if (!os(A.current, document.activeElement)) {
        var Me;
        (Me = z.current) === null || Me === void 0 || Me.focus();
      }
    }
    function xe(Me) {
      if (Me) ce();
      else {
        if ((Z(!1), N && F.current && f)) {
          try {
            F.current.focus({ preventScroll: !0 });
          } catch {}
          F.current = null;
        }
        X && (y == null || y());
      }
    }
    function Q(Me) {
      x == null || x(Me);
    }
    var Ce = ie(!1),
      Se = ie(),
      me = function () {
        clearTimeout(Se.current), (Ce.current = !0);
      },
      se = function () {
        Se.current = setTimeout(function () {
          Ce.current = !1;
        });
      },
      $e = null;
    I &&
      ($e = function (Le) {
        Ce.current ? (Ce.current = !1) : A.current === Le.target && Q(Le);
      });
    function Ee(Me) {
      if (s && Me.keyCode === ye.ESC) {
        Me.stopPropagation(), Q(Me);
        return;
      }
      o && Me.keyCode === ye.TAB && z.current.changeActive(!Me.shiftKey);
    }
    return (
      Fe(
        function () {
          o && (Z(!0), le());
        },
        [o],
      ),
      Fe(function () {
        return function () {
          clearTimeout(Se.current);
        };
      }, []),
      b.createElement(
        'div',
        rt({ className: he(''.concat(n, '-root'), B) }, Mo(e, { data: !0 })),
        b.createElement(lx, {
          prefixCls: n,
          visible: N && o,
          motionName: Zp(n, j, u),
          style: G({ zIndex: r }, M),
          maskProps: D,
        }),
        b.createElement(
          'div',
          rt(
            {
              tabIndex: -1,
              onKeyDown: Ee,
              className: he(''.concat(n, '-wrap'), h),
              ref: A,
              onClick: $e,
              style: G(G({ zIndex: r }, p), {}, { display: X ? null : 'none' }),
            },
            v,
          ),
          b.createElement(
            rg,
            rt({}, e, {
              onMouseDown: me,
              onMouseUp: se,
              ref: z,
              closable: _,
              ariaId: ee,
              prefixCls: n,
              visible: o && X,
              onClose: Q,
              onVisibleChanged: xe,
              motionName: Zp(n, C, O),
            }),
          ),
        ),
      )
    );
  }
  var ig = function (t) {
    var n = t.visible,
      r = t.getContainer,
      i = t.forceRender,
      o = t.destroyOnClose,
      l = o === void 0 ? !1 : o,
      s = t.afterClose,
      d = we(n),
      f = ge(d, 2),
      p = f[0],
      h = f[1];
    return (
      Fe(
        function () {
          n && h(!0);
        },
        [n],
      ),
      !i && l && !p
        ? null
        : b.createElement(
            ll,
            { open: n || i || p, autoDestroy: !1, getContainer: r, autoLock: n || p },
            b.createElement(
              ux,
              rt({}, t, {
                destroyOnClose: l,
                afterClose: function () {
                  s == null || s(), h(!1);
                },
              }),
            ),
          )
    );
  };
  ig.displayName = 'Dialog';
  const sl = b.createContext({}),
    og = (e) => {
      let { children: t, status: n, override: r } = e;
      const i = je(sl),
        o = De(() => {
          const l = Object.assign({}, i);
          return r && delete l.isFormItemInput, n && (delete l.status, delete l.hasFeedback, delete l.feedbackIcon), l;
        }, [n, r, i]);
      return b.createElement(sl.Provider, { value: o }, t);
    };
  var ag = function (t) {
      if (An() && window.document.documentElement) {
        var n = Array.isArray(t) ? t : [t],
          r = window.document.documentElement;
        return n.some(function (i) {
          return i in r.style;
        });
      }
      return !1;
    },
    dx = function (t, n) {
      if (!ag(t)) return !1;
      var r = document.createElement('div'),
        i = r.style[t];
      return (r.style[t] = n), r.style[t] !== i;
    };
  function lg(e, t) {
    return !Array.isArray(e) && t !== void 0 ? dx(e, t) : ag(e);
  }
  const sg = () => An() && window.document.documentElement;
  let cl;
  const fx = () => {
      if (!sg()) return !1;
      if (cl !== void 0) return cl;
      const e = document.createElement('div');
      return (
        (e.style.display = 'flex'),
        (e.style.flexDirection = 'column'),
        (e.style.rowGap = '1px'),
        e.appendChild(document.createElement('div')),
        e.appendChild(document.createElement('div')),
        document.body.appendChild(e),
        (cl = e.scrollHeight === 1),
        document.body.removeChild(e),
        cl
      );
    },
    px = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
    gx = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
    ul = function (e, t, n, r) {
      const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? '&' : '';
      return {
        [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, px(r)), { animationPlayState: 'paused' }),
        [`${o}${e}-leave`]: Object.assign(Object.assign({}, gx(r)), { animationPlayState: 'paused' }),
        [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
        [`${o}${e}-leave${e}-leave-active`]: { animationName: n, animationPlayState: 'running', pointerEvents: 'none' },
      };
    },
    hx = new St('antFadeIn', { '0%': { opacity: 0 }, '100%': { opacity: 1 } }),
    mx = new St('antFadeOut', { '0%': { opacity: 1 }, '100%': { opacity: 0 } }),
    vx = function (e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      const { antCls: n } = e,
        r = `${n}-fade`,
        i = t ? '&' : '';
      return [
        ul(r, hx, mx, e.motionDurationMid, t),
        {
          [`
        ${i}${r}-enter,
        ${i}${r}-appear
      `]: { opacity: 0, animationTimingFunction: 'linear' },
          [`${i}${r}-leave`]: { animationTimingFunction: 'linear' },
        },
      ];
    },
    bx = new St('antMoveDownIn', {
      '0%': { transform: 'translate3d(0, 100%, 0)', transformOrigin: '0 0', opacity: 0 },
      '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    }),
    yx = new St('antMoveDownOut', {
      '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
      '100%': { transform: 'translate3d(0, 100%, 0)', transformOrigin: '0 0', opacity: 0 },
    }),
    Cx = new St('antMoveLeftIn', {
      '0%': { transform: 'translate3d(-100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
      '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    }),
    Sx = new St('antMoveLeftOut', {
      '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
      '100%': { transform: 'translate3d(-100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
    }),
    xx = new St('antMoveRightIn', {
      '0%': { transform: 'translate3d(100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
      '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    }),
    wx = new St('antMoveRightOut', {
      '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
      '100%': { transform: 'translate3d(100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
    }),
    Ex = new St('antMoveUpIn', {
      '0%': { transform: 'translate3d(0, -100%, 0)', transformOrigin: '0 0', opacity: 0 },
      '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    }),
    $x = new St('antMoveUpOut', {
      '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
      '100%': { transform: 'translate3d(0, -100%, 0)', transformOrigin: '0 0', opacity: 0 },
    }),
    Ox = {
      'move-up': { inKeyframes: Ex, outKeyframes: $x },
      'move-down': { inKeyframes: bx, outKeyframes: yx },
      'move-left': { inKeyframes: Cx, outKeyframes: Sx },
      'move-right': { inKeyframes: xx, outKeyframes: wx },
    },
    cg = (e, t) => {
      const { antCls: n } = e,
        r = `${n}-${t}`,
        { inKeyframes: i, outKeyframes: o } = Ox[t];
      return [
        ul(r, i, o, e.motionDurationMid),
        {
          [`
        ${r}-enter,
        ${r}-appear
      `]: { opacity: 0, animationTimingFunction: e.motionEaseOutCirc },
          [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
        },
      ];
    },
    ug = new St('antSlideUpIn', {
      '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
      '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
    }),
    dg = new St('antSlideUpOut', {
      '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
      '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    }),
    fg = new St('antSlideDownIn', {
      '0%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
      '100%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
    }),
    pg = new St('antSlideDownOut', {
      '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
      '100%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
    }),
    _x = new St('antSlideLeftIn', {
      '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
      '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
    }),
    Tx = new St('antSlideLeftOut', {
      '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
      '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    }),
    Ix = new St('antSlideRightIn', {
      '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
      '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
    }),
    Px = new St('antSlideRightOut', {
      '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
      '100%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
    }),
    Nx = {
      'slide-up': { inKeyframes: ug, outKeyframes: dg },
      'slide-down': { inKeyframes: fg, outKeyframes: pg },
      'slide-left': { inKeyframes: _x, outKeyframes: Tx },
      'slide-right': { inKeyframes: Ix, outKeyframes: Px },
    },
    gg = (e, t) => {
      const { antCls: n } = e,
        r = `${n}-${t}`,
        { inKeyframes: i, outKeyframes: o } = Nx[t];
      return [
        ul(r, i, o, e.motionDurationMid),
        {
          [`
      ${r}-enter,
      ${r}-appear
    `]: {
            transform: 'scale(0)',
            transformOrigin: '0% 0%',
            opacity: 0,
            animationTimingFunction: e.motionEaseOutQuint,
            ['&-prepare']: { transform: 'scale(1)' },
          },
          [`${r}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
        },
      ];
    },
    Rx = new St('antZoomIn', {
      '0%': { transform: 'scale(0.2)', opacity: 0 },
      '100%': { transform: 'scale(1)', opacity: 1 },
    }),
    Mx = new St('antZoomOut', { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(0.2)', opacity: 0 } }),
    hg = new St('antZoomBigIn', {
      '0%': { transform: 'scale(0.8)', opacity: 0 },
      '100%': { transform: 'scale(1)', opacity: 1 },
    }),
    mg = new St('antZoomBigOut', { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(0.8)', opacity: 0 } }),
    Ax = new St('antZoomUpIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
    }),
    Dx = new St('antZoomUpOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
    }),
    Fx = new St('antZoomLeftIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
    }),
    jx = new St('antZoomLeftOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
    }),
    zx = new St('antZoomRightIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
    }),
    Lx = new St('antZoomRightOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
    }),
    Hx = new St('antZoomDownIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
    }),
    Bx = new St('antZoomDownOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
    }),
    kx = {
      zoom: { inKeyframes: Rx, outKeyframes: Mx },
      'zoom-big': { inKeyframes: hg, outKeyframes: mg },
      'zoom-big-fast': { inKeyframes: hg, outKeyframes: mg },
      'zoom-left': { inKeyframes: Fx, outKeyframes: jx },
      'zoom-right': { inKeyframes: zx, outKeyframes: Lx },
      'zoom-up': { inKeyframes: Ax, outKeyframes: Dx },
      'zoom-down': { inKeyframes: Hx, outKeyframes: Bx },
    },
    vg = (e, t) => {
      const { antCls: n } = e,
        r = `${n}-${t}`,
        { inKeyframes: i, outKeyframes: o } = kx[t];
      return [
        ul(r, i, o, t === 'zoom-big-fast' ? e.motionDurationFast : e.motionDurationMid),
        {
          [`
        ${r}-enter,
        ${r}-appear
      `]: {
            transform: 'scale(0)',
            opacity: 0,
            animationTimingFunction: e.motionEaseOutCirc,
            '&-prepare': { transform: 'none' },
          },
          [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
        },
      ];
    };
  function bg(e) {
    return { position: e, top: 0, insetInlineEnd: 0, bottom: 0, insetInlineStart: 0 };
  }
  const Vx = (e) => {
      const { componentCls: t } = e;
      return [
        {
          [`${t}-root`]: {
            [`${t}${e.antCls}-zoom-enter, ${t}${e.antCls}-zoom-appear`]: {
              transform: 'none',
              opacity: 0,
              animationDuration: e.motionDurationSlow,
              userSelect: 'none',
            },
            [`${t}-mask`]: Object.assign(Object.assign({}, bg('fixed')), {
              zIndex: e.zIndexPopupBase,
              height: '100%',
              backgroundColor: e.colorBgMask,
              [`${t}-hidden`]: { display: 'none' },
            }),
            [`${t}-wrap`]: Object.assign(Object.assign({}, bg('fixed')), {
              overflow: 'auto',
              outline: 0,
              WebkitOverflowScrolling: 'touch',
            }),
          },
        },
        { [`${t}-root`]: vx(e) },
      ];
    },
    Wx = (e) => {
      const { componentCls: t } = e;
      return [
        {
          [`${t}-root`]: {
            [`${t}-wrap`]: {
              zIndex: e.zIndexPopupBase,
              position: 'fixed',
              inset: 0,
              overflow: 'auto',
              outline: 0,
              WebkitOverflowScrolling: 'touch',
            },
            [`${t}-wrap-rtl`]: { direction: 'rtl' },
            [`${t}-centered`]: {
              textAlign: 'center',
              '&::before': {
                display: 'inline-block',
                width: 0,
                height: '100%',
                verticalAlign: 'middle',
                content: '""',
              },
              [t]: { top: 0, display: 'inline-block', paddingBottom: 0, textAlign: 'start', verticalAlign: 'middle' },
            },
            [`@media (max-width: ${e.screenSMMax})`]: {
              [t]: { maxWidth: 'calc(100vw - 16px)', margin: `${e.marginXS} auto` },
              [`${t}-centered`]: { [t]: { flex: 1 } },
            },
          },
        },
        {
          [t]: Object.assign(Object.assign({}, ir(e)), {
            pointerEvents: 'none',
            position: 'relative',
            top: 100,
            width: 'auto',
            maxWidth: `calc(100vw - ${e.margin * 2}px)`,
            margin: '0 auto',
            paddingBottom: e.paddingLG,
            [`${t}-title`]: {
              margin: 0,
              color: e.modalHeadingColor,
              fontWeight: e.fontWeightStrong,
              fontSize: e.modalHeaderTitleFontSize,
              lineHeight: e.modalHeaderTitleLineHeight,
              wordWrap: 'break-word',
            },
            [`${t}-content`]: {
              position: 'relative',
              backgroundColor: e.modalContentBg,
              backgroundClip: 'padding-box',
              border: 0,
              borderRadius: e.borderRadiusLG,
              boxShadow: e.boxShadow,
              pointerEvents: 'auto',
              padding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
            },
            [`${t}-close`]: Object.assign(
              {
                position: 'absolute',
                top: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
                insetInlineEnd: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
                zIndex: e.zIndexPopupBase + 10,
                padding: 0,
                color: e.modalCloseColor,
                fontWeight: e.fontWeightStrong,
                lineHeight: 1,
                textDecoration: 'none',
                background: 'transparent',
                borderRadius: e.borderRadiusSM,
                width: e.modalConfirmIconSize,
                height: e.modalConfirmIconSize,
                border: 0,
                outline: 0,
                cursor: 'pointer',
                transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
                '&-x': {
                  display: 'block',
                  fontSize: e.fontSizeLG,
                  fontStyle: 'normal',
                  lineHeight: `${e.modalCloseBtnSize}px`,
                  textAlign: 'center',
                  textTransform: 'none',
                  textRendering: 'auto',
                },
                '&:hover': {
                  color: e.modalIconHoverColor,
                  backgroundColor: e.wireframe ? 'transparent' : e.colorFillContent,
                  textDecoration: 'none',
                },
                '&:active': { backgroundColor: e.wireframe ? 'transparent' : e.colorFillContentHover },
              },
              Gs(e),
            ),
            [`${t}-header`]: {
              color: e.colorText,
              background: e.modalHeaderBg,
              borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
              marginBottom: e.marginXS,
            },
            [`${t}-body`]: { fontSize: e.fontSize, lineHeight: e.lineHeight, wordWrap: 'break-word' },
            [`${t}-footer`]: {
              textAlign: 'end',
              background: e.modalFooterBg,
              marginTop: e.marginSM,
              [`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]: {
                marginBottom: 0,
                marginInlineStart: e.marginXS,
              },
            },
            [`${t}-open`]: { overflow: 'hidden' },
          }),
        },
        {
          [`${t}-pure-panel`]: {
            top: 'auto',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: { display: 'flex', flexDirection: 'column', flex: 'auto' },
            [`${t}-confirm-body`]: { marginBottom: 'auto' },
          },
        },
      ];
    },
    Ux = (e) => {
      const { componentCls: t } = e,
        n = `${t}-confirm`;
      return {
        [n]: {
          '&-rtl': { direction: 'rtl' },
          [`${e.antCls}-modal-header`]: { display: 'none' },
          [`${n}-body-wrapper`]: Object.assign({}, Bf()),
          [`${n}-body`]: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            [`${n}-title`]: {
              flex: '0 0 100%',
              display: 'block',
              overflow: 'hidden',
              color: e.colorTextHeading,
              fontWeight: e.fontWeightStrong,
              fontSize: e.modalHeaderTitleFontSize,
              lineHeight: e.modalHeaderTitleLineHeight,
              [`+ ${n}-content`]: {
                marginBlockStart: e.marginXS,
                flexBasis: '100%',
                maxWidth: `calc(100% - ${e.modalConfirmIconSize + e.marginSM}px)`,
              },
            },
            [`${n}-content`]: { color: e.colorText, fontSize: e.fontSize },
            [`> ${e.iconCls}`]: {
              flex: 'none',
              marginInlineEnd: e.marginSM,
              fontSize: e.modalConfirmIconSize,
              [`+ ${n}-title`]: { flex: 1 },
              [`+ ${n}-title + ${n}-content`]: { marginInlineStart: e.modalConfirmIconSize + e.marginSM },
            },
          },
          [`${n}-btns`]: {
            textAlign: 'end',
            marginTop: e.marginSM,
            [`${e.antCls}-btn + ${e.antCls}-btn`]: { marginBottom: 0, marginInlineStart: e.marginXS },
          },
        },
        [`${n}-error ${n}-body > ${e.iconCls}`]: { color: e.colorError },
        [`${n}-warning ${n}-body > ${e.iconCls},
        ${n}-confirm ${n}-body > ${e.iconCls}`]: { color: e.colorWarning },
        [`${n}-info ${n}-body > ${e.iconCls}`]: { color: e.colorInfo },
        [`${n}-success ${n}-body > ${e.iconCls}`]: { color: e.colorSuccess },
        [`${t}-zoom-leave ${t}-btns`]: { pointerEvents: 'none' },
      };
    },
    Gx = (e) => {
      const { componentCls: t } = e;
      return {
        [`${t}-root`]: { [`${t}-wrap-rtl`]: { direction: 'rtl', [`${t}-confirm-body`]: { direction: 'rtl' } } },
      };
    },
    qx = (e) => {
      const { componentCls: t, antCls: n } = e,
        r = `${t}-confirm`;
      return {
        [t]: {
          [`${t}-content`]: { padding: 0 },
          [`${t}-header`]: {
            padding: e.modalHeaderPadding,
            borderBottom: `${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,
            marginBottom: 0,
          },
          [`${t}-body`]: { padding: e.modalBodyPadding },
          [`${t}-footer`]: {
            padding: `${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,
            borderTop: `${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,
            borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
            marginTop: 0,
          },
        },
        [r]: {
          [`${n}-modal-body`]: { padding: `${e.padding * 2}px ${e.padding * 2}px ${e.paddingLG}px` },
          [`${r}-body`]: {
            [`> ${e.iconCls}`]: {
              marginInlineEnd: e.margin,
              [`+ ${r}-title + ${r}-content`]: { marginInlineStart: e.modalConfirmIconSize + e.margin },
            },
          },
          [`${r}-btns`]: { marginTop: e.marginLG },
        },
      };
    },
    yg = On('Modal', (e) => {
      const t = e.padding,
        n = e.fontSizeHeading5,
        r = e.lineHeightHeading5,
        i = jt(e, {
          modalBodyPadding: e.paddingLG,
          modalHeaderBg: e.colorBgElevated,
          modalHeaderPadding: `${t}px ${e.paddingLG}px`,
          modalHeaderBorderWidth: e.lineWidth,
          modalHeaderBorderStyle: e.lineType,
          modalHeaderTitleLineHeight: r,
          modalHeaderTitleFontSize: n,
          modalHeaderBorderColorSplit: e.colorSplit,
          modalHeaderCloseSize: r * n + t * 2,
          modalContentBg: e.colorBgElevated,
          modalHeadingColor: e.colorTextHeading,
          modalCloseColor: e.colorTextDescription,
          modalFooterBg: 'transparent',
          modalFooterBorderColorSplit: e.colorSplit,
          modalFooterBorderStyle: e.lineType,
          modalFooterPaddingVertical: e.paddingXS,
          modalFooterPaddingHorizontal: e.padding,
          modalFooterBorderWidth: e.lineWidth,
          modalConfirmTitleFontSize: e.fontSizeLG,
          modalIconHoverColor: e.colorIconHover,
          modalConfirmIconSize: e.fontSize * e.lineHeight,
          modalCloseBtnSize: e.controlHeightLG * 0.55,
        });
      return [Wx(i), Ux(i), Gx(i), Vx(i), e.wireframe && qx(i), vg(i, 'zoom')];
    });
  var Kx =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  function Cg(e, t) {
    return b.createElement(
      'span',
      { className: `${e}-close-x` },
      t || b.createElement(Ya, { className: `${e}-close-icon` }),
    );
  }
  const Sg = (e) => {
      const {
          okText: t,
          okType: n = 'primary',
          cancelText: r,
          confirmLoading: i,
          onOk: o,
          onCancel: l,
          okButtonProps: s,
          cancelButtonProps: d,
          footer: f,
        } = e,
        [p] = Zi('Modal', Of());
      return f === void 0
        ? b.createElement(
            b.Fragment,
            null,
            b.createElement(wc, Object.assign({ onClick: l }, d), r || (p == null ? void 0 : p.cancelText)),
            b.createElement(
              wc,
              Object.assign({}, Bp(n), { loading: i, onClick: o }, s),
              t || (p == null ? void 0 : p.okText),
            ),
          )
        : f;
    },
    Xx = (e) => {
      const { prefixCls: t, className: n, closeIcon: r, closable: i, type: o, title: l, children: s } = e,
        d = Kx(e, ['prefixCls', 'className', 'closeIcon', 'closable', 'type', 'title', 'children']),
        { getPrefixCls: f } = je(xt),
        p = f(),
        h = t || f('modal'),
        [, v] = yg(h),
        x = `${h}-confirm`;
      let y = {};
      return (
        o
          ? (y = {
              closable: i ?? !1,
              title: '',
              footer: '',
              children: b.createElement(
                wg,
                Object.assign({}, e, { confirmPrefixCls: x, rootPrefixCls: p, content: s }),
              ),
            })
          : (y = {
              closable: i ?? !0,
              title: l,
              footer: e.footer === null ? e.footer : b.createElement(Sg, Object.assign({}, e)),
              children: s,
            }),
        b.createElement(
          ng,
          Object.assign(
            { prefixCls: h, className: he(v, `${h}-pure-panel`, o && x, o && `${x}-${o}`, n) },
            d,
            { closeIcon: Cg(h, r), closable: i },
            y,
          ),
        )
      );
    };
  var Yx =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  let $c;
  const Qx = (e) => {
    ($c = { x: e.pageX, y: e.pageY }),
      setTimeout(() => {
        $c = null;
      }, 100);
  };
  sg() && document.documentElement.addEventListener('click', Qx, !0);
  const xg = (e) => {
    var t;
    const { getPopupContainer: n, getPrefixCls: r, direction: i } = je(xt),
      o = (I) => {
        const { onCancel: M } = e;
        M == null || M(I);
      },
      l = (I) => {
        const { onOk: M } = e;
        M == null || M(I);
      },
      {
        prefixCls: s,
        className: d,
        rootClassName: f,
        open: p,
        wrapClassName: h,
        centered: v,
        getContainer: x,
        closeIcon: y,
        focusTriggerAfterClose: C = !0,
        visible: O,
        width: E = 520,
      } = e,
      _ = Yx(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'open',
        'wrapClassName',
        'centered',
        'getContainer',
        'closeIcon',
        'focusTriggerAfterClose',
        'visible',
        'width',
      ]),
      P = r('modal', s),
      N = r(),
      [j, u] = yg(P),
      $ = he(h, { [`${P}-centered`]: !!v, [`${P}-wrap-rtl`]: i === 'rtl' });
    return j(
      b.createElement(
        Dp,
        null,
        b.createElement(
          og,
          { status: !0, override: !0 },
          b.createElement(
            ig,
            Object.assign({ width: E }, _, {
              getContainer: x === void 0 ? n : x,
              prefixCls: P,
              rootClassName: he(u, f),
              wrapClassName: $,
              footer:
                e.footer === null ? e.footer : b.createElement(Sg, Object.assign({}, e, { onOk: l, onCancel: o })),
              visible: p ?? O,
              mousePosition: (t = _.mousePosition) !== null && t !== void 0 ? t : $c,
              onClose: o,
              closeIcon: Cg(P, y),
              focusTriggerAfterClose: C,
              transitionName: qr(N, 'zoom', e.transitionName),
              maskTransitionName: qr(N, 'fade', e.maskTransitionName),
              className: he(u, d),
            }),
          ),
        ),
      ),
    );
  };
  function wg(e) {
    const {
      icon: t,
      onCancel: n,
      onOk: r,
      close: i,
      okText: o,
      okButtonProps: l,
      cancelText: s,
      cancelButtonProps: d,
      confirmPrefixCls: f,
      rootPrefixCls: p,
      type: h,
      okCancel: v,
      footer: x,
      locale: y,
    } = e;
    let C = t;
    if (!t && t !== null)
      switch (h) {
        case 'info':
          C = b.createElement(lp, null);
          break;
        case 'success':
          C = b.createElement(tp, null);
          break;
        case 'error':
          C = b.createElement(Xa, null);
          break;
        default:
          C = b.createElement(op, null);
      }
    const O = e.okType || 'primary',
      E = v ?? h === 'confirm',
      _ = e.autoFocusButton === null ? !1 : e.autoFocusButton || 'ok',
      [P] = Zi('Modal'),
      N = y || P,
      j =
        E &&
        b.createElement(
          Vp,
          { actionFn: n, close: i, autoFocus: _ === 'cancel', buttonProps: d, prefixCls: `${p}-btn` },
          s || (N == null ? void 0 : N.cancelText),
        );
    return b.createElement(
      'div',
      { className: `${f}-body-wrapper` },
      b.createElement(
        'div',
        { className: `${f}-body` },
        C,
        e.title === void 0 ? null : b.createElement('span', { className: `${f}-title` }, e.title),
        b.createElement('div', { className: `${f}-content` }, e.content),
      ),
      x !== void 0
        ? x
        : b.createElement(
            'div',
            { className: `${f}-btns` },
            j,
            b.createElement(
              Vp,
              { type: O, actionFn: r, close: i, autoFocus: _ === 'ok', buttonProps: l, prefixCls: `${p}-btn` },
              o || (E ? (N == null ? void 0 : N.okText) : N == null ? void 0 : N.justOkText),
            ),
          ),
    );
  }
  const Eg = (e) => {
      const {
          close: t,
          zIndex: n,
          afterClose: r,
          visible: i,
          open: o,
          keyboard: l,
          centered: s,
          getContainer: d,
          maskStyle: f,
          direction: p,
          prefixCls: h,
          wrapClassName: v,
          rootPrefixCls: x,
          iconPrefixCls: y,
          bodyStyle: C,
          closable: O = !1,
          closeIcon: E,
          modalRender: _,
          focusTriggerAfterClose: P,
        } = e,
        N = `${h}-confirm`,
        j = e.width || 416,
        u = e.style || {},
        $ = e.mask === void 0 ? !0 : e.mask,
        I = e.maskClosable === void 0 ? !1 : e.maskClosable,
        M = he(N, `${N}-${e.type}`, { [`${N}-rtl`]: p === 'rtl' }, e.className);
      return b.createElement(
        Js,
        { prefixCls: x, iconPrefixCls: y, direction: p },
        b.createElement(
          xg,
          {
            prefixCls: h,
            className: M,
            wrapClassName: he({ [`${N}-centered`]: !!e.centered }, v),
            onCancel: () => (t == null ? void 0 : t({ triggerCancel: !0 })),
            open: o,
            title: '',
            footer: '',
            transitionName: qr(x, 'zoom', e.transitionName),
            maskTransitionName: qr(x, 'fade', e.maskTransitionName),
            mask: $,
            maskClosable: I,
            maskStyle: f,
            style: u,
            bodyStyle: C,
            width: j,
            zIndex: n,
            afterClose: r,
            keyboard: l,
            centered: s,
            getContainer: d,
            closable: O,
            closeIcon: E,
            modalRender: _,
            focusTriggerAfterClose: P,
          },
          b.createElement(wg, Object.assign({}, e, { confirmPrefixCls: N })),
        ),
      );
    },
    yi = [];
  var Jx =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  let $g = '';
  function Zx() {
    return $g;
  }
  function Ao(e) {
    const t = document.createDocumentFragment();
    let n = Object.assign(Object.assign({}, e), { close: l, open: !0 }),
      r;
    function i() {
      for (var d = arguments.length, f = new Array(d), p = 0; p < d; p++) f[p] = arguments[p];
      const h = f.some((v) => v && v.triggerCancel);
      e.onCancel && h && e.onCancel.apply(e, [() => {}].concat(ze(f.slice(1))));
      for (let v = 0; v < yi.length; v++)
        if (yi[v] === l) {
          yi.splice(v, 1);
          break;
        }
      Np(t);
    }
    function o(d) {
      var { okText: f, cancelText: p, prefixCls: h } = d,
        v = Jx(d, ['okText', 'cancelText', 'prefixCls']);
      clearTimeout(r),
        (r = setTimeout(() => {
          const x = Of(),
            { getPrefixCls: y, getIconPrefixCls: C } = Qs(),
            O = y(void 0, Zx()),
            E = h || `${O}-modal`,
            _ = C();
          cc(
            b.createElement(
              Eg,
              Object.assign({}, v, {
                prefixCls: E,
                rootPrefixCls: O,
                iconPrefixCls: _,
                okText: f,
                locale: x,
                cancelText: p || x.cancelText,
              }),
            ),
            t,
          );
        }));
    }
    function l() {
      for (var d = arguments.length, f = new Array(d), p = 0; p < d; p++) f[p] = arguments[p];
      (n = Object.assign(Object.assign({}, n), {
        open: !1,
        afterClose: () => {
          typeof e.afterClose == 'function' && e.afterClose(), i.apply(this, f);
        },
      })),
        n.visible && delete n.visible,
        o(n);
    }
    function s(d) {
      typeof d == 'function' ? (n = d(n)) : (n = Object.assign(Object.assign({}, n), d)), o(n);
    }
    return o(n), yi.push(l), { destroy: l, update: s };
  }
  function Og(e) {
    return Object.assign(Object.assign({}, e), { type: 'warning' });
  }
  function _g(e) {
    return Object.assign(Object.assign({}, e), { type: 'info' });
  }
  function Tg(e) {
    return Object.assign(Object.assign({}, e), { type: 'success' });
  }
  function Ig(e) {
    return Object.assign(Object.assign({}, e), { type: 'error' });
  }
  function Pg(e) {
    return Object.assign(Object.assign({}, e), { type: 'confirm' });
  }
  function ew(e) {
    let { rootPrefixCls: t } = e;
    $g = t;
  }
  const tw = We((e, t) => {
    let { afterClose: n, config: r } = e;
    var i;
    const [o, l] = we(!0),
      [s, d] = we(r),
      { direction: f, getPrefixCls: p } = je(xt),
      h = p('modal'),
      v = p(),
      x = function () {
        l(!1);
        for (var O = arguments.length, E = new Array(O), _ = 0; _ < O; _++) E[_] = arguments[_];
        const P = E.some((N) => N && N.triggerCancel);
        s.onCancel && P && s.onCancel.apply(s, [() => {}].concat(ze(E.slice(1))));
      };
    on(t, () => ({
      destroy: x,
      update: (O) => {
        d((E) => Object.assign(Object.assign({}, E), O));
      },
    }));
    const y = (i = s.okCancel) !== null && i !== void 0 ? i : s.type === 'confirm',
      [C] = Zi('Modal', Gi.Modal);
    return b.createElement(
      Eg,
      Object.assign({ prefixCls: h, rootPrefixCls: v }, s, {
        close: x,
        open: o,
        afterClose: n,
        okText: s.okText || (y ? (C == null ? void 0 : C.okText) : C == null ? void 0 : C.justOkText),
        direction: f,
        cancelText: s.cancelText || (C == null ? void 0 : C.cancelText),
      }),
    );
  });
  let Ng = 0;
  const nw = ra(
    We((e, t) => {
      const [n, r] = J1();
      return on(t, () => ({ patchElement: r }), []), b.createElement(b.Fragment, null, n);
    }),
  );
  function rw() {
    const e = ie(null),
      [t, n] = we([]);
    Fe(() => {
      t.length &&
        (ze(t).forEach((l) => {
          l();
        }),
        n([]));
    }, [t]);
    const r = Qt(
      (o) =>
        function (s) {
          var d;
          Ng += 1;
          const f = b.createRef();
          let p;
          const h = b.createElement(tw, {
            key: `modal-${Ng}`,
            config: o(s),
            ref: f,
            afterClose: () => {
              p == null || p();
            },
          });
          return (
            (p = (d = e.current) === null || d === void 0 ? void 0 : d.patchElement(h)),
            p && yi.push(p),
            {
              destroy: () => {
                function v() {
                  var x;
                  (x = f.current) === null || x === void 0 || x.destroy();
                }
                f.current ? v() : n((x) => [].concat(ze(x), [v]));
              },
              update: (v) => {
                function x() {
                  var y;
                  (y = f.current) === null || y === void 0 || y.update(v);
                }
                f.current ? x() : n((y) => [].concat(ze(y), [x]));
              },
            }
          );
        },
      [],
    );
    return [
      De(() => ({ info: r(_g), success: r(Tg), error: r(Ig), warning: r(Og), confirm: r(Pg) }), []),
      b.createElement(nw, { key: 'modal-holder', ref: e }),
    ];
  }
  function eo(e) {
    var t = ie();
    t.current = e;
    var n = Qt(function () {
      for (var r, i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
      return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
    }, []);
    return n;
  }
  function Oc(e) {
    return e !== void 0;
  }
  function Pr(e, t) {
    var n = t || {},
      r = n.defaultValue,
      i = n.value,
      o = n.onChange,
      l = n.postState,
      s = Ur(function () {
        return Oc(i) ? i : Oc(r) ? (typeof r == 'function' ? r() : r) : typeof e == 'function' ? e() : e;
      }),
      d = ge(s, 2),
      f = d[0],
      p = d[1],
      h = i !== void 0 ? i : f,
      v = l ? l(h) : h,
      x = eo(o),
      y = Ur([h]),
      C = ge(y, 2),
      O = C[0],
      E = C[1];
    Up(
      function () {
        var P = O[0];
        f !== P && x(f, P);
      },
      [O],
    ),
      Up(
        function () {
          Oc(i) || p(i);
        },
        [i],
      );
    var _ = eo(function (P, N) {
      p(P, N), E([h], N);
    });
    return [v, _];
  }
  const iw = function () {
    if (typeof navigator > 'u' || typeof window > 'u') return !1;
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        e,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        e == null ? void 0 : e.substr(0, 4),
      )
    );
  };
  var Rg = b.createContext(null);
  function ow() {
    return je(Rg);
  }
  function aw() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
      t = we(!1),
      n = ge(t, 2),
      r = n[0],
      i = n[1],
      o = ie(null),
      l = function () {
        window.clearTimeout(o.current);
      };
    Fe(function () {
      return l;
    }, []);
    var s = function (f, p) {
      l(),
        (o.current = window.setTimeout(function () {
          i(f), p && p();
        }, e));
    };
    return [r, s, l];
  }
  function Mg() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250,
      t = ie(null),
      n = ie(null);
    Fe(function () {
      return function () {
        window.clearTimeout(n.current);
      };
    }, []);
    function r(i) {
      (i || t.current === null) && (t.current = i),
        window.clearTimeout(n.current),
        (n.current = window.setTimeout(function () {
          t.current = null;
        }, e));
    }
    return [
      function () {
        return t.current;
      },
      r,
    ];
  }
  function lw(e, t, n, r) {
    var i = ie(null);
    (i.current = { open: t, triggerOpen: n, customizedTrigger: r }),
      Fe(function () {
        function o(l) {
          var s;
          if (!((s = i.current) !== null && s !== void 0 && s.customizedTrigger)) {
            var d = l.target;
            d.shadowRoot && l.composed && (d = l.composedPath()[0] || d),
              i.current.open &&
                e()
                  .filter(function (f) {
                    return f;
                  })
                  .every(function (f) {
                    return !f.contains(d) && f !== d;
                  }) &&
                i.current.triggerOpen(!1);
          }
        }
        return (
          window.addEventListener('mousedown', o),
          function () {
            return window.removeEventListener('mousedown', o);
          }
        );
      }, []);
  }
  var sw = [
      'prefixCls',
      'invalidate',
      'item',
      'renderItem',
      'responsive',
      'responsiveDisabled',
      'registerSize',
      'itemKey',
      'className',
      'style',
      'children',
      'display',
      'order',
      'component',
    ],
    to = void 0;
  function cw(e, t) {
    var n = e.prefixCls,
      r = e.invalidate,
      i = e.item,
      o = e.renderItem,
      l = e.responsive,
      s = e.responsiveDisabled,
      d = e.registerSize,
      f = e.itemKey,
      p = e.className,
      h = e.style,
      v = e.children,
      x = e.display,
      y = e.order,
      C = e.component,
      O = C === void 0 ? 'div' : C,
      E = qt(e, sw),
      _ = l && !x;
    function P(I) {
      d(f, I);
    }
    Fe(function () {
      return function () {
        P(null);
      };
    }, []);
    var N = o && i !== to ? o(i) : v,
      j;
    r ||
      (j = {
        opacity: _ ? 0 : 1,
        height: _ ? 0 : to,
        overflowY: _ ? 'hidden' : to,
        order: l ? y : to,
        pointerEvents: _ ? 'none' : to,
        position: _ ? 'absolute' : to,
      });
    var u = {};
    _ && (u['aria-hidden'] = !0);
    var $ = b.createElement(O, rt({ className: he(!r && n, p), style: G(G({}, j), h) }, u, E, { ref: t }), N);
    return (
      l &&
        ($ = b.createElement(
          Hr,
          {
            onResize: function (M) {
              var D = M.offsetWidth;
              P(D);
            },
            disabled: s,
          },
          $,
        )),
      $
    );
  }
  var Do = We(cw);
  Do.displayName = 'Item';
  function uw() {
    var e = Ur({}),
      t = ge(e, 2),
      n = t[1],
      r = ie([]),
      i = 0,
      o = 0;
    function l(s) {
      var d = i;
      (i += 1), r.current.length < d + 1 && (r.current[d] = s);
      var f = r.current[d];
      function p(h) {
        (r.current[d] = typeof h == 'function' ? h(r.current[d]) : h),
          Sn.cancel(o),
          (o = Sn(function () {
            n({}, !0);
          }));
      }
      return [f, p];
    }
    return l;
  }
  var dw = ['component'],
    fw = ['className'],
    pw = ['className'],
    gw = function (t, n) {
      var r = je(dl);
      if (!r) {
        var i = t.component,
          o = i === void 0 ? 'div' : i,
          l = qt(t, dw);
        return b.createElement(o, rt({}, l, { ref: n }));
      }
      var s = r.className,
        d = qt(r, fw),
        f = t.className,
        p = qt(t, pw);
      return b.createElement(
        dl.Provider,
        { value: null },
        b.createElement(Do, rt({ ref: n, className: he(s, f) }, d, p)),
      );
    },
    Ag = We(gw);
  Ag.displayName = 'RawItem';
  var hw = [
      'prefixCls',
      'data',
      'renderItem',
      'renderRawItem',
      'itemKey',
      'itemWidth',
      'ssr',
      'style',
      'className',
      'maxCount',
      'renderRest',
      'renderRawRest',
      'suffix',
      'component',
      'itemComponent',
      'onVisibleChange',
    ],
    dl = b.createContext(null),
    Dg = 'responsive',
    Fg = 'invalidate';
  function mw(e) {
    return '+ '.concat(e.length, ' ...');
  }
  function vw(e, t) {
    var n = e.prefixCls,
      r = n === void 0 ? 'rc-overflow' : n,
      i = e.data,
      o = i === void 0 ? [] : i,
      l = e.renderItem,
      s = e.renderRawItem,
      d = e.itemKey,
      f = e.itemWidth,
      p = f === void 0 ? 10 : f,
      h = e.ssr,
      v = e.style,
      x = e.className,
      y = e.maxCount,
      C = e.renderRest,
      O = e.renderRawRest,
      E = e.suffix,
      _ = e.component,
      P = _ === void 0 ? 'div' : _,
      N = e.itemComponent,
      j = e.onVisibleChange,
      u = qt(e, hw),
      $ = uw(),
      I = h === 'full',
      M = $(null),
      D = ge(M, 2),
      B = D[0],
      F = D[1],
      A = B || 0,
      z = $(new Map()),
      V = ge(z, 2),
      U = V[0],
      X = V[1],
      Z = $(0),
      ee = ge(Z, 2),
      le = ee[0],
      ce = ee[1],
      xe = $(0),
      Q = ge(xe, 2),
      Ce = Q[0],
      Se = Q[1],
      me = $(0),
      se = ge(me, 2),
      $e = se[0],
      Ee = se[1],
      Me = we(null),
      Le = ge(Me, 2),
      Re = Le[0],
      ne = Le[1],
      Te = we(null),
      He = ge(Te, 2),
      oe = He[0],
      ue = He[1],
      de = De(
        function () {
          return oe === null && I ? Number.MAX_SAFE_INTEGER : oe || 0;
        },
        [oe, B],
      ),
      Be = we(!1),
      Xe = ge(Be, 2),
      Ct = Xe[0],
      _t = Xe[1],
      $t = ''.concat(r, '-item'),
      ht = Math.max(le, Ce),
      vt = y === Dg,
      pt = o.length && vt,
      Kt = y === Fg,
      Tt = pt || (typeof y == 'number' && o.length > y),
      at = De(
        function () {
          var ve = o;
          return (
            pt
              ? B === null && I
                ? (ve = o)
                : (ve = o.slice(0, Math.min(o.length, A / p)))
              : typeof y == 'number' && (ve = o.slice(0, y)),
            ve
          );
        },
        [o, p, B, y, pt],
      ),
      tt = De(
        function () {
          return pt ? o.slice(de + 1) : o.slice(at.length);
        },
        [o, at, pt, de],
      ),
      Xt = Qt(
        function (ve, Oe) {
          var Ne;
          return typeof d == 'function'
            ? d(ve)
            : (Ne = d && (ve == null ? void 0 : ve[d])) !== null && Ne !== void 0
            ? Ne
            : Oe;
        },
        [d],
      ),
      zt = Qt(
        l ||
          function (ve) {
            return ve;
          },
        [l],
      );
    function Ve(ve, Oe, Ne) {
      (oe === ve && (Oe === void 0 || Oe === Re)) ||
        (ue(ve), Ne || (_t(ve < o.length - 1), j == null || j(ve)), Oe !== void 0 && ne(Oe));
    }
    function nt(ve, Oe) {
      F(Oe.clientWidth);
    }
    function It(ve, Oe) {
      X(function (Ne) {
        var Ue = new Map(Ne);
        return Oe === null ? Ue.delete(ve) : Ue.set(ve, Oe), Ue;
      });
    }
    function gt(ve, Oe) {
      Se(Oe), ce(Ce);
    }
    function lt(ve, Oe) {
      Ee(Oe);
    }
    function Lt(ve) {
      return U.get(Xt(at[ve], ve));
    }
    Wt(
      function () {
        if (A && ht && at) {
          var ve = $e,
            Oe = at.length,
            Ne = Oe - 1;
          if (!Oe) {
            Ve(0, null);
            return;
          }
          for (var Ue = 0; Ue < Oe; Ue += 1) {
            var ft = Lt(Ue);
            if ((I && (ft = ft || 0), ft === void 0)) {
              Ve(Ue - 1, void 0, !0);
              break;
            }
            if (((ve += ft), (Ne === 0 && ve <= A) || (Ue === Ne - 1 && ve + Lt(Ne) <= A))) {
              Ve(Ne, null);
              break;
            } else if (ve + ht > A) {
              Ve(Ue - 1, ve - ft - $e + Ce);
              break;
            }
          }
          E && Lt(0) + $e > A && ne(null);
        }
      },
      [A, U, Ce, $e, Xt, at],
    );
    var Ut = Ct && !!tt.length,
      Pe = {};
    Re !== null && pt && (Pe = { position: 'absolute', left: Re, top: 0 });
    var ke = { prefixCls: $t, responsive: pt, component: N, invalidate: Kt },
      mt = s
        ? function (ve, Oe) {
            var Ne = Xt(ve, Oe);
            return b.createElement(
              dl.Provider,
              {
                key: Ne,
                value: G(G({}, ke), {}, { order: Oe, item: ve, itemKey: Ne, registerSize: It, display: Oe <= de }),
              },
              s(ve, Oe),
            );
          }
        : function (ve, Oe) {
            var Ne = Xt(ve, Oe);
            return b.createElement(
              Do,
              rt({}, ke, {
                order: Oe,
                key: Ne,
                item: ve,
                renderItem: zt,
                itemKey: Ne,
                registerSize: It,
                display: Oe <= de,
              }),
            );
          },
      ct,
      wt = {
        order: Ut ? de : Number.MAX_SAFE_INTEGER,
        className: ''.concat($t, '-rest'),
        registerSize: gt,
        display: Ut,
      };
    if (O) O && (ct = b.createElement(dl.Provider, { value: G(G({}, ke), wt) }, O(tt)));
    else {
      var pn = C || mw;
      ct = b.createElement(Do, rt({}, ke, wt), typeof pn == 'function' ? pn(tt) : pn);
    }
    var Gt = b.createElement(
      P,
      rt({ className: he(!Kt && r, x), style: v, ref: t }, u),
      at.map(mt),
      Tt ? ct : null,
      E &&
        b.createElement(
          Do,
          rt({}, ke, {
            responsive: vt,
            responsiveDisabled: !pt,
            order: de,
            className: ''.concat($t, '-suffix'),
            registerSize: lt,
            display: !0,
            style: Pe,
          }),
          E,
        ),
    );
    return vt && (Gt = b.createElement(Hr, { onResize: nt, disabled: !pt }, Gt)), Gt;
  }
  var Fo = We(vw);
  (Fo.displayName = 'Overflow'), (Fo.Item = Ag), (Fo.RESPONSIVE = Dg), (Fo.INVALIDATE = Fg);
  var fl = function (t) {
      var n = t.className,
        r = t.customizeIcon,
        i = t.customizeIconProps,
        o = t.onMouseDown,
        l = t.onClick,
        s = t.children,
        d;
      return (
        typeof r == 'function' ? (d = r(i)) : (d = r),
        b.createElement(
          'span',
          {
            className: n,
            onMouseDown: function (p) {
              p.preventDefault(), o && o(p);
            },
            style: { userSelect: 'none', WebkitUserSelect: 'none' },
            unselectable: 'on',
            onClick: l,
            'aria-hidden': !0,
          },
          d !== void 0
            ? d
            : b.createElement(
                'span',
                {
                  className: he(
                    n.split(/\s+/).map(function (f) {
                      return ''.concat(f, '-icon');
                    }),
                  ),
                },
                s,
              ),
        )
      );
    },
    bw = function (t, n) {
      var r,
        i,
        o = t.prefixCls,
        l = t.id,
        s = t.inputElement,
        d = t.disabled,
        f = t.tabIndex,
        p = t.autoFocus,
        h = t.autoComplete,
        v = t.editable,
        x = t.activeDescendantId,
        y = t.value,
        C = t.maxLength,
        O = t.onKeyDown,
        E = t.onMouseDown,
        _ = t.onChange,
        P = t.onPaste,
        N = t.onCompositionStart,
        j = t.onCompositionEnd,
        u = t.open,
        $ = t.attrs,
        I = s || b.createElement('input', null),
        M = I,
        D = M.ref,
        B = M.props,
        F = B.onKeyDown,
        A = B.onChange,
        z = B.onMouseDown,
        V = B.onCompositionStart,
        U = B.onCompositionEnd,
        X = B.style;
      return (
        'maxLength' in I.props,
        (I = un(
          I,
          G(
            G(
              G({ type: 'search' }, B),
              {},
              {
                id: l,
                ref: di(n, D),
                disabled: d,
                tabIndex: f,
                autoComplete: h || 'off',
                autoFocus: p,
                className: he(
                  ''.concat(o, '-selection-search-input'),
                  (r = I) === null || r === void 0 || (i = r.props) === null || i === void 0 ? void 0 : i.className,
                ),
                role: 'combobox',
                'aria-expanded': u,
                'aria-haspopup': 'listbox',
                'aria-owns': ''.concat(l, '_list'),
                'aria-autocomplete': 'list',
                'aria-controls': ''.concat(l, '_list'),
                'aria-activedescendant': x,
              },
              $,
            ),
            {},
            {
              value: v ? y : '',
              maxLength: C,
              readOnly: !v,
              unselectable: v ? null : 'on',
              style: G(G({}, X), {}, { opacity: v ? null : 0 }),
              onKeyDown: function (ee) {
                O(ee), F && F(ee);
              },
              onMouseDown: function (ee) {
                E(ee), z && z(ee);
              },
              onChange: function (ee) {
                _(ee), A && A(ee);
              },
              onCompositionStart: function (ee) {
                N(ee), V && V(ee);
              },
              onCompositionEnd: function (ee) {
                j(ee), U && U(ee);
              },
              onPaste: P,
            },
          ),
        )),
        I
      );
    },
    _c = We(bw);
  _c.displayName = 'Input';
  function jg(e) {
    return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
  }
  var yw = typeof window < 'u' && window.document && window.document.documentElement,
    Cw = yw;
  function Sw(e) {
    return e != null;
  }
  function zg(e) {
    return ['string', 'number'].includes(Et(e));
  }
  function Lg(e) {
    var t = void 0;
    return e && (zg(e.title) ? (t = e.title.toString()) : zg(e.label) && (t = e.label.toString())), t;
  }
  function xw(e, t) {
    Cw ? zr(e, t) : Fe(e, t);
  }
  function ww(e) {
    var t;
    return (t = e.key) !== null && t !== void 0 ? t : e.value;
  }
  var Hg = function (t) {
      t.preventDefault(), t.stopPropagation();
    },
    Ew = function (t) {
      var n = t.id,
        r = t.prefixCls,
        i = t.values,
        o = t.open,
        l = t.searchValue,
        s = t.autoClearSearchValue,
        d = t.inputRef,
        f = t.placeholder,
        p = t.disabled,
        h = t.mode,
        v = t.showSearch,
        x = t.autoFocus,
        y = t.autoComplete,
        C = t.activeDescendantId,
        O = t.tabIndex,
        E = t.removeIcon,
        _ = t.maxTagCount,
        P = t.maxTagTextLength,
        N = t.maxTagPlaceholder,
        j =
          N === void 0
            ? function (ne) {
                return '+ '.concat(ne.length, ' ...');
              }
            : N,
        u = t.tagRender,
        $ = t.onToggleOpen,
        I = t.onRemove,
        M = t.onInputChange,
        D = t.onInputPaste,
        B = t.onInputKeyDown,
        F = t.onInputMouseDown,
        A = t.onInputCompositionStart,
        z = t.onInputCompositionEnd,
        V = ie(null),
        U = we(0),
        X = ge(U, 2),
        Z = X[0],
        ee = X[1],
        le = we(!1),
        ce = ge(le, 2),
        xe = ce[0],
        Q = ce[1],
        Ce = ''.concat(r, '-selection'),
        Se = o || (h === 'multiple' && s === !1) || h === 'tags' ? l : '',
        me = h === 'tags' || (h === 'multiple' && s === !1) || (v && (o || xe));
      xw(
        function () {
          ee(V.current.scrollWidth);
        },
        [Se],
      );
      function se(ne, Te, He, oe, ue) {
        return b.createElement(
          'span',
          { className: he(''.concat(Ce, '-item'), Ie({}, ''.concat(Ce, '-item-disabled'), He)), title: Lg(ne) },
          b.createElement('span', { className: ''.concat(Ce, '-item-content') }, Te),
          oe &&
            b.createElement(
              fl,
              { className: ''.concat(Ce, '-item-remove'), onMouseDown: Hg, onClick: ue, customizeIcon: E },
              '×',
            ),
        );
      }
      function $e(ne, Te, He, oe, ue) {
        var de = function (Xe) {
          Hg(Xe), $(!o);
        };
        return b.createElement(
          'span',
          { onMouseDown: de },
          u({ label: Te, value: ne, disabled: He, closable: oe, onClose: ue }),
        );
      }
      function Ee(ne) {
        var Te = ne.disabled,
          He = ne.label,
          oe = ne.value,
          ue = !p && !Te,
          de = He;
        if (typeof P == 'number' && (typeof He == 'string' || typeof He == 'number')) {
          var Be = String(de);
          Be.length > P && (de = ''.concat(Be.slice(0, P), '...'));
        }
        var Xe = function (_t) {
          _t && _t.stopPropagation(), I(ne);
        };
        return typeof u == 'function' ? $e(oe, de, Te, ue, Xe) : se(ne, de, Te, ue, Xe);
      }
      function Me(ne) {
        var Te = typeof j == 'function' ? j(ne) : j;
        return se({ title: Te }, Te, !1);
      }
      var Le = b.createElement(
          'div',
          {
            className: ''.concat(Ce, '-search'),
            style: { width: Z },
            onFocus: function () {
              Q(!0);
            },
            onBlur: function () {
              Q(!1);
            },
          },
          b.createElement(_c, {
            ref: d,
            open: o,
            prefixCls: r,
            id: n,
            inputElement: null,
            disabled: p,
            autoFocus: x,
            autoComplete: y,
            editable: me,
            activeDescendantId: C,
            value: Se,
            onKeyDown: B,
            onMouseDown: F,
            onChange: M,
            onPaste: D,
            onCompositionStart: A,
            onCompositionEnd: z,
            tabIndex: O,
            attrs: Mo(t, !0),
          }),
          b.createElement('span', { ref: V, className: ''.concat(Ce, '-search-mirror'), 'aria-hidden': !0 }, Se, ' '),
        ),
        Re = b.createElement(Fo, {
          prefixCls: ''.concat(Ce, '-overflow'),
          data: i,
          renderItem: Ee,
          renderRest: Me,
          suffix: Le,
          itemKey: ww,
          maxCount: _,
        });
      return b.createElement(
        b.Fragment,
        null,
        Re,
        !i.length && !Se && b.createElement('span', { className: ''.concat(Ce, '-placeholder') }, f),
      );
    },
    $w = function (t) {
      var n = t.inputElement,
        r = t.prefixCls,
        i = t.id,
        o = t.inputRef,
        l = t.disabled,
        s = t.autoFocus,
        d = t.autoComplete,
        f = t.activeDescendantId,
        p = t.mode,
        h = t.open,
        v = t.values,
        x = t.placeholder,
        y = t.tabIndex,
        C = t.showSearch,
        O = t.searchValue,
        E = t.activeValue,
        _ = t.maxLength,
        P = t.onInputKeyDown,
        N = t.onInputMouseDown,
        j = t.onInputChange,
        u = t.onInputPaste,
        $ = t.onInputCompositionStart,
        I = t.onInputCompositionEnd,
        M = we(!1),
        D = ge(M, 2),
        B = D[0],
        F = D[1],
        A = p === 'combobox',
        z = A || C,
        V = v[0],
        U = O || '';
      A && E && !B && (U = E),
        Fe(
          function () {
            A && F(!1);
          },
          [A, E],
        );
      var X = p !== 'combobox' && !h && !C ? !1 : !!U,
        Z = Lg(V),
        ee = function () {
          if (V) return null;
          var ce = X ? { visibility: 'hidden' } : void 0;
          return b.createElement('span', { className: ''.concat(r, '-selection-placeholder'), style: ce }, x);
        };
      return b.createElement(
        b.Fragment,
        null,
        b.createElement(
          'span',
          { className: ''.concat(r, '-selection-search') },
          b.createElement(_c, {
            ref: o,
            prefixCls: r,
            id: i,
            open: h,
            inputElement: n,
            disabled: l,
            autoFocus: s,
            autoComplete: d,
            editable: z,
            activeDescendantId: f,
            value: U,
            onKeyDown: P,
            onMouseDown: N,
            onChange: function (ce) {
              F(!0), j(ce);
            },
            onPaste: u,
            onCompositionStart: $,
            onCompositionEnd: I,
            tabIndex: y,
            attrs: Mo(t, !0),
            maxLength: A ? _ : void 0,
          }),
        ),
        !A && V && !X && b.createElement('span', { className: ''.concat(r, '-selection-item'), title: Z }, V.label),
        ee(),
      );
    };
  function Ow(e) {
    return ![
      ye.ESC,
      ye.SHIFT,
      ye.BACKSPACE,
      ye.TAB,
      ye.WIN_KEY,
      ye.ALT,
      ye.META,
      ye.WIN_KEY_RIGHT,
      ye.CTRL,
      ye.SEMICOLON,
      ye.EQUALS,
      ye.CAPS_LOCK,
      ye.CONTEXT_MENU,
      ye.F1,
      ye.F2,
      ye.F3,
      ye.F4,
      ye.F5,
      ye.F6,
      ye.F7,
      ye.F8,
      ye.F9,
      ye.F10,
      ye.F11,
      ye.F12,
    ].includes(e);
  }
  var _w = function (t, n) {
      var r = ie(null),
        i = ie(!1),
        o = t.prefixCls,
        l = t.open,
        s = t.mode,
        d = t.showSearch,
        f = t.tokenWithEnter,
        p = t.autoClearSearchValue,
        h = t.onSearch,
        v = t.onSearchSubmit,
        x = t.onToggleOpen,
        y = t.onInputKeyDown,
        C = t.domRef;
      on(n, function () {
        return {
          focus: function () {
            r.current.focus();
          },
          blur: function () {
            r.current.blur();
          },
        };
      });
      var O = Mg(0),
        E = ge(O, 2),
        _ = E[0],
        P = E[1],
        N = function (X) {
          var Z = X.which;
          (Z === ye.UP || Z === ye.DOWN) && X.preventDefault(),
            y && y(X),
            Z === ye.ENTER && s === 'tags' && !i.current && !l && (v == null || v(X.target.value)),
            Ow(Z) && x(!0);
        },
        j = function () {
          P(!0);
        },
        u = ie(null),
        $ = function (X) {
          h(X, !0, i.current) !== !1 && x(!0);
        },
        I = function () {
          i.current = !0;
        },
        M = function (X) {
          (i.current = !1), s !== 'combobox' && $(X.target.value);
        },
        D = function (X) {
          var Z = X.target.value;
          if (f && u.current && /[\r\n]/.test(u.current)) {
            var ee = u.current
              .replace(/[\r\n]+$/, '')
              .replace(/\r\n/g, ' ')
              .replace(/[\r\n]/g, ' ');
            Z = Z.replace(ee, u.current);
          }
          (u.current = null), $(Z);
        },
        B = function (X) {
          var Z = X.clipboardData,
            ee = Z.getData('text');
          u.current = ee;
        },
        F = function (X) {
          var Z = X.target;
          if (Z !== r.current) {
            var ee = document.body.style.msTouchAction !== void 0;
            ee
              ? setTimeout(function () {
                  r.current.focus();
                })
              : r.current.focus();
          }
        },
        A = function (X) {
          var Z = _();
          X.target !== r.current && !Z && s !== 'combobox' && X.preventDefault(),
            ((s !== 'combobox' && (!d || !Z)) || !l) && (l && p !== !1 && h('', !0, !1), x());
        },
        z = {
          inputRef: r,
          onInputKeyDown: N,
          onInputMouseDown: j,
          onInputChange: D,
          onInputPaste: B,
          onInputCompositionStart: I,
          onInputCompositionEnd: M,
        },
        V = s === 'multiple' || s === 'tags' ? b.createElement(Ew, rt({}, t, z)) : b.createElement($w, rt({}, t, z));
      return b.createElement('div', { ref: C, className: ''.concat(o, '-selector'), onClick: F, onMouseDown: A }, V);
    },
    Bg = We(_w);
  Bg.displayName = 'Selector';
  var kg = b.createContext(null);
  function Vg(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
  }
  function Tw(e, t, n) {
    var r = Vg(t ?? e),
      i = Vg(n ?? e);
    return [new Set(r), new Set(i)];
  }
  function Iw() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      n = arguments.length > 2 ? arguments[2] : void 0;
    return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
  }
  function Pw(e, t, n, r) {
    for (var i = n.points, o = Object.keys(e), l = 0; l < o.length; l += 1) {
      var s,
        d = o[l];
      if (Iw((s = e[d]) === null || s === void 0 ? void 0 : s.points, i, r))
        return ''.concat(t, '-placement-').concat(d);
    }
    return '';
  }
  function Wg(e, t, n, r) {
    return t || (n ? { motionName: ''.concat(e, '-').concat(n) } : r ? { motionName: r } : null);
  }
  function pl(e) {
    return e.ownerDocument.defaultView;
  }
  function Tc(e) {
    for (var t = [], n = e == null ? void 0 : e.parentElement, r = ['hidden', 'scroll', 'auto']; n; ) {
      var i = pl(n).getComputedStyle(n),
        o = i.overflowX,
        l = i.overflowY;
      (r.includes(o) || r.includes(l)) && t.push(n), (n = n.parentElement);
    }
    return t;
  }
  function gl(e) {
    return Number.isNaN(e) ? 1 : e;
  }
  function Ug() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    return [e[0], e[1]];
  }
  function no(e, t) {
    var n = t[0],
      r = t[1],
      i,
      o;
    return (
      n === 't' ? (o = e.y) : n === 'b' ? (o = e.y + e.height) : (o = e.y + e.height / 2),
      r === 'l' ? (i = e.x) : r === 'r' ? (i = e.x + e.width) : (i = e.x + e.width / 2),
      { x: i, y: o }
    );
  }
  function Kr(e, t) {
    var n = { t: 'b', b: 't', l: 'r', r: 'l' };
    return e
      .map(function (r, i) {
        return i === t ? n[r] || 'c' : r;
      })
      .join('');
  }
  function Nw(e, t, n, r, i, o, l) {
    var s = we({ ready: !1, offsetX: 0, offsetY: 0, arrowX: 0, arrowY: 0, scaleX: 1, scaleY: 1, align: i[r] || {} }),
      d = ge(s, 2),
      f = d[0],
      p = d[1],
      h = ie(0),
      v = De(
        function () {
          return t ? Tc(t) : [];
        },
        [t],
      ),
      x = eo(function () {
        if (t && n && e) {
          var O = t,
            E = O.style.left,
            _ = O.style.top,
            P = O.ownerDocument,
            N = pl(O),
            j = i[r] || o || {};
          (O.style.left = '0'), (O.style.top = '0');
          var u;
          if (Array.isArray(n)) u = { x: n[0], y: n[1], width: 0, height: 0 };
          else {
            var $ = n.getBoundingClientRect();
            u = { x: $.x, y: $.y, width: $.width, height: $.height };
          }
          var I = O.getBoundingClientRect(),
            M = N.getComputedStyle(O),
            D = M.width,
            B = M.height,
            F = P.documentElement,
            A = F.clientWidth,
            z = F.clientHeight,
            V = F.scrollWidth,
            U = F.scrollHeight,
            X = F.scrollTop,
            Z = F.scrollLeft,
            ee = I.height,
            le = I.width,
            ce = u.height,
            xe = u.width,
            Q =
              j.htmlRegion === 'scroll'
                ? { left: -Z, top: -X, right: V - Z, bottom: U - X }
                : { left: 0, top: 0, right: A, bottom: z };
          (v || []).forEach(function (Nn) {
            var ln = Nn.getBoundingClientRect(),
              Hn = Nn.offsetHeight,
              Ei = Nn.clientHeight,
              mr = Nn.offsetWidth,
              $i = Nn.clientWidth,
              ti = gl(Math.round((ln.width / mr) * 1e3) / 1e3),
              Cr = gl(Math.round((ln.height / Hn) * 1e3) / 1e3),
              Rr = (mr - $i) * ti,
              Mr = (Hn - Ei) * Cr,
              ni = ln.x + ln.width - Rr,
              sn = ln.y + ln.height - Mr;
            (Q.left = Math.max(Q.left, ln.left)),
              (Q.top = Math.max(Q.top, ln.top)),
              (Q.right = Math.min(Q.right, ni)),
              (Q.bottom = Math.min(Q.bottom, sn));
          }),
            (O.style.left = E),
            (O.style.top = _);
          var Ce = gl(Math.round((le / parseFloat(D)) * 1e3) / 1e3),
            Se = gl(Math.round((ee / parseFloat(B)) * 1e3) / 1e3);
          if (Ce === 0 || Se === 0) return;
          var me = j.offset,
            se = j.targetOffset,
            $e = me || [],
            Ee = ge($e, 2),
            Me = Ee[0],
            Le = Me === void 0 ? 0 : Me,
            Re = Ee[1],
            ne = Re === void 0 ? 0 : Re,
            Te = se || [],
            He = ge(Te, 2),
            oe = He[0],
            ue = oe === void 0 ? 0 : oe,
            de = He[1],
            Be = de === void 0 ? 0 : de;
          (u.x += ue), (u.y += Be);
          var Xe = j.points || [],
            Ct = ge(Xe, 2),
            _t = Ct[0],
            $t = Ct[1],
            ht = Ug($t),
            vt = Ug(_t),
            pt = no(u, ht),
            Kt = no(I, vt),
            Tt = G({}, j),
            at = pt.x - Kt.x + Le,
            tt = pt.y - Kt.y + ne,
            Xt = no(u, ['t', 'l']),
            zt = no(I, ['t', 'l']),
            Ve = no(u, ['b', 'r']),
            nt = no(I, ['b', 'r']),
            It = j.overflow || {},
            gt = It.adjustX,
            lt = It.adjustY,
            Lt = It.shiftX,
            Ut = It.shiftY,
            Pe = function (ln) {
              return typeof ln == 'boolean' ? ln : ln >= 0;
            },
            ke = I.y + tt,
            mt = ke + ee,
            ct = Pe(lt),
            wt = vt[0] === ht[0];
          ct &&
            vt[0] === 't' &&
            mt > Q.bottom &&
            (wt ? (tt -= ee - ce) : (tt = Xt.y - nt.y - ne), (Tt.points = [Kr(vt, 0), Kr(ht, 0)])),
            ct &&
              vt[0] === 'b' &&
              ke < Q.top &&
              (wt ? (tt += ee - ce) : (tt = Ve.y - zt.y - ne), (Tt.points = [Kr(vt, 0), Kr(ht, 0)]));
          var pn = I.x + at,
            Gt = pn + le,
            ve = Pe(gt),
            Oe = vt[1] === ht[1];
          ve &&
            vt[1] === 'l' &&
            Gt > Q.right &&
            (Oe ? (at -= le - xe) : (at = Xt.x - nt.x - Le), (Tt.points = [Kr(vt, 1), Kr(ht, 1)])),
            ve &&
              vt[1] === 'r' &&
              pn < Q.left &&
              (Oe ? (at += le - xe) : (at = Ve.x - zt.x - Le), (Tt.points = [Kr(vt, 1), Kr(ht, 1)]));
          var Ne = Lt === !0 ? 0 : Lt;
          typeof Ne == 'number' &&
            (pn < Q.left && ((at -= pn - Q.left), u.x + xe < Q.left + Ne && (at += u.x - Q.left + xe - Ne)),
            Gt > Q.right && ((at -= Gt - Q.right), u.x > Q.right - Ne && (at += u.x - Q.right + Ne)));
          var Ue = Ut === !0 ? 0 : Ut;
          typeof Ue == 'number' &&
            (ke < Q.top && ((tt -= ke - Q.top), u.y + ce < Q.top + Ue && (tt += u.y - Q.top + ce - Ue)),
            mt > Q.bottom && ((tt -= mt - Q.bottom), u.y > Q.bottom - Ue && (tt += u.y - Q.bottom + Ue)));
          var ft = I.x + at,
            Pt = ft + le,
            Tn = I.y + tt,
            wn = Tn + ee,
            Fn = u.x,
            Dt = Fn + xe,
            En = u.y,
            Yn = En + ce,
            vn = Math.max(ft, Fn),
            hr = Math.min(Pt, Dt),
            In = (vn + hr) / 2,
            jn = In - ft,
            Jr = Math.max(Tn, En),
            Zr = Math.min(wn, Yn),
            sr = (Jr + Zr) / 2,
            ei = sr - Tn;
          l == null || l(t, Tt),
            p({
              ready: !0,
              offsetX: at / Ce,
              offsetY: tt / Se,
              arrowX: jn / Ce,
              arrowY: ei / Se,
              scaleX: Ce,
              scaleY: Se,
              align: Tt,
            });
        }
      }),
      y = function () {
        h.current += 1;
        var E = h.current;
        Promise.resolve().then(function () {
          h.current === E && x();
        });
      },
      C = function () {
        p(function (E) {
          return G(G({}, E), {}, { ready: !1 });
        });
      };
    return (
      Wt(C, [r]),
      Wt(
        function () {
          e || C();
        },
        [e],
      ),
      [f.ready, f.offsetX, f.offsetY, f.arrowX, f.arrowY, f.scaleX, f.scaleY, f.align, y]
    );
  }
  function Rw(e, t, n, r) {
    Wt(
      function () {
        if (e && t && n) {
          let p = function () {
            r();
          };
          var i = t,
            o = n,
            l = Tc(i),
            s = Tc(o),
            d = pl(o),
            f = new Set([d].concat(ze(l), ze(s)));
          return (
            f.forEach(function (h) {
              h.addEventListener('scroll', p, { passive: !0 });
            }),
            d.addEventListener('resize', p, { passive: !0 }),
            r(),
            function () {
              f.forEach(function (h) {
                h.removeEventListener('scroll', p), d.removeEventListener('resize', p);
              });
            }
          );
        }
      },
      [e, t, n],
    );
  }
  function Mw(e) {
    var t = e.prefixCls,
      n = e.align,
      r = e.arrowX,
      i = r === void 0 ? 0 : r,
      o = e.arrowY,
      l = o === void 0 ? 0 : o,
      s = ie();
    if (!n || !n.points) return null;
    var d = { position: 'absolute' };
    if (n.autoArrow !== !1) {
      var f = n.points[0],
        p = n.points[1],
        h = f[0],
        v = f[1],
        x = p[0],
        y = p[1];
      h === x || !['t', 'b'].includes(h) ? (d.top = l) : h === 't' ? (d.top = 0) : (d.bottom = 0),
        v === y || !['l', 'r'].includes(v) ? (d.left = i) : v === 'l' ? (d.left = 0) : (d.right = 0);
    }
    return b.createElement('div', { ref: s, className: ''.concat(t, '-arrow'), style: d });
  }
  function Aw(e) {
    var t = e.prefixCls,
      n = e.open,
      r = e.zIndex,
      i = e.mask,
      o = e.motion;
    return i
      ? React.createElement(Tr, rt({}, o, { motionAppear: !0, visible: n, removeOnLeave: !0 }), function (l) {
          var s = l.className;
          return React.createElement('div', { style: { zIndex: r }, className: he(''.concat(t, '-mask'), s) });
        })
      : null;
  }
  var Dw = We(function (e, t) {
      var n = e.popup,
        r = e.className,
        i = e.prefixCls,
        o = e.style,
        l = e.target,
        s = e.onVisibleChanged,
        d = e.open,
        f = e.keepDom,
        p = e.onClick,
        h = e.mask,
        v = e.arrow,
        x = e.align,
        y = e.arrowX,
        C = e.arrowY,
        O = e.motion,
        E = e.maskMotion,
        _ = e.forceRender,
        P = e.getPopupContainer,
        N = e.autoDestroy,
        j = e.portal,
        u = e.zIndex,
        $ = e.onMouseEnter,
        I = e.onMouseLeave,
        M = e.ready,
        D = e.offsetX,
        B = e.offsetY,
        F = e.onAlign,
        A = e.onPrepare,
        z = e.stretch,
        V = e.targetWidth,
        U = e.targetHeight,
        X = typeof n == 'function' ? n() : n,
        Z = d || f,
        ee = (P == null ? void 0 : P.length) > 0,
        le = we(!P || !ee),
        ce = ge(le, 2),
        xe = ce[0],
        Q = ce[1];
      if (
        (Wt(
          function () {
            !xe && ee && l && Q(!0);
          },
          [xe, ee, l],
        ),
        !xe)
      )
        return null;
      var Ce = M || !d ? { left: D, top: B } : { left: '-1000vw', top: '-1000vh' },
        Se = {};
      return (
        z &&
          (z.includes('height') && U ? (Se.height = U) : z.includes('minHeight') && U && (Se.minHeight = U),
          z.includes('width') && V ? (Se.width = V) : z.includes('minWidth') && V && (Se.minWidth = V)),
        d || (Se.pointerEvents = 'none'),
        b.createElement(
          j,
          {
            open: _ || Z,
            getContainer:
              P &&
              function () {
                return P(l);
              },
            autoDestroy: N,
          },
          b.createElement(Aw, { prefixCls: i, open: d, zIndex: u, mask: h, motion: E }),
          b.createElement(Hr, { onResize: F, disabled: !d }, function (me) {
            return b.createElement(
              Tr,
              rt(
                {
                  motionAppear: !0,
                  motionEnter: !0,
                  motionLeave: !0,
                  removeOnLeave: !1,
                  forceRender: _,
                  leavedClassName: ''.concat(i, '-hidden'),
                },
                O,
                {
                  onAppearPrepare: A,
                  onEnterPrepare: A,
                  visible: d,
                  onVisibleChanged: function ($e) {
                    var Ee;
                    O == null || (Ee = O.onVisibleChanged) === null || Ee === void 0 || Ee.call(O, $e), s($e);
                  },
                },
              ),
              function (se, $e) {
                var Ee = se.className,
                  Me = se.style,
                  Le = he(i, Ee, r);
                return b.createElement(
                  'div',
                  {
                    ref: di(me, t, $e),
                    className: Le,
                    style: G(G(G(G({}, Ce), Se), Me), {}, { boxSizing: 'border-box', zIndex: u }, o),
                    onMouseEnter: $,
                    onMouseLeave: I,
                    onClick: p,
                  },
                  v && b.createElement(Mw, { prefixCls: i, align: x, arrowX: y, arrowY: C }),
                  X,
                );
              },
            );
          }),
        )
      );
    }),
    Fw = We(function (e, t) {
      var n = e.children,
        r = e.getTriggerDOMNode,
        i = mo(n),
        o = Qt(
          function (s) {
            Ql(t, r ? r(s) : s);
          },
          [r],
        ),
        l = Jl(o, n.ref);
      return i ? un(n, { ref: l }) : n;
    }),
    jw = [
      'prefixCls',
      'children',
      'action',
      'showAction',
      'hideAction',
      'popupVisible',
      'defaultPopupVisible',
      'onPopupVisibleChange',
      'afterPopupVisibleChange',
      'mouseEnterDelay',
      'mouseLeaveDelay',
      'focusDelay',
      'blurDelay',
      'mask',
      'maskClosable',
      'getPopupContainer',
      'forceRender',
      'autoDestroy',
      'destroyPopupOnHide',
      'popup',
      'popupClassName',
      'popupStyle',
      'popupPlacement',
      'builtinPlacements',
      'popupAlign',
      'zIndex',
      'stretch',
      'getPopupClassNameFromAlign',
      'alignPoint',
      'onPopupClick',
      'onPopupAlign',
      'arrow',
      'popupMotion',
      'maskMotion',
      'popupTransitionName',
      'popupAnimation',
      'maskTransitionName',
      'maskAnimation',
      'className',
      'getTriggerDOMNode',
    ];
  function zw() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ll,
      t = We(function (n, r) {
        var i = n.prefixCls,
          o = i === void 0 ? 'rc-trigger-popup' : i,
          l = n.children,
          s = n.action,
          d = s === void 0 ? 'hover' : s,
          f = n.showAction,
          p = n.hideAction,
          h = n.popupVisible,
          v = n.defaultPopupVisible,
          x = n.onPopupVisibleChange,
          y = n.afterPopupVisibleChange,
          C = n.mouseEnterDelay,
          O = n.mouseLeaveDelay,
          E = O === void 0 ? 0.1 : O,
          _ = n.focusDelay,
          P = n.blurDelay,
          N = n.mask,
          j = n.maskClosable,
          u = j === void 0 ? !0 : j,
          $ = n.getPopupContainer,
          I = n.forceRender,
          M = n.autoDestroy,
          D = n.destroyPopupOnHide,
          B = n.popup,
          F = n.popupClassName,
          A = n.popupStyle,
          z = n.popupPlacement,
          V = n.builtinPlacements,
          U = V === void 0 ? {} : V,
          X = n.popupAlign,
          Z = n.zIndex,
          ee = n.stretch,
          le = n.getPopupClassNameFromAlign,
          ce = n.alignPoint,
          xe = n.onPopupClick,
          Q = n.onPopupAlign,
          Ce = n.arrow,
          Se = n.popupMotion,
          me = n.maskMotion,
          se = n.popupTransitionName,
          $e = n.popupAnimation,
          Ee = n.maskTransitionName,
          Me = n.maskAnimation,
          Le = n.className,
          Re = n.getTriggerDOMNode,
          ne = qt(n, jw),
          Te = M || D || !1,
          He = ie({}),
          oe = je(kg),
          ue = De(
            function () {
              return {
                registerSubPopup: function (it, Ht) {
                  (He.current[it] = Ht), oe == null || oe.registerSubPopup(it, Ht);
                },
              };
            },
            [oe],
          ),
          de = Qp(),
          Be = we(null),
          Xe = ge(Be, 2),
          Ct = Xe[0],
          _t = Xe[1],
          $t = Qt(function (Je) {
            Je instanceof HTMLElement && _t(Je), oe == null || oe.registerSubPopup(de, Je);
          }, []),
          ht = we(null),
          vt = ge(ht, 2),
          pt = vt[0],
          Kt = vt[1],
          Tt = Qt(function (Je) {
            Je instanceof HTMLElement && Kt(Je);
          }, []),
          at = ui.only(l),
          tt = (at == null ? void 0 : at.props) || {},
          Xt = {},
          zt = eo(function (Je) {
            var it = pt;
            return (
              (it == null ? void 0 : it.contains(Je)) ||
              Je === it ||
              (Ct == null ? void 0 : Ct.contains(Je)) ||
              Je === Ct ||
              Object.values(He.current).some(function (Ht) {
                return Ht.contains(Je) || Je === Ht;
              })
            );
          }),
          Ve = Wg(o, Se, $e, se),
          nt = Wg(o, me, Me, Ee),
          It = Pr(v || !1, { value: h }),
          gt = ge(It, 2),
          lt = gt[0],
          Lt = gt[1],
          Ut = ie(lt);
        Ut.current = lt;
        var Pe = eo(function (Je) {
            lt !== Je && (Lt(Je), x == null || x(Je));
          }),
          ke = ie(),
          mt = function () {
            clearTimeout(ke.current);
          },
          ct = function (it) {
            var Ht = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            mt(),
              Ht === 0
                ? Pe(it)
                : (ke.current = setTimeout(function () {
                    Pe(it);
                  }, Ht * 1e3));
          };
        Fe(function () {
          return mt;
        }, []);
        var wt = we(!1),
          pn = ge(wt, 2),
          Gt = pn[0],
          ve = pn[1],
          Oe = ie(!0);
        Wt(
          function () {
            (!Oe.current || lt) && ve(!0), (Oe.current = !0);
          },
          [lt],
        );
        var Ne = we(null),
          Ue = ge(Ne, 2),
          ft = Ue[0],
          Pt = Ue[1],
          Tn = we([0, 0]),
          wn = ge(Tn, 2),
          Fn = wn[0],
          Dt = wn[1],
          En = function (it) {
            Dt([it.clientX, it.clientY]);
          },
          Yn = Nw(lt, Ct, ce ? Fn : pt, z, U, X, Q),
          vn = ge(Yn, 9),
          hr = vn[0],
          In = vn[1],
          jn = vn[2],
          Jr = vn[3],
          Zr = vn[4],
          sr = vn[5],
          ei = vn[6],
          Nn = vn[7],
          ln = vn[8],
          Hn = eo(function () {
            Gt || ln();
          });
        Rw(lt, pt, Ct, Hn),
          Wt(
            function () {
              Hn();
            },
            [Fn],
          ),
          Wt(
            function () {
              lt && !(U != null && U[z]) && Hn();
            },
            [JSON.stringify(X)],
          );
        var Ei = De(
          function () {
            var Je = Pw(U, o, Nn, ce);
            return he(Je, le == null ? void 0 : le(Nn));
          },
          [Nn, le, U, o, ce],
        );
        on(r, function () {
          return { forceAlign: Hn };
        });
        var mr = function (it) {
            ve(!1), ln(), y == null || y(it);
          },
          $i = function () {
            return new Promise(function (it) {
              Pt(function () {
                return it;
              });
            });
          };
        Wt(
          function () {
            ft && (ln(), ft(), Pt(null));
          },
          [ft],
        );
        var ti = we(0),
          Cr = ge(ti, 2),
          Rr = Cr[0],
          Mr = Cr[1],
          ni = we(0),
          sn = ge(ni, 2),
          vr = sn[0],
          Sr = sn[1],
          ut = function (it, Ht) {
            if ((Hn(), ee)) {
              var rn = Ht.getBoundingClientRect();
              Mr(rn.width), Sr(rn.height);
            }
          },
          et = Tw(d, f, p),
          Jt = ge(et, 2),
          tn = Jt[0],
          Nt = Jt[1],
          cn = function (it, Ht, rn, Zt) {
            Xt[it] = function (so) {
              var co;
              Zt == null || Zt(so), ct(Ht, rn);
              for (var uo = arguments.length, Ol = new Array(uo > 1 ? uo - 1 : 0), fo = 1; fo < uo; fo++)
                Ol[fo - 1] = arguments[fo];
              (co = tt[it]) === null || co === void 0 || co.call.apply(co, [tt, so].concat(Ol));
            };
          },
          Rn = tn.has('click'),
          cr = Nt.has('click') || Nt.has('contextMenu');
        (Rn || cr) &&
          (Xt.onClick = function (Je) {
            var it;
            Ut.current && cr ? ct(!1) : !Ut.current && Rn && (En(Je), ct(!0));
            for (var Ht = arguments.length, rn = new Array(Ht > 1 ? Ht - 1 : 0), Zt = 1; Zt < Ht; Zt++)
              rn[Zt - 1] = arguments[Zt];
            (it = tt.onClick) === null || it === void 0 || it.call.apply(it, [tt, Je].concat(rn));
          }),
          Fe(
            function () {
              if (cr && Ct && (!N || u)) {
                var Je = function (rn) {
                    var Zt = rn.target;
                    Ut.current && !zt(Zt) && ct(!1);
                  },
                  it = pl(Ct);
                return (
                  it.addEventListener('click', Je),
                  function () {
                    it.removeEventListener('click', Je);
                  }
                );
              }
            },
            [cr, Ct, N, u],
          );
        var nn = tn.has('hover'),
          br = Nt.has('hover'),
          Pn,
          Oi;
        nn &&
          (cn('onMouseEnter', !0, C, function (Je) {
            En(Je);
          }),
          (Pn = function () {
            ct(!0, C);
          }),
          ce &&
            (Xt.onMouseMove = function (Je) {
              var it;
              (it = tt.onMouseMove) === null || it === void 0 || it.call(tt, Je);
            })),
          br &&
            (cn('onMouseLeave', !1, E),
            (Oi = function () {
              ct(!1, E);
            })),
          tn.has('focus') && cn('onFocus', !0, _),
          Nt.has('focus') && cn('onBlur', !1, P),
          tn.has('contextMenu') &&
            (Xt.onContextMenu = function (Je) {
              var it;
              En(Je), ct(!0), Je.preventDefault();
              for (var Ht = arguments.length, rn = new Array(Ht > 1 ? Ht - 1 : 0), Zt = 1; Zt < Ht; Zt++)
                rn[Zt - 1] = arguments[Zt];
              (it = tt.onContextMenu) === null || it === void 0 || it.call.apply(it, [tt, Je].concat(rn));
            }),
          Le && (Xt.className = he(tt.className, Le));
        var Bo = G(G({}, tt), Xt),
          xr = {},
          Ar = [
            'onContextMenu',
            'onClick',
            'onMouseDown',
            'onTouchStart',
            'onMouseEnter',
            'onMouseLeave',
            'onFocus',
            'onBlur',
          ];
        Ar.forEach(function (Je) {
          ne[Je] &&
            (xr[Je] = function () {
              for (var it, Ht = arguments.length, rn = new Array(Ht), Zt = 0; Zt < Ht; Zt++) rn[Zt] = arguments[Zt];
              (it = Bo[Je]) === null || it === void 0 || it.call.apply(it, [Bo].concat(rn)), ne[Je].apply(ne, rn);
            });
        });
        var ko = un(at, G(G({}, Bo), xr));
        return b.createElement(
          b.Fragment,
          null,
          b.createElement(
            Hr,
            { disabled: !lt, ref: Tt, onResize: ut },
            b.createElement(Fw, { getTriggerDOMNode: Re }, ko),
          ),
          b.createElement(
            kg.Provider,
            { value: ue },
            b.createElement(Dw, {
              portal: e,
              ref: $t,
              prefixCls: o,
              popup: B,
              className: he(F, Ei),
              style: A,
              target: pt,
              onMouseEnter: Pn,
              onMouseLeave: Oi,
              zIndex: Z,
              open: lt,
              keepDom: Gt,
              onClick: xe,
              mask: N,
              motion: Ve,
              maskMotion: nt,
              onVisibleChanged: mr,
              onPrepare: $i,
              forceRender: I,
              autoDestroy: Te,
              getPopupContainer: $,
              align: Nn,
              arrow: Ce,
              ready: hr,
              offsetX: In,
              offsetY: jn,
              arrowX: Jr,
              arrowY: Zr,
              onAlign: Hn,
              stretch: ee,
              targetWidth: Rr / sr,
              targetHeight: vr / ei,
            }),
          ),
        );
      });
    return t;
  }
  const Gg = zw(ll);
  var Lw = [
      'prefixCls',
      'disabled',
      'visible',
      'children',
      'popupElement',
      'containerWidth',
      'animation',
      'transitionName',
      'dropdownStyle',
      'dropdownClassName',
      'direction',
      'placement',
      'dropdownMatchSelectWidth',
      'dropdownRender',
      'dropdownAlign',
      'getPopupContainer',
      'empty',
      'getTriggerDOMNode',
      'onPopupVisibleChange',
      'onPopupMouseEnter',
    ],
    Hw = function (t) {
      var n = t === !0 ? 0 : 1;
      return {
        bottomLeft: {
          points: ['tl', 'bl'],
          offset: [0, 4],
          overflow: { adjustX: n, adjustY: 1 },
          htmlRegion: 'scroll',
        },
        bottomRight: {
          points: ['tr', 'br'],
          offset: [0, 4],
          overflow: { adjustX: n, adjustY: 1 },
          htmlRegion: 'scroll',
        },
        topLeft: { points: ['bl', 'tl'], offset: [0, -4], overflow: { adjustX: n, adjustY: 1 }, htmlRegion: 'scroll' },
        topRight: { points: ['br', 'tr'], offset: [0, -4], overflow: { adjustX: n, adjustY: 1 }, htmlRegion: 'scroll' },
      };
    },
    Bw = function (t, n) {
      var r = t.prefixCls;
      t.disabled;
      var i = t.visible,
        o = t.children,
        l = t.popupElement,
        s = t.containerWidth,
        d = t.animation,
        f = t.transitionName,
        p = t.dropdownStyle,
        h = t.dropdownClassName,
        v = t.direction,
        x = v === void 0 ? 'ltr' : v,
        y = t.placement,
        C = t.dropdownMatchSelectWidth,
        O = t.dropdownRender,
        E = t.dropdownAlign,
        _ = t.getPopupContainer,
        P = t.empty,
        N = t.getTriggerDOMNode,
        j = t.onPopupVisibleChange,
        u = t.onPopupMouseEnter,
        $ = qt(t, Lw),
        I = ''.concat(r, '-dropdown'),
        M = l;
      O && (M = O(l));
      var D = De(
          function () {
            return Hw(C);
          },
          [C],
        ),
        B = d ? ''.concat(I, '-').concat(d) : f,
        F = ie(null);
      on(n, function () {
        return {
          getPopupElement: function () {
            return F.current;
          },
        };
      });
      var A = G({ minWidth: s }, p);
      return (
        typeof C == 'number' ? (A.width = C) : C && (A.width = s),
        b.createElement(
          Gg,
          rt({}, $, {
            showAction: j ? ['click'] : [],
            hideAction: j ? ['click'] : [],
            popupPlacement: y || (x === 'rtl' ? 'bottomRight' : 'bottomLeft'),
            builtinPlacements: D,
            prefixCls: I,
            popupTransitionName: B,
            popup: b.createElement('div', { ref: F, onMouseEnter: u }, M),
            popupAlign: E,
            popupVisible: i,
            getPopupContainer: _,
            popupClassName: he(h, Ie({}, ''.concat(I, '-empty'), P)),
            popupStyle: A,
            getTriggerDOMNode: N,
            onPopupVisibleChange: j,
          }),
          o,
        )
      );
    },
    qg = We(Bw);
  qg.displayName = 'SelectTrigger';
  function Kg(e, t) {
    var n = e.key,
      r;
    return 'value' in e && (r = e.value), n ?? (r !== void 0 ? r : 'rc-index-key-'.concat(t));
  }
  function Xg(e, t) {
    var n = e || {},
      r = n.label,
      i = n.value,
      o = n.options;
    return { label: r || (t ? 'children' : 'label'), value: i || 'value', options: o || 'options' };
  }
  function kw(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = t.fieldNames,
      r = t.childrenAsData,
      i = [],
      o = Xg(n, !1),
      l = o.label,
      s = o.value,
      d = o.options;
    function f(p, h) {
      p.forEach(function (v) {
        var x = v[l];
        if (h || !(d in v)) {
          var y = v[s];
          i.push({ key: Kg(v, i.length), groupOption: h, data: v, label: x, value: y });
        } else {
          var C = x;
          C === void 0 && r && (C = v.label),
            i.push({ key: Kg(v, i.length), group: !0, data: v, label: C }),
            f(v[d], !0);
        }
      });
    }
    return f(e, !1), i;
  }
  function Ic(e) {
    var t = G({}, e);
    return (
      'props' in t ||
        Object.defineProperty(t, 'props', {
          get: function () {
            return (
              tr(
                !1,
                'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.',
              ),
              t
            );
          },
        }),
      t
    );
  }
  function Vw(e, t) {
    if (!t || !t.length) return null;
    var n = !1;
    function r(o, l) {
      var s = sf(l),
        d = s[0],
        f = s.slice(1);
      if (!d) return [o];
      var p = o.split(d);
      return (
        (n = n || p.length > 1),
        p
          .reduce(function (h, v) {
            return [].concat(ze(h), ze(r(v, f)));
          }, [])
          .filter(function (h) {
            return h;
          })
      );
    }
    var i = r(e, t);
    return n ? i : null;
  }
  var Ww = [
      'id',
      'prefixCls',
      'className',
      'showSearch',
      'tagRender',
      'direction',
      'omitDomProps',
      'displayValues',
      'onDisplayValuesChange',
      'emptyOptions',
      'notFoundContent',
      'onClear',
      'mode',
      'disabled',
      'loading',
      'getInputElement',
      'getRawInputElement',
      'open',
      'defaultOpen',
      'onDropdownVisibleChange',
      'activeValue',
      'onActiveValueChange',
      'activeDescendantId',
      'searchValue',
      'autoClearSearchValue',
      'onSearch',
      'onSearchSplit',
      'tokenSeparators',
      'allowClear',
      'showArrow',
      'inputIcon',
      'clearIcon',
      'OptionList',
      'animation',
      'transitionName',
      'dropdownStyle',
      'dropdownClassName',
      'dropdownMatchSelectWidth',
      'dropdownRender',
      'dropdownAlign',
      'placement',
      'getPopupContainer',
      'showAction',
      'onFocus',
      'onBlur',
      'onKeyUp',
      'onKeyDown',
      'onMouseDown',
    ],
    Uw = [
      'value',
      'onChange',
      'removeIcon',
      'placeholder',
      'autoFocus',
      'maxTagCount',
      'maxTagTextLength',
      'maxTagPlaceholder',
      'choiceTransitionName',
      'onInputKeyDown',
      'onPopupScroll',
      'tabIndex',
    ];
  function Pc(e) {
    return e === 'tags' || e === 'multiple';
  }
  var Gw = We(function (e, t) {
    var n,
      r,
      i = e.id,
      o = e.prefixCls,
      l = e.className,
      s = e.showSearch,
      d = e.tagRender,
      f = e.direction,
      p = e.omitDomProps,
      h = e.displayValues,
      v = e.onDisplayValuesChange,
      x = e.emptyOptions,
      y = e.notFoundContent,
      C = y === void 0 ? 'Not Found' : y,
      O = e.onClear,
      E = e.mode,
      _ = e.disabled,
      P = e.loading,
      N = e.getInputElement,
      j = e.getRawInputElement,
      u = e.open,
      $ = e.defaultOpen,
      I = e.onDropdownVisibleChange,
      M = e.activeValue,
      D = e.onActiveValueChange,
      B = e.activeDescendantId,
      F = e.searchValue,
      A = e.autoClearSearchValue,
      z = e.onSearch,
      V = e.onSearchSplit,
      U = e.tokenSeparators,
      X = e.allowClear,
      Z = e.showArrow,
      ee = e.inputIcon,
      le = e.clearIcon,
      ce = e.OptionList,
      xe = e.animation,
      Q = e.transitionName,
      Ce = e.dropdownStyle,
      Se = e.dropdownClassName,
      me = e.dropdownMatchSelectWidth,
      se = e.dropdownRender,
      $e = e.dropdownAlign,
      Ee = e.placement,
      Me = e.getPopupContainer,
      Le = e.showAction,
      Re = Le === void 0 ? [] : Le,
      ne = e.onFocus,
      Te = e.onBlur,
      He = e.onKeyUp,
      oe = e.onKeyDown,
      ue = e.onMouseDown,
      de = qt(e, Ww),
      Be = Pc(E),
      Xe = (s !== void 0 ? s : Be) || E === 'combobox',
      Ct = G({}, de);
    Uw.forEach(function (ut) {
      delete Ct[ut];
    }),
      p == null ||
        p.forEach(function (ut) {
          delete Ct[ut];
        });
    var _t = we(!1),
      $t = ge(_t, 2),
      ht = $t[0],
      vt = $t[1];
    Fe(function () {
      vt(iw());
    }, []);
    var pt = ie(null),
      Kt = ie(null),
      Tt = ie(null),
      at = ie(null),
      tt = ie(null),
      Xt = aw(),
      zt = ge(Xt, 3),
      Ve = zt[0],
      nt = zt[1],
      It = zt[2];
    on(t, function () {
      var ut, et;
      return {
        focus: (ut = at.current) === null || ut === void 0 ? void 0 : ut.focus,
        blur: (et = at.current) === null || et === void 0 ? void 0 : et.blur,
        scrollTo: function (tn) {
          var Nt;
          return (Nt = tt.current) === null || Nt === void 0 ? void 0 : Nt.scrollTo(tn);
        },
      };
    });
    var gt = De(
        function () {
          var ut;
          if (E !== 'combobox') return F;
          var et = (ut = h[0]) === null || ut === void 0 ? void 0 : ut.value;
          return typeof et == 'string' || typeof et == 'number' ? String(et) : '';
        },
        [F, E, h],
      ),
      lt = (E === 'combobox' && typeof N == 'function' && N()) || null,
      Lt = typeof j == 'function' && j(),
      Ut = Jl(Kt, Lt == null || (n = Lt.props) === null || n === void 0 ? void 0 : n.ref),
      Pe = Pr(void 0, { defaultValue: $, value: u }),
      ke = ge(Pe, 2),
      mt = ke[0],
      ct = ke[1],
      wt = mt,
      pn = !C && x;
    (_ || (pn && wt && E === 'combobox')) && (wt = !1);
    var Gt = pn ? !1 : wt,
      ve = Qt(
        function (ut) {
          var et = ut !== void 0 ? ut : !wt;
          _ || (ct(et), wt !== et && (I == null || I(et)));
        },
        [_, wt, ct, I],
      ),
      Oe = De(
        function () {
          return (U || []).some(function (ut) {
            return [
              `
`,
              `\r
`,
            ].includes(ut);
          });
        },
        [U],
      ),
      Ne = function (et, Jt, tn) {
        var Nt = !0,
          cn = et;
        D == null || D(null);
        var Rn = tn ? null : Vw(et, U);
        return (
          E !== 'combobox' && Rn && ((cn = ''), V == null || V(Rn), ve(!1), (Nt = !1)),
          z && gt !== cn && z(cn, { source: Jt ? 'typing' : 'effect' }),
          Nt
        );
      },
      Ue = function (et) {
        !et || !et.trim() || z(et, { source: 'submit' });
      };
    Fe(
      function () {
        !wt && !Be && E !== 'combobox' && Ne('', !1, !1);
      },
      [wt],
    ),
      Fe(
        function () {
          mt && _ && ct(!1), _ && nt(!1);
        },
        [_],
      );
    var ft = Mg(),
      Pt = ge(ft, 2),
      Tn = Pt[0],
      wn = Pt[1],
      Fn = function (et) {
        var Jt = Tn(),
          tn = et.which;
        if (
          (tn === ye.ENTER && (E !== 'combobox' && et.preventDefault(), wt || ve(!0)),
          wn(!!gt),
          tn === ye.BACKSPACE && !Jt && Be && !gt && h.length)
        ) {
          for (var Nt = ze(h), cn = null, Rn = Nt.length - 1; Rn >= 0; Rn -= 1) {
            var cr = Nt[Rn];
            if (!cr.disabled) {
              Nt.splice(Rn, 1), (cn = cr);
              break;
            }
          }
          cn && v(Nt, { type: 'remove', values: [cn] });
        }
        for (var nn = arguments.length, br = new Array(nn > 1 ? nn - 1 : 0), Pn = 1; Pn < nn; Pn++)
          br[Pn - 1] = arguments[Pn];
        if (wt && tt.current) {
          var Oi;
          (Oi = tt.current).onKeyDown.apply(Oi, [et].concat(br));
        }
        oe == null || oe.apply(void 0, [et].concat(br));
      },
      Dt = function (et) {
        for (var Jt = arguments.length, tn = new Array(Jt > 1 ? Jt - 1 : 0), Nt = 1; Nt < Jt; Nt++)
          tn[Nt - 1] = arguments[Nt];
        if (wt && tt.current) {
          var cn;
          (cn = tt.current).onKeyUp.apply(cn, [et].concat(tn));
        }
        He == null || He.apply(void 0, [et].concat(tn));
      },
      En = function (et) {
        var Jt = h.filter(function (tn) {
          return tn !== et;
        });
        v(Jt, { type: 'remove', values: [et] });
      },
      Yn = ie(!1),
      vn = function () {
        nt(!0),
          _ || (ne && !Yn.current && ne.apply(void 0, arguments), Re.includes('focus') && ve(!0)),
          (Yn.current = !0);
      },
      hr = function () {
        nt(!1, function () {
          (Yn.current = !1), ve(!1);
        }),
          !_ &&
            (gt && (E === 'tags' ? z(gt, { source: 'submit' }) : E === 'multiple' && z('', { source: 'blur' })),
            Te && Te.apply(void 0, arguments));
      },
      In = [];
    Fe(function () {
      return function () {
        In.forEach(function (ut) {
          return clearTimeout(ut);
        }),
          In.splice(0, In.length);
      };
    }, []);
    var jn = function (et) {
        var Jt,
          tn = et.target,
          Nt = (Jt = Tt.current) === null || Jt === void 0 ? void 0 : Jt.getPopupElement();
        if (Nt && Nt.contains(tn)) {
          var cn = setTimeout(function () {
            var br = In.indexOf(cn);
            if ((br !== -1 && In.splice(br, 1), It(), !ht && !Nt.contains(document.activeElement))) {
              var Pn;
              (Pn = at.current) === null || Pn === void 0 || Pn.focus();
            }
          });
          In.push(cn);
        }
        for (var Rn = arguments.length, cr = new Array(Rn > 1 ? Rn - 1 : 0), nn = 1; nn < Rn; nn++)
          cr[nn - 1] = arguments[nn];
        ue == null || ue.apply(void 0, [et].concat(cr));
      },
      Jr = we(null),
      Zr = ge(Jr, 2),
      sr = Zr[0],
      ei = Zr[1],
      Nn = we({}),
      ln = ge(Nn, 2),
      Hn = ln[1];
    function Ei() {
      Hn({});
    }
    Wt(
      function () {
        if (Gt) {
          var ut,
            et = Math.ceil((ut = pt.current) === null || ut === void 0 ? void 0 : ut.offsetWidth);
          sr !== et && !Number.isNaN(et) && ei(et);
        }
      },
      [Gt],
    );
    var mr;
    Lt &&
      (mr = function (et) {
        ve(et);
      }),
      lw(
        function () {
          var ut;
          return [pt.current, (ut = Tt.current) === null || ut === void 0 ? void 0 : ut.getPopupElement()];
        },
        Gt,
        ve,
        !!Lt,
      );
    var $i = De(
        function () {
          return G(
            G({}, e),
            {},
            { notFoundContent: C, open: wt, triggerOpen: Gt, id: i, showSearch: Xe, multiple: Be, toggleOpen: ve },
          );
        },
        [e, C, Gt, wt, i, Xe, Be, ve],
      ),
      ti = Z !== void 0 ? Z : P || (!Be && E !== 'combobox'),
      Cr;
    ti &&
      (Cr = b.createElement(fl, {
        className: he(''.concat(o, '-arrow'), Ie({}, ''.concat(o, '-arrow-loading'), P)),
        customizeIcon: ee,
        customizeIconProps: { loading: P, searchValue: gt, open: wt, focused: Ve, showSearch: Xe },
      }));
    var Rr,
      Mr = function () {
        var et;
        O == null || O(),
          (et = at.current) === null || et === void 0 || et.focus(),
          v([], { type: 'clear', values: h }),
          Ne('', !1, !1);
      };
    !_ &&
      X &&
      (h.length || gt) &&
      !(E === 'combobox' && gt === '') &&
      (Rr = b.createElement(fl, { className: ''.concat(o, '-clear'), onMouseDown: Mr, customizeIcon: le }, '×'));
    var ni = b.createElement(ce, { ref: tt }),
      sn = he(
        o,
        l,
        ((r = {}),
        Ie(r, ''.concat(o, '-focused'), Ve),
        Ie(r, ''.concat(o, '-multiple'), Be),
        Ie(r, ''.concat(o, '-single'), !Be),
        Ie(r, ''.concat(o, '-allow-clear'), X),
        Ie(r, ''.concat(o, '-show-arrow'), ti),
        Ie(r, ''.concat(o, '-disabled'), _),
        Ie(r, ''.concat(o, '-loading'), P),
        Ie(r, ''.concat(o, '-open'), wt),
        Ie(r, ''.concat(o, '-customize-input'), lt),
        Ie(r, ''.concat(o, '-show-search'), Xe),
        r),
      ),
      vr = b.createElement(
        qg,
        {
          ref: Tt,
          disabled: _,
          prefixCls: o,
          visible: Gt,
          popupElement: ni,
          containerWidth: sr,
          animation: xe,
          transitionName: Q,
          dropdownStyle: Ce,
          dropdownClassName: Se,
          direction: f,
          dropdownMatchSelectWidth: me,
          dropdownRender: se,
          dropdownAlign: $e,
          placement: Ee,
          getPopupContainer: Me,
          empty: x,
          getTriggerDOMNode: function () {
            return Kt.current;
          },
          onPopupVisibleChange: mr,
          onPopupMouseEnter: Ei,
        },
        Lt
          ? un(Lt, { ref: Ut })
          : b.createElement(
              Bg,
              rt({}, e, {
                domRef: Kt,
                prefixCls: o,
                inputElement: lt,
                ref: at,
                id: i,
                showSearch: Xe,
                autoClearSearchValue: A,
                mode: E,
                activeDescendantId: B,
                tagRender: d,
                values: h,
                open: wt,
                onToggleOpen: ve,
                activeValue: M,
                searchValue: gt,
                onSearch: Ne,
                onSearchSubmit: Ue,
                onRemove: En,
                tokenWithEnter: Oe,
              }),
            ),
      ),
      Sr;
    return (
      Lt
        ? (Sr = vr)
        : (Sr = b.createElement(
            'div',
            rt({ className: sn }, Ct, {
              ref: pt,
              onMouseDown: jn,
              onKeyDown: Fn,
              onKeyUp: Dt,
              onFocus: vn,
              onBlur: hr,
            }),
            Ve &&
              !wt &&
              b.createElement(
                'span',
                {
                  style: { width: 0, height: 0, position: 'absolute', overflow: 'hidden', opacity: 0 },
                  'aria-live': 'polite',
                },
                ''.concat(
                  h
                    .map(function (ut) {
                      var et = ut.label,
                        Jt = ut.value;
                      return ['number', 'string'].includes(Et(et)) ? et : Jt;
                    })
                    .join(', '),
                ),
              ),
            vr,
            Cr,
            Rr,
          )),
      b.createElement(Rg.Provider, { value: $i }, Sr)
    );
  });
  const qw = function (e, t) {
    var n = ie({ values: new Map(), options: new Map() }),
      r = De(
        function () {
          var o = n.current,
            l = o.values,
            s = o.options,
            d = e.map(function (h) {
              if (h.label === void 0) {
                var v;
                return G(G({}, h), {}, { label: (v = l.get(h.value)) === null || v === void 0 ? void 0 : v.label });
              }
              return h;
            }),
            f = new Map(),
            p = new Map();
          return (
            d.forEach(function (h) {
              f.set(h.value, h), p.set(h.value, t.get(h.value) || s.get(h.value));
            }),
            (n.current.values = f),
            (n.current.options = p),
            d
          );
        },
        [e, t],
      ),
      i = Qt(
        function (o) {
          return t.get(o) || n.current.options.get(o);
        },
        [t],
      );
    return [r, i];
  };
  function Nc(e, t) {
    return jg(e).join('').toUpperCase().includes(t);
  }
  const Kw = function (e, t, n, r, i) {
    return De(
      function () {
        if (!n || r === !1) return e;
        var o = t.options,
          l = t.label,
          s = t.value,
          d = [],
          f = typeof r == 'function',
          p = n.toUpperCase(),
          h = f
            ? r
            : function (x, y) {
                return i ? Nc(y[i], p) : y[o] ? Nc(y[l !== 'children' ? l : 'label'], p) : Nc(y[s], p);
              },
          v = f
            ? function (x) {
                return Ic(x);
              }
            : function (x) {
                return x;
              };
        return (
          e.forEach(function (x) {
            if (x[o]) {
              var y = h(n, v(x));
              if (y) d.push(x);
              else {
                var C = x[o].filter(function (O) {
                  return h(n, v(O));
                });
                C.length && d.push(G(G({}, x), {}, Ie({}, o, C)));
              }
              return;
            }
            h(n, v(x)) && d.push(x);
          }),
          d
        );
      },
      [e, r, i, n, t],
    );
  };
  var Yg = 0,
    Xw = An();
  function Yw() {
    var e;
    return Xw ? ((e = Yg), (Yg += 1)) : (e = 'TEST_OR_SSR'), e;
  }
  function Qw(e) {
    var t = we(),
      n = ge(t, 2),
      r = n[0],
      i = n[1];
    return (
      Fe(function () {
        i('rc_select_'.concat(Yw()));
      }, []),
      e || r
    );
  }
  var Jw = ['children', 'value'],
    Zw = ['children'];
  function eE(e) {
    var t = e,
      n = t.key,
      r = t.props,
      i = r.children,
      o = r.value,
      l = qt(r, Jw);
    return G({ key: n, value: o !== void 0 ? o : n, children: i }, l);
  }
  function Qg(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return wr(e)
      .map(function (n, r) {
        if (!Vn(n) || !n.type) return null;
        var i = n,
          o = i.type.isSelectOptGroup,
          l = i.key,
          s = i.props,
          d = s.children,
          f = qt(s, Zw);
        return t || !o
          ? eE(n)
          : G(G({ key: '__RC_SELECT_GRP__'.concat(l === null ? r : l, '__'), label: l }, f), {}, { options: Qg(d) });
      })
      .filter(function (n) {
        return n;
      });
  }
  function tE(e, t, n, r, i) {
    return De(
      function () {
        var o = e,
          l = !e;
        l && (o = Qg(t));
        var s = new Map(),
          d = new Map(),
          f = function (v, x, y) {
            y && typeof y == 'string' && v.set(x[y], x);
          };
        function p(h) {
          for (
            var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, x = 0;
            x < h.length;
            x += 1
          ) {
            var y = h[x];
            !y[n.options] || v ? (s.set(y[n.value], y), f(d, y, n.label), f(d, y, r), f(d, y, i)) : p(y[n.options], !0);
          }
        }
        return p(o), { options: o, valueOptions: s, labelOptions: d };
      },
      [e, t, n, r, i],
    );
  }
  function Jg(e) {
    var t = ie();
    t.current = e;
    var n = Qt(function () {
      return t.current.apply(t, arguments);
    }, []);
    return n;
  }
  var Rc = function () {
    return null;
  };
  Rc.isSelectOptGroup = !0;
  var Mc = function () {
    return null;
  };
  Mc.isSelectOption = !0;
  var Zg = We(function (e, t) {
    var n = e.height,
      r = e.offset,
      i = e.children,
      o = e.prefixCls,
      l = e.onInnerResize,
      s = e.innerProps,
      d = {},
      f = { display: 'flex', flexDirection: 'column' };
    return (
      r !== void 0 &&
        ((d = { height: n, position: 'relative', overflow: 'hidden' }),
        (f = G(
          G({}, f),
          {},
          { transform: 'translateY('.concat(r, 'px)'), position: 'absolute', left: 0, right: 0, top: 0 },
        ))),
      b.createElement(
        'div',
        { style: d },
        b.createElement(
          Hr,
          {
            onResize: function (h) {
              var v = h.offsetHeight;
              v && l && l();
            },
          },
          b.createElement(
            'div',
            rt({ style: f, className: he(Ie({}, ''.concat(o, '-holder-inner'), o)), ref: t }, s),
            i,
          ),
        ),
      )
    );
  });
  Zg.displayName = 'Filler';
  var nE = 20;
  function eh(e) {
    return 'touches' in e ? e.touches[0].pageY : e.pageY;
  }
  var rE = (function (e) {
    li(n, e);
    var t = si(n);
    function n() {
      var r;
      zn(this, n);
      for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
      return (
        (r = t.call.apply(t, [this].concat(o))),
        (r.moveRaf = null),
        (r.scrollbarRef = b.createRef()),
        (r.thumbRef = b.createRef()),
        (r.visibleTimeout = null),
        (r.state = { dragging: !1, pageY: null, startTop: null, visible: !1 }),
        (r.delayHidden = function () {
          clearTimeout(r.visibleTimeout),
            r.setState({ visible: !0 }),
            (r.visibleTimeout = setTimeout(function () {
              r.setState({ visible: !1 });
            }, 2e3));
        }),
        (r.onScrollbarTouchStart = function (s) {
          s.preventDefault();
        }),
        (r.onContainerMouseDown = function (s) {
          s.stopPropagation(), s.preventDefault();
        }),
        (r.patchEvents = function () {
          window.addEventListener('mousemove', r.onMouseMove),
            window.addEventListener('mouseup', r.onMouseUp),
            r.thumbRef.current.addEventListener('touchmove', r.onMouseMove),
            r.thumbRef.current.addEventListener('touchend', r.onMouseUp);
        }),
        (r.removeEvents = function () {
          var s;
          window.removeEventListener('mousemove', r.onMouseMove),
            window.removeEventListener('mouseup', r.onMouseUp),
            (s = r.scrollbarRef.current) === null ||
              s === void 0 ||
              s.removeEventListener('touchstart', r.onScrollbarTouchStart),
            r.thumbRef.current &&
              (r.thumbRef.current.removeEventListener('touchstart', r.onMouseDown),
              r.thumbRef.current.removeEventListener('touchmove', r.onMouseMove),
              r.thumbRef.current.removeEventListener('touchend', r.onMouseUp)),
            Sn.cancel(r.moveRaf);
        }),
        (r.onMouseDown = function (s) {
          var d = r.props.onStartMove;
          r.setState({ dragging: !0, pageY: eh(s), startTop: r.getTop() }),
            d(),
            r.patchEvents(),
            s.stopPropagation(),
            s.preventDefault();
        }),
        (r.onMouseMove = function (s) {
          var d = r.state,
            f = d.dragging,
            p = d.pageY,
            h = d.startTop,
            v = r.props.onScroll;
          if ((Sn.cancel(r.moveRaf), f)) {
            var x = eh(s) - p,
              y = h + x,
              C = r.getEnableScrollRange(),
              O = r.getEnableHeightRange(),
              E = O ? y / O : 0,
              _ = Math.ceil(E * C);
            r.moveRaf = Sn(function () {
              v(_);
            });
          }
        }),
        (r.onMouseUp = function () {
          var s = r.props.onStopMove;
          r.setState({ dragging: !1 }), s(), r.removeEvents();
        }),
        (r.getSpinHeight = function () {
          var s = r.props,
            d = s.height,
            f = s.count,
            p = (d / f) * 10;
          return (p = Math.max(p, nE)), (p = Math.min(p, d / 2)), Math.floor(p);
        }),
        (r.getEnableScrollRange = function () {
          var s = r.props,
            d = s.scrollHeight,
            f = s.height;
          return d - f || 0;
        }),
        (r.getEnableHeightRange = function () {
          var s = r.props.height,
            d = r.getSpinHeight();
          return s - d || 0;
        }),
        (r.getTop = function () {
          var s = r.props.scrollTop,
            d = r.getEnableScrollRange(),
            f = r.getEnableHeightRange();
          if (s === 0 || d === 0) return 0;
          var p = s / d;
          return p * f;
        }),
        (r.showScroll = function () {
          var s = r.props,
            d = s.height,
            f = s.scrollHeight;
          return f > d;
        }),
        r
      );
    }
    return (
      Ln(n, [
        {
          key: 'componentDidMount',
          value: function () {
            this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart),
              this.thumbRef.current.addEventListener('touchstart', this.onMouseDown);
          },
        },
        {
          key: 'componentDidUpdate',
          value: function (i) {
            i.scrollTop !== this.props.scrollTop && this.delayHidden();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.removeEvents(), clearTimeout(this.visibleTimeout);
          },
        },
        {
          key: 'render',
          value: function () {
            var i = this.state,
              o = i.dragging,
              l = i.visible,
              s = this.props.prefixCls,
              d = this.getSpinHeight(),
              f = this.getTop(),
              p = this.showScroll(),
              h = p && l;
            return b.createElement(
              'div',
              {
                ref: this.scrollbarRef,
                className: he(''.concat(s, '-scrollbar'), Ie({}, ''.concat(s, '-scrollbar-show'), p)),
                style: { width: 8, top: 0, bottom: 0, right: 0, position: 'absolute', display: h ? null : 'none' },
                onMouseDown: this.onContainerMouseDown,
                onMouseMove: this.delayHidden,
              },
              b.createElement('div', {
                ref: this.thumbRef,
                className: he(''.concat(s, '-scrollbar-thumb'), Ie({}, ''.concat(s, '-scrollbar-thumb-moving'), o)),
                style: {
                  width: '100%',
                  height: d,
                  top: f,
                  left: 0,
                  position: 'absolute',
                  background: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: 99,
                  cursor: 'pointer',
                  userSelect: 'none',
                },
                onMouseDown: this.onMouseDown,
              }),
            );
          },
        },
      ]),
      n
    );
  })(b.Component);
  function iE(e) {
    var t = e.children,
      n = e.setRef,
      r = Qt(function (i) {
        n(i);
      }, []);
    return un(t, { ref: r });
  }
  function oE(e, t, n, r, i, o) {
    var l = o.getKey;
    return e.slice(t, n + 1).map(function (s, d) {
      var f = t + d,
        p = i(s, f, {}),
        h = l(s);
      return b.createElement(
        iE,
        {
          key: h,
          setRef: function (x) {
            return r(s, x);
          },
        },
        p,
      );
    });
  }
  var aE = (function () {
    function e() {
      zn(this, e), (this.maps = void 0), (this.maps = Object.create(null));
    }
    return (
      Ln(e, [
        {
          key: 'set',
          value: function (n, r) {
            this.maps[n] = r;
          },
        },
        {
          key: 'get',
          value: function (n) {
            return this.maps[n];
          },
        },
      ]),
      e
    );
  })();
  function lE(e, t, n) {
    var r = we(0),
      i = ge(r, 2),
      o = i[0],
      l = i[1],
      s = ie(new Map()),
      d = ie(new aE()),
      f = ie();
    function p() {
      Sn.cancel(f.current);
    }
    function h() {
      p(),
        (f.current = Sn(function () {
          s.current.forEach(function (x, y) {
            if (x && x.offsetParent) {
              var C = va(x),
                O = C.offsetHeight;
              d.current.get(y) !== O && d.current.set(y, C.offsetHeight);
            }
          }),
            l(function (x) {
              return x + 1;
            });
        }));
    }
    function v(x, y) {
      var C = e(x),
        O = s.current.get(C);
      y ? (s.current.set(C, y), h()) : s.current.delete(C), !O != !y && (y ? t == null || t(x) : n == null || n(x));
    }
    return (
      Fe(function () {
        return p;
      }, []),
      [v, h, d.current, o]
    );
  }
  function sE(e, t, n, r, i, o, l, s) {
    var d = ie();
    return function (f) {
      if (f == null) {
        s();
        return;
      }
      if ((Sn.cancel(d.current), typeof f == 'number')) l(f);
      else if (f && Et(f) === 'object') {
        var p,
          h = f.align;
        'index' in f
          ? (p = f.index)
          : (p = t.findIndex(function (C) {
              return i(C) === f.key;
            }));
        var v = f.offset,
          x = v === void 0 ? 0 : v,
          y = function C(O, E) {
            if (!(O < 0 || !e.current)) {
              var _ = e.current.clientHeight,
                P = !1,
                N = E;
              if (_) {
                for (var j = E || h, u = 0, $ = 0, I = 0, M = Math.min(t.length, p), D = 0; D <= M; D += 1) {
                  var B = i(t[D]);
                  $ = u;
                  var F = n.get(B);
                  (I = $ + (F === void 0 ? r : F)), (u = I), D === p && F === void 0 && (P = !0);
                }
                var A = null;
                switch (j) {
                  case 'top':
                    A = $ - x;
                    break;
                  case 'bottom':
                    A = I - _ + x;
                    break;
                  default: {
                    var z = e.current.scrollTop,
                      V = z + _;
                    $ < z ? (N = 'top') : I > V && (N = 'bottom');
                  }
                }
                A !== null && A !== e.current.scrollTop && l(A);
              }
              d.current = Sn(function () {
                P && o(), C(O - 1, N);
              }, 2);
            }
          };
        y(3);
      }
    };
  }
  function cE(e, t, n) {
    var r = e.length,
      i = t.length,
      o,
      l;
    if (r === 0 && i === 0) return null;
    r < i ? ((o = e), (l = t)) : ((o = t), (l = e));
    var s = { __EMPTY_ITEM__: !0 };
    function d(y) {
      return y !== void 0 ? n(y) : s;
    }
    for (var f = null, p = Math.abs(r - i) !== 1, h = 0; h < l.length; h += 1) {
      var v = d(o[h]),
        x = d(l[h]);
      if (v !== x) {
        (f = h), (p = p || v !== d(l[h + 1]));
        break;
      }
    }
    return f === null ? null : { index: f, multiple: p };
  }
  function uE(e, t, n) {
    var r = we(e),
      i = ge(r, 2),
      o = i[0],
      l = i[1],
      s = we(null),
      d = ge(s, 2),
      f = d[0],
      p = d[1];
    return (
      Fe(
        function () {
          var h = cE(o || [], e || [], t);
          (h == null ? void 0 : h.index) !== void 0 && (n == null || n(h.index), p(e[h.index])), l(e);
        },
        [e],
      ),
      [f]
    );
  }
  var dE = (typeof navigator > 'u' ? 'undefined' : Et(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
  const th = function (e, t) {
    var n = ie(!1),
      r = ie(null);
    function i() {
      clearTimeout(r.current),
        (n.current = !0),
        (r.current = setTimeout(function () {
          n.current = !1;
        }, 50));
    }
    var o = ie({ top: e, bottom: t });
    return (
      (o.current.top = e),
      (o.current.bottom = t),
      function (l) {
        var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          d = (l < 0 && o.current.top) || (l > 0 && o.current.bottom);
        return s && d ? (clearTimeout(r.current), (n.current = !1)) : (!d || n.current) && i(), !n.current && d;
      }
    );
  };
  function fE(e, t, n, r) {
    var i = ie(0),
      o = ie(null),
      l = ie(null),
      s = ie(!1),
      d = th(t, n);
    function f(h) {
      if (e) {
        Sn.cancel(o.current);
        var v = h.deltaY;
        (i.current += v),
          (l.current = v),
          !d(v) &&
            (dE || h.preventDefault(),
            (o.current = Sn(function () {
              var x = s.current ? 10 : 1;
              r(i.current * x), (i.current = 0);
            })));
      }
    }
    function p(h) {
      e && (s.current = h.detail === l.current);
    }
    return [f, p];
  }
  var pE = 14 / 15;
  function gE(e, t, n) {
    var r = ie(!1),
      i = ie(0),
      o = ie(null),
      l = ie(null),
      s,
      d = function (v) {
        if (r.current) {
          var x = Math.ceil(v.touches[0].pageY),
            y = i.current - x;
          (i.current = x),
            n(y) && v.preventDefault(),
            clearInterval(l.current),
            (l.current = setInterval(function () {
              (y *= pE), (!n(y, !0) || Math.abs(y) <= 0.1) && clearInterval(l.current);
            }, 16));
        }
      },
      f = function () {
        (r.current = !1), s();
      },
      p = function (v) {
        s(),
          v.touches.length === 1 &&
            !r.current &&
            ((r.current = !0),
            (i.current = Math.ceil(v.touches[0].pageY)),
            (o.current = v.target),
            o.current.addEventListener('touchmove', d),
            o.current.addEventListener('touchend', f));
      };
    (s = function () {
      o.current && (o.current.removeEventListener('touchmove', d), o.current.removeEventListener('touchend', f));
    }),
      Wt(
        function () {
          return (
            e && t.current.addEventListener('touchstart', p),
            function () {
              var h;
              (h = t.current) === null || h === void 0 || h.removeEventListener('touchstart', p),
                s(),
                clearInterval(l.current);
            }
          );
        },
        [e],
      );
  }
  var hE = [
      'prefixCls',
      'className',
      'height',
      'itemHeight',
      'fullHeight',
      'style',
      'data',
      'children',
      'itemKey',
      'virtual',
      'component',
      'onScroll',
      'onVisibleChange',
      'innerProps',
    ],
    mE = [],
    vE = { overflowY: 'auto', overflowAnchor: 'none' };
  function bE(e, t) {
    var n = e.prefixCls,
      r = n === void 0 ? 'rc-virtual-list' : n,
      i = e.className,
      o = e.height,
      l = e.itemHeight,
      s = e.fullHeight,
      d = s === void 0 ? !0 : s,
      f = e.style,
      p = e.data,
      h = e.children,
      v = e.itemKey,
      x = e.virtual,
      y = e.component,
      C = y === void 0 ? 'div' : y,
      O = e.onScroll,
      E = e.onVisibleChange,
      _ = e.innerProps,
      P = qt(e, hE),
      N = !!(x !== !1 && o && l),
      j = N && p && l * p.length > o,
      u = we(0),
      $ = ge(u, 2),
      I = $[0],
      M = $[1],
      D = we(!1),
      B = ge(D, 2),
      F = B[0],
      A = B[1],
      z = he(r, i),
      V = p || mE,
      U = ie(),
      X = ie(),
      Z = ie(),
      ee = Qt(
        function (Ve) {
          return typeof v == 'function' ? v(Ve) : Ve == null ? void 0 : Ve[v];
        },
        [v],
      ),
      le = { getKey: ee };
    function ce(Ve) {
      M(function (nt) {
        var It;
        typeof Ve == 'function' ? (It = Ve(nt)) : (It = Ve);
        var gt = Xe(It);
        return (U.current.scrollTop = gt), gt;
      });
    }
    var xe = ie({ start: 0, end: V.length }),
      Q = ie(),
      Ce = uE(V, ee),
      Se = ge(Ce, 1),
      me = Se[0];
    Q.current = me;
    var se = lE(ee, null, null),
      $e = ge(se, 4),
      Ee = $e[0],
      Me = $e[1],
      Le = $e[2],
      Re = $e[3],
      ne = De(
        function () {
          if (!N) return { scrollHeight: void 0, start: 0, end: V.length - 1, offset: void 0 };
          if (!j) {
            var Ve;
            return {
              scrollHeight: ((Ve = X.current) === null || Ve === void 0 ? void 0 : Ve.offsetHeight) || 0,
              start: 0,
              end: V.length - 1,
              offset: void 0,
            };
          }
          for (var nt = 0, It, gt, lt, Lt = V.length, Ut = 0; Ut < Lt; Ut += 1) {
            var Pe = V[Ut],
              ke = ee(Pe),
              mt = Le.get(ke),
              ct = nt + (mt === void 0 ? l : mt);
            ct >= I && It === void 0 && ((It = Ut), (gt = nt)), ct > I + o && lt === void 0 && (lt = Ut), (nt = ct);
          }
          return (
            It === void 0 && ((It = 0), (gt = 0), (lt = Math.ceil(o / l))),
            lt === void 0 && (lt = V.length - 1),
            (lt = Math.min(lt + 1, V.length)),
            { scrollHeight: nt, start: It, end: lt, offset: gt }
          );
        },
        [j, N, I, V, Re, o],
      ),
      Te = ne.scrollHeight,
      He = ne.start,
      oe = ne.end,
      ue = ne.offset;
    (xe.current.start = He), (xe.current.end = oe);
    var de = Te - o,
      Be = ie(de);
    Be.current = de;
    function Xe(Ve) {
      var nt = Ve;
      return Number.isNaN(Be.current) || (nt = Math.min(nt, Be.current)), (nt = Math.max(nt, 0)), nt;
    }
    var Ct = I <= 0,
      _t = I >= de,
      $t = th(Ct, _t);
    function ht(Ve) {
      var nt = Ve;
      ce(nt);
    }
    function vt(Ve) {
      var nt = Ve.currentTarget.scrollTop;
      nt !== I && ce(nt), O == null || O(Ve);
    }
    var pt = fE(N, Ct, _t, function (Ve) {
        ce(function (nt) {
          var It = nt + Ve;
          return It;
        });
      }),
      Kt = ge(pt, 2),
      Tt = Kt[0],
      at = Kt[1];
    gE(N, U, function (Ve, nt) {
      return $t(Ve, nt) ? !1 : (Tt({ preventDefault: function () {}, deltaY: Ve }), !0);
    }),
      Wt(
        function () {
          function Ve(nt) {
            N && nt.preventDefault();
          }
          return (
            U.current.addEventListener('wheel', Tt),
            U.current.addEventListener('DOMMouseScroll', at),
            U.current.addEventListener('MozMousePixelScroll', Ve),
            function () {
              U.current &&
                (U.current.removeEventListener('wheel', Tt),
                U.current.removeEventListener('DOMMouseScroll', at),
                U.current.removeEventListener('MozMousePixelScroll', Ve));
            }
          );
        },
        [N],
      );
    var tt = sE(U, V, Le, l, ee, Me, ce, function () {
      var Ve;
      (Ve = Z.current) === null || Ve === void 0 || Ve.delayHidden();
    });
    on(t, function () {
      return { scrollTo: tt };
    }),
      Wt(
        function () {
          if (E) {
            var Ve = V.slice(He, oe + 1);
            E(Ve, V);
          }
        },
        [He, oe, V],
      );
    var Xt = oE(V, He, oe, Ee, h, le),
      zt = null;
    return (
      o &&
        ((zt = G(Ie({}, d ? 'height' : 'maxHeight', o), vE)),
        N && ((zt.overflowY = 'hidden'), F && (zt.pointerEvents = 'none'))),
      b.createElement(
        'div',
        rt({ style: G(G({}, f), {}, { position: 'relative' }), className: z }, P),
        b.createElement(
          C,
          { className: ''.concat(r, '-holder'), style: zt, ref: U, onScroll: vt },
          b.createElement(Zg, { prefixCls: r, height: Te, offset: ue, onInnerResize: Me, ref: X, innerProps: _ }, Xt),
        ),
        N &&
          b.createElement(rE, {
            ref: Z,
            prefixCls: r,
            scrollTop: I,
            height: o,
            scrollHeight: Te,
            count: V.length,
            onScroll: ht,
            onStartMove: function () {
              A(!0);
            },
            onStopMove: function () {
              A(!1);
            },
          }),
      )
    );
  }
  var nh = We(bE);
  nh.displayName = 'List';
  var rh = b.createContext(null);
  function yE() {
    return /(mac\sos|macintosh)/i.test(navigator.appVersion);
  }
  var CE = ['disabled', 'title', 'children', 'style', 'className'];
  function ih(e) {
    return typeof e == 'string' || typeof e == 'number';
  }
  var SE = function (t, n) {
      var r = ow(),
        i = r.prefixCls,
        o = r.id,
        l = r.open,
        s = r.multiple,
        d = r.mode,
        f = r.searchValue,
        p = r.toggleOpen,
        h = r.notFoundContent,
        v = r.onPopupScroll,
        x = je(rh),
        y = x.flattenOptions,
        C = x.onActiveValue,
        O = x.defaultActiveFirstOption,
        E = x.onSelect,
        _ = x.menuItemSelectedIcon,
        P = x.rawValues,
        N = x.fieldNames,
        j = x.virtual,
        u = x.listHeight,
        $ = x.listItemHeight,
        I = ''.concat(i, '-item'),
        M = ma(
          function () {
            return y;
          },
          [l, y],
          function (me, se) {
            return se[0] && me[1] !== se[1];
          },
        ),
        D = ie(null),
        B = function (se) {
          se.preventDefault();
        },
        F = function (se) {
          D.current && D.current.scrollTo(typeof se == 'number' ? { index: se } : se);
        },
        A = function (se) {
          for (
            var $e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, Ee = M.length, Me = 0;
            Me < Ee;
            Me += 1
          ) {
            var Le = (se + Me * $e + Ee) % Ee,
              Re = M[Le],
              ne = Re.group,
              Te = Re.data;
            if (!ne && !Te.disabled) return Le;
          }
          return -1;
        },
        z = we(function () {
          return A(0);
        }),
        V = ge(z, 2),
        U = V[0],
        X = V[1],
        Z = function (se) {
          var $e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          X(se);
          var Ee = { source: $e ? 'keyboard' : 'mouse' },
            Me = M[se];
          if (!Me) {
            C(null, -1, Ee);
            return;
          }
          C(Me.value, se, Ee);
        };
      Fe(
        function () {
          Z(O !== !1 ? A(0) : -1);
        },
        [M.length, f],
      );
      var ee = Qt(
        function (me) {
          return P.has(me) && d !== 'combobox';
        },
        [d, ze(P).toString(), P.size],
      );
      Fe(
        function () {
          var me = setTimeout(function () {
            if (!s && l && P.size === 1) {
              var $e = Array.from(P)[0],
                Ee = M.findIndex(function (Me) {
                  var Le = Me.data;
                  return Le.value === $e;
                });
              Ee !== -1 && (Z(Ee), F(Ee));
            }
          });
          if (l) {
            var se;
            (se = D.current) === null || se === void 0 || se.scrollTo(void 0);
          }
          return function () {
            return clearTimeout(me);
          };
        },
        [l, f, y.length],
      );
      var le = function (se) {
        se !== void 0 && E(se, { selected: !P.has(se) }), s || p(!1);
      };
      if (
        (on(n, function () {
          return {
            onKeyDown: function (se) {
              var $e = se.which,
                Ee = se.ctrlKey;
              switch ($e) {
                case ye.N:
                case ye.P:
                case ye.UP:
                case ye.DOWN: {
                  var Me = 0;
                  if (
                    ($e === ye.UP
                      ? (Me = -1)
                      : $e === ye.DOWN
                      ? (Me = 1)
                      : yE() && Ee && ($e === ye.N ? (Me = 1) : $e === ye.P && (Me = -1)),
                    Me !== 0)
                  ) {
                    var Le = A(U + Me, Me);
                    F(Le), Z(Le, !0);
                  }
                  break;
                }
                case ye.ENTER: {
                  var Re = M[U];
                  Re && !Re.data.disabled ? le(Re.value) : le(void 0), l && se.preventDefault();
                  break;
                }
                case ye.ESC:
                  p(!1), l && se.stopPropagation();
              }
            },
            onKeyUp: function () {},
            scrollTo: function (se) {
              F(se);
            },
          };
        }),
        M.length === 0)
      )
        return b.createElement(
          'div',
          { role: 'listbox', id: ''.concat(o, '_list'), className: ''.concat(I, '-empty'), onMouseDown: B },
          h,
        );
      var ce = Object.keys(N).map(function (me) {
          return N[me];
        }),
        xe = function (se) {
          return se.label;
        };
      function Q(me, se) {
        var $e = me.group;
        return { role: $e ? 'presentation' : 'option', id: ''.concat(o, '_list_').concat(se) };
      }
      var Ce = function (se) {
          var $e = M[se];
          if (!$e) return null;
          var Ee = $e.data || {},
            Me = Ee.value,
            Le = $e.group,
            Re = Mo(Ee, !0),
            ne = xe($e);
          return $e
            ? b.createElement(
                'div',
                rt({ 'aria-label': typeof ne == 'string' && !Le ? ne : null }, Re, { key: se }, Q($e, se), {
                  'aria-selected': ee(Me),
                }),
                Me,
              )
            : null;
        },
        Se = { role: 'listbox', id: ''.concat(o, '_list') };
      return b.createElement(
        b.Fragment,
        null,
        j &&
          b.createElement(
            'div',
            rt({}, Se, { style: { height: 0, width: 0, overflow: 'hidden' } }),
            Ce(U - 1),
            Ce(U),
            Ce(U + 1),
          ),
        b.createElement(
          nh,
          {
            itemKey: 'key',
            ref: D,
            data: M,
            height: u,
            itemHeight: $,
            fullHeight: !1,
            onMouseDown: B,
            onScroll: v,
            virtual: j,
            innerProps: j ? null : Se,
          },
          function (me, se) {
            var $e,
              Ee = me.group,
              Me = me.groupOption,
              Le = me.data,
              Re = me.label,
              ne = me.value,
              Te = Le.key;
            if (Ee) {
              var He,
                oe = (He = Le.title) !== null && He !== void 0 ? He : ih(Re) ? Re.toString() : void 0;
              return b.createElement(
                'div',
                { className: he(I, ''.concat(I, '-group')), title: oe },
                Re !== void 0 ? Re : Te,
              );
            }
            var ue = Le.disabled,
              de = Le.title;
            Le.children;
            var Be = Le.style,
              Xe = Le.className,
              Ct = qt(Le, CE),
              _t = ji(Ct, ce),
              $t = ee(ne),
              ht = ''.concat(I, '-option'),
              vt = he(
                I,
                ht,
                Xe,
                (($e = {}),
                Ie($e, ''.concat(ht, '-grouped'), Me),
                Ie($e, ''.concat(ht, '-active'), U === se && !ue),
                Ie($e, ''.concat(ht, '-disabled'), ue),
                Ie($e, ''.concat(ht, '-selected'), $t),
                $e),
              ),
              pt = xe(me),
              Kt = !_ || typeof _ == 'function' || $t,
              Tt = typeof pt == 'number' ? pt : pt || ne,
              at = ih(Tt) ? Tt.toString() : void 0;
            return (
              de !== void 0 && (at = de),
              b.createElement(
                'div',
                rt({}, Mo(_t), j ? {} : Q(me, se), {
                  'aria-selected': $t,
                  className: vt,
                  title: at,
                  onMouseMove: function () {
                    U === se || ue || Z(se);
                  },
                  onClick: function () {
                    ue || le(ne);
                  },
                  style: Be,
                }),
                b.createElement('div', { className: ''.concat(ht, '-content') }, Tt),
                Vn(_) || $t,
                Kt &&
                  b.createElement(
                    fl,
                    {
                      className: ''.concat(I, '-option-state'),
                      customizeIcon: _,
                      customizeIconProps: { isSelected: $t },
                    },
                    $t ? '✓' : null,
                  ),
              )
            );
          },
        ),
      );
    },
    oh = We(SE);
  oh.displayName = 'OptionList';
  var xE = [
      'id',
      'mode',
      'prefixCls',
      'backfill',
      'fieldNames',
      'inputValue',
      'searchValue',
      'onSearch',
      'autoClearSearchValue',
      'onSelect',
      'onDeselect',
      'dropdownMatchSelectWidth',
      'filterOption',
      'filterSort',
      'optionFilterProp',
      'optionLabelProp',
      'options',
      'children',
      'defaultActiveFirstOption',
      'menuItemSelectedIcon',
      'virtual',
      'listHeight',
      'listItemHeight',
      'value',
      'defaultValue',
      'labelInValue',
      'onChange',
    ],
    wE = ['inputValue'];
  function EE(e) {
    return !e || Et(e) !== 'object';
  }
  var $E = We(function (e, t) {
      var n = e.id,
        r = e.mode,
        i = e.prefixCls,
        o = i === void 0 ? 'rc-select' : i,
        l = e.backfill,
        s = e.fieldNames,
        d = e.inputValue,
        f = e.searchValue,
        p = e.onSearch,
        h = e.autoClearSearchValue,
        v = h === void 0 ? !0 : h,
        x = e.onSelect,
        y = e.onDeselect,
        C = e.dropdownMatchSelectWidth,
        O = C === void 0 ? !0 : C,
        E = e.filterOption,
        _ = e.filterSort,
        P = e.optionFilterProp,
        N = e.optionLabelProp,
        j = e.options,
        u = e.children,
        $ = e.defaultActiveFirstOption,
        I = e.menuItemSelectedIcon,
        M = e.virtual,
        D = e.listHeight,
        B = D === void 0 ? 200 : D,
        F = e.listItemHeight,
        A = F === void 0 ? 20 : F,
        z = e.value,
        V = e.defaultValue,
        U = e.labelInValue,
        X = e.onChange,
        Z = qt(e, xE),
        ee = Qw(n),
        le = Pc(r),
        ce = !!(!j && u),
        xe = De(
          function () {
            return E === void 0 && r === 'combobox' ? !1 : E;
          },
          [E, r],
        ),
        Q = De(
          function () {
            return Xg(s, ce);
          },
          [JSON.stringify(s), ce],
        ),
        Ce = Pr('', {
          value: f !== void 0 ? f : d,
          postState: function (Oe) {
            return Oe || '';
          },
        }),
        Se = ge(Ce, 2),
        me = Se[0],
        se = Se[1],
        $e = tE(j, u, Q, P, N),
        Ee = $e.valueOptions,
        Me = $e.labelOptions,
        Le = $e.options,
        Re = Qt(
          function (ve) {
            var Oe = jg(ve);
            return Oe.map(function (Ne) {
              var Ue, ft, Pt, Tn, wn;
              if (EE(Ne)) Ue = Ne;
              else {
                var Fn;
                (Pt = Ne.key), (ft = Ne.label), (Ue = (Fn = Ne.value) !== null && Fn !== void 0 ? Fn : Pt);
              }
              var Dt = Ee.get(Ue);
              if (Dt) {
                var En;
                ft === void 0 && (ft = Dt == null ? void 0 : Dt[N || Q.label]),
                  Pt === void 0 && (Pt = (En = Dt == null ? void 0 : Dt.key) !== null && En !== void 0 ? En : Ue),
                  (Tn = Dt == null ? void 0 : Dt.disabled),
                  (wn = Dt == null ? void 0 : Dt.title);
              }
              return { label: ft, value: Ue, key: Pt, disabled: Tn, title: wn };
            });
          },
          [Q, N, Ee],
        ),
        ne = Pr(V, { value: z }),
        Te = ge(ne, 2),
        He = Te[0],
        oe = Te[1],
        ue = De(
          function () {
            var ve,
              Oe = Re(He);
            return r === 'combobox' && !((ve = Oe[0]) !== null && ve !== void 0 && ve.value) ? [] : Oe;
          },
          [He, Re, r],
        ),
        de = qw(ue, Ee),
        Be = ge(de, 2),
        Xe = Be[0],
        Ct = Be[1],
        _t = De(
          function () {
            if (!r && Xe.length === 1) {
              var ve = Xe[0];
              if (ve.value === null && (ve.label === null || ve.label === void 0)) return [];
            }
            return Xe.map(function (Oe) {
              var Ne;
              return G(G({}, Oe), {}, { label: (Ne = Oe.label) !== null && Ne !== void 0 ? Ne : Oe.value });
            });
          },
          [r, Xe],
        ),
        $t = De(
          function () {
            return new Set(
              Xe.map(function (ve) {
                return ve.value;
              }),
            );
          },
          [Xe],
        );
      Fe(
        function () {
          if (r === 'combobox') {
            var ve,
              Oe = (ve = Xe[0]) === null || ve === void 0 ? void 0 : ve.value;
            se(Sw(Oe) ? String(Oe) : '');
          }
        },
        [Xe],
      );
      var ht = Jg(function (ve, Oe) {
          var Ne,
            Ue = Oe ?? ve;
          return (Ne = {}), Ie(Ne, Q.value, ve), Ie(Ne, Q.label, Ue), Ne;
        }),
        vt = De(
          function () {
            if (r !== 'tags') return Le;
            var ve = ze(Le),
              Oe = function (Ue) {
                return Ee.has(Ue);
              };
            return (
              ze(Xe)
                .sort(function (Ne, Ue) {
                  return Ne.value < Ue.value ? -1 : 1;
                })
                .forEach(function (Ne) {
                  var Ue = Ne.value;
                  Oe(Ue) || ve.push(ht(Ue, Ne.label));
                }),
              ve
            );
          },
          [ht, Le, Ee, Xe, r],
        ),
        pt = Kw(vt, Q, me, xe, P),
        Kt = De(
          function () {
            return r !== 'tags' ||
              !me ||
              pt.some(function (ve) {
                return ve[P || 'value'] === me;
              })
              ? pt
              : [ht(me)].concat(ze(pt));
          },
          [ht, P, r, pt, me],
        ),
        Tt = De(
          function () {
            return _
              ? ze(Kt).sort(function (ve, Oe) {
                  return _(ve, Oe);
                })
              : Kt;
          },
          [Kt, _],
        ),
        at = De(
          function () {
            return kw(Tt, { fieldNames: Q, childrenAsData: ce });
          },
          [Tt, Q, ce],
        ),
        tt = function (Oe) {
          var Ne = Re(Oe);
          if (
            (oe(Ne),
            X &&
              (Ne.length !== Xe.length ||
                Ne.some(function (Pt, Tn) {
                  var wn;
                  return (
                    ((wn = Xe[Tn]) === null || wn === void 0 ? void 0 : wn.value) !== (Pt == null ? void 0 : Pt.value)
                  );
                })))
          ) {
            var Ue = U
                ? Ne
                : Ne.map(function (Pt) {
                    return Pt.value;
                  }),
              ft = Ne.map(function (Pt) {
                return Ic(Ct(Pt.value));
              });
            X(le ? Ue : Ue[0], le ? ft : ft[0]);
          }
        },
        Xt = we(null),
        zt = ge(Xt, 2),
        Ve = zt[0],
        nt = zt[1],
        It = we(0),
        gt = ge(It, 2),
        lt = gt[0],
        Lt = gt[1],
        Ut = $ !== void 0 ? $ : r !== 'combobox',
        Pe = Qt(
          function (ve, Oe) {
            var Ne = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
              Ue = Ne.source,
              ft = Ue === void 0 ? 'keyboard' : Ue;
            Lt(Oe), l && r === 'combobox' && ve !== null && ft === 'keyboard' && nt(String(ve));
          },
          [l, r],
        ),
        ke = function (Oe, Ne, Ue) {
          var ft = function () {
            var In,
              jn = Ct(Oe);
            return [
              U
                ? {
                    label: jn == null ? void 0 : jn[Q.label],
                    value: Oe,
                    key: (In = jn == null ? void 0 : jn.key) !== null && In !== void 0 ? In : Oe,
                  }
                : Oe,
              Ic(jn),
            ];
          };
          if (Ne && x) {
            var Pt = ft(),
              Tn = ge(Pt, 2),
              wn = Tn[0],
              Fn = Tn[1];
            x(wn, Fn);
          } else if (!Ne && y && Ue !== 'clear') {
            var Dt = ft(),
              En = ge(Dt, 2),
              Yn = En[0],
              vn = En[1];
            y(Yn, vn);
          }
        },
        mt = Jg(function (ve, Oe) {
          var Ne,
            Ue = le ? Oe.selected : !0;
          Ue
            ? (Ne = le ? [].concat(ze(Xe), [ve]) : [ve])
            : (Ne = Xe.filter(function (ft) {
                return ft.value !== ve;
              })),
            tt(Ne),
            ke(ve, Ue),
            r === 'combobox' ? nt('') : (!Pc || v) && (se(''), nt(''));
        }),
        ct = function (Oe, Ne) {
          tt(Oe);
          var Ue = Ne.type,
            ft = Ne.values;
          (Ue === 'remove' || Ue === 'clear') &&
            ft.forEach(function (Pt) {
              ke(Pt.value, !1, Ue);
            });
        },
        wt = function (Oe, Ne) {
          if ((se(Oe), nt(null), Ne.source === 'submit')) {
            var Ue = (Oe || '').trim();
            if (Ue) {
              var ft = Array.from(new Set([].concat(ze($t), [Ue])));
              tt(ft), ke(Ue, !0), se('');
            }
            return;
          }
          Ne.source !== 'blur' && (r === 'combobox' && tt(Oe), p == null || p(Oe));
        },
        pn = function (Oe) {
          var Ne = Oe;
          r !== 'tags' &&
            (Ne = Oe.map(function (ft) {
              var Pt = Me.get(ft);
              return Pt == null ? void 0 : Pt.value;
            }).filter(function (ft) {
              return ft !== void 0;
            }));
          var Ue = Array.from(new Set([].concat(ze($t), ze(Ne))));
          tt(Ue),
            Ue.forEach(function (ft) {
              ke(ft, !0);
            });
        },
        Gt = De(
          function () {
            var ve = M !== !1 && O !== !1;
            return G(
              G({}, $e),
              {},
              {
                flattenOptions: at,
                onActiveValue: Pe,
                defaultActiveFirstOption: Ut,
                onSelect: mt,
                menuItemSelectedIcon: I,
                rawValues: $t,
                fieldNames: Q,
                virtual: ve,
                listHeight: B,
                listItemHeight: A,
                childrenAsData: ce,
              },
            );
          },
          [$e, at, Pe, Ut, mt, I, $t, Q, M, O, B, A, ce],
        );
      return b.createElement(
        rh.Provider,
        { value: Gt },
        b.createElement(
          Gw,
          rt({}, Z, {
            id: ee,
            prefixCls: o,
            ref: t,
            omitDomProps: wE,
            mode: r,
            displayValues: _t,
            onDisplayValuesChange: ct,
            searchValue: me,
            onSearch: wt,
            autoClearSearchValue: v,
            onSearchSplit: pn,
            dropdownMatchSelectWidth: O,
            OptionList: oh,
            emptyOptions: !at.length,
            activeValue: Ve,
            activeDescendantId: ''.concat(ee, '_list_').concat(lt),
          }),
        ),
      );
    }),
    Ac = $E;
  (Ac.Option = Mc), (Ac.OptGroup = Rc);
  const OE = () => {
      const [, e] = bi(),
        t = new mn(e.colorBgBase);
      let n = {};
      return (
        t.toHsl().l < 0.5 && (n = { opacity: 0.65 }),
        b.createElement(
          'svg',
          { style: n, width: '184', height: '152', viewBox: '0 0 184 152', xmlns: 'http://www.w3.org/2000/svg' },
          b.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            b.createElement(
              'g',
              { transform: 'translate(24 31.67)' },
              b.createElement('ellipse', {
                fillOpacity: '.8',
                fill: '#F5F5F7',
                cx: '67.797',
                cy: '106.89',
                rx: '67.797',
                ry: '12.668',
              }),
              b.createElement('path', {
                d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
                fill: '#AEB8C2',
              }),
              b.createElement('path', {
                d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                fill: 'url(#linearGradient-1)',
                transform: 'translate(13.56)',
              }),
              b.createElement('path', {
                d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
                fill: '#F5F5F7',
              }),
              b.createElement('path', {
                d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
                fill: '#DCE0E6',
              }),
            ),
            b.createElement('path', {
              d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
              fill: '#DCE0E6',
            }),
            b.createElement(
              'g',
              { transform: 'translate(149.65 15.383)', fill: '#FFF' },
              b.createElement('ellipse', { cx: '20.654', cy: '3.167', rx: '2.849', ry: '2.815' }),
              b.createElement('path', { d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z' }),
            ),
          ),
        )
      );
    },
    _E = () => {
      const [, e] = bi(),
        { colorFill: t, colorFillTertiary: n, colorFillQuaternary: r, colorBgContainer: i } = e,
        {
          borderColor: o,
          shadowColor: l,
          contentColor: s,
        } = De(
          () => ({
            borderColor: new mn(t).onBackground(i).toHexShortString(),
            shadowColor: new mn(n).onBackground(i).toHexShortString(),
            contentColor: new mn(r).onBackground(i).toHexShortString(),
          }),
          [t, n, r, i],
        );
      return b.createElement(
        'svg',
        { width: '64', height: '41', viewBox: '0 0 64 41', xmlns: 'http://www.w3.org/2000/svg' },
        b.createElement(
          'g',
          { transform: 'translate(0 1)', fill: 'none', fillRule: 'evenodd' },
          b.createElement('ellipse', { fill: l, cx: '32', cy: '33', rx: '32', ry: '7' }),
          b.createElement(
            'g',
            { fillRule: 'nonzero', stroke: o },
            b.createElement('path', {
              d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
            }),
            b.createElement('path', {
              d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
              fill: s,
            }),
          ),
        ),
      );
    },
    TE = (e) => {
      const { componentCls: t, margin: n, marginXS: r, marginXL: i, fontSize: o, lineHeight: l } = e;
      return {
        [t]: {
          marginInline: r,
          fontSize: o,
          lineHeight: l,
          textAlign: 'center',
          [`${t}-image`]: {
            height: e.emptyImgHeight,
            marginBottom: r,
            opacity: e.opacityImage,
            img: { height: '100%' },
            svg: { height: '100%', margin: 'auto' },
          },
          [`${t}-description`]: { color: e.colorText },
          [`${t}-footer`]: { marginTop: n },
          '&-normal': {
            marginBlock: i,
            color: e.colorTextDisabled,
            [`${t}-description`]: { color: e.colorTextDisabled },
            [`${t}-image`]: { height: e.emptyImgHeightMD },
          },
          '&-small': { marginBlock: r, color: e.colorTextDisabled, [`${t}-image`]: { height: e.emptyImgHeightSM } },
        },
      };
    },
    IE = On('Empty', (e) => {
      const { componentCls: t, controlHeightLG: n } = e,
        r = jt(e, {
          emptyImgCls: `${t}-img`,
          emptyImgHeight: n * 2.5,
          emptyImgHeightMD: n,
          emptyImgHeightSM: n * 0.875,
        });
      return [TE(r)];
    });
  var PE =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const ah = b.createElement(OE, null),
    lh = b.createElement(_E, null),
    Dc = (e) => {
      var {
          className: t,
          rootClassName: n,
          prefixCls: r,
          image: i = ah,
          description: o,
          children: l,
          imageStyle: s,
        } = e,
        d = PE(e, ['className', 'rootClassName', 'prefixCls', 'image', 'description', 'children', 'imageStyle']);
      const { getPrefixCls: f, direction: p } = je(xt),
        h = f('empty', r),
        [v, x] = IE(h),
        [y] = Zi('Empty'),
        C = typeof o < 'u' ? o : y == null ? void 0 : y.description,
        O = typeof C == 'string' ? C : 'empty';
      let E = null;
      return (
        typeof i == 'string' ? (E = b.createElement('img', { alt: O, src: i })) : (E = i),
        v(
          b.createElement(
            'div',
            Object.assign({ className: he(x, h, { [`${h}-normal`]: i === lh, [`${h}-rtl`]: p === 'rtl' }, t, n) }, d),
            b.createElement('div', { className: `${h}-image`, style: s }, E),
            C && b.createElement('div', { className: `${h}-description` }, C),
            l && b.createElement('div', { className: `${h}-footer` }, l),
          ),
        )
      );
    };
  (Dc.PRESENTED_IMAGE_DEFAULT = ah), (Dc.PRESENTED_IMAGE_SIMPLE = lh);
  const jo = Dc,
    sh = (e) => {
      const { componentName: t } = e,
        { getPrefixCls: n } = je(xt),
        r = n('empty');
      switch (t) {
        case 'Table':
        case 'List':
          return be.createElement(jo, { image: jo.PRESENTED_IMAGE_SIMPLE });
        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
          return be.createElement(jo, { image: jo.PRESENTED_IMAGE_SIMPLE, className: `${r}-small` });
        default:
          return be.createElement(jo, null);
      }
    };
  function Fc(e, t, n) {
    return he({
      [`${e}-status-success`]: t === 'success',
      [`${e}-status-warning`]: t === 'warning',
      [`${e}-status-error`]: t === 'error',
      [`${e}-status-validating`]: t === 'validating',
      [`${e}-has-feedback`]: n,
    });
  }
  const ch = (e, t) => t || e;
  var NE = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z',
          },
        },
      ],
    },
    name: 'check',
    theme: 'outlined',
  };
  const RE = NE;
  var uh = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: RE }));
  };
  uh.displayName = 'CheckOutlined';
  const dh = We(uh);
  var ME = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
          },
        },
      ],
    },
    name: 'down',
    theme: 'outlined',
  };
  const AE = ME;
  var fh = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: AE }));
  };
  fh.displayName = 'DownOutlined';
  const DE = We(fh);
  var FE = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
          },
        },
      ],
    },
    name: 'search',
    theme: 'outlined',
  };
  const jE = FE;
  var ph = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: jE }));
  };
  ph.displayName = 'SearchOutlined';
  const zE = We(ph);
  function LE(e) {
    let {
      suffixIcon: t,
      clearIcon: n,
      menuItemSelectedIcon: r,
      removeIcon: i,
      loading: o,
      multiple: l,
      hasFeedback: s,
      prefixCls: d,
      showArrow: f,
      feedbackIcon: p,
    } = e;
    const h = n ?? b.createElement(Xa, null),
      v = (O) => b.createElement(b.Fragment, null, f !== !1 && O, s && p);
    let x = null;
    if (t !== void 0) x = v(t);
    else if (o) x = v(b.createElement(tl, { spin: !0 }));
    else {
      const O = `${d}-suffix`;
      x = (E) => {
        let { open: _, showSearch: P } = E;
        return v(_ && P ? b.createElement(zE, { className: O }) : b.createElement(DE, { className: O }));
      };
    }
    let y = null;
    r !== void 0 ? (y = r) : l ? (y = b.createElement(dh, null)) : (y = null);
    let C = null;
    return (
      i !== void 0 ? (C = i) : (C = b.createElement(Ya, null)),
      { clearIcon: h, suffixIcon: x, itemIcon: y, removeIcon: C }
    );
  }
  function HE(e, t, n) {
    return function (i) {
      const { prefixCls: o, style: l } = i,
        s = ie(null),
        [d, f] = we(0),
        [p, h] = we(0),
        [v, x] = Pr(!1, { value: i.open }),
        { getPrefixCls: y } = je(xt),
        C = y(t || 'select', o);
      return (
        Fe(() => {
          if ((x(!0), typeof ResizeObserver < 'u')) {
            const O = new ResizeObserver((_) => {
                const P = _[0].target;
                f(P.offsetHeight + 8), h(P.offsetWidth);
              }),
              E = setInterval(() => {
                var _;
                const P = n ? `.${n(C)}` : `.${C}-dropdown`,
                  N = (_ = s.current) === null || _ === void 0 ? void 0 : _.querySelector(P);
                N && (clearInterval(E), O.observe(N));
              }, 10);
            return () => {
              clearInterval(E), O.disconnect();
            };
          }
        }, []),
        b.createElement(
          Js,
          {
            theme: { token: { motionDurationFast: '0.01s', motionDurationMid: '0.01s', motionDurationSlow: '0.01s' } },
          },
          b.createElement(
            'div',
            { ref: s, style: { paddingBottom: d, position: 'relative', width: 'fit-content', minWidth: p } },
            b.createElement(
              e,
              Object.assign({}, i, {
                style: Object.assign(Object.assign({}, l), { margin: 0 }),
                open: v,
                visible: v,
                getPopupContainer: () => s.current,
              }),
            ),
          ),
        )
      );
    };
  }
  const gh = (e) => {
      const { controlPaddingHorizontal: t } = e;
      return {
        position: 'relative',
        display: 'block',
        minHeight: e.controlHeight,
        padding: `${(e.controlHeight - e.fontSize * e.lineHeight) / 2}px ${t}px`,
        color: e.colorText,
        fontWeight: 'normal',
        fontSize: e.fontSize,
        lineHeight: e.lineHeight,
        boxSizing: 'border-box',
      };
    },
    BE = (e) => {
      const { antCls: t, componentCls: n } = e,
        r = `${n}-item`;
      return [
        {
          [`${n}-dropdown`]: Object.assign(Object.assign({}, ir(e)), {
            position: 'absolute',
            top: -9999,
            zIndex: e.zIndexPopup,
            boxSizing: 'border-box',
            padding: e.paddingXXS,
            overflow: 'hidden',
            fontSize: e.fontSize,
            fontVariant: 'initial',
            backgroundColor: e.colorBgElevated,
            borderRadius: e.borderRadiusLG,
            outline: 'none',
            boxShadow: e.boxShadowSecondary,
            [`
            &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-bottomLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-bottomLeft
          `]: { animationName: ug },
            [`
            &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-topLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-topLeft
          `]: { animationName: fg },
            [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-bottomLeft`]: { animationName: dg },
            [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-topLeft`]: { animationName: pg },
            '&-hidden': { display: 'none' },
            '&-empty': { color: e.colorTextDisabled },
            [`${r}-empty`]: Object.assign(Object.assign({}, gh(e)), { color: e.colorTextDisabled }),
            [`${r}`]: Object.assign(Object.assign({}, gh(e)), {
              cursor: 'pointer',
              transition: `background ${e.motionDurationSlow} ease`,
              borderRadius: e.borderRadiusSM,
              '&-group': { color: e.colorTextDescription, fontSize: e.fontSizeSM, cursor: 'default' },
              '&-option': {
                display: 'flex',
                '&-content': Object.assign(Object.assign({ flex: 'auto' }, Io), { '> *': Object.assign({}, Io) }),
                '&-state': { flex: 'none' },
                [`&-active:not(${r}-option-disabled)`]: { backgroundColor: e.controlItemBgHover },
                [`&-selected:not(${r}-option-disabled)`]: {
                  color: e.colorText,
                  fontWeight: e.fontWeightStrong,
                  backgroundColor: e.controlItemBgActive,
                  [`${r}-option-state`]: { color: e.colorPrimary },
                },
                '&-disabled': {
                  [`&${r}-option-selected`]: { backgroundColor: e.colorBgContainerDisabled },
                  color: e.colorTextDisabled,
                  cursor: 'not-allowed',
                },
                '&-grouped': { paddingInlineStart: e.controlPaddingHorizontal * 2 },
              },
            }),
            '&-rtl': { direction: 'rtl' },
          }),
        },
        gg(e, 'slide-up'),
        gg(e, 'slide-down'),
        cg(e, 'move-up'),
        cg(e, 'move-down'),
      ];
    },
    ro = 2;
  function hh(e) {
    let { controlHeightSM: t, controlHeight: n, lineWidth: r } = e;
    const i = (n - t) / 2 - r,
      o = Math.ceil(i / 2);
    return [i, o];
  }
  function jc(e, t) {
    const { componentCls: n, iconCls: r } = e,
      i = `${n}-selection-overflow`,
      o = e.controlHeightSM,
      [l] = hh(e),
      s = t ? `${n}-${t}` : '';
    return {
      [`${n}-multiple${s}`]: {
        fontSize: e.fontSize,
        [i]: {
          position: 'relative',
          display: 'flex',
          flex: 'auto',
          flexWrap: 'wrap',
          maxWidth: '100%',
          '&-item': { flex: 'none', alignSelf: 'center', maxWidth: '100%', display: 'inline-flex' },
        },
        [`${n}-selector`]: {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          padding: `${l - ro}px ${ro * 2}px`,
          borderRadius: e.borderRadius,
          [`${n}-show-search&`]: { cursor: 'text' },
          [`${n}-disabled&`]: { background: e.colorBgContainerDisabled, cursor: 'not-allowed' },
          '&:after': {
            display: 'inline-block',
            width: 0,
            margin: `${ro}px 0`,
            lineHeight: `${o}px`,
            content: '"\\a0"',
          },
        },
        [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: { paddingInlineEnd: e.fontSizeIcon + e.controlPaddingHorizontal },
        [`${n}-selection-item`]: {
          position: 'relative',
          display: 'flex',
          flex: 'none',
          boxSizing: 'border-box',
          maxWidth: '100%',
          height: o,
          marginTop: ro,
          marginBottom: ro,
          lineHeight: `${o - e.lineWidth * 2}px`,
          background: e.colorFillSecondary,
          border: `${e.lineWidth}px solid ${e.colorSplit}`,
          borderRadius: e.borderRadiusSM,
          cursor: 'default',
          transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
          userSelect: 'none',
          marginInlineEnd: ro * 2,
          paddingInlineStart: e.paddingXS,
          paddingInlineEnd: e.paddingXS / 2,
          [`${n}-disabled&`]: { color: e.colorTextDisabled, borderColor: e.colorBorder, cursor: 'not-allowed' },
          '&-content': {
            display: 'inline-block',
            marginInlineEnd: e.paddingXS / 2,
            overflow: 'hidden',
            whiteSpace: 'pre',
            textOverflow: 'ellipsis',
          },
          '&-remove': Object.assign(Object.assign({}, Ws()), {
            display: 'inline-block',
            color: e.colorIcon,
            fontWeight: 'bold',
            fontSize: 10,
            lineHeight: 'inherit',
            cursor: 'pointer',
            [`> ${r}`]: { verticalAlign: '-0.2em' },
            '&:hover': { color: e.colorIconHover },
          }),
        },
        [`${i}-item + ${i}-item`]: { [`${n}-selection-search`]: { marginInlineStart: 0 } },
        [`${n}-selection-search`]: {
          display: 'inline-flex',
          position: 'relative',
          maxWidth: '100%',
          marginInlineStart: e.inputPaddingHorizontalBase - l,
          [`
          &-input,
          &-mirror
        `]: { height: o, fontFamily: e.fontFamily, lineHeight: `${o}px`, transition: `all ${e.motionDurationSlow}` },
          '&-input': { width: '100%', minWidth: 4.1 },
          '&-mirror': {
            position: 'absolute',
            top: 0,
            insetInlineStart: 0,
            insetInlineEnd: 'auto',
            zIndex: 999,
            whiteSpace: 'pre',
            visibility: 'hidden',
          },
        },
        [`${n}-selection-placeholder `]: {
          position: 'absolute',
          top: '50%',
          insetInlineStart: e.inputPaddingHorizontalBase,
          insetInlineEnd: e.inputPaddingHorizontalBase,
          transform: 'translateY(-50%)',
          transition: `all ${e.motionDurationSlow}`,
        },
      },
    };
  }
  function kE(e) {
    const { componentCls: t } = e,
      n = jt(e, {
        controlHeight: e.controlHeightSM,
        controlHeightSM: e.controlHeightXS,
        borderRadius: e.borderRadiusSM,
        borderRadiusSM: e.borderRadiusXS,
      }),
      [, r] = hh(e);
    return [
      jc(e),
      jc(n, 'sm'),
      {
        [`${t}-multiple${t}-sm`]: {
          [`${t}-selection-placeholder`]: { insetInline: e.controlPaddingHorizontalSM - e.lineWidth },
          [`${t}-selection-search`]: { marginInlineStart: r },
        },
      },
      jc(
        jt(e, {
          fontSize: e.fontSizeLG,
          controlHeight: e.controlHeightLG,
          controlHeightSM: e.controlHeight,
          borderRadius: e.borderRadiusLG,
          borderRadiusSM: e.borderRadius,
        }),
        'lg',
      ),
    ];
  }
  function zc(e, t) {
    const { componentCls: n, inputPaddingHorizontalBase: r, borderRadius: i } = e,
      o = e.controlHeight - e.lineWidth * 2,
      l = Math.ceil(e.fontSize * 1.25),
      s = t ? `${n}-${t}` : '';
    return {
      [`${n}-single${s}`]: {
        fontSize: e.fontSize,
        [`${n}-selector`]: Object.assign(Object.assign({}, ir(e)), {
          display: 'flex',
          borderRadius: i,
          [`${n}-selection-search`]: {
            position: 'absolute',
            top: 0,
            insetInlineStart: r,
            insetInlineEnd: r,
            bottom: 0,
            '&-input': { width: '100%' },
          },
          [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
            padding: 0,
            lineHeight: `${o}px`,
            transition: `all ${e.motionDurationSlow}`,
            '@supports (-moz-appearance: meterbar)': { lineHeight: `${o}px` },
          },
          [`${n}-selection-item`]: { position: 'relative', userSelect: 'none' },
          [`${n}-selection-placeholder`]: { transition: 'none', pointerEvents: 'none' },
          [['&:after', `${n}-selection-item:after`, `${n}-selection-placeholder:after`].join(',')]: {
            display: 'inline-block',
            width: 0,
            visibility: 'hidden',
            content: '"\\a0"',
          },
        }),
        [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: { paddingInlineEnd: l },
        [`&${n}-open ${n}-selection-item`]: { color: e.colorTextPlaceholder },
        [`&:not(${n}-customize-input)`]: {
          [`${n}-selector`]: {
            width: '100%',
            height: e.controlHeight,
            padding: `0 ${r}px`,
            [`${n}-selection-search-input`]: { height: o },
            '&:after': { lineHeight: `${o}px` },
          },
        },
        [`&${n}-customize-input`]: {
          [`${n}-selector`]: {
            '&:after': { display: 'none' },
            [`${n}-selection-search`]: { position: 'static', width: '100%' },
            [`${n}-selection-placeholder`]: {
              position: 'absolute',
              insetInlineStart: 0,
              insetInlineEnd: 0,
              padding: `0 ${r}px`,
              '&:after': { display: 'none' },
            },
          },
        },
      },
    };
  }
  function VE(e) {
    const { componentCls: t } = e,
      n = e.controlPaddingHorizontalSM - e.lineWidth;
    return [
      zc(e),
      zc(jt(e, { controlHeight: e.controlHeightSM, borderRadius: e.borderRadiusSM }), 'sm'),
      {
        [`${t}-single${t}-sm`]: {
          [`&:not(${t}-customize-input)`]: {
            [`${t}-selection-search`]: { insetInlineStart: n, insetInlineEnd: n },
            [`${t}-selector`]: { padding: `0 ${n}px` },
            [`&${t}-show-arrow ${t}-selection-search`]: { insetInlineEnd: n + e.fontSize * 1.5 },
            [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: { paddingInlineEnd: e.fontSize * 1.5 },
          },
        },
      },
      zc(jt(e, { controlHeight: e.controlHeightLG, fontSize: e.fontSizeLG, borderRadius: e.borderRadiusLG }), 'lg'),
    ];
  }
  const WE = (e) => {
      const { componentCls: t } = e;
      return {
        position: 'relative',
        backgroundColor: e.colorBgContainer,
        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        input: { cursor: 'pointer' },
        [`${t}-show-search&`]: { cursor: 'text', input: { cursor: 'auto', color: 'inherit' } },
        [`${t}-disabled&`]: {
          color: e.colorTextDisabled,
          background: e.colorBgContainerDisabled,
          cursor: 'not-allowed',
          [`${t}-multiple&`]: { background: e.colorBgContainerDisabled },
          input: { cursor: 'not-allowed' },
        },
      };
    },
    Lc = function (e, t) {
      let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      const { componentCls: r, borderHoverColor: i, outlineColor: o, antCls: l } = t,
        s = n ? { [`${r}-selector`]: { borderColor: i } } : {};
      return {
        [e]: {
          [`&:not(${r}-disabled):not(${r}-customize-input):not(${l}-pagination-size-changer)`]: Object.assign(
            Object.assign({}, s),
            {
              [`${r}-focused& ${r}-selector`]: {
                borderColor: i,
                boxShadow: `0 0 0 ${t.controlOutlineWidth}px ${o}`,
                outline: 0,
              },
              [`&:hover ${r}-selector`]: { borderColor: i },
            },
          ),
        },
      };
    },
    UE = (e) => {
      const { componentCls: t } = e;
      return {
        [`${t}-selection-search-input`]: {
          margin: 0,
          padding: 0,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          appearance: 'none',
          '&::-webkit-search-cancel-button': { display: 'none', '-webkit-appearance': 'none' },
        },
      };
    },
    GE = (e) => {
      const { componentCls: t, inputPaddingHorizontalBase: n, iconCls: r } = e;
      return {
        [t]: Object.assign(Object.assign({}, ir(e)), {
          position: 'relative',
          display: 'inline-block',
          cursor: 'pointer',
          [`&:not(${t}-customize-input) ${t}-selector`]: Object.assign(Object.assign({}, WE(e)), UE(e)),
          [`${t}-selection-item`]: Object.assign(Object.assign({ flex: 1, fontWeight: 'normal' }, Io), {
            '> *': Object.assign({ lineHeight: 'inherit' }, Io),
          }),
          [`${t}-selection-placeholder`]: Object.assign(Object.assign({}, Io), {
            flex: 1,
            color: e.colorTextPlaceholder,
            pointerEvents: 'none',
          }),
          [`${t}-arrow`]: Object.assign(Object.assign({}, Ws()), {
            position: 'absolute',
            top: '50%',
            insetInlineStart: 'auto',
            insetInlineEnd: n,
            height: e.fontSizeIcon,
            marginTop: -e.fontSizeIcon / 2,
            color: e.colorTextQuaternary,
            fontSize: e.fontSizeIcon,
            lineHeight: 1,
            textAlign: 'center',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            [r]: {
              verticalAlign: 'top',
              transition: `transform ${e.motionDurationSlow}`,
              '> svg': { verticalAlign: 'top' },
              [`&:not(${t}-suffix)`]: { pointerEvents: 'auto' },
            },
            [`${t}-disabled &`]: { cursor: 'not-allowed' },
            '> *:not(:last-child)': { marginInlineEnd: 8 },
          }),
          [`${t}-clear`]: {
            position: 'absolute',
            top: '50%',
            insetInlineStart: 'auto',
            insetInlineEnd: n,
            zIndex: 1,
            display: 'inline-block',
            width: e.fontSizeIcon,
            height: e.fontSizeIcon,
            marginTop: -e.fontSizeIcon / 2,
            color: e.colorTextQuaternary,
            fontSize: e.fontSizeIcon,
            fontStyle: 'normal',
            lineHeight: 1,
            textAlign: 'center',
            textTransform: 'none',
            background: e.colorBgContainer,
            cursor: 'pointer',
            opacity: 0,
            transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
            textRendering: 'auto',
            '&:before': { display: 'block' },
            '&:hover': { color: e.colorTextTertiary },
          },
          '&:hover': { [`${t}-clear`]: { opacity: 1 } },
        }),
        [`${t}-has-feedback`]: { [`${t}-clear`]: { insetInlineEnd: n + e.fontSize + e.paddingXXS } },
      };
    },
    qE = (e) => {
      const { componentCls: t } = e;
      return [
        {
          [t]: {
            [`&-borderless ${t}-selector`]: {
              backgroundColor: 'transparent !important',
              borderColor: 'transparent !important',
              boxShadow: 'none !important',
            },
            [`&${t}-in-form-item`]: { width: '100%' },
          },
        },
        GE(e),
        VE(e),
        kE(e),
        BE(e),
        { [`${t}-rtl`]: { direction: 'rtl' } },
        Lc(t, jt(e, { borderHoverColor: e.colorPrimaryHover, outlineColor: e.controlOutline })),
        Lc(`${t}-status-error`, jt(e, { borderHoverColor: e.colorErrorHover, outlineColor: e.colorErrorOutline }), !0),
        Lc(
          `${t}-status-warning`,
          jt(e, { borderHoverColor: e.colorWarningHover, outlineColor: e.colorWarningOutline }),
          !0,
        ),
        bc(e, { borderElCls: `${t}-selector`, focusElCls: `${t}-focused` }),
      ];
    },
    KE = On(
      'Select',
      (e, t) => {
        let { rootPrefixCls: n } = t;
        const r = jt(e, { rootPrefixCls: n, inputPaddingHorizontalBase: e.paddingSM - 1 });
        return [qE(r)];
      },
      (e) => ({ zIndexPopup: e.zIndexPopupBase + 50 }),
    );
  function XE(e) {
    return e ?? !0;
  }
  var YE =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const mh = 'SECRET_COMBOBOX_MODE_DO_NOT_USE',
    io = We((e, t) => {
      var {
          prefixCls: n,
          bordered: r = !0,
          className: i,
          rootClassName: o,
          getPopupContainer: l,
          popupClassName: s,
          dropdownClassName: d,
          listHeight: f = 256,
          placement: p,
          listItemHeight: h = 24,
          size: v,
          disabled: x,
          notFoundContent: y,
          status: C,
          showArrow: O,
        } = e,
        E = YE(e, [
          'prefixCls',
          'bordered',
          'className',
          'rootClassName',
          'getPopupContainer',
          'popupClassName',
          'dropdownClassName',
          'listHeight',
          'placement',
          'listItemHeight',
          'size',
          'disabled',
          'notFoundContent',
          'status',
          'showArrow',
        ]);
      const {
          getPopupContainer: _,
          getPrefixCls: P,
          renderEmpty: N,
          direction: j,
          virtual: u,
          dropdownMatchSelectWidth: $,
          select: I,
        } = je(xt),
        M = je(Ki),
        D = P('select', n),
        B = P(),
        { compactSize: F, compactItemClassnames: A } = Ap(D, j),
        [z, V] = KE(D),
        U = De(() => {
          const { mode: oe } = E;
          if (oe !== 'combobox') return oe === mh ? 'combobox' : oe;
        }, [E.mode]),
        X = U === 'multiple' || U === 'tags',
        Z = XE(O),
        { status: ee, hasFeedback: le, isFormItemInput: ce, feedbackIcon: xe } = je(sl),
        Q = ch(ee, C);
      let Ce;
      y !== void 0
        ? (Ce = y)
        : U === 'combobox'
        ? (Ce = null)
        : (Ce = (N == null ? void 0 : N('Select')) || b.createElement(sh, { componentName: 'Select' }));
      const {
          suffixIcon: Se,
          itemIcon: me,
          removeIcon: se,
          clearIcon: $e,
        } = LE(
          Object.assign(Object.assign({}, E), {
            multiple: X,
            hasFeedback: le,
            feedbackIcon: xe,
            showArrow: Z,
            prefixCls: D,
          }),
        ),
        Ee = ji(E, ['suffixIcon', 'itemIcon']),
        Me = he(s || d, { [`${D}-dropdown-${j}`]: j === 'rtl' }, o, V),
        Le = F || v || M,
        Re = je(Wa),
        ne = x ?? Re,
        Te = he(
          {
            [`${D}-lg`]: Le === 'large',
            [`${D}-sm`]: Le === 'small',
            [`${D}-rtl`]: j === 'rtl',
            [`${D}-borderless`]: !r,
            [`${D}-in-form-item`]: ce,
          },
          Fc(D, Q, le),
          A,
          i,
          o,
          V,
        ),
        He = () => (p !== void 0 ? p : j === 'rtl' ? 'bottomRight' : 'bottomLeft');
      return z(
        b.createElement(
          Ac,
          Object.assign(
            { ref: t, virtual: u, dropdownMatchSelectWidth: $, showSearch: I == null ? void 0 : I.showSearch },
            Ee,
            {
              transitionName: qr(B, KS(p), E.transitionName),
              listHeight: f,
              listItemHeight: h,
              mode: U,
              prefixCls: D,
              placement: He(),
              direction: j,
              inputIcon: Se,
              menuItemSelectedIcon: me,
              removeIcon: se,
              clearIcon: $e,
              notFoundContent: Ce,
              className: Te,
              getPopupContainer: l || _,
              dropdownClassName: Me,
              showArrow: le || Z,
              disabled: ne,
            },
          ),
        ),
      );
    }),
    QE = HE(io);
  (io.SECRET_COMBOBOX_MODE_DO_NOT_USE = mh),
    (io.Option = Mc),
    (io.OptGroup = Rc),
    (io._InternalPanelDoNotUseOrYouWillBeFired = QE);
  const hl = io;
  function JE() {
    const [, e] = ea((t) => t + 1, 0);
    return e;
  }
  const Ci = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
    ZE = (e) => ({
      xs: `(max-width: ${e.screenXSMax}px)`,
      sm: `(min-width: ${e.screenSM}px)`,
      md: `(min-width: ${e.screenMD}px)`,
      lg: `(min-width: ${e.screenLG}px)`,
      xl: `(min-width: ${e.screenXL}px)`,
      xxl: `(min-width: ${e.screenXXL}px)`,
    }),
    e$ = (e) => {
      const t = e,
        n = [].concat(Ci).reverse();
      return (
        n.forEach((r, i) => {
          const o = r.toUpperCase(),
            l = `screen${o}Min`,
            s = `screen${o}`;
          if (!(t[l] <= t[s])) throw new Error(`${l}<=${s} fails : !(${t[l]}<=${t[s]})`);
          if (i < n.length - 1) {
            const d = `screen${o}Max`;
            if (!(t[s] <= t[d])) throw new Error(`${s}<=${d} fails : !(${t[s]}<=${t[d]})`);
            const p = `screen${n[i + 1].toUpperCase()}Min`;
            if (!(t[d] <= t[p])) throw new Error(`${d}<=${p} fails : !(${t[d]}<=${t[p]})`);
          }
        }),
        e
      );
    };
  function vh() {
    const [, e] = bi(),
      t = ZE(e$(e));
    return be.useMemo(() => {
      const n = new Map();
      let r = -1,
        i = {};
      return {
        matchHandlers: {},
        dispatch(o) {
          return (i = o), n.forEach((l) => l(i)), n.size >= 1;
        },
        subscribe(o) {
          return n.size || this.register(), (r += 1), n.set(r, o), o(i), r;
        },
        unsubscribe(o) {
          n.delete(o), n.size || this.unregister();
        },
        unregister() {
          Object.keys(t).forEach((o) => {
            const l = t[o],
              s = this.matchHandlers[l];
            s == null || s.mql.removeListener(s == null ? void 0 : s.listener);
          }),
            n.clear();
        },
        register() {
          Object.keys(t).forEach((o) => {
            const l = t[o],
              s = (f) => {
                let { matches: p } = f;
                this.dispatch(Object.assign(Object.assign({}, i), { [o]: p }));
              },
              d = window.matchMedia(l);
            d.addListener(s), (this.matchHandlers[l] = { mql: d, listener: s }), s(d);
          });
        },
        responsiveMap: t,
      };
    }, [e]);
  }
  function bh() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    const t = ie({}),
      n = JE(),
      r = vh();
    return (
      Fe(() => {
        const i = r.subscribe((o) => {
          (t.current = o), e && n();
        });
        return () => r.unsubscribe(i);
      }, []),
      t.current
    );
  }
  var oo = { shiftX: 64, adjustY: 1 },
    ao = { adjustX: 1, shiftY: !0 },
    or = [0, 0],
    t$ = {
      left: { points: ['cr', 'cl'], overflow: ao, offset: [-4, 0], targetOffset: or },
      right: { points: ['cl', 'cr'], overflow: ao, offset: [4, 0], targetOffset: or },
      top: { points: ['bc', 'tc'], overflow: oo, offset: [0, -4], targetOffset: or },
      bottom: { points: ['tc', 'bc'], overflow: oo, offset: [0, 4], targetOffset: or },
      topLeft: { points: ['bl', 'tl'], overflow: oo, offset: [0, -4], targetOffset: or },
      leftTop: { points: ['tr', 'tl'], overflow: ao, offset: [-4, 0], targetOffset: or },
      topRight: { points: ['br', 'tr'], overflow: oo, offset: [0, -4], targetOffset: or },
      rightTop: { points: ['tl', 'tr'], overflow: ao, offset: [4, 0], targetOffset: or },
      bottomRight: { points: ['tr', 'br'], overflow: oo, offset: [0, 4], targetOffset: or },
      rightBottom: { points: ['bl', 'br'], overflow: ao, offset: [4, 0], targetOffset: or },
      bottomLeft: { points: ['tl', 'bl'], overflow: oo, offset: [0, 4], targetOffset: or },
      leftBottom: { points: ['br', 'bl'], overflow: ao, offset: [-4, 0], targetOffset: or },
    };
  function yh(e) {
    var t = e.children,
      n = e.prefixCls,
      r = e.id,
      i = e.overlayInnerStyle,
      o = e.className,
      l = e.style;
    return b.createElement(
      'div',
      { className: he(''.concat(n, '-content'), o), style: l },
      b.createElement(
        'div',
        { className: ''.concat(n, '-inner'), id: r, role: 'tooltip', style: i },
        typeof t == 'function' ? t() : t,
      ),
    );
  }
  var n$ = [
      'overlayClassName',
      'trigger',
      'mouseEnterDelay',
      'mouseLeaveDelay',
      'overlayStyle',
      'prefixCls',
      'children',
      'onVisibleChange',
      'afterVisibleChange',
      'transitionName',
      'animation',
      'motion',
      'placement',
      'align',
      'destroyTooltipOnHide',
      'defaultVisible',
      'getTooltipContainer',
      'overlayInnerStyle',
      'arrowContent',
      'overlay',
      'id',
      'showArrow',
    ],
    r$ = function (t, n) {
      var r = t.overlayClassName,
        i = t.trigger,
        o = i === void 0 ? ['hover'] : i,
        l = t.mouseEnterDelay,
        s = l === void 0 ? 0 : l,
        d = t.mouseLeaveDelay,
        f = d === void 0 ? 0.1 : d,
        p = t.overlayStyle,
        h = t.prefixCls,
        v = h === void 0 ? 'rc-tooltip' : h,
        x = t.children,
        y = t.onVisibleChange,
        C = t.afterVisibleChange,
        O = t.transitionName,
        E = t.animation,
        _ = t.motion,
        P = t.placement,
        N = P === void 0 ? 'right' : P,
        j = t.align,
        u = j === void 0 ? {} : j,
        $ = t.destroyTooltipOnHide,
        I = $ === void 0 ? !1 : $,
        M = t.defaultVisible,
        D = t.getTooltipContainer,
        B = t.overlayInnerStyle;
      t.arrowContent;
      var F = t.overlay,
        A = t.id,
        z = t.showArrow,
        V = z === void 0 ? !0 : z,
        U = qt(t, n$),
        X = ie(null);
      on(n, function () {
        return X.current;
      });
      var Z = G({}, U);
      'visible' in t && (Z.popupVisible = t.visible);
      var ee = function () {
        return b.createElement(yh, { key: 'content', prefixCls: v, id: A, overlayInnerStyle: B }, F);
      };
      return b.createElement(
        Gg,
        rt(
          {
            popupClassName: r,
            prefixCls: v,
            popup: ee,
            action: o,
            builtinPlacements: t$,
            popupPlacement: N,
            ref: X,
            popupAlign: u,
            getPopupContainer: D,
            onPopupVisibleChange: y,
            afterPopupVisibleChange: C,
            popupTransitionName: O,
            popupAnimation: E,
            popupMotion: _,
            defaultPopupVisible: M,
            autoDestroy: I,
            mouseLeaveDelay: f,
            popupStyle: p,
            mouseEnterDelay: s,
            arrow: V,
          },
          Z,
        ),
        x,
      );
    };
  const i$ = We(r$),
    Xr = (e, t) => new mn(e).setAlpha(t).toRgbString(),
    lo = (e, t) => new mn(e).lighten(t).toHexString(),
    o$ = (e) => {
      const t = $r(e, { theme: 'dark' });
      return { 1: t[0], 2: t[1], 3: t[2], 4: t[3], 5: t[6], 6: t[5], 7: t[4], 8: t[6], 9: t[5], 10: t[4] };
    },
    a$ = (e, t) => {
      const n = e || '#000',
        r = t || '#fff';
      return {
        colorBgBase: n,
        colorTextBase: r,
        colorText: Xr(r, 0.85),
        colorTextSecondary: Xr(r, 0.65),
        colorTextTertiary: Xr(r, 0.45),
        colorTextQuaternary: Xr(r, 0.25),
        colorFill: Xr(r, 0.18),
        colorFillSecondary: Xr(r, 0.12),
        colorFillTertiary: Xr(r, 0.08),
        colorFillQuaternary: Xr(r, 0.04),
        colorBgElevated: lo(n, 12),
        colorBgContainer: lo(n, 8),
        colorBgLayout: lo(n, 0),
        colorBgSpotlight: lo(n, 26),
        colorBorder: lo(n, 26),
        colorBorderSecondary: lo(n, 19),
      };
    },
    l$ = (e, t) => {
      const n = Object.keys(ks)
          .map((i) => {
            const o = $r(e[i], { theme: 'dark' });
            return new Array(10)
              .fill(1)
              .reduce((l, s, d) => ((l[`${i}-${d + 1}`] = o[d]), (l[`${i}${d + 1}`] = o[d]), l), {});
          })
          .reduce((i, o) => ((i = Object.assign(Object.assign({}, i), o)), i), {}),
        r = t ?? Ba(e);
      return Object.assign(
        Object.assign(Object.assign({}, r), n),
        zf(e, { generateColorPalettes: o$, generateNeutralColorPalettes: a$ }),
      );
    };
  function s$(e) {
    const { sizeUnit: t, sizeStep: n } = e,
      r = n - 2;
    return {
      sizeXXL: t * (r + 10),
      sizeXL: t * (r + 6),
      sizeLG: t * (r + 2),
      sizeMD: t * (r + 2),
      sizeMS: t * (r + 1),
      size: t * r,
      sizeSM: t * r,
      sizeXS: t * (r - 1),
      sizeXXS: t * (r - 1),
    };
  }
  const c$ = (e, t) => {
    const n = t ?? Ba(e),
      r = n.fontSizeSM,
      i = n.controlHeight - 4;
    return Object.assign(
      Object.assign(Object.assign(Object.assign(Object.assign({}, n), s$(t ?? e)), Lf(r)), { controlHeight: i }),
      jf(Object.assign(Object.assign({}, n), { controlHeight: i })),
    );
  };
  function u$() {
    const [e, t, n] = bi();
    return { theme: e, token: t, hashId: n };
  }
  const d$ = {
      defaultConfig: Va,
      defaultSeed: Va.token,
      useToken: u$,
      defaultAlgorithm: Ba,
      darkAlgorithm: l$,
      compactAlgorithm: c$,
    },
    Ch = 8;
  function Sh(e) {
    const t = Ch,
      { contentRadius: n, limitVerticalRadius: r } = e,
      i = n > 12 ? n + 2 : 12;
    return { dropdownArrowOffset: i, dropdownArrowOffsetVertical: r ? t : i };
  }
  function ml(e, t) {
    return e ? t : {};
  }
  function f$(e, t) {
    const { componentCls: n, sizePopupArrow: r, borderRadiusXS: i, borderRadiusOuter: o, boxShadowPopoverArrow: l } = e,
      {
        colorBg: s,
        contentRadius: d = e.borderRadiusLG,
        limitVerticalRadius: f,
        arrowDistance: p = 0,
        arrowPlacement: h = { left: !0, right: !0, top: !0, bottom: !0 },
      } = t,
      { dropdownArrowOffsetVertical: v, dropdownArrowOffset: x } = Sh({ contentRadius: d, limitVerticalRadius: f });
    return {
      [n]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {
                [`${n}-arrow`]: [
                  Object.assign(
                    Object.assign({ position: 'absolute', zIndex: 1, display: 'block' }, NC(r, i, o, s, l)),
                    { '&:before': { background: s } },
                  ),
                ],
              },
              ml(!!h.top, {
                [[
                  `&-placement-top ${n}-arrow`,
                  `&-placement-topLeft ${n}-arrow`,
                  `&-placement-topRight ${n}-arrow`,
                ].join(',')]: { bottom: p, transform: 'translateY(100%) rotate(180deg)' },
                [`&-placement-top ${n}-arrow`]: {
                  left: { _skip_check_: !0, value: '50%' },
                  transform: 'translateX(-50%) translateY(100%) rotate(180deg)',
                },
                [`&-placement-topLeft ${n}-arrow`]: { left: { _skip_check_: !0, value: x } },
                [`&-placement-topRight ${n}-arrow`]: { right: { _skip_check_: !0, value: x } },
              }),
            ),
            ml(!!h.bottom, {
              [[
                `&-placement-bottom ${n}-arrow`,
                `&-placement-bottomLeft ${n}-arrow`,
                `&-placement-bottomRight ${n}-arrow`,
              ].join(',')]: { top: p, transform: 'translateY(-100%)' },
              [`&-placement-bottom ${n}-arrow`]: {
                left: { _skip_check_: !0, value: '50%' },
                transform: 'translateX(-50%) translateY(-100%)',
              },
              [`&-placement-bottomLeft ${n}-arrow`]: { left: { _skip_check_: !0, value: x } },
              [`&-placement-bottomRight ${n}-arrow`]: { right: { _skip_check_: !0, value: x } },
            }),
          ),
          ml(!!h.left, {
            [[
              `&-placement-left ${n}-arrow`,
              `&-placement-leftTop ${n}-arrow`,
              `&-placement-leftBottom ${n}-arrow`,
            ].join(',')]: { right: { _skip_check_: !0, value: p }, transform: 'translateX(100%) rotate(90deg)' },
            [`&-placement-left ${n}-arrow`]: {
              top: { _skip_check_: !0, value: '50%' },
              transform: 'translateY(-50%) translateX(100%) rotate(90deg)',
            },
            [`&-placement-leftTop ${n}-arrow`]: { top: v },
            [`&-placement-leftBottom ${n}-arrow`]: { bottom: v },
          }),
        ),
        ml(!!h.right, {
          [[
            `&-placement-right ${n}-arrow`,
            `&-placement-rightTop ${n}-arrow`,
            `&-placement-rightBottom ${n}-arrow`,
          ].join(',')]: { left: { _skip_check_: !0, value: p }, transform: 'translateX(-100%) rotate(-90deg)' },
          [`&-placement-right ${n}-arrow`]: {
            top: { _skip_check_: !0, value: '50%' },
            transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)',
          },
          [`&-placement-rightTop ${n}-arrow`]: { top: v },
          [`&-placement-rightBottom ${n}-arrow`]: { bottom: v },
        }),
      ),
    };
  }
  function p$(e, t, n, r) {
    if (r === !1) return { adjustX: !1, adjustY: !1 };
    const i = r && typeof r == 'object' ? r : {},
      o = {};
    switch (e) {
      case 'top':
      case 'bottom':
        o.shiftX = t.dropdownArrowOffset * 2 + n;
        break;
      case 'left':
      case 'right':
        o.shiftY = t.dropdownArrowOffsetVertical * 2 + n;
        break;
    }
    const l = Object.assign(Object.assign({}, o), i);
    return l.shiftX || (l.adjustX = !0), l.shiftY || (l.adjustY = !0), l;
  }
  const xh = {
      left: { points: ['cr', 'cl'] },
      right: { points: ['cl', 'cr'] },
      top: { points: ['bc', 'tc'] },
      bottom: { points: ['tc', 'bc'] },
      topLeft: { points: ['bl', 'tl'] },
      leftTop: { points: ['tr', 'tl'] },
      topRight: { points: ['br', 'tr'] },
      rightTop: { points: ['tl', 'tr'] },
      bottomRight: { points: ['tr', 'br'] },
      rightBottom: { points: ['bl', 'br'] },
      bottomLeft: { points: ['tl', 'bl'] },
      leftBottom: { points: ['br', 'bl'] },
    },
    g$ = {
      topLeft: { points: ['bl', 'tc'] },
      leftTop: { points: ['tr', 'cl'] },
      topRight: { points: ['br', 'tc'] },
      rightTop: { points: ['tl', 'cr'] },
      bottomRight: { points: ['tr', 'bc'] },
      rightBottom: { points: ['bl', 'cr'] },
      bottomLeft: { points: ['tl', 'bc'] },
      leftBottom: { points: ['br', 'cl'] },
    },
    h$ = new Set([
      'topLeft',
      'topRight',
      'bottomLeft',
      'bottomRight',
      'leftTop',
      'leftBottom',
      'rightTop',
      'rightBottom',
    ]);
  function m$(e) {
    const { arrowWidth: t, autoAdjustOverflow: n, arrowPointAtCenter: r, offset: i, borderRadius: o } = e,
      l = t / 2,
      s = {};
    return (
      Object.keys(xh).forEach((d) => {
        const f = (r && g$[d]) || xh[d],
          p = Object.assign(Object.assign({}, f), { offset: [0, 0] });
        switch (((s[d] = p), h$.has(d) && (p.autoArrow = !1), d)) {
          case 'top':
          case 'topLeft':
          case 'topRight':
            p.offset[1] = -l - i;
            break;
          case 'bottom':
          case 'bottomLeft':
          case 'bottomRight':
            p.offset[1] = l + i;
            break;
          case 'left':
          case 'leftTop':
          case 'leftBottom':
            p.offset[0] = -l - i;
            break;
          case 'right':
          case 'rightTop':
          case 'rightBottom':
            p.offset[0] = l + i;
            break;
        }
        const h = Sh({ contentRadius: o, limitVerticalRadius: !0 });
        if (r)
          switch (d) {
            case 'topLeft':
            case 'bottomLeft':
              p.offset[0] = -h.dropdownArrowOffset - l;
              break;
            case 'topRight':
            case 'bottomRight':
              p.offset[0] = h.dropdownArrowOffset + l;
              break;
            case 'leftTop':
            case 'rightTop':
              p.offset[1] = -h.dropdownArrowOffset - l;
              break;
            case 'leftBottom':
            case 'rightBottom':
              p.offset[1] = h.dropdownArrowOffset + l;
              break;
          }
        p.overflow = p$(d, h, t, n);
      }),
      s
    );
  }
  const v$ = (e) => {
      const {
        componentCls: t,
        tooltipMaxWidth: n,
        tooltipColor: r,
        tooltipBg: i,
        tooltipBorderRadius: o,
        zIndexPopup: l,
        controlHeight: s,
        boxShadowSecondary: d,
        paddingSM: f,
        paddingXS: p,
        tooltipRadiusOuter: h,
      } = e;
      return [
        {
          [t]: Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, ir(e)), {
                position: 'absolute',
                zIndex: l,
                display: 'block',
                width: 'max-content',
                maxWidth: n,
                visibility: 'visible',
                '&-hidden': { display: 'none' },
                '--antd-arrow-background-color': i,
                [`${t}-inner`]: {
                  minWidth: s,
                  minHeight: s,
                  padding: `${f / 2}px ${p}px`,
                  color: r,
                  textAlign: 'start',
                  textDecoration: 'none',
                  wordWrap: 'break-word',
                  backgroundColor: i,
                  borderRadius: o,
                  boxShadow: d,
                },
                [[
                  '&-placement-left',
                  '&-placement-leftTop',
                  '&-placement-leftBottom',
                  '&-placement-right',
                  '&-placement-rightTop',
                  '&-placement-rightBottom',
                ].join(',')]: { [`${t}-inner`]: { borderRadius: Math.min(o, Ch) } },
                [`${t}-content`]: { position: 'relative' },
              }),
              PC(e, (v, x) => {
                let { darkColor: y } = x;
                return {
                  [`&${t}-${v}`]: {
                    [`${t}-inner`]: { backgroundColor: y },
                    [`${t}-arrow`]: { '--antd-arrow-background-color': y },
                  },
                };
              }),
            ),
            { '&-rtl': { direction: 'rtl' } },
          ),
        },
        f$(jt(e, { borderRadiusOuter: h }), {
          colorBg: 'var(--antd-arrow-background-color)',
          contentRadius: o,
          limitVerticalRadius: !0,
        }),
        { [`${t}-pure`]: { position: 'relative', maxWidth: 'none', margin: e.sizePopupArrow } },
      ];
    },
    wh = (e, t) =>
      On(
        'Tooltip',
        (r) => {
          if (t === !1) return [];
          const { borderRadius: i, colorTextLightSolid: o, colorBgDefault: l, borderRadiusOuter: s } = r,
            d = jt(r, {
              tooltipMaxWidth: 250,
              tooltipColor: o,
              tooltipBorderRadius: i,
              tooltipBg: l,
              tooltipRadiusOuter: s > 4 ? 4 : s,
            });
          return [v$(d), vg(r, 'zoom-big-fast')];
        },
        (r) => {
          let { zIndexPopupBase: i, colorBgSpotlight: o } = r;
          return { zIndexPopup: i + 70, colorBgDefault: o };
        },
      )(e),
    b$ = Aa.map((e) => `${e}-inverse`);
  function y$(e) {
    return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0)
      ? [].concat(ze(b$), ze(Aa)).includes(e)
      : Aa.includes(e);
  }
  function Eh(e, t) {
    const n = y$(t),
      r = he({ [`${e}-${t}`]: t && n }),
      i = {},
      o = {};
    return (
      t && !n && ((i.background = t), (o['--antd-arrow-background-color'] = t)),
      { className: r, overlayStyle: i, arrowStyle: o }
    );
  }
  function C$(e) {
    const { prefixCls: t, className: n, placement: r = 'top', title: i, color: o, overlayInnerStyle: l } = e,
      { getPrefixCls: s } = je(xt),
      d = s('tooltip', t),
      [f, p] = wh(d, !0),
      h = Eh(d, o),
      v = Object.assign(Object.assign({}, l), h.overlayStyle),
      x = h.arrowStyle;
    return f(
      b.createElement(
        'div',
        { className: he(p, d, `${d}-pure`, `${d}-placement-${r}`, n, h.className), style: x },
        b.createElement('div', { className: `${d}-arrow` }),
        b.createElement(yh, Object.assign({}, e, { className: p, prefixCls: d, overlayInnerStyle: v }), i),
      ),
    );
  }
  var S$ =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const { useToken: x$ } = d$,
    w$ = (e, t) => {
      const n = {},
        r = Object.assign({}, e);
      return (
        t.forEach((i) => {
          e && i in e && ((n[i] = e[i]), delete r[i]);
        }),
        { picked: n, omitted: r }
      );
    };
  function E$(e, t) {
    const n = e.type;
    if (
      ((n.__ANT_BUTTON === !0 || e.type === 'button') && e.props.disabled) ||
      (n.__ANT_SWITCH === !0 && (e.props.disabled || e.props.loading)) ||
      (n.__ANT_RADIO === !0 && e.props.disabled)
    ) {
      const { picked: r, omitted: i } = w$(e.props.style, [
          'position',
          'left',
          'right',
          'top',
          'bottom',
          'float',
          'display',
          'zIndex',
        ]),
        o = Object.assign(Object.assign({ display: 'inline-block' }, r), {
          cursor: 'not-allowed',
          width: e.props.block ? '100%' : void 0,
        }),
        l = Object.assign(Object.assign({}, i), { pointerEvents: 'none' }),
        s = Gr(e, { style: l, className: null });
      return b.createElement(
        'span',
        { style: o, className: he(e.props.className, `${t}-disabled-compatible-wrapper`) },
        s,
      );
    }
    return e;
  }
  const $h = We((e, t) => {
    var n, r;
    const {
        prefixCls: i,
        openClassName: o,
        getTooltipContainer: l,
        overlayClassName: s,
        color: d,
        overlayInnerStyle: f,
        children: p,
        afterOpenChange: h,
        afterVisibleChange: v,
        destroyTooltipOnHide: x,
        arrow: y = !0,
      } = e,
      C = !!y,
      { token: O } = x$(),
      { getPopupContainer: E, getPrefixCls: _, direction: P } = je(xt),
      N = ie(null),
      j = () => {
        var ne;
        (ne = N.current) === null || ne === void 0 || ne.forceAlign();
      };
    on(t, () => ({
      forceAlign: j,
      forcePopupAlign: () => {
        j();
      },
    }));
    const [u, $] = Pr(!1, {
        value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
        defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible,
      }),
      I = () => {
        const { title: ne, overlay: Te } = e;
        return !ne && !Te && ne !== 0;
      },
      M = (ne) => {
        var Te, He;
        $(I() ? !1 : ne),
          I() ||
            ((Te = e.onOpenChange) === null || Te === void 0 || Te.call(e, ne),
            (He = e.onVisibleChange) === null || He === void 0 || He.call(e, ne));
      },
      D = () => {
        var ne, Te;
        const { builtinPlacements: He, arrowPointAtCenter: oe = !1, autoAdjustOverflow: ue = !0 } = e;
        let de = oe;
        return (
          typeof y == 'object' &&
            (de =
              (Te = (ne = y.pointAtCenter) !== null && ne !== void 0 ? ne : y.arrowPointAtCenter) !== null &&
              Te !== void 0
                ? Te
                : oe),
          He ||
            m$({
              arrowPointAtCenter: de,
              autoAdjustOverflow: ue,
              arrowWidth: C ? O.sizePopupArrow : 0,
              borderRadius: O.borderRadius,
              offset: O.marginXXS,
            })
        );
      },
      B = (ne, Te) => {
        const He = D(),
          oe = Object.keys(He).find((ue) => {
            var de, Be;
            return (
              He[ue].points[0] === ((de = Te.points) === null || de === void 0 ? void 0 : de[0]) &&
              He[ue].points[1] === ((Be = Te.points) === null || Be === void 0 ? void 0 : Be[1])
            );
          });
        if (oe) {
          const ue = ne.getBoundingClientRect(),
            de = { top: '50%', left: '50%' };
          /top|Bottom/.test(oe)
            ? (de.top = `${ue.height - Te.offset[1]}px`)
            : /Top|bottom/.test(oe) && (de.top = `${-Te.offset[1]}px`),
            /left|Right/.test(oe)
              ? (de.left = `${ue.width - Te.offset[0]}px`)
              : /right|Left/.test(oe) && (de.left = `${-Te.offset[0]}px`),
            (ne.style.transformOrigin = `${de.left} ${de.top}`);
        }
      },
      F = () => {
        const { title: ne, overlay: Te } = e;
        return ne === 0 ? ne : Te || ne || '';
      },
      {
        getPopupContainer: A,
        placement: z = 'top',
        mouseEnterDelay: V = 0.1,
        mouseLeaveDelay: U = 0.1,
        overlayStyle: X,
        rootClassName: Z,
      } = e,
      ee = S$(e, [
        'getPopupContainer',
        'placement',
        'mouseEnterDelay',
        'mouseLeaveDelay',
        'overlayStyle',
        'rootClassName',
      ]),
      le = _('tooltip', i),
      ce = _(),
      xe = e['data-popover-inject'];
    let Q = u;
    !('open' in e) && !('visible' in e) && I() && (Q = !1);
    const Ce = E$(No(p) && !xp(p) ? p : b.createElement('span', null, p), le),
      Se = Ce.props,
      me =
        !Se.className || typeof Se.className == 'string' ? he(Se.className, { [o || `${le}-open`]: !0 }) : Se.className,
      [se, $e] = wh(le, !xe),
      Ee = Eh(le, d),
      Me = Object.assign(Object.assign({}, f), Ee.overlayStyle),
      Le = Ee.arrowStyle,
      Re = he(s, { [`${le}-rtl`]: P === 'rtl' }, Ee.className, Z, $e);
    return se(
      b.createElement(
        i$,
        Object.assign({}, ee, {
          showArrow: C,
          placement: z,
          mouseEnterDelay: V,
          mouseLeaveDelay: U,
          prefixCls: le,
          overlayClassName: Re,
          overlayStyle: Object.assign(Object.assign({}, Le), X),
          getTooltipContainer: A || l || E,
          ref: N,
          builtinPlacements: D(),
          overlay: F(),
          visible: Q,
          onVisibleChange: M,
          afterVisibleChange: h ?? v,
          onPopupAlign: B,
          overlayInnerStyle: Me,
          arrowContent: b.createElement('span', { className: `${le}-arrow-content` }),
          motion: { motionName: qr(ce, 'zoom-big-fast', e.transitionName), motionDeadline: 1e3 },
          destroyTooltipOnHide: !!x,
        }),
        Q ? Gr(Ce, { className: me }) : Ce,
      ),
    );
  });
  $h._InternalPanelDoNotUseOrYouWillBeFired = C$;
  const vl = $h;
  var $$ = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
          },
        },
      ],
    },
    name: 'right',
    theme: 'outlined',
  };
  const O$ = $$;
  var Oh = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: O$ }));
  };
  Oh.displayName = 'RightOutlined';
  const _$ = We(Oh);
  var T$ = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
          },
        },
      ],
    },
    name: 'left',
    theme: 'outlined',
  };
  const I$ = T$;
  var _h = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: I$ }));
  };
  _h.displayName = 'LeftOutlined';
  const P$ = We(_h),
    Th = () => {
      const [e, t] = we(!1);
      return (
        Fe(() => {
          t(fx());
        }, []),
        e
      );
    };
  function N$(e) {
    let { className: t, direction: n, index: r, marginDirection: i, children: o, split: l, wrap: s } = e;
    const { horizontalSize: d, verticalSize: f, latestIndex: p, supportFlexGap: h } = je(Ih);
    let v = {};
    return (
      h ||
        (n === 'vertical'
          ? r < p && (v = { marginBottom: d / (l ? 2 : 1) })
          : (v = Object.assign(Object.assign({}, r < p && { [i]: d / (l ? 2 : 1) }), s && { paddingBottom: f }))),
      o == null
        ? null
        : b.createElement(
            b.Fragment,
            null,
            b.createElement('div', { className: t, style: v }, o),
            r < p && l && b.createElement('span', { className: `${t}-split`, style: v }, l),
          )
    );
  }
  var R$ =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const Ih = b.createContext({ latestIndex: 0, horizontalSize: 0, verticalSize: 0, supportFlexGap: !1 }),
    M$ = { small: 8, middle: 16, large: 24 };
  function A$(e) {
    return typeof e == 'string' ? M$[e] : e || 0;
  }
  const Ph = (e) => {
    const { getPrefixCls: t, space: n, direction: r } = je(xt),
      {
        size: i = (n == null ? void 0 : n.size) || 'small',
        align: o,
        className: l,
        rootClassName: s,
        children: d,
        direction: f = 'horizontal',
        prefixCls: p,
        split: h,
        style: v,
        wrap: x = !1,
      } = e,
      y = R$(e, [
        'size',
        'align',
        'className',
        'rootClassName',
        'children',
        'direction',
        'prefixCls',
        'split',
        'style',
        'wrap',
      ]),
      C = Th(),
      [O, E] = De(() => (Array.isArray(i) ? i : [i, i]).map((z) => A$(z)), [i]),
      _ = wr(d, { keepEmpty: !0 }),
      P = o === void 0 && f === 'horizontal' ? 'center' : o,
      N = t('space', p),
      [j, u] = Rp(N),
      $ = he(N, u, `${N}-${f}`, { [`${N}-rtl`]: r === 'rtl', [`${N}-align-${P}`]: P }, l, s),
      I = `${N}-item`,
      M = r === 'rtl' ? 'marginLeft' : 'marginRight';
    let D = 0;
    const B = _.map((z, V) => {
        z != null && (D = V);
        const U = (z && z.key) || `${I}-${V}`;
        return b.createElement(
          N$,
          { className: I, key: U, direction: f, index: V, marginDirection: M, split: h, wrap: x },
          z,
        );
      }),
      F = De(() => ({ horizontalSize: O, verticalSize: E, latestIndex: D, supportFlexGap: C }), [O, E, D, C]);
    if (_.length === 0) return null;
    const A = {};
    return (
      x && ((A.flexWrap = 'wrap'), C || (A.marginBottom = -E)),
      C && ((A.columnGap = O), (A.rowGap = E)),
      j(
        b.createElement(
          'div',
          Object.assign({ className: $, style: Object.assign(Object.assign({}, A), v) }, y),
          b.createElement(Ih.Provider, { value: F }, B),
        ),
      )
    );
  };
  Ph.Compact = uS;
  const Nh = Ph,
    D$ = (e) => ({
      '&::-moz-placeholder': { opacity: 1 },
      '&::placeholder': { color: e, userSelect: 'none' },
      '&:placeholder-shown': { textOverflow: 'ellipsis' },
    }),
    Hc = (e) => ({ borderColor: e.inputBorderHoverColor, borderInlineEndWidth: e.lineWidth }),
    Bc = (e) => ({
      borderColor: e.inputBorderHoverColor,
      boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
      borderInlineEndWidth: e.lineWidth,
      outline: 0,
    }),
    Rh = (e) => ({
      color: e.colorTextDisabled,
      backgroundColor: e.colorBgContainerDisabled,
      borderColor: e.colorBorder,
      boxShadow: 'none',
      cursor: 'not-allowed',
      opacity: 1,
      '&:hover': Object.assign({}, Hc(jt(e, { inputBorderHoverColor: e.colorBorder }))),
    }),
    Mh = (e) => {
      const {
        inputPaddingVerticalLG: t,
        fontSizeLG: n,
        lineHeightLG: r,
        borderRadiusLG: i,
        inputPaddingHorizontalLG: o,
      } = e;
      return { padding: `${t}px ${o}px`, fontSize: n, lineHeight: r, borderRadius: i };
    },
    kc = (e) => ({
      padding: `${e.inputPaddingVerticalSM}px ${e.controlPaddingHorizontalSM - 1}px`,
      borderRadius: e.borderRadiusSM,
    }),
    Ah = (e, t) => {
      const {
        componentCls: n,
        colorError: r,
        colorWarning: i,
        colorErrorOutline: o,
        colorWarningOutline: l,
        colorErrorBorderHover: s,
        colorWarningBorderHover: d,
      } = e;
      return {
        [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
          borderColor: r,
          '&:hover': { borderColor: s },
          '&:focus, &-focused': Object.assign(
            {},
            Bc(jt(e, { inputBorderActiveColor: r, inputBorderHoverColor: r, controlOutline: o })),
          ),
          [`${n}-prefix, ${n}-suffix`]: { color: r },
        },
        [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
          borderColor: i,
          '&:hover': { borderColor: d },
          '&:focus, &-focused': Object.assign(
            {},
            Bc(jt(e, { inputBorderActiveColor: i, inputBorderHoverColor: i, controlOutline: l })),
          ),
          [`${n}-prefix, ${n}-suffix`]: { color: i },
        },
      };
    },
    Vc = (e) =>
      Object.assign(
        Object.assign(
          {
            position: 'relative',
            display: 'inline-block',
            width: '100%',
            minWidth: 0,
            padding: `${e.inputPaddingVertical}px ${e.inputPaddingHorizontal}px`,
            color: e.colorText,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            backgroundColor: e.colorBgContainer,
            backgroundImage: 'none',
            borderWidth: e.lineWidth,
            borderStyle: e.lineType,
            borderColor: e.colorBorder,
            borderRadius: e.borderRadius,
            transition: `all ${e.motionDurationMid}`,
          },
          D$(e.colorTextPlaceholder),
        ),
        {
          '&:hover': Object.assign({}, Hc(e)),
          '&:focus, &-focused': Object.assign({}, Bc(e)),
          '&-disabled, &[disabled]': Object.assign({}, Rh(e)),
          '&-borderless': {
            '&, &:hover, &:focus, &-focused, &-disabled, &[disabled]': {
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
            },
          },
          'textarea&': {
            maxWidth: '100%',
            height: 'auto',
            minHeight: e.controlHeight,
            lineHeight: e.lineHeight,
            verticalAlign: 'bottom',
            transition: `all ${e.motionDurationSlow}, height 0s`,
            resize: 'vertical',
          },
          '&-lg': Object.assign({}, Mh(e)),
          '&-sm': Object.assign({}, kc(e)),
          '&-rtl': { direction: 'rtl' },
          '&-textarea-rtl': { direction: 'rtl' },
        },
      ),
    F$ = (e) => {
      const { componentCls: t, antCls: n } = e;
      return {
        position: 'relative',
        display: 'table',
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        ["&[class*='col-']"]: { paddingInlineEnd: e.paddingXS, '&:last-child': { paddingInlineEnd: 0 } },
        [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Mh(e)),
        [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, kc(e)),
        [`&-lg ${n}-select-single ${n}-select-selector`]: { height: e.controlHeightLG },
        [`&-sm ${n}-select-single ${n}-select-selector`]: { height: e.controlHeightSM },
        [`> ${t}`]: { display: 'table-cell', '&:not(:first-child):not(:last-child)': { borderRadius: 0 } },
        [`${t}-group`]: {
          ['&-addon, &-wrap']: {
            display: 'table-cell',
            width: 1,
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            '&:not(:first-child):not(:last-child)': { borderRadius: 0 },
          },
          '&-wrap > *': { display: 'block !important' },
          '&-addon': {
            position: 'relative',
            padding: `0 ${e.inputPaddingHorizontal}px`,
            color: e.colorText,
            fontWeight: 'normal',
            fontSize: e.fontSize,
            textAlign: 'center',
            backgroundColor: e.colorFillAlter,
            border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
            borderRadius: e.borderRadius,
            transition: `all ${e.motionDurationSlow}`,
            lineHeight: 1,
            [`${n}-select`]: {
              margin: `-${e.inputPaddingVertical + 1}px -${e.inputPaddingHorizontal}px`,
              [`&${n}-select-single:not(${n}-select-customize-input)`]: {
                [`${n}-select-selector`]: {
                  backgroundColor: 'inherit',
                  border: `${e.lineWidth}px ${e.lineType} transparent`,
                  boxShadow: 'none',
                },
              },
              '&-open, &-focused': { [`${n}-select-selector`]: { color: e.colorPrimary } },
            },
            [`${n}-cascader-picker`]: {
              margin: `-9px -${e.inputPaddingHorizontal}px`,
              backgroundColor: 'transparent',
              [`${n}-cascader-input`]: { textAlign: 'start', border: 0, boxShadow: 'none' },
            },
          },
          '&-addon:first-child': { borderInlineEnd: 0 },
          '&-addon:last-child': { borderInlineStart: 0 },
        },
        [`${t}`]: {
          width: '100%',
          marginBottom: 0,
          textAlign: 'inherit',
          '&:focus': { zIndex: 1, borderInlineEndWidth: 1 },
          '&:hover': { zIndex: 1, borderInlineEndWidth: 1, [`${t}-search-with-button &`]: { zIndex: 0 } },
        },
        [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
          [`${n}-select ${n}-select-selector`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
        },
        [`> ${t}-affix-wrapper`]: {
          [`&:not(:first-child) ${t}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
          [`&:not(:last-child) ${t}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
        },
        [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
          [`${n}-select ${n}-select-selector`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
        },
        [`${t}-affix-wrapper`]: {
          '&:not(:last-child)': {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            [`${t}-search &`]: { borderStartStartRadius: e.borderRadius, borderEndStartRadius: e.borderRadius },
          },
          [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
          },
        },
        [`&${t}-group-compact`]: Object.assign(Object.assign({ display: 'block' }, Bf()), {
          [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
            '&:not(:first-child):not(:last-child)': {
              borderInlineEndWidth: e.lineWidth,
              '&:hover': { zIndex: 1 },
              '&:focus': { zIndex: 1 },
            },
          },
          '& > *': { display: 'inline-block', float: 'none', verticalAlign: 'top', borderRadius: 0 },
          [`& > ${t}-affix-wrapper`]: { display: 'inline-flex' },
          [`& > ${n}-picker-range`]: { display: 'inline-flex' },
          '& > *:not(:last-child)': { marginInlineEnd: -e.lineWidth, borderInlineEndWidth: e.lineWidth },
          [`${t}`]: { float: 'none' },
          [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
            borderInlineEndWidth: e.lineWidth,
            borderRadius: 0,
            '&:hover': { zIndex: 1 },
            '&:focus': { zIndex: 1 },
          },
          [`& > ${n}-select-focused`]: { zIndex: 1 },
          [`& > ${n}-select > ${n}-select-arrow`]: { zIndex: 1 },
          [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderEndStartRadius: e.borderRadius,
          },
          [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
            borderInlineEndWidth: e.lineWidth,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
          },
          [`& > ${n}-select-auto-complete ${t}`]: { verticalAlign: 'top' },
          [`${t}-group-wrapper + ${t}-group-wrapper`]: {
            marginInlineStart: -e.lineWidth,
            [`${t}-affix-wrapper`]: { borderRadius: 0 },
          },
          [`${t}-group-wrapper:not(:last-child)`]: {
            [`&${t}-search > ${t}-group`]: {
              [`& > ${t}-group-addon > ${t}-search-button`]: { borderRadius: 0 },
              [`& > ${t}`]: {
                borderStartStartRadius: e.borderRadius,
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
                borderEndStartRadius: e.borderRadius,
              },
            },
          },
        }),
      };
    },
    j$ = (e) => {
      const { componentCls: t, controlHeightSM: n, lineWidth: r } = e,
        i = 16,
        o = (n - r * 2 - i) / 2;
      return {
        [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, ir(e)), Vc(e)), Ah(e, t)), {
          '&[type="color"]': {
            height: e.controlHeight,
            [`&${t}-lg`]: { height: e.controlHeightLG },
            [`&${t}-sm`]: { height: n, paddingTop: o, paddingBottom: o },
          },
          '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
            '-webkit-appearance': 'none',
          },
        }),
      };
    },
    z$ = (e) => {
      const { componentCls: t } = e;
      return {
        [`${t}-clear-icon`]: {
          margin: 0,
          color: e.colorTextQuaternary,
          fontSize: e.fontSizeIcon,
          verticalAlign: -1,
          cursor: 'pointer',
          transition: `color ${e.motionDurationSlow}`,
          '&:hover': { color: e.colorTextTertiary },
          '&:active': { color: e.colorText },
          '&-hidden': { visibility: 'hidden' },
          '&-has-suffix': { margin: `0 ${e.inputAffixPadding}px` },
        },
      };
    },
    L$ = (e) => {
      const {
        componentCls: t,
        inputAffixPadding: n,
        colorTextDescription: r,
        motionDurationSlow: i,
        colorIcon: o,
        colorIconHover: l,
        iconCls: s,
      } = e;
      return {
        [`${t}-affix-wrapper`]: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, Vc(e)), {
                display: 'inline-flex',
                [`&:not(${t}-affix-wrapper-disabled):hover`]: Object.assign(Object.assign({}, Hc(e)), {
                  zIndex: 1,
                  [`${t}-search-with-button &`]: { zIndex: 0 },
                }),
                '&-focused, &:focus': { zIndex: 1 },
                '&-disabled': { [`${t}[disabled]`]: { background: 'transparent' } },
                [`> input${t}`]: {
                  padding: 0,
                  fontSize: 'inherit',
                  border: 'none',
                  borderRadius: 0,
                  outline: 'none',
                  '&:focus': { boxShadow: 'none !important' },
                },
                '&::before': { width: 0, visibility: 'hidden', content: '"\\a0"' },
                [`${t}`]: {
                  '&-prefix, &-suffix': {
                    display: 'flex',
                    flex: 'none',
                    alignItems: 'center',
                    '> *:not(:last-child)': { marginInlineEnd: e.paddingXS },
                  },
                  '&-show-count-suffix': { color: r },
                  '&-show-count-has-suffix': { marginInlineEnd: e.paddingXXS },
                  '&-prefix': { marginInlineEnd: n },
                  '&-suffix': { marginInlineStart: n },
                },
              }),
              z$(e),
            ),
            {
              [`${s}${t}-password-icon`]: {
                color: o,
                cursor: 'pointer',
                transition: `all ${i}`,
                '&:hover': { color: l },
              },
            },
          ),
          Ah(e, `${t}-affix-wrapper`),
        ),
      };
    },
    H$ = (e) => {
      const { componentCls: t, colorError: n, colorWarning: r, borderRadiusLG: i, borderRadiusSM: o } = e;
      return {
        [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, ir(e)), F$(e)), {
          '&-rtl': { direction: 'rtl' },
          '&-wrapper': {
            display: 'inline-block',
            width: '100%',
            textAlign: 'start',
            verticalAlign: 'top',
            '&-rtl': { direction: 'rtl' },
            '&-lg': { [`${t}-group-addon`]: { borderRadius: i } },
            '&-sm': { [`${t}-group-addon`]: { borderRadius: o } },
            '&-status-error': { [`${t}-group-addon`]: { color: n, borderColor: n } },
            '&-status-warning': { [`${t}-group-addon`]: { color: r, borderColor: r } },
            '&-disabled': { [`${t}-group-addon`]: Object.assign({}, Rh(e)) },
          },
        }),
      };
    },
    B$ = (e) => {
      const { componentCls: t, antCls: n } = e,
        r = `${t}-search`;
      return {
        [r]: {
          [`${t}`]: {
            '&:hover, &:focus': {
              borderColor: e.colorPrimaryHover,
              [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: { borderInlineStartColor: e.colorPrimaryHover },
            },
          },
          [`${t}-affix-wrapper`]: { borderRadius: 0 },
          [`${t}-lg`]: { lineHeight: e.lineHeightLG - 2e-4 },
          [`> ${t}-group`]: {
            [`> ${t}-group-addon:last-child`]: {
              insetInlineStart: -1,
              padding: 0,
              border: 0,
              [`${r}-button`]: {
                paddingTop: 0,
                paddingBottom: 0,
                borderStartStartRadius: 0,
                borderStartEndRadius: e.borderRadius,
                borderEndEndRadius: e.borderRadius,
                borderEndStartRadius: 0,
              },
              [`${r}-button:not(${n}-btn-primary)`]: {
                color: e.colorTextDescription,
                '&:hover': { color: e.colorPrimaryHover },
                '&:active': { color: e.colorPrimaryActive },
                [`&${n}-btn-loading::before`]: {
                  insetInlineStart: 0,
                  insetInlineEnd: 0,
                  insetBlockStart: 0,
                  insetBlockEnd: 0,
                },
              },
            },
          },
          [`${r}-button`]: { height: e.controlHeight, '&:hover, &:focus': { zIndex: 1 } },
          [`&-large ${r}-button`]: { height: e.controlHeightLG },
          [`&-small ${r}-button`]: { height: e.controlHeightSM },
          '&-rtl': { direction: 'rtl' },
          [`&${t}-compact-item`]: {
            [`&:not(${t}-compact-last-item)`]: {
              [`${t}-group-addon`]: { [`${t}-search-button`]: { marginInlineEnd: -e.lineWidth, borderRadius: 0 } },
            },
            [`&:not(${t}-compact-first-item)`]: { [`${t},${t}-affix-wrapper`]: { borderRadius: 0 } },
            [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: { '&:hover,&:focus,&:active': { zIndex: 2 } },
            [`> ${t}-affix-wrapper-focused`]: { zIndex: 2 },
          },
        },
      };
    };
  function Wc(e) {
    return jt(e, {
      inputAffixPadding: e.paddingXXS,
      inputPaddingVertical: Math.max(
        Math.round(((e.controlHeight - e.fontSize * e.lineHeight) / 2) * 10) / 10 - e.lineWidth,
        3,
      ),
      inputPaddingVerticalLG:
        Math.ceil(((e.controlHeightLG - e.fontSizeLG * e.lineHeightLG) / 2) * 10) / 10 - e.lineWidth,
      inputPaddingVerticalSM: Math.max(
        Math.round(((e.controlHeightSM - e.fontSize * e.lineHeight) / 2) * 10) / 10 - e.lineWidth,
        0,
      ),
      inputPaddingHorizontal: e.paddingSM - e.lineWidth,
      inputPaddingHorizontalSM: e.paddingXS - e.lineWidth,
      inputPaddingHorizontalLG: e.controlPaddingHorizontal - e.lineWidth,
      inputBorderHoverColor: e.colorPrimaryHover,
      inputBorderActiveColor: e.colorPrimaryHover,
    });
  }
  const k$ = (e) => {
      const { componentCls: t, paddingLG: n } = e,
        r = `${t}-textarea`;
      return {
        [r]: {
          position: 'relative',
          '&-show-count': {
            [`> ${t}`]: { height: '100%' },
            [`${t}-data-count`]: {
              color: e.colorTextDescription,
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              float: 'right',
              marginBottom: -e.fontSize * e.lineHeight,
            },
            '&-rtl': { [`${t}-data-count`]: { float: 'left' } },
          },
          [`&-affix-wrapper${r}-has-feedback`]: { [`${t}`]: { paddingInlineEnd: n } },
          [`&-affix-wrapper${t}-affix-wrapper`]: {
            padding: 0,
            [`> textarea${t}`]: {
              fontSize: 'inherit',
              border: 'none',
              outline: 'none',
              '&:focus': { boxShadow: 'none !important' },
            },
            [`${t}-suffix`]: {
              margin: 0,
              '> *:not(:last-child)': { marginInline: 0 },
              [`${t}-clear-icon`]: { position: 'absolute', insetInlineEnd: e.paddingXS, insetBlockStart: e.paddingXS },
              [`${r}-suffix`]: {
                position: 'absolute',
                top: 0,
                insetInlineEnd: e.inputPaddingHorizontal,
                bottom: 0,
                zIndex: 1,
                display: 'inline-flex',
                alignItems: 'center',
                margin: 'auto',
                pointerEvents: 'none',
              },
            },
          },
        },
      };
    },
    V$ = On('Input', (e) => {
      const t = Wc(e);
      return [j$(t), k$(t), L$(t), H$(t), B$(t), bc(t)];
    });
  function W$(e, t, n) {
    var r = n || {},
      i = r.noTrailing,
      o = i === void 0 ? !1 : i,
      l = r.noLeading,
      s = l === void 0 ? !1 : l,
      d = r.debounceMode,
      f = d === void 0 ? void 0 : d,
      p,
      h = !1,
      v = 0;
    function x() {
      p && clearTimeout(p);
    }
    function y(O) {
      var E = O || {},
        _ = E.upcomingOnly,
        P = _ === void 0 ? !1 : _;
      x(), (h = !P);
    }
    function C() {
      for (var O = arguments.length, E = new Array(O), _ = 0; _ < O; _++) E[_] = arguments[_];
      var P = this,
        N = Date.now() - v;
      if (h) return;
      function j() {
        (v = Date.now()), t.apply(P, E);
      }
      function u() {
        p = void 0;
      }
      !s && f && !p && j(),
        x(),
        f === void 0 && N > e
          ? s
            ? ((v = Date.now()), o || (p = setTimeout(f ? u : j, e)))
            : j()
          : o !== !0 && (p = setTimeout(f ? u : j, f === void 0 ? e - N : e));
    }
    return (C.cancel = y), C;
  }
  function U$(e, t, n) {
    var r = n || {},
      i = r.atBegin,
      o = i === void 0 ? !1 : i;
    return W$(e, t, { debounceMode: o !== !1 });
  }
  const Dh = b.createContext({}),
    G$ = (e) => {
      const { componentCls: t } = e;
      return {
        [t]: {
          display: 'flex',
          flexFlow: 'row wrap',
          minWidth: 0,
          '&::before, &::after': { display: 'flex' },
          '&-no-wrap': { flexWrap: 'nowrap' },
          '&-start': { justifyContent: 'flex-start' },
          '&-center': { justifyContent: 'center' },
          '&-end': { justifyContent: 'flex-end' },
          '&-space-between': { justifyContent: 'space-between' },
          '&-space-around ': { justifyContent: 'space-around' },
          '&-top': { alignItems: 'flex-start' },
          '&-middle': { alignItems: 'center' },
          '&-bottom': { alignItems: 'flex-end' },
        },
      };
    },
    q$ = (e) => {
      const { componentCls: t } = e;
      return { [t]: { position: 'relative', maxWidth: '100%', minHeight: 1 } };
    },
    K$ = (e, t) => {
      const { componentCls: n, gridColumns: r } = e,
        i = {};
      for (let o = r; o >= 0; o--)
        o === 0
          ? ((i[`${n}${t}-${o}`] = { display: 'none' }),
            (i[`${n}-push-${o}`] = { insetInlineStart: 'auto' }),
            (i[`${n}-pull-${o}`] = { insetInlineEnd: 'auto' }),
            (i[`${n}${t}-push-${o}`] = { insetInlineStart: 'auto' }),
            (i[`${n}${t}-pull-${o}`] = { insetInlineEnd: 'auto' }),
            (i[`${n}${t}-offset-${o}`] = { marginInlineEnd: 0 }),
            (i[`${n}${t}-order-${o}`] = { order: 0 }))
          : ((i[`${n}${t}-${o}`] = { display: 'block', flex: `0 0 ${(o / r) * 100}%`, maxWidth: `${(o / r) * 100}%` }),
            (i[`${n}${t}-push-${o}`] = { insetInlineStart: `${(o / r) * 100}%` }),
            (i[`${n}${t}-pull-${o}`] = { insetInlineEnd: `${(o / r) * 100}%` }),
            (i[`${n}${t}-offset-${o}`] = { marginInlineStart: `${(o / r) * 100}%` }),
            (i[`${n}${t}-order-${o}`] = { order: o }));
      return i;
    },
    Uc = (e, t) => K$(e, t),
    X$ = (e, t, n) => ({ [`@media (min-width: ${t}px)`]: Object.assign({}, Uc(e, n)) }),
    Y$ = On('Grid', (e) => [G$(e)]),
    Q$ = On('Grid', (e) => {
      const t = jt(e, { gridColumns: 24 }),
        n = {
          '-sm': t.screenSMMin,
          '-md': t.screenMDMin,
          '-lg': t.screenLGMin,
          '-xl': t.screenXLMin,
          '-xxl': t.screenXXLMin,
        };
      return [
        q$(t),
        Uc(t, ''),
        Uc(t, '-xs'),
        Object.keys(n)
          .map((r) => X$(t, n[r], r))
          .reduce((r, i) => Object.assign(Object.assign({}, r), i), {}),
      ];
    });
  var J$ =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  function Z$(e) {
    return typeof e == 'number' ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
  }
  const eO = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    tO = We((e, t) => {
      const { getPrefixCls: n, direction: r } = je(xt),
        { gutter: i, wrap: o, supportFlexGap: l } = je(Dh),
        {
          prefixCls: s,
          span: d,
          order: f,
          offset: p,
          push: h,
          pull: v,
          className: x,
          children: y,
          flex: C,
          style: O,
        } = e,
        E = J$(e, ['prefixCls', 'span', 'order', 'offset', 'push', 'pull', 'className', 'children', 'flex', 'style']),
        _ = n('col', s),
        [P, N] = Q$(_);
      let j = {};
      eO.forEach((I) => {
        let M = {};
        const D = e[I];
        typeof D == 'number' ? (M.span = D) : typeof D == 'object' && (M = D || {}),
          delete E[I],
          (j = Object.assign(Object.assign({}, j), {
            [`${_}-${I}-${M.span}`]: M.span !== void 0,
            [`${_}-${I}-order-${M.order}`]: M.order || M.order === 0,
            [`${_}-${I}-offset-${M.offset}`]: M.offset || M.offset === 0,
            [`${_}-${I}-push-${M.push}`]: M.push || M.push === 0,
            [`${_}-${I}-pull-${M.pull}`]: M.pull || M.pull === 0,
            [`${_}-rtl`]: r === 'rtl',
          }));
      });
      const u = he(
          _,
          {
            [`${_}-${d}`]: d !== void 0,
            [`${_}-order-${f}`]: f,
            [`${_}-offset-${p}`]: p,
            [`${_}-push-${h}`]: h,
            [`${_}-pull-${v}`]: v,
          },
          x,
          j,
          N,
        ),
        $ = {};
      if (i && i[0] > 0) {
        const I = i[0] / 2;
        ($.paddingLeft = I), ($.paddingRight = I);
      }
      if (i && i[1] > 0 && !l) {
        const I = i[1] / 2;
        ($.paddingTop = I), ($.paddingBottom = I);
      }
      return (
        C && (($.flex = Z$(C)), o === !1 && !$.minWidth && ($.minWidth = 0)),
        P(
          b.createElement(
            'div',
            Object.assign({}, E, { style: Object.assign(Object.assign({}, $), O), className: u, ref: t }),
            y,
          ),
        )
      );
    });
  var nO =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  function Fh(e, t) {
    const [n, r] = we(typeof e == 'string' ? e : ''),
      i = () => {
        if ((typeof e == 'string' && r(e), typeof e == 'object'))
          for (let o = 0; o < Ci.length; o++) {
            const l = Ci[o];
            if (!t[l]) continue;
            const s = e[l];
            if (s !== void 0) {
              r(s);
              return;
            }
          }
      };
    return (
      Fe(() => {
        i();
      }, [JSON.stringify(e), t]),
      n
    );
  }
  const rO = We((e, t) => {
      const { prefixCls: n, justify: r, align: i, className: o, style: l, children: s, gutter: d = 0, wrap: f } = e,
        p = nO(e, ['prefixCls', 'justify', 'align', 'className', 'style', 'children', 'gutter', 'wrap']),
        { getPrefixCls: h, direction: v } = je(xt),
        [x, y] = we({ xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 }),
        [C, O] = we({ xs: !1, sm: !1, md: !1, lg: !1, xl: !1, xxl: !1 }),
        E = Fh(i, C),
        _ = Fh(r, C),
        P = Th(),
        N = ie(d),
        j = vh();
      Fe(() => {
        const Z = j.subscribe((ee) => {
          O(ee);
          const le = N.current || 0;
          ((!Array.isArray(le) && typeof le == 'object') ||
            (Array.isArray(le) && (typeof le[0] == 'object' || typeof le[1] == 'object'))) &&
            y(ee);
        });
        return () => j.unsubscribe(Z);
      }, []);
      const u = () => {
          const Z = [void 0, void 0];
          return (
            (Array.isArray(d) ? d : [d, void 0]).forEach((le, ce) => {
              if (typeof le == 'object')
                for (let xe = 0; xe < Ci.length; xe++) {
                  const Q = Ci[xe];
                  if (x[Q] && le[Q] !== void 0) {
                    Z[ce] = le[Q];
                    break;
                  }
                }
              else Z[ce] = le;
            }),
            Z
          );
        },
        $ = h('row', n),
        [I, M] = Y$($),
        D = u(),
        B = he($, { [`${$}-no-wrap`]: f === !1, [`${$}-${_}`]: _, [`${$}-${E}`]: E, [`${$}-rtl`]: v === 'rtl' }, o, M),
        F = {},
        A = D[0] != null && D[0] > 0 ? D[0] / -2 : void 0,
        z = D[1] != null && D[1] > 0 ? D[1] / -2 : void 0;
      A && ((F.marginLeft = A), (F.marginRight = A)),
        P ? ([, F.rowGap] = D) : z && ((F.marginTop = z), (F.marginBottom = z));
      const [V, U] = D,
        X = De(() => ({ gutter: [V, U], wrap: f, supportFlexGap: P }), [V, U, f, P]);
      return I(
        b.createElement(
          Dh.Provider,
          { value: X },
          b.createElement(
            'div',
            Object.assign({}, p, { className: B, style: Object.assign(Object.assign({}, F), l), ref: t }),
            s,
          ),
        ),
      );
    }),
    iO = (e) => {
      const { componentCls: t, sizePaddingEdgeHorizontal: n, colorSplit: r, lineWidth: i } = e;
      return {
        [t]: Object.assign(Object.assign({}, ir(e)), {
          borderBlockStart: `${i}px solid ${r}`,
          '&-vertical': {
            position: 'relative',
            top: '-0.06em',
            display: 'inline-block',
            height: '0.9em',
            margin: `0 ${e.dividerVerticalGutterMargin}px`,
            verticalAlign: 'middle',
            borderTop: 0,
            borderInlineStart: `${i}px solid ${r}`,
          },
          '&-horizontal': {
            display: 'flex',
            clear: 'both',
            width: '100%',
            minWidth: '100%',
            margin: `${e.dividerHorizontalGutterMargin}px 0`,
          },
          [`&-horizontal${t}-with-text`]: {
            display: 'flex',
            alignItems: 'center',
            margin: `${e.dividerHorizontalWithTextGutterMargin}px 0`,
            color: e.colorTextHeading,
            fontWeight: 500,
            fontSize: e.fontSizeLG,
            whiteSpace: 'nowrap',
            textAlign: 'center',
            borderBlockStart: `0 ${r}`,
            '&::before, &::after': {
              position: 'relative',
              width: '50%',
              borderBlockStart: `${i}px solid transparent`,
              borderBlockStartColor: 'inherit',
              borderBlockEnd: 0,
              transform: 'translateY(50%)',
              content: "''",
            },
          },
          [`&-horizontal${t}-with-text-left`]: { '&::before': { width: '5%' }, '&::after': { width: '95%' } },
          [`&-horizontal${t}-with-text-right`]: { '&::before': { width: '95%' }, '&::after': { width: '5%' } },
          [`${t}-inner-text`]: { display: 'inline-block', padding: '0 1em' },
          '&-dashed': { background: 'none', borderColor: r, borderStyle: 'dashed', borderWidth: `${i}px 0 0` },
          [`&-horizontal${t}-with-text${t}-dashed`]: { '&::before, &::after': { borderStyle: 'dashed none none' } },
          [`&-vertical${t}-dashed`]: {
            borderInlineStart: i,
            borderInlineEnd: 0,
            borderBlockStart: 0,
            borderBlockEnd: 0,
          },
          [`&-plain${t}-with-text`]: { color: e.colorText, fontWeight: 'normal', fontSize: e.fontSize },
          [`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]: {
            '&::before': { width: 0 },
            '&::after': { width: '100%' },
            [`${t}-inner-text`]: { paddingInlineStart: n },
          },
          [`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]: {
            '&::before': { width: '100%' },
            '&::after': { width: 0 },
            [`${t}-inner-text`]: { paddingInlineEnd: n },
          },
        }),
      };
    },
    oO = On(
      'Divider',
      (e) => {
        const t = jt(e, {
          dividerVerticalGutterMargin: e.marginXS,
          dividerHorizontalWithTextGutterMargin: e.margin,
          dividerHorizontalGutterMargin: e.marginLG,
        });
        return [iO(t)];
      },
      { sizePaddingEdgeHorizontal: 0 },
    );
  var aO =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const jh = (e) => {
    const { getPrefixCls: t, direction: n } = je(xt),
      {
        prefixCls: r,
        type: i = 'horizontal',
        orientation: o = 'center',
        orientationMargin: l,
        className: s,
        rootClassName: d,
        children: f,
        dashed: p,
        plain: h,
      } = e,
      v = aO(e, [
        'prefixCls',
        'type',
        'orientation',
        'orientationMargin',
        'className',
        'rootClassName',
        'children',
        'dashed',
        'plain',
      ]),
      x = t('divider', r),
      [y, C] = oO(x),
      O = o.length > 0 ? `-${o}` : o,
      E = !!f,
      _ = o === 'left' && l != null,
      P = o === 'right' && l != null,
      N = he(
        x,
        C,
        `${x}-${i}`,
        {
          [`${x}-with-text`]: E,
          [`${x}-with-text${O}`]: E,
          [`${x}-dashed`]: !!p,
          [`${x}-plain`]: !!h,
          [`${x}-rtl`]: n === 'rtl',
          [`${x}-no-default-orientation-margin-left`]: _,
          [`${x}-no-default-orientation-margin-right`]: P,
        },
        s,
        d,
      ),
      j = Object.assign(Object.assign({}, _ && { marginLeft: l }), P && { marginRight: l });
    return y(
      b.createElement(
        'div',
        Object.assign({ className: N }, v, { role: 'separator' }),
        f && i !== 'vertical' && b.createElement('span', { className: `${x}-inner-text`, style: j }, f),
      ),
    );
  };
  var lO = function (t) {
      var n = t.prefixCls,
        r = t.className,
        i = t.style,
        o = t.children,
        l = t.containerRef;
      return b.createElement(
        b.Fragment,
        null,
        b.createElement(
          'div',
          { className: he(''.concat(n, '-content'), r), style: G({}, i), 'aria-modal': 'true', role: 'dialog', ref: l },
          o,
        ),
      );
    },
    zh = b.createContext(null);
  function Lh(e) {
    return typeof e == 'string' && String(Number(e)) === e
      ? (tr(!1, 'Invalid value type of `width` or `height` which should be number type instead.'), Number(e))
      : e;
  }
  var Hh = { width: 0, height: 0, overflow: 'hidden', outline: 'none', position: 'absolute' };
  function sO(e, t) {
    var n,
      r,
      i,
      o,
      l = e.prefixCls,
      s = e.open,
      d = e.placement,
      f = e.inline,
      p = e.push,
      h = e.forceRender,
      v = e.autoFocus,
      x = e.keyboard,
      y = e.rootClassName,
      C = e.rootStyle,
      O = e.zIndex,
      E = e.className,
      _ = e.style,
      P = e.motion,
      N = e.width,
      j = e.height,
      u = e.children,
      $ = e.contentWrapperStyle,
      I = e.mask,
      M = e.maskClosable,
      D = e.maskMotion,
      B = e.maskClassName,
      F = e.maskStyle,
      A = e.afterOpenChange,
      z = e.onClose,
      V = ie(),
      U = ie(),
      X = ie();
    on(t, function () {
      return V.current;
    });
    var Z = function (ne) {
      var Te = ne.keyCode,
        He = ne.shiftKey;
      switch (Te) {
        case ye.TAB: {
          if (Te === ye.TAB) {
            if (!He && document.activeElement === X.current) {
              var oe;
              (oe = U.current) === null || oe === void 0 || oe.focus({ preventScroll: !0 });
            } else if (He && document.activeElement === U.current) {
              var ue;
              (ue = X.current) === null || ue === void 0 || ue.focus({ preventScroll: !0 });
            }
          }
          break;
        }
        case ye.ESC: {
          z && x && (ne.stopPropagation(), z(ne));
          break;
        }
      }
    };
    Fe(
      function () {
        if (s && v) {
          var Re;
          (Re = V.current) === null || Re === void 0 || Re.focus({ preventScroll: !0 });
        }
      },
      [s],
    );
    var ee = we(!1),
      le = ge(ee, 2),
      ce = le[0],
      xe = le[1],
      Q = je(zh),
      Ce;
    p === !1 ? (Ce = { distance: 0 }) : p === !0 ? (Ce = {}) : (Ce = p || {});
    var Se =
        (n =
          (r = (i = Ce) === null || i === void 0 ? void 0 : i.distance) !== null && r !== void 0
            ? r
            : Q == null
            ? void 0
            : Q.pushDistance) !== null && n !== void 0
          ? n
          : 180,
      me = De(
        function () {
          return {
            pushDistance: Se,
            push: function () {
              xe(!0);
            },
            pull: function () {
              xe(!1);
            },
          };
        },
        [Se],
      );
    Fe(
      function () {
        if (s) {
          var Re;
          Q == null || (Re = Q.push) === null || Re === void 0 || Re.call(Q);
        } else {
          var ne;
          Q == null || (ne = Q.pull) === null || ne === void 0 || ne.call(Q);
        }
      },
      [s],
    ),
      Fe(function () {
        return function () {
          var Re;
          Q == null || (Re = Q.pull) === null || Re === void 0 || Re.call(Q);
        };
      }, []);
    var se =
        I &&
        b.createElement(Tr, rt({ key: 'mask' }, D, { visible: s }), function (Re, ne) {
          var Te = Re.className,
            He = Re.style;
          return b.createElement('div', {
            className: he(''.concat(l, '-mask'), Te, B),
            style: G(G({}, He), F),
            onClick: M && s ? z : void 0,
            ref: ne,
          });
        }),
      $e = typeof P == 'function' ? P(d) : P,
      Ee = {};
    if (ce && Se)
      switch (d) {
        case 'top':
          Ee.transform = 'translateY('.concat(Se, 'px)');
          break;
        case 'bottom':
          Ee.transform = 'translateY('.concat(-Se, 'px)');
          break;
        case 'left':
          Ee.transform = 'translateX('.concat(Se, 'px)');
          break;
        default:
          Ee.transform = 'translateX('.concat(-Se, 'px)');
          break;
      }
    d === 'left' || d === 'right' ? (Ee.width = Lh(N)) : (Ee.height = Lh(j));
    var Me = b.createElement(
        Tr,
        rt({ key: 'panel' }, $e, {
          visible: s,
          forceRender: h,
          onVisibleChanged: function (ne) {
            A == null || A(ne);
          },
          removeOnLeave: !1,
          leavedClassName: ''.concat(l, '-content-wrapper-hidden'),
        }),
        function (Re, ne) {
          var Te = Re.className,
            He = Re.style;
          return b.createElement(
            'div',
            { className: he(''.concat(l, '-content-wrapper'), Te), style: G(G(G({}, Ee), He), $) },
            b.createElement(lO, { containerRef: ne, prefixCls: l, className: E, style: _ }, u),
          );
        },
      ),
      Le = G({}, C);
    return (
      O && (Le.zIndex = O),
      b.createElement(
        zh.Provider,
        { value: me },
        b.createElement(
          'div',
          {
            className: he(
              l,
              ''.concat(l, '-').concat(d),
              y,
              ((o = {}), Ie(o, ''.concat(l, '-open'), s), Ie(o, ''.concat(l, '-inline'), f), o),
            ),
            style: Le,
            tabIndex: -1,
            ref: V,
            onKeyDown: Z,
          },
          se,
          b.createElement('div', { tabIndex: 0, ref: U, style: Hh, 'aria-hidden': 'true', 'data-sentinel': 'start' }),
          Me,
          b.createElement('div', { tabIndex: 0, ref: X, style: Hh, 'aria-hidden': 'true', 'data-sentinel': 'end' }),
        ),
      )
    );
  }
  var cO = We(sO),
    uO = function (t) {
      var n = t.open,
        r = n === void 0 ? !1 : n,
        i = t.prefixCls,
        o = i === void 0 ? 'rc-drawer' : i,
        l = t.placement,
        s = l === void 0 ? 'right' : l,
        d = t.autoFocus,
        f = d === void 0 ? !0 : d,
        p = t.keyboard,
        h = p === void 0 ? !0 : p,
        v = t.width,
        x = v === void 0 ? 378 : v,
        y = t.mask,
        C = y === void 0 ? !0 : y,
        O = t.maskClosable,
        E = O === void 0 ? !0 : O,
        _ = t.getContainer,
        P = t.forceRender,
        N = t.afterOpenChange,
        j = t.destroyOnClose,
        u = we(!1),
        $ = ge(u, 2),
        I = $[0],
        M = $[1],
        D = ie(),
        B = ie();
      Wt(
        function () {
          r && (B.current = document.activeElement);
        },
        [r],
      );
      var F = function (V) {
        var U;
        if (
          (M(V),
          N == null || N(V),
          !V && B.current && !(!((U = D.current) === null || U === void 0) && U.contains(B.current)))
        ) {
          var X;
          (X = B.current) === null || X === void 0 || X.focus();
        }
      };
      if (!P && !I && !r && j) return null;
      var A = G(
        G({}, t),
        {},
        {
          open: r,
          prefixCls: o,
          placement: s,
          autoFocus: f,
          keyboard: h,
          width: x,
          mask: C,
          maskClosable: E,
          inline: _ === !1,
          afterOpenChange: F,
          ref: D,
        },
      );
      return b.createElement(
        ll,
        { open: r || P || I, autoDestroy: !1, getContainer: _, autoLock: C && (r || I) },
        b.createElement(cO, A),
      );
    };
  function Bh(e) {
    const {
        prefixCls: t,
        title: n,
        footer: r,
        extra: i,
        closable: o = !0,
        closeIcon: l = b.createElement(Ya, null),
        onClose: s,
        headerStyle: d,
        drawerStyle: f,
        bodyStyle: p,
        footerStyle: h,
        children: v,
      } = e,
      x =
        o &&
        b.createElement('button', { type: 'button', onClick: s, 'aria-label': 'Close', className: `${t}-close` }, l);
    function y() {
      return !n && !o
        ? null
        : b.createElement(
            'div',
            { className: he(`${t}-header`, { [`${t}-header-close-only`]: o && !n && !i }), style: d },
            b.createElement(
              'div',
              { className: `${t}-header-title` },
              x,
              n && b.createElement('div', { className: `${t}-title` }, n),
            ),
            i && b.createElement('div', { className: `${t}-extra` }, i),
          );
    }
    function C() {
      if (!r) return null;
      const O = `${t}-footer`;
      return b.createElement('div', { className: O, style: h }, r);
    }
    return b.createElement(
      'div',
      { className: `${t}-wrapper-body`, style: Object.assign({}, f) },
      y(),
      b.createElement('div', { className: `${t}-body`, style: p }, v),
      C(),
    );
  }
  const dO = (e) => {
      const { componentCls: t, motionDurationSlow: n } = e,
        r = {
          '&-enter, &-appear, &-leave': { '&-start': { transition: 'none' }, '&-active': { transition: `all ${n}` } },
        };
      return {
        [t]: {
          [`${t}-mask-motion`]: {
            '&-enter, &-appear, &-leave': { '&-active': { transition: `all ${n}` } },
            '&-enter, &-appear': { opacity: 0, '&-active': { opacity: 1 } },
            '&-leave': { opacity: 1, '&-active': { opacity: 0 } },
          },
          [`${t}-panel-motion`]: {
            '&-left': [
              r,
              {
                '&-enter, &-appear': {
                  '&-start': { transform: 'translateX(-100%) !important' },
                  '&-active': { transform: 'translateX(0)' },
                },
                '&-leave': { transform: 'translateX(0)', '&-active': { transform: 'translateX(-100%)' } },
              },
            ],
            '&-right': [
              r,
              {
                '&-enter, &-appear': {
                  '&-start': { transform: 'translateX(100%) !important' },
                  '&-active': { transform: 'translateX(0)' },
                },
                '&-leave': { transform: 'translateX(0)', '&-active': { transform: 'translateX(100%)' } },
              },
            ],
            '&-top': [
              r,
              {
                '&-enter, &-appear': {
                  '&-start': { transform: 'translateY(-100%) !important' },
                  '&-active': { transform: 'translateY(0)' },
                },
                '&-leave': { transform: 'translateY(0)', '&-active': { transform: 'translateY(-100%)' } },
              },
            ],
            '&-bottom': [
              r,
              {
                '&-enter, &-appear': {
                  '&-start': { transform: 'translateY(100%) !important' },
                  '&-active': { transform: 'translateY(0)' },
                },
                '&-leave': { transform: 'translateY(0)', '&-active': { transform: 'translateY(100%)' } },
              },
            ],
          },
        },
      };
    },
    fO = (e) => {
      const {
          componentCls: t,
          zIndexPopup: n,
          colorBgMask: r,
          colorBgElevated: i,
          motionDurationSlow: o,
          motionDurationMid: l,
          padding: s,
          paddingLG: d,
          fontSizeLG: f,
          lineHeightLG: p,
          lineWidth: h,
          lineType: v,
          colorSplit: x,
          marginSM: y,
          colorIcon: C,
          colorIconHover: O,
          colorText: E,
          fontWeightStrong: _,
          drawerFooterPaddingVertical: P,
          drawerFooterPaddingHorizontal: N,
        } = e,
        j = `${t}-content-wrapper`;
      return {
        [t]: {
          position: 'fixed',
          inset: 0,
          zIndex: n,
          pointerEvents: 'none',
          '&-pure': {
            position: 'relative',
            background: i,
            [`&${t}-left`]: { boxShadow: e.boxShadowDrawerLeft },
            [`&${t}-right`]: { boxShadow: e.boxShadowDrawerRight },
            [`&${t}-top`]: { boxShadow: e.boxShadowDrawerUp },
            [`&${t}-bottom`]: { boxShadow: e.boxShadowDrawerDown },
          },
          '&-inline': { position: 'absolute' },
          [`${t}-mask`]: { position: 'absolute', inset: 0, zIndex: n, background: r, pointerEvents: 'auto' },
          [j]: { position: 'absolute', zIndex: n, transition: `all ${o}`, '&-hidden': { display: 'none' } },
          [`&-left > ${j}`]: {
            top: 0,
            bottom: 0,
            left: { _skip_check_: !0, value: 0 },
            boxShadow: e.boxShadowDrawerLeft,
          },
          [`&-right > ${j}`]: {
            top: 0,
            right: { _skip_check_: !0, value: 0 },
            bottom: 0,
            boxShadow: e.boxShadowDrawerRight,
          },
          [`&-top > ${j}`]: { top: 0, insetInline: 0, boxShadow: e.boxShadowDrawerUp },
          [`&-bottom > ${j}`]: { bottom: 0, insetInline: 0, boxShadow: e.boxShadowDrawerDown },
          [`${t}-content`]: { width: '100%', height: '100%', overflow: 'auto', background: i, pointerEvents: 'auto' },
          [`${t}-wrapper-body`]: { display: 'flex', flexDirection: 'column', width: '100%', height: '100%' },
          [`${t}-header`]: {
            display: 'flex',
            flex: 0,
            alignItems: 'center',
            padding: `${s}px ${d}px`,
            fontSize: f,
            lineHeight: p,
            borderBottom: `${h}px ${v} ${x}`,
            '&-title': { display: 'flex', flex: 1, alignItems: 'center', minWidth: 0, minHeight: 0 },
          },
          [`${t}-extra`]: { flex: 'none' },
          [`${t}-close`]: {
            display: 'inline-block',
            marginInlineEnd: y,
            color: C,
            fontWeight: _,
            fontSize: f,
            fontStyle: 'normal',
            lineHeight: 1,
            textAlign: 'center',
            textTransform: 'none',
            textDecoration: 'none',
            background: 'transparent',
            border: 0,
            outline: 0,
            cursor: 'pointer',
            transition: `color ${l}`,
            textRendering: 'auto',
            '&:focus, &:hover': { color: O, textDecoration: 'none' },
          },
          [`${t}-title`]: { flex: 1, margin: 0, color: E, fontWeight: e.fontWeightStrong, fontSize: f, lineHeight: p },
          [`${t}-body`]: { flex: 1, minWidth: 0, minHeight: 0, padding: d, overflow: 'auto' },
          [`${t}-footer`]: { flexShrink: 0, padding: `${P}px ${N}px`, borderTop: `${h}px ${v} ${x}` },
          '&-rtl': { direction: 'rtl' },
        },
      };
    },
    kh = On(
      'Drawer',
      (e) => {
        const t = jt(e, { drawerFooterPaddingVertical: e.paddingXS, drawerFooterPaddingHorizontal: e.padding });
        return [fO(t), dO(t)];
      },
      (e) => ({ zIndexPopup: e.zIndexPopupBase }),
    );
  var Vh =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const pO = { distance: 180 };
  function Gc(e) {
    const {
        rootClassName: t,
        width: n,
        height: r,
        size: i = 'default',
        mask: o = !0,
        push: l = pO,
        open: s,
        afterOpenChange: d,
        onClose: f,
        prefixCls: p,
        getContainer: h,
        visible: v,
        afterVisibleChange: x,
      } = e,
      y = Vh(e, [
        'rootClassName',
        'width',
        'height',
        'size',
        'mask',
        'push',
        'open',
        'afterOpenChange',
        'onClose',
        'prefixCls',
        'getContainer',
        'visible',
        'afterVisibleChange',
      ]),
      { getPopupContainer: C, getPrefixCls: O, direction: E } = je(xt),
      _ = O('drawer', p),
      [P, N] = kh(_),
      j = h === void 0 && C ? () => C(document.body) : h,
      u = he({ 'no-mask': !o, [`${_}-rtl`]: E === 'rtl' }, t, N),
      $ = De(() => n ?? (i === 'large' ? 736 : 378), [n, i]),
      I = De(() => r ?? (i === 'large' ? 736 : 378), [r, i]),
      M = { motionName: qr(_, 'mask-motion'), motionAppear: !0, motionEnter: !0, motionLeave: !0, motionDeadline: 500 },
      D = (B) => ({
        motionName: qr(_, `panel-motion-${B}`),
        motionAppear: !0,
        motionEnter: !0,
        motionLeave: !0,
        motionDeadline: 500,
      });
    return P(
      b.createElement(
        Dp,
        null,
        b.createElement(
          og,
          { status: !0, override: !0 },
          b.createElement(
            uO,
            Object.assign({ prefixCls: _, onClose: f, maskMotion: M, motion: D }, y, {
              open: s ?? v,
              mask: o,
              push: l,
              width: $,
              height: I,
              rootClassName: u,
              getContainer: j,
              afterOpenChange: d ?? x,
            }),
            b.createElement(Bh, Object.assign({ prefixCls: _ }, y, { onClose: f })),
          ),
        ),
      ),
    );
  }
  function gO(e) {
    var { prefixCls: t, style: n, className: r, placement: i = 'right' } = e,
      o = Vh(e, ['prefixCls', 'style', 'className', 'placement']);
    const { getPrefixCls: l } = je(xt),
      s = l('drawer', t),
      [d, f] = kh(s);
    return d(
      b.createElement(
        'div',
        { className: he(s, `${s}-pure`, `${s}-${i}`, f, r), style: n },
        b.createElement(Bh, Object.assign({ prefixCls: s }, o)),
      ),
    );
  }
  Gc._InternalPanelDoNotUseOrYouWillBeFired = gO;
  function qc(e) {
    return !!(e.addonBefore || e.addonAfter);
  }
  function hO(e) {
    return !!(e.prefix || e.suffix || e.allowClear);
  }
  function Kc(e, t, n, r) {
    if (n) {
      var i = t;
      if (t.type === 'click') {
        var o = e.cloneNode(!0);
        (i = Object.create(t, { target: { value: o }, currentTarget: { value: o } })), (o.value = ''), n(i);
        return;
      }
      if (r !== void 0) {
        (i = Object.create(t, { target: { value: e }, currentTarget: { value: e } })), (e.value = r), n(i);
        return;
      }
      n(i);
    }
  }
  function mO(e) {
    return typeof e > 'u' || e === null ? '' : String(e);
  }
  var vO = function (t) {
    var n,
      r = t.inputElement,
      i = t.prefixCls,
      o = t.prefix,
      l = t.suffix,
      s = t.addonBefore,
      d = t.addonAfter,
      f = t.className,
      p = t.style,
      h = t.affixWrapperClassName,
      v = t.groupClassName,
      x = t.wrapperClassName,
      y = t.disabled,
      C = t.readOnly,
      O = t.focused,
      E = t.triggerFocus,
      _ = t.allowClear,
      P = t.value,
      N = t.handleReset,
      j = t.hidden,
      u = t.inputStyle,
      $ = t.classes,
      I = ie(null),
      M = function (ce) {
        var xe;
        (xe = I.current) !== null && xe !== void 0 && xe.contains(ce.target) && (E == null || E());
      },
      D = function () {
        var ce;
        if (!_) return null;
        var xe = !y && !C && P,
          Q = ''.concat(i, '-clear-icon'),
          Ce = Et(_) === 'object' && _ !== null && _ !== void 0 && _.clearIcon ? _.clearIcon : '✖';
        return be.createElement(
          'span',
          {
            onClick: N,
            onMouseDown: function (me) {
              return me.preventDefault();
            },
            className: he(
              Q,
              ((ce = {}), Ie(ce, ''.concat(Q, '-hidden'), !xe), Ie(ce, ''.concat(Q, '-has-suffix'), !!l), ce),
            ),
            role: 'button',
            tabIndex: -1,
          },
          Ce,
        );
      },
      B = un(r, { value: P, hidden: j, style: G(G({}, (n = r.props) === null || n === void 0 ? void 0 : n.style), u) });
    if (hO(t)) {
      var F,
        A = ''.concat(i, '-affix-wrapper'),
        z = he(
          A,
          ((F = {}),
          Ie(F, ''.concat(A, '-disabled'), y),
          Ie(F, ''.concat(A, '-focused'), O),
          Ie(F, ''.concat(A, '-readonly'), C),
          Ie(F, ''.concat(A, '-input-with-clear-btn'), l && _ && P),
          F),
          !qc(t) && f,
          h,
          $ == null ? void 0 : $.affixWrapper,
        ),
        V = (l || _) && be.createElement('span', { className: ''.concat(i, '-suffix') }, D(), l);
      B = be.createElement(
        'span',
        { className: z, style: p, hidden: !qc(t) && j, onClick: M, ref: I },
        o && be.createElement('span', { className: ''.concat(i, '-prefix') }, o),
        un(r, { style: u ?? null, value: P, hidden: null }),
        V,
      );
    }
    if (qc(t)) {
      var U = ''.concat(i, '-group'),
        X = ''.concat(U, '-addon'),
        Z = he(''.concat(i, '-wrapper'), U, x, $ == null ? void 0 : $.wrapper),
        ee = he(''.concat(i, '-group-wrapper'), f, v, $ == null ? void 0 : $.group);
      return be.createElement(
        'span',
        { className: ee, style: p, hidden: j },
        be.createElement(
          'span',
          { className: Z },
          s && be.createElement('span', { className: X }, s),
          un(B, { style: u ?? null, hidden: null }),
          d && be.createElement('span', { className: X }, d),
        ),
      );
    }
    return B;
  };
  globalThis && globalThis.__rest;
  function bO(e, t) {
    if (!e) return;
    e.focus(t);
    const { cursor: n } = t || {};
    if (n) {
      const r = e.value.length;
      switch (n) {
        case 'start':
          e.setSelectionRange(0, 0);
          break;
        case 'end':
          e.setSelectionRange(r, r);
          break;
        default:
          e.setSelectionRange(0, r);
          break;
      }
    }
  }
  var yO = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,
    CO = [
      'letter-spacing',
      'line-height',
      'padding-top',
      'padding-bottom',
      'font-family',
      'font-weight',
      'font-size',
      'font-variant',
      'text-rendering',
      'text-transform',
      'width',
      'text-indent',
      'padding-left',
      'padding-right',
      'border-width',
      'box-sizing',
      'word-break',
      'white-space',
    ],
    Xc = {},
    ar;
  function SO(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      n = e.getAttribute('id') || e.getAttribute('data-reactid') || e.getAttribute('name');
    if (t && Xc[n]) return Xc[n];
    var r = window.getComputedStyle(e),
      i =
        r.getPropertyValue('box-sizing') ||
        r.getPropertyValue('-moz-box-sizing') ||
        r.getPropertyValue('-webkit-box-sizing'),
      o = parseFloat(r.getPropertyValue('padding-bottom')) + parseFloat(r.getPropertyValue('padding-top')),
      l = parseFloat(r.getPropertyValue('border-bottom-width')) + parseFloat(r.getPropertyValue('border-top-width')),
      s = CO.map(function (f) {
        return ''.concat(f, ':').concat(r.getPropertyValue(f));
      }).join(';'),
      d = { sizingStyle: s, paddingSize: o, borderSize: l, boxSizing: i };
    return t && n && (Xc[n] = d), d;
  }
  function xO(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
      r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    ar ||
      ((ar = document.createElement('textarea')),
      ar.setAttribute('tab-index', '-1'),
      ar.setAttribute('aria-hidden', 'true'),
      document.body.appendChild(ar)),
      e.getAttribute('wrap') ? ar.setAttribute('wrap', e.getAttribute('wrap')) : ar.removeAttribute('wrap');
    var i = SO(e, t),
      o = i.paddingSize,
      l = i.borderSize,
      s = i.boxSizing,
      d = i.sizingStyle;
    ar.setAttribute('style', ''.concat(d, ';').concat(yO)), (ar.value = e.value || e.placeholder || '');
    var f = void 0,
      p = void 0,
      h,
      v = ar.scrollHeight;
    if ((s === 'border-box' ? (v += l) : s === 'content-box' && (v -= o), n !== null || r !== null)) {
      ar.value = ' ';
      var x = ar.scrollHeight - o;
      n !== null && ((f = x * n), s === 'border-box' && (f = f + o + l), (v = Math.max(f, v))),
        r !== null &&
          ((p = x * r), s === 'border-box' && (p = p + o + l), (h = v > p ? '' : 'hidden'), (v = Math.min(p, v)));
    }
    var y = { height: v, overflowY: h, resize: 'none' };
    return f && (y.minHeight = f), p && (y.maxHeight = p), y;
  }
  var wO = [
      'prefixCls',
      'onPressEnter',
      'defaultValue',
      'value',
      'autoSize',
      'onResize',
      'className',
      'style',
      'disabled',
      'onChange',
      'onInternalAutoSize',
    ],
    Yc = 0,
    Qc = 1,
    Jc = 2,
    EO = We(function (e, t) {
      var n = e,
        r = n.prefixCls;
      n.onPressEnter;
      var i = n.defaultValue,
        o = n.value,
        l = n.autoSize,
        s = n.onResize,
        d = n.className,
        f = n.style,
        p = n.disabled,
        h = n.onChange;
      n.onInternalAutoSize;
      var v = qt(n, wO),
        x = Pr(i, {
          value: o,
          postState: function (Ce) {
            return Ce ?? '';
          },
        }),
        y = ge(x, 2),
        C = y[0],
        O = y[1],
        E = function (Ce) {
          O(Ce.target.value), h == null || h(Ce);
        },
        _ = ie();
      on(t, function () {
        return { textArea: _.current };
      });
      var P = De(
          function () {
            return l && Et(l) === 'object' ? [l.minRows, l.maxRows] : [];
          },
          [l],
        ),
        N = ge(P, 2),
        j = N[0],
        u = N[1],
        $ = !!l,
        I = function () {
          try {
            if (document.activeElement === _.current) {
              var Ce = _.current,
                Se = Ce.selectionStart,
                me = Ce.selectionEnd,
                se = Ce.scrollTop;
              _.current.setSelectionRange(Se, me), (_.current.scrollTop = se);
            }
          } catch {}
        },
        M = we(Jc),
        D = ge(M, 2),
        B = D[0],
        F = D[1],
        A = we(),
        z = ge(A, 2),
        V = z[0],
        U = z[1],
        X = function () {
          F(Yc);
        };
      Wt(
        function () {
          $ && X();
        },
        [o, j, u, $],
      ),
        Wt(
          function () {
            if (B === Yc) F(Qc);
            else if (B === Qc) {
              var Q = xO(_.current, !1, j, u);
              F(Jc), U(Q);
            } else I();
          },
          [B],
        );
      var Z = ie(),
        ee = function () {
          Sn.cancel(Z.current);
        },
        le = function (Ce) {
          B === Jc &&
            (s == null || s(Ce),
            l &&
              (ee(),
              (Z.current = Sn(function () {
                X();
              }))));
        };
      Fe(function () {
        return ee;
      }, []);
      var ce = $ ? V : null,
        xe = G(G({}, f), ce);
      return (
        (B === Yc || B === Qc) && ((xe.overflowY = 'hidden'), (xe.overflowX = 'hidden')),
        b.createElement(
          Hr,
          { onResize: le, disabled: !(l || s) },
          b.createElement(
            'textarea',
            rt({}, v, {
              ref: _,
              style: xe,
              className: he(r, d, Ie({}, ''.concat(r, '-disabled'), p)),
              disabled: p,
              value: C,
              onChange: E,
            }),
          ),
        )
      );
    }),
    $O = [
      'defaultValue',
      'value',
      'onChange',
      'allowClear',
      'maxLength',
      'onCompositionStart',
      'onCompositionEnd',
      'suffix',
      'prefixCls',
      'classes',
      'showCount',
      'className',
      'style',
      'disabled',
    ];
  function Wh(e, t) {
    return ze(e || '')
      .slice(0, t)
      .join('');
  }
  function Uh(e, t, n, r) {
    var i = n;
    return e ? (i = Wh(n, r)) : ze(t || '').length < n.length && ze(n || '').length > r && (i = t), i;
  }
  var OO = be.forwardRef(function (e, t) {
      var n = e.defaultValue,
        r = e.value,
        i = e.onChange,
        o = e.allowClear,
        l = e.maxLength,
        s = e.onCompositionStart,
        d = e.onCompositionEnd,
        f = e.suffix,
        p = e.prefixCls,
        h = p === void 0 ? 'rc-textarea' : p,
        v = e.classes,
        x = e.showCount,
        y = e.className,
        C = e.style,
        O = e.disabled,
        E = qt(e, $O),
        _ = Pr(n, { value: r, defaultValue: n }),
        P = ge(_, 2),
        N = P[0],
        j = P[1],
        u = ie(null),
        $ = be.useState(!1),
        I = ge($, 2),
        M = I[0],
        D = I[1],
        B = be.useRef(),
        F = be.useRef(0),
        A = function () {
          u.current.textArea.focus();
        };
      on(t, function () {
        return {
          resizableTextArea: u.current,
          focus: A,
          blur: function () {
            u.current.textArea.blur();
          },
        };
      });
      var z = Number(l) > 0,
        V = function (Se) {
          D(!0), (B.current = N), (F.current = Se.currentTarget.selectionStart), s == null || s(Se);
        },
        U = function (Se) {
          D(!1);
          var me = Se.currentTarget.value;
          if (z) {
            var se,
              $e =
                F.current >= l + 1 || F.current === ((se = B.current) === null || se === void 0 ? void 0 : se.length);
            me = Uh($e, B.current, me, l);
          }
          me !== N && (j(me), Kc(Se.currentTarget, Se, i, me)), d == null || d(Se);
        },
        X = function (Se) {
          var me = Se.target.value;
          if (!M && z) {
            var se =
              Se.target.selectionStart >= l + 1 || Se.target.selectionStart === me.length || !Se.target.selectionStart;
            me = Uh(se, N, me, l);
          }
          j(me), Kc(Se.currentTarget, Se, i, me);
        },
        Z = function (Se) {
          var me = E.onPressEnter,
            se = E.onKeyDown;
          Se.key === 'Enter' && me && me(Se), se == null || se(Se);
        },
        ee = function (Se) {
          j(''), A(), Kc(u.current.textArea, Se, i);
        },
        le = mO(N);
      !M && z && r == null && (le = Wh(le, l));
      var ce = be.createElement(vO, {
        value: le,
        allowClear: o,
        handleReset: ee,
        suffix: f,
        prefixCls: h,
        classes: { affixWrapper: v == null ? void 0 : v.affixWrapper },
        disabled: O,
        style: C,
        inputStyle: { resize: C == null ? void 0 : C.resize },
        inputElement: be.createElement(
          EO,
          rt({}, E, {
            onKeyDown: Z,
            onChange: X,
            onCompositionStart: V,
            onCompositionEnd: U,
            className: he(x ? '' : y, v == null ? void 0 : v.textarea),
            style: !x && C,
            disabled: O,
            prefixCls: h,
            ref: u,
          }),
        ),
      });
      if (x) {
        var xe = ze(le).length,
          Q;
        return (
          Et(x) === 'object'
            ? (Q = x.formatter({ value: le, count: xe, maxLength: l }))
            : (Q = ''.concat(xe).concat(z ? ' / '.concat(l) : '')),
          be.createElement(
            'div',
            {
              hidden: E.hidden,
              className: he(''.concat(h, '-show-count'), y, v == null ? void 0 : v.countWrapper),
              style: C,
              'data-count': Q,
            },
            ce,
            be.createElement('span', { className: ''.concat(h, '-data-count') }, Q),
          )
        );
      }
      return ce;
    }),
    _O =
      (globalThis && globalThis.__rest) ||
      function (e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
          for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n;
      };
  const TO = We((e, t) => {
    var { prefixCls: n, bordered: r = !0, size: i, disabled: o, status: l, allowClear: s } = e,
      d = _O(e, ['prefixCls', 'bordered', 'size', 'disabled', 'status', 'allowClear']);
    const { getPrefixCls: f, direction: p } = je(xt),
      h = je(Ki),
      v = i || h,
      x = je(Wa),
      y = o ?? x,
      { status: C, hasFeedback: O, feedbackIcon: E } = je(sl),
      _ = ch(C, l),
      P = ie(null);
    on(t, () => {
      var I;
      return {
        resizableTextArea: (I = P.current) === null || I === void 0 ? void 0 : I.resizableTextArea,
        focus: (M) => {
          var D, B;
          bO(
            (B = (D = P.current) === null || D === void 0 ? void 0 : D.resizableTextArea) === null || B === void 0
              ? void 0
              : B.textArea,
            M,
          );
        },
        blur: () => {
          var M;
          return (M = P.current) === null || M === void 0 ? void 0 : M.blur();
        },
      };
    });
    const N = f('input', n);
    let j;
    typeof s == 'object' && s != null && s.clearIcon ? (j = s) : s && (j = { clearIcon: b.createElement(Xa, null) });
    const [u, $] = V$(N);
    return u(
      b.createElement(
        OO,
        Object.assign({}, d, {
          disabled: y,
          allowClear: j,
          classes: {
            affixWrapper: he(
              `${N}-textarea-affix-wrapper`,
              {
                [`${N}-affix-wrapper-rtl`]: p === 'rtl',
                [`${N}-affix-wrapper-borderless`]: !r,
                [`${N}-affix-wrapper-sm`]: v === 'small',
                [`${N}-affix-wrapper-lg`]: v === 'large',
              },
              Fc(`${N}-affix-wrapper`, _),
              $,
            ),
            countWrapper: he(`${N}-textarea`, `${N}-textarea-show-count`, $),
            textarea: he(
              { [`${N}-borderless`]: !r, [`${N}-sm`]: v === 'small', [`${N}-lg`]: v === 'large' },
              Fc(N, _),
              $,
            ),
          },
          prefixCls: N,
          suffix: O && b.createElement('span', { className: `${N}-textarea-suffix` }, E),
          ref: P,
        }),
      ),
    );
  });
  var IO = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z',
          },
        },
      ],
    },
    name: 'double-left',
    theme: 'outlined',
  };
  const PO = IO;
  var Gh = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: PO }));
  };
  Gh.displayName = 'DoubleLeftOutlined';
  const NO = We(Gh);
  var RO = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z',
          },
        },
      ],
    },
    name: 'double-right',
    theme: 'outlined',
  };
  const MO = RO;
  var qh = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: MO }));
  };
  qh.displayName = 'DoubleRightOutlined';
  const AO = We(qh);
  var zo = function (t) {
    var n,
      r = ''.concat(t.rootPrefixCls, '-item'),
      i = he(
        r,
        ''.concat(r, '-').concat(t.page),
        ((n = {}),
        Ie(n, ''.concat(r, '-active'), t.active),
        Ie(n, ''.concat(r, '-disabled'), !t.page),
        Ie(n, t.className, !!t.className),
        n),
      ),
      o = function () {
        t.onClick(t.page);
      },
      l = function (d) {
        t.onKeyPress(d, t.onClick, t.page);
      };
    return be.createElement(
      'li',
      { title: t.showTitle ? t.page : null, className: i, onClick: o, onKeyPress: l, tabIndex: '0' },
      t.itemRender(t.page, 'page', be.createElement('a', { rel: 'nofollow' }, t.page)),
    );
  };
  const Si = {
    ZERO: 48,
    NINE: 57,
    NUMPAD_ZERO: 96,
    NUMPAD_NINE: 105,
    BACKSPACE: 8,
    DELETE: 46,
    ENTER: 13,
    ARROW_UP: 38,
    ARROW_DOWN: 40,
  };
  var Kh = (function (e) {
    li(n, e);
    var t = si(n);
    function n() {
      var r;
      zn(this, n);
      for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
      return (
        (r = t.call.apply(t, [this].concat(o))),
        (r.state = { goInputText: '' }),
        (r.buildOptionText = function (s) {
          return ''.concat(s, ' ').concat(r.props.locale.items_per_page);
        }),
        (r.changeSize = function (s) {
          r.props.changeSize(Number(s));
        }),
        (r.handleChange = function (s) {
          r.setState({ goInputText: s.target.value });
        }),
        (r.handleBlur = function (s) {
          var d = r.props,
            f = d.goButton,
            p = d.quickGo,
            h = d.rootPrefixCls,
            v = r.state.goInputText;
          f ||
            v === '' ||
            (r.setState({ goInputText: '' }),
            !(
              s.relatedTarget &&
              (s.relatedTarget.className.indexOf(''.concat(h, '-item-link')) >= 0 ||
                s.relatedTarget.className.indexOf(''.concat(h, '-item')) >= 0)
            ) && p(r.getValidValue()));
        }),
        (r.go = function (s) {
          var d = r.state.goInputText;
          d !== '' &&
            (s.keyCode === Si.ENTER || s.type === 'click') &&
            (r.setState({ goInputText: '' }), r.props.quickGo(r.getValidValue()));
        }),
        r
      );
    }
    return (
      Ln(n, [
        {
          key: 'getValidValue',
          value: function () {
            var i = this.state.goInputText;
            return !i || isNaN(i) ? void 0 : Number(i);
          },
        },
        {
          key: 'getPageSizeOptions',
          value: function () {
            var i = this.props,
              o = i.pageSize,
              l = i.pageSizeOptions;
            return l.some(function (s) {
              return s.toString() === o.toString();
            })
              ? l
              : l.concat([o.toString()]).sort(function (s, d) {
                  var f = isNaN(Number(s)) ? 0 : Number(s),
                    p = isNaN(Number(d)) ? 0 : Number(d);
                  return f - p;
                });
          },
        },
        {
          key: 'render',
          value: function () {
            var i = this,
              o = this.props,
              l = o.pageSize,
              s = o.locale,
              d = o.rootPrefixCls,
              f = o.changeSize,
              p = o.quickGo,
              h = o.goButton,
              v = o.selectComponentClass,
              x = o.buildOptionText,
              y = o.selectPrefixCls,
              C = o.disabled,
              O = this.state.goInputText,
              E = ''.concat(d, '-options'),
              _ = v,
              P = null,
              N = null,
              j = null;
            if (!f && !p) return null;
            var u = this.getPageSizeOptions();
            if (f && _) {
              var $ = u.map(function (I, M) {
                return be.createElement(_.Option, { key: M, value: I.toString() }, (x || i.buildOptionText)(I));
              });
              P = be.createElement(
                _,
                {
                  disabled: C,
                  prefixCls: y,
                  showSearch: !1,
                  className: ''.concat(E, '-size-changer'),
                  optionLabelProp: 'children',
                  dropdownMatchSelectWidth: !1,
                  value: (l || u[0]).toString(),
                  onChange: this.changeSize,
                  getPopupContainer: function (M) {
                    return M.parentNode;
                  },
                  'aria-label': s.page_size,
                  defaultOpen: !1,
                },
                $,
              );
            }
            return (
              p &&
                (h &&
                  (j =
                    typeof h == 'boolean'
                      ? be.createElement(
                          'button',
                          {
                            type: 'button',
                            onClick: this.go,
                            onKeyUp: this.go,
                            disabled: C,
                            className: ''.concat(E, '-quick-jumper-button'),
                          },
                          s.jump_to_confirm,
                        )
                      : be.createElement('span', { onClick: this.go, onKeyUp: this.go }, h)),
                (N = be.createElement(
                  'div',
                  { className: ''.concat(E, '-quick-jumper') },
                  s.jump_to,
                  be.createElement('input', {
                    disabled: C,
                    type: 'text',
                    value: O,
                    onChange: this.handleChange,
                    onKeyUp: this.go,
                    onBlur: this.handleBlur,
                    'aria-label': s.page,
                  }),
                  s.page,
                  j,
                ))),
              be.createElement('li', { className: ''.concat(E) }, P, N)
            );
          },
        },
      ]),
      n
    );
  })(be.Component);
  Kh.defaultProps = { pageSizeOptions: ['10', '20', '50', '100'] };
  const DO = {
    items_per_page: '条/页',
    jump_to: '跳至',
    jump_to_confirm: '确定',
    page: '页',
    prev_page: '上一页',
    next_page: '下一页',
    prev_5: '向前 5 页',
    next_5: '向后 5 页',
    prev_3: '向前 3 页',
    next_3: '向后 3 页',
    page_size: '页码',
  };
  function Zc() {}
  function Xh(e) {
    var t = Number(e);
    return typeof t == 'number' && !isNaN(t) && isFinite(t) && Math.floor(t) === t;
  }
  function FO(e, t, n) {
    return n;
  }
  function Yr(e, t, n) {
    var r = typeof e > 'u' ? t.pageSize : e;
    return Math.floor((n.total - 1) / r) + 1;
  }
  var Yh = (function (e) {
    li(n, e);
    var t = si(n);
    function n(r) {
      var i;
      zn(this, n),
        (i = t.call(this, r)),
        (i.getJumpPrevPage = function () {
          return Math.max(1, i.state.current - (i.props.showLessItems ? 3 : 5));
        }),
        (i.getJumpNextPage = function () {
          return Math.min(Yr(void 0, i.state, i.props), i.state.current + (i.props.showLessItems ? 3 : 5));
        }),
        (i.getItemIcon = function (f, p) {
          var h = i.props.prefixCls,
            v =
              f ||
              be.createElement('button', { type: 'button', 'aria-label': p, className: ''.concat(h, '-item-link') });
          return typeof f == 'function' && (v = be.createElement(f, G({}, i.props))), v;
        }),
        (i.savePaginationNode = function (f) {
          i.paginationNode = f;
        }),
        (i.isValid = function (f) {
          var p = i.props.total;
          return Xh(f) && f !== i.state.current && Xh(p) && p > 0;
        }),
        (i.shouldDisplayQuickJumper = function () {
          var f = i.props,
            p = f.showQuickJumper,
            h = f.total,
            v = i.state.pageSize;
          return h <= v ? !1 : p;
        }),
        (i.handleKeyDown = function (f) {
          (f.keyCode === Si.ARROW_UP || f.keyCode === Si.ARROW_DOWN) && f.preventDefault();
        }),
        (i.handleKeyUp = function (f) {
          var p = i.getValidValue(f),
            h = i.state.currentInputValue;
          p !== h && i.setState({ currentInputValue: p }),
            f.keyCode === Si.ENTER
              ? i.handleChange(p)
              : f.keyCode === Si.ARROW_UP
              ? i.handleChange(p - 1)
              : f.keyCode === Si.ARROW_DOWN && i.handleChange(p + 1);
        }),
        (i.handleBlur = function (f) {
          var p = i.getValidValue(f);
          i.handleChange(p);
        }),
        (i.changePageSize = function (f) {
          var p = i.state.current,
            h = Yr(f, i.state, i.props);
          (p = p > h ? h : p),
            h === 0 && (p = i.state.current),
            typeof f == 'number' &&
              ('pageSize' in i.props || i.setState({ pageSize: f }),
              'current' in i.props || i.setState({ current: p, currentInputValue: p })),
            i.props.onShowSizeChange(p, f),
            'onChange' in i.props && i.props.onChange && i.props.onChange(p, f);
        }),
        (i.handleChange = function (f) {
          var p = i.props,
            h = p.disabled,
            v = p.onChange,
            x = i.state,
            y = x.pageSize,
            C = x.current,
            O = x.currentInputValue;
          if (i.isValid(f) && !h) {
            var E = Yr(void 0, i.state, i.props),
              _ = f;
            return (
              f > E ? (_ = E) : f < 1 && (_ = 1),
              'current' in i.props || i.setState({ current: _ }),
              _ !== O && i.setState({ currentInputValue: _ }),
              v(_, y),
              _
            );
          }
          return C;
        }),
        (i.prev = function () {
          i.hasPrev() && i.handleChange(i.state.current - 1);
        }),
        (i.next = function () {
          i.hasNext() && i.handleChange(i.state.current + 1);
        }),
        (i.jumpPrev = function () {
          i.handleChange(i.getJumpPrevPage());
        }),
        (i.jumpNext = function () {
          i.handleChange(i.getJumpNextPage());
        }),
        (i.hasPrev = function () {
          return i.state.current > 1;
        }),
        (i.hasNext = function () {
          return i.state.current < Yr(void 0, i.state, i.props);
        }),
        (i.runIfEnter = function (f, p) {
          if (f.key === 'Enter' || f.charCode === 13) {
            for (var h = arguments.length, v = new Array(h > 2 ? h - 2 : 0), x = 2; x < h; x++) v[x - 2] = arguments[x];
            p.apply(void 0, v);
          }
        }),
        (i.runIfEnterPrev = function (f) {
          i.runIfEnter(f, i.prev);
        }),
        (i.runIfEnterNext = function (f) {
          i.runIfEnter(f, i.next);
        }),
        (i.runIfEnterJumpPrev = function (f) {
          i.runIfEnter(f, i.jumpPrev);
        }),
        (i.runIfEnterJumpNext = function (f) {
          i.runIfEnter(f, i.jumpNext);
        }),
        (i.handleGoTO = function (f) {
          (f.keyCode === Si.ENTER || f.type === 'click') && i.handleChange(i.state.currentInputValue);
        });
      var o = r.onChange !== Zc,
        l = 'current' in r;
      l &&
        !o &&
        console.warn(
          'Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.',
        );
      var s = r.defaultCurrent;
      'current' in r && (s = r.current);
      var d = r.defaultPageSize;
      return (
        'pageSize' in r && (d = r.pageSize),
        (s = Math.min(s, Yr(d, void 0, r))),
        (i.state = { current: s, currentInputValue: s, pageSize: d }),
        i
      );
    }
    return (
      Ln(
        n,
        [
          {
            key: 'componentDidUpdate',
            value: function (i, o) {
              var l = this.props.prefixCls;
              if (o.current !== this.state.current && this.paginationNode) {
                var s = this.paginationNode.querySelector('.'.concat(l, '-item-').concat(o.current));
                s && document.activeElement === s && s.blur();
              }
            },
          },
          {
            key: 'getValidValue',
            value: function (i) {
              var o = i.target.value,
                l = Yr(void 0, this.state, this.props),
                s = this.state.currentInputValue,
                d;
              return o === '' ? (d = o) : isNaN(Number(o)) ? (d = s) : o >= l ? (d = l) : (d = Number(o)), d;
            },
          },
          {
            key: 'getShowSizeChanger',
            value: function () {
              var i = this.props,
                o = i.showSizeChanger,
                l = i.total,
                s = i.totalBoundaryShowSizeChanger;
              return typeof o < 'u' ? o : l > s;
            },
          },
          {
            key: 'renderPrev',
            value: function (i) {
              var o = this.props,
                l = o.prevIcon,
                s = o.itemRender,
                d = s(i, 'prev', this.getItemIcon(l, 'prev page')),
                f = !this.hasPrev();
              return Vn(d) ? un(d, { disabled: f }) : d;
            },
          },
          {
            key: 'renderNext',
            value: function (i) {
              var o = this.props,
                l = o.nextIcon,
                s = o.itemRender,
                d = s(i, 'next', this.getItemIcon(l, 'next page')),
                f = !this.hasNext();
              return Vn(d) ? un(d, { disabled: f }) : d;
            },
          },
          {
            key: 'render',
            value: function () {
              var i = this,
                o = this.props,
                l = o.prefixCls,
                s = o.className,
                d = o.style,
                f = o.disabled,
                p = o.hideOnSinglePage,
                h = o.total,
                v = o.locale,
                x = o.showQuickJumper,
                y = o.showLessItems,
                C = o.showTitle,
                O = o.showTotal,
                E = o.simple,
                _ = o.itemRender,
                P = o.showPrevNextJumpers,
                N = o.jumpPrevIcon,
                j = o.jumpNextIcon,
                u = o.selectComponentClass,
                $ = o.selectPrefixCls,
                I = o.pageSizeOptions,
                M = this.state,
                D = M.current,
                B = M.pageSize,
                F = M.currentInputValue;
              if (p === !0 && h <= B) return null;
              var A = Yr(void 0, this.state, this.props),
                z = [],
                V = null,
                U = null,
                X = null,
                Z = null,
                ee = null,
                le = x && x.goButton,
                ce = y ? 1 : 2,
                xe = D - 1 > 0 ? D - 1 : 0,
                Q = D + 1 < A ? D + 1 : A,
                Ce = Object.keys(this.props).reduce(function (ue, de) {
                  return (
                    (de.substr(0, 5) === 'data-' || de.substr(0, 5) === 'aria-' || de === 'role') &&
                      (ue[de] = i.props[de]),
                    ue
                  );
                }, {}),
                Se =
                  O &&
                  be.createElement(
                    'li',
                    { className: ''.concat(l, '-total-text') },
                    O(h, [h === 0 ? 0 : (D - 1) * B + 1, D * B > h ? h : D * B]),
                  );
              if (E)
                return (
                  le &&
                    (typeof le == 'boolean'
                      ? (ee = be.createElement(
                          'button',
                          { type: 'button', onClick: this.handleGoTO, onKeyUp: this.handleGoTO },
                          v.jump_to_confirm,
                        ))
                      : (ee = be.createElement('span', { onClick: this.handleGoTO, onKeyUp: this.handleGoTO }, le)),
                    (ee = be.createElement(
                      'li',
                      {
                        title: C ? ''.concat(v.jump_to).concat(D, '/').concat(A) : null,
                        className: ''.concat(l, '-simple-pager'),
                      },
                      ee,
                    ))),
                  be.createElement(
                    'ul',
                    rt(
                      {
                        className: he(l, ''.concat(l, '-simple'), Ie({}, ''.concat(l, '-disabled'), f), s),
                        style: d,
                        ref: this.savePaginationNode,
                      },
                      Ce,
                    ),
                    Se,
                    be.createElement(
                      'li',
                      {
                        title: C ? v.prev_page : null,
                        onClick: this.prev,
                        tabIndex: this.hasPrev() ? 0 : null,
                        onKeyPress: this.runIfEnterPrev,
                        className: he(''.concat(l, '-prev'), Ie({}, ''.concat(l, '-disabled'), !this.hasPrev())),
                        'aria-disabled': !this.hasPrev(),
                      },
                      this.renderPrev(xe),
                    ),
                    be.createElement(
                      'li',
                      { title: C ? ''.concat(D, '/').concat(A) : null, className: ''.concat(l, '-simple-pager') },
                      be.createElement('input', {
                        type: 'text',
                        value: F,
                        disabled: f,
                        onKeyDown: this.handleKeyDown,
                        onKeyUp: this.handleKeyUp,
                        onChange: this.handleKeyUp,
                        onBlur: this.handleBlur,
                        size: '3',
                      }),
                      be.createElement('span', { className: ''.concat(l, '-slash') }, '/'),
                      A,
                    ),
                    be.createElement(
                      'li',
                      {
                        title: C ? v.next_page : null,
                        onClick: this.next,
                        tabIndex: this.hasPrev() ? 0 : null,
                        onKeyPress: this.runIfEnterNext,
                        className: he(''.concat(l, '-next'), Ie({}, ''.concat(l, '-disabled'), !this.hasNext())),
                        'aria-disabled': !this.hasNext(),
                      },
                      this.renderNext(Q),
                    ),
                    ee,
                  )
                );
              if (A <= 3 + ce * 2) {
                var me = {
                  locale: v,
                  rootPrefixCls: l,
                  onClick: this.handleChange,
                  onKeyPress: this.runIfEnter,
                  showTitle: C,
                  itemRender: _,
                };
                A ||
                  z.push(
                    be.createElement(
                      zo,
                      rt({}, me, { key: 'noPager', page: 1, className: ''.concat(l, '-item-disabled') }),
                    ),
                  );
                for (var se = 1; se <= A; se += 1) {
                  var $e = D === se;
                  z.push(be.createElement(zo, rt({}, me, { key: se, page: se, active: $e })));
                }
              } else {
                var Ee = y ? v.prev_3 : v.prev_5,
                  Me = y ? v.next_3 : v.next_5;
                P &&
                  ((V = be.createElement(
                    'li',
                    {
                      title: C ? Ee : null,
                      key: 'prev',
                      onClick: this.jumpPrev,
                      tabIndex: '0',
                      onKeyPress: this.runIfEnterJumpPrev,
                      className: he(''.concat(l, '-jump-prev'), Ie({}, ''.concat(l, '-jump-prev-custom-icon'), !!N)),
                    },
                    _(this.getJumpPrevPage(), 'jump-prev', this.getItemIcon(N, 'prev page')),
                  )),
                  (U = be.createElement(
                    'li',
                    {
                      title: C ? Me : null,
                      key: 'next',
                      tabIndex: '0',
                      onClick: this.jumpNext,
                      onKeyPress: this.runIfEnterJumpNext,
                      className: he(''.concat(l, '-jump-next'), Ie({}, ''.concat(l, '-jump-next-custom-icon'), !!j)),
                    },
                    _(this.getJumpNextPage(), 'jump-next', this.getItemIcon(j, 'next page')),
                  ))),
                  (Z = be.createElement(zo, {
                    locale: v,
                    last: !0,
                    rootPrefixCls: l,
                    onClick: this.handleChange,
                    onKeyPress: this.runIfEnter,
                    key: A,
                    page: A,
                    active: !1,
                    showTitle: C,
                    itemRender: _,
                  })),
                  (X = be.createElement(zo, {
                    locale: v,
                    rootPrefixCls: l,
                    onClick: this.handleChange,
                    onKeyPress: this.runIfEnter,
                    key: 1,
                    page: 1,
                    active: !1,
                    showTitle: C,
                    itemRender: _,
                  }));
                var Le = Math.max(1, D - ce),
                  Re = Math.min(D + ce, A);
                D - 1 <= ce && (Re = 1 + ce * 2), A - D <= ce && (Le = A - ce * 2);
                for (var ne = Le; ne <= Re; ne += 1) {
                  var Te = D === ne;
                  z.push(
                    be.createElement(zo, {
                      locale: v,
                      rootPrefixCls: l,
                      onClick: this.handleChange,
                      onKeyPress: this.runIfEnter,
                      key: ne,
                      page: ne,
                      active: Te,
                      showTitle: C,
                      itemRender: _,
                    }),
                  );
                }
                D - 1 >= ce * 2 &&
                  D !== 1 + 2 &&
                  ((z[0] = un(z[0], { className: ''.concat(l, '-item-after-jump-prev') })), z.unshift(V)),
                  A - D >= ce * 2 &&
                    D !== A - 2 &&
                    ((z[z.length - 1] = un(z[z.length - 1], { className: ''.concat(l, '-item-before-jump-next') })),
                    z.push(U)),
                  Le !== 1 && z.unshift(X),
                  Re !== A && z.push(Z);
              }
              var He = !this.hasPrev() || !A,
                oe = !this.hasNext() || !A;
              return be.createElement(
                'ul',
                rt(
                  { className: he(l, s, Ie({}, ''.concat(l, '-disabled'), f)), style: d, ref: this.savePaginationNode },
                  Ce,
                ),
                Se,
                be.createElement(
                  'li',
                  {
                    title: C ? v.prev_page : null,
                    onClick: this.prev,
                    tabIndex: He ? null : 0,
                    onKeyPress: this.runIfEnterPrev,
                    className: he(''.concat(l, '-prev'), Ie({}, ''.concat(l, '-disabled'), He)),
                    'aria-disabled': He,
                  },
                  this.renderPrev(xe),
                ),
                z,
                be.createElement(
                  'li',
                  {
                    title: C ? v.next_page : null,
                    onClick: this.next,
                    tabIndex: oe ? null : 0,
                    onKeyPress: this.runIfEnterNext,
                    className: he(''.concat(l, '-next'), Ie({}, ''.concat(l, '-disabled'), oe)),
                    'aria-disabled': oe,
                  },
                  this.renderNext(Q),
                ),
                be.createElement(Kh, {
                  disabled: f,
                  locale: v,
                  rootPrefixCls: l,
                  selectComponentClass: u,
                  selectPrefixCls: $,
                  changeSize: this.getShowSizeChanger() ? this.changePageSize : null,
                  current: D,
                  pageSize: B,
                  pageSizeOptions: I,
                  quickGo: this.shouldDisplayQuickJumper() ? this.handleChange : null,
                  goButton: le,
                }),
              );
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function (i, o) {
              var l = {};
              if (
                ('current' in i &&
                  ((l.current = i.current), i.current !== o.current && (l.currentInputValue = l.current)),
                'pageSize' in i && i.pageSize !== o.pageSize)
              ) {
                var s = o.current,
                  d = Yr(i.pageSize, o, i);
                (s = s > d ? d : s),
                  'current' in i || ((l.current = s), (l.currentInputValue = s)),
                  (l.pageSize = i.pageSize);
              }
              return l;
            },
          },
        ],
      ),
      n
    );
  })(be.Component);
  Yh.defaultProps = {
    defaultCurrent: 1,
    total: 0,
    defaultPageSize: 10,
    onChange: Zc,
    className: '',
    selectPrefixCls: 'rc-select',
    prefixCls: 'rc-pagination',
    selectComponentClass: null,
    hideOnSinglePage: !1,
    showPrevNextJumpers: !0,
    showQuickJumper: !1,
    showLessItems: !1,
    showTitle: !0,
    onShowSizeChange: Zc,
    locale: DO,
    style: {},
    itemRender: FO,
    totalBoundaryShowSizeChanger: 50,
  };
  const Qh = (e) => b.createElement(hl, Object.assign({}, e, { size: 'small' })),
    Jh = (e) => b.createElement(hl, Object.assign({}, e, { size: 'middle' }));
  (Qh.Option = hl.Option), (Jh.Option = hl.Option);
  const jO = (e) => {
      const { componentCls: t } = e;
      return {
        [`${t}-disabled`]: {
          '&, &:hover': {
            cursor: 'not-allowed',
            [`${t}-item-link`]: { color: e.colorTextDisabled, cursor: 'not-allowed' },
          },
          '&:focus-visible': {
            cursor: 'not-allowed',
            [`${t}-item-link`]: { color: e.colorTextDisabled, cursor: 'not-allowed' },
          },
        },
        [`&${t}-disabled`]: {
          cursor: 'not-allowed',
          [`${t}-item`]: {
            cursor: 'not-allowed',
            '&:hover, &:active': { backgroundColor: 'transparent' },
            a: { color: e.colorTextDisabled, backgroundColor: 'transparent', border: 'none', cursor: 'not-allowed' },
            '&-active': {
              borderColor: e.colorBorder,
              backgroundColor: e.paginationItemDisabledBgActive,
              '&:hover, &:active': { backgroundColor: e.paginationItemDisabledBgActive },
              a: { color: e.paginationItemDisabledColorActive },
            },
          },
          [`${t}-item-link`]: {
            color: e.colorTextDisabled,
            cursor: 'not-allowed',
            '&:hover, &:active': { backgroundColor: 'transparent' },
            [`${t}-simple&`]: { backgroundColor: 'transparent' },
          },
          [`${t}-item-link-icon`]: { opacity: 0 },
          [`${t}-item-ellipsis`]: { opacity: 1 },
          [`${t}-simple-pager`]: { color: e.colorTextDisabled },
        },
      };
    },
    zO = (e) => {
      const { componentCls: t } = e;
      return {
        [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
          height: e.paginationItemSizeSM,
          lineHeight: `${e.paginationItemSizeSM}px`,
        },
        [`&${t}-mini ${t}-item`]: {
          minWidth: e.paginationItemSizeSM,
          height: e.paginationItemSizeSM,
          margin: 0,
          lineHeight: `${e.paginationItemSizeSM - 2}px`,
        },
        [`&${t}-mini ${t}-item:not(${t}-item-active)`]: { backgroundColor: 'transparent', borderColor: 'transparent' },
        [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
          minWidth: e.paginationItemSizeSM,
          height: e.paginationItemSizeSM,
          margin: 0,
          lineHeight: `${e.paginationItemSizeSM}px`,
        },
        [`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          '&::after': { height: e.paginationItemSizeSM, lineHeight: `${e.paginationItemSizeSM}px` },
        },
        [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
          height: e.paginationItemSizeSM,
          marginInlineEnd: 0,
          lineHeight: `${e.paginationItemSizeSM}px`,
        },
        [`&${t}-mini ${t}-options`]: {
          marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
          ['&-size-changer']: { top: e.paginationMiniOptionsSizeChangerTop },
          ['&-quick-jumper']: {
            height: e.paginationItemSizeSM,
            lineHeight: `${e.paginationItemSizeSM}px`,
            input: Object.assign(Object.assign({}, kc(e)), {
              width: e.paginationMiniQuickJumperInputWidth,
              height: e.controlHeightSM,
            }),
          },
        },
      };
    },
    LO = (e) => {
      const { componentCls: t } = e;
      return {
        [`
    &${t}-simple ${t}-prev,
    &${t}-simple ${t}-next
    `]: {
          height: e.paginationItemSizeSM,
          lineHeight: `${e.paginationItemSizeSM}px`,
          verticalAlign: 'top',
          [`${t}-item-link`]: {
            height: e.paginationItemSizeSM,
            backgroundColor: 'transparent',
            border: 0,
            '&::after': { height: e.paginationItemSizeSM, lineHeight: `${e.paginationItemSizeSM}px` },
          },
        },
        [`&${t}-simple ${t}-simple-pager`]: {
          display: 'inline-block',
          height: e.paginationItemSizeSM,
          marginInlineEnd: e.marginXS,
          input: {
            boxSizing: 'border-box',
            height: '100%',
            marginInlineEnd: e.marginXS,
            padding: `0 ${e.paginationItemPaddingInline}px`,
            textAlign: 'center',
            backgroundColor: e.paginationItemInputBg,
            border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
            borderRadius: e.borderRadius,
            outline: 'none',
            transition: `border-color ${e.motionDurationMid}`,
            color: 'inherit',
            '&:hover': { borderColor: e.colorPrimary },
            '&:focus': {
              borderColor: e.colorPrimaryHover,
              boxShadow: `${e.inputOutlineOffset}px 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
            },
            '&[disabled]': {
              color: e.colorTextDisabled,
              backgroundColor: e.colorBgContainerDisabled,
              borderColor: e.colorBorder,
              cursor: 'not-allowed',
            },
          },
        },
      };
    },
    HO = (e) => {
      const { componentCls: t } = e;
      return {
        [`${t}-jump-prev, ${t}-jump-next`]: {
          outline: 0,
          [`${t}-item-container`]: {
            position: 'relative',
            [`${t}-item-link-icon`]: {
              color: e.colorPrimary,
              fontSize: e.fontSizeSM,
              opacity: 0,
              transition: `all ${e.motionDurationMid}`,
              '&-svg': { top: 0, insetInlineEnd: 0, bottom: 0, insetInlineStart: 0, margin: 'auto' },
            },
            [`${t}-item-ellipsis`]: {
              position: 'absolute',
              top: 0,
              insetInlineEnd: 0,
              bottom: 0,
              insetInlineStart: 0,
              display: 'block',
              margin: 'auto',
              color: e.colorTextDisabled,
              fontFamily: 'Arial, Helvetica, sans-serif',
              letterSpacing: e.paginationEllipsisLetterSpacing,
              textAlign: 'center',
              textIndent: e.paginationEllipsisTextIndent,
              opacity: 1,
              transition: `all ${e.motionDurationMid}`,
            },
          },
          '&:hover': { [`${t}-item-link-icon`]: { opacity: 1 }, [`${t}-item-ellipsis`]: { opacity: 0 } },
          '&:focus-visible': Object.assign(
            { [`${t}-item-link-icon`]: { opacity: 1 }, [`${t}-item-ellipsis`]: { opacity: 0 } },
            Us(e),
          ),
        },
        [`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: { marginInlineEnd: e.marginXS },
        [`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
          display: 'inline-block',
          minWidth: e.paginationItemSize,
          height: e.paginationItemSize,
          color: e.colorText,
          fontFamily: e.paginationFontFamily,
          lineHeight: `${e.paginationItemSize}px`,
          textAlign: 'center',
          verticalAlign: 'middle',
          listStyle: 'none',
          borderRadius: e.borderRadius,
          cursor: 'pointer',
          transition: `all ${e.motionDurationMid}`,
        },
        [`${t}-prev, ${t}-next`]: {
          fontFamily: 'Arial, Helvetica, sans-serif',
          outline: 0,
          button: { color: e.colorText, cursor: 'pointer', userSelect: 'none' },
          [`${t}-item-link`]: {
            display: 'block',
            width: '100%',
            height: '100%',
            padding: 0,
            fontSize: e.fontSizeSM,
            textAlign: 'center',
            backgroundColor: 'transparent',
            border: `${e.lineWidth}px ${e.lineType} transparent`,
            borderRadius: e.borderRadius,
            outline: 'none',
            transition: `border ${e.motionDurationMid}`,
          },
          [`&:focus-visible ${t}-item-link`]: Object.assign({}, Us(e)),
          [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
          [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
          [`&${t}-disabled:hover`]: { [`${t}-item-link`]: { backgroundColor: 'transparent' } },
        },
        [`${t}-slash`]: {
          marginInlineEnd: e.paginationSlashMarginInlineEnd,
          marginInlineStart: e.paginationSlashMarginInlineStart,
        },
        [`${t}-options`]: {
          display: 'inline-block',
          marginInlineStart: e.margin,
          verticalAlign: 'middle',
          '&-size-changer.-select': { display: 'inline-block', width: 'auto' },
          '&-quick-jumper': {
            display: 'inline-block',
            height: e.controlHeight,
            marginInlineStart: e.marginXS,
            lineHeight: `${e.controlHeight}px`,
            verticalAlign: 'top',
            input: Object.assign(Object.assign({}, Vc(e)), {
              width: e.controlHeightLG * 1.25,
              height: e.controlHeight,
              boxSizing: 'border-box',
              margin: 0,
              marginInlineStart: e.marginXS,
              marginInlineEnd: e.marginXS,
            }),
          },
        },
      };
    },
    BO = (e) => {
      const { componentCls: t } = e;
      return {
        [`${t}-item`]: Object.assign(
          Object.assign(
            {
              display: 'inline-block',
              minWidth: e.paginationItemSize,
              height: e.paginationItemSize,
              marginInlineEnd: e.marginXS,
              fontFamily: e.paginationFontFamily,
              lineHeight: `${e.paginationItemSize - 2}px`,
              textAlign: 'center',
              verticalAlign: 'middle',
              listStyle: 'none',
              backgroundColor: 'transparent',
              border: `${e.lineWidth}px ${e.lineType} transparent`,
              borderRadius: e.borderRadius,
              outline: 0,
              cursor: 'pointer',
              userSelect: 'none',
              a: {
                display: 'block',
                padding: `0 ${e.paginationItemPaddingInline}px`,
                color: e.colorText,
                transition: 'none',
                '&:hover': { textDecoration: 'none' },
              },
              [`&:not(${t}-item-active)`]: {
                '&:hover': { transition: `all ${e.motionDurationMid}`, backgroundColor: e.colorBgTextHover },
                '&:active': { backgroundColor: e.colorBgTextActive },
              },
            },
            Gs(e),
          ),
          {
            '&-active': {
              fontWeight: e.paginationFontWeightActive,
              backgroundColor: e.paginationItemBgActive,
              borderColor: e.colorPrimary,
              a: { color: e.colorPrimary },
              '&:hover': { borderColor: e.colorPrimaryHover },
              '&:hover a': { color: e.colorPrimaryHover },
            },
          },
        ),
      };
    },
    kO = (e) => {
      const { componentCls: t } = e;
      return {
        [t]: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(Object.assign({}, ir(e)), {
                      'ul, ol': { margin: 0, padding: 0, listStyle: 'none' },
                      '&::after': {
                        display: 'block',
                        clear: 'both',
                        height: 0,
                        overflow: 'hidden',
                        visibility: 'hidden',
                        content: '""',
                      },
                      [`${t}-total-text`]: {
                        display: 'inline-block',
                        height: e.paginationItemSize,
                        marginInlineEnd: e.marginXS,
                        lineHeight: `${e.paginationItemSize - 2}px`,
                        verticalAlign: 'middle',
                      },
                    }),
                    BO(e),
                  ),
                  HO(e),
                ),
                LO(e),
              ),
              zO(e),
            ),
            jO(e),
          ),
          {
            [`@media only screen and (max-width: ${e.screenLG}px)`]: {
              [`${t}-item`]: { '&-after-jump-prev, &-before-jump-next': { display: 'none' } },
            },
            [`@media only screen and (max-width: ${e.screenSM}px)`]: { [`${t}-options`]: { display: 'none' } },
          },
        ),
        [`&${e.componentCls}-rtl`]: { direction: 'rtl' },
      };
    },
    VO = (e) => {
      const { componentCls: t } = e;
      return {
        [`${t}${t}-disabled`]: {
          '&, &:hover': { [`${t}-item-link`]: { borderColor: e.colorBorder } },
          '&:focus-visible': { [`${t}-item-link`]: { borderColor: e.colorBorder } },
          [`${t}-item, ${t}-item-link`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            [`&:hover:not(${t}-item-active)`]: {
              backgroundColor: e.colorBgContainerDisabled,
              borderColor: e.colorBorder,
              a: { color: e.colorTextDisabled },
            },
            [`&${t}-item-active`]: { backgroundColor: e.paginationItemDisabledBgActive },
          },
          [`${t}-prev, ${t}-next`]: {
            '&:hover button': {
              backgroundColor: e.colorBgContainerDisabled,
              borderColor: e.colorBorder,
              color: e.colorTextDisabled,
            },
            [`${t}-item-link`]: { backgroundColor: e.colorBgContainerDisabled, borderColor: e.colorBorder },
          },
        },
        [t]: {
          [`${t}-prev, ${t}-next`]: {
            '&:hover button': { borderColor: e.colorPrimaryHover, backgroundColor: e.paginationItemBg },
            [`${t}-item-link`]: { backgroundColor: e.paginationItemLinkBg, borderColor: e.colorBorder },
            [`&:hover ${t}-item-link`]: {
              borderColor: e.colorPrimary,
              backgroundColor: e.paginationItemBg,
              color: e.colorPrimary,
            },
            [`&${t}-disabled`]: { [`${t}-item-link`]: { borderColor: e.colorBorder, color: e.colorTextDisabled } },
          },
          [`${t}-item`]: {
            backgroundColor: e.paginationItemBg,
            border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
            [`&:hover:not(${t}-item-active)`]: {
              borderColor: e.colorPrimary,
              backgroundColor: e.paginationItemBg,
              a: { color: e.colorPrimary },
            },
            '&-active': { borderColor: e.colorPrimary },
          },
        },
      };
    },
    WO = On('Pagination', (e) => {
      const t = jt(
        e,
        {
          paginationItemSize: e.controlHeight,
          paginationFontFamily: e.fontFamily,
          paginationItemBg: e.colorBgContainer,
          paginationItemBgActive: e.colorBgContainer,
          paginationFontWeightActive: e.fontWeightStrong,
          paginationItemSizeSM: e.controlHeightSM,
          paginationItemInputBg: e.colorBgContainer,
          paginationMiniOptionsSizeChangerTop: 0,
          paginationItemDisabledBgActive: e.controlItemBgActiveDisabled,
          paginationItemDisabledColorActive: e.colorTextDisabled,
          paginationItemLinkBg: e.colorBgContainer,
          inputOutlineOffset: '0 0',
          paginationMiniOptionsMarginInlineStart: e.marginXXS / 2,
          paginationMiniQuickJumperInputWidth: e.controlHeightLG * 1.1,
          paginationItemPaddingInline: e.marginXXS * 1.5,
          paginationEllipsisLetterSpacing: e.marginXXS / 2,
          paginationSlashMarginInlineStart: e.marginXXS,
          paginationSlashMarginInlineEnd: e.marginSM,
          paginationEllipsisTextIndent: '0.13em',
        },
        Wc(e),
      );
      return [kO(t), e.wireframe && VO(t)];
    });
  var UO =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const GO = (e) => {
      var {
          prefixCls: t,
          selectPrefixCls: n,
          className: r,
          rootClassName: i,
          size: o,
          locale: l,
          selectComponentClass: s,
          responsive: d,
          showSizeChanger: f,
        } = e,
        p = UO(e, [
          'prefixCls',
          'selectPrefixCls',
          'className',
          'rootClassName',
          'size',
          'locale',
          'selectComponentClass',
          'responsive',
          'showSizeChanger',
        ]);
      const { xs: h } = bh(d),
        { getPrefixCls: v, direction: x, pagination: y = {} } = je(xt),
        C = v('pagination', t),
        [O, E] = WO(C),
        _ = f ?? y.showSizeChanger,
        P = () => {
          const M = b.createElement('span', { className: `${C}-item-ellipsis` }, '•••');
          let D = b.createElement(
              'button',
              { className: `${C}-item-link`, type: 'button', tabIndex: -1 },
              b.createElement(P$, null),
            ),
            B = b.createElement(
              'button',
              { className: `${C}-item-link`, type: 'button', tabIndex: -1 },
              b.createElement(_$, null),
            ),
            F = b.createElement(
              'a',
              { className: `${C}-item-link` },
              b.createElement(
                'div',
                { className: `${C}-item-container` },
                b.createElement(NO, { className: `${C}-item-link-icon` }),
                M,
              ),
            ),
            A = b.createElement(
              'a',
              { className: `${C}-item-link` },
              b.createElement(
                'div',
                { className: `${C}-item-container` },
                b.createElement(AO, { className: `${C}-item-link-icon` }),
                M,
              ),
            );
          return (
            x === 'rtl' && (([D, B] = [B, D]), ([F, A] = [A, F])),
            { prevIcon: D, nextIcon: B, jumpPrevIcon: F, jumpNextIcon: A }
          );
        },
        [N] = Zi('Pagination', xf),
        j = Object.assign(Object.assign({}, N), l),
        u = o === 'small' || !!(h && !o && d),
        $ = v('select', n),
        I = he({ [`${C}-mini`]: u, [`${C}-rtl`]: x === 'rtl' }, r, i, E);
      return O(
        b.createElement(
          Yh,
          Object.assign({}, P(), p, {
            prefixCls: C,
            selectPrefixCls: $,
            className: I,
            selectComponentClass: s || (u ? Qh : Jh),
            locale: j,
            showSizeChanger: _,
          }),
        ),
      );
    },
    qO = new St('antSpinMove', { to: { opacity: 1 } }),
    KO = new St('antRotate', { to: { transform: 'rotate(405deg)' } }),
    XO = (e) => ({
      [`${e.componentCls}`]: Object.assign(Object.assign({}, ir(e)), {
        position: 'absolute',
        display: 'none',
        color: e.colorPrimary,
        textAlign: 'center',
        verticalAlign: 'middle',
        opacity: 0,
        transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
        '&-spinning': { position: 'static', display: 'inline-block', opacity: 1 },
        '&-nested-loading': {
          position: 'relative',
          [`> div > ${e.componentCls}`]: {
            position: 'absolute',
            top: 0,
            insetInlineStart: 0,
            zIndex: 4,
            display: 'block',
            width: '100%',
            height: '100%',
            maxHeight: e.contentHeight,
            [`${e.componentCls}-dot`]: {
              position: 'absolute',
              top: '50%',
              insetInlineStart: '50%',
              margin: -e.spinDotSize / 2,
            },
            [`${e.componentCls}-text`]: {
              position: 'absolute',
              top: '50%',
              width: '100%',
              paddingTop: (e.spinDotSize - e.fontSize) / 2 + 2,
              textShadow: `0 1px 2px ${e.colorBgContainer}`,
            },
            [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: { marginTop: -(e.spinDotSize / 2) - 10 },
            '&-sm': {
              [`${e.componentCls}-dot`]: { margin: -e.spinDotSizeSM / 2 },
              [`${e.componentCls}-text`]: { paddingTop: (e.spinDotSizeSM - e.fontSize) / 2 + 2 },
              [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: { marginTop: -(e.spinDotSizeSM / 2) - 10 },
            },
            '&-lg': {
              [`${e.componentCls}-dot`]: { margin: -(e.spinDotSizeLG / 2) },
              [`${e.componentCls}-text`]: { paddingTop: (e.spinDotSizeLG - e.fontSize) / 2 + 2 },
              [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: { marginTop: -(e.spinDotSizeLG / 2) - 10 },
            },
          },
          [`${e.componentCls}-container`]: {
            position: 'relative',
            transition: `opacity ${e.motionDurationSlow}`,
            '&::after': {
              position: 'absolute',
              top: 0,
              insetInlineEnd: 0,
              bottom: 0,
              insetInlineStart: 0,
              zIndex: 10,
              width: '100%',
              height: '100%',
              background: e.colorBgContainer,
              opacity: 0,
              transition: `all ${e.motionDurationSlow}`,
              content: '""',
              pointerEvents: 'none',
            },
          },
          [`${e.componentCls}-blur`]: {
            clear: 'both',
            opacity: 0.5,
            userSelect: 'none',
            pointerEvents: 'none',
            ['&::after']: { opacity: 0.4, pointerEvents: 'auto' },
          },
        },
        ['&-tip']: { color: e.spinDotDefault },
        [`${e.componentCls}-dot`]: {
          position: 'relative',
          display: 'inline-block',
          fontSize: e.spinDotSize,
          width: '1em',
          height: '1em',
          '&-item': {
            position: 'absolute',
            display: 'block',
            width: (e.spinDotSize - e.marginXXS / 2) / 2,
            height: (e.spinDotSize - e.marginXXS / 2) / 2,
            backgroundColor: e.colorPrimary,
            borderRadius: '100%',
            transform: 'scale(0.75)',
            transformOrigin: '50% 50%',
            opacity: 0.3,
            animationName: qO,
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            animationDirection: 'alternate',
            '&:nth-child(1)': { top: 0, insetInlineStart: 0 },
            '&:nth-child(2)': { top: 0, insetInlineEnd: 0, animationDelay: '0.4s' },
            '&:nth-child(3)': { insetInlineEnd: 0, bottom: 0, animationDelay: '0.8s' },
            '&:nth-child(4)': { bottom: 0, insetInlineStart: 0, animationDelay: '1.2s' },
          },
          '&-spin': {
            transform: 'rotate(45deg)',
            animationName: KO,
            animationDuration: '1.2s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          },
        },
        [`&-sm ${e.componentCls}-dot`]: {
          fontSize: e.spinDotSizeSM,
          i: { width: (e.spinDotSizeSM - e.marginXXS / 2) / 2, height: (e.spinDotSizeSM - e.marginXXS / 2) / 2 },
        },
        [`&-lg ${e.componentCls}-dot`]: {
          fontSize: e.spinDotSizeLG,
          i: { width: (e.spinDotSizeLG - e.marginXXS) / 2, height: (e.spinDotSizeLG - e.marginXXS) / 2 },
        },
        [`&${e.componentCls}-show-text ${e.componentCls}-text`]: { display: 'block' },
      }),
    }),
    YO = On(
      'Spin',
      (e) => {
        const t = jt(e, {
          spinDotDefault: e.colorTextDescription,
          spinDotSize: e.controlHeightLG / 2,
          spinDotSizeSM: e.controlHeightLG * 0.35,
          spinDotSizeLG: e.controlHeight,
        });
        return [XO(t)];
      },
      { contentHeight: 400 },
    );
  var QO =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  let bl = null;
  function JO(e, t) {
    const { indicator: n } = t,
      r = `${e}-dot`;
    return n === null
      ? null
      : No(n)
      ? Gr(n, { className: he(n.props.className, r) })
      : No(bl)
      ? Gr(bl, { className: he(bl.props.className, r) })
      : b.createElement(
          'span',
          { className: he(r, `${e}-dot-spin`) },
          b.createElement('i', { className: `${e}-dot-item` }),
          b.createElement('i', { className: `${e}-dot-item` }),
          b.createElement('i', { className: `${e}-dot-item` }),
          b.createElement('i', { className: `${e}-dot-item` }),
        );
  }
  function ZO(e, t) {
    return !!e && !!t && !isNaN(Number(t));
  }
  const e2 = (e) => {
      const {
          spinPrefixCls: t,
          spinning: n = !0,
          delay: r = 0,
          className: i,
          rootClassName: o,
          size: l = 'default',
          tip: s,
          wrapperClassName: d,
          style: f,
          children: p,
          hashId: h,
        } = e,
        v = QO(e, [
          'spinPrefixCls',
          'spinning',
          'delay',
          'className',
          'rootClassName',
          'size',
          'tip',
          'wrapperClassName',
          'style',
          'children',
          'hashId',
        ]),
        [x, y] = we(() => n && !ZO(n, r));
      Fe(() => {
        if (n) {
          const j = U$(r, () => {
            y(!0);
          });
          return (
            j(),
            () => {
              var u;
              (u = j == null ? void 0 : j.cancel) === null || u === void 0 || u.call(j);
            }
          );
        }
        y(!1);
      }, [r, n]);
      const C = De(() => typeof p < 'u', [p]),
        { direction: O } = je(xt),
        E = he(
          t,
          {
            [`${t}-sm`]: l === 'small',
            [`${t}-lg`]: l === 'large',
            [`${t}-spinning`]: x,
            [`${t}-show-text`]: !!s,
            [`${t}-rtl`]: O === 'rtl',
          },
          i,
          o,
          h,
        ),
        _ = he(`${t}-container`, { [`${t}-blur`]: x }),
        P = ji(v, ['indicator', 'prefixCls']),
        N = b.createElement(
          'div',
          Object.assign({}, P, { style: f, className: E, 'aria-live': 'polite', 'aria-busy': x }),
          JO(t, e),
          s ? b.createElement('div', { className: `${t}-text` }, s) : null,
        );
      return C
        ? b.createElement(
            'div',
            Object.assign({}, P, { className: he(`${t}-nested-loading`, d, h) }),
            x && b.createElement('div', { key: 'loading' }, N),
            b.createElement('div', { className: _, key: 'container' }, p),
          )
        : N;
    },
    Zh = (e) => {
      const { prefixCls: t } = e,
        { getPrefixCls: n } = je(xt),
        r = n('spin', t),
        [i, o] = YO(r),
        l = Object.assign(Object.assign({}, e), { spinPrefixCls: r, hashId: o });
      return i(b.createElement(e2, Object.assign({}, l)));
    };
  Zh.setDefaultIndicator = (e) => {
    bl = e;
  };
  const t2 = Zh;
  function n2() {
    const e = Object.assign({}, arguments.length <= 0 ? void 0 : arguments[0]);
    for (let t = 1; t < arguments.length; t++) {
      const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      n &&
        Object.keys(n).forEach((r) => {
          const i = n[r];
          i !== void 0 && (e[r] = i);
        });
    }
    return e;
  }
  var em =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const r2 = (e) => {
      var { prefixCls: t, className: n, avatar: r, title: i, description: o } = e,
        l = em(e, ['prefixCls', 'className', 'avatar', 'title', 'description']);
      const { getPrefixCls: s } = je(xt),
        d = s('list', t),
        f = he(`${d}-item-meta`, n),
        p = be.createElement(
          'div',
          { className: `${d}-item-meta-content` },
          i && be.createElement('h4', { className: `${d}-item-meta-title` }, i),
          o && be.createElement('div', { className: `${d}-item-meta-description` }, o),
        );
      return be.createElement(
        'div',
        Object.assign({}, l, { className: f }),
        r && be.createElement('div', { className: `${d}-item-meta-avatar` }, r),
        (i || o) && p,
      );
    },
    tm = We((e, t) => {
      var { prefixCls: n, children: r, actions: i, extra: o, className: l, colStyle: s } = e,
        d = em(e, ['prefixCls', 'children', 'actions', 'extra', 'className', 'colStyle']);
      const { grid: f, itemLayout: p } = je(eu),
        { getPrefixCls: h } = je(xt),
        v = () => {
          let _;
          return (
            ui.forEach(r, (P) => {
              typeof P == 'string' && (_ = !0);
            }),
            _ && ui.count(r) > 1
          );
        },
        x = () => (p === 'vertical' ? !!o : !v()),
        y = h('list', n),
        C =
          i &&
          i.length > 0 &&
          be.createElement(
            'ul',
            { className: `${y}-item-action`, key: 'actions' },
            i.map((_, P) =>
              be.createElement(
                'li',
                { key: `${y}-item-action-${P}` },
                _,
                P !== i.length - 1 && be.createElement('em', { className: `${y}-item-action-split` }),
              ),
            ),
          ),
        O = f ? 'div' : 'li',
        E = be.createElement(
          O,
          Object.assign({}, d, f ? {} : { ref: t }, { className: he(`${y}-item`, { [`${y}-item-no-flex`]: !x() }, l) }),
          p === 'vertical' && o
            ? [
                be.createElement('div', { className: `${y}-item-main`, key: 'content' }, r, C),
                be.createElement('div', { className: `${y}-item-extra`, key: 'extra' }, o),
              ]
            : [r, C, Gr(o, { key: 'extra' })],
        );
      return f ? be.createElement(tO, { ref: t, flex: 1, style: s }, E) : E;
    });
  tm.Meta = r2;
  const i2 = tm,
    o2 = (e) => {
      const {
        listBorderedCls: t,
        componentCls: n,
        paddingLG: r,
        margin: i,
        padding: o,
        listItemPaddingSM: l,
        marginLG: s,
        borderRadiusLG: d,
      } = e;
      return {
        [`${t}`]: {
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: d,
          [`${n}-header,${n}-footer,${n}-item`]: { paddingInline: r },
          [`${n}-pagination`]: { margin: `${i}px ${s}px` },
        },
        [`${t}${n}-sm`]: { [`${n}-item,${n}-header,${n}-footer`]: { padding: l } },
        [`${t}${n}-lg`]: { [`${n}-item,${n}-header,${n}-footer`]: { padding: `${o}px ${r}px` } },
      };
    },
    a2 = (e) => {
      const { componentCls: t, screenSM: n, screenMD: r, marginLG: i, marginSM: o, margin: l } = e;
      return {
        [`@media screen and (max-width:${r})`]: {
          [`${t}`]: { [`${t}-item`]: { [`${t}-item-action`]: { marginInlineStart: i } } },
          [`${t}-vertical`]: { [`${t}-item`]: { [`${t}-item-extra`]: { marginInlineStart: i } } },
        },
        [`@media screen and (max-width: ${n})`]: {
          [`${t}`]: { [`${t}-item`]: { flexWrap: 'wrap', [`${t}-action`]: { marginInlineStart: o } } },
          [`${t}-vertical`]: {
            [`${t}-item`]: {
              flexWrap: 'wrap-reverse',
              [`${t}-item-main`]: { minWidth: e.contentWidth },
              [`${t}-item-extra`]: { margin: `auto auto ${l}px` },
            },
          },
        },
      };
    },
    l2 = (e) => {
      const {
          componentCls: t,
          antCls: n,
          controlHeight: r,
          minHeight: i,
          paddingSM: o,
          marginLG: l,
          padding: s,
          listItemPadding: d,
          colorPrimary: f,
          listItemPaddingSM: p,
          listItemPaddingLG: h,
          paddingXS: v,
          margin: x,
          colorText: y,
          colorTextDescription: C,
          motionDurationSlow: O,
          lineWidth: E,
        } = e,
        _ = {};
      return (
        ['start', 'center', 'end'].forEach((P) => {
          _[`&-align-${P}`] = { textAlign: P };
        }),
        {
          [`${t}`]: Object.assign(Object.assign({}, ir(e)), {
            position: 'relative',
            '*': { outline: 'none' },
            [`${t}-header, ${t}-footer`]: { background: 'transparent', paddingBlock: o },
            [`${t}-pagination`]: Object.assign(Object.assign({ marginBlockStart: l }, _), {
              [`${n}-pagination-options`]: { textAlign: 'start' },
            }),
            [`${t}-spin`]: { minHeight: i, textAlign: 'center' },
            [`${t}-items`]: { margin: 0, padding: 0, listStyle: 'none' },
            [`${t}-item`]: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: d,
              color: y,
              [`${t}-item-meta`]: {
                display: 'flex',
                flex: 1,
                alignItems: 'flex-start',
                maxWidth: '100%',
                [`${t}-item-meta-avatar`]: { marginInlineEnd: s },
                [`${t}-item-meta-content`]: { flex: '1 0', width: 0, color: y },
                [`${t}-item-meta-title`]: {
                  marginBottom: e.marginXXS,
                  color: y,
                  fontSize: e.fontSize,
                  lineHeight: e.lineHeight,
                  '> a': { color: y, transition: `all ${O}`, ['&:hover']: { color: f } },
                },
                [`${t}-item-meta-description`]: { color: C, fontSize: e.fontSize, lineHeight: e.lineHeight },
              },
              [`${t}-item-action`]: {
                flex: '0 0 auto',
                marginInlineStart: e.marginXXL,
                padding: 0,
                fontSize: 0,
                listStyle: 'none',
                ['& > li']: {
                  position: 'relative',
                  display: 'inline-block',
                  padding: `0 ${v}px`,
                  color: C,
                  fontSize: e.fontSize,
                  lineHeight: e.lineHeight,
                  textAlign: 'center',
                  ['&:first-child']: { paddingInlineStart: 0 },
                },
                [`${t}-item-action-split`]: {
                  position: 'absolute',
                  insetBlockStart: '50%',
                  insetInlineEnd: 0,
                  width: E,
                  height: Math.ceil(e.fontSize * e.lineHeight) - e.marginXXS * 2,
                  transform: 'translateY(-50%)',
                  backgroundColor: e.colorSplit,
                },
              },
            },
            [`${t}-empty`]: { padding: `${s}px 0`, color: C, fontSize: e.fontSizeSM, textAlign: 'center' },
            [`${t}-empty-text`]: { padding: s, color: e.colorTextDisabled, fontSize: e.fontSize, textAlign: 'center' },
            [`${t}-item-no-flex`]: { display: 'block' },
          }),
          [`${t}-grid ${n}-col > ${t}-item`]: {
            display: 'block',
            maxWidth: '100%',
            marginBlockEnd: x,
            paddingBlock: 0,
            borderBlockEnd: 'none',
          },
          [`${t}-vertical ${t}-item`]: {
            alignItems: 'initial',
            [`${t}-item-main`]: { display: 'block', flex: 1 },
            [`${t}-item-extra`]: { marginInlineStart: l },
            [`${t}-item-meta`]: {
              marginBlockEnd: s,
              [`${t}-item-meta-title`]: {
                marginBlockStart: 0,
                marginBlockEnd: o,
                color: y,
                fontSize: e.fontSizeLG,
                lineHeight: e.lineHeightLG,
              },
            },
            [`${t}-item-action`]: {
              marginBlockStart: s,
              marginInlineStart: 'auto',
              '> li': { padding: `0 ${s}px`, ['&:first-child']: { paddingInlineStart: 0 } },
            },
          },
          [`${t}-split ${t}-item`]: {
            borderBlockEnd: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,
            ['&:last-child']: { borderBlockEnd: 'none' },
          },
          [`${t}-split ${t}-header`]: { borderBlockEnd: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}` },
          [`${t}-split${t}-empty ${t}-footer`]: { borderTop: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}` },
          [`${t}-loading ${t}-spin-nested-loading`]: { minHeight: r },
          [`${t}-split${t}-something-after-last-item ${n}-spin-container > ${t}-items > ${t}-item:last-child`]: {
            borderBlockEnd: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,
          },
          [`${t}-lg ${t}-item`]: { padding: h },
          [`${t}-sm ${t}-item`]: { padding: p },
          [`${t}:not(${t}-vertical)`]: { [`${t}-item-no-flex`]: { [`${t}-item-action`]: { float: 'right' } } },
        }
      );
    },
    s2 = On(
      'List',
      (e) => {
        const t = jt(e, {
          listBorderedCls: `${e.componentCls}-bordered`,
          minHeight: e.controlHeightLG,
          listItemPadding: `${e.paddingContentVertical}px 0`,
          listItemPaddingSM: `${e.paddingContentVerticalSM}px ${e.paddingContentHorizontal}px`,
          listItemPaddingLG: `${e.paddingContentVerticalLG}px ${e.paddingContentHorizontalLG}px`,
        });
        return [l2(t), o2(t), a2(t)];
      },
      { contentWidth: 220 },
    );
  var c2 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const eu = b.createContext({});
  eu.Consumer;
  function xi(e) {
    var t,
      {
        pagination: n = !1,
        prefixCls: r,
        bordered: i = !1,
        split: o = !0,
        className: l,
        rootClassName: s,
        children: d,
        itemLayout: f,
        loadMore: p,
        grid: h,
        dataSource: v = [],
        size: x,
        header: y,
        footer: C,
        loading: O = !1,
        rowKey: E,
        renderItem: _,
        locale: P,
      } = e,
      N = c2(e, [
        'pagination',
        'prefixCls',
        'bordered',
        'split',
        'className',
        'rootClassName',
        'children',
        'itemLayout',
        'loadMore',
        'grid',
        'dataSource',
        'size',
        'header',
        'footer',
        'loading',
        'rowKey',
        'renderItem',
        'locale',
      ]);
    const j = n && typeof n == 'object' ? n : {},
      [u, $] = we(j.defaultCurrent || 1),
      [I, M] = we(j.defaultPageSize || 10),
      { getPrefixCls: D, renderEmpty: B, direction: F } = je(xt),
      A = { current: 1, total: 0 },
      z = (ue) => (de, Be) => {
        $(de), M(Be), n && n[ue] && n[ue](de, Be);
      },
      V = z('onChange'),
      U = z('onShowSizeChange'),
      X = (ue, de) => {
        if (!_) return null;
        let Be;
        return (
          typeof E == 'function' ? (Be = E(ue)) : E ? (Be = ue[E]) : (Be = ue.key),
          Be || (Be = `list-item-${de}`),
          b.createElement(b.Fragment, { key: Be }, _(ue, de))
        );
      },
      Z = () => !!(p || n || C),
      ee = D('list', r),
      [le, ce] = s2(ee);
    let xe = O;
    typeof xe == 'boolean' && (xe = { spinning: xe });
    const Q = xe && xe.spinning;
    let Ce = '';
    switch (x) {
      case 'large':
        Ce = 'lg';
        break;
      case 'small':
        Ce = 'sm';
        break;
    }
    const Se = he(
        ee,
        {
          [`${ee}-vertical`]: f === 'vertical',
          [`${ee}-${Ce}`]: Ce,
          [`${ee}-split`]: o,
          [`${ee}-bordered`]: i,
          [`${ee}-loading`]: Q,
          [`${ee}-grid`]: !!h,
          [`${ee}-something-after-last-item`]: Z(),
          [`${ee}-rtl`]: F === 'rtl',
        },
        l,
        s,
        ce,
      ),
      me = n2(A, { total: v.length, current: u, pageSize: I }, n || {}),
      se = Math.ceil(me.total / me.pageSize);
    me.current > se && (me.current = se);
    const $e = n
      ? b.createElement(
          'div',
          {
            className: he(
              `${ee}-pagination`,
              `${ee}-pagination-align-${(t = me == null ? void 0 : me.align) !== null && t !== void 0 ? t : 'end'}`,
            ),
          },
          b.createElement(GO, Object.assign({}, me, { onChange: V, onShowSizeChange: U })),
        )
      : null;
    let Ee = ze(v);
    n && v.length > (me.current - 1) * me.pageSize && (Ee = ze(v).splice((me.current - 1) * me.pageSize, me.pageSize));
    const Me = Object.keys(h || {}).some((ue) => ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(ue)),
      Le = bh(Me),
      Re = De(() => {
        for (let ue = 0; ue < Ci.length; ue += 1) {
          const de = Ci[ue];
          if (Le[de]) return de;
        }
      }, [Le]),
      ne = De(() => {
        if (!h) return;
        const ue = Re && h[Re] ? h[Re] : h.column;
        if (ue) return { width: `${100 / ue}%`, maxWidth: `${100 / ue}%` };
      }, [h == null ? void 0 : h.column, Re]);
    let Te = Q && b.createElement('div', { style: { minHeight: 53 } });
    if (Ee.length > 0) {
      const ue = Ee.map((de, Be) => X(de, Be));
      Te = h
        ? b.createElement(
            rO,
            { gutter: h.gutter },
            ui.map(ue, (de) => b.createElement('div', { key: de == null ? void 0 : de.key, style: ne }, de)),
          )
        : b.createElement('ul', { className: `${ee}-items` }, ue);
    } else
      !d &&
        !Q &&
        (Te = b.createElement(
          'div',
          { className: `${ee}-empty-text` },
          (P && P.emptyText) || (B == null ? void 0 : B('List')) || b.createElement(sh, { componentName: 'List' }),
        ));
    const He = me.position || 'bottom',
      oe = De(() => ({ grid: h, itemLayout: f }), [JSON.stringify(h), f]);
    return le(
      b.createElement(
        eu.Provider,
        { value: oe },
        b.createElement(
          'div',
          Object.assign({ className: Se }, N),
          (He === 'top' || He === 'both') && $e,
          y && b.createElement('div', { className: `${ee}-header` }, y),
          b.createElement(t2, Object.assign({}, xe), Te, d),
          C && b.createElement('div', { className: `${ee}-footer` }, C),
          p || ((He === 'bottom' || He === 'both') && $e),
        ),
      ),
    );
  }
  xi.Item = i2;
  let lr = null,
    wi = (e) => e(),
    Lo = [],
    yl = {};
  function u2() {
    const { prefixCls: e, getContainer: t, duration: n, rtl: r, maxCount: i, top: o } = yl,
      l = e ?? Qs().getPrefixCls('message'),
      s = (t == null ? void 0 : t()) || document.body;
    return { prefixCls: l, container: s, duration: n, rtl: r, maxCount: i, top: o };
  }
  const d2 = We((e, t) => {
    const n = () => {
        const { prefixCls: h, container: v, maxCount: x, duration: y, rtl: C, top: O } = u2();
        return { prefixCls: h, getContainer: () => v, maxCount: x, duration: y, rtl: C, top: O };
      },
      [r, i] = we(n),
      [o, l] = Ip(r),
      s = Qs(),
      d = s.getRootPrefixCls(),
      f = s.getIconPrefixCls(),
      p = () => {
        i(n);
      };
    return (
      Fe(p, []),
      on(t, () => {
        const h = Object.assign({}, o);
        return (
          Object.keys(h).forEach((v) => {
            h[v] = function () {
              return p(), o[v].apply(o, arguments);
            };
          }),
          { instance: h, sync: p }
        );
      }),
      b.createElement(Js, { prefixCls: d, iconPrefixCls: f }, l)
    );
  });
  function Cl() {
    if (!lr) {
      const e = document.createDocumentFragment(),
        t = { fragment: e };
      (lr = t),
        wi(() => {
          cc(
            b.createElement(d2, {
              ref: (n) => {
                const { instance: r, sync: i } = n || {};
                Promise.resolve().then(() => {
                  !t.instance && r && ((t.instance = r), (t.sync = i), Cl());
                });
              },
            }),
            e,
          );
        });
      return;
    }
    lr.instance &&
      (Lo.forEach((e) => {
        const { type: t, skipped: n } = e;
        if (!n)
          switch (t) {
            case 'open': {
              wi(() => {
                const r = lr.instance.open(Object.assign(Object.assign({}, yl), e.config));
                r == null || r.then(e.resolve), e.setCloseFn(r);
              });
              break;
            }
            case 'destroy':
              wi(() => {
                lr == null || lr.instance.destroy(e.key);
              });
              break;
            default:
              wi(() => {
                var r;
                const i = (r = lr.instance)[t].apply(r, ze(e.args));
                i == null || i.then(e.resolve), e.setCloseFn(i);
              });
          }
      }),
      (Lo = []));
  }
  function f2(e) {
    (yl = Object.assign(Object.assign({}, yl), e)),
      wi(() => {
        var t;
        (t = lr == null ? void 0 : lr.sync) === null || t === void 0 || t.call(lr);
      });
  }
  function p2(e) {
    const t = sc((n) => {
      let r;
      const i = {
        type: 'open',
        config: e,
        resolve: n,
        setCloseFn: (o) => {
          r = o;
        },
      };
      return (
        Lo.push(i),
        () => {
          r
            ? wi(() => {
                r();
              })
            : (i.skipped = !0);
        }
      );
    });
    return Cl(), t;
  }
  function g2(e, t) {
    const n = sc((r) => {
      let i;
      const o = {
        type: e,
        args: t,
        resolve: r,
        setCloseFn: (l) => {
          i = l;
        },
      };
      return (
        Lo.push(o),
        () => {
          i
            ? wi(() => {
                i();
              })
            : (o.skipped = !0);
        }
      );
    });
    return Cl(), n;
  }
  function h2(e) {
    Lo.push({ type: 'destroy', key: e }), Cl();
  }
  const m2 = ['success', 'info', 'warning', 'error', 'loading'],
    nm = { open: p2, destroy: h2, config: f2, useMessage: Q1, _InternalPanelDoNotUseOrYouWillBeFired: G1 };
  m2.forEach((e) => {
    nm[e] = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return g2(e, n);
    };
  });
  const Dn = nm;
  function rm(e) {
    return Ao(Og(e));
  }
  const gr = xg;
  (gr.useModal = rw),
    (gr.info = function (t) {
      return Ao(_g(t));
    }),
    (gr.success = function (t) {
      return Ao(Tg(t));
    }),
    (gr.error = function (t) {
      return Ao(Ig(t));
    }),
    (gr.warning = rm),
    (gr.warn = rm),
    (gr.confirm = function (t) {
      return Ao(Pg(t));
    }),
    (gr.destroyAll = function () {
      for (; yi.length; ) {
        const t = yi.pop();
        t && t();
      }
    }),
    (gr.config = ew),
    (gr._InternalPanelDoNotUseOrYouWillBeFired = Xx);
  const v2 = gr;
  var b2 = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 00-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 00-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 01-63 63H232a63 63 0 01-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0022.7 49c24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2a281.38 281.38 0 00123.2-149.5A120 120 0 01836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3C584 874.3 548.8 884 512 884s-72-9.7-102.9-27.8c-30.3-17.7-55.6-43-73.3-73.3A202.75 202.75 0 01308 680V412h408v268z',
          },
        },
      ],
    },
    name: 'bug',
    theme: 'outlined',
  };
  const y2 = b2;
  var im = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: y2 }));
  };
  im.displayName = 'BugOutlined';
  const om = We(im);
  var C2 = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z',
          },
        },
      ],
    },
    name: 'copy',
    theme: 'outlined',
  };
  const S2 = C2;
  var am = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: S2 }));
  };
  am.displayName = 'CopyOutlined';
  const tu = We(am);
  var x2 = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z',
          },
        },
      ],
    },
    name: 'edit',
    theme: 'outlined',
  };
  const w2 = x2;
  var lm = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: w2 }));
  };
  lm.displayName = 'EditOutlined';
  const E2 = We(lm);
  var $2 = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z',
          },
        },
      ],
    },
    name: 'enter',
    theme: 'outlined',
  };
  const O2 = $2;
  var sm = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: O2 }));
  };
  sm.displayName = 'EnterOutlined';
  const _2 = We(sm);
  var T2 = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z',
          },
        },
      ],
    },
    name: 'reload',
    theme: 'outlined',
  };
  const I2 = T2;
  var cm = function (t, n) {
    return b.createElement(xn, G(G({}, t), {}, { ref: n, icon: I2 }));
  };
  cm.displayName = 'ReloadOutlined';
  const um = We(cm);
  var P2 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const N2 = { border: 0, background: 'transparent', padding: 0, lineHeight: 'inherit', display: 'inline-block' },
    dm = We((e, t) => {
      const n = (f) => {
          const { keyCode: p } = f;
          p === ye.ENTER && f.preventDefault();
        },
        r = (f) => {
          const { keyCode: p } = f,
            { onClick: h } = e;
          p === ye.ENTER && h && h();
        },
        { style: i, noStyle: o, disabled: l } = e,
        s = P2(e, ['style', 'noStyle', 'disabled']);
      let d = {};
      return (
        o || (d = Object.assign({}, N2)),
        l && (d.pointerEvents = 'none'),
        (d = Object.assign(Object.assign({}, d), i)),
        b.createElement(
          'div',
          Object.assign({ role: 'button', tabIndex: 0, ref: t }, s, { onKeyDown: n, onKeyUp: r, style: d }),
        )
      );
    });
  var R2 = function () {
      var e = document.getSelection();
      if (!e.rangeCount) return function () {};
      for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
      switch (t.tagName.toUpperCase()) {
        case 'INPUT':
        case 'TEXTAREA':
          t.blur();
          break;
        default:
          t = null;
          break;
      }
      return (
        e.removeAllRanges(),
        function () {
          e.type === 'Caret' && e.removeAllRanges(),
            e.rangeCount ||
              n.forEach(function (i) {
                e.addRange(i);
              }),
            t && t.focus();
        }
      );
    },
    M2 = R2,
    fm = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' },
    A2 = 'Copy to clipboard: #{key}, Enter';
  function D2(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
    return e.replace(/#{\s*key\s*}/g, t);
  }
  function F2(e, t) {
    var n,
      r,
      i,
      o,
      l,
      s,
      d = !1;
    t || (t = {}), (n = t.debug || !1);
    try {
      (i = M2()),
        (o = document.createRange()),
        (l = document.getSelection()),
        (s = document.createElement('span')),
        (s.textContent = e),
        (s.ariaHidden = 'true'),
        (s.style.all = 'unset'),
        (s.style.position = 'fixed'),
        (s.style.top = 0),
        (s.style.clip = 'rect(0, 0, 0, 0)'),
        (s.style.whiteSpace = 'pre'),
        (s.style.webkitUserSelect = 'text'),
        (s.style.MozUserSelect = 'text'),
        (s.style.msUserSelect = 'text'),
        (s.style.userSelect = 'text'),
        s.addEventListener('copy', function (p) {
          if ((p.stopPropagation(), t.format))
            if ((p.preventDefault(), typeof p.clipboardData > 'u')) {
              n && console.warn('unable to use e.clipboardData'),
                n && console.warn('trying IE specific stuff'),
                window.clipboardData.clearData();
              var h = fm[t.format] || fm.default;
              window.clipboardData.setData(h, e);
            } else p.clipboardData.clearData(), p.clipboardData.setData(t.format, e);
          t.onCopy && (p.preventDefault(), t.onCopy(p.clipboardData));
        }),
        document.body.appendChild(s),
        o.selectNodeContents(s),
        l.addRange(o);
      var f = document.execCommand('copy');
      if (!f) throw new Error('copy command was unsuccessful');
      d = !0;
    } catch (p) {
      n && console.error('unable to copy using execCommand: ', p), n && console.warn('trying IE specific stuff');
      try {
        window.clipboardData.setData(t.format || 'text', e), t.onCopy && t.onCopy(window.clipboardData), (d = !0);
      } catch (h) {
        n && console.error('unable to copy using clipboardData: ', h),
          n && console.error('falling back to prompt'),
          (r = D2('message' in t ? t.message : A2)),
          window.prompt(r, e);
      }
    } finally {
      l && (typeof l.removeRange == 'function' ? l.removeRange(o) : l.removeAllRanges()),
        s && document.body.removeChild(s),
        i();
    }
    return d;
  }
  var j2 = F2;
  const z2 = (e, t, n, r) => {
      const { sizeMarginHeadingVerticalEnd: i, fontWeightStrong: o } = r;
      return { marginBottom: i, color: n, fontWeight: o, fontSize: e, lineHeight: t };
    },
    L2 = (e) => {
      const t = [1, 2, 3, 4, 5],
        n = {};
      return (
        t.forEach((r) => {
          n[
            `
      h${r}&,
      div&-h${r},
      div&-h${r} > textarea,
      h${r}
    `
          ] = z2(e[`fontSizeHeading${r}`], e[`lineHeightHeading${r}`], e.colorTextHeading, e);
        }),
        n
      );
    },
    H2 = (e) => {
      const { componentCls: t } = e;
      return {
        'a&, a': Object.assign(Object.assign({}, Hf(e)), {
          textDecoration: e.linkDecoration,
          '&:active, &:hover': { textDecoration: e.linkHoverDecoration },
          [`&[disabled], &${t}-disabled`]: {
            color: e.colorTextDisabled,
            cursor: 'not-allowed',
            '&:active, &:hover': { color: e.colorTextDisabled },
            '&:active': { pointerEvents: 'none' },
          },
        }),
      };
    },
    B2 = (e) => ({
      code: {
        margin: '0 0.2em',
        paddingInline: '0.4em',
        paddingBlock: '0.2em 0.1em',
        fontSize: '85%',
        fontFamily: e.fontFamilyCode,
        background: 'rgba(150, 150, 150, 0.1)',
        border: '1px solid rgba(100, 100, 100, 0.2)',
        borderRadius: 3,
      },
      kbd: {
        margin: '0 0.2em',
        paddingInline: '0.4em',
        paddingBlock: '0.15em 0.1em',
        fontSize: '90%',
        fontFamily: e.fontFamilyCode,
        background: 'rgba(150, 150, 150, 0.06)',
        border: '1px solid rgba(100, 100, 100, 0.2)',
        borderBottomWidth: 2,
        borderRadius: 3,
      },
      mark: { padding: 0, backgroundColor: SC[2] },
      'u, ins': { textDecoration: 'underline', textDecorationSkipInk: 'auto' },
      's, del': { textDecoration: 'line-through' },
      strong: { fontWeight: 600 },
      'ul, ol': {
        marginInline: 0,
        marginBlock: '0 1em',
        padding: 0,
        li: { marginInline: '20px 0', marginBlock: 0, paddingInline: '4px 0', paddingBlock: 0 },
      },
      ul: { listStyleType: 'circle', ul: { listStyleType: 'disc' } },
      ol: { listStyleType: 'decimal' },
      'pre, blockquote': { margin: '1em 0' },
      pre: {
        padding: '0.4em 0.6em',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        background: 'rgba(150, 150, 150, 0.1)',
        border: '1px solid rgba(100, 100, 100, 0.2)',
        borderRadius: 3,
        fontFamily: e.fontFamilyCode,
        code: {
          display: 'inline',
          margin: 0,
          padding: 0,
          fontSize: 'inherit',
          fontFamily: 'inherit',
          background: 'transparent',
          border: 0,
        },
      },
      blockquote: {
        paddingInline: '0.6em 0',
        paddingBlock: 0,
        borderInlineStart: '4px solid rgba(100, 100, 100, 0.2)',
        opacity: 0.85,
      },
    }),
    k2 = (e) => {
      const { componentCls: t } = e,
        r = Wc(e).inputPaddingVertical + 1;
      return {
        '&-edit-content': {
          position: 'relative',
          'div&': { insetInlineStart: -e.paddingSM, marginTop: -r, marginBottom: `calc(1em - ${r}px)` },
          [`${t}-edit-content-confirm`]: {
            position: 'absolute',
            insetInlineEnd: e.marginXS + 2,
            insetBlockEnd: e.marginXS,
            color: e.colorTextDescription,
            fontWeight: 'normal',
            fontSize: e.fontSize,
            fontStyle: 'normal',
            pointerEvents: 'none',
          },
          textarea: { margin: '0!important', MozTransition: 'none', height: '1em' },
        },
      };
    },
    V2 = (e) => ({
      '&-copy-success': {
        [`
    &,
    &:hover,
    &:focus`]: { color: e.colorSuccess },
      },
    }),
    W2 = () => ({
      [`
  a&-ellipsis,
  span&-ellipsis
  `]: { display: 'inline-block', maxWidth: '100%' },
      '&-single-line': { whiteSpace: 'nowrap' },
      '&-ellipsis-single-line': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        'a&, span&': { verticalAlign: 'bottom' },
      },
      '&-ellipsis-multiple-line': {
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
      },
    }),
    U2 = (e) => {
      const { componentCls: t, sizeMarginHeadingVerticalStart: n } = e;
      return {
        [t]: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          {
                            color: e.colorText,
                            wordBreak: 'break-word',
                            lineHeight: e.lineHeight,
                            [`&${t}-secondary`]: { color: e.colorTextDescription },
                            [`&${t}-success`]: { color: e.colorSuccess },
                            [`&${t}-warning`]: { color: e.colorWarning },
                            [`&${t}-danger`]: {
                              color: e.colorError,
                              'a&:active, a&:focus': { color: e.colorErrorActive },
                              'a&:hover': { color: e.colorErrorHover },
                            },
                            [`&${t}-disabled`]: {
                              color: e.colorTextDisabled,
                              cursor: 'not-allowed',
                              userSelect: 'none',
                            },
                            [`
        div&,
        p
      `]: { marginBottom: '1em' },
                          },
                          L2(e),
                        ),
                        {
                          [`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]: { marginTop: n },
                          [`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]: {
                            [`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]: { marginTop: n },
                          },
                        },
                      ),
                      B2(e),
                    ),
                    H2(e),
                  ),
                  {
                    [`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, Hf(e)), { marginInlineStart: e.marginXXS }),
                  },
                ),
                k2(e),
              ),
              V2(e),
            ),
            W2(),
          ),
          { '&-rtl': { direction: 'rtl' } },
        ),
      };
    },
    pm = On('Typography', (e) => [U2(e)], {
      sizeMarginHeadingVerticalStart: '1.2em',
      sizeMarginHeadingVerticalEnd: '0.5em',
    }),
    G2 = (e) => {
      let {
        prefixCls: t,
        'aria-label': n,
        className: r,
        style: i,
        direction: o,
        maxLength: l,
        autoSize: s = !0,
        value: d,
        onSave: f,
        onCancel: p,
        onEnd: h,
        component: v,
        enterIcon: x = b.createElement(_2, null),
      } = e;
      const y = ie(null),
        C = ie(!1),
        O = ie(),
        [E, _] = we(d);
      Fe(() => {
        _(d);
      }, [d]),
        Fe(() => {
          if (y.current && y.current.resizableTextArea) {
            const { textArea: z } = y.current.resizableTextArea;
            z.focus();
            const { length: V } = z.value;
            z.setSelectionRange(V, V);
          }
        }, []);
      const P = (z) => {
          let { target: V } = z;
          _(V.value.replace(/[\n\r]/g, ''));
        },
        N = () => {
          C.current = !0;
        },
        j = () => {
          C.current = !1;
        },
        u = (z) => {
          let { keyCode: V } = z;
          C.current || (O.current = V);
        },
        $ = () => {
          f(E.trim());
        },
        I = (z) => {
          let { keyCode: V, ctrlKey: U, altKey: X, metaKey: Z, shiftKey: ee } = z;
          O.current === V &&
            !C.current &&
            !U &&
            !X &&
            !Z &&
            !ee &&
            (V === ye.ENTER ? ($(), h == null || h()) : V === ye.ESC && p());
        },
        M = () => {
          $();
        },
        D = v ? `${t}-${v}` : '',
        [B, F] = pm(t),
        A = he(t, `${t}-edit-content`, { [`${t}-rtl`]: o === 'rtl' }, r, D, F);
      return B(
        b.createElement(
          'div',
          { className: A, style: i },
          b.createElement(TO, {
            ref: y,
            maxLength: l,
            value: E,
            onChange: P,
            onKeyDown: u,
            onKeyUp: I,
            onCompositionStart: N,
            onCompositionEnd: j,
            onBlur: M,
            'aria-label': n,
            rows: 1,
            autoSize: s,
          }),
          x !== null ? Gr(x, { className: `${t}-edit-content-confirm` }) : null,
        ),
      );
    };
  function nu(e, t) {
    return De(() => {
      const n = !!e;
      return [n, Object.assign(Object.assign({}, t), n && typeof e == 'object' ? e : null)];
    }, [e]);
  }
  const q2 = (e, t) => {
    const n = ie(!1);
    Fe(() => {
      n.current ? e() : (n.current = !0);
    }, t);
  };
  var K2 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const gm = We((e, t) => {
    var {
        prefixCls: n,
        component: r = 'article',
        className: i,
        rootClassName: o,
        setContentRef: l,
        children: s,
        direction: d,
      } = e,
      f = K2(e, ['prefixCls', 'component', 'className', 'rootClassName', 'setContentRef', 'children', 'direction']);
    const { getPrefixCls: p, direction: h } = je(xt),
      v = d ?? h;
    let x = t;
    l && (x = di(t, l));
    const y = p('typography', n),
      [C, O] = pm(y),
      E = he(y, { [`${y}-rtl`]: v === 'rtl' }, i, o, O);
    return C(b.createElement(r, Object.assign({ className: E, ref: x }, f), s));
  });
  function hm(e) {
    const t = typeof e;
    return t === 'string' || t === 'number';
  }
  function X2(e) {
    let t = 0;
    return (
      e.forEach((n) => {
        hm(n) ? (t += String(n).length) : (t += 1);
      }),
      t
    );
  }
  function mm(e, t) {
    let n = 0;
    const r = [];
    for (let i = 0; i < e.length; i += 1) {
      if (n === t) return r;
      const o = e[i],
        s = hm(o) ? String(o).length : 1,
        d = n + s;
      if (d > t) {
        const f = t - n;
        return r.push(String(o).slice(0, f)), r;
      }
      r.push(o), (n = d);
    }
    return e;
  }
  const Y2 = 0,
    Sl = 1,
    vm = 2,
    ru = 3,
    bm = 4,
    Q2 = (e) => {
      let { enabledMeasure: t, children: n, text: r, width: i, fontSize: o, rows: l, onEllipsis: s } = e;
      const [[d, f, p], h] = we([0, 0, 0]),
        [v, x] = we(Y2),
        [y, C] = we(0),
        O = ie(null),
        E = ie(null),
        _ = De(() => wr(r), [r]),
        P = De(() => X2(_), [_]),
        N = De(() => (!t || v !== ru ? n(_, !1) : n(mm(_, f), f < P)), [t, v, n, _, f, P]);
      Wt(() => {
        t && i && o && P && (x(Sl), h([0, Math.ceil(P / 2), P]));
      }, [t, i, o, r, P, l]),
        Wt(() => {
          var I;
          v === Sl && C(((I = O.current) === null || I === void 0 ? void 0 : I.offsetHeight) || 0);
        }, [v]),
        Wt(() => {
          var I, M;
          if (y) {
            if (v === Sl) {
              const D = ((I = E.current) === null || I === void 0 ? void 0 : I.offsetHeight) || 0,
                B = l * y;
              D <= B ? (x(bm), s(!1)) : x(vm);
            } else if (v === vm)
              if (d !== p) {
                const D = ((M = E.current) === null || M === void 0 ? void 0 : M.offsetHeight) || 0,
                  B = l * y;
                let F = d,
                  A = p;
                d === p - 1 ? (A = d) : D <= B ? (F = f) : (A = f);
                const z = Math.ceil((F + A) / 2);
                h([F, z, A]);
              } else x(ru), s(!0);
          }
        }, [v, d, p, l, y]);
      const j = { width: i, whiteSpace: 'normal', margin: 0, padding: 0 },
        u = (I, M, D) =>
          b.createElement(
            'span',
            {
              'aria-hidden': !0,
              ref: M,
              style: Object.assign(
                {
                  position: 'fixed',
                  display: 'block',
                  left: 0,
                  top: 0,
                  zIndex: -9999,
                  visibility: 'hidden',
                  pointerEvents: 'none',
                  fontSize: Math.floor(o / 2) * 2,
                },
                D,
              ),
            },
            I,
          ),
        $ = (I, M) => {
          const D = mm(_, I);
          return u(n(D, !0), M, j);
        };
      return b.createElement(
        b.Fragment,
        null,
        N,
        t &&
          v !== ru &&
          v !== bm &&
          b.createElement(
            b.Fragment,
            null,
            u('lg', O, { wordBreak: 'keep-all', whiteSpace: 'nowrap' }),
            v === Sl ? u(n(_, !1), E, j) : $(f, E),
          ),
      );
    },
    J2 = (e) => {
      let { enabledEllipsis: t, isEllipsis: n, children: r, tooltipProps: i } = e;
      return !(i != null && i.title) || !t ? r : b.createElement(vl, Object.assign({ open: n ? void 0 : !1 }, i), r);
    };
  var Z2 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  function e_(e, t) {
    let { mark: n, code: r, underline: i, delete: o, strong: l, keyboard: s, italic: d } = e,
      f = t;
    function p(h, v) {
      v && (f = b.createElement(h, {}, f));
    }
    return p('strong', l), p('u', i), p('del', o), p('code', r), p('mark', n), p('kbd', s), p('i', d), f;
  }
  function xl(e, t, n) {
    return e === !0 || e === void 0 ? t : e || (n && t);
  }
  function ym(e) {
    return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
  }
  const t_ = '...',
    wl = We((e, t) => {
      var n, r, i;
      const {
          prefixCls: o,
          className: l,
          style: s,
          type: d,
          disabled: f,
          children: p,
          ellipsis: h,
          editable: v,
          copyable: x,
          component: y,
          title: C,
        } = e,
        O = Z2(e, [
          'prefixCls',
          'className',
          'style',
          'type',
          'disabled',
          'children',
          'ellipsis',
          'editable',
          'copyable',
          'component',
          'title',
        ]),
        { getPrefixCls: E, direction: _ } = je(xt),
        [P] = Zi('Text'),
        N = ie(null),
        j = ie(null),
        u = E('typography', o),
        $ = ji(O, ['mark', 'code', 'delete', 'underline', 'strong', 'keyboard', 'italic']),
        [I, M] = nu(v),
        [D, B] = Pr(!1, { value: M.editing }),
        { triggerType: F = ['icon'] } = M,
        A = (Pe) => {
          var ke;
          Pe && ((ke = M.onStart) === null || ke === void 0 || ke.call(M)), B(Pe);
        };
      q2(() => {
        var Pe;
        D || (Pe = j.current) === null || Pe === void 0 || Pe.focus();
      }, [D]);
      const z = (Pe) => {
          Pe == null || Pe.preventDefault(), A(!0);
        },
        V = (Pe) => {
          var ke;
          (ke = M.onChange) === null || ke === void 0 || ke.call(M, Pe), A(!1);
        },
        U = () => {
          var Pe;
          (Pe = M.onCancel) === null || Pe === void 0 || Pe.call(M), A(!1);
        },
        [X, Z] = nu(x),
        [ee, le] = we(!1),
        ce = ie(),
        xe = {};
      Z.format && (xe.format = Z.format);
      const Q = () => {
          window.clearTimeout(ce.current);
        },
        Ce = (Pe) => {
          var ke;
          Pe == null || Pe.preventDefault(),
            Pe == null || Pe.stopPropagation(),
            j2(Z.text || String(p) || '', xe),
            le(!0),
            Q(),
            (ce.current = window.setTimeout(() => {
              le(!1);
            }, 3e3)),
            (ke = Z.onCopy) === null || ke === void 0 || ke.call(Z, Pe);
        };
      Fe(() => Q, []);
      const [Se, me] = we(!1),
        [se, $e] = we(!1),
        [Ee, Me] = we(!1),
        [Le, Re] = we(!1),
        [ne, Te] = we(!1),
        [He, oe] = we(!0),
        [ue, de] = nu(h, { expandable: !1 }),
        Be = ue && !Ee,
        { rows: Xe = 1 } = de,
        Ct = De(() => !Be || de.suffix !== void 0 || de.onEllipsis || de.expandable || I || X, [Be, de, I, X]);
      Wt(() => {
        ue && !Ct && (me(lg('webkitLineClamp')), $e(lg('textOverflow')));
      }, [Ct, ue]);
      const _t = De(() => (Ct ? !1 : Xe === 1 ? se : Se), [Ct, se, Se]),
        $t = Be && (_t ? ne : Le),
        ht = Be && Xe === 1 && _t,
        vt = Be && Xe > 1 && _t,
        pt = (Pe) => {
          var ke;
          Me(!0), (ke = de.onExpand) === null || ke === void 0 || ke.call(de, Pe);
        },
        [Kt, Tt] = we(0),
        [at, tt] = we(0),
        Xt = (Pe, ke) => {
          let { offsetWidth: mt } = Pe;
          var ct;
          Tt(mt),
            tt(
              parseInt(
                (ct = window.getComputedStyle) === null || ct === void 0 ? void 0 : ct.call(window, ke).fontSize,
                10,
              ) || 0,
            );
        },
        zt = (Pe) => {
          var ke;
          Re(Pe), Le !== Pe && ((ke = de.onEllipsis) === null || ke === void 0 || ke.call(de, Pe));
        };
      Fe(() => {
        const Pe = N.current;
        if (ue && _t && Pe) {
          const ke = vt ? Pe.offsetHeight < Pe.scrollHeight : Pe.offsetWidth < Pe.scrollWidth;
          ne !== ke && Te(ke);
        }
      }, [ue, _t, p, vt, He]),
        Fe(() => {
          const Pe = N.current;
          if (typeof IntersectionObserver > 'u' || !Pe || !_t || !Be) return;
          const ke = new IntersectionObserver(() => {
            oe(!!Pe.offsetParent);
          });
          return (
            ke.observe(Pe),
            () => {
              ke.disconnect();
            }
          );
        }, [_t, Be]);
      let Ve = {};
      de.tooltip === !0
        ? (Ve = { title: (n = M.text) !== null && n !== void 0 ? n : p })
        : Vn(de.tooltip)
        ? (Ve = { title: de.tooltip })
        : typeof de.tooltip == 'object'
        ? (Ve = Object.assign({ title: (r = M.text) !== null && r !== void 0 ? r : p }, de.tooltip))
        : (Ve = { title: de.tooltip });
      const nt = De(() => {
        const Pe = (ke) => ['string', 'number'].includes(typeof ke);
        if (!(!ue || _t)) {
          if (Pe(M.text)) return M.text;
          if (Pe(p)) return p;
          if (Pe(C)) return C;
          if (Pe(Ve.title)) return Ve.title;
        }
      }, [ue, _t, C, Ve.title, $t]);
      if (D)
        return b.createElement(G2, {
          value: (i = M.text) !== null && i !== void 0 ? i : typeof p == 'string' ? p : '',
          onSave: V,
          onCancel: U,
          onEnd: M.onEnd,
          prefixCls: u,
          className: l,
          style: s,
          direction: _,
          component: y,
          maxLength: M.maxLength,
          autoSize: M.autoSize,
          enterIcon: M.enterIcon,
        });
      const It = () => {
          const { expandable: Pe, symbol: ke } = de;
          if (!Pe) return null;
          let mt;
          return (
            ke ? (mt = ke) : (mt = P == null ? void 0 : P.expand),
            b.createElement(
              'a',
              { key: 'expand', className: `${u}-expand`, onClick: pt, 'aria-label': P == null ? void 0 : P.expand },
              mt,
            )
          );
        },
        gt = () => {
          if (!I) return;
          const { icon: Pe, tooltip: ke } = M,
            mt = wr(ke)[0] || (P == null ? void 0 : P.edit),
            ct = typeof mt == 'string' ? mt : '';
          return F.includes('icon')
            ? b.createElement(
                vl,
                { key: 'edit', title: ke === !1 ? '' : mt },
                b.createElement(
                  dm,
                  { ref: j, className: `${u}-edit`, onClick: z, 'aria-label': ct },
                  Pe || b.createElement(E2, { role: 'button' }),
                ),
              )
            : null;
        },
        lt = () => {
          if (!X) return;
          const { tooltips: Pe, icon: ke } = Z,
            mt = ym(Pe),
            ct = ym(ke),
            wt = ee ? xl(mt[1], P == null ? void 0 : P.copied) : xl(mt[0], P == null ? void 0 : P.copy),
            pn = ee ? (P == null ? void 0 : P.copied) : P == null ? void 0 : P.copy,
            Gt = typeof wt == 'string' ? wt : pn;
          return b.createElement(
            vl,
            { key: 'copy', title: wt },
            b.createElement(
              dm,
              { className: he(`${u}-copy`, ee && `${u}-copy-success`), onClick: Ce, 'aria-label': Gt },
              ee ? xl(ct[1], b.createElement(dh, null), !0) : xl(ct[0], b.createElement(tu, null), !0),
            ),
          );
        },
        Lt = (Pe) => [Pe && It(), gt(), lt()],
        Ut = (Pe) => [Pe && b.createElement('span', { 'aria-hidden': !0, key: 'ellipsis' }, t_), de.suffix, Lt(Pe)];
      return b.createElement(Hr, { onResize: Xt, disabled: !Be || _t }, (Pe) =>
        b.createElement(
          J2,
          { tooltipProps: Ve, enabledEllipsis: Be, isEllipsis: $t },
          b.createElement(
            gm,
            Object.assign(
              {
                className: he(
                  {
                    [`${u}-${d}`]: d,
                    [`${u}-disabled`]: f,
                    [`${u}-ellipsis`]: ue,
                    [`${u}-single-line`]: Be && Xe === 1,
                    [`${u}-ellipsis-single-line`]: ht,
                    [`${u}-ellipsis-multiple-line`]: vt,
                  },
                  l,
                ),
                prefixCls: o,
                style: Object.assign(Object.assign({}, s), { WebkitLineClamp: vt ? Xe : void 0 }),
                component: y,
                ref: di(Pe, N, t),
                direction: _,
                onClick: F.includes('text') ? z : void 0,
                'aria-label': nt == null ? void 0 : nt.toString(),
                title: C,
              },
              $,
            ),
            b.createElement(
              Q2,
              { enabledMeasure: Be && !_t, text: p, rows: Xe, width: Kt, fontSize: at, onEllipsis: zt },
              (ke, mt) => {
                let ct = ke;
                return (
                  ke.length &&
                    mt &&
                    nt &&
                    (ct = b.createElement('span', { key: 'show-content', 'aria-hidden': !0 }, ct)),
                  e_(e, b.createElement(b.Fragment, null, ct, Ut(mt)))
                );
              },
            ),
          ),
        ),
      );
    });
  var n_ =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const r_ = We((e, t) => {
      var { ellipsis: n, rel: r } = e,
        i = n_(e, ['ellipsis', 'rel']);
      const o = Object.assign(Object.assign({}, i), {
        rel: r === void 0 && i.target === '_blank' ? 'noopener noreferrer' : r,
      });
      return delete o.navigate, b.createElement(wl, Object.assign({}, o, { ref: t, ellipsis: !!n, component: 'a' }));
    }),
    i_ = We((e, t) => b.createElement(wl, Object.assign({ ref: t }, e, { component: 'div' })));
  var o_ =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const a_ = We((e, t) => {
    var { ellipsis: n } = e,
      r = o_(e, ['ellipsis']);
    const i = De(() => (n && typeof n == 'object' ? ji(n, ['expandable', 'rows']) : n), [n]);
    return b.createElement(wl, Object.assign({ ref: t }, r, { ellipsis: i, component: 'span' }));
  });
  var l_ =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const s_ = [1, 2, 3, 4, 5],
    c_ = We((e, t) => {
      const { level: n = 1 } = e,
        r = l_(e, ['level']);
      let i;
      return (
        s_.includes(n) ? (i = `h${n}`) : (i = 'h1'), b.createElement(wl, Object.assign({ ref: t }, r, { component: i }))
      );
    }),
    Ho = gm;
  (Ho.Text = a_), (Ho.Link = r_), (Ho.Title = c_), (Ho.Paragraph = i_);
  const Qr = Ho;
  var Nr = window,
    _n = (() => Nr.unsafeWindow)(),
    u_ = (() => Nr.GM_xmlhttpRequest)();
  async function El(e) {
    const t = { 'Content-Type': 'application/json', ...e.headers };
    return new Promise((n, r) => {
      u_({
        method: 'GET',
        ...e,
        headers: t,
        onload: function (i) {
          if (i.status === 200) {
            const o = i.responseText;
            try {
              const l = JSON.parse(o);
              n(l);
            } catch (l) {
              r(l);
            }
          } else r(i);
        },
      });
    });
  }
  var iu = {},
    d_ = {
      get exports() {
        return iu;
      },
      set exports(e) {
        iu = e;
      },
    },
    ou,
    Cm;
  function f_() {
    if (Cm) return ou;
    Cm = 1;
    var e = 1e3,
      t = e * 60,
      n = t * 60,
      r = n * 24,
      i = r * 7,
      o = r * 365.25;
    ou = function (p, h) {
      h = h || {};
      var v = typeof p;
      if (v === 'string' && p.length > 0) return l(p);
      if (v === 'number' && isFinite(p)) return h.long ? d(p) : s(p);
      throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(p));
    };
    function l(p) {
      if (((p = String(p)), !(p.length > 100))) {
        var h =
          /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
            p,
          );
        if (h) {
          var v = parseFloat(h[1]),
            x = (h[2] || 'ms').toLowerCase();
          switch (x) {
            case 'years':
            case 'year':
            case 'yrs':
            case 'yr':
            case 'y':
              return v * o;
            case 'weeks':
            case 'week':
            case 'w':
              return v * i;
            case 'days':
            case 'day':
            case 'd':
              return v * r;
            case 'hours':
            case 'hour':
            case 'hrs':
            case 'hr':
            case 'h':
              return v * n;
            case 'minutes':
            case 'minute':
            case 'mins':
            case 'min':
            case 'm':
              return v * t;
            case 'seconds':
            case 'second':
            case 'secs':
            case 'sec':
            case 's':
              return v * e;
            case 'milliseconds':
            case 'millisecond':
            case 'msecs':
            case 'msec':
            case 'ms':
              return v;
            default:
              return;
          }
        }
      }
    }
    function s(p) {
      var h = Math.abs(p);
      return h >= r
        ? Math.round(p / r) + 'd'
        : h >= n
        ? Math.round(p / n) + 'h'
        : h >= t
        ? Math.round(p / t) + 'm'
        : h >= e
        ? Math.round(p / e) + 's'
        : p + 'ms';
    }
    function d(p) {
      var h = Math.abs(p);
      return h >= r
        ? f(p, h, r, 'day')
        : h >= n
        ? f(p, h, n, 'hour')
        : h >= t
        ? f(p, h, t, 'minute')
        : h >= e
        ? f(p, h, e, 'second')
        : p + ' ms';
    }
    function f(p, h, v, x) {
      var y = h >= v * 1.5;
      return Math.round(p / v) + ' ' + x + (y ? 's' : '');
    }
    return ou;
  }
  function p_(e) {
    (n.debug = n),
      (n.default = n),
      (n.coerce = d),
      (n.disable = o),
      (n.enable = i),
      (n.enabled = l),
      (n.humanize = f_()),
      (n.destroy = f),
      Object.keys(e).forEach((p) => {
        n[p] = e[p];
      }),
      (n.names = []),
      (n.skips = []),
      (n.formatters = {});
    function t(p) {
      let h = 0;
      for (let v = 0; v < p.length; v++) (h = (h << 5) - h + p.charCodeAt(v)), (h |= 0);
      return n.colors[Math.abs(h) % n.colors.length];
    }
    n.selectColor = t;
    function n(p) {
      let h,
        v = null,
        x,
        y;
      function C(...O) {
        if (!C.enabled) return;
        const E = C,
          _ = Number(new Date()),
          P = _ - (h || _);
        (E.diff = P),
          (E.prev = h),
          (E.curr = _),
          (h = _),
          (O[0] = n.coerce(O[0])),
          typeof O[0] != 'string' && O.unshift('%O');
        let N = 0;
        (O[0] = O[0].replace(/%([a-zA-Z%])/g, (u, $) => {
          if (u === '%%') return '%';
          N++;
          const I = n.formatters[$];
          if (typeof I == 'function') {
            const M = O[N];
            (u = I.call(E, M)), O.splice(N, 1), N--;
          }
          return u;
        })),
          n.formatArgs.call(E, O),
          (E.log || n.log).apply(E, O);
      }
      return (
        (C.namespace = p),
        (C.useColors = n.useColors()),
        (C.color = n.selectColor(p)),
        (C.extend = r),
        (C.destroy = n.destroy),
        Object.defineProperty(C, 'enabled', {
          enumerable: !0,
          configurable: !1,
          get: () => (v !== null ? v : (x !== n.namespaces && ((x = n.namespaces), (y = n.enabled(p))), y)),
          set: (O) => {
            v = O;
          },
        }),
        typeof n.init == 'function' && n.init(C),
        C
      );
    }
    function r(p, h) {
      const v = n(this.namespace + (typeof h > 'u' ? ':' : h) + p);
      return (v.log = this.log), v;
    }
    function i(p) {
      n.save(p), (n.namespaces = p), (n.names = []), (n.skips = []);
      let h;
      const v = (typeof p == 'string' ? p : '').split(/[\s,]+/),
        x = v.length;
      for (h = 0; h < x; h++)
        v[h] &&
          ((p = v[h].replace(/\*/g, '.*?')),
          p[0] === '-' ? n.skips.push(new RegExp('^' + p.slice(1) + '$')) : n.names.push(new RegExp('^' + p + '$')));
    }
    function o() {
      const p = [...n.names.map(s), ...n.skips.map(s).map((h) => '-' + h)].join(',');
      return n.enable(''), p;
    }
    function l(p) {
      if (p[p.length - 1] === '*') return !0;
      let h, v;
      for (h = 0, v = n.skips.length; h < v; h++) if (n.skips[h].test(p)) return !1;
      for (h = 0, v = n.names.length; h < v; h++) if (n.names[h].test(p)) return !0;
      return !1;
    }
    function s(p) {
      return p
        .toString()
        .substring(2, p.toString().length - 2)
        .replace(/\.\*\?$/, '*');
    }
    function d(p) {
      return p instanceof Error ? p.stack || p.message : p;
    }
    function f() {
      console.warn(
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
      );
    }
    return n.enable(n.load()), n;
  }
  var g_ = p_;
  (function (e, t) {
    (t.formatArgs = r),
      (t.save = i),
      (t.load = o),
      (t.useColors = n),
      (t.storage = l()),
      (t.destroy = (() => {
        let d = !1;
        return () => {
          d ||
            ((d = !0),
            console.warn(
              'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
            ));
        };
      })()),
      (t.colors = [
        '#0000CC',
        '#0000FF',
        '#0033CC',
        '#0033FF',
        '#0066CC',
        '#0066FF',
        '#0099CC',
        '#0099FF',
        '#00CC00',
        '#00CC33',
        '#00CC66',
        '#00CC99',
        '#00CCCC',
        '#00CCFF',
        '#3300CC',
        '#3300FF',
        '#3333CC',
        '#3333FF',
        '#3366CC',
        '#3366FF',
        '#3399CC',
        '#3399FF',
        '#33CC00',
        '#33CC33',
        '#33CC66',
        '#33CC99',
        '#33CCCC',
        '#33CCFF',
        '#6600CC',
        '#6600FF',
        '#6633CC',
        '#6633FF',
        '#66CC00',
        '#66CC33',
        '#9900CC',
        '#9900FF',
        '#9933CC',
        '#9933FF',
        '#99CC00',
        '#99CC33',
        '#CC0000',
        '#CC0033',
        '#CC0066',
        '#CC0099',
        '#CC00CC',
        '#CC00FF',
        '#CC3300',
        '#CC3333',
        '#CC3366',
        '#CC3399',
        '#CC33CC',
        '#CC33FF',
        '#CC6600',
        '#CC6633',
        '#CC9900',
        '#CC9933',
        '#CCCC00',
        '#CCCC33',
        '#FF0000',
        '#FF0033',
        '#FF0066',
        '#FF0099',
        '#FF00CC',
        '#FF00FF',
        '#FF3300',
        '#FF3333',
        '#FF3366',
        '#FF3399',
        '#FF33CC',
        '#FF33FF',
        '#FF6600',
        '#FF6633',
        '#FF9900',
        '#FF9933',
        '#FFCC00',
        '#FFCC33',
      ]);
    function n() {
      return typeof window < 'u' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)
        ? !0
        : typeof navigator < 'u' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        ? !1
        : (typeof document < 'u' &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          (typeof window < 'u' &&
            window.console &&
            (window.console.firebug || (window.console.exception && window.console.table))) ||
          (typeof navigator < 'u' &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          (typeof navigator < 'u' &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }
    function r(d) {
      if (
        ((d[0] =
          (this.useColors ? '%c' : '') +
          this.namespace +
          (this.useColors ? ' %c' : ' ') +
          d[0] +
          (this.useColors ? '%c ' : ' ') +
          '+' +
          e.exports.humanize(this.diff)),
        !this.useColors)
      )
        return;
      const f = 'color: ' + this.color;
      d.splice(1, 0, f, 'color: inherit');
      let p = 0,
        h = 0;
      d[0].replace(/%[a-zA-Z%]/g, (v) => {
        v !== '%%' && (p++, v === '%c' && (h = p));
      }),
        d.splice(h, 0, f);
    }
    t.log = console.debug || console.log || (() => {});
    function i(d) {
      try {
        d ? t.storage.setItem('debug', d) : t.storage.removeItem('debug');
      } catch {}
    }
    function o() {
      let d;
      try {
        d = t.storage.getItem('debug');
      } catch {}
      return !d && typeof process < 'u' && 'env' in process && (d = process.env.DEBUG), d;
    }
    function l() {
      try {
        return localStorage;
      } catch {}
    }
    e.exports = g_(t);
    const { formatters: s } = e.exports;
    s.j = function (d) {
      try {
        return JSON.stringify(d);
      } catch (f) {
        return '[UnexpectedJSONParseError]: ' + f.message;
      }
    };
  })(d_, iu);
  function h_() {
    const { id: e, name: t, path: n, testPage: r, terminal: i, title: o } = _n.$pegasus || {},
      l = r ? 153 : 149;
    window.open(`https://gcp.miravia.net/lazada/page/campaign/${l}/source/design/${e}??terminal=${i}`);
  }
  function Sm(e) {
    return new Promise(function (t, n) {
      setTimeout(t, e);
    });
  }
  async function m_(e, t) {
    for (;;) {
      await Sm(500);
      const n = e();
      n && !n.__used && ((n.__used = !0), t(n));
    }
  }
  var v_ = 0;
  function ot(e, t, n, r, i, o) {
    var l,
      s,
      d = {};
    for (s in t) s == 'ref' ? (l = t[s]) : (d[s] = t[s]);
    var f = {
      type: e,
      props: d,
      key: n,
      ref: l,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: --v_,
      __source: i,
      __self: o,
    };
    if (typeof e == 'function' && (l = e.defaultProps)) for (s in l) d[s] === void 0 && (d[s] = l[s]);
    return b.options.vnode && b.options.vnode(f), f;
  }
  const xm = ({ text: e, env: t }) => {
    const [n, r] = Dn.useMessage(),
      i = () => {
        (_n.lib.mtop.config.prefix = ''),
          (_n.lib.mtop.config.subDomain = t === 'pre' ? 'pre-acs-m' : 'acs-m'),
          (_n.lib.mtop.config.mainDomain = 'miravia.es');
        const o = document.querySelector(
            '.module-detail-info .module-base-desc .module-attributes .module-desc-row div:nth-child(1) span:nth-child(2)',
          ).textContent,
          l = JSON.stringify(['ARISE_ES']),
          s = JSON.stringify([o ?? '']);
        _n.lib.mtop
          .request({
            api: 'mtop.arise.shop.component.cache.reset',
            v: '2.0',
            method: 'GET',
            dataType: 'json',
            data: { tenantIds: l, componentKeys: s, isAll: !0 },
          })
          .then(
            function () {
              n.open({
                type: 'success',
                content: '清除缓存成功，3秒刷新当前页面',
                duration: 3,
                onClose: () => {
                  _n.location.reload();
                },
              });
            },
            function ({ ret: f }) {
              n.open({
                type: 'error',
                content: f,
                duration: 3,
                onClose: () => {
                  _n.location.reload();
                },
              });
            },
          );
      };
    return ot(b.Fragment, { children: [r, ot('span', { class: 'next-btn-helper', onClick: i, children: e })] });
  };
  async function b_() {
    try {
      return await El({
        url: 'https://astore.alibaba-inc.com/module/getMyModuleList?siteId=163&keyword=&pageSize=100&currentPage=1&moduleType=biz',
      });
    } catch (e) {
      Dn.error(e.error);
    }
  }
  const wm = ({ text: e, env: t }) => {
    const [n, r] = Dn.useMessage(),
      [i, o] = we([]);
    Fe(() => {
      b_().then((d) => {
        d.success && o(d.data.dataList);
      });
    }, []);
    const l = () => {
        (_n.lib.mtop.config.prefix = ''),
          (_n.lib.mtop.config.subDomain = t === 'pre' ? 'pre-acs-m' : 'acs-m'),
          (_n.lib.mtop.config.mainDomain = 'miravia.es');
        const d = i.map((h) => h.moduleKey),
          f = JSON.stringify(['ARISE_ES']),
          p = JSON.stringify(d);
        if (t === 'prod') {
          v2.confirm({
            title: '一键清除缓存可能会影响线上业务，是否继续？',
            onOk: () => {
              s(f, p);
            },
            okText: '继续',
            cancelText: '取消',
          });
          return;
        }
        s(f, p);
      },
      s = (d, f) => {
        _n.lib.mtop
          .request({
            api: 'mtop.arise.shop.component.cache.reset',
            v: '2.0',
            method: 'GET',
            dataType: 'json',
            data: { tenantIds: d, componentKeys: f, isAll: !0 },
          })
          .then(
            function () {
              n.open({
                type: 'success',
                content: '全部模块缓存已清除，3秒后刷新当前页面',
                duration: 3,
                onClose: () => {
                  _n.location.reload();
                },
              });
            },
            function ({ ret: h }) {
              n.open({
                type: 'error',
                content: h,
                duration: 3,
                onClose: () => {
                  _n.location.reload();
                },
              });
            },
          );
      };
    return ot(b.Fragment, { children: [r, ot('span', { class: 'next-btn-helper', onClick: l, children: e })] });
  };
  var au = {},
    y_ = {
      get exports() {
        return au;
      },
      set exports(e) {
        au = e;
      },
    };
  /*!
   * jQuery JavaScript Library v3.6.4
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-03-08T15:28Z
   */ (function (e) {
    (function (t, n) {
      e.exports = t.document
        ? n(t, !0)
        : function (r) {
            if (!r.document) throw new Error('jQuery requires a window with a document');
            return n(r);
          };
    })(typeof window < 'u' ? window : Ru, function (t, n) {
      var r = [],
        i = Object.getPrototypeOf,
        o = r.slice,
        l = r.flat
          ? function (a) {
              return r.flat.call(a);
            }
          : function (a) {
              return r.concat.apply([], a);
            },
        s = r.push,
        d = r.indexOf,
        f = {},
        p = f.toString,
        h = f.hasOwnProperty,
        v = h.toString,
        x = v.call(Object),
        y = {},
        C = function (c) {
          return typeof c == 'function' && typeof c.nodeType != 'number' && typeof c.item != 'function';
        },
        O = function (c) {
          return c != null && c === c.window;
        },
        E = t.document,
        _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function P(a, c, g) {
        g = g || E;
        var m,
          S,
          w = g.createElement('script');
        if (((w.text = a), c))
          for (m in _) (S = c[m] || (c.getAttribute && c.getAttribute(m))), S && w.setAttribute(m, S);
        g.head.appendChild(w).parentNode.removeChild(w);
      }
      function N(a) {
        return a == null
          ? a + ''
          : typeof a == 'object' || typeof a == 'function'
          ? f[p.call(a)] || 'object'
          : typeof a;
      }
      var j = '3.6.4',
        u = function (a, c) {
          return new u.fn.init(a, c);
        };
      (u.fn = u.prototype =
        {
          jquery: j,
          constructor: u,
          length: 0,
          toArray: function () {
            return o.call(this);
          },
          get: function (a) {
            return a == null ? o.call(this) : a < 0 ? this[a + this.length] : this[a];
          },
          pushStack: function (a) {
            var c = u.merge(this.constructor(), a);
            return (c.prevObject = this), c;
          },
          each: function (a) {
            return u.each(this, a);
          },
          map: function (a) {
            return this.pushStack(
              u.map(this, function (c, g) {
                return a.call(c, g, c);
              }),
            );
          },
          slice: function () {
            return this.pushStack(o.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              u.grep(this, function (a, c) {
                return (c + 1) % 2;
              }),
            );
          },
          odd: function () {
            return this.pushStack(
              u.grep(this, function (a, c) {
                return c % 2;
              }),
            );
          },
          eq: function (a) {
            var c = this.length,
              g = +a + (a < 0 ? c : 0);
            return this.pushStack(g >= 0 && g < c ? [this[g]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: s,
          sort: r.sort,
          splice: r.splice,
        }),
        (u.extend = u.fn.extend =
          function () {
            var a,
              c,
              g,
              m,
              S,
              w,
              T = arguments[0] || {},
              k = 1,
              L = arguments.length,
              K = !1;
            for (
              typeof T == 'boolean' && ((K = T), (T = arguments[k] || {}), k++),
                typeof T != 'object' && !C(T) && (T = {}),
                k === L && ((T = this), k--);
              k < L;
              k++
            )
              if ((a = arguments[k]) != null)
                for (c in a)
                  (m = a[c]),
                    !(c === '__proto__' || T === m) &&
                      (K && m && (u.isPlainObject(m) || (S = Array.isArray(m)))
                        ? ((g = T[c]),
                          S && !Array.isArray(g) ? (w = []) : !S && !u.isPlainObject(g) ? (w = {}) : (w = g),
                          (S = !1),
                          (T[c] = u.extend(K, w, m)))
                        : m !== void 0 && (T[c] = m));
            return T;
          }),
        u.extend({
          expando: 'jQuery' + (j + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function (a) {
            throw new Error(a);
          },
          noop: function () {},
          isPlainObject: function (a) {
            var c, g;
            return !a || p.call(a) !== '[object Object]'
              ? !1
              : ((c = i(a)),
                c ? ((g = h.call(c, 'constructor') && c.constructor), typeof g == 'function' && v.call(g) === x) : !0);
          },
          isEmptyObject: function (a) {
            var c;
            for (c in a) return !1;
            return !0;
          },
          globalEval: function (a, c, g) {
            P(a, { nonce: c && c.nonce }, g);
          },
          each: function (a, c) {
            var g,
              m = 0;
            if ($(a)) for (g = a.length; m < g && c.call(a[m], m, a[m]) !== !1; m++);
            else for (m in a) if (c.call(a[m], m, a[m]) === !1) break;
            return a;
          },
          makeArray: function (a, c) {
            var g = c || [];
            return a != null && ($(Object(a)) ? u.merge(g, typeof a == 'string' ? [a] : a) : s.call(g, a)), g;
          },
          inArray: function (a, c, g) {
            return c == null ? -1 : d.call(c, a, g);
          },
          merge: function (a, c) {
            for (var g = +c.length, m = 0, S = a.length; m < g; m++) a[S++] = c[m];
            return (a.length = S), a;
          },
          grep: function (a, c, g) {
            for (var m, S = [], w = 0, T = a.length, k = !g; w < T; w++) (m = !c(a[w], w)), m !== k && S.push(a[w]);
            return S;
          },
          map: function (a, c, g) {
            var m,
              S,
              w = 0,
              T = [];
            if ($(a)) for (m = a.length; w < m; w++) (S = c(a[w], w, g)), S != null && T.push(S);
            else for (w in a) (S = c(a[w], w, g)), S != null && T.push(S);
            return l(T);
          },
          guid: 1,
          support: y,
        }),
        typeof Symbol == 'function' && (u.fn[Symbol.iterator] = r[Symbol.iterator]),
        u.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (a, c) {
          f['[object ' + c + ']'] = c.toLowerCase();
        });
      function $(a) {
        var c = !!a && 'length' in a && a.length,
          g = N(a);
        return C(a) || O(a) ? !1 : g === 'array' || c === 0 || (typeof c == 'number' && c > 0 && c - 1 in a);
      }
      var I = (function (a) {
        var c,
          g,
          m,
          S,
          w,
          T,
          k,
          L,
          K,
          J,
          fe,
          Y,
          te,
          qe,
          dt,
          Ge,
          bn,
          gn,
          Qn,
          Ft = 'sizzle' + 1 * new Date(),
          st = a.document,
          Bn = 0,
          Ot = 0,
          en = Pl(),
          Wo = Pl(),
          _l = Pl(),
          Jn = Pl(),
          _i = function (R, H) {
            return R === H && (fe = !0), 0;
          },
          Ti = {}.hasOwnProperty,
          kn = [],
          ri = kn.pop,
          ur = kn.push,
          ii = kn.push,
          Mm = kn.slice,
          Ii = function (R, H) {
            for (var W = 0, re = R.length; W < re; W++) if (R[W] === H) return W;
            return -1;
          },
          fu =
            'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
          Rt = '[\\x20\\t\\r\\n\\f]',
          Pi = '(?:\\\\[\\da-fA-F]{1,6}' + Rt + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
          Am =
            '\\[' +
            Rt +
            '*(' +
            Pi +
            ')(?:' +
            Rt +
            '*([*^$|!~]?=)' +
            Rt +
            `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
            Pi +
            '))|)' +
            Rt +
            '*\\]',
          pu =
            ':(' +
            Pi +
            `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
            Am +
            ')*)|.*)\\)|)',
          k_ = new RegExp(Rt + '+', 'g'),
          Tl = new RegExp('^' + Rt + '+|((?:^|[^\\\\])(?:\\\\.)*)' + Rt + '+$', 'g'),
          V_ = new RegExp('^' + Rt + '*,' + Rt + '*'),
          Dm = new RegExp('^' + Rt + '*([>+~]|' + Rt + ')' + Rt + '*'),
          W_ = new RegExp(Rt + '|>'),
          U_ = new RegExp(pu),
          G_ = new RegExp('^' + Pi + '$'),
          Il = {
            ID: new RegExp('^#(' + Pi + ')'),
            CLASS: new RegExp('^\\.(' + Pi + ')'),
            TAG: new RegExp('^(' + Pi + '|[*])'),
            ATTR: new RegExp('^' + Am),
            PSEUDO: new RegExp('^' + pu),
            CHILD: new RegExp(
              '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                Rt +
                '*(even|odd|(([+-]|)(\\d*)n|)' +
                Rt +
                '*(?:([+-]|)' +
                Rt +
                '*(\\d+)|))' +
                Rt +
                '*\\)|)',
              'i',
            ),
            bool: new RegExp('^(?:' + fu + ')$', 'i'),
            needsContext: new RegExp(
              '^' +
                Rt +
                '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                Rt +
                '*((?:-\\d)?\\d*)' +
                Rt +
                '*\\)|)(?=[^-]|$)',
              'i',
            ),
          },
          q_ = /HTML$/i,
          K_ = /^(?:input|select|textarea|button)$/i,
          X_ = /^h\d$/i,
          Uo = /^[^{]+\{\s*\[native \w/,
          Y_ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          gu = /[+~]/,
          Dr = new RegExp('\\\\[\\da-fA-F]{1,6}' + Rt + '?|\\\\([^\\r\\n\\f])', 'g'),
          Fr = function (R, H) {
            var W = '0x' + R.slice(1) - 65536;
            return (
              H || (W < 0 ? String.fromCharCode(W + 65536) : String.fromCharCode((W >> 10) | 55296, (W & 1023) | 56320))
            );
          },
          Fm = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          jm = function (R, H) {
            return H
              ? R === '\0'
                ? '�'
                : R.slice(0, -1) + '\\' + R.charCodeAt(R.length - 1).toString(16) + ' '
              : '\\' + R;
          },
          zm = function () {
            Y();
          },
          Q_ = Rl(
            function (R) {
              return R.disabled === !0 && R.nodeName.toLowerCase() === 'fieldset';
            },
            { dir: 'parentNode', next: 'legend' },
          );
        try {
          ii.apply((kn = Mm.call(st.childNodes)), st.childNodes), kn[st.childNodes.length].nodeType;
        } catch {
          ii = {
            apply: kn.length
              ? function (H, W) {
                  ur.apply(H, Mm.call(W));
                }
              : function (H, W) {
                  for (var re = H.length, q = 0; (H[re++] = W[q++]); );
                  H.length = re - 1;
                },
          };
        }
        function Bt(R, H, W, re) {
          var q,
            ae,
            pe,
            _e,
            Ae,
            Ye,
            Ke,
            Ze = H && H.ownerDocument,
            bt = H ? H.nodeType : 9;
          if (((W = W || []), typeof R != 'string' || !R || (bt !== 1 && bt !== 9 && bt !== 11))) return W;
          if (!re && (Y(H), (H = H || te), dt)) {
            if (bt !== 11 && (Ae = Y_.exec(R)))
              if ((q = Ae[1])) {
                if (bt === 9)
                  if ((pe = H.getElementById(q))) {
                    if (pe.id === q) return W.push(pe), W;
                  } else return W;
                else if (Ze && (pe = Ze.getElementById(q)) && Qn(H, pe) && pe.id === q) return W.push(pe), W;
              } else {
                if (Ae[2]) return ii.apply(W, H.getElementsByTagName(R)), W;
                if ((q = Ae[3]) && g.getElementsByClassName && H.getElementsByClassName)
                  return ii.apply(W, H.getElementsByClassName(q)), W;
              }
            if (g.qsa && !Jn[R + ' '] && (!Ge || !Ge.test(R)) && (bt !== 1 || H.nodeName.toLowerCase() !== 'object')) {
              if (((Ke = R), (Ze = H), bt === 1 && (W_.test(R) || Dm.test(R)))) {
                for (
                  Ze = (gu.test(R) && mu(H.parentNode)) || H,
                    (Ze !== H || !g.scope) &&
                      ((_e = H.getAttribute('id')) ? (_e = _e.replace(Fm, jm)) : H.setAttribute('id', (_e = Ft))),
                    Ye = T(R),
                    ae = Ye.length;
                  ae--;

                )
                  Ye[ae] = (_e ? '#' + _e : ':scope') + ' ' + Nl(Ye[ae]);
                Ke = Ye.join(',');
              }
              try {
                return ii.apply(W, Ze.querySelectorAll(Ke)), W;
              } catch {
                Jn(R, !0);
              } finally {
                _e === Ft && H.removeAttribute('id');
              }
            }
          }
          return L(R.replace(Tl, '$1'), H, W, re);
        }
        function Pl() {
          var R = [];
          function H(W, re) {
            return R.push(W + ' ') > m.cacheLength && delete H[R.shift()], (H[W + ' '] = re);
          }
          return H;
        }
        function yr(R) {
          return (R[Ft] = !0), R;
        }
        function dr(R) {
          var H = te.createElement('fieldset');
          try {
            return !!R(H);
          } catch {
            return !1;
          } finally {
            H.parentNode && H.parentNode.removeChild(H), (H = null);
          }
        }
        function hu(R, H) {
          for (var W = R.split('|'), re = W.length; re--; ) m.attrHandle[W[re]] = H;
        }
        function Lm(R, H) {
          var W = H && R,
            re = W && R.nodeType === 1 && H.nodeType === 1 && R.sourceIndex - H.sourceIndex;
          if (re) return re;
          if (W) {
            for (; (W = W.nextSibling); ) if (W === H) return -1;
          }
          return R ? 1 : -1;
        }
        function J_(R) {
          return function (H) {
            var W = H.nodeName.toLowerCase();
            return W === 'input' && H.type === R;
          };
        }
        function Z_(R) {
          return function (H) {
            var W = H.nodeName.toLowerCase();
            return (W === 'input' || W === 'button') && H.type === R;
          };
        }
        function Hm(R) {
          return function (H) {
            return 'form' in H
              ? H.parentNode && H.disabled === !1
                ? 'label' in H
                  ? 'label' in H.parentNode
                    ? H.parentNode.disabled === R
                    : H.disabled === R
                  : H.isDisabled === R || (H.isDisabled !== !R && Q_(H) === R)
                : H.disabled === R
              : 'label' in H
              ? H.disabled === R
              : !1;
          };
        }
        function Ni(R) {
          return yr(function (H) {
            return (
              (H = +H),
              yr(function (W, re) {
                for (var q, ae = R([], W.length, H), pe = ae.length; pe--; )
                  W[(q = ae[pe])] && (W[q] = !(re[q] = W[q]));
              })
            );
          });
        }
        function mu(R) {
          return R && typeof R.getElementsByTagName < 'u' && R;
        }
        (g = Bt.support = {}),
          (w = Bt.isXML =
            function (R) {
              var H = R && R.namespaceURI,
                W = R && (R.ownerDocument || R).documentElement;
              return !q_.test(H || (W && W.nodeName) || 'HTML');
            }),
          (Y = Bt.setDocument =
            function (R) {
              var H,
                W,
                re = R ? R.ownerDocument || R : st;
              return (
                re == te ||
                  re.nodeType !== 9 ||
                  !re.documentElement ||
                  ((te = re),
                  (qe = te.documentElement),
                  (dt = !w(te)),
                  st != te &&
                    (W = te.defaultView) &&
                    W.top !== W &&
                    (W.addEventListener
                      ? W.addEventListener('unload', zm, !1)
                      : W.attachEvent && W.attachEvent('onunload', zm)),
                  (g.scope = dr(function (q) {
                    return (
                      qe.appendChild(q).appendChild(te.createElement('div')),
                      typeof q.querySelectorAll < 'u' && !q.querySelectorAll(':scope fieldset div').length
                    );
                  })),
                  (g.cssHas = dr(function () {
                    try {
                      return te.querySelector(':has(*,:jqfake)'), !1;
                    } catch {
                      return !0;
                    }
                  })),
                  (g.attributes = dr(function (q) {
                    return (q.className = 'i'), !q.getAttribute('className');
                  })),
                  (g.getElementsByTagName = dr(function (q) {
                    return q.appendChild(te.createComment('')), !q.getElementsByTagName('*').length;
                  })),
                  (g.getElementsByClassName = Uo.test(te.getElementsByClassName)),
                  (g.getById = dr(function (q) {
                    return (qe.appendChild(q).id = Ft), !te.getElementsByName || !te.getElementsByName(Ft).length;
                  })),
                  g.getById
                    ? ((m.filter.ID = function (q) {
                        var ae = q.replace(Dr, Fr);
                        return function (pe) {
                          return pe.getAttribute('id') === ae;
                        };
                      }),
                      (m.find.ID = function (q, ae) {
                        if (typeof ae.getElementById < 'u' && dt) {
                          var pe = ae.getElementById(q);
                          return pe ? [pe] : [];
                        }
                      }))
                    : ((m.filter.ID = function (q) {
                        var ae = q.replace(Dr, Fr);
                        return function (pe) {
                          var _e = typeof pe.getAttributeNode < 'u' && pe.getAttributeNode('id');
                          return _e && _e.value === ae;
                        };
                      }),
                      (m.find.ID = function (q, ae) {
                        if (typeof ae.getElementById < 'u' && dt) {
                          var pe,
                            _e,
                            Ae,
                            Ye = ae.getElementById(q);
                          if (Ye) {
                            if (((pe = Ye.getAttributeNode('id')), pe && pe.value === q)) return [Ye];
                            for (Ae = ae.getElementsByName(q), _e = 0; (Ye = Ae[_e++]); )
                              if (((pe = Ye.getAttributeNode('id')), pe && pe.value === q)) return [Ye];
                          }
                          return [];
                        }
                      })),
                  (m.find.TAG = g.getElementsByTagName
                    ? function (q, ae) {
                        if (typeof ae.getElementsByTagName < 'u') return ae.getElementsByTagName(q);
                        if (g.qsa) return ae.querySelectorAll(q);
                      }
                    : function (q, ae) {
                        var pe,
                          _e = [],
                          Ae = 0,
                          Ye = ae.getElementsByTagName(q);
                        if (q === '*') {
                          for (; (pe = Ye[Ae++]); ) pe.nodeType === 1 && _e.push(pe);
                          return _e;
                        }
                        return Ye;
                      }),
                  (m.find.CLASS =
                    g.getElementsByClassName &&
                    function (q, ae) {
                      if (typeof ae.getElementsByClassName < 'u' && dt) return ae.getElementsByClassName(q);
                    }),
                  (bn = []),
                  (Ge = []),
                  (g.qsa = Uo.test(te.querySelectorAll)) &&
                    (dr(function (q) {
                      var ae;
                      (qe.appendChild(q).innerHTML =
                        "<a id='" +
                        Ft +
                        "'></a><select id='" +
                        Ft +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        q.querySelectorAll("[msallowcapture^='']").length && Ge.push('[*^$]=' + Rt + `*(?:''|"")`),
                        q.querySelectorAll('[selected]').length || Ge.push('\\[' + Rt + '*(?:value|' + fu + ')'),
                        q.querySelectorAll('[id~=' + Ft + '-]').length || Ge.push('~='),
                        (ae = te.createElement('input')),
                        ae.setAttribute('name', ''),
                        q.appendChild(ae),
                        q.querySelectorAll("[name='']").length ||
                          Ge.push('\\[' + Rt + '*name' + Rt + '*=' + Rt + `*(?:''|"")`),
                        q.querySelectorAll(':checked').length || Ge.push(':checked'),
                        q.querySelectorAll('a#' + Ft + '+*').length || Ge.push('.#.+[+~]'),
                        q.querySelectorAll('\\\f'),
                        Ge.push('[\\r\\n\\f]');
                    }),
                    dr(function (q) {
                      q.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var ae = te.createElement('input');
                      ae.setAttribute('type', 'hidden'),
                        q.appendChild(ae).setAttribute('name', 'D'),
                        q.querySelectorAll('[name=d]').length && Ge.push('name' + Rt + '*[*^$|!~]?='),
                        q.querySelectorAll(':enabled').length !== 2 && Ge.push(':enabled', ':disabled'),
                        (qe.appendChild(q).disabled = !0),
                        q.querySelectorAll(':disabled').length !== 2 && Ge.push(':enabled', ':disabled'),
                        q.querySelectorAll('*,:x'),
                        Ge.push(',.*:');
                    })),
                  (g.matchesSelector = Uo.test(
                    (gn =
                      qe.matches ||
                      qe.webkitMatchesSelector ||
                      qe.mozMatchesSelector ||
                      qe.oMatchesSelector ||
                      qe.msMatchesSelector),
                  )) &&
                    dr(function (q) {
                      (g.disconnectedMatch = gn.call(q, '*')), gn.call(q, "[s!='']:x"), bn.push('!=', pu);
                    }),
                  g.cssHas || Ge.push(':has'),
                  (Ge = Ge.length && new RegExp(Ge.join('|'))),
                  (bn = bn.length && new RegExp(bn.join('|'))),
                  (H = Uo.test(qe.compareDocumentPosition)),
                  (Qn =
                    H || Uo.test(qe.contains)
                      ? function (q, ae) {
                          var pe = (q.nodeType === 9 && q.documentElement) || q,
                            _e = ae && ae.parentNode;
                          return (
                            q === _e ||
                            !!(
                              _e &&
                              _e.nodeType === 1 &&
                              (pe.contains
                                ? pe.contains(_e)
                                : q.compareDocumentPosition && q.compareDocumentPosition(_e) & 16)
                            )
                          );
                        }
                      : function (q, ae) {
                          if (ae) {
                            for (; (ae = ae.parentNode); ) if (ae === q) return !0;
                          }
                          return !1;
                        }),
                  (_i = H
                    ? function (q, ae) {
                        if (q === ae) return (fe = !0), 0;
                        var pe = !q.compareDocumentPosition - !ae.compareDocumentPosition;
                        return (
                          pe ||
                          ((pe =
                            (q.ownerDocument || q) == (ae.ownerDocument || ae) ? q.compareDocumentPosition(ae) : 1),
                          pe & 1 || (!g.sortDetached && ae.compareDocumentPosition(q) === pe)
                            ? q == te || (q.ownerDocument == st && Qn(st, q))
                              ? -1
                              : ae == te || (ae.ownerDocument == st && Qn(st, ae))
                              ? 1
                              : J
                              ? Ii(J, q) - Ii(J, ae)
                              : 0
                            : pe & 4
                            ? -1
                            : 1)
                        );
                      }
                    : function (q, ae) {
                        if (q === ae) return (fe = !0), 0;
                        var pe,
                          _e = 0,
                          Ae = q.parentNode,
                          Ye = ae.parentNode,
                          Ke = [q],
                          Ze = [ae];
                        if (!Ae || !Ye)
                          return q == te ? -1 : ae == te ? 1 : Ae ? -1 : Ye ? 1 : J ? Ii(J, q) - Ii(J, ae) : 0;
                        if (Ae === Ye) return Lm(q, ae);
                        for (pe = q; (pe = pe.parentNode); ) Ke.unshift(pe);
                        for (pe = ae; (pe = pe.parentNode); ) Ze.unshift(pe);
                        for (; Ke[_e] === Ze[_e]; ) _e++;
                        return _e ? Lm(Ke[_e], Ze[_e]) : Ke[_e] == st ? -1 : Ze[_e] == st ? 1 : 0;
                      })),
                te
              );
            }),
          (Bt.matches = function (R, H) {
            return Bt(R, null, null, H);
          }),
          (Bt.matchesSelector = function (R, H) {
            if ((Y(R), g.matchesSelector && dt && !Jn[H + ' '] && (!bn || !bn.test(H)) && (!Ge || !Ge.test(H))))
              try {
                var W = gn.call(R, H);
                if (W || g.disconnectedMatch || (R.document && R.document.nodeType !== 11)) return W;
              } catch {
                Jn(H, !0);
              }
            return Bt(H, te, null, [R]).length > 0;
          }),
          (Bt.contains = function (R, H) {
            return (R.ownerDocument || R) != te && Y(R), Qn(R, H);
          }),
          (Bt.attr = function (R, H) {
            (R.ownerDocument || R) != te && Y(R);
            var W = m.attrHandle[H.toLowerCase()],
              re = W && Ti.call(m.attrHandle, H.toLowerCase()) ? W(R, H, !dt) : void 0;
            return re !== void 0
              ? re
              : g.attributes || !dt
              ? R.getAttribute(H)
              : (re = R.getAttributeNode(H)) && re.specified
              ? re.value
              : null;
          }),
          (Bt.escape = function (R) {
            return (R + '').replace(Fm, jm);
          }),
          (Bt.error = function (R) {
            throw new Error('Syntax error, unrecognized expression: ' + R);
          }),
          (Bt.uniqueSort = function (R) {
            var H,
              W = [],
              re = 0,
              q = 0;
            if (((fe = !g.detectDuplicates), (J = !g.sortStable && R.slice(0)), R.sort(_i), fe)) {
              for (; (H = R[q++]); ) H === R[q] && (re = W.push(q));
              for (; re--; ) R.splice(W[re], 1);
            }
            return (J = null), R;
          }),
          (S = Bt.getText =
            function (R) {
              var H,
                W = '',
                re = 0,
                q = R.nodeType;
              if (q) {
                if (q === 1 || q === 9 || q === 11) {
                  if (typeof R.textContent == 'string') return R.textContent;
                  for (R = R.firstChild; R; R = R.nextSibling) W += S(R);
                } else if (q === 3 || q === 4) return R.nodeValue;
              } else for (; (H = R[re++]); ) W += S(H);
              return W;
            }),
          (m = Bt.selectors =
            {
              cacheLength: 50,
              createPseudo: yr,
              match: Il,
              attrHandle: {},
              find: {},
              relative: {
                '>': { dir: 'parentNode', first: !0 },
                ' ': { dir: 'parentNode' },
                '+': { dir: 'previousSibling', first: !0 },
                '~': { dir: 'previousSibling' },
              },
              preFilter: {
                ATTR: function (R) {
                  return (
                    (R[1] = R[1].replace(Dr, Fr)),
                    (R[3] = (R[3] || R[4] || R[5] || '').replace(Dr, Fr)),
                    R[2] === '~=' && (R[3] = ' ' + R[3] + ' '),
                    R.slice(0, 4)
                  );
                },
                CHILD: function (R) {
                  return (
                    (R[1] = R[1].toLowerCase()),
                    R[1].slice(0, 3) === 'nth'
                      ? (R[3] || Bt.error(R[0]),
                        (R[4] = +(R[4] ? R[5] + (R[6] || 1) : 2 * (R[3] === 'even' || R[3] === 'odd'))),
                        (R[5] = +(R[7] + R[8] || R[3] === 'odd')))
                      : R[3] && Bt.error(R[0]),
                    R
                  );
                },
                PSEUDO: function (R) {
                  var H,
                    W = !R[6] && R[2];
                  return Il.CHILD.test(R[0])
                    ? null
                    : (R[3]
                        ? (R[2] = R[4] || R[5] || '')
                        : W &&
                          U_.test(W) &&
                          (H = T(W, !0)) &&
                          (H = W.indexOf(')', W.length - H) - W.length) &&
                          ((R[0] = R[0].slice(0, H)), (R[2] = W.slice(0, H))),
                      R.slice(0, 3));
                },
              },
              filter: {
                TAG: function (R) {
                  var H = R.replace(Dr, Fr).toLowerCase();
                  return R === '*'
                    ? function () {
                        return !0;
                      }
                    : function (W) {
                        return W.nodeName && W.nodeName.toLowerCase() === H;
                      };
                },
                CLASS: function (R) {
                  var H = en[R + ' '];
                  return (
                    H ||
                    ((H = new RegExp('(^|' + Rt + ')' + R + '(' + Rt + '|$)')) &&
                      en(R, function (W) {
                        return H.test(
                          (typeof W.className == 'string' && W.className) ||
                            (typeof W.getAttribute < 'u' && W.getAttribute('class')) ||
                            '',
                        );
                      }))
                  );
                },
                ATTR: function (R, H, W) {
                  return function (re) {
                    var q = Bt.attr(re, R);
                    return q == null
                      ? H === '!='
                      : H
                      ? ((q += ''),
                        H === '='
                          ? q === W
                          : H === '!='
                          ? q !== W
                          : H === '^='
                          ? W && q.indexOf(W) === 0
                          : H === '*='
                          ? W && q.indexOf(W) > -1
                          : H === '$='
                          ? W && q.slice(-W.length) === W
                          : H === '~='
                          ? (' ' + q.replace(k_, ' ') + ' ').indexOf(W) > -1
                          : H === '|='
                          ? q === W || q.slice(0, W.length + 1) === W + '-'
                          : !1)
                      : !0;
                  };
                },
                CHILD: function (R, H, W, re, q) {
                  var ae = R.slice(0, 3) !== 'nth',
                    pe = R.slice(-4) !== 'last',
                    _e = H === 'of-type';
                  return re === 1 && q === 0
                    ? function (Ae) {
                        return !!Ae.parentNode;
                      }
                    : function (Ae, Ye, Ke) {
                        var Ze,
                          bt,
                          kt,
                          Qe,
                          yn,
                          Mn,
                          Zn = ae !== pe ? 'nextSibling' : 'previousSibling',
                          Yt = Ae.parentNode,
                          Go = _e && Ae.nodeName.toLowerCase(),
                          qo = !Ke && !_e,
                          er = !1;
                        if (Yt) {
                          if (ae) {
                            for (; Zn; ) {
                              for (Qe = Ae; (Qe = Qe[Zn]); )
                                if (_e ? Qe.nodeName.toLowerCase() === Go : Qe.nodeType === 1) return !1;
                              Mn = Zn = R === 'only' && !Mn && 'nextSibling';
                            }
                            return !0;
                          }
                          if (((Mn = [pe ? Yt.firstChild : Yt.lastChild]), pe && qo)) {
                            for (
                              Qe = Yt,
                                kt = Qe[Ft] || (Qe[Ft] = {}),
                                bt = kt[Qe.uniqueID] || (kt[Qe.uniqueID] = {}),
                                Ze = bt[R] || [],
                                yn = Ze[0] === Bn && Ze[1],
                                er = yn && Ze[2],
                                Qe = yn && Yt.childNodes[yn];
                              (Qe = (++yn && Qe && Qe[Zn]) || (er = yn = 0) || Mn.pop());

                            )
                              if (Qe.nodeType === 1 && ++er && Qe === Ae) {
                                bt[R] = [Bn, yn, er];
                                break;
                              }
                          } else if (
                            (qo &&
                              ((Qe = Ae),
                              (kt = Qe[Ft] || (Qe[Ft] = {})),
                              (bt = kt[Qe.uniqueID] || (kt[Qe.uniqueID] = {})),
                              (Ze = bt[R] || []),
                              (yn = Ze[0] === Bn && Ze[1]),
                              (er = yn)),
                            er === !1)
                          )
                            for (
                              ;
                              (Qe = (++yn && Qe && Qe[Zn]) || (er = yn = 0) || Mn.pop()) &&
                              !(
                                (_e ? Qe.nodeName.toLowerCase() === Go : Qe.nodeType === 1) &&
                                ++er &&
                                (qo &&
                                  ((kt = Qe[Ft] || (Qe[Ft] = {})),
                                  (bt = kt[Qe.uniqueID] || (kt[Qe.uniqueID] = {})),
                                  (bt[R] = [Bn, er])),
                                Qe === Ae)
                              );

                            );
                          return (er -= q), er === re || (er % re === 0 && er / re >= 0);
                        }
                      };
                },
                PSEUDO: function (R, H) {
                  var W,
                    re = m.pseudos[R] || m.setFilters[R.toLowerCase()] || Bt.error('unsupported pseudo: ' + R);
                  return re[Ft]
                    ? re(H)
                    : re.length > 1
                    ? ((W = [R, R, '', H]),
                      m.setFilters.hasOwnProperty(R.toLowerCase())
                        ? yr(function (q, ae) {
                            for (var pe, _e = re(q, H), Ae = _e.length; Ae--; )
                              (pe = Ii(q, _e[Ae])), (q[pe] = !(ae[pe] = _e[Ae]));
                          })
                        : function (q) {
                            return re(q, 0, W);
                          })
                    : re;
                },
              },
              pseudos: {
                not: yr(function (R) {
                  var H = [],
                    W = [],
                    re = k(R.replace(Tl, '$1'));
                  return re[Ft]
                    ? yr(function (q, ae, pe, _e) {
                        for (var Ae, Ye = re(q, null, _e, []), Ke = q.length; Ke--; )
                          (Ae = Ye[Ke]) && (q[Ke] = !(ae[Ke] = Ae));
                      })
                    : function (q, ae, pe) {
                        return (H[0] = q), re(H, null, pe, W), (H[0] = null), !W.pop();
                      };
                }),
                has: yr(function (R) {
                  return function (H) {
                    return Bt(R, H).length > 0;
                  };
                }),
                contains: yr(function (R) {
                  return (
                    (R = R.replace(Dr, Fr)),
                    function (H) {
                      return (H.textContent || S(H)).indexOf(R) > -1;
                    }
                  );
                }),
                lang: yr(function (R) {
                  return (
                    G_.test(R || '') || Bt.error('unsupported lang: ' + R),
                    (R = R.replace(Dr, Fr).toLowerCase()),
                    function (H) {
                      var W;
                      do
                        if ((W = dt ? H.lang : H.getAttribute('xml:lang') || H.getAttribute('lang')))
                          return (W = W.toLowerCase()), W === R || W.indexOf(R + '-') === 0;
                      while ((H = H.parentNode) && H.nodeType === 1);
                      return !1;
                    }
                  );
                }),
                target: function (R) {
                  var H = a.location && a.location.hash;
                  return H && H.slice(1) === R.id;
                },
                root: function (R) {
                  return R === qe;
                },
                focus: function (R) {
                  return (
                    R === te.activeElement && (!te.hasFocus || te.hasFocus()) && !!(R.type || R.href || ~R.tabIndex)
                  );
                },
                enabled: Hm(!1),
                disabled: Hm(!0),
                checked: function (R) {
                  var H = R.nodeName.toLowerCase();
                  return (H === 'input' && !!R.checked) || (H === 'option' && !!R.selected);
                },
                selected: function (R) {
                  return R.parentNode && R.parentNode.selectedIndex, R.selected === !0;
                },
                empty: function (R) {
                  for (R = R.firstChild; R; R = R.nextSibling) if (R.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (R) {
                  return !m.pseudos.empty(R);
                },
                header: function (R) {
                  return X_.test(R.nodeName);
                },
                input: function (R) {
                  return K_.test(R.nodeName);
                },
                button: function (R) {
                  var H = R.nodeName.toLowerCase();
                  return (H === 'input' && R.type === 'button') || H === 'button';
                },
                text: function (R) {
                  var H;
                  return (
                    R.nodeName.toLowerCase() === 'input' &&
                    R.type === 'text' &&
                    ((H = R.getAttribute('type')) == null || H.toLowerCase() === 'text')
                  );
                },
                first: Ni(function () {
                  return [0];
                }),
                last: Ni(function (R, H) {
                  return [H - 1];
                }),
                eq: Ni(function (R, H, W) {
                  return [W < 0 ? W + H : W];
                }),
                even: Ni(function (R, H) {
                  for (var W = 0; W < H; W += 2) R.push(W);
                  return R;
                }),
                odd: Ni(function (R, H) {
                  for (var W = 1; W < H; W += 2) R.push(W);
                  return R;
                }),
                lt: Ni(function (R, H, W) {
                  for (var re = W < 0 ? W + H : W > H ? H : W; --re >= 0; ) R.push(re);
                  return R;
                }),
                gt: Ni(function (R, H, W) {
                  for (var re = W < 0 ? W + H : W; ++re < H; ) R.push(re);
                  return R;
                }),
              },
            }),
          (m.pseudos.nth = m.pseudos.eq);
        for (c in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) m.pseudos[c] = J_(c);
        for (c in { submit: !0, reset: !0 }) m.pseudos[c] = Z_(c);
        function Bm() {}
        (Bm.prototype = m.filters = m.pseudos),
          (m.setFilters = new Bm()),
          (T = Bt.tokenize =
            function (R, H) {
              var W,
                re,
                q,
                ae,
                pe,
                _e,
                Ae,
                Ye = Wo[R + ' '];
              if (Ye) return H ? 0 : Ye.slice(0);
              for (pe = R, _e = [], Ae = m.preFilter; pe; ) {
                (!W || (re = V_.exec(pe))) && (re && (pe = pe.slice(re[0].length) || pe), _e.push((q = []))),
                  (W = !1),
                  (re = Dm.exec(pe)) &&
                    ((W = re.shift()), q.push({ value: W, type: re[0].replace(Tl, ' ') }), (pe = pe.slice(W.length)));
                for (ae in m.filter)
                  (re = Il[ae].exec(pe)) &&
                    (!Ae[ae] || (re = Ae[ae](re))) &&
                    ((W = re.shift()), q.push({ value: W, type: ae, matches: re }), (pe = pe.slice(W.length)));
                if (!W) break;
              }
              return H ? pe.length : pe ? Bt.error(R) : Wo(R, _e).slice(0);
            });
        function Nl(R) {
          for (var H = 0, W = R.length, re = ''; H < W; H++) re += R[H].value;
          return re;
        }
        function Rl(R, H, W) {
          var re = H.dir,
            q = H.next,
            ae = q || re,
            pe = W && ae === 'parentNode',
            _e = Ot++;
          return H.first
            ? function (Ae, Ye, Ke) {
                for (; (Ae = Ae[re]); ) if (Ae.nodeType === 1 || pe) return R(Ae, Ye, Ke);
                return !1;
              }
            : function (Ae, Ye, Ke) {
                var Ze,
                  bt,
                  kt,
                  Qe = [Bn, _e];
                if (Ke) {
                  for (; (Ae = Ae[re]); ) if ((Ae.nodeType === 1 || pe) && R(Ae, Ye, Ke)) return !0;
                } else
                  for (; (Ae = Ae[re]); )
                    if (Ae.nodeType === 1 || pe)
                      if (
                        ((kt = Ae[Ft] || (Ae[Ft] = {})),
                        (bt = kt[Ae.uniqueID] || (kt[Ae.uniqueID] = {})),
                        q && q === Ae.nodeName.toLowerCase())
                      )
                        Ae = Ae[re] || Ae;
                      else {
                        if ((Ze = bt[ae]) && Ze[0] === Bn && Ze[1] === _e) return (Qe[2] = Ze[2]);
                        if (((bt[ae] = Qe), (Qe[2] = R(Ae, Ye, Ke)))) return !0;
                      }
                return !1;
              };
        }
        function vu(R) {
          return R.length > 1
            ? function (H, W, re) {
                for (var q = R.length; q--; ) if (!R[q](H, W, re)) return !1;
                return !0;
              }
            : R[0];
        }
        function eT(R, H, W) {
          for (var re = 0, q = H.length; re < q; re++) Bt(R, H[re], W);
          return W;
        }
        function Ml(R, H, W, re, q) {
          for (var ae, pe = [], _e = 0, Ae = R.length, Ye = H != null; _e < Ae; _e++)
            (ae = R[_e]) && (!W || W(ae, re, q)) && (pe.push(ae), Ye && H.push(_e));
          return pe;
        }
        function bu(R, H, W, re, q, ae) {
          return (
            re && !re[Ft] && (re = bu(re)),
            q && !q[Ft] && (q = bu(q, ae)),
            yr(function (pe, _e, Ae, Ye) {
              var Ke,
                Ze,
                bt,
                kt = [],
                Qe = [],
                yn = _e.length,
                Mn = pe || eT(H || '*', Ae.nodeType ? [Ae] : Ae, []),
                Zn = R && (pe || !H) ? Ml(Mn, kt, R, Ae, Ye) : Mn,
                Yt = W ? (q || (pe ? R : yn || re) ? [] : _e) : Zn;
              if ((W && W(Zn, Yt, Ae, Ye), re))
                for (Ke = Ml(Yt, Qe), re(Ke, [], Ae, Ye), Ze = Ke.length; Ze--; )
                  (bt = Ke[Ze]) && (Yt[Qe[Ze]] = !(Zn[Qe[Ze]] = bt));
              if (pe) {
                if (q || R) {
                  if (q) {
                    for (Ke = [], Ze = Yt.length; Ze--; ) (bt = Yt[Ze]) && Ke.push((Zn[Ze] = bt));
                    q(null, (Yt = []), Ke, Ye);
                  }
                  for (Ze = Yt.length; Ze--; )
                    (bt = Yt[Ze]) && (Ke = q ? Ii(pe, bt) : kt[Ze]) > -1 && (pe[Ke] = !(_e[Ke] = bt));
                }
              } else (Yt = Ml(Yt === _e ? Yt.splice(yn, Yt.length) : Yt)), q ? q(null, _e, Yt, Ye) : ii.apply(_e, Yt);
            })
          );
        }
        function yu(R) {
          for (
            var H,
              W,
              re,
              q = R.length,
              ae = m.relative[R[0].type],
              pe = ae || m.relative[' '],
              _e = ae ? 1 : 0,
              Ae = Rl(
                function (Ze) {
                  return Ze === H;
                },
                pe,
                !0,
              ),
              Ye = Rl(
                function (Ze) {
                  return Ii(H, Ze) > -1;
                },
                pe,
                !0,
              ),
              Ke = [
                function (Ze, bt, kt) {
                  var Qe = (!ae && (kt || bt !== K)) || ((H = bt).nodeType ? Ae(Ze, bt, kt) : Ye(Ze, bt, kt));
                  return (H = null), Qe;
                },
              ];
            _e < q;
            _e++
          )
            if ((W = m.relative[R[_e].type])) Ke = [Rl(vu(Ke), W)];
            else {
              if (((W = m.filter[R[_e].type].apply(null, R[_e].matches)), W[Ft])) {
                for (re = ++_e; re < q && !m.relative[R[re].type]; re++);
                return bu(
                  _e > 1 && vu(Ke),
                  _e > 1 &&
                    Nl(R.slice(0, _e - 1).concat({ value: R[_e - 2].type === ' ' ? '*' : '' })).replace(Tl, '$1'),
                  W,
                  _e < re && yu(R.slice(_e, re)),
                  re < q && yu((R = R.slice(re))),
                  re < q && Nl(R),
                );
              }
              Ke.push(W);
            }
          return vu(Ke);
        }
        function tT(R, H) {
          var W = H.length > 0,
            re = R.length > 0,
            q = function (ae, pe, _e, Ae, Ye) {
              var Ke,
                Ze,
                bt,
                kt = 0,
                Qe = '0',
                yn = ae && [],
                Mn = [],
                Zn = K,
                Yt = ae || (re && m.find.TAG('*', Ye)),
                Go = (Bn += Zn == null ? 1 : Math.random() || 0.1),
                qo = Yt.length;
              for (Ye && (K = pe == te || pe || Ye); Qe !== qo && (Ke = Yt[Qe]) != null; Qe++) {
                if (re && Ke) {
                  for (Ze = 0, !pe && Ke.ownerDocument != te && (Y(Ke), (_e = !dt)); (bt = R[Ze++]); )
                    if (bt(Ke, pe || te, _e)) {
                      Ae.push(Ke);
                      break;
                    }
                  Ye && (Bn = Go);
                }
                W && ((Ke = !bt && Ke) && kt--, ae && yn.push(Ke));
              }
              if (((kt += Qe), W && Qe !== kt)) {
                for (Ze = 0; (bt = H[Ze++]); ) bt(yn, Mn, pe, _e);
                if (ae) {
                  if (kt > 0) for (; Qe--; ) yn[Qe] || Mn[Qe] || (Mn[Qe] = ri.call(Ae));
                  Mn = Ml(Mn);
                }
                ii.apply(Ae, Mn), Ye && !ae && Mn.length > 0 && kt + H.length > 1 && Bt.uniqueSort(Ae);
              }
              return Ye && ((Bn = Go), (K = Zn)), yn;
            };
          return W ? yr(q) : q;
        }
        return (
          (k = Bt.compile =
            function (R, H) {
              var W,
                re = [],
                q = [],
                ae = _l[R + ' '];
              if (!ae) {
                for (H || (H = T(R)), W = H.length; W--; ) (ae = yu(H[W])), ae[Ft] ? re.push(ae) : q.push(ae);
                (ae = _l(R, tT(q, re))), (ae.selector = R);
              }
              return ae;
            }),
          (L = Bt.select =
            function (R, H, W, re) {
              var q,
                ae,
                pe,
                _e,
                Ae,
                Ye = typeof R == 'function' && R,
                Ke = !re && T((R = Ye.selector || R));
              if (((W = W || []), Ke.length === 1)) {
                if (
                  ((ae = Ke[0] = Ke[0].slice(0)),
                  ae.length > 2 && (pe = ae[0]).type === 'ID' && H.nodeType === 9 && dt && m.relative[ae[1].type])
                ) {
                  if (((H = (m.find.ID(pe.matches[0].replace(Dr, Fr), H) || [])[0]), H)) Ye && (H = H.parentNode);
                  else return W;
                  R = R.slice(ae.shift().value.length);
                }
                for (q = Il.needsContext.test(R) ? 0 : ae.length; q-- && ((pe = ae[q]), !m.relative[(_e = pe.type)]); )
                  if (
                    (Ae = m.find[_e]) &&
                    (re = Ae(pe.matches[0].replace(Dr, Fr), (gu.test(ae[0].type) && mu(H.parentNode)) || H))
                  ) {
                    if ((ae.splice(q, 1), (R = re.length && Nl(ae)), !R)) return ii.apply(W, re), W;
                    break;
                  }
              }
              return (Ye || k(R, Ke))(re, H, !dt, W, !H || (gu.test(R) && mu(H.parentNode)) || H), W;
            }),
          (g.sortStable = Ft.split('').sort(_i).join('') === Ft),
          (g.detectDuplicates = !!fe),
          Y(),
          (g.sortDetached = dr(function (R) {
            return R.compareDocumentPosition(te.createElement('fieldset')) & 1;
          })),
          dr(function (R) {
            return (R.innerHTML = "<a href='#'></a>"), R.firstChild.getAttribute('href') === '#';
          }) ||
            hu('type|href|height|width', function (R, H, W) {
              if (!W) return R.getAttribute(H, H.toLowerCase() === 'type' ? 1 : 2);
            }),
          (!g.attributes ||
            !dr(function (R) {
              return (
                (R.innerHTML = '<input/>'),
                R.firstChild.setAttribute('value', ''),
                R.firstChild.getAttribute('value') === ''
              );
            })) &&
            hu('value', function (R, H, W) {
              if (!W && R.nodeName.toLowerCase() === 'input') return R.defaultValue;
            }),
          dr(function (R) {
            return R.getAttribute('disabled') == null;
          }) ||
            hu(fu, function (R, H, W) {
              var re;
              if (!W)
                return R[H] === !0 ? H.toLowerCase() : (re = R.getAttributeNode(H)) && re.specified ? re.value : null;
            }),
          Bt
        );
      })(t);
      (u.find = I),
        (u.expr = I.selectors),
        (u.expr[':'] = u.expr.pseudos),
        (u.uniqueSort = u.unique = I.uniqueSort),
        (u.text = I.getText),
        (u.isXMLDoc = I.isXML),
        (u.contains = I.contains),
        (u.escapeSelector = I.escape);
      var M = function (a, c, g) {
          for (var m = [], S = g !== void 0; (a = a[c]) && a.nodeType !== 9; )
            if (a.nodeType === 1) {
              if (S && u(a).is(g)) break;
              m.push(a);
            }
          return m;
        },
        D = function (a, c) {
          for (var g = []; a; a = a.nextSibling) a.nodeType === 1 && a !== c && g.push(a);
          return g;
        },
        B = u.expr.match.needsContext;
      function F(a, c) {
        return a.nodeName && a.nodeName.toLowerCase() === c.toLowerCase();
      }
      var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function z(a, c, g) {
        return C(c)
          ? u.grep(a, function (m, S) {
              return !!c.call(m, S, m) !== g;
            })
          : c.nodeType
          ? u.grep(a, function (m) {
              return (m === c) !== g;
            })
          : typeof c != 'string'
          ? u.grep(a, function (m) {
              return d.call(c, m) > -1 !== g;
            })
          : u.filter(c, a, g);
      }
      (u.filter = function (a, c, g) {
        var m = c[0];
        return (
          g && (a = ':not(' + a + ')'),
          c.length === 1 && m.nodeType === 1
            ? u.find.matchesSelector(m, a)
              ? [m]
              : []
            : u.find.matches(
                a,
                u.grep(c, function (S) {
                  return S.nodeType === 1;
                }),
              )
        );
      }),
        u.fn.extend({
          find: function (a) {
            var c,
              g,
              m = this.length,
              S = this;
            if (typeof a != 'string')
              return this.pushStack(
                u(a).filter(function () {
                  for (c = 0; c < m; c++) if (u.contains(S[c], this)) return !0;
                }),
              );
            for (g = this.pushStack([]), c = 0; c < m; c++) u.find(a, S[c], g);
            return m > 1 ? u.uniqueSort(g) : g;
          },
          filter: function (a) {
            return this.pushStack(z(this, a || [], !1));
          },
          not: function (a) {
            return this.pushStack(z(this, a || [], !0));
          },
          is: function (a) {
            return !!z(this, typeof a == 'string' && B.test(a) ? u(a) : a || [], !1).length;
          },
        });
      var V,
        U = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        X = (u.fn.init = function (a, c, g) {
          var m, S;
          if (!a) return this;
          if (((g = g || V), typeof a == 'string'))
            if (
              (a[0] === '<' && a[a.length - 1] === '>' && a.length >= 3 ? (m = [null, a, null]) : (m = U.exec(a)),
              m && (m[1] || !c))
            )
              if (m[1]) {
                if (
                  ((c = c instanceof u ? c[0] : c),
                  u.merge(this, u.parseHTML(m[1], c && c.nodeType ? c.ownerDocument || c : E, !0)),
                  A.test(m[1]) && u.isPlainObject(c))
                )
                  for (m in c) C(this[m]) ? this[m](c[m]) : this.attr(m, c[m]);
                return this;
              } else return (S = E.getElementById(m[2])), S && ((this[0] = S), (this.length = 1)), this;
            else return !c || c.jquery ? (c || g).find(a) : this.constructor(c).find(a);
          else {
            if (a.nodeType) return (this[0] = a), (this.length = 1), this;
            if (C(a)) return g.ready !== void 0 ? g.ready(a) : a(u);
          }
          return u.makeArray(a, this);
        });
      (X.prototype = u.fn), (V = u(E));
      var Z = /^(?:parents|prev(?:Until|All))/,
        ee = { children: !0, contents: !0, next: !0, prev: !0 };
      u.fn.extend({
        has: function (a) {
          var c = u(a, this),
            g = c.length;
          return this.filter(function () {
            for (var m = 0; m < g; m++) if (u.contains(this, c[m])) return !0;
          });
        },
        closest: function (a, c) {
          var g,
            m = 0,
            S = this.length,
            w = [],
            T = typeof a != 'string' && u(a);
          if (!B.test(a)) {
            for (; m < S; m++)
              for (g = this[m]; g && g !== c; g = g.parentNode)
                if (g.nodeType < 11 && (T ? T.index(g) > -1 : g.nodeType === 1 && u.find.matchesSelector(g, a))) {
                  w.push(g);
                  break;
                }
          }
          return this.pushStack(w.length > 1 ? u.uniqueSort(w) : w);
        },
        index: function (a) {
          return a
            ? typeof a == 'string'
              ? d.call(u(a), this[0])
              : d.call(this, a.jquery ? a[0] : a)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (a, c) {
          return this.pushStack(u.uniqueSort(u.merge(this.get(), u(a, c))));
        },
        addBack: function (a) {
          return this.add(a == null ? this.prevObject : this.prevObject.filter(a));
        },
      });
      function le(a, c) {
        for (; (a = a[c]) && a.nodeType !== 1; );
        return a;
      }
      u.each(
        {
          parent: function (a) {
            var c = a.parentNode;
            return c && c.nodeType !== 11 ? c : null;
          },
          parents: function (a) {
            return M(a, 'parentNode');
          },
          parentsUntil: function (a, c, g) {
            return M(a, 'parentNode', g);
          },
          next: function (a) {
            return le(a, 'nextSibling');
          },
          prev: function (a) {
            return le(a, 'previousSibling');
          },
          nextAll: function (a) {
            return M(a, 'nextSibling');
          },
          prevAll: function (a) {
            return M(a, 'previousSibling');
          },
          nextUntil: function (a, c, g) {
            return M(a, 'nextSibling', g);
          },
          prevUntil: function (a, c, g) {
            return M(a, 'previousSibling', g);
          },
          siblings: function (a) {
            return D((a.parentNode || {}).firstChild, a);
          },
          children: function (a) {
            return D(a.firstChild);
          },
          contents: function (a) {
            return a.contentDocument != null && i(a.contentDocument)
              ? a.contentDocument
              : (F(a, 'template') && (a = a.content || a), u.merge([], a.childNodes));
          },
        },
        function (a, c) {
          u.fn[a] = function (g, m) {
            var S = u.map(this, c, g);
            return (
              a.slice(-5) !== 'Until' && (m = g),
              m && typeof m == 'string' && (S = u.filter(m, S)),
              this.length > 1 && (ee[a] || u.uniqueSort(S), Z.test(a) && S.reverse()),
              this.pushStack(S)
            );
          };
        },
      );
      var ce = /[^\x20\t\r\n\f]+/g;
      function xe(a) {
        var c = {};
        return (
          u.each(a.match(ce) || [], function (g, m) {
            c[m] = !0;
          }),
          c
        );
      }
      u.Callbacks = function (a) {
        a = typeof a == 'string' ? xe(a) : u.extend({}, a);
        var c,
          g,
          m,
          S,
          w = [],
          T = [],
          k = -1,
          L = function () {
            for (S = S || a.once, m = c = !0; T.length; k = -1)
              for (g = T.shift(); ++k < w.length; )
                w[k].apply(g[0], g[1]) === !1 && a.stopOnFalse && ((k = w.length), (g = !1));
            a.memory || (g = !1), (c = !1), S && (g ? (w = []) : (w = ''));
          },
          K = {
            add: function () {
              return (
                w &&
                  (g && !c && ((k = w.length - 1), T.push(g)),
                  (function J(fe) {
                    u.each(fe, function (Y, te) {
                      C(te) ? (!a.unique || !K.has(te)) && w.push(te) : te && te.length && N(te) !== 'string' && J(te);
                    });
                  })(arguments),
                  g && !c && L()),
                this
              );
            },
            remove: function () {
              return (
                u.each(arguments, function (J, fe) {
                  for (var Y; (Y = u.inArray(fe, w, Y)) > -1; ) w.splice(Y, 1), Y <= k && k--;
                }),
                this
              );
            },
            has: function (J) {
              return J ? u.inArray(J, w) > -1 : w.length > 0;
            },
            empty: function () {
              return w && (w = []), this;
            },
            disable: function () {
              return (S = T = []), (w = g = ''), this;
            },
            disabled: function () {
              return !w;
            },
            lock: function () {
              return (S = T = []), !g && !c && (w = g = ''), this;
            },
            locked: function () {
              return !!S;
            },
            fireWith: function (J, fe) {
              return S || ((fe = fe || []), (fe = [J, fe.slice ? fe.slice() : fe]), T.push(fe), c || L()), this;
            },
            fire: function () {
              return K.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!m;
            },
          };
        return K;
      };
      function Q(a) {
        return a;
      }
      function Ce(a) {
        throw a;
      }
      function Se(a, c, g, m) {
        var S;
        try {
          a && C((S = a.promise))
            ? S.call(a).done(c).fail(g)
            : a && C((S = a.then))
            ? S.call(a, c, g)
            : c.apply(void 0, [a].slice(m));
        } catch (w) {
          g.apply(void 0, [w]);
        }
      }
      u.extend({
        Deferred: function (a) {
          var c = [
              ['notify', 'progress', u.Callbacks('memory'), u.Callbacks('memory'), 2],
              ['resolve', 'done', u.Callbacks('once memory'), u.Callbacks('once memory'), 0, 'resolved'],
              ['reject', 'fail', u.Callbacks('once memory'), u.Callbacks('once memory'), 1, 'rejected'],
            ],
            g = 'pending',
            m = {
              state: function () {
                return g;
              },
              always: function () {
                return S.done(arguments).fail(arguments), this;
              },
              catch: function (w) {
                return m.then(null, w);
              },
              pipe: function () {
                var w = arguments;
                return u
                  .Deferred(function (T) {
                    u.each(c, function (k, L) {
                      var K = C(w[L[4]]) && w[L[4]];
                      S[L[1]](function () {
                        var J = K && K.apply(this, arguments);
                        J && C(J.promise)
                          ? J.promise().progress(T.notify).done(T.resolve).fail(T.reject)
                          : T[L[0] + 'With'](this, K ? [J] : arguments);
                      });
                    }),
                      (w = null);
                  })
                  .promise();
              },
              then: function (w, T, k) {
                var L = 0;
                function K(J, fe, Y, te) {
                  return function () {
                    var qe = this,
                      dt = arguments,
                      Ge = function () {
                        var gn, Qn;
                        if (!(J < L)) {
                          if (((gn = Y.apply(qe, dt)), gn === fe.promise()))
                            throw new TypeError('Thenable self-resolution');
                          (Qn = gn && (typeof gn == 'object' || typeof gn == 'function') && gn.then),
                            C(Qn)
                              ? te
                                ? Qn.call(gn, K(L, fe, Q, te), K(L, fe, Ce, te))
                                : (L++, Qn.call(gn, K(L, fe, Q, te), K(L, fe, Ce, te), K(L, fe, Q, fe.notifyWith)))
                              : (Y !== Q && ((qe = void 0), (dt = [gn])), (te || fe.resolveWith)(qe, dt));
                        }
                      },
                      bn = te
                        ? Ge
                        : function () {
                            try {
                              Ge();
                            } catch (gn) {
                              u.Deferred.exceptionHook && u.Deferred.exceptionHook(gn, bn.stackTrace),
                                J + 1 >= L && (Y !== Ce && ((qe = void 0), (dt = [gn])), fe.rejectWith(qe, dt));
                            }
                          };
                    J
                      ? bn()
                      : (u.Deferred.getStackHook && (bn.stackTrace = u.Deferred.getStackHook()), t.setTimeout(bn));
                  };
                }
                return u
                  .Deferred(function (J) {
                    c[0][3].add(K(0, J, C(k) ? k : Q, J.notifyWith)),
                      c[1][3].add(K(0, J, C(w) ? w : Q)),
                      c[2][3].add(K(0, J, C(T) ? T : Ce));
                  })
                  .promise();
              },
              promise: function (w) {
                return w != null ? u.extend(w, m) : m;
              },
            },
            S = {};
          return (
            u.each(c, function (w, T) {
              var k = T[2],
                L = T[5];
              (m[T[1]] = k.add),
                L &&
                  k.add(
                    function () {
                      g = L;
                    },
                    c[3 - w][2].disable,
                    c[3 - w][3].disable,
                    c[0][2].lock,
                    c[0][3].lock,
                  ),
                k.add(T[3].fire),
                (S[T[0]] = function () {
                  return S[T[0] + 'With'](this === S ? void 0 : this, arguments), this;
                }),
                (S[T[0] + 'With'] = k.fireWith);
            }),
            m.promise(S),
            a && a.call(S, S),
            S
          );
        },
        when: function (a) {
          var c = arguments.length,
            g = c,
            m = Array(g),
            S = o.call(arguments),
            w = u.Deferred(),
            T = function (k) {
              return function (L) {
                (m[k] = this), (S[k] = arguments.length > 1 ? o.call(arguments) : L), --c || w.resolveWith(m, S);
              };
            };
          if (c <= 1 && (Se(a, w.done(T(g)).resolve, w.reject, !c), w.state() === 'pending' || C(S[g] && S[g].then)))
            return w.then();
          for (; g--; ) Se(S[g], T(g), w.reject);
          return w.promise();
        },
      });
      var me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (u.Deferred.exceptionHook = function (a, c) {
        t.console &&
          t.console.warn &&
          a &&
          me.test(a.name) &&
          t.console.warn('jQuery.Deferred exception: ' + a.message, a.stack, c);
      }),
        (u.readyException = function (a) {
          t.setTimeout(function () {
            throw a;
          });
        });
      var se = u.Deferred();
      (u.fn.ready = function (a) {
        return (
          se.then(a).catch(function (c) {
            u.readyException(c);
          }),
          this
        );
      }),
        u.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (a) {
            (a === !0 ? --u.readyWait : u.isReady) ||
              ((u.isReady = !0), !(a !== !0 && --u.readyWait > 0) && se.resolveWith(E, [u]));
          },
        }),
        (u.ready.then = se.then);
      function $e() {
        E.removeEventListener('DOMContentLoaded', $e), t.removeEventListener('load', $e), u.ready();
      }
      E.readyState === 'complete' || (E.readyState !== 'loading' && !E.documentElement.doScroll)
        ? t.setTimeout(u.ready)
        : (E.addEventListener('DOMContentLoaded', $e), t.addEventListener('load', $e));
      var Ee = function (a, c, g, m, S, w, T) {
          var k = 0,
            L = a.length,
            K = g == null;
          if (N(g) === 'object') {
            S = !0;
            for (k in g) Ee(a, c, k, g[k], !0, w, T);
          } else if (
            m !== void 0 &&
            ((S = !0),
            C(m) || (T = !0),
            K &&
              (T
                ? (c.call(a, m), (c = null))
                : ((K = c),
                  (c = function (J, fe, Y) {
                    return K.call(u(J), Y);
                  }))),
            c)
          )
            for (; k < L; k++) c(a[k], g, T ? m : m.call(a[k], k, c(a[k], g)));
          return S ? a : K ? c.call(a) : L ? c(a[0], g) : w;
        },
        Me = /^-ms-/,
        Le = /-([a-z])/g;
      function Re(a, c) {
        return c.toUpperCase();
      }
      function ne(a) {
        return a.replace(Me, 'ms-').replace(Le, Re);
      }
      var Te = function (a) {
        return a.nodeType === 1 || a.nodeType === 9 || !+a.nodeType;
      };
      function He() {
        this.expando = u.expando + He.uid++;
      }
      (He.uid = 1),
        (He.prototype = {
          cache: function (a) {
            var c = a[this.expando];
            return (
              c ||
                ((c = {}),
                Te(a) &&
                  (a.nodeType
                    ? (a[this.expando] = c)
                    : Object.defineProperty(a, this.expando, { value: c, configurable: !0 }))),
              c
            );
          },
          set: function (a, c, g) {
            var m,
              S = this.cache(a);
            if (typeof c == 'string') S[ne(c)] = g;
            else for (m in c) S[ne(m)] = c[m];
            return S;
          },
          get: function (a, c) {
            return c === void 0 ? this.cache(a) : a[this.expando] && a[this.expando][ne(c)];
          },
          access: function (a, c, g) {
            return c === void 0 || (c && typeof c == 'string' && g === void 0)
              ? this.get(a, c)
              : (this.set(a, c, g), g !== void 0 ? g : c);
          },
          remove: function (a, c) {
            var g,
              m = a[this.expando];
            if (m !== void 0) {
              if (c !== void 0)
                for (
                  Array.isArray(c) ? (c = c.map(ne)) : ((c = ne(c)), (c = (c in m) ? [c] : c.match(ce) || [])),
                    g = c.length;
                  g--;

                )
                  delete m[c[g]];
              (c === void 0 || u.isEmptyObject(m)) &&
                (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
            }
          },
          hasData: function (a) {
            var c = a[this.expando];
            return c !== void 0 && !u.isEmptyObject(c);
          },
        });
      var oe = new He(),
        ue = new He(),
        de = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Be = /[A-Z]/g;
      function Xe(a) {
        return a === 'true'
          ? !0
          : a === 'false'
          ? !1
          : a === 'null'
          ? null
          : a === +a + ''
          ? +a
          : de.test(a)
          ? JSON.parse(a)
          : a;
      }
      function Ct(a, c, g) {
        var m;
        if (g === void 0 && a.nodeType === 1)
          if (((m = 'data-' + c.replace(Be, '-$&').toLowerCase()), (g = a.getAttribute(m)), typeof g == 'string')) {
            try {
              g = Xe(g);
            } catch {}
            ue.set(a, c, g);
          } else g = void 0;
        return g;
      }
      u.extend({
        hasData: function (a) {
          return ue.hasData(a) || oe.hasData(a);
        },
        data: function (a, c, g) {
          return ue.access(a, c, g);
        },
        removeData: function (a, c) {
          ue.remove(a, c);
        },
        _data: function (a, c, g) {
          return oe.access(a, c, g);
        },
        _removeData: function (a, c) {
          oe.remove(a, c);
        },
      }),
        u.fn.extend({
          data: function (a, c) {
            var g,
              m,
              S,
              w = this[0],
              T = w && w.attributes;
            if (a === void 0) {
              if (this.length && ((S = ue.get(w)), w.nodeType === 1 && !oe.get(w, 'hasDataAttrs'))) {
                for (g = T.length; g--; )
                  T[g] && ((m = T[g].name), m.indexOf('data-') === 0 && ((m = ne(m.slice(5))), Ct(w, m, S[m])));
                oe.set(w, 'hasDataAttrs', !0);
              }
              return S;
            }
            return typeof a == 'object'
              ? this.each(function () {
                  ue.set(this, a);
                })
              : Ee(
                  this,
                  function (k) {
                    var L;
                    if (w && k === void 0)
                      return (L = ue.get(w, a)), L !== void 0 || ((L = Ct(w, a)), L !== void 0) ? L : void 0;
                    this.each(function () {
                      ue.set(this, a, k);
                    });
                  },
                  null,
                  c,
                  arguments.length > 1,
                  null,
                  !0,
                );
          },
          removeData: function (a) {
            return this.each(function () {
              ue.remove(this, a);
            });
          },
        }),
        u.extend({
          queue: function (a, c, g) {
            var m;
            if (a)
              return (
                (c = (c || 'fx') + 'queue'),
                (m = oe.get(a, c)),
                g && (!m || Array.isArray(g) ? (m = oe.access(a, c, u.makeArray(g))) : m.push(g)),
                m || []
              );
          },
          dequeue: function (a, c) {
            c = c || 'fx';
            var g = u.queue(a, c),
              m = g.length,
              S = g.shift(),
              w = u._queueHooks(a, c),
              T = function () {
                u.dequeue(a, c);
              };
            S === 'inprogress' && ((S = g.shift()), m--),
              S && (c === 'fx' && g.unshift('inprogress'), delete w.stop, S.call(a, T, w)),
              !m && w && w.empty.fire();
          },
          _queueHooks: function (a, c) {
            var g = c + 'queueHooks';
            return (
              oe.get(a, g) ||
              oe.access(a, g, {
                empty: u.Callbacks('once memory').add(function () {
                  oe.remove(a, [c + 'queue', g]);
                }),
              })
            );
          },
        }),
        u.fn.extend({
          queue: function (a, c) {
            var g = 2;
            return (
              typeof a != 'string' && ((c = a), (a = 'fx'), g--),
              arguments.length < g
                ? u.queue(this[0], a)
                : c === void 0
                ? this
                : this.each(function () {
                    var m = u.queue(this, a, c);
                    u._queueHooks(this, a), a === 'fx' && m[0] !== 'inprogress' && u.dequeue(this, a);
                  })
            );
          },
          dequeue: function (a) {
            return this.each(function () {
              u.dequeue(this, a);
            });
          },
          clearQueue: function (a) {
            return this.queue(a || 'fx', []);
          },
          promise: function (a, c) {
            var g,
              m = 1,
              S = u.Deferred(),
              w = this,
              T = this.length,
              k = function () {
                --m || S.resolveWith(w, [w]);
              };
            for (typeof a != 'string' && ((c = a), (a = void 0)), a = a || 'fx'; T--; )
              (g = oe.get(w[T], a + 'queueHooks')), g && g.empty && (m++, g.empty.add(k));
            return k(), S.promise(c);
          },
        });
      var _t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        $t = new RegExp('^(?:([+-])=|)(' + _t + ')([a-z%]*)$', 'i'),
        ht = ['Top', 'Right', 'Bottom', 'Left'],
        vt = E.documentElement,
        pt = function (a) {
          return u.contains(a.ownerDocument, a);
        },
        Kt = { composed: !0 };
      vt.getRootNode &&
        (pt = function (a) {
          return u.contains(a.ownerDocument, a) || a.getRootNode(Kt) === a.ownerDocument;
        });
      var Tt = function (a, c) {
        return (
          (a = c || a),
          a.style.display === 'none' || (a.style.display === '' && pt(a) && u.css(a, 'display') === 'none')
        );
      };
      function at(a, c, g, m) {
        var S,
          w,
          T = 20,
          k = m
            ? function () {
                return m.cur();
              }
            : function () {
                return u.css(a, c, '');
              },
          L = k(),
          K = (g && g[3]) || (u.cssNumber[c] ? '' : 'px'),
          J = a.nodeType && (u.cssNumber[c] || (K !== 'px' && +L)) && $t.exec(u.css(a, c));
        if (J && J[3] !== K) {
          for (L = L / 2, K = K || J[3], J = +L || 1; T--; )
            u.style(a, c, J + K), (1 - w) * (1 - (w = k() / L || 0.5)) <= 0 && (T = 0), (J = J / w);
          (J = J * 2), u.style(a, c, J + K), (g = g || []);
        }
        return (
          g &&
            ((J = +J || +L || 0),
            (S = g[1] ? J + (g[1] + 1) * g[2] : +g[2]),
            m && ((m.unit = K), (m.start = J), (m.end = S))),
          S
        );
      }
      var tt = {};
      function Xt(a) {
        var c,
          g = a.ownerDocument,
          m = a.nodeName,
          S = tt[m];
        return (
          S ||
          ((c = g.body.appendChild(g.createElement(m))),
          (S = u.css(c, 'display')),
          c.parentNode.removeChild(c),
          S === 'none' && (S = 'block'),
          (tt[m] = S),
          S)
        );
      }
      function zt(a, c) {
        for (var g, m, S = [], w = 0, T = a.length; w < T; w++)
          (m = a[w]),
            m.style &&
              ((g = m.style.display),
              c
                ? (g === 'none' && ((S[w] = oe.get(m, 'display') || null), S[w] || (m.style.display = '')),
                  m.style.display === '' && Tt(m) && (S[w] = Xt(m)))
                : g !== 'none' && ((S[w] = 'none'), oe.set(m, 'display', g)));
        for (w = 0; w < T; w++) S[w] != null && (a[w].style.display = S[w]);
        return a;
      }
      u.fn.extend({
        show: function () {
          return zt(this, !0);
        },
        hide: function () {
          return zt(this);
        },
        toggle: function (a) {
          return typeof a == 'boolean'
            ? a
              ? this.show()
              : this.hide()
            : this.each(function () {
                Tt(this) ? u(this).show() : u(this).hide();
              });
        },
      });
      var Ve = /^(?:checkbox|radio)$/i,
        nt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        It = /^$|^module$|\/(?:java|ecma)script/i;
      (function () {
        var a = E.createDocumentFragment(),
          c = a.appendChild(E.createElement('div')),
          g = E.createElement('input');
        g.setAttribute('type', 'radio'),
          g.setAttribute('checked', 'checked'),
          g.setAttribute('name', 't'),
          c.appendChild(g),
          (y.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (c.innerHTML = '<textarea>x</textarea>'),
          (y.noCloneChecked = !!c.cloneNode(!0).lastChild.defaultValue),
          (c.innerHTML = '<option></option>'),
          (y.option = !!c.lastChild);
      })();
      var gt = {
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', ''],
      };
      (gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead),
        (gt.th = gt.td),
        y.option || (gt.optgroup = gt.option = [1, "<select multiple='multiple'>", '</select>']);
      function lt(a, c) {
        var g;
        return (
          typeof a.getElementsByTagName < 'u'
            ? (g = a.getElementsByTagName(c || '*'))
            : typeof a.querySelectorAll < 'u'
            ? (g = a.querySelectorAll(c || '*'))
            : (g = []),
          c === void 0 || (c && F(a, c)) ? u.merge([a], g) : g
        );
      }
      function Lt(a, c) {
        for (var g = 0, m = a.length; g < m; g++) oe.set(a[g], 'globalEval', !c || oe.get(c[g], 'globalEval'));
      }
      var Ut = /<|&#?\w+;/;
      function Pe(a, c, g, m, S) {
        for (var w, T, k, L, K, J, fe = c.createDocumentFragment(), Y = [], te = 0, qe = a.length; te < qe; te++)
          if (((w = a[te]), w || w === 0))
            if (N(w) === 'object') u.merge(Y, w.nodeType ? [w] : w);
            else if (!Ut.test(w)) Y.push(c.createTextNode(w));
            else {
              for (
                T = T || fe.appendChild(c.createElement('div')),
                  k = (nt.exec(w) || ['', ''])[1].toLowerCase(),
                  L = gt[k] || gt._default,
                  T.innerHTML = L[1] + u.htmlPrefilter(w) + L[2],
                  J = L[0];
                J--;

              )
                T = T.lastChild;
              u.merge(Y, T.childNodes), (T = fe.firstChild), (T.textContent = '');
            }
        for (fe.textContent = '', te = 0; (w = Y[te++]); ) {
          if (m && u.inArray(w, m) > -1) {
            S && S.push(w);
            continue;
          }
          if (((K = pt(w)), (T = lt(fe.appendChild(w), 'script')), K && Lt(T), g))
            for (J = 0; (w = T[J++]); ) It.test(w.type || '') && g.push(w);
        }
        return fe;
      }
      var ke = /^([^.]*)(?:\.(.+)|)/;
      function mt() {
        return !0;
      }
      function ct() {
        return !1;
      }
      function wt(a, c) {
        return (a === pn()) == (c === 'focus');
      }
      function pn() {
        try {
          return E.activeElement;
        } catch {}
      }
      function Gt(a, c, g, m, S, w) {
        var T, k;
        if (typeof c == 'object') {
          typeof g != 'string' && ((m = m || g), (g = void 0));
          for (k in c) Gt(a, k, g, m, c[k], w);
          return a;
        }
        if (
          (m == null && S == null
            ? ((S = g), (m = g = void 0))
            : S == null && (typeof g == 'string' ? ((S = m), (m = void 0)) : ((S = m), (m = g), (g = void 0))),
          S === !1)
        )
          S = ct;
        else if (!S) return a;
        return (
          w === 1 &&
            ((T = S),
            (S = function (L) {
              return u().off(L), T.apply(this, arguments);
            }),
            (S.guid = T.guid || (T.guid = u.guid++))),
          a.each(function () {
            u.event.add(this, c, S, m, g);
          })
        );
      }
      u.event = {
        global: {},
        add: function (a, c, g, m, S) {
          var w,
            T,
            k,
            L,
            K,
            J,
            fe,
            Y,
            te,
            qe,
            dt,
            Ge = oe.get(a);
          if (Te(a))
            for (
              g.handler && ((w = g), (g = w.handler), (S = w.selector)),
                S && u.find.matchesSelector(vt, S),
                g.guid || (g.guid = u.guid++),
                (L = Ge.events) || (L = Ge.events = Object.create(null)),
                (T = Ge.handle) ||
                  (T = Ge.handle =
                    function (bn) {
                      return typeof u < 'u' && u.event.triggered !== bn.type
                        ? u.event.dispatch.apply(a, arguments)
                        : void 0;
                    }),
                c = (c || '').match(ce) || [''],
                K = c.length;
              K--;

            )
              (k = ke.exec(c[K]) || []),
                (te = dt = k[1]),
                (qe = (k[2] || '').split('.').sort()),
                te &&
                  ((fe = u.event.special[te] || {}),
                  (te = (S ? fe.delegateType : fe.bindType) || te),
                  (fe = u.event.special[te] || {}),
                  (J = u.extend(
                    {
                      type: te,
                      origType: dt,
                      data: m,
                      handler: g,
                      guid: g.guid,
                      selector: S,
                      needsContext: S && u.expr.match.needsContext.test(S),
                      namespace: qe.join('.'),
                    },
                    w,
                  )),
                  (Y = L[te]) ||
                    ((Y = L[te] = []),
                    (Y.delegateCount = 0),
                    (!fe.setup || fe.setup.call(a, m, qe, T) === !1) &&
                      a.addEventListener &&
                      a.addEventListener(te, T)),
                  fe.add && (fe.add.call(a, J), J.handler.guid || (J.handler.guid = g.guid)),
                  S ? Y.splice(Y.delegateCount++, 0, J) : Y.push(J),
                  (u.event.global[te] = !0));
        },
        remove: function (a, c, g, m, S) {
          var w,
            T,
            k,
            L,
            K,
            J,
            fe,
            Y,
            te,
            qe,
            dt,
            Ge = oe.hasData(a) && oe.get(a);
          if (!(!Ge || !(L = Ge.events))) {
            for (c = (c || '').match(ce) || [''], K = c.length; K--; ) {
              if (((k = ke.exec(c[K]) || []), (te = dt = k[1]), (qe = (k[2] || '').split('.').sort()), !te)) {
                for (te in L) u.event.remove(a, te + c[K], g, m, !0);
                continue;
              }
              for (
                fe = u.event.special[te] || {},
                  te = (m ? fe.delegateType : fe.bindType) || te,
                  Y = L[te] || [],
                  k = k[2] && new RegExp('(^|\\.)' + qe.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                  T = w = Y.length;
                w--;

              )
                (J = Y[w]),
                  (S || dt === J.origType) &&
                    (!g || g.guid === J.guid) &&
                    (!k || k.test(J.namespace)) &&
                    (!m || m === J.selector || (m === '**' && J.selector)) &&
                    (Y.splice(w, 1), J.selector && Y.delegateCount--, fe.remove && fe.remove.call(a, J));
              T &&
                !Y.length &&
                ((!fe.teardown || fe.teardown.call(a, qe, Ge.handle) === !1) && u.removeEvent(a, te, Ge.handle),
                delete L[te]);
            }
            u.isEmptyObject(L) && oe.remove(a, 'handle events');
          }
        },
        dispatch: function (a) {
          var c,
            g,
            m,
            S,
            w,
            T,
            k = new Array(arguments.length),
            L = u.event.fix(a),
            K = (oe.get(this, 'events') || Object.create(null))[L.type] || [],
            J = u.event.special[L.type] || {};
          for (k[0] = L, c = 1; c < arguments.length; c++) k[c] = arguments[c];
          if (((L.delegateTarget = this), !(J.preDispatch && J.preDispatch.call(this, L) === !1))) {
            for (T = u.event.handlers.call(this, L, K), c = 0; (S = T[c++]) && !L.isPropagationStopped(); )
              for (L.currentTarget = S.elem, g = 0; (w = S.handlers[g++]) && !L.isImmediatePropagationStopped(); )
                (!L.rnamespace || w.namespace === !1 || L.rnamespace.test(w.namespace)) &&
                  ((L.handleObj = w),
                  (L.data = w.data),
                  (m = ((u.event.special[w.origType] || {}).handle || w.handler).apply(S.elem, k)),
                  m !== void 0 && (L.result = m) === !1 && (L.preventDefault(), L.stopPropagation()));
            return J.postDispatch && J.postDispatch.call(this, L), L.result;
          }
        },
        handlers: function (a, c) {
          var g,
            m,
            S,
            w,
            T,
            k = [],
            L = c.delegateCount,
            K = a.target;
          if (L && K.nodeType && !(a.type === 'click' && a.button >= 1)) {
            for (; K !== this; K = K.parentNode || this)
              if (K.nodeType === 1 && !(a.type === 'click' && K.disabled === !0)) {
                for (w = [], T = {}, g = 0; g < L; g++)
                  (m = c[g]),
                    (S = m.selector + ' '),
                    T[S] === void 0 &&
                      (T[S] = m.needsContext ? u(S, this).index(K) > -1 : u.find(S, this, null, [K]).length),
                    T[S] && w.push(m);
                w.length && k.push({ elem: K, handlers: w });
              }
          }
          return (K = this), L < c.length && k.push({ elem: K, handlers: c.slice(L) }), k;
        },
        addProp: function (a, c) {
          Object.defineProperty(u.Event.prototype, a, {
            enumerable: !0,
            configurable: !0,
            get: C(c)
              ? function () {
                  if (this.originalEvent) return c(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[a];
                },
            set: function (g) {
              Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: g });
            },
          });
        },
        fix: function (a) {
          return a[u.expando] ? a : new u.Event(a);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (a) {
              var c = this || a;
              return Ve.test(c.type) && c.click && F(c, 'input') && ve(c, 'click', mt), !1;
            },
            trigger: function (a) {
              var c = this || a;
              return Ve.test(c.type) && c.click && F(c, 'input') && ve(c, 'click'), !0;
            },
            _default: function (a) {
              var c = a.target;
              return (Ve.test(c.type) && c.click && F(c, 'input') && oe.get(c, 'click')) || F(c, 'a');
            },
          },
          beforeunload: {
            postDispatch: function (a) {
              a.result !== void 0 && a.originalEvent && (a.originalEvent.returnValue = a.result);
            },
          },
        },
      };
      function ve(a, c, g) {
        if (!g) {
          oe.get(a, c) === void 0 && u.event.add(a, c, mt);
          return;
        }
        oe.set(a, c, !1),
          u.event.add(a, c, {
            namespace: !1,
            handler: function (m) {
              var S,
                w,
                T = oe.get(this, c);
              if (m.isTrigger & 1 && this[c]) {
                if (T.length) (u.event.special[c] || {}).delegateType && m.stopPropagation();
                else if (
                  ((T = o.call(arguments)),
                  oe.set(this, c, T),
                  (S = g(this, c)),
                  this[c](),
                  (w = oe.get(this, c)),
                  T !== w || S ? oe.set(this, c, !1) : (w = {}),
                  T !== w)
                )
                  return m.stopImmediatePropagation(), m.preventDefault(), w && w.value;
              } else
                T.length &&
                  (oe.set(this, c, { value: u.event.trigger(u.extend(T[0], u.Event.prototype), T.slice(1), this) }),
                  m.stopImmediatePropagation());
            },
          });
      }
      (u.removeEvent = function (a, c, g) {
        a.removeEventListener && a.removeEventListener(c, g);
      }),
        (u.Event = function (a, c) {
          if (!(this instanceof u.Event)) return new u.Event(a, c);
          a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented || (a.defaultPrevented === void 0 && a.returnValue === !1) ? mt : ct),
              (this.target = a.target && a.target.nodeType === 3 ? a.target.parentNode : a.target),
              (this.currentTarget = a.currentTarget),
              (this.relatedTarget = a.relatedTarget))
            : (this.type = a),
            c && u.extend(this, c),
            (this.timeStamp = (a && a.timeStamp) || Date.now()),
            (this[u.expando] = !0);
        }),
        (u.Event.prototype = {
          constructor: u.Event,
          isDefaultPrevented: ct,
          isPropagationStopped: ct,
          isImmediatePropagationStopped: ct,
          isSimulated: !1,
          preventDefault: function () {
            var a = this.originalEvent;
            (this.isDefaultPrevented = mt), a && !this.isSimulated && a.preventDefault();
          },
          stopPropagation: function () {
            var a = this.originalEvent;
            (this.isPropagationStopped = mt), a && !this.isSimulated && a.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var a = this.originalEvent;
            (this.isImmediatePropagationStopped = mt),
              a && !this.isSimulated && a.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        u.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          u.event.addProp,
        ),
        u.each({ focus: 'focusin', blur: 'focusout' }, function (a, c) {
          u.event.special[a] = {
            setup: function () {
              return ve(this, a, wt), !1;
            },
            trigger: function () {
              return ve(this, a), !0;
            },
            _default: function (g) {
              return oe.get(g.target, a);
            },
            delegateType: c,
          };
        }),
        u.each(
          { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
          function (a, c) {
            u.event.special[a] = {
              delegateType: c,
              bindType: c,
              handle: function (g) {
                var m,
                  S = this,
                  w = g.relatedTarget,
                  T = g.handleObj;
                return (
                  (!w || (w !== S && !u.contains(S, w))) &&
                    ((g.type = T.origType), (m = T.handler.apply(this, arguments)), (g.type = c)),
                  m
                );
              },
            };
          },
        ),
        u.fn.extend({
          on: function (a, c, g, m) {
            return Gt(this, a, c, g, m);
          },
          one: function (a, c, g, m) {
            return Gt(this, a, c, g, m, 1);
          },
          off: function (a, c, g) {
            var m, S;
            if (a && a.preventDefault && a.handleObj)
              return (
                (m = a.handleObj),
                u(a.delegateTarget).off(
                  m.namespace ? m.origType + '.' + m.namespace : m.origType,
                  m.selector,
                  m.handler,
                ),
                this
              );
            if (typeof a == 'object') {
              for (S in a) this.off(S, c, a[S]);
              return this;
            }
            return (
              (c === !1 || typeof c == 'function') && ((g = c), (c = void 0)),
              g === !1 && (g = ct),
              this.each(function () {
                u.event.remove(this, a, g, c);
              })
            );
          },
        });
      var Oe = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function ft(a, c) {
        return (F(a, 'table') && F(c.nodeType !== 11 ? c : c.firstChild, 'tr') && u(a).children('tbody')[0]) || a;
      }
      function Pt(a) {
        return (a.type = (a.getAttribute('type') !== null) + '/' + a.type), a;
      }
      function Tn(a) {
        return (a.type || '').slice(0, 5) === 'true/' ? (a.type = a.type.slice(5)) : a.removeAttribute('type'), a;
      }
      function wn(a, c) {
        var g, m, S, w, T, k, L;
        if (c.nodeType === 1) {
          if (oe.hasData(a) && ((w = oe.get(a)), (L = w.events), L)) {
            oe.remove(c, 'handle events');
            for (S in L) for (g = 0, m = L[S].length; g < m; g++) u.event.add(c, S, L[S][g]);
          }
          ue.hasData(a) && ((T = ue.access(a)), (k = u.extend({}, T)), ue.set(c, k));
        }
      }
      function Fn(a, c) {
        var g = c.nodeName.toLowerCase();
        g === 'input' && Ve.test(a.type)
          ? (c.checked = a.checked)
          : (g === 'input' || g === 'textarea') && (c.defaultValue = a.defaultValue);
      }
      function Dt(a, c, g, m) {
        c = l(c);
        var S,
          w,
          T,
          k,
          L,
          K,
          J = 0,
          fe = a.length,
          Y = fe - 1,
          te = c[0],
          qe = C(te);
        if (qe || (fe > 1 && typeof te == 'string' && !y.checkClone && Ne.test(te)))
          return a.each(function (dt) {
            var Ge = a.eq(dt);
            qe && (c[0] = te.call(this, dt, Ge.html())), Dt(Ge, c, g, m);
          });
        if (
          fe &&
          ((S = Pe(c, a[0].ownerDocument, !1, a, m)), (w = S.firstChild), S.childNodes.length === 1 && (S = w), w || m)
        ) {
          for (T = u.map(lt(S, 'script'), Pt), k = T.length; J < fe; J++)
            (L = S), J !== Y && ((L = u.clone(L, !0, !0)), k && u.merge(T, lt(L, 'script'))), g.call(a[J], L, J);
          if (k)
            for (K = T[T.length - 1].ownerDocument, u.map(T, Tn), J = 0; J < k; J++)
              (L = T[J]),
                It.test(L.type || '') &&
                  !oe.access(L, 'globalEval') &&
                  u.contains(K, L) &&
                  (L.src && (L.type || '').toLowerCase() !== 'module'
                    ? u._evalUrl && !L.noModule && u._evalUrl(L.src, { nonce: L.nonce || L.getAttribute('nonce') }, K)
                    : P(L.textContent.replace(Ue, ''), L, K));
        }
        return a;
      }
      function En(a, c, g) {
        for (var m, S = c ? u.filter(c, a) : a, w = 0; (m = S[w]) != null; w++)
          !g && m.nodeType === 1 && u.cleanData(lt(m)),
            m.parentNode && (g && pt(m) && Lt(lt(m, 'script')), m.parentNode.removeChild(m));
        return a;
      }
      u.extend({
        htmlPrefilter: function (a) {
          return a;
        },
        clone: function (a, c, g) {
          var m,
            S,
            w,
            T,
            k = a.cloneNode(!0),
            L = pt(a);
          if (!y.noCloneChecked && (a.nodeType === 1 || a.nodeType === 11) && !u.isXMLDoc(a))
            for (T = lt(k), w = lt(a), m = 0, S = w.length; m < S; m++) Fn(w[m], T[m]);
          if (c)
            if (g) for (w = w || lt(a), T = T || lt(k), m = 0, S = w.length; m < S; m++) wn(w[m], T[m]);
            else wn(a, k);
          return (T = lt(k, 'script')), T.length > 0 && Lt(T, !L && lt(a, 'script')), k;
        },
        cleanData: function (a) {
          for (var c, g, m, S = u.event.special, w = 0; (g = a[w]) !== void 0; w++)
            if (Te(g)) {
              if ((c = g[oe.expando])) {
                if (c.events) for (m in c.events) S[m] ? u.event.remove(g, m) : u.removeEvent(g, m, c.handle);
                g[oe.expando] = void 0;
              }
              g[ue.expando] && (g[ue.expando] = void 0);
            }
        },
      }),
        u.fn.extend({
          detach: function (a) {
            return En(this, a, !0);
          },
          remove: function (a) {
            return En(this, a);
          },
          text: function (a) {
            return Ee(
              this,
              function (c) {
                return c === void 0
                  ? u.text(this)
                  : this.empty().each(function () {
                      (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = c);
                    });
              },
              null,
              a,
              arguments.length,
            );
          },
          append: function () {
            return Dt(this, arguments, function (a) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var c = ft(this, a);
                c.appendChild(a);
              }
            });
          },
          prepend: function () {
            return Dt(this, arguments, function (a) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var c = ft(this, a);
                c.insertBefore(a, c.firstChild);
              }
            });
          },
          before: function () {
            return Dt(this, arguments, function (a) {
              this.parentNode && this.parentNode.insertBefore(a, this);
            });
          },
          after: function () {
            return Dt(this, arguments, function (a) {
              this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
          },
          empty: function () {
            for (var a, c = 0; (a = this[c]) != null; c++)
              a.nodeType === 1 && (u.cleanData(lt(a, !1)), (a.textContent = ''));
            return this;
          },
          clone: function (a, c) {
            return (
              (a = a ?? !1),
              (c = c ?? a),
              this.map(function () {
                return u.clone(this, a, c);
              })
            );
          },
          html: function (a) {
            return Ee(
              this,
              function (c) {
                var g = this[0] || {},
                  m = 0,
                  S = this.length;
                if (c === void 0 && g.nodeType === 1) return g.innerHTML;
                if (typeof c == 'string' && !Oe.test(c) && !gt[(nt.exec(c) || ['', ''])[1].toLowerCase()]) {
                  c = u.htmlPrefilter(c);
                  try {
                    for (; m < S; m++)
                      (g = this[m] || {}), g.nodeType === 1 && (u.cleanData(lt(g, !1)), (g.innerHTML = c));
                    g = 0;
                  } catch {}
                }
                g && this.empty().append(c);
              },
              null,
              a,
              arguments.length,
            );
          },
          replaceWith: function () {
            var a = [];
            return Dt(
              this,
              arguments,
              function (c) {
                var g = this.parentNode;
                u.inArray(this, a) < 0 && (u.cleanData(lt(this)), g && g.replaceChild(c, this));
              },
              a,
            );
          },
        }),
        u.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith',
          },
          function (a, c) {
            u.fn[a] = function (g) {
              for (var m, S = [], w = u(g), T = w.length - 1, k = 0; k <= T; k++)
                (m = k === T ? this : this.clone(!0)), u(w[k])[c](m), s.apply(S, m.get());
              return this.pushStack(S);
            };
          },
        );
      var Yn = new RegExp('^(' + _t + ')(?!px)[a-z%]+$', 'i'),
        vn = /^--/,
        hr = function (a) {
          var c = a.ownerDocument.defaultView;
          return (!c || !c.opener) && (c = t), c.getComputedStyle(a);
        },
        In = function (a, c, g) {
          var m,
            S,
            w = {};
          for (S in c) (w[S] = a.style[S]), (a.style[S] = c[S]);
          m = g.call(a);
          for (S in c) a.style[S] = w[S];
          return m;
        },
        jn = new RegExp(ht.join('|'), 'i'),
        Jr = '[\\x20\\t\\r\\n\\f]',
        Zr = new RegExp('^' + Jr + '+|((?:^|[^\\\\])(?:\\\\.)*)' + Jr + '+$', 'g');
      (function () {
        function a() {
          if (K) {
            (L.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (K.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              vt.appendChild(L).appendChild(K);
            var J = t.getComputedStyle(K);
            (g = J.top !== '1%'),
              (k = c(J.marginLeft) === 12),
              (K.style.right = '60%'),
              (w = c(J.right) === 36),
              (m = c(J.width) === 36),
              (K.style.position = 'absolute'),
              (S = c(K.offsetWidth / 3) === 12),
              vt.removeChild(L),
              (K = null);
          }
        }
        function c(J) {
          return Math.round(parseFloat(J));
        }
        var g,
          m,
          S,
          w,
          T,
          k,
          L = E.createElement('div'),
          K = E.createElement('div');
        K.style &&
          ((K.style.backgroundClip = 'content-box'),
          (K.cloneNode(!0).style.backgroundClip = ''),
          (y.clearCloneStyle = K.style.backgroundClip === 'content-box'),
          u.extend(y, {
            boxSizingReliable: function () {
              return a(), m;
            },
            pixelBoxStyles: function () {
              return a(), w;
            },
            pixelPosition: function () {
              return a(), g;
            },
            reliableMarginLeft: function () {
              return a(), k;
            },
            scrollboxSize: function () {
              return a(), S;
            },
            reliableTrDimensions: function () {
              var J, fe, Y, te;
              return (
                T == null &&
                  ((J = E.createElement('table')),
                  (fe = E.createElement('tr')),
                  (Y = E.createElement('div')),
                  (J.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate'),
                  (fe.style.cssText = 'border:1px solid'),
                  (fe.style.height = '1px'),
                  (Y.style.height = '9px'),
                  (Y.style.display = 'block'),
                  vt.appendChild(J).appendChild(fe).appendChild(Y),
                  (te = t.getComputedStyle(fe)),
                  (T =
                    parseInt(te.height, 10) + parseInt(te.borderTopWidth, 10) + parseInt(te.borderBottomWidth, 10) ===
                    fe.offsetHeight),
                  vt.removeChild(J)),
                T
              );
            },
          }));
      })();
      function sr(a, c, g) {
        var m,
          S,
          w,
          T,
          k = vn.test(c),
          L = a.style;
        return (
          (g = g || hr(a)),
          g &&
            ((T = g.getPropertyValue(c) || g[c]),
            k && T && (T = T.replace(Zr, '$1') || void 0),
            T === '' && !pt(a) && (T = u.style(a, c)),
            !y.pixelBoxStyles() &&
              Yn.test(T) &&
              jn.test(c) &&
              ((m = L.width),
              (S = L.minWidth),
              (w = L.maxWidth),
              (L.minWidth = L.maxWidth = L.width = T),
              (T = g.width),
              (L.width = m),
              (L.minWidth = S),
              (L.maxWidth = w))),
          T !== void 0 ? T + '' : T
        );
      }
      function ei(a, c) {
        return {
          get: function () {
            if (a()) {
              delete this.get;
              return;
            }
            return (this.get = c).apply(this, arguments);
          },
        };
      }
      var Nn = ['Webkit', 'Moz', 'ms'],
        ln = E.createElement('div').style,
        Hn = {};
      function Ei(a) {
        for (var c = a[0].toUpperCase() + a.slice(1), g = Nn.length; g--; ) if (((a = Nn[g] + c), a in ln)) return a;
      }
      function mr(a) {
        var c = u.cssProps[a] || Hn[a];
        return c || (a in ln ? a : (Hn[a] = Ei(a) || a));
      }
      var $i = /^(none|table(?!-c[ea]).+)/,
        ti = { position: 'absolute', visibility: 'hidden', display: 'block' },
        Cr = { letterSpacing: '0', fontWeight: '400' };
      function Rr(a, c, g) {
        var m = $t.exec(c);
        return m ? Math.max(0, m[2] - (g || 0)) + (m[3] || 'px') : c;
      }
      function Mr(a, c, g, m, S, w) {
        var T = c === 'width' ? 1 : 0,
          k = 0,
          L = 0;
        if (g === (m ? 'border' : 'content')) return 0;
        for (; T < 4; T += 2)
          g === 'margin' && (L += u.css(a, g + ht[T], !0, S)),
            m
              ? (g === 'content' && (L -= u.css(a, 'padding' + ht[T], !0, S)),
                g !== 'margin' && (L -= u.css(a, 'border' + ht[T] + 'Width', !0, S)))
              : ((L += u.css(a, 'padding' + ht[T], !0, S)),
                g !== 'padding'
                  ? (L += u.css(a, 'border' + ht[T] + 'Width', !0, S))
                  : (k += u.css(a, 'border' + ht[T] + 'Width', !0, S)));
        return (
          !m &&
            w >= 0 &&
            (L += Math.max(0, Math.ceil(a['offset' + c[0].toUpperCase() + c.slice(1)] - w - L - k - 0.5)) || 0),
          L
        );
      }
      function ni(a, c, g) {
        var m = hr(a),
          S = !y.boxSizingReliable() || g,
          w = S && u.css(a, 'boxSizing', !1, m) === 'border-box',
          T = w,
          k = sr(a, c, m),
          L = 'offset' + c[0].toUpperCase() + c.slice(1);
        if (Yn.test(k)) {
          if (!g) return k;
          k = 'auto';
        }
        return (
          ((!y.boxSizingReliable() && w) ||
            (!y.reliableTrDimensions() && F(a, 'tr')) ||
            k === 'auto' ||
            (!parseFloat(k) && u.css(a, 'display', !1, m) === 'inline')) &&
            a.getClientRects().length &&
            ((w = u.css(a, 'boxSizing', !1, m) === 'border-box'), (T = L in a), T && (k = a[L])),
          (k = parseFloat(k) || 0),
          k + Mr(a, c, g || (w ? 'border' : 'content'), T, m, k) + 'px'
        );
      }
      u.extend({
        cssHooks: {
          opacity: {
            get: function (a, c) {
              if (c) {
                var g = sr(a, 'opacity');
                return g === '' ? '1' : g;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (a, c, g, m) {
          if (!(!a || a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
            var S,
              w,
              T,
              k = ne(c),
              L = vn.test(c),
              K = a.style;
            if ((L || (c = mr(k)), (T = u.cssHooks[c] || u.cssHooks[k]), g !== void 0)) {
              if (
                ((w = typeof g),
                w === 'string' && (S = $t.exec(g)) && S[1] && ((g = at(a, c, S)), (w = 'number')),
                g == null || g !== g)
              )
                return;
              w === 'number' && !L && (g += (S && S[3]) || (u.cssNumber[k] ? '' : 'px')),
                !y.clearCloneStyle && g === '' && c.indexOf('background') === 0 && (K[c] = 'inherit'),
                (!T || !('set' in T) || (g = T.set(a, g, m)) !== void 0) && (L ? K.setProperty(c, g) : (K[c] = g));
            } else return T && 'get' in T && (S = T.get(a, !1, m)) !== void 0 ? S : K[c];
          }
        },
        css: function (a, c, g, m) {
          var S,
            w,
            T,
            k = ne(c),
            L = vn.test(c);
          return (
            L || (c = mr(k)),
            (T = u.cssHooks[c] || u.cssHooks[k]),
            T && 'get' in T && (S = T.get(a, !0, g)),
            S === void 0 && (S = sr(a, c, m)),
            S === 'normal' && c in Cr && (S = Cr[c]),
            g === '' || g ? ((w = parseFloat(S)), g === !0 || isFinite(w) ? w || 0 : S) : S
          );
        },
      }),
        u.each(['height', 'width'], function (a, c) {
          u.cssHooks[c] = {
            get: function (g, m, S) {
              if (m)
                return $i.test(u.css(g, 'display')) && (!g.getClientRects().length || !g.getBoundingClientRect().width)
                  ? In(g, ti, function () {
                      return ni(g, c, S);
                    })
                  : ni(g, c, S);
            },
            set: function (g, m, S) {
              var w,
                T = hr(g),
                k = !y.scrollboxSize() && T.position === 'absolute',
                L = k || S,
                K = L && u.css(g, 'boxSizing', !1, T) === 'border-box',
                J = S ? Mr(g, c, S, K, T) : 0;
              return (
                K &&
                  k &&
                  (J -= Math.ceil(
                    g['offset' + c[0].toUpperCase() + c.slice(1)] - parseFloat(T[c]) - Mr(g, c, 'border', !1, T) - 0.5,
                  )),
                J && (w = $t.exec(m)) && (w[3] || 'px') !== 'px' && ((g.style[c] = m), (m = u.css(g, c))),
                Rr(g, m, J)
              );
            },
          };
        }),
        (u.cssHooks.marginLeft = ei(y.reliableMarginLeft, function (a, c) {
          if (c)
            return (
              (parseFloat(sr(a, 'marginLeft')) ||
                a.getBoundingClientRect().left -
                  In(a, { marginLeft: 0 }, function () {
                    return a.getBoundingClientRect().left;
                  })) + 'px'
            );
        })),
        u.each({ margin: '', padding: '', border: 'Width' }, function (a, c) {
          (u.cssHooks[a + c] = {
            expand: function (g) {
              for (var m = 0, S = {}, w = typeof g == 'string' ? g.split(' ') : [g]; m < 4; m++)
                S[a + ht[m] + c] = w[m] || w[m - 2] || w[0];
              return S;
            },
          }),
            a !== 'margin' && (u.cssHooks[a + c].set = Rr);
        }),
        u.fn.extend({
          css: function (a, c) {
            return Ee(
              this,
              function (g, m, S) {
                var w,
                  T,
                  k = {},
                  L = 0;
                if (Array.isArray(m)) {
                  for (w = hr(g), T = m.length; L < T; L++) k[m[L]] = u.css(g, m[L], !1, w);
                  return k;
                }
                return S !== void 0 ? u.style(g, m, S) : u.css(g, m);
              },
              a,
              c,
              arguments.length > 1,
            );
          },
        });
      function sn(a, c, g, m, S) {
        return new sn.prototype.init(a, c, g, m, S);
      }
      (u.Tween = sn),
        (sn.prototype = {
          constructor: sn,
          init: function (a, c, g, m, S, w) {
            (this.elem = a),
              (this.prop = g),
              (this.easing = S || u.easing._default),
              (this.options = c),
              (this.start = this.now = this.cur()),
              (this.end = m),
              (this.unit = w || (u.cssNumber[g] ? '' : 'px'));
          },
          cur: function () {
            var a = sn.propHooks[this.prop];
            return a && a.get ? a.get(this) : sn.propHooks._default.get(this);
          },
          run: function (a) {
            var c,
              g = sn.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = c = u.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration))
                : (this.pos = c = a),
              (this.now = (this.end - this.start) * c + this.start),
              this.options.step && this.options.step.call(this.elem, this.now, this),
              g && g.set ? g.set(this) : sn.propHooks._default.set(this),
              this
            );
          },
        }),
        (sn.prototype.init.prototype = sn.prototype),
        (sn.propHooks = {
          _default: {
            get: function (a) {
              var c;
              return a.elem.nodeType !== 1 || (a.elem[a.prop] != null && a.elem.style[a.prop] == null)
                ? a.elem[a.prop]
                : ((c = u.css(a.elem, a.prop, '')), !c || c === 'auto' ? 0 : c);
            },
            set: function (a) {
              u.fx.step[a.prop]
                ? u.fx.step[a.prop](a)
                : a.elem.nodeType === 1 && (u.cssHooks[a.prop] || a.elem.style[mr(a.prop)] != null)
                ? u.style(a.elem, a.prop, a.now + a.unit)
                : (a.elem[a.prop] = a.now);
            },
          },
        }),
        (sn.propHooks.scrollTop = sn.propHooks.scrollLeft =
          {
            set: function (a) {
              a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
            },
          }),
        (u.easing = {
          linear: function (a) {
            return a;
          },
          swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2;
          },
          _default: 'swing',
        }),
        (u.fx = sn.prototype.init),
        (u.fx.step = {});
      var vr,
        Sr,
        ut = /^(?:toggle|show|hide)$/,
        et = /queueHooks$/;
      function Jt() {
        Sr &&
          (E.hidden === !1 && t.requestAnimationFrame ? t.requestAnimationFrame(Jt) : t.setTimeout(Jt, u.fx.interval),
          u.fx.tick());
      }
      function tn() {
        return (
          t.setTimeout(function () {
            vr = void 0;
          }),
          (vr = Date.now())
        );
      }
      function Nt(a, c) {
        var g,
          m = 0,
          S = { height: a };
        for (c = c ? 1 : 0; m < 4; m += 2 - c) (g = ht[m]), (S['margin' + g] = S['padding' + g] = a);
        return c && (S.opacity = S.width = a), S;
      }
      function cn(a, c, g) {
        for (var m, S = (nn.tweeners[c] || []).concat(nn.tweeners['*']), w = 0, T = S.length; w < T; w++)
          if ((m = S[w].call(g, c, a))) return m;
      }
      function Rn(a, c, g) {
        var m,
          S,
          w,
          T,
          k,
          L,
          K,
          J,
          fe = 'width' in c || 'height' in c,
          Y = this,
          te = {},
          qe = a.style,
          dt = a.nodeType && Tt(a),
          Ge = oe.get(a, 'fxshow');
        g.queue ||
          ((T = u._queueHooks(a, 'fx')),
          T.unqueued == null &&
            ((T.unqueued = 0),
            (k = T.empty.fire),
            (T.empty.fire = function () {
              T.unqueued || k();
            })),
          T.unqueued++,
          Y.always(function () {
            Y.always(function () {
              T.unqueued--, u.queue(a, 'fx').length || T.empty.fire();
            });
          }));
        for (m in c)
          if (((S = c[m]), ut.test(S))) {
            if ((delete c[m], (w = w || S === 'toggle'), S === (dt ? 'hide' : 'show')))
              if (S === 'show' && Ge && Ge[m] !== void 0) dt = !0;
              else continue;
            te[m] = (Ge && Ge[m]) || u.style(a, m);
          }
        if (((L = !u.isEmptyObject(c)), !(!L && u.isEmptyObject(te)))) {
          fe &&
            a.nodeType === 1 &&
            ((g.overflow = [qe.overflow, qe.overflowX, qe.overflowY]),
            (K = Ge && Ge.display),
            K == null && (K = oe.get(a, 'display')),
            (J = u.css(a, 'display')),
            J === 'none' &&
              (K ? (J = K) : (zt([a], !0), (K = a.style.display || K), (J = u.css(a, 'display')), zt([a]))),
            (J === 'inline' || (J === 'inline-block' && K != null)) &&
              u.css(a, 'float') === 'none' &&
              (L ||
                (Y.done(function () {
                  qe.display = K;
                }),
                K == null && ((J = qe.display), (K = J === 'none' ? '' : J))),
              (qe.display = 'inline-block'))),
            g.overflow &&
              ((qe.overflow = 'hidden'),
              Y.always(function () {
                (qe.overflow = g.overflow[0]), (qe.overflowX = g.overflow[1]), (qe.overflowY = g.overflow[2]);
              })),
            (L = !1);
          for (m in te)
            L ||
              (Ge ? 'hidden' in Ge && (dt = Ge.hidden) : (Ge = oe.access(a, 'fxshow', { display: K })),
              w && (Ge.hidden = !dt),
              dt && zt([a], !0),
              Y.done(function () {
                dt || zt([a]), oe.remove(a, 'fxshow');
                for (m in te) u.style(a, m, te[m]);
              })),
              (L = cn(dt ? Ge[m] : 0, m, Y)),
              m in Ge || ((Ge[m] = L.start), dt && ((L.end = L.start), (L.start = 0)));
        }
      }
      function cr(a, c) {
        var g, m, S, w, T;
        for (g in a)
          if (
            ((m = ne(g)),
            (S = c[m]),
            (w = a[g]),
            Array.isArray(w) && ((S = w[1]), (w = a[g] = w[0])),
            g !== m && ((a[m] = w), delete a[g]),
            (T = u.cssHooks[m]),
            T && 'expand' in T)
          ) {
            (w = T.expand(w)), delete a[m];
            for (g in w) g in a || ((a[g] = w[g]), (c[g] = S));
          } else c[m] = S;
      }
      function nn(a, c, g) {
        var m,
          S,
          w = 0,
          T = nn.prefilters.length,
          k = u.Deferred().always(function () {
            delete L.elem;
          }),
          L = function () {
            if (S) return !1;
            for (
              var fe = vr || tn(),
                Y = Math.max(0, K.startTime + K.duration - fe),
                te = Y / K.duration || 0,
                qe = 1 - te,
                dt = 0,
                Ge = K.tweens.length;
              dt < Ge;
              dt++
            )
              K.tweens[dt].run(qe);
            return (
              k.notifyWith(a, [K, qe, Y]),
              qe < 1 && Ge ? Y : (Ge || k.notifyWith(a, [K, 1, 0]), k.resolveWith(a, [K]), !1)
            );
          },
          K = k.promise({
            elem: a,
            props: u.extend({}, c),
            opts: u.extend(!0, { specialEasing: {}, easing: u.easing._default }, g),
            originalProperties: c,
            originalOptions: g,
            startTime: vr || tn(),
            duration: g.duration,
            tweens: [],
            createTween: function (fe, Y) {
              var te = u.Tween(a, K.opts, fe, Y, K.opts.specialEasing[fe] || K.opts.easing);
              return K.tweens.push(te), te;
            },
            stop: function (fe) {
              var Y = 0,
                te = fe ? K.tweens.length : 0;
              if (S) return this;
              for (S = !0; Y < te; Y++) K.tweens[Y].run(1);
              return fe ? (k.notifyWith(a, [K, 1, 0]), k.resolveWith(a, [K, fe])) : k.rejectWith(a, [K, fe]), this;
            },
          }),
          J = K.props;
        for (cr(J, K.opts.specialEasing); w < T; w++)
          if (((m = nn.prefilters[w].call(K, a, J, K.opts)), m))
            return C(m.stop) && (u._queueHooks(K.elem, K.opts.queue).stop = m.stop.bind(m)), m;
        return (
          u.map(J, cn, K),
          C(K.opts.start) && K.opts.start.call(a, K),
          K.progress(K.opts.progress).done(K.opts.done, K.opts.complete).fail(K.opts.fail).always(K.opts.always),
          u.fx.timer(u.extend(L, { elem: a, anim: K, queue: K.opts.queue })),
          K
        );
      }
      (u.Animation = u.extend(nn, {
        tweeners: {
          '*': [
            function (a, c) {
              var g = this.createTween(a, c);
              return at(g.elem, a, $t.exec(c), g), g;
            },
          ],
        },
        tweener: function (a, c) {
          C(a) ? ((c = a), (a = ['*'])) : (a = a.match(ce));
          for (var g, m = 0, S = a.length; m < S; m++)
            (g = a[m]), (nn.tweeners[g] = nn.tweeners[g] || []), nn.tweeners[g].unshift(c);
        },
        prefilters: [Rn],
        prefilter: function (a, c) {
          c ? nn.prefilters.unshift(a) : nn.prefilters.push(a);
        },
      })),
        (u.speed = function (a, c, g) {
          var m =
            a && typeof a == 'object'
              ? u.extend({}, a)
              : { complete: g || (!g && c) || (C(a) && a), duration: a, easing: (g && c) || (c && !C(c) && c) };
          return (
            u.fx.off
              ? (m.duration = 0)
              : typeof m.duration != 'number' &&
                (m.duration in u.fx.speeds
                  ? (m.duration = u.fx.speeds[m.duration])
                  : (m.duration = u.fx.speeds._default)),
            (m.queue == null || m.queue === !0) && (m.queue = 'fx'),
            (m.old = m.complete),
            (m.complete = function () {
              C(m.old) && m.old.call(this), m.queue && u.dequeue(this, m.queue);
            }),
            m
          );
        }),
        u.fn.extend({
          fadeTo: function (a, c, g, m) {
            return this.filter(Tt).css('opacity', 0).show().end().animate({ opacity: c }, a, g, m);
          },
          animate: function (a, c, g, m) {
            var S = u.isEmptyObject(a),
              w = u.speed(c, g, m),
              T = function () {
                var k = nn(this, u.extend({}, a), w);
                (S || oe.get(this, 'finish')) && k.stop(!0);
              };
            return (T.finish = T), S || w.queue === !1 ? this.each(T) : this.queue(w.queue, T);
          },
          stop: function (a, c, g) {
            var m = function (S) {
              var w = S.stop;
              delete S.stop, w(g);
            };
            return (
              typeof a != 'string' && ((g = c), (c = a), (a = void 0)),
              c && this.queue(a || 'fx', []),
              this.each(function () {
                var S = !0,
                  w = a != null && a + 'queueHooks',
                  T = u.timers,
                  k = oe.get(this);
                if (w) k[w] && k[w].stop && m(k[w]);
                else for (w in k) k[w] && k[w].stop && et.test(w) && m(k[w]);
                for (w = T.length; w--; )
                  T[w].elem === this &&
                    (a == null || T[w].queue === a) &&
                    (T[w].anim.stop(g), (S = !1), T.splice(w, 1));
                (S || !g) && u.dequeue(this, a);
              })
            );
          },
          finish: function (a) {
            return (
              a !== !1 && (a = a || 'fx'),
              this.each(function () {
                var c,
                  g = oe.get(this),
                  m = g[a + 'queue'],
                  S = g[a + 'queueHooks'],
                  w = u.timers,
                  T = m ? m.length : 0;
                for (g.finish = !0, u.queue(this, a, []), S && S.stop && S.stop.call(this, !0), c = w.length; c--; )
                  w[c].elem === this && w[c].queue === a && (w[c].anim.stop(!0), w.splice(c, 1));
                for (c = 0; c < T; c++) m[c] && m[c].finish && m[c].finish.call(this);
                delete g.finish;
              })
            );
          },
        }),
        u.each(['toggle', 'show', 'hide'], function (a, c) {
          var g = u.fn[c];
          u.fn[c] = function (m, S, w) {
            return m == null || typeof m == 'boolean' ? g.apply(this, arguments) : this.animate(Nt(c, !0), m, S, w);
          };
        }),
        u.each(
          {
            slideDown: Nt('show'),
            slideUp: Nt('hide'),
            slideToggle: Nt('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' },
          },
          function (a, c) {
            u.fn[a] = function (g, m, S) {
              return this.animate(c, g, m, S);
            };
          },
        ),
        (u.timers = []),
        (u.fx.tick = function () {
          var a,
            c = 0,
            g = u.timers;
          for (vr = Date.now(); c < g.length; c++) (a = g[c]), !a() && g[c] === a && g.splice(c--, 1);
          g.length || u.fx.stop(), (vr = void 0);
        }),
        (u.fx.timer = function (a) {
          u.timers.push(a), u.fx.start();
        }),
        (u.fx.interval = 13),
        (u.fx.start = function () {
          Sr || ((Sr = !0), Jt());
        }),
        (u.fx.stop = function () {
          Sr = null;
        }),
        (u.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (u.fn.delay = function (a, c) {
          return (
            (a = (u.fx && u.fx.speeds[a]) || a),
            (c = c || 'fx'),
            this.queue(c, function (g, m) {
              var S = t.setTimeout(g, a);
              m.stop = function () {
                t.clearTimeout(S);
              };
            })
          );
        }),
        (function () {
          var a = E.createElement('input'),
            c = E.createElement('select'),
            g = c.appendChild(E.createElement('option'));
          (a.type = 'checkbox'),
            (y.checkOn = a.value !== ''),
            (y.optSelected = g.selected),
            (a = E.createElement('input')),
            (a.value = 't'),
            (a.type = 'radio'),
            (y.radioValue = a.value === 't');
        })();
      var br,
        Pn = u.expr.attrHandle;
      u.fn.extend({
        attr: function (a, c) {
          return Ee(this, u.attr, a, c, arguments.length > 1);
        },
        removeAttr: function (a) {
          return this.each(function () {
            u.removeAttr(this, a);
          });
        },
      }),
        u.extend({
          attr: function (a, c, g) {
            var m,
              S,
              w = a.nodeType;
            if (!(w === 3 || w === 8 || w === 2)) {
              if (typeof a.getAttribute > 'u') return u.prop(a, c, g);
              if (
                ((w !== 1 || !u.isXMLDoc(a)) &&
                  (S = u.attrHooks[c.toLowerCase()] || (u.expr.match.bool.test(c) ? br : void 0)),
                g !== void 0)
              ) {
                if (g === null) {
                  u.removeAttr(a, c);
                  return;
                }
                return S && 'set' in S && (m = S.set(a, g, c)) !== void 0 ? m : (a.setAttribute(c, g + ''), g);
              }
              return S && 'get' in S && (m = S.get(a, c)) !== null ? m : ((m = u.find.attr(a, c)), m ?? void 0);
            }
          },
          attrHooks: {
            type: {
              set: function (a, c) {
                if (!y.radioValue && c === 'radio' && F(a, 'input')) {
                  var g = a.value;
                  return a.setAttribute('type', c), g && (a.value = g), c;
                }
              },
            },
          },
          removeAttr: function (a, c) {
            var g,
              m = 0,
              S = c && c.match(ce);
            if (S && a.nodeType === 1) for (; (g = S[m++]); ) a.removeAttribute(g);
          },
        }),
        (br = {
          set: function (a, c, g) {
            return c === !1 ? u.removeAttr(a, g) : a.setAttribute(g, g), g;
          },
        }),
        u.each(u.expr.match.bool.source.match(/\w+/g), function (a, c) {
          var g = Pn[c] || u.find.attr;
          Pn[c] = function (m, S, w) {
            var T,
              k,
              L = S.toLowerCase();
            return w || ((k = Pn[L]), (Pn[L] = T), (T = g(m, S, w) != null ? L : null), (Pn[L] = k)), T;
          };
        });
      var Oi = /^(?:input|select|textarea|button)$/i,
        Bo = /^(?:a|area)$/i;
      u.fn.extend({
        prop: function (a, c) {
          return Ee(this, u.prop, a, c, arguments.length > 1);
        },
        removeProp: function (a) {
          return this.each(function () {
            delete this[u.propFix[a] || a];
          });
        },
      }),
        u.extend({
          prop: function (a, c, g) {
            var m,
              S,
              w = a.nodeType;
            if (!(w === 3 || w === 8 || w === 2))
              return (
                (w !== 1 || !u.isXMLDoc(a)) && ((c = u.propFix[c] || c), (S = u.propHooks[c])),
                g !== void 0
                  ? S && 'set' in S && (m = S.set(a, g, c)) !== void 0
                    ? m
                    : (a[c] = g)
                  : S && 'get' in S && (m = S.get(a, c)) !== null
                  ? m
                  : a[c]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (a) {
                var c = u.find.attr(a, 'tabindex');
                return c ? parseInt(c, 10) : Oi.test(a.nodeName) || (Bo.test(a.nodeName) && a.href) ? 0 : -1;
              },
            },
          },
          propFix: { for: 'htmlFor', class: 'className' },
        }),
        y.optSelected ||
          (u.propHooks.selected = {
            get: function (a) {
              var c = a.parentNode;
              return c && c.parentNode && c.parentNode.selectedIndex, null;
            },
            set: function (a) {
              var c = a.parentNode;
              c && (c.selectedIndex, c.parentNode && c.parentNode.selectedIndex);
            },
          }),
        u.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable',
          ],
          function () {
            u.propFix[this.toLowerCase()] = this;
          },
        );
      function xr(a) {
        var c = a.match(ce) || [];
        return c.join(' ');
      }
      function Ar(a) {
        return (a.getAttribute && a.getAttribute('class')) || '';
      }
      function ko(a) {
        return Array.isArray(a) ? a : typeof a == 'string' ? a.match(ce) || [] : [];
      }
      u.fn.extend({
        addClass: function (a) {
          var c, g, m, S, w, T;
          return C(a)
            ? this.each(function (k) {
                u(this).addClass(a.call(this, k, Ar(this)));
              })
            : ((c = ko(a)),
              c.length
                ? this.each(function () {
                    if (((m = Ar(this)), (g = this.nodeType === 1 && ' ' + xr(m) + ' '), g)) {
                      for (w = 0; w < c.length; w++) (S = c[w]), g.indexOf(' ' + S + ' ') < 0 && (g += S + ' ');
                      (T = xr(g)), m !== T && this.setAttribute('class', T);
                    }
                  })
                : this);
        },
        removeClass: function (a) {
          var c, g, m, S, w, T;
          return C(a)
            ? this.each(function (k) {
                u(this).removeClass(a.call(this, k, Ar(this)));
              })
            : arguments.length
            ? ((c = ko(a)),
              c.length
                ? this.each(function () {
                    if (((m = Ar(this)), (g = this.nodeType === 1 && ' ' + xr(m) + ' '), g)) {
                      for (w = 0; w < c.length; w++)
                        for (S = c[w]; g.indexOf(' ' + S + ' ') > -1; ) g = g.replace(' ' + S + ' ', ' ');
                      (T = xr(g)), m !== T && this.setAttribute('class', T);
                    }
                  })
                : this)
            : this.attr('class', '');
        },
        toggleClass: function (a, c) {
          var g,
            m,
            S,
            w,
            T = typeof a,
            k = T === 'string' || Array.isArray(a);
          return C(a)
            ? this.each(function (L) {
                u(this).toggleClass(a.call(this, L, Ar(this), c), c);
              })
            : typeof c == 'boolean' && k
            ? c
              ? this.addClass(a)
              : this.removeClass(a)
            : ((g = ko(a)),
              this.each(function () {
                if (k)
                  for (w = u(this), S = 0; S < g.length; S++)
                    (m = g[S]), w.hasClass(m) ? w.removeClass(m) : w.addClass(m);
                else
                  (a === void 0 || T === 'boolean') &&
                    ((m = Ar(this)),
                    m && oe.set(this, '__className__', m),
                    this.setAttribute &&
                      this.setAttribute('class', m || a === !1 ? '' : oe.get(this, '__className__') || ''));
              }));
        },
        hasClass: function (a) {
          var c,
            g,
            m = 0;
          for (c = ' ' + a + ' '; (g = this[m++]); )
            if (g.nodeType === 1 && (' ' + xr(Ar(g)) + ' ').indexOf(c) > -1) return !0;
          return !1;
        },
      });
      var Je = /\r/g;
      u.fn.extend({
        val: function (a) {
          var c,
            g,
            m,
            S = this[0];
          return arguments.length
            ? ((m = C(a)),
              this.each(function (w) {
                var T;
                this.nodeType === 1 &&
                  (m ? (T = a.call(this, w, u(this).val())) : (T = a),
                  T == null
                    ? (T = '')
                    : typeof T == 'number'
                    ? (T += '')
                    : Array.isArray(T) &&
                      (T = u.map(T, function (k) {
                        return k == null ? '' : k + '';
                      })),
                  (c = u.valHooks[this.type] || u.valHooks[this.nodeName.toLowerCase()]),
                  (!c || !('set' in c) || c.set(this, T, 'value') === void 0) && (this.value = T));
              }))
            : S
            ? ((c = u.valHooks[S.type] || u.valHooks[S.nodeName.toLowerCase()]),
              c && 'get' in c && (g = c.get(S, 'value')) !== void 0
                ? g
                : ((g = S.value), typeof g == 'string' ? g.replace(Je, '') : g ?? ''))
            : void 0;
        },
      }),
        u.extend({
          valHooks: {
            option: {
              get: function (a) {
                var c = u.find.attr(a, 'value');
                return c ?? xr(u.text(a));
              },
            },
            select: {
              get: function (a) {
                var c,
                  g,
                  m,
                  S = a.options,
                  w = a.selectedIndex,
                  T = a.type === 'select-one',
                  k = T ? null : [],
                  L = T ? w + 1 : S.length;
                for (w < 0 ? (m = L) : (m = T ? w : 0); m < L; m++)
                  if (
                    ((g = S[m]),
                    (g.selected || m === w) && !g.disabled && (!g.parentNode.disabled || !F(g.parentNode, 'optgroup')))
                  ) {
                    if (((c = u(g).val()), T)) return c;
                    k.push(c);
                  }
                return k;
              },
              set: function (a, c) {
                for (var g, m, S = a.options, w = u.makeArray(c), T = S.length; T--; )
                  (m = S[T]), (m.selected = u.inArray(u.valHooks.option.get(m), w) > -1) && (g = !0);
                return g || (a.selectedIndex = -1), w;
              },
            },
          },
        }),
        u.each(['radio', 'checkbox'], function () {
          (u.valHooks[this] = {
            set: function (a, c) {
              if (Array.isArray(c)) return (a.checked = u.inArray(u(a).val(), c) > -1);
            },
          }),
            y.checkOn ||
              (u.valHooks[this].get = function (a) {
                return a.getAttribute('value') === null ? 'on' : a.value;
              });
        }),
        (y.focusin = 'onfocusin' in t);
      var it = /^(?:focusinfocus|focusoutblur)$/,
        Ht = function (a) {
          a.stopPropagation();
        };
      u.extend(u.event, {
        trigger: function (a, c, g, m) {
          var S,
            w,
            T,
            k,
            L,
            K,
            J,
            fe,
            Y = [g || E],
            te = h.call(a, 'type') ? a.type : a,
            qe = h.call(a, 'namespace') ? a.namespace.split('.') : [];
          if (
            ((w = fe = T = g = g || E),
            !(g.nodeType === 3 || g.nodeType === 8) &&
              !it.test(te + u.event.triggered) &&
              (te.indexOf('.') > -1 && ((qe = te.split('.')), (te = qe.shift()), qe.sort()),
              (L = te.indexOf(':') < 0 && 'on' + te),
              (a = a[u.expando] ? a : new u.Event(te, typeof a == 'object' && a)),
              (a.isTrigger = m ? 2 : 3),
              (a.namespace = qe.join('.')),
              (a.rnamespace = a.namespace ? new RegExp('(^|\\.)' + qe.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
              (a.result = void 0),
              a.target || (a.target = g),
              (c = c == null ? [a] : u.makeArray(c, [a])),
              (J = u.event.special[te] || {}),
              !(!m && J.trigger && J.trigger.apply(g, c) === !1)))
          ) {
            if (!m && !J.noBubble && !O(g)) {
              for (k = J.delegateType || te, it.test(k + te) || (w = w.parentNode); w; w = w.parentNode)
                Y.push(w), (T = w);
              T === (g.ownerDocument || E) && Y.push(T.defaultView || T.parentWindow || t);
            }
            for (S = 0; (w = Y[S++]) && !a.isPropagationStopped(); )
              (fe = w),
                (a.type = S > 1 ? k : J.bindType || te),
                (K = (oe.get(w, 'events') || Object.create(null))[a.type] && oe.get(w, 'handle')),
                K && K.apply(w, c),
                (K = L && w[L]),
                K && K.apply && Te(w) && ((a.result = K.apply(w, c)), a.result === !1 && a.preventDefault());
            return (
              (a.type = te),
              !m &&
                !a.isDefaultPrevented() &&
                (!J._default || J._default.apply(Y.pop(), c) === !1) &&
                Te(g) &&
                L &&
                C(g[te]) &&
                !O(g) &&
                ((T = g[L]),
                T && (g[L] = null),
                (u.event.triggered = te),
                a.isPropagationStopped() && fe.addEventListener(te, Ht),
                g[te](),
                a.isPropagationStopped() && fe.removeEventListener(te, Ht),
                (u.event.triggered = void 0),
                T && (g[L] = T)),
              a.result
            );
          }
        },
        simulate: function (a, c, g) {
          var m = u.extend(new u.Event(), g, { type: a, isSimulated: !0 });
          u.event.trigger(m, null, c);
        },
      }),
        u.fn.extend({
          trigger: function (a, c) {
            return this.each(function () {
              u.event.trigger(a, c, this);
            });
          },
          triggerHandler: function (a, c) {
            var g = this[0];
            if (g) return u.event.trigger(a, c, g, !0);
          },
        }),
        y.focusin ||
          u.each({ focus: 'focusin', blur: 'focusout' }, function (a, c) {
            var g = function (m) {
              u.event.simulate(c, m.target, u.event.fix(m));
            };
            u.event.special[c] = {
              setup: function () {
                var m = this.ownerDocument || this.document || this,
                  S = oe.access(m, c);
                S || m.addEventListener(a, g, !0), oe.access(m, c, (S || 0) + 1);
              },
              teardown: function () {
                var m = this.ownerDocument || this.document || this,
                  S = oe.access(m, c) - 1;
                S ? oe.access(m, c, S) : (m.removeEventListener(a, g, !0), oe.remove(m, c));
              },
            };
          });
      var rn = t.location,
        Zt = { guid: Date.now() },
        so = /\?/;
      u.parseXML = function (a) {
        var c, g;
        if (!a || typeof a != 'string') return null;
        try {
          c = new t.DOMParser().parseFromString(a, 'text/xml');
        } catch {}
        return (
          (g = c && c.getElementsByTagName('parsererror')[0]),
          (!c || g) &&
            u.error(
              'Invalid XML: ' +
                (g
                  ? u.map(g.childNodes, function (m) {
                      return m.textContent;
                    }).join(`
`)
                  : a),
            ),
          c
        );
      };
      var co = /\[\]$/,
        uo = /\r?\n/g,
        Ol = /^(?:submit|button|image|reset|file)$/i,
        fo = /^(?:input|select|textarea|keygen)/i;
      function lu(a, c, g, m) {
        var S;
        if (Array.isArray(c))
          u.each(c, function (w, T) {
            g || co.test(a) ? m(a, T) : lu(a + '[' + (typeof T == 'object' && T != null ? w : '') + ']', T, g, m);
          });
        else if (!g && N(c) === 'object') for (S in c) lu(a + '[' + S + ']', c[S], g, m);
        else m(a, c);
      }
      (u.param = function (a, c) {
        var g,
          m = [],
          S = function (w, T) {
            var k = C(T) ? T() : T;
            m[m.length] = encodeURIComponent(w) + '=' + encodeURIComponent(k ?? '');
          };
        if (a == null) return '';
        if (Array.isArray(a) || (a.jquery && !u.isPlainObject(a)))
          u.each(a, function () {
            S(this.name, this.value);
          });
        else for (g in a) lu(g, a[g], c, S);
        return m.join('&');
      }),
        u.fn.extend({
          serialize: function () {
            return u.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var a = u.prop(this, 'elements');
              return a ? u.makeArray(a) : this;
            })
              .filter(function () {
                var a = this.type;
                return (
                  this.name &&
                  !u(this).is(':disabled') &&
                  fo.test(this.nodeName) &&
                  !Ol.test(a) &&
                  (this.checked || !Ve.test(a))
                );
              })
              .map(function (a, c) {
                var g = u(this).val();
                return g == null
                  ? null
                  : Array.isArray(g)
                  ? u.map(g, function (m) {
                      return {
                        name: c.name,
                        value: m.replace(
                          uo,
                          `\r
`,
                        ),
                      };
                    })
                  : {
                      name: c.name,
                      value: g.replace(
                        uo,
                        `\r
`,
                      ),
                    };
              })
              .get();
          },
        });
      var I_ = /%20/g,
        P_ = /#.*$/,
        N_ = /([?&])_=[^&]*/,
        R_ = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        M_ = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        A_ = /^(?:GET|HEAD)$/,
        D_ = /^\/\//,
        Tm = {},
        su = {},
        Im = '*/'.concat('*'),
        cu = E.createElement('a');
      cu.href = rn.href;
      function Pm(a) {
        return function (c, g) {
          typeof c != 'string' && ((g = c), (c = '*'));
          var m,
            S = 0,
            w = c.toLowerCase().match(ce) || [];
          if (C(g))
            for (; (m = w[S++]); )
              m[0] === '+' ? ((m = m.slice(1) || '*'), (a[m] = a[m] || []).unshift(g)) : (a[m] = a[m] || []).push(g);
        };
      }
      function Nm(a, c, g, m) {
        var S = {},
          w = a === su;
        function T(k) {
          var L;
          return (
            (S[k] = !0),
            u.each(a[k] || [], function (K, J) {
              var fe = J(c, g, m);
              if (typeof fe == 'string' && !w && !S[fe]) return c.dataTypes.unshift(fe), T(fe), !1;
              if (w) return !(L = fe);
            }),
            L
          );
        }
        return T(c.dataTypes[0]) || (!S['*'] && T('*'));
      }
      function uu(a, c) {
        var g,
          m,
          S = u.ajaxSettings.flatOptions || {};
        for (g in c) c[g] !== void 0 && ((S[g] ? a : m || (m = {}))[g] = c[g]);
        return m && u.extend(!0, a, m), a;
      }
      function F_(a, c, g) {
        for (var m, S, w, T, k = a.contents, L = a.dataTypes; L[0] === '*'; )
          L.shift(), m === void 0 && (m = a.mimeType || c.getResponseHeader('Content-Type'));
        if (m) {
          for (S in k)
            if (k[S] && k[S].test(m)) {
              L.unshift(S);
              break;
            }
        }
        if (L[0] in g) w = L[0];
        else {
          for (S in g) {
            if (!L[0] || a.converters[S + ' ' + L[0]]) {
              w = S;
              break;
            }
            T || (T = S);
          }
          w = w || T;
        }
        if (w) return w !== L[0] && L.unshift(w), g[w];
      }
      function j_(a, c, g, m) {
        var S,
          w,
          T,
          k,
          L,
          K = {},
          J = a.dataTypes.slice();
        if (J[1]) for (T in a.converters) K[T.toLowerCase()] = a.converters[T];
        for (w = J.shift(); w; )
          if (
            (a.responseFields[w] && (g[a.responseFields[w]] = c),
            !L && m && a.dataFilter && (c = a.dataFilter(c, a.dataType)),
            (L = w),
            (w = J.shift()),
            w)
          ) {
            if (w === '*') w = L;
            else if (L !== '*' && L !== w) {
              if (((T = K[L + ' ' + w] || K['* ' + w]), !T)) {
                for (S in K)
                  if (((k = S.split(' ')), k[1] === w && ((T = K[L + ' ' + k[0]] || K['* ' + k[0]]), T))) {
                    T === !0 ? (T = K[S]) : K[S] !== !0 && ((w = k[0]), J.unshift(k[1]));
                    break;
                  }
              }
              if (T !== !0)
                if (T && a.throws) c = T(c);
                else
                  try {
                    c = T(c);
                  } catch (fe) {
                    return { state: 'parsererror', error: T ? fe : 'No conversion from ' + L + ' to ' + w };
                  }
            }
          }
        return { state: 'success', data: c };
      }
      u.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: rn.href,
          type: 'GET',
          isLocal: M_.test(rn.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          accepts: {
            '*': Im,
            text: 'text/plain',
            html: 'text/html',
            xml: 'application/xml, text/xml',
            json: 'application/json, text/javascript',
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
          converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': u.parseXML },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (a, c) {
          return c ? uu(uu(a, u.ajaxSettings), c) : uu(u.ajaxSettings, a);
        },
        ajaxPrefilter: Pm(Tm),
        ajaxTransport: Pm(su),
        ajax: function (a, c) {
          typeof a == 'object' && ((c = a), (a = void 0)), (c = c || {});
          var g,
            m,
            S,
            w,
            T,
            k,
            L,
            K,
            J,
            fe,
            Y = u.ajaxSetup({}, c),
            te = Y.context || Y,
            qe = Y.context && (te.nodeType || te.jquery) ? u(te) : u.event,
            dt = u.Deferred(),
            Ge = u.Callbacks('once memory'),
            bn = Y.statusCode || {},
            gn = {},
            Qn = {},
            Ft = 'canceled',
            st = {
              readyState: 0,
              getResponseHeader: function (Ot) {
                var en;
                if (L) {
                  if (!w)
                    for (w = {}; (en = R_.exec(S)); )
                      w[en[1].toLowerCase() + ' '] = (w[en[1].toLowerCase() + ' '] || []).concat(en[2]);
                  en = w[Ot.toLowerCase() + ' '];
                }
                return en == null ? null : en.join(', ');
              },
              getAllResponseHeaders: function () {
                return L ? S : null;
              },
              setRequestHeader: function (Ot, en) {
                return L == null && ((Ot = Qn[Ot.toLowerCase()] = Qn[Ot.toLowerCase()] || Ot), (gn[Ot] = en)), this;
              },
              overrideMimeType: function (Ot) {
                return L == null && (Y.mimeType = Ot), this;
              },
              statusCode: function (Ot) {
                var en;
                if (Ot)
                  if (L) st.always(Ot[st.status]);
                  else for (en in Ot) bn[en] = [bn[en], Ot[en]];
                return this;
              },
              abort: function (Ot) {
                var en = Ot || Ft;
                return g && g.abort(en), Bn(0, en), this;
              },
            };
          if (
            (dt.promise(st),
            (Y.url = ((a || Y.url || rn.href) + '').replace(D_, rn.protocol + '//')),
            (Y.type = c.method || c.type || Y.method || Y.type),
            (Y.dataTypes = (Y.dataType || '*').toLowerCase().match(ce) || ['']),
            Y.crossDomain == null)
          ) {
            k = E.createElement('a');
            try {
              (k.href = Y.url),
                (k.href = k.href),
                (Y.crossDomain = cu.protocol + '//' + cu.host != k.protocol + '//' + k.host);
            } catch {
              Y.crossDomain = !0;
            }
          }
          if (
            (Y.data && Y.processData && typeof Y.data != 'string' && (Y.data = u.param(Y.data, Y.traditional)),
            Nm(Tm, Y, c, st),
            L)
          )
            return st;
          (K = u.event && Y.global),
            K && u.active++ === 0 && u.event.trigger('ajaxStart'),
            (Y.type = Y.type.toUpperCase()),
            (Y.hasContent = !A_.test(Y.type)),
            (m = Y.url.replace(P_, '')),
            Y.hasContent
              ? Y.data &&
                Y.processData &&
                (Y.contentType || '').indexOf('application/x-www-form-urlencoded') === 0 &&
                (Y.data = Y.data.replace(I_, '+'))
              : ((fe = Y.url.slice(m.length)),
                Y.data &&
                  (Y.processData || typeof Y.data == 'string') &&
                  ((m += (so.test(m) ? '&' : '?') + Y.data), delete Y.data),
                Y.cache === !1 && ((m = m.replace(N_, '$1')), (fe = (so.test(m) ? '&' : '?') + '_=' + Zt.guid++ + fe)),
                (Y.url = m + fe)),
            Y.ifModified &&
              (u.lastModified[m] && st.setRequestHeader('If-Modified-Since', u.lastModified[m]),
              u.etag[m] && st.setRequestHeader('If-None-Match', u.etag[m])),
            ((Y.data && Y.hasContent && Y.contentType !== !1) || c.contentType) &&
              st.setRequestHeader('Content-Type', Y.contentType),
            st.setRequestHeader(
              'Accept',
              Y.dataTypes[0] && Y.accepts[Y.dataTypes[0]]
                ? Y.accepts[Y.dataTypes[0]] + (Y.dataTypes[0] !== '*' ? ', ' + Im + '; q=0.01' : '')
                : Y.accepts['*'],
            );
          for (J in Y.headers) st.setRequestHeader(J, Y.headers[J]);
          if (Y.beforeSend && (Y.beforeSend.call(te, st, Y) === !1 || L)) return st.abort();
          if (((Ft = 'abort'), Ge.add(Y.complete), st.done(Y.success), st.fail(Y.error), (g = Nm(su, Y, c, st)), !g))
            Bn(-1, 'No Transport');
          else {
            if (((st.readyState = 1), K && qe.trigger('ajaxSend', [st, Y]), L)) return st;
            Y.async &&
              Y.timeout > 0 &&
              (T = t.setTimeout(function () {
                st.abort('timeout');
              }, Y.timeout));
            try {
              (L = !1), g.send(gn, Bn);
            } catch (Ot) {
              if (L) throw Ot;
              Bn(-1, Ot);
            }
          }
          function Bn(Ot, en, Wo, _l) {
            var Jn,
              _i,
              Ti,
              kn,
              ri,
              ur = en;
            L ||
              ((L = !0),
              T && t.clearTimeout(T),
              (g = void 0),
              (S = _l || ''),
              (st.readyState = Ot > 0 ? 4 : 0),
              (Jn = (Ot >= 200 && Ot < 300) || Ot === 304),
              Wo && (kn = F_(Y, st, Wo)),
              !Jn &&
                u.inArray('script', Y.dataTypes) > -1 &&
                u.inArray('json', Y.dataTypes) < 0 &&
                (Y.converters['text script'] = function () {}),
              (kn = j_(Y, kn, st, Jn)),
              Jn
                ? (Y.ifModified &&
                    ((ri = st.getResponseHeader('Last-Modified')),
                    ri && (u.lastModified[m] = ri),
                    (ri = st.getResponseHeader('etag')),
                    ri && (u.etag[m] = ri)),
                  Ot === 204 || Y.type === 'HEAD'
                    ? (ur = 'nocontent')
                    : Ot === 304
                    ? (ur = 'notmodified')
                    : ((ur = kn.state), (_i = kn.data), (Ti = kn.error), (Jn = !Ti)))
                : ((Ti = ur), (Ot || !ur) && ((ur = 'error'), Ot < 0 && (Ot = 0))),
              (st.status = Ot),
              (st.statusText = (en || ur) + ''),
              Jn ? dt.resolveWith(te, [_i, ur, st]) : dt.rejectWith(te, [st, ur, Ti]),
              st.statusCode(bn),
              (bn = void 0),
              K && qe.trigger(Jn ? 'ajaxSuccess' : 'ajaxError', [st, Y, Jn ? _i : Ti]),
              Ge.fireWith(te, [st, ur]),
              K && (qe.trigger('ajaxComplete', [st, Y]), --u.active || u.event.trigger('ajaxStop')));
          }
          return st;
        },
        getJSON: function (a, c, g) {
          return u.get(a, c, g, 'json');
        },
        getScript: function (a, c) {
          return u.get(a, void 0, c, 'script');
        },
      }),
        u.each(['get', 'post'], function (a, c) {
          u[c] = function (g, m, S, w) {
            return (
              C(m) && ((w = w || S), (S = m), (m = void 0)),
              u.ajax(u.extend({ url: g, type: c, dataType: w, data: m, success: S }, u.isPlainObject(g) && g))
            );
          };
        }),
        u.ajaxPrefilter(function (a) {
          var c;
          for (c in a.headers) c.toLowerCase() === 'content-type' && (a.contentType = a.headers[c] || '');
        }),
        (u._evalUrl = function (a, c, g) {
          return u.ajax({
            url: a,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            converters: { 'text script': function () {} },
            dataFilter: function (m) {
              u.globalEval(m, c, g);
            },
          });
        }),
        u.fn.extend({
          wrapAll: function (a) {
            var c;
            return (
              this[0] &&
                (C(a) && (a = a.call(this[0])),
                (c = u(a, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && c.insertBefore(this[0]),
                c
                  .map(function () {
                    for (var g = this; g.firstElementChild; ) g = g.firstElementChild;
                    return g;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (a) {
            return C(a)
              ? this.each(function (c) {
                  u(this).wrapInner(a.call(this, c));
                })
              : this.each(function () {
                  var c = u(this),
                    g = c.contents();
                  g.length ? g.wrapAll(a) : c.append(a);
                });
          },
          wrap: function (a) {
            var c = C(a);
            return this.each(function (g) {
              u(this).wrapAll(c ? a.call(this, g) : a);
            });
          },
          unwrap: function (a) {
            return (
              this.parent(a)
                .not('body')
                .each(function () {
                  u(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (u.expr.pseudos.hidden = function (a) {
          return !u.expr.pseudos.visible(a);
        }),
        (u.expr.pseudos.visible = function (a) {
          return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
        }),
        (u.ajaxSettings.xhr = function () {
          try {
            return new t.XMLHttpRequest();
          } catch {}
        });
      var z_ = { 0: 200, 1223: 204 },
        Vo = u.ajaxSettings.xhr();
      (y.cors = !!Vo && 'withCredentials' in Vo),
        (y.ajax = Vo = !!Vo),
        u.ajaxTransport(function (a) {
          var c, g;
          if (y.cors || (Vo && !a.crossDomain))
            return {
              send: function (m, S) {
                var w,
                  T = a.xhr();
                if ((T.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields))
                  for (w in a.xhrFields) T[w] = a.xhrFields[w];
                a.mimeType && T.overrideMimeType && T.overrideMimeType(a.mimeType),
                  !a.crossDomain && !m['X-Requested-With'] && (m['X-Requested-With'] = 'XMLHttpRequest');
                for (w in m) T.setRequestHeader(w, m[w]);
                (c = function (k) {
                  return function () {
                    c &&
                      ((c = g = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null),
                      k === 'abort'
                        ? T.abort()
                        : k === 'error'
                        ? typeof T.status != 'number'
                          ? S(0, 'error')
                          : S(T.status, T.statusText)
                        : S(
                            z_[T.status] || T.status,
                            T.statusText,
                            (T.responseType || 'text') !== 'text' || typeof T.responseText != 'string'
                              ? { binary: T.response }
                              : { text: T.responseText },
                            T.getAllResponseHeaders(),
                          ));
                  };
                }),
                  (T.onload = c()),
                  (g = T.onerror = T.ontimeout = c('error')),
                  T.onabort !== void 0
                    ? (T.onabort = g)
                    : (T.onreadystatechange = function () {
                        T.readyState === 4 &&
                          t.setTimeout(function () {
                            c && g();
                          });
                      }),
                  (c = c('abort'));
                try {
                  T.send((a.hasContent && a.data) || null);
                } catch (k) {
                  if (c) throw k;
                }
              },
              abort: function () {
                c && c();
              },
            };
        }),
        u.ajaxPrefilter(function (a) {
          a.crossDomain && (a.contents.script = !1);
        }),
        u.ajaxSetup({
          accepts: {
            script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            'text script': function (a) {
              return u.globalEval(a), a;
            },
          },
        }),
        u.ajaxPrefilter('script', function (a) {
          a.cache === void 0 && (a.cache = !1), a.crossDomain && (a.type = 'GET');
        }),
        u.ajaxTransport('script', function (a) {
          if (a.crossDomain || a.scriptAttrs) {
            var c, g;
            return {
              send: function (m, S) {
                (c = u('<script>')
                  .attr(a.scriptAttrs || {})
                  .prop({ charset: a.scriptCharset, src: a.url })
                  .on(
                    'load error',
                    (g = function (w) {
                      c.remove(), (g = null), w && S(w.type === 'error' ? 404 : 200, w.type);
                    }),
                  )),
                  E.head.appendChild(c[0]);
              },
              abort: function () {
                g && g();
              },
            };
          }
        });
      var Rm = [],
        du = /(=)\?(?=&|$)|\?\?/;
      u.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
          var a = Rm.pop() || u.expando + '_' + Zt.guid++;
          return (this[a] = !0), a;
        },
      }),
        u.ajaxPrefilter('json jsonp', function (a, c, g) {
          var m,
            S,
            w,
            T =
              a.jsonp !== !1 &&
              (du.test(a.url)
                ? 'url'
                : typeof a.data == 'string' &&
                  (a.contentType || '').indexOf('application/x-www-form-urlencoded') === 0 &&
                  du.test(a.data) &&
                  'data');
          if (T || a.dataTypes[0] === 'jsonp')
            return (
              (m = a.jsonpCallback = C(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback),
              T
                ? (a[T] = a[T].replace(du, '$1' + m))
                : a.jsonp !== !1 && (a.url += (so.test(a.url) ? '&' : '?') + a.jsonp + '=' + m),
              (a.converters['script json'] = function () {
                return w || u.error(m + ' was not called'), w[0];
              }),
              (a.dataTypes[0] = 'json'),
              (S = t[m]),
              (t[m] = function () {
                w = arguments;
              }),
              g.always(function () {
                S === void 0 ? u(t).removeProp(m) : (t[m] = S),
                  a[m] && ((a.jsonpCallback = c.jsonpCallback), Rm.push(m)),
                  w && C(S) && S(w[0]),
                  (w = S = void 0);
              }),
              'script'
            );
        }),
        (y.createHTMLDocument = (function () {
          var a = E.implementation.createHTMLDocument('').body;
          return (a.innerHTML = '<form></form><form></form>'), a.childNodes.length === 2;
        })()),
        (u.parseHTML = function (a, c, g) {
          if (typeof a != 'string') return [];
          typeof c == 'boolean' && ((g = c), (c = !1));
          var m, S, w;
          return (
            c ||
              (y.createHTMLDocument
                ? ((c = E.implementation.createHTMLDocument('')),
                  (m = c.createElement('base')),
                  (m.href = E.location.href),
                  c.head.appendChild(m))
                : (c = E)),
            (S = A.exec(a)),
            (w = !g && []),
            S
              ? [c.createElement(S[1])]
              : ((S = Pe([a], c, w)), w && w.length && u(w).remove(), u.merge([], S.childNodes))
          );
        }),
        (u.fn.load = function (a, c, g) {
          var m,
            S,
            w,
            T = this,
            k = a.indexOf(' ');
          return (
            k > -1 && ((m = xr(a.slice(k))), (a = a.slice(0, k))),
            C(c) ? ((g = c), (c = void 0)) : c && typeof c == 'object' && (S = 'POST'),
            T.length > 0 &&
              u
                .ajax({ url: a, type: S || 'GET', dataType: 'html', data: c })
                .done(function (L) {
                  (w = arguments), T.html(m ? u('<div>').append(u.parseHTML(L)).find(m) : L);
                })
                .always(
                  g &&
                    function (L, K) {
                      T.each(function () {
                        g.apply(this, w || [L.responseText, K, L]);
                      });
                    },
                ),
            this
          );
        }),
        (u.expr.pseudos.animated = function (a) {
          return u.grep(u.timers, function (c) {
            return a === c.elem;
          }).length;
        }),
        (u.offset = {
          setOffset: function (a, c, g) {
            var m,
              S,
              w,
              T,
              k,
              L,
              K,
              J = u.css(a, 'position'),
              fe = u(a),
              Y = {};
            J === 'static' && (a.style.position = 'relative'),
              (k = fe.offset()),
              (w = u.css(a, 'top')),
              (L = u.css(a, 'left')),
              (K = (J === 'absolute' || J === 'fixed') && (w + L).indexOf('auto') > -1),
              K
                ? ((m = fe.position()), (T = m.top), (S = m.left))
                : ((T = parseFloat(w) || 0), (S = parseFloat(L) || 0)),
              C(c) && (c = c.call(a, g, u.extend({}, k))),
              c.top != null && (Y.top = c.top - k.top + T),
              c.left != null && (Y.left = c.left - k.left + S),
              'using' in c ? c.using.call(a, Y) : fe.css(Y);
          },
        }),
        u.fn.extend({
          offset: function (a) {
            if (arguments.length)
              return a === void 0
                ? this
                : this.each(function (S) {
                    u.offset.setOffset(this, a, S);
                  });
            var c,
              g,
              m = this[0];
            if (m)
              return m.getClientRects().length
                ? ((c = m.getBoundingClientRect()),
                  (g = m.ownerDocument.defaultView),
                  { top: c.top + g.pageYOffset, left: c.left + g.pageXOffset })
                : { top: 0, left: 0 };
          },
          position: function () {
            if (this[0]) {
              var a,
                c,
                g,
                m = this[0],
                S = { top: 0, left: 0 };
              if (u.css(m, 'position') === 'fixed') c = m.getBoundingClientRect();
              else {
                for (
                  c = this.offset(), g = m.ownerDocument, a = m.offsetParent || g.documentElement;
                  a && (a === g.body || a === g.documentElement) && u.css(a, 'position') === 'static';

                )
                  a = a.parentNode;
                a &&
                  a !== m &&
                  a.nodeType === 1 &&
                  ((S = u(a).offset()),
                  (S.top += u.css(a, 'borderTopWidth', !0)),
                  (S.left += u.css(a, 'borderLeftWidth', !0)));
              }
              return {
                top: c.top - S.top - u.css(m, 'marginTop', !0),
                left: c.left - S.left - u.css(m, 'marginLeft', !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (var a = this.offsetParent; a && u.css(a, 'position') === 'static'; ) a = a.offsetParent;
              return a || vt;
            });
          },
        }),
        u.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (a, c) {
          var g = c === 'pageYOffset';
          u.fn[a] = function (m) {
            return Ee(
              this,
              function (S, w, T) {
                var k;
                if ((O(S) ? (k = S) : S.nodeType === 9 && (k = S.defaultView), T === void 0)) return k ? k[c] : S[w];
                k ? k.scrollTo(g ? k.pageXOffset : T, g ? T : k.pageYOffset) : (S[w] = T);
              },
              a,
              m,
              arguments.length,
            );
          };
        }),
        u.each(['top', 'left'], function (a, c) {
          u.cssHooks[c] = ei(y.pixelPosition, function (g, m) {
            if (m) return (m = sr(g, c)), Yn.test(m) ? u(g).position()[c] + 'px' : m;
          });
        }),
        u.each({ Height: 'height', Width: 'width' }, function (a, c) {
          u.each({ padding: 'inner' + a, content: c, '': 'outer' + a }, function (g, m) {
            u.fn[m] = function (S, w) {
              var T = arguments.length && (g || typeof S != 'boolean'),
                k = g || (S === !0 || w === !0 ? 'margin' : 'border');
              return Ee(
                this,
                function (L, K, J) {
                  var fe;
                  return O(L)
                    ? m.indexOf('outer') === 0
                      ? L['inner' + a]
                      : L.document.documentElement['client' + a]
                    : L.nodeType === 9
                    ? ((fe = L.documentElement),
                      Math.max(
                        L.body['scroll' + a],
                        fe['scroll' + a],
                        L.body['offset' + a],
                        fe['offset' + a],
                        fe['client' + a],
                      ))
                    : J === void 0
                    ? u.css(L, K, k)
                    : u.style(L, K, J, k);
                },
                c,
                T ? S : void 0,
                T,
              );
            };
          });
        }),
        u.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (a, c) {
          u.fn[c] = function (g) {
            return this.on(c, g);
          };
        }),
        u.fn.extend({
          bind: function (a, c, g) {
            return this.on(a, null, c, g);
          },
          unbind: function (a, c) {
            return this.off(a, null, c);
          },
          delegate: function (a, c, g, m) {
            return this.on(c, a, g, m);
          },
          undelegate: function (a, c, g) {
            return arguments.length === 1 ? this.off(a, '**') : this.off(c, a || '**', g);
          },
          hover: function (a, c) {
            return this.mouseenter(a).mouseleave(c || a);
          },
        }),
        u.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' ',
          ),
          function (a, c) {
            u.fn[c] = function (g, m) {
              return arguments.length > 0 ? this.on(c, null, g, m) : this.trigger(c);
            };
          },
        );
      var L_ = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (u.proxy = function (a, c) {
        var g, m, S;
        if ((typeof c == 'string' && ((g = a[c]), (c = a), (a = g)), !!C(a)))
          return (
            (m = o.call(arguments, 2)),
            (S = function () {
              return a.apply(c || this, m.concat(o.call(arguments)));
            }),
            (S.guid = a.guid = a.guid || u.guid++),
            S
          );
      }),
        (u.holdReady = function (a) {
          a ? u.readyWait++ : u.ready(!0);
        }),
        (u.isArray = Array.isArray),
        (u.parseJSON = JSON.parse),
        (u.nodeName = F),
        (u.isFunction = C),
        (u.isWindow = O),
        (u.camelCase = ne),
        (u.type = N),
        (u.now = Date.now),
        (u.isNumeric = function (a) {
          var c = u.type(a);
          return (c === 'number' || c === 'string') && !isNaN(a - parseFloat(a));
        }),
        (u.trim = function (a) {
          return a == null ? '' : (a + '').replace(L_, '$1');
        });
      var H_ = t.jQuery,
        B_ = t.$;
      return (
        (u.noConflict = function (a) {
          return t.$ === u && (t.$ = B_), a && t.jQuery === u && (t.jQuery = H_), u;
        }),
        typeof n > 'u' && (t.jQuery = t.$ = u),
        u
      );
    });
  })(y_);
  const fn = au;
  function C_() {
    m_(
      () => {
        const e = fn('.module-detail-info .module-base-desc .module-header .next-btn-group');
        return fn(e).get(0);
      },
      (e) => {
        const t = e.querySelectorAll('.next-btn')[0],
          n = document.createElement('button'),
          r = document.createElement('button'),
          i = document.createElement('button'),
          o = document.createElement('button'),
          l = e.insertBefore(i, t);
        (l.className = 'next-btn next-medium next-btn-normal'),
          (l.style.margin = '0px 5px'),
          b.render(b.h(wm, { text: '一键清除预发', env: 'pre' }), l);
        const s = e.insertBefore(o, t);
        (s.className = 'next-btn next-medium next-btn-normal next-btn-warning'),
          (s.style.margin = '0px 5px'),
          b.render(b.h(wm, { text: '一键清除线上', env: 'prod' }), s);
        const d = e.insertBefore(r, t);
        (r.className = 'next-btn next-medium next-btn-normal'),
          (r.style.margin = '0px 5px'),
          b.render(b.h(xm, { text: '清除预发缓存', env: 'pre' }), d);
        const f = e.insertBefore(n, t);
        (n.className = 'next-btn next-medium next-btn-secondary'),
          (n.style.margin = '0px 5px'),
          b.render(b.h(xm, { text: '清除线上缓存', env: 'prod' }), f);
      },
    );
  }
  async function Em(e) {
    const t = Dn.loading('Getting DEF info...');
    try {
      const n = await El({ url: `https://work.def.alibaba-inc.com/api/search?q=${encodeURIComponent(e)}&t=app` }),
        r = Yo(n, 'data.apps.0.id');
      Nr.open(`https://work.def.alibaba-inc.com/app/${r}/index`);
    } catch (n) {
      console.log(n, 'xxx'), Dn.error(n.error);
    } finally {
      t();
    }
  }
  async function $m(e) {
    const t = Dn.loading('Getting Git info...');
    try {
      const n = await El({ url: `https://work.def.alibaba-inc.com/api/search?q=${encodeURIComponent(e)}&t=app` }),
        r = Yo(n, 'data.apps.0.group'),
        i = Yo(n, 'data.apps.0.project');
      Nr.open(`https://code.alibaba-inc.com/${r}/${i}`);
    } catch (n) {
      Dn.error(n.error);
    } finally {
      t();
    }
  }
  async function Om(e) {
    const t = Dn.loading('Getting Astore info...');
    try {
      const n = await El({
          url: `https://astore.alibaba-inc.com/module/getMyModuleList?siteId=163&keyword=${encodeURIComponent(
            e,
          )}&pageSize=20&currentPage=1&moduleType=biz`,
        }),
        r = Yo(n, 'data.dataList.0.id');
      Nr.open(`https://astore.alibaba-inc.com/?#/site/163/module/biz-module/${r}`);
    } catch (n) {
      Dn.error(n.error);
    } finally {
      t();
    }
  }
  const ZT = '',
    S_ = xi.Item,
    x_ = ({ moduleName: e, moduleAliasName: t, backgroundColor: n }) => {
      const [r, i] = we(!1),
        o = () => {
          i(!0);
        },
        l = () => {
          i(!1);
        },
        s = () => {
          Em(t);
        },
        d = () => {
          $m(t);
        },
        f = () => {
          Om(e);
        },
        p = () => {
          const y = JSON.stringify(['ARISE_ES']),
            C = JSON.stringify([e ?? '']);
          _n.lib.mtop
            .request({
              api: 'mtop.lazada.shop.component.cache.reset',
              v: '1.0',
              method: 'GET',
              dataType: 'json',
              data: { tenantIds: y, componentKeys: C, isAll: !0 },
            })
            .then(
              function ({ retType: E, data: _, ret: P }) {
                Dn.open({
                  type: 'success',
                  content: 'The module cache has been cleared, and the current page will be refreshed in 3 seconds',
                  duration: 3,
                  onClose: () => {
                    _n.location.reload();
                  },
                });
              },
              function ({ retType: E, data: _, ret: P }) {
                Dn.open({ type: 'error', content: P, duration: 3 });
              },
            );
        },
        h = (y) => (C) => {
          const O = document.createElement('input');
          (O.value = y),
            document.body.appendChild(O),
            O.select(),
            document.execCommand('copy') &&
              (document.execCommand('copy'),
              Dn.open({ type: 'success', content: 'The field value has been copied', duration: 3 })),
            document.body.removeChild(O);
        },
        v = (y) => ot('a', { href: y.link, target: '_blank', children: y.title }),
        x = (y) =>
          ot(b.Fragment, { children: [y.title, ot(tu, { className: 'store-btn-copy', onclick: h(y.title) })] });
      return ot(b.Fragment, {
        children: [
          ot('div', {
            class: 'store-dev-tools',
            'data-moduleName': e,
            style: { backgroundColor: n },
            children: [
              ot('div', { className: 'store-dev-tools-icon', children: ot(om, { onclick: o }) }),
              ot('div', { className: 'store-dev-tools-icon', children: ot(um, { onclick: p }) }),
            ],
          }),
          ot(Gc, {
            className: 'store-drawer-container',
            title: 'Store Dev Tools',
            placement: 'right',
            onClose: l,
            open: r,
            children: [
              ot('div', {
                className: 'store-dev-tools-panel',
                children: ot(Nh, {
                  split: ot(jh, { type: 'vertical' }),
                  children: [
                    ot(Qr.Link, { onclick: s, children: 'DEF' }),
                    ot(Qr.Link, { onclick: d, children: 'GIT' }),
                    ot(Qr.Link, { onclick: f, children: 'Astore' }),
                    ot(Qr.Link, { onclick: p, children: 'Clear Cache' }),
                  ],
                }),
              }),
              ot(xi, {
                className: 'store-dev-tools-list',
                size: 'small',
                bordered: !0,
                dataSource: [
                  { type: 'text', label: 'Module Name', title: e },
                  { type: 'text', label: 'Module Alias Name', title: t },
                  {
                    type: 'link',
                    label: 'Diamond Configurations',
                    title: 'lazada.shop.front.version.content',
                    link: `https://mse.alibaba-inc.com/${
                      Iu ? 'rg-de-2-pre' : 'rg-de-2'
                    }/diamond/configlist/configedit?DataId=lazada.shop.front.version.content&Group=ARISE_ES_GLOBAL_SHOP&tab=edit`,
                  },
                  {
                    type: 'link',
                    label: 'Store Developer Document',
                    title: '店铺前端开发指南',
                    link: 'https://aliyuque.antfin.com/lggiz5/mdsozh/dr75296ggbnvmg15?singleDoc#',
                  },
                ],
                renderItem: (y) =>
                  ot(S_, {
                    children: ot(xi.Item.Meta, { title: y.label, description: y.type === 'link' ? v(y) : x(y) }),
                  }),
              }),
            ],
          }),
        ],
      });
    },
    eI = '',
    w_ = xi.Item,
    E_ = ({ moduleName: e, moduleAliasName: t, backgroundColor: n }) => {
      const [r, i] = we(!1),
        o = () => {
          i(!0);
        },
        l = () => {
          i(!1);
        },
        s = () => {
          Em(t);
        },
        d = () => {
          $m(t);
        },
        f = () => {
          Om(e);
        },
        p = () => {
          const y = JSON.stringify(['ARISE_ES']),
            C = JSON.stringify([e ?? '']);
          _n.lib.mtop
            .request({
              api: 'mtop.lazada.shop.component.cache.reset',
              v: '1.0',
              method: 'GET',
              dataType: 'json',
              data: { tenantIds: y, componentKeys: C, isAll: !0 },
            })
            .then(
              function ({ retType: E, data: _, ret: P }) {
                Dn.open({
                  type: 'success',
                  content: 'The module cache has been cleared, and the current page will be refreshed in 3 seconds',
                  duration: 3,
                  onClose: () => {
                    _n.location.reload();
                  },
                });
              },
              function ({ retType: E, data: _, ret: P }) {
                Dn.open({ type: 'error', content: P, duration: 3 });
              },
            );
        },
        h = (y) => (C) => {
          const O = document.createElement('input');
          (O.value = y),
            document.body.appendChild(O),
            O.select(),
            document.execCommand('copy') &&
              (document.execCommand('copy'),
              Dn.open({ type: 'success', content: 'The field value has been copied', duration: 3 })),
            document.body.removeChild(O);
        },
        v = (y) => ot('a', { href: y.link, target: '_blank', children: y.title }),
        x = (y) =>
          ot(b.Fragment, { children: [y.title, ot(tu, { className: 'store-btn-copy', onclick: h(y.title) })] });
      return ot(b.Fragment, {
        children: [
          ot('div', {
            class: 'store-dev-tools',
            style: { backgroundColor: n },
            children: [
              ot('div', {
                className: 'store-dev-tools-icon',
                children: ot(vl, { placement: 'left', title: e, children: ot(om, { onclick: o }) }),
              }),
              ot('div', { className: 'store-dev-tools-icon', children: ot(um, { onclick: p }) }),
            ],
          }),
          ot(Gc, {
            className: 'store-drawer-container',
            title: 'Store Dev Tools',
            placement: 'right',
            onClose: l,
            open: r,
            children: [
              ot('div', {
                className: 'store-dev-tools-panel',
                children: ot(Nh, {
                  split: ot(jh, { type: 'vertical' }),
                  children: [
                    ot(Qr.Link, { onclick: s, children: 'DEF' }),
                    ot(Qr.Link, { onclick: d, children: 'GIT' }),
                    ot(Qr.Link, { onclick: f, children: 'Astore' }),
                    ot(Qr.Link, { onclick: p, children: 'Clear Cache' }),
                  ],
                }),
              }),
              ot(xi, {
                className: 'store-dev-tools-list',
                size: 'small',
                bordered: !0,
                dataSource: [
                  { type: 'text', label: 'Module Name', title: e },
                  { type: 'text', label: 'Module Alias Name', title: t },
                  {
                    type: 'link',
                    label: 'Diamond Configurations',
                    title: 'lazada.shop.front.version.content',
                    link: `https://mse.alibaba-inc.com/${
                      Iu ? 'rg-de-2-pre' : 'rg-de-2'
                    }/diamond/configlist/configedit?DataId=lazada.shop.front.version.content&Group=ARISE_ES_GLOBAL_SHOP&AppName=global-shop-design-f&tab=edit`,
                  },
                  {
                    type: 'link',
                    label: 'Store Developer Document',
                    title: '店铺前端开发指南',
                    link: 'https://aliyuque.antfin.com/lggiz5/mdsozh/dr75296ggbnvmg15?singleDoc#',
                  },
                ],
                renderItem: (y) =>
                  ot(w_, {
                    children: ot(xi.Item.Meta, { title: y.label, description: y.type === 'link' ? v(y) : x(y) }),
                  }),
              }),
            ],
          }),
        ],
      });
    };
  var $l = {},
    $_ = {
      get exports() {
        return $l;
      },
      set exports(e) {
        $l = e;
      },
    };
  (function (e, t) {
    (function (n, r) {
      {
        var i = r();
        e && e.exports && (t = e.exports = i), (t.randomColor = i);
      }
    })(Ru, function () {
      var n = null,
        r = {};
      E();
      var i = [],
        o = function ($) {
          if ((($ = $ || {}), $.seed !== void 0 && $.seed !== null && $.seed === parseInt($.seed, 10))) n = $.seed;
          else if (typeof $.seed == 'string') n = j($.seed);
          else {
            if ($.seed !== void 0 && $.seed !== null)
              throw new TypeError('The seed value must be an integer or string');
            n = null;
          }
          var I, M, D;
          if ($.count !== null && $.count !== void 0) {
            for (var B = $.count, F = [], A = 0; A < $.count; A++) i.push(!1);
            for ($.count = null; B > F.length; ) {
              var z = o($);
              n !== null && ($.seed = n), F.push(z);
            }
            return ($.count = B), F;
          }
          return (I = l($)), (M = s(I, $)), (D = d(I, M, $)), f([I, M, D], $);
        };
      function l($) {
        if (i.length > 0) {
          var I = u($.hue),
            M = y(I),
            D = (I[1] - I[0]) / i.length,
            B = parseInt((M - I[0]) / D);
          i[B] === !0 ? (B = (B + 2) % i.length) : (i[B] = !0);
          var F = (I[0] + B * D) % 359,
            A = (I[0] + (B + 1) * D) % 359;
          return (I = [F, A]), (M = y(I)), M < 0 && (M = 360 + M), M;
        } else {
          var I = h($.hue);
          return (M = y(I)), M < 0 && (M = 360 + M), M;
        }
      }
      function s($, I) {
        if (I.hue === 'monochrome') return 0;
        if (I.luminosity === 'random') return y([0, 100]);
        var M = v($),
          D = M[0],
          B = M[1];
        switch (I.luminosity) {
          case 'bright':
            D = 55;
            break;
          case 'dark':
            D = B - 10;
            break;
          case 'light':
            B = 55;
            break;
        }
        return y([D, B]);
      }
      function d($, I, M) {
        var D = p($, I),
          B = 100;
        switch (M.luminosity) {
          case 'dark':
            B = D + 20;
            break;
          case 'light':
            D = (B + D) / 2;
            break;
          case 'random':
            (D = 0), (B = 100);
            break;
        }
        return y([D, B]);
      }
      function f($, I) {
        switch (I.format) {
          case 'hsvArray':
            return $;
          case 'hslArray':
            return N($);
          case 'hsl':
            var M = N($);
            return 'hsl(' + M[0] + ', ' + M[1] + '%, ' + M[2] + '%)';
          case 'hsla':
            var D = N($),
              A = I.alpha || Math.random();
            return 'hsla(' + D[0] + ', ' + D[1] + '%, ' + D[2] + '%, ' + A + ')';
          case 'rgbArray':
            return _($);
          case 'rgb':
            var B = _($);
            return 'rgb(' + B.join(', ') + ')';
          case 'rgba':
            var F = _($),
              A = I.alpha || Math.random();
            return 'rgba(' + F.join(', ') + ', ' + A + ')';
          default:
            return C($);
        }
      }
      function p($, I) {
        for (var M = x($).lowerBounds, D = 0; D < M.length - 1; D++) {
          var B = M[D][0],
            F = M[D][1],
            A = M[D + 1][0],
            z = M[D + 1][1];
          if (I >= B && I <= A) {
            var V = (z - F) / (A - B),
              U = F - V * B;
            return V * I + U;
          }
        }
        return 0;
      }
      function h($) {
        if (typeof parseInt($) == 'number') {
          var I = parseInt($);
          if (I < 360 && I > 0) return [I, I];
        }
        if (typeof $ == 'string') {
          if (r[$]) {
            var M = r[$];
            if (M.hueRange) return M.hueRange;
          } else if ($.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
            var D = P($)[0];
            return [D, D];
          }
        }
        return [0, 360];
      }
      function v($) {
        return x($).saturationRange;
      }
      function x($) {
        $ >= 334 && $ <= 360 && ($ -= 360);
        for (var I in r) {
          var M = r[I];
          if (M.hueRange && $ >= M.hueRange[0] && $ <= M.hueRange[1]) return r[I];
        }
        return 'Color not found';
      }
      function y($) {
        if (n === null) {
          var I = 0.618033988749895,
            M = Math.random();
          return (M += I), (M %= 1), Math.floor($[0] + M * ($[1] + 1 - $[0]));
        } else {
          var D = $[1] || 1,
            B = $[0] || 0;
          n = (n * 9301 + 49297) % 233280;
          var F = n / 233280;
          return Math.floor(B + F * (D - B));
        }
      }
      function C($) {
        var I = _($);
        function M(B) {
          var F = B.toString(16);
          return F.length == 1 ? '0' + F : F;
        }
        var D = '#' + M(I[0]) + M(I[1]) + M(I[2]);
        return D;
      }
      function O($, I, M) {
        var D = M[0][0],
          B = M[M.length - 1][0],
          F = M[M.length - 1][1],
          A = M[0][1];
        r[$] = { hueRange: I, lowerBounds: M, saturationRange: [D, B], brightnessRange: [F, A] };
      }
      function E() {
        O('monochrome', null, [
          [0, 0],
          [100, 0],
        ]),
          O(
            'red',
            [-26, 18],
            [
              [20, 100],
              [30, 92],
              [40, 89],
              [50, 85],
              [60, 78],
              [70, 70],
              [80, 60],
              [90, 55],
              [100, 50],
            ],
          ),
          O(
            'orange',
            [18, 46],
            [
              [20, 100],
              [30, 93],
              [40, 88],
              [50, 86],
              [60, 85],
              [70, 70],
              [100, 70],
            ],
          ),
          O(
            'yellow',
            [46, 62],
            [
              [25, 100],
              [40, 94],
              [50, 89],
              [60, 86],
              [70, 84],
              [80, 82],
              [90, 80],
              [100, 75],
            ],
          ),
          O(
            'green',
            [62, 178],
            [
              [30, 100],
              [40, 90],
              [50, 85],
              [60, 81],
              [70, 74],
              [80, 64],
              [90, 50],
              [100, 40],
            ],
          ),
          O(
            'blue',
            [178, 257],
            [
              [20, 100],
              [30, 86],
              [40, 80],
              [50, 74],
              [60, 60],
              [70, 52],
              [80, 44],
              [90, 39],
              [100, 35],
            ],
          ),
          O(
            'purple',
            [257, 282],
            [
              [20, 100],
              [30, 87],
              [40, 79],
              [50, 70],
              [60, 65],
              [70, 59],
              [80, 52],
              [90, 45],
              [100, 42],
            ],
          ),
          O(
            'pink',
            [282, 334],
            [
              [20, 100],
              [30, 90],
              [40, 86],
              [60, 84],
              [80, 80],
              [90, 75],
              [100, 73],
            ],
          );
      }
      function _($) {
        var I = $[0];
        I === 0 && (I = 1), I === 360 && (I = 359), (I = I / 360);
        var M = $[1] / 100,
          D = $[2] / 100,
          B = Math.floor(I * 6),
          F = I * 6 - B,
          A = D * (1 - M),
          z = D * (1 - F * M),
          V = D * (1 - (1 - F) * M),
          U = 256,
          X = 256,
          Z = 256;
        switch (B) {
          case 0:
            (U = D), (X = V), (Z = A);
            break;
          case 1:
            (U = z), (X = D), (Z = A);
            break;
          case 2:
            (U = A), (X = D), (Z = V);
            break;
          case 3:
            (U = A), (X = z), (Z = D);
            break;
          case 4:
            (U = V), (X = A), (Z = D);
            break;
          case 5:
            (U = D), (X = A), (Z = z);
            break;
        }
        var ee = [Math.floor(U * 255), Math.floor(X * 255), Math.floor(Z * 255)];
        return ee;
      }
      function P($) {
        ($ = $.replace(/^#/, '')), ($ = $.length === 3 ? $.replace(/(.)/g, '$1$1') : $);
        var I = parseInt($.substr(0, 2), 16) / 255,
          M = parseInt($.substr(2, 2), 16) / 255,
          D = parseInt($.substr(4, 2), 16) / 255,
          B = Math.max(I, M, D),
          F = B - Math.min(I, M, D),
          A = B ? F / B : 0;
        switch (B) {
          case I:
            return [60 * (((M - D) / F) % 6) || 0, A, B];
          case M:
            return [60 * ((D - I) / F + 2) || 0, A, B];
          case D:
            return [60 * ((I - M) / F + 4) || 0, A, B];
        }
      }
      function N($) {
        var I = $[0],
          M = $[1] / 100,
          D = $[2] / 100,
          B = (2 - M) * D;
        return [I, Math.round(((M * D) / (B < 1 ? B : 2 - B)) * 1e4) / 100, (B / 2) * 100];
      }
      function j($) {
        for (var I = 0, M = 0; M !== $.length && !(I >= Number.MAX_SAFE_INTEGER); M++) I += $.charCodeAt(M);
        return I;
      }
      function u($) {
        if (isNaN($)) {
          if (typeof $ == 'string') {
            if (r[$]) {
              var M = r[$];
              if (M.hueRange) return M.hueRange;
            } else if ($.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
              var D = P($)[0];
              return x(D).hueRange;
            }
          }
        } else {
          var I = parseInt($);
          if (I < 360 && I > 0) return x($).hueRange;
        }
        return [0, 360];
      }
      return o;
    });
  })($_, $l);
  const _m = $l;
  function O_() {
    const e = Nr.navigator.userAgent,
      n = e.includes('Mobile') || e.includes('Android') ? 'arise-wl-' : 'arise-pc-',
      r = fn('*[data-spm-protocol="i"]'),
      i = _m({ count: 100, format: 'rgba', alpha: 0.7 });
    fn(document).on('scroll', o), o();
    function o() {
      fn(r)
        .children()
        .not('.module-tools-panel')
        .each((l, s) => {
          const d = fn(s).attr('data-spm-module');
          if (!d) return;
          const f = b.render(b.h(x_, { moduleAliasName: n + d, moduleName: d, backgroundColor: i[l] }), s);
          fn(s).height() > 20
            ? (fn(s).addClass('module-tools-panel'), fn(f).insertBefore(fn(s).children().get(0)))
            : fn(s).addClass('module-unuse-panel');
        });
    }
  }
  function __() {
    const e = Nr.navigator.userAgent,
      n = e.includes('Mobile') || e.includes('Android') ? 'arise-wl-' : 'arise-pc-',
      r = fn('.pi-layout-container'),
      i = _m({ count: 100, format: 'rgba', alpha: 0.7 });
    fn(document).on('scroll', o), o();
    function o() {
      fn(r)
        .find('*[data-modulename]')
        .not('.module-tools-panel')
        .each(async (l, s) => {
          const d = fn(s).attr('data-modulename');
          if (!d) return null;
          fn(s).height() > 20
            ? fn(s).addClass('module-tools-panel').append('<div class="store-dev-tools"></div>')
            : fn(s).addClass('module-unuse-panel'),
            await Sm(300),
            fn(s).find('.store-dev-tools').get(0) &&
              b.render(
                b.h(E_, { moduleAliasName: n + d, moduleName: d, backgroundColor: i[l] }),
                fn(s).find('.store-dev-tools').get(0),
              );
        });
    }
  }
  function T_() {
    const e = Nr.navigator.userAgent;
    e.includes('Mobile') || e.includes('Android') ? O_() : __();
  }
  return (async () => {
    C_(), T_(), Nr.GM_registerMenuCommand('🚀 Open GCP Publish Page', h_);
  })();
})(preact);
