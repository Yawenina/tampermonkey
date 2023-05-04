// ==UserScript==
// @name         Arise Store Helper
// @namespace    miravia
// @version      1.0.3
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

var __plugin_monkey_exposed = (function (y) {
  'use strict';
  var Pg = typeof global == 'object' && global && global.Object === Object && global;
  const Ng = Pg;
  var Rg = typeof self == 'object' && self && self.Object === Object && self,
    Mg = Ng || Rg || Function('return this')();
  const ms = Mg;
  var Ag = ms.Symbol;
  const wi = Ag;
  var Uc = Object.prototype,
    Dg = Uc.hasOwnProperty,
    Fg = Uc.toString,
    no = wi ? wi.toStringTag : void 0;
  function jg(e) {
    var t = Dg.call(e, no),
      n = e[no];
    try {
      e[no] = void 0;
      var r = !0;
    } catch {}
    var i = Fg.call(e);
    return r && (t ? (e[no] = n) : delete e[no]), i;
  }
  var zg = Object.prototype,
    Lg = zg.toString;
  function Hg(e) {
    return Lg.call(e);
  }
  var kg = '[object Null]',
    Bg = '[object Undefined]',
    qc = wi ? wi.toStringTag : void 0;
  function Gc(e) {
    return e == null ? (e === void 0 ? Bg : kg) : qc && qc in Object(e) ? jg(e) : Hg(e);
  }
  function Vg(e) {
    return e != null && typeof e == 'object';
  }
  var Wg = '[object Symbol]';
  function vs(e) {
    return typeof e == 'symbol' || (Vg(e) && Gc(e) == Wg);
  }
  function Ug(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; ) i[n] = t(e[n], n, e);
    return i;
  }
  var qg = Array.isArray;
  const ys = qg;
  var Gg = 1 / 0,
    Kc = wi ? wi.prototype : void 0,
    Xc = Kc ? Kc.toString : void 0;
  function Yc(e) {
    if (typeof e == 'string') return e;
    if (ys(e)) return Ug(e, Yc) + '';
    if (vs(e)) return Xc ? Xc.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -Gg ? '-0' : t;
  }
  function Qc(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var Kg = '[object AsyncFunction]',
    Xg = '[object Function]',
    Yg = '[object GeneratorFunction]',
    Qg = '[object Proxy]';
  function Jg(e) {
    if (!Qc(e)) return !1;
    var t = Gc(e);
    return t == Xg || t == Yg || t == Kg || t == Qg;
  }
  var Zg = ms['__core-js_shared__'];
  const bs = Zg;
  var Jc = (function () {
    var e = /[^.]+$/.exec((bs && bs.keys && bs.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
  function em(e) {
    return !!Jc && Jc in e;
  }
  var tm = Function.prototype,
    nm = tm.toString;
  function rm(e) {
    if (e != null) {
      try {
        return nm.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var im = /[\\^$.*+?()[\]{}|]/g,
    om = /^\[object .+?Constructor\]$/,
    am = Function.prototype,
    sm = Object.prototype,
    lm = am.toString,
    cm = sm.hasOwnProperty,
    um = RegExp(
      '^' +
        lm
          .call(cm)
          .replace(im, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$',
    );
  function fm(e) {
    if (!Qc(e) || em(e)) return !1;
    var t = Jg(e) ? um : om;
    return t.test(rm(e));
  }
  function dm(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Zc(e, t) {
    var n = dm(e, t);
    return fm(n) ? n : void 0;
  }
  function pm(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var hm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    gm = /^\w*$/;
  function mm(e, t) {
    if (ys(e)) return !1;
    var n = typeof e;
    return n == 'number' || n == 'symbol' || n == 'boolean' || e == null || vs(e)
      ? !0
      : gm.test(e) || !hm.test(e) || (t != null && e in Object(t));
  }
  var vm = Zc(Object, 'create');
  const ro = vm;
  function ym() {
    (this.__data__ = ro ? ro(null) : {}), (this.size = 0);
  }
  function bm(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var Sm = '__lodash_hash_undefined__',
    Cm = Object.prototype,
    xm = Cm.hasOwnProperty;
  function wm(e) {
    var t = this.__data__;
    if (ro) {
      var n = t[e];
      return n === Sm ? void 0 : n;
    }
    return xm.call(t, e) ? t[e] : void 0;
  }
  var Em = Object.prototype,
    $m = Em.hasOwnProperty;
  function Om(e) {
    var t = this.__data__;
    return ro ? t[e] !== void 0 : $m.call(t, e);
  }
  var _m = '__lodash_hash_undefined__';
  function Im(e, t) {
    var n = this.__data__;
    return (this.size += this.has(e) ? 0 : 1), (n[e] = ro && t === void 0 ? _m : t), this;
  }
  function Zr(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (Zr.prototype.clear = ym),
    (Zr.prototype.delete = bm),
    (Zr.prototype.get = wm),
    (Zr.prototype.has = Om),
    (Zr.prototype.set = Im);
  function Tm() {
    (this.__data__ = []), (this.size = 0);
  }
  function Lo(e, t) {
    for (var n = e.length; n--; ) if (pm(e[n][0], t)) return n;
    return -1;
  }
  var Pm = Array.prototype,
    Nm = Pm.splice;
  function Rm(e) {
    var t = this.__data__,
      n = Lo(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : Nm.call(t, n, 1), --this.size, !0;
  }
  function Mm(e) {
    var t = this.__data__,
      n = Lo(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function Am(e) {
    return Lo(this.__data__, e) > -1;
  }
  function Dm(e, t) {
    var n = this.__data__,
      r = Lo(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  }
  function Ei(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (Ei.prototype.clear = Tm),
    (Ei.prototype.delete = Rm),
    (Ei.prototype.get = Mm),
    (Ei.prototype.has = Am),
    (Ei.prototype.set = Dm);
  var Fm = Zc(ms, 'Map');
  const jm = Fm;
  function zm() {
    (this.size = 0), (this.__data__ = { hash: new Zr(), map: new (jm || Ei)(), string: new Zr() });
  }
  function Lm(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean' ? e !== '__proto__' : e === null;
  }
  function Ho(e, t) {
    var n = e.__data__;
    return Lm(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
  }
  function Hm(e) {
    var t = Ho(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function km(e) {
    return Ho(this, e).get(e);
  }
  function Bm(e) {
    return Ho(this, e).has(e);
  }
  function Vm(e, t) {
    var n = Ho(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  }
  function ei(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (ei.prototype.clear = zm),
    (ei.prototype.delete = Hm),
    (ei.prototype.get = km),
    (ei.prototype.has = Bm),
    (ei.prototype.set = Vm);
  var Wm = 'Expected a function';
  function Ss(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(Wm);
    var n = function () {
      var r = arguments,
        i = t ? t.apply(this, r) : r[0],
        a = n.cache;
      if (a.has(i)) return a.get(i);
      var s = e.apply(this, r);
      return (n.cache = a.set(i, s) || a), s;
    };
    return (n.cache = new (Ss.Cache || ei)()), n;
  }
  Ss.Cache = ei;
  var Um = 500;
  function qm(e) {
    var t = Ss(e, function (r) {
        return n.size === Um && n.clear(), r;
      }),
      n = t.cache;
    return t;
  }
  var Gm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Km = /\\(\\)?/g,
    Xm = qm(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(Gm, function (n, r, i, a) {
          t.push(i ? a.replace(Km, '$1') : r || n);
        }),
        t
      );
    });
  const Ym = Xm;
  function Qm(e) {
    return e == null ? '' : Yc(e);
  }
  function Jm(e, t) {
    return ys(e) ? e : mm(e, t) ? [e] : Ym(Qm(e));
  }
  var Zm = 1 / 0;
  function ev(e) {
    if (typeof e == 'string' || vs(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -Zm ? '-0' : t;
  }
  function tv(e, t) {
    t = Jm(t, e);
    for (var n = 0, r = t.length; e != null && n < r; ) e = e[ev(t[n++])];
    return n && n == r ? e : void 0;
  }
  function ko(e, t, n) {
    var r = e == null ? void 0 : tv(e, t);
    return r === void 0 ? n : r;
  }
  function eu() {
    return location.hostname.includes('pre-');
  }
  function Dn(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  }
  function xt(e) {
    return (
      (xt =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      xt(e)
    );
  }
  function nv(e, t) {
    if (xt(e) !== 'object' || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t || 'default');
      if (xt(r) !== 'object') return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
  }
  function tu(e) {
    var t = nv(e, 'string');
    return xt(t) === 'symbol' ? t : String(t);
  }
  function nu(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, tu(r.key), r);
    }
  }
  function Fn(e, t, n) {
    return t && nu(e.prototype, t), n && nu(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
  }
  function Cs(e, t) {
    return (
      (Cs = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, i) {
            return (r.__proto__ = i), r;
          }),
      Cs(e, t)
    );
  }
  function ti(e, t) {
    if (typeof t != 'function' && t !== null) throw new TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      t && Cs(e, t);
  }
  function Bo(e) {
    return (
      (Bo = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          }),
      Bo(e)
    );
  }
  function rv() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
      return !1;
    }
  }
  function Vo(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function iv(e, t) {
    if (t && (xt(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return Vo(e);
  }
  function ni(e) {
    var t = rv();
    return function () {
      var r = Bo(e),
        i;
      if (t) {
        var a = Bo(this).constructor;
        i = Reflect.construct(r, arguments, a);
      } else i = r.apply(this, arguments);
      return iv(this, i);
    };
  }
  var ru =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : typeof self < 'u'
        ? self
        : {},
    xs = {},
    ov = {
      get exports() {
        return xs;
      },
      set exports(e) {
        xs = e;
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
          var a = arguments[i];
          if (a) {
            var s = typeof a;
            if (s === 'string' || s === 'number') r.push(a);
            else if (Array.isArray(a)) {
              if (a.length) {
                var c = n.apply(null, a);
                c && r.push(c);
              }
            } else if (s === 'object') {
              if (a.toString !== Object.prototype.toString && !a.toString.toString().includes('[native code]')) {
                r.push(a.toString());
                continue;
              }
              for (var f in a) t.call(a, f) && a[f] && r.push(f);
            }
          }
        }
        return r.join(' ');
      }
      e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
  })(ov);
  const Ce = xs;
  function mt() {
    return (
      (mt = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      mt.apply(this, arguments)
    );
  }
  var Ar,
    Bt,
    ws,
    iu,
    $i = 0,
    ou = [],
    Wo = [],
    au = y.options.__b,
    su = y.options.__r,
    lu = y.options.diffed,
    cu = y.options.__c,
    uu = y.options.unmount;
  function ri(e, t) {
    y.options.__h && y.options.__h(Bt, e, $i || t), ($i = 0);
    var n = Bt.__H || (Bt.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({ __V: Wo }), n.__[e];
  }
  function Te(e) {
    return ($i = 1), Uo(hu, e);
  }
  function Uo(e, t, n) {
    var r = ri(Ar++, 2);
    if (
      ((r.t = e),
      !r.__c &&
        ((r.__ = [
          n ? n(t) : hu(void 0, t),
          function (a) {
            var s = r.__N ? r.__N[0] : r.__[0],
              c = r.t(s, a);
            s !== c && ((r.__N = [c, r.__[1]]), r.__c.setState({}));
          },
        ]),
        (r.__c = Bt),
        !Bt.u))
    ) {
      Bt.u = !0;
      var i = Bt.shouldComponentUpdate;
      Bt.shouldComponentUpdate = function (a, s, c) {
        if (!r.__c.__H) return !0;
        var f = r.__c.__H.__.filter(function (h) {
          return h.__c;
        });
        if (
          f.every(function (h) {
            return !h.__N;
          })
        )
          return !i || i.call(this, a, s, c);
        var p = !1;
        return (
          f.forEach(function (h) {
            if (h.__N) {
              var m = h.__[0];
              (h.__ = h.__N), (h.__N = void 0), m !== h.__[0] && (p = !0);
            }
          }),
          !(!p && r.__c.props === a) && (!i || i.call(this, a, s, c))
        );
      };
    }
    return r.__N || r.__;
  }
  function ke(e, t) {
    var n = ri(Ar++, 3);
    !y.options.__s && $s(n.__H, t) && ((n.__ = e), (n.i = t), Bt.__H.__h.push(n));
  }
  function Dr(e, t) {
    var n = ri(Ar++, 4);
    !y.options.__s && $s(n.__H, t) && ((n.__ = e), (n.i = t), Bt.__h.push(n));
  }
  function le(e) {
    return (
      ($i = 5),
      Fe(function () {
        return { current: e };
      }, [])
    );
  }
  function hn(e, t, n) {
    ($i = 6),
      Dr(
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
  function Fe(e, t) {
    var n = ri(Ar++, 7);
    return $s(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
  }
  function rn(e, t) {
    return (
      ($i = 8),
      Fe(function () {
        return e;
      }, t)
    );
  }
  function Be(e) {
    var t = Bt.context[e.__c],
      n = ri(Ar++, 9);
    return (n.c = e), t ? (n.__ == null && ((n.__ = !0), t.sub(Bt)), t.props.value) : e.__;
  }
  function fu(e, t) {
    y.options.useDebugValue && y.options.useDebugValue(t ? t(e) : e);
  }
  function av(e) {
    var t = ri(Ar++, 10),
      n = Te();
    return (
      (t.__ = e),
      Bt.componentDidCatch ||
        (Bt.componentDidCatch = function (r, i) {
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
  function du() {
    var e = ri(Ar++, 11);
    if (!e.__) {
      for (var t = Bt.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = 'P' + n[0] + '-' + n[1]++;
    }
    return e.__;
  }
  function sv() {
    for (var e; (e = ou.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(qo), e.__H.__h.forEach(Es), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), y.options.__e(t, e.__v);
        }
  }
  (y.options.__b = function (e) {
    (Bt = null), au && au(e);
  }),
    (y.options.__r = function (e) {
      su && su(e), (Ar = 0);
      var t = (Bt = e.__c).__H;
      t &&
        (ws === Bt
          ? ((t.__h = []),
            (Bt.__h = []),
            t.__.forEach(function (n) {
              n.__N && (n.__ = n.__N), (n.__V = Wo), (n.__N = n.i = void 0);
            }))
          : (t.__h.forEach(qo), t.__h.forEach(Es), (t.__h = []))),
        (ws = Bt);
    }),
    (y.options.diffed = function (e) {
      lu && lu(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((ou.push(t) !== 1 && iu === y.options.requestAnimationFrame) ||
            ((iu = y.options.requestAnimationFrame) || lv)(sv)),
        t.__H.__.forEach(function (n) {
          n.i && (n.__H = n.i), n.__V !== Wo && (n.__ = n.__V), (n.i = void 0), (n.__V = Wo);
        })),
        (ws = Bt = null);
    }),
    (y.options.__c = function (e, t) {
      t.some(function (n) {
        try {
          n.__h.forEach(qo),
            (n.__h = n.__h.filter(function (r) {
              return !r.__ || Es(r);
            }));
        } catch (r) {
          t.some(function (i) {
            i.__h && (i.__h = []);
          }),
            (t = []),
            y.options.__e(r, n.__v);
        }
      }),
        cu && cu(e, t);
    }),
    (y.options.unmount = function (e) {
      uu && uu(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (r) {
          try {
            qo(r);
          } catch (i) {
            t = i;
          }
        }),
        (n.__H = void 0),
        t && y.options.__e(t, n.__v));
    });
  var pu = typeof requestAnimationFrame == 'function';
  function lv(e) {
    var t,
      n = function () {
        clearTimeout(r), pu && cancelAnimationFrame(t), setTimeout(e);
      },
      r = setTimeout(n, 100);
    pu && (t = requestAnimationFrame(n));
  }
  function qo(e) {
    var t = Bt,
      n = e.__c;
    typeof n == 'function' && ((e.__c = void 0), n()), (Bt = t);
  }
  function Es(e) {
    var t = Bt;
    (e.__c = e.__()), (Bt = t);
  }
  function $s(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (n, r) {
        return n !== e[r];
      })
    );
  }
  function hu(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function gu(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function Os(e, t) {
    for (var n in e) if (n !== '__source' && !(n in t)) return !0;
    for (var r in t) if (r !== '__source' && e[r] !== t[r]) return !0;
    return !1;
  }
  function _s(e, t) {
    return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e != e && t != t);
  }
  function Go(e) {
    this.props = e;
  }
  function mu(e, t) {
    function n(i) {
      var a = this.props.ref,
        s = a == i.ref;
      return !s && a && (a.call ? a(null) : (a.current = null)), t ? !t(this.props, i) || !s : Os(this.props, i);
    }
    function r(i) {
      return (this.shouldComponentUpdate = n), y.createElement(e, i);
    }
    return (
      (r.displayName = 'Memo(' + (e.displayName || e.name) + ')'), (r.prototype.isReactComponent = !0), (r.__f = !0), r
    );
  }
  ((Go.prototype = new y.Component()).isPureReactComponent = !0),
    (Go.prototype.shouldComponentUpdate = function (e, t) {
      return Os(this.props, e) || Os(this.state, t);
    });
  var vu = y.options.__b;
  y.options.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), vu && vu(e);
  };
  var cv = (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.forward_ref')) || 3911;
  function Ve(e) {
    function t(n) {
      var r = gu({}, n);
      return delete r.ref, e(r, n.ref || null);
    }
    return (
      (t.$$typeof = cv),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
      t
    );
  }
  var yu = function (e, t) {
      return e == null ? null : y.toChildArray(y.toChildArray(e).map(t));
    },
    Oi = {
      map: yu,
      forEach: yu,
      count: function (e) {
        return e ? y.toChildArray(e).length : 0;
      },
      only: function (e) {
        var t = y.toChildArray(e);
        if (t.length !== 1) throw 'Children.only';
        return t[0];
      },
      toArray: y.toChildArray,
    },
    uv = y.options.__e;
  y.options.__e = function (e, t, n, r) {
    if (e.then) {
      for (var i, a = t; (a = a.__); )
        if ((i = a.__c) && i.__c) return t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), i.__c(e, t);
    }
    uv(e, t, n, r);
  };
  var bu = y.options.unmount;
  function Su(e, t, n) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (r) {
            typeof r.__c == 'function' && r.__c();
          }),
          (e.__c.__H = null)),
        (e = gu({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (r) {
            return Su(r, t, n);
          }))),
      e
    );
  }
  function Cu(e, t, n) {
    return (
      e &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (r) {
            return Cu(r, t, n);
          })),
        e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), (e.__c.__e = !0), (e.__c.__P = n))),
      e
    );
  }
  function io() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function xu(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function wu(e) {
    var t, n, r;
    function i(a) {
      if (
        (t ||
          (t = e()).then(
            function (s) {
              n = s.default || s;
            },
            function (s) {
              r = s;
            },
          ),
        r)
      )
        throw r;
      if (!n) throw t;
      return y.createElement(n, a);
    }
    return (i.displayName = 'Lazy'), (i.__f = !0), i;
  }
  function _i() {
    (this.u = null), (this.o = null);
  }
  (y.options.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), bu && bu(e);
  }),
    ((io.prototype = new y.Component()).__c = function (e, t) {
      var n = t.__c,
        r = this;
      r.t == null && (r.t = []), r.t.push(n);
      var i = xu(r.__v),
        a = !1,
        s = function () {
          a || ((a = !0), (n.__R = null), i ? i(c) : c());
        };
      n.__R = s;
      var c = function () {
          if (!--r.__u) {
            if (r.state.__a) {
              var p = r.state.__a;
              r.__v.__k[0] = Cu(p, p.__c.__P, p.__c.__O);
            }
            var h;
            for (r.setState({ __a: (r.__b = null) }); (h = r.t.pop()); ) h.forceUpdate();
          }
        },
        f = t.__h === !0;
      r.__u++ || f || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(s, s);
    }),
    (io.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (io.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement('div'),
            r = this.__v.__k[0].__c;
          this.__v.__k[0] = Su(this.__b, n, (r.__O = r.__P));
        }
        this.__b = null;
      }
      var i = t.__a && y.createElement(y.Fragment, null, e.fallback);
      return i && (i.__h = null), [y.createElement(y.Fragment, null, t.__a ? null : e.children), i];
    });
  var Eu = function (e, t, n) {
    if ((++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== 't' || !e.o.size)))
      for (n = e.u; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.u = n = n[2];
      }
  };
  function fv(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function dv(e) {
    var t = this,
      n = e.i;
    (t.componentWillUnmount = function () {
      y.render(null, t.l), (t.l = null), (t.i = null);
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
          y.render(y.createElement(fv, { context: t.context }, e.__v), t.l))
        : t.l && t.componentWillUnmount();
  }
  function Ko(e, t) {
    var n = y.createElement(dv, { __v: e, i: t });
    return (n.containerInfo = t), n;
  }
  ((_i.prototype = new y.Component()).__a = function (e) {
    var t = this,
      n = xu(t.__v),
      r = t.o.get(e);
    return (
      r[0]++,
      function (i) {
        var a = function () {
          t.props.revealOrder ? (r.push(i), Eu(t, e, r)) : i();
        };
        n ? n(a) : a();
      }
    );
  }),
    (_i.prototype.render = function (e) {
      (this.u = null), (this.o = new Map());
      var t = y.toChildArray(e.children);
      e.revealOrder && e.revealOrder[0] === 'b' && t.reverse();
      for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
      return e.children;
    }),
    (_i.prototype.componentDidUpdate = _i.prototype.componentDidMount =
      function () {
        var e = this;
        this.o.forEach(function (t, n) {
          Eu(e, n, t);
        });
      });
  var $u = (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.element')) || 60103,
    pv =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    hv = typeof document < 'u',
    gv = function (e) {
      return (typeof Symbol < 'u' && typeof Symbol() == 'symbol' ? /fil|che|rad/i : /fil|che|ra/i).test(e);
    };
  function Ou(e, t, n) {
    return t.__k == null && (t.textContent = ''), y.render(e, t), typeof n == 'function' && n(), e ? e.__c : null;
  }
  function _u(e, t, n) {
    return y.hydrate(e, t), typeof n == 'function' && n(), e ? e.__c : null;
  }
  (y.Component.prototype.isReactComponent = {}),
    ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (e) {
      Object.defineProperty(y.Component.prototype, e, {
        configurable: !0,
        get: function () {
          return this['UNSAFE_' + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
        },
      });
    });
  var Iu = y.options.event;
  function mv() {}
  function vv() {
    return this.cancelBubble;
  }
  function yv() {
    return this.defaultPrevented;
  }
  y.options.event = function (e) {
    return (
      Iu && (e = Iu(e)),
      (e.persist = mv),
      (e.isPropagationStopped = vv),
      (e.isDefaultPrevented = yv),
      (e.nativeEvent = e)
    );
  };
  var Tu,
    Pu = {
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    Nu = y.options.vnode;
  y.options.vnode = function (e) {
    var t = e.type,
      n = e.props,
      r = n;
    if (typeof t == 'string') {
      var i = t.indexOf('-') === -1;
      for (var a in ((r = {}), n)) {
        var s = n[a];
        (hv && a === 'children' && t === 'noscript') ||
          (a === 'value' && 'defaultValue' in n && s == null) ||
          (a === 'defaultValue' && 'value' in n && n.value == null
            ? (a = 'value')
            : a === 'download' && s === !0
            ? (s = '')
            : /ondoubleclick/i.test(a)
            ? (a = 'ondblclick')
            : /^onchange(textarea|input)/i.test(a + t) && !gv(n.type)
            ? (a = 'oninput')
            : /^onfocus$/i.test(a)
            ? (a = 'onfocusin')
            : /^onblur$/i.test(a)
            ? (a = 'onfocusout')
            : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(a)
            ? (a = a.toLowerCase())
            : i && pv.test(a)
            ? (a = a.replace(/[A-Z0-9]/g, '-$&').toLowerCase())
            : s === null && (s = void 0),
          /^oninput$/i.test(a) && ((a = a.toLowerCase()), r[a] && (a = 'oninputCapture')),
          (r[a] = s));
      }
      t == 'select' &&
        r.multiple &&
        Array.isArray(r.value) &&
        (r.value = y.toChildArray(n.children).forEach(function (c) {
          c.props.selected = r.value.indexOf(c.props.value) != -1;
        })),
        t == 'select' &&
          r.defaultValue != null &&
          (r.value = y.toChildArray(n.children).forEach(function (c) {
            c.props.selected = r.multiple
              ? r.defaultValue.indexOf(c.props.value) != -1
              : r.defaultValue == c.props.value;
          })),
        (e.props = r),
        n.class != n.className &&
          ((Pu.enumerable = 'className' in n),
          n.className != null && (r.class = n.className),
          Object.defineProperty(r, 'className', Pu));
    }
    (e.$$typeof = $u), Nu && Nu(e);
  };
  var Ru = y.options.__r;
  y.options.__r = function (e) {
    Ru && Ru(e), (Tu = e.__c);
  };
  var Mu = {
      ReactCurrentDispatcher: {
        current: {
          readContext: function (e) {
            return Tu.__n[e.__c].props.value;
          },
        },
      },
    },
    bv = '17.0.2';
  function Au(e) {
    return y.createElement.bind(null, e);
  }
  function kn(e) {
    return !!e && e.$$typeof === $u;
  }
  function cn(e) {
    return kn(e) ? y.cloneElement.apply(null, arguments) : e;
  }
  function Du(e) {
    return !!e.__k && (y.render(null, e), !0);
  }
  function Fu(e) {
    return (e && (e.base || (e.nodeType === 1 && e))) || null;
  }
  var ju = function (e, t) {
      return e(t);
    },
    zu = function (e, t) {
      return e(t);
    },
    Lu = y.Fragment;
  function Is(e) {
    e();
  }
  function Hu(e) {
    return e;
  }
  function ku() {
    return [!1, Is];
  }
  var Bu = Dr;
  function Vu(e, t) {
    var n = t(),
      r = Te({ h: { __: n, v: t } }),
      i = r[0].h,
      a = r[1];
    return (
      Dr(
        function () {
          (i.__ = n), (i.v = t), _s(i.__, t()) || a({ h: i });
        },
        [e, n, t],
      ),
      ke(
        function () {
          return (
            _s(i.__, i.v()) || a({ h: i }),
            e(function () {
              _s(i.__, i.v()) || a({ h: i });
            })
          );
        },
        [e],
      ),
      n
    );
  }
  var Pe = {
    useState: Te,
    useId: du,
    useReducer: Uo,
    useEffect: ke,
    useLayoutEffect: Dr,
    useInsertionEffect: Bu,
    useTransition: ku,
    useDeferredValue: Hu,
    useSyncExternalStore: Vu,
    startTransition: Is,
    useRef: le,
    useImperativeHandle: hn,
    useMemo: Fe,
    useCallback: rn,
    useContext: Be,
    useDebugValue: fu,
    version: '17.0.2',
    Children: Oi,
    render: Ou,
    hydrate: _u,
    unmountComponentAtNode: Du,
    createPortal: Ko,
    createElement: y.createElement,
    createContext: y.createContext,
    createFactory: Au,
    cloneElement: cn,
    createRef: y.createRef,
    Fragment: y.Fragment,
    isValidElement: kn,
    findDOMNode: Fu,
    Component: y.Component,
    PureComponent: Go,
    memo: mu,
    forwardRef: Ve,
    flushSync: zu,
    unstable_batchedUpdates: ju,
    StrictMode: Lu,
    Suspense: io,
    SuspenseList: _i,
    lazy: wu,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Mu,
  };
  const Ts = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Children: Oi,
        Component: y.Component,
        Fragment: y.Fragment,
        PureComponent: Go,
        StrictMode: Lu,
        Suspense: io,
        SuspenseList: _i,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Mu,
        cloneElement: cn,
        createContext: y.createContext,
        createElement: y.createElement,
        createFactory: Au,
        createPortal: Ko,
        createRef: y.createRef,
        default: Pe,
        findDOMNode: Fu,
        flushSync: zu,
        forwardRef: Ve,
        hydrate: _u,
        isValidElement: kn,
        lazy: wu,
        memo: mu,
        render: Ou,
        startTransition: Is,
        unmountComponentAtNode: Du,
        unstable_batchedUpdates: ju,
        useCallback: rn,
        useContext: Be,
        useDebugValue: fu,
        useDeferredValue: Hu,
        useEffect: ke,
        useErrorBoundary: av,
        useId: du,
        useImperativeHandle: hn,
        useInsertionEffect: Bu,
        useLayoutEffect: Dr,
        useMemo: Fe,
        useReducer: Uo,
        useRef: le,
        useState: Te,
        useSyncExternalStore: Vu,
        useTransition: ku,
        version: bv,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
  var Xo = {},
    Sv = {
      get exports() {
        return Xo;
      },
      set exports(e) {
        Xo = e;
      },
    },
    Rt = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Sn = typeof Symbol == 'function' && Symbol.for,
    Ps = Sn ? Symbol.for('react.element') : 60103,
    Ns = Sn ? Symbol.for('react.portal') : 60106,
    Yo = Sn ? Symbol.for('react.fragment') : 60107,
    Qo = Sn ? Symbol.for('react.strict_mode') : 60108,
    Jo = Sn ? Symbol.for('react.profiler') : 60114,
    Zo = Sn ? Symbol.for('react.provider') : 60109,
    ea = Sn ? Symbol.for('react.context') : 60110,
    Rs = Sn ? Symbol.for('react.async_mode') : 60111,
    ta = Sn ? Symbol.for('react.concurrent_mode') : 60111,
    na = Sn ? Symbol.for('react.forward_ref') : 60112,
    ra = Sn ? Symbol.for('react.suspense') : 60113,
    Cv = Sn ? Symbol.for('react.suspense_list') : 60120,
    ia = Sn ? Symbol.for('react.memo') : 60115,
    oa = Sn ? Symbol.for('react.lazy') : 60116,
    xv = Sn ? Symbol.for('react.block') : 60121,
    wv = Sn ? Symbol.for('react.fundamental') : 60117,
    Ev = Sn ? Symbol.for('react.responder') : 60118,
    $v = Sn ? Symbol.for('react.scope') : 60119;
  function Bn(e) {
    if (typeof e == 'object' && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Ps:
          switch (((e = e.type), e)) {
            case Rs:
            case ta:
            case Yo:
            case Jo:
            case Qo:
            case ra:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case ea:
                case na:
                case oa:
                case ia:
                case Zo:
                  return e;
                default:
                  return t;
              }
          }
        case Ns:
          return t;
      }
    }
  }
  function Wu(e) {
    return Bn(e) === ta;
  }
  (Rt.AsyncMode = Rs),
    (Rt.ConcurrentMode = ta),
    (Rt.ContextConsumer = ea),
    (Rt.ContextProvider = Zo),
    (Rt.Element = Ps),
    (Rt.ForwardRef = na),
    (Rt.Fragment = Yo),
    (Rt.Lazy = oa),
    (Rt.Memo = ia),
    (Rt.Portal = Ns),
    (Rt.Profiler = Jo),
    (Rt.StrictMode = Qo),
    (Rt.Suspense = ra),
    (Rt.isAsyncMode = function (e) {
      return Wu(e) || Bn(e) === Rs;
    }),
    (Rt.isConcurrentMode = Wu),
    (Rt.isContextConsumer = function (e) {
      return Bn(e) === ea;
    }),
    (Rt.isContextProvider = function (e) {
      return Bn(e) === Zo;
    }),
    (Rt.isElement = function (e) {
      return typeof e == 'object' && e !== null && e.$$typeof === Ps;
    }),
    (Rt.isForwardRef = function (e) {
      return Bn(e) === na;
    }),
    (Rt.isFragment = function (e) {
      return Bn(e) === Yo;
    }),
    (Rt.isLazy = function (e) {
      return Bn(e) === oa;
    }),
    (Rt.isMemo = function (e) {
      return Bn(e) === ia;
    }),
    (Rt.isPortal = function (e) {
      return Bn(e) === Ns;
    }),
    (Rt.isProfiler = function (e) {
      return Bn(e) === Jo;
    }),
    (Rt.isStrictMode = function (e) {
      return Bn(e) === Qo;
    }),
    (Rt.isSuspense = function (e) {
      return Bn(e) === ra;
    }),
    (Rt.isValidElementType = function (e) {
      return (
        typeof e == 'string' ||
        typeof e == 'function' ||
        e === Yo ||
        e === ta ||
        e === Jo ||
        e === Qo ||
        e === ra ||
        e === Cv ||
        (typeof e == 'object' &&
          e !== null &&
          (e.$$typeof === oa ||
            e.$$typeof === ia ||
            e.$$typeof === Zo ||
            e.$$typeof === ea ||
            e.$$typeof === na ||
            e.$$typeof === wv ||
            e.$$typeof === Ev ||
            e.$$typeof === $v ||
            e.$$typeof === xv))
      );
    }),
    (Rt.typeOf = Bn),
    (function (e) {
      e.exports = Rt;
    })(Sv);
  function Cr(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [];
    return (
      Pe.Children.forEach(e, function (r) {
        (r == null && !t.keepEmpty) ||
          (Array.isArray(r)
            ? (n = n.concat(Cr(r)))
            : Xo.isFragment(r) && r.props
            ? (n = n.concat(Cr(r.props.children, t)))
            : n.push(r));
      }),
      n
    );
  }
  var Uu = {};
  function Ov(e, t) {}
  function _v(e, t, n) {
    !t && !Uu[n] && (e(!1, n), (Uu[n] = !0));
  }
  function Zn(e, t) {
    _v(Ov, e, t);
  }
  function $e(e, t, n) {
    return (
      (t = tu(t)),
      t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
      e
    );
  }
  function qu(e, t) {
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
        ? qu(Object(n), !0).forEach(function (r) {
            $e(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : qu(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function aa(e, t, n) {
    var r = le({});
    return (
      (!('value' in r.current) || n(r.current.condition, t)) && ((r.current.value = e()), (r.current.condition = t)),
      r.current.value
    );
  }
  function Ms(e, t) {
    typeof e == 'function' ? e(t) : xt(e) === 'object' && e && 'current' in e && (e.current = t);
  }
  function Ii() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var r = t.filter(function (i) {
      return i;
    });
    return r.length <= 1
      ? r[0]
      : function (i) {
          t.forEach(function (a) {
            Ms(a, i);
          });
        };
  }
  function As() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return aa(
      function () {
        return Ii.apply(void 0, t);
      },
      t,
      function (r, i) {
        return (
          r.length === i.length &&
          r.every(function (a, s) {
            return a === i[s];
          })
        );
      },
    );
  }
  function sa(e) {
    var t,
      n,
      r = Xo.isMemo(e) ? e.type.type : e.type;
    return !(
      (typeof r == 'function' && !((t = r.prototype) !== null && t !== void 0 && t.render)) ||
      (typeof e == 'function' && !((n = e.prototype) !== null && n !== void 0 && n.render))
    );
  }
  function la(e) {
    return e instanceof HTMLElement ? e : e instanceof Pe.Component ? Pe.findDOMNode(e) : null;
  }
  var Gu = (function () {
      if (typeof Map < 'u') return Map;
      function e(t, n) {
        var r = -1;
        return (
          t.some(function (i, a) {
            return i[0] === n ? ((r = a), !0) : !1;
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
            for (var i = 0, a = this.__entries__; i < a.length; i++) {
              var s = a[i];
              n.call(r, s[1], s[0]);
            }
          }),
          t
        );
      })();
    })(),
    Ds = typeof window < 'u' && typeof document < 'u' && window.document === document,
    ca = (function () {
      return typeof global < 'u' && global.Math === Math
        ? global
        : typeof self < 'u' && self.Math === Math
        ? self
        : typeof window < 'u' && window.Math === Math
        ? window
        : Function('return this')();
    })(),
    Iv = (function () {
      return typeof requestAnimationFrame == 'function'
        ? requestAnimationFrame.bind(ca)
        : function (e) {
            return setTimeout(function () {
              return e(Date.now());
            }, 1e3 / 60);
          };
    })(),
    Tv = 2;
  function Pv(e, t) {
    var n = !1,
      r = !1,
      i = 0;
    function a() {
      n && ((n = !1), e()), r && c();
    }
    function s() {
      Iv(a);
    }
    function c() {
      var f = Date.now();
      if (n) {
        if (f - i < Tv) return;
        r = !0;
      } else (n = !0), (r = !1), setTimeout(s, t);
      i = f;
    }
    return c;
  }
  var Nv = 20,
    Rv = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
    Mv = typeof MutationObserver < 'u',
    Av = (function () {
      function e() {
        (this.connected_ = !1),
          (this.mutationEventsAdded_ = !1),
          (this.mutationsObserver_ = null),
          (this.observers_ = []),
          (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
          (this.refresh = Pv(this.refresh.bind(this), Nv));
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
          !Ds ||
            this.connected_ ||
            (document.addEventListener('transitionend', this.onTransitionEnd_),
            window.addEventListener('resize', this.refresh),
            Mv
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
          !Ds ||
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
            i = Rv.some(function (a) {
              return !!~r.indexOf(a);
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
    Ku = function (e, t) {
      for (var n = 0, r = Object.keys(t); n < r.length; n++) {
        var i = r[n];
        Object.defineProperty(e, i, { value: t[i], enumerable: !1, writable: !1, configurable: !0 });
      }
      return e;
    },
    Ti = function (e) {
      var t = e && e.ownerDocument && e.ownerDocument.defaultView;
      return t || ca;
    },
    Xu = fa(0, 0, 0, 0);
  function ua(e) {
    return parseFloat(e) || 0;
  }
  function Yu(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function (r, i) {
      var a = e['border-' + i + '-width'];
      return r + ua(a);
    }, 0);
  }
  function Dv(e) {
    for (var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, i = t; r < i.length; r++) {
      var a = i[r],
        s = e['padding-' + a];
      n[a] = ua(s);
    }
    return n;
  }
  function Fv(e) {
    var t = e.getBBox();
    return fa(0, 0, t.width, t.height);
  }
  function jv(e) {
    var t = e.clientWidth,
      n = e.clientHeight;
    if (!t && !n) return Xu;
    var r = Ti(e).getComputedStyle(e),
      i = Dv(r),
      a = i.left + i.right,
      s = i.top + i.bottom,
      c = ua(r.width),
      f = ua(r.height);
    if (
      (r.boxSizing === 'border-box' &&
        (Math.round(c + a) !== t && (c -= Yu(r, 'left', 'right') + a),
        Math.round(f + s) !== n && (f -= Yu(r, 'top', 'bottom') + s)),
      !Lv(e))
    ) {
      var p = Math.round(c + a) - t,
        h = Math.round(f + s) - n;
      Math.abs(p) !== 1 && (c -= p), Math.abs(h) !== 1 && (f -= h);
    }
    return fa(i.left, i.top, c, f);
  }
  var zv = (function () {
    return typeof SVGGraphicsElement < 'u'
      ? function (e) {
          return e instanceof Ti(e).SVGGraphicsElement;
        }
      : function (e) {
          return e instanceof Ti(e).SVGElement && typeof e.getBBox == 'function';
        };
  })();
  function Lv(e) {
    return e === Ti(e).document.documentElement;
  }
  function Hv(e) {
    return Ds ? (zv(e) ? Fv(e) : jv(e)) : Xu;
  }
  function kv(e) {
    var t = e.x,
      n = e.y,
      r = e.width,
      i = e.height,
      a = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
      s = Object.create(a.prototype);
    return Ku(s, { x: t, y: n, width: r, height: i, top: n, right: t + r, bottom: i + n, left: t }), s;
  }
  function fa(e, t, n, r) {
    return { x: e, y: t, width: n, height: r };
  }
  var Bv = (function () {
      function e(t) {
        (this.broadcastWidth = 0), (this.broadcastHeight = 0), (this.contentRect_ = fa(0, 0, 0, 0)), (this.target = t);
      }
      return (
        (e.prototype.isActive = function () {
          var t = Hv(this.target);
          return (this.contentRect_ = t), t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
        }),
        (e.prototype.broadcastRect = function () {
          var t = this.contentRect_;
          return (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t;
        }),
        e
      );
    })(),
    Vv = (function () {
      function e(t, n) {
        var r = kv(n);
        Ku(this, { target: t, contentRect: r });
      }
      return e;
    })(),
    Wv = (function () {
      function e(t, n, r) {
        if (((this.activeObservations_ = []), (this.observations_ = new Gu()), typeof t != 'function'))
          throw new TypeError('The callback provided as parameter 1 is not a function.');
        (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
      }
      return (
        (e.prototype.observe = function (t) {
          if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
          if (!(typeof Element > 'u' || !(Element instanceof Object))) {
            if (!(t instanceof Ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var n = this.observations_;
            n.has(t) || (n.set(t, new Bv(t)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }),
        (e.prototype.unobserve = function (t) {
          if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
          if (!(typeof Element > 'u' || !(Element instanceof Object))) {
            if (!(t instanceof Ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
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
                return new Vv(r.target, r.broadcastRect());
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
    Qu = typeof WeakMap < 'u' ? new WeakMap() : new Gu(),
    Ju = (function () {
      function e(t) {
        if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        var n = Av.getInstance(),
          r = new Wv(t, n, this);
        Qu.set(this, r);
      }
      return e;
    })();
  ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    Ju.prototype[e] = function () {
      var t;
      return (t = Qu.get(this))[e].apply(t, arguments);
    };
  });
  var Uv = (function () {
      return typeof ca.ResizeObserver < 'u' ? ca.ResizeObserver : Ju;
    })(),
    Fr = new Map();
  function qv(e) {
    e.forEach(function (t) {
      var n,
        r = t.target;
      (n = Fr.get(r)) === null ||
        n === void 0 ||
        n.forEach(function (i) {
          return i(r);
        });
    });
  }
  var Zu = new Uv(qv);
  function Gv(e, t) {
    Fr.has(e) || (Fr.set(e, new Set()), Zu.observe(e)), Fr.get(e).add(t);
  }
  function Kv(e, t) {
    Fr.has(e) && (Fr.get(e).delete(t), Fr.get(e).size || (Zu.unobserve(e), Fr.delete(e)));
  }
  var Xv = (function (e) {
      ti(n, e);
      var t = ni(n);
      function n() {
        return Dn(this, n), t.apply(this, arguments);
      }
      return (
        Fn(n, [
          {
            key: 'render',
            value: function () {
              return this.props.children;
            },
          },
        ]),
        n
      );
    })(y.Component),
    Fs = y.createContext(null);
  function Yv(e) {
    var t = e.children,
      n = e.onBatchResize,
      r = le(0),
      i = le([]),
      a = Be(Fs),
      s = rn(
        function (c, f, p) {
          r.current += 1;
          var h = r.current;
          i.current.push({ size: c, element: f, data: p }),
            Promise.resolve().then(function () {
              h === r.current && (n == null || n(i.current), (i.current = []));
            }),
            a == null || a(c, f, p);
        },
        [n, a],
      );
    return y.createElement(Fs.Provider, { value: s }, t);
  }
  function Qv(e, t) {
    var n = e.children,
      r = e.disabled,
      i = le(null),
      a = le(null),
      s = Be(Fs),
      c = typeof n == 'function',
      f = c ? n(i) : n,
      p = le({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
      h = !c && kn(f) && sa(f),
      m = h ? f.ref : null,
      v = Fe(
        function () {
          return Ii(m, i);
        },
        [m, i],
      ),
      w = function () {
        return la(i.current) || la(a.current);
      };
    hn(t, function () {
      return w();
    });
    var S = le(e);
    S.current = e;
    var C = rn(function (_) {
      var E = S.current,
        I = E.onResize,
        N = E.data,
        D = _.getBoundingClientRect(),
        z = D.width,
        u = D.height,
        $ = _.offsetWidth,
        P = _.offsetHeight,
        R = Math.floor(z),
        A = Math.floor(u);
      if (
        p.current.width !== R ||
        p.current.height !== A ||
        p.current.offsetWidth !== $ ||
        p.current.offsetHeight !== P
      ) {
        var B = { width: R, height: A, offsetWidth: $, offsetHeight: P };
        p.current = B;
        var F = $ === Math.round(z) ? z : $,
          M = P === Math.round(u) ? u : P,
          j = G(G({}, B), {}, { offsetWidth: F, offsetHeight: M });
        s == null || s(j, _, N),
          I &&
            Promise.resolve().then(function () {
              I(j, _);
            });
      }
    }, []);
    return (
      ke(
        function () {
          var _ = w();
          return (
            _ && !r && Gv(_, C),
            function () {
              return Kv(_, C);
            }
          );
        },
        [i.current, r],
      ),
      y.createElement(Xv, { ref: a }, h ? cn(f, { ref: v }) : f)
    );
  }
  var Jv = Ve(Qv),
    Zv = 'rc-observer-key';
  function e0(e, t) {
    var n = e.children,
      r = typeof n == 'function' ? [n] : Cr(n);
    return r.map(function (i, a) {
      var s = (i == null ? void 0 : i.key) || ''.concat(Zv, '-').concat(a);
      return y.createElement(Jv, mt({}, e, { key: s, ref: a === 0 ? t : void 0 }), i);
    });
  }
  var jr = Ve(e0);
  jr.Collection = Yv;
  function oo(e, t) {
    var n = G({}, e);
    return (
      Array.isArray(t) &&
        t.forEach(function (r) {
          delete n[r];
        }),
      n
    );
  }
  function js(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function t0(e) {
    if (Array.isArray(e)) return js(e);
  }
  function ef(e) {
    if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
  }
  function zs(e, t) {
    if (e) {
      if (typeof e == 'string') return js(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
        return Array.from(e);
      if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return js(e, t);
    }
  }
  function n0() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function ze(e) {
    return t0(e) || ef(e) || zs(e) || n0();
  }
  function Ls(e) {
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
  function r0(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      i,
      a;
    for (a = 0; a < r.length; a++) (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function qt(e, t) {
    if (e == null) return {};
    var n = r0(e, t),
      r,
      i;
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (i = 0; i < a.length; i++)
        (r = a[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }
  function i0(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      r = new Set();
    function i(a, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
        f = r.has(a);
      if ((Zn(!f, 'Warning: There may be circular references'), f)) return !1;
      if (a === s) return !0;
      if (n && c > 1) return !1;
      r.add(a);
      var p = c + 1;
      if (Array.isArray(a)) {
        if (!Array.isArray(s) || a.length !== s.length) return !1;
        for (var h = 0; h < a.length; h++) if (!i(a[h], s[h], p)) return !1;
        return !0;
      }
      if (a && s && xt(a) === 'object' && xt(s) === 'object') {
        var m = Object.keys(a);
        return m.length !== Object.keys(s).length
          ? !1
          : m.every(function (v) {
              return i(a[v], s[v], p);
            });
      }
      return !1;
    }
    return i(e, t);
  }
  var o0 = (function () {
      function e() {
        Dn(this, e), $e(this, 'cache', new Map());
      }
      return (
        Fn(e, [
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
                a = this.cache.get(i),
                s = r(a);
              s === null ? this.cache.delete(i) : this.cache.set(i, s);
            },
          },
        ]),
        e
      );
    })(),
    Hs = 'data-token-hash',
    ii = 'data-css-hash',
    ao = '__cssinjs_instance__',
    da = Math.random().toString(12).slice(2);
  function a0() {
    if (typeof document < 'u' && document.head && document.body) {
      var e = document.body.querySelectorAll('style['.concat(ii, ']')) || [],
        t = document.head.firstChild;
      Array.from(e).forEach(function (r) {
        (r[ao] = r[ao] || da), document.head.insertBefore(r, t);
      });
      var n = {};
      Array.from(document.querySelectorAll('style['.concat(ii, ']'))).forEach(function (r) {
        var i = r.getAttribute(ii);
        if (n[i]) {
          if (r[ao] === da) {
            var a;
            (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
          }
        } else n[i] = !0;
      });
    }
    return new o0();
  }
  var tf = y.createContext({ hashPriority: 'low', cache: a0(), defaultCache: !0 });
  function nf(e) {
    if (Array.isArray(e)) return e;
  }
  function s0(e, t) {
    var n = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (n != null) {
      var r,
        i,
        a,
        s,
        c = [],
        f = !0,
        p = !1;
      try {
        if (((a = (n = n.call(e)).next), t === 0)) {
          if (Object(n) !== n) return;
          f = !1;
        } else for (; !(f = (r = a.call(n)).done) && (c.push(r.value), c.length !== t); f = !0);
      } catch (h) {
        (p = !0), (i = h);
      } finally {
        try {
          if (!f && n.return != null && ((s = n.return()), Object(s) !== s)) return;
        } finally {
          if (p) throw i;
        }
      }
      return c;
    }
  }
  function rf() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function ge(e, t) {
    return nf(e) || s0(e, t) || zs(e, t) || rf();
  }
  function of(e, t, n, r) {
    var i = Be(tf),
      a = i.cache,
      s = [e].concat(ze(t));
    return (
      Fe(
        function () {
          a.update(s, function (c) {
            var f = c || [],
              p = ge(f, 2),
              h = p[0],
              m = h === void 0 ? 0 : h,
              v = p[1],
              w = v,
              S = w || n();
            return [m + 1, S];
          });
        },
        [s.join('_')],
      ),
      ke(function () {
        return function () {
          a.update(s, function (c) {
            var f = c || [],
              p = ge(f, 2),
              h = p[0],
              m = h === void 0 ? 0 : h,
              v = p[1],
              w = m - 1;
            return w === 0 ? (r == null || r(v, !1), null) : [m - 1, v];
          });
        };
      }, s),
      a.get(s)[1]
    );
  }
  function Rn() {
    return !!(typeof window < 'u' && window.document && window.document.createElement);
  }
  function l0(e, t) {
    if (!e) return !1;
    if (e.contains) return e.contains(t);
    for (var n = t; n; ) {
      if (n === e) return !0;
      n = n.parentNode;
    }
    return !1;
  }
  var af = 'data-rc-order',
    c0 = 'rc-util-key',
    ks = new Map();
  function sf() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.mark;
    return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : c0;
  }
  function pa(e) {
    if (e.attachTo) return e.attachTo;
    var t = document.querySelector('head');
    return t || document.body;
  }
  function u0(e) {
    return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append';
  }
  function lf(e) {
    return Array.from((ks.get(e) || e).children).filter(function (t) {
      return t.tagName === 'STYLE';
    });
  }
  function cf(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Rn()) return null;
    var n = t.csp,
      r = t.prepend,
      i = document.createElement('style');
    i.setAttribute(af, u0(r)), n != null && n.nonce && (i.nonce = n == null ? void 0 : n.nonce), (i.innerHTML = e);
    var a = pa(t),
      s = a.firstChild;
    if (r) {
      if (r === 'queue') {
        var c = lf(a).filter(function (f) {
          return ['prepend', 'prependQueue'].includes(f.getAttribute(af));
        });
        if (c.length) return a.insertBefore(i, c[c.length - 1].nextSibling), i;
      }
      a.insertBefore(i, s);
    } else a.appendChild(i);
    return i;
  }
  function uf(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = pa(t);
    return lf(n).find(function (r) {
      return r.getAttribute(sf(t)) === e;
    });
  }
  function ha(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = uf(e, t);
    if (n) {
      var r = pa(t);
      r.removeChild(n);
    }
  }
  function f0(e, t) {
    var n = ks.get(e);
    if (!n || !l0(document, n)) {
      var r = cf('', t),
        i = r.parentNode;
      ks.set(e, i), e.removeChild(r);
    }
  }
  function Pi(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      r = pa(n);
    f0(r, n);
    var i = uf(t, n);
    if (i) {
      var a, s;
      if (
        (a = n.csp) !== null &&
        a !== void 0 &&
        a.nonce &&
        i.nonce !== ((s = n.csp) === null || s === void 0 ? void 0 : s.nonce)
      ) {
        var c;
        i.nonce = (c = n.csp) === null || c === void 0 ? void 0 : c.nonce;
      }
      return i.innerHTML !== e && (i.innerHTML = e), i;
    }
    var f = cf(e, n);
    return f.setAttribute(sf(n), t), f;
  }
  function ga(e) {
    var t = '';
    return (
      Object.keys(e).forEach(function (n) {
        var r = e[n];
        (t += n), r && xt(r) === 'object' ? (t += ga(r)) : (t += r);
      }),
      t
    );
  }
  function d0(e, t) {
    return Ls(''.concat(t, '_').concat(ga(e)));
  }
  var so = 'layer-'.concat(Date.now(), '-').concat(Math.random()).replace(/\./g, ''),
    ff = '903px';
  function p0(e, t) {
    if (Rn()) {
      var n;
      Pi(e, so);
      var r = document.createElement('div');
      (r.style.position = 'fixed'),
        (r.style.left = '0'),
        (r.style.top = '0'),
        t == null || t(r),
        document.body.appendChild(r);
      var i = getComputedStyle(r).width === ff;
      return (n = r.parentNode) === null || n === void 0 || n.removeChild(r), ha(so), i;
    }
    return !1;
  }
  var Bs = void 0;
  function h0() {
    return (
      Bs === void 0 &&
        (Bs = p0('@layer '.concat(so, ' { .').concat(so, ' { width: ').concat(ff, '!important; } }'), function (e) {
          e.className = so;
        })),
      Bs
    );
  }
  var g0 = {},
    m0 = 'css',
    oi = new Map();
  function v0(e) {
    oi.set(e, (oi.get(e) || 0) + 1);
  }
  function y0(e) {
    if (typeof document < 'u') {
      var t = document.querySelectorAll('style['.concat(Hs, '="').concat(e, '"]'));
      t.forEach(function (n) {
        if (n[ao] === da) {
          var r;
          (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
        }
      });
    }
  }
  function b0(e) {
    oi.set(e, (oi.get(e) || 0) - 1);
    var t = Array.from(oi.keys()),
      n = t.filter(function (r) {
        var i = oi.get(r) || 0;
        return i <= 0;
      });
    n.length < t.length &&
      n.forEach(function (r) {
        y0(r), oi.delete(r);
      });
  }
  function S0(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      r = n.salt,
      i = r === void 0 ? '' : r,
      a = n.override,
      s = a === void 0 ? g0 : a,
      c = n.formatToken,
      f = Fe(
        function () {
          return Object.assign.apply(Object, [{}].concat(ze(t)));
        },
        [t],
      ),
      p = Fe(
        function () {
          return ga(f);
        },
        [f],
      ),
      h = Fe(
        function () {
          return ga(s);
        },
        [s],
      ),
      m = of(
        'token',
        [i, e.id, p, h],
        function () {
          var v = e.getDerivativeToken(f),
            w = G(G({}, v), s);
          c && (w = c(w));
          var S = d0(w, i);
          (w._tokenKey = S), v0(S);
          var C = ''.concat(m0, '-').concat(Ls(S));
          return (w._hashId = C), [w, C];
        },
        function (v) {
          b0(v[0]._tokenKey);
        },
      );
    return m;
  }
  var C0 = {
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
    df = 'comm',
    pf = 'rule',
    hf = 'decl',
    x0 = '@import',
    w0 = '@keyframes',
    E0 = Math.abs,
    Vs = String.fromCharCode;
  function gf(e) {
    return e.trim();
  }
  function Ws(e, t, n) {
    return e.replace(t, n);
  }
  function $0(e, t) {
    return e.indexOf(t);
  }
  function lo(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function co(e, t, n) {
    return e.slice(t, n);
  }
  function zr(e) {
    return e.length;
  }
  function mf(e) {
    return e.length;
  }
  function ma(e, t) {
    return t.push(e), e;
  }
  var va = 1,
    Ni = 1,
    vf = 0,
    er = 0,
    un = 0,
    Ri = '';
  function Us(e, t, n, r, i, a, s) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: i,
      children: a,
      line: va,
      column: Ni,
      length: s,
      return: '',
    };
  }
  function O0() {
    return un;
  }
  function _0() {
    return (un = er > 0 ? lo(Ri, --er) : 0), Ni--, un === 10 && ((Ni = 1), va--), un;
  }
  function cr() {
    return (un = er < vf ? lo(Ri, er++) : 0), Ni++, un === 10 && ((Ni = 1), va++), un;
  }
  function ai() {
    return lo(Ri, er);
  }
  function ya() {
    return er;
  }
  function ba(e, t) {
    return co(Ri, e, t);
  }
  function qs(e) {
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
  function I0(e) {
    return (va = Ni = 1), (vf = zr((Ri = e))), (er = 0), [];
  }
  function T0(e) {
    return (Ri = ''), e;
  }
  function Gs(e) {
    return gf(ba(er - 1, Ks(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function P0(e) {
    for (; (un = ai()) && un < 33; ) cr();
    return qs(e) > 2 || qs(un) > 3 ? '' : ' ';
  }
  function N0(e, t) {
    for (; --t && cr() && !(un < 48 || un > 102 || (un > 57 && un < 65) || (un > 70 && un < 97)); );
    return ba(e, ya() + (t < 6 && ai() == 32 && cr() == 32));
  }
  function Ks(e) {
    for (; cr(); )
      switch (un) {
        case e:
          return er;
        case 34:
        case 39:
          e !== 34 && e !== 39 && Ks(un);
          break;
        case 40:
          e === 41 && Ks(e);
          break;
        case 92:
          cr();
          break;
      }
    return er;
  }
  function R0(e, t) {
    for (; cr() && e + un !== 57; ) if (e + un === 84 && ai() === 47) break;
    return '/*' + ba(t, er - 1) + '*' + Vs(e === 47 ? e : cr());
  }
  function M0(e) {
    for (; !qs(ai()); ) cr();
    return ba(e, er);
  }
  function A0(e) {
    return T0(Sa('', null, null, null, [''], (e = I0(e)), 0, [0], e));
  }
  function Sa(e, t, n, r, i, a, s, c, f) {
    for (
      var p = 0, h = 0, m = s, v = 0, w = 0, S = 0, C = 1, _ = 1, E = 1, I = 0, N = '', D = i, z = a, u = r, $ = N;
      _;

    )
      switch (((S = I), (I = cr()))) {
        case 40:
          if (S != 108 && lo($, m - 1) == 58) {
            $0(($ += Ws(Gs(I), '&', '&\f')), '&\f') != -1 && (E = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          $ += Gs(I);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          $ += P0(S);
          break;
        case 92:
          $ += N0(ya() - 1, 7);
          continue;
        case 47:
          switch (ai()) {
            case 42:
            case 47:
              ma(D0(R0(cr(), ya()), t, n), f);
              break;
            default:
              $ += '/';
          }
          break;
        case 123 * C:
          c[p++] = zr($) * E;
        case 125 * C:
        case 59:
        case 0:
          switch (I) {
            case 0:
            case 125:
              _ = 0;
            case 59 + h:
              w > 0 && zr($) - m && ma(w > 32 ? bf($ + ';', r, n, m - 1) : bf(Ws($, ' ', '') + ';', r, n, m - 2), f);
              break;
            case 59:
              $ += ';';
            default:
              if ((ma((u = yf($, t, n, p, h, i, c, N, (D = []), (z = []), m)), a), I === 123))
                if (h === 0) Sa($, t, u, u, D, a, m, c, z);
                else
                  switch (v === 99 && lo($, 3) === 110 ? 100 : v) {
                    case 100:
                    case 109:
                    case 115:
                      Sa(e, u, u, r && ma(yf(e, u, u, 0, 0, i, c, N, i, (D = []), m), z), i, z, m, c, r ? D : z);
                      break;
                    default:
                      Sa($, u, u, u, [''], z, 0, c, z);
                  }
          }
          (p = h = w = 0), (C = E = 1), (N = $ = ''), (m = s);
          break;
        case 58:
          (m = 1 + zr($)), (w = S);
        default:
          if (C < 1) {
            if (I == 123) --C;
            else if (I == 125 && C++ == 0 && _0() == 125) continue;
          }
          switch ((($ += Vs(I)), I * C)) {
            case 38:
              E = h > 0 ? 1 : (($ += '\f'), -1);
              break;
            case 44:
              (c[p++] = (zr($) - 1) * E), (E = 1);
              break;
            case 64:
              ai() === 45 && ($ += Gs(cr())), (v = ai()), (h = m = zr((N = $ += M0(ya())))), I++;
              break;
            case 45:
              S === 45 && zr($) == 2 && (C = 0);
          }
      }
    return a;
  }
  function yf(e, t, n, r, i, a, s, c, f, p, h) {
    for (var m = i - 1, v = i === 0 ? a : [''], w = mf(v), S = 0, C = 0, _ = 0; S < r; ++S)
      for (var E = 0, I = co(e, m + 1, (m = E0((C = s[S])))), N = e; E < w; ++E)
        (N = gf(C > 0 ? v[E] + ' ' + I : Ws(I, /&\f/g, v[E]))) && (f[_++] = N);
    return Us(e, t, n, i === 0 ? pf : c, f, p, h);
  }
  function D0(e, t, n) {
    return Us(e, t, n, df, Vs(O0()), co(e, 2, -2), 0);
  }
  function bf(e, t, n, r) {
    return Us(e, t, n, hf, co(e, 0, r), co(e, r + 1, -1), r);
  }
  function Xs(e, t) {
    for (var n = '', r = mf(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || '';
    return n;
  }
  function F0(e, t, n, r) {
    switch (e.type) {
      case x0:
      case hf:
        return (e.return = e.return || e.value);
      case df:
        return '';
      case w0:
        return (e.return = e.value + '{' + Xs(e.children, r) + '}');
      case pf:
        e.value = e.props.join(',');
    }
    return zr((n = Xs(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
  }
  var Sf = Rn(),
    j0 = '_skip_check_';
  function Cf(e) {
    var t = Xs(A0(e), F0);
    return t.replace(/\{%%%\:[^;];}/g, ';');
  }
  function z0(e) {
    return xt(e) === 'object' && e && j0 in e;
  }
  function L0(e, t, n) {
    if (!t) return e;
    var r = '.'.concat(t),
      i = n === 'low' ? ':where('.concat(r, ')') : r,
      a = e.split(',').map(function (s) {
        var c,
          f = s.trim().split(/\s+/),
          p = f[0] || '',
          h = ((c = p.match(/^\w+/)) === null || c === void 0 ? void 0 : c[0]) || '';
        return (p = ''.concat(h).concat(i).concat(p.slice(h.length))), [p].concat(ze(f.slice(1))).join(' ');
      });
    return a.join(',');
  }
  var xf = new Set(),
    H0 = function e(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { root: !0, parentSelectors: [] },
        i = r.root,
        a = r.injectHash,
        s = r.parentSelectors,
        c = n.hashId,
        f = n.layer;
      n.path;
      var p = n.hashPriority,
        h = n.transformers,
        m = h === void 0 ? [] : h;
      n.linters;
      var v = '',
        w = {};
      function S(N) {
        var D = N.getName(c);
        if (!w[D]) {
          var z = e(N.style, n, { root: !1, parentSelectors: s }),
            u = ge(z, 1),
            $ = u[0];
          w[D] = '@keyframes '.concat(N.getName(c)).concat($);
        }
      }
      function C(N) {
        var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        return (
          N.forEach(function (z) {
            Array.isArray(z) ? C(z, D) : z && D.push(z);
          }),
          D
        );
      }
      var _ = C(Array.isArray(t) ? t : [t]);
      if (
        (_.forEach(function (N) {
          var D = typeof N == 'string' && !i ? {} : N;
          if (typeof D == 'string')
            v += ''.concat(
              D,
              `
`,
            );
          else if (D._keyframe) S(D);
          else {
            var z = m.reduce(function (u, $) {
              var P;
              return ($ == null || (P = $.visit) === null || P === void 0 ? void 0 : P.call($, u)) || u;
            }, D);
            Object.keys(z).forEach(function (u) {
              var $ = z[u];
              if (xt($) === 'object' && $ && (u !== 'animationName' || !$._keyframe) && !z0($)) {
                var P = !1,
                  R = u.trim(),
                  A = !1;
                (i || a) && c
                  ? R.startsWith('@')
                    ? (P = !0)
                    : (R = L0(u, c, p))
                  : i && !c && (R === '&' || R === '') && ((R = ''), (A = !0));
                var B = e($, n, { root: A, injectHash: P, parentSelectors: [].concat(ze(s), [R]) }),
                  F = ge(B, 2),
                  M = F[0],
                  j = F[1];
                (w = G(G({}, w), j)), (v += ''.concat(R).concat(M));
              } else {
                var V,
                  U = (V = $ == null ? void 0 : $.value) !== null && V !== void 0 ? V : $,
                  X = u.replace(/[A-Z]/g, function (ee) {
                    return '-'.concat(ee.toLowerCase());
                  }),
                  Z = U;
                !C0[u] && typeof Z == 'number' && Z !== 0 && (Z = ''.concat(Z, 'px')),
                  u === 'animationName' && $ !== null && $ !== void 0 && $._keyframe && (S($), (Z = $.getName(c))),
                  (v += ''.concat(X, ':').concat(Z, ';'));
              }
            });
          }
        }),
        !i)
      )
        v = '{'.concat(v, '}');
      else if (f && h0()) {
        var E = f.split(','),
          I = E[E.length - 1].trim();
        (v = '@layer '.concat(I, ' {').concat(v, '}')), E.length > 1 && (v = '@layer '.concat(f, '{%%%:%}').concat(v));
      }
      return [v, w];
    };
  function k0(e, t) {
    return Ls(''.concat(e.join('%')).concat(t));
  }
  function B0() {
    return null;
  }
  function Ys(e, t) {
    var n = e.token,
      r = e.path,
      i = e.hashId,
      a = e.layer,
      s = Be(tf),
      c = s.autoClear;
    s.mock;
    var f = s.defaultCache,
      p = s.hashPriority,
      h = s.container,
      m = s.ssrInline,
      v = s.transformers,
      w = s.linters,
      S = n._tokenKey,
      C = [S].concat(ze(r)),
      _ = Sf,
      E = of(
        'style',
        C,
        function () {
          var u = t(),
            $ = H0(u, { hashId: i, hashPriority: p, layer: a, path: r.join('-'), transformers: v, linters: w }),
            P = ge($, 2),
            R = P[0],
            A = P[1],
            B = Cf(R),
            F = k0(C, B);
          if (_) {
            var M = Pi(B, F, { mark: ii, prepend: 'queue', attachTo: h });
            (M[ao] = da),
              M.setAttribute(Hs, S),
              Object.keys(A).forEach(function (j) {
                xf.has(j) ||
                  (xf.add(j), Pi(Cf(A[j]), '_effect-'.concat(j), { mark: ii, prepend: 'queue', attachTo: h }));
              });
          }
          return [B, S, F];
        },
        function (u, $) {
          var P = ge(u, 3),
            R = P[2];
          ($ || c) && Sf && ha(R, { mark: ii });
        },
      ),
      I = ge(E, 3),
      N = I[0],
      D = I[1],
      z = I[2];
    return function (u) {
      var $;
      if (!m || _ || !f) $ = y.createElement(B0, null);
      else {
        var P;
        $ = y.createElement(
          'style',
          mt({}, ((P = {}), $e(P, Hs, D), $e(P, ii, z), P), { dangerouslySetInnerHTML: { __html: N } }),
        );
      }
      return y.createElement(y.Fragment, null, $, u);
    };
  }
  var $t = (function () {
    function e(t, n) {
      Dn(this, e),
        $e(this, 'name', void 0),
        $e(this, 'style', void 0),
        $e(this, '_keyframe', !0),
        (this.name = t),
        (this.style = n);
    }
    return (
      Fn(e, [
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
  function V0(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  var Qs = (function () {
    function e() {
      Dn(this, e),
        $e(this, 'cache', void 0),
        $e(this, 'keys', void 0),
        $e(this, 'cacheCallTimes', void 0),
        (this.cache = new Map()),
        (this.keys = []),
        (this.cacheCallTimes = 0);
    }
    return (
      Fn(e, [
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
              a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
              s = { map: this.cache };
            return (
              n.forEach(function (c) {
                if (!s) s = void 0;
                else {
                  var f, p;
                  s = (f = s) === null || f === void 0 || (p = f.map) === null || p === void 0 ? void 0 : p.get(c);
                }
              }),
              (r = s) !== null && r !== void 0 && r.value && a && (s.value[1] = this.cacheCallTimes++),
              (i = s) === null || i === void 0 ? void 0 : i.value
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
                var a = this.keys.reduce(
                    function (p, h) {
                      var m = ge(p, 2),
                        v = m[1];
                      return i.internalGet(h)[1] < v ? [h, i.internalGet(h)[1]] : p;
                    },
                    [this.keys[0], this.cacheCallTimes],
                  ),
                  s = ge(a, 1),
                  c = s[0];
                this.delete(c);
              }
              this.keys.push(n);
            }
            var f = this.cache;
            n.forEach(function (p, h) {
              if (h === n.length - 1) f.set(p, { value: [r, i.cacheCallTimes++] });
              else {
                var m = f.get(p);
                m ? m.map || (m.map = new Map()) : f.set(p, { map: new Map() }), (f = f.get(p).map);
              }
            });
          },
        },
        {
          key: 'deleteByPath',
          value: function (n, r) {
            var i = n.get(r[0]);
            if (r.length === 1) {
              var a;
              return (
                i.map ? n.set(r[0], { map: i.map }) : n.delete(r[0]),
                (a = i.value) === null || a === void 0 ? void 0 : a[0]
              );
            }
            var s = this.deleteByPath(i.map, r.slice(1));
            return (!i.map || i.map.size === 0) && !i.value && n.delete(r[0]), s;
          },
        },
        {
          key: 'delete',
          value: function (n) {
            if (this.has(n))
              return (
                (this.keys = this.keys.filter(function (r) {
                  return !V0(r, n);
                })),
                this.deleteByPath(this.cache, n)
              );
          },
        },
      ]),
      e
    );
  })();
  $e(Qs, 'MAX_CACHE_SIZE', 20), $e(Qs, 'MAX_CACHE_OFFSET', 5);
  var wf = 0,
    W0 = (function () {
      function e(t) {
        Dn(this, e),
          $e(this, 'derivatives', void 0),
          $e(this, 'id', void 0),
          (this.derivatives = Array.isArray(t) ? t : [t]),
          (this.id = wf),
          t.length === 0 && (t.length > 0, void 0),
          (wf += 1);
      }
      return (
        Fn(e, [
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
    Js = new Qs();
  function Ef(e) {
    var t = Array.isArray(e) ? e : [e];
    return Js.has(t) || Js.set(t, new W0(t)), Js.get(t);
  }
  function Mi(e) {
    return (e.notSplit = !0), e;
  }
  Mi(['borderTop', 'borderBottom']),
    Mi(['borderTop']),
    Mi(['borderBottom']),
    Mi(['borderLeft', 'borderRight']),
    Mi(['borderLeft']),
    Mi(['borderRight']);
  var U0 = y.createContext({});
  const Zs = U0;
  var si = 'RC_FORM_INTERNAL_HOOKS',
    Mt = function () {
      Zn(!1, 'Can not find FormContext. Please make sure you wrap Field under Form.');
    },
    Ai = y.createContext({
      getFieldValue: Mt,
      getFieldsValue: Mt,
      getFieldError: Mt,
      getFieldWarning: Mt,
      getFieldsError: Mt,
      isFieldsTouched: Mt,
      isFieldTouched: Mt,
      isFieldValidating: Mt,
      isFieldsValidating: Mt,
      resetFields: Mt,
      setFields: Mt,
      setFieldValue: Mt,
      setFieldsValue: Mt,
      validateFields: Mt,
      submit: Mt,
      getInternalHooks: function () {
        return (
          Mt(),
          {
            dispatch: Mt,
            initEntityValue: Mt,
            registerField: Mt,
            useSubscribe: Mt,
            setInitialValues: Mt,
            destroyForm: Mt,
            setCallbacks: Mt,
            registerWatch: Mt,
            getFields: Mt,
            setValidateMessages: Mt,
            setPreserve: Mt,
            getInitialValue: Mt,
          }
        );
      },
    });
  function el(e) {
    return e == null ? [] : Array.isArray(e) ? e : [e];
  }
  function xr() {
    xr = function () {
      return e;
    };
    var e = {},
      t = Object.prototype,
      n = t.hasOwnProperty,
      r =
        Object.defineProperty ||
        function (F, M, j) {
          F[M] = j.value;
        },
      i = typeof Symbol == 'function' ? Symbol : {},
      a = i.iterator || '@@iterator',
      s = i.asyncIterator || '@@asyncIterator',
      c = i.toStringTag || '@@toStringTag';
    function f(F, M, j) {
      return Object.defineProperty(F, M, { value: j, enumerable: !0, configurable: !0, writable: !0 }), F[M];
    }
    try {
      f({}, '');
    } catch {
      f = function (j, V, U) {
        return (j[V] = U);
      };
    }
    function p(F, M, j, V) {
      var U = M && M.prototype instanceof v ? M : v,
        X = Object.create(U.prototype),
        Z = new R(V || []);
      return r(X, '_invoke', { value: z(F, j, Z) }), X;
    }
    function h(F, M, j) {
      try {
        return { type: 'normal', arg: F.call(M, j) };
      } catch (V) {
        return { type: 'throw', arg: V };
      }
    }
    e.wrap = p;
    var m = {};
    function v() {}
    function w() {}
    function S() {}
    var C = {};
    f(C, a, function () {
      return this;
    });
    var _ = Object.getPrototypeOf,
      E = _ && _(_(A([])));
    E && E !== t && n.call(E, a) && (C = E);
    var I = (S.prototype = v.prototype = Object.create(C));
    function N(F) {
      ['next', 'throw', 'return'].forEach(function (M) {
        f(F, M, function (j) {
          return this._invoke(M, j);
        });
      });
    }
    function D(F, M) {
      function j(U, X, Z, ee) {
        var fe = h(F[U], F, X);
        if (fe.type !== 'throw') {
          var de = fe.arg,
            ye = de.value;
          return ye && xt(ye) == 'object' && n.call(ye, '__await')
            ? M.resolve(ye.__await).then(
                function (J) {
                  j('next', J, Z, ee);
                },
                function (J) {
                  j('throw', J, Z, ee);
                },
              )
            : M.resolve(ye).then(
                function (J) {
                  (de.value = J), Z(de);
                },
                function (J) {
                  return j('throw', J, Z, ee);
                },
              );
        }
        ee(fe.arg);
      }
      var V;
      r(this, '_invoke', {
        value: function (X, Z) {
          function ee() {
            return new M(function (fe, de) {
              j(X, Z, fe, de);
            });
          }
          return (V = V ? V.then(ee, ee) : ee());
        },
      });
    }
    function z(F, M, j) {
      var V = 'suspendedStart';
      return function (U, X) {
        if (V === 'executing') throw new Error('Generator is already running');
        if (V === 'completed') {
          if (U === 'throw') throw X;
          return B();
        }
        for (j.method = U, j.arg = X; ; ) {
          var Z = j.delegate;
          if (Z) {
            var ee = u(Z, j);
            if (ee) {
              if (ee === m) continue;
              return ee;
            }
          }
          if (j.method === 'next') j.sent = j._sent = j.arg;
          else if (j.method === 'throw') {
            if (V === 'suspendedStart') throw ((V = 'completed'), j.arg);
            j.dispatchException(j.arg);
          } else j.method === 'return' && j.abrupt('return', j.arg);
          V = 'executing';
          var fe = h(F, M, j);
          if (fe.type === 'normal') {
            if (((V = j.done ? 'completed' : 'suspendedYield'), fe.arg === m)) continue;
            return { value: fe.arg, done: j.done };
          }
          fe.type === 'throw' && ((V = 'completed'), (j.method = 'throw'), (j.arg = fe.arg));
        }
      };
    }
    function u(F, M) {
      var j = M.method,
        V = F.iterator[j];
      if (V === void 0)
        return (
          (M.delegate = null),
          (j === 'throw' &&
            F.iterator.return &&
            ((M.method = 'return'), (M.arg = void 0), u(F, M), M.method === 'throw')) ||
            (j !== 'return' &&
              ((M.method = 'throw'), (M.arg = new TypeError("The iterator does not provide a '" + j + "' method")))),
          m
        );
      var U = h(V, F.iterator, M.arg);
      if (U.type === 'throw') return (M.method = 'throw'), (M.arg = U.arg), (M.delegate = null), m;
      var X = U.arg;
      return X
        ? X.done
          ? ((M[F.resultName] = X.value),
            (M.next = F.nextLoc),
            M.method !== 'return' && ((M.method = 'next'), (M.arg = void 0)),
            (M.delegate = null),
            m)
          : X
        : ((M.method = 'throw'), (M.arg = new TypeError('iterator result is not an object')), (M.delegate = null), m);
    }
    function $(F) {
      var M = { tryLoc: F[0] };
      1 in F && (M.catchLoc = F[1]), 2 in F && ((M.finallyLoc = F[2]), (M.afterLoc = F[3])), this.tryEntries.push(M);
    }
    function P(F) {
      var M = F.completion || {};
      (M.type = 'normal'), delete M.arg, (F.completion = M);
    }
    function R(F) {
      (this.tryEntries = [{ tryLoc: 'root' }]), F.forEach($, this), this.reset(!0);
    }
    function A(F) {
      if (F) {
        var M = F[a];
        if (M) return M.call(F);
        if (typeof F.next == 'function') return F;
        if (!isNaN(F.length)) {
          var j = -1,
            V = function U() {
              for (; ++j < F.length; ) if (n.call(F, j)) return (U.value = F[j]), (U.done = !1), U;
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
      (w.prototype = S),
      r(I, 'constructor', { value: S, configurable: !0 }),
      r(S, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = f(S, c, 'GeneratorFunction')),
      (e.isGeneratorFunction = function (F) {
        var M = typeof F == 'function' && F.constructor;
        return !!M && (M === w || (M.displayName || M.name) === 'GeneratorFunction');
      }),
      (e.mark = function (F) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(F, S) : ((F.__proto__ = S), f(F, c, 'GeneratorFunction')),
          (F.prototype = Object.create(I)),
          F
        );
      }),
      (e.awrap = function (F) {
        return { __await: F };
      }),
      N(D.prototype),
      f(D.prototype, s, function () {
        return this;
      }),
      (e.AsyncIterator = D),
      (e.async = function (F, M, j, V, U) {
        U === void 0 && (U = Promise);
        var X = new D(p(F, M, j, V), U);
        return e.isGeneratorFunction(M)
          ? X
          : X.next().then(function (Z) {
              return Z.done ? Z.value : X.next();
            });
      }),
      N(I),
      f(I, c, 'Generator'),
      f(I, a, function () {
        return this;
      }),
      f(I, 'toString', function () {
        return '[object Generator]';
      }),
      (e.keys = function (F) {
        var M = Object(F),
          j = [];
        for (var V in M) j.push(V);
        return (
          j.reverse(),
          function U() {
            for (; j.length; ) {
              var X = j.pop();
              if (X in M) return (U.value = X), (U.done = !1), U;
            }
            return (U.done = !0), U;
          }
        );
      }),
      (e.values = A),
      (R.prototype = {
        constructor: R,
        reset: function (M) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = void 0),
            this.tryEntries.forEach(P),
            !M)
          )
            for (var j in this) j.charAt(0) === 't' && n.call(this, j) && !isNaN(+j.slice(1)) && (this[j] = void 0);
        },
        stop: function () {
          this.done = !0;
          var M = this.tryEntries[0].completion;
          if (M.type === 'throw') throw M.arg;
          return this.rval;
        },
        dispatchException: function (M) {
          if (this.done) throw M;
          var j = this;
          function V(de, ye) {
            return (Z.type = 'throw'), (Z.arg = M), (j.next = de), ye && ((j.method = 'next'), (j.arg = void 0)), !!ye;
          }
          for (var U = this.tryEntries.length - 1; U >= 0; --U) {
            var X = this.tryEntries[U],
              Z = X.completion;
            if (X.tryLoc === 'root') return V('end');
            if (X.tryLoc <= this.prev) {
              var ee = n.call(X, 'catchLoc'),
                fe = n.call(X, 'finallyLoc');
              if (ee && fe) {
                if (this.prev < X.catchLoc) return V(X.catchLoc, !0);
                if (this.prev < X.finallyLoc) return V(X.finallyLoc);
              } else if (ee) {
                if (this.prev < X.catchLoc) return V(X.catchLoc, !0);
              } else {
                if (!fe) throw new Error('try statement without catch or finally');
                if (this.prev < X.finallyLoc) return V(X.finallyLoc);
              }
            }
          }
        },
        abrupt: function (M, j) {
          for (var V = this.tryEntries.length - 1; V >= 0; --V) {
            var U = this.tryEntries[V];
            if (U.tryLoc <= this.prev && n.call(U, 'finallyLoc') && this.prev < U.finallyLoc) {
              var X = U;
              break;
            }
          }
          X && (M === 'break' || M === 'continue') && X.tryLoc <= j && j <= X.finallyLoc && (X = null);
          var Z = X ? X.completion : {};
          return (
            (Z.type = M), (Z.arg = j), X ? ((this.method = 'next'), (this.next = X.finallyLoc), m) : this.complete(Z)
          );
        },
        complete: function (M, j) {
          if (M.type === 'throw') throw M.arg;
          return (
            M.type === 'break' || M.type === 'continue'
              ? (this.next = M.arg)
              : M.type === 'return'
              ? ((this.rval = this.arg = M.arg), (this.method = 'return'), (this.next = 'end'))
              : M.type === 'normal' && j && (this.next = j),
            m
          );
        },
        finish: function (M) {
          for (var j = this.tryEntries.length - 1; j >= 0; --j) {
            var V = this.tryEntries[j];
            if (V.finallyLoc === M) return this.complete(V.completion, V.afterLoc), P(V), m;
          }
        },
        catch: function (M) {
          for (var j = this.tryEntries.length - 1; j >= 0; --j) {
            var V = this.tryEntries[j];
            if (V.tryLoc === M) {
              var U = V.completion;
              if (U.type === 'throw') {
                var X = U.arg;
                P(V);
              }
              return X;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (M, j, V) {
          return (
            (this.delegate = { iterator: A(M), resultName: j, nextLoc: V }),
            this.method === 'next' && (this.arg = void 0),
            m
          );
        },
      }),
      e
    );
  }
  function $f(e, t, n, r, i, a, s) {
    try {
      var c = e[a](s),
        f = c.value;
    } catch (p) {
      n(p);
      return;
    }
    c.done ? t(f) : Promise.resolve(f).then(r, i);
  }
  function Ca(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var a = e.apply(t, n);
        function s(f) {
          $f(a, r, i, s, c, 'next', f);
        }
        function c(f) {
          $f(a, r, i, s, c, 'throw', f);
        }
        s(void 0);
      });
    };
  }
  function li() {
    return (
      (li = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      li.apply(this, arguments)
    );
  }
  function q0(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), uo(e, t);
  }
  function tl(e) {
    return (
      (tl = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          }),
      tl(e)
    );
  }
  function uo(e, t) {
    return (
      (uo = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, i) {
            return (r.__proto__ = i), r;
          }),
      uo(e, t)
    );
  }
  function G0() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
      return !1;
    }
  }
  function xa(e, t, n) {
    return (
      G0()
        ? (xa = Reflect.construct.bind())
        : (xa = function (i, a, s) {
            var c = [null];
            c.push.apply(c, a);
            var f = Function.bind.apply(i, c),
              p = new f();
            return s && uo(p, s.prototype), p;
          }),
      xa.apply(null, arguments)
    );
  }
  function K0(e) {
    return Function.toString.call(e).indexOf('[native code]') !== -1;
  }
  function nl(e) {
    var t = typeof Map == 'function' ? new Map() : void 0;
    return (
      (nl = function (r) {
        if (r === null || !K0(r)) return r;
        if (typeof r != 'function') throw new TypeError('Super expression must either be null or a function');
        if (typeof t < 'u') {
          if (t.has(r)) return t.get(r);
          t.set(r, i);
        }
        function i() {
          return xa(r, arguments, tl(this).constructor);
        }
        return (
          (i.prototype = Object.create(r.prototype, {
            constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
          })),
          uo(i, r)
        );
      }),
      nl(e)
    );
  }
  var X0 = /%[sdj%]/g,
    Y0 = function () {};
  typeof process < 'u' && process.env;
  function rl(e) {
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
  function Vn(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    var i = 0,
      a = n.length;
    if (typeof e == 'function') return e.apply(null, n);
    if (typeof e == 'string') {
      var s = e.replace(X0, function (c) {
        if (c === '%%') return '%';
        if (i >= a) return c;
        switch (c) {
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
            return c;
        }
      });
      return s;
    }
    return e;
  }
  function Q0(e) {
    return e === 'string' || e === 'url' || e === 'hex' || e === 'email' || e === 'date' || e === 'pattern';
  }
  function gn(e, t) {
    return !!(e == null || (t === 'array' && Array.isArray(e) && !e.length) || (Q0(t) && typeof e == 'string' && !e));
  }
  function J0(e, t, n) {
    var r = [],
      i = 0,
      a = e.length;
    function s(c) {
      r.push.apply(r, c || []), i++, i === a && n(r);
    }
    e.forEach(function (c) {
      t(c, s);
    });
  }
  function Of(e, t, n) {
    var r = 0,
      i = e.length;
    function a(s) {
      if (s && s.length) {
        n(s);
        return;
      }
      var c = r;
      (r = r + 1), c < i ? t(e[c], a) : n([]);
    }
    a([]);
  }
  function Z0(e) {
    var t = [];
    return (
      Object.keys(e).forEach(function (n) {
        t.push.apply(t, e[n] || []);
      }),
      t
    );
  }
  var _f = (function (e) {
    q0(t, e);
    function t(n, r) {
      var i;
      return (i = e.call(this, 'Async Validation Error') || this), (i.errors = n), (i.fields = r), i;
    }
    return t;
  })(nl(Error));
  function ey(e, t, n, r, i) {
    if (t.first) {
      var a = new Promise(function (v, w) {
        var S = function (E) {
            return r(E), E.length ? w(new _f(E, rl(E))) : v(i);
          },
          C = Z0(e);
        Of(C, n, S);
      });
      return (
        a.catch(function (v) {
          return v;
        }),
        a
      );
    }
    var s = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
      c = Object.keys(e),
      f = c.length,
      p = 0,
      h = [],
      m = new Promise(function (v, w) {
        var S = function (_) {
          if ((h.push.apply(h, _), p++, p === f)) return r(h), h.length ? w(new _f(h, rl(h))) : v(i);
        };
        c.length || (r(h), v(i)),
          c.forEach(function (C) {
            var _ = e[C];
            s.indexOf(C) !== -1 ? Of(_, n, S) : J0(_, n, S);
          });
      });
    return (
      m.catch(function (v) {
        return v;
      }),
      m
    );
  }
  function ty(e) {
    return !!(e && e.message !== void 0);
  }
  function ny(e, t) {
    for (var n = e, r = 0; r < t.length; r++) {
      if (n == null) return n;
      n = n[t[r]];
    }
    return n;
  }
  function If(e, t) {
    return function (n) {
      var r;
      return (
        e.fullFields ? (r = ny(t, e.fullFields)) : (r = t[n.field || e.fullField]),
        ty(n)
          ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
          : { message: typeof n == 'function' ? n() : n, fieldValue: r, field: n.field || e.fullField }
      );
    };
  }
  function Tf(e, t) {
    if (t) {
      for (var n in t)
        if (t.hasOwnProperty(n)) {
          var r = t[n];
          typeof r == 'object' && typeof e[n] == 'object' ? (e[n] = li({}, e[n], r)) : (e[n] = r);
        }
    }
    return e;
  }
  var Pf = function (t, n, r, i, a, s) {
      t.required && (!r.hasOwnProperty(t.field) || gn(n, s || t.type)) && i.push(Vn(a.messages.required, t.fullField));
    },
    ry = function (t, n, r, i, a) {
      (/^\s+$/.test(n) || n === '') && i.push(Vn(a.messages.whitespace, t.fullField));
    },
    wa,
    iy = function () {
      if (wa) return wa;
      var e = '[a-fA-F\\d:]',
        t = function (D) {
          return D && D.includeBoundaries ? '(?:(?<=\\s|^)(?=' + e + ')|(?<=' + e + ')(?=\\s|$))' : '';
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
        a = new RegExp('(?:^' + n + '$)|(?:^' + i + '$)'),
        s = new RegExp('^' + n + '$'),
        c = new RegExp('^' + i + '$'),
        f = function (D) {
          return D && D.exact ? a : new RegExp('(?:' + t(D) + n + t(D) + ')|(?:' + t(D) + i + t(D) + ')', 'g');
        };
      (f.v4 = function (N) {
        return N && N.exact ? s : new RegExp('' + t(N) + n + t(N), 'g');
      }),
        (f.v6 = function (N) {
          return N && N.exact ? c : new RegExp('' + t(N) + i + t(N), 'g');
        });
      var p = '(?:(?:[a-z]+:)?//)',
        h = '(?:\\S+(?::\\S*)?@)?',
        m = f.v4().source,
        v = f.v6().source,
        w = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
        S = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
        C = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
        _ = '(?::\\d{2,5})?',
        E = '(?:[/?#][^\\s"]*)?',
        I = '(?:' + p + '|www\\.)' + h + '(?:localhost|' + m + '|' + v + '|' + w + S + C + ')' + _ + E;
      return (wa = new RegExp('(?:^' + I + '$)', 'i')), wa;
    },
    Nf = {
      email:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
      hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
    },
    fo = {
      integer: function (t) {
        return fo.number(t) && parseInt(t, 10) === t;
      },
      float: function (t) {
        return fo.number(t) && !fo.integer(t);
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
        return typeof t == 'object' && !fo.array(t);
      },
      method: function (t) {
        return typeof t == 'function';
      },
      email: function (t) {
        return typeof t == 'string' && t.length <= 320 && !!t.match(Nf.email);
      },
      url: function (t) {
        return typeof t == 'string' && t.length <= 2048 && !!t.match(iy());
      },
      hex: function (t) {
        return typeof t == 'string' && !!t.match(Nf.hex);
      },
    },
    oy = function (t, n, r, i, a) {
      if (t.required && n === void 0) {
        Pf(t, n, r, i, a);
        return;
      }
      var s = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'],
        c = t.type;
      s.indexOf(c) > -1
        ? fo[c](n) || i.push(Vn(a.messages.types[c], t.fullField, t.type))
        : c && typeof n !== t.type && i.push(Vn(a.messages.types[c], t.fullField, t.type));
    },
    ay = function (t, n, r, i, a) {
      var s = typeof t.len == 'number',
        c = typeof t.min == 'number',
        f = typeof t.max == 'number',
        p = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        h = n,
        m = null,
        v = typeof n == 'number',
        w = typeof n == 'string',
        S = Array.isArray(n);
      if ((v ? (m = 'number') : w ? (m = 'string') : S && (m = 'array'), !m)) return !1;
      S && (h = n.length),
        w && (h = n.replace(p, '_').length),
        s
          ? h !== t.len && i.push(Vn(a.messages[m].len, t.fullField, t.len))
          : c && !f && h < t.min
          ? i.push(Vn(a.messages[m].min, t.fullField, t.min))
          : f && !c && h > t.max
          ? i.push(Vn(a.messages[m].max, t.fullField, t.max))
          : c && f && (h < t.min || h > t.max) && i.push(Vn(a.messages[m].range, t.fullField, t.min, t.max));
    },
    Di = 'enum',
    sy = function (t, n, r, i, a) {
      (t[Di] = Array.isArray(t[Di]) ? t[Di] : []),
        t[Di].indexOf(n) === -1 && i.push(Vn(a.messages[Di], t.fullField, t[Di].join(', ')));
    },
    ly = function (t, n, r, i, a) {
      if (t.pattern) {
        if (t.pattern instanceof RegExp)
          (t.pattern.lastIndex = 0),
            t.pattern.test(n) || i.push(Vn(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
        else if (typeof t.pattern == 'string') {
          var s = new RegExp(t.pattern);
          s.test(n) || i.push(Vn(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
        }
      }
    },
    bt = { required: Pf, whitespace: ry, type: oy, range: ay, enum: sy, pattern: ly },
    cy = function (t, n, r, i, a) {
      var s = [],
        c = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (c) {
        if (gn(n, 'string') && !t.required) return r();
        bt.required(t, n, i, s, a, 'string'),
          gn(n, 'string') ||
            (bt.type(t, n, i, s, a),
            bt.range(t, n, i, s, a),
            bt.pattern(t, n, i, s, a),
            t.whitespace === !0 && bt.whitespace(t, n, i, s, a));
      }
      r(s);
    },
    uy = function (t, n, r, i, a) {
      var s = [],
        c = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (c) {
        if (gn(n) && !t.required) return r();
        bt.required(t, n, i, s, a), n !== void 0 && bt.type(t, n, i, s, a);
      }
      r(s);
    },
    fy = function (t, n, r, i, a) {
      var s = [],
        c = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (c) {
        if ((n === '' && (n = void 0), gn(n) && !t.required)) return r();
        bt.required(t, n, i, s, a), n !== void 0 && (bt.type(t, n, i, s, a), bt.range(t, n, i, s, a));
      }
      r(s);
    },
    dy = function (t, n, r, i, a) {
      var s = [],
        c = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (c) {
        if (gn(n) && !t.required) return r();
        bt.required(t, n, i, s, a), n !== void 0 && bt.type(t, n, i, s, a);
      }
      r(s);
    },
    py = function (t, n, r, i, a) {
      var s = [],
        c = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (c) {
        if (gn(n) && !t.required) return r();
        bt.required(t, n, i, s, a), gn(n) || bt.type(t, n, i, s, a);
      }
      r(s);
    },
    hy = function (t, n, r, i, a) {
      var s = [],
        c = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (c) {
        if (gn(n) && !t.required) return r();
        bt.required(t, n, i, s, a), n !== void 0 && (bt.type(t, n, i, s, a), bt.range(t, n, i, s, a));
      }
      r(s);
    },
    gy = function (t, n, r, i, a) {
      var s = [],
        c = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (c) {
        if (gn(n) && !t.required) return r();
        bt.required(t, n, i, s, a), n !== void 0 && (bt.type(t, n, i, s, a), bt.range(t, n, i, s, a));
      }
      r(s);
    },
    my = function (t, n, r, i, a) {
      var s = [],
        c = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (c) {
        if (n == null && !t.required) return r();
        bt.required(t, n, i, s, a, 'array'), n != null && (bt.type(t, n, i, s, a), bt.range(t, n, i, s, a));
      }
      r(s);
    },
    vy = function (t, n, r, i, a) {
      var s = [],
        c = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (c) {
        if (gn(n) && !t.required) return r();
        bt.required(t, n, i, s, a), n !== void 0 && bt.type(t, n, i, s, a);
      }
      r(s);
    },
    yy = 'enum',
    by = function (t, n, r, i, a) {
      var s = [],
        c = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (c) {
        if (gn(n) && !t.required) return r();
        bt.required(t, n, i, s, a), n !== void 0 && bt[yy](t, n, i, s, a);
      }
      r(s);
    },
    Sy = function (t, n, r, i, a) {
      var s = [],
        c = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (c) {
        if (gn(n, 'string') && !t.required) return r();
        bt.required(t, n, i, s, a), gn(n, 'string') || bt.pattern(t, n, i, s, a);
      }
      r(s);
    },
    Cy = function (t, n, r, i, a) {
      var s = [],
        c = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (c) {
        if (gn(n, 'date') && !t.required) return r();
        if ((bt.required(t, n, i, s, a), !gn(n, 'date'))) {
          var f;
          n instanceof Date ? (f = n) : (f = new Date(n)),
            bt.type(t, f, i, s, a),
            f && bt.range(t, f.getTime(), i, s, a);
        }
      }
      r(s);
    },
    xy = function (t, n, r, i, a) {
      var s = [],
        c = Array.isArray(n) ? 'array' : typeof n;
      bt.required(t, n, i, s, a, c), r(s);
    },
    il = function (t, n, r, i, a) {
      var s = t.type,
        c = [],
        f = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (f) {
        if (gn(n, s) && !t.required) return r();
        bt.required(t, n, i, c, a, s), gn(n, s) || bt.type(t, n, i, c, a);
      }
      r(c);
    },
    wy = function (t, n, r, i, a) {
      var s = [],
        c = t.required || (!t.required && i.hasOwnProperty(t.field));
      if (c) {
        if (gn(n) && !t.required) return r();
        bt.required(t, n, i, s, a);
      }
      r(s);
    },
    po = {
      string: cy,
      method: uy,
      number: fy,
      boolean: dy,
      regexp: py,
      integer: hy,
      float: gy,
      array: my,
      object: vy,
      enum: by,
      pattern: Sy,
      date: Cy,
      url: il,
      hex: il,
      email: il,
      required: xy,
      any: wy,
    };
  function ol() {
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
  var al = ol(),
    ho = (function () {
      function e(n) {
        (this.rules = null), (this._messages = al), this.define(n);
      }
      var t = e.prototype;
      return (
        (t.define = function (r) {
          var i = this;
          if (!r) throw new Error('Cannot configure a schema with no rules');
          if (typeof r != 'object' || Array.isArray(r)) throw new Error('Rules must be an object');
          (this.rules = {}),
            Object.keys(r).forEach(function (a) {
              var s = r[a];
              i.rules[a] = Array.isArray(s) ? s : [s];
            });
        }),
        (t.messages = function (r) {
          return r && (this._messages = Tf(ol(), r)), this._messages;
        }),
        (t.validate = function (r, i, a) {
          var s = this;
          i === void 0 && (i = {}), a === void 0 && (a = function () {});
          var c = r,
            f = i,
            p = a;
          if ((typeof f == 'function' && ((p = f), (f = {})), !this.rules || Object.keys(this.rules).length === 0))
            return p && p(null, c), Promise.resolve(c);
          function h(C) {
            var _ = [],
              E = {};
            function I(D) {
              if (Array.isArray(D)) {
                var z;
                _ = (z = _).concat.apply(z, D);
              } else _.push(D);
            }
            for (var N = 0; N < C.length; N++) I(C[N]);
            _.length ? ((E = rl(_)), p(_, E)) : p(null, c);
          }
          if (f.messages) {
            var m = this.messages();
            m === al && (m = ol()), Tf(m, f.messages), (f.messages = m);
          } else f.messages = this.messages();
          var v = {},
            w = f.keys || Object.keys(this.rules);
          w.forEach(function (C) {
            var _ = s.rules[C],
              E = c[C];
            _.forEach(function (I) {
              var N = I;
              typeof N.transform == 'function' && (c === r && (c = li({}, c)), (E = c[C] = N.transform(E))),
                typeof N == 'function' ? (N = { validator: N }) : (N = li({}, N)),
                (N.validator = s.getValidationMethod(N)),
                N.validator &&
                  ((N.field = C),
                  (N.fullField = N.fullField || C),
                  (N.type = s.getType(N)),
                  (v[C] = v[C] || []),
                  v[C].push({ rule: N, value: E, source: c, field: C }));
            });
          });
          var S = {};
          return ey(
            v,
            f,
            function (C, _) {
              var E = C.rule,
                I =
                  (E.type === 'object' || E.type === 'array') &&
                  (typeof E.fields == 'object' || typeof E.defaultField == 'object');
              (I = I && (E.required || (!E.required && C.value))), (E.field = C.field);
              function N(u, $) {
                return li({}, $, {
                  fullField: E.fullField + '.' + u,
                  fullFields: E.fullFields ? [].concat(E.fullFields, [u]) : [u],
                });
              }
              function D(u) {
                u === void 0 && (u = []);
                var $ = Array.isArray(u) ? u : [u];
                !f.suppressWarning && $.length && e.warning('async-validator:', $),
                  $.length && E.message !== void 0 && ($ = [].concat(E.message));
                var P = $.map(If(E, c));
                if (f.first && P.length) return (S[E.field] = 1), _(P);
                if (!I) _(P);
                else {
                  if (E.required && !C.value)
                    return (
                      E.message !== void 0
                        ? (P = [].concat(E.message).map(If(E, c)))
                        : f.error && (P = [f.error(E, Vn(f.messages.required, E.field))]),
                      _(P)
                    );
                  var R = {};
                  E.defaultField &&
                    Object.keys(C.value).map(function (F) {
                      R[F] = E.defaultField;
                    }),
                    (R = li({}, R, C.rule.fields));
                  var A = {};
                  Object.keys(R).forEach(function (F) {
                    var M = R[F],
                      j = Array.isArray(M) ? M : [M];
                    A[F] = j.map(N.bind(null, F));
                  });
                  var B = new e(A);
                  B.messages(f.messages),
                    C.rule.options && ((C.rule.options.messages = f.messages), (C.rule.options.error = f.error)),
                    B.validate(C.value, C.rule.options || f, function (F) {
                      var M = [];
                      P && P.length && M.push.apply(M, P), F && F.length && M.push.apply(M, F), _(M.length ? M : null);
                    });
                }
              }
              var z;
              if (E.asyncValidator) z = E.asyncValidator(E, C.value, D, C.source, f);
              else if (E.validator) {
                try {
                  z = E.validator(E, C.value, D, C.source, f);
                } catch (u) {
                  console.error == null || console.error(u),
                    f.suppressValidatorError ||
                      setTimeout(function () {
                        throw u;
                      }, 0),
                    D(u.message);
                }
                z === !0
                  ? D()
                  : z === !1
                  ? D(
                      typeof E.message == 'function'
                        ? E.message(E.fullField || E.field)
                        : E.message || (E.fullField || E.field) + ' fails',
                    )
                  : z instanceof Array
                  ? D(z)
                  : z instanceof Error && D(z.message);
              }
              z &&
                z.then &&
                z.then(
                  function () {
                    return D();
                  },
                  function (u) {
                    return D(u);
                  },
                );
            },
            function (C) {
              h(C);
            },
            c,
          );
        }),
        (t.getType = function (r) {
          if (
            (r.type === void 0 && r.pattern instanceof RegExp && (r.type = 'pattern'),
            typeof r.validator != 'function' && r.type && !po.hasOwnProperty(r.type))
          )
            throw new Error(Vn('Unknown rule type %s', r.type));
          return r.type || 'string';
        }),
        (t.getValidationMethod = function (r) {
          if (typeof r.validator == 'function') return r.validator;
          var i = Object.keys(r),
            a = i.indexOf('message');
          return (
            a !== -1 && i.splice(a, 1),
            i.length === 1 && i[0] === 'required' ? po.required : po[this.getType(r)] || void 0
          );
        }),
        e
      );
    })();
  (ho.register = function (t, n) {
    if (typeof n != 'function') throw new Error('Cannot register a validator by type, validator is not a function');
    po[t] = n;
  }),
    (ho.warning = Y0),
    (ho.messages = al),
    (ho.validators = po);
  var Wn = "'${name}' is not a valid ${type}",
    Rf = {
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
        string: Wn,
        method: Wn,
        array: Wn,
        object: Wn,
        number: Wn,
        date: Wn,
        boolean: Wn,
        integer: Wn,
        float: Wn,
        regexp: Wn,
        email: Wn,
        url: Wn,
        hex: Wn,
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
  function Mf(e, t) {
    for (var n = e, r = 0; r < t.length; r += 1) {
      if (n == null) return;
      n = n[t[r]];
    }
    return n;
  }
  function Af(e) {
    return nf(e) || ef(e) || zs(e) || rf();
  }
  function Df(e, t, n, r) {
    if (!t.length) return n;
    var i = Af(t),
      a = i[0],
      s = i.slice(1),
      c;
    return (
      !e && typeof a == 'number' ? (c = []) : Array.isArray(e) ? (c = ze(e)) : (c = G({}, e)),
      r && n === void 0 && s.length === 1 ? delete c[a][s[0]] : (c[a] = Df(c[a], s, n, r)),
      c
    );
  }
  function Ey(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    return t.length && r && n === void 0 && !Mf(e, t.slice(0, -1)) ? e : Df(e, t, n, r);
  }
  function Ea(e) {
    return Array.isArray(e) ? Oy(e) : xt(e) === 'object' && e !== null ? $y(e) : e;
  }
  function $y(e) {
    if (Object.getPrototypeOf(e) === Object.prototype) {
      var t = {};
      for (var n in e) t[n] = Ea(e[n]);
      return t;
    }
    return e;
  }
  function Oy(e) {
    return e.map(function (t) {
      return Ea(t);
    });
  }
  function on(e) {
    return el(e);
  }
  function Lr(e, t) {
    var n = Mf(e, t);
    return n;
  }
  function Hr(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
      i = Ey(e, t, n, r);
    return i;
  }
  function Ff(e, t) {
    var n = {};
    return (
      t.forEach(function (r) {
        var i = Lr(e, r);
        n = Hr(n, r, i);
      }),
      n
    );
  }
  function go(e, t) {
    return (
      e &&
      e.some(function (n) {
        return Lf(n, t);
      })
    );
  }
  function jf(e) {
    return xt(e) === 'object' && e !== null && Object.getPrototypeOf(e) === Object.prototype;
  }
  function zf(e, t) {
    var n = Array.isArray(e) ? ze(e) : G({}, e);
    return (
      t &&
        Object.keys(t).forEach(function (r) {
          var i = n[r],
            a = t[r],
            s = jf(i) && jf(a);
          n[r] = s ? zf(i, a || {}) : Ea(a);
        }),
      n
    );
  }
  function mo(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.reduce(function (i, a) {
      return zf(i, a);
    }, e);
  }
  function Lf(e, t) {
    return !e || !t || e.length !== t.length
      ? !1
      : e.every(function (n, r) {
          return t[r] === n;
        });
  }
  function _y(e, t) {
    if (e === t) return !0;
    if ((!e && t) || (e && !t) || !e || !t || xt(e) !== 'object' || xt(t) !== 'object') return !1;
    var n = Object.keys(e),
      r = Object.keys(t),
      i = new Set([].concat(n, r));
    return ze(i).every(function (a) {
      var s = e[a],
        c = t[a];
      return typeof s == 'function' && typeof c == 'function' ? !0 : s === c;
    });
  }
  function Iy(e) {
    var t = arguments.length <= 1 ? void 0 : arguments[1];
    return t && t.target && xt(t.target) === 'object' && e in t.target ? t.target[e] : t;
  }
  function Hf(e, t, n) {
    var r = e.length;
    if (t < 0 || t >= r || n < 0 || n >= r) return e;
    var i = e[t],
      a = t - n;
    return a > 0
      ? [].concat(ze(e.slice(0, n)), [i], ze(e.slice(n, t)), ze(e.slice(t + 1, r)))
      : a < 0
      ? [].concat(ze(e.slice(0, t)), ze(e.slice(t + 1, n + 1)), [i], ze(e.slice(n + 1, r)))
      : e;
  }
  var Ty = ho;
  function Py(e, t) {
    return e.replace(/\$\{\w+\}/g, function (n) {
      var r = n.slice(2, -1);
      return t[r];
    });
  }
  var kf = 'CODE_LOGIC_ERROR';
  function sl(e, t, n, r, i) {
    return ll.apply(this, arguments);
  }
  function ll() {
    return (
      (ll = Ca(
        xr().mark(function e(t, n, r, i, a) {
          var s, c, f, p, h, m, v, w, S;
          return xr().wrap(
            function (_) {
              for (;;)
                switch ((_.prev = _.next)) {
                  case 0:
                    return (
                      (s = G({}, r)),
                      delete s.ruleIndex,
                      s.validator &&
                        ((c = s.validator),
                        (s.validator = function () {
                          try {
                            return c.apply(void 0, arguments);
                          } catch (E) {
                            return console.error(E), Promise.reject(kf);
                          }
                        })),
                      (f = null),
                      s && s.type === 'array' && s.defaultField && ((f = s.defaultField), delete s.defaultField),
                      (p = new Ty($e({}, t, [s]))),
                      (h = mo({}, Rf, i.validateMessages)),
                      p.messages(h),
                      (m = []),
                      (_.prev = 9),
                      (_.next = 12),
                      Promise.resolve(p.validate($e({}, t, n), G({}, i)))
                    );
                  case 12:
                    _.next = 17;
                    break;
                  case 14:
                    (_.prev = 14),
                      (_.t0 = _.catch(9)),
                      _.t0.errors &&
                        (m = _.t0.errors.map(function (E, I) {
                          var N = E.message,
                            D = N === kf ? h.default : N;
                          return kn(D) ? cn(D, { key: 'error_'.concat(I) }) : D;
                        }));
                  case 17:
                    if (!(!m.length && f)) {
                      _.next = 22;
                      break;
                    }
                    return (
                      (_.next = 20),
                      Promise.all(
                        n.map(function (E, I) {
                          return sl(''.concat(t, '.').concat(I), E, f, i, a);
                        }),
                      )
                    );
                  case 20:
                    return (
                      (v = _.sent),
                      _.abrupt(
                        'return',
                        v.reduce(function (E, I) {
                          return [].concat(ze(E), ze(I));
                        }, []),
                      )
                    );
                  case 22:
                    return (
                      (w = G(G({}, r), {}, { name: t, enum: (r.enum || []).join(', ') }, a)),
                      (S = m.map(function (E) {
                        return typeof E == 'string' ? Py(E, w) : E;
                      })),
                      _.abrupt('return', S)
                    );
                  case 25:
                  case 'end':
                    return _.stop();
                }
            },
            e,
            null,
            [[9, 14]],
          );
        }),
      )),
      ll.apply(this, arguments)
    );
  }
  function Ny(e, t, n, r, i, a) {
    var s = e.join('.'),
      c = n
        .map(function (h, m) {
          var v = h.validator,
            w = G(G({}, h), {}, { ruleIndex: m });
          return (
            v &&
              (w.validator = function (S, C, _) {
                var E = !1,
                  I = function () {
                    for (var z = arguments.length, u = new Array(z), $ = 0; $ < z; $++) u[$] = arguments[$];
                    Promise.resolve().then(function () {
                      Zn(!E, 'Your validator function has already return a promise. `callback` will be ignored.'),
                        E || _.apply(void 0, u);
                    });
                  },
                  N = v(S, C, I);
                (E = N && typeof N.then == 'function' && typeof N.catch == 'function'),
                  Zn(E, '`callback` is deprecated. Please return a promise instead.'),
                  E &&
                    N.then(function () {
                      _();
                    }).catch(function (D) {
                      _(D || ' ');
                    });
              }),
            w
          );
        })
        .sort(function (h, m) {
          var v = h.warningOnly,
            w = h.ruleIndex,
            S = m.warningOnly,
            C = m.ruleIndex;
          return !!v == !!S ? w - C : v ? 1 : -1;
        }),
      f;
    if (i === !0)
      f = new Promise(
        (function () {
          var h = Ca(
            xr().mark(function m(v, w) {
              var S, C, _;
              return xr().wrap(function (I) {
                for (;;)
                  switch ((I.prev = I.next)) {
                    case 0:
                      S = 0;
                    case 1:
                      if (!(S < c.length)) {
                        I.next = 12;
                        break;
                      }
                      return (C = c[S]), (I.next = 5), sl(s, t, C, r, a);
                    case 5:
                      if (((_ = I.sent), !_.length)) {
                        I.next = 9;
                        break;
                      }
                      return w([{ errors: _, rule: C }]), I.abrupt('return');
                    case 9:
                      (S += 1), (I.next = 1);
                      break;
                    case 12:
                      v([]);
                    case 13:
                    case 'end':
                      return I.stop();
                  }
              }, m);
            }),
          );
          return function (m, v) {
            return h.apply(this, arguments);
          };
        })(),
      );
    else {
      var p = c.map(function (h) {
        return sl(s, t, h, r, a).then(function (m) {
          return { errors: m, rule: h };
        });
      });
      f = (i ? My(p) : Ry(p)).then(function (h) {
        return Promise.reject(h);
      });
    }
    return (
      f.catch(function (h) {
        return h;
      }),
      f
    );
  }
  function Ry(e) {
    return cl.apply(this, arguments);
  }
  function cl() {
    return (
      (cl = Ca(
        xr().mark(function e(t) {
          return xr().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return r.abrupt(
                    'return',
                    Promise.all(t).then(function (i) {
                      var a,
                        s = (a = []).concat.apply(a, ze(i));
                      return s;
                    }),
                  );
                case 1:
                case 'end':
                  return r.stop();
              }
          }, e);
        }),
      )),
      cl.apply(this, arguments)
    );
  }
  function My(e) {
    return ul.apply(this, arguments);
  }
  function ul() {
    return (
      (ul = Ca(
        xr().mark(function e(t) {
          var n;
          return xr().wrap(function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (
                    (n = 0),
                    i.abrupt(
                      'return',
                      new Promise(function (a) {
                        t.forEach(function (s) {
                          s.then(function (c) {
                            c.errors.length && a([c]), (n += 1), n === t.length && a([]);
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
      ul.apply(this, arguments)
    );
  }
  var Ay = ['name'],
    tr = [];
  function Bf(e, t, n, r, i, a) {
    return typeof e == 'function' ? e(t, n, 'source' in a ? { source: a.source } : {}) : r !== i;
  }
  var fl = (function (e) {
    ti(n, e);
    var t = ni(n);
    function n(r) {
      var i;
      if (
        (Dn(this, n),
        (i = t.call(this, r)),
        (i.state = { resetCount: 0 }),
        (i.cancelRegisterFunc = null),
        (i.mounted = !1),
        (i.touched = !1),
        (i.dirty = !1),
        (i.validatePromise = null),
        (i.prevValidating = void 0),
        (i.errors = tr),
        (i.warnings = tr),
        (i.cancelRegister = function () {
          var f = i.props,
            p = f.preserve,
            h = f.isListField,
            m = f.name;
          i.cancelRegisterFunc && i.cancelRegisterFunc(h, p, on(m)), (i.cancelRegisterFunc = null);
        }),
        (i.getNamePath = function () {
          var f = i.props,
            p = f.name,
            h = f.fieldContext,
            m = h.prefixName,
            v = m === void 0 ? [] : m;
          return p !== void 0 ? [].concat(ze(v), ze(p)) : [];
        }),
        (i.getRules = function () {
          var f = i.props,
            p = f.rules,
            h = p === void 0 ? [] : p,
            m = f.fieldContext;
          return h.map(function (v) {
            return typeof v == 'function' ? v(m) : v;
          });
        }),
        (i.refresh = function () {
          i.mounted &&
            i.setState(function (f) {
              var p = f.resetCount;
              return { resetCount: p + 1 };
            });
        }),
        (i.triggerMetaEvent = function (f) {
          var p = i.props.onMetaChange;
          p == null || p(G(G({}, i.getMeta()), {}, { destroy: f }));
        }),
        (i.onStoreChange = function (f, p, h) {
          var m = i.props,
            v = m.shouldUpdate,
            w = m.dependencies,
            S = w === void 0 ? [] : w,
            C = m.onReset,
            _ = h.store,
            E = i.getNamePath(),
            I = i.getValue(f),
            N = i.getValue(_),
            D = p && go(p, E);
          switch (
            (h.type === 'valueUpdate' &&
              h.source === 'external' &&
              I !== N &&
              ((i.touched = !0),
              (i.dirty = !0),
              (i.validatePromise = null),
              (i.errors = tr),
              (i.warnings = tr),
              i.triggerMetaEvent()),
            h.type)
          ) {
            case 'reset':
              if (!p || D) {
                (i.touched = !1),
                  (i.dirty = !1),
                  (i.validatePromise = null),
                  (i.errors = tr),
                  (i.warnings = tr),
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
              if (D) {
                var z = h.data;
                'touched' in z && (i.touched = z.touched),
                  'validating' in z &&
                    !('originRCField' in z) &&
                    (i.validatePromise = z.validating ? Promise.resolve([]) : null),
                  'errors' in z && (i.errors = z.errors || tr),
                  'warnings' in z && (i.warnings = z.warnings || tr),
                  (i.dirty = !0),
                  i.triggerMetaEvent(),
                  i.reRender();
                return;
              }
              if (v && !E.length && Bf(v, f, _, I, N, h)) {
                i.reRender();
                return;
              }
              break;
            }
            case 'dependenciesUpdate': {
              var u = S.map(on);
              if (
                u.some(function ($) {
                  return go(h.relatedFields, $);
                })
              ) {
                i.reRender();
                return;
              }
              break;
            }
            default:
              if (D || ((!S.length || E.length || v) && Bf(v, f, _, I, N, h))) {
                i.reRender();
                return;
              }
              break;
          }
          v === !0 && i.reRender();
        }),
        (i.validateRules = function (f) {
          var p = i.getNamePath(),
            h = i.getValue(),
            m = Promise.resolve().then(function () {
              if (!i.mounted) return [];
              var v = i.props,
                w = v.validateFirst,
                S = w === void 0 ? !1 : w,
                C = v.messageVariables,
                _ = f || {},
                E = _.triggerName,
                I = i.getRules();
              E &&
                (I = I.filter(function (D) {
                  return D;
                }).filter(function (D) {
                  var z = D.validateTrigger;
                  if (!z) return !0;
                  var u = el(z);
                  return u.includes(E);
                }));
              var N = Ny(p, h, I, f, S, C);
              return (
                N.catch(function (D) {
                  return D;
                }).then(function () {
                  var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : tr;
                  if (i.validatePromise === m) {
                    var z;
                    i.validatePromise = null;
                    var u = [],
                      $ = [];
                    (z = D.forEach) === null ||
                      z === void 0 ||
                      z.call(D, function (P) {
                        var R = P.rule.warningOnly,
                          A = P.errors,
                          B = A === void 0 ? tr : A;
                        R ? $.push.apply($, ze(B)) : u.push.apply(u, ze(B));
                      }),
                      (i.errors = u),
                      (i.warnings = $),
                      i.triggerMetaEvent(),
                      i.reRender();
                  }
                }),
                N
              );
            });
          return (
            (i.validatePromise = m),
            (i.dirty = !0),
            (i.errors = tr),
            (i.warnings = tr),
            i.triggerMetaEvent(),
            i.reRender(),
            m
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
          var f = i.props.fieldContext,
            p = f.getInternalHooks(si),
            h = p.getInitialValue;
          return h(i.getNamePath()) !== void 0;
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
          var f = {
            touched: i.isFieldTouched(),
            validating: i.prevValidating,
            errors: i.errors,
            warnings: i.warnings,
            name: i.getNamePath(),
          };
          return f;
        }),
        (i.getOnlyChild = function (f) {
          if (typeof f == 'function') {
            var p = i.getMeta();
            return G(G({}, i.getOnlyChild(f(i.getControlled(), p, i.props.fieldContext))), {}, { isFunction: !0 });
          }
          var h = Cr(f);
          return h.length !== 1 || !kn(h[0]) ? { child: h, isFunction: !1 } : { child: h[0], isFunction: !1 };
        }),
        (i.getValue = function (f) {
          var p = i.props.fieldContext.getFieldsValue,
            h = i.getNamePath();
          return Lr(f || p(!0), h);
        }),
        (i.getControlled = function () {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            p = i.props,
            h = p.trigger,
            m = p.validateTrigger,
            v = p.getValueFromEvent,
            w = p.normalize,
            S = p.valuePropName,
            C = p.getValueProps,
            _ = p.fieldContext,
            E = m !== void 0 ? m : _.validateTrigger,
            I = i.getNamePath(),
            N = _.getInternalHooks,
            D = _.getFieldsValue,
            z = N(si),
            u = z.dispatch,
            $ = i.getValue(),
            P =
              C ||
              function (F) {
                return $e({}, S, F);
              },
            R = f[h],
            A = G(G({}, f), P($));
          A[h] = function () {
            (i.touched = !0), (i.dirty = !0), i.triggerMetaEvent();
            for (var F, M = arguments.length, j = new Array(M), V = 0; V < M; V++) j[V] = arguments[V];
            v ? (F = v.apply(void 0, j)) : (F = Iy.apply(void 0, [S].concat(j))),
              w && (F = w(F, $, D(!0))),
              u({ type: 'updateValue', namePath: I, value: F }),
              R && R.apply(void 0, j);
          };
          var B = el(E || []);
          return (
            B.forEach(function (F) {
              var M = A[F];
              A[F] = function () {
                M && M.apply(void 0, arguments);
                var j = i.props.rules;
                j && j.length && u({ type: 'validateField', namePath: I, triggerName: F });
              };
            }),
            A
          );
        }),
        r.fieldContext)
      ) {
        var a = r.fieldContext.getInternalHooks,
          s = a(si),
          c = s.initEntityValue;
        c(Vo(i));
      }
      return i;
    }
    return (
      Fn(n, [
        {
          key: 'componentDidMount',
          value: function () {
            var i = this.props,
              a = i.shouldUpdate,
              s = i.fieldContext;
            if (((this.mounted = !0), s)) {
              var c = s.getInternalHooks,
                f = c(si),
                p = f.registerField;
              this.cancelRegisterFunc = p(this);
            }
            a === !0 && this.reRender();
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
              a = this.props.children,
              s = this.getOnlyChild(a),
              c = s.child,
              f = s.isFunction,
              p;
            return (
              f
                ? (p = c)
                : kn(c)
                ? (p = cn(c, this.getControlled(c.props)))
                : (Zn(!c, '`children` of Field is not validate ReactElement.'), (p = c)),
              y.createElement(y.Fragment, { key: i }, p)
            );
          },
        },
      ]),
      n
    );
  })(y.Component);
  (fl.contextType = Ai), (fl.defaultProps = { trigger: 'onChange', valuePropName: 'value' });
  function Vf(e) {
    var t = e.name,
      n = qt(e, Ay),
      r = Be(Ai),
      i = t !== void 0 ? on(t) : void 0,
      a = 'keep';
    return (
      n.isListField || (a = '_'.concat((i || []).join('_'))),
      y.createElement(fl, mt({ key: a, name: i }, n, { fieldContext: r }))
    );
  }
  var Dy = y.createContext(null),
    Fy = function (t) {
      var n = t.name,
        r = t.initialValue,
        i = t.children,
        a = t.rules,
        s = t.validateTrigger,
        c = Be(Ai),
        f = le({ keys: [], id: 0 }),
        p = f.current,
        h = Fe(
          function () {
            var S = on(c.prefixName) || [];
            return [].concat(ze(S), ze(on(n)));
          },
          [c.prefixName, n],
        ),
        m = Fe(
          function () {
            return G(G({}, c), {}, { prefixName: h });
          },
          [c, h],
        ),
        v = Fe(
          function () {
            return {
              getKey: function (C) {
                var _ = h.length,
                  E = C[_];
                return [p.keys[E], C.slice(_ + 1)];
              },
            };
          },
          [h],
        );
      if (typeof i != 'function') return Zn(!1, 'Form.List only accepts function as children.'), null;
      var w = function (C, _, E) {
        var I = E.source;
        return I === 'internal' ? !1 : C !== _;
      };
      return y.createElement(
        Dy.Provider,
        { value: v },
        y.createElement(
          Ai.Provider,
          { value: m },
          y.createElement(
            Vf,
            { name: [], shouldUpdate: w, rules: a, validateTrigger: s, initialValue: r, isList: !0 },
            function (S, C) {
              var _ = S.value,
                E = _ === void 0 ? [] : _,
                I = S.onChange,
                N = c.getFieldValue,
                D = function () {
                  var P = N(h || []);
                  return P || [];
                },
                z = {
                  add: function (P, R) {
                    var A = D();
                    R >= 0 && R <= A.length
                      ? ((p.keys = [].concat(ze(p.keys.slice(0, R)), [p.id], ze(p.keys.slice(R)))),
                        I([].concat(ze(A.slice(0, R)), [P], ze(A.slice(R)))))
                      : ((p.keys = [].concat(ze(p.keys), [p.id])), I([].concat(ze(A), [P]))),
                      (p.id += 1);
                  },
                  remove: function (P) {
                    var R = D(),
                      A = new Set(Array.isArray(P) ? P : [P]);
                    A.size <= 0 ||
                      ((p.keys = p.keys.filter(function (B, F) {
                        return !A.has(F);
                      })),
                      I(
                        R.filter(function (B, F) {
                          return !A.has(F);
                        }),
                      ));
                  },
                  move: function (P, R) {
                    if (P !== R) {
                      var A = D();
                      P < 0 || P >= A.length || R < 0 || R >= A.length || ((p.keys = Hf(p.keys, P, R)), I(Hf(A, P, R)));
                    }
                  },
                },
                u = E || [];
              return (
                Array.isArray(u) || (u = []),
                i(
                  u.map(function ($, P) {
                    var R = p.keys[P];
                    return (
                      R === void 0 && ((p.keys[P] = p.id), (R = p.keys[P]), (p.id += 1)),
                      { name: P, key: R, isListField: !0 }
                    );
                  }),
                  z,
                  C,
                )
              );
            },
          ),
        ),
      );
    };
  function jy(e) {
    var t = !1,
      n = e.length,
      r = [];
    return e.length
      ? new Promise(function (i, a) {
          e.forEach(function (s, c) {
            s.catch(function (f) {
              return (t = !0), f;
            }).then(function (f) {
              (n -= 1), (r[c] = f), !(n > 0) && (t && a(r), i(r));
            });
          });
        })
      : Promise.resolve([]);
  }
  var Wf = '__@field_split__';
  function dl(e) {
    return e
      .map(function (t) {
        return ''.concat(xt(t), ':').concat(t);
      })
      .join(Wf);
  }
  var Fi = (function () {
      function e() {
        Dn(this, e), (this.kvs = new Map());
      }
      return (
        Fn(e, [
          {
            key: 'set',
            value: function (n, r) {
              this.kvs.set(dl(n), r);
            },
          },
          {
            key: 'get',
            value: function (n) {
              return this.kvs.get(dl(n));
            },
          },
          {
            key: 'update',
            value: function (n, r) {
              var i = this.get(n),
                a = r(i);
              a ? this.set(n, a) : this.delete(n);
            },
          },
          {
            key: 'delete',
            value: function (n) {
              this.kvs.delete(dl(n));
            },
          },
          {
            key: 'map',
            value: function (n) {
              return ze(this.kvs.entries()).map(function (r) {
                var i = ge(r, 2),
                  a = i[0],
                  s = i[1],
                  c = a.split(Wf);
                return n({
                  key: c.map(function (f) {
                    var p = f.match(/^([^:]*):(.*)$/),
                      h = ge(p, 3),
                      m = h[1],
                      v = h[2];
                    return m === 'number' ? Number(v) : v;
                  }),
                  value: s,
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
                    a = r.value;
                  return (n[i.join('.')] = a), null;
                }),
                n
              );
            },
          },
        ]),
        e
      );
    })(),
    zy = ['name', 'errors'],
    Ly = Fn(function e(t) {
      var n = this;
      Dn(this, e),
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
          return r === si
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
            : (Zn(!1, '`getInternalHooks` is internal usage. Should not call directly.'), null);
        }),
        (this.useSubscribe = function (r) {
          n.subscribable = r;
        }),
        (this.prevWithoutPreserves = null),
        (this.setInitialValues = function (r, i) {
          if (((n.initialValues = r || {}), i)) {
            var a,
              s = mo({}, r, n.store);
            (a = n.prevWithoutPreserves) === null ||
              a === void 0 ||
              a.map(function (c) {
                var f = c.key;
                s = Hr(s, f, Lr(r, f));
              }),
              (n.prevWithoutPreserves = null),
              n.updateStore(s);
          }
        }),
        (this.destroyForm = function () {
          var r = new Fi();
          n.getFieldEntities(!0).forEach(function (i) {
            n.isMergedPreserve(i.isPreserve()) || r.set(i.getNamePath(), !0);
          }),
            (n.prevWithoutPreserves = r);
        }),
        (this.getInitialValue = function (r) {
          var i = Lr(n.initialValues, r);
          return r.length ? Ea(i) : i;
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
            n.watchList.forEach(function (a) {
              a(i, r);
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
            i = new Fi();
          return (
            n.getFieldEntities(r).forEach(function (a) {
              var s = a.getNamePath();
              i.set(s, a);
            }),
            i
          );
        }),
        (this.getFieldEntitiesForNamePathList = function (r) {
          if (!r) return n.getFieldEntities(!0);
          var i = n.getFieldsMap(!0);
          return r.map(function (a) {
            var s = on(a);
            return i.get(s) || { INVALIDATE_NAME_PATH: on(a) };
          });
        }),
        (this.getFieldsValue = function (r, i) {
          if ((n.warningUnhooked(), r === !0 && !i)) return n.store;
          var a = n.getFieldEntitiesForNamePathList(Array.isArray(r) ? r : null),
            s = [];
          return (
            a.forEach(function (c) {
              var f,
                p = 'INVALIDATE_NAME_PATH' in c ? c.INVALIDATE_NAME_PATH : c.getNamePath();
              if (!(!r && !((f = c.isListField) === null || f === void 0) && f.call(c)))
                if (!i) s.push(p);
                else {
                  var h = 'getMeta' in c ? c.getMeta() : null;
                  i(h) && s.push(p);
                }
            }),
            Ff(n.store, s.map(on))
          );
        }),
        (this.getFieldValue = function (r) {
          n.warningUnhooked();
          var i = on(r);
          return Lr(n.store, i);
        }),
        (this.getFieldsError = function (r) {
          n.warningUnhooked();
          var i = n.getFieldEntitiesForNamePathList(r);
          return i.map(function (a, s) {
            return a && !('INVALIDATE_NAME_PATH' in a)
              ? { name: a.getNamePath(), errors: a.getErrors(), warnings: a.getWarnings() }
              : { name: on(r[s]), errors: [], warnings: [] };
          });
        }),
        (this.getFieldError = function (r) {
          n.warningUnhooked();
          var i = on(r),
            a = n.getFieldsError([i])[0];
          return a.errors;
        }),
        (this.getFieldWarning = function (r) {
          n.warningUnhooked();
          var i = on(r),
            a = n.getFieldsError([i])[0];
          return a.warnings;
        }),
        (this.isFieldsTouched = function () {
          n.warningUnhooked();
          for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
          var s = i[0],
            c = i[1],
            f,
            p = !1;
          i.length === 0
            ? (f = null)
            : i.length === 1
            ? Array.isArray(s)
              ? ((f = s.map(on)), (p = !1))
              : ((f = null), (p = s))
            : ((f = s.map(on)), (p = c));
          var h = n.getFieldEntities(!0),
            m = function (_) {
              return _.isFieldTouched();
            };
          if (!f) return p ? h.every(m) : h.some(m);
          var v = new Fi();
          f.forEach(function (C) {
            v.set(C, []);
          }),
            h.forEach(function (C) {
              var _ = C.getNamePath();
              f.forEach(function (E) {
                E.every(function (I, N) {
                  return _[N] === I;
                }) &&
                  v.update(E, function (I) {
                    return [].concat(ze(I), [C]);
                  });
              });
            });
          var w = function (_) {
              return _.some(m);
            },
            S = v.map(function (C) {
              var _ = C.value;
              return _;
            });
          return p ? S.every(w) : S.some(w);
        }),
        (this.isFieldTouched = function (r) {
          return n.warningUnhooked(), n.isFieldsTouched([r]);
        }),
        (this.isFieldsValidating = function (r) {
          n.warningUnhooked();
          var i = n.getFieldEntities();
          if (!r)
            return i.some(function (s) {
              return s.isFieldValidating();
            });
          var a = r.map(on);
          return i.some(function (s) {
            var c = s.getNamePath();
            return go(a, c) && s.isFieldValidating();
          });
        }),
        (this.isFieldValidating = function (r) {
          return n.warningUnhooked(), n.isFieldsValidating([r]);
        }),
        (this.resetWithFieldInitialValue = function () {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            i = new Fi(),
            a = n.getFieldEntities(!0);
          a.forEach(function (f) {
            var p = f.props.initialValue,
              h = f.getNamePath();
            if (p !== void 0) {
              var m = i.get(h) || new Set();
              m.add({ entity: f, value: p }), i.set(h, m);
            }
          });
          var s = function (p) {
              p.forEach(function (h) {
                var m = h.props.initialValue;
                if (m !== void 0) {
                  var v = h.getNamePath(),
                    w = n.getInitialValue(v);
                  if (w !== void 0)
                    Zn(
                      !1,
                      "Form already set 'initialValues' with path '".concat(
                        v.join('.'),
                        "'. Field can not overwrite it.",
                      ),
                    );
                  else {
                    var S = i.get(v);
                    if (S && S.size > 1)
                      Zn(
                        !1,
                        "Multiple Field with path '".concat(
                          v.join('.'),
                          "' set 'initialValue'. Can not decide which one to pick.",
                        ),
                      );
                    else if (S) {
                      var C = n.getFieldValue(v);
                      (!r.skipExist || C === void 0) && n.updateStore(Hr(n.store, v, ze(S)[0].value));
                    }
                  }
                }
              });
            },
            c;
          r.entities
            ? (c = r.entities)
            : r.namePathList
            ? ((c = []),
              r.namePathList.forEach(function (f) {
                var p = i.get(f);
                if (p) {
                  var h;
                  (h = c).push.apply(
                    h,
                    ze(
                      ze(p).map(function (m) {
                        return m.entity;
                      }),
                    ),
                  );
                }
              }))
            : (c = a),
            s(c);
        }),
        (this.resetFields = function (r) {
          n.warningUnhooked();
          var i = n.store;
          if (!r) {
            n.updateStore(mo({}, n.initialValues)),
              n.resetWithFieldInitialValue(),
              n.notifyObservers(i, null, { type: 'reset' }),
              n.notifyWatch();
            return;
          }
          var a = r.map(on);
          a.forEach(function (s) {
            var c = n.getInitialValue(s);
            n.updateStore(Hr(n.store, s, c));
          }),
            n.resetWithFieldInitialValue({ namePathList: a }),
            n.notifyObservers(i, a, { type: 'reset' }),
            n.notifyWatch(a);
        }),
        (this.setFields = function (r) {
          n.warningUnhooked();
          var i = n.store,
            a = [];
          r.forEach(function (s) {
            var c = s.name;
            s.errors;
            var f = qt(s, zy),
              p = on(c);
            a.push(p),
              'value' in f && n.updateStore(Hr(n.store, p, f.value)),
              n.notifyObservers(i, [p], { type: 'setField', data: s });
          }),
            n.notifyWatch(a);
        }),
        (this.getFields = function () {
          var r = n.getFieldEntities(!0),
            i = r.map(function (a) {
              var s = a.getNamePath(),
                c = a.getMeta(),
                f = G(G({}, c), {}, { name: s, value: n.getFieldValue(s) });
              return Object.defineProperty(f, 'originRCField', { value: !0 }), f;
            });
          return i;
        }),
        (this.initEntityValue = function (r) {
          var i = r.props.initialValue;
          if (i !== void 0) {
            var a = r.getNamePath(),
              s = Lr(n.store, a);
            s === void 0 && n.updateStore(Hr(n.store, a, i));
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
            var a = n.store;
            n.resetWithFieldInitialValue({ entities: [r], skipExist: !0 }),
              n.notifyObservers(a, [r.getNamePath()], { type: 'valueUpdate', source: 'internal' });
          }
          return function (s, c) {
            var f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
            if (
              ((n.fieldEntities = n.fieldEntities.filter(function (m) {
                return m !== r;
              })),
              !n.isMergedPreserve(c) && (!s || f.length > 1))
            ) {
              var p = s ? void 0 : n.getInitialValue(i);
              if (
                i.length &&
                n.getFieldValue(i) !== p &&
                n.fieldEntities.every(function (m) {
                  return !Lf(m.getNamePath(), i);
                })
              ) {
                var h = n.store;
                n.updateStore(Hr(h, i, p, !0)),
                  n.notifyObservers(h, [i], { type: 'remove' }),
                  n.triggerDependenciesUpdate(h, i);
              }
            }
            n.notifyWatch([i]);
          };
        }),
        (this.dispatch = function (r) {
          switch (r.type) {
            case 'updateValue': {
              var i = r.namePath,
                a = r.value;
              n.updateValue(i, a);
              break;
            }
            case 'validateField': {
              var s = r.namePath,
                c = r.triggerName;
              n.validateFields([s], { triggerName: c });
              break;
            }
          }
        }),
        (this.notifyObservers = function (r, i, a) {
          if (n.subscribable) {
            var s = G(G({}, a), {}, { store: n.getFieldsValue(!0) });
            n.getFieldEntities().forEach(function (c) {
              var f = c.onStoreChange;
              f(r, i, s);
            });
          } else n.forceRootUpdate();
        }),
        (this.triggerDependenciesUpdate = function (r, i) {
          var a = n.getDependencyChildrenFields(i);
          return (
            a.length && n.validateFields(a),
            n.notifyObservers(r, a, { type: 'dependenciesUpdate', relatedFields: [i].concat(ze(a)) }),
            a
          );
        }),
        (this.updateValue = function (r, i) {
          var a = on(r),
            s = n.store;
          n.updateStore(Hr(n.store, a, i)),
            n.notifyObservers(s, [a], { type: 'valueUpdate', source: 'internal' }),
            n.notifyWatch([a]);
          var c = n.triggerDependenciesUpdate(s, a),
            f = n.callbacks.onValuesChange;
          if (f) {
            var p = Ff(n.store, [a]);
            f(p, n.getFieldsValue());
          }
          n.triggerOnFieldsChange([a].concat(ze(c)));
        }),
        (this.setFieldsValue = function (r) {
          n.warningUnhooked();
          var i = n.store;
          if (r) {
            var a = mo(n.store, r);
            n.updateStore(a);
          }
          n.notifyObservers(i, null, { type: 'valueUpdate', source: 'external' }), n.notifyWatch();
        }),
        (this.setFieldValue = function (r, i) {
          n.setFields([{ name: r, value: i }]);
        }),
        (this.getDependencyChildrenFields = function (r) {
          var i = new Set(),
            a = [],
            s = new Fi();
          n.getFieldEntities().forEach(function (f) {
            var p = f.props.dependencies;
            (p || []).forEach(function (h) {
              var m = on(h);
              s.update(m, function () {
                var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Set();
                return v.add(f), v;
              });
            });
          });
          var c = function f(p) {
            var h = s.get(p) || new Set();
            h.forEach(function (m) {
              if (!i.has(m)) {
                i.add(m);
                var v = m.getNamePath();
                m.isFieldDirty() && v.length && (a.push(v), f(v));
              }
            });
          };
          return c(r), a;
        }),
        (this.triggerOnFieldsChange = function (r, i) {
          var a = n.callbacks.onFieldsChange;
          if (a) {
            var s = n.getFields();
            if (i) {
              var c = new Fi();
              i.forEach(function (p) {
                var h = p.name,
                  m = p.errors;
                c.set(h, m);
              }),
                s.forEach(function (p) {
                  p.errors = c.get(p.name) || p.errors;
                });
            }
            var f = s.filter(function (p) {
              var h = p.name;
              return go(r, h);
            });
            a(f, s);
          }
        }),
        (this.validateFields = function (r, i) {
          n.warningUnhooked();
          var a = !!r,
            s = a ? r.map(on) : [],
            c = [];
          n.getFieldEntities(!0).forEach(function (h) {
            if ((a || s.push(h.getNamePath()), i != null && i.recursive && a)) {
              var m = h.getNamePath();
              m.every(function (S, C) {
                return r[C] === S || r[C] === void 0;
              }) && s.push(m);
            }
            if (!(!h.props.rules || !h.props.rules.length)) {
              var v = h.getNamePath();
              if (!a || go(s, v)) {
                var w = h.validateRules(G({ validateMessages: G(G({}, Rf), n.validateMessages) }, i));
                c.push(
                  w
                    .then(function () {
                      return { name: v, errors: [], warnings: [] };
                    })
                    .catch(function (S) {
                      var C,
                        _ = [],
                        E = [];
                      return (
                        (C = S.forEach) === null ||
                          C === void 0 ||
                          C.call(S, function (I) {
                            var N = I.rule.warningOnly,
                              D = I.errors;
                            N ? E.push.apply(E, ze(D)) : _.push.apply(_, ze(D));
                          }),
                        _.length
                          ? Promise.reject({ name: v, errors: _, warnings: E })
                          : { name: v, errors: _, warnings: E }
                      );
                    }),
                );
              }
            }
          });
          var f = jy(c);
          (n.lastValidatePromise = f),
            f
              .catch(function (h) {
                return h;
              })
              .then(function (h) {
                var m = h.map(function (v) {
                  var w = v.name;
                  return w;
                });
                n.notifyObservers(n.store, m, { type: 'validateFinish' }), n.triggerOnFieldsChange(m, h);
              });
          var p = f
            .then(function () {
              return n.lastValidatePromise === f ? Promise.resolve(n.getFieldsValue(s)) : Promise.reject([]);
            })
            .catch(function (h) {
              var m = h.filter(function (v) {
                return v && v.errors.length;
              });
              return Promise.reject({
                values: n.getFieldsValue(s),
                errorFields: m,
                outOfDate: n.lastValidatePromise !== f,
              });
            });
          return (
            p.catch(function (h) {
              return h;
            }),
            p
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
                  } catch (a) {
                    console.error(a);
                  }
              })
              .catch(function (r) {
                var i = n.callbacks.onFinishFailed;
                i && i(r);
              });
        }),
        (this.forceRootUpdate = t);
    });
  function Uf(e) {
    var t = le(),
      n = Te({}),
      r = ge(n, 2),
      i = r[1];
    if (!t.current)
      if (e) t.current = e;
      else {
        var a = function () {
            i({});
          },
          s = new Ly(a);
        t.current = s.getForm();
      }
    return [t.current];
  }
  var pl = y.createContext({
      triggerFormChange: function () {},
      triggerFormFinish: function () {},
      registerForm: function () {},
      unregisterForm: function () {},
    }),
    qf = function (t) {
      var n = t.validateMessages,
        r = t.onFormChange,
        i = t.onFormFinish,
        a = t.children,
        s = Be(pl),
        c = le({});
      return y.createElement(
        pl.Provider,
        {
          value: G(
            G({}, s),
            {},
            {
              validateMessages: G(G({}, s.validateMessages), n),
              triggerFormChange: function (p, h) {
                r && r(p, { changedFields: h, forms: c.current }), s.triggerFormChange(p, h);
              },
              triggerFormFinish: function (p, h) {
                i && i(p, { values: h, forms: c.current }), s.triggerFormFinish(p, h);
              },
              registerForm: function (p, h) {
                p && (c.current = G(G({}, c.current), {}, $e({}, p, h))), s.registerForm(p, h);
              },
              unregisterForm: function (p) {
                var h = G({}, c.current);
                delete h[p], (c.current = h), s.unregisterForm(p);
              },
            },
          ),
        },
        a,
      );
    },
    Hy = [
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
    ky = function (t, n) {
      var r = t.name,
        i = t.initialValues,
        a = t.fields,
        s = t.form,
        c = t.preserve,
        f = t.children,
        p = t.component,
        h = p === void 0 ? 'form' : p,
        m = t.validateMessages,
        v = t.validateTrigger,
        w = v === void 0 ? 'onChange' : v,
        S = t.onValuesChange,
        C = t.onFieldsChange,
        _ = t.onFinish,
        E = t.onFinishFailed,
        I = qt(t, Hy),
        N = Be(pl),
        D = Uf(s),
        z = ge(D, 1),
        u = z[0],
        $ = u.getInternalHooks(si),
        P = $.useSubscribe,
        R = $.setInitialValues,
        A = $.setCallbacks,
        B = $.setValidateMessages,
        F = $.setPreserve,
        M = $.destroyForm;
      hn(n, function () {
        return u;
      }),
        ke(
          function () {
            return (
              N.registerForm(r, u),
              function () {
                N.unregisterForm(r);
              }
            );
          },
          [N, u, r],
        ),
        B(G(G({}, N.validateMessages), m)),
        A({
          onValuesChange: S,
          onFieldsChange: function (ye) {
            if ((N.triggerFormChange(r, ye), C)) {
              for (var J = arguments.length, be = new Array(J > 1 ? J - 1 : 0), Se = 1; Se < J; Se++)
                be[Se - 1] = arguments[Se];
              C.apply(void 0, [ye].concat(be));
            }
          },
          onFinish: function (ye) {
            N.triggerFormFinish(r, ye), _ && _(ye);
          },
          onFinishFailed: E,
        }),
        F(c);
      var j = le(null);
      R(i, !j.current),
        j.current || (j.current = !0),
        ke(function () {
          return M;
        }, []);
      var V,
        U = typeof f == 'function';
      if (U) {
        var X = u.getFieldsValue(!0);
        V = f(X, u);
      } else V = f;
      P(!U);
      var Z = le();
      ke(
        function () {
          _y(Z.current || [], a || []) || u.setFields(a || []), (Z.current = a);
        },
        [a, u],
      );
      var ee = Fe(
          function () {
            return G(G({}, u), {}, { validateTrigger: w });
          },
          [u, w],
        ),
        fe = y.createElement(Ai.Provider, { value: ee }, V);
      return h === !1
        ? fe
        : y.createElement(
            h,
            mt({}, I, {
              onSubmit: function (ye) {
                ye.preventDefault(), ye.stopPropagation(), u.submit();
              },
              onReset: function (ye) {
                var J;
                ye.preventDefault(), u.resetFields(), (J = I.onReset) === null || J === void 0 || J.call(I, ye);
              },
            }),
            fe,
          );
    };
  function Gf(e) {
    try {
      return JSON.stringify(e);
    } catch {
      return Math.random();
    }
  }
  function By() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var r = t[0],
      i = r === void 0 ? [] : r,
      a = t[1],
      s = Te(),
      c = ge(s, 2),
      f = c[0],
      p = c[1],
      h = Fe(
        function () {
          return Gf(f);
        },
        [f],
      ),
      m = le(h);
    m.current = h;
    var v = Be(Ai),
      w = a || v,
      S = w && w._init,
      C = on(i),
      _ = le(C);
    return (
      (_.current = C),
      ke(
        function () {
          if (S) {
            var E = w.getFieldsValue,
              I = w.getInternalHooks,
              N = I(si),
              D = N.registerWatch,
              z = D(function ($) {
                var P = Lr($, _.current),
                  R = Gf(P);
                m.current !== R && ((m.current = R), p(P));
              }),
              u = Lr(E(), _.current);
            return p(u), z;
          }
        },
        [S],
      ),
      f
    );
  }
  var Vy = Ve(ky),
    vo = Vy;
  (vo.FormProvider = qf), (vo.Field = Vf), (vo.List = Fy), (vo.useForm = Uf), (vo.useWatch = By);
  const Kf = {
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
  var Wy = {
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
  const Xf = { placeholder: 'Select time', rangePlaceholder: ['Start time', 'End time'] },
    Yf = {
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
        Wy,
      ),
      timePickerLocale: Object.assign({}, Xf),
    },
    Un = '${label} is not a valid ${type}',
    yo = {
      locale: 'en',
      Pagination: Kf,
      DatePicker: Yf,
      TimePicker: Xf,
      Calendar: Yf,
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
            string: Un,
            method: Un,
            array: Un,
            object: Un,
            number: Un,
            date: Un,
            boolean: Un,
            integer: Un,
            float: Un,
            regexp: Un,
            email: Un,
            url: Un,
            hex: Un,
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
  let hl = Object.assign({}, yo.Modal);
  function Qf(e) {
    e ? (hl = Object.assign(Object.assign({}, hl), e)) : (hl = Object.assign({}, yo.Modal));
  }
  const gl = y.createContext(void 0),
    Uy = 'internalMark',
    qy = (e) => {
      const { locale: t = {}, children: n, _ANT_MARK__: r } = e;
      ke(
        () => (
          Qf(t && t.Modal),
          () => {
            Qf();
          }
        ),
        [t],
      );
      const i = Fe(() => Object.assign(Object.assign({}, t), { exist: !0 }), [t]);
      return y.createElement(gl.Provider, { value: i }, n);
    },
    Gy = '5.3.0',
    $a = [
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
  function En(e, t) {
    Ky(e) && (e = '100%');
    var n = Xy(e);
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
  function Oa(e) {
    return Math.min(1, Math.max(0, e));
  }
  function Ky(e) {
    return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
  }
  function Xy(e) {
    return typeof e == 'string' && e.indexOf('%') !== -1;
  }
  function Jf(e) {
    return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
  }
  function _a(e) {
    return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
  }
  function ci(e) {
    return e.length === 1 ? '0' + e : String(e);
  }
  function Yy(e, t, n) {
    return { r: En(e, 255) * 255, g: En(t, 255) * 255, b: En(n, 255) * 255 };
  }
  function Zf(e, t, n) {
    (e = En(e, 255)), (t = En(t, 255)), (n = En(n, 255));
    var r = Math.max(e, t, n),
      i = Math.min(e, t, n),
      a = 0,
      s = 0,
      c = (r + i) / 2;
    if (r === i) (s = 0), (a = 0);
    else {
      var f = r - i;
      switch (((s = c > 0.5 ? f / (2 - r - i) : f / (r + i)), r)) {
        case e:
          a = (t - n) / f + (t < n ? 6 : 0);
          break;
        case t:
          a = (n - e) / f + 2;
          break;
        case n:
          a = (e - t) / f + 4;
          break;
      }
      a /= 6;
    }
    return { h: a, s, l: c };
  }
  function ml(e, t, n) {
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
  function Qy(e, t, n) {
    var r, i, a;
    if (((e = En(e, 360)), (t = En(t, 100)), (n = En(n, 100)), t === 0)) (i = n), (a = n), (r = n);
    else {
      var s = n < 0.5 ? n * (1 + t) : n + t - n * t,
        c = 2 * n - s;
      (r = ml(c, s, e + 0.3333333333333333)), (i = ml(c, s, e)), (a = ml(c, s, e - 0.3333333333333333));
    }
    return { r: r * 255, g: i * 255, b: a * 255 };
  }
  function vl(e, t, n) {
    (e = En(e, 255)), (t = En(t, 255)), (n = En(n, 255));
    var r = Math.max(e, t, n),
      i = Math.min(e, t, n),
      a = 0,
      s = r,
      c = r - i,
      f = r === 0 ? 0 : c / r;
    if (r === i) a = 0;
    else {
      switch (r) {
        case e:
          a = (t - n) / c + (t < n ? 6 : 0);
          break;
        case t:
          a = (n - e) / c + 2;
          break;
        case n:
          a = (e - t) / c + 4;
          break;
      }
      a /= 6;
    }
    return { h: a, s: f, v: s };
  }
  function Jy(e, t, n) {
    (e = En(e, 360) * 6), (t = En(t, 100)), (n = En(n, 100));
    var r = Math.floor(e),
      i = e - r,
      a = n * (1 - t),
      s = n * (1 - i * t),
      c = n * (1 - (1 - i) * t),
      f = r % 6,
      p = [n, s, a, a, c, n][f],
      h = [c, n, n, s, a, a][f],
      m = [a, a, c, n, n, s][f];
    return { r: p * 255, g: h * 255, b: m * 255 };
  }
  function yl(e, t, n, r) {
    var i = [ci(Math.round(e).toString(16)), ci(Math.round(t).toString(16)), ci(Math.round(n).toString(16))];
    return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1))
      ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
      : i.join('');
  }
  function Zy(e, t, n, r, i) {
    var a = [ci(Math.round(e).toString(16)), ci(Math.round(t).toString(16)), ci(Math.round(n).toString(16)), ci(eb(r))];
    return i &&
      a[0].startsWith(a[0].charAt(1)) &&
      a[1].startsWith(a[1].charAt(1)) &&
      a[2].startsWith(a[2].charAt(1)) &&
      a[3].startsWith(a[3].charAt(1))
      ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0)
      : a.join('');
  }
  function eb(e) {
    return Math.round(parseFloat(e) * 255).toString(16);
  }
  function ed(e) {
    return qn(e) / 255;
  }
  function qn(e) {
    return parseInt(e, 16);
  }
  function tb(e) {
    return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
  }
  var bl = {
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
  function ji(e) {
    var t = { r: 0, g: 0, b: 0 },
      n = 1,
      r = null,
      i = null,
      a = null,
      s = !1,
      c = !1;
    return (
      typeof e == 'string' && (e = ib(e)),
      typeof e == 'object' &&
        (wr(e.r) && wr(e.g) && wr(e.b)
          ? ((t = Yy(e.r, e.g, e.b)), (s = !0), (c = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
          : wr(e.h) && wr(e.s) && wr(e.v)
          ? ((r = _a(e.s)), (i = _a(e.v)), (t = Jy(e.h, r, i)), (s = !0), (c = 'hsv'))
          : wr(e.h) && wr(e.s) && wr(e.l) && ((r = _a(e.s)), (a = _a(e.l)), (t = Qy(e.h, r, a)), (s = !0), (c = 'hsl')),
        Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
      (n = Jf(n)),
      {
        ok: s,
        format: e.format || c,
        r: Math.min(255, Math.max(t.r, 0)),
        g: Math.min(255, Math.max(t.g, 0)),
        b: Math.min(255, Math.max(t.b, 0)),
        a: n,
      }
    );
  }
  var nb = '[-\\+]?\\d+%?',
    rb = '[-\\+]?\\d*\\.\\d+%?',
    kr = '(?:'.concat(rb, ')|(?:').concat(nb, ')'),
    Sl = '[\\s|\\(]+('.concat(kr, ')[,|\\s]+(').concat(kr, ')[,|\\s]+(').concat(kr, ')\\s*\\)?'),
    Cl = '[\\s|\\(]+('
      .concat(kr, ')[,|\\s]+(')
      .concat(kr, ')[,|\\s]+(')
      .concat(kr, ')[,|\\s]+(')
      .concat(kr, ')\\s*\\)?'),
    ur = {
      CSS_UNIT: new RegExp(kr),
      rgb: new RegExp('rgb' + Sl),
      rgba: new RegExp('rgba' + Cl),
      hsl: new RegExp('hsl' + Sl),
      hsla: new RegExp('hsla' + Cl),
      hsv: new RegExp('hsv' + Sl),
      hsva: new RegExp('hsva' + Cl),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    };
  function ib(e) {
    if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
    var t = !1;
    if (bl[e]) (e = bl[e]), (t = !0);
    else if (e === 'transparent') return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    var n = ur.rgb.exec(e);
    return n
      ? { r: n[1], g: n[2], b: n[3] }
      : ((n = ur.rgba.exec(e)),
        n
          ? { r: n[1], g: n[2], b: n[3], a: n[4] }
          : ((n = ur.hsl.exec(e)),
            n
              ? { h: n[1], s: n[2], l: n[3] }
              : ((n = ur.hsla.exec(e)),
                n
                  ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                  : ((n = ur.hsv.exec(e)),
                    n
                      ? { h: n[1], s: n[2], v: n[3] }
                      : ((n = ur.hsva.exec(e)),
                        n
                          ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                          : ((n = ur.hex8.exec(e)),
                            n
                              ? { r: qn(n[1]), g: qn(n[2]), b: qn(n[3]), a: ed(n[4]), format: t ? 'name' : 'hex8' }
                              : ((n = ur.hex6.exec(e)),
                                n
                                  ? { r: qn(n[1]), g: qn(n[2]), b: qn(n[3]), format: t ? 'name' : 'hex' }
                                  : ((n = ur.hex4.exec(e)),
                                    n
                                      ? {
                                          r: qn(n[1] + n[1]),
                                          g: qn(n[2] + n[2]),
                                          b: qn(n[3] + n[3]),
                                          a: ed(n[4] + n[4]),
                                          format: t ? 'name' : 'hex8',
                                        }
                                      : ((n = ur.hex3.exec(e)),
                                        n
                                          ? {
                                              r: qn(n[1] + n[1]),
                                              g: qn(n[2] + n[2]),
                                              b: qn(n[3] + n[3]),
                                              format: t ? 'name' : 'hex',
                                            }
                                          : !1)))))))));
  }
  function wr(e) {
    return Boolean(ur.CSS_UNIT.exec(String(e)));
  }
  var mn = (function () {
      function e(t, n) {
        t === void 0 && (t = ''), n === void 0 && (n = {});
        var r;
        if (t instanceof e) return t;
        typeof t == 'number' && (t = tb(t)), (this.originalInput = t);
        var i = ji(t);
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
            a = t.r / 255,
            s = t.g / 255,
            c = t.b / 255;
          return (
            a <= 0.03928 ? (n = a / 12.92) : (n = Math.pow((a + 0.055) / 1.055, 2.4)),
            s <= 0.03928 ? (r = s / 12.92) : (r = Math.pow((s + 0.055) / 1.055, 2.4)),
            c <= 0.03928 ? (i = c / 12.92) : (i = Math.pow((c + 0.055) / 1.055, 2.4)),
            0.2126 * n + 0.7152 * r + 0.0722 * i
          );
        }),
        (e.prototype.getAlpha = function () {
          return this.a;
        }),
        (e.prototype.setAlpha = function (t) {
          return (this.a = Jf(t)), (this.roundA = Math.round(100 * this.a) / 100), this;
        }),
        (e.prototype.isMonochrome = function () {
          var t = this.toHsl().s;
          return t === 0;
        }),
        (e.prototype.toHsv = function () {
          var t = vl(this.r, this.g, this.b);
          return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
        }),
        (e.prototype.toHsvString = function () {
          var t = vl(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            i = Math.round(t.v * 100);
          return this.a === 1
            ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(i, '%)')
            : 'hsva('.concat(n, ', ').concat(r, '%, ').concat(i, '%, ').concat(this.roundA, ')');
        }),
        (e.prototype.toHsl = function () {
          var t = Zf(this.r, this.g, this.b);
          return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
        }),
        (e.prototype.toHslString = function () {
          var t = Zf(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            i = Math.round(t.l * 100);
          return this.a === 1
            ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(i, '%)')
            : 'hsla('.concat(n, ', ').concat(r, '%, ').concat(i, '%, ').concat(this.roundA, ')');
        }),
        (e.prototype.toHex = function (t) {
          return t === void 0 && (t = !1), yl(this.r, this.g, this.b, t);
        }),
        (e.prototype.toHexString = function (t) {
          return t === void 0 && (t = !1), '#' + this.toHex(t);
        }),
        (e.prototype.toHex8 = function (t) {
          return t === void 0 && (t = !1), Zy(this.r, this.g, this.b, this.a, t);
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
            return ''.concat(Math.round(En(n, 255) * 100), '%');
          };
          return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
        }),
        (e.prototype.toPercentageRgbString = function () {
          var t = function (n) {
            return Math.round(En(n, 255) * 100);
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
          for (var t = '#' + yl(this.r, this.g, this.b, !1), n = 0, r = Object.entries(bl); n < r.length; n++) {
            var i = r[n],
              a = i[0],
              s = i[1];
            if (t === s) return a;
          }
          return !1;
        }),
        (e.prototype.toString = function (t) {
          var n = Boolean(t);
          t = t ?? this.format;
          var r = !1,
            i = this.a < 1 && this.a >= 0,
            a = !n && i && (t.startsWith('hex') || t === 'name');
          return a
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
          return (n.l += t / 100), (n.l = Oa(n.l)), new e(n);
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
          return (n.l -= t / 100), (n.l = Oa(n.l)), new e(n);
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
          return (n.s -= t / 100), (n.s = Oa(n.s)), new e(n);
        }),
        (e.prototype.saturate = function (t) {
          t === void 0 && (t = 10);
          var n = this.toHsl();
          return (n.s += t / 100), (n.s = Oa(n.s)), new e(n);
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
            a = n / 100,
            s = {
              r: (i.r - r.r) * a + r.r,
              g: (i.g - r.g) * a + r.g,
              b: (i.b - r.b) * a + r.b,
              a: (i.a - r.a) * a + r.a,
            };
          return new e(s);
        }),
        (e.prototype.analogous = function (t, n) {
          t === void 0 && (t = 6), n === void 0 && (n = 30);
          var r = this.toHsl(),
            i = 360 / n,
            a = [this];
          for (r.h = (r.h - ((i * t) >> 1) + 720) % 360; --t; ) (r.h = (r.h + i) % 360), a.push(new e(r));
          return a;
        }),
        (e.prototype.complement = function () {
          var t = this.toHsl();
          return (t.h = (t.h + 180) % 360), new e(t);
        }),
        (e.prototype.monochromatic = function (t) {
          t === void 0 && (t = 6);
          for (var n = this.toHsv(), r = n.h, i = n.s, a = n.v, s = [], c = 1 / t; t--; )
            s.push(new e({ h: r, s: i, v: a })), (a = (a + c) % 1);
          return s;
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
          for (var n = this.toHsl(), r = n.h, i = [this], a = 360 / t, s = 1; s < t; s++)
            i.push(new e({ h: (r + s * a) % 360, s: n.s, l: n.l }));
          return i;
        }),
        (e.prototype.equals = function (t) {
          return this.toRgbString() === new e(t).toRgbString();
        }),
        e
      );
    })(),
    Ia = 2,
    td = 0.16,
    ob = 0.05,
    ab = 0.05,
    sb = 0.15,
    nd = 5,
    rd = 4,
    lb = [
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
  function id(e) {
    var t = e.r,
      n = e.g,
      r = e.b,
      i = vl(t, n, r);
    return { h: i.h * 360, s: i.s, v: i.v };
  }
  function Ta(e) {
    var t = e.r,
      n = e.g,
      r = e.b;
    return '#'.concat(yl(t, n, r, !1));
  }
  function cb(e, t, n) {
    var r = n / 100,
      i = { r: (t.r - e.r) * r + e.r, g: (t.g - e.g) * r + e.g, b: (t.b - e.b) * r + e.b };
    return i;
  }
  function od(e, t, n) {
    var r;
    return (
      Math.round(e.h) >= 60 && Math.round(e.h) <= 240
        ? (r = n ? Math.round(e.h) - Ia * t : Math.round(e.h) + Ia * t)
        : (r = n ? Math.round(e.h) + Ia * t : Math.round(e.h) - Ia * t),
      r < 0 ? (r += 360) : r >= 360 && (r -= 360),
      r
    );
  }
  function ad(e, t, n) {
    if (e.h === 0 && e.s === 0) return e.s;
    var r;
    return (
      n ? (r = e.s - td * t) : t === rd ? (r = e.s + td) : (r = e.s + ob * t),
      r > 1 && (r = 1),
      n && t === nd && r > 0.1 && (r = 0.1),
      r < 0.06 && (r = 0.06),
      Number(r.toFixed(2))
    );
  }
  function sd(e, t, n) {
    var r;
    return n ? (r = e.v + ab * t) : (r = e.v - sb * t), r > 1 && (r = 1), Number(r.toFixed(2));
  }
  function Er(e) {
    for (
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = ji(e), i = nd;
      i > 0;
      i -= 1
    ) {
      var a = id(r),
        s = Ta(ji({ h: od(a, i, !0), s: ad(a, i, !0), v: sd(a, i, !0) }));
      n.push(s);
    }
    n.push(Ta(r));
    for (var c = 1; c <= rd; c += 1) {
      var f = id(r),
        p = Ta(ji({ h: od(f, c), s: ad(f, c), v: sd(f, c) }));
      n.push(p);
    }
    return t.theme === 'dark'
      ? lb.map(function (h) {
          var m = h.index,
            v = h.opacity,
            w = Ta(cb(ji(t.backgroundColor || '#141414'), ji(n[m]), v * 100));
          return w;
        })
      : n;
  }
  var xl = {
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
    Pa = {},
    wl = {};
  Object.keys(xl).forEach(function (e) {
    (Pa[e] = Er(xl[e])),
      (Pa[e].primary = Pa[e][5]),
      (wl[e] = Er(xl[e], { theme: 'dark', backgroundColor: '#141414' })),
      (wl[e].primary = wl[e][5]);
  });
  var ub = Pa.gold;
  const ld = (e) => {
    const { controlHeight: t } = e;
    return { controlHeightSM: t * 0.75, controlHeightXS: t * 0.5, controlHeightLG: t * 1.25 };
  };
  function fb(e) {
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
  const El = {
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
    Na = Object.assign(Object.assign({}, El), {
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
  function cd(e, t) {
    let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t;
    const {
        colorSuccess: i,
        colorWarning: a,
        colorError: s,
        colorInfo: c,
        colorPrimary: f,
        colorBgBase: p,
        colorTextBase: h,
      } = e,
      m = n(f),
      v = n(i),
      w = n(a),
      S = n(s),
      C = n(c),
      _ = r(p, h);
    return Object.assign(Object.assign({}, _), {
      colorPrimaryBg: m[1],
      colorPrimaryBgHover: m[2],
      colorPrimaryBorder: m[3],
      colorPrimaryBorderHover: m[4],
      colorPrimaryHover: m[5],
      colorPrimary: m[6],
      colorPrimaryActive: m[7],
      colorPrimaryTextHover: m[8],
      colorPrimaryText: m[9],
      colorPrimaryTextActive: m[10],
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
      colorErrorBg: S[1],
      colorErrorBgHover: S[2],
      colorErrorBorder: S[3],
      colorErrorBorderHover: S[4],
      colorErrorHover: S[5],
      colorError: S[6],
      colorErrorActive: S[7],
      colorErrorTextHover: S[8],
      colorErrorText: S[9],
      colorErrorTextActive: S[10],
      colorWarningBg: w[1],
      colorWarningBgHover: w[2],
      colorWarningBorder: w[3],
      colorWarningBorderHover: w[4],
      colorWarningHover: w[4],
      colorWarning: w[6],
      colorWarningActive: w[7],
      colorWarningTextHover: w[8],
      colorWarningText: w[9],
      colorWarningTextActive: w[10],
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
  const db = (e) => {
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
  function pb(e) {
    const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: i } = e;
    return Object.assign(
      {
        motionDurationFast: `${(n + t).toFixed(1)}s`,
        motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
        motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
        lineWidthBold: i + 1,
      },
      db(r),
    );
  }
  const $r = (e, t) => new mn(e).setAlpha(t).toRgbString(),
    bo = (e, t) => new mn(e).darken(t).toHexString(),
    hb = (e) => {
      const t = Er(e);
      return { 1: t[0], 2: t[1], 3: t[2], 4: t[3], 5: t[4], 6: t[5], 7: t[6], 8: t[4], 9: t[5], 10: t[6] };
    },
    gb = (e, t) => {
      const n = e || '#fff',
        r = t || '#000';
      return {
        colorBgBase: n,
        colorTextBase: r,
        colorText: $r(r, 0.88),
        colorTextSecondary: $r(r, 0.65),
        colorTextTertiary: $r(r, 0.45),
        colorTextQuaternary: $r(r, 0.25),
        colorFill: $r(r, 0.15),
        colorFillSecondary: $r(r, 0.06),
        colorFillTertiary: $r(r, 0.04),
        colorFillQuaternary: $r(r, 0.02),
        colorBgLayout: bo(n, 4),
        colorBgContainer: bo(n, 0),
        colorBgElevated: bo(n, 0),
        colorBgSpotlight: $r(r, 0.85),
        colorBorder: bo(n, 15),
        colorBorderSecondary: bo(n, 6),
      };
    };
  function mb(e) {
    const t = new Array(10).fill(null).map((n, r) => {
      const i = r - 1,
        a = e * Math.pow(2.71828, i / 5),
        s = r > 1 ? Math.floor(a) : Math.ceil(a);
      return Math.floor(s / 2) * 2;
    });
    return (
      (t[1] = e),
      t.map((n) => {
        const r = n + 8;
        return { size: n, lineHeight: r / n };
      })
    );
  }
  const ud = (e) => {
    const t = mb(e),
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
  function Ra(e) {
    const t = Object.keys(El)
      .map((n) => {
        const r = Er(e[n]);
        return new Array(10)
          .fill(1)
          .reduce((i, a, s) => ((i[`${n}-${s + 1}`] = r[s]), (i[`${n}${s + 1}`] = r[s]), i), {});
      })
      .reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {});
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, e), t),
              cd(e, { generateColorPalettes: hb, generateNeutralColorPalettes: gb }),
            ),
            ud(e.fontSize),
          ),
          fb(e),
        ),
        ld(e),
      ),
      pb(e),
    );
  }
  function $l(e) {
    return e >= 0 && e <= 255;
  }
  function Ma(e, t) {
    const { r: n, g: r, b: i, a } = new mn(e).toRgb();
    if (a < 1) return e;
    const { r: s, g: c, b: f } = new mn(t).toRgb();
    for (let p = 0.01; p <= 1; p += 0.01) {
      const h = Math.round((n - s * (1 - p)) / p),
        m = Math.round((r - c * (1 - p)) / p),
        v = Math.round((i - f * (1 - p)) / p);
      if ($l(h) && $l(m) && $l(v)) return new mn({ r: h, g: m, b: v, a: Math.round(p * 100) / 100 }).toRgbString();
    }
    return new mn({ r: n, g: r, b: i, a: 1 }).toRgbString();
  }
  var vb =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  function yb(e) {
    const { override: t } = e,
      n = vb(e, ['override']),
      r = Object.assign({}, t);
    Object.keys(Na).forEach((v) => {
      delete r[v];
    });
    const i = Object.assign(Object.assign({}, n), r),
      a = 480,
      s = 576,
      c = 768,
      f = 992,
      p = 1200,
      h = 1600;
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
        colorSplit: Ma(i.colorBorderSecondary, i.colorBgContainer),
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
        colorErrorOutline: Ma(i.colorErrorBg, i.colorBgContainer),
        colorWarningOutline: Ma(i.colorWarningBg, i.colorBgContainer),
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
        controlOutline: Ma(i.colorPrimaryBg, i.colorBgContainer),
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
        screenXS: a,
        screenXSMin: a,
        screenXSMax: s - 1,
        screenSM: s,
        screenSMMin: s,
        screenSMMax: c - 1,
        screenMD: c,
        screenMDMin: c,
        screenMDMax: f - 1,
        screenLG: f,
        screenLGMin: f,
        screenLGMax: p - 1,
        screenXL: p,
        screenXLMin: p,
        screenXLMax: h - 1,
        screenXXL: h,
        screenXXLMin: h,
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
  const fd = (e) => ({
    color: e.colorLink,
    textDecoration: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: `color ${e.motionDurationSlow}`,
    '&:focus, &:hover': { color: e.colorLinkHover },
    '&:active': { color: e.colorLinkActive },
  });
  function bb(e, t) {
    return $a.reduce((n, r) => {
      const i = e[`${r}1`],
        a = e[`${r}3`],
        s = e[`${r}6`],
        c = e[`${r}7`];
      return Object.assign(
        Object.assign({}, n),
        t(r, { lightColor: i, lightBorderColor: a, darkColor: s, textColor: c }),
      );
    }, {});
  }
  const Sb = (e, t, n, r, i) => {
      const a = e / 2,
        s = 0,
        c = a,
        f = (n * 1) / Math.sqrt(2),
        p = a - n * (1 - 1 / Math.sqrt(2)),
        h = a - t * (1 / Math.sqrt(2)),
        m = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)),
        v = 2 * a - h,
        w = m,
        S = 2 * a - f,
        C = p,
        _ = 2 * a - s,
        E = c,
        I = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2);
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
          clipPath: `path('M ${s} ${c} A ${n} ${n} 0 0 0 ${f} ${p} L ${h} ${m} A ${t} ${t} 0 0 1 ${v} ${w} L ${S} ${C} A ${n} ${n} 0 0 0 ${_} ${E} Z')`,
          content: '""',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: I,
          height: I,
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
    So = { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' },
    fr = (e) => ({
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      listStyle: 'none',
      fontFamily: e.fontFamily,
    }),
    Ol = () => ({
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
    Cb = () => ({
      '&::before': { display: 'table', content: '""' },
      '&::after': { display: 'table', clear: 'both', content: '""' },
    }),
    xb = (e) => ({
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
    wb = (e, t) => {
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
    _l = (e) => ({
      outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
      outlineOffset: 1,
      transition: 'outline-offset 0s, outline 0s',
    }),
    Eb = (e) => ({ '&:focus-visible': Object.assign({}, _l(e)) }),
    Il = 'anticon',
    $b = (e, t) => t || (e ? `ant-${e}` : 'ant'),
    At = y.createContext({ getPrefixCls: $b, iconPrefixCls: Il });
  function jn(e, t, n) {
    return (r) => {
      const [i, a, s] = zi(),
        { getPrefixCls: c, iconPrefixCls: f } = Be(At),
        p = c();
      return (
        Ys({ theme: i, token: a, hashId: s, path: ['Shared', p] }, () => [{ '&': xb(a) }]),
        [
          Ys({ theme: i, token: a, hashId: s, path: [e, r, f] }, () => {
            const { token: h, flush: m } = _b(a),
              v = typeof n == 'function' ? n(h) : n,
              w = Object.assign(Object.assign({}, v), a[e]),
              S = `.${r}`,
              C = Yt(h, { componentCls: S, prefixCls: r, iconCls: `.${f}`, antCls: `.${p}` }, w),
              _ = t(C, { hashId: s, prefixCls: r, rootPrefixCls: p, iconPrefixCls: f, overrideComponentToken: a[e] });
            return m(e, w), [wb(a, r), _];
          }),
          s,
        ]
      );
    };
  }
  const dd = typeof CSSINJS_STATISTIC < 'u';
  let Tl = !0;
  function Yt() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    if (!dd) return Object.assign.apply(Object, [{}].concat(t));
    Tl = !1;
    const r = {};
    return (
      t.forEach((i) => {
        Object.keys(i).forEach((s) => {
          Object.defineProperty(r, s, { configurable: !0, enumerable: !0, get: () => i[s] });
        });
      }),
      (Tl = !0),
      r
    );
  }
  function Ob() {}
  function _b(e) {
    let t,
      n = e,
      r = Ob;
    return (
      dd &&
        ((t = new Set()),
        (n = new Proxy(e, {
          get(i, a) {
            return Tl && t.add(a), i[a];
          },
        })),
        (r = (i, a) => {
          Array.from(t);
        })),
      { token: n, keys: t, flush: r }
    );
  }
  const Ib = Ef(Ra),
    Aa = { token: Na, hashed: !0 },
    pd = Pe.createContext(Aa);
  function zi() {
    const { token: e, hashed: t, theme: n, components: r } = Pe.useContext(pd),
      i = `${Gy}-${t || ''}`,
      a = n || Ib,
      [s, c] = S0(a, [Na, e], { salt: i, override: Object.assign({ override: e }, r), formatToken: yb });
    return [a, s, t ? c : ''];
  }
  const Tb = `-ant-${Date.now()}-${Math.random()}`;
  function Pb(e, t) {
    const n = {},
      r = (s, c) => {
        let f = s.clone();
        return (f = (c == null ? void 0 : c(f)) || f), f.toRgbString();
      },
      i = (s, c) => {
        const f = new mn(s),
          p = Er(f.toRgbString());
        (n[`${c}-color`] = r(f)),
          (n[`${c}-color-disabled`] = p[1]),
          (n[`${c}-color-hover`] = p[4]),
          (n[`${c}-color-active`] = p[6]),
          (n[`${c}-color-outline`] = f.clone().setAlpha(0.2).toRgbString()),
          (n[`${c}-color-deprecated-bg`] = p[0]),
          (n[`${c}-color-deprecated-border`] = p[2]);
      };
    if (t.primaryColor) {
      i(t.primaryColor, 'primary');
      const s = new mn(t.primaryColor),
        c = Er(s.toRgbString());
      c.forEach((p, h) => {
        n[`primary-${h + 1}`] = p;
      }),
        (n['primary-color-deprecated-l-35'] = r(s, (p) => p.lighten(35))),
        (n['primary-color-deprecated-l-20'] = r(s, (p) => p.lighten(20))),
        (n['primary-color-deprecated-t-20'] = r(s, (p) => p.tint(20))),
        (n['primary-color-deprecated-t-50'] = r(s, (p) => p.tint(50))),
        (n['primary-color-deprecated-f-12'] = r(s, (p) => p.setAlpha(p.getAlpha() * 0.12)));
      const f = new mn(c[0]);
      (n['primary-color-active-deprecated-f-30'] = r(f, (p) => p.setAlpha(p.getAlpha() * 0.3))),
        (n['primary-color-active-deprecated-d-02'] = r(f, (p) => p.darken(2)));
    }
    return (
      t.successColor && i(t.successColor, 'success'),
      t.warningColor && i(t.warningColor, 'warning'),
      t.errorColor && i(t.errorColor, 'error'),
      t.infoColor && i(t.infoColor, 'info'),
      `
  :root {
    ${Object.keys(n).map((s) => `--${e}-${s}: ${n[s]};`).join(`
`)}
  }
  `.trim()
    );
  }
  function Nb(e, t) {
    const n = Pb(e, t);
    Rn() && Pi(n, `${Tb}-dynamic-theme`);
  }
  const Pl = y.createContext(!1),
    Rb = (e) => {
      let { children: t, disabled: n } = e;
      const r = Be(Pl);
      return y.createElement(Pl.Provider, { value: n ?? r }, t);
    },
    Nl = Pl,
    Rl = y.createContext(void 0),
    Mb = (e) => {
      let { children: t, size: n } = e;
      const r = Be(Rl);
      return y.createElement(Rl.Provider, { value: n || r }, t);
    },
    Co = Rl;
  function Ab() {
    const e = Be(Nl),
      t = Be(Co);
    return { componentDisabled: e, componentSize: t };
  }
  function Db(e, t) {
    const n = e || {},
      r = n.inherit === !1 || !t ? Aa : t;
    return aa(
      () => {
        if (!e) return t;
        const a = Object.assign({}, r.components);
        return (
          Object.keys(e.components || {}).forEach((s) => {
            a[s] = Object.assign(Object.assign({}, a[s]), e.components[s]);
          }),
          Object.assign(Object.assign(Object.assign({}, r), n), {
            token: Object.assign(Object.assign({}, r.token), n.token),
            components: a,
          })
        );
      },
      [n, r],
      (a, s) =>
        a.some((c, f) => {
          const p = s[f];
          return !i0(c, p, !0);
        }),
    );
  }
  const Fb = (e) => {
    const [t, n] = zi();
    return Ys({ theme: t, token: n, hashId: '', path: ['ant-design-icons', e] }, () => [
      { [`.${e}`]: Object.assign(Object.assign({}, Ol()), { [`.${e} .${e}-icon`]: { display: 'block' } }) },
    ]);
  };
  var jb =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const zb = [
      'getTargetContainer',
      'getPopupContainer',
      'renderEmpty',
      'pageHeader',
      'input',
      'pagination',
      'form',
      'select',
    ],
    Lb = 'ant';
  let Da, hd;
  function Fa() {
    return Da || Lb;
  }
  function Hb() {
    return hd || Il;
  }
  const kb = (e) => {
      let { prefixCls: t, iconPrefixCls: n, theme: r } = e;
      t !== void 0 && (Da = t), n !== void 0 && (hd = n), r && Nb(Fa(), r);
    },
    gd = () => ({
      getPrefixCls: (e, t) => t || (e ? `${Fa()}-${e}` : Fa()),
      getIconPrefixCls: Hb,
      getRootPrefixCls: () => Da || Fa(),
    }),
    Bb = (e) => {
      const {
          children: t,
          csp: n,
          autoInsertSpaceInButton: r,
          form: i,
          locale: a,
          componentSize: s,
          direction: c,
          space: f,
          virtual: p,
          dropdownMatchSelectWidth: h,
          legacyLocale: m,
          parentContext: v,
          iconPrefixCls: w,
          theme: S,
          componentDisabled: C,
        } = e,
        _ = rn(
          (M, j) => {
            const { prefixCls: V } = e;
            if (j) return j;
            const U = V || v.getPrefixCls('');
            return M ? `${U}-${M}` : U;
          },
          [v.getPrefixCls, e.prefixCls],
        ),
        E = w || v.iconPrefixCls || Il,
        I = E !== v.iconPrefixCls,
        N = n || v.csp,
        D = Fb(E),
        z = Db(S, v.theme),
        u = {
          csp: N,
          autoInsertSpaceInButton: r,
          locale: a || m,
          direction: c,
          space: f,
          virtual: p,
          dropdownMatchSelectWidth: h,
          getPrefixCls: _,
          iconPrefixCls: E,
          theme: z,
        },
        $ = Object.assign({}, v);
      Object.keys(u).forEach((M) => {
        u[M] !== void 0 && ($[M] = u[M]);
      }),
        zb.forEach((M) => {
          const j = e[M];
          j && ($[M] = j);
        });
      const P = aa(
          () => $,
          $,
          (M, j) => {
            const V = Object.keys(M),
              U = Object.keys(j);
            return V.length !== U.length || V.some((X) => M[X] !== j[X]);
          },
        ),
        R = Fe(() => ({ prefixCls: E, csp: N }), [E, N]);
      let A = I ? D(t) : t;
      const B = Fe(() => {
        var M, j, V;
        return mo(
          {},
          ((M = yo.Form) === null || M === void 0 ? void 0 : M.defaultValidateMessages) || {},
          ((V = (j = P.locale) === null || j === void 0 ? void 0 : j.Form) === null || V === void 0
            ? void 0
            : V.defaultValidateMessages) || {},
          (i == null ? void 0 : i.validateMessages) || {},
        );
      }, [P, i == null ? void 0 : i.validateMessages]);
      Object.keys(B).length > 0 && (A = y.createElement(qf, { validateMessages: B }, t)),
        a && (A = y.createElement(qy, { locale: a, _ANT_MARK__: Uy }, A)),
        (E || N) && (A = y.createElement(Zs.Provider, { value: R }, A)),
        s && (A = y.createElement(Mb, { size: s }, A));
      const F = Fe(() => {
        const M = z || {},
          { algorithm: j, token: V } = M,
          U = jb(M, ['algorithm', 'token']),
          X = j && (!Array.isArray(j) || j.length > 0) ? Ef(j) : void 0;
        return Object.assign(Object.assign({}, U), { theme: X, token: Object.assign(Object.assign({}, Na), V) });
      }, [z]);
      return (
        S && (A = y.createElement(pd.Provider, { value: F }, A)),
        C !== void 0 && (A = y.createElement(Rb, { disabled: C }, A)),
        y.createElement(At.Provider, { value: P }, A)
      );
    },
    Li = (e) => {
      const t = Be(At),
        n = Be(gl);
      return y.createElement(Bb, Object.assign({ parentContext: t, legacyLocale: n }, e));
    };
  (Li.ConfigContext = At),
    (Li.SizeContext = Co),
    (Li.config = kb),
    (Li.useConfig = Ab),
    Object.defineProperty(Li, 'SizeContext', { get: () => Co });
  const md = Li;
  var vd = function (t) {
      return +setTimeout(t, 16);
    },
    yd = function (t) {
      return clearTimeout(t);
    };
  typeof window < 'u' &&
    'requestAnimationFrame' in window &&
    ((vd = function (t) {
      return window.requestAnimationFrame(t);
    }),
    (yd = function (t) {
      return window.cancelAnimationFrame(t);
    }));
  var bd = 0,
    Ml = new Map();
  function Sd(e) {
    Ml.delete(e);
  }
  var In = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    bd += 1;
    var r = bd;
    function i(a) {
      if (a === 0) Sd(r), t();
      else {
        var s = vd(function () {
          i(a - 1);
        });
        Ml.set(r, s);
      }
    }
    return i(n), r;
  };
  In.cancel = function (e) {
    var t = Ml.get(e);
    return Sd(t), yd(t);
  };
  var Vb = {
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
  const Wb = Vb;
  function Ub(e, t) {
    Zn(e, '[@ant-design/icons] '.concat(t));
  }
  function Cd(e) {
    return (
      xt(e) === 'object' &&
      typeof e.name == 'string' &&
      typeof e.theme == 'string' &&
      (xt(e.icon) === 'object' || typeof e.icon == 'function')
    );
  }
  function xd() {
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
  function Al(e, t, n) {
    return n
      ? Pe.createElement(
          e.tag,
          G(G({ key: t }, xd(e.attrs)), n),
          (e.children || []).map(function (r, i) {
            return Al(r, ''.concat(t, '-').concat(e.tag, '-').concat(i));
          }),
        )
      : Pe.createElement(
          e.tag,
          G({ key: t }, xd(e.attrs)),
          (e.children || []).map(function (r, i) {
            return Al(r, ''.concat(t, '-').concat(e.tag, '-').concat(i));
          }),
        );
  }
  function wd(e) {
    return Er(e)[0];
  }
  function Ed(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
  }
  var qb = `
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
    Gb = function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qb,
        n = Be(Zs),
        r = n.csp,
        i = n.prefixCls,
        a = t;
      i && (a = a.replace(/anticon/g, i)),
        ke(function () {
          Pi(a, '@ant-design-icons', { prepend: !0, csp: r });
        }, []);
    },
    Kb = ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor'],
    xo = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
  function Xb(e) {
    var t = e.primaryColor,
      n = e.secondaryColor;
    (xo.primaryColor = t), (xo.secondaryColor = n || wd(t)), (xo.calculated = !!n);
  }
  function Yb() {
    return G({}, xo);
  }
  var ja = function (t) {
    var n = t.icon,
      r = t.className,
      i = t.onClick,
      a = t.style,
      s = t.primaryColor,
      c = t.secondaryColor,
      f = qt(t, Kb),
      p = xo;
    if (
      (s && (p = { primaryColor: s, secondaryColor: c || wd(s) }),
      Gb(),
      Ub(Cd(n), 'icon should be icon definiton, but got '.concat(n)),
      !Cd(n))
    )
      return null;
    var h = n;
    return (
      h && typeof h.icon == 'function' && (h = G(G({}, h), {}, { icon: h.icon(p.primaryColor, p.secondaryColor) })),
      Al(
        h.icon,
        'svg-'.concat(h.name),
        G(
          {
            className: r,
            onClick: i,
            style: a,
            'data-icon': h.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          f,
        ),
      )
    );
  };
  (ja.displayName = 'IconReact'), (ja.getTwoToneColors = Yb), (ja.setTwoToneColors = Xb);
  const Dl = ja;
  function $d(e) {
    var t = Ed(e),
      n = ge(t, 2),
      r = n[0],
      i = n[1];
    return Dl.setTwoToneColors({ primaryColor: r, secondaryColor: i });
  }
  function Qb() {
    var e = Dl.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }
  var Jb = ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor'];
  $d('#1890ff');
  var za = Ve(function (e, t) {
    var n,
      r = e.className,
      i = e.icon,
      a = e.spin,
      s = e.rotate,
      c = e.tabIndex,
      f = e.onClick,
      p = e.twoToneColor,
      h = qt(e, Jb),
      m = Be(Zs),
      v = m.prefixCls,
      w = v === void 0 ? 'anticon' : v,
      S = m.rootClassName,
      C = Ce(
        S,
        w,
        ((n = {}),
        $e(n, ''.concat(w, '-').concat(i.name), !!i.name),
        $e(n, ''.concat(w, '-spin'), !!a || i.name === 'loading'),
        n),
        r,
      ),
      _ = c;
    _ === void 0 && f && (_ = -1);
    var E = s ? { msTransform: 'rotate('.concat(s, 'deg)'), transform: 'rotate('.concat(s, 'deg)') } : void 0,
      I = Ed(p),
      N = ge(I, 2),
      D = N[0],
      z = N[1];
    return y.createElement(
      'span',
      G(G({ role: 'img', 'aria-label': i.name }, h), {}, { ref: t, tabIndex: _, onClick: f, className: C }),
      y.createElement(Dl, { icon: i, primaryColor: D, secondaryColor: z, style: E }),
    );
  });
  (za.displayName = 'AntdIcon'), (za.getTwoToneColor = Qb), (za.setTwoToneColor = $d);
  const Cn = za;
  var Od = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: Wb }));
  };
  Od.displayName = 'CheckCircleFilled';
  const Zb = Ve(Od);
  var e1 = {
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
  const t1 = e1;
  var _d = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: t1 }));
  };
  _d.displayName = 'CloseCircleFilled';
  const Fl = Ve(_d);
  var n1 = {
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
  const r1 = n1;
  var Id = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: r1 }));
  };
  Id.displayName = 'CloseOutlined';
  const jl = Ve(Id);
  var i1 = {
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
  const o1 = i1;
  var Td = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: o1 }));
  };
  Td.displayName = 'ExclamationCircleFilled';
  const a1 = Ve(Td);
  var s1 = {
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
  const l1 = s1;
  var Pd = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: l1 }));
  };
  Pd.displayName = 'InfoCircleFilled';
  const c1 = Ve(Pd);
  function Nd(e, t) {
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
  function u1(e, t) {
    var n = { animationend: Nd('Animation', 'AnimationEnd'), transitionend: Nd('Transition', 'TransitionEnd') };
    return (
      e &&
        ('AnimationEvent' in t || delete n.animationend.animation,
        'TransitionEvent' in t || delete n.transitionend.transition),
      n
    );
  }
  var f1 = u1(Rn(), typeof window < 'u' ? window : {}),
    Rd = {};
  if (Rn()) {
    var d1 = document.createElement('div');
    Rd = d1.style;
  }
  var La = {};
  function Md(e) {
    if (La[e]) return La[e];
    var t = f1[e];
    if (t)
      for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
        var a = n[i];
        if (Object.prototype.hasOwnProperty.call(t, a) && a in Rd) return (La[e] = t[a]), La[e];
      }
    return '';
  }
  var Ad = Md('animationend'),
    Dd = Md('transitionend'),
    Fd = !!(Ad && Dd),
    jd = Ad || 'animationend',
    zd = Dd || 'transitionend';
  function Ld(e, t) {
    if (!e) return null;
    if (xt(e) === 'object') {
      var n = t.replace(/-\w/g, function (r) {
        return r[1].toUpperCase();
      });
      return e[n];
    }
    return ''.concat(e, '-').concat(t);
  }
  var Hi = 'none',
    Ha = 'appear',
    ka = 'enter',
    Ba = 'leave',
    Hd = 'none',
    Or = 'prepare',
    ki = 'start',
    Bi = 'active',
    zl = 'end';
  function ui(e) {
    var t = le(!1),
      n = Te(e),
      r = ge(n, 2),
      i = r[0],
      a = r[1];
    ke(function () {
      return (
        (t.current = !1),
        function () {
          t.current = !0;
        }
      );
    }, []);
    function s(c, f) {
      (f && t.current) || a(c);
    }
    return [i, s];
  }
  const p1 = function () {
    var e = le(null);
    function t() {
      In.cancel(e.current);
    }
    function n(r) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      t();
      var a = In(function () {
        i <= 1
          ? r({
              isCanceled: function () {
                return a !== e.current;
              },
            })
          : n(r, i - 1);
      });
      e.current = a;
    }
    return (
      ke(function () {
        return function () {
          t();
        };
      }, []),
      [n, t]
    );
  };
  var kd = Rn() ? Dr : ke,
    Bd = [Or, ki, Bi, zl],
    Vd = !1,
    h1 = !0;
  function Wd(e) {
    return e === Bi || e === zl;
  }
  const g1 = function (e, t) {
      var n = ui(Hd),
        r = ge(n, 2),
        i = r[0],
        a = r[1],
        s = p1(),
        c = ge(s, 2),
        f = c[0],
        p = c[1];
      function h() {
        a(Or, !0);
      }
      return (
        kd(
          function () {
            if (i !== Hd && i !== zl) {
              var m = Bd.indexOf(i),
                v = Bd[m + 1],
                w = t(i);
              w === Vd
                ? a(v, !0)
                : f(function (S) {
                    function C() {
                      S.isCanceled() || a(v, !0);
                    }
                    w === !0 ? C() : Promise.resolve(w).then(C);
                  });
            }
          },
          [e, i],
        ),
        ke(function () {
          return function () {
            p();
          };
        }, []),
        [h, i]
      );
    },
    m1 = function (e) {
      var t = le(),
        n = le(e);
      n.current = e;
      var r = rn(function (s) {
        n.current(s);
      }, []);
      function i(s) {
        s && (s.removeEventListener(zd, r), s.removeEventListener(jd, r));
      }
      function a(s) {
        t.current && t.current !== s && i(t.current),
          s && s !== t.current && (s.addEventListener(zd, r), s.addEventListener(jd, r), (t.current = s));
      }
      return (
        ke(function () {
          return function () {
            i(t.current);
          };
        }, []),
        [a, i]
      );
    };
  function v1(e, t, n, r) {
    var i = r.motionEnter,
      a = i === void 0 ? !0 : i,
      s = r.motionAppear,
      c = s === void 0 ? !0 : s,
      f = r.motionLeave,
      p = f === void 0 ? !0 : f,
      h = r.motionDeadline,
      m = r.motionLeaveImmediately,
      v = r.onAppearPrepare,
      w = r.onEnterPrepare,
      S = r.onLeavePrepare,
      C = r.onAppearStart,
      _ = r.onEnterStart,
      E = r.onLeaveStart,
      I = r.onAppearActive,
      N = r.onEnterActive,
      D = r.onLeaveActive,
      z = r.onAppearEnd,
      u = r.onEnterEnd,
      $ = r.onLeaveEnd,
      P = r.onVisibleChanged,
      R = ui(),
      A = ge(R, 2),
      B = A[0],
      F = A[1],
      M = ui(Hi),
      j = ge(M, 2),
      V = j[0],
      U = j[1],
      X = ui(null),
      Z = ge(X, 2),
      ee = Z[0],
      fe = Z[1],
      de = le(!1),
      ye = le(null);
    function J() {
      return n();
    }
    var be = le(!1);
    function Se(ae) {
      var se = J();
      if (!(ae && !ae.deadline && ae.target !== se)) {
        var De = be.current,
          Xe;
        V === Ha && De
          ? (Xe = z == null ? void 0 : z(se, ae))
          : V === ka && De
          ? (Xe = u == null ? void 0 : u(se, ae))
          : V === Ba && De && (Xe = $ == null ? void 0 : $(se, ae)),
          V !== Hi && De && Xe !== !1 && (U(Hi, !0), fe(null, !0));
      }
    }
    var me = m1(Se),
      pe = ge(me, 1),
      Oe = pe[0],
      Ee = Fe(
        function () {
          var ae, se, De;
          switch (V) {
            case Ha:
              return (ae = {}), $e(ae, Or, v), $e(ae, ki, C), $e(ae, Bi, I), ae;
            case ka:
              return (se = {}), $e(se, Or, w), $e(se, ki, _), $e(se, Bi, N), se;
            case Ba:
              return (De = {}), $e(De, Or, S), $e(De, ki, E), $e(De, Bi, D), De;
            default:
              return {};
          }
        },
        [V],
      ),
      Ge = g1(V, function (ae) {
        if (ae === Or) {
          var se = Ee[Or];
          return se ? se(J()) : Vd;
        }
        if (oe in Ee) {
          var De;
          fe(((De = Ee[oe]) === null || De === void 0 ? void 0 : De.call(Ee, J(), null)) || null);
        }
        return (
          oe === Bi &&
            (Oe(J()),
            h > 0 &&
              (clearTimeout(ye.current),
              (ye.current = setTimeout(function () {
                Se({ deadline: !0 });
              }, h)))),
          h1
        );
      }),
      He = ge(Ge, 2),
      Me = He[0],
      oe = He[1],
      Ne = Wd(oe);
    (be.current = Ne),
      kd(
        function () {
          F(t);
          var ae = de.current;
          if (((de.current = !0), !!e)) {
            var se;
            !ae && t && c && (se = Ha),
              ae && t && a && (se = ka),
              ((ae && !t && p) || (!ae && m && !t && p)) && (se = Ba),
              se && (U(se), Me());
          }
        },
        [t],
      ),
      ke(
        function () {
          ((V === Ha && !c) || (V === ka && !a) || (V === Ba && !p)) && U(Hi);
        },
        [c, a, p],
      ),
      ke(function () {
        return function () {
          (de.current = !1), clearTimeout(ye.current);
        };
      }, []);
    var Ae = le(!1);
    ke(
      function () {
        B && (Ae.current = !0),
          B !== void 0 && V === Hi && ((Ae.current || B) && (P == null || P(B)), (Ae.current = !0));
      },
      [B, V],
    );
    var re = ee;
    return Ee[Or] && oe === ki && (re = G({ transition: 'none' }, re)), [V, oe, re, B ?? t];
  }
  var y1 = (function (e) {
    ti(n, e);
    var t = ni(n);
    function n() {
      return Dn(this, n), t.apply(this, arguments);
    }
    return (
      Fn(n, [
        {
          key: 'render',
          value: function () {
            return this.props.children;
          },
        },
      ]),
      n
    );
  })(y.Component);
  function b1(e) {
    var t = e;
    xt(e) === 'object' && (t = e.transitionSupport);
    function n(i) {
      return !!(i.motionName && t);
    }
    var r = Ve(function (i, a) {
      var s = i.visible,
        c = s === void 0 ? !0 : s,
        f = i.removeOnLeave,
        p = f === void 0 ? !0 : f,
        h = i.forceRender,
        m = i.children,
        v = i.motionName,
        w = i.leavedClassName,
        S = i.eventProps,
        C = n(i),
        _ = le(),
        E = le();
      function I() {
        try {
          return _.current instanceof HTMLElement ? _.current : la(E.current);
        } catch {
          return null;
        }
      }
      var N = v1(C, c, I, i),
        D = ge(N, 4),
        z = D[0],
        u = D[1],
        $ = D[2],
        P = D[3],
        R = le(P);
      P && (R.current = !0);
      var A = rn(
          function (X) {
            (_.current = X), Ms(a, X);
          },
          [a],
        ),
        B,
        F = G(G({}, S), {}, { visible: c });
      if (!m) B = null;
      else if (z === Hi || !n(i))
        P
          ? (B = m(G({}, F), A))
          : !p && R.current && w
          ? (B = m(G(G({}, F), {}, { className: w }), A))
          : h || (!p && !w)
          ? (B = m(G(G({}, F), {}, { style: { display: 'none' } }), A))
          : (B = null);
      else {
        var M, j;
        u === Or ? (j = 'prepare') : Wd(u) ? (j = 'active') : u === ki && (j = 'start'),
          (B = m(
            G(
              G({}, F),
              {},
              {
                className: Ce(
                  Ld(v, z),
                  ((M = {}), $e(M, Ld(v, ''.concat(z, '-').concat(j)), j), $e(M, v, typeof v == 'string'), M),
                ),
                style: $,
              },
            ),
            A,
          ));
      }
      if (kn(B) && sa(B)) {
        var V = B,
          U = V.ref;
        U || (B = cn(B, { ref: A }));
      }
      return y.createElement(y1, { ref: E }, B);
    });
    return (r.displayName = 'CSSMotion'), r;
  }
  const wo = b1(Fd);
  var Ll = 'add',
    Hl = 'keep',
    kl = 'remove',
    Bl = 'removed';
  function S1(e) {
    var t;
    return e && xt(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }), G(G({}, t), {}, { key: String(t.key) });
  }
  function Vl() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return e.map(S1);
  }
  function C1() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      n = [],
      r = 0,
      i = t.length,
      a = Vl(e),
      s = Vl(t);
    a.forEach(function (p) {
      for (var h = !1, m = r; m < i; m += 1) {
        var v = s[m];
        if (v.key === p.key) {
          r < m &&
            ((n = n.concat(
              s.slice(r, m).map(function (w) {
                return G(G({}, w), {}, { status: Ll });
              }),
            )),
            (r = m)),
            n.push(G(G({}, v), {}, { status: Hl })),
            (r += 1),
            (h = !0);
          break;
        }
      }
      h || n.push(G(G({}, p), {}, { status: kl }));
    }),
      r < i &&
        (n = n.concat(
          s.slice(r).map(function (p) {
            return G(G({}, p), {}, { status: Ll });
          }),
        ));
    var c = {};
    n.forEach(function (p) {
      var h = p.key;
      c[h] = (c[h] || 0) + 1;
    });
    var f = Object.keys(c).filter(function (p) {
      return c[p] > 1;
    });
    return (
      f.forEach(function (p) {
        (n = n.filter(function (h) {
          var m = h.key,
            v = h.status;
          return m !== p || v !== kl;
        })),
          n.forEach(function (h) {
            h.key === p && (h.status = Hl);
          });
      }),
      n
    );
  }
  var x1 = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
    w1 = ['status'],
    E1 = [
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
  function $1(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wo,
      n = (function (r) {
        ti(a, r);
        var i = ni(a);
        function a() {
          var s;
          Dn(this, a);
          for (var c = arguments.length, f = new Array(c), p = 0; p < c; p++) f[p] = arguments[p];
          return (
            (s = i.call.apply(i, [this].concat(f))),
            $e(Vo(s), 'state', { keyEntities: [] }),
            $e(Vo(s), 'removeKey', function (h) {
              var m = s.state.keyEntities,
                v = m.map(function (w) {
                  return w.key !== h ? w : G(G({}, w), {}, { status: Bl });
                });
              return (
                s.setState({ keyEntities: v }),
                v.filter(function (w) {
                  var S = w.status;
                  return S !== Bl;
                }).length
              );
            }),
            s
          );
        }
        return (
          Fn(
            a,
            [
              {
                key: 'render',
                value: function () {
                  var c = this,
                    f = this.state.keyEntities,
                    p = this.props,
                    h = p.component,
                    m = p.children,
                    v = p.onVisibleChanged,
                    w = p.onAllRemoved,
                    S = qt(p, x1),
                    C = h || y.Fragment,
                    _ = {};
                  return (
                    E1.forEach(function (E) {
                      (_[E] = S[E]), delete S[E];
                    }),
                    delete S.keys,
                    y.createElement(
                      C,
                      S,
                      f.map(function (E) {
                        var I = E.status,
                          N = qt(E, w1),
                          D = I === Ll || I === Hl;
                        return y.createElement(
                          t,
                          mt({}, _, {
                            key: N.key,
                            visible: D,
                            eventProps: N,
                            onVisibleChanged: function (u) {
                              if ((v == null || v(u, { key: N.key }), !u)) {
                                var $ = c.removeKey(N.key);
                                $ === 0 && w && w();
                              }
                            },
                          }),
                          m,
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
                value: function (c, f) {
                  var p = c.keys,
                    h = f.keyEntities,
                    m = Vl(p),
                    v = C1(h, m);
                  return {
                    keyEntities: v.filter(function (w) {
                      var S = h.find(function (C) {
                        var _ = C.key;
                        return w.key === _;
                      });
                      return !(S && S.status === Bl && w.status === kl);
                    }),
                  };
                },
              },
            ],
          ),
          a
        );
      })(y.Component);
    return $e(n, 'defaultProps', { component: 'div' }), n;
  }
  const O1 = $1(Fd),
    { isValidElement: Eo } = Ts;
  function _1(e) {
    return e && Eo(e) && e.type === y.Fragment;
  }
  function I1(e, t, n) {
    return Eo(e) ? cn(e, typeof n == 'function' ? n(e.props || {}) : n) : t;
  }
  function Vi(e, t) {
    return I1(e, e, t);
  }
  var ve = {
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
        if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= ve.F1 && n <= ve.F12)) return !1;
        switch (n) {
          case ve.ALT:
          case ve.CAPS_LOCK:
          case ve.CONTEXT_MENU:
          case ve.CTRL:
          case ve.DOWN:
          case ve.END:
          case ve.ESC:
          case ve.HOME:
          case ve.INSERT:
          case ve.LEFT:
          case ve.MAC_FF_META:
          case ve.META:
          case ve.NUMLOCK:
          case ve.NUM_CENTER:
          case ve.PAGE_DOWN:
          case ve.PAGE_UP:
          case ve.PAUSE:
          case ve.PRINT_SCREEN:
          case ve.RIGHT:
          case ve.SHIFT:
          case ve.UP:
          case ve.WIN_KEY:
          case ve.WIN_KEY_RIGHT:
            return !1;
          default:
            return !0;
        }
      },
      isCharacterKey: function (t) {
        if (
          (t >= ve.ZERO && t <= ve.NINE) ||
          (t >= ve.NUM_ZERO && t <= ve.NUM_MULTIPLY) ||
          (t >= ve.A && t <= ve.Z) ||
          (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
        )
          return !0;
        switch (t) {
          case ve.SPACE:
          case ve.QUESTION_MARK:
          case ve.NUM_PLUS:
          case ve.NUM_MINUS:
          case ve.NUM_PERIOD:
          case ve.NUM_DIVISION:
          case ve.SEMICOLON:
          case ve.DASH:
          case ve.EQUALS:
          case ve.COMMA:
          case ve.PERIOD:
          case ve.SLASH:
          case ve.APOSTROPHE:
          case ve.SINGLE_QUOTE:
          case ve.OPEN_SQUARE_BRACKET:
          case ve.BACKSLASH:
          case ve.CLOSE_SQUARE_BRACKET:
            return !0;
          default:
            return !1;
        }
      },
    },
    T1 = Ve(function (e, t) {
      var n = e.prefixCls,
        r = e.style,
        i = e.className,
        a = e.duration,
        s = a === void 0 ? 4.5 : a,
        c = e.eventKey,
        f = e.content,
        p = e.closable,
        h = e.closeIcon,
        m = h === void 0 ? 'x' : h,
        v = e.props,
        w = e.onClick,
        S = e.onNoticeClose,
        C = e.times,
        _ = Te(!1),
        E = ge(_, 2),
        I = E[0],
        N = E[1],
        D = function () {
          S(c);
        },
        z = function (P) {
          (P.key === 'Enter' || P.code === 'Enter' || P.keyCode === ve.ENTER) && D();
        };
      ke(
        function () {
          if (!I && s > 0) {
            var $ = setTimeout(function () {
              D();
            }, s * 1e3);
            return function () {
              clearTimeout($);
            };
          }
        },
        [s, I, C],
      );
      var u = ''.concat(n, '-notice');
      return y.createElement(
        'div',
        mt({}, v, {
          ref: t,
          className: Ce(u, i, $e({}, ''.concat(u, '-closable'), p)),
          style: r,
          onMouseEnter: function () {
            N(!0);
          },
          onMouseLeave: function () {
            N(!1);
          },
          onClick: w,
        }),
        y.createElement('div', { className: ''.concat(u, '-content') }, f),
        p &&
          y.createElement(
            'a',
            {
              tabIndex: 0,
              className: ''.concat(u, '-close'),
              onKeyDown: z,
              onClick: function (P) {
                P.preventDefault(), P.stopPropagation(), D();
              },
            },
            m,
          ),
      );
    });
  const Ud = T1;
  var P1 = Ve(function (e, t) {
      var n = e.prefixCls,
        r = n === void 0 ? 'rc-notification' : n,
        i = e.container,
        a = e.motion,
        s = e.maxCount,
        c = e.className,
        f = e.style,
        p = e.onAllRemoved,
        h = Te([]),
        m = ge(h, 2),
        v = m[0],
        w = m[1],
        S = function ($) {
          var P,
            R = v.find(function (A) {
              return A.key === $;
            });
          R == null || (P = R.onClose) === null || P === void 0 || P.call(R),
            w(function (A) {
              return A.filter(function (B) {
                return B.key !== $;
              });
            });
        };
      hn(t, function () {
        return {
          open: function ($) {
            w(function (P) {
              var R = ze(P),
                A = R.findIndex(function (M) {
                  return M.key === $.key;
                }),
                B = G({}, $);
              if (A >= 0) {
                var F;
                (B.times = (((F = P[A]) === null || F === void 0 ? void 0 : F.times) || 0) + 1), (R[A] = B);
              } else (B.times = 0), R.push(B);
              return s > 0 && R.length > s && (R = R.slice(-s)), R;
            });
          },
          close: function ($) {
            S($);
          },
          destroy: function () {
            w([]);
          },
        };
      });
      var C = Te({}),
        _ = ge(C, 2),
        E = _[0],
        I = _[1];
      ke(
        function () {
          var u = {};
          v.forEach(function ($) {
            var P = $.placement,
              R = P === void 0 ? 'topRight' : P;
            R && ((u[R] = u[R] || []), u[R].push($));
          }),
            Object.keys(E).forEach(function ($) {
              u[$] = u[$] || [];
            }),
            I(u);
        },
        [v],
      );
      var N = function ($) {
          I(function (P) {
            var R = G({}, P),
              A = R[$] || [];
            return A.length || delete R[$], R;
          });
        },
        D = le(!1);
      if (
        (ke(
          function () {
            Object.keys(E).length > 0 ? (D.current = !0) : D.current && (p == null || p(), (D.current = !1));
          },
          [E],
        ),
        !i)
      )
        return null;
      var z = Object.keys(E);
      return Ko(
        y.createElement(
          y.Fragment,
          null,
          z.map(function (u) {
            var $ = E[u],
              P = $.map(function (A) {
                return { config: A, key: A.key };
              }),
              R = typeof a == 'function' ? a(u) : a;
            return y.createElement(
              O1,
              mt(
                {
                  key: u,
                  className: Ce(r, ''.concat(r, '-').concat(u), c == null ? void 0 : c(u)),
                  style: f == null ? void 0 : f(u),
                  keys: P,
                  motionAppear: !0,
                },
                R,
                {
                  onAllRemoved: function () {
                    N(u);
                  },
                },
              ),
              function (A, B) {
                var F = A.config,
                  M = A.className,
                  j = A.style,
                  V = F.key,
                  U = F.times,
                  X = F.className,
                  Z = F.style;
                return y.createElement(
                  Ud,
                  mt({}, F, {
                    ref: B,
                    prefixCls: r,
                    className: Ce(M, X),
                    style: G(G({}, j), Z),
                    times: U,
                    key: V,
                    eventKey: V,
                    onNoticeClose: S,
                  }),
                );
              },
            );
          }),
        ),
        i,
      );
    }),
    N1 = ['getContainer', 'motion', 'prefixCls', 'maxCount', 'className', 'style', 'onAllRemoved'],
    R1 = function () {
      return document.body;
    },
    qd = 0;
  function M1() {
    for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return (
      n.forEach(function (i) {
        i &&
          Object.keys(i).forEach(function (a) {
            var s = i[a];
            s !== void 0 && (e[a] = s);
          });
      }),
      e
    );
  }
  function A1() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.getContainer,
      n = t === void 0 ? R1 : t,
      r = e.motion,
      i = e.prefixCls,
      a = e.maxCount,
      s = e.className,
      c = e.style,
      f = e.onAllRemoved,
      p = qt(e, N1),
      h = Te(),
      m = ge(h, 2),
      v = m[0],
      w = m[1],
      S = le(),
      C = y.createElement(P1, {
        container: v,
        ref: S,
        prefixCls: i,
        motion: r,
        maxCount: a,
        className: s,
        style: c,
        onAllRemoved: f,
      }),
      _ = Te([]),
      E = ge(_, 2),
      I = E[0],
      N = E[1],
      D = Fe(function () {
        return {
          open: function (u) {
            var $ = M1(p, u);
            ($.key === null || $.key === void 0) && (($.key = 'rc-notification-'.concat(qd)), (qd += 1)),
              N(function (P) {
                return [].concat(ze(P), [{ type: 'open', config: $ }]);
              });
          },
          close: function (u) {
            N(function ($) {
              return [].concat(ze($), [{ type: 'close', key: u }]);
            });
          },
          destroy: function () {
            N(function (u) {
              return [].concat(ze(u), [{ type: 'destroy' }]);
            });
          },
        };
      }, []);
    return (
      ke(function () {
        w(n());
      }),
      ke(
        function () {
          S.current &&
            I.length &&
            (I.forEach(function (z) {
              switch (z.type) {
                case 'open':
                  S.current.open(z.config);
                  break;
                case 'close':
                  S.current.close(z.key);
                  break;
                case 'destroy':
                  S.current.destroy();
                  break;
              }
            }),
            N([]));
        },
        [I],
      ),
      [D, C]
    );
  }
  const D1 = (e) => {
      const {
          componentCls: t,
          iconCls: n,
          boxShadow: r,
          colorText: i,
          colorBgElevated: a,
          colorSuccess: s,
          colorError: c,
          colorWarning: f,
          colorInfo: p,
          fontSizeLG: h,
          motionEaseInOutCirc: m,
          motionDurationSlow: v,
          marginXS: w,
          paddingXS: S,
          borderRadiusLG: C,
          zIndexPopup: _,
          messageNoticeContentPadding: E,
        } = e,
        I = new $t('MessageMoveIn', {
          '0%': { padding: 0, transform: 'translateY(-100%)', opacity: 0 },
          '100%': { padding: S, transform: 'translateY(0)', opacity: 1 },
        }),
        N = new $t('MessageMoveOut', {
          '0%': { maxHeight: e.height, padding: S, opacity: 1 },
          '100%': { maxHeight: 0, padding: 0, opacity: 0 },
        });
      return [
        {
          [t]: Object.assign(Object.assign({}, fr(e)), {
            color: i,
            position: 'fixed',
            top: w,
            width: '100%',
            pointerEvents: 'none',
            zIndex: _,
            [`${t}-move-up`]: { animationFillMode: 'forwards' },
            [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: { animationName: I, animationDuration: v, animationPlayState: 'paused', animationTimingFunction: m },
            [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: { animationPlayState: 'running' },
            [`${t}-move-up-leave`]: {
              animationName: N,
              animationDuration: v,
              animationPlayState: 'paused',
              animationTimingFunction: m,
            },
            [`${t}-move-up-leave${t}-move-up-leave-active`]: { animationPlayState: 'running' },
            '&-rtl': { direction: 'rtl', span: { direction: 'rtl' } },
          }),
        },
        {
          [`${t}-notice`]: {
            padding: S,
            textAlign: 'center',
            [`${t}-custom-content > ${n}`]: { verticalAlign: 'text-bottom', marginInlineEnd: w, fontSize: h },
            [`${t}-notice-content`]: {
              display: 'inline-block',
              padding: E,
              background: a,
              borderRadius: C,
              boxShadow: r,
              pointerEvents: 'all',
            },
            [`${t}-success > ${n}`]: { color: s },
            [`${t}-error > ${n}`]: { color: c },
            [`${t}-warning > ${n}`]: { color: f },
            [`
        ${t}-info > ${n},
        ${t}-loading > ${n}`]: { color: p },
          },
        },
        { [`${t}-notice-pure-panel`]: { padding: 0, textAlign: 'start' } },
      ];
    },
    Gd = jn(
      'Message',
      (e) => {
        const t = Yt(e, {
          messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`,
        });
        return [D1(t)];
      },
      (e) => ({ height: 150, zIndexPopup: e.zIndexPopupBase + 10 }),
    );
  function F1(e, t) {
    return { motionName: t ?? `${e}-move-up` };
  }
  function Wl(e) {
    let t;
    const n = new Promise((i) => {
        t = e(() => {
          i(!0);
        });
      }),
      r = () => {
        t == null || t();
      };
    return (r.then = (i, a) => n.then(i, a)), (r.promise = n), r;
  }
  var j1 = {
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
  const z1 = j1;
  var Kd = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: z1 }));
  };
  Kd.displayName = 'LoadingOutlined';
  const Xd = Ve(Kd);
  var L1 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const H1 = {
    info: y.createElement(c1, null),
    success: y.createElement(Zb, null),
    error: y.createElement(Fl, null),
    warning: y.createElement(a1, null),
    loading: y.createElement(Xd, null),
  };
  function Yd(e) {
    let { prefixCls: t, type: n, icon: r, children: i } = e;
    return y.createElement(
      'div',
      { className: Ce(`${t}-custom-content`, `${t}-${n}`) },
      r || H1[n],
      y.createElement('span', null, i),
    );
  }
  function k1(e) {
    const { prefixCls: t, className: n, type: r, icon: i, content: a } = e,
      s = L1(e, ['prefixCls', 'className', 'type', 'icon', 'content']),
      { getPrefixCls: c } = Be(At),
      f = t || c('message'),
      [, p] = Gd(f);
    return y.createElement(
      Ud,
      Object.assign({}, s, {
        prefixCls: f,
        className: Ce(n, p, `${f}-notice-pure-panel`),
        eventKey: 'pure',
        duration: null,
        content: y.createElement(Yd, { prefixCls: f, type: r, icon: i }, a),
      }),
    );
  }
  var B1 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const V1 = 8,
    W1 = 3,
    U1 = Ve((e, t) => {
      const {
          top: n,
          prefixCls: r,
          getContainer: i,
          maxCount: a,
          duration: s = W1,
          rtl: c,
          transitionName: f,
          onAllRemoved: p,
        } = e,
        { getPrefixCls: h, getPopupContainer: m } = Be(At),
        v = r || h('message'),
        [, w] = Gd(v),
        S = () => ({ left: '50%', transform: 'translateX(-50%)', top: n ?? V1 }),
        C = () => Ce(w, c ? `${v}-rtl` : ''),
        _ = () => F1(v, f),
        E = y.createElement(
          'span',
          { className: `${v}-close-x` },
          y.createElement(jl, { className: `${v}-close-icon` }),
        ),
        [I, N] = A1({
          prefixCls: v,
          style: S,
          className: C,
          motion: _,
          closable: !1,
          closeIcon: E,
          duration: s,
          getContainer: () => (i == null ? void 0 : i()) || (m == null ? void 0 : m()) || document.body,
          maxCount: a,
          onAllRemoved: p,
        });
      return hn(t, () => Object.assign(Object.assign({}, I), { prefixCls: v, hashId: w })), N;
    });
  let Qd = 0;
  function Jd(e) {
    const t = le(null);
    return [
      Fe(() => {
        const r = (f) => {
            var p;
            (p = t.current) === null || p === void 0 || p.close(f);
          },
          i = (f) => {
            if (!t.current) {
              const z = () => {};
              return (z.then = () => {}), z;
            }
            const { open: p, prefixCls: h, hashId: m } = t.current,
              v = `${h}-notice`,
              { content: w, icon: S, type: C, key: _, className: E, onClose: I } = f,
              N = B1(f, ['content', 'icon', 'type', 'key', 'className', 'onClose']);
            let D = _;
            return (
              D == null && ((Qd += 1), (D = `antd-message-${Qd}`)),
              Wl(
                (z) => (
                  p(
                    Object.assign(Object.assign({}, N), {
                      key: D,
                      content: y.createElement(Yd, { prefixCls: h, type: C, icon: S }, w),
                      placement: 'top',
                      className: Ce(C && `${v}-${C}`, m, E),
                      onClose: () => {
                        I == null || I(), z();
                      },
                    }),
                  ),
                  () => {
                    r(D);
                  }
                ),
              )
            );
          },
          s = {
            open: i,
            destroy: (f) => {
              var p;
              f !== void 0 ? r(f) : (p = t.current) === null || p === void 0 || p.destroy();
            },
          };
        return (
          ['info', 'success', 'warning', 'error', 'loading'].forEach((f) => {
            const p = (h, m, v) => {
              let w;
              h && typeof h == 'object' && 'content' in h ? (w = h) : (w = { content: h });
              let S, C;
              typeof m == 'function' ? (C = m) : ((S = m), (C = v));
              const _ = Object.assign(Object.assign({ onClose: C, duration: S }, w), { type: f });
              return i(_);
            };
            s[f] = p;
          }),
          s
        );
      }, []),
      y.createElement(U1, Object.assign({ key: 'message-holder' }, e, { ref: t })),
    ];
  }
  function q1(e) {
    return Jd(e);
  }
  var $o = G({}, Ts),
    G1 = $o.version,
    K1 = $o.render;
  $o.unmountComponentAtNode;
  var Ul;
  try {
    var X1 = Number((G1 || '').split('.')[0]);
    X1 >= 18 && (Ul = $o.createRoot);
  } catch {}
  function Zd(e) {
    var t = $o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    t && xt(t) === 'object' && (t.usingClientEntryPoint = e);
  }
  var ep = '__rc_react_root__';
  function Y1(e, t) {
    Zd(!0);
    var n = t[ep] || Ul(t);
    Zd(!1), n.render(e), (t[ep] = n);
  }
  function Q1(e, t) {
    K1(e, t);
  }
  function J1(e, t) {
    if (Ul) {
      Y1(e, t);
      return;
    }
    Q1(e, t);
  }
  const ql = (e, t) => {
      const n = Be(gl),
        r = Fe(() => {
          var a;
          const s = t || yo[e],
            c = (a = n == null ? void 0 : n[e]) !== null && a !== void 0 ? a : {};
          return Object.assign(Object.assign({}, typeof s == 'function' ? s() : s), c || {});
        }, [e, t, n]),
        i = Fe(() => {
          const a = n == null ? void 0 : n.locale;
          return n != null && n.exist && !a ? yo.locale : a;
        }, [n]);
      return [r, i];
    },
    Z1 = (e) => {
      const { componentCls: t } = e;
      return {
        [t]: {
          display: 'inline-flex',
          '&-block': { display: 'flex', width: '100%' },
          '&-vertical': { flexDirection: 'column' },
        },
      };
    },
    eS = (e) => {
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
    tp = jn('Space', (e) => [eS(e), Z1(e)]);
  var np =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const Va = y.createContext(null),
    tS = (e, t) => {
      const n = Be(Va),
        r = Fe(() => {
          if (!n) return '';
          const { compactDirection: i, isFirstItem: a, isLastItem: s } = n,
            c = i === 'vertical' ? '-vertical-' : '-';
          return Ce({
            [`${e}-compact${c}item`]: !0,
            [`${e}-compact${c}first-item`]: a,
            [`${e}-compact${c}last-item`]: s,
            [`${e}-compact${c}item-rtl`]: t === 'rtl',
          });
        }, [e, t, n]);
      return {
        compactSize: n == null ? void 0 : n.compactSize,
        compactDirection: n == null ? void 0 : n.compactDirection,
        compactItemClassnames: r,
      };
    },
    nS = (e) => {
      let { children: t } = e;
      return y.createElement(Va.Provider, { value: null }, t);
    },
    rS = (e) => {
      var { children: t } = e,
        n = np(e, ['children']);
      return y.createElement(Va.Provider, { value: n }, t);
    },
    iS = (e) => {
      const { getPrefixCls: t, direction: n } = Be(At),
        { size: r = 'middle', direction: i, block: a, prefixCls: s, className: c, rootClassName: f, children: p } = e,
        h = np(e, ['size', 'direction', 'block', 'prefixCls', 'className', 'rootClassName', 'children']),
        m = t('space-compact', s),
        [v, w] = tp(m),
        S = Ce(m, w, { [`${m}-rtl`]: n === 'rtl', [`${m}-block`]: a, [`${m}-vertical`]: i === 'vertical' }, c, f),
        C = Be(Va),
        _ = Cr(p),
        E = Fe(
          () =>
            _.map((I, N) => {
              const D = (I && I.key) || `${m}-item-${N}`;
              return y.createElement(
                rS,
                {
                  key: D,
                  compactSize: r,
                  compactDirection: i,
                  isFirstItem: N === 0 && (!C || (C == null ? void 0 : C.isFirstItem)),
                  isLastItem: N === _.length - 1 && (!C || (C == null ? void 0 : C.isLastItem)),
                },
                I,
              );
            }),
          [r, _, C],
        );
      return _.length === 0 ? null : v(y.createElement('div', Object.assign({ className: S }, h), E));
    };
  function oS(e, t, n) {
    const { focusElCls: r, focus: i, borderElCls: a } = n,
      s = a ? '> *' : '',
      c = ['hover', i ? 'focus' : null, 'active']
        .filter(Boolean)
        .map((f) => `&:${f} ${s}`)
        .join(',');
    return {
      [`&-item:not(${t}-last-item)`]: { marginInlineEnd: -e.lineWidth },
      '&-item': Object.assign(Object.assign({ [c]: { zIndex: 2 } }, r ? { [`&${r}`]: { zIndex: 2 } } : {}), {
        [`&[disabled] ${s}`]: { zIndex: 0 },
      }),
    };
  }
  function aS(e, t, n) {
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
  function rp(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { focus: !0 };
    const { componentCls: n } = e,
      r = `${n}-compact`;
    return { [r]: Object.assign(Object.assign({}, oS(e, r, t)), aS(n, r, t)) };
  }
  const sS = (e) => (e !== void 0 && (e === 'topLeft' || e === 'topRight') ? 'slide-down' : 'slide-up'),
    Wa = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`);
  var ip = y.createContext(null),
    Vt = Rn() ? Dr : ke,
    op = function (t, n) {
      var r = le(!0);
      Vt(function () {
        if (!r.current) return t();
      }, n),
        Vt(function () {
          return (
            (r.current = !1),
            function () {
              r.current = !0;
            }
          );
        }, []);
    },
    ap = [];
  function lS(e, t) {
    var n = Te(function () {
        if (!Rn()) return null;
        var S = document.createElement('div');
        return S;
      }),
      r = ge(n, 1),
      i = r[0],
      a = le(!1),
      s = Be(ip),
      c = Te(ap),
      f = ge(c, 2),
      p = f[0],
      h = f[1],
      m =
        s ||
        (a.current
          ? void 0
          : function (S) {
              h(function (C) {
                var _ = [S].concat(ze(C));
                return _;
              });
            });
    function v() {
      i.parentElement || document.body.appendChild(i), (a.current = !0);
    }
    function w() {
      var S;
      (S = i.parentElement) === null || S === void 0 || S.removeChild(i), (a.current = !1);
    }
    return (
      Vt(
        function () {
          return e ? (s ? s(v) : v()) : w(), w;
        },
        [e],
      ),
      Vt(
        function () {
          p.length &&
            (p.forEach(function (S) {
              return S();
            }),
            h(ap));
        },
        [p],
      ),
      [i, m]
    );
  }
  var Gl;
  function cS(e) {
    if (typeof document > 'u') return 0;
    if (e || Gl === void 0) {
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
      var a = t.offsetWidth;
      i === a && (a = n.clientWidth), document.body.removeChild(n), (Gl = i - a);
    }
    return Gl;
  }
  function uS() {
    return (
      document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) &&
      window.innerWidth > document.body.offsetWidth
    );
  }
  var fS = 'rc-util-locker-'.concat(Date.now()),
    sp = 0;
  function dS(e) {
    var t = !!e,
      n = Te(function () {
        return (sp += 1), ''.concat(fS, '_').concat(sp);
      }),
      r = ge(n, 1),
      i = r[0];
    Vt(
      function () {
        if (t) {
          var a = cS(),
            s = uS();
          Pi(
            `
html body {
  overflow-y: hidden;
  `.concat(
              s ? 'width: calc(100% - '.concat(a, 'px);') : '',
              `
}`,
            ),
            i,
          );
        } else ha(i);
        return function () {
          ha(i);
        };
      },
      [t, i],
    );
  }
  var lp = !1;
  function pS(e) {
    return typeof e == 'boolean' && (lp = e), lp;
  }
  var cp = function (t) {
      return t === !1
        ? !1
        : !Rn() || !t
        ? null
        : typeof t == 'string'
        ? document.querySelector(t)
        : typeof t == 'function'
        ? t()
        : t;
    },
    Kl = Ve(function (e, t) {
      var n = e.open,
        r = e.autoLock,
        i = e.getContainer;
      e.debug;
      var a = e.autoDestroy,
        s = a === void 0 ? !0 : a,
        c = e.children,
        f = Te(n),
        p = ge(f, 2),
        h = p[0],
        m = p[1],
        v = h || n;
      ke(
        function () {
          (s || n) && m(n);
        },
        [n, s],
      );
      var w = Te(function () {
          return cp(i);
        }),
        S = ge(w, 2),
        C = S[0],
        _ = S[1];
      ke(function () {
        var B = cp(i);
        _(B ?? null);
      });
      var E = lS(v && !C),
        I = ge(E, 2),
        N = I[0],
        D = I[1],
        z = C ?? N;
      dS(r && n && Rn() && (z === N || z === document.body));
      var u = null;
      if (c && sa(c) && t) {
        var $ = c;
        u = $.ref;
      }
      var P = As(u, t);
      if (!v || !Rn() || C === void 0) return null;
      var R = z === !1 || pS(),
        A = c;
      return t && (A = cn(c, { ref: P })), y.createElement(ip.Provider, { value: D }, R ? A : Ko(A, z));
    });
  function hS() {
    var e = G({}, Ts);
    return e.useId;
  }
  var up = 0;
  function gS(e) {
    var t = Te('ssr-id'),
      n = ge(t, 2),
      r = n[0],
      i = n[1],
      a = hS(),
      s = a == null ? void 0 : a();
    return (
      ke(function () {
        if (!a) {
          var c = up;
          (up += 1), i('rc_unique_'.concat(c));
        }
      }, []),
      e || s || r
    );
  }
  var mS = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    vS = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
    yS = ''
      .concat(mS, ' ')
      .concat(vS)
      .split(/[\s\n]+/),
    bS = 'aria-',
    SS = 'data-';
  function fp(e, t) {
    return e.indexOf(t) === 0;
  }
  function Ua(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      n;
    t === !1 ? (n = { aria: !0, data: !0, attr: !0 }) : t === !0 ? (n = { aria: !0 }) : (n = G({}, t));
    var r = {};
    return (
      Object.keys(e).forEach(function (i) {
        ((n.aria && (i === 'role' || fp(i, bS))) || (n.data && fp(i, SS)) || (n.attr && yS.includes(i))) &&
          (r[i] = e[i]);
      }),
      r
    );
  }
  const qa = y.createContext({}),
    CS = (e) => {
      let { children: t, status: n, override: r } = e;
      const i = Be(qa),
        a = Fe(() => {
          const s = Object.assign({}, i);
          return r && delete s.isFormItemInput, n && (delete s.status, delete s.hasFeedback, delete s.feedbackIcon), s;
        }, [n, r, i]);
      return y.createElement(qa.Provider, { value: a }, t);
    };
  var dp = function (t) {
      if (Rn() && window.document.documentElement) {
        var n = Array.isArray(t) ? t : [t],
          r = window.document.documentElement;
        return n.some(function (i) {
          return i in r.style;
        });
      }
      return !1;
    },
    xS = function (t, n) {
      if (!dp(t)) return !1;
      var r = document.createElement('div'),
        i = r.style[t];
      return (r.style[t] = n), r.style[t] !== i;
    };
  function pp(e, t) {
    return !Array.isArray(e) && t !== void 0 ? xS(e, t) : dp(e);
  }
  const wS = () => Rn() && window.document.documentElement;
  let Ga;
  const ES = () => {
      if (!wS()) return !1;
      if (Ga !== void 0) return Ga;
      const e = document.createElement('div');
      return (
        (e.style.display = 'flex'),
        (e.style.flexDirection = 'column'),
        (e.style.rowGap = '1px'),
        e.appendChild(document.createElement('div')),
        e.appendChild(document.createElement('div')),
        document.body.appendChild(e),
        (Ga = e.scrollHeight === 1),
        document.body.removeChild(e),
        Ga
      );
    },
    $S = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
    OS = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
    Xl = function (e, t, n, r) {
      const a = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? '&' : '';
      return {
        [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, $S(r)), { animationPlayState: 'paused' }),
        [`${a}${e}-leave`]: Object.assign(Object.assign({}, OS(r)), { animationPlayState: 'paused' }),
        [`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
        [`${a}${e}-leave${e}-leave-active`]: { animationName: n, animationPlayState: 'running', pointerEvents: 'none' },
      };
    },
    _S = new $t('antMoveDownIn', {
      '0%': { transform: 'translate3d(0, 100%, 0)', transformOrigin: '0 0', opacity: 0 },
      '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    }),
    IS = new $t('antMoveDownOut', {
      '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
      '100%': { transform: 'translate3d(0, 100%, 0)', transformOrigin: '0 0', opacity: 0 },
    }),
    TS = new $t('antMoveLeftIn', {
      '0%': { transform: 'translate3d(-100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
      '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    }),
    PS = new $t('antMoveLeftOut', {
      '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
      '100%': { transform: 'translate3d(-100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
    }),
    NS = new $t('antMoveRightIn', {
      '0%': { transform: 'translate3d(100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
      '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    }),
    RS = new $t('antMoveRightOut', {
      '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
      '100%': { transform: 'translate3d(100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
    }),
    MS = new $t('antMoveUpIn', {
      '0%': { transform: 'translate3d(0, -100%, 0)', transformOrigin: '0 0', opacity: 0 },
      '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    }),
    AS = new $t('antMoveUpOut', {
      '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
      '100%': { transform: 'translate3d(0, -100%, 0)', transformOrigin: '0 0', opacity: 0 },
    }),
    DS = {
      'move-up': { inKeyframes: MS, outKeyframes: AS },
      'move-down': { inKeyframes: _S, outKeyframes: IS },
      'move-left': { inKeyframes: TS, outKeyframes: PS },
      'move-right': { inKeyframes: NS, outKeyframes: RS },
    },
    hp = (e, t) => {
      const { antCls: n } = e,
        r = `${n}-${t}`,
        { inKeyframes: i, outKeyframes: a } = DS[t];
      return [
        Xl(r, i, a, e.motionDurationMid),
        {
          [`
        ${r}-enter,
        ${r}-appear
      `]: { opacity: 0, animationTimingFunction: e.motionEaseOutCirc },
          [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
        },
      ];
    },
    gp = new $t('antSlideUpIn', {
      '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
      '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
    }),
    mp = new $t('antSlideUpOut', {
      '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
      '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    }),
    vp = new $t('antSlideDownIn', {
      '0%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
      '100%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
    }),
    yp = new $t('antSlideDownOut', {
      '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
      '100%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
    }),
    FS = new $t('antSlideLeftIn', {
      '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
      '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
    }),
    jS = new $t('antSlideLeftOut', {
      '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
      '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    }),
    zS = new $t('antSlideRightIn', {
      '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
      '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
    }),
    LS = new $t('antSlideRightOut', {
      '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
      '100%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
    }),
    HS = {
      'slide-up': { inKeyframes: gp, outKeyframes: mp },
      'slide-down': { inKeyframes: vp, outKeyframes: yp },
      'slide-left': { inKeyframes: FS, outKeyframes: jS },
      'slide-right': { inKeyframes: zS, outKeyframes: LS },
    },
    bp = (e, t) => {
      const { antCls: n } = e,
        r = `${n}-${t}`,
        { inKeyframes: i, outKeyframes: a } = HS[t];
      return [
        Xl(r, i, a, e.motionDurationMid),
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
    kS = new $t('antZoomIn', {
      '0%': { transform: 'scale(0.2)', opacity: 0 },
      '100%': { transform: 'scale(1)', opacity: 1 },
    }),
    BS = new $t('antZoomOut', { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(0.2)', opacity: 0 } }),
    Sp = new $t('antZoomBigIn', {
      '0%': { transform: 'scale(0.8)', opacity: 0 },
      '100%': { transform: 'scale(1)', opacity: 1 },
    }),
    Cp = new $t('antZoomBigOut', { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(0.8)', opacity: 0 } }),
    VS = new $t('antZoomUpIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
    }),
    WS = new $t('antZoomUpOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
    }),
    US = new $t('antZoomLeftIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
    }),
    qS = new $t('antZoomLeftOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
    }),
    GS = new $t('antZoomRightIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
    }),
    KS = new $t('antZoomRightOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
    }),
    XS = new $t('antZoomDownIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
    }),
    YS = new $t('antZoomDownOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
    }),
    QS = {
      zoom: { inKeyframes: kS, outKeyframes: BS },
      'zoom-big': { inKeyframes: Sp, outKeyframes: Cp },
      'zoom-big-fast': { inKeyframes: Sp, outKeyframes: Cp },
      'zoom-left': { inKeyframes: US, outKeyframes: qS },
      'zoom-right': { inKeyframes: GS, outKeyframes: KS },
      'zoom-up': { inKeyframes: VS, outKeyframes: WS },
      'zoom-down': { inKeyframes: XS, outKeyframes: YS },
    },
    JS = (e, t) => {
      const { antCls: n } = e,
        r = `${n}-${t}`,
        { inKeyframes: i, outKeyframes: a } = QS[t];
      return [
        Xl(r, i, a, t === 'zoom-big-fast' ? e.motionDurationFast : e.motionDurationMid),
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
  function Wi(e) {
    var t = le();
    t.current = e;
    var n = rn(function () {
      for (var r, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
      return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(a));
    }, []);
    return n;
  }
  function Yl(e) {
    return e !== void 0;
  }
  function _r(e, t) {
    var n = t || {},
      r = n.defaultValue,
      i = n.value,
      a = n.onChange,
      s = n.postState,
      c = ui(function () {
        return Yl(i) ? i : Yl(r) ? (typeof r == 'function' ? r() : r) : typeof e == 'function' ? e() : e;
      }),
      f = ge(c, 2),
      p = f[0],
      h = f[1],
      m = i !== void 0 ? i : p,
      v = s ? s(m) : m,
      w = Wi(a),
      S = ui([m]),
      C = ge(S, 2),
      _ = C[0],
      E = C[1];
    op(
      function () {
        var N = _[0];
        p !== N && w(p, N);
      },
      [_],
    ),
      op(
        function () {
          Yl(i) || h(i);
        },
        [i],
      );
    var I = Wi(function (N, D) {
      h(N, D), E([m], D);
    });
    return [v, I];
  }
  const ZS = function () {
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
  var xp = y.createContext(null);
  function eC() {
    return Be(xp);
  }
  function tC() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
      t = Te(!1),
      n = ge(t, 2),
      r = n[0],
      i = n[1],
      a = le(null),
      s = function () {
        window.clearTimeout(a.current);
      };
    ke(function () {
      return s;
    }, []);
    var c = function (p, h) {
      s(),
        (a.current = window.setTimeout(function () {
          i(p), h && h();
        }, e));
    };
    return [r, c, s];
  }
  function wp() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250,
      t = le(null),
      n = le(null);
    ke(function () {
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
  function nC(e, t, n, r) {
    var i = le(null);
    (i.current = { open: t, triggerOpen: n, customizedTrigger: r }),
      ke(function () {
        function a(s) {
          var c;
          if (!((c = i.current) !== null && c !== void 0 && c.customizedTrigger)) {
            var f = s.target;
            f.shadowRoot && s.composed && (f = s.composedPath()[0] || f),
              i.current.open &&
                e()
                  .filter(function (p) {
                    return p;
                  })
                  .every(function (p) {
                    return !p.contains(f) && p !== f;
                  }) &&
                i.current.triggerOpen(!1);
          }
        }
        return (
          window.addEventListener('mousedown', a),
          function () {
            return window.removeEventListener('mousedown', a);
          }
        );
      }, []);
  }
  var rC = [
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
    Ui = void 0;
  function iC(e, t) {
    var n = e.prefixCls,
      r = e.invalidate,
      i = e.item,
      a = e.renderItem,
      s = e.responsive,
      c = e.responsiveDisabled,
      f = e.registerSize,
      p = e.itemKey,
      h = e.className,
      m = e.style,
      v = e.children,
      w = e.display,
      S = e.order,
      C = e.component,
      _ = C === void 0 ? 'div' : C,
      E = qt(e, rC),
      I = s && !w;
    function N(P) {
      f(p, P);
    }
    ke(function () {
      return function () {
        N(null);
      };
    }, []);
    var D = a && i !== Ui ? a(i) : v,
      z;
    r ||
      (z = {
        opacity: I ? 0 : 1,
        height: I ? 0 : Ui,
        overflowY: I ? 'hidden' : Ui,
        order: s ? S : Ui,
        pointerEvents: I ? 'none' : Ui,
        position: I ? 'absolute' : Ui,
      });
    var u = {};
    I && (u['aria-hidden'] = !0);
    var $ = y.createElement(_, mt({ className: Ce(!r && n, h), style: G(G({}, z), m) }, u, E, { ref: t }), D);
    return (
      s &&
        ($ = y.createElement(
          jr,
          {
            onResize: function (R) {
              var A = R.offsetWidth;
              N(A);
            },
            disabled: c,
          },
          $,
        )),
      $
    );
  }
  var Oo = Ve(iC);
  Oo.displayName = 'Item';
  function oC() {
    var e = ui({}),
      t = ge(e, 2),
      n = t[1],
      r = le([]),
      i = 0,
      a = 0;
    function s(c) {
      var f = i;
      (i += 1), r.current.length < f + 1 && (r.current[f] = c);
      var p = r.current[f];
      function h(m) {
        (r.current[f] = typeof m == 'function' ? m(r.current[f]) : m),
          In.cancel(a),
          (a = In(function () {
            n({}, !0);
          }));
      }
      return [p, h];
    }
    return s;
  }
  var aC = ['component'],
    sC = ['className'],
    lC = ['className'],
    cC = function (t, n) {
      var r = Be(Ka);
      if (!r) {
        var i = t.component,
          a = i === void 0 ? 'div' : i,
          s = qt(t, aC);
        return y.createElement(a, mt({}, s, { ref: n }));
      }
      var c = r.className,
        f = qt(r, sC),
        p = t.className,
        h = qt(t, lC);
      return y.createElement(
        Ka.Provider,
        { value: null },
        y.createElement(Oo, mt({ ref: n, className: Ce(c, p) }, f, h)),
      );
    },
    Ep = Ve(cC);
  Ep.displayName = 'RawItem';
  var uC = [
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
    Ka = y.createContext(null),
    $p = 'responsive',
    Op = 'invalidate';
  function fC(e) {
    return '+ '.concat(e.length, ' ...');
  }
  function dC(e, t) {
    var n = e.prefixCls,
      r = n === void 0 ? 'rc-overflow' : n,
      i = e.data,
      a = i === void 0 ? [] : i,
      s = e.renderItem,
      c = e.renderRawItem,
      f = e.itemKey,
      p = e.itemWidth,
      h = p === void 0 ? 10 : p,
      m = e.ssr,
      v = e.style,
      w = e.className,
      S = e.maxCount,
      C = e.renderRest,
      _ = e.renderRawRest,
      E = e.suffix,
      I = e.component,
      N = I === void 0 ? 'div' : I,
      D = e.itemComponent,
      z = e.onVisibleChange,
      u = qt(e, uC),
      $ = oC(),
      P = m === 'full',
      R = $(null),
      A = ge(R, 2),
      B = A[0],
      F = A[1],
      M = B || 0,
      j = $(new Map()),
      V = ge(j, 2),
      U = V[0],
      X = V[1],
      Z = $(0),
      ee = ge(Z, 2),
      fe = ee[0],
      de = ee[1],
      ye = $(0),
      J = ge(ye, 2),
      be = J[0],
      Se = J[1],
      me = $(0),
      pe = ge(me, 2),
      Oe = pe[0],
      Ee = pe[1],
      Ge = Te(null),
      He = ge(Ge, 2),
      Me = He[0],
      oe = He[1],
      Ne = Te(null),
      Ae = ge(Ne, 2),
      re = Ae[0],
      ae = Ae[1],
      se = Fe(
        function () {
          return re === null && P ? Number.MAX_SAFE_INTEGER : re || 0;
        },
        [re, B],
      ),
      De = Te(!1),
      Xe = ge(De, 2),
      St = Xe[0],
      Ot = Xe[1],
      wt = ''.concat(r, '-item'),
      ht = Math.max(fe, be),
      vt = S === $p,
      dt = a.length && vt,
      Gt = S === Op,
      _t = dt || (typeof S == 'number' && a.length > S),
      it = Fe(
        function () {
          var he = a;
          return (
            dt
              ? B === null && P
                ? (he = a)
                : (he = a.slice(0, Math.min(a.length, M / h)))
              : typeof S == 'number' && (he = a.slice(0, S)),
            he
          );
        },
        [a, h, B, S, dt],
      ),
      tt = Fe(
        function () {
          return dt ? a.slice(se + 1) : a.slice(it.length);
        },
        [a, it, dt, se],
      ),
      Kt = rn(
        function (he, xe) {
          var Ie;
          return typeof f == 'function'
            ? f(he)
            : (Ie = f && (he == null ? void 0 : he[f])) !== null && Ie !== void 0
            ? Ie
            : xe;
        },
        [f],
      ),
      jt = rn(
        s ||
          function (he) {
            return he;
          },
        [s],
      );
    function Le(he, xe, Ie) {
      (re === he && (xe === void 0 || xe === Me)) ||
        (ae(he), Ie || (Ot(he < a.length - 1), z == null || z(he)), xe !== void 0 && oe(xe));
    }
    function nt(he, xe) {
      F(xe.clientWidth);
    }
    function It(he, xe) {
      X(function (Ie) {
        var We = new Map(Ie);
        return xe === null ? We.delete(he) : We.set(he, xe), We;
      });
    }
    function pt(he, xe) {
      Se(xe), de(be);
    }
    function ot(he, xe) {
      Ee(xe);
    }
    function zt(he) {
      return U.get(Kt(it[he], he));
    }
    Vt(
      function () {
        if (M && ht && it) {
          var he = Oe,
            xe = it.length,
            Ie = xe - 1;
          if (!xe) {
            Le(0, null);
            return;
          }
          for (var We = 0; We < xe; We += 1) {
            var ft = zt(We);
            if ((P && (ft = ft || 0), ft === void 0)) {
              Le(We - 1, void 0, !0);
              break;
            }
            if (((he += ft), (Ie === 0 && he <= M) || (We === Ie - 1 && he + zt(Ie) <= M))) {
              Le(Ie, null);
              break;
            } else if (he + ht > M) {
              Le(We - 1, he - ft - Oe + be);
              break;
            }
          }
          E && zt(0) + Oe > M && oe(null);
        }
      },
      [M, U, be, Oe, Kt, it],
    );
    var Wt = St && !!tt.length,
      _e = {};
    Me !== null && dt && (_e = { position: 'absolute', left: Me, top: 0 });
    var je = { prefixCls: wt, responsive: dt, component: D, invalidate: Gt },
      gt = c
        ? function (he, xe) {
            var Ie = Kt(he, xe);
            return y.createElement(
              Ka.Provider,
              {
                key: Ie,
                value: G(G({}, je), {}, { order: xe, item: he, itemKey: Ie, registerSize: It, display: xe <= se }),
              },
              c(he, xe),
            );
          }
        : function (he, xe) {
            var Ie = Kt(he, xe);
            return y.createElement(
              Oo,
              mt({}, je, {
                order: xe,
                key: Ie,
                item: he,
                renderItem: jt,
                itemKey: Ie,
                registerSize: It,
                display: xe <= se,
              }),
            );
          },
      st,
      Ct = {
        order: Wt ? se : Number.MAX_SAFE_INTEGER,
        className: ''.concat(wt, '-rest'),
        registerSize: pt,
        display: Wt,
      };
    if (_) _ && (st = y.createElement(Ka.Provider, { value: G(G({}, je), Ct) }, _(tt)));
    else {
      var dn = C || fC;
      st = y.createElement(Oo, mt({}, je, Ct), typeof dn == 'function' ? dn(tt) : dn);
    }
    var Ut = y.createElement(
      N,
      mt({ className: Ce(!Gt && r, w), style: v, ref: t }, u),
      it.map(gt),
      _t ? st : null,
      E &&
        y.createElement(
          Oo,
          mt({}, je, {
            responsive: vt,
            responsiveDisabled: !dt,
            order: se,
            className: ''.concat(wt, '-suffix'),
            registerSize: ot,
            display: !0,
            style: _e,
          }),
          E,
        ),
    );
    return vt && (Ut = y.createElement(jr, { onResize: nt, disabled: !dt }, Ut)), Ut;
  }
  var _o = Ve(dC);
  (_o.displayName = 'Overflow'), (_o.Item = Ep), (_o.RESPONSIVE = $p), (_o.INVALIDATE = Op);
  var Xa = function (t) {
      var n = t.className,
        r = t.customizeIcon,
        i = t.customizeIconProps,
        a = t.onMouseDown,
        s = t.onClick,
        c = t.children,
        f;
      return (
        typeof r == 'function' ? (f = r(i)) : (f = r),
        y.createElement(
          'span',
          {
            className: n,
            onMouseDown: function (h) {
              h.preventDefault(), a && a(h);
            },
            style: { userSelect: 'none', WebkitUserSelect: 'none' },
            unselectable: 'on',
            onClick: s,
            'aria-hidden': !0,
          },
          f !== void 0
            ? f
            : y.createElement(
                'span',
                {
                  className: Ce(
                    n.split(/\s+/).map(function (p) {
                      return ''.concat(p, '-icon');
                    }),
                  ),
                },
                c,
              ),
        )
      );
    },
    pC = function (t, n) {
      var r,
        i,
        a = t.prefixCls,
        s = t.id,
        c = t.inputElement,
        f = t.disabled,
        p = t.tabIndex,
        h = t.autoFocus,
        m = t.autoComplete,
        v = t.editable,
        w = t.activeDescendantId,
        S = t.value,
        C = t.maxLength,
        _ = t.onKeyDown,
        E = t.onMouseDown,
        I = t.onChange,
        N = t.onPaste,
        D = t.onCompositionStart,
        z = t.onCompositionEnd,
        u = t.open,
        $ = t.attrs,
        P = c || y.createElement('input', null),
        R = P,
        A = R.ref,
        B = R.props,
        F = B.onKeyDown,
        M = B.onChange,
        j = B.onMouseDown,
        V = B.onCompositionStart,
        U = B.onCompositionEnd,
        X = B.style;
      return (
        'maxLength' in P.props,
        (P = cn(
          P,
          G(
            G(
              G({ type: 'search' }, B),
              {},
              {
                id: s,
                ref: Ii(n, A),
                disabled: f,
                tabIndex: p,
                autoComplete: m || 'off',
                autoFocus: h,
                className: Ce(
                  ''.concat(a, '-selection-search-input'),
                  (r = P) === null || r === void 0 || (i = r.props) === null || i === void 0 ? void 0 : i.className,
                ),
                role: 'combobox',
                'aria-expanded': u,
                'aria-haspopup': 'listbox',
                'aria-owns': ''.concat(s, '_list'),
                'aria-autocomplete': 'list',
                'aria-controls': ''.concat(s, '_list'),
                'aria-activedescendant': w,
              },
              $,
            ),
            {},
            {
              value: v ? S : '',
              maxLength: C,
              readOnly: !v,
              unselectable: v ? null : 'on',
              style: G(G({}, X), {}, { opacity: v ? null : 0 }),
              onKeyDown: function (ee) {
                _(ee), F && F(ee);
              },
              onMouseDown: function (ee) {
                E(ee), j && j(ee);
              },
              onChange: function (ee) {
                I(ee), M && M(ee);
              },
              onCompositionStart: function (ee) {
                D(ee), V && V(ee);
              },
              onCompositionEnd: function (ee) {
                z(ee), U && U(ee);
              },
              onPaste: N,
            },
          ),
        )),
        P
      );
    },
    Ql = Ve(pC);
  Ql.displayName = 'Input';
  function _p(e) {
    return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
  }
  var hC = typeof window < 'u' && window.document && window.document.documentElement,
    gC = hC;
  function mC(e) {
    return e != null;
  }
  function Ip(e) {
    return ['string', 'number'].includes(xt(e));
  }
  function Tp(e) {
    var t = void 0;
    return e && (Ip(e.title) ? (t = e.title.toString()) : Ip(e.label) && (t = e.label.toString())), t;
  }
  function vC(e, t) {
    gC ? Dr(e, t) : ke(e, t);
  }
  function yC(e) {
    var t;
    return (t = e.key) !== null && t !== void 0 ? t : e.value;
  }
  var Pp = function (t) {
      t.preventDefault(), t.stopPropagation();
    },
    bC = function (t) {
      var n = t.id,
        r = t.prefixCls,
        i = t.values,
        a = t.open,
        s = t.searchValue,
        c = t.autoClearSearchValue,
        f = t.inputRef,
        p = t.placeholder,
        h = t.disabled,
        m = t.mode,
        v = t.showSearch,
        w = t.autoFocus,
        S = t.autoComplete,
        C = t.activeDescendantId,
        _ = t.tabIndex,
        E = t.removeIcon,
        I = t.maxTagCount,
        N = t.maxTagTextLength,
        D = t.maxTagPlaceholder,
        z =
          D === void 0
            ? function (oe) {
                return '+ '.concat(oe.length, ' ...');
              }
            : D,
        u = t.tagRender,
        $ = t.onToggleOpen,
        P = t.onRemove,
        R = t.onInputChange,
        A = t.onInputPaste,
        B = t.onInputKeyDown,
        F = t.onInputMouseDown,
        M = t.onInputCompositionStart,
        j = t.onInputCompositionEnd,
        V = le(null),
        U = Te(0),
        X = ge(U, 2),
        Z = X[0],
        ee = X[1],
        fe = Te(!1),
        de = ge(fe, 2),
        ye = de[0],
        J = de[1],
        be = ''.concat(r, '-selection'),
        Se = a || (m === 'multiple' && c === !1) || m === 'tags' ? s : '',
        me = m === 'tags' || (m === 'multiple' && c === !1) || (v && (a || ye));
      vC(
        function () {
          ee(V.current.scrollWidth);
        },
        [Se],
      );
      function pe(oe, Ne, Ae, re, ae) {
        return y.createElement(
          'span',
          { className: Ce(''.concat(be, '-item'), $e({}, ''.concat(be, '-item-disabled'), Ae)), title: Tp(oe) },
          y.createElement('span', { className: ''.concat(be, '-item-content') }, Ne),
          re &&
            y.createElement(
              Xa,
              { className: ''.concat(be, '-item-remove'), onMouseDown: Pp, onClick: ae, customizeIcon: E },
              '×',
            ),
        );
      }
      function Oe(oe, Ne, Ae, re, ae) {
        var se = function (Xe) {
          Pp(Xe), $(!a);
        };
        return y.createElement(
          'span',
          { onMouseDown: se },
          u({ label: Ne, value: oe, disabled: Ae, closable: re, onClose: ae }),
        );
      }
      function Ee(oe) {
        var Ne = oe.disabled,
          Ae = oe.label,
          re = oe.value,
          ae = !h && !Ne,
          se = Ae;
        if (typeof N == 'number' && (typeof Ae == 'string' || typeof Ae == 'number')) {
          var De = String(se);
          De.length > N && (se = ''.concat(De.slice(0, N), '...'));
        }
        var Xe = function (Ot) {
          Ot && Ot.stopPropagation(), P(oe);
        };
        return typeof u == 'function' ? Oe(re, se, Ne, ae, Xe) : pe(oe, se, Ne, ae, Xe);
      }
      function Ge(oe) {
        var Ne = typeof z == 'function' ? z(oe) : z;
        return pe({ title: Ne }, Ne, !1);
      }
      var He = y.createElement(
          'div',
          {
            className: ''.concat(be, '-search'),
            style: { width: Z },
            onFocus: function () {
              J(!0);
            },
            onBlur: function () {
              J(!1);
            },
          },
          y.createElement(Ql, {
            ref: f,
            open: a,
            prefixCls: r,
            id: n,
            inputElement: null,
            disabled: h,
            autoFocus: w,
            autoComplete: S,
            editable: me,
            activeDescendantId: C,
            value: Se,
            onKeyDown: B,
            onMouseDown: F,
            onChange: R,
            onPaste: A,
            onCompositionStart: M,
            onCompositionEnd: j,
            tabIndex: _,
            attrs: Ua(t, !0),
          }),
          y.createElement('span', { ref: V, className: ''.concat(be, '-search-mirror'), 'aria-hidden': !0 }, Se, ' '),
        ),
        Me = y.createElement(_o, {
          prefixCls: ''.concat(be, '-overflow'),
          data: i,
          renderItem: Ee,
          renderRest: Ge,
          suffix: He,
          itemKey: yC,
          maxCount: I,
        });
      return y.createElement(
        y.Fragment,
        null,
        Me,
        !i.length && !Se && y.createElement('span', { className: ''.concat(be, '-placeholder') }, p),
      );
    },
    SC = function (t) {
      var n = t.inputElement,
        r = t.prefixCls,
        i = t.id,
        a = t.inputRef,
        s = t.disabled,
        c = t.autoFocus,
        f = t.autoComplete,
        p = t.activeDescendantId,
        h = t.mode,
        m = t.open,
        v = t.values,
        w = t.placeholder,
        S = t.tabIndex,
        C = t.showSearch,
        _ = t.searchValue,
        E = t.activeValue,
        I = t.maxLength,
        N = t.onInputKeyDown,
        D = t.onInputMouseDown,
        z = t.onInputChange,
        u = t.onInputPaste,
        $ = t.onInputCompositionStart,
        P = t.onInputCompositionEnd,
        R = Te(!1),
        A = ge(R, 2),
        B = A[0],
        F = A[1],
        M = h === 'combobox',
        j = M || C,
        V = v[0],
        U = _ || '';
      M && E && !B && (U = E),
        ke(
          function () {
            M && F(!1);
          },
          [M, E],
        );
      var X = h !== 'combobox' && !m && !C ? !1 : !!U,
        Z = Tp(V),
        ee = function () {
          if (V) return null;
          var de = X ? { visibility: 'hidden' } : void 0;
          return y.createElement('span', { className: ''.concat(r, '-selection-placeholder'), style: de }, w);
        };
      return y.createElement(
        y.Fragment,
        null,
        y.createElement(
          'span',
          { className: ''.concat(r, '-selection-search') },
          y.createElement(Ql, {
            ref: a,
            prefixCls: r,
            id: i,
            open: m,
            inputElement: n,
            disabled: s,
            autoFocus: c,
            autoComplete: f,
            editable: j,
            activeDescendantId: p,
            value: U,
            onKeyDown: N,
            onMouseDown: D,
            onChange: function (de) {
              F(!0), z(de);
            },
            onPaste: u,
            onCompositionStart: $,
            onCompositionEnd: P,
            tabIndex: S,
            attrs: Ua(t, !0),
            maxLength: M ? I : void 0,
          }),
        ),
        !M && V && !X && y.createElement('span', { className: ''.concat(r, '-selection-item'), title: Z }, V.label),
        ee(),
      );
    };
  function CC(e) {
    return ![
      ve.ESC,
      ve.SHIFT,
      ve.BACKSPACE,
      ve.TAB,
      ve.WIN_KEY,
      ve.ALT,
      ve.META,
      ve.WIN_KEY_RIGHT,
      ve.CTRL,
      ve.SEMICOLON,
      ve.EQUALS,
      ve.CAPS_LOCK,
      ve.CONTEXT_MENU,
      ve.F1,
      ve.F2,
      ve.F3,
      ve.F4,
      ve.F5,
      ve.F6,
      ve.F7,
      ve.F8,
      ve.F9,
      ve.F10,
      ve.F11,
      ve.F12,
    ].includes(e);
  }
  var xC = function (t, n) {
      var r = le(null),
        i = le(!1),
        a = t.prefixCls,
        s = t.open,
        c = t.mode,
        f = t.showSearch,
        p = t.tokenWithEnter,
        h = t.autoClearSearchValue,
        m = t.onSearch,
        v = t.onSearchSubmit,
        w = t.onToggleOpen,
        S = t.onInputKeyDown,
        C = t.domRef;
      hn(n, function () {
        return {
          focus: function () {
            r.current.focus();
          },
          blur: function () {
            r.current.blur();
          },
        };
      });
      var _ = wp(0),
        E = ge(_, 2),
        I = E[0],
        N = E[1],
        D = function (X) {
          var Z = X.which;
          (Z === ve.UP || Z === ve.DOWN) && X.preventDefault(),
            S && S(X),
            Z === ve.ENTER && c === 'tags' && !i.current && !s && (v == null || v(X.target.value)),
            CC(Z) && w(!0);
        },
        z = function () {
          N(!0);
        },
        u = le(null),
        $ = function (X) {
          m(X, !0, i.current) !== !1 && w(!0);
        },
        P = function () {
          i.current = !0;
        },
        R = function (X) {
          (i.current = !1), c !== 'combobox' && $(X.target.value);
        },
        A = function (X) {
          var Z = X.target.value;
          if (p && u.current && /[\r\n]/.test(u.current)) {
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
        M = function (X) {
          var Z = I();
          X.target !== r.current && !Z && c !== 'combobox' && X.preventDefault(),
            ((c !== 'combobox' && (!f || !Z)) || !s) && (s && h !== !1 && m('', !0, !1), w());
        },
        j = {
          inputRef: r,
          onInputKeyDown: D,
          onInputMouseDown: z,
          onInputChange: A,
          onInputPaste: B,
          onInputCompositionStart: P,
          onInputCompositionEnd: R,
        },
        V = c === 'multiple' || c === 'tags' ? y.createElement(bC, mt({}, t, j)) : y.createElement(SC, mt({}, t, j));
      return y.createElement('div', { ref: C, className: ''.concat(a, '-selector'), onClick: F, onMouseDown: M }, V);
    },
    Np = Ve(xC);
  Np.displayName = 'Selector';
  var Rp = y.createContext(null);
  function Mp(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
  }
  function wC(e, t, n) {
    var r = Mp(t ?? e),
      i = Mp(n ?? e);
    return [new Set(r), new Set(i)];
  }
  function EC() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      n = arguments.length > 2 ? arguments[2] : void 0;
    return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
  }
  function $C(e, t, n, r) {
    for (var i = n.points, a = Object.keys(e), s = 0; s < a.length; s += 1) {
      var c,
        f = a[s];
      if (EC((c = e[f]) === null || c === void 0 ? void 0 : c.points, i, r))
        return ''.concat(t, '-placement-').concat(f);
    }
    return '';
  }
  function Ap(e, t, n, r) {
    return t || (n ? { motionName: ''.concat(e, '-').concat(n) } : r ? { motionName: r } : null);
  }
  function Ya(e) {
    return e.ownerDocument.defaultView;
  }
  function Jl(e) {
    for (var t = [], n = e == null ? void 0 : e.parentElement, r = ['hidden', 'scroll', 'auto']; n; ) {
      var i = Ya(n).getComputedStyle(n),
        a = i.overflowX,
        s = i.overflowY;
      (r.includes(a) || r.includes(s)) && t.push(n), (n = n.parentElement);
    }
    return t;
  }
  function Qa(e) {
    return Number.isNaN(e) ? 1 : e;
  }
  function Dp() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    return [e[0], e[1]];
  }
  function qi(e, t) {
    var n = t[0],
      r = t[1],
      i,
      a;
    return (
      n === 't' ? (a = e.y) : n === 'b' ? (a = e.y + e.height) : (a = e.y + e.height / 2),
      r === 'l' ? (i = e.x) : r === 'r' ? (i = e.x + e.width) : (i = e.x + e.width / 2),
      { x: i, y: a }
    );
  }
  function Br(e, t) {
    var n = { t: 'b', b: 't', l: 'r', r: 'l' };
    return e
      .map(function (r, i) {
        return i === t ? n[r] || 'c' : r;
      })
      .join('');
  }
  function OC(e, t, n, r, i, a, s) {
    var c = Te({ ready: !1, offsetX: 0, offsetY: 0, arrowX: 0, arrowY: 0, scaleX: 1, scaleY: 1, align: i[r] || {} }),
      f = ge(c, 2),
      p = f[0],
      h = f[1],
      m = le(0),
      v = Fe(
        function () {
          return t ? Jl(t) : [];
        },
        [t],
      ),
      w = Wi(function () {
        if (t && n && e) {
          var _ = t,
            E = _.style.left,
            I = _.style.top,
            N = _.ownerDocument,
            D = Ya(_),
            z = i[r] || a || {};
          (_.style.left = '0'), (_.style.top = '0');
          var u;
          if (Array.isArray(n)) u = { x: n[0], y: n[1], width: 0, height: 0 };
          else {
            var $ = n.getBoundingClientRect();
            u = { x: $.x, y: $.y, width: $.width, height: $.height };
          }
          var P = _.getBoundingClientRect(),
            R = D.getComputedStyle(_),
            A = R.width,
            B = R.height,
            F = N.documentElement,
            M = F.clientWidth,
            j = F.clientHeight,
            V = F.scrollWidth,
            U = F.scrollHeight,
            X = F.scrollTop,
            Z = F.scrollLeft,
            ee = P.height,
            fe = P.width,
            de = u.height,
            ye = u.width,
            J =
              z.htmlRegion === 'scroll'
                ? { left: -Z, top: -X, right: V - Z, bottom: U - X }
                : { left: 0, top: 0, right: M, bottom: j };
          (v || []).forEach(function (Tn) {
            var an = Tn.getBoundingClientRect(),
              zn = Tn.offsetHeight,
              gi = Tn.clientHeight,
              hr = Tn.offsetWidth,
              mi = Tn.clientWidth,
              Xr = Qa(Math.round((an.width / hr) * 1e3) / 1e3),
              yr = Qa(Math.round((an.height / zn) * 1e3) / 1e3),
              Tr = (hr - mi) * Xr,
              Pr = (zn - gi) * yr,
              Yr = an.x + an.width - Tr,
              sn = an.y + an.height - Pr;
            (J.left = Math.max(J.left, an.left)),
              (J.top = Math.max(J.top, an.top)),
              (J.right = Math.min(J.right, Yr)),
              (J.bottom = Math.min(J.bottom, sn));
          }),
            (_.style.left = E),
            (_.style.top = I);
          var be = Qa(Math.round((fe / parseFloat(A)) * 1e3) / 1e3),
            Se = Qa(Math.round((ee / parseFloat(B)) * 1e3) / 1e3);
          if (be === 0 || Se === 0) return;
          var me = z.offset,
            pe = z.targetOffset,
            Oe = me || [],
            Ee = ge(Oe, 2),
            Ge = Ee[0],
            He = Ge === void 0 ? 0 : Ge,
            Me = Ee[1],
            oe = Me === void 0 ? 0 : Me,
            Ne = pe || [],
            Ae = ge(Ne, 2),
            re = Ae[0],
            ae = re === void 0 ? 0 : re,
            se = Ae[1],
            De = se === void 0 ? 0 : se;
          (u.x += ae), (u.y += De);
          var Xe = z.points || [],
            St = ge(Xe, 2),
            Ot = St[0],
            wt = St[1],
            ht = Dp(wt),
            vt = Dp(Ot),
            dt = qi(u, ht),
            Gt = qi(P, vt),
            _t = G({}, z),
            it = dt.x - Gt.x + He,
            tt = dt.y - Gt.y + oe,
            Kt = qi(u, ['t', 'l']),
            jt = qi(P, ['t', 'l']),
            Le = qi(u, ['b', 'r']),
            nt = qi(P, ['b', 'r']),
            It = z.overflow || {},
            pt = It.adjustX,
            ot = It.adjustY,
            zt = It.shiftX,
            Wt = It.shiftY,
            _e = function (an) {
              return typeof an == 'boolean' ? an : an >= 0;
            },
            je = P.y + tt,
            gt = je + ee,
            st = _e(ot),
            Ct = vt[0] === ht[0];
          st &&
            vt[0] === 't' &&
            gt > J.bottom &&
            (Ct ? (tt -= ee - de) : (tt = Kt.y - nt.y - oe), (_t.points = [Br(vt, 0), Br(ht, 0)])),
            st &&
              vt[0] === 'b' &&
              je < J.top &&
              (Ct ? (tt += ee - de) : (tt = Le.y - jt.y - oe), (_t.points = [Br(vt, 0), Br(ht, 0)]));
          var dn = P.x + it,
            Ut = dn + fe,
            he = _e(pt),
            xe = vt[1] === ht[1];
          he &&
            vt[1] === 'l' &&
            Ut > J.right &&
            (xe ? (it -= fe - ye) : (it = Kt.x - nt.x - He), (_t.points = [Br(vt, 1), Br(ht, 1)])),
            he &&
              vt[1] === 'r' &&
              dn < J.left &&
              (xe ? (it += fe - ye) : (it = Le.x - jt.x - He), (_t.points = [Br(vt, 1), Br(ht, 1)]));
          var Ie = zt === !0 ? 0 : zt;
          typeof Ie == 'number' &&
            (dn < J.left && ((it -= dn - J.left), u.x + ye < J.left + Ie && (it += u.x - J.left + ye - Ie)),
            Ut > J.right && ((it -= Ut - J.right), u.x > J.right - Ie && (it += u.x - J.right + Ie)));
          var We = Wt === !0 ? 0 : Wt;
          typeof We == 'number' &&
            (je < J.top && ((tt -= je - J.top), u.y + de < J.top + We && (tt += u.y - J.top + de - We)),
            gt > J.bottom && ((tt -= gt - J.bottom), u.y > J.bottom - We && (tt += u.y - J.bottom + We)));
          var ft = P.x + it,
            Tt = ft + fe,
            $n = P.y + tt,
            xn = $n + ee,
            Mn = u.x,
            Dt = Mn + ye,
            wn = u.y,
            Kn = wn + de,
            vn = Math.max(ft, Mn),
            pr = Math.min(Tt, Dt),
            On = (vn + pr) / 2,
            An = On - ft,
            qr = Math.max($n, wn),
            Gr = Math.min(xn, Kn),
            or = (qr + Gr) / 2,
            Kr = or - $n;
          s == null || s(t, _t),
            h({
              ready: !0,
              offsetX: it / be,
              offsetY: tt / Se,
              arrowX: An / be,
              arrowY: Kr / Se,
              scaleX: be,
              scaleY: Se,
              align: _t,
            });
        }
      }),
      S = function () {
        m.current += 1;
        var E = m.current;
        Promise.resolve().then(function () {
          m.current === E && w();
        });
      },
      C = function () {
        h(function (E) {
          return G(G({}, E), {}, { ready: !1 });
        });
      };
    return (
      Vt(C, [r]),
      Vt(
        function () {
          e || C();
        },
        [e],
      ),
      [p.ready, p.offsetX, p.offsetY, p.arrowX, p.arrowY, p.scaleX, p.scaleY, p.align, S]
    );
  }
  function _C(e, t, n, r) {
    Vt(
      function () {
        if (e && t && n) {
          let h = function () {
            r();
          };
          var i = t,
            a = n,
            s = Jl(i),
            c = Jl(a),
            f = Ya(a),
            p = new Set([f].concat(ze(s), ze(c)));
          return (
            p.forEach(function (m) {
              m.addEventListener('scroll', h, { passive: !0 });
            }),
            f.addEventListener('resize', h, { passive: !0 }),
            r(),
            function () {
              p.forEach(function (m) {
                m.removeEventListener('scroll', h), f.removeEventListener('resize', h);
              });
            }
          );
        }
      },
      [e, t, n],
    );
  }
  function IC(e) {
    var t = e.prefixCls,
      n = e.align,
      r = e.arrowX,
      i = r === void 0 ? 0 : r,
      a = e.arrowY,
      s = a === void 0 ? 0 : a,
      c = le();
    if (!n || !n.points) return null;
    var f = { position: 'absolute' };
    if (n.autoArrow !== !1) {
      var p = n.points[0],
        h = n.points[1],
        m = p[0],
        v = p[1],
        w = h[0],
        S = h[1];
      m === w || !['t', 'b'].includes(m) ? (f.top = s) : m === 't' ? (f.top = 0) : (f.bottom = 0),
        v === S || !['l', 'r'].includes(v) ? (f.left = i) : v === 'l' ? (f.left = 0) : (f.right = 0);
    }
    return y.createElement('div', { ref: c, className: ''.concat(t, '-arrow'), style: f });
  }
  function TC(e) {
    var t = e.prefixCls,
      n = e.open,
      r = e.zIndex,
      i = e.mask,
      a = e.motion;
    return i
      ? React.createElement(wo, mt({}, a, { motionAppear: !0, visible: n, removeOnLeave: !0 }), function (s) {
          var c = s.className;
          return React.createElement('div', { style: { zIndex: r }, className: Ce(''.concat(t, '-mask'), c) });
        })
      : null;
  }
  var PC = Ve(function (e, t) {
      var n = e.popup,
        r = e.className,
        i = e.prefixCls,
        a = e.style,
        s = e.target,
        c = e.onVisibleChanged,
        f = e.open,
        p = e.keepDom,
        h = e.onClick,
        m = e.mask,
        v = e.arrow,
        w = e.align,
        S = e.arrowX,
        C = e.arrowY,
        _ = e.motion,
        E = e.maskMotion,
        I = e.forceRender,
        N = e.getPopupContainer,
        D = e.autoDestroy,
        z = e.portal,
        u = e.zIndex,
        $ = e.onMouseEnter,
        P = e.onMouseLeave,
        R = e.ready,
        A = e.offsetX,
        B = e.offsetY,
        F = e.onAlign,
        M = e.onPrepare,
        j = e.stretch,
        V = e.targetWidth,
        U = e.targetHeight,
        X = typeof n == 'function' ? n() : n,
        Z = f || p,
        ee = (N == null ? void 0 : N.length) > 0,
        fe = Te(!N || !ee),
        de = ge(fe, 2),
        ye = de[0],
        J = de[1];
      if (
        (Vt(
          function () {
            !ye && ee && s && J(!0);
          },
          [ye, ee, s],
        ),
        !ye)
      )
        return null;
      var be = R || !f ? { left: A, top: B } : { left: '-1000vw', top: '-1000vh' },
        Se = {};
      return (
        j &&
          (j.includes('height') && U ? (Se.height = U) : j.includes('minHeight') && U && (Se.minHeight = U),
          j.includes('width') && V ? (Se.width = V) : j.includes('minWidth') && V && (Se.minWidth = V)),
        f || (Se.pointerEvents = 'none'),
        y.createElement(
          z,
          {
            open: I || Z,
            getContainer:
              N &&
              function () {
                return N(s);
              },
            autoDestroy: D,
          },
          y.createElement(TC, { prefixCls: i, open: f, zIndex: u, mask: m, motion: E }),
          y.createElement(jr, { onResize: F, disabled: !f }, function (me) {
            return y.createElement(
              wo,
              mt(
                {
                  motionAppear: !0,
                  motionEnter: !0,
                  motionLeave: !0,
                  removeOnLeave: !1,
                  forceRender: I,
                  leavedClassName: ''.concat(i, '-hidden'),
                },
                _,
                {
                  onAppearPrepare: M,
                  onEnterPrepare: M,
                  visible: f,
                  onVisibleChanged: function (Oe) {
                    var Ee;
                    _ == null || (Ee = _.onVisibleChanged) === null || Ee === void 0 || Ee.call(_, Oe), c(Oe);
                  },
                },
              ),
              function (pe, Oe) {
                var Ee = pe.className,
                  Ge = pe.style,
                  He = Ce(i, Ee, r);
                return y.createElement(
                  'div',
                  {
                    ref: Ii(me, t, Oe),
                    className: He,
                    style: G(G(G(G({}, be), Se), Ge), {}, { boxSizing: 'border-box', zIndex: u }, a),
                    onMouseEnter: $,
                    onMouseLeave: P,
                    onClick: h,
                  },
                  v && y.createElement(IC, { prefixCls: i, align: w, arrowX: S, arrowY: C }),
                  X,
                );
              },
            );
          }),
        )
      );
    }),
    NC = Ve(function (e, t) {
      var n = e.children,
        r = e.getTriggerDOMNode,
        i = sa(n),
        a = rn(
          function (c) {
            Ms(t, r ? r(c) : c);
          },
          [r],
        ),
        s = As(a, n.ref);
      return i ? cn(n, { ref: s }) : n;
    }),
    RC = [
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
  function MC() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Kl,
      t = Ve(function (n, r) {
        var i = n.prefixCls,
          a = i === void 0 ? 'rc-trigger-popup' : i,
          s = n.children,
          c = n.action,
          f = c === void 0 ? 'hover' : c,
          p = n.showAction,
          h = n.hideAction,
          m = n.popupVisible,
          v = n.defaultPopupVisible,
          w = n.onPopupVisibleChange,
          S = n.afterPopupVisibleChange,
          C = n.mouseEnterDelay,
          _ = n.mouseLeaveDelay,
          E = _ === void 0 ? 0.1 : _,
          I = n.focusDelay,
          N = n.blurDelay,
          D = n.mask,
          z = n.maskClosable,
          u = z === void 0 ? !0 : z,
          $ = n.getPopupContainer,
          P = n.forceRender,
          R = n.autoDestroy,
          A = n.destroyPopupOnHide,
          B = n.popup,
          F = n.popupClassName,
          M = n.popupStyle,
          j = n.popupPlacement,
          V = n.builtinPlacements,
          U = V === void 0 ? {} : V,
          X = n.popupAlign,
          Z = n.zIndex,
          ee = n.stretch,
          fe = n.getPopupClassNameFromAlign,
          de = n.alignPoint,
          ye = n.onPopupClick,
          J = n.onPopupAlign,
          be = n.arrow,
          Se = n.popupMotion,
          me = n.maskMotion,
          pe = n.popupTransitionName,
          Oe = n.popupAnimation,
          Ee = n.maskTransitionName,
          Ge = n.maskAnimation,
          He = n.className,
          Me = n.getTriggerDOMNode,
          oe = qt(n, RC),
          Ne = R || A || !1,
          Ae = le({}),
          re = Be(Rp),
          ae = Fe(
            function () {
              return {
                registerSubPopup: function (rt, Lt) {
                  (Ae.current[rt] = Lt), re == null || re.registerSubPopup(rt, Lt);
                },
              };
            },
            [re],
          ),
          se = gS(),
          De = Te(null),
          Xe = ge(De, 2),
          St = Xe[0],
          Ot = Xe[1],
          wt = rn(function (Je) {
            Je instanceof HTMLElement && Ot(Je), re == null || re.registerSubPopup(se, Je);
          }, []),
          ht = Te(null),
          vt = ge(ht, 2),
          dt = vt[0],
          Gt = vt[1],
          _t = rn(function (Je) {
            Je instanceof HTMLElement && Gt(Je);
          }, []),
          it = Oi.only(s),
          tt = (it == null ? void 0 : it.props) || {},
          Kt = {},
          jt = Wi(function (Je) {
            var rt = dt;
            return (
              (rt == null ? void 0 : rt.contains(Je)) ||
              Je === rt ||
              (St == null ? void 0 : St.contains(Je)) ||
              Je === St ||
              Object.values(Ae.current).some(function (Lt) {
                return Lt.contains(Je) || Je === Lt;
              })
            );
          }),
          Le = Ap(a, Se, Oe, pe),
          nt = Ap(a, me, Ge, Ee),
          It = _r(v || !1, { value: m }),
          pt = ge(It, 2),
          ot = pt[0],
          zt = pt[1],
          Wt = le(ot);
        Wt.current = ot;
        var _e = Wi(function (Je) {
            ot !== Je && (zt(Je), w == null || w(Je));
          }),
          je = le(),
          gt = function () {
            clearTimeout(je.current);
          },
          st = function (rt) {
            var Lt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            gt(),
              Lt === 0
                ? _e(rt)
                : (je.current = setTimeout(function () {
                    _e(rt);
                  }, Lt * 1e3));
          };
        ke(function () {
          return gt;
        }, []);
        var Ct = Te(!1),
          dn = ge(Ct, 2),
          Ut = dn[0],
          he = dn[1],
          xe = le(!0);
        Vt(
          function () {
            (!xe.current || ot) && he(!0), (xe.current = !0);
          },
          [ot],
        );
        var Ie = Te(null),
          We = ge(Ie, 2),
          ft = We[0],
          Tt = We[1],
          $n = Te([0, 0]),
          xn = ge($n, 2),
          Mn = xn[0],
          Dt = xn[1],
          wn = function (rt) {
            Dt([rt.clientX, rt.clientY]);
          },
          Kn = OC(ot, St, de ? Mn : dt, j, U, X, J),
          vn = ge(Kn, 9),
          pr = vn[0],
          On = vn[1],
          An = vn[2],
          qr = vn[3],
          Gr = vn[4],
          or = vn[5],
          Kr = vn[6],
          Tn = vn[7],
          an = vn[8],
          zn = Wi(function () {
            Ut || an();
          });
        _C(ot, dt, St, zn),
          Vt(
            function () {
              zn();
            },
            [Mn],
          ),
          Vt(
            function () {
              ot && !(U != null && U[j]) && zn();
            },
            [JSON.stringify(X)],
          );
        var gi = Fe(
          function () {
            var Je = $C(U, a, Tn, de);
            return Ce(Je, fe == null ? void 0 : fe(Tn));
          },
          [Tn, fe, U, a, de],
        );
        hn(r, function () {
          return { forceAlign: zn };
        });
        var hr = function (rt) {
            he(!1), an(), S == null || S(rt);
          },
          mi = function () {
            return new Promise(function (rt) {
              Tt(function () {
                return rt;
              });
            });
          };
        Vt(
          function () {
            ft && (an(), ft(), Tt(null));
          },
          [ft],
        );
        var Xr = Te(0),
          yr = ge(Xr, 2),
          Tr = yr[0],
          Pr = yr[1],
          Yr = Te(0),
          sn = ge(Yr, 2),
          gr = sn[0],
          br = sn[1],
          lt = function (rt, Lt) {
            if ((zn(), ee)) {
              var nn = Lt.getBoundingClientRect();
              Pr(nn.width), br(nn.height);
            }
          },
          et = wC(f, p, h),
          Qt = ge(et, 2),
          en = Qt[0],
          Pt = Qt[1],
          ln = function (rt, Lt, nn, Jt) {
            Kt[rt] = function (Ji) {
              var Zi;
              Jt == null || Jt(Ji), st(Lt, nn);
              for (var eo = arguments.length, ls = new Array(eo > 1 ? eo - 1 : 0), to = 1; to < eo; to++)
                ls[to - 1] = arguments[to];
              (Zi = tt[rt]) === null || Zi === void 0 || Zi.call.apply(Zi, [tt, Ji].concat(ls));
            };
          },
          Pn = en.has('click'),
          ar = Pt.has('click') || Pt.has('contextMenu');
        (Pn || ar) &&
          (Kt.onClick = function (Je) {
            var rt;
            Wt.current && ar ? st(!1) : !Wt.current && Pn && (wn(Je), st(!0));
            for (var Lt = arguments.length, nn = new Array(Lt > 1 ? Lt - 1 : 0), Jt = 1; Jt < Lt; Jt++)
              nn[Jt - 1] = arguments[Jt];
            (rt = tt.onClick) === null || rt === void 0 || rt.call.apply(rt, [tt, Je].concat(nn));
          }),
          ke(
            function () {
              if (ar && St && (!D || u)) {
                var Je = function (nn) {
                    var Jt = nn.target;
                    Wt.current && !jt(Jt) && st(!1);
                  },
                  rt = Ya(St);
                return (
                  rt.addEventListener('click', Je),
                  function () {
                    rt.removeEventListener('click', Je);
                  }
                );
              }
            },
            [ar, St, D, u],
          );
        var tn = en.has('hover'),
          mr = Pt.has('hover'),
          _n,
          vi;
        tn &&
          (ln('onMouseEnter', !0, C, function (Je) {
            wn(Je);
          }),
          (_n = function () {
            st(!0, C);
          }),
          de &&
            (Kt.onMouseMove = function (Je) {
              var rt;
              (rt = tt.onMouseMove) === null || rt === void 0 || rt.call(tt, Je);
            })),
          mr &&
            (ln('onMouseLeave', !1, E),
            (vi = function () {
              st(!1, E);
            })),
          en.has('focus') && ln('onFocus', !0, I),
          Pt.has('focus') && ln('onBlur', !1, N),
          en.has('contextMenu') &&
            (Kt.onContextMenu = function (Je) {
              var rt;
              wn(Je), st(!0), Je.preventDefault();
              for (var Lt = arguments.length, nn = new Array(Lt > 1 ? Lt - 1 : 0), Jt = 1; Jt < Lt; Jt++)
                nn[Jt - 1] = arguments[Jt];
              (rt = tt.onContextMenu) === null || rt === void 0 || rt.call.apply(rt, [tt, Je].concat(nn));
            }),
          He && (Kt.className = Ce(tt.className, He));
        var Ro = G(G({}, tt), Kt),
          Sr = {},
          Nr = [
            'onContextMenu',
            'onClick',
            'onMouseDown',
            'onTouchStart',
            'onMouseEnter',
            'onMouseLeave',
            'onFocus',
            'onBlur',
          ];
        Nr.forEach(function (Je) {
          oe[Je] &&
            (Sr[Je] = function () {
              for (var rt, Lt = arguments.length, nn = new Array(Lt), Jt = 0; Jt < Lt; Jt++) nn[Jt] = arguments[Jt];
              (rt = Ro[Je]) === null || rt === void 0 || rt.call.apply(rt, [Ro].concat(nn)), oe[Je].apply(oe, nn);
            });
        });
        var Mo = cn(it, G(G({}, Ro), Sr));
        return y.createElement(
          y.Fragment,
          null,
          y.createElement(
            jr,
            { disabled: !ot, ref: _t, onResize: lt },
            y.createElement(NC, { getTriggerDOMNode: Me }, Mo),
          ),
          y.createElement(
            Rp.Provider,
            { value: ae },
            y.createElement(PC, {
              portal: e,
              ref: wt,
              prefixCls: a,
              popup: B,
              className: Ce(F, gi),
              style: M,
              target: dt,
              onMouseEnter: _n,
              onMouseLeave: vi,
              zIndex: Z,
              open: ot,
              keepDom: Ut,
              onClick: ye,
              mask: D,
              motion: Le,
              maskMotion: nt,
              onVisibleChanged: hr,
              onPrepare: mi,
              forceRender: P,
              autoDestroy: Ne,
              getPopupContainer: $,
              align: Tn,
              arrow: be,
              ready: pr,
              offsetX: On,
              offsetY: An,
              arrowX: qr,
              arrowY: Gr,
              onAlign: zn,
              stretch: ee,
              targetWidth: Tr / or,
              targetHeight: gr / Kr,
            }),
          ),
        );
      });
    return t;
  }
  const Fp = MC(Kl);
  var AC = [
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
    DC = function (t) {
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
    FC = function (t, n) {
      var r = t.prefixCls;
      t.disabled;
      var i = t.visible,
        a = t.children,
        s = t.popupElement,
        c = t.containerWidth,
        f = t.animation,
        p = t.transitionName,
        h = t.dropdownStyle,
        m = t.dropdownClassName,
        v = t.direction,
        w = v === void 0 ? 'ltr' : v,
        S = t.placement,
        C = t.dropdownMatchSelectWidth,
        _ = t.dropdownRender,
        E = t.dropdownAlign,
        I = t.getPopupContainer,
        N = t.empty,
        D = t.getTriggerDOMNode,
        z = t.onPopupVisibleChange,
        u = t.onPopupMouseEnter,
        $ = qt(t, AC),
        P = ''.concat(r, '-dropdown'),
        R = s;
      _ && (R = _(s));
      var A = Fe(
          function () {
            return DC(C);
          },
          [C],
        ),
        B = f ? ''.concat(P, '-').concat(f) : p,
        F = le(null);
      hn(n, function () {
        return {
          getPopupElement: function () {
            return F.current;
          },
        };
      });
      var M = G({ minWidth: c }, h);
      return (
        typeof C == 'number' ? (M.width = C) : C && (M.width = c),
        y.createElement(
          Fp,
          mt({}, $, {
            showAction: z ? ['click'] : [],
            hideAction: z ? ['click'] : [],
            popupPlacement: S || (w === 'rtl' ? 'bottomRight' : 'bottomLeft'),
            builtinPlacements: A,
            prefixCls: P,
            popupTransitionName: B,
            popup: y.createElement('div', { ref: F, onMouseEnter: u }, R),
            popupAlign: E,
            popupVisible: i,
            getPopupContainer: I,
            popupClassName: Ce(m, $e({}, ''.concat(P, '-empty'), N)),
            popupStyle: M,
            getTriggerDOMNode: D,
            onPopupVisibleChange: z,
          }),
          a,
        )
      );
    },
    jp = Ve(FC);
  jp.displayName = 'SelectTrigger';
  function zp(e, t) {
    var n = e.key,
      r;
    return 'value' in e && (r = e.value), n ?? (r !== void 0 ? r : 'rc-index-key-'.concat(t));
  }
  function Lp(e, t) {
    var n = e || {},
      r = n.label,
      i = n.value,
      a = n.options;
    return { label: r || (t ? 'children' : 'label'), value: i || 'value', options: a || 'options' };
  }
  function jC(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = t.fieldNames,
      r = t.childrenAsData,
      i = [],
      a = Lp(n, !1),
      s = a.label,
      c = a.value,
      f = a.options;
    function p(h, m) {
      h.forEach(function (v) {
        var w = v[s];
        if (m || !(f in v)) {
          var S = v[c];
          i.push({ key: zp(v, i.length), groupOption: m, data: v, label: w, value: S });
        } else {
          var C = w;
          C === void 0 && r && (C = v.label),
            i.push({ key: zp(v, i.length), group: !0, data: v, label: C }),
            p(v[f], !0);
        }
      });
    }
    return p(e, !1), i;
  }
  function Zl(e) {
    var t = G({}, e);
    return (
      'props' in t ||
        Object.defineProperty(t, 'props', {
          get: function () {
            return (
              Zn(
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
  function zC(e, t) {
    if (!t || !t.length) return null;
    var n = !1;
    function r(a, s) {
      var c = Af(s),
        f = c[0],
        p = c.slice(1);
      if (!f) return [a];
      var h = a.split(f);
      return (
        (n = n || h.length > 1),
        h
          .reduce(function (m, v) {
            return [].concat(ze(m), ze(r(v, p)));
          }, [])
          .filter(function (m) {
            return m;
          })
      );
    }
    var i = r(e, t);
    return n ? i : null;
  }
  var LC = [
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
    HC = [
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
  function ec(e) {
    return e === 'tags' || e === 'multiple';
  }
  var kC = Ve(function (e, t) {
    var n,
      r,
      i = e.id,
      a = e.prefixCls,
      s = e.className,
      c = e.showSearch,
      f = e.tagRender,
      p = e.direction,
      h = e.omitDomProps,
      m = e.displayValues,
      v = e.onDisplayValuesChange,
      w = e.emptyOptions,
      S = e.notFoundContent,
      C = S === void 0 ? 'Not Found' : S,
      _ = e.onClear,
      E = e.mode,
      I = e.disabled,
      N = e.loading,
      D = e.getInputElement,
      z = e.getRawInputElement,
      u = e.open,
      $ = e.defaultOpen,
      P = e.onDropdownVisibleChange,
      R = e.activeValue,
      A = e.onActiveValueChange,
      B = e.activeDescendantId,
      F = e.searchValue,
      M = e.autoClearSearchValue,
      j = e.onSearch,
      V = e.onSearchSplit,
      U = e.tokenSeparators,
      X = e.allowClear,
      Z = e.showArrow,
      ee = e.inputIcon,
      fe = e.clearIcon,
      de = e.OptionList,
      ye = e.animation,
      J = e.transitionName,
      be = e.dropdownStyle,
      Se = e.dropdownClassName,
      me = e.dropdownMatchSelectWidth,
      pe = e.dropdownRender,
      Oe = e.dropdownAlign,
      Ee = e.placement,
      Ge = e.getPopupContainer,
      He = e.showAction,
      Me = He === void 0 ? [] : He,
      oe = e.onFocus,
      Ne = e.onBlur,
      Ae = e.onKeyUp,
      re = e.onKeyDown,
      ae = e.onMouseDown,
      se = qt(e, LC),
      De = ec(E),
      Xe = (c !== void 0 ? c : De) || E === 'combobox',
      St = G({}, se);
    HC.forEach(function (lt) {
      delete St[lt];
    }),
      h == null ||
        h.forEach(function (lt) {
          delete St[lt];
        });
    var Ot = Te(!1),
      wt = ge(Ot, 2),
      ht = wt[0],
      vt = wt[1];
    ke(function () {
      vt(ZS());
    }, []);
    var dt = le(null),
      Gt = le(null),
      _t = le(null),
      it = le(null),
      tt = le(null),
      Kt = tC(),
      jt = ge(Kt, 3),
      Le = jt[0],
      nt = jt[1],
      It = jt[2];
    hn(t, function () {
      var lt, et;
      return {
        focus: (lt = it.current) === null || lt === void 0 ? void 0 : lt.focus,
        blur: (et = it.current) === null || et === void 0 ? void 0 : et.blur,
        scrollTo: function (en) {
          var Pt;
          return (Pt = tt.current) === null || Pt === void 0 ? void 0 : Pt.scrollTo(en);
        },
      };
    });
    var pt = Fe(
        function () {
          var lt;
          if (E !== 'combobox') return F;
          var et = (lt = m[0]) === null || lt === void 0 ? void 0 : lt.value;
          return typeof et == 'string' || typeof et == 'number' ? String(et) : '';
        },
        [F, E, m],
      ),
      ot = (E === 'combobox' && typeof D == 'function' && D()) || null,
      zt = typeof z == 'function' && z(),
      Wt = As(Gt, zt == null || (n = zt.props) === null || n === void 0 ? void 0 : n.ref),
      _e = _r(void 0, { defaultValue: $, value: u }),
      je = ge(_e, 2),
      gt = je[0],
      st = je[1],
      Ct = gt,
      dn = !C && w;
    (I || (dn && Ct && E === 'combobox')) && (Ct = !1);
    var Ut = dn ? !1 : Ct,
      he = rn(
        function (lt) {
          var et = lt !== void 0 ? lt : !Ct;
          I || (st(et), Ct !== et && (P == null || P(et)));
        },
        [I, Ct, st, P],
      ),
      xe = Fe(
        function () {
          return (U || []).some(function (lt) {
            return [
              `
`,
              `\r
`,
            ].includes(lt);
          });
        },
        [U],
      ),
      Ie = function (et, Qt, en) {
        var Pt = !0,
          ln = et;
        A == null || A(null);
        var Pn = en ? null : zC(et, U);
        return (
          E !== 'combobox' && Pn && ((ln = ''), V == null || V(Pn), he(!1), (Pt = !1)),
          j && pt !== ln && j(ln, { source: Qt ? 'typing' : 'effect' }),
          Pt
        );
      },
      We = function (et) {
        !et || !et.trim() || j(et, { source: 'submit' });
      };
    ke(
      function () {
        !Ct && !De && E !== 'combobox' && Ie('', !1, !1);
      },
      [Ct],
    ),
      ke(
        function () {
          gt && I && st(!1), I && nt(!1);
        },
        [I],
      );
    var ft = wp(),
      Tt = ge(ft, 2),
      $n = Tt[0],
      xn = Tt[1],
      Mn = function (et) {
        var Qt = $n(),
          en = et.which;
        if (
          (en === ve.ENTER && (E !== 'combobox' && et.preventDefault(), Ct || he(!0)),
          xn(!!pt),
          en === ve.BACKSPACE && !Qt && De && !pt && m.length)
        ) {
          for (var Pt = ze(m), ln = null, Pn = Pt.length - 1; Pn >= 0; Pn -= 1) {
            var ar = Pt[Pn];
            if (!ar.disabled) {
              Pt.splice(Pn, 1), (ln = ar);
              break;
            }
          }
          ln && v(Pt, { type: 'remove', values: [ln] });
        }
        for (var tn = arguments.length, mr = new Array(tn > 1 ? tn - 1 : 0), _n = 1; _n < tn; _n++)
          mr[_n - 1] = arguments[_n];
        if (Ct && tt.current) {
          var vi;
          (vi = tt.current).onKeyDown.apply(vi, [et].concat(mr));
        }
        re == null || re.apply(void 0, [et].concat(mr));
      },
      Dt = function (et) {
        for (var Qt = arguments.length, en = new Array(Qt > 1 ? Qt - 1 : 0), Pt = 1; Pt < Qt; Pt++)
          en[Pt - 1] = arguments[Pt];
        if (Ct && tt.current) {
          var ln;
          (ln = tt.current).onKeyUp.apply(ln, [et].concat(en));
        }
        Ae == null || Ae.apply(void 0, [et].concat(en));
      },
      wn = function (et) {
        var Qt = m.filter(function (en) {
          return en !== et;
        });
        v(Qt, { type: 'remove', values: [et] });
      },
      Kn = le(!1),
      vn = function () {
        nt(!0),
          I || (oe && !Kn.current && oe.apply(void 0, arguments), Me.includes('focus') && he(!0)),
          (Kn.current = !0);
      },
      pr = function () {
        nt(!1, function () {
          (Kn.current = !1), he(!1);
        }),
          !I &&
            (pt && (E === 'tags' ? j(pt, { source: 'submit' }) : E === 'multiple' && j('', { source: 'blur' })),
            Ne && Ne.apply(void 0, arguments));
      },
      On = [];
    ke(function () {
      return function () {
        On.forEach(function (lt) {
          return clearTimeout(lt);
        }),
          On.splice(0, On.length);
      };
    }, []);
    var An = function (et) {
        var Qt,
          en = et.target,
          Pt = (Qt = _t.current) === null || Qt === void 0 ? void 0 : Qt.getPopupElement();
        if (Pt && Pt.contains(en)) {
          var ln = setTimeout(function () {
            var mr = On.indexOf(ln);
            if ((mr !== -1 && On.splice(mr, 1), It(), !ht && !Pt.contains(document.activeElement))) {
              var _n;
              (_n = it.current) === null || _n === void 0 || _n.focus();
            }
          });
          On.push(ln);
        }
        for (var Pn = arguments.length, ar = new Array(Pn > 1 ? Pn - 1 : 0), tn = 1; tn < Pn; tn++)
          ar[tn - 1] = arguments[tn];
        ae == null || ae.apply(void 0, [et].concat(ar));
      },
      qr = Te(null),
      Gr = ge(qr, 2),
      or = Gr[0],
      Kr = Gr[1],
      Tn = Te({}),
      an = ge(Tn, 2),
      zn = an[1];
    function gi() {
      zn({});
    }
    Vt(
      function () {
        if (Ut) {
          var lt,
            et = Math.ceil((lt = dt.current) === null || lt === void 0 ? void 0 : lt.offsetWidth);
          or !== et && !Number.isNaN(et) && Kr(et);
        }
      },
      [Ut],
    );
    var hr;
    zt &&
      (hr = function (et) {
        he(et);
      }),
      nC(
        function () {
          var lt;
          return [dt.current, (lt = _t.current) === null || lt === void 0 ? void 0 : lt.getPopupElement()];
        },
        Ut,
        he,
        !!zt,
      );
    var mi = Fe(
        function () {
          return G(
            G({}, e),
            {},
            { notFoundContent: C, open: Ct, triggerOpen: Ut, id: i, showSearch: Xe, multiple: De, toggleOpen: he },
          );
        },
        [e, C, Ut, Ct, i, Xe, De, he],
      ),
      Xr = Z !== void 0 ? Z : N || (!De && E !== 'combobox'),
      yr;
    Xr &&
      (yr = y.createElement(Xa, {
        className: Ce(''.concat(a, '-arrow'), $e({}, ''.concat(a, '-arrow-loading'), N)),
        customizeIcon: ee,
        customizeIconProps: { loading: N, searchValue: pt, open: Ct, focused: Le, showSearch: Xe },
      }));
    var Tr,
      Pr = function () {
        var et;
        _ == null || _(),
          (et = it.current) === null || et === void 0 || et.focus(),
          v([], { type: 'clear', values: m }),
          Ie('', !1, !1);
      };
    !I &&
      X &&
      (m.length || pt) &&
      !(E === 'combobox' && pt === '') &&
      (Tr = y.createElement(Xa, { className: ''.concat(a, '-clear'), onMouseDown: Pr, customizeIcon: fe }, '×'));
    var Yr = y.createElement(de, { ref: tt }),
      sn = Ce(
        a,
        s,
        ((r = {}),
        $e(r, ''.concat(a, '-focused'), Le),
        $e(r, ''.concat(a, '-multiple'), De),
        $e(r, ''.concat(a, '-single'), !De),
        $e(r, ''.concat(a, '-allow-clear'), X),
        $e(r, ''.concat(a, '-show-arrow'), Xr),
        $e(r, ''.concat(a, '-disabled'), I),
        $e(r, ''.concat(a, '-loading'), N),
        $e(r, ''.concat(a, '-open'), Ct),
        $e(r, ''.concat(a, '-customize-input'), ot),
        $e(r, ''.concat(a, '-show-search'), Xe),
        r),
      ),
      gr = y.createElement(
        jp,
        {
          ref: _t,
          disabled: I,
          prefixCls: a,
          visible: Ut,
          popupElement: Yr,
          containerWidth: or,
          animation: ye,
          transitionName: J,
          dropdownStyle: be,
          dropdownClassName: Se,
          direction: p,
          dropdownMatchSelectWidth: me,
          dropdownRender: pe,
          dropdownAlign: Oe,
          placement: Ee,
          getPopupContainer: Ge,
          empty: w,
          getTriggerDOMNode: function () {
            return Gt.current;
          },
          onPopupVisibleChange: hr,
          onPopupMouseEnter: gi,
        },
        zt
          ? cn(zt, { ref: Wt })
          : y.createElement(
              Np,
              mt({}, e, {
                domRef: Gt,
                prefixCls: a,
                inputElement: ot,
                ref: it,
                id: i,
                showSearch: Xe,
                autoClearSearchValue: M,
                mode: E,
                activeDescendantId: B,
                tagRender: f,
                values: m,
                open: Ct,
                onToggleOpen: he,
                activeValue: R,
                searchValue: pt,
                onSearch: Ie,
                onSearchSubmit: We,
                onRemove: wn,
                tokenWithEnter: xe,
              }),
            ),
      ),
      br;
    return (
      zt
        ? (br = gr)
        : (br = y.createElement(
            'div',
            mt({ className: sn }, St, {
              ref: dt,
              onMouseDown: An,
              onKeyDown: Mn,
              onKeyUp: Dt,
              onFocus: vn,
              onBlur: pr,
            }),
            Le &&
              !Ct &&
              y.createElement(
                'span',
                {
                  style: { width: 0, height: 0, position: 'absolute', overflow: 'hidden', opacity: 0 },
                  'aria-live': 'polite',
                },
                ''.concat(
                  m
                    .map(function (lt) {
                      var et = lt.label,
                        Qt = lt.value;
                      return ['number', 'string'].includes(xt(et)) ? et : Qt;
                    })
                    .join(', '),
                ),
              ),
            gr,
            yr,
            Tr,
          )),
      y.createElement(xp.Provider, { value: mi }, br)
    );
  });
  const BC = function (e, t) {
    var n = le({ values: new Map(), options: new Map() }),
      r = Fe(
        function () {
          var a = n.current,
            s = a.values,
            c = a.options,
            f = e.map(function (m) {
              if (m.label === void 0) {
                var v;
                return G(G({}, m), {}, { label: (v = s.get(m.value)) === null || v === void 0 ? void 0 : v.label });
              }
              return m;
            }),
            p = new Map(),
            h = new Map();
          return (
            f.forEach(function (m) {
              p.set(m.value, m), h.set(m.value, t.get(m.value) || c.get(m.value));
            }),
            (n.current.values = p),
            (n.current.options = h),
            f
          );
        },
        [e, t],
      ),
      i = rn(
        function (a) {
          return t.get(a) || n.current.options.get(a);
        },
        [t],
      );
    return [r, i];
  };
  function tc(e, t) {
    return _p(e).join('').toUpperCase().includes(t);
  }
  const VC = function (e, t, n, r, i) {
    return Fe(
      function () {
        if (!n || r === !1) return e;
        var a = t.options,
          s = t.label,
          c = t.value,
          f = [],
          p = typeof r == 'function',
          h = n.toUpperCase(),
          m = p
            ? r
            : function (w, S) {
                return i ? tc(S[i], h) : S[a] ? tc(S[s !== 'children' ? s : 'label'], h) : tc(S[c], h);
              },
          v = p
            ? function (w) {
                return Zl(w);
              }
            : function (w) {
                return w;
              };
        return (
          e.forEach(function (w) {
            if (w[a]) {
              var S = m(n, v(w));
              if (S) f.push(w);
              else {
                var C = w[a].filter(function (_) {
                  return m(n, v(_));
                });
                C.length && f.push(G(G({}, w), {}, $e({}, a, C)));
              }
              return;
            }
            m(n, v(w)) && f.push(w);
          }),
          f
        );
      },
      [e, r, i, n, t],
    );
  };
  var Hp = 0,
    WC = Rn();
  function UC() {
    var e;
    return WC ? ((e = Hp), (Hp += 1)) : (e = 'TEST_OR_SSR'), e;
  }
  function qC(e) {
    var t = Te(),
      n = ge(t, 2),
      r = n[0],
      i = n[1];
    return (
      ke(function () {
        i('rc_select_'.concat(UC()));
      }, []),
      e || r
    );
  }
  var GC = ['children', 'value'],
    KC = ['children'];
  function XC(e) {
    var t = e,
      n = t.key,
      r = t.props,
      i = r.children,
      a = r.value,
      s = qt(r, GC);
    return G({ key: n, value: a !== void 0 ? a : n, children: i }, s);
  }
  function kp(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return Cr(e)
      .map(function (n, r) {
        if (!kn(n) || !n.type) return null;
        var i = n,
          a = i.type.isSelectOptGroup,
          s = i.key,
          c = i.props,
          f = c.children,
          p = qt(c, KC);
        return t || !a
          ? XC(n)
          : G(G({ key: '__RC_SELECT_GRP__'.concat(s === null ? r : s, '__'), label: s }, p), {}, { options: kp(f) });
      })
      .filter(function (n) {
        return n;
      });
  }
  function YC(e, t, n, r, i) {
    return Fe(
      function () {
        var a = e,
          s = !e;
        s && (a = kp(t));
        var c = new Map(),
          f = new Map(),
          p = function (v, w, S) {
            S && typeof S == 'string' && v.set(w[S], w);
          };
        function h(m) {
          for (
            var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, w = 0;
            w < m.length;
            w += 1
          ) {
            var S = m[w];
            !S[n.options] || v ? (c.set(S[n.value], S), p(f, S, n.label), p(f, S, r), p(f, S, i)) : h(S[n.options], !0);
          }
        }
        return h(a), { options: a, valueOptions: c, labelOptions: f };
      },
      [e, t, n, r, i],
    );
  }
  function Bp(e) {
    var t = le();
    t.current = e;
    var n = rn(function () {
      return t.current.apply(t, arguments);
    }, []);
    return n;
  }
  var nc = function () {
    return null;
  };
  nc.isSelectOptGroup = !0;
  var rc = function () {
    return null;
  };
  rc.isSelectOption = !0;
  var Vp = Ve(function (e, t) {
    var n = e.height,
      r = e.offset,
      i = e.children,
      a = e.prefixCls,
      s = e.onInnerResize,
      c = e.innerProps,
      f = {},
      p = { display: 'flex', flexDirection: 'column' };
    return (
      r !== void 0 &&
        ((f = { height: n, position: 'relative', overflow: 'hidden' }),
        (p = G(
          G({}, p),
          {},
          { transform: 'translateY('.concat(r, 'px)'), position: 'absolute', left: 0, right: 0, top: 0 },
        ))),
      y.createElement(
        'div',
        { style: f },
        y.createElement(
          jr,
          {
            onResize: function (m) {
              var v = m.offsetHeight;
              v && s && s();
            },
          },
          y.createElement(
            'div',
            mt({ style: p, className: Ce($e({}, ''.concat(a, '-holder-inner'), a)), ref: t }, c),
            i,
          ),
        ),
      )
    );
  });
  Vp.displayName = 'Filler';
  var QC = 20;
  function Wp(e) {
    return 'touches' in e ? e.touches[0].pageY : e.pageY;
  }
  var JC = (function (e) {
    ti(n, e);
    var t = ni(n);
    function n() {
      var r;
      Dn(this, n);
      for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
      return (
        (r = t.call.apply(t, [this].concat(a))),
        (r.moveRaf = null),
        (r.scrollbarRef = y.createRef()),
        (r.thumbRef = y.createRef()),
        (r.visibleTimeout = null),
        (r.state = { dragging: !1, pageY: null, startTop: null, visible: !1 }),
        (r.delayHidden = function () {
          clearTimeout(r.visibleTimeout),
            r.setState({ visible: !0 }),
            (r.visibleTimeout = setTimeout(function () {
              r.setState({ visible: !1 });
            }, 2e3));
        }),
        (r.onScrollbarTouchStart = function (c) {
          c.preventDefault();
        }),
        (r.onContainerMouseDown = function (c) {
          c.stopPropagation(), c.preventDefault();
        }),
        (r.patchEvents = function () {
          window.addEventListener('mousemove', r.onMouseMove),
            window.addEventListener('mouseup', r.onMouseUp),
            r.thumbRef.current.addEventListener('touchmove', r.onMouseMove),
            r.thumbRef.current.addEventListener('touchend', r.onMouseUp);
        }),
        (r.removeEvents = function () {
          var c;
          window.removeEventListener('mousemove', r.onMouseMove),
            window.removeEventListener('mouseup', r.onMouseUp),
            (c = r.scrollbarRef.current) === null ||
              c === void 0 ||
              c.removeEventListener('touchstart', r.onScrollbarTouchStart),
            r.thumbRef.current &&
              (r.thumbRef.current.removeEventListener('touchstart', r.onMouseDown),
              r.thumbRef.current.removeEventListener('touchmove', r.onMouseMove),
              r.thumbRef.current.removeEventListener('touchend', r.onMouseUp)),
            In.cancel(r.moveRaf);
        }),
        (r.onMouseDown = function (c) {
          var f = r.props.onStartMove;
          r.setState({ dragging: !0, pageY: Wp(c), startTop: r.getTop() }),
            f(),
            r.patchEvents(),
            c.stopPropagation(),
            c.preventDefault();
        }),
        (r.onMouseMove = function (c) {
          var f = r.state,
            p = f.dragging,
            h = f.pageY,
            m = f.startTop,
            v = r.props.onScroll;
          if ((In.cancel(r.moveRaf), p)) {
            var w = Wp(c) - h,
              S = m + w,
              C = r.getEnableScrollRange(),
              _ = r.getEnableHeightRange(),
              E = _ ? S / _ : 0,
              I = Math.ceil(E * C);
            r.moveRaf = In(function () {
              v(I);
            });
          }
        }),
        (r.onMouseUp = function () {
          var c = r.props.onStopMove;
          r.setState({ dragging: !1 }), c(), r.removeEvents();
        }),
        (r.getSpinHeight = function () {
          var c = r.props,
            f = c.height,
            p = c.count,
            h = (f / p) * 10;
          return (h = Math.max(h, QC)), (h = Math.min(h, f / 2)), Math.floor(h);
        }),
        (r.getEnableScrollRange = function () {
          var c = r.props,
            f = c.scrollHeight,
            p = c.height;
          return f - p || 0;
        }),
        (r.getEnableHeightRange = function () {
          var c = r.props.height,
            f = r.getSpinHeight();
          return c - f || 0;
        }),
        (r.getTop = function () {
          var c = r.props.scrollTop,
            f = r.getEnableScrollRange(),
            p = r.getEnableHeightRange();
          if (c === 0 || f === 0) return 0;
          var h = c / f;
          return h * p;
        }),
        (r.showScroll = function () {
          var c = r.props,
            f = c.height,
            p = c.scrollHeight;
          return p > f;
        }),
        r
      );
    }
    return (
      Fn(n, [
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
              a = i.dragging,
              s = i.visible,
              c = this.props.prefixCls,
              f = this.getSpinHeight(),
              p = this.getTop(),
              h = this.showScroll(),
              m = h && s;
            return y.createElement(
              'div',
              {
                ref: this.scrollbarRef,
                className: Ce(''.concat(c, '-scrollbar'), $e({}, ''.concat(c, '-scrollbar-show'), h)),
                style: { width: 8, top: 0, bottom: 0, right: 0, position: 'absolute', display: m ? null : 'none' },
                onMouseDown: this.onContainerMouseDown,
                onMouseMove: this.delayHidden,
              },
              y.createElement('div', {
                ref: this.thumbRef,
                className: Ce(''.concat(c, '-scrollbar-thumb'), $e({}, ''.concat(c, '-scrollbar-thumb-moving'), a)),
                style: {
                  width: '100%',
                  height: f,
                  top: p,
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
  })(y.Component);
  function ZC(e) {
    var t = e.children,
      n = e.setRef,
      r = rn(function (i) {
        n(i);
      }, []);
    return cn(t, { ref: r });
  }
  function ex(e, t, n, r, i, a) {
    var s = a.getKey;
    return e.slice(t, n + 1).map(function (c, f) {
      var p = t + f,
        h = i(c, p, {}),
        m = s(c);
      return y.createElement(
        ZC,
        {
          key: m,
          setRef: function (w) {
            return r(c, w);
          },
        },
        h,
      );
    });
  }
  var tx = (function () {
    function e() {
      Dn(this, e), (this.maps = void 0), (this.maps = Object.create(null));
    }
    return (
      Fn(e, [
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
  function nx(e, t, n) {
    var r = Te(0),
      i = ge(r, 2),
      a = i[0],
      s = i[1],
      c = le(new Map()),
      f = le(new tx()),
      p = le();
    function h() {
      In.cancel(p.current);
    }
    function m() {
      h(),
        (p.current = In(function () {
          c.current.forEach(function (w, S) {
            if (w && w.offsetParent) {
              var C = la(w),
                _ = C.offsetHeight;
              f.current.get(S) !== _ && f.current.set(S, C.offsetHeight);
            }
          }),
            s(function (w) {
              return w + 1;
            });
        }));
    }
    function v(w, S) {
      var C = e(w),
        _ = c.current.get(C);
      S ? (c.current.set(C, S), m()) : c.current.delete(C), !_ != !S && (S ? t == null || t(w) : n == null || n(w));
    }
    return (
      ke(function () {
        return h;
      }, []),
      [v, m, f.current, a]
    );
  }
  function rx(e, t, n, r, i, a, s, c) {
    var f = le();
    return function (p) {
      if (p == null) {
        c();
        return;
      }
      if ((In.cancel(f.current), typeof p == 'number')) s(p);
      else if (p && xt(p) === 'object') {
        var h,
          m = p.align;
        'index' in p
          ? (h = p.index)
          : (h = t.findIndex(function (C) {
              return i(C) === p.key;
            }));
        var v = p.offset,
          w = v === void 0 ? 0 : v,
          S = function C(_, E) {
            if (!(_ < 0 || !e.current)) {
              var I = e.current.clientHeight,
                N = !1,
                D = E;
              if (I) {
                for (var z = E || m, u = 0, $ = 0, P = 0, R = Math.min(t.length, h), A = 0; A <= R; A += 1) {
                  var B = i(t[A]);
                  $ = u;
                  var F = n.get(B);
                  (P = $ + (F === void 0 ? r : F)), (u = P), A === h && F === void 0 && (N = !0);
                }
                var M = null;
                switch (z) {
                  case 'top':
                    M = $ - w;
                    break;
                  case 'bottom':
                    M = P - I + w;
                    break;
                  default: {
                    var j = e.current.scrollTop,
                      V = j + I;
                    $ < j ? (D = 'top') : P > V && (D = 'bottom');
                  }
                }
                M !== null && M !== e.current.scrollTop && s(M);
              }
              f.current = In(function () {
                N && a(), C(_ - 1, D);
              }, 2);
            }
          };
        S(3);
      }
    };
  }
  function ix(e, t, n) {
    var r = e.length,
      i = t.length,
      a,
      s;
    if (r === 0 && i === 0) return null;
    r < i ? ((a = e), (s = t)) : ((a = t), (s = e));
    var c = { __EMPTY_ITEM__: !0 };
    function f(S) {
      return S !== void 0 ? n(S) : c;
    }
    for (var p = null, h = Math.abs(r - i) !== 1, m = 0; m < s.length; m += 1) {
      var v = f(a[m]),
        w = f(s[m]);
      if (v !== w) {
        (p = m), (h = h || v !== f(s[m + 1]));
        break;
      }
    }
    return p === null ? null : { index: p, multiple: h };
  }
  function ox(e, t, n) {
    var r = Te(e),
      i = ge(r, 2),
      a = i[0],
      s = i[1],
      c = Te(null),
      f = ge(c, 2),
      p = f[0],
      h = f[1];
    return (
      ke(
        function () {
          var m = ix(a || [], e || [], t);
          (m == null ? void 0 : m.index) !== void 0 && (n == null || n(m.index), h(e[m.index])), s(e);
        },
        [e],
      ),
      [p]
    );
  }
  var ax = (typeof navigator > 'u' ? 'undefined' : xt(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
  const Up = function (e, t) {
    var n = le(!1),
      r = le(null);
    function i() {
      clearTimeout(r.current),
        (n.current = !0),
        (r.current = setTimeout(function () {
          n.current = !1;
        }, 50));
    }
    var a = le({ top: e, bottom: t });
    return (
      (a.current.top = e),
      (a.current.bottom = t),
      function (s) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          f = (s < 0 && a.current.top) || (s > 0 && a.current.bottom);
        return c && f ? (clearTimeout(r.current), (n.current = !1)) : (!f || n.current) && i(), !n.current && f;
      }
    );
  };
  function sx(e, t, n, r) {
    var i = le(0),
      a = le(null),
      s = le(null),
      c = le(!1),
      f = Up(t, n);
    function p(m) {
      if (e) {
        In.cancel(a.current);
        var v = m.deltaY;
        (i.current += v),
          (s.current = v),
          !f(v) &&
            (ax || m.preventDefault(),
            (a.current = In(function () {
              var w = c.current ? 10 : 1;
              r(i.current * w), (i.current = 0);
            })));
      }
    }
    function h(m) {
      e && (c.current = m.detail === s.current);
    }
    return [p, h];
  }
  var lx = 14 / 15;
  function cx(e, t, n) {
    var r = le(!1),
      i = le(0),
      a = le(null),
      s = le(null),
      c,
      f = function (v) {
        if (r.current) {
          var w = Math.ceil(v.touches[0].pageY),
            S = i.current - w;
          (i.current = w),
            n(S) && v.preventDefault(),
            clearInterval(s.current),
            (s.current = setInterval(function () {
              (S *= lx), (!n(S, !0) || Math.abs(S) <= 0.1) && clearInterval(s.current);
            }, 16));
        }
      },
      p = function () {
        (r.current = !1), c();
      },
      h = function (v) {
        c(),
          v.touches.length === 1 &&
            !r.current &&
            ((r.current = !0),
            (i.current = Math.ceil(v.touches[0].pageY)),
            (a.current = v.target),
            a.current.addEventListener('touchmove', f),
            a.current.addEventListener('touchend', p));
      };
    (c = function () {
      a.current && (a.current.removeEventListener('touchmove', f), a.current.removeEventListener('touchend', p));
    }),
      Vt(
        function () {
          return (
            e && t.current.addEventListener('touchstart', h),
            function () {
              var m;
              (m = t.current) === null || m === void 0 || m.removeEventListener('touchstart', h),
                c(),
                clearInterval(s.current);
            }
          );
        },
        [e],
      );
  }
  var ux = [
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
    fx = [],
    dx = { overflowY: 'auto', overflowAnchor: 'none' };
  function px(e, t) {
    var n = e.prefixCls,
      r = n === void 0 ? 'rc-virtual-list' : n,
      i = e.className,
      a = e.height,
      s = e.itemHeight,
      c = e.fullHeight,
      f = c === void 0 ? !0 : c,
      p = e.style,
      h = e.data,
      m = e.children,
      v = e.itemKey,
      w = e.virtual,
      S = e.component,
      C = S === void 0 ? 'div' : S,
      _ = e.onScroll,
      E = e.onVisibleChange,
      I = e.innerProps,
      N = qt(e, ux),
      D = !!(w !== !1 && a && s),
      z = D && h && s * h.length > a,
      u = Te(0),
      $ = ge(u, 2),
      P = $[0],
      R = $[1],
      A = Te(!1),
      B = ge(A, 2),
      F = B[0],
      M = B[1],
      j = Ce(r, i),
      V = h || fx,
      U = le(),
      X = le(),
      Z = le(),
      ee = rn(
        function (Le) {
          return typeof v == 'function' ? v(Le) : Le == null ? void 0 : Le[v];
        },
        [v],
      ),
      fe = { getKey: ee };
    function de(Le) {
      R(function (nt) {
        var It;
        typeof Le == 'function' ? (It = Le(nt)) : (It = Le);
        var pt = Xe(It);
        return (U.current.scrollTop = pt), pt;
      });
    }
    var ye = le({ start: 0, end: V.length }),
      J = le(),
      be = ox(V, ee),
      Se = ge(be, 1),
      me = Se[0];
    J.current = me;
    var pe = nx(ee, null, null),
      Oe = ge(pe, 4),
      Ee = Oe[0],
      Ge = Oe[1],
      He = Oe[2],
      Me = Oe[3],
      oe = Fe(
        function () {
          if (!D) return { scrollHeight: void 0, start: 0, end: V.length - 1, offset: void 0 };
          if (!z) {
            var Le;
            return {
              scrollHeight: ((Le = X.current) === null || Le === void 0 ? void 0 : Le.offsetHeight) || 0,
              start: 0,
              end: V.length - 1,
              offset: void 0,
            };
          }
          for (var nt = 0, It, pt, ot, zt = V.length, Wt = 0; Wt < zt; Wt += 1) {
            var _e = V[Wt],
              je = ee(_e),
              gt = He.get(je),
              st = nt + (gt === void 0 ? s : gt);
            st >= P && It === void 0 && ((It = Wt), (pt = nt)), st > P + a && ot === void 0 && (ot = Wt), (nt = st);
          }
          return (
            It === void 0 && ((It = 0), (pt = 0), (ot = Math.ceil(a / s))),
            ot === void 0 && (ot = V.length - 1),
            (ot = Math.min(ot + 1, V.length)),
            { scrollHeight: nt, start: It, end: ot, offset: pt }
          );
        },
        [z, D, P, V, Me, a],
      ),
      Ne = oe.scrollHeight,
      Ae = oe.start,
      re = oe.end,
      ae = oe.offset;
    (ye.current.start = Ae), (ye.current.end = re);
    var se = Ne - a,
      De = le(se);
    De.current = se;
    function Xe(Le) {
      var nt = Le;
      return Number.isNaN(De.current) || (nt = Math.min(nt, De.current)), (nt = Math.max(nt, 0)), nt;
    }
    var St = P <= 0,
      Ot = P >= se,
      wt = Up(St, Ot);
    function ht(Le) {
      var nt = Le;
      de(nt);
    }
    function vt(Le) {
      var nt = Le.currentTarget.scrollTop;
      nt !== P && de(nt), _ == null || _(Le);
    }
    var dt = sx(D, St, Ot, function (Le) {
        de(function (nt) {
          var It = nt + Le;
          return It;
        });
      }),
      Gt = ge(dt, 2),
      _t = Gt[0],
      it = Gt[1];
    cx(D, U, function (Le, nt) {
      return wt(Le, nt) ? !1 : (_t({ preventDefault: function () {}, deltaY: Le }), !0);
    }),
      Vt(
        function () {
          function Le(nt) {
            D && nt.preventDefault();
          }
          return (
            U.current.addEventListener('wheel', _t),
            U.current.addEventListener('DOMMouseScroll', it),
            U.current.addEventListener('MozMousePixelScroll', Le),
            function () {
              U.current &&
                (U.current.removeEventListener('wheel', _t),
                U.current.removeEventListener('DOMMouseScroll', it),
                U.current.removeEventListener('MozMousePixelScroll', Le));
            }
          );
        },
        [D],
      );
    var tt = rx(U, V, He, s, ee, Ge, de, function () {
      var Le;
      (Le = Z.current) === null || Le === void 0 || Le.delayHidden();
    });
    hn(t, function () {
      return { scrollTo: tt };
    }),
      Vt(
        function () {
          if (E) {
            var Le = V.slice(Ae, re + 1);
            E(Le, V);
          }
        },
        [Ae, re, V],
      );
    var Kt = ex(V, Ae, re, Ee, m, fe),
      jt = null;
    return (
      a &&
        ((jt = G($e({}, f ? 'height' : 'maxHeight', a), dx)),
        D && ((jt.overflowY = 'hidden'), F && (jt.pointerEvents = 'none'))),
      y.createElement(
        'div',
        mt({ style: G(G({}, p), {}, { position: 'relative' }), className: j }, N),
        y.createElement(
          C,
          { className: ''.concat(r, '-holder'), style: jt, ref: U, onScroll: vt },
          y.createElement(Vp, { prefixCls: r, height: Ne, offset: ae, onInnerResize: Ge, ref: X, innerProps: I }, Kt),
        ),
        D &&
          y.createElement(JC, {
            ref: Z,
            prefixCls: r,
            scrollTop: P,
            height: a,
            scrollHeight: Ne,
            count: V.length,
            onScroll: ht,
            onStartMove: function () {
              M(!0);
            },
            onStopMove: function () {
              M(!1);
            },
          }),
      )
    );
  }
  var qp = Ve(px);
  qp.displayName = 'List';
  var Gp = y.createContext(null);
  function hx() {
    return /(mac\sos|macintosh)/i.test(navigator.appVersion);
  }
  var gx = ['disabled', 'title', 'children', 'style', 'className'];
  function Kp(e) {
    return typeof e == 'string' || typeof e == 'number';
  }
  var mx = function (t, n) {
      var r = eC(),
        i = r.prefixCls,
        a = r.id,
        s = r.open,
        c = r.multiple,
        f = r.mode,
        p = r.searchValue,
        h = r.toggleOpen,
        m = r.notFoundContent,
        v = r.onPopupScroll,
        w = Be(Gp),
        S = w.flattenOptions,
        C = w.onActiveValue,
        _ = w.defaultActiveFirstOption,
        E = w.onSelect,
        I = w.menuItemSelectedIcon,
        N = w.rawValues,
        D = w.fieldNames,
        z = w.virtual,
        u = w.listHeight,
        $ = w.listItemHeight,
        P = ''.concat(i, '-item'),
        R = aa(
          function () {
            return S;
          },
          [s, S],
          function (me, pe) {
            return pe[0] && me[1] !== pe[1];
          },
        ),
        A = le(null),
        B = function (pe) {
          pe.preventDefault();
        },
        F = function (pe) {
          A.current && A.current.scrollTo(typeof pe == 'number' ? { index: pe } : pe);
        },
        M = function (pe) {
          for (
            var Oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, Ee = R.length, Ge = 0;
            Ge < Ee;
            Ge += 1
          ) {
            var He = (pe + Ge * Oe + Ee) % Ee,
              Me = R[He],
              oe = Me.group,
              Ne = Me.data;
            if (!oe && !Ne.disabled) return He;
          }
          return -1;
        },
        j = Te(function () {
          return M(0);
        }),
        V = ge(j, 2),
        U = V[0],
        X = V[1],
        Z = function (pe) {
          var Oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          X(pe);
          var Ee = { source: Oe ? 'keyboard' : 'mouse' },
            Ge = R[pe];
          if (!Ge) {
            C(null, -1, Ee);
            return;
          }
          C(Ge.value, pe, Ee);
        };
      ke(
        function () {
          Z(_ !== !1 ? M(0) : -1);
        },
        [R.length, p],
      );
      var ee = rn(
        function (me) {
          return N.has(me) && f !== 'combobox';
        },
        [f, ze(N).toString(), N.size],
      );
      ke(
        function () {
          var me = setTimeout(function () {
            if (!c && s && N.size === 1) {
              var Oe = Array.from(N)[0],
                Ee = R.findIndex(function (Ge) {
                  var He = Ge.data;
                  return He.value === Oe;
                });
              Ee !== -1 && (Z(Ee), F(Ee));
            }
          });
          if (s) {
            var pe;
            (pe = A.current) === null || pe === void 0 || pe.scrollTo(void 0);
          }
          return function () {
            return clearTimeout(me);
          };
        },
        [s, p, S.length],
      );
      var fe = function (pe) {
        pe !== void 0 && E(pe, { selected: !N.has(pe) }), c || h(!1);
      };
      if (
        (hn(n, function () {
          return {
            onKeyDown: function (pe) {
              var Oe = pe.which,
                Ee = pe.ctrlKey;
              switch (Oe) {
                case ve.N:
                case ve.P:
                case ve.UP:
                case ve.DOWN: {
                  var Ge = 0;
                  if (
                    (Oe === ve.UP
                      ? (Ge = -1)
                      : Oe === ve.DOWN
                      ? (Ge = 1)
                      : hx() && Ee && (Oe === ve.N ? (Ge = 1) : Oe === ve.P && (Ge = -1)),
                    Ge !== 0)
                  ) {
                    var He = M(U + Ge, Ge);
                    F(He), Z(He, !0);
                  }
                  break;
                }
                case ve.ENTER: {
                  var Me = R[U];
                  Me && !Me.data.disabled ? fe(Me.value) : fe(void 0), s && pe.preventDefault();
                  break;
                }
                case ve.ESC:
                  h(!1), s && pe.stopPropagation();
              }
            },
            onKeyUp: function () {},
            scrollTo: function (pe) {
              F(pe);
            },
          };
        }),
        R.length === 0)
      )
        return y.createElement(
          'div',
          { role: 'listbox', id: ''.concat(a, '_list'), className: ''.concat(P, '-empty'), onMouseDown: B },
          m,
        );
      var de = Object.keys(D).map(function (me) {
          return D[me];
        }),
        ye = function (pe) {
          return pe.label;
        };
      function J(me, pe) {
        var Oe = me.group;
        return { role: Oe ? 'presentation' : 'option', id: ''.concat(a, '_list_').concat(pe) };
      }
      var be = function (pe) {
          var Oe = R[pe];
          if (!Oe) return null;
          var Ee = Oe.data || {},
            Ge = Ee.value,
            He = Oe.group,
            Me = Ua(Ee, !0),
            oe = ye(Oe);
          return Oe
            ? y.createElement(
                'div',
                mt({ 'aria-label': typeof oe == 'string' && !He ? oe : null }, Me, { key: pe }, J(Oe, pe), {
                  'aria-selected': ee(Ge),
                }),
                Ge,
              )
            : null;
        },
        Se = { role: 'listbox', id: ''.concat(a, '_list') };
      return y.createElement(
        y.Fragment,
        null,
        z &&
          y.createElement(
            'div',
            mt({}, Se, { style: { height: 0, width: 0, overflow: 'hidden' } }),
            be(U - 1),
            be(U),
            be(U + 1),
          ),
        y.createElement(
          qp,
          {
            itemKey: 'key',
            ref: A,
            data: R,
            height: u,
            itemHeight: $,
            fullHeight: !1,
            onMouseDown: B,
            onScroll: v,
            virtual: z,
            innerProps: z ? null : Se,
          },
          function (me, pe) {
            var Oe,
              Ee = me.group,
              Ge = me.groupOption,
              He = me.data,
              Me = me.label,
              oe = me.value,
              Ne = He.key;
            if (Ee) {
              var Ae,
                re = (Ae = He.title) !== null && Ae !== void 0 ? Ae : Kp(Me) ? Me.toString() : void 0;
              return y.createElement(
                'div',
                { className: Ce(P, ''.concat(P, '-group')), title: re },
                Me !== void 0 ? Me : Ne,
              );
            }
            var ae = He.disabled,
              se = He.title;
            He.children;
            var De = He.style,
              Xe = He.className,
              St = qt(He, gx),
              Ot = oo(St, de),
              wt = ee(oe),
              ht = ''.concat(P, '-option'),
              vt = Ce(
                P,
                ht,
                Xe,
                ((Oe = {}),
                $e(Oe, ''.concat(ht, '-grouped'), Ge),
                $e(Oe, ''.concat(ht, '-active'), U === pe && !ae),
                $e(Oe, ''.concat(ht, '-disabled'), ae),
                $e(Oe, ''.concat(ht, '-selected'), wt),
                Oe),
              ),
              dt = ye(me),
              Gt = !I || typeof I == 'function' || wt,
              _t = typeof dt == 'number' ? dt : dt || oe,
              it = Kp(_t) ? _t.toString() : void 0;
            return (
              se !== void 0 && (it = se),
              y.createElement(
                'div',
                mt({}, Ua(Ot), z ? {} : J(me, pe), {
                  'aria-selected': wt,
                  className: vt,
                  title: it,
                  onMouseMove: function () {
                    U === pe || ae || Z(pe);
                  },
                  onClick: function () {
                    ae || fe(oe);
                  },
                  style: De,
                }),
                y.createElement('div', { className: ''.concat(ht, '-content') }, _t),
                kn(I) || wt,
                Gt &&
                  y.createElement(
                    Xa,
                    {
                      className: ''.concat(P, '-option-state'),
                      customizeIcon: I,
                      customizeIconProps: { isSelected: wt },
                    },
                    wt ? '✓' : null,
                  ),
              )
            );
          },
        ),
      );
    },
    Xp = Ve(mx);
  Xp.displayName = 'OptionList';
  var vx = [
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
    yx = ['inputValue'];
  function bx(e) {
    return !e || xt(e) !== 'object';
  }
  var Sx = Ve(function (e, t) {
      var n = e.id,
        r = e.mode,
        i = e.prefixCls,
        a = i === void 0 ? 'rc-select' : i,
        s = e.backfill,
        c = e.fieldNames,
        f = e.inputValue,
        p = e.searchValue,
        h = e.onSearch,
        m = e.autoClearSearchValue,
        v = m === void 0 ? !0 : m,
        w = e.onSelect,
        S = e.onDeselect,
        C = e.dropdownMatchSelectWidth,
        _ = C === void 0 ? !0 : C,
        E = e.filterOption,
        I = e.filterSort,
        N = e.optionFilterProp,
        D = e.optionLabelProp,
        z = e.options,
        u = e.children,
        $ = e.defaultActiveFirstOption,
        P = e.menuItemSelectedIcon,
        R = e.virtual,
        A = e.listHeight,
        B = A === void 0 ? 200 : A,
        F = e.listItemHeight,
        M = F === void 0 ? 20 : F,
        j = e.value,
        V = e.defaultValue,
        U = e.labelInValue,
        X = e.onChange,
        Z = qt(e, vx),
        ee = qC(n),
        fe = ec(r),
        de = !!(!z && u),
        ye = Fe(
          function () {
            return E === void 0 && r === 'combobox' ? !1 : E;
          },
          [E, r],
        ),
        J = Fe(
          function () {
            return Lp(c, de);
          },
          [JSON.stringify(c), de],
        ),
        be = _r('', {
          value: p !== void 0 ? p : f,
          postState: function (xe) {
            return xe || '';
          },
        }),
        Se = ge(be, 2),
        me = Se[0],
        pe = Se[1],
        Oe = YC(z, u, J, N, D),
        Ee = Oe.valueOptions,
        Ge = Oe.labelOptions,
        He = Oe.options,
        Me = rn(
          function (he) {
            var xe = _p(he);
            return xe.map(function (Ie) {
              var We, ft, Tt, $n, xn;
              if (bx(Ie)) We = Ie;
              else {
                var Mn;
                (Tt = Ie.key), (ft = Ie.label), (We = (Mn = Ie.value) !== null && Mn !== void 0 ? Mn : Tt);
              }
              var Dt = Ee.get(We);
              if (Dt) {
                var wn;
                ft === void 0 && (ft = Dt == null ? void 0 : Dt[D || J.label]),
                  Tt === void 0 && (Tt = (wn = Dt == null ? void 0 : Dt.key) !== null && wn !== void 0 ? wn : We),
                  ($n = Dt == null ? void 0 : Dt.disabled),
                  (xn = Dt == null ? void 0 : Dt.title);
              }
              return { label: ft, value: We, key: Tt, disabled: $n, title: xn };
            });
          },
          [J, D, Ee],
        ),
        oe = _r(V, { value: j }),
        Ne = ge(oe, 2),
        Ae = Ne[0],
        re = Ne[1],
        ae = Fe(
          function () {
            var he,
              xe = Me(Ae);
            return r === 'combobox' && !((he = xe[0]) !== null && he !== void 0 && he.value) ? [] : xe;
          },
          [Ae, Me, r],
        ),
        se = BC(ae, Ee),
        De = ge(se, 2),
        Xe = De[0],
        St = De[1],
        Ot = Fe(
          function () {
            if (!r && Xe.length === 1) {
              var he = Xe[0];
              if (he.value === null && (he.label === null || he.label === void 0)) return [];
            }
            return Xe.map(function (xe) {
              var Ie;
              return G(G({}, xe), {}, { label: (Ie = xe.label) !== null && Ie !== void 0 ? Ie : xe.value });
            });
          },
          [r, Xe],
        ),
        wt = Fe(
          function () {
            return new Set(
              Xe.map(function (he) {
                return he.value;
              }),
            );
          },
          [Xe],
        );
      ke(
        function () {
          if (r === 'combobox') {
            var he,
              xe = (he = Xe[0]) === null || he === void 0 ? void 0 : he.value;
            pe(mC(xe) ? String(xe) : '');
          }
        },
        [Xe],
      );
      var ht = Bp(function (he, xe) {
          var Ie,
            We = xe ?? he;
          return (Ie = {}), $e(Ie, J.value, he), $e(Ie, J.label, We), Ie;
        }),
        vt = Fe(
          function () {
            if (r !== 'tags') return He;
            var he = ze(He),
              xe = function (We) {
                return Ee.has(We);
              };
            return (
              ze(Xe)
                .sort(function (Ie, We) {
                  return Ie.value < We.value ? -1 : 1;
                })
                .forEach(function (Ie) {
                  var We = Ie.value;
                  xe(We) || he.push(ht(We, Ie.label));
                }),
              he
            );
          },
          [ht, He, Ee, Xe, r],
        ),
        dt = VC(vt, J, me, ye, N),
        Gt = Fe(
          function () {
            return r !== 'tags' ||
              !me ||
              dt.some(function (he) {
                return he[N || 'value'] === me;
              })
              ? dt
              : [ht(me)].concat(ze(dt));
          },
          [ht, N, r, dt, me],
        ),
        _t = Fe(
          function () {
            return I
              ? ze(Gt).sort(function (he, xe) {
                  return I(he, xe);
                })
              : Gt;
          },
          [Gt, I],
        ),
        it = Fe(
          function () {
            return jC(_t, { fieldNames: J, childrenAsData: de });
          },
          [_t, J, de],
        ),
        tt = function (xe) {
          var Ie = Me(xe);
          if (
            (re(Ie),
            X &&
              (Ie.length !== Xe.length ||
                Ie.some(function (Tt, $n) {
                  var xn;
                  return (
                    ((xn = Xe[$n]) === null || xn === void 0 ? void 0 : xn.value) !== (Tt == null ? void 0 : Tt.value)
                  );
                })))
          ) {
            var We = U
                ? Ie
                : Ie.map(function (Tt) {
                    return Tt.value;
                  }),
              ft = Ie.map(function (Tt) {
                return Zl(St(Tt.value));
              });
            X(fe ? We : We[0], fe ? ft : ft[0]);
          }
        },
        Kt = Te(null),
        jt = ge(Kt, 2),
        Le = jt[0],
        nt = jt[1],
        It = Te(0),
        pt = ge(It, 2),
        ot = pt[0],
        zt = pt[1],
        Wt = $ !== void 0 ? $ : r !== 'combobox',
        _e = rn(
          function (he, xe) {
            var Ie = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
              We = Ie.source,
              ft = We === void 0 ? 'keyboard' : We;
            zt(xe), s && r === 'combobox' && he !== null && ft === 'keyboard' && nt(String(he));
          },
          [s, r],
        ),
        je = function (xe, Ie, We) {
          var ft = function () {
            var On,
              An = St(xe);
            return [
              U
                ? {
                    label: An == null ? void 0 : An[J.label],
                    value: xe,
                    key: (On = An == null ? void 0 : An.key) !== null && On !== void 0 ? On : xe,
                  }
                : xe,
              Zl(An),
            ];
          };
          if (Ie && w) {
            var Tt = ft(),
              $n = ge(Tt, 2),
              xn = $n[0],
              Mn = $n[1];
            w(xn, Mn);
          } else if (!Ie && S && We !== 'clear') {
            var Dt = ft(),
              wn = ge(Dt, 2),
              Kn = wn[0],
              vn = wn[1];
            S(Kn, vn);
          }
        },
        gt = Bp(function (he, xe) {
          var Ie,
            We = fe ? xe.selected : !0;
          We
            ? (Ie = fe ? [].concat(ze(Xe), [he]) : [he])
            : (Ie = Xe.filter(function (ft) {
                return ft.value !== he;
              })),
            tt(Ie),
            je(he, We),
            r === 'combobox' ? nt('') : (!ec || v) && (pe(''), nt(''));
        }),
        st = function (xe, Ie) {
          tt(xe);
          var We = Ie.type,
            ft = Ie.values;
          (We === 'remove' || We === 'clear') &&
            ft.forEach(function (Tt) {
              je(Tt.value, !1, We);
            });
        },
        Ct = function (xe, Ie) {
          if ((pe(xe), nt(null), Ie.source === 'submit')) {
            var We = (xe || '').trim();
            if (We) {
              var ft = Array.from(new Set([].concat(ze(wt), [We])));
              tt(ft), je(We, !0), pe('');
            }
            return;
          }
          Ie.source !== 'blur' && (r === 'combobox' && tt(xe), h == null || h(xe));
        },
        dn = function (xe) {
          var Ie = xe;
          r !== 'tags' &&
            (Ie = xe
              .map(function (ft) {
                var Tt = Ge.get(ft);
                return Tt == null ? void 0 : Tt.value;
              })
              .filter(function (ft) {
                return ft !== void 0;
              }));
          var We = Array.from(new Set([].concat(ze(wt), ze(Ie))));
          tt(We),
            We.forEach(function (ft) {
              je(ft, !0);
            });
        },
        Ut = Fe(
          function () {
            var he = R !== !1 && _ !== !1;
            return G(
              G({}, Oe),
              {},
              {
                flattenOptions: it,
                onActiveValue: _e,
                defaultActiveFirstOption: Wt,
                onSelect: gt,
                menuItemSelectedIcon: P,
                rawValues: wt,
                fieldNames: J,
                virtual: he,
                listHeight: B,
                listItemHeight: M,
                childrenAsData: de,
              },
            );
          },
          [Oe, it, _e, Wt, gt, P, wt, J, R, _, B, M, de],
        );
      return y.createElement(
        Gp.Provider,
        { value: Ut },
        y.createElement(
          kC,
          mt({}, Z, {
            id: ee,
            prefixCls: a,
            ref: t,
            omitDomProps: yx,
            mode: r,
            displayValues: Ot,
            onDisplayValuesChange: st,
            searchValue: me,
            onSearch: Ct,
            autoClearSearchValue: v,
            onSearchSplit: dn,
            dropdownMatchSelectWidth: _,
            OptionList: Xp,
            emptyOptions: !it.length,
            activeValue: Le,
            activeDescendantId: ''.concat(ee, '_list_').concat(ot),
          }),
        ),
      );
    }),
    ic = Sx;
  (ic.Option = rc), (ic.OptGroup = nc);
  const Cx = () => {
      const [, e] = zi(),
        t = new mn(e.colorBgBase);
      let n = {};
      return (
        t.toHsl().l < 0.5 && (n = { opacity: 0.65 }),
        y.createElement(
          'svg',
          { style: n, width: '184', height: '152', viewBox: '0 0 184 152', xmlns: 'http://www.w3.org/2000/svg' },
          y.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            y.createElement(
              'g',
              { transform: 'translate(24 31.67)' },
              y.createElement('ellipse', {
                fillOpacity: '.8',
                fill: '#F5F5F7',
                cx: '67.797',
                cy: '106.89',
                rx: '67.797',
                ry: '12.668',
              }),
              y.createElement('path', {
                d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
                fill: '#AEB8C2',
              }),
              y.createElement('path', {
                d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                fill: 'url(#linearGradient-1)',
                transform: 'translate(13.56)',
              }),
              y.createElement('path', {
                d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
                fill: '#F5F5F7',
              }),
              y.createElement('path', {
                d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
                fill: '#DCE0E6',
              }),
            ),
            y.createElement('path', {
              d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
              fill: '#DCE0E6',
            }),
            y.createElement(
              'g',
              { transform: 'translate(149.65 15.383)', fill: '#FFF' },
              y.createElement('ellipse', { cx: '20.654', cy: '3.167', rx: '2.849', ry: '2.815' }),
              y.createElement('path', { d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z' }),
            ),
          ),
        )
      );
    },
    xx = () => {
      const [, e] = zi(),
        { colorFill: t, colorFillTertiary: n, colorFillQuaternary: r, colorBgContainer: i } = e,
        {
          borderColor: a,
          shadowColor: s,
          contentColor: c,
        } = Fe(
          () => ({
            borderColor: new mn(t).onBackground(i).toHexShortString(),
            shadowColor: new mn(n).onBackground(i).toHexShortString(),
            contentColor: new mn(r).onBackground(i).toHexShortString(),
          }),
          [t, n, r, i],
        );
      return y.createElement(
        'svg',
        { width: '64', height: '41', viewBox: '0 0 64 41', xmlns: 'http://www.w3.org/2000/svg' },
        y.createElement(
          'g',
          { transform: 'translate(0 1)', fill: 'none', fillRule: 'evenodd' },
          y.createElement('ellipse', { fill: s, cx: '32', cy: '33', rx: '32', ry: '7' }),
          y.createElement(
            'g',
            { fillRule: 'nonzero', stroke: a },
            y.createElement('path', {
              d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
            }),
            y.createElement('path', {
              d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
              fill: c,
            }),
          ),
        ),
      );
    },
    wx = (e) => {
      const { componentCls: t, margin: n, marginXS: r, marginXL: i, fontSize: a, lineHeight: s } = e;
      return {
        [t]: {
          marginInline: r,
          fontSize: a,
          lineHeight: s,
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
    Ex = jn('Empty', (e) => {
      const { componentCls: t, controlHeightLG: n } = e,
        r = Yt(e, {
          emptyImgCls: `${t}-img`,
          emptyImgHeight: n * 2.5,
          emptyImgHeightMD: n,
          emptyImgHeightSM: n * 0.875,
        });
      return [wx(r)];
    });
  var $x =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const Yp = y.createElement(Cx, null),
    Qp = y.createElement(xx, null),
    oc = (e) => {
      var {
          className: t,
          rootClassName: n,
          prefixCls: r,
          image: i = Yp,
          description: a,
          children: s,
          imageStyle: c,
        } = e,
        f = $x(e, ['className', 'rootClassName', 'prefixCls', 'image', 'description', 'children', 'imageStyle']);
      const { getPrefixCls: p, direction: h } = Be(At),
        m = p('empty', r),
        [v, w] = Ex(m),
        [S] = ql('Empty'),
        C = typeof a < 'u' ? a : S == null ? void 0 : S.description,
        _ = typeof C == 'string' ? C : 'empty';
      let E = null;
      return (
        typeof i == 'string' ? (E = y.createElement('img', { alt: _, src: i })) : (E = i),
        v(
          y.createElement(
            'div',
            Object.assign({ className: Ce(w, m, { [`${m}-normal`]: i === Qp, [`${m}-rtl`]: h === 'rtl' }, t, n) }, f),
            y.createElement('div', { className: `${m}-image`, style: c }, E),
            C && y.createElement('div', { className: `${m}-description` }, C),
            s && y.createElement('div', { className: `${m}-footer` }, s),
          ),
        )
      );
    };
  (oc.PRESENTED_IMAGE_DEFAULT = Yp), (oc.PRESENTED_IMAGE_SIMPLE = Qp);
  const Io = oc,
    Jp = (e) => {
      const { componentName: t } = e,
        { getPrefixCls: n } = Be(At),
        r = n('empty');
      switch (t) {
        case 'Table':
        case 'List':
          return Pe.createElement(Io, { image: Io.PRESENTED_IMAGE_SIMPLE });
        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
          return Pe.createElement(Io, { image: Io.PRESENTED_IMAGE_SIMPLE, className: `${r}-small` });
        default:
          return Pe.createElement(Io, null);
      }
    };
  function ac(e, t, n) {
    return Ce({
      [`${e}-status-success`]: t === 'success',
      [`${e}-status-warning`]: t === 'warning',
      [`${e}-status-error`]: t === 'error',
      [`${e}-status-validating`]: t === 'validating',
      [`${e}-has-feedback`]: n,
    });
  }
  const Zp = (e, t) => t || e;
  var Ox = {
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
  const _x = Ox;
  var eh = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: _x }));
  };
  eh.displayName = 'CheckOutlined';
  const th = Ve(eh);
  var Ix = {
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
  const Tx = Ix;
  var nh = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: Tx }));
  };
  nh.displayName = 'DownOutlined';
  const Px = Ve(nh);
  var Nx = {
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
  const Rx = Nx;
  var rh = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: Rx }));
  };
  rh.displayName = 'SearchOutlined';
  const Mx = Ve(rh);
  function Ax(e) {
    let {
      suffixIcon: t,
      clearIcon: n,
      menuItemSelectedIcon: r,
      removeIcon: i,
      loading: a,
      multiple: s,
      hasFeedback: c,
      prefixCls: f,
      showArrow: p,
      feedbackIcon: h,
    } = e;
    const m = n ?? y.createElement(Fl, null),
      v = (_) => y.createElement(y.Fragment, null, p !== !1 && _, c && h);
    let w = null;
    if (t !== void 0) w = v(t);
    else if (a) w = v(y.createElement(Xd, { spin: !0 }));
    else {
      const _ = `${f}-suffix`;
      w = (E) => {
        let { open: I, showSearch: N } = E;
        return v(I && N ? y.createElement(Mx, { className: _ }) : y.createElement(Px, { className: _ }));
      };
    }
    let S = null;
    r !== void 0 ? (S = r) : s ? (S = y.createElement(th, null)) : (S = null);
    let C = null;
    return (
      i !== void 0 ? (C = i) : (C = y.createElement(jl, null)),
      { clearIcon: m, suffixIcon: w, itemIcon: S, removeIcon: C }
    );
  }
  function Dx(e, t, n) {
    return function (i) {
      const { prefixCls: a, style: s } = i,
        c = le(null),
        [f, p] = Te(0),
        [h, m] = Te(0),
        [v, w] = _r(!1, { value: i.open }),
        { getPrefixCls: S } = Be(At),
        C = S(t || 'select', a);
      return (
        ke(() => {
          if ((w(!0), typeof ResizeObserver < 'u')) {
            const _ = new ResizeObserver((I) => {
                const N = I[0].target;
                p(N.offsetHeight + 8), m(N.offsetWidth);
              }),
              E = setInterval(() => {
                var I;
                const N = n ? `.${n(C)}` : `.${C}-dropdown`,
                  D = (I = c.current) === null || I === void 0 ? void 0 : I.querySelector(N);
                D && (clearInterval(E), _.observe(D));
              }, 10);
            return () => {
              clearInterval(E), _.disconnect();
            };
          }
        }, []),
        y.createElement(
          md,
          {
            theme: { token: { motionDurationFast: '0.01s', motionDurationMid: '0.01s', motionDurationSlow: '0.01s' } },
          },
          y.createElement(
            'div',
            { ref: c, style: { paddingBottom: f, position: 'relative', width: 'fit-content', minWidth: h } },
            y.createElement(
              e,
              Object.assign({}, i, {
                style: Object.assign(Object.assign({}, s), { margin: 0 }),
                open: v,
                visible: v,
                getPopupContainer: () => c.current,
              }),
            ),
          ),
        )
      );
    };
  }
  const ih = (e) => {
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
    Fx = (e) => {
      const { antCls: t, componentCls: n } = e,
        r = `${n}-item`;
      return [
        {
          [`${n}-dropdown`]: Object.assign(Object.assign({}, fr(e)), {
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
          `]: { animationName: gp },
            [`
            &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-topLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-topLeft
          `]: { animationName: vp },
            [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-bottomLeft`]: { animationName: mp },
            [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-topLeft`]: { animationName: yp },
            '&-hidden': { display: 'none' },
            '&-empty': { color: e.colorTextDisabled },
            [`${r}-empty`]: Object.assign(Object.assign({}, ih(e)), { color: e.colorTextDisabled }),
            [`${r}`]: Object.assign(Object.assign({}, ih(e)), {
              cursor: 'pointer',
              transition: `background ${e.motionDurationSlow} ease`,
              borderRadius: e.borderRadiusSM,
              '&-group': { color: e.colorTextDescription, fontSize: e.fontSizeSM, cursor: 'default' },
              '&-option': {
                display: 'flex',
                '&-content': Object.assign(Object.assign({ flex: 'auto' }, So), { '> *': Object.assign({}, So) }),
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
        bp(e, 'slide-up'),
        bp(e, 'slide-down'),
        hp(e, 'move-up'),
        hp(e, 'move-down'),
      ];
    },
    Gi = 2;
  function oh(e) {
    let { controlHeightSM: t, controlHeight: n, lineWidth: r } = e;
    const i = (n - t) / 2 - r,
      a = Math.ceil(i / 2);
    return [i, a];
  }
  function sc(e, t) {
    const { componentCls: n, iconCls: r } = e,
      i = `${n}-selection-overflow`,
      a = e.controlHeightSM,
      [s] = oh(e),
      c = t ? `${n}-${t}` : '';
    return {
      [`${n}-multiple${c}`]: {
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
          padding: `${s - Gi}px ${Gi * 2}px`,
          borderRadius: e.borderRadius,
          [`${n}-show-search&`]: { cursor: 'text' },
          [`${n}-disabled&`]: { background: e.colorBgContainerDisabled, cursor: 'not-allowed' },
          '&:after': {
            display: 'inline-block',
            width: 0,
            margin: `${Gi}px 0`,
            lineHeight: `${a}px`,
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
          height: a,
          marginTop: Gi,
          marginBottom: Gi,
          lineHeight: `${a - e.lineWidth * 2}px`,
          background: e.colorFillSecondary,
          border: `${e.lineWidth}px solid ${e.colorSplit}`,
          borderRadius: e.borderRadiusSM,
          cursor: 'default',
          transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
          userSelect: 'none',
          marginInlineEnd: Gi * 2,
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
          '&-remove': Object.assign(Object.assign({}, Ol()), {
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
          marginInlineStart: e.inputPaddingHorizontalBase - s,
          [`
          &-input,
          &-mirror
        `]: { height: a, fontFamily: e.fontFamily, lineHeight: `${a}px`, transition: `all ${e.motionDurationSlow}` },
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
  function jx(e) {
    const { componentCls: t } = e,
      n = Yt(e, {
        controlHeight: e.controlHeightSM,
        controlHeightSM: e.controlHeightXS,
        borderRadius: e.borderRadiusSM,
        borderRadiusSM: e.borderRadiusXS,
      }),
      [, r] = oh(e);
    return [
      sc(e),
      sc(n, 'sm'),
      {
        [`${t}-multiple${t}-sm`]: {
          [`${t}-selection-placeholder`]: { insetInline: e.controlPaddingHorizontalSM - e.lineWidth },
          [`${t}-selection-search`]: { marginInlineStart: r },
        },
      },
      sc(
        Yt(e, {
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
  function lc(e, t) {
    const { componentCls: n, inputPaddingHorizontalBase: r, borderRadius: i } = e,
      a = e.controlHeight - e.lineWidth * 2,
      s = Math.ceil(e.fontSize * 1.25),
      c = t ? `${n}-${t}` : '';
    return {
      [`${n}-single${c}`]: {
        fontSize: e.fontSize,
        [`${n}-selector`]: Object.assign(Object.assign({}, fr(e)), {
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
            lineHeight: `${a}px`,
            transition: `all ${e.motionDurationSlow}`,
            '@supports (-moz-appearance: meterbar)': { lineHeight: `${a}px` },
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
      `]: { paddingInlineEnd: s },
        [`&${n}-open ${n}-selection-item`]: { color: e.colorTextPlaceholder },
        [`&:not(${n}-customize-input)`]: {
          [`${n}-selector`]: {
            width: '100%',
            height: e.controlHeight,
            padding: `0 ${r}px`,
            [`${n}-selection-search-input`]: { height: a },
            '&:after': { lineHeight: `${a}px` },
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
  function zx(e) {
    const { componentCls: t } = e,
      n = e.controlPaddingHorizontalSM - e.lineWidth;
    return [
      lc(e),
      lc(Yt(e, { controlHeight: e.controlHeightSM, borderRadius: e.borderRadiusSM }), 'sm'),
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
      lc(Yt(e, { controlHeight: e.controlHeightLG, fontSize: e.fontSizeLG, borderRadius: e.borderRadiusLG }), 'lg'),
    ];
  }
  const Lx = (e) => {
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
    cc = function (e, t) {
      let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      const { componentCls: r, borderHoverColor: i, outlineColor: a, antCls: s } = t,
        c = n ? { [`${r}-selector`]: { borderColor: i } } : {};
      return {
        [e]: {
          [`&:not(${r}-disabled):not(${r}-customize-input):not(${s}-pagination-size-changer)`]: Object.assign(
            Object.assign({}, c),
            {
              [`${r}-focused& ${r}-selector`]: {
                borderColor: i,
                boxShadow: `0 0 0 ${t.controlOutlineWidth}px ${a}`,
                outline: 0,
              },
              [`&:hover ${r}-selector`]: { borderColor: i },
            },
          ),
        },
      };
    },
    Hx = (e) => {
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
    kx = (e) => {
      const { componentCls: t, inputPaddingHorizontalBase: n, iconCls: r } = e;
      return {
        [t]: Object.assign(Object.assign({}, fr(e)), {
          position: 'relative',
          display: 'inline-block',
          cursor: 'pointer',
          [`&:not(${t}-customize-input) ${t}-selector`]: Object.assign(Object.assign({}, Lx(e)), Hx(e)),
          [`${t}-selection-item`]: Object.assign(Object.assign({ flex: 1, fontWeight: 'normal' }, So), {
            '> *': Object.assign({ lineHeight: 'inherit' }, So),
          }),
          [`${t}-selection-placeholder`]: Object.assign(Object.assign({}, So), {
            flex: 1,
            color: e.colorTextPlaceholder,
            pointerEvents: 'none',
          }),
          [`${t}-arrow`]: Object.assign(Object.assign({}, Ol()), {
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
    Bx = (e) => {
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
        kx(e),
        zx(e),
        jx(e),
        Fx(e),
        { [`${t}-rtl`]: { direction: 'rtl' } },
        cc(t, Yt(e, { borderHoverColor: e.colorPrimaryHover, outlineColor: e.controlOutline })),
        cc(`${t}-status-error`, Yt(e, { borderHoverColor: e.colorErrorHover, outlineColor: e.colorErrorOutline }), !0),
        cc(
          `${t}-status-warning`,
          Yt(e, { borderHoverColor: e.colorWarningHover, outlineColor: e.colorWarningOutline }),
          !0,
        ),
        rp(e, { borderElCls: `${t}-selector`, focusElCls: `${t}-focused` }),
      ];
    },
    Vx = jn(
      'Select',
      (e, t) => {
        let { rootPrefixCls: n } = t;
        const r = Yt(e, { rootPrefixCls: n, inputPaddingHorizontalBase: e.paddingSM - 1 });
        return [Bx(r)];
      },
      (e) => ({ zIndexPopup: e.zIndexPopupBase + 50 }),
    );
  function Wx(e) {
    return e ?? !0;
  }
  var Ux =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const ah = 'SECRET_COMBOBOX_MODE_DO_NOT_USE',
    Ki = Ve((e, t) => {
      var {
          prefixCls: n,
          bordered: r = !0,
          className: i,
          rootClassName: a,
          getPopupContainer: s,
          popupClassName: c,
          dropdownClassName: f,
          listHeight: p = 256,
          placement: h,
          listItemHeight: m = 24,
          size: v,
          disabled: w,
          notFoundContent: S,
          status: C,
          showArrow: _,
        } = e,
        E = Ux(e, [
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
          getPopupContainer: I,
          getPrefixCls: N,
          renderEmpty: D,
          direction: z,
          virtual: u,
          dropdownMatchSelectWidth: $,
          select: P,
        } = Be(At),
        R = Be(Co),
        A = N('select', n),
        B = N(),
        { compactSize: F, compactItemClassnames: M } = tS(A, z),
        [j, V] = Vx(A),
        U = Fe(() => {
          const { mode: re } = E;
          if (re !== 'combobox') return re === ah ? 'combobox' : re;
        }, [E.mode]),
        X = U === 'multiple' || U === 'tags',
        Z = Wx(_),
        { status: ee, hasFeedback: fe, isFormItemInput: de, feedbackIcon: ye } = Be(qa),
        J = Zp(ee, C);
      let be;
      S !== void 0
        ? (be = S)
        : U === 'combobox'
        ? (be = null)
        : (be = (D == null ? void 0 : D('Select')) || y.createElement(Jp, { componentName: 'Select' }));
      const {
          suffixIcon: Se,
          itemIcon: me,
          removeIcon: pe,
          clearIcon: Oe,
        } = Ax(
          Object.assign(Object.assign({}, E), {
            multiple: X,
            hasFeedback: fe,
            feedbackIcon: ye,
            showArrow: Z,
            prefixCls: A,
          }),
        ),
        Ee = oo(E, ['suffixIcon', 'itemIcon']),
        Ge = Ce(c || f, { [`${A}-dropdown-${z}`]: z === 'rtl' }, a, V),
        He = F || v || R,
        Me = Be(Nl),
        oe = w ?? Me,
        Ne = Ce(
          {
            [`${A}-lg`]: He === 'large',
            [`${A}-sm`]: He === 'small',
            [`${A}-rtl`]: z === 'rtl',
            [`${A}-borderless`]: !r,
            [`${A}-in-form-item`]: de,
          },
          ac(A, J, fe),
          M,
          i,
          a,
          V,
        ),
        Ae = () => (h !== void 0 ? h : z === 'rtl' ? 'bottomRight' : 'bottomLeft');
      return j(
        y.createElement(
          ic,
          Object.assign(
            { ref: t, virtual: u, dropdownMatchSelectWidth: $, showSearch: P == null ? void 0 : P.showSearch },
            Ee,
            {
              transitionName: Wa(B, sS(h), E.transitionName),
              listHeight: p,
              listItemHeight: m,
              mode: U,
              prefixCls: A,
              placement: Ae(),
              direction: z,
              inputIcon: Se,
              menuItemSelectedIcon: me,
              removeIcon: pe,
              clearIcon: Oe,
              notFoundContent: be,
              className: Ne,
              getPopupContainer: s || I,
              dropdownClassName: Ge,
              showArrow: fe || Z,
              disabled: oe,
            },
          ),
        ),
      );
    }),
    qx = Dx(Ki);
  (Ki.SECRET_COMBOBOX_MODE_DO_NOT_USE = ah),
    (Ki.Option = rc),
    (Ki.OptGroup = nc),
    (Ki._InternalPanelDoNotUseOrYouWillBeFired = qx);
  const Ja = Ki;
  function Gx() {
    const [, e] = Uo((t) => t + 1, 0);
    return e;
  }
  const fi = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
    Kx = (e) => ({
      xs: `(max-width: ${e.screenXSMax}px)`,
      sm: `(min-width: ${e.screenSM}px)`,
      md: `(min-width: ${e.screenMD}px)`,
      lg: `(min-width: ${e.screenLG}px)`,
      xl: `(min-width: ${e.screenXL}px)`,
      xxl: `(min-width: ${e.screenXXL}px)`,
    }),
    Xx = (e) => {
      const t = e,
        n = [].concat(fi).reverse();
      return (
        n.forEach((r, i) => {
          const a = r.toUpperCase(),
            s = `screen${a}Min`,
            c = `screen${a}`;
          if (!(t[s] <= t[c])) throw new Error(`${s}<=${c} fails : !(${t[s]}<=${t[c]})`);
          if (i < n.length - 1) {
            const f = `screen${a}Max`;
            if (!(t[c] <= t[f])) throw new Error(`${c}<=${f} fails : !(${t[c]}<=${t[f]})`);
            const h = `screen${n[i + 1].toUpperCase()}Min`;
            if (!(t[f] <= t[h])) throw new Error(`${f}<=${h} fails : !(${t[f]}<=${t[h]})`);
          }
        }),
        e
      );
    };
  function sh() {
    const [, e] = zi(),
      t = Kx(Xx(e));
    return Pe.useMemo(() => {
      const n = new Map();
      let r = -1,
        i = {};
      return {
        matchHandlers: {},
        dispatch(a) {
          return (i = a), n.forEach((s) => s(i)), n.size >= 1;
        },
        subscribe(a) {
          return n.size || this.register(), (r += 1), n.set(r, a), a(i), r;
        },
        unsubscribe(a) {
          n.delete(a), n.size || this.unregister();
        },
        unregister() {
          Object.keys(t).forEach((a) => {
            const s = t[a],
              c = this.matchHandlers[s];
            c == null || c.mql.removeListener(c == null ? void 0 : c.listener);
          }),
            n.clear();
        },
        register() {
          Object.keys(t).forEach((a) => {
            const s = t[a],
              c = (p) => {
                let { matches: h } = p;
                this.dispatch(Object.assign(Object.assign({}, i), { [a]: h }));
              },
              f = window.matchMedia(s);
            f.addListener(c), (this.matchHandlers[s] = { mql: f, listener: c }), c(f);
          });
        },
        responsiveMap: t,
      };
    }, [e]);
  }
  function lh() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    const t = le({}),
      n = Gx(),
      r = sh();
    return (
      ke(() => {
        const i = r.subscribe((a) => {
          (t.current = a), e && n();
        });
        return () => r.unsubscribe(i);
      }, []),
      t.current
    );
  }
  var Xi = { shiftX: 64, adjustY: 1 },
    Yi = { adjustX: 1, shiftY: !0 },
    nr = [0, 0],
    Yx = {
      left: { points: ['cr', 'cl'], overflow: Yi, offset: [-4, 0], targetOffset: nr },
      right: { points: ['cl', 'cr'], overflow: Yi, offset: [4, 0], targetOffset: nr },
      top: { points: ['bc', 'tc'], overflow: Xi, offset: [0, -4], targetOffset: nr },
      bottom: { points: ['tc', 'bc'], overflow: Xi, offset: [0, 4], targetOffset: nr },
      topLeft: { points: ['bl', 'tl'], overflow: Xi, offset: [0, -4], targetOffset: nr },
      leftTop: { points: ['tr', 'tl'], overflow: Yi, offset: [-4, 0], targetOffset: nr },
      topRight: { points: ['br', 'tr'], overflow: Xi, offset: [0, -4], targetOffset: nr },
      rightTop: { points: ['tl', 'tr'], overflow: Yi, offset: [4, 0], targetOffset: nr },
      bottomRight: { points: ['tr', 'br'], overflow: Xi, offset: [0, 4], targetOffset: nr },
      rightBottom: { points: ['bl', 'br'], overflow: Yi, offset: [4, 0], targetOffset: nr },
      bottomLeft: { points: ['tl', 'bl'], overflow: Xi, offset: [0, 4], targetOffset: nr },
      leftBottom: { points: ['br', 'bl'], overflow: Yi, offset: [-4, 0], targetOffset: nr },
    };
  function ch(e) {
    var t = e.children,
      n = e.prefixCls,
      r = e.id,
      i = e.overlayInnerStyle,
      a = e.className,
      s = e.style;
    return y.createElement(
      'div',
      { className: Ce(''.concat(n, '-content'), a), style: s },
      y.createElement(
        'div',
        { className: ''.concat(n, '-inner'), id: r, role: 'tooltip', style: i },
        typeof t == 'function' ? t() : t,
      ),
    );
  }
  var Qx = [
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
    Jx = function (t, n) {
      var r = t.overlayClassName,
        i = t.trigger,
        a = i === void 0 ? ['hover'] : i,
        s = t.mouseEnterDelay,
        c = s === void 0 ? 0 : s,
        f = t.mouseLeaveDelay,
        p = f === void 0 ? 0.1 : f,
        h = t.overlayStyle,
        m = t.prefixCls,
        v = m === void 0 ? 'rc-tooltip' : m,
        w = t.children,
        S = t.onVisibleChange,
        C = t.afterVisibleChange,
        _ = t.transitionName,
        E = t.animation,
        I = t.motion,
        N = t.placement,
        D = N === void 0 ? 'right' : N,
        z = t.align,
        u = z === void 0 ? {} : z,
        $ = t.destroyTooltipOnHide,
        P = $ === void 0 ? !1 : $,
        R = t.defaultVisible,
        A = t.getTooltipContainer,
        B = t.overlayInnerStyle;
      t.arrowContent;
      var F = t.overlay,
        M = t.id,
        j = t.showArrow,
        V = j === void 0 ? !0 : j,
        U = qt(t, Qx),
        X = le(null);
      hn(n, function () {
        return X.current;
      });
      var Z = G({}, U);
      'visible' in t && (Z.popupVisible = t.visible);
      var ee = function () {
        return y.createElement(ch, { key: 'content', prefixCls: v, id: M, overlayInnerStyle: B }, F);
      };
      return y.createElement(
        Fp,
        mt(
          {
            popupClassName: r,
            prefixCls: v,
            popup: ee,
            action: a,
            builtinPlacements: Yx,
            popupPlacement: D,
            ref: X,
            popupAlign: u,
            getPopupContainer: A,
            onPopupVisibleChange: S,
            afterPopupVisibleChange: C,
            popupTransitionName: _,
            popupAnimation: E,
            popupMotion: I,
            defaultPopupVisible: R,
            autoDestroy: P,
            mouseLeaveDelay: p,
            popupStyle: h,
            mouseEnterDelay: c,
            arrow: V,
          },
          Z,
        ),
        w,
      );
    };
  const Zx = Ve(Jx),
    Vr = (e, t) => new mn(e).setAlpha(t).toRgbString(),
    Qi = (e, t) => new mn(e).lighten(t).toHexString(),
    ew = (e) => {
      const t = Er(e, { theme: 'dark' });
      return { 1: t[0], 2: t[1], 3: t[2], 4: t[3], 5: t[6], 6: t[5], 7: t[4], 8: t[6], 9: t[5], 10: t[4] };
    },
    tw = (e, t) => {
      const n = e || '#000',
        r = t || '#fff';
      return {
        colorBgBase: n,
        colorTextBase: r,
        colorText: Vr(r, 0.85),
        colorTextSecondary: Vr(r, 0.65),
        colorTextTertiary: Vr(r, 0.45),
        colorTextQuaternary: Vr(r, 0.25),
        colorFill: Vr(r, 0.18),
        colorFillSecondary: Vr(r, 0.12),
        colorFillTertiary: Vr(r, 0.08),
        colorFillQuaternary: Vr(r, 0.04),
        colorBgElevated: Qi(n, 12),
        colorBgContainer: Qi(n, 8),
        colorBgLayout: Qi(n, 0),
        colorBgSpotlight: Qi(n, 26),
        colorBorder: Qi(n, 26),
        colorBorderSecondary: Qi(n, 19),
      };
    },
    nw = (e, t) => {
      const n = Object.keys(El)
          .map((i) => {
            const a = Er(e[i], { theme: 'dark' });
            return new Array(10)
              .fill(1)
              .reduce((s, c, f) => ((s[`${i}-${f + 1}`] = a[f]), (s[`${i}${f + 1}`] = a[f]), s), {});
          })
          .reduce((i, a) => ((i = Object.assign(Object.assign({}, i), a)), i), {}),
        r = t ?? Ra(e);
      return Object.assign(
        Object.assign(Object.assign({}, r), n),
        cd(e, { generateColorPalettes: ew, generateNeutralColorPalettes: tw }),
      );
    };
  function rw(e) {
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
  const iw = (e, t) => {
    const n = t ?? Ra(e),
      r = n.fontSizeSM,
      i = n.controlHeight - 4;
    return Object.assign(
      Object.assign(Object.assign(Object.assign(Object.assign({}, n), rw(t ?? e)), ud(r)), { controlHeight: i }),
      ld(Object.assign(Object.assign({}, n), { controlHeight: i })),
    );
  };
  function ow() {
    const [e, t, n] = zi();
    return { theme: e, token: t, hashId: n };
  }
  const aw = {
      defaultConfig: Aa,
      defaultSeed: Aa.token,
      useToken: ow,
      defaultAlgorithm: Ra,
      darkAlgorithm: nw,
      compactAlgorithm: iw,
    },
    uh = 8;
  function fh(e) {
    const t = uh,
      { contentRadius: n, limitVerticalRadius: r } = e,
      i = n > 12 ? n + 2 : 12;
    return { dropdownArrowOffset: i, dropdownArrowOffsetVertical: r ? t : i };
  }
  function Za(e, t) {
    return e ? t : {};
  }
  function sw(e, t) {
    const { componentCls: n, sizePopupArrow: r, borderRadiusXS: i, borderRadiusOuter: a, boxShadowPopoverArrow: s } = e,
      {
        colorBg: c,
        contentRadius: f = e.borderRadiusLG,
        limitVerticalRadius: p,
        arrowDistance: h = 0,
        arrowPlacement: m = { left: !0, right: !0, top: !0, bottom: !0 },
      } = t,
      { dropdownArrowOffsetVertical: v, dropdownArrowOffset: w } = fh({ contentRadius: f, limitVerticalRadius: p });
    return {
      [n]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {
                [`${n}-arrow`]: [
                  Object.assign(
                    Object.assign({ position: 'absolute', zIndex: 1, display: 'block' }, Sb(r, i, a, c, s)),
                    { '&:before': { background: c } },
                  ),
                ],
              },
              Za(!!m.top, {
                [[
                  `&-placement-top ${n}-arrow`,
                  `&-placement-topLeft ${n}-arrow`,
                  `&-placement-topRight ${n}-arrow`,
                ].join(',')]: { bottom: h, transform: 'translateY(100%) rotate(180deg)' },
                [`&-placement-top ${n}-arrow`]: {
                  left: { _skip_check_: !0, value: '50%' },
                  transform: 'translateX(-50%) translateY(100%) rotate(180deg)',
                },
                [`&-placement-topLeft ${n}-arrow`]: { left: { _skip_check_: !0, value: w } },
                [`&-placement-topRight ${n}-arrow`]: { right: { _skip_check_: !0, value: w } },
              }),
            ),
            Za(!!m.bottom, {
              [[
                `&-placement-bottom ${n}-arrow`,
                `&-placement-bottomLeft ${n}-arrow`,
                `&-placement-bottomRight ${n}-arrow`,
              ].join(',')]: { top: h, transform: 'translateY(-100%)' },
              [`&-placement-bottom ${n}-arrow`]: {
                left: { _skip_check_: !0, value: '50%' },
                transform: 'translateX(-50%) translateY(-100%)',
              },
              [`&-placement-bottomLeft ${n}-arrow`]: { left: { _skip_check_: !0, value: w } },
              [`&-placement-bottomRight ${n}-arrow`]: { right: { _skip_check_: !0, value: w } },
            }),
          ),
          Za(!!m.left, {
            [[
              `&-placement-left ${n}-arrow`,
              `&-placement-leftTop ${n}-arrow`,
              `&-placement-leftBottom ${n}-arrow`,
            ].join(',')]: { right: { _skip_check_: !0, value: h }, transform: 'translateX(100%) rotate(90deg)' },
            [`&-placement-left ${n}-arrow`]: {
              top: { _skip_check_: !0, value: '50%' },
              transform: 'translateY(-50%) translateX(100%) rotate(90deg)',
            },
            [`&-placement-leftTop ${n}-arrow`]: { top: v },
            [`&-placement-leftBottom ${n}-arrow`]: { bottom: v },
          }),
        ),
        Za(!!m.right, {
          [[
            `&-placement-right ${n}-arrow`,
            `&-placement-rightTop ${n}-arrow`,
            `&-placement-rightBottom ${n}-arrow`,
          ].join(',')]: { left: { _skip_check_: !0, value: h }, transform: 'translateX(-100%) rotate(-90deg)' },
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
  function lw(e, t, n, r) {
    if (r === !1) return { adjustX: !1, adjustY: !1 };
    const i = r && typeof r == 'object' ? r : {},
      a = {};
    switch (e) {
      case 'top':
      case 'bottom':
        a.shiftX = t.dropdownArrowOffset * 2 + n;
        break;
      case 'left':
      case 'right':
        a.shiftY = t.dropdownArrowOffsetVertical * 2 + n;
        break;
    }
    const s = Object.assign(Object.assign({}, a), i);
    return s.shiftX || (s.adjustX = !0), s.shiftY || (s.adjustY = !0), s;
  }
  const dh = {
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
    cw = {
      topLeft: { points: ['bl', 'tc'] },
      leftTop: { points: ['tr', 'cl'] },
      topRight: { points: ['br', 'tc'] },
      rightTop: { points: ['tl', 'cr'] },
      bottomRight: { points: ['tr', 'bc'] },
      rightBottom: { points: ['bl', 'cr'] },
      bottomLeft: { points: ['tl', 'bc'] },
      leftBottom: { points: ['br', 'cl'] },
    },
    uw = new Set([
      'topLeft',
      'topRight',
      'bottomLeft',
      'bottomRight',
      'leftTop',
      'leftBottom',
      'rightTop',
      'rightBottom',
    ]);
  function fw(e) {
    const { arrowWidth: t, autoAdjustOverflow: n, arrowPointAtCenter: r, offset: i, borderRadius: a } = e,
      s = t / 2,
      c = {};
    return (
      Object.keys(dh).forEach((f) => {
        const p = (r && cw[f]) || dh[f],
          h = Object.assign(Object.assign({}, p), { offset: [0, 0] });
        switch (((c[f] = h), uw.has(f) && (h.autoArrow = !1), f)) {
          case 'top':
          case 'topLeft':
          case 'topRight':
            h.offset[1] = -s - i;
            break;
          case 'bottom':
          case 'bottomLeft':
          case 'bottomRight':
            h.offset[1] = s + i;
            break;
          case 'left':
          case 'leftTop':
          case 'leftBottom':
            h.offset[0] = -s - i;
            break;
          case 'right':
          case 'rightTop':
          case 'rightBottom':
            h.offset[0] = s + i;
            break;
        }
        const m = fh({ contentRadius: a, limitVerticalRadius: !0 });
        if (r)
          switch (f) {
            case 'topLeft':
            case 'bottomLeft':
              h.offset[0] = -m.dropdownArrowOffset - s;
              break;
            case 'topRight':
            case 'bottomRight':
              h.offset[0] = m.dropdownArrowOffset + s;
              break;
            case 'leftTop':
            case 'rightTop':
              h.offset[1] = -m.dropdownArrowOffset - s;
              break;
            case 'leftBottom':
            case 'rightBottom':
              h.offset[1] = m.dropdownArrowOffset + s;
              break;
          }
        h.overflow = lw(f, m, t, n);
      }),
      c
    );
  }
  const dw = (e) => {
      const {
        componentCls: t,
        tooltipMaxWidth: n,
        tooltipColor: r,
        tooltipBg: i,
        tooltipBorderRadius: a,
        zIndexPopup: s,
        controlHeight: c,
        boxShadowSecondary: f,
        paddingSM: p,
        paddingXS: h,
        tooltipRadiusOuter: m,
      } = e;
      return [
        {
          [t]: Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, fr(e)), {
                position: 'absolute',
                zIndex: s,
                display: 'block',
                width: 'max-content',
                maxWidth: n,
                visibility: 'visible',
                '&-hidden': { display: 'none' },
                '--antd-arrow-background-color': i,
                [`${t}-inner`]: {
                  minWidth: c,
                  minHeight: c,
                  padding: `${p / 2}px ${h}px`,
                  color: r,
                  textAlign: 'start',
                  textDecoration: 'none',
                  wordWrap: 'break-word',
                  backgroundColor: i,
                  borderRadius: a,
                  boxShadow: f,
                },
                [[
                  '&-placement-left',
                  '&-placement-leftTop',
                  '&-placement-leftBottom',
                  '&-placement-right',
                  '&-placement-rightTop',
                  '&-placement-rightBottom',
                ].join(',')]: { [`${t}-inner`]: { borderRadius: Math.min(a, uh) } },
                [`${t}-content`]: { position: 'relative' },
              }),
              bb(e, (v, w) => {
                let { darkColor: S } = w;
                return {
                  [`&${t}-${v}`]: {
                    [`${t}-inner`]: { backgroundColor: S },
                    [`${t}-arrow`]: { '--antd-arrow-background-color': S },
                  },
                };
              }),
            ),
            { '&-rtl': { direction: 'rtl' } },
          ),
        },
        sw(Yt(e, { borderRadiusOuter: m }), {
          colorBg: 'var(--antd-arrow-background-color)',
          contentRadius: a,
          limitVerticalRadius: !0,
        }),
        { [`${t}-pure`]: { position: 'relative', maxWidth: 'none', margin: e.sizePopupArrow } },
      ];
    },
    ph = (e, t) =>
      jn(
        'Tooltip',
        (r) => {
          if (t === !1) return [];
          const { borderRadius: i, colorTextLightSolid: a, colorBgDefault: s, borderRadiusOuter: c } = r,
            f = Yt(r, {
              tooltipMaxWidth: 250,
              tooltipColor: a,
              tooltipBorderRadius: i,
              tooltipBg: s,
              tooltipRadiusOuter: c > 4 ? 4 : c,
            });
          return [dw(f), JS(r, 'zoom-big-fast')];
        },
        (r) => {
          let { zIndexPopupBase: i, colorBgSpotlight: a } = r;
          return { zIndexPopup: i + 70, colorBgDefault: a };
        },
      )(e),
    pw = $a.map((e) => `${e}-inverse`);
  function hw(e) {
    return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0)
      ? [].concat(ze(pw), ze($a)).includes(e)
      : $a.includes(e);
  }
  function hh(e, t) {
    const n = hw(t),
      r = Ce({ [`${e}-${t}`]: t && n }),
      i = {},
      a = {};
    return (
      t && !n && ((i.background = t), (a['--antd-arrow-background-color'] = t)),
      { className: r, overlayStyle: i, arrowStyle: a }
    );
  }
  function gw(e) {
    const { prefixCls: t, className: n, placement: r = 'top', title: i, color: a, overlayInnerStyle: s } = e,
      { getPrefixCls: c } = Be(At),
      f = c('tooltip', t),
      [p, h] = ph(f, !0),
      m = hh(f, a),
      v = Object.assign(Object.assign({}, s), m.overlayStyle),
      w = m.arrowStyle;
    return p(
      y.createElement(
        'div',
        { className: Ce(h, f, `${f}-pure`, `${f}-placement-${r}`, n, m.className), style: w },
        y.createElement('div', { className: `${f}-arrow` }),
        y.createElement(ch, Object.assign({}, e, { className: h, prefixCls: f, overlayInnerStyle: v }), i),
      ),
    );
  }
  var mw =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const { useToken: vw } = aw,
    yw = (e, t) => {
      const n = {},
        r = Object.assign({}, e);
      return (
        t.forEach((i) => {
          e && i in e && ((n[i] = e[i]), delete r[i]);
        }),
        { picked: n, omitted: r }
      );
    };
  function bw(e, t) {
    const n = e.type;
    if (
      ((n.__ANT_BUTTON === !0 || e.type === 'button') && e.props.disabled) ||
      (n.__ANT_SWITCH === !0 && (e.props.disabled || e.props.loading)) ||
      (n.__ANT_RADIO === !0 && e.props.disabled)
    ) {
      const { picked: r, omitted: i } = yw(e.props.style, [
          'position',
          'left',
          'right',
          'top',
          'bottom',
          'float',
          'display',
          'zIndex',
        ]),
        a = Object.assign(Object.assign({ display: 'inline-block' }, r), {
          cursor: 'not-allowed',
          width: e.props.block ? '100%' : void 0,
        }),
        s = Object.assign(Object.assign({}, i), { pointerEvents: 'none' }),
        c = Vi(e, { style: s, className: null });
      return y.createElement(
        'span',
        { style: a, className: Ce(e.props.className, `${t}-disabled-compatible-wrapper`) },
        c,
      );
    }
    return e;
  }
  const gh = Ve((e, t) => {
    var n, r;
    const {
        prefixCls: i,
        openClassName: a,
        getTooltipContainer: s,
        overlayClassName: c,
        color: f,
        overlayInnerStyle: p,
        children: h,
        afterOpenChange: m,
        afterVisibleChange: v,
        destroyTooltipOnHide: w,
        arrow: S = !0,
      } = e,
      C = !!S,
      { token: _ } = vw(),
      { getPopupContainer: E, getPrefixCls: I, direction: N } = Be(At),
      D = le(null),
      z = () => {
        var oe;
        (oe = D.current) === null || oe === void 0 || oe.forceAlign();
      };
    hn(t, () => ({
      forceAlign: z,
      forcePopupAlign: () => {
        z();
      },
    }));
    const [u, $] = _r(!1, {
        value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
        defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible,
      }),
      P = () => {
        const { title: oe, overlay: Ne } = e;
        return !oe && !Ne && oe !== 0;
      },
      R = (oe) => {
        var Ne, Ae;
        $(P() ? !1 : oe),
          P() ||
            ((Ne = e.onOpenChange) === null || Ne === void 0 || Ne.call(e, oe),
            (Ae = e.onVisibleChange) === null || Ae === void 0 || Ae.call(e, oe));
      },
      A = () => {
        var oe, Ne;
        const { builtinPlacements: Ae, arrowPointAtCenter: re = !1, autoAdjustOverflow: ae = !0 } = e;
        let se = re;
        return (
          typeof S == 'object' &&
            (se =
              (Ne = (oe = S.pointAtCenter) !== null && oe !== void 0 ? oe : S.arrowPointAtCenter) !== null &&
              Ne !== void 0
                ? Ne
                : re),
          Ae ||
            fw({
              arrowPointAtCenter: se,
              autoAdjustOverflow: ae,
              arrowWidth: C ? _.sizePopupArrow : 0,
              borderRadius: _.borderRadius,
              offset: _.marginXXS,
            })
        );
      },
      B = (oe, Ne) => {
        const Ae = A(),
          re = Object.keys(Ae).find((ae) => {
            var se, De;
            return (
              Ae[ae].points[0] === ((se = Ne.points) === null || se === void 0 ? void 0 : se[0]) &&
              Ae[ae].points[1] === ((De = Ne.points) === null || De === void 0 ? void 0 : De[1])
            );
          });
        if (re) {
          const ae = oe.getBoundingClientRect(),
            se = { top: '50%', left: '50%' };
          /top|Bottom/.test(re)
            ? (se.top = `${ae.height - Ne.offset[1]}px`)
            : /Top|bottom/.test(re) && (se.top = `${-Ne.offset[1]}px`),
            /left|Right/.test(re)
              ? (se.left = `${ae.width - Ne.offset[0]}px`)
              : /right|Left/.test(re) && (se.left = `${-Ne.offset[0]}px`),
            (oe.style.transformOrigin = `${se.left} ${se.top}`);
        }
      },
      F = () => {
        const { title: oe, overlay: Ne } = e;
        return oe === 0 ? oe : Ne || oe || '';
      },
      {
        getPopupContainer: M,
        placement: j = 'top',
        mouseEnterDelay: V = 0.1,
        mouseLeaveDelay: U = 0.1,
        overlayStyle: X,
        rootClassName: Z,
      } = e,
      ee = mw(e, [
        'getPopupContainer',
        'placement',
        'mouseEnterDelay',
        'mouseLeaveDelay',
        'overlayStyle',
        'rootClassName',
      ]),
      fe = I('tooltip', i),
      de = I(),
      ye = e['data-popover-inject'];
    let J = u;
    !('open' in e) && !('visible' in e) && P() && (J = !1);
    const be = bw(Eo(h) && !_1(h) ? h : y.createElement('span', null, h), fe),
      Se = be.props,
      me =
        !Se.className || typeof Se.className == 'string' ? Ce(Se.className, { [a || `${fe}-open`]: !0 }) : Se.className,
      [pe, Oe] = ph(fe, !ye),
      Ee = hh(fe, f),
      Ge = Object.assign(Object.assign({}, p), Ee.overlayStyle),
      He = Ee.arrowStyle,
      Me = Ce(c, { [`${fe}-rtl`]: N === 'rtl' }, Ee.className, Z, Oe);
    return pe(
      y.createElement(
        Zx,
        Object.assign({}, ee, {
          showArrow: C,
          placement: j,
          mouseEnterDelay: V,
          mouseLeaveDelay: U,
          prefixCls: fe,
          overlayClassName: Me,
          overlayStyle: Object.assign(Object.assign({}, He), X),
          getTooltipContainer: M || s || E,
          ref: D,
          builtinPlacements: A(),
          overlay: F(),
          visible: J,
          onVisibleChange: R,
          afterVisibleChange: m ?? v,
          onPopupAlign: B,
          overlayInnerStyle: Ge,
          arrowContent: y.createElement('span', { className: `${fe}-arrow-content` }),
          motion: { motionName: Wa(de, 'zoom-big-fast', e.transitionName), motionDeadline: 1e3 },
          destroyTooltipOnHide: !!w,
        }),
        J ? Vi(be, { className: me }) : be,
      ),
    );
  });
  gh._InternalPanelDoNotUseOrYouWillBeFired = gw;
  const es = gh;
  var Sw = {
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
  const Cw = Sw;
  var mh = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: Cw }));
  };
  mh.displayName = 'RightOutlined';
  const xw = Ve(mh);
  var ww = {
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
  const Ew = ww;
  var vh = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: Ew }));
  };
  vh.displayName = 'LeftOutlined';
  const $w = Ve(vh),
    yh = () => {
      const [e, t] = Te(!1);
      return (
        ke(() => {
          t(ES());
        }, []),
        e
      );
    };
  function Ow(e) {
    let { className: t, direction: n, index: r, marginDirection: i, children: a, split: s, wrap: c } = e;
    const { horizontalSize: f, verticalSize: p, latestIndex: h, supportFlexGap: m } = Be(bh);
    let v = {};
    return (
      m ||
        (n === 'vertical'
          ? r < h && (v = { marginBottom: f / (s ? 2 : 1) })
          : (v = Object.assign(Object.assign({}, r < h && { [i]: f / (s ? 2 : 1) }), c && { paddingBottom: p }))),
      a == null
        ? null
        : y.createElement(
            y.Fragment,
            null,
            y.createElement('div', { className: t, style: v }, a),
            r < h && s && y.createElement('span', { className: `${t}-split`, style: v }, s),
          )
    );
  }
  var _w =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const bh = y.createContext({ latestIndex: 0, horizontalSize: 0, verticalSize: 0, supportFlexGap: !1 }),
    Iw = { small: 8, middle: 16, large: 24 };
  function Tw(e) {
    return typeof e == 'string' ? Iw[e] : e || 0;
  }
  const Sh = (e) => {
    const { getPrefixCls: t, space: n, direction: r } = Be(At),
      {
        size: i = (n == null ? void 0 : n.size) || 'small',
        align: a,
        className: s,
        rootClassName: c,
        children: f,
        direction: p = 'horizontal',
        prefixCls: h,
        split: m,
        style: v,
        wrap: w = !1,
      } = e,
      S = _w(e, [
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
      C = yh(),
      [_, E] = Fe(() => (Array.isArray(i) ? i : [i, i]).map((j) => Tw(j)), [i]),
      I = Cr(f, { keepEmpty: !0 }),
      N = a === void 0 && p === 'horizontal' ? 'center' : a,
      D = t('space', h),
      [z, u] = tp(D),
      $ = Ce(D, u, `${D}-${p}`, { [`${D}-rtl`]: r === 'rtl', [`${D}-align-${N}`]: N }, s, c),
      P = `${D}-item`,
      R = r === 'rtl' ? 'marginLeft' : 'marginRight';
    let A = 0;
    const B = I.map((j, V) => {
        j != null && (A = V);
        const U = (j && j.key) || `${P}-${V}`;
        return y.createElement(
          Ow,
          { className: P, key: U, direction: p, index: V, marginDirection: R, split: m, wrap: w },
          j,
        );
      }),
      F = Fe(() => ({ horizontalSize: _, verticalSize: E, latestIndex: A, supportFlexGap: C }), [_, E, A, C]);
    if (I.length === 0) return null;
    const M = {};
    return (
      w && ((M.flexWrap = 'wrap'), C || (M.marginBottom = -E)),
      C && ((M.columnGap = _), (M.rowGap = E)),
      z(
        y.createElement(
          'div',
          Object.assign({ className: $, style: Object.assign(Object.assign({}, M), v) }, S),
          y.createElement(bh.Provider, { value: F }, B),
        ),
      )
    );
  };
  Sh.Compact = iS;
  const Ch = Sh,
    Pw = (e) => ({
      '&::-moz-placeholder': { opacity: 1 },
      '&::placeholder': { color: e, userSelect: 'none' },
      '&:placeholder-shown': { textOverflow: 'ellipsis' },
    }),
    uc = (e) => ({ borderColor: e.inputBorderHoverColor, borderInlineEndWidth: e.lineWidth }),
    fc = (e) => ({
      borderColor: e.inputBorderHoverColor,
      boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
      borderInlineEndWidth: e.lineWidth,
      outline: 0,
    }),
    xh = (e) => ({
      color: e.colorTextDisabled,
      backgroundColor: e.colorBgContainerDisabled,
      borderColor: e.colorBorder,
      boxShadow: 'none',
      cursor: 'not-allowed',
      opacity: 1,
      '&:hover': Object.assign({}, uc(Yt(e, { inputBorderHoverColor: e.colorBorder }))),
    }),
    wh = (e) => {
      const {
        inputPaddingVerticalLG: t,
        fontSizeLG: n,
        lineHeightLG: r,
        borderRadiusLG: i,
        inputPaddingHorizontalLG: a,
      } = e;
      return { padding: `${t}px ${a}px`, fontSize: n, lineHeight: r, borderRadius: i };
    },
    dc = (e) => ({
      padding: `${e.inputPaddingVerticalSM}px ${e.controlPaddingHorizontalSM - 1}px`,
      borderRadius: e.borderRadiusSM,
    }),
    Eh = (e, t) => {
      const {
        componentCls: n,
        colorError: r,
        colorWarning: i,
        colorErrorOutline: a,
        colorWarningOutline: s,
        colorErrorBorderHover: c,
        colorWarningBorderHover: f,
      } = e;
      return {
        [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
          borderColor: r,
          '&:hover': { borderColor: c },
          '&:focus, &-focused': Object.assign(
            {},
            fc(Yt(e, { inputBorderActiveColor: r, inputBorderHoverColor: r, controlOutline: a })),
          ),
          [`${n}-prefix, ${n}-suffix`]: { color: r },
        },
        [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
          borderColor: i,
          '&:hover': { borderColor: f },
          '&:focus, &-focused': Object.assign(
            {},
            fc(Yt(e, { inputBorderActiveColor: i, inputBorderHoverColor: i, controlOutline: s })),
          ),
          [`${n}-prefix, ${n}-suffix`]: { color: i },
        },
      };
    },
    pc = (e) =>
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
          Pw(e.colorTextPlaceholder),
        ),
        {
          '&:hover': Object.assign({}, uc(e)),
          '&:focus, &-focused': Object.assign({}, fc(e)),
          '&-disabled, &[disabled]': Object.assign({}, xh(e)),
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
          '&-lg': Object.assign({}, wh(e)),
          '&-sm': Object.assign({}, dc(e)),
          '&-rtl': { direction: 'rtl' },
          '&-textarea-rtl': { direction: 'rtl' },
        },
      ),
    Nw = (e) => {
      const { componentCls: t, antCls: n } = e;
      return {
        position: 'relative',
        display: 'table',
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        ["&[class*='col-']"]: { paddingInlineEnd: e.paddingXS, '&:last-child': { paddingInlineEnd: 0 } },
        [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, wh(e)),
        [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, dc(e)),
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
        [`&${t}-group-compact`]: Object.assign(Object.assign({ display: 'block' }, Cb()), {
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
    Rw = (e) => {
      const { componentCls: t, controlHeightSM: n, lineWidth: r } = e,
        i = 16,
        a = (n - r * 2 - i) / 2;
      return {
        [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, fr(e)), pc(e)), Eh(e, t)), {
          '&[type="color"]': {
            height: e.controlHeight,
            [`&${t}-lg`]: { height: e.controlHeightLG },
            [`&${t}-sm`]: { height: n, paddingTop: a, paddingBottom: a },
          },
          '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
            '-webkit-appearance': 'none',
          },
        }),
      };
    },
    Mw = (e) => {
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
    Aw = (e) => {
      const {
        componentCls: t,
        inputAffixPadding: n,
        colorTextDescription: r,
        motionDurationSlow: i,
        colorIcon: a,
        colorIconHover: s,
        iconCls: c,
      } = e;
      return {
        [`${t}-affix-wrapper`]: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, pc(e)), {
                display: 'inline-flex',
                [`&:not(${t}-affix-wrapper-disabled):hover`]: Object.assign(Object.assign({}, uc(e)), {
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
              Mw(e),
            ),
            {
              [`${c}${t}-password-icon`]: {
                color: a,
                cursor: 'pointer',
                transition: `all ${i}`,
                '&:hover': { color: s },
              },
            },
          ),
          Eh(e, `${t}-affix-wrapper`),
        ),
      };
    },
    Dw = (e) => {
      const { componentCls: t, colorError: n, colorWarning: r, borderRadiusLG: i, borderRadiusSM: a } = e;
      return {
        [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, fr(e)), Nw(e)), {
          '&-rtl': { direction: 'rtl' },
          '&-wrapper': {
            display: 'inline-block',
            width: '100%',
            textAlign: 'start',
            verticalAlign: 'top',
            '&-rtl': { direction: 'rtl' },
            '&-lg': { [`${t}-group-addon`]: { borderRadius: i } },
            '&-sm': { [`${t}-group-addon`]: { borderRadius: a } },
            '&-status-error': { [`${t}-group-addon`]: { color: n, borderColor: n } },
            '&-status-warning': { [`${t}-group-addon`]: { color: r, borderColor: r } },
            '&-disabled': { [`${t}-group-addon`]: Object.assign({}, xh(e)) },
          },
        }),
      };
    },
    Fw = (e) => {
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
  function hc(e) {
    return Yt(e, {
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
  const jw = (e) => {
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
    zw = jn('Input', (e) => {
      const t = hc(e);
      return [Rw(t), jw(t), Aw(t), Dw(t), Fw(t), rp(t)];
    });
  function Lw(e, t, n) {
    var r = n || {},
      i = r.noTrailing,
      a = i === void 0 ? !1 : i,
      s = r.noLeading,
      c = s === void 0 ? !1 : s,
      f = r.debounceMode,
      p = f === void 0 ? void 0 : f,
      h,
      m = !1,
      v = 0;
    function w() {
      h && clearTimeout(h);
    }
    function S(_) {
      var E = _ || {},
        I = E.upcomingOnly,
        N = I === void 0 ? !1 : I;
      w(), (m = !N);
    }
    function C() {
      for (var _ = arguments.length, E = new Array(_), I = 0; I < _; I++) E[I] = arguments[I];
      var N = this,
        D = Date.now() - v;
      if (m) return;
      function z() {
        (v = Date.now()), t.apply(N, E);
      }
      function u() {
        h = void 0;
      }
      !c && p && !h && z(),
        w(),
        p === void 0 && D > e
          ? c
            ? ((v = Date.now()), a || (h = setTimeout(p ? u : z, e)))
            : z()
          : a !== !0 && (h = setTimeout(p ? u : z, p === void 0 ? e - D : e));
    }
    return (C.cancel = S), C;
  }
  function Hw(e, t, n) {
    var r = n || {},
      i = r.atBegin,
      a = i === void 0 ? !1 : i;
    return Lw(e, t, { debounceMode: a !== !1 });
  }
  const $h = y.createContext({}),
    kw = (e) => {
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
    Bw = (e) => {
      const { componentCls: t } = e;
      return { [t]: { position: 'relative', maxWidth: '100%', minHeight: 1 } };
    },
    Vw = (e, t) => {
      const { componentCls: n, gridColumns: r } = e,
        i = {};
      for (let a = r; a >= 0; a--)
        a === 0
          ? ((i[`${n}${t}-${a}`] = { display: 'none' }),
            (i[`${n}-push-${a}`] = { insetInlineStart: 'auto' }),
            (i[`${n}-pull-${a}`] = { insetInlineEnd: 'auto' }),
            (i[`${n}${t}-push-${a}`] = { insetInlineStart: 'auto' }),
            (i[`${n}${t}-pull-${a}`] = { insetInlineEnd: 'auto' }),
            (i[`${n}${t}-offset-${a}`] = { marginInlineEnd: 0 }),
            (i[`${n}${t}-order-${a}`] = { order: 0 }))
          : ((i[`${n}${t}-${a}`] = { display: 'block', flex: `0 0 ${(a / r) * 100}%`, maxWidth: `${(a / r) * 100}%` }),
            (i[`${n}${t}-push-${a}`] = { insetInlineStart: `${(a / r) * 100}%` }),
            (i[`${n}${t}-pull-${a}`] = { insetInlineEnd: `${(a / r) * 100}%` }),
            (i[`${n}${t}-offset-${a}`] = { marginInlineStart: `${(a / r) * 100}%` }),
            (i[`${n}${t}-order-${a}`] = { order: a }));
      return i;
    },
    gc = (e, t) => Vw(e, t),
    Ww = (e, t, n) => ({ [`@media (min-width: ${t}px)`]: Object.assign({}, gc(e, n)) }),
    Uw = jn('Grid', (e) => [kw(e)]),
    qw = jn('Grid', (e) => {
      const t = Yt(e, { gridColumns: 24 }),
        n = {
          '-sm': t.screenSMMin,
          '-md': t.screenMDMin,
          '-lg': t.screenLGMin,
          '-xl': t.screenXLMin,
          '-xxl': t.screenXXLMin,
        };
      return [
        Bw(t),
        gc(t, ''),
        gc(t, '-xs'),
        Object.keys(n)
          .map((r) => Ww(t, n[r], r))
          .reduce((r, i) => Object.assign(Object.assign({}, r), i), {}),
      ];
    });
  var Gw =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  function Kw(e) {
    return typeof e == 'number' ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
  }
  const Xw = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    Yw = Ve((e, t) => {
      const { getPrefixCls: n, direction: r } = Be(At),
        { gutter: i, wrap: a, supportFlexGap: s } = Be($h),
        {
          prefixCls: c,
          span: f,
          order: p,
          offset: h,
          push: m,
          pull: v,
          className: w,
          children: S,
          flex: C,
          style: _,
        } = e,
        E = Gw(e, ['prefixCls', 'span', 'order', 'offset', 'push', 'pull', 'className', 'children', 'flex', 'style']),
        I = n('col', c),
        [N, D] = qw(I);
      let z = {};
      Xw.forEach((P) => {
        let R = {};
        const A = e[P];
        typeof A == 'number' ? (R.span = A) : typeof A == 'object' && (R = A || {}),
          delete E[P],
          (z = Object.assign(Object.assign({}, z), {
            [`${I}-${P}-${R.span}`]: R.span !== void 0,
            [`${I}-${P}-order-${R.order}`]: R.order || R.order === 0,
            [`${I}-${P}-offset-${R.offset}`]: R.offset || R.offset === 0,
            [`${I}-${P}-push-${R.push}`]: R.push || R.push === 0,
            [`${I}-${P}-pull-${R.pull}`]: R.pull || R.pull === 0,
            [`${I}-rtl`]: r === 'rtl',
          }));
      });
      const u = Ce(
          I,
          {
            [`${I}-${f}`]: f !== void 0,
            [`${I}-order-${p}`]: p,
            [`${I}-offset-${h}`]: h,
            [`${I}-push-${m}`]: m,
            [`${I}-pull-${v}`]: v,
          },
          w,
          z,
          D,
        ),
        $ = {};
      if (i && i[0] > 0) {
        const P = i[0] / 2;
        ($.paddingLeft = P), ($.paddingRight = P);
      }
      if (i && i[1] > 0 && !s) {
        const P = i[1] / 2;
        ($.paddingTop = P), ($.paddingBottom = P);
      }
      return (
        C && (($.flex = Kw(C)), a === !1 && !$.minWidth && ($.minWidth = 0)),
        N(
          y.createElement(
            'div',
            Object.assign({}, E, { style: Object.assign(Object.assign({}, $), _), className: u, ref: t }),
            S,
          ),
        )
      );
    });
  var Qw =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  function Oh(e, t) {
    const [n, r] = Te(typeof e == 'string' ? e : ''),
      i = () => {
        if ((typeof e == 'string' && r(e), typeof e == 'object'))
          for (let a = 0; a < fi.length; a++) {
            const s = fi[a];
            if (!t[s]) continue;
            const c = e[s];
            if (c !== void 0) {
              r(c);
              return;
            }
          }
      };
    return (
      ke(() => {
        i();
      }, [JSON.stringify(e), t]),
      n
    );
  }
  const Jw = Ve((e, t) => {
      const { prefixCls: n, justify: r, align: i, className: a, style: s, children: c, gutter: f = 0, wrap: p } = e,
        h = Qw(e, ['prefixCls', 'justify', 'align', 'className', 'style', 'children', 'gutter', 'wrap']),
        { getPrefixCls: m, direction: v } = Be(At),
        [w, S] = Te({ xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 }),
        [C, _] = Te({ xs: !1, sm: !1, md: !1, lg: !1, xl: !1, xxl: !1 }),
        E = Oh(i, C),
        I = Oh(r, C),
        N = yh(),
        D = le(f),
        z = sh();
      ke(() => {
        const Z = z.subscribe((ee) => {
          _(ee);
          const fe = D.current || 0;
          ((!Array.isArray(fe) && typeof fe == 'object') ||
            (Array.isArray(fe) && (typeof fe[0] == 'object' || typeof fe[1] == 'object'))) &&
            S(ee);
        });
        return () => z.unsubscribe(Z);
      }, []);
      const u = () => {
          const Z = [void 0, void 0];
          return (
            (Array.isArray(f) ? f : [f, void 0]).forEach((fe, de) => {
              if (typeof fe == 'object')
                for (let ye = 0; ye < fi.length; ye++) {
                  const J = fi[ye];
                  if (w[J] && fe[J] !== void 0) {
                    Z[de] = fe[J];
                    break;
                  }
                }
              else Z[de] = fe;
            }),
            Z
          );
        },
        $ = m('row', n),
        [P, R] = Uw($),
        A = u(),
        B = Ce($, { [`${$}-no-wrap`]: p === !1, [`${$}-${I}`]: I, [`${$}-${E}`]: E, [`${$}-rtl`]: v === 'rtl' }, a, R),
        F = {},
        M = A[0] != null && A[0] > 0 ? A[0] / -2 : void 0,
        j = A[1] != null && A[1] > 0 ? A[1] / -2 : void 0;
      M && ((F.marginLeft = M), (F.marginRight = M)),
        N ? ([, F.rowGap] = A) : j && ((F.marginTop = j), (F.marginBottom = j));
      const [V, U] = A,
        X = Fe(() => ({ gutter: [V, U], wrap: p, supportFlexGap: N }), [V, U, p, N]);
      return P(
        y.createElement(
          $h.Provider,
          { value: X },
          y.createElement(
            'div',
            Object.assign({}, h, { className: B, style: Object.assign(Object.assign({}, F), s), ref: t }),
            c,
          ),
        ),
      );
    }),
    Zw = (e) => {
      const { componentCls: t, sizePaddingEdgeHorizontal: n, colorSplit: r, lineWidth: i } = e;
      return {
        [t]: Object.assign(Object.assign({}, fr(e)), {
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
    eE = jn(
      'Divider',
      (e) => {
        const t = Yt(e, {
          dividerVerticalGutterMargin: e.marginXS,
          dividerHorizontalWithTextGutterMargin: e.margin,
          dividerHorizontalGutterMargin: e.marginLG,
        });
        return [Zw(t)];
      },
      { sizePaddingEdgeHorizontal: 0 },
    );
  var tE =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const _h = (e) => {
    const { getPrefixCls: t, direction: n } = Be(At),
      {
        prefixCls: r,
        type: i = 'horizontal',
        orientation: a = 'center',
        orientationMargin: s,
        className: c,
        rootClassName: f,
        children: p,
        dashed: h,
        plain: m,
      } = e,
      v = tE(e, [
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
      w = t('divider', r),
      [S, C] = eE(w),
      _ = a.length > 0 ? `-${a}` : a,
      E = !!p,
      I = a === 'left' && s != null,
      N = a === 'right' && s != null,
      D = Ce(
        w,
        C,
        `${w}-${i}`,
        {
          [`${w}-with-text`]: E,
          [`${w}-with-text${_}`]: E,
          [`${w}-dashed`]: !!h,
          [`${w}-plain`]: !!m,
          [`${w}-rtl`]: n === 'rtl',
          [`${w}-no-default-orientation-margin-left`]: I,
          [`${w}-no-default-orientation-margin-right`]: N,
        },
        c,
        f,
      ),
      z = Object.assign(Object.assign({}, I && { marginLeft: s }), N && { marginRight: s });
    return S(
      y.createElement(
        'div',
        Object.assign({ className: D }, v, { role: 'separator' }),
        p && i !== 'vertical' && y.createElement('span', { className: `${w}-inner-text`, style: z }, p),
      ),
    );
  };
  var nE = function (t) {
      var n = t.prefixCls,
        r = t.className,
        i = t.style,
        a = t.children,
        s = t.containerRef;
      return y.createElement(
        y.Fragment,
        null,
        y.createElement(
          'div',
          { className: Ce(''.concat(n, '-content'), r), style: G({}, i), 'aria-modal': 'true', role: 'dialog', ref: s },
          a,
        ),
      );
    },
    Ih = y.createContext(null);
  function Th(e) {
    return typeof e == 'string' && String(Number(e)) === e
      ? (Zn(!1, 'Invalid value type of `width` or `height` which should be number type instead.'), Number(e))
      : e;
  }
  var Ph = { width: 0, height: 0, overflow: 'hidden', outline: 'none', position: 'absolute' };
  function rE(e, t) {
    var n,
      r,
      i,
      a,
      s = e.prefixCls,
      c = e.open,
      f = e.placement,
      p = e.inline,
      h = e.push,
      m = e.forceRender,
      v = e.autoFocus,
      w = e.keyboard,
      S = e.rootClassName,
      C = e.rootStyle,
      _ = e.zIndex,
      E = e.className,
      I = e.style,
      N = e.motion,
      D = e.width,
      z = e.height,
      u = e.children,
      $ = e.contentWrapperStyle,
      P = e.mask,
      R = e.maskClosable,
      A = e.maskMotion,
      B = e.maskClassName,
      F = e.maskStyle,
      M = e.afterOpenChange,
      j = e.onClose,
      V = le(),
      U = le(),
      X = le();
    hn(t, function () {
      return V.current;
    });
    var Z = function (oe) {
      var Ne = oe.keyCode,
        Ae = oe.shiftKey;
      switch (Ne) {
        case ve.TAB: {
          if (Ne === ve.TAB) {
            if (!Ae && document.activeElement === X.current) {
              var re;
              (re = U.current) === null || re === void 0 || re.focus({ preventScroll: !0 });
            } else if (Ae && document.activeElement === U.current) {
              var ae;
              (ae = X.current) === null || ae === void 0 || ae.focus({ preventScroll: !0 });
            }
          }
          break;
        }
        case ve.ESC: {
          j && w && (oe.stopPropagation(), j(oe));
          break;
        }
      }
    };
    ke(
      function () {
        if (c && v) {
          var Me;
          (Me = V.current) === null || Me === void 0 || Me.focus({ preventScroll: !0 });
        }
      },
      [c],
    );
    var ee = Te(!1),
      fe = ge(ee, 2),
      de = fe[0],
      ye = fe[1],
      J = Be(Ih),
      be;
    h === !1 ? (be = { distance: 0 }) : h === !0 ? (be = {}) : (be = h || {});
    var Se =
        (n =
          (r = (i = be) === null || i === void 0 ? void 0 : i.distance) !== null && r !== void 0
            ? r
            : J == null
            ? void 0
            : J.pushDistance) !== null && n !== void 0
          ? n
          : 180,
      me = Fe(
        function () {
          return {
            pushDistance: Se,
            push: function () {
              ye(!0);
            },
            pull: function () {
              ye(!1);
            },
          };
        },
        [Se],
      );
    ke(
      function () {
        if (c) {
          var Me;
          J == null || (Me = J.push) === null || Me === void 0 || Me.call(J);
        } else {
          var oe;
          J == null || (oe = J.pull) === null || oe === void 0 || oe.call(J);
        }
      },
      [c],
    ),
      ke(function () {
        return function () {
          var Me;
          J == null || (Me = J.pull) === null || Me === void 0 || Me.call(J);
        };
      }, []);
    var pe =
        P &&
        y.createElement(wo, mt({ key: 'mask' }, A, { visible: c }), function (Me, oe) {
          var Ne = Me.className,
            Ae = Me.style;
          return y.createElement('div', {
            className: Ce(''.concat(s, '-mask'), Ne, B),
            style: G(G({}, Ae), F),
            onClick: R && c ? j : void 0,
            ref: oe,
          });
        }),
      Oe = typeof N == 'function' ? N(f) : N,
      Ee = {};
    if (de && Se)
      switch (f) {
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
    f === 'left' || f === 'right' ? (Ee.width = Th(D)) : (Ee.height = Th(z));
    var Ge = y.createElement(
        wo,
        mt({ key: 'panel' }, Oe, {
          visible: c,
          forceRender: m,
          onVisibleChanged: function (oe) {
            M == null || M(oe);
          },
          removeOnLeave: !1,
          leavedClassName: ''.concat(s, '-content-wrapper-hidden'),
        }),
        function (Me, oe) {
          var Ne = Me.className,
            Ae = Me.style;
          return y.createElement(
            'div',
            { className: Ce(''.concat(s, '-content-wrapper'), Ne), style: G(G(G({}, Ee), Ae), $) },
            y.createElement(nE, { containerRef: oe, prefixCls: s, className: E, style: I }, u),
          );
        },
      ),
      He = G({}, C);
    return (
      _ && (He.zIndex = _),
      y.createElement(
        Ih.Provider,
        { value: me },
        y.createElement(
          'div',
          {
            className: Ce(
              s,
              ''.concat(s, '-').concat(f),
              S,
              ((a = {}), $e(a, ''.concat(s, '-open'), c), $e(a, ''.concat(s, '-inline'), p), a),
            ),
            style: He,
            tabIndex: -1,
            ref: V,
            onKeyDown: Z,
          },
          pe,
          y.createElement('div', { tabIndex: 0, ref: U, style: Ph, 'aria-hidden': 'true', 'data-sentinel': 'start' }),
          Ge,
          y.createElement('div', { tabIndex: 0, ref: X, style: Ph, 'aria-hidden': 'true', 'data-sentinel': 'end' }),
        ),
      )
    );
  }
  var iE = Ve(rE),
    oE = function (t) {
      var n = t.open,
        r = n === void 0 ? !1 : n,
        i = t.prefixCls,
        a = i === void 0 ? 'rc-drawer' : i,
        s = t.placement,
        c = s === void 0 ? 'right' : s,
        f = t.autoFocus,
        p = f === void 0 ? !0 : f,
        h = t.keyboard,
        m = h === void 0 ? !0 : h,
        v = t.width,
        w = v === void 0 ? 378 : v,
        S = t.mask,
        C = S === void 0 ? !0 : S,
        _ = t.maskClosable,
        E = _ === void 0 ? !0 : _,
        I = t.getContainer,
        N = t.forceRender,
        D = t.afterOpenChange,
        z = t.destroyOnClose,
        u = Te(!1),
        $ = ge(u, 2),
        P = $[0],
        R = $[1],
        A = le(),
        B = le();
      Vt(
        function () {
          r && (B.current = document.activeElement);
        },
        [r],
      );
      var F = function (V) {
        var U;
        if (
          (R(V),
          D == null || D(V),
          !V && B.current && !(!((U = A.current) === null || U === void 0) && U.contains(B.current)))
        ) {
          var X;
          (X = B.current) === null || X === void 0 || X.focus();
        }
      };
      if (!N && !P && !r && z) return null;
      var M = G(
        G({}, t),
        {},
        {
          open: r,
          prefixCls: a,
          placement: c,
          autoFocus: p,
          keyboard: m,
          width: w,
          mask: C,
          maskClosable: E,
          inline: I === !1,
          afterOpenChange: F,
          ref: A,
        },
      );
      return y.createElement(
        Kl,
        { open: r || N || P, autoDestroy: !1, getContainer: I, autoLock: C && (r || P) },
        y.createElement(iE, M),
      );
    };
  function Nh(e) {
    const {
        prefixCls: t,
        title: n,
        footer: r,
        extra: i,
        closable: a = !0,
        closeIcon: s = y.createElement(jl, null),
        onClose: c,
        headerStyle: f,
        drawerStyle: p,
        bodyStyle: h,
        footerStyle: m,
        children: v,
      } = e,
      w =
        a &&
        y.createElement('button', { type: 'button', onClick: c, 'aria-label': 'Close', className: `${t}-close` }, s);
    function S() {
      return !n && !a
        ? null
        : y.createElement(
            'div',
            { className: Ce(`${t}-header`, { [`${t}-header-close-only`]: a && !n && !i }), style: f },
            y.createElement(
              'div',
              { className: `${t}-header-title` },
              w,
              n && y.createElement('div', { className: `${t}-title` }, n),
            ),
            i && y.createElement('div', { className: `${t}-extra` }, i),
          );
    }
    function C() {
      if (!r) return null;
      const _ = `${t}-footer`;
      return y.createElement('div', { className: _, style: m }, r);
    }
    return y.createElement(
      'div',
      { className: `${t}-wrapper-body`, style: Object.assign({}, p) },
      S(),
      y.createElement('div', { className: `${t}-body`, style: h }, v),
      C(),
    );
  }
  const aE = (e) => {
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
    sE = (e) => {
      const {
          componentCls: t,
          zIndexPopup: n,
          colorBgMask: r,
          colorBgElevated: i,
          motionDurationSlow: a,
          motionDurationMid: s,
          padding: c,
          paddingLG: f,
          fontSizeLG: p,
          lineHeightLG: h,
          lineWidth: m,
          lineType: v,
          colorSplit: w,
          marginSM: S,
          colorIcon: C,
          colorIconHover: _,
          colorText: E,
          fontWeightStrong: I,
          drawerFooterPaddingVertical: N,
          drawerFooterPaddingHorizontal: D,
        } = e,
        z = `${t}-content-wrapper`;
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
          [z]: { position: 'absolute', zIndex: n, transition: `all ${a}`, '&-hidden': { display: 'none' } },
          [`&-left > ${z}`]: {
            top: 0,
            bottom: 0,
            left: { _skip_check_: !0, value: 0 },
            boxShadow: e.boxShadowDrawerLeft,
          },
          [`&-right > ${z}`]: {
            top: 0,
            right: { _skip_check_: !0, value: 0 },
            bottom: 0,
            boxShadow: e.boxShadowDrawerRight,
          },
          [`&-top > ${z}`]: { top: 0, insetInline: 0, boxShadow: e.boxShadowDrawerUp },
          [`&-bottom > ${z}`]: { bottom: 0, insetInline: 0, boxShadow: e.boxShadowDrawerDown },
          [`${t}-content`]: { width: '100%', height: '100%', overflow: 'auto', background: i, pointerEvents: 'auto' },
          [`${t}-wrapper-body`]: { display: 'flex', flexDirection: 'column', width: '100%', height: '100%' },
          [`${t}-header`]: {
            display: 'flex',
            flex: 0,
            alignItems: 'center',
            padding: `${c}px ${f}px`,
            fontSize: p,
            lineHeight: h,
            borderBottom: `${m}px ${v} ${w}`,
            '&-title': { display: 'flex', flex: 1, alignItems: 'center', minWidth: 0, minHeight: 0 },
          },
          [`${t}-extra`]: { flex: 'none' },
          [`${t}-close`]: {
            display: 'inline-block',
            marginInlineEnd: S,
            color: C,
            fontWeight: I,
            fontSize: p,
            fontStyle: 'normal',
            lineHeight: 1,
            textAlign: 'center',
            textTransform: 'none',
            textDecoration: 'none',
            background: 'transparent',
            border: 0,
            outline: 0,
            cursor: 'pointer',
            transition: `color ${s}`,
            textRendering: 'auto',
            '&:focus, &:hover': { color: _, textDecoration: 'none' },
          },
          [`${t}-title`]: { flex: 1, margin: 0, color: E, fontWeight: e.fontWeightStrong, fontSize: p, lineHeight: h },
          [`${t}-body`]: { flex: 1, minWidth: 0, minHeight: 0, padding: f, overflow: 'auto' },
          [`${t}-footer`]: { flexShrink: 0, padding: `${N}px ${D}px`, borderTop: `${m}px ${v} ${w}` },
          '&-rtl': { direction: 'rtl' },
        },
      };
    },
    Rh = jn(
      'Drawer',
      (e) => {
        const t = Yt(e, { drawerFooterPaddingVertical: e.paddingXS, drawerFooterPaddingHorizontal: e.padding });
        return [sE(t), aE(t)];
      },
      (e) => ({ zIndexPopup: e.zIndexPopupBase }),
    );
  var Mh =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const lE = { distance: 180 };
  function mc(e) {
    const {
        rootClassName: t,
        width: n,
        height: r,
        size: i = 'default',
        mask: a = !0,
        push: s = lE,
        open: c,
        afterOpenChange: f,
        onClose: p,
        prefixCls: h,
        getContainer: m,
        visible: v,
        afterVisibleChange: w,
      } = e,
      S = Mh(e, [
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
      { getPopupContainer: C, getPrefixCls: _, direction: E } = Be(At),
      I = _('drawer', h),
      [N, D] = Rh(I),
      z = m === void 0 && C ? () => C(document.body) : m,
      u = Ce({ 'no-mask': !a, [`${I}-rtl`]: E === 'rtl' }, t, D),
      $ = Fe(() => n ?? (i === 'large' ? 736 : 378), [n, i]),
      P = Fe(() => r ?? (i === 'large' ? 736 : 378), [r, i]),
      R = { motionName: Wa(I, 'mask-motion'), motionAppear: !0, motionEnter: !0, motionLeave: !0, motionDeadline: 500 },
      A = (B) => ({
        motionName: Wa(I, `panel-motion-${B}`),
        motionAppear: !0,
        motionEnter: !0,
        motionLeave: !0,
        motionDeadline: 500,
      });
    return N(
      y.createElement(
        nS,
        null,
        y.createElement(
          CS,
          { status: !0, override: !0 },
          y.createElement(
            oE,
            Object.assign({ prefixCls: I, onClose: p, maskMotion: R, motion: A }, S, {
              open: c ?? v,
              mask: a,
              push: s,
              width: $,
              height: P,
              rootClassName: u,
              getContainer: z,
              afterOpenChange: f ?? w,
            }),
            y.createElement(Nh, Object.assign({ prefixCls: I }, S, { onClose: p })),
          ),
        ),
      ),
    );
  }
  function cE(e) {
    var { prefixCls: t, style: n, className: r, placement: i = 'right' } = e,
      a = Mh(e, ['prefixCls', 'style', 'className', 'placement']);
    const { getPrefixCls: s } = Be(At),
      c = s('drawer', t),
      [f, p] = Rh(c);
    return f(
      y.createElement(
        'div',
        { className: Ce(c, `${c}-pure`, `${c}-${i}`, p, r), style: n },
        y.createElement(Nh, Object.assign({ prefixCls: c }, a)),
      ),
    );
  }
  mc._InternalPanelDoNotUseOrYouWillBeFired = cE;
  function vc(e) {
    return !!(e.addonBefore || e.addonAfter);
  }
  function uE(e) {
    return !!(e.prefix || e.suffix || e.allowClear);
  }
  function yc(e, t, n, r) {
    if (n) {
      var i = t;
      if (t.type === 'click') {
        var a = e.cloneNode(!0);
        (i = Object.create(t, { target: { value: a }, currentTarget: { value: a } })), (a.value = ''), n(i);
        return;
      }
      if (r !== void 0) {
        (i = Object.create(t, { target: { value: e }, currentTarget: { value: e } })), (e.value = r), n(i);
        return;
      }
      n(i);
    }
  }
  function fE(e) {
    return typeof e > 'u' || e === null ? '' : String(e);
  }
  var dE = function (t) {
    var n,
      r = t.inputElement,
      i = t.prefixCls,
      a = t.prefix,
      s = t.suffix,
      c = t.addonBefore,
      f = t.addonAfter,
      p = t.className,
      h = t.style,
      m = t.affixWrapperClassName,
      v = t.groupClassName,
      w = t.wrapperClassName,
      S = t.disabled,
      C = t.readOnly,
      _ = t.focused,
      E = t.triggerFocus,
      I = t.allowClear,
      N = t.value,
      D = t.handleReset,
      z = t.hidden,
      u = t.inputStyle,
      $ = t.classes,
      P = le(null),
      R = function (de) {
        var ye;
        (ye = P.current) !== null && ye !== void 0 && ye.contains(de.target) && (E == null || E());
      },
      A = function () {
        var de;
        if (!I) return null;
        var ye = !S && !C && N,
          J = ''.concat(i, '-clear-icon'),
          be = xt(I) === 'object' && I !== null && I !== void 0 && I.clearIcon ? I.clearIcon : '✖';
        return Pe.createElement(
          'span',
          {
            onClick: D,
            onMouseDown: function (me) {
              return me.preventDefault();
            },
            className: Ce(
              J,
              ((de = {}), $e(de, ''.concat(J, '-hidden'), !ye), $e(de, ''.concat(J, '-has-suffix'), !!s), de),
            ),
            role: 'button',
            tabIndex: -1,
          },
          be,
        );
      },
      B = cn(r, { value: N, hidden: z, style: G(G({}, (n = r.props) === null || n === void 0 ? void 0 : n.style), u) });
    if (uE(t)) {
      var F,
        M = ''.concat(i, '-affix-wrapper'),
        j = Ce(
          M,
          ((F = {}),
          $e(F, ''.concat(M, '-disabled'), S),
          $e(F, ''.concat(M, '-focused'), _),
          $e(F, ''.concat(M, '-readonly'), C),
          $e(F, ''.concat(M, '-input-with-clear-btn'), s && I && N),
          F),
          !vc(t) && p,
          m,
          $ == null ? void 0 : $.affixWrapper,
        ),
        V = (s || I) && Pe.createElement('span', { className: ''.concat(i, '-suffix') }, A(), s);
      B = Pe.createElement(
        'span',
        { className: j, style: h, hidden: !vc(t) && z, onClick: R, ref: P },
        a && Pe.createElement('span', { className: ''.concat(i, '-prefix') }, a),
        cn(r, { style: u ?? null, value: N, hidden: null }),
        V,
      );
    }
    if (vc(t)) {
      var U = ''.concat(i, '-group'),
        X = ''.concat(U, '-addon'),
        Z = Ce(''.concat(i, '-wrapper'), U, w, $ == null ? void 0 : $.wrapper),
        ee = Ce(''.concat(i, '-group-wrapper'), p, v, $ == null ? void 0 : $.group);
      return Pe.createElement(
        'span',
        { className: ee, style: h, hidden: z },
        Pe.createElement(
          'span',
          { className: Z },
          c && Pe.createElement('span', { className: X }, c),
          cn(B, { style: u ?? null, hidden: null }),
          f && Pe.createElement('span', { className: X }, f),
        ),
      );
    }
    return B;
  };
  globalThis && globalThis.__rest;
  function pE(e, t) {
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
  var hE = `
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
    gE = [
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
    bc = {},
    rr;
  function mE(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      n = e.getAttribute('id') || e.getAttribute('data-reactid') || e.getAttribute('name');
    if (t && bc[n]) return bc[n];
    var r = window.getComputedStyle(e),
      i =
        r.getPropertyValue('box-sizing') ||
        r.getPropertyValue('-moz-box-sizing') ||
        r.getPropertyValue('-webkit-box-sizing'),
      a = parseFloat(r.getPropertyValue('padding-bottom')) + parseFloat(r.getPropertyValue('padding-top')),
      s = parseFloat(r.getPropertyValue('border-bottom-width')) + parseFloat(r.getPropertyValue('border-top-width')),
      c = gE
        .map(function (p) {
          return ''.concat(p, ':').concat(r.getPropertyValue(p));
        })
        .join(';'),
      f = { sizingStyle: c, paddingSize: a, borderSize: s, boxSizing: i };
    return t && n && (bc[n] = f), f;
  }
  function vE(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
      r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    rr ||
      ((rr = document.createElement('textarea')),
      rr.setAttribute('tab-index', '-1'),
      rr.setAttribute('aria-hidden', 'true'),
      document.body.appendChild(rr)),
      e.getAttribute('wrap') ? rr.setAttribute('wrap', e.getAttribute('wrap')) : rr.removeAttribute('wrap');
    var i = mE(e, t),
      a = i.paddingSize,
      s = i.borderSize,
      c = i.boxSizing,
      f = i.sizingStyle;
    rr.setAttribute('style', ''.concat(f, ';').concat(hE)), (rr.value = e.value || e.placeholder || '');
    var p = void 0,
      h = void 0,
      m,
      v = rr.scrollHeight;
    if ((c === 'border-box' ? (v += s) : c === 'content-box' && (v -= a), n !== null || r !== null)) {
      rr.value = ' ';
      var w = rr.scrollHeight - a;
      n !== null && ((p = w * n), c === 'border-box' && (p = p + a + s), (v = Math.max(p, v))),
        r !== null &&
          ((h = w * r), c === 'border-box' && (h = h + a + s), (m = v > h ? '' : 'hidden'), (v = Math.min(h, v)));
    }
    var S = { height: v, overflowY: m, resize: 'none' };
    return p && (S.minHeight = p), h && (S.maxHeight = h), S;
  }
  var yE = [
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
    Sc = 0,
    Cc = 1,
    xc = 2,
    bE = Ve(function (e, t) {
      var n = e,
        r = n.prefixCls;
      n.onPressEnter;
      var i = n.defaultValue,
        a = n.value,
        s = n.autoSize,
        c = n.onResize,
        f = n.className,
        p = n.style,
        h = n.disabled,
        m = n.onChange;
      n.onInternalAutoSize;
      var v = qt(n, yE),
        w = _r(i, {
          value: a,
          postState: function (be) {
            return be ?? '';
          },
        }),
        S = ge(w, 2),
        C = S[0],
        _ = S[1],
        E = function (be) {
          _(be.target.value), m == null || m(be);
        },
        I = le();
      hn(t, function () {
        return { textArea: I.current };
      });
      var N = Fe(
          function () {
            return s && xt(s) === 'object' ? [s.minRows, s.maxRows] : [];
          },
          [s],
        ),
        D = ge(N, 2),
        z = D[0],
        u = D[1],
        $ = !!s,
        P = function () {
          try {
            if (document.activeElement === I.current) {
              var be = I.current,
                Se = be.selectionStart,
                me = be.selectionEnd,
                pe = be.scrollTop;
              I.current.setSelectionRange(Se, me), (I.current.scrollTop = pe);
            }
          } catch {}
        },
        R = Te(xc),
        A = ge(R, 2),
        B = A[0],
        F = A[1],
        M = Te(),
        j = ge(M, 2),
        V = j[0],
        U = j[1],
        X = function () {
          F(Sc);
        };
      Vt(
        function () {
          $ && X();
        },
        [a, z, u, $],
      ),
        Vt(
          function () {
            if (B === Sc) F(Cc);
            else if (B === Cc) {
              var J = vE(I.current, !1, z, u);
              F(xc), U(J);
            } else P();
          },
          [B],
        );
      var Z = le(),
        ee = function () {
          In.cancel(Z.current);
        },
        fe = function (be) {
          B === xc &&
            (c == null || c(be),
            s &&
              (ee(),
              (Z.current = In(function () {
                X();
              }))));
        };
      ke(function () {
        return ee;
      }, []);
      var de = $ ? V : null,
        ye = G(G({}, p), de);
      return (
        (B === Sc || B === Cc) && ((ye.overflowY = 'hidden'), (ye.overflowX = 'hidden')),
        y.createElement(
          jr,
          { onResize: fe, disabled: !(s || c) },
          y.createElement(
            'textarea',
            mt({}, v, {
              ref: I,
              style: ye,
              className: Ce(r, f, $e({}, ''.concat(r, '-disabled'), h)),
              disabled: h,
              value: C,
              onChange: E,
            }),
          ),
        )
      );
    }),
    SE = [
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
  function Ah(e, t) {
    return ze(e || '')
      .slice(0, t)
      .join('');
  }
  function Dh(e, t, n, r) {
    var i = n;
    return e ? (i = Ah(n, r)) : ze(t || '').length < n.length && ze(n || '').length > r && (i = t), i;
  }
  var CE = Pe.forwardRef(function (e, t) {
      var n = e.defaultValue,
        r = e.value,
        i = e.onChange,
        a = e.allowClear,
        s = e.maxLength,
        c = e.onCompositionStart,
        f = e.onCompositionEnd,
        p = e.suffix,
        h = e.prefixCls,
        m = h === void 0 ? 'rc-textarea' : h,
        v = e.classes,
        w = e.showCount,
        S = e.className,
        C = e.style,
        _ = e.disabled,
        E = qt(e, SE),
        I = _r(n, { value: r, defaultValue: n }),
        N = ge(I, 2),
        D = N[0],
        z = N[1],
        u = le(null),
        $ = Pe.useState(!1),
        P = ge($, 2),
        R = P[0],
        A = P[1],
        B = Pe.useRef(),
        F = Pe.useRef(0),
        M = function () {
          u.current.textArea.focus();
        };
      hn(t, function () {
        return {
          resizableTextArea: u.current,
          focus: M,
          blur: function () {
            u.current.textArea.blur();
          },
        };
      });
      var j = Number(s) > 0,
        V = function (Se) {
          A(!0), (B.current = D), (F.current = Se.currentTarget.selectionStart), c == null || c(Se);
        },
        U = function (Se) {
          A(!1);
          var me = Se.currentTarget.value;
          if (j) {
            var pe,
              Oe =
                F.current >= s + 1 || F.current === ((pe = B.current) === null || pe === void 0 ? void 0 : pe.length);
            me = Dh(Oe, B.current, me, s);
          }
          me !== D && (z(me), yc(Se.currentTarget, Se, i, me)), f == null || f(Se);
        },
        X = function (Se) {
          var me = Se.target.value;
          if (!R && j) {
            var pe =
              Se.target.selectionStart >= s + 1 || Se.target.selectionStart === me.length || !Se.target.selectionStart;
            me = Dh(pe, D, me, s);
          }
          z(me), yc(Se.currentTarget, Se, i, me);
        },
        Z = function (Se) {
          var me = E.onPressEnter,
            pe = E.onKeyDown;
          Se.key === 'Enter' && me && me(Se), pe == null || pe(Se);
        },
        ee = function (Se) {
          z(''), M(), yc(u.current.textArea, Se, i);
        },
        fe = fE(D);
      !R && j && r == null && (fe = Ah(fe, s));
      var de = Pe.createElement(dE, {
        value: fe,
        allowClear: a,
        handleReset: ee,
        suffix: p,
        prefixCls: m,
        classes: { affixWrapper: v == null ? void 0 : v.affixWrapper },
        disabled: _,
        style: C,
        inputStyle: { resize: C == null ? void 0 : C.resize },
        inputElement: Pe.createElement(
          bE,
          mt({}, E, {
            onKeyDown: Z,
            onChange: X,
            onCompositionStart: V,
            onCompositionEnd: U,
            className: Ce(w ? '' : S, v == null ? void 0 : v.textarea),
            style: !w && C,
            disabled: _,
            prefixCls: m,
            ref: u,
          }),
        ),
      });
      if (w) {
        var ye = ze(fe).length,
          J;
        return (
          xt(w) === 'object'
            ? (J = w.formatter({ value: fe, count: ye, maxLength: s }))
            : (J = ''.concat(ye).concat(j ? ' / '.concat(s) : '')),
          Pe.createElement(
            'div',
            {
              hidden: E.hidden,
              className: Ce(''.concat(m, '-show-count'), S, v == null ? void 0 : v.countWrapper),
              style: C,
              'data-count': J,
            },
            de,
            Pe.createElement('span', { className: ''.concat(m, '-data-count') }, J),
          )
        );
      }
      return de;
    }),
    xE =
      (globalThis && globalThis.__rest) ||
      function (e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
          for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n;
      };
  const wE = Ve((e, t) => {
    var { prefixCls: n, bordered: r = !0, size: i, disabled: a, status: s, allowClear: c } = e,
      f = xE(e, ['prefixCls', 'bordered', 'size', 'disabled', 'status', 'allowClear']);
    const { getPrefixCls: p, direction: h } = Be(At),
      m = Be(Co),
      v = i || m,
      w = Be(Nl),
      S = a ?? w,
      { status: C, hasFeedback: _, feedbackIcon: E } = Be(qa),
      I = Zp(C, s),
      N = le(null);
    hn(t, () => {
      var P;
      return {
        resizableTextArea: (P = N.current) === null || P === void 0 ? void 0 : P.resizableTextArea,
        focus: (R) => {
          var A, B;
          pE(
            (B = (A = N.current) === null || A === void 0 ? void 0 : A.resizableTextArea) === null || B === void 0
              ? void 0
              : B.textArea,
            R,
          );
        },
        blur: () => {
          var R;
          return (R = N.current) === null || R === void 0 ? void 0 : R.blur();
        },
      };
    });
    const D = p('input', n);
    let z;
    typeof c == 'object' && c != null && c.clearIcon ? (z = c) : c && (z = { clearIcon: y.createElement(Fl, null) });
    const [u, $] = zw(D);
    return u(
      y.createElement(
        CE,
        Object.assign({}, f, {
          disabled: S,
          allowClear: z,
          classes: {
            affixWrapper: Ce(
              `${D}-textarea-affix-wrapper`,
              {
                [`${D}-affix-wrapper-rtl`]: h === 'rtl',
                [`${D}-affix-wrapper-borderless`]: !r,
                [`${D}-affix-wrapper-sm`]: v === 'small',
                [`${D}-affix-wrapper-lg`]: v === 'large',
              },
              ac(`${D}-affix-wrapper`, I),
              $,
            ),
            countWrapper: Ce(`${D}-textarea`, `${D}-textarea-show-count`, $),
            textarea: Ce(
              { [`${D}-borderless`]: !r, [`${D}-sm`]: v === 'small', [`${D}-lg`]: v === 'large' },
              ac(D, I),
              $,
            ),
          },
          prefixCls: D,
          suffix: _ && y.createElement('span', { className: `${D}-textarea-suffix` }, E),
          ref: N,
        }),
      ),
    );
  });
  var EE = {
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
  const $E = EE;
  var Fh = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: $E }));
  };
  Fh.displayName = 'DoubleLeftOutlined';
  const OE = Ve(Fh);
  var _E = {
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
  const IE = _E;
  var jh = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: IE }));
  };
  jh.displayName = 'DoubleRightOutlined';
  const TE = Ve(jh);
  var To = function (t) {
    var n,
      r = ''.concat(t.rootPrefixCls, '-item'),
      i = Ce(
        r,
        ''.concat(r, '-').concat(t.page),
        ((n = {}),
        $e(n, ''.concat(r, '-active'), t.active),
        $e(n, ''.concat(r, '-disabled'), !t.page),
        $e(n, t.className, !!t.className),
        n),
      ),
      a = function () {
        t.onClick(t.page);
      },
      s = function (f) {
        t.onKeyPress(f, t.onClick, t.page);
      };
    return Pe.createElement(
      'li',
      { title: t.showTitle ? t.page : null, className: i, onClick: a, onKeyPress: s, tabIndex: '0' },
      t.itemRender(t.page, 'page', Pe.createElement('a', { rel: 'nofollow' }, t.page)),
    );
  };
  const di = {
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
  var zh = (function (e) {
    ti(n, e);
    var t = ni(n);
    function n() {
      var r;
      Dn(this, n);
      for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
      return (
        (r = t.call.apply(t, [this].concat(a))),
        (r.state = { goInputText: '' }),
        (r.buildOptionText = function (c) {
          return ''.concat(c, ' ').concat(r.props.locale.items_per_page);
        }),
        (r.changeSize = function (c) {
          r.props.changeSize(Number(c));
        }),
        (r.handleChange = function (c) {
          r.setState({ goInputText: c.target.value });
        }),
        (r.handleBlur = function (c) {
          var f = r.props,
            p = f.goButton,
            h = f.quickGo,
            m = f.rootPrefixCls,
            v = r.state.goInputText;
          p ||
            v === '' ||
            (r.setState({ goInputText: '' }),
            !(
              c.relatedTarget &&
              (c.relatedTarget.className.indexOf(''.concat(m, '-item-link')) >= 0 ||
                c.relatedTarget.className.indexOf(''.concat(m, '-item')) >= 0)
            ) && h(r.getValidValue()));
        }),
        (r.go = function (c) {
          var f = r.state.goInputText;
          f !== '' &&
            (c.keyCode === di.ENTER || c.type === 'click') &&
            (r.setState({ goInputText: '' }), r.props.quickGo(r.getValidValue()));
        }),
        r
      );
    }
    return (
      Fn(n, [
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
              a = i.pageSize,
              s = i.pageSizeOptions;
            return s.some(function (c) {
              return c.toString() === a.toString();
            })
              ? s
              : s.concat([a.toString()]).sort(function (c, f) {
                  var p = isNaN(Number(c)) ? 0 : Number(c),
                    h = isNaN(Number(f)) ? 0 : Number(f);
                  return p - h;
                });
          },
        },
        {
          key: 'render',
          value: function () {
            var i = this,
              a = this.props,
              s = a.pageSize,
              c = a.locale,
              f = a.rootPrefixCls,
              p = a.changeSize,
              h = a.quickGo,
              m = a.goButton,
              v = a.selectComponentClass,
              w = a.buildOptionText,
              S = a.selectPrefixCls,
              C = a.disabled,
              _ = this.state.goInputText,
              E = ''.concat(f, '-options'),
              I = v,
              N = null,
              D = null,
              z = null;
            if (!p && !h) return null;
            var u = this.getPageSizeOptions();
            if (p && I) {
              var $ = u.map(function (P, R) {
                return Pe.createElement(I.Option, { key: R, value: P.toString() }, (w || i.buildOptionText)(P));
              });
              N = Pe.createElement(
                I,
                {
                  disabled: C,
                  prefixCls: S,
                  showSearch: !1,
                  className: ''.concat(E, '-size-changer'),
                  optionLabelProp: 'children',
                  dropdownMatchSelectWidth: !1,
                  value: (s || u[0]).toString(),
                  onChange: this.changeSize,
                  getPopupContainer: function (R) {
                    return R.parentNode;
                  },
                  'aria-label': c.page_size,
                  defaultOpen: !1,
                },
                $,
              );
            }
            return (
              h &&
                (m &&
                  (z =
                    typeof m == 'boolean'
                      ? Pe.createElement(
                          'button',
                          {
                            type: 'button',
                            onClick: this.go,
                            onKeyUp: this.go,
                            disabled: C,
                            className: ''.concat(E, '-quick-jumper-button'),
                          },
                          c.jump_to_confirm,
                        )
                      : Pe.createElement('span', { onClick: this.go, onKeyUp: this.go }, m)),
                (D = Pe.createElement(
                  'div',
                  { className: ''.concat(E, '-quick-jumper') },
                  c.jump_to,
                  Pe.createElement('input', {
                    disabled: C,
                    type: 'text',
                    value: _,
                    onChange: this.handleChange,
                    onKeyUp: this.go,
                    onBlur: this.handleBlur,
                    'aria-label': c.page,
                  }),
                  c.page,
                  z,
                ))),
              Pe.createElement('li', { className: ''.concat(E) }, N, D)
            );
          },
        },
      ]),
      n
    );
  })(Pe.Component);
  zh.defaultProps = { pageSizeOptions: ['10', '20', '50', '100'] };
  const PE = {
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
  function wc() {}
  function Lh(e) {
    var t = Number(e);
    return typeof t == 'number' && !isNaN(t) && isFinite(t) && Math.floor(t) === t;
  }
  function NE(e, t, n) {
    return n;
  }
  function Wr(e, t, n) {
    var r = typeof e > 'u' ? t.pageSize : e;
    return Math.floor((n.total - 1) / r) + 1;
  }
  var Hh = (function (e) {
    ti(n, e);
    var t = ni(n);
    function n(r) {
      var i;
      Dn(this, n),
        (i = t.call(this, r)),
        (i.getJumpPrevPage = function () {
          return Math.max(1, i.state.current - (i.props.showLessItems ? 3 : 5));
        }),
        (i.getJumpNextPage = function () {
          return Math.min(Wr(void 0, i.state, i.props), i.state.current + (i.props.showLessItems ? 3 : 5));
        }),
        (i.getItemIcon = function (p, h) {
          var m = i.props.prefixCls,
            v =
              p ||
              Pe.createElement('button', { type: 'button', 'aria-label': h, className: ''.concat(m, '-item-link') });
          return typeof p == 'function' && (v = Pe.createElement(p, G({}, i.props))), v;
        }),
        (i.savePaginationNode = function (p) {
          i.paginationNode = p;
        }),
        (i.isValid = function (p) {
          var h = i.props.total;
          return Lh(p) && p !== i.state.current && Lh(h) && h > 0;
        }),
        (i.shouldDisplayQuickJumper = function () {
          var p = i.props,
            h = p.showQuickJumper,
            m = p.total,
            v = i.state.pageSize;
          return m <= v ? !1 : h;
        }),
        (i.handleKeyDown = function (p) {
          (p.keyCode === di.ARROW_UP || p.keyCode === di.ARROW_DOWN) && p.preventDefault();
        }),
        (i.handleKeyUp = function (p) {
          var h = i.getValidValue(p),
            m = i.state.currentInputValue;
          h !== m && i.setState({ currentInputValue: h }),
            p.keyCode === di.ENTER
              ? i.handleChange(h)
              : p.keyCode === di.ARROW_UP
              ? i.handleChange(h - 1)
              : p.keyCode === di.ARROW_DOWN && i.handleChange(h + 1);
        }),
        (i.handleBlur = function (p) {
          var h = i.getValidValue(p);
          i.handleChange(h);
        }),
        (i.changePageSize = function (p) {
          var h = i.state.current,
            m = Wr(p, i.state, i.props);
          (h = h > m ? m : h),
            m === 0 && (h = i.state.current),
            typeof p == 'number' &&
              ('pageSize' in i.props || i.setState({ pageSize: p }),
              'current' in i.props || i.setState({ current: h, currentInputValue: h })),
            i.props.onShowSizeChange(h, p),
            'onChange' in i.props && i.props.onChange && i.props.onChange(h, p);
        }),
        (i.handleChange = function (p) {
          var h = i.props,
            m = h.disabled,
            v = h.onChange,
            w = i.state,
            S = w.pageSize,
            C = w.current,
            _ = w.currentInputValue;
          if (i.isValid(p) && !m) {
            var E = Wr(void 0, i.state, i.props),
              I = p;
            return (
              p > E ? (I = E) : p < 1 && (I = 1),
              'current' in i.props || i.setState({ current: I }),
              I !== _ && i.setState({ currentInputValue: I }),
              v(I, S),
              I
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
          return i.state.current < Wr(void 0, i.state, i.props);
        }),
        (i.runIfEnter = function (p, h) {
          if (p.key === 'Enter' || p.charCode === 13) {
            for (var m = arguments.length, v = new Array(m > 2 ? m - 2 : 0), w = 2; w < m; w++) v[w - 2] = arguments[w];
            h.apply(void 0, v);
          }
        }),
        (i.runIfEnterPrev = function (p) {
          i.runIfEnter(p, i.prev);
        }),
        (i.runIfEnterNext = function (p) {
          i.runIfEnter(p, i.next);
        }),
        (i.runIfEnterJumpPrev = function (p) {
          i.runIfEnter(p, i.jumpPrev);
        }),
        (i.runIfEnterJumpNext = function (p) {
          i.runIfEnter(p, i.jumpNext);
        }),
        (i.handleGoTO = function (p) {
          (p.keyCode === di.ENTER || p.type === 'click') && i.handleChange(i.state.currentInputValue);
        });
      var a = r.onChange !== wc,
        s = 'current' in r;
      s &&
        !a &&
        console.warn(
          'Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.',
        );
      var c = r.defaultCurrent;
      'current' in r && (c = r.current);
      var f = r.defaultPageSize;
      return (
        'pageSize' in r && (f = r.pageSize),
        (c = Math.min(c, Wr(f, void 0, r))),
        (i.state = { current: c, currentInputValue: c, pageSize: f }),
        i
      );
    }
    return (
      Fn(
        n,
        [
          {
            key: 'componentDidUpdate',
            value: function (i, a) {
              var s = this.props.prefixCls;
              if (a.current !== this.state.current && this.paginationNode) {
                var c = this.paginationNode.querySelector('.'.concat(s, '-item-').concat(a.current));
                c && document.activeElement === c && c.blur();
              }
            },
          },
          {
            key: 'getValidValue',
            value: function (i) {
              var a = i.target.value,
                s = Wr(void 0, this.state, this.props),
                c = this.state.currentInputValue,
                f;
              return a === '' ? (f = a) : isNaN(Number(a)) ? (f = c) : a >= s ? (f = s) : (f = Number(a)), f;
            },
          },
          {
            key: 'getShowSizeChanger',
            value: function () {
              var i = this.props,
                a = i.showSizeChanger,
                s = i.total,
                c = i.totalBoundaryShowSizeChanger;
              return typeof a < 'u' ? a : s > c;
            },
          },
          {
            key: 'renderPrev',
            value: function (i) {
              var a = this.props,
                s = a.prevIcon,
                c = a.itemRender,
                f = c(i, 'prev', this.getItemIcon(s, 'prev page')),
                p = !this.hasPrev();
              return kn(f) ? cn(f, { disabled: p }) : f;
            },
          },
          {
            key: 'renderNext',
            value: function (i) {
              var a = this.props,
                s = a.nextIcon,
                c = a.itemRender,
                f = c(i, 'next', this.getItemIcon(s, 'next page')),
                p = !this.hasNext();
              return kn(f) ? cn(f, { disabled: p }) : f;
            },
          },
          {
            key: 'render',
            value: function () {
              var i = this,
                a = this.props,
                s = a.prefixCls,
                c = a.className,
                f = a.style,
                p = a.disabled,
                h = a.hideOnSinglePage,
                m = a.total,
                v = a.locale,
                w = a.showQuickJumper,
                S = a.showLessItems,
                C = a.showTitle,
                _ = a.showTotal,
                E = a.simple,
                I = a.itemRender,
                N = a.showPrevNextJumpers,
                D = a.jumpPrevIcon,
                z = a.jumpNextIcon,
                u = a.selectComponentClass,
                $ = a.selectPrefixCls,
                P = a.pageSizeOptions,
                R = this.state,
                A = R.current,
                B = R.pageSize,
                F = R.currentInputValue;
              if (h === !0 && m <= B) return null;
              var M = Wr(void 0, this.state, this.props),
                j = [],
                V = null,
                U = null,
                X = null,
                Z = null,
                ee = null,
                fe = w && w.goButton,
                de = S ? 1 : 2,
                ye = A - 1 > 0 ? A - 1 : 0,
                J = A + 1 < M ? A + 1 : M,
                be = Object.keys(this.props).reduce(function (ae, se) {
                  return (
                    (se.substr(0, 5) === 'data-' || se.substr(0, 5) === 'aria-' || se === 'role') &&
                      (ae[se] = i.props[se]),
                    ae
                  );
                }, {}),
                Se =
                  _ &&
                  Pe.createElement(
                    'li',
                    { className: ''.concat(s, '-total-text') },
                    _(m, [m === 0 ? 0 : (A - 1) * B + 1, A * B > m ? m : A * B]),
                  );
              if (E)
                return (
                  fe &&
                    (typeof fe == 'boolean'
                      ? (ee = Pe.createElement(
                          'button',
                          { type: 'button', onClick: this.handleGoTO, onKeyUp: this.handleGoTO },
                          v.jump_to_confirm,
                        ))
                      : (ee = Pe.createElement('span', { onClick: this.handleGoTO, onKeyUp: this.handleGoTO }, fe)),
                    (ee = Pe.createElement(
                      'li',
                      {
                        title: C ? ''.concat(v.jump_to).concat(A, '/').concat(M) : null,
                        className: ''.concat(s, '-simple-pager'),
                      },
                      ee,
                    ))),
                  Pe.createElement(
                    'ul',
                    mt(
                      {
                        className: Ce(s, ''.concat(s, '-simple'), $e({}, ''.concat(s, '-disabled'), p), c),
                        style: f,
                        ref: this.savePaginationNode,
                      },
                      be,
                    ),
                    Se,
                    Pe.createElement(
                      'li',
                      {
                        title: C ? v.prev_page : null,
                        onClick: this.prev,
                        tabIndex: this.hasPrev() ? 0 : null,
                        onKeyPress: this.runIfEnterPrev,
                        className: Ce(''.concat(s, '-prev'), $e({}, ''.concat(s, '-disabled'), !this.hasPrev())),
                        'aria-disabled': !this.hasPrev(),
                      },
                      this.renderPrev(ye),
                    ),
                    Pe.createElement(
                      'li',
                      { title: C ? ''.concat(A, '/').concat(M) : null, className: ''.concat(s, '-simple-pager') },
                      Pe.createElement('input', {
                        type: 'text',
                        value: F,
                        disabled: p,
                        onKeyDown: this.handleKeyDown,
                        onKeyUp: this.handleKeyUp,
                        onChange: this.handleKeyUp,
                        onBlur: this.handleBlur,
                        size: '3',
                      }),
                      Pe.createElement('span', { className: ''.concat(s, '-slash') }, '/'),
                      M,
                    ),
                    Pe.createElement(
                      'li',
                      {
                        title: C ? v.next_page : null,
                        onClick: this.next,
                        tabIndex: this.hasPrev() ? 0 : null,
                        onKeyPress: this.runIfEnterNext,
                        className: Ce(''.concat(s, '-next'), $e({}, ''.concat(s, '-disabled'), !this.hasNext())),
                        'aria-disabled': !this.hasNext(),
                      },
                      this.renderNext(J),
                    ),
                    ee,
                  )
                );
              if (M <= 3 + de * 2) {
                var me = {
                  locale: v,
                  rootPrefixCls: s,
                  onClick: this.handleChange,
                  onKeyPress: this.runIfEnter,
                  showTitle: C,
                  itemRender: I,
                };
                M ||
                  j.push(
                    Pe.createElement(
                      To,
                      mt({}, me, { key: 'noPager', page: 1, className: ''.concat(s, '-item-disabled') }),
                    ),
                  );
                for (var pe = 1; pe <= M; pe += 1) {
                  var Oe = A === pe;
                  j.push(Pe.createElement(To, mt({}, me, { key: pe, page: pe, active: Oe })));
                }
              } else {
                var Ee = S ? v.prev_3 : v.prev_5,
                  Ge = S ? v.next_3 : v.next_5;
                N &&
                  ((V = Pe.createElement(
                    'li',
                    {
                      title: C ? Ee : null,
                      key: 'prev',
                      onClick: this.jumpPrev,
                      tabIndex: '0',
                      onKeyPress: this.runIfEnterJumpPrev,
                      className: Ce(''.concat(s, '-jump-prev'), $e({}, ''.concat(s, '-jump-prev-custom-icon'), !!D)),
                    },
                    I(this.getJumpPrevPage(), 'jump-prev', this.getItemIcon(D, 'prev page')),
                  )),
                  (U = Pe.createElement(
                    'li',
                    {
                      title: C ? Ge : null,
                      key: 'next',
                      tabIndex: '0',
                      onClick: this.jumpNext,
                      onKeyPress: this.runIfEnterJumpNext,
                      className: Ce(''.concat(s, '-jump-next'), $e({}, ''.concat(s, '-jump-next-custom-icon'), !!z)),
                    },
                    I(this.getJumpNextPage(), 'jump-next', this.getItemIcon(z, 'next page')),
                  ))),
                  (Z = Pe.createElement(To, {
                    locale: v,
                    last: !0,
                    rootPrefixCls: s,
                    onClick: this.handleChange,
                    onKeyPress: this.runIfEnter,
                    key: M,
                    page: M,
                    active: !1,
                    showTitle: C,
                    itemRender: I,
                  })),
                  (X = Pe.createElement(To, {
                    locale: v,
                    rootPrefixCls: s,
                    onClick: this.handleChange,
                    onKeyPress: this.runIfEnter,
                    key: 1,
                    page: 1,
                    active: !1,
                    showTitle: C,
                    itemRender: I,
                  }));
                var He = Math.max(1, A - de),
                  Me = Math.min(A + de, M);
                A - 1 <= de && (Me = 1 + de * 2), M - A <= de && (He = M - de * 2);
                for (var oe = He; oe <= Me; oe += 1) {
                  var Ne = A === oe;
                  j.push(
                    Pe.createElement(To, {
                      locale: v,
                      rootPrefixCls: s,
                      onClick: this.handleChange,
                      onKeyPress: this.runIfEnter,
                      key: oe,
                      page: oe,
                      active: Ne,
                      showTitle: C,
                      itemRender: I,
                    }),
                  );
                }
                A - 1 >= de * 2 &&
                  A !== 1 + 2 &&
                  ((j[0] = cn(j[0], { className: ''.concat(s, '-item-after-jump-prev') })), j.unshift(V)),
                  M - A >= de * 2 &&
                    A !== M - 2 &&
                    ((j[j.length - 1] = cn(j[j.length - 1], { className: ''.concat(s, '-item-before-jump-next') })),
                    j.push(U)),
                  He !== 1 && j.unshift(X),
                  Me !== M && j.push(Z);
              }
              var Ae = !this.hasPrev() || !M,
                re = !this.hasNext() || !M;
              return Pe.createElement(
                'ul',
                mt(
                  { className: Ce(s, c, $e({}, ''.concat(s, '-disabled'), p)), style: f, ref: this.savePaginationNode },
                  be,
                ),
                Se,
                Pe.createElement(
                  'li',
                  {
                    title: C ? v.prev_page : null,
                    onClick: this.prev,
                    tabIndex: Ae ? null : 0,
                    onKeyPress: this.runIfEnterPrev,
                    className: Ce(''.concat(s, '-prev'), $e({}, ''.concat(s, '-disabled'), Ae)),
                    'aria-disabled': Ae,
                  },
                  this.renderPrev(ye),
                ),
                j,
                Pe.createElement(
                  'li',
                  {
                    title: C ? v.next_page : null,
                    onClick: this.next,
                    tabIndex: re ? null : 0,
                    onKeyPress: this.runIfEnterNext,
                    className: Ce(''.concat(s, '-next'), $e({}, ''.concat(s, '-disabled'), re)),
                    'aria-disabled': re,
                  },
                  this.renderNext(J),
                ),
                Pe.createElement(zh, {
                  disabled: p,
                  locale: v,
                  rootPrefixCls: s,
                  selectComponentClass: u,
                  selectPrefixCls: $,
                  changeSize: this.getShowSizeChanger() ? this.changePageSize : null,
                  current: A,
                  pageSize: B,
                  pageSizeOptions: P,
                  quickGo: this.shouldDisplayQuickJumper() ? this.handleChange : null,
                  goButton: fe,
                }),
              );
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function (i, a) {
              var s = {};
              if (
                ('current' in i &&
                  ((s.current = i.current), i.current !== a.current && (s.currentInputValue = s.current)),
                'pageSize' in i && i.pageSize !== a.pageSize)
              ) {
                var c = a.current,
                  f = Wr(i.pageSize, a, i);
                (c = c > f ? f : c),
                  'current' in i || ((s.current = c), (s.currentInputValue = c)),
                  (s.pageSize = i.pageSize);
              }
              return s;
            },
          },
        ],
      ),
      n
    );
  })(Pe.Component);
  Hh.defaultProps = {
    defaultCurrent: 1,
    total: 0,
    defaultPageSize: 10,
    onChange: wc,
    className: '',
    selectPrefixCls: 'rc-select',
    prefixCls: 'rc-pagination',
    selectComponentClass: null,
    hideOnSinglePage: !1,
    showPrevNextJumpers: !0,
    showQuickJumper: !1,
    showLessItems: !1,
    showTitle: !0,
    onShowSizeChange: wc,
    locale: PE,
    style: {},
    itemRender: NE,
    totalBoundaryShowSizeChanger: 50,
  };
  const kh = (e) => y.createElement(Ja, Object.assign({}, e, { size: 'small' })),
    Bh = (e) => y.createElement(Ja, Object.assign({}, e, { size: 'middle' }));
  (kh.Option = Ja.Option), (Bh.Option = Ja.Option);
  const RE = (e) => {
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
    ME = (e) => {
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
            input: Object.assign(Object.assign({}, dc(e)), {
              width: e.paginationMiniQuickJumperInputWidth,
              height: e.controlHeightSM,
            }),
          },
        },
      };
    },
    AE = (e) => {
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
    DE = (e) => {
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
            _l(e),
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
          [`&:focus-visible ${t}-item-link`]: Object.assign({}, _l(e)),
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
            input: Object.assign(Object.assign({}, pc(e)), {
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
    FE = (e) => {
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
            Eb(e),
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
    jE = (e) => {
      const { componentCls: t } = e;
      return {
        [t]: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(Object.assign({}, fr(e)), {
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
                    FE(e),
                  ),
                  DE(e),
                ),
                AE(e),
              ),
              ME(e),
            ),
            RE(e),
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
    zE = (e) => {
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
    LE = jn('Pagination', (e) => {
      const t = Yt(
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
        hc(e),
      );
      return [jE(t), e.wireframe && zE(t)];
    });
  var HE =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const kE = (e) => {
      var {
          prefixCls: t,
          selectPrefixCls: n,
          className: r,
          rootClassName: i,
          size: a,
          locale: s,
          selectComponentClass: c,
          responsive: f,
          showSizeChanger: p,
        } = e,
        h = HE(e, [
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
      const { xs: m } = lh(f),
        { getPrefixCls: v, direction: w, pagination: S = {} } = Be(At),
        C = v('pagination', t),
        [_, E] = LE(C),
        I = p ?? S.showSizeChanger,
        N = () => {
          const R = y.createElement('span', { className: `${C}-item-ellipsis` }, '•••');
          let A = y.createElement(
              'button',
              { className: `${C}-item-link`, type: 'button', tabIndex: -1 },
              y.createElement($w, null),
            ),
            B = y.createElement(
              'button',
              { className: `${C}-item-link`, type: 'button', tabIndex: -1 },
              y.createElement(xw, null),
            ),
            F = y.createElement(
              'a',
              { className: `${C}-item-link` },
              y.createElement(
                'div',
                { className: `${C}-item-container` },
                y.createElement(OE, { className: `${C}-item-link-icon` }),
                R,
              ),
            ),
            M = y.createElement(
              'a',
              { className: `${C}-item-link` },
              y.createElement(
                'div',
                { className: `${C}-item-container` },
                y.createElement(TE, { className: `${C}-item-link-icon` }),
                R,
              ),
            );
          return (
            w === 'rtl' && (([A, B] = [B, A]), ([F, M] = [M, F])),
            { prevIcon: A, nextIcon: B, jumpPrevIcon: F, jumpNextIcon: M }
          );
        },
        [D] = ql('Pagination', Kf),
        z = Object.assign(Object.assign({}, D), s),
        u = a === 'small' || !!(m && !a && f),
        $ = v('select', n),
        P = Ce({ [`${C}-mini`]: u, [`${C}-rtl`]: w === 'rtl' }, r, i, E);
      return _(
        y.createElement(
          Hh,
          Object.assign({}, N(), h, {
            prefixCls: C,
            selectPrefixCls: $,
            className: P,
            selectComponentClass: c || (u ? kh : Bh),
            locale: z,
            showSizeChanger: I,
          }),
        ),
      );
    },
    BE = new $t('antSpinMove', { to: { opacity: 1 } }),
    VE = new $t('antRotate', { to: { transform: 'rotate(405deg)' } }),
    WE = (e) => ({
      [`${e.componentCls}`]: Object.assign(Object.assign({}, fr(e)), {
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
            animationName: BE,
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
            animationName: VE,
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
    UE = jn(
      'Spin',
      (e) => {
        const t = Yt(e, {
          spinDotDefault: e.colorTextDescription,
          spinDotSize: e.controlHeightLG / 2,
          spinDotSizeSM: e.controlHeightLG * 0.35,
          spinDotSizeLG: e.controlHeight,
        });
        return [WE(t)];
      },
      { contentHeight: 400 },
    );
  var qE =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  let ts = null;
  function GE(e, t) {
    const { indicator: n } = t,
      r = `${e}-dot`;
    return n === null
      ? null
      : Eo(n)
      ? Vi(n, { className: Ce(n.props.className, r) })
      : Eo(ts)
      ? Vi(ts, { className: Ce(ts.props.className, r) })
      : y.createElement(
          'span',
          { className: Ce(r, `${e}-dot-spin`) },
          y.createElement('i', { className: `${e}-dot-item` }),
          y.createElement('i', { className: `${e}-dot-item` }),
          y.createElement('i', { className: `${e}-dot-item` }),
          y.createElement('i', { className: `${e}-dot-item` }),
        );
  }
  function KE(e, t) {
    return !!e && !!t && !isNaN(Number(t));
  }
  const XE = (e) => {
      const {
          spinPrefixCls: t,
          spinning: n = !0,
          delay: r = 0,
          className: i,
          rootClassName: a,
          size: s = 'default',
          tip: c,
          wrapperClassName: f,
          style: p,
          children: h,
          hashId: m,
        } = e,
        v = qE(e, [
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
        [w, S] = Te(() => n && !KE(n, r));
      ke(() => {
        if (n) {
          const z = Hw(r, () => {
            S(!0);
          });
          return (
            z(),
            () => {
              var u;
              (u = z == null ? void 0 : z.cancel) === null || u === void 0 || u.call(z);
            }
          );
        }
        S(!1);
      }, [r, n]);
      const C = Fe(() => typeof h < 'u', [h]),
        { direction: _ } = Be(At),
        E = Ce(
          t,
          {
            [`${t}-sm`]: s === 'small',
            [`${t}-lg`]: s === 'large',
            [`${t}-spinning`]: w,
            [`${t}-show-text`]: !!c,
            [`${t}-rtl`]: _ === 'rtl',
          },
          i,
          a,
          m,
        ),
        I = Ce(`${t}-container`, { [`${t}-blur`]: w }),
        N = oo(v, ['indicator', 'prefixCls']),
        D = y.createElement(
          'div',
          Object.assign({}, N, { style: p, className: E, 'aria-live': 'polite', 'aria-busy': w }),
          GE(t, e),
          c ? y.createElement('div', { className: `${t}-text` }, c) : null,
        );
      return C
        ? y.createElement(
            'div',
            Object.assign({}, N, { className: Ce(`${t}-nested-loading`, f, m) }),
            w && y.createElement('div', { key: 'loading' }, D),
            y.createElement('div', { className: I, key: 'container' }, h),
          )
        : D;
    },
    Vh = (e) => {
      const { prefixCls: t } = e,
        { getPrefixCls: n } = Be(At),
        r = n('spin', t),
        [i, a] = UE(r),
        s = Object.assign(Object.assign({}, e), { spinPrefixCls: r, hashId: a });
      return i(y.createElement(XE, Object.assign({}, s)));
    };
  Vh.setDefaultIndicator = (e) => {
    ts = e;
  };
  const YE = Vh;
  function QE() {
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
  var Wh =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const JE = (e) => {
      var { prefixCls: t, className: n, avatar: r, title: i, description: a } = e,
        s = Wh(e, ['prefixCls', 'className', 'avatar', 'title', 'description']);
      const { getPrefixCls: c } = Be(At),
        f = c('list', t),
        p = Ce(`${f}-item-meta`, n),
        h = Pe.createElement(
          'div',
          { className: `${f}-item-meta-content` },
          i && Pe.createElement('h4', { className: `${f}-item-meta-title` }, i),
          a && Pe.createElement('div', { className: `${f}-item-meta-description` }, a),
        );
      return Pe.createElement(
        'div',
        Object.assign({}, s, { className: p }),
        r && Pe.createElement('div', { className: `${f}-item-meta-avatar` }, r),
        (i || a) && h,
      );
    },
    Uh = Ve((e, t) => {
      var { prefixCls: n, children: r, actions: i, extra: a, className: s, colStyle: c } = e,
        f = Wh(e, ['prefixCls', 'children', 'actions', 'extra', 'className', 'colStyle']);
      const { grid: p, itemLayout: h } = Be(Ec),
        { getPrefixCls: m } = Be(At),
        v = () => {
          let I;
          return (
            Oi.forEach(r, (N) => {
              typeof N == 'string' && (I = !0);
            }),
            I && Oi.count(r) > 1
          );
        },
        w = () => (h === 'vertical' ? !!a : !v()),
        S = m('list', n),
        C =
          i &&
          i.length > 0 &&
          Pe.createElement(
            'ul',
            { className: `${S}-item-action`, key: 'actions' },
            i.map((I, N) =>
              Pe.createElement(
                'li',
                { key: `${S}-item-action-${N}` },
                I,
                N !== i.length - 1 && Pe.createElement('em', { className: `${S}-item-action-split` }),
              ),
            ),
          ),
        _ = p ? 'div' : 'li',
        E = Pe.createElement(
          _,
          Object.assign({}, f, p ? {} : { ref: t }, { className: Ce(`${S}-item`, { [`${S}-item-no-flex`]: !w() }, s) }),
          h === 'vertical' && a
            ? [
                Pe.createElement('div', { className: `${S}-item-main`, key: 'content' }, r, C),
                Pe.createElement('div', { className: `${S}-item-extra`, key: 'extra' }, a),
              ]
            : [r, C, Vi(a, { key: 'extra' })],
        );
      return p ? Pe.createElement(Yw, { ref: t, flex: 1, style: c }, E) : E;
    });
  Uh.Meta = JE;
  const ZE = Uh,
    e$ = (e) => {
      const {
        listBorderedCls: t,
        componentCls: n,
        paddingLG: r,
        margin: i,
        padding: a,
        listItemPaddingSM: s,
        marginLG: c,
        borderRadiusLG: f,
      } = e;
      return {
        [`${t}`]: {
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: f,
          [`${n}-header,${n}-footer,${n}-item`]: { paddingInline: r },
          [`${n}-pagination`]: { margin: `${i}px ${c}px` },
        },
        [`${t}${n}-sm`]: { [`${n}-item,${n}-header,${n}-footer`]: { padding: s } },
        [`${t}${n}-lg`]: { [`${n}-item,${n}-header,${n}-footer`]: { padding: `${a}px ${r}px` } },
      };
    },
    t$ = (e) => {
      const { componentCls: t, screenSM: n, screenMD: r, marginLG: i, marginSM: a, margin: s } = e;
      return {
        [`@media screen and (max-width:${r})`]: {
          [`${t}`]: { [`${t}-item`]: { [`${t}-item-action`]: { marginInlineStart: i } } },
          [`${t}-vertical`]: { [`${t}-item`]: { [`${t}-item-extra`]: { marginInlineStart: i } } },
        },
        [`@media screen and (max-width: ${n})`]: {
          [`${t}`]: { [`${t}-item`]: { flexWrap: 'wrap', [`${t}-action`]: { marginInlineStart: a } } },
          [`${t}-vertical`]: {
            [`${t}-item`]: {
              flexWrap: 'wrap-reverse',
              [`${t}-item-main`]: { minWidth: e.contentWidth },
              [`${t}-item-extra`]: { margin: `auto auto ${s}px` },
            },
          },
        },
      };
    },
    n$ = (e) => {
      const {
          componentCls: t,
          antCls: n,
          controlHeight: r,
          minHeight: i,
          paddingSM: a,
          marginLG: s,
          padding: c,
          listItemPadding: f,
          colorPrimary: p,
          listItemPaddingSM: h,
          listItemPaddingLG: m,
          paddingXS: v,
          margin: w,
          colorText: S,
          colorTextDescription: C,
          motionDurationSlow: _,
          lineWidth: E,
        } = e,
        I = {};
      return (
        ['start', 'center', 'end'].forEach((N) => {
          I[`&-align-${N}`] = { textAlign: N };
        }),
        {
          [`${t}`]: Object.assign(Object.assign({}, fr(e)), {
            position: 'relative',
            '*': { outline: 'none' },
            [`${t}-header, ${t}-footer`]: { background: 'transparent', paddingBlock: a },
            [`${t}-pagination`]: Object.assign(Object.assign({ marginBlockStart: s }, I), {
              [`${n}-pagination-options`]: { textAlign: 'start' },
            }),
            [`${t}-spin`]: { minHeight: i, textAlign: 'center' },
            [`${t}-items`]: { margin: 0, padding: 0, listStyle: 'none' },
            [`${t}-item`]: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: f,
              color: S,
              [`${t}-item-meta`]: {
                display: 'flex',
                flex: 1,
                alignItems: 'flex-start',
                maxWidth: '100%',
                [`${t}-item-meta-avatar`]: { marginInlineEnd: c },
                [`${t}-item-meta-content`]: { flex: '1 0', width: 0, color: S },
                [`${t}-item-meta-title`]: {
                  marginBottom: e.marginXXS,
                  color: S,
                  fontSize: e.fontSize,
                  lineHeight: e.lineHeight,
                  '> a': { color: S, transition: `all ${_}`, ['&:hover']: { color: p } },
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
            [`${t}-empty`]: { padding: `${c}px 0`, color: C, fontSize: e.fontSizeSM, textAlign: 'center' },
            [`${t}-empty-text`]: { padding: c, color: e.colorTextDisabled, fontSize: e.fontSize, textAlign: 'center' },
            [`${t}-item-no-flex`]: { display: 'block' },
          }),
          [`${t}-grid ${n}-col > ${t}-item`]: {
            display: 'block',
            maxWidth: '100%',
            marginBlockEnd: w,
            paddingBlock: 0,
            borderBlockEnd: 'none',
          },
          [`${t}-vertical ${t}-item`]: {
            alignItems: 'initial',
            [`${t}-item-main`]: { display: 'block', flex: 1 },
            [`${t}-item-extra`]: { marginInlineStart: s },
            [`${t}-item-meta`]: {
              marginBlockEnd: c,
              [`${t}-item-meta-title`]: {
                marginBlockStart: 0,
                marginBlockEnd: a,
                color: S,
                fontSize: e.fontSizeLG,
                lineHeight: e.lineHeightLG,
              },
            },
            [`${t}-item-action`]: {
              marginBlockStart: c,
              marginInlineStart: 'auto',
              '> li': { padding: `0 ${c}px`, ['&:first-child']: { paddingInlineStart: 0 } },
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
          [`${t}-lg ${t}-item`]: { padding: m },
          [`${t}-sm ${t}-item`]: { padding: h },
          [`${t}:not(${t}-vertical)`]: { [`${t}-item-no-flex`]: { [`${t}-item-action`]: { float: 'right' } } },
        }
      );
    },
    r$ = jn(
      'List',
      (e) => {
        const t = Yt(e, {
          listBorderedCls: `${e.componentCls}-bordered`,
          minHeight: e.controlHeightLG,
          listItemPadding: `${e.paddingContentVertical}px 0`,
          listItemPaddingSM: `${e.paddingContentVerticalSM}px ${e.paddingContentHorizontal}px`,
          listItemPaddingLG: `${e.paddingContentVerticalLG}px ${e.paddingContentHorizontalLG}px`,
        });
        return [n$(t), e$(t), t$(t)];
      },
      { contentWidth: 220 },
    );
  var i$ =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const Ec = y.createContext({});
  Ec.Consumer;
  function pi(e) {
    var t,
      {
        pagination: n = !1,
        prefixCls: r,
        bordered: i = !1,
        split: a = !0,
        className: s,
        rootClassName: c,
        children: f,
        itemLayout: p,
        loadMore: h,
        grid: m,
        dataSource: v = [],
        size: w,
        header: S,
        footer: C,
        loading: _ = !1,
        rowKey: E,
        renderItem: I,
        locale: N,
      } = e,
      D = i$(e, [
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
    const z = n && typeof n == 'object' ? n : {},
      [u, $] = Te(z.defaultCurrent || 1),
      [P, R] = Te(z.defaultPageSize || 10),
      { getPrefixCls: A, renderEmpty: B, direction: F } = Be(At),
      M = { current: 1, total: 0 },
      j = (ae) => (se, De) => {
        $(se), R(De), n && n[ae] && n[ae](se, De);
      },
      V = j('onChange'),
      U = j('onShowSizeChange'),
      X = (ae, se) => {
        if (!I) return null;
        let De;
        return (
          typeof E == 'function' ? (De = E(ae)) : E ? (De = ae[E]) : (De = ae.key),
          De || (De = `list-item-${se}`),
          y.createElement(y.Fragment, { key: De }, I(ae, se))
        );
      },
      Z = () => !!(h || n || C),
      ee = A('list', r),
      [fe, de] = r$(ee);
    let ye = _;
    typeof ye == 'boolean' && (ye = { spinning: ye });
    const J = ye && ye.spinning;
    let be = '';
    switch (w) {
      case 'large':
        be = 'lg';
        break;
      case 'small':
        be = 'sm';
        break;
    }
    const Se = Ce(
        ee,
        {
          [`${ee}-vertical`]: p === 'vertical',
          [`${ee}-${be}`]: be,
          [`${ee}-split`]: a,
          [`${ee}-bordered`]: i,
          [`${ee}-loading`]: J,
          [`${ee}-grid`]: !!m,
          [`${ee}-something-after-last-item`]: Z(),
          [`${ee}-rtl`]: F === 'rtl',
        },
        s,
        c,
        de,
      ),
      me = QE(M, { total: v.length, current: u, pageSize: P }, n || {}),
      pe = Math.ceil(me.total / me.pageSize);
    me.current > pe && (me.current = pe);
    const Oe = n
      ? y.createElement(
          'div',
          {
            className: Ce(
              `${ee}-pagination`,
              `${ee}-pagination-align-${(t = me == null ? void 0 : me.align) !== null && t !== void 0 ? t : 'end'}`,
            ),
          },
          y.createElement(kE, Object.assign({}, me, { onChange: V, onShowSizeChange: U })),
        )
      : null;
    let Ee = ze(v);
    n && v.length > (me.current - 1) * me.pageSize && (Ee = ze(v).splice((me.current - 1) * me.pageSize, me.pageSize));
    const Ge = Object.keys(m || {}).some((ae) => ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(ae)),
      He = lh(Ge),
      Me = Fe(() => {
        for (let ae = 0; ae < fi.length; ae += 1) {
          const se = fi[ae];
          if (He[se]) return se;
        }
      }, [He]),
      oe = Fe(() => {
        if (!m) return;
        const ae = Me && m[Me] ? m[Me] : m.column;
        if (ae) return { width: `${100 / ae}%`, maxWidth: `${100 / ae}%` };
      }, [m == null ? void 0 : m.column, Me]);
    let Ne = J && y.createElement('div', { style: { minHeight: 53 } });
    if (Ee.length > 0) {
      const ae = Ee.map((se, De) => X(se, De));
      Ne = m
        ? y.createElement(
            Jw,
            { gutter: m.gutter },
            Oi.map(ae, (se) => y.createElement('div', { key: se == null ? void 0 : se.key, style: oe }, se)),
          )
        : y.createElement('ul', { className: `${ee}-items` }, ae);
    } else
      !f &&
        !J &&
        (Ne = y.createElement(
          'div',
          { className: `${ee}-empty-text` },
          (N && N.emptyText) || (B == null ? void 0 : B('List')) || y.createElement(Jp, { componentName: 'List' }),
        ));
    const Ae = me.position || 'bottom',
      re = Fe(() => ({ grid: m, itemLayout: p }), [JSON.stringify(m), p]);
    return fe(
      y.createElement(
        Ec.Provider,
        { value: re },
        y.createElement(
          'div',
          Object.assign({ className: Se }, D),
          (Ae === 'top' || Ae === 'both') && Oe,
          S && y.createElement('div', { className: `${ee}-header` }, S),
          y.createElement(YE, Object.assign({}, ye), Ne, f),
          C && y.createElement('div', { className: `${ee}-footer` }, C),
          h || ((Ae === 'bottom' || Ae === 'both') && Oe),
        ),
      ),
    );
  }
  pi.Item = ZE;
  let ir = null,
    hi = (e) => e(),
    Po = [],
    ns = {};
  function o$() {
    const { prefixCls: e, getContainer: t, duration: n, rtl: r, maxCount: i, top: a } = ns,
      s = e ?? gd().getPrefixCls('message'),
      c = (t == null ? void 0 : t()) || document.body;
    return { prefixCls: s, container: c, duration: n, rtl: r, maxCount: i, top: a };
  }
  const a$ = Ve((e, t) => {
    const n = () => {
        const { prefixCls: m, container: v, maxCount: w, duration: S, rtl: C, top: _ } = o$();
        return { prefixCls: m, getContainer: () => v, maxCount: w, duration: S, rtl: C, top: _ };
      },
      [r, i] = Te(n),
      [a, s] = Jd(r),
      c = gd(),
      f = c.getRootPrefixCls(),
      p = c.getIconPrefixCls(),
      h = () => {
        i(n);
      };
    return (
      ke(h, []),
      hn(t, () => {
        const m = Object.assign({}, a);
        return (
          Object.keys(m).forEach((v) => {
            m[v] = function () {
              return h(), a[v].apply(a, arguments);
            };
          }),
          { instance: m, sync: h }
        );
      }),
      y.createElement(md, { prefixCls: f, iconPrefixCls: p }, s)
    );
  });
  function rs() {
    if (!ir) {
      const e = document.createDocumentFragment(),
        t = { fragment: e };
      (ir = t),
        hi(() => {
          J1(
            y.createElement(a$, {
              ref: (n) => {
                const { instance: r, sync: i } = n || {};
                Promise.resolve().then(() => {
                  !t.instance && r && ((t.instance = r), (t.sync = i), rs());
                });
              },
            }),
            e,
          );
        });
      return;
    }
    ir.instance &&
      (Po.forEach((e) => {
        const { type: t, skipped: n } = e;
        if (!n)
          switch (t) {
            case 'open': {
              hi(() => {
                const r = ir.instance.open(Object.assign(Object.assign({}, ns), e.config));
                r == null || r.then(e.resolve), e.setCloseFn(r);
              });
              break;
            }
            case 'destroy':
              hi(() => {
                ir == null || ir.instance.destroy(e.key);
              });
              break;
            default:
              hi(() => {
                var r;
                const i = (r = ir.instance)[t].apply(r, ze(e.args));
                i == null || i.then(e.resolve), e.setCloseFn(i);
              });
          }
      }),
      (Po = []));
  }
  function s$(e) {
    (ns = Object.assign(Object.assign({}, ns), e)),
      hi(() => {
        var t;
        (t = ir == null ? void 0 : ir.sync) === null || t === void 0 || t.call(ir);
      });
  }
  function l$(e) {
    const t = Wl((n) => {
      let r;
      const i = {
        type: 'open',
        config: e,
        resolve: n,
        setCloseFn: (a) => {
          r = a;
        },
      };
      return (
        Po.push(i),
        () => {
          r
            ? hi(() => {
                r();
              })
            : (i.skipped = !0);
        }
      );
    });
    return rs(), t;
  }
  function c$(e, t) {
    const n = Wl((r) => {
      let i;
      const a = {
        type: e,
        args: t,
        resolve: r,
        setCloseFn: (s) => {
          i = s;
        },
      };
      return (
        Po.push(a),
        () => {
          i
            ? hi(() => {
                i();
              })
            : (a.skipped = !0);
        }
      );
    });
    return rs(), n;
  }
  function u$(e) {
    Po.push({ type: 'destroy', key: e }), rs();
  }
  const f$ = ['success', 'info', 'warning', 'error', 'loading'],
    qh = { open: l$, destroy: u$, config: s$, useMessage: q1, _InternalPanelDoNotUseOrYouWillBeFired: k1 };
  f$.forEach((e) => {
    qh[e] = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return c$(e, n);
    };
  });
  const Gn = qh;
  var d$ = {
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
  const p$ = d$;
  var Gh = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: p$ }));
  };
  Gh.displayName = 'BugOutlined';
  const Kh = Ve(Gh);
  var h$ = {
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
  const g$ = h$;
  var Xh = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: g$ }));
  };
  Xh.displayName = 'CopyOutlined';
  const $c = Ve(Xh);
  var m$ = {
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
  const v$ = m$;
  var Yh = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: v$ }));
  };
  Yh.displayName = 'EditOutlined';
  const y$ = Ve(Yh);
  var b$ = {
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
  const S$ = b$;
  var Qh = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: S$ }));
  };
  Qh.displayName = 'EnterOutlined';
  const C$ = Ve(Qh);
  var x$ = {
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
  const w$ = x$;
  var Jh = function (t, n) {
    return y.createElement(Cn, G(G({}, t), {}, { ref: n, icon: w$ }));
  };
  Jh.displayName = 'ReloadOutlined';
  const Zh = Ve(Jh);
  var E$ =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const $$ = { border: 0, background: 'transparent', padding: 0, lineHeight: 'inherit', display: 'inline-block' },
    eg = Ve((e, t) => {
      const n = (p) => {
          const { keyCode: h } = p;
          h === ve.ENTER && p.preventDefault();
        },
        r = (p) => {
          const { keyCode: h } = p,
            { onClick: m } = e;
          h === ve.ENTER && m && m();
        },
        { style: i, noStyle: a, disabled: s } = e,
        c = E$(e, ['style', 'noStyle', 'disabled']);
      let f = {};
      return (
        a || (f = Object.assign({}, $$)),
        s && (f.pointerEvents = 'none'),
        (f = Object.assign(Object.assign({}, f), i)),
        y.createElement(
          'div',
          Object.assign({ role: 'button', tabIndex: 0, ref: t }, c, { onKeyDown: n, onKeyUp: r, style: f }),
        )
      );
    });
  var O$ = function () {
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
    _$ = O$,
    tg = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' },
    I$ = 'Copy to clipboard: #{key}, Enter';
  function T$(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
    return e.replace(/#{\s*key\s*}/g, t);
  }
  function P$(e, t) {
    var n,
      r,
      i,
      a,
      s,
      c,
      f = !1;
    t || (t = {}), (n = t.debug || !1);
    try {
      (i = _$()),
        (a = document.createRange()),
        (s = document.getSelection()),
        (c = document.createElement('span')),
        (c.textContent = e),
        (c.ariaHidden = 'true'),
        (c.style.all = 'unset'),
        (c.style.position = 'fixed'),
        (c.style.top = 0),
        (c.style.clip = 'rect(0, 0, 0, 0)'),
        (c.style.whiteSpace = 'pre'),
        (c.style.webkitUserSelect = 'text'),
        (c.style.MozUserSelect = 'text'),
        (c.style.msUserSelect = 'text'),
        (c.style.userSelect = 'text'),
        c.addEventListener('copy', function (h) {
          if ((h.stopPropagation(), t.format))
            if ((h.preventDefault(), typeof h.clipboardData > 'u')) {
              n && console.warn('unable to use e.clipboardData'),
                n && console.warn('trying IE specific stuff'),
                window.clipboardData.clearData();
              var m = tg[t.format] || tg.default;
              window.clipboardData.setData(m, e);
            } else h.clipboardData.clearData(), h.clipboardData.setData(t.format, e);
          t.onCopy && (h.preventDefault(), t.onCopy(h.clipboardData));
        }),
        document.body.appendChild(c),
        a.selectNodeContents(c),
        s.addRange(a);
      var p = document.execCommand('copy');
      if (!p) throw new Error('copy command was unsuccessful');
      f = !0;
    } catch (h) {
      n && console.error('unable to copy using execCommand: ', h), n && console.warn('trying IE specific stuff');
      try {
        window.clipboardData.setData(t.format || 'text', e), t.onCopy && t.onCopy(window.clipboardData), (f = !0);
      } catch (m) {
        n && console.error('unable to copy using clipboardData: ', m),
          n && console.error('falling back to prompt'),
          (r = T$('message' in t ? t.message : I$)),
          window.prompt(r, e);
      }
    } finally {
      s && (typeof s.removeRange == 'function' ? s.removeRange(a) : s.removeAllRanges()),
        c && document.body.removeChild(c),
        i();
    }
    return f;
  }
  var N$ = P$;
  const R$ = (e, t, n, r) => {
      const { sizeMarginHeadingVerticalEnd: i, fontWeightStrong: a } = r;
      return { marginBottom: i, color: n, fontWeight: a, fontSize: e, lineHeight: t };
    },
    M$ = (e) => {
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
          ] = R$(e[`fontSizeHeading${r}`], e[`lineHeightHeading${r}`], e.colorTextHeading, e);
        }),
        n
      );
    },
    A$ = (e) => {
      const { componentCls: t } = e;
      return {
        'a&, a': Object.assign(Object.assign({}, fd(e)), {
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
    D$ = (e) => ({
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
      mark: { padding: 0, backgroundColor: ub[2] },
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
    F$ = (e) => {
      const { componentCls: t } = e,
        r = hc(e).inputPaddingVertical + 1;
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
    j$ = (e) => ({
      '&-copy-success': {
        [`
    &,
    &:hover,
    &:focus`]: { color: e.colorSuccess },
      },
    }),
    z$ = () => ({
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
    L$ = (e) => {
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
                          M$(e),
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
                      D$(e),
                    ),
                    A$(e),
                  ),
                  {
                    [`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, fd(e)), { marginInlineStart: e.marginXXS }),
                  },
                ),
                F$(e),
              ),
              j$(e),
            ),
            z$(),
          ),
          { '&-rtl': { direction: 'rtl' } },
        ),
      };
    },
    ng = jn('Typography', (e) => [L$(e)], {
      sizeMarginHeadingVerticalStart: '1.2em',
      sizeMarginHeadingVerticalEnd: '0.5em',
    }),
    H$ = (e) => {
      let {
        prefixCls: t,
        'aria-label': n,
        className: r,
        style: i,
        direction: a,
        maxLength: s,
        autoSize: c = !0,
        value: f,
        onSave: p,
        onCancel: h,
        onEnd: m,
        component: v,
        enterIcon: w = y.createElement(C$, null),
      } = e;
      const S = le(null),
        C = le(!1),
        _ = le(),
        [E, I] = Te(f);
      ke(() => {
        I(f);
      }, [f]),
        ke(() => {
          if (S.current && S.current.resizableTextArea) {
            const { textArea: j } = S.current.resizableTextArea;
            j.focus();
            const { length: V } = j.value;
            j.setSelectionRange(V, V);
          }
        }, []);
      const N = (j) => {
          let { target: V } = j;
          I(V.value.replace(/[\n\r]/g, ''));
        },
        D = () => {
          C.current = !0;
        },
        z = () => {
          C.current = !1;
        },
        u = (j) => {
          let { keyCode: V } = j;
          C.current || (_.current = V);
        },
        $ = () => {
          p(E.trim());
        },
        P = (j) => {
          let { keyCode: V, ctrlKey: U, altKey: X, metaKey: Z, shiftKey: ee } = j;
          _.current === V &&
            !C.current &&
            !U &&
            !X &&
            !Z &&
            !ee &&
            (V === ve.ENTER ? ($(), m == null || m()) : V === ve.ESC && h());
        },
        R = () => {
          $();
        },
        A = v ? `${t}-${v}` : '',
        [B, F] = ng(t),
        M = Ce(t, `${t}-edit-content`, { [`${t}-rtl`]: a === 'rtl' }, r, A, F);
      return B(
        y.createElement(
          'div',
          { className: M, style: i },
          y.createElement(wE, {
            ref: S,
            maxLength: s,
            value: E,
            onChange: N,
            onKeyDown: u,
            onKeyUp: P,
            onCompositionStart: D,
            onCompositionEnd: z,
            onBlur: R,
            'aria-label': n,
            rows: 1,
            autoSize: c,
          }),
          w !== null ? Vi(w, { className: `${t}-edit-content-confirm` }) : null,
        ),
      );
    };
  function Oc(e, t) {
    return Fe(() => {
      const n = !!e;
      return [n, Object.assign(Object.assign({}, t), n && typeof e == 'object' ? e : null)];
    }, [e]);
  }
  const k$ = (e, t) => {
    const n = le(!1);
    ke(() => {
      n.current ? e() : (n.current = !0);
    }, t);
  };
  var B$ =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const rg = Ve((e, t) => {
    var {
        prefixCls: n,
        component: r = 'article',
        className: i,
        rootClassName: a,
        setContentRef: s,
        children: c,
        direction: f,
      } = e,
      p = B$(e, ['prefixCls', 'component', 'className', 'rootClassName', 'setContentRef', 'children', 'direction']);
    const { getPrefixCls: h, direction: m } = Be(At),
      v = f ?? m;
    let w = t;
    s && (w = Ii(t, s));
    const S = h('typography', n),
      [C, _] = ng(S),
      E = Ce(S, { [`${S}-rtl`]: v === 'rtl' }, i, a, _);
    return C(y.createElement(r, Object.assign({ className: E, ref: w }, p), c));
  });
  function ig(e) {
    const t = typeof e;
    return t === 'string' || t === 'number';
  }
  function V$(e) {
    let t = 0;
    return (
      e.forEach((n) => {
        ig(n) ? (t += String(n).length) : (t += 1);
      }),
      t
    );
  }
  function og(e, t) {
    let n = 0;
    const r = [];
    for (let i = 0; i < e.length; i += 1) {
      if (n === t) return r;
      const a = e[i],
        c = ig(a) ? String(a).length : 1,
        f = n + c;
      if (f > t) {
        const p = t - n;
        return r.push(String(a).slice(0, p)), r;
      }
      r.push(a), (n = f);
    }
    return e;
  }
  const W$ = 0,
    is = 1,
    ag = 2,
    _c = 3,
    sg = 4,
    U$ = (e) => {
      let { enabledMeasure: t, children: n, text: r, width: i, fontSize: a, rows: s, onEllipsis: c } = e;
      const [[f, p, h], m] = Te([0, 0, 0]),
        [v, w] = Te(W$),
        [S, C] = Te(0),
        _ = le(null),
        E = le(null),
        I = Fe(() => Cr(r), [r]),
        N = Fe(() => V$(I), [I]),
        D = Fe(() => (!t || v !== _c ? n(I, !1) : n(og(I, p), p < N)), [t, v, n, I, p, N]);
      Vt(() => {
        t && i && a && N && (w(is), m([0, Math.ceil(N / 2), N]));
      }, [t, i, a, r, N, s]),
        Vt(() => {
          var P;
          v === is && C(((P = _.current) === null || P === void 0 ? void 0 : P.offsetHeight) || 0);
        }, [v]),
        Vt(() => {
          var P, R;
          if (S) {
            if (v === is) {
              const A = ((P = E.current) === null || P === void 0 ? void 0 : P.offsetHeight) || 0,
                B = s * S;
              A <= B ? (w(sg), c(!1)) : w(ag);
            } else if (v === ag)
              if (f !== h) {
                const A = ((R = E.current) === null || R === void 0 ? void 0 : R.offsetHeight) || 0,
                  B = s * S;
                let F = f,
                  M = h;
                f === h - 1 ? (M = f) : A <= B ? (F = p) : (M = p);
                const j = Math.ceil((F + M) / 2);
                m([F, j, M]);
              } else w(_c), c(!0);
          }
        }, [v, f, h, s, S]);
      const z = { width: i, whiteSpace: 'normal', margin: 0, padding: 0 },
        u = (P, R, A) =>
          y.createElement(
            'span',
            {
              'aria-hidden': !0,
              ref: R,
              style: Object.assign(
                {
                  position: 'fixed',
                  display: 'block',
                  left: 0,
                  top: 0,
                  zIndex: -9999,
                  visibility: 'hidden',
                  pointerEvents: 'none',
                  fontSize: Math.floor(a / 2) * 2,
                },
                A,
              ),
            },
            P,
          ),
        $ = (P, R) => {
          const A = og(I, P);
          return u(n(A, !0), R, z);
        };
      return y.createElement(
        y.Fragment,
        null,
        D,
        t &&
          v !== _c &&
          v !== sg &&
          y.createElement(
            y.Fragment,
            null,
            u('lg', _, { wordBreak: 'keep-all', whiteSpace: 'nowrap' }),
            v === is ? u(n(I, !1), E, z) : $(p, E),
          ),
      );
    },
    q$ = (e) => {
      let { enabledEllipsis: t, isEllipsis: n, children: r, tooltipProps: i } = e;
      return !(i != null && i.title) || !t ? r : y.createElement(es, Object.assign({ open: n ? void 0 : !1 }, i), r);
    };
  var G$ =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  function K$(e, t) {
    let { mark: n, code: r, underline: i, delete: a, strong: s, keyboard: c, italic: f } = e,
      p = t;
    function h(m, v) {
      v && (p = y.createElement(m, {}, p));
    }
    return h('strong', s), h('u', i), h('del', a), h('code', r), h('mark', n), h('kbd', c), h('i', f), p;
  }
  function os(e, t, n) {
    return e === !0 || e === void 0 ? t : e || (n && t);
  }
  function lg(e) {
    return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
  }
  const X$ = '...',
    as = Ve((e, t) => {
      var n, r, i;
      const {
          prefixCls: a,
          className: s,
          style: c,
          type: f,
          disabled: p,
          children: h,
          ellipsis: m,
          editable: v,
          copyable: w,
          component: S,
          title: C,
        } = e,
        _ = G$(e, [
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
        { getPrefixCls: E, direction: I } = Be(At),
        [N] = ql('Text'),
        D = le(null),
        z = le(null),
        u = E('typography', a),
        $ = oo(_, ['mark', 'code', 'delete', 'underline', 'strong', 'keyboard', 'italic']),
        [P, R] = Oc(v),
        [A, B] = _r(!1, { value: R.editing }),
        { triggerType: F = ['icon'] } = R,
        M = (_e) => {
          var je;
          _e && ((je = R.onStart) === null || je === void 0 || je.call(R)), B(_e);
        };
      k$(() => {
        var _e;
        A || (_e = z.current) === null || _e === void 0 || _e.focus();
      }, [A]);
      const j = (_e) => {
          _e == null || _e.preventDefault(), M(!0);
        },
        V = (_e) => {
          var je;
          (je = R.onChange) === null || je === void 0 || je.call(R, _e), M(!1);
        },
        U = () => {
          var _e;
          (_e = R.onCancel) === null || _e === void 0 || _e.call(R), M(!1);
        },
        [X, Z] = Oc(w),
        [ee, fe] = Te(!1),
        de = le(),
        ye = {};
      Z.format && (ye.format = Z.format);
      const J = () => {
          window.clearTimeout(de.current);
        },
        be = (_e) => {
          var je;
          _e == null || _e.preventDefault(),
            _e == null || _e.stopPropagation(),
            N$(Z.text || String(h) || '', ye),
            fe(!0),
            J(),
            (de.current = window.setTimeout(() => {
              fe(!1);
            }, 3e3)),
            (je = Z.onCopy) === null || je === void 0 || je.call(Z, _e);
        };
      ke(() => J, []);
      const [Se, me] = Te(!1),
        [pe, Oe] = Te(!1),
        [Ee, Ge] = Te(!1),
        [He, Me] = Te(!1),
        [oe, Ne] = Te(!1),
        [Ae, re] = Te(!0),
        [ae, se] = Oc(m, { expandable: !1 }),
        De = ae && !Ee,
        { rows: Xe = 1 } = se,
        St = Fe(() => !De || se.suffix !== void 0 || se.onEllipsis || se.expandable || P || X, [De, se, P, X]);
      Vt(() => {
        ae && !St && (me(pp('webkitLineClamp')), Oe(pp('textOverflow')));
      }, [St, ae]);
      const Ot = Fe(() => (St ? !1 : Xe === 1 ? pe : Se), [St, pe, Se]),
        wt = De && (Ot ? oe : He),
        ht = De && Xe === 1 && Ot,
        vt = De && Xe > 1 && Ot,
        dt = (_e) => {
          var je;
          Ge(!0), (je = se.onExpand) === null || je === void 0 || je.call(se, _e);
        },
        [Gt, _t] = Te(0),
        [it, tt] = Te(0),
        Kt = (_e, je) => {
          let { offsetWidth: gt } = _e;
          var st;
          _t(gt),
            tt(
              parseInt(
                (st = window.getComputedStyle) === null || st === void 0 ? void 0 : st.call(window, je).fontSize,
                10,
              ) || 0,
            );
        },
        jt = (_e) => {
          var je;
          Me(_e), He !== _e && ((je = se.onEllipsis) === null || je === void 0 || je.call(se, _e));
        };
      ke(() => {
        const _e = D.current;
        if (ae && Ot && _e) {
          const je = vt ? _e.offsetHeight < _e.scrollHeight : _e.offsetWidth < _e.scrollWidth;
          oe !== je && Ne(je);
        }
      }, [ae, Ot, h, vt, Ae]),
        ke(() => {
          const _e = D.current;
          if (typeof IntersectionObserver > 'u' || !_e || !Ot || !De) return;
          const je = new IntersectionObserver(() => {
            re(!!_e.offsetParent);
          });
          return (
            je.observe(_e),
            () => {
              je.disconnect();
            }
          );
        }, [Ot, De]);
      let Le = {};
      se.tooltip === !0
        ? (Le = { title: (n = R.text) !== null && n !== void 0 ? n : h })
        : kn(se.tooltip)
        ? (Le = { title: se.tooltip })
        : typeof se.tooltip == 'object'
        ? (Le = Object.assign({ title: (r = R.text) !== null && r !== void 0 ? r : h }, se.tooltip))
        : (Le = { title: se.tooltip });
      const nt = Fe(() => {
        const _e = (je) => ['string', 'number'].includes(typeof je);
        if (!(!ae || Ot)) {
          if (_e(R.text)) return R.text;
          if (_e(h)) return h;
          if (_e(C)) return C;
          if (_e(Le.title)) return Le.title;
        }
      }, [ae, Ot, C, Le.title, wt]);
      if (A)
        return y.createElement(H$, {
          value: (i = R.text) !== null && i !== void 0 ? i : typeof h == 'string' ? h : '',
          onSave: V,
          onCancel: U,
          onEnd: R.onEnd,
          prefixCls: u,
          className: s,
          style: c,
          direction: I,
          component: S,
          maxLength: R.maxLength,
          autoSize: R.autoSize,
          enterIcon: R.enterIcon,
        });
      const It = () => {
          const { expandable: _e, symbol: je } = se;
          if (!_e) return null;
          let gt;
          return (
            je ? (gt = je) : (gt = N == null ? void 0 : N.expand),
            y.createElement(
              'a',
              { key: 'expand', className: `${u}-expand`, onClick: dt, 'aria-label': N == null ? void 0 : N.expand },
              gt,
            )
          );
        },
        pt = () => {
          if (!P) return;
          const { icon: _e, tooltip: je } = R,
            gt = Cr(je)[0] || (N == null ? void 0 : N.edit),
            st = typeof gt == 'string' ? gt : '';
          return F.includes('icon')
            ? y.createElement(
                es,
                { key: 'edit', title: je === !1 ? '' : gt },
                y.createElement(
                  eg,
                  { ref: z, className: `${u}-edit`, onClick: j, 'aria-label': st },
                  _e || y.createElement(y$, { role: 'button' }),
                ),
              )
            : null;
        },
        ot = () => {
          if (!X) return;
          const { tooltips: _e, icon: je } = Z,
            gt = lg(_e),
            st = lg(je),
            Ct = ee ? os(gt[1], N == null ? void 0 : N.copied) : os(gt[0], N == null ? void 0 : N.copy),
            dn = ee ? (N == null ? void 0 : N.copied) : N == null ? void 0 : N.copy,
            Ut = typeof Ct == 'string' ? Ct : dn;
          return y.createElement(
            es,
            { key: 'copy', title: Ct },
            y.createElement(
              eg,
              { className: Ce(`${u}-copy`, ee && `${u}-copy-success`), onClick: be, 'aria-label': Ut },
              ee ? os(st[1], y.createElement(th, null), !0) : os(st[0], y.createElement($c, null), !0),
            ),
          );
        },
        zt = (_e) => [_e && It(), pt(), ot()],
        Wt = (_e) => [_e && y.createElement('span', { 'aria-hidden': !0, key: 'ellipsis' }, X$), se.suffix, zt(_e)];
      return y.createElement(jr, { onResize: Kt, disabled: !De || Ot }, (_e) =>
        y.createElement(
          q$,
          { tooltipProps: Le, enabledEllipsis: De, isEllipsis: wt },
          y.createElement(
            rg,
            Object.assign(
              {
                className: Ce(
                  {
                    [`${u}-${f}`]: f,
                    [`${u}-disabled`]: p,
                    [`${u}-ellipsis`]: ae,
                    [`${u}-single-line`]: De && Xe === 1,
                    [`${u}-ellipsis-single-line`]: ht,
                    [`${u}-ellipsis-multiple-line`]: vt,
                  },
                  s,
                ),
                prefixCls: a,
                style: Object.assign(Object.assign({}, c), { WebkitLineClamp: vt ? Xe : void 0 }),
                component: S,
                ref: Ii(_e, D, t),
                direction: I,
                onClick: F.includes('text') ? j : void 0,
                'aria-label': nt == null ? void 0 : nt.toString(),
                title: C,
              },
              $,
            ),
            y.createElement(
              U$,
              { enabledMeasure: De && !Ot, text: h, rows: Xe, width: Gt, fontSize: it, onEllipsis: jt },
              (je, gt) => {
                let st = je;
                return (
                  je.length &&
                    gt &&
                    nt &&
                    (st = y.createElement('span', { key: 'show-content', 'aria-hidden': !0 }, st)),
                  K$(e, y.createElement(y.Fragment, null, st, Wt(gt)))
                );
              },
            ),
          ),
        ),
      );
    });
  var Y$ =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const Q$ = Ve((e, t) => {
      var { ellipsis: n, rel: r } = e,
        i = Y$(e, ['ellipsis', 'rel']);
      const a = Object.assign(Object.assign({}, i), {
        rel: r === void 0 && i.target === '_blank' ? 'noopener noreferrer' : r,
      });
      return delete a.navigate, y.createElement(as, Object.assign({}, a, { ref: t, ellipsis: !!n, component: 'a' }));
    }),
    J$ = Ve((e, t) => y.createElement(as, Object.assign({ ref: t }, e, { component: 'div' })));
  var Z$ =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const eO = Ve((e, t) => {
    var { ellipsis: n } = e,
      r = Z$(e, ['ellipsis']);
    const i = Fe(() => (n && typeof n == 'object' ? oo(n, ['expandable', 'rows']) : n), [n]);
    return y.createElement(as, Object.assign({ ref: t }, r, { ellipsis: i, component: 'span' }));
  });
  var tO =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
  const nO = [1, 2, 3, 4, 5],
    rO = Ve((e, t) => {
      const { level: n = 1 } = e,
        r = tO(e, ['level']);
      let i;
      return (
        nO.includes(n) ? (i = `h${n}`) : (i = 'h1'), y.createElement(as, Object.assign({ ref: t }, r, { component: i }))
      );
    }),
    No = rg;
  (No.Text = eO), (No.Link = Q$), (No.Title = rO), (No.Paragraph = J$);
  const Ur = No;
  var Ir = window,
    dr = (() => Ir.unsafeWindow)(),
    iO = (() => Ir.GM_xmlhttpRequest)();
  async function Ic(e) {
    const t = { 'Content-Type': 'application/json', ...e.headers };
    return new Promise((n, r) => {
      iO({
        method: 'GET',
        ...e,
        headers: t,
        onload: function (i) {
          if (i.status === 200) {
            const a = i.responseText;
            try {
              const s = JSON.parse(a);
              n(s);
            } catch (s) {
              r(s);
            }
          } else r(i);
        },
      });
    });
  }
  var Tc = {},
    oO = {
      get exports() {
        return Tc;
      },
      set exports(e) {
        Tc = e;
      },
    },
    Pc,
    cg;
  function aO() {
    if (cg) return Pc;
    cg = 1;
    var e = 1e3,
      t = e * 60,
      n = t * 60,
      r = n * 24,
      i = r * 7,
      a = r * 365.25;
    Pc = function (h, m) {
      m = m || {};
      var v = typeof h;
      if (v === 'string' && h.length > 0) return s(h);
      if (v === 'number' && isFinite(h)) return m.long ? f(h) : c(h);
      throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(h));
    };
    function s(h) {
      if (((h = String(h)), !(h.length > 100))) {
        var m =
          /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
            h,
          );
        if (m) {
          var v = parseFloat(m[1]),
            w = (m[2] || 'ms').toLowerCase();
          switch (w) {
            case 'years':
            case 'year':
            case 'yrs':
            case 'yr':
            case 'y':
              return v * a;
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
    function c(h) {
      var m = Math.abs(h);
      return m >= r
        ? Math.round(h / r) + 'd'
        : m >= n
        ? Math.round(h / n) + 'h'
        : m >= t
        ? Math.round(h / t) + 'm'
        : m >= e
        ? Math.round(h / e) + 's'
        : h + 'ms';
    }
    function f(h) {
      var m = Math.abs(h);
      return m >= r
        ? p(h, m, r, 'day')
        : m >= n
        ? p(h, m, n, 'hour')
        : m >= t
        ? p(h, m, t, 'minute')
        : m >= e
        ? p(h, m, e, 'second')
        : h + ' ms';
    }
    function p(h, m, v, w) {
      var S = m >= v * 1.5;
      return Math.round(h / v) + ' ' + w + (S ? 's' : '');
    }
    return Pc;
  }
  function sO(e) {
    (n.debug = n),
      (n.default = n),
      (n.coerce = f),
      (n.disable = a),
      (n.enable = i),
      (n.enabled = s),
      (n.humanize = aO()),
      (n.destroy = p),
      Object.keys(e).forEach((h) => {
        n[h] = e[h];
      }),
      (n.names = []),
      (n.skips = []),
      (n.formatters = {});
    function t(h) {
      let m = 0;
      for (let v = 0; v < h.length; v++) (m = (m << 5) - m + h.charCodeAt(v)), (m |= 0);
      return n.colors[Math.abs(m) % n.colors.length];
    }
    n.selectColor = t;
    function n(h) {
      let m,
        v = null,
        w,
        S;
      function C(..._) {
        if (!C.enabled) return;
        const E = C,
          I = Number(new Date()),
          N = I - (m || I);
        (E.diff = N),
          (E.prev = m),
          (E.curr = I),
          (m = I),
          (_[0] = n.coerce(_[0])),
          typeof _[0] != 'string' && _.unshift('%O');
        let D = 0;
        (_[0] = _[0].replace(/%([a-zA-Z%])/g, (u, $) => {
          if (u === '%%') return '%';
          D++;
          const P = n.formatters[$];
          if (typeof P == 'function') {
            const R = _[D];
            (u = P.call(E, R)), _.splice(D, 1), D--;
          }
          return u;
        })),
          n.formatArgs.call(E, _),
          (E.log || n.log).apply(E, _);
      }
      return (
        (C.namespace = h),
        (C.useColors = n.useColors()),
        (C.color = n.selectColor(h)),
        (C.extend = r),
        (C.destroy = n.destroy),
        Object.defineProperty(C, 'enabled', {
          enumerable: !0,
          configurable: !1,
          get: () => (v !== null ? v : (w !== n.namespaces && ((w = n.namespaces), (S = n.enabled(h))), S)),
          set: (_) => {
            v = _;
          },
        }),
        typeof n.init == 'function' && n.init(C),
        C
      );
    }
    function r(h, m) {
      const v = n(this.namespace + (typeof m > 'u' ? ':' : m) + h);
      return (v.log = this.log), v;
    }
    function i(h) {
      n.save(h), (n.namespaces = h), (n.names = []), (n.skips = []);
      let m;
      const v = (typeof h == 'string' ? h : '').split(/[\s,]+/),
        w = v.length;
      for (m = 0; m < w; m++)
        v[m] &&
          ((h = v[m].replace(/\*/g, '.*?')),
          h[0] === '-' ? n.skips.push(new RegExp('^' + h.slice(1) + '$')) : n.names.push(new RegExp('^' + h + '$')));
    }
    function a() {
      const h = [...n.names.map(c), ...n.skips.map(c).map((m) => '-' + m)].join(',');
      return n.enable(''), h;
    }
    function s(h) {
      if (h[h.length - 1] === '*') return !0;
      let m, v;
      for (m = 0, v = n.skips.length; m < v; m++) if (n.skips[m].test(h)) return !1;
      for (m = 0, v = n.names.length; m < v; m++) if (n.names[m].test(h)) return !0;
      return !1;
    }
    function c(h) {
      return h
        .toString()
        .substring(2, h.toString().length - 2)
        .replace(/\.\*\?$/, '*');
    }
    function f(h) {
      return h instanceof Error ? h.stack || h.message : h;
    }
    function p() {
      console.warn(
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
      );
    }
    return n.enable(n.load()), n;
  }
  var lO = sO;
  (function (e, t) {
    (t.formatArgs = r),
      (t.save = i),
      (t.load = a),
      (t.useColors = n),
      (t.storage = s()),
      (t.destroy = (() => {
        let f = !1;
        return () => {
          f ||
            ((f = !0),
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
    function r(f) {
      if (
        ((f[0] =
          (this.useColors ? '%c' : '') +
          this.namespace +
          (this.useColors ? ' %c' : ' ') +
          f[0] +
          (this.useColors ? '%c ' : ' ') +
          '+' +
          e.exports.humanize(this.diff)),
        !this.useColors)
      )
        return;
      const p = 'color: ' + this.color;
      f.splice(1, 0, p, 'color: inherit');
      let h = 0,
        m = 0;
      f[0].replace(/%[a-zA-Z%]/g, (v) => {
        v !== '%%' && (h++, v === '%c' && (m = h));
      }),
        f.splice(m, 0, p);
    }
    t.log = console.debug || console.log || (() => {});
    function i(f) {
      try {
        f ? t.storage.setItem('debug', f) : t.storage.removeItem('debug');
      } catch {}
    }
    function a() {
      let f;
      try {
        f = t.storage.getItem('debug');
      } catch {}
      return !f && typeof process < 'u' && 'env' in process && (f = process.env.DEBUG), f;
    }
    function s() {
      try {
        return localStorage;
      } catch {}
    }
    e.exports = lO(t);
    const { formatters: c } = e.exports;
    c.j = function (f) {
      try {
        return JSON.stringify(f);
      } catch (p) {
        return '[UnexpectedJSONParseError]: ' + p.message;
      }
    };
  })(oO, Tc);
  function cO() {
    const { id: e, name: t, path: n, testPage: r, terminal: i, title: a } = dr.$pegasus || {},
      s = r ? 153 : 149;
    window.open(`https://gcp.miravia.net/lazada/page/campaign/${s}/source/design/${e}??terminal=${i}`);
  }
  function ug(e) {
    return new Promise(function (t, n) {
      setTimeout(t, e);
    });
  }
  async function uO(e, t) {
    for (;;) {
      await ug(500);
      const n = e();
      n && !n.__used && ((n.__used = !0), t(n));
    }
  }
  var fO = 0;
  function ut(e, t, n, r, i, a) {
    var s,
      c,
      f = {};
    for (c in t) c == 'ref' ? (s = t[c]) : (f[c] = t[c]);
    var p = {
      type: e,
      props: f,
      key: n,
      ref: s,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: --fO,
      __source: i,
      __self: a,
    };
    if (typeof e == 'function' && (s = e.defaultProps)) for (c in s) f[c] === void 0 && (f[c] = s[c]);
    return y.options.vnode && y.options.vnode(p), p;
  }
  const fg = ({ text: e, env: t }) => {
    const [n, r] = Gn.useMessage(),
      i = () => {
        (dr.lib.mtop.config.prefix = ''),
          (dr.lib.mtop.config.subDomain = t === 'pre' ? 'pre-acs-m' : 'acs-m'),
          (dr.lib.mtop.config.mainDomain = 'miravia.es');
        const a = document.querySelector(
            '.module-detail-info .module-base-desc .module-attributes .module-desc-row div:nth-child(1) span:nth-child(2)',
          ).textContent,
          s = JSON.stringify(['ARISE_ES']),
          c = JSON.stringify([a ?? '']);
        dr.lib.mtop
          .request({
            api: t === 'pre' ? 'mtop.arise.shop.component.cache.reset' : 'mtop.lazada.shop.component.cache.reset',
            v: t === 'pre' ? '2.0' : '1.0',
            method: 'GET',
            dataType: 'json',
            data: { tenantIds: s, componentKeys: c, isAll: !0 },
          })
          .then(
            function ({ retType: p, data: h, ret: m }) {
              console.log(p, h, m, 'resolve'),
                n.open({
                  type: 'success',
                  content: '清除缓存成功，3秒刷新当前页面',
                  duration: 3,
                  onClose: () => {
                    dr.location.reload();
                  },
                });
            },
            function ({ retType: p, data: h, ret: m }) {
              console.log(p, h, m, 'reject'),
                n.open({
                  type: 'error',
                  content: m,
                  duration: 3,
                  onClose: () => {
                    dr.location.reload();
                  },
                });
            },
          );
      };
    return ut(y.Fragment, { children: [r, ut('span', { class: 'next-btn-helper', onClick: i, children: e })] });
  };
  var Nc = {},
    dO = {
      get exports() {
        return Nc;
      },
      set exports(e) {
        Nc = e;
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
    })(typeof window < 'u' ? window : ru, function (t, n) {
      var r = [],
        i = Object.getPrototypeOf,
        a = r.slice,
        s = r.flat
          ? function (o) {
              return r.flat.call(o);
            }
          : function (o) {
              return r.concat.apply([], o);
            },
        c = r.push,
        f = r.indexOf,
        p = {},
        h = p.toString,
        m = p.hasOwnProperty,
        v = m.toString,
        w = v.call(Object),
        S = {},
        C = function (l) {
          return typeof l == 'function' && typeof l.nodeType != 'number' && typeof l.item != 'function';
        },
        _ = function (l) {
          return l != null && l === l.window;
        },
        E = t.document,
        I = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function N(o, l, d) {
        d = d || E;
        var g,
          b,
          x = d.createElement('script');
        if (((x.text = o), l))
          for (g in I) (b = l[g] || (l.getAttribute && l.getAttribute(g))), b && x.setAttribute(g, b);
        d.head.appendChild(x).parentNode.removeChild(x);
      }
      function D(o) {
        return o == null
          ? o + ''
          : typeof o == 'object' || typeof o == 'function'
          ? p[h.call(o)] || 'object'
          : typeof o;
      }
      var z = '3.6.4',
        u = function (o, l) {
          return new u.fn.init(o, l);
        };
      (u.fn = u.prototype =
        {
          jquery: z,
          constructor: u,
          length: 0,
          toArray: function () {
            return a.call(this);
          },
          get: function (o) {
            return o == null ? a.call(this) : o < 0 ? this[o + this.length] : this[o];
          },
          pushStack: function (o) {
            var l = u.merge(this.constructor(), o);
            return (l.prevObject = this), l;
          },
          each: function (o) {
            return u.each(this, o);
          },
          map: function (o) {
            return this.pushStack(
              u.map(this, function (l, d) {
                return o.call(l, d, l);
              }),
            );
          },
          slice: function () {
            return this.pushStack(a.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              u.grep(this, function (o, l) {
                return (l + 1) % 2;
              }),
            );
          },
          odd: function () {
            return this.pushStack(
              u.grep(this, function (o, l) {
                return l % 2;
              }),
            );
          },
          eq: function (o) {
            var l = this.length,
              d = +o + (o < 0 ? l : 0);
            return this.pushStack(d >= 0 && d < l ? [this[d]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: r.sort,
          splice: r.splice,
        }),
        (u.extend = u.fn.extend =
          function () {
            var o,
              l,
              d,
              g,
              b,
              x,
              O = arguments[0] || {},
              k = 1,
              L = arguments.length,
              K = !1;
            for (
              typeof O == 'boolean' && ((K = O), (O = arguments[k] || {}), k++),
                typeof O != 'object' && !C(O) && (O = {}),
                k === L && ((O = this), k--);
              k < L;
              k++
            )
              if ((o = arguments[k]) != null)
                for (l in o)
                  (g = o[l]),
                    !(l === '__proto__' || O === g) &&
                      (K && g && (u.isPlainObject(g) || (b = Array.isArray(g)))
                        ? ((d = O[l]),
                          b && !Array.isArray(d) ? (x = []) : !b && !u.isPlainObject(d) ? (x = {}) : (x = d),
                          (b = !1),
                          (O[l] = u.extend(K, x, g)))
                        : g !== void 0 && (O[l] = g));
            return O;
          }),
        u.extend({
          expando: 'jQuery' + (z + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function (o) {
            throw new Error(o);
          },
          noop: function () {},
          isPlainObject: function (o) {
            var l, d;
            return !o || h.call(o) !== '[object Object]'
              ? !1
              : ((l = i(o)),
                l ? ((d = m.call(l, 'constructor') && l.constructor), typeof d == 'function' && v.call(d) === w) : !0);
          },
          isEmptyObject: function (o) {
            var l;
            for (l in o) return !1;
            return !0;
          },
          globalEval: function (o, l, d) {
            N(o, { nonce: l && l.nonce }, d);
          },
          each: function (o, l) {
            var d,
              g = 0;
            if ($(o)) for (d = o.length; g < d && l.call(o[g], g, o[g]) !== !1; g++);
            else for (g in o) if (l.call(o[g], g, o[g]) === !1) break;
            return o;
          },
          makeArray: function (o, l) {
            var d = l || [];
            return o != null && ($(Object(o)) ? u.merge(d, typeof o == 'string' ? [o] : o) : c.call(d, o)), d;
          },
          inArray: function (o, l, d) {
            return l == null ? -1 : f.call(l, o, d);
          },
          merge: function (o, l) {
            for (var d = +l.length, g = 0, b = o.length; g < d; g++) o[b++] = l[g];
            return (o.length = b), o;
          },
          grep: function (o, l, d) {
            for (var g, b = [], x = 0, O = o.length, k = !d; x < O; x++) (g = !l(o[x], x)), g !== k && b.push(o[x]);
            return b;
          },
          map: function (o, l, d) {
            var g,
              b,
              x = 0,
              O = [];
            if ($(o)) for (g = o.length; x < g; x++) (b = l(o[x], x, d)), b != null && O.push(b);
            else for (x in o) (b = l(o[x], x, d)), b != null && O.push(b);
            return s(O);
          },
          guid: 1,
          support: S,
        }),
        typeof Symbol == 'function' && (u.fn[Symbol.iterator] = r[Symbol.iterator]),
        u.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (o, l) {
          p['[object ' + l + ']'] = l.toLowerCase();
        });
      function $(o) {
        var l = !!o && 'length' in o && o.length,
          d = D(o);
        return C(o) || _(o) ? !1 : d === 'array' || l === 0 || (typeof l == 'number' && l > 0 && l - 1 in o);
      }
      var P = (function (o) {
        var l,
          d,
          g,
          b,
          x,
          O,
          k,
          L,
          K,
          Q,
          ce,
          Y,
          te,
          qe,
          ct,
          Ue,
          yn,
          pn,
          Xn,
          Ft = 'sizzle' + 1 * new Date(),
          at = o.document,
          Ln = 0,
          Et = 0,
          Zt = ds(),
          Do = ds(),
          cs = ds(),
          Yn = ds(),
          yi = function (T, H) {
            return T === H && (ce = !0), 0;
          },
          bi = {}.hasOwnProperty,
          Hn = [],
          Qr = Hn.pop,
          sr = Hn.push,
          Jr = Hn.push,
          Cg = Hn.slice,
          Si = function (T, H) {
            for (var W = 0, ne = T.length; W < ne; W++) if (T[W] === H) return W;
            return -1;
          },
          jc =
            'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
          Nt = '[\\x20\\t\\r\\n\\f]',
          Ci = '(?:\\\\[\\da-fA-F]{1,6}' + Nt + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
          xg =
            '\\[' +
            Nt +
            '*(' +
            Ci +
            ')(?:' +
            Nt +
            '*([*^$|!~]?=)' +
            Nt +
            `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
            Ci +
            '))|)' +
            Nt +
            '*\\]',
          zc =
            ':(' +
            Ci +
            `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
            xg +
            ')*)|.*)\\)|)',
          DO = new RegExp(Nt + '+', 'g'),
          us = new RegExp('^' + Nt + '+|((?:^|[^\\\\])(?:\\\\.)*)' + Nt + '+$', 'g'),
          FO = new RegExp('^' + Nt + '*,' + Nt + '*'),
          wg = new RegExp('^' + Nt + '*([>+~]|' + Nt + ')' + Nt + '*'),
          jO = new RegExp(Nt + '|>'),
          zO = new RegExp(zc),
          LO = new RegExp('^' + Ci + '$'),
          fs = {
            ID: new RegExp('^#(' + Ci + ')'),
            CLASS: new RegExp('^\\.(' + Ci + ')'),
            TAG: new RegExp('^(' + Ci + '|[*])'),
            ATTR: new RegExp('^' + xg),
            PSEUDO: new RegExp('^' + zc),
            CHILD: new RegExp(
              '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                Nt +
                '*(even|odd|(([+-]|)(\\d*)n|)' +
                Nt +
                '*(?:([+-]|)' +
                Nt +
                '*(\\d+)|))' +
                Nt +
                '*\\)|)',
              'i',
            ),
            bool: new RegExp('^(?:' + jc + ')$', 'i'),
            needsContext: new RegExp(
              '^' +
                Nt +
                '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                Nt +
                '*((?:-\\d)?\\d*)' +
                Nt +
                '*\\)|)(?=[^-]|$)',
              'i',
            ),
          },
          HO = /HTML$/i,
          kO = /^(?:input|select|textarea|button)$/i,
          BO = /^h\d$/i,
          Fo = /^[^{]+\{\s*\[native \w/,
          VO = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          Lc = /[+~]/,
          Rr = new RegExp('\\\\[\\da-fA-F]{1,6}' + Nt + '?|\\\\([^\\r\\n\\f])', 'g'),
          Mr = function (T, H) {
            var W = '0x' + T.slice(1) - 65536;
            return (
              H || (W < 0 ? String.fromCharCode(W + 65536) : String.fromCharCode((W >> 10) | 55296, (W & 1023) | 56320))
            );
          },
          Eg = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          $g = function (T, H) {
            return H
              ? T === '\0'
                ? '�'
                : T.slice(0, -1) + '\\' + T.charCodeAt(T.length - 1).toString(16) + ' '
              : '\\' + T;
          },
          Og = function () {
            Y();
          },
          WO = hs(
            function (T) {
              return T.disabled === !0 && T.nodeName.toLowerCase() === 'fieldset';
            },
            { dir: 'parentNode', next: 'legend' },
          );
        try {
          Jr.apply((Hn = Cg.call(at.childNodes)), at.childNodes), Hn[at.childNodes.length].nodeType;
        } catch {
          Jr = {
            apply: Hn.length
              ? function (H, W) {
                  sr.apply(H, Cg.call(W));
                }
              : function (H, W) {
                  for (var ne = H.length, q = 0; (H[ne++] = W[q++]); );
                  H.length = ne - 1;
                },
          };
        }
        function Ht(T, H, W, ne) {
          var q,
            ie,
            ue,
            we,
            Re,
            Ye,
            Ke,
            Ze = H && H.ownerDocument,
            yt = H ? H.nodeType : 9;
          if (((W = W || []), typeof T != 'string' || !T || (yt !== 1 && yt !== 9 && yt !== 11))) return W;
          if (!ne && (Y(H), (H = H || te), ct)) {
            if (yt !== 11 && (Re = VO.exec(T)))
              if ((q = Re[1])) {
                if (yt === 9)
                  if ((ue = H.getElementById(q))) {
                    if (ue.id === q) return W.push(ue), W;
                  } else return W;
                else if (Ze && (ue = Ze.getElementById(q)) && Xn(H, ue) && ue.id === q) return W.push(ue), W;
              } else {
                if (Re[2]) return Jr.apply(W, H.getElementsByTagName(T)), W;
                if ((q = Re[3]) && d.getElementsByClassName && H.getElementsByClassName)
                  return Jr.apply(W, H.getElementsByClassName(q)), W;
              }
            if (d.qsa && !Yn[T + ' '] && (!Ue || !Ue.test(T)) && (yt !== 1 || H.nodeName.toLowerCase() !== 'object')) {
              if (((Ke = T), (Ze = H), yt === 1 && (jO.test(T) || wg.test(T)))) {
                for (
                  Ze = (Lc.test(T) && kc(H.parentNode)) || H,
                    (Ze !== H || !d.scope) &&
                      ((we = H.getAttribute('id')) ? (we = we.replace(Eg, $g)) : H.setAttribute('id', (we = Ft))),
                    Ye = O(T),
                    ie = Ye.length;
                  ie--;

                )
                  Ye[ie] = (we ? '#' + we : ':scope') + ' ' + ps(Ye[ie]);
                Ke = Ye.join(',');
              }
              try {
                return Jr.apply(W, Ze.querySelectorAll(Ke)), W;
              } catch {
                Yn(T, !0);
              } finally {
                we === Ft && H.removeAttribute('id');
              }
            }
          }
          return L(T.replace(us, '$1'), H, W, ne);
        }
        function ds() {
          var T = [];
          function H(W, ne) {
            return T.push(W + ' ') > g.cacheLength && delete H[T.shift()], (H[W + ' '] = ne);
          }
          return H;
        }
        function vr(T) {
          return (T[Ft] = !0), T;
        }
        function lr(T) {
          var H = te.createElement('fieldset');
          try {
            return !!T(H);
          } catch {
            return !1;
          } finally {
            H.parentNode && H.parentNode.removeChild(H), (H = null);
          }
        }
        function Hc(T, H) {
          for (var W = T.split('|'), ne = W.length; ne--; ) g.attrHandle[W[ne]] = H;
        }
        function _g(T, H) {
          var W = H && T,
            ne = W && T.nodeType === 1 && H.nodeType === 1 && T.sourceIndex - H.sourceIndex;
          if (ne) return ne;
          if (W) {
            for (; (W = W.nextSibling); ) if (W === H) return -1;
          }
          return T ? 1 : -1;
        }
        function UO(T) {
          return function (H) {
            var W = H.nodeName.toLowerCase();
            return W === 'input' && H.type === T;
          };
        }
        function qO(T) {
          return function (H) {
            var W = H.nodeName.toLowerCase();
            return (W === 'input' || W === 'button') && H.type === T;
          };
        }
        function Ig(T) {
          return function (H) {
            return 'form' in H
              ? H.parentNode && H.disabled === !1
                ? 'label' in H
                  ? 'label' in H.parentNode
                    ? H.parentNode.disabled === T
                    : H.disabled === T
                  : H.isDisabled === T || (H.isDisabled !== !T && WO(H) === T)
                : H.disabled === T
              : 'label' in H
              ? H.disabled === T
              : !1;
          };
        }
        function xi(T) {
          return vr(function (H) {
            return (
              (H = +H),
              vr(function (W, ne) {
                for (var q, ie = T([], W.length, H), ue = ie.length; ue--; )
                  W[(q = ie[ue])] && (W[q] = !(ne[q] = W[q]));
              })
            );
          });
        }
        function kc(T) {
          return T && typeof T.getElementsByTagName < 'u' && T;
        }
        (d = Ht.support = {}),
          (x = Ht.isXML =
            function (T) {
              var H = T && T.namespaceURI,
                W = T && (T.ownerDocument || T).documentElement;
              return !HO.test(H || (W && W.nodeName) || 'HTML');
            }),
          (Y = Ht.setDocument =
            function (T) {
              var H,
                W,
                ne = T ? T.ownerDocument || T : at;
              return (
                ne == te ||
                  ne.nodeType !== 9 ||
                  !ne.documentElement ||
                  ((te = ne),
                  (qe = te.documentElement),
                  (ct = !x(te)),
                  at != te &&
                    (W = te.defaultView) &&
                    W.top !== W &&
                    (W.addEventListener
                      ? W.addEventListener('unload', Og, !1)
                      : W.attachEvent && W.attachEvent('onunload', Og)),
                  (d.scope = lr(function (q) {
                    return (
                      qe.appendChild(q).appendChild(te.createElement('div')),
                      typeof q.querySelectorAll < 'u' && !q.querySelectorAll(':scope fieldset div').length
                    );
                  })),
                  (d.cssHas = lr(function () {
                    try {
                      return te.querySelector(':has(*,:jqfake)'), !1;
                    } catch {
                      return !0;
                    }
                  })),
                  (d.attributes = lr(function (q) {
                    return (q.className = 'i'), !q.getAttribute('className');
                  })),
                  (d.getElementsByTagName = lr(function (q) {
                    return q.appendChild(te.createComment('')), !q.getElementsByTagName('*').length;
                  })),
                  (d.getElementsByClassName = Fo.test(te.getElementsByClassName)),
                  (d.getById = lr(function (q) {
                    return (qe.appendChild(q).id = Ft), !te.getElementsByName || !te.getElementsByName(Ft).length;
                  })),
                  d.getById
                    ? ((g.filter.ID = function (q) {
                        var ie = q.replace(Rr, Mr);
                        return function (ue) {
                          return ue.getAttribute('id') === ie;
                        };
                      }),
                      (g.find.ID = function (q, ie) {
                        if (typeof ie.getElementById < 'u' && ct) {
                          var ue = ie.getElementById(q);
                          return ue ? [ue] : [];
                        }
                      }))
                    : ((g.filter.ID = function (q) {
                        var ie = q.replace(Rr, Mr);
                        return function (ue) {
                          var we = typeof ue.getAttributeNode < 'u' && ue.getAttributeNode('id');
                          return we && we.value === ie;
                        };
                      }),
                      (g.find.ID = function (q, ie) {
                        if (typeof ie.getElementById < 'u' && ct) {
                          var ue,
                            we,
                            Re,
                            Ye = ie.getElementById(q);
                          if (Ye) {
                            if (((ue = Ye.getAttributeNode('id')), ue && ue.value === q)) return [Ye];
                            for (Re = ie.getElementsByName(q), we = 0; (Ye = Re[we++]); )
                              if (((ue = Ye.getAttributeNode('id')), ue && ue.value === q)) return [Ye];
                          }
                          return [];
                        }
                      })),
                  (g.find.TAG = d.getElementsByTagName
                    ? function (q, ie) {
                        if (typeof ie.getElementsByTagName < 'u') return ie.getElementsByTagName(q);
                        if (d.qsa) return ie.querySelectorAll(q);
                      }
                    : function (q, ie) {
                        var ue,
                          we = [],
                          Re = 0,
                          Ye = ie.getElementsByTagName(q);
                        if (q === '*') {
                          for (; (ue = Ye[Re++]); ) ue.nodeType === 1 && we.push(ue);
                          return we;
                        }
                        return Ye;
                      }),
                  (g.find.CLASS =
                    d.getElementsByClassName &&
                    function (q, ie) {
                      if (typeof ie.getElementsByClassName < 'u' && ct) return ie.getElementsByClassName(q);
                    }),
                  (yn = []),
                  (Ue = []),
                  (d.qsa = Fo.test(te.querySelectorAll)) &&
                    (lr(function (q) {
                      var ie;
                      (qe.appendChild(q).innerHTML =
                        "<a id='" +
                        Ft +
                        "'></a><select id='" +
                        Ft +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        q.querySelectorAll("[msallowcapture^='']").length && Ue.push('[*^$]=' + Nt + `*(?:''|"")`),
                        q.querySelectorAll('[selected]').length || Ue.push('\\[' + Nt + '*(?:value|' + jc + ')'),
                        q.querySelectorAll('[id~=' + Ft + '-]').length || Ue.push('~='),
                        (ie = te.createElement('input')),
                        ie.setAttribute('name', ''),
                        q.appendChild(ie),
                        q.querySelectorAll("[name='']").length ||
                          Ue.push('\\[' + Nt + '*name' + Nt + '*=' + Nt + `*(?:''|"")`),
                        q.querySelectorAll(':checked').length || Ue.push(':checked'),
                        q.querySelectorAll('a#' + Ft + '+*').length || Ue.push('.#.+[+~]'),
                        q.querySelectorAll('\\\f'),
                        Ue.push('[\\r\\n\\f]');
                    }),
                    lr(function (q) {
                      q.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var ie = te.createElement('input');
                      ie.setAttribute('type', 'hidden'),
                        q.appendChild(ie).setAttribute('name', 'D'),
                        q.querySelectorAll('[name=d]').length && Ue.push('name' + Nt + '*[*^$|!~]?='),
                        q.querySelectorAll(':enabled').length !== 2 && Ue.push(':enabled', ':disabled'),
                        (qe.appendChild(q).disabled = !0),
                        q.querySelectorAll(':disabled').length !== 2 && Ue.push(':enabled', ':disabled'),
                        q.querySelectorAll('*,:x'),
                        Ue.push(',.*:');
                    })),
                  (d.matchesSelector = Fo.test(
                    (pn =
                      qe.matches ||
                      qe.webkitMatchesSelector ||
                      qe.mozMatchesSelector ||
                      qe.oMatchesSelector ||
                      qe.msMatchesSelector),
                  )) &&
                    lr(function (q) {
                      (d.disconnectedMatch = pn.call(q, '*')), pn.call(q, "[s!='']:x"), yn.push('!=', zc);
                    }),
                  d.cssHas || Ue.push(':has'),
                  (Ue = Ue.length && new RegExp(Ue.join('|'))),
                  (yn = yn.length && new RegExp(yn.join('|'))),
                  (H = Fo.test(qe.compareDocumentPosition)),
                  (Xn =
                    H || Fo.test(qe.contains)
                      ? function (q, ie) {
                          var ue = (q.nodeType === 9 && q.documentElement) || q,
                            we = ie && ie.parentNode;
                          return (
                            q === we ||
                            !!(
                              we &&
                              we.nodeType === 1 &&
                              (ue.contains
                                ? ue.contains(we)
                                : q.compareDocumentPosition && q.compareDocumentPosition(we) & 16)
                            )
                          );
                        }
                      : function (q, ie) {
                          if (ie) {
                            for (; (ie = ie.parentNode); ) if (ie === q) return !0;
                          }
                          return !1;
                        }),
                  (yi = H
                    ? function (q, ie) {
                        if (q === ie) return (ce = !0), 0;
                        var ue = !q.compareDocumentPosition - !ie.compareDocumentPosition;
                        return (
                          ue ||
                          ((ue =
                            (q.ownerDocument || q) == (ie.ownerDocument || ie) ? q.compareDocumentPosition(ie) : 1),
                          ue & 1 || (!d.sortDetached && ie.compareDocumentPosition(q) === ue)
                            ? q == te || (q.ownerDocument == at && Xn(at, q))
                              ? -1
                              : ie == te || (ie.ownerDocument == at && Xn(at, ie))
                              ? 1
                              : Q
                              ? Si(Q, q) - Si(Q, ie)
                              : 0
                            : ue & 4
                            ? -1
                            : 1)
                        );
                      }
                    : function (q, ie) {
                        if (q === ie) return (ce = !0), 0;
                        var ue,
                          we = 0,
                          Re = q.parentNode,
                          Ye = ie.parentNode,
                          Ke = [q],
                          Ze = [ie];
                        if (!Re || !Ye)
                          return q == te ? -1 : ie == te ? 1 : Re ? -1 : Ye ? 1 : Q ? Si(Q, q) - Si(Q, ie) : 0;
                        if (Re === Ye) return _g(q, ie);
                        for (ue = q; (ue = ue.parentNode); ) Ke.unshift(ue);
                        for (ue = ie; (ue = ue.parentNode); ) Ze.unshift(ue);
                        for (; Ke[we] === Ze[we]; ) we++;
                        return we ? _g(Ke[we], Ze[we]) : Ke[we] == at ? -1 : Ze[we] == at ? 1 : 0;
                      })),
                te
              );
            }),
          (Ht.matches = function (T, H) {
            return Ht(T, null, null, H);
          }),
          (Ht.matchesSelector = function (T, H) {
            if ((Y(T), d.matchesSelector && ct && !Yn[H + ' '] && (!yn || !yn.test(H)) && (!Ue || !Ue.test(H))))
              try {
                var W = pn.call(T, H);
                if (W || d.disconnectedMatch || (T.document && T.document.nodeType !== 11)) return W;
              } catch {
                Yn(H, !0);
              }
            return Ht(H, te, null, [T]).length > 0;
          }),
          (Ht.contains = function (T, H) {
            return (T.ownerDocument || T) != te && Y(T), Xn(T, H);
          }),
          (Ht.attr = function (T, H) {
            (T.ownerDocument || T) != te && Y(T);
            var W = g.attrHandle[H.toLowerCase()],
              ne = W && bi.call(g.attrHandle, H.toLowerCase()) ? W(T, H, !ct) : void 0;
            return ne !== void 0
              ? ne
              : d.attributes || !ct
              ? T.getAttribute(H)
              : (ne = T.getAttributeNode(H)) && ne.specified
              ? ne.value
              : null;
          }),
          (Ht.escape = function (T) {
            return (T + '').replace(Eg, $g);
          }),
          (Ht.error = function (T) {
            throw new Error('Syntax error, unrecognized expression: ' + T);
          }),
          (Ht.uniqueSort = function (T) {
            var H,
              W = [],
              ne = 0,
              q = 0;
            if (((ce = !d.detectDuplicates), (Q = !d.sortStable && T.slice(0)), T.sort(yi), ce)) {
              for (; (H = T[q++]); ) H === T[q] && (ne = W.push(q));
              for (; ne--; ) T.splice(W[ne], 1);
            }
            return (Q = null), T;
          }),
          (b = Ht.getText =
            function (T) {
              var H,
                W = '',
                ne = 0,
                q = T.nodeType;
              if (q) {
                if (q === 1 || q === 9 || q === 11) {
                  if (typeof T.textContent == 'string') return T.textContent;
                  for (T = T.firstChild; T; T = T.nextSibling) W += b(T);
                } else if (q === 3 || q === 4) return T.nodeValue;
              } else for (; (H = T[ne++]); ) W += b(H);
              return W;
            }),
          (g = Ht.selectors =
            {
              cacheLength: 50,
              createPseudo: vr,
              match: fs,
              attrHandle: {},
              find: {},
              relative: {
                '>': { dir: 'parentNode', first: !0 },
                ' ': { dir: 'parentNode' },
                '+': { dir: 'previousSibling', first: !0 },
                '~': { dir: 'previousSibling' },
              },
              preFilter: {
                ATTR: function (T) {
                  return (
                    (T[1] = T[1].replace(Rr, Mr)),
                    (T[3] = (T[3] || T[4] || T[5] || '').replace(Rr, Mr)),
                    T[2] === '~=' && (T[3] = ' ' + T[3] + ' '),
                    T.slice(0, 4)
                  );
                },
                CHILD: function (T) {
                  return (
                    (T[1] = T[1].toLowerCase()),
                    T[1].slice(0, 3) === 'nth'
                      ? (T[3] || Ht.error(T[0]),
                        (T[4] = +(T[4] ? T[5] + (T[6] || 1) : 2 * (T[3] === 'even' || T[3] === 'odd'))),
                        (T[5] = +(T[7] + T[8] || T[3] === 'odd')))
                      : T[3] && Ht.error(T[0]),
                    T
                  );
                },
                PSEUDO: function (T) {
                  var H,
                    W = !T[6] && T[2];
                  return fs.CHILD.test(T[0])
                    ? null
                    : (T[3]
                        ? (T[2] = T[4] || T[5] || '')
                        : W &&
                          zO.test(W) &&
                          (H = O(W, !0)) &&
                          (H = W.indexOf(')', W.length - H) - W.length) &&
                          ((T[0] = T[0].slice(0, H)), (T[2] = W.slice(0, H))),
                      T.slice(0, 3));
                },
              },
              filter: {
                TAG: function (T) {
                  var H = T.replace(Rr, Mr).toLowerCase();
                  return T === '*'
                    ? function () {
                        return !0;
                      }
                    : function (W) {
                        return W.nodeName && W.nodeName.toLowerCase() === H;
                      };
                },
                CLASS: function (T) {
                  var H = Zt[T + ' '];
                  return (
                    H ||
                    ((H = new RegExp('(^|' + Nt + ')' + T + '(' + Nt + '|$)')) &&
                      Zt(T, function (W) {
                        return H.test(
                          (typeof W.className == 'string' && W.className) ||
                            (typeof W.getAttribute < 'u' && W.getAttribute('class')) ||
                            '',
                        );
                      }))
                  );
                },
                ATTR: function (T, H, W) {
                  return function (ne) {
                    var q = Ht.attr(ne, T);
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
                          ? (' ' + q.replace(DO, ' ') + ' ').indexOf(W) > -1
                          : H === '|='
                          ? q === W || q.slice(0, W.length + 1) === W + '-'
                          : !1)
                      : !0;
                  };
                },
                CHILD: function (T, H, W, ne, q) {
                  var ie = T.slice(0, 3) !== 'nth',
                    ue = T.slice(-4) !== 'last',
                    we = H === 'of-type';
                  return ne === 1 && q === 0
                    ? function (Re) {
                        return !!Re.parentNode;
                      }
                    : function (Re, Ye, Ke) {
                        var Ze,
                          yt,
                          kt,
                          Qe,
                          bn,
                          Nn,
                          Qn = ie !== ue ? 'nextSibling' : 'previousSibling',
                          Xt = Re.parentNode,
                          jo = we && Re.nodeName.toLowerCase(),
                          zo = !Ke && !we,
                          Jn = !1;
                        if (Xt) {
                          if (ie) {
                            for (; Qn; ) {
                              for (Qe = Re; (Qe = Qe[Qn]); )
                                if (we ? Qe.nodeName.toLowerCase() === jo : Qe.nodeType === 1) return !1;
                              Nn = Qn = T === 'only' && !Nn && 'nextSibling';
                            }
                            return !0;
                          }
                          if (((Nn = [ue ? Xt.firstChild : Xt.lastChild]), ue && zo)) {
                            for (
                              Qe = Xt,
                                kt = Qe[Ft] || (Qe[Ft] = {}),
                                yt = kt[Qe.uniqueID] || (kt[Qe.uniqueID] = {}),
                                Ze = yt[T] || [],
                                bn = Ze[0] === Ln && Ze[1],
                                Jn = bn && Ze[2],
                                Qe = bn && Xt.childNodes[bn];
                              (Qe = (++bn && Qe && Qe[Qn]) || (Jn = bn = 0) || Nn.pop());

                            )
                              if (Qe.nodeType === 1 && ++Jn && Qe === Re) {
                                yt[T] = [Ln, bn, Jn];
                                break;
                              }
                          } else if (
                            (zo &&
                              ((Qe = Re),
                              (kt = Qe[Ft] || (Qe[Ft] = {})),
                              (yt = kt[Qe.uniqueID] || (kt[Qe.uniqueID] = {})),
                              (Ze = yt[T] || []),
                              (bn = Ze[0] === Ln && Ze[1]),
                              (Jn = bn)),
                            Jn === !1)
                          )
                            for (
                              ;
                              (Qe = (++bn && Qe && Qe[Qn]) || (Jn = bn = 0) || Nn.pop()) &&
                              !(
                                (we ? Qe.nodeName.toLowerCase() === jo : Qe.nodeType === 1) &&
                                ++Jn &&
                                (zo &&
                                  ((kt = Qe[Ft] || (Qe[Ft] = {})),
                                  (yt = kt[Qe.uniqueID] || (kt[Qe.uniqueID] = {})),
                                  (yt[T] = [Ln, Jn])),
                                Qe === Re)
                              );

                            );
                          return (Jn -= q), Jn === ne || (Jn % ne === 0 && Jn / ne >= 0);
                        }
                      };
                },
                PSEUDO: function (T, H) {
                  var W,
                    ne = g.pseudos[T] || g.setFilters[T.toLowerCase()] || Ht.error('unsupported pseudo: ' + T);
                  return ne[Ft]
                    ? ne(H)
                    : ne.length > 1
                    ? ((W = [T, T, '', H]),
                      g.setFilters.hasOwnProperty(T.toLowerCase())
                        ? vr(function (q, ie) {
                            for (var ue, we = ne(q, H), Re = we.length; Re--; )
                              (ue = Si(q, we[Re])), (q[ue] = !(ie[ue] = we[Re]));
                          })
                        : function (q) {
                            return ne(q, 0, W);
                          })
                    : ne;
                },
              },
              pseudos: {
                not: vr(function (T) {
                  var H = [],
                    W = [],
                    ne = k(T.replace(us, '$1'));
                  return ne[Ft]
                    ? vr(function (q, ie, ue, we) {
                        for (var Re, Ye = ne(q, null, we, []), Ke = q.length; Ke--; )
                          (Re = Ye[Ke]) && (q[Ke] = !(ie[Ke] = Re));
                      })
                    : function (q, ie, ue) {
                        return (H[0] = q), ne(H, null, ue, W), (H[0] = null), !W.pop();
                      };
                }),
                has: vr(function (T) {
                  return function (H) {
                    return Ht(T, H).length > 0;
                  };
                }),
                contains: vr(function (T) {
                  return (
                    (T = T.replace(Rr, Mr)),
                    function (H) {
                      return (H.textContent || b(H)).indexOf(T) > -1;
                    }
                  );
                }),
                lang: vr(function (T) {
                  return (
                    LO.test(T || '') || Ht.error('unsupported lang: ' + T),
                    (T = T.replace(Rr, Mr).toLowerCase()),
                    function (H) {
                      var W;
                      do
                        if ((W = ct ? H.lang : H.getAttribute('xml:lang') || H.getAttribute('lang')))
                          return (W = W.toLowerCase()), W === T || W.indexOf(T + '-') === 0;
                      while ((H = H.parentNode) && H.nodeType === 1);
                      return !1;
                    }
                  );
                }),
                target: function (T) {
                  var H = o.location && o.location.hash;
                  return H && H.slice(1) === T.id;
                },
                root: function (T) {
                  return T === qe;
                },
                focus: function (T) {
                  return (
                    T === te.activeElement && (!te.hasFocus || te.hasFocus()) && !!(T.type || T.href || ~T.tabIndex)
                  );
                },
                enabled: Ig(!1),
                disabled: Ig(!0),
                checked: function (T) {
                  var H = T.nodeName.toLowerCase();
                  return (H === 'input' && !!T.checked) || (H === 'option' && !!T.selected);
                },
                selected: function (T) {
                  return T.parentNode && T.parentNode.selectedIndex, T.selected === !0;
                },
                empty: function (T) {
                  for (T = T.firstChild; T; T = T.nextSibling) if (T.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (T) {
                  return !g.pseudos.empty(T);
                },
                header: function (T) {
                  return BO.test(T.nodeName);
                },
                input: function (T) {
                  return kO.test(T.nodeName);
                },
                button: function (T) {
                  var H = T.nodeName.toLowerCase();
                  return (H === 'input' && T.type === 'button') || H === 'button';
                },
                text: function (T) {
                  var H;
                  return (
                    T.nodeName.toLowerCase() === 'input' &&
                    T.type === 'text' &&
                    ((H = T.getAttribute('type')) == null || H.toLowerCase() === 'text')
                  );
                },
                first: xi(function () {
                  return [0];
                }),
                last: xi(function (T, H) {
                  return [H - 1];
                }),
                eq: xi(function (T, H, W) {
                  return [W < 0 ? W + H : W];
                }),
                even: xi(function (T, H) {
                  for (var W = 0; W < H; W += 2) T.push(W);
                  return T;
                }),
                odd: xi(function (T, H) {
                  for (var W = 1; W < H; W += 2) T.push(W);
                  return T;
                }),
                lt: xi(function (T, H, W) {
                  for (var ne = W < 0 ? W + H : W > H ? H : W; --ne >= 0; ) T.push(ne);
                  return T;
                }),
                gt: xi(function (T, H, W) {
                  for (var ne = W < 0 ? W + H : W; ++ne < H; ) T.push(ne);
                  return T;
                }),
              },
            }),
          (g.pseudos.nth = g.pseudos.eq);
        for (l in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) g.pseudos[l] = UO(l);
        for (l in { submit: !0, reset: !0 }) g.pseudos[l] = qO(l);
        function Tg() {}
        (Tg.prototype = g.filters = g.pseudos),
          (g.setFilters = new Tg()),
          (O = Ht.tokenize =
            function (T, H) {
              var W,
                ne,
                q,
                ie,
                ue,
                we,
                Re,
                Ye = Do[T + ' '];
              if (Ye) return H ? 0 : Ye.slice(0);
              for (ue = T, we = [], Re = g.preFilter; ue; ) {
                (!W || (ne = FO.exec(ue))) && (ne && (ue = ue.slice(ne[0].length) || ue), we.push((q = []))),
                  (W = !1),
                  (ne = wg.exec(ue)) &&
                    ((W = ne.shift()), q.push({ value: W, type: ne[0].replace(us, ' ') }), (ue = ue.slice(W.length)));
                for (ie in g.filter)
                  (ne = fs[ie].exec(ue)) &&
                    (!Re[ie] || (ne = Re[ie](ne))) &&
                    ((W = ne.shift()), q.push({ value: W, type: ie, matches: ne }), (ue = ue.slice(W.length)));
                if (!W) break;
              }
              return H ? ue.length : ue ? Ht.error(T) : Do(T, we).slice(0);
            });
        function ps(T) {
          for (var H = 0, W = T.length, ne = ''; H < W; H++) ne += T[H].value;
          return ne;
        }
        function hs(T, H, W) {
          var ne = H.dir,
            q = H.next,
            ie = q || ne,
            ue = W && ie === 'parentNode',
            we = Et++;
          return H.first
            ? function (Re, Ye, Ke) {
                for (; (Re = Re[ne]); ) if (Re.nodeType === 1 || ue) return T(Re, Ye, Ke);
                return !1;
              }
            : function (Re, Ye, Ke) {
                var Ze,
                  yt,
                  kt,
                  Qe = [Ln, we];
                if (Ke) {
                  for (; (Re = Re[ne]); ) if ((Re.nodeType === 1 || ue) && T(Re, Ye, Ke)) return !0;
                } else
                  for (; (Re = Re[ne]); )
                    if (Re.nodeType === 1 || ue)
                      if (
                        ((kt = Re[Ft] || (Re[Ft] = {})),
                        (yt = kt[Re.uniqueID] || (kt[Re.uniqueID] = {})),
                        q && q === Re.nodeName.toLowerCase())
                      )
                        Re = Re[ne] || Re;
                      else {
                        if ((Ze = yt[ie]) && Ze[0] === Ln && Ze[1] === we) return (Qe[2] = Ze[2]);
                        if (((yt[ie] = Qe), (Qe[2] = T(Re, Ye, Ke)))) return !0;
                      }
                return !1;
              };
        }
        function Bc(T) {
          return T.length > 1
            ? function (H, W, ne) {
                for (var q = T.length; q--; ) if (!T[q](H, W, ne)) return !1;
                return !0;
              }
            : T[0];
        }
        function GO(T, H, W) {
          for (var ne = 0, q = H.length; ne < q; ne++) Ht(T, H[ne], W);
          return W;
        }
        function gs(T, H, W, ne, q) {
          for (var ie, ue = [], we = 0, Re = T.length, Ye = H != null; we < Re; we++)
            (ie = T[we]) && (!W || W(ie, ne, q)) && (ue.push(ie), Ye && H.push(we));
          return ue;
        }
        function Vc(T, H, W, ne, q, ie) {
          return (
            ne && !ne[Ft] && (ne = Vc(ne)),
            q && !q[Ft] && (q = Vc(q, ie)),
            vr(function (ue, we, Re, Ye) {
              var Ke,
                Ze,
                yt,
                kt = [],
                Qe = [],
                bn = we.length,
                Nn = ue || GO(H || '*', Re.nodeType ? [Re] : Re, []),
                Qn = T && (ue || !H) ? gs(Nn, kt, T, Re, Ye) : Nn,
                Xt = W ? (q || (ue ? T : bn || ne) ? [] : we) : Qn;
              if ((W && W(Qn, Xt, Re, Ye), ne))
                for (Ke = gs(Xt, Qe), ne(Ke, [], Re, Ye), Ze = Ke.length; Ze--; )
                  (yt = Ke[Ze]) && (Xt[Qe[Ze]] = !(Qn[Qe[Ze]] = yt));
              if (ue) {
                if (q || T) {
                  if (q) {
                    for (Ke = [], Ze = Xt.length; Ze--; ) (yt = Xt[Ze]) && Ke.push((Qn[Ze] = yt));
                    q(null, (Xt = []), Ke, Ye);
                  }
                  for (Ze = Xt.length; Ze--; )
                    (yt = Xt[Ze]) && (Ke = q ? Si(ue, yt) : kt[Ze]) > -1 && (ue[Ke] = !(we[Ke] = yt));
                }
              } else (Xt = gs(Xt === we ? Xt.splice(bn, Xt.length) : Xt)), q ? q(null, we, Xt, Ye) : Jr.apply(we, Xt);
            })
          );
        }
        function Wc(T) {
          for (
            var H,
              W,
              ne,
              q = T.length,
              ie = g.relative[T[0].type],
              ue = ie || g.relative[' '],
              we = ie ? 1 : 0,
              Re = hs(
                function (Ze) {
                  return Ze === H;
                },
                ue,
                !0,
              ),
              Ye = hs(
                function (Ze) {
                  return Si(H, Ze) > -1;
                },
                ue,
                !0,
              ),
              Ke = [
                function (Ze, yt, kt) {
                  var Qe = (!ie && (kt || yt !== K)) || ((H = yt).nodeType ? Re(Ze, yt, kt) : Ye(Ze, yt, kt));
                  return (H = null), Qe;
                },
              ];
            we < q;
            we++
          )
            if ((W = g.relative[T[we].type])) Ke = [hs(Bc(Ke), W)];
            else {
              if (((W = g.filter[T[we].type].apply(null, T[we].matches)), W[Ft])) {
                for (ne = ++we; ne < q && !g.relative[T[ne].type]; ne++);
                return Vc(
                  we > 1 && Bc(Ke),
                  we > 1 &&
                    ps(T.slice(0, we - 1).concat({ value: T[we - 2].type === ' ' ? '*' : '' })).replace(us, '$1'),
                  W,
                  we < ne && Wc(T.slice(we, ne)),
                  ne < q && Wc((T = T.slice(ne))),
                  ne < q && ps(T),
                );
              }
              Ke.push(W);
            }
          return Bc(Ke);
        }
        function KO(T, H) {
          var W = H.length > 0,
            ne = T.length > 0,
            q = function (ie, ue, we, Re, Ye) {
              var Ke,
                Ze,
                yt,
                kt = 0,
                Qe = '0',
                bn = ie && [],
                Nn = [],
                Qn = K,
                Xt = ie || (ne && g.find.TAG('*', Ye)),
                jo = (Ln += Qn == null ? 1 : Math.random() || 0.1),
                zo = Xt.length;
              for (Ye && (K = ue == te || ue || Ye); Qe !== zo && (Ke = Xt[Qe]) != null; Qe++) {
                if (ne && Ke) {
                  for (Ze = 0, !ue && Ke.ownerDocument != te && (Y(Ke), (we = !ct)); (yt = T[Ze++]); )
                    if (yt(Ke, ue || te, we)) {
                      Re.push(Ke);
                      break;
                    }
                  Ye && (Ln = jo);
                }
                W && ((Ke = !yt && Ke) && kt--, ie && bn.push(Ke));
              }
              if (((kt += Qe), W && Qe !== kt)) {
                for (Ze = 0; (yt = H[Ze++]); ) yt(bn, Nn, ue, we);
                if (ie) {
                  if (kt > 0) for (; Qe--; ) bn[Qe] || Nn[Qe] || (Nn[Qe] = Qr.call(Re));
                  Nn = gs(Nn);
                }
                Jr.apply(Re, Nn), Ye && !ie && Nn.length > 0 && kt + H.length > 1 && Ht.uniqueSort(Re);
              }
              return Ye && ((Ln = jo), (K = Qn)), bn;
            };
          return W ? vr(q) : q;
        }
        return (
          (k = Ht.compile =
            function (T, H) {
              var W,
                ne = [],
                q = [],
                ie = cs[T + ' '];
              if (!ie) {
                for (H || (H = O(T)), W = H.length; W--; ) (ie = Wc(H[W])), ie[Ft] ? ne.push(ie) : q.push(ie);
                (ie = cs(T, KO(q, ne))), (ie.selector = T);
              }
              return ie;
            }),
          (L = Ht.select =
            function (T, H, W, ne) {
              var q,
                ie,
                ue,
                we,
                Re,
                Ye = typeof T == 'function' && T,
                Ke = !ne && O((T = Ye.selector || T));
              if (((W = W || []), Ke.length === 1)) {
                if (
                  ((ie = Ke[0] = Ke[0].slice(0)),
                  ie.length > 2 && (ue = ie[0]).type === 'ID' && H.nodeType === 9 && ct && g.relative[ie[1].type])
                ) {
                  if (((H = (g.find.ID(ue.matches[0].replace(Rr, Mr), H) || [])[0]), H)) Ye && (H = H.parentNode);
                  else return W;
                  T = T.slice(ie.shift().value.length);
                }
                for (q = fs.needsContext.test(T) ? 0 : ie.length; q-- && ((ue = ie[q]), !g.relative[(we = ue.type)]); )
                  if (
                    (Re = g.find[we]) &&
                    (ne = Re(ue.matches[0].replace(Rr, Mr), (Lc.test(ie[0].type) && kc(H.parentNode)) || H))
                  ) {
                    if ((ie.splice(q, 1), (T = ne.length && ps(ie)), !T)) return Jr.apply(W, ne), W;
                    break;
                  }
              }
              return (Ye || k(T, Ke))(ne, H, !ct, W, !H || (Lc.test(T) && kc(H.parentNode)) || H), W;
            }),
          (d.sortStable = Ft.split('').sort(yi).join('') === Ft),
          (d.detectDuplicates = !!ce),
          Y(),
          (d.sortDetached = lr(function (T) {
            return T.compareDocumentPosition(te.createElement('fieldset')) & 1;
          })),
          lr(function (T) {
            return (T.innerHTML = "<a href='#'></a>"), T.firstChild.getAttribute('href') === '#';
          }) ||
            Hc('type|href|height|width', function (T, H, W) {
              if (!W) return T.getAttribute(H, H.toLowerCase() === 'type' ? 1 : 2);
            }),
          (!d.attributes ||
            !lr(function (T) {
              return (
                (T.innerHTML = '<input/>'),
                T.firstChild.setAttribute('value', ''),
                T.firstChild.getAttribute('value') === ''
              );
            })) &&
            Hc('value', function (T, H, W) {
              if (!W && T.nodeName.toLowerCase() === 'input') return T.defaultValue;
            }),
          lr(function (T) {
            return T.getAttribute('disabled') == null;
          }) ||
            Hc(jc, function (T, H, W) {
              var ne;
              if (!W)
                return T[H] === !0 ? H.toLowerCase() : (ne = T.getAttributeNode(H)) && ne.specified ? ne.value : null;
            }),
          Ht
        );
      })(t);
      (u.find = P),
        (u.expr = P.selectors),
        (u.expr[':'] = u.expr.pseudos),
        (u.uniqueSort = u.unique = P.uniqueSort),
        (u.text = P.getText),
        (u.isXMLDoc = P.isXML),
        (u.contains = P.contains),
        (u.escapeSelector = P.escape);
      var R = function (o, l, d) {
          for (var g = [], b = d !== void 0; (o = o[l]) && o.nodeType !== 9; )
            if (o.nodeType === 1) {
              if (b && u(o).is(d)) break;
              g.push(o);
            }
          return g;
        },
        A = function (o, l) {
          for (var d = []; o; o = o.nextSibling) o.nodeType === 1 && o !== l && d.push(o);
          return d;
        },
        B = u.expr.match.needsContext;
      function F(o, l) {
        return o.nodeName && o.nodeName.toLowerCase() === l.toLowerCase();
      }
      var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function j(o, l, d) {
        return C(l)
          ? u.grep(o, function (g, b) {
              return !!l.call(g, b, g) !== d;
            })
          : l.nodeType
          ? u.grep(o, function (g) {
              return (g === l) !== d;
            })
          : typeof l != 'string'
          ? u.grep(o, function (g) {
              return f.call(l, g) > -1 !== d;
            })
          : u.filter(l, o, d);
      }
      (u.filter = function (o, l, d) {
        var g = l[0];
        return (
          d && (o = ':not(' + o + ')'),
          l.length === 1 && g.nodeType === 1
            ? u.find.matchesSelector(g, o)
              ? [g]
              : []
            : u.find.matches(
                o,
                u.grep(l, function (b) {
                  return b.nodeType === 1;
                }),
              )
        );
      }),
        u.fn.extend({
          find: function (o) {
            var l,
              d,
              g = this.length,
              b = this;
            if (typeof o != 'string')
              return this.pushStack(
                u(o).filter(function () {
                  for (l = 0; l < g; l++) if (u.contains(b[l], this)) return !0;
                }),
              );
            for (d = this.pushStack([]), l = 0; l < g; l++) u.find(o, b[l], d);
            return g > 1 ? u.uniqueSort(d) : d;
          },
          filter: function (o) {
            return this.pushStack(j(this, o || [], !1));
          },
          not: function (o) {
            return this.pushStack(j(this, o || [], !0));
          },
          is: function (o) {
            return !!j(this, typeof o == 'string' && B.test(o) ? u(o) : o || [], !1).length;
          },
        });
      var V,
        U = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        X = (u.fn.init = function (o, l, d) {
          var g, b;
          if (!o) return this;
          if (((d = d || V), typeof o == 'string'))
            if (
              (o[0] === '<' && o[o.length - 1] === '>' && o.length >= 3 ? (g = [null, o, null]) : (g = U.exec(o)),
              g && (g[1] || !l))
            )
              if (g[1]) {
                if (
                  ((l = l instanceof u ? l[0] : l),
                  u.merge(this, u.parseHTML(g[1], l && l.nodeType ? l.ownerDocument || l : E, !0)),
                  M.test(g[1]) && u.isPlainObject(l))
                )
                  for (g in l) C(this[g]) ? this[g](l[g]) : this.attr(g, l[g]);
                return this;
              } else return (b = E.getElementById(g[2])), b && ((this[0] = b), (this.length = 1)), this;
            else return !l || l.jquery ? (l || d).find(o) : this.constructor(l).find(o);
          else {
            if (o.nodeType) return (this[0] = o), (this.length = 1), this;
            if (C(o)) return d.ready !== void 0 ? d.ready(o) : o(u);
          }
          return u.makeArray(o, this);
        });
      (X.prototype = u.fn), (V = u(E));
      var Z = /^(?:parents|prev(?:Until|All))/,
        ee = { children: !0, contents: !0, next: !0, prev: !0 };
      u.fn.extend({
        has: function (o) {
          var l = u(o, this),
            d = l.length;
          return this.filter(function () {
            for (var g = 0; g < d; g++) if (u.contains(this, l[g])) return !0;
          });
        },
        closest: function (o, l) {
          var d,
            g = 0,
            b = this.length,
            x = [],
            O = typeof o != 'string' && u(o);
          if (!B.test(o)) {
            for (; g < b; g++)
              for (d = this[g]; d && d !== l; d = d.parentNode)
                if (d.nodeType < 11 && (O ? O.index(d) > -1 : d.nodeType === 1 && u.find.matchesSelector(d, o))) {
                  x.push(d);
                  break;
                }
          }
          return this.pushStack(x.length > 1 ? u.uniqueSort(x) : x);
        },
        index: function (o) {
          return o
            ? typeof o == 'string'
              ? f.call(u(o), this[0])
              : f.call(this, o.jquery ? o[0] : o)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (o, l) {
          return this.pushStack(u.uniqueSort(u.merge(this.get(), u(o, l))));
        },
        addBack: function (o) {
          return this.add(o == null ? this.prevObject : this.prevObject.filter(o));
        },
      });
      function fe(o, l) {
        for (; (o = o[l]) && o.nodeType !== 1; );
        return o;
      }
      u.each(
        {
          parent: function (o) {
            var l = o.parentNode;
            return l && l.nodeType !== 11 ? l : null;
          },
          parents: function (o) {
            return R(o, 'parentNode');
          },
          parentsUntil: function (o, l, d) {
            return R(o, 'parentNode', d);
          },
          next: function (o) {
            return fe(o, 'nextSibling');
          },
          prev: function (o) {
            return fe(o, 'previousSibling');
          },
          nextAll: function (o) {
            return R(o, 'nextSibling');
          },
          prevAll: function (o) {
            return R(o, 'previousSibling');
          },
          nextUntil: function (o, l, d) {
            return R(o, 'nextSibling', d);
          },
          prevUntil: function (o, l, d) {
            return R(o, 'previousSibling', d);
          },
          siblings: function (o) {
            return A((o.parentNode || {}).firstChild, o);
          },
          children: function (o) {
            return A(o.firstChild);
          },
          contents: function (o) {
            return o.contentDocument != null && i(o.contentDocument)
              ? o.contentDocument
              : (F(o, 'template') && (o = o.content || o), u.merge([], o.childNodes));
          },
        },
        function (o, l) {
          u.fn[o] = function (d, g) {
            var b = u.map(this, l, d);
            return (
              o.slice(-5) !== 'Until' && (g = d),
              g && typeof g == 'string' && (b = u.filter(g, b)),
              this.length > 1 && (ee[o] || u.uniqueSort(b), Z.test(o) && b.reverse()),
              this.pushStack(b)
            );
          };
        },
      );
      var de = /[^\x20\t\r\n\f]+/g;
      function ye(o) {
        var l = {};
        return (
          u.each(o.match(de) || [], function (d, g) {
            l[g] = !0;
          }),
          l
        );
      }
      u.Callbacks = function (o) {
        o = typeof o == 'string' ? ye(o) : u.extend({}, o);
        var l,
          d,
          g,
          b,
          x = [],
          O = [],
          k = -1,
          L = function () {
            for (b = b || o.once, g = l = !0; O.length; k = -1)
              for (d = O.shift(); ++k < x.length; )
                x[k].apply(d[0], d[1]) === !1 && o.stopOnFalse && ((k = x.length), (d = !1));
            o.memory || (d = !1), (l = !1), b && (d ? (x = []) : (x = ''));
          },
          K = {
            add: function () {
              return (
                x &&
                  (d && !l && ((k = x.length - 1), O.push(d)),
                  (function Q(ce) {
                    u.each(ce, function (Y, te) {
                      C(te) ? (!o.unique || !K.has(te)) && x.push(te) : te && te.length && D(te) !== 'string' && Q(te);
                    });
                  })(arguments),
                  d && !l && L()),
                this
              );
            },
            remove: function () {
              return (
                u.each(arguments, function (Q, ce) {
                  for (var Y; (Y = u.inArray(ce, x, Y)) > -1; ) x.splice(Y, 1), Y <= k && k--;
                }),
                this
              );
            },
            has: function (Q) {
              return Q ? u.inArray(Q, x) > -1 : x.length > 0;
            },
            empty: function () {
              return x && (x = []), this;
            },
            disable: function () {
              return (b = O = []), (x = d = ''), this;
            },
            disabled: function () {
              return !x;
            },
            lock: function () {
              return (b = O = []), !d && !l && (x = d = ''), this;
            },
            locked: function () {
              return !!b;
            },
            fireWith: function (Q, ce) {
              return b || ((ce = ce || []), (ce = [Q, ce.slice ? ce.slice() : ce]), O.push(ce), l || L()), this;
            },
            fire: function () {
              return K.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!g;
            },
          };
        return K;
      };
      function J(o) {
        return o;
      }
      function be(o) {
        throw o;
      }
      function Se(o, l, d, g) {
        var b;
        try {
          o && C((b = o.promise))
            ? b.call(o).done(l).fail(d)
            : o && C((b = o.then))
            ? b.call(o, l, d)
            : l.apply(void 0, [o].slice(g));
        } catch (x) {
          d.apply(void 0, [x]);
        }
      }
      u.extend({
        Deferred: function (o) {
          var l = [
              ['notify', 'progress', u.Callbacks('memory'), u.Callbacks('memory'), 2],
              ['resolve', 'done', u.Callbacks('once memory'), u.Callbacks('once memory'), 0, 'resolved'],
              ['reject', 'fail', u.Callbacks('once memory'), u.Callbacks('once memory'), 1, 'rejected'],
            ],
            d = 'pending',
            g = {
              state: function () {
                return d;
              },
              always: function () {
                return b.done(arguments).fail(arguments), this;
              },
              catch: function (x) {
                return g.then(null, x);
              },
              pipe: function () {
                var x = arguments;
                return u
                  .Deferred(function (O) {
                    u.each(l, function (k, L) {
                      var K = C(x[L[4]]) && x[L[4]];
                      b[L[1]](function () {
                        var Q = K && K.apply(this, arguments);
                        Q && C(Q.promise)
                          ? Q.promise().progress(O.notify).done(O.resolve).fail(O.reject)
                          : O[L[0] + 'With'](this, K ? [Q] : arguments);
                      });
                    }),
                      (x = null);
                  })
                  .promise();
              },
              then: function (x, O, k) {
                var L = 0;
                function K(Q, ce, Y, te) {
                  return function () {
                    var qe = this,
                      ct = arguments,
                      Ue = function () {
                        var pn, Xn;
                        if (!(Q < L)) {
                          if (((pn = Y.apply(qe, ct)), pn === ce.promise()))
                            throw new TypeError('Thenable self-resolution');
                          (Xn = pn && (typeof pn == 'object' || typeof pn == 'function') && pn.then),
                            C(Xn)
                              ? te
                                ? Xn.call(pn, K(L, ce, J, te), K(L, ce, be, te))
                                : (L++, Xn.call(pn, K(L, ce, J, te), K(L, ce, be, te), K(L, ce, J, ce.notifyWith)))
                              : (Y !== J && ((qe = void 0), (ct = [pn])), (te || ce.resolveWith)(qe, ct));
                        }
                      },
                      yn = te
                        ? Ue
                        : function () {
                            try {
                              Ue();
                            } catch (pn) {
                              u.Deferred.exceptionHook && u.Deferred.exceptionHook(pn, yn.stackTrace),
                                Q + 1 >= L && (Y !== be && ((qe = void 0), (ct = [pn])), ce.rejectWith(qe, ct));
                            }
                          };
                    Q
                      ? yn()
                      : (u.Deferred.getStackHook && (yn.stackTrace = u.Deferred.getStackHook()), t.setTimeout(yn));
                  };
                }
                return u
                  .Deferred(function (Q) {
                    l[0][3].add(K(0, Q, C(k) ? k : J, Q.notifyWith)),
                      l[1][3].add(K(0, Q, C(x) ? x : J)),
                      l[2][3].add(K(0, Q, C(O) ? O : be));
                  })
                  .promise();
              },
              promise: function (x) {
                return x != null ? u.extend(x, g) : g;
              },
            },
            b = {};
          return (
            u.each(l, function (x, O) {
              var k = O[2],
                L = O[5];
              (g[O[1]] = k.add),
                L &&
                  k.add(
                    function () {
                      d = L;
                    },
                    l[3 - x][2].disable,
                    l[3 - x][3].disable,
                    l[0][2].lock,
                    l[0][3].lock,
                  ),
                k.add(O[3].fire),
                (b[O[0]] = function () {
                  return b[O[0] + 'With'](this === b ? void 0 : this, arguments), this;
                }),
                (b[O[0] + 'With'] = k.fireWith);
            }),
            g.promise(b),
            o && o.call(b, b),
            b
          );
        },
        when: function (o) {
          var l = arguments.length,
            d = l,
            g = Array(d),
            b = a.call(arguments),
            x = u.Deferred(),
            O = function (k) {
              return function (L) {
                (g[k] = this), (b[k] = arguments.length > 1 ? a.call(arguments) : L), --l || x.resolveWith(g, b);
              };
            };
          if (l <= 1 && (Se(o, x.done(O(d)).resolve, x.reject, !l), x.state() === 'pending' || C(b[d] && b[d].then)))
            return x.then();
          for (; d--; ) Se(b[d], O(d), x.reject);
          return x.promise();
        },
      });
      var me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (u.Deferred.exceptionHook = function (o, l) {
        t.console &&
          t.console.warn &&
          o &&
          me.test(o.name) &&
          t.console.warn('jQuery.Deferred exception: ' + o.message, o.stack, l);
      }),
        (u.readyException = function (o) {
          t.setTimeout(function () {
            throw o;
          });
        });
      var pe = u.Deferred();
      (u.fn.ready = function (o) {
        return (
          pe.then(o).catch(function (l) {
            u.readyException(l);
          }),
          this
        );
      }),
        u.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (o) {
            (o === !0 ? --u.readyWait : u.isReady) ||
              ((u.isReady = !0), !(o !== !0 && --u.readyWait > 0) && pe.resolveWith(E, [u]));
          },
        }),
        (u.ready.then = pe.then);
      function Oe() {
        E.removeEventListener('DOMContentLoaded', Oe), t.removeEventListener('load', Oe), u.ready();
      }
      E.readyState === 'complete' || (E.readyState !== 'loading' && !E.documentElement.doScroll)
        ? t.setTimeout(u.ready)
        : (E.addEventListener('DOMContentLoaded', Oe), t.addEventListener('load', Oe));
      var Ee = function (o, l, d, g, b, x, O) {
          var k = 0,
            L = o.length,
            K = d == null;
          if (D(d) === 'object') {
            b = !0;
            for (k in d) Ee(o, l, k, d[k], !0, x, O);
          } else if (
            g !== void 0 &&
            ((b = !0),
            C(g) || (O = !0),
            K &&
              (O
                ? (l.call(o, g), (l = null))
                : ((K = l),
                  (l = function (Q, ce, Y) {
                    return K.call(u(Q), Y);
                  }))),
            l)
          )
            for (; k < L; k++) l(o[k], d, O ? g : g.call(o[k], k, l(o[k], d)));
          return b ? o : K ? l.call(o) : L ? l(o[0], d) : x;
        },
        Ge = /^-ms-/,
        He = /-([a-z])/g;
      function Me(o, l) {
        return l.toUpperCase();
      }
      function oe(o) {
        return o.replace(Ge, 'ms-').replace(He, Me);
      }
      var Ne = function (o) {
        return o.nodeType === 1 || o.nodeType === 9 || !+o.nodeType;
      };
      function Ae() {
        this.expando = u.expando + Ae.uid++;
      }
      (Ae.uid = 1),
        (Ae.prototype = {
          cache: function (o) {
            var l = o[this.expando];
            return (
              l ||
                ((l = {}),
                Ne(o) &&
                  (o.nodeType
                    ? (o[this.expando] = l)
                    : Object.defineProperty(o, this.expando, { value: l, configurable: !0 }))),
              l
            );
          },
          set: function (o, l, d) {
            var g,
              b = this.cache(o);
            if (typeof l == 'string') b[oe(l)] = d;
            else for (g in l) b[oe(g)] = l[g];
            return b;
          },
          get: function (o, l) {
            return l === void 0 ? this.cache(o) : o[this.expando] && o[this.expando][oe(l)];
          },
          access: function (o, l, d) {
            return l === void 0 || (l && typeof l == 'string' && d === void 0)
              ? this.get(o, l)
              : (this.set(o, l, d), d !== void 0 ? d : l);
          },
          remove: function (o, l) {
            var d,
              g = o[this.expando];
            if (g !== void 0) {
              if (l !== void 0)
                for (
                  Array.isArray(l) ? (l = l.map(oe)) : ((l = oe(l)), (l = (l in g) ? [l] : l.match(de) || [])),
                    d = l.length;
                  d--;

                )
                  delete g[l[d]];
              (l === void 0 || u.isEmptyObject(g)) &&
                (o.nodeType ? (o[this.expando] = void 0) : delete o[this.expando]);
            }
          },
          hasData: function (o) {
            var l = o[this.expando];
            return l !== void 0 && !u.isEmptyObject(l);
          },
        });
      var re = new Ae(),
        ae = new Ae(),
        se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        De = /[A-Z]/g;
      function Xe(o) {
        return o === 'true'
          ? !0
          : o === 'false'
          ? !1
          : o === 'null'
          ? null
          : o === +o + ''
          ? +o
          : se.test(o)
          ? JSON.parse(o)
          : o;
      }
      function St(o, l, d) {
        var g;
        if (d === void 0 && o.nodeType === 1)
          if (((g = 'data-' + l.replace(De, '-$&').toLowerCase()), (d = o.getAttribute(g)), typeof d == 'string')) {
            try {
              d = Xe(d);
            } catch {}
            ae.set(o, l, d);
          } else d = void 0;
        return d;
      }
      u.extend({
        hasData: function (o) {
          return ae.hasData(o) || re.hasData(o);
        },
        data: function (o, l, d) {
          return ae.access(o, l, d);
        },
        removeData: function (o, l) {
          ae.remove(o, l);
        },
        _data: function (o, l, d) {
          return re.access(o, l, d);
        },
        _removeData: function (o, l) {
          re.remove(o, l);
        },
      }),
        u.fn.extend({
          data: function (o, l) {
            var d,
              g,
              b,
              x = this[0],
              O = x && x.attributes;
            if (o === void 0) {
              if (this.length && ((b = ae.get(x)), x.nodeType === 1 && !re.get(x, 'hasDataAttrs'))) {
                for (d = O.length; d--; )
                  O[d] && ((g = O[d].name), g.indexOf('data-') === 0 && ((g = oe(g.slice(5))), St(x, g, b[g])));
                re.set(x, 'hasDataAttrs', !0);
              }
              return b;
            }
            return typeof o == 'object'
              ? this.each(function () {
                  ae.set(this, o);
                })
              : Ee(
                  this,
                  function (k) {
                    var L;
                    if (x && k === void 0)
                      return (L = ae.get(x, o)), L !== void 0 || ((L = St(x, o)), L !== void 0) ? L : void 0;
                    this.each(function () {
                      ae.set(this, o, k);
                    });
                  },
                  null,
                  l,
                  arguments.length > 1,
                  null,
                  !0,
                );
          },
          removeData: function (o) {
            return this.each(function () {
              ae.remove(this, o);
            });
          },
        }),
        u.extend({
          queue: function (o, l, d) {
            var g;
            if (o)
              return (
                (l = (l || 'fx') + 'queue'),
                (g = re.get(o, l)),
                d && (!g || Array.isArray(d) ? (g = re.access(o, l, u.makeArray(d))) : g.push(d)),
                g || []
              );
          },
          dequeue: function (o, l) {
            l = l || 'fx';
            var d = u.queue(o, l),
              g = d.length,
              b = d.shift(),
              x = u._queueHooks(o, l),
              O = function () {
                u.dequeue(o, l);
              };
            b === 'inprogress' && ((b = d.shift()), g--),
              b && (l === 'fx' && d.unshift('inprogress'), delete x.stop, b.call(o, O, x)),
              !g && x && x.empty.fire();
          },
          _queueHooks: function (o, l) {
            var d = l + 'queueHooks';
            return (
              re.get(o, d) ||
              re.access(o, d, {
                empty: u.Callbacks('once memory').add(function () {
                  re.remove(o, [l + 'queue', d]);
                }),
              })
            );
          },
        }),
        u.fn.extend({
          queue: function (o, l) {
            var d = 2;
            return (
              typeof o != 'string' && ((l = o), (o = 'fx'), d--),
              arguments.length < d
                ? u.queue(this[0], o)
                : l === void 0
                ? this
                : this.each(function () {
                    var g = u.queue(this, o, l);
                    u._queueHooks(this, o), o === 'fx' && g[0] !== 'inprogress' && u.dequeue(this, o);
                  })
            );
          },
          dequeue: function (o) {
            return this.each(function () {
              u.dequeue(this, o);
            });
          },
          clearQueue: function (o) {
            return this.queue(o || 'fx', []);
          },
          promise: function (o, l) {
            var d,
              g = 1,
              b = u.Deferred(),
              x = this,
              O = this.length,
              k = function () {
                --g || b.resolveWith(x, [x]);
              };
            for (typeof o != 'string' && ((l = o), (o = void 0)), o = o || 'fx'; O--; )
              (d = re.get(x[O], o + 'queueHooks')), d && d.empty && (g++, d.empty.add(k));
            return k(), b.promise(l);
          },
        });
      var Ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wt = new RegExp('^(?:([+-])=|)(' + Ot + ')([a-z%]*)$', 'i'),
        ht = ['Top', 'Right', 'Bottom', 'Left'],
        vt = E.documentElement,
        dt = function (o) {
          return u.contains(o.ownerDocument, o);
        },
        Gt = { composed: !0 };
      vt.getRootNode &&
        (dt = function (o) {
          return u.contains(o.ownerDocument, o) || o.getRootNode(Gt) === o.ownerDocument;
        });
      var _t = function (o, l) {
        return (
          (o = l || o),
          o.style.display === 'none' || (o.style.display === '' && dt(o) && u.css(o, 'display') === 'none')
        );
      };
      function it(o, l, d, g) {
        var b,
          x,
          O = 20,
          k = g
            ? function () {
                return g.cur();
              }
            : function () {
                return u.css(o, l, '');
              },
          L = k(),
          K = (d && d[3]) || (u.cssNumber[l] ? '' : 'px'),
          Q = o.nodeType && (u.cssNumber[l] || (K !== 'px' && +L)) && wt.exec(u.css(o, l));
        if (Q && Q[3] !== K) {
          for (L = L / 2, K = K || Q[3], Q = +L || 1; O--; )
            u.style(o, l, Q + K), (1 - x) * (1 - (x = k() / L || 0.5)) <= 0 && (O = 0), (Q = Q / x);
          (Q = Q * 2), u.style(o, l, Q + K), (d = d || []);
        }
        return (
          d &&
            ((Q = +Q || +L || 0),
            (b = d[1] ? Q + (d[1] + 1) * d[2] : +d[2]),
            g && ((g.unit = K), (g.start = Q), (g.end = b))),
          b
        );
      }
      var tt = {};
      function Kt(o) {
        var l,
          d = o.ownerDocument,
          g = o.nodeName,
          b = tt[g];
        return (
          b ||
          ((l = d.body.appendChild(d.createElement(g))),
          (b = u.css(l, 'display')),
          l.parentNode.removeChild(l),
          b === 'none' && (b = 'block'),
          (tt[g] = b),
          b)
        );
      }
      function jt(o, l) {
        for (var d, g, b = [], x = 0, O = o.length; x < O; x++)
          (g = o[x]),
            g.style &&
              ((d = g.style.display),
              l
                ? (d === 'none' && ((b[x] = re.get(g, 'display') || null), b[x] || (g.style.display = '')),
                  g.style.display === '' && _t(g) && (b[x] = Kt(g)))
                : d !== 'none' && ((b[x] = 'none'), re.set(g, 'display', d)));
        for (x = 0; x < O; x++) b[x] != null && (o[x].style.display = b[x]);
        return o;
      }
      u.fn.extend({
        show: function () {
          return jt(this, !0);
        },
        hide: function () {
          return jt(this);
        },
        toggle: function (o) {
          return typeof o == 'boolean'
            ? o
              ? this.show()
              : this.hide()
            : this.each(function () {
                _t(this) ? u(this).show() : u(this).hide();
              });
        },
      });
      var Le = /^(?:checkbox|radio)$/i,
        nt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        It = /^$|^module$|\/(?:java|ecma)script/i;
      (function () {
        var o = E.createDocumentFragment(),
          l = o.appendChild(E.createElement('div')),
          d = E.createElement('input');
        d.setAttribute('type', 'radio'),
          d.setAttribute('checked', 'checked'),
          d.setAttribute('name', 't'),
          l.appendChild(d),
          (S.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (l.innerHTML = '<textarea>x</textarea>'),
          (S.noCloneChecked = !!l.cloneNode(!0).lastChild.defaultValue),
          (l.innerHTML = '<option></option>'),
          (S.option = !!l.lastChild);
      })();
      var pt = {
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', ''],
      };
      (pt.tbody = pt.tfoot = pt.colgroup = pt.caption = pt.thead),
        (pt.th = pt.td),
        S.option || (pt.optgroup = pt.option = [1, "<select multiple='multiple'>", '</select>']);
      function ot(o, l) {
        var d;
        return (
          typeof o.getElementsByTagName < 'u'
            ? (d = o.getElementsByTagName(l || '*'))
            : typeof o.querySelectorAll < 'u'
            ? (d = o.querySelectorAll(l || '*'))
            : (d = []),
          l === void 0 || (l && F(o, l)) ? u.merge([o], d) : d
        );
      }
      function zt(o, l) {
        for (var d = 0, g = o.length; d < g; d++) re.set(o[d], 'globalEval', !l || re.get(l[d], 'globalEval'));
      }
      var Wt = /<|&#?\w+;/;
      function _e(o, l, d, g, b) {
        for (var x, O, k, L, K, Q, ce = l.createDocumentFragment(), Y = [], te = 0, qe = o.length; te < qe; te++)
          if (((x = o[te]), x || x === 0))
            if (D(x) === 'object') u.merge(Y, x.nodeType ? [x] : x);
            else if (!Wt.test(x)) Y.push(l.createTextNode(x));
            else {
              for (
                O = O || ce.appendChild(l.createElement('div')),
                  k = (nt.exec(x) || ['', ''])[1].toLowerCase(),
                  L = pt[k] || pt._default,
                  O.innerHTML = L[1] + u.htmlPrefilter(x) + L[2],
                  Q = L[0];
                Q--;

              )
                O = O.lastChild;
              u.merge(Y, O.childNodes), (O = ce.firstChild), (O.textContent = '');
            }
        for (ce.textContent = '', te = 0; (x = Y[te++]); ) {
          if (g && u.inArray(x, g) > -1) {
            b && b.push(x);
            continue;
          }
          if (((K = dt(x)), (O = ot(ce.appendChild(x), 'script')), K && zt(O), d))
            for (Q = 0; (x = O[Q++]); ) It.test(x.type || '') && d.push(x);
        }
        return ce;
      }
      var je = /^([^.]*)(?:\.(.+)|)/;
      function gt() {
        return !0;
      }
      function st() {
        return !1;
      }
      function Ct(o, l) {
        return (o === dn()) == (l === 'focus');
      }
      function dn() {
        try {
          return E.activeElement;
        } catch {}
      }
      function Ut(o, l, d, g, b, x) {
        var O, k;
        if (typeof l == 'object') {
          typeof d != 'string' && ((g = g || d), (d = void 0));
          for (k in l) Ut(o, k, d, g, l[k], x);
          return o;
        }
        if (
          (g == null && b == null
            ? ((b = d), (g = d = void 0))
            : b == null && (typeof d == 'string' ? ((b = g), (g = void 0)) : ((b = g), (g = d), (d = void 0))),
          b === !1)
        )
          b = st;
        else if (!b) return o;
        return (
          x === 1 &&
            ((O = b),
            (b = function (L) {
              return u().off(L), O.apply(this, arguments);
            }),
            (b.guid = O.guid || (O.guid = u.guid++))),
          o.each(function () {
            u.event.add(this, l, b, g, d);
          })
        );
      }
      u.event = {
        global: {},
        add: function (o, l, d, g, b) {
          var x,
            O,
            k,
            L,
            K,
            Q,
            ce,
            Y,
            te,
            qe,
            ct,
            Ue = re.get(o);
          if (Ne(o))
            for (
              d.handler && ((x = d), (d = x.handler), (b = x.selector)),
                b && u.find.matchesSelector(vt, b),
                d.guid || (d.guid = u.guid++),
                (L = Ue.events) || (L = Ue.events = Object.create(null)),
                (O = Ue.handle) ||
                  (O = Ue.handle =
                    function (yn) {
                      return typeof u < 'u' && u.event.triggered !== yn.type
                        ? u.event.dispatch.apply(o, arguments)
                        : void 0;
                    }),
                l = (l || '').match(de) || [''],
                K = l.length;
              K--;

            )
              (k = je.exec(l[K]) || []),
                (te = ct = k[1]),
                (qe = (k[2] || '').split('.').sort()),
                te &&
                  ((ce = u.event.special[te] || {}),
                  (te = (b ? ce.delegateType : ce.bindType) || te),
                  (ce = u.event.special[te] || {}),
                  (Q = u.extend(
                    {
                      type: te,
                      origType: ct,
                      data: g,
                      handler: d,
                      guid: d.guid,
                      selector: b,
                      needsContext: b && u.expr.match.needsContext.test(b),
                      namespace: qe.join('.'),
                    },
                    x,
                  )),
                  (Y = L[te]) ||
                    ((Y = L[te] = []),
                    (Y.delegateCount = 0),
                    (!ce.setup || ce.setup.call(o, g, qe, O) === !1) &&
                      o.addEventListener &&
                      o.addEventListener(te, O)),
                  ce.add && (ce.add.call(o, Q), Q.handler.guid || (Q.handler.guid = d.guid)),
                  b ? Y.splice(Y.delegateCount++, 0, Q) : Y.push(Q),
                  (u.event.global[te] = !0));
        },
        remove: function (o, l, d, g, b) {
          var x,
            O,
            k,
            L,
            K,
            Q,
            ce,
            Y,
            te,
            qe,
            ct,
            Ue = re.hasData(o) && re.get(o);
          if (!(!Ue || !(L = Ue.events))) {
            for (l = (l || '').match(de) || [''], K = l.length; K--; ) {
              if (((k = je.exec(l[K]) || []), (te = ct = k[1]), (qe = (k[2] || '').split('.').sort()), !te)) {
                for (te in L) u.event.remove(o, te + l[K], d, g, !0);
                continue;
              }
              for (
                ce = u.event.special[te] || {},
                  te = (g ? ce.delegateType : ce.bindType) || te,
                  Y = L[te] || [],
                  k = k[2] && new RegExp('(^|\\.)' + qe.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                  O = x = Y.length;
                x--;

              )
                (Q = Y[x]),
                  (b || ct === Q.origType) &&
                    (!d || d.guid === Q.guid) &&
                    (!k || k.test(Q.namespace)) &&
                    (!g || g === Q.selector || (g === '**' && Q.selector)) &&
                    (Y.splice(x, 1), Q.selector && Y.delegateCount--, ce.remove && ce.remove.call(o, Q));
              O &&
                !Y.length &&
                ((!ce.teardown || ce.teardown.call(o, qe, Ue.handle) === !1) && u.removeEvent(o, te, Ue.handle),
                delete L[te]);
            }
            u.isEmptyObject(L) && re.remove(o, 'handle events');
          }
        },
        dispatch: function (o) {
          var l,
            d,
            g,
            b,
            x,
            O,
            k = new Array(arguments.length),
            L = u.event.fix(o),
            K = (re.get(this, 'events') || Object.create(null))[L.type] || [],
            Q = u.event.special[L.type] || {};
          for (k[0] = L, l = 1; l < arguments.length; l++) k[l] = arguments[l];
          if (((L.delegateTarget = this), !(Q.preDispatch && Q.preDispatch.call(this, L) === !1))) {
            for (O = u.event.handlers.call(this, L, K), l = 0; (b = O[l++]) && !L.isPropagationStopped(); )
              for (L.currentTarget = b.elem, d = 0; (x = b.handlers[d++]) && !L.isImmediatePropagationStopped(); )
                (!L.rnamespace || x.namespace === !1 || L.rnamespace.test(x.namespace)) &&
                  ((L.handleObj = x),
                  (L.data = x.data),
                  (g = ((u.event.special[x.origType] || {}).handle || x.handler).apply(b.elem, k)),
                  g !== void 0 && (L.result = g) === !1 && (L.preventDefault(), L.stopPropagation()));
            return Q.postDispatch && Q.postDispatch.call(this, L), L.result;
          }
        },
        handlers: function (o, l) {
          var d,
            g,
            b,
            x,
            O,
            k = [],
            L = l.delegateCount,
            K = o.target;
          if (L && K.nodeType && !(o.type === 'click' && o.button >= 1)) {
            for (; K !== this; K = K.parentNode || this)
              if (K.nodeType === 1 && !(o.type === 'click' && K.disabled === !0)) {
                for (x = [], O = {}, d = 0; d < L; d++)
                  (g = l[d]),
                    (b = g.selector + ' '),
                    O[b] === void 0 &&
                      (O[b] = g.needsContext ? u(b, this).index(K) > -1 : u.find(b, this, null, [K]).length),
                    O[b] && x.push(g);
                x.length && k.push({ elem: K, handlers: x });
              }
          }
          return (K = this), L < l.length && k.push({ elem: K, handlers: l.slice(L) }), k;
        },
        addProp: function (o, l) {
          Object.defineProperty(u.Event.prototype, o, {
            enumerable: !0,
            configurable: !0,
            get: C(l)
              ? function () {
                  if (this.originalEvent) return l(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[o];
                },
            set: function (d) {
              Object.defineProperty(this, o, { enumerable: !0, configurable: !0, writable: !0, value: d });
            },
          });
        },
        fix: function (o) {
          return o[u.expando] ? o : new u.Event(o);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (o) {
              var l = this || o;
              return Le.test(l.type) && l.click && F(l, 'input') && he(l, 'click', gt), !1;
            },
            trigger: function (o) {
              var l = this || o;
              return Le.test(l.type) && l.click && F(l, 'input') && he(l, 'click'), !0;
            },
            _default: function (o) {
              var l = o.target;
              return (Le.test(l.type) && l.click && F(l, 'input') && re.get(l, 'click')) || F(l, 'a');
            },
          },
          beforeunload: {
            postDispatch: function (o) {
              o.result !== void 0 && o.originalEvent && (o.originalEvent.returnValue = o.result);
            },
          },
        },
      };
      function he(o, l, d) {
        if (!d) {
          re.get(o, l) === void 0 && u.event.add(o, l, gt);
          return;
        }
        re.set(o, l, !1),
          u.event.add(o, l, {
            namespace: !1,
            handler: function (g) {
              var b,
                x,
                O = re.get(this, l);
              if (g.isTrigger & 1 && this[l]) {
                if (O.length) (u.event.special[l] || {}).delegateType && g.stopPropagation();
                else if (
                  ((O = a.call(arguments)),
                  re.set(this, l, O),
                  (b = d(this, l)),
                  this[l](),
                  (x = re.get(this, l)),
                  O !== x || b ? re.set(this, l, !1) : (x = {}),
                  O !== x)
                )
                  return g.stopImmediatePropagation(), g.preventDefault(), x && x.value;
              } else
                O.length &&
                  (re.set(this, l, { value: u.event.trigger(u.extend(O[0], u.Event.prototype), O.slice(1), this) }),
                  g.stopImmediatePropagation());
            },
          });
      }
      (u.removeEvent = function (o, l, d) {
        o.removeEventListener && o.removeEventListener(l, d);
      }),
        (u.Event = function (o, l) {
          if (!(this instanceof u.Event)) return new u.Event(o, l);
          o && o.type
            ? ((this.originalEvent = o),
              (this.type = o.type),
              (this.isDefaultPrevented =
                o.defaultPrevented || (o.defaultPrevented === void 0 && o.returnValue === !1) ? gt : st),
              (this.target = o.target && o.target.nodeType === 3 ? o.target.parentNode : o.target),
              (this.currentTarget = o.currentTarget),
              (this.relatedTarget = o.relatedTarget))
            : (this.type = o),
            l && u.extend(this, l),
            (this.timeStamp = (o && o.timeStamp) || Date.now()),
            (this[u.expando] = !0);
        }),
        (u.Event.prototype = {
          constructor: u.Event,
          isDefaultPrevented: st,
          isPropagationStopped: st,
          isImmediatePropagationStopped: st,
          isSimulated: !1,
          preventDefault: function () {
            var o = this.originalEvent;
            (this.isDefaultPrevented = gt), o && !this.isSimulated && o.preventDefault();
          },
          stopPropagation: function () {
            var o = this.originalEvent;
            (this.isPropagationStopped = gt), o && !this.isSimulated && o.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var o = this.originalEvent;
            (this.isImmediatePropagationStopped = gt),
              o && !this.isSimulated && o.stopImmediatePropagation(),
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
        u.each({ focus: 'focusin', blur: 'focusout' }, function (o, l) {
          u.event.special[o] = {
            setup: function () {
              return he(this, o, Ct), !1;
            },
            trigger: function () {
              return he(this, o), !0;
            },
            _default: function (d) {
              return re.get(d.target, o);
            },
            delegateType: l,
          };
        }),
        u.each(
          { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
          function (o, l) {
            u.event.special[o] = {
              delegateType: l,
              bindType: l,
              handle: function (d) {
                var g,
                  b = this,
                  x = d.relatedTarget,
                  O = d.handleObj;
                return (
                  (!x || (x !== b && !u.contains(b, x))) &&
                    ((d.type = O.origType), (g = O.handler.apply(this, arguments)), (d.type = l)),
                  g
                );
              },
            };
          },
        ),
        u.fn.extend({
          on: function (o, l, d, g) {
            return Ut(this, o, l, d, g);
          },
          one: function (o, l, d, g) {
            return Ut(this, o, l, d, g, 1);
          },
          off: function (o, l, d) {
            var g, b;
            if (o && o.preventDefault && o.handleObj)
              return (
                (g = o.handleObj),
                u(o.delegateTarget).off(
                  g.namespace ? g.origType + '.' + g.namespace : g.origType,
                  g.selector,
                  g.handler,
                ),
                this
              );
            if (typeof o == 'object') {
              for (b in o) this.off(b, l, o[b]);
              return this;
            }
            return (
              (l === !1 || typeof l == 'function') && ((d = l), (l = void 0)),
              d === !1 && (d = st),
              this.each(function () {
                u.event.remove(this, o, d, l);
              })
            );
          },
        });
      var xe = /<script|<style|<link/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        We = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function ft(o, l) {
        return (F(o, 'table') && F(l.nodeType !== 11 ? l : l.firstChild, 'tr') && u(o).children('tbody')[0]) || o;
      }
      function Tt(o) {
        return (o.type = (o.getAttribute('type') !== null) + '/' + o.type), o;
      }
      function $n(o) {
        return (o.type || '').slice(0, 5) === 'true/' ? (o.type = o.type.slice(5)) : o.removeAttribute('type'), o;
      }
      function xn(o, l) {
        var d, g, b, x, O, k, L;
        if (l.nodeType === 1) {
          if (re.hasData(o) && ((x = re.get(o)), (L = x.events), L)) {
            re.remove(l, 'handle events');
            for (b in L) for (d = 0, g = L[b].length; d < g; d++) u.event.add(l, b, L[b][d]);
          }
          ae.hasData(o) && ((O = ae.access(o)), (k = u.extend({}, O)), ae.set(l, k));
        }
      }
      function Mn(o, l) {
        var d = l.nodeName.toLowerCase();
        d === 'input' && Le.test(o.type)
          ? (l.checked = o.checked)
          : (d === 'input' || d === 'textarea') && (l.defaultValue = o.defaultValue);
      }
      function Dt(o, l, d, g) {
        l = s(l);
        var b,
          x,
          O,
          k,
          L,
          K,
          Q = 0,
          ce = o.length,
          Y = ce - 1,
          te = l[0],
          qe = C(te);
        if (qe || (ce > 1 && typeof te == 'string' && !S.checkClone && Ie.test(te)))
          return o.each(function (ct) {
            var Ue = o.eq(ct);
            qe && (l[0] = te.call(this, ct, Ue.html())), Dt(Ue, l, d, g);
          });
        if (
          ce &&
          ((b = _e(l, o[0].ownerDocument, !1, o, g)), (x = b.firstChild), b.childNodes.length === 1 && (b = x), x || g)
        ) {
          for (O = u.map(ot(b, 'script'), Tt), k = O.length; Q < ce; Q++)
            (L = b), Q !== Y && ((L = u.clone(L, !0, !0)), k && u.merge(O, ot(L, 'script'))), d.call(o[Q], L, Q);
          if (k)
            for (K = O[O.length - 1].ownerDocument, u.map(O, $n), Q = 0; Q < k; Q++)
              (L = O[Q]),
                It.test(L.type || '') &&
                  !re.access(L, 'globalEval') &&
                  u.contains(K, L) &&
                  (L.src && (L.type || '').toLowerCase() !== 'module'
                    ? u._evalUrl && !L.noModule && u._evalUrl(L.src, { nonce: L.nonce || L.getAttribute('nonce') }, K)
                    : N(L.textContent.replace(We, ''), L, K));
        }
        return o;
      }
      function wn(o, l, d) {
        for (var g, b = l ? u.filter(l, o) : o, x = 0; (g = b[x]) != null; x++)
          !d && g.nodeType === 1 && u.cleanData(ot(g)),
            g.parentNode && (d && dt(g) && zt(ot(g, 'script')), g.parentNode.removeChild(g));
        return o;
      }
      u.extend({
        htmlPrefilter: function (o) {
          return o;
        },
        clone: function (o, l, d) {
          var g,
            b,
            x,
            O,
            k = o.cloneNode(!0),
            L = dt(o);
          if (!S.noCloneChecked && (o.nodeType === 1 || o.nodeType === 11) && !u.isXMLDoc(o))
            for (O = ot(k), x = ot(o), g = 0, b = x.length; g < b; g++) Mn(x[g], O[g]);
          if (l)
            if (d) for (x = x || ot(o), O = O || ot(k), g = 0, b = x.length; g < b; g++) xn(x[g], O[g]);
            else xn(o, k);
          return (O = ot(k, 'script')), O.length > 0 && zt(O, !L && ot(o, 'script')), k;
        },
        cleanData: function (o) {
          for (var l, d, g, b = u.event.special, x = 0; (d = o[x]) !== void 0; x++)
            if (Ne(d)) {
              if ((l = d[re.expando])) {
                if (l.events) for (g in l.events) b[g] ? u.event.remove(d, g) : u.removeEvent(d, g, l.handle);
                d[re.expando] = void 0;
              }
              d[ae.expando] && (d[ae.expando] = void 0);
            }
        },
      }),
        u.fn.extend({
          detach: function (o) {
            return wn(this, o, !0);
          },
          remove: function (o) {
            return wn(this, o);
          },
          text: function (o) {
            return Ee(
              this,
              function (l) {
                return l === void 0
                  ? u.text(this)
                  : this.empty().each(function () {
                      (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = l);
                    });
              },
              null,
              o,
              arguments.length,
            );
          },
          append: function () {
            return Dt(this, arguments, function (o) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var l = ft(this, o);
                l.appendChild(o);
              }
            });
          },
          prepend: function () {
            return Dt(this, arguments, function (o) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var l = ft(this, o);
                l.insertBefore(o, l.firstChild);
              }
            });
          },
          before: function () {
            return Dt(this, arguments, function (o) {
              this.parentNode && this.parentNode.insertBefore(o, this);
            });
          },
          after: function () {
            return Dt(this, arguments, function (o) {
              this.parentNode && this.parentNode.insertBefore(o, this.nextSibling);
            });
          },
          empty: function () {
            for (var o, l = 0; (o = this[l]) != null; l++)
              o.nodeType === 1 && (u.cleanData(ot(o, !1)), (o.textContent = ''));
            return this;
          },
          clone: function (o, l) {
            return (
              (o = o ?? !1),
              (l = l ?? o),
              this.map(function () {
                return u.clone(this, o, l);
              })
            );
          },
          html: function (o) {
            return Ee(
              this,
              function (l) {
                var d = this[0] || {},
                  g = 0,
                  b = this.length;
                if (l === void 0 && d.nodeType === 1) return d.innerHTML;
                if (typeof l == 'string' && !xe.test(l) && !pt[(nt.exec(l) || ['', ''])[1].toLowerCase()]) {
                  l = u.htmlPrefilter(l);
                  try {
                    for (; g < b; g++)
                      (d = this[g] || {}), d.nodeType === 1 && (u.cleanData(ot(d, !1)), (d.innerHTML = l));
                    d = 0;
                  } catch {}
                }
                d && this.empty().append(l);
              },
              null,
              o,
              arguments.length,
            );
          },
          replaceWith: function () {
            var o = [];
            return Dt(
              this,
              arguments,
              function (l) {
                var d = this.parentNode;
                u.inArray(this, o) < 0 && (u.cleanData(ot(this)), d && d.replaceChild(l, this));
              },
              o,
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
          function (o, l) {
            u.fn[o] = function (d) {
              for (var g, b = [], x = u(d), O = x.length - 1, k = 0; k <= O; k++)
                (g = k === O ? this : this.clone(!0)), u(x[k])[l](g), c.apply(b, g.get());
              return this.pushStack(b);
            };
          },
        );
      var Kn = new RegExp('^(' + Ot + ')(?!px)[a-z%]+$', 'i'),
        vn = /^--/,
        pr = function (o) {
          var l = o.ownerDocument.defaultView;
          return (!l || !l.opener) && (l = t), l.getComputedStyle(o);
        },
        On = function (o, l, d) {
          var g,
            b,
            x = {};
          for (b in l) (x[b] = o.style[b]), (o.style[b] = l[b]);
          g = d.call(o);
          for (b in l) o.style[b] = x[b];
          return g;
        },
        An = new RegExp(ht.join('|'), 'i'),
        qr = '[\\x20\\t\\r\\n\\f]',
        Gr = new RegExp('^' + qr + '+|((?:^|[^\\\\])(?:\\\\.)*)' + qr + '+$', 'g');
      (function () {
        function o() {
          if (K) {
            (L.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (K.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              vt.appendChild(L).appendChild(K);
            var Q = t.getComputedStyle(K);
            (d = Q.top !== '1%'),
              (k = l(Q.marginLeft) === 12),
              (K.style.right = '60%'),
              (x = l(Q.right) === 36),
              (g = l(Q.width) === 36),
              (K.style.position = 'absolute'),
              (b = l(K.offsetWidth / 3) === 12),
              vt.removeChild(L),
              (K = null);
          }
        }
        function l(Q) {
          return Math.round(parseFloat(Q));
        }
        var d,
          g,
          b,
          x,
          O,
          k,
          L = E.createElement('div'),
          K = E.createElement('div');
        K.style &&
          ((K.style.backgroundClip = 'content-box'),
          (K.cloneNode(!0).style.backgroundClip = ''),
          (S.clearCloneStyle = K.style.backgroundClip === 'content-box'),
          u.extend(S, {
            boxSizingReliable: function () {
              return o(), g;
            },
            pixelBoxStyles: function () {
              return o(), x;
            },
            pixelPosition: function () {
              return o(), d;
            },
            reliableMarginLeft: function () {
              return o(), k;
            },
            scrollboxSize: function () {
              return o(), b;
            },
            reliableTrDimensions: function () {
              var Q, ce, Y, te;
              return (
                O == null &&
                  ((Q = E.createElement('table')),
                  (ce = E.createElement('tr')),
                  (Y = E.createElement('div')),
                  (Q.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate'),
                  (ce.style.cssText = 'border:1px solid'),
                  (ce.style.height = '1px'),
                  (Y.style.height = '9px'),
                  (Y.style.display = 'block'),
                  vt.appendChild(Q).appendChild(ce).appendChild(Y),
                  (te = t.getComputedStyle(ce)),
                  (O =
                    parseInt(te.height, 10) + parseInt(te.borderTopWidth, 10) + parseInt(te.borderBottomWidth, 10) ===
                    ce.offsetHeight),
                  vt.removeChild(Q)),
                O
              );
            },
          }));
      })();
      function or(o, l, d) {
        var g,
          b,
          x,
          O,
          k = vn.test(l),
          L = o.style;
        return (
          (d = d || pr(o)),
          d &&
            ((O = d.getPropertyValue(l) || d[l]),
            k && O && (O = O.replace(Gr, '$1') || void 0),
            O === '' && !dt(o) && (O = u.style(o, l)),
            !S.pixelBoxStyles() &&
              Kn.test(O) &&
              An.test(l) &&
              ((g = L.width),
              (b = L.minWidth),
              (x = L.maxWidth),
              (L.minWidth = L.maxWidth = L.width = O),
              (O = d.width),
              (L.width = g),
              (L.minWidth = b),
              (L.maxWidth = x))),
          O !== void 0 ? O + '' : O
        );
      }
      function Kr(o, l) {
        return {
          get: function () {
            if (o()) {
              delete this.get;
              return;
            }
            return (this.get = l).apply(this, arguments);
          },
        };
      }
      var Tn = ['Webkit', 'Moz', 'ms'],
        an = E.createElement('div').style,
        zn = {};
      function gi(o) {
        for (var l = o[0].toUpperCase() + o.slice(1), d = Tn.length; d--; ) if (((o = Tn[d] + l), o in an)) return o;
      }
      function hr(o) {
        var l = u.cssProps[o] || zn[o];
        return l || (o in an ? o : (zn[o] = gi(o) || o));
      }
      var mi = /^(none|table(?!-c[ea]).+)/,
        Xr = { position: 'absolute', visibility: 'hidden', display: 'block' },
        yr = { letterSpacing: '0', fontWeight: '400' };
      function Tr(o, l, d) {
        var g = wt.exec(l);
        return g ? Math.max(0, g[2] - (d || 0)) + (g[3] || 'px') : l;
      }
      function Pr(o, l, d, g, b, x) {
        var O = l === 'width' ? 1 : 0,
          k = 0,
          L = 0;
        if (d === (g ? 'border' : 'content')) return 0;
        for (; O < 4; O += 2)
          d === 'margin' && (L += u.css(o, d + ht[O], !0, b)),
            g
              ? (d === 'content' && (L -= u.css(o, 'padding' + ht[O], !0, b)),
                d !== 'margin' && (L -= u.css(o, 'border' + ht[O] + 'Width', !0, b)))
              : ((L += u.css(o, 'padding' + ht[O], !0, b)),
                d !== 'padding'
                  ? (L += u.css(o, 'border' + ht[O] + 'Width', !0, b))
                  : (k += u.css(o, 'border' + ht[O] + 'Width', !0, b)));
        return (
          !g &&
            x >= 0 &&
            (L += Math.max(0, Math.ceil(o['offset' + l[0].toUpperCase() + l.slice(1)] - x - L - k - 0.5)) || 0),
          L
        );
      }
      function Yr(o, l, d) {
        var g = pr(o),
          b = !S.boxSizingReliable() || d,
          x = b && u.css(o, 'boxSizing', !1, g) === 'border-box',
          O = x,
          k = or(o, l, g),
          L = 'offset' + l[0].toUpperCase() + l.slice(1);
        if (Kn.test(k)) {
          if (!d) return k;
          k = 'auto';
        }
        return (
          ((!S.boxSizingReliable() && x) ||
            (!S.reliableTrDimensions() && F(o, 'tr')) ||
            k === 'auto' ||
            (!parseFloat(k) && u.css(o, 'display', !1, g) === 'inline')) &&
            o.getClientRects().length &&
            ((x = u.css(o, 'boxSizing', !1, g) === 'border-box'), (O = L in o), O && (k = o[L])),
          (k = parseFloat(k) || 0),
          k + Pr(o, l, d || (x ? 'border' : 'content'), O, g, k) + 'px'
        );
      }
      u.extend({
        cssHooks: {
          opacity: {
            get: function (o, l) {
              if (l) {
                var d = or(o, 'opacity');
                return d === '' ? '1' : d;
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
        style: function (o, l, d, g) {
          if (!(!o || o.nodeType === 3 || o.nodeType === 8 || !o.style)) {
            var b,
              x,
              O,
              k = oe(l),
              L = vn.test(l),
              K = o.style;
            if ((L || (l = hr(k)), (O = u.cssHooks[l] || u.cssHooks[k]), d !== void 0)) {
              if (
                ((x = typeof d),
                x === 'string' && (b = wt.exec(d)) && b[1] && ((d = it(o, l, b)), (x = 'number')),
                d == null || d !== d)
              )
                return;
              x === 'number' && !L && (d += (b && b[3]) || (u.cssNumber[k] ? '' : 'px')),
                !S.clearCloneStyle && d === '' && l.indexOf('background') === 0 && (K[l] = 'inherit'),
                (!O || !('set' in O) || (d = O.set(o, d, g)) !== void 0) && (L ? K.setProperty(l, d) : (K[l] = d));
            } else return O && 'get' in O && (b = O.get(o, !1, g)) !== void 0 ? b : K[l];
          }
        },
        css: function (o, l, d, g) {
          var b,
            x,
            O,
            k = oe(l),
            L = vn.test(l);
          return (
            L || (l = hr(k)),
            (O = u.cssHooks[l] || u.cssHooks[k]),
            O && 'get' in O && (b = O.get(o, !0, d)),
            b === void 0 && (b = or(o, l, g)),
            b === 'normal' && l in yr && (b = yr[l]),
            d === '' || d ? ((x = parseFloat(b)), d === !0 || isFinite(x) ? x || 0 : b) : b
          );
        },
      }),
        u.each(['height', 'width'], function (o, l) {
          u.cssHooks[l] = {
            get: function (d, g, b) {
              if (g)
                return mi.test(u.css(d, 'display')) && (!d.getClientRects().length || !d.getBoundingClientRect().width)
                  ? On(d, Xr, function () {
                      return Yr(d, l, b);
                    })
                  : Yr(d, l, b);
            },
            set: function (d, g, b) {
              var x,
                O = pr(d),
                k = !S.scrollboxSize() && O.position === 'absolute',
                L = k || b,
                K = L && u.css(d, 'boxSizing', !1, O) === 'border-box',
                Q = b ? Pr(d, l, b, K, O) : 0;
              return (
                K &&
                  k &&
                  (Q -= Math.ceil(
                    d['offset' + l[0].toUpperCase() + l.slice(1)] - parseFloat(O[l]) - Pr(d, l, 'border', !1, O) - 0.5,
                  )),
                Q && (x = wt.exec(g)) && (x[3] || 'px') !== 'px' && ((d.style[l] = g), (g = u.css(d, l))),
                Tr(d, g, Q)
              );
            },
          };
        }),
        (u.cssHooks.marginLeft = Kr(S.reliableMarginLeft, function (o, l) {
          if (l)
            return (
              (parseFloat(or(o, 'marginLeft')) ||
                o.getBoundingClientRect().left -
                  On(o, { marginLeft: 0 }, function () {
                    return o.getBoundingClientRect().left;
                  })) + 'px'
            );
        })),
        u.each({ margin: '', padding: '', border: 'Width' }, function (o, l) {
          (u.cssHooks[o + l] = {
            expand: function (d) {
              for (var g = 0, b = {}, x = typeof d == 'string' ? d.split(' ') : [d]; g < 4; g++)
                b[o + ht[g] + l] = x[g] || x[g - 2] || x[0];
              return b;
            },
          }),
            o !== 'margin' && (u.cssHooks[o + l].set = Tr);
        }),
        u.fn.extend({
          css: function (o, l) {
            return Ee(
              this,
              function (d, g, b) {
                var x,
                  O,
                  k = {},
                  L = 0;
                if (Array.isArray(g)) {
                  for (x = pr(d), O = g.length; L < O; L++) k[g[L]] = u.css(d, g[L], !1, x);
                  return k;
                }
                return b !== void 0 ? u.style(d, g, b) : u.css(d, g);
              },
              o,
              l,
              arguments.length > 1,
            );
          },
        });
      function sn(o, l, d, g, b) {
        return new sn.prototype.init(o, l, d, g, b);
      }
      (u.Tween = sn),
        (sn.prototype = {
          constructor: sn,
          init: function (o, l, d, g, b, x) {
            (this.elem = o),
              (this.prop = d),
              (this.easing = b || u.easing._default),
              (this.options = l),
              (this.start = this.now = this.cur()),
              (this.end = g),
              (this.unit = x || (u.cssNumber[d] ? '' : 'px'));
          },
          cur: function () {
            var o = sn.propHooks[this.prop];
            return o && o.get ? o.get(this) : sn.propHooks._default.get(this);
          },
          run: function (o) {
            var l,
              d = sn.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = l = u.easing[this.easing](o, this.options.duration * o, 0, 1, this.options.duration))
                : (this.pos = l = o),
              (this.now = (this.end - this.start) * l + this.start),
              this.options.step && this.options.step.call(this.elem, this.now, this),
              d && d.set ? d.set(this) : sn.propHooks._default.set(this),
              this
            );
          },
        }),
        (sn.prototype.init.prototype = sn.prototype),
        (sn.propHooks = {
          _default: {
            get: function (o) {
              var l;
              return o.elem.nodeType !== 1 || (o.elem[o.prop] != null && o.elem.style[o.prop] == null)
                ? o.elem[o.prop]
                : ((l = u.css(o.elem, o.prop, '')), !l || l === 'auto' ? 0 : l);
            },
            set: function (o) {
              u.fx.step[o.prop]
                ? u.fx.step[o.prop](o)
                : o.elem.nodeType === 1 && (u.cssHooks[o.prop] || o.elem.style[hr(o.prop)] != null)
                ? u.style(o.elem, o.prop, o.now + o.unit)
                : (o.elem[o.prop] = o.now);
            },
          },
        }),
        (sn.propHooks.scrollTop = sn.propHooks.scrollLeft =
          {
            set: function (o) {
              o.elem.nodeType && o.elem.parentNode && (o.elem[o.prop] = o.now);
            },
          }),
        (u.easing = {
          linear: function (o) {
            return o;
          },
          swing: function (o) {
            return 0.5 - Math.cos(o * Math.PI) / 2;
          },
          _default: 'swing',
        }),
        (u.fx = sn.prototype.init),
        (u.fx.step = {});
      var gr,
        br,
        lt = /^(?:toggle|show|hide)$/,
        et = /queueHooks$/;
      function Qt() {
        br &&
          (E.hidden === !1 && t.requestAnimationFrame ? t.requestAnimationFrame(Qt) : t.setTimeout(Qt, u.fx.interval),
          u.fx.tick());
      }
      function en() {
        return (
          t.setTimeout(function () {
            gr = void 0;
          }),
          (gr = Date.now())
        );
      }
      function Pt(o, l) {
        var d,
          g = 0,
          b = { height: o };
        for (l = l ? 1 : 0; g < 4; g += 2 - l) (d = ht[g]), (b['margin' + d] = b['padding' + d] = o);
        return l && (b.opacity = b.width = o), b;
      }
      function ln(o, l, d) {
        for (var g, b = (tn.tweeners[l] || []).concat(tn.tweeners['*']), x = 0, O = b.length; x < O; x++)
          if ((g = b[x].call(d, l, o))) return g;
      }
      function Pn(o, l, d) {
        var g,
          b,
          x,
          O,
          k,
          L,
          K,
          Q,
          ce = 'width' in l || 'height' in l,
          Y = this,
          te = {},
          qe = o.style,
          ct = o.nodeType && _t(o),
          Ue = re.get(o, 'fxshow');
        d.queue ||
          ((O = u._queueHooks(o, 'fx')),
          O.unqueued == null &&
            ((O.unqueued = 0),
            (k = O.empty.fire),
            (O.empty.fire = function () {
              O.unqueued || k();
            })),
          O.unqueued++,
          Y.always(function () {
            Y.always(function () {
              O.unqueued--, u.queue(o, 'fx').length || O.empty.fire();
            });
          }));
        for (g in l)
          if (((b = l[g]), lt.test(b))) {
            if ((delete l[g], (x = x || b === 'toggle'), b === (ct ? 'hide' : 'show')))
              if (b === 'show' && Ue && Ue[g] !== void 0) ct = !0;
              else continue;
            te[g] = (Ue && Ue[g]) || u.style(o, g);
          }
        if (((L = !u.isEmptyObject(l)), !(!L && u.isEmptyObject(te)))) {
          ce &&
            o.nodeType === 1 &&
            ((d.overflow = [qe.overflow, qe.overflowX, qe.overflowY]),
            (K = Ue && Ue.display),
            K == null && (K = re.get(o, 'display')),
            (Q = u.css(o, 'display')),
            Q === 'none' &&
              (K ? (Q = K) : (jt([o], !0), (K = o.style.display || K), (Q = u.css(o, 'display')), jt([o]))),
            (Q === 'inline' || (Q === 'inline-block' && K != null)) &&
              u.css(o, 'float') === 'none' &&
              (L ||
                (Y.done(function () {
                  qe.display = K;
                }),
                K == null && ((Q = qe.display), (K = Q === 'none' ? '' : Q))),
              (qe.display = 'inline-block'))),
            d.overflow &&
              ((qe.overflow = 'hidden'),
              Y.always(function () {
                (qe.overflow = d.overflow[0]), (qe.overflowX = d.overflow[1]), (qe.overflowY = d.overflow[2]);
              })),
            (L = !1);
          for (g in te)
            L ||
              (Ue ? 'hidden' in Ue && (ct = Ue.hidden) : (Ue = re.access(o, 'fxshow', { display: K })),
              x && (Ue.hidden = !ct),
              ct && jt([o], !0),
              Y.done(function () {
                ct || jt([o]), re.remove(o, 'fxshow');
                for (g in te) u.style(o, g, te[g]);
              })),
              (L = ln(ct ? Ue[g] : 0, g, Y)),
              g in Ue || ((Ue[g] = L.start), ct && ((L.end = L.start), (L.start = 0)));
        }
      }
      function ar(o, l) {
        var d, g, b, x, O;
        for (d in o)
          if (
            ((g = oe(d)),
            (b = l[g]),
            (x = o[d]),
            Array.isArray(x) && ((b = x[1]), (x = o[d] = x[0])),
            d !== g && ((o[g] = x), delete o[d]),
            (O = u.cssHooks[g]),
            O && 'expand' in O)
          ) {
            (x = O.expand(x)), delete o[g];
            for (d in x) d in o || ((o[d] = x[d]), (l[d] = b));
          } else l[g] = b;
      }
      function tn(o, l, d) {
        var g,
          b,
          x = 0,
          O = tn.prefilters.length,
          k = u.Deferred().always(function () {
            delete L.elem;
          }),
          L = function () {
            if (b) return !1;
            for (
              var ce = gr || en(),
                Y = Math.max(0, K.startTime + K.duration - ce),
                te = Y / K.duration || 0,
                qe = 1 - te,
                ct = 0,
                Ue = K.tweens.length;
              ct < Ue;
              ct++
            )
              K.tweens[ct].run(qe);
            return (
              k.notifyWith(o, [K, qe, Y]),
              qe < 1 && Ue ? Y : (Ue || k.notifyWith(o, [K, 1, 0]), k.resolveWith(o, [K]), !1)
            );
          },
          K = k.promise({
            elem: o,
            props: u.extend({}, l),
            opts: u.extend(!0, { specialEasing: {}, easing: u.easing._default }, d),
            originalProperties: l,
            originalOptions: d,
            startTime: gr || en(),
            duration: d.duration,
            tweens: [],
            createTween: function (ce, Y) {
              var te = u.Tween(o, K.opts, ce, Y, K.opts.specialEasing[ce] || K.opts.easing);
              return K.tweens.push(te), te;
            },
            stop: function (ce) {
              var Y = 0,
                te = ce ? K.tweens.length : 0;
              if (b) return this;
              for (b = !0; Y < te; Y++) K.tweens[Y].run(1);
              return ce ? (k.notifyWith(o, [K, 1, 0]), k.resolveWith(o, [K, ce])) : k.rejectWith(o, [K, ce]), this;
            },
          }),
          Q = K.props;
        for (ar(Q, K.opts.specialEasing); x < O; x++)
          if (((g = tn.prefilters[x].call(K, o, Q, K.opts)), g))
            return C(g.stop) && (u._queueHooks(K.elem, K.opts.queue).stop = g.stop.bind(g)), g;
        return (
          u.map(Q, ln, K),
          C(K.opts.start) && K.opts.start.call(o, K),
          K.progress(K.opts.progress).done(K.opts.done, K.opts.complete).fail(K.opts.fail).always(K.opts.always),
          u.fx.timer(u.extend(L, { elem: o, anim: K, queue: K.opts.queue })),
          K
        );
      }
      (u.Animation = u.extend(tn, {
        tweeners: {
          '*': [
            function (o, l) {
              var d = this.createTween(o, l);
              return it(d.elem, o, wt.exec(l), d), d;
            },
          ],
        },
        tweener: function (o, l) {
          C(o) ? ((l = o), (o = ['*'])) : (o = o.match(de));
          for (var d, g = 0, b = o.length; g < b; g++)
            (d = o[g]), (tn.tweeners[d] = tn.tweeners[d] || []), tn.tweeners[d].unshift(l);
        },
        prefilters: [Pn],
        prefilter: function (o, l) {
          l ? tn.prefilters.unshift(o) : tn.prefilters.push(o);
        },
      })),
        (u.speed = function (o, l, d) {
          var g =
            o && typeof o == 'object'
              ? u.extend({}, o)
              : { complete: d || (!d && l) || (C(o) && o), duration: o, easing: (d && l) || (l && !C(l) && l) };
          return (
            u.fx.off
              ? (g.duration = 0)
              : typeof g.duration != 'number' &&
                (g.duration in u.fx.speeds
                  ? (g.duration = u.fx.speeds[g.duration])
                  : (g.duration = u.fx.speeds._default)),
            (g.queue == null || g.queue === !0) && (g.queue = 'fx'),
            (g.old = g.complete),
            (g.complete = function () {
              C(g.old) && g.old.call(this), g.queue && u.dequeue(this, g.queue);
            }),
            g
          );
        }),
        u.fn.extend({
          fadeTo: function (o, l, d, g) {
            return this.filter(_t).css('opacity', 0).show().end().animate({ opacity: l }, o, d, g);
          },
          animate: function (o, l, d, g) {
            var b = u.isEmptyObject(o),
              x = u.speed(l, d, g),
              O = function () {
                var k = tn(this, u.extend({}, o), x);
                (b || re.get(this, 'finish')) && k.stop(!0);
              };
            return (O.finish = O), b || x.queue === !1 ? this.each(O) : this.queue(x.queue, O);
          },
          stop: function (o, l, d) {
            var g = function (b) {
              var x = b.stop;
              delete b.stop, x(d);
            };
            return (
              typeof o != 'string' && ((d = l), (l = o), (o = void 0)),
              l && this.queue(o || 'fx', []),
              this.each(function () {
                var b = !0,
                  x = o != null && o + 'queueHooks',
                  O = u.timers,
                  k = re.get(this);
                if (x) k[x] && k[x].stop && g(k[x]);
                else for (x in k) k[x] && k[x].stop && et.test(x) && g(k[x]);
                for (x = O.length; x--; )
                  O[x].elem === this &&
                    (o == null || O[x].queue === o) &&
                    (O[x].anim.stop(d), (b = !1), O.splice(x, 1));
                (b || !d) && u.dequeue(this, o);
              })
            );
          },
          finish: function (o) {
            return (
              o !== !1 && (o = o || 'fx'),
              this.each(function () {
                var l,
                  d = re.get(this),
                  g = d[o + 'queue'],
                  b = d[o + 'queueHooks'],
                  x = u.timers,
                  O = g ? g.length : 0;
                for (d.finish = !0, u.queue(this, o, []), b && b.stop && b.stop.call(this, !0), l = x.length; l--; )
                  x[l].elem === this && x[l].queue === o && (x[l].anim.stop(!0), x.splice(l, 1));
                for (l = 0; l < O; l++) g[l] && g[l].finish && g[l].finish.call(this);
                delete d.finish;
              })
            );
          },
        }),
        u.each(['toggle', 'show', 'hide'], function (o, l) {
          var d = u.fn[l];
          u.fn[l] = function (g, b, x) {
            return g == null || typeof g == 'boolean' ? d.apply(this, arguments) : this.animate(Pt(l, !0), g, b, x);
          };
        }),
        u.each(
          {
            slideDown: Pt('show'),
            slideUp: Pt('hide'),
            slideToggle: Pt('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' },
          },
          function (o, l) {
            u.fn[o] = function (d, g, b) {
              return this.animate(l, d, g, b);
            };
          },
        ),
        (u.timers = []),
        (u.fx.tick = function () {
          var o,
            l = 0,
            d = u.timers;
          for (gr = Date.now(); l < d.length; l++) (o = d[l]), !o() && d[l] === o && d.splice(l--, 1);
          d.length || u.fx.stop(), (gr = void 0);
        }),
        (u.fx.timer = function (o) {
          u.timers.push(o), u.fx.start();
        }),
        (u.fx.interval = 13),
        (u.fx.start = function () {
          br || ((br = !0), Qt());
        }),
        (u.fx.stop = function () {
          br = null;
        }),
        (u.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (u.fn.delay = function (o, l) {
          return (
            (o = (u.fx && u.fx.speeds[o]) || o),
            (l = l || 'fx'),
            this.queue(l, function (d, g) {
              var b = t.setTimeout(d, o);
              g.stop = function () {
                t.clearTimeout(b);
              };
            })
          );
        }),
        (function () {
          var o = E.createElement('input'),
            l = E.createElement('select'),
            d = l.appendChild(E.createElement('option'));
          (o.type = 'checkbox'),
            (S.checkOn = o.value !== ''),
            (S.optSelected = d.selected),
            (o = E.createElement('input')),
            (o.value = 't'),
            (o.type = 'radio'),
            (S.radioValue = o.value === 't');
        })();
      var mr,
        _n = u.expr.attrHandle;
      u.fn.extend({
        attr: function (o, l) {
          return Ee(this, u.attr, o, l, arguments.length > 1);
        },
        removeAttr: function (o) {
          return this.each(function () {
            u.removeAttr(this, o);
          });
        },
      }),
        u.extend({
          attr: function (o, l, d) {
            var g,
              b,
              x = o.nodeType;
            if (!(x === 3 || x === 8 || x === 2)) {
              if (typeof o.getAttribute > 'u') return u.prop(o, l, d);
              if (
                ((x !== 1 || !u.isXMLDoc(o)) &&
                  (b = u.attrHooks[l.toLowerCase()] || (u.expr.match.bool.test(l) ? mr : void 0)),
                d !== void 0)
              ) {
                if (d === null) {
                  u.removeAttr(o, l);
                  return;
                }
                return b && 'set' in b && (g = b.set(o, d, l)) !== void 0 ? g : (o.setAttribute(l, d + ''), d);
              }
              return b && 'get' in b && (g = b.get(o, l)) !== null ? g : ((g = u.find.attr(o, l)), g ?? void 0);
            }
          },
          attrHooks: {
            type: {
              set: function (o, l) {
                if (!S.radioValue && l === 'radio' && F(o, 'input')) {
                  var d = o.value;
                  return o.setAttribute('type', l), d && (o.value = d), l;
                }
              },
            },
          },
          removeAttr: function (o, l) {
            var d,
              g = 0,
              b = l && l.match(de);
            if (b && o.nodeType === 1) for (; (d = b[g++]); ) o.removeAttribute(d);
          },
        }),
        (mr = {
          set: function (o, l, d) {
            return l === !1 ? u.removeAttr(o, d) : o.setAttribute(d, d), d;
          },
        }),
        u.each(u.expr.match.bool.source.match(/\w+/g), function (o, l) {
          var d = _n[l] || u.find.attr;
          _n[l] = function (g, b, x) {
            var O,
              k,
              L = b.toLowerCase();
            return x || ((k = _n[L]), (_n[L] = O), (O = d(g, b, x) != null ? L : null), (_n[L] = k)), O;
          };
        });
      var vi = /^(?:input|select|textarea|button)$/i,
        Ro = /^(?:a|area)$/i;
      u.fn.extend({
        prop: function (o, l) {
          return Ee(this, u.prop, o, l, arguments.length > 1);
        },
        removeProp: function (o) {
          return this.each(function () {
            delete this[u.propFix[o] || o];
          });
        },
      }),
        u.extend({
          prop: function (o, l, d) {
            var g,
              b,
              x = o.nodeType;
            if (!(x === 3 || x === 8 || x === 2))
              return (
                (x !== 1 || !u.isXMLDoc(o)) && ((l = u.propFix[l] || l), (b = u.propHooks[l])),
                d !== void 0
                  ? b && 'set' in b && (g = b.set(o, d, l)) !== void 0
                    ? g
                    : (o[l] = d)
                  : b && 'get' in b && (g = b.get(o, l)) !== null
                  ? g
                  : o[l]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (o) {
                var l = u.find.attr(o, 'tabindex');
                return l ? parseInt(l, 10) : vi.test(o.nodeName) || (Ro.test(o.nodeName) && o.href) ? 0 : -1;
              },
            },
          },
          propFix: { for: 'htmlFor', class: 'className' },
        }),
        S.optSelected ||
          (u.propHooks.selected = {
            get: function (o) {
              var l = o.parentNode;
              return l && l.parentNode && l.parentNode.selectedIndex, null;
            },
            set: function (o) {
              var l = o.parentNode;
              l && (l.selectedIndex, l.parentNode && l.parentNode.selectedIndex);
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
      function Sr(o) {
        var l = o.match(de) || [];
        return l.join(' ');
      }
      function Nr(o) {
        return (o.getAttribute && o.getAttribute('class')) || '';
      }
      function Mo(o) {
        return Array.isArray(o) ? o : typeof o == 'string' ? o.match(de) || [] : [];
      }
      u.fn.extend({
        addClass: function (o) {
          var l, d, g, b, x, O;
          return C(o)
            ? this.each(function (k) {
                u(this).addClass(o.call(this, k, Nr(this)));
              })
            : ((l = Mo(o)),
              l.length
                ? this.each(function () {
                    if (((g = Nr(this)), (d = this.nodeType === 1 && ' ' + Sr(g) + ' '), d)) {
                      for (x = 0; x < l.length; x++) (b = l[x]), d.indexOf(' ' + b + ' ') < 0 && (d += b + ' ');
                      (O = Sr(d)), g !== O && this.setAttribute('class', O);
                    }
                  })
                : this);
        },
        removeClass: function (o) {
          var l, d, g, b, x, O;
          return C(o)
            ? this.each(function (k) {
                u(this).removeClass(o.call(this, k, Nr(this)));
              })
            : arguments.length
            ? ((l = Mo(o)),
              l.length
                ? this.each(function () {
                    if (((g = Nr(this)), (d = this.nodeType === 1 && ' ' + Sr(g) + ' '), d)) {
                      for (x = 0; x < l.length; x++)
                        for (b = l[x]; d.indexOf(' ' + b + ' ') > -1; ) d = d.replace(' ' + b + ' ', ' ');
                      (O = Sr(d)), g !== O && this.setAttribute('class', O);
                    }
                  })
                : this)
            : this.attr('class', '');
        },
        toggleClass: function (o, l) {
          var d,
            g,
            b,
            x,
            O = typeof o,
            k = O === 'string' || Array.isArray(o);
          return C(o)
            ? this.each(function (L) {
                u(this).toggleClass(o.call(this, L, Nr(this), l), l);
              })
            : typeof l == 'boolean' && k
            ? l
              ? this.addClass(o)
              : this.removeClass(o)
            : ((d = Mo(o)),
              this.each(function () {
                if (k)
                  for (x = u(this), b = 0; b < d.length; b++)
                    (g = d[b]), x.hasClass(g) ? x.removeClass(g) : x.addClass(g);
                else
                  (o === void 0 || O === 'boolean') &&
                    ((g = Nr(this)),
                    g && re.set(this, '__className__', g),
                    this.setAttribute &&
                      this.setAttribute('class', g || o === !1 ? '' : re.get(this, '__className__') || ''));
              }));
        },
        hasClass: function (o) {
          var l,
            d,
            g = 0;
          for (l = ' ' + o + ' '; (d = this[g++]); )
            if (d.nodeType === 1 && (' ' + Sr(Nr(d)) + ' ').indexOf(l) > -1) return !0;
          return !1;
        },
      });
      var Je = /\r/g;
      u.fn.extend({
        val: function (o) {
          var l,
            d,
            g,
            b = this[0];
          return arguments.length
            ? ((g = C(o)),
              this.each(function (x) {
                var O;
                this.nodeType === 1 &&
                  (g ? (O = o.call(this, x, u(this).val())) : (O = o),
                  O == null
                    ? (O = '')
                    : typeof O == 'number'
                    ? (O += '')
                    : Array.isArray(O) &&
                      (O = u.map(O, function (k) {
                        return k == null ? '' : k + '';
                      })),
                  (l = u.valHooks[this.type] || u.valHooks[this.nodeName.toLowerCase()]),
                  (!l || !('set' in l) || l.set(this, O, 'value') === void 0) && (this.value = O));
              }))
            : b
            ? ((l = u.valHooks[b.type] || u.valHooks[b.nodeName.toLowerCase()]),
              l && 'get' in l && (d = l.get(b, 'value')) !== void 0
                ? d
                : ((d = b.value), typeof d == 'string' ? d.replace(Je, '') : d ?? ''))
            : void 0;
        },
      }),
        u.extend({
          valHooks: {
            option: {
              get: function (o) {
                var l = u.find.attr(o, 'value');
                return l ?? Sr(u.text(o));
              },
            },
            select: {
              get: function (o) {
                var l,
                  d,
                  g,
                  b = o.options,
                  x = o.selectedIndex,
                  O = o.type === 'select-one',
                  k = O ? null : [],
                  L = O ? x + 1 : b.length;
                for (x < 0 ? (g = L) : (g = O ? x : 0); g < L; g++)
                  if (
                    ((d = b[g]),
                    (d.selected || g === x) && !d.disabled && (!d.parentNode.disabled || !F(d.parentNode, 'optgroup')))
                  ) {
                    if (((l = u(d).val()), O)) return l;
                    k.push(l);
                  }
                return k;
              },
              set: function (o, l) {
                for (var d, g, b = o.options, x = u.makeArray(l), O = b.length; O--; )
                  (g = b[O]), (g.selected = u.inArray(u.valHooks.option.get(g), x) > -1) && (d = !0);
                return d || (o.selectedIndex = -1), x;
              },
            },
          },
        }),
        u.each(['radio', 'checkbox'], function () {
          (u.valHooks[this] = {
            set: function (o, l) {
              if (Array.isArray(l)) return (o.checked = u.inArray(u(o).val(), l) > -1);
            },
          }),
            S.checkOn ||
              (u.valHooks[this].get = function (o) {
                return o.getAttribute('value') === null ? 'on' : o.value;
              });
        }),
        (S.focusin = 'onfocusin' in t);
      var rt = /^(?:focusinfocus|focusoutblur)$/,
        Lt = function (o) {
          o.stopPropagation();
        };
      u.extend(u.event, {
        trigger: function (o, l, d, g) {
          var b,
            x,
            O,
            k,
            L,
            K,
            Q,
            ce,
            Y = [d || E],
            te = m.call(o, 'type') ? o.type : o,
            qe = m.call(o, 'namespace') ? o.namespace.split('.') : [];
          if (
            ((x = ce = O = d = d || E),
            !(d.nodeType === 3 || d.nodeType === 8) &&
              !rt.test(te + u.event.triggered) &&
              (te.indexOf('.') > -1 && ((qe = te.split('.')), (te = qe.shift()), qe.sort()),
              (L = te.indexOf(':') < 0 && 'on' + te),
              (o = o[u.expando] ? o : new u.Event(te, typeof o == 'object' && o)),
              (o.isTrigger = g ? 2 : 3),
              (o.namespace = qe.join('.')),
              (o.rnamespace = o.namespace ? new RegExp('(^|\\.)' + qe.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
              (o.result = void 0),
              o.target || (o.target = d),
              (l = l == null ? [o] : u.makeArray(l, [o])),
              (Q = u.event.special[te] || {}),
              !(!g && Q.trigger && Q.trigger.apply(d, l) === !1)))
          ) {
            if (!g && !Q.noBubble && !_(d)) {
              for (k = Q.delegateType || te, rt.test(k + te) || (x = x.parentNode); x; x = x.parentNode)
                Y.push(x), (O = x);
              O === (d.ownerDocument || E) && Y.push(O.defaultView || O.parentWindow || t);
            }
            for (b = 0; (x = Y[b++]) && !o.isPropagationStopped(); )
              (ce = x),
                (o.type = b > 1 ? k : Q.bindType || te),
                (K = (re.get(x, 'events') || Object.create(null))[o.type] && re.get(x, 'handle')),
                K && K.apply(x, l),
                (K = L && x[L]),
                K && K.apply && Ne(x) && ((o.result = K.apply(x, l)), o.result === !1 && o.preventDefault());
            return (
              (o.type = te),
              !g &&
                !o.isDefaultPrevented() &&
                (!Q._default || Q._default.apply(Y.pop(), l) === !1) &&
                Ne(d) &&
                L &&
                C(d[te]) &&
                !_(d) &&
                ((O = d[L]),
                O && (d[L] = null),
                (u.event.triggered = te),
                o.isPropagationStopped() && ce.addEventListener(te, Lt),
                d[te](),
                o.isPropagationStopped() && ce.removeEventListener(te, Lt),
                (u.event.triggered = void 0),
                O && (d[L] = O)),
              o.result
            );
          }
        },
        simulate: function (o, l, d) {
          var g = u.extend(new u.Event(), d, { type: o, isSimulated: !0 });
          u.event.trigger(g, null, l);
        },
      }),
        u.fn.extend({
          trigger: function (o, l) {
            return this.each(function () {
              u.event.trigger(o, l, this);
            });
          },
          triggerHandler: function (o, l) {
            var d = this[0];
            if (d) return u.event.trigger(o, l, d, !0);
          },
        }),
        S.focusin ||
          u.each({ focus: 'focusin', blur: 'focusout' }, function (o, l) {
            var d = function (g) {
              u.event.simulate(l, g.target, u.event.fix(g));
            };
            u.event.special[l] = {
              setup: function () {
                var g = this.ownerDocument || this.document || this,
                  b = re.access(g, l);
                b || g.addEventListener(o, d, !0), re.access(g, l, (b || 0) + 1);
              },
              teardown: function () {
                var g = this.ownerDocument || this.document || this,
                  b = re.access(g, l) - 1;
                b ? re.access(g, l, b) : (g.removeEventListener(o, d, !0), re.remove(g, l));
              },
            };
          });
      var nn = t.location,
        Jt = { guid: Date.now() },
        Ji = /\?/;
      u.parseXML = function (o) {
        var l, d;
        if (!o || typeof o != 'string') return null;
        try {
          l = new t.DOMParser().parseFromString(o, 'text/xml');
        } catch {}
        return (
          (d = l && l.getElementsByTagName('parsererror')[0]),
          (!l || d) &&
            u.error(
              'Invalid XML: ' +
                (d
                  ? u.map(d.childNodes, function (g) {
                      return g.textContent;
                    }).join(`
`)
                  : o),
            ),
          l
        );
      };
      var Zi = /\[\]$/,
        eo = /\r?\n/g,
        ls = /^(?:submit|button|image|reset|file)$/i,
        to = /^(?:input|select|textarea|keygen)/i;
      function Rc(o, l, d, g) {
        var b;
        if (Array.isArray(l))
          u.each(l, function (x, O) {
            d || Zi.test(o) ? g(o, O) : Rc(o + '[' + (typeof O == 'object' && O != null ? x : '') + ']', O, d, g);
          });
        else if (!d && D(l) === 'object') for (b in l) Rc(o + '[' + b + ']', l[b], d, g);
        else g(o, l);
      }
      (u.param = function (o, l) {
        var d,
          g = [],
          b = function (x, O) {
            var k = C(O) ? O() : O;
            g[g.length] = encodeURIComponent(x) + '=' + encodeURIComponent(k ?? '');
          };
        if (o == null) return '';
        if (Array.isArray(o) || (o.jquery && !u.isPlainObject(o)))
          u.each(o, function () {
            b(this.name, this.value);
          });
        else for (d in o) Rc(d, o[d], l, b);
        return g.join('&');
      }),
        u.fn.extend({
          serialize: function () {
            return u.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var o = u.prop(this, 'elements');
              return o ? u.makeArray(o) : this;
            })
              .filter(function () {
                var o = this.type;
                return (
                  this.name &&
                  !u(this).is(':disabled') &&
                  to.test(this.nodeName) &&
                  !ls.test(o) &&
                  (this.checked || !Le.test(o))
                );
              })
              .map(function (o, l) {
                var d = u(this).val();
                return d == null
                  ? null
                  : Array.isArray(d)
                  ? u.map(d, function (g) {
                      return {
                        name: l.name,
                        value: g.replace(
                          eo,
                          `\r
`,
                        ),
                      };
                    })
                  : {
                      name: l.name,
                      value: d.replace(
                        eo,
                        `\r
`,
                      ),
                    };
              })
              .get();
          },
        });
      var xO = /%20/g,
        wO = /#.*$/,
        EO = /([?&])_=[^&]*/,
        $O = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        OO = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        _O = /^(?:GET|HEAD)$/,
        IO = /^\/\//,
        mg = {},
        Mc = {},
        vg = '*/'.concat('*'),
        Ac = E.createElement('a');
      Ac.href = nn.href;
      function yg(o) {
        return function (l, d) {
          typeof l != 'string' && ((d = l), (l = '*'));
          var g,
            b = 0,
            x = l.toLowerCase().match(de) || [];
          if (C(d))
            for (; (g = x[b++]); )
              g[0] === '+' ? ((g = g.slice(1) || '*'), (o[g] = o[g] || []).unshift(d)) : (o[g] = o[g] || []).push(d);
        };
      }
      function bg(o, l, d, g) {
        var b = {},
          x = o === Mc;
        function O(k) {
          var L;
          return (
            (b[k] = !0),
            u.each(o[k] || [], function (K, Q) {
              var ce = Q(l, d, g);
              if (typeof ce == 'string' && !x && !b[ce]) return l.dataTypes.unshift(ce), O(ce), !1;
              if (x) return !(L = ce);
            }),
            L
          );
        }
        return O(l.dataTypes[0]) || (!b['*'] && O('*'));
      }
      function Dc(o, l) {
        var d,
          g,
          b = u.ajaxSettings.flatOptions || {};
        for (d in l) l[d] !== void 0 && ((b[d] ? o : g || (g = {}))[d] = l[d]);
        return g && u.extend(!0, o, g), o;
      }
      function TO(o, l, d) {
        for (var g, b, x, O, k = o.contents, L = o.dataTypes; L[0] === '*'; )
          L.shift(), g === void 0 && (g = o.mimeType || l.getResponseHeader('Content-Type'));
        if (g) {
          for (b in k)
            if (k[b] && k[b].test(g)) {
              L.unshift(b);
              break;
            }
        }
        if (L[0] in d) x = L[0];
        else {
          for (b in d) {
            if (!L[0] || o.converters[b + ' ' + L[0]]) {
              x = b;
              break;
            }
            O || (O = b);
          }
          x = x || O;
        }
        if (x) return x !== L[0] && L.unshift(x), d[x];
      }
      function PO(o, l, d, g) {
        var b,
          x,
          O,
          k,
          L,
          K = {},
          Q = o.dataTypes.slice();
        if (Q[1]) for (O in o.converters) K[O.toLowerCase()] = o.converters[O];
        for (x = Q.shift(); x; )
          if (
            (o.responseFields[x] && (d[o.responseFields[x]] = l),
            !L && g && o.dataFilter && (l = o.dataFilter(l, o.dataType)),
            (L = x),
            (x = Q.shift()),
            x)
          ) {
            if (x === '*') x = L;
            else if (L !== '*' && L !== x) {
              if (((O = K[L + ' ' + x] || K['* ' + x]), !O)) {
                for (b in K)
                  if (((k = b.split(' ')), k[1] === x && ((O = K[L + ' ' + k[0]] || K['* ' + k[0]]), O))) {
                    O === !0 ? (O = K[b]) : K[b] !== !0 && ((x = k[0]), Q.unshift(k[1]));
                    break;
                  }
              }
              if (O !== !0)
                if (O && o.throws) l = O(l);
                else
                  try {
                    l = O(l);
                  } catch (ce) {
                    return { state: 'parsererror', error: O ? ce : 'No conversion from ' + L + ' to ' + x };
                  }
            }
          }
        return { state: 'success', data: l };
      }
      u.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: nn.href,
          type: 'GET',
          isLocal: OO.test(nn.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          accepts: {
            '*': vg,
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
        ajaxSetup: function (o, l) {
          return l ? Dc(Dc(o, u.ajaxSettings), l) : Dc(u.ajaxSettings, o);
        },
        ajaxPrefilter: yg(mg),
        ajaxTransport: yg(Mc),
        ajax: function (o, l) {
          typeof o == 'object' && ((l = o), (o = void 0)), (l = l || {});
          var d,
            g,
            b,
            x,
            O,
            k,
            L,
            K,
            Q,
            ce,
            Y = u.ajaxSetup({}, l),
            te = Y.context || Y,
            qe = Y.context && (te.nodeType || te.jquery) ? u(te) : u.event,
            ct = u.Deferred(),
            Ue = u.Callbacks('once memory'),
            yn = Y.statusCode || {},
            pn = {},
            Xn = {},
            Ft = 'canceled',
            at = {
              readyState: 0,
              getResponseHeader: function (Et) {
                var Zt;
                if (L) {
                  if (!x)
                    for (x = {}; (Zt = $O.exec(b)); )
                      x[Zt[1].toLowerCase() + ' '] = (x[Zt[1].toLowerCase() + ' '] || []).concat(Zt[2]);
                  Zt = x[Et.toLowerCase() + ' '];
                }
                return Zt == null ? null : Zt.join(', ');
              },
              getAllResponseHeaders: function () {
                return L ? b : null;
              },
              setRequestHeader: function (Et, Zt) {
                return L == null && ((Et = Xn[Et.toLowerCase()] = Xn[Et.toLowerCase()] || Et), (pn[Et] = Zt)), this;
              },
              overrideMimeType: function (Et) {
                return L == null && (Y.mimeType = Et), this;
              },
              statusCode: function (Et) {
                var Zt;
                if (Et)
                  if (L) at.always(Et[at.status]);
                  else for (Zt in Et) yn[Zt] = [yn[Zt], Et[Zt]];
                return this;
              },
              abort: function (Et) {
                var Zt = Et || Ft;
                return d && d.abort(Zt), Ln(0, Zt), this;
              },
            };
          if (
            (ct.promise(at),
            (Y.url = ((o || Y.url || nn.href) + '').replace(IO, nn.protocol + '//')),
            (Y.type = l.method || l.type || Y.method || Y.type),
            (Y.dataTypes = (Y.dataType || '*').toLowerCase().match(de) || ['']),
            Y.crossDomain == null)
          ) {
            k = E.createElement('a');
            try {
              (k.href = Y.url),
                (k.href = k.href),
                (Y.crossDomain = Ac.protocol + '//' + Ac.host != k.protocol + '//' + k.host);
            } catch {
              Y.crossDomain = !0;
            }
          }
          if (
            (Y.data && Y.processData && typeof Y.data != 'string' && (Y.data = u.param(Y.data, Y.traditional)),
            bg(mg, Y, l, at),
            L)
          )
            return at;
          (K = u.event && Y.global),
            K && u.active++ === 0 && u.event.trigger('ajaxStart'),
            (Y.type = Y.type.toUpperCase()),
            (Y.hasContent = !_O.test(Y.type)),
            (g = Y.url.replace(wO, '')),
            Y.hasContent
              ? Y.data &&
                Y.processData &&
                (Y.contentType || '').indexOf('application/x-www-form-urlencoded') === 0 &&
                (Y.data = Y.data.replace(xO, '+'))
              : ((ce = Y.url.slice(g.length)),
                Y.data &&
                  (Y.processData || typeof Y.data == 'string') &&
                  ((g += (Ji.test(g) ? '&' : '?') + Y.data), delete Y.data),
                Y.cache === !1 && ((g = g.replace(EO, '$1')), (ce = (Ji.test(g) ? '&' : '?') + '_=' + Jt.guid++ + ce)),
                (Y.url = g + ce)),
            Y.ifModified &&
              (u.lastModified[g] && at.setRequestHeader('If-Modified-Since', u.lastModified[g]),
              u.etag[g] && at.setRequestHeader('If-None-Match', u.etag[g])),
            ((Y.data && Y.hasContent && Y.contentType !== !1) || l.contentType) &&
              at.setRequestHeader('Content-Type', Y.contentType),
            at.setRequestHeader(
              'Accept',
              Y.dataTypes[0] && Y.accepts[Y.dataTypes[0]]
                ? Y.accepts[Y.dataTypes[0]] + (Y.dataTypes[0] !== '*' ? ', ' + vg + '; q=0.01' : '')
                : Y.accepts['*'],
            );
          for (Q in Y.headers) at.setRequestHeader(Q, Y.headers[Q]);
          if (Y.beforeSend && (Y.beforeSend.call(te, at, Y) === !1 || L)) return at.abort();
          if (((Ft = 'abort'), Ue.add(Y.complete), at.done(Y.success), at.fail(Y.error), (d = bg(Mc, Y, l, at)), !d))
            Ln(-1, 'No Transport');
          else {
            if (((at.readyState = 1), K && qe.trigger('ajaxSend', [at, Y]), L)) return at;
            Y.async &&
              Y.timeout > 0 &&
              (O = t.setTimeout(function () {
                at.abort('timeout');
              }, Y.timeout));
            try {
              (L = !1), d.send(pn, Ln);
            } catch (Et) {
              if (L) throw Et;
              Ln(-1, Et);
            }
          }
          function Ln(Et, Zt, Do, cs) {
            var Yn,
              yi,
              bi,
              Hn,
              Qr,
              sr = Zt;
            L ||
              ((L = !0),
              O && t.clearTimeout(O),
              (d = void 0),
              (b = cs || ''),
              (at.readyState = Et > 0 ? 4 : 0),
              (Yn = (Et >= 200 && Et < 300) || Et === 304),
              Do && (Hn = TO(Y, at, Do)),
              !Yn &&
                u.inArray('script', Y.dataTypes) > -1 &&
                u.inArray('json', Y.dataTypes) < 0 &&
                (Y.converters['text script'] = function () {}),
              (Hn = PO(Y, Hn, at, Yn)),
              Yn
                ? (Y.ifModified &&
                    ((Qr = at.getResponseHeader('Last-Modified')),
                    Qr && (u.lastModified[g] = Qr),
                    (Qr = at.getResponseHeader('etag')),
                    Qr && (u.etag[g] = Qr)),
                  Et === 204 || Y.type === 'HEAD'
                    ? (sr = 'nocontent')
                    : Et === 304
                    ? (sr = 'notmodified')
                    : ((sr = Hn.state), (yi = Hn.data), (bi = Hn.error), (Yn = !bi)))
                : ((bi = sr), (Et || !sr) && ((sr = 'error'), Et < 0 && (Et = 0))),
              (at.status = Et),
              (at.statusText = (Zt || sr) + ''),
              Yn ? ct.resolveWith(te, [yi, sr, at]) : ct.rejectWith(te, [at, sr, bi]),
              at.statusCode(yn),
              (yn = void 0),
              K && qe.trigger(Yn ? 'ajaxSuccess' : 'ajaxError', [at, Y, Yn ? yi : bi]),
              Ue.fireWith(te, [at, sr]),
              K && (qe.trigger('ajaxComplete', [at, Y]), --u.active || u.event.trigger('ajaxStop')));
          }
          return at;
        },
        getJSON: function (o, l, d) {
          return u.get(o, l, d, 'json');
        },
        getScript: function (o, l) {
          return u.get(o, void 0, l, 'script');
        },
      }),
        u.each(['get', 'post'], function (o, l) {
          u[l] = function (d, g, b, x) {
            return (
              C(g) && ((x = x || b), (b = g), (g = void 0)),
              u.ajax(u.extend({ url: d, type: l, dataType: x, data: g, success: b }, u.isPlainObject(d) && d))
            );
          };
        }),
        u.ajaxPrefilter(function (o) {
          var l;
          for (l in o.headers) l.toLowerCase() === 'content-type' && (o.contentType = o.headers[l] || '');
        }),
        (u._evalUrl = function (o, l, d) {
          return u.ajax({
            url: o,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            converters: { 'text script': function () {} },
            dataFilter: function (g) {
              u.globalEval(g, l, d);
            },
          });
        }),
        u.fn.extend({
          wrapAll: function (o) {
            var l;
            return (
              this[0] &&
                (C(o) && (o = o.call(this[0])),
                (l = u(o, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && l.insertBefore(this[0]),
                l
                  .map(function () {
                    for (var d = this; d.firstElementChild; ) d = d.firstElementChild;
                    return d;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (o) {
            return C(o)
              ? this.each(function (l) {
                  u(this).wrapInner(o.call(this, l));
                })
              : this.each(function () {
                  var l = u(this),
                    d = l.contents();
                  d.length ? d.wrapAll(o) : l.append(o);
                });
          },
          wrap: function (o) {
            var l = C(o);
            return this.each(function (d) {
              u(this).wrapAll(l ? o.call(this, d) : o);
            });
          },
          unwrap: function (o) {
            return (
              this.parent(o)
                .not('body')
                .each(function () {
                  u(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (u.expr.pseudos.hidden = function (o) {
          return !u.expr.pseudos.visible(o);
        }),
        (u.expr.pseudos.visible = function (o) {
          return !!(o.offsetWidth || o.offsetHeight || o.getClientRects().length);
        }),
        (u.ajaxSettings.xhr = function () {
          try {
            return new t.XMLHttpRequest();
          } catch {}
        });
      var NO = { 0: 200, 1223: 204 },
        Ao = u.ajaxSettings.xhr();
      (S.cors = !!Ao && 'withCredentials' in Ao),
        (S.ajax = Ao = !!Ao),
        u.ajaxTransport(function (o) {
          var l, d;
          if (S.cors || (Ao && !o.crossDomain))
            return {
              send: function (g, b) {
                var x,
                  O = o.xhr();
                if ((O.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields))
                  for (x in o.xhrFields) O[x] = o.xhrFields[x];
                o.mimeType && O.overrideMimeType && O.overrideMimeType(o.mimeType),
                  !o.crossDomain && !g['X-Requested-With'] && (g['X-Requested-With'] = 'XMLHttpRequest');
                for (x in g) O.setRequestHeader(x, g[x]);
                (l = function (k) {
                  return function () {
                    l &&
                      ((l = d = O.onload = O.onerror = O.onabort = O.ontimeout = O.onreadystatechange = null),
                      k === 'abort'
                        ? O.abort()
                        : k === 'error'
                        ? typeof O.status != 'number'
                          ? b(0, 'error')
                          : b(O.status, O.statusText)
                        : b(
                            NO[O.status] || O.status,
                            O.statusText,
                            (O.responseType || 'text') !== 'text' || typeof O.responseText != 'string'
                              ? { binary: O.response }
                              : { text: O.responseText },
                            O.getAllResponseHeaders(),
                          ));
                  };
                }),
                  (O.onload = l()),
                  (d = O.onerror = O.ontimeout = l('error')),
                  O.onabort !== void 0
                    ? (O.onabort = d)
                    : (O.onreadystatechange = function () {
                        O.readyState === 4 &&
                          t.setTimeout(function () {
                            l && d();
                          });
                      }),
                  (l = l('abort'));
                try {
                  O.send((o.hasContent && o.data) || null);
                } catch (k) {
                  if (l) throw k;
                }
              },
              abort: function () {
                l && l();
              },
            };
        }),
        u.ajaxPrefilter(function (o) {
          o.crossDomain && (o.contents.script = !1);
        }),
        u.ajaxSetup({
          accepts: {
            script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            'text script': function (o) {
              return u.globalEval(o), o;
            },
          },
        }),
        u.ajaxPrefilter('script', function (o) {
          o.cache === void 0 && (o.cache = !1), o.crossDomain && (o.type = 'GET');
        }),
        u.ajaxTransport('script', function (o) {
          if (o.crossDomain || o.scriptAttrs) {
            var l, d;
            return {
              send: function (g, b) {
                (l = u('<script>')
                  .attr(o.scriptAttrs || {})
                  .prop({ charset: o.scriptCharset, src: o.url })
                  .on(
                    'load error',
                    (d = function (x) {
                      l.remove(), (d = null), x && b(x.type === 'error' ? 404 : 200, x.type);
                    }),
                  )),
                  E.head.appendChild(l[0]);
              },
              abort: function () {
                d && d();
              },
            };
          }
        });
      var Sg = [],
        Fc = /(=)\?(?=&|$)|\?\?/;
      u.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
          var o = Sg.pop() || u.expando + '_' + Jt.guid++;
          return (this[o] = !0), o;
        },
      }),
        u.ajaxPrefilter('json jsonp', function (o, l, d) {
          var g,
            b,
            x,
            O =
              o.jsonp !== !1 &&
              (Fc.test(o.url)
                ? 'url'
                : typeof o.data == 'string' &&
                  (o.contentType || '').indexOf('application/x-www-form-urlencoded') === 0 &&
                  Fc.test(o.data) &&
                  'data');
          if (O || o.dataTypes[0] === 'jsonp')
            return (
              (g = o.jsonpCallback = C(o.jsonpCallback) ? o.jsonpCallback() : o.jsonpCallback),
              O
                ? (o[O] = o[O].replace(Fc, '$1' + g))
                : o.jsonp !== !1 && (o.url += (Ji.test(o.url) ? '&' : '?') + o.jsonp + '=' + g),
              (o.converters['script json'] = function () {
                return x || u.error(g + ' was not called'), x[0];
              }),
              (o.dataTypes[0] = 'json'),
              (b = t[g]),
              (t[g] = function () {
                x = arguments;
              }),
              d.always(function () {
                b === void 0 ? u(t).removeProp(g) : (t[g] = b),
                  o[g] && ((o.jsonpCallback = l.jsonpCallback), Sg.push(g)),
                  x && C(b) && b(x[0]),
                  (x = b = void 0);
              }),
              'script'
            );
        }),
        (S.createHTMLDocument = (function () {
          var o = E.implementation.createHTMLDocument('').body;
          return (o.innerHTML = '<form></form><form></form>'), o.childNodes.length === 2;
        })()),
        (u.parseHTML = function (o, l, d) {
          if (typeof o != 'string') return [];
          typeof l == 'boolean' && ((d = l), (l = !1));
          var g, b, x;
          return (
            l ||
              (S.createHTMLDocument
                ? ((l = E.implementation.createHTMLDocument('')),
                  (g = l.createElement('base')),
                  (g.href = E.location.href),
                  l.head.appendChild(g))
                : (l = E)),
            (b = M.exec(o)),
            (x = !d && []),
            b
              ? [l.createElement(b[1])]
              : ((b = _e([o], l, x)), x && x.length && u(x).remove(), u.merge([], b.childNodes))
          );
        }),
        (u.fn.load = function (o, l, d) {
          var g,
            b,
            x,
            O = this,
            k = o.indexOf(' ');
          return (
            k > -1 && ((g = Sr(o.slice(k))), (o = o.slice(0, k))),
            C(l) ? ((d = l), (l = void 0)) : l && typeof l == 'object' && (b = 'POST'),
            O.length > 0 &&
              u
                .ajax({ url: o, type: b || 'GET', dataType: 'html', data: l })
                .done(function (L) {
                  (x = arguments), O.html(g ? u('<div>').append(u.parseHTML(L)).find(g) : L);
                })
                .always(
                  d &&
                    function (L, K) {
                      O.each(function () {
                        d.apply(this, x || [L.responseText, K, L]);
                      });
                    },
                ),
            this
          );
        }),
        (u.expr.pseudos.animated = function (o) {
          return u.grep(u.timers, function (l) {
            return o === l.elem;
          }).length;
        }),
        (u.offset = {
          setOffset: function (o, l, d) {
            var g,
              b,
              x,
              O,
              k,
              L,
              K,
              Q = u.css(o, 'position'),
              ce = u(o),
              Y = {};
            Q === 'static' && (o.style.position = 'relative'),
              (k = ce.offset()),
              (x = u.css(o, 'top')),
              (L = u.css(o, 'left')),
              (K = (Q === 'absolute' || Q === 'fixed') && (x + L).indexOf('auto') > -1),
              K
                ? ((g = ce.position()), (O = g.top), (b = g.left))
                : ((O = parseFloat(x) || 0), (b = parseFloat(L) || 0)),
              C(l) && (l = l.call(o, d, u.extend({}, k))),
              l.top != null && (Y.top = l.top - k.top + O),
              l.left != null && (Y.left = l.left - k.left + b),
              'using' in l ? l.using.call(o, Y) : ce.css(Y);
          },
        }),
        u.fn.extend({
          offset: function (o) {
            if (arguments.length)
              return o === void 0
                ? this
                : this.each(function (b) {
                    u.offset.setOffset(this, o, b);
                  });
            var l,
              d,
              g = this[0];
            if (g)
              return g.getClientRects().length
                ? ((l = g.getBoundingClientRect()),
                  (d = g.ownerDocument.defaultView),
                  { top: l.top + d.pageYOffset, left: l.left + d.pageXOffset })
                : { top: 0, left: 0 };
          },
          position: function () {
            if (this[0]) {
              var o,
                l,
                d,
                g = this[0],
                b = { top: 0, left: 0 };
              if (u.css(g, 'position') === 'fixed') l = g.getBoundingClientRect();
              else {
                for (
                  l = this.offset(), d = g.ownerDocument, o = g.offsetParent || d.documentElement;
                  o && (o === d.body || o === d.documentElement) && u.css(o, 'position') === 'static';

                )
                  o = o.parentNode;
                o &&
                  o !== g &&
                  o.nodeType === 1 &&
                  ((b = u(o).offset()),
                  (b.top += u.css(o, 'borderTopWidth', !0)),
                  (b.left += u.css(o, 'borderLeftWidth', !0)));
              }
              return {
                top: l.top - b.top - u.css(g, 'marginTop', !0),
                left: l.left - b.left - u.css(g, 'marginLeft', !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (var o = this.offsetParent; o && u.css(o, 'position') === 'static'; ) o = o.offsetParent;
              return o || vt;
            });
          },
        }),
        u.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (o, l) {
          var d = l === 'pageYOffset';
          u.fn[o] = function (g) {
            return Ee(
              this,
              function (b, x, O) {
                var k;
                if ((_(b) ? (k = b) : b.nodeType === 9 && (k = b.defaultView), O === void 0)) return k ? k[l] : b[x];
                k ? k.scrollTo(d ? k.pageXOffset : O, d ? O : k.pageYOffset) : (b[x] = O);
              },
              o,
              g,
              arguments.length,
            );
          };
        }),
        u.each(['top', 'left'], function (o, l) {
          u.cssHooks[l] = Kr(S.pixelPosition, function (d, g) {
            if (g) return (g = or(d, l)), Kn.test(g) ? u(d).position()[l] + 'px' : g;
          });
        }),
        u.each({ Height: 'height', Width: 'width' }, function (o, l) {
          u.each({ padding: 'inner' + o, content: l, '': 'outer' + o }, function (d, g) {
            u.fn[g] = function (b, x) {
              var O = arguments.length && (d || typeof b != 'boolean'),
                k = d || (b === !0 || x === !0 ? 'margin' : 'border');
              return Ee(
                this,
                function (L, K, Q) {
                  var ce;
                  return _(L)
                    ? g.indexOf('outer') === 0
                      ? L['inner' + o]
                      : L.document.documentElement['client' + o]
                    : L.nodeType === 9
                    ? ((ce = L.documentElement),
                      Math.max(
                        L.body['scroll' + o],
                        ce['scroll' + o],
                        L.body['offset' + o],
                        ce['offset' + o],
                        ce['client' + o],
                      ))
                    : Q === void 0
                    ? u.css(L, K, k)
                    : u.style(L, K, Q, k);
                },
                l,
                O ? b : void 0,
                O,
              );
            };
          });
        }),
        u.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (o, l) {
          u.fn[l] = function (d) {
            return this.on(l, d);
          };
        }),
        u.fn.extend({
          bind: function (o, l, d) {
            return this.on(o, null, l, d);
          },
          unbind: function (o, l) {
            return this.off(o, null, l);
          },
          delegate: function (o, l, d, g) {
            return this.on(l, o, d, g);
          },
          undelegate: function (o, l, d) {
            return arguments.length === 1 ? this.off(o, '**') : this.off(l, o || '**', d);
          },
          hover: function (o, l) {
            return this.mouseenter(o).mouseleave(l || o);
          },
        }),
        u.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' ',
          ),
          function (o, l) {
            u.fn[l] = function (d, g) {
              return arguments.length > 0 ? this.on(l, null, d, g) : this.trigger(l);
            };
          },
        );
      var RO = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (u.proxy = function (o, l) {
        var d, g, b;
        if ((typeof l == 'string' && ((d = o[l]), (l = o), (o = d)), !!C(o)))
          return (
            (g = a.call(arguments, 2)),
            (b = function () {
              return o.apply(l || this, g.concat(a.call(arguments)));
            }),
            (b.guid = o.guid = o.guid || u.guid++),
            b
          );
      }),
        (u.holdReady = function (o) {
          o ? u.readyWait++ : u.ready(!0);
        }),
        (u.isArray = Array.isArray),
        (u.parseJSON = JSON.parse),
        (u.nodeName = F),
        (u.isFunction = C),
        (u.isWindow = _),
        (u.camelCase = oe),
        (u.type = D),
        (u.now = Date.now),
        (u.isNumeric = function (o) {
          var l = u.type(o);
          return (l === 'number' || l === 'string') && !isNaN(o - parseFloat(o));
        }),
        (u.trim = function (o) {
          return o == null ? '' : (o + '').replace(RO, '$1');
        });
      var MO = t.jQuery,
        AO = t.$;
      return (
        (u.noConflict = function (o) {
          return t.$ === u && (t.$ = AO), o && t.jQuery === u && (t.jQuery = MO), u;
        }),
        typeof n > 'u' && (t.jQuery = t.$ = u),
        u
      );
    });
  })(dO);
  const fn = Nc;
  function pO() {
    uO(
      () => {
        const e = fn('.module-detail-info .module-base-desc .module-header .next-btn-group');
        return fn(e).get(0);
      },
      (e) => {
        const t = e.querySelectorAll('.next-btn')[0],
          n = document.createElement('button'),
          r = document.createElement('button'),
          i = e.insertBefore(r, t);
        (r.className = 'next-btn next-medium next-btn-normal'),
          (r.style.margin = '0px 5px'),
          y.render(y.h(fg, { text: '预发缓存清除', env: 'pre' }), i);
        const a = e.insertBefore(n, t);
        (n.className = 'next-btn next-medium next-btn-secondary'),
          (n.style.margin = '0px 5px'),
          y.render(y.h(fg, { text: '线上缓存清除', env: 'prod' }), a);
      },
    );
  }
  async function dg(e) {
    const t = Gn.loading('Getting DEF info...');
    try {
      const n = await Ic({ url: `https://work.def.alibaba-inc.com/api/search?q=${encodeURIComponent(e)}&t=app` }),
        r = ko(n, 'data.apps.0.id');
      Ir.open(`https://work.def.alibaba-inc.com/app/${r}/index`);
    } catch (n) {
      console.log(n, 'xxx'), Gn.error(n.error);
    } finally {
      t();
    }
  }
  async function pg(e) {
    const t = Gn.loading('Getting Git info...');
    try {
      const n = await Ic({ url: `https://work.def.alibaba-inc.com/api/search?q=${encodeURIComponent(e)}&t=app` }),
        r = ko(n, 'data.apps.0.group'),
        i = ko(n, 'data.apps.0.project');
      Ir.open(`https://code.alibaba-inc.com/${r}/${i}`);
    } catch (n) {
      Gn.error(n.error);
    } finally {
      t();
    }
  }
  async function hg(e) {
    const t = Gn.loading('Getting Astore info...');
    try {
      const n = await Ic({
          url: `https://astore.alibaba-inc.com/module/getMyModuleList?siteId=163&keyword=${encodeURIComponent(
            e,
          )}&pageSize=20&currentPage=1&moduleType=biz`,
        }),
        r = ko(n, 'data.dataList.0.id');
      console.log(n, r, 'xxx'), Ir.open(`https://astore.alibaba-inc.com/?#/site/163/module/biz-module/${r}`);
    } catch (n) {
      Gn.error(n.error);
    } finally {
      t();
    }
  }
  const F2 = '',
    hO = pi.Item,
    gO = ({ moduleName: e, moduleAliasName: t, backgroundColor: n }) => {
      const [r, i] = Te(!1),
        a = () => {
          i(!0);
        },
        s = () => {
          i(!1);
        },
        c = () => {
          dg(t);
        },
        f = () => {
          pg(t);
        },
        p = () => {
          hg(e);
        },
        h = () => {
          const S = JSON.stringify(['ARISE_ES']),
            C = JSON.stringify([e ?? '']);
          dr.lib.mtop
            .request({
              api: 'mtop.lazada.shop.component.cache.reset',
              v: '1.0',
              method: 'GET',
              dataType: 'json',
              data: { tenantIds: S, componentKeys: C, isAll: !0 },
            })
            .then(
              function ({ retType: E, data: I, ret: N }) {
                Gn.open({
                  type: 'success',
                  content: 'The module cache has been cleared, and the current page will be refreshed in 3 seconds',
                  duration: 3,
                  onClose: () => {
                    dr.location.reload();
                  },
                });
              },
              function ({ retType: E, data: I, ret: N }) {
                Gn.open({ type: 'error', content: N, duration: 3 });
              },
            );
        },
        m = (S) => (C) => {
          const _ = document.createElement('input');
          (_.value = S),
            document.body.appendChild(_),
            _.select(),
            document.execCommand('copy') &&
              (document.execCommand('copy'),
              Gn.open({ type: 'success', content: 'The field value has been copied', duration: 3 })),
            document.body.removeChild(_);
        },
        v = (S) => ut('a', { href: S.link, target: '_blank', children: S.title }),
        w = (S) =>
          ut(y.Fragment, { children: [S.title, ut($c, { className: 'store-btn-copy', onclick: m(S.title) })] });
      return ut(y.Fragment, {
        children: [
          ut('div', {
            class: 'store-dev-tools',
            'data-moduleName': e,
            style: { backgroundColor: n },
            children: [
              ut('div', { className: 'store-dev-tools-icon', children: ut(Kh, { onclick: a }) }),
              ut('div', { className: 'store-dev-tools-icon', children: ut(Zh, { onclick: h }) }),
            ],
          }),
          ut(mc, {
            className: 'store-drawer-container',
            title: 'Store Dev Tools',
            placement: 'right',
            onClose: s,
            open: r,
            children: [
              ut('div', {
                className: 'store-dev-tools-panel',
                children: ut(Ch, {
                  split: ut(_h, { type: 'vertical' }),
                  children: [
                    ut(Ur.Link, { onclick: c, children: 'DEF' }),
                    ut(Ur.Link, { onclick: f, children: 'GIT' }),
                    ut(Ur.Link, { onclick: p, children: 'Astore' }),
                    ut(Ur.Link, { onclick: h, children: 'Clear Cache' }),
                  ],
                }),
              }),
              ut(pi, {
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
                      eu ? 'rg-de-2-pre' : 'rg-de-2'
                    }/diamond/configlist/configedit?DataId=lazada.shop.front.version.content&Group=ARISE_ES_GLOBAL_SHOP&tab=edit`,
                  },
                  {
                    type: 'link',
                    label: 'Store Developer Document',
                    title: '店铺前端开发指南',
                    link: 'https://aliyuque.antfin.com/lggiz5/mdsozh/dr75296ggbnvmg15?singleDoc#',
                  },
                ],
                renderItem: (S) =>
                  ut(hO, {
                    children: ut(pi.Item.Meta, { title: S.label, description: S.type === 'link' ? v(S) : w(S) }),
                  }),
              }),
            ],
          }),
        ],
      });
    },
    j2 = '',
    mO = pi.Item,
    vO = ({ moduleName: e, moduleAliasName: t, backgroundColor: n }) => {
      const [r, i] = Te(!1),
        a = () => {
          i(!0);
        },
        s = () => {
          i(!1);
        },
        c = () => {
          dg(t);
        },
        f = () => {
          pg(t);
        },
        p = () => {
          hg(e);
        },
        h = () => {
          const S = JSON.stringify(['ARISE_ES']),
            C = JSON.stringify([e ?? '']);
          dr.lib.mtop
            .request({
              api: 'mtop.lazada.shop.component.cache.reset',
              v: '1.0',
              method: 'GET',
              dataType: 'json',
              data: { tenantIds: S, componentKeys: C, isAll: !0 },
            })
            .then(
              function ({ retType: E, data: I, ret: N }) {
                Gn.open({
                  type: 'success',
                  content: 'The module cache has been cleared, and the current page will be refreshed in 3 seconds',
                  duration: 3,
                  onClose: () => {
                    dr.location.reload();
                  },
                });
              },
              function ({ retType: E, data: I, ret: N }) {
                Gn.open({ type: 'error', content: N, duration: 3 });
              },
            );
        },
        m = (S) => (C) => {
          const _ = document.createElement('input');
          (_.value = S),
            document.body.appendChild(_),
            _.select(),
            document.execCommand('copy') &&
              (document.execCommand('copy'),
              Gn.open({ type: 'success', content: 'The field value has been copied', duration: 3 })),
            document.body.removeChild(_);
        },
        v = (S) => ut('a', { href: S.link, target: '_blank', children: S.title }),
        w = (S) =>
          ut(y.Fragment, { children: [S.title, ut($c, { className: 'store-btn-copy', onclick: m(S.title) })] });
      return ut(y.Fragment, {
        children: [
          ut('div', {
            class: 'store-dev-tools',
            style: { backgroundColor: n },
            children: [
              ut('div', {
                className: 'store-dev-tools-icon',
                children: ut(es, { placement: 'left', title: e, children: ut(Kh, { onclick: a }) }),
              }),
              ut('div', { className: 'store-dev-tools-icon', children: ut(Zh, { onclick: h }) }),
            ],
          }),
          ut(mc, {
            className: 'store-drawer-container',
            title: 'Store Dev Tools',
            placement: 'right',
            onClose: s,
            open: r,
            children: [
              ut('div', {
                className: 'store-dev-tools-panel',
                children: ut(Ch, {
                  split: ut(_h, { type: 'vertical' }),
                  children: [
                    ut(Ur.Link, { onclick: c, children: 'DEF' }),
                    ut(Ur.Link, { onclick: f, children: 'GIT' }),
                    ut(Ur.Link, { onclick: p, children: 'Astore' }),
                    ut(Ur.Link, { onclick: h, children: 'Clear Cache' }),
                  ],
                }),
              }),
              ut(pi, {
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
                      eu ? 'rg-de-2-pre' : 'rg-de-2'
                    }/diamond/configlist/configedit?DataId=lazada.shop.front.version.content&Group=ARISE_ES_GLOBAL_SHOP&AppName=global-shop-design-f&tab=edit`,
                  },
                  {
                    type: 'link',
                    label: 'Store Developer Document',
                    title: '店铺前端开发指南',
                    link: 'https://aliyuque.antfin.com/lggiz5/mdsozh/dr75296ggbnvmg15?singleDoc#',
                  },
                ],
                renderItem: (S) =>
                  ut(mO, {
                    children: ut(pi.Item.Meta, { title: S.label, description: S.type === 'link' ? v(S) : w(S) }),
                  }),
              }),
            ],
          }),
        ],
      });
    };
  var ss = {},
    yO = {
      get exports() {
        return ss;
      },
      set exports(e) {
        ss = e;
      },
    };
  (function (e, t) {
    (function (n, r) {
      {
        var i = r();
        e && e.exports && (t = e.exports = i), (t.randomColor = i);
      }
    })(ru, function () {
      var n = null,
        r = {};
      E();
      var i = [],
        a = function ($) {
          if ((($ = $ || {}), $.seed !== void 0 && $.seed !== null && $.seed === parseInt($.seed, 10))) n = $.seed;
          else if (typeof $.seed == 'string') n = z($.seed);
          else {
            if ($.seed !== void 0 && $.seed !== null)
              throw new TypeError('The seed value must be an integer or string');
            n = null;
          }
          var P, R, A;
          if ($.count !== null && $.count !== void 0) {
            for (var B = $.count, F = [], M = 0; M < $.count; M++) i.push(!1);
            for ($.count = null; B > F.length; ) {
              var j = a($);
              n !== null && ($.seed = n), F.push(j);
            }
            return ($.count = B), F;
          }
          return (P = s($)), (R = c(P, $)), (A = f(P, R, $)), p([P, R, A], $);
        };
      function s($) {
        if (i.length > 0) {
          var P = u($.hue),
            R = S(P),
            A = (P[1] - P[0]) / i.length,
            B = parseInt((R - P[0]) / A);
          i[B] === !0 ? (B = (B + 2) % i.length) : (i[B] = !0);
          var F = (P[0] + B * A) % 359,
            M = (P[0] + (B + 1) * A) % 359;
          return (P = [F, M]), (R = S(P)), R < 0 && (R = 360 + R), R;
        } else {
          var P = m($.hue);
          return (R = S(P)), R < 0 && (R = 360 + R), R;
        }
      }
      function c($, P) {
        if (P.hue === 'monochrome') return 0;
        if (P.luminosity === 'random') return S([0, 100]);
        var R = v($),
          A = R[0],
          B = R[1];
        switch (P.luminosity) {
          case 'bright':
            A = 55;
            break;
          case 'dark':
            A = B - 10;
            break;
          case 'light':
            B = 55;
            break;
        }
        return S([A, B]);
      }
      function f($, P, R) {
        var A = h($, P),
          B = 100;
        switch (R.luminosity) {
          case 'dark':
            B = A + 20;
            break;
          case 'light':
            A = (B + A) / 2;
            break;
          case 'random':
            (A = 0), (B = 100);
            break;
        }
        return S([A, B]);
      }
      function p($, P) {
        switch (P.format) {
          case 'hsvArray':
            return $;
          case 'hslArray':
            return D($);
          case 'hsl':
            var R = D($);
            return 'hsl(' + R[0] + ', ' + R[1] + '%, ' + R[2] + '%)';
          case 'hsla':
            var A = D($),
              M = P.alpha || Math.random();
            return 'hsla(' + A[0] + ', ' + A[1] + '%, ' + A[2] + '%, ' + M + ')';
          case 'rgbArray':
            return I($);
          case 'rgb':
            var B = I($);
            return 'rgb(' + B.join(', ') + ')';
          case 'rgba':
            var F = I($),
              M = P.alpha || Math.random();
            return 'rgba(' + F.join(', ') + ', ' + M + ')';
          default:
            return C($);
        }
      }
      function h($, P) {
        for (var R = w($).lowerBounds, A = 0; A < R.length - 1; A++) {
          var B = R[A][0],
            F = R[A][1],
            M = R[A + 1][0],
            j = R[A + 1][1];
          if (P >= B && P <= M) {
            var V = (j - F) / (M - B),
              U = F - V * B;
            return V * P + U;
          }
        }
        return 0;
      }
      function m($) {
        if (typeof parseInt($) == 'number') {
          var P = parseInt($);
          if (P < 360 && P > 0) return [P, P];
        }
        if (typeof $ == 'string') {
          if (r[$]) {
            var R = r[$];
            if (R.hueRange) return R.hueRange;
          } else if ($.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
            var A = N($)[0];
            return [A, A];
          }
        }
        return [0, 360];
      }
      function v($) {
        return w($).saturationRange;
      }
      function w($) {
        $ >= 334 && $ <= 360 && ($ -= 360);
        for (var P in r) {
          var R = r[P];
          if (R.hueRange && $ >= R.hueRange[0] && $ <= R.hueRange[1]) return r[P];
        }
        return 'Color not found';
      }
      function S($) {
        if (n === null) {
          var P = 0.618033988749895,
            R = Math.random();
          return (R += P), (R %= 1), Math.floor($[0] + R * ($[1] + 1 - $[0]));
        } else {
          var A = $[1] || 1,
            B = $[0] || 0;
          n = (n * 9301 + 49297) % 233280;
          var F = n / 233280;
          return Math.floor(B + F * (A - B));
        }
      }
      function C($) {
        var P = I($);
        function R(B) {
          var F = B.toString(16);
          return F.length == 1 ? '0' + F : F;
        }
        var A = '#' + R(P[0]) + R(P[1]) + R(P[2]);
        return A;
      }
      function _($, P, R) {
        var A = R[0][0],
          B = R[R.length - 1][0],
          F = R[R.length - 1][1],
          M = R[0][1];
        r[$] = { hueRange: P, lowerBounds: R, saturationRange: [A, B], brightnessRange: [F, M] };
      }
      function E() {
        _('monochrome', null, [
          [0, 0],
          [100, 0],
        ]),
          _(
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
          _(
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
          _(
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
          _(
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
          _(
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
          _(
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
          _(
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
      function I($) {
        var P = $[0];
        P === 0 && (P = 1), P === 360 && (P = 359), (P = P / 360);
        var R = $[1] / 100,
          A = $[2] / 100,
          B = Math.floor(P * 6),
          F = P * 6 - B,
          M = A * (1 - R),
          j = A * (1 - F * R),
          V = A * (1 - (1 - F) * R),
          U = 256,
          X = 256,
          Z = 256;
        switch (B) {
          case 0:
            (U = A), (X = V), (Z = M);
            break;
          case 1:
            (U = j), (X = A), (Z = M);
            break;
          case 2:
            (U = M), (X = A), (Z = V);
            break;
          case 3:
            (U = M), (X = j), (Z = A);
            break;
          case 4:
            (U = V), (X = M), (Z = A);
            break;
          case 5:
            (U = A), (X = M), (Z = j);
            break;
        }
        var ee = [Math.floor(U * 255), Math.floor(X * 255), Math.floor(Z * 255)];
        return ee;
      }
      function N($) {
        ($ = $.replace(/^#/, '')), ($ = $.length === 3 ? $.replace(/(.)/g, '$1$1') : $);
        var P = parseInt($.substr(0, 2), 16) / 255,
          R = parseInt($.substr(2, 2), 16) / 255,
          A = parseInt($.substr(4, 2), 16) / 255,
          B = Math.max(P, R, A),
          F = B - Math.min(P, R, A),
          M = B ? F / B : 0;
        switch (B) {
          case P:
            return [60 * (((R - A) / F) % 6) || 0, M, B];
          case R:
            return [60 * ((A - P) / F + 2) || 0, M, B];
          case A:
            return [60 * ((P - R) / F + 4) || 0, M, B];
        }
      }
      function D($) {
        var P = $[0],
          R = $[1] / 100,
          A = $[2] / 100,
          B = (2 - R) * A;
        return [P, Math.round(((R * A) / (B < 1 ? B : 2 - B)) * 1e4) / 100, (B / 2) * 100];
      }
      function z($) {
        for (var P = 0, R = 0; R !== $.length && !(P >= Number.MAX_SAFE_INTEGER); R++) P += $.charCodeAt(R);
        return P;
      }
      function u($) {
        if (isNaN($)) {
          if (typeof $ == 'string') {
            if (r[$]) {
              var R = r[$];
              if (R.hueRange) return R.hueRange;
            } else if ($.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
              var A = N($)[0];
              return w(A).hueRange;
            }
          }
        } else {
          var P = parseInt($);
          if (P < 360 && P > 0) return w($).hueRange;
        }
        return [0, 360];
      }
      return a;
    });
  })(yO, ss);
  const gg = ss;
  function bO() {
    const e = Ir.navigator.userAgent,
      n = e.includes('Mobile') || e.includes('Android') ? 'arise-wl-' : 'arise-pc-',
      r = fn('*[data-spm-protocol="i"]'),
      i = gg({ count: 100, format: 'rgba', alpha: 0.7 });
    fn(document).on('scroll', a), a();
    function a() {
      fn(r)
        .children()
        .not('.module-tools-panel')
        .each((s, c) => {
          const f = fn(c).attr('data-spm-module');
          if (!f) return;
          const p = y.render(y.h(gO, { moduleAliasName: n + f, moduleName: f, backgroundColor: i[s] }), c);
          fn(c).height() > 20
            ? (fn(c).addClass('module-tools-panel'), fn(p).insertBefore(fn(c).children().get(0)))
            : fn(c).addClass('module-unuse-panel');
        });
    }
  }
  function SO() {
    const e = Ir.navigator.userAgent,
      n = e.includes('Mobile') || e.includes('Android') ? 'arise-wl-' : 'arise-pc-',
      r = fn('.pi-layout-container'),
      i = gg({ count: 100, format: 'rgba', alpha: 0.7 });
    fn(document).on('scroll', a), a();
    function a() {
      fn(r)
        .find('*[data-modulename]')
        .not('.module-tools-panel')
        .each(async (s, c) => {
          const f = fn(c).attr('data-modulename');
          if (!f) return null;
          fn(c).height() > 20
            ? fn(c).addClass('module-tools-panel').append('<div class="store-dev-tools"></div>')
            : fn(c).addClass('module-unuse-panel'),
            await ug(300),
            fn(c).find('.store-dev-tools').get(0) &&
              y.render(
                y.h(vO, { moduleAliasName: n + f, moduleName: f, backgroundColor: i[s] }),
                fn(c).find('.store-dev-tools').get(0),
              );
        });
    }
  }
  function CO() {
    const e = Ir.navigator.userAgent;
    e.includes('Mobile') || e.includes('Android') ? bO() : SO();
  }
  return (async () => {
    pO(), CO(), Ir.GM_registerMenuCommand('🚀 Open GCP Publish Page', cO);
  })();
})(preact);
