// ==UserScript==
// @name         Arise Store Helper
// @namespace    lazada
// @version      1.0.2
// @author       Alan Yi
// @icon         https://img.alicdn.com/imgextra/i3/O1CN01vGw86X1LoyCBQ9hk2_!!6000000001347-55-tps-501-407.svg
// @downloadURL  https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/arise-store-helper/dist/Arise%20Store%20Helper.user.js
// @updateURL    https://code.alibaba-inc.com/lazada/tampermonkey/raw/master/arise-store-helper/dist/Arise%20Store%20Helper.user.js
// @match        *://*.miravia.es/shop/*
// @match        *://astore.alibaba-inc.com/*
// @require      https://zeptojs.bootcss.com/zepto.min.js
// @require      https://cdn.jsdelivr.net/npm/preact@10.12.1/dist/preact.min.js
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// ==/UserScript==

((e) => {
  const t = document.createElement('style');
  (t.dataset.source = 'vite-plugin-monkey'), (t.innerText = e), document.head.appendChild(t);
})(` .store-dev-tools{position:absolute;z-index:3;top:0;bottom:0;right:0;width:48px;display:flex;flex-direction:column;align-items:center;justify-content:center}.store-dev-tools{position:absolute;z-index:10;top:0;bottom:0;right:0;width:48px;display:flex;flex-direction:column;align-items:center;justify-content:center}.store-dev-tools-icon{display:flex;justify-content:center;align-items:center;width:32px;height:32px;text-align:right;color:#6b5ff2;margin-bottom:16px;background:rgba(255,255,255,.7);font-size:18px;border-radius:50%}.store-dev-tools-panel{background-color:#dfe3e6b3;border-radius:8px;padding:2px 8px}.store-dev-tools-list{margin-top:20px}.store-dev-tools-list .store-btn-copy{color:#4361e4;margin-left:4px}
 `);

var __plugin_monkey_exposed = (function (m) {
  'use strict';
  function as(e) {
    return new Promise(function (t, n) {
      setTimeout(t, e);
    });
  }
  async function Mm(e, t) {
    for (;;) {
      await as(500);
      const n = e();
      n && !n.__used && ((n.__used = !0), t(n));
    }
  }
  var rn = window,
    un = (() => rn.unsafeWindow)(),
    Nm = (() => rn.GM_xmlhttpRequest)();
  function zt(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  }
  function De(e) {
    return (
      (De =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      De(e)
    );
  }
  function Fm(e, t) {
    if (De(e) !== 'object' || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t || 'default');
      if (De(r) !== 'object') return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
  }
  function ls(e) {
    var t = Fm(e, 'string');
    return De(t) === 'symbol' ? t : String(t);
  }
  function ss(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, ls(r.key), r);
    }
  }
  function Dt(e, t, n) {
    return t && ss(e.prototype, t), n && ss(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
  }
  function Bi(e, t) {
    return (
      (Bi = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, o) {
            return (r.__proto__ = o), r;
          }),
      Bi(e, t)
    );
  }
  function Fn(e, t) {
    if (typeof t != 'function' && t !== null) throw new TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      t && Bi(e, t);
  }
  function vo(e) {
    return (
      (vo = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          }),
      vo(e)
    );
  }
  function Am() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
      return !1;
    }
  }
  function bo(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function zm(e, t) {
    if (t && (De(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return bo(e);
  }
  function An(e) {
    var t = Am();
    return function () {
      var r = vo(e),
        o;
      if (t) {
        var i = vo(this).constructor;
        o = Reflect.construct(r, arguments, i);
      } else o = r.apply(this, arguments);
      return zm(this, o);
    };
  }
  var Dm =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : typeof self < 'u'
        ? self
        : {},
    Wi = {},
    jm = {
      get exports() {
        return Wi;
      },
      set exports(e) {
        Wi = e;
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
        for (var r = [], o = 0; o < arguments.length; o++) {
          var i = arguments[o];
          if (i) {
            var a = typeof i;
            if (a === 'string' || a === 'number') r.push(i);
            else if (Array.isArray(i)) {
              if (i.length) {
                var l = n.apply(null, i);
                l && r.push(l);
              }
            } else if (a === 'object') {
              if (i.toString !== Object.prototype.toString && !i.toString.toString().includes('[native code]')) {
                r.push(i.toString());
                continue;
              }
              for (var s in i) t.call(i, s) && i[s] && r.push(s);
            }
          }
        }
        return r.join(' ');
      }
      e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
  })(jm);
  const Q = Wi;
  function Ne() {
    return (
      (Ne = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Ne.apply(this, arguments)
    );
  }
  var Cn,
    et,
    Ui,
    cs,
    Jn = 0,
    us = [],
    yo = [],
    ds = m.options.__b,
    fs = m.options.__r,
    ms = m.options.diffed,
    gs = m.options.__c,
    ps = m.options.unmount;
  function zn(e, t) {
    m.options.__h && m.options.__h(et, e, Jn || t), (Jn = 0);
    var n = et.__H || (et.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({ __V: yo }), n.__[e];
  }
  function oe(e) {
    return (Jn = 1), So(ys, e);
  }
  function So(e, t, n) {
    var r = zn(Cn++, 2);
    if (
      ((r.t = e),
      !r.__c &&
        ((r.__ = [
          n ? n(t) : ys(void 0, t),
          function (i) {
            var a = r.__N ? r.__N[0] : r.__[0],
              l = r.t(a, i);
            a !== l && ((r.__N = [l, r.__[1]]), r.__c.setState({}));
          },
        ]),
        (r.__c = et),
        !et.u))
    ) {
      et.u = !0;
      var o = et.shouldComponentUpdate;
      et.shouldComponentUpdate = function (i, a, l) {
        if (!r.__c.__H) return !0;
        var s = r.__c.__H.__.filter(function (u) {
          return u.__c;
        });
        if (
          s.every(function (u) {
            return !u.__N;
          })
        )
          return !o || o.call(this, i, a, l);
        var c = !1;
        return (
          s.forEach(function (u) {
            if (u.__N) {
              var d = u.__[0];
              (u.__ = u.__N), (u.__N = void 0), d !== u.__[0] && (c = !0);
            }
          }),
          !(!c && r.__c.props === i) && (!o || o.call(this, i, a, l))
        );
      };
    }
    return r.__N || r.__;
  }
  function pe(e, t) {
    var n = zn(Cn++, 3);
    !m.options.__s && Ki(n.__H, t) && ((n.__ = e), (n.i = t), et.__H.__h.push(n));
  }
  function xn(e, t) {
    var n = zn(Cn++, 4);
    !m.options.__s && Ki(n.__H, t) && ((n.__ = e), (n.i = t), et.__h.push(n));
  }
  function L(e) {
    return (
      (Jn = 5),
      le(function () {
        return { current: e };
      }, [])
    );
  }
  function bt(e, t, n) {
    (Jn = 6),
      xn(
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
  function le(e, t) {
    var n = zn(Cn++, 7);
    return Ki(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
  }
  function ut(e, t) {
    return (
      (Jn = 8),
      le(function () {
        return e;
      }, t)
    );
  }
  function he(e) {
    var t = et.context[e.__c],
      n = zn(Cn++, 9);
    return (n.c = e), t ? (n.__ == null && ((n.__ = !0), t.sub(et)), t.props.value) : e.__;
  }
  function hs(e, t) {
    m.options.useDebugValue && m.options.useDebugValue(t ? t(e) : e);
  }
  function Lm(e) {
    var t = zn(Cn++, 10),
      n = oe();
    return (
      (t.__ = e),
      et.componentDidCatch ||
        (et.componentDidCatch = function (r, o) {
          t.__ && t.__(r, o), n[1](r);
        }),
      [
        n[0],
        function () {
          n[1](void 0);
        },
      ]
    );
  }
  function vs() {
    var e = zn(Cn++, 11);
    if (!e.__) {
      for (var t = et.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = 'P' + n[0] + '-' + n[1]++;
    }
    return e.__;
  }
  function Hm() {
    for (var e; (e = us.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(Co), e.__H.__h.forEach(Gi), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), m.options.__e(t, e.__v);
        }
  }
  (m.options.__b = function (e) {
    (et = null), ds && ds(e);
  }),
    (m.options.__r = function (e) {
      fs && fs(e), (Cn = 0);
      var t = (et = e.__c).__H;
      t &&
        (Ui === et
          ? ((t.__h = []),
            (et.__h = []),
            t.__.forEach(function (n) {
              n.__N && (n.__ = n.__N), (n.__V = yo), (n.__N = n.i = void 0);
            }))
          : (t.__h.forEach(Co), t.__h.forEach(Gi), (t.__h = []))),
        (Ui = et);
    }),
    (m.options.diffed = function (e) {
      ms && ms(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((us.push(t) !== 1 && cs === m.options.requestAnimationFrame) ||
            ((cs = m.options.requestAnimationFrame) || km)(Hm)),
        t.__H.__.forEach(function (n) {
          n.i && (n.__H = n.i), n.__V !== yo && (n.__ = n.__V), (n.i = void 0), (n.__V = yo);
        })),
        (Ui = et = null);
    }),
    (m.options.__c = function (e, t) {
      t.some(function (n) {
        try {
          n.__h.forEach(Co),
            (n.__h = n.__h.filter(function (r) {
              return !r.__ || Gi(r);
            }));
        } catch (r) {
          t.some(function (o) {
            o.__h && (o.__h = []);
          }),
            (t = []),
            m.options.__e(r, n.__v);
        }
      }),
        gs && gs(e, t);
    }),
    (m.options.unmount = function (e) {
      ps && ps(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (r) {
          try {
            Co(r);
          } catch (o) {
            t = o;
          }
        }),
        (n.__H = void 0),
        t && m.options.__e(t, n.__v));
    });
  var bs = typeof requestAnimationFrame == 'function';
  function km(e) {
    var t,
      n = function () {
        clearTimeout(r), bs && cancelAnimationFrame(t), setTimeout(e);
      },
      r = setTimeout(n, 100);
    bs && (t = requestAnimationFrame(n));
  }
  function Co(e) {
    var t = et,
      n = e.__c;
    typeof n == 'function' && ((e.__c = void 0), n()), (et = t);
  }
  function Gi(e) {
    var t = et;
    (e.__c = e.__()), (et = t);
  }
  function Ki(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (n, r) {
        return n !== e[r];
      })
    );
  }
  function ys(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Ss(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function Xi(e, t) {
    for (var n in e) if (n !== '__source' && !(n in t)) return !0;
    for (var r in t) if (r !== '__source' && e[r] !== t[r]) return !0;
    return !1;
  }
  function qi(e, t) {
    return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e != e && t != t);
  }
  function xo(e) {
    this.props = e;
  }
  function Cs(e, t) {
    function n(o) {
      var i = this.props.ref,
        a = i == o.ref;
      return !a && i && (i.call ? i(null) : (i.current = null)), t ? !t(this.props, o) || !a : Xi(this.props, o);
    }
    function r(o) {
      return (this.shouldComponentUpdate = n), m.createElement(e, o);
    }
    return (
      (r.displayName = 'Memo(' + (e.displayName || e.name) + ')'), (r.prototype.isReactComponent = !0), (r.__f = !0), r
    );
  }
  ((xo.prototype = new m.Component()).isPureReactComponent = !0),
    (xo.prototype.shouldComponentUpdate = function (e, t) {
      return Xi(this.props, e) || Xi(this.state, t);
    });
  var xs = m.options.__b;
  m.options.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), xs && xs(e);
  };
  var Vm = (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.forward_ref')) || 3911;
  function ye(e) {
    function t(n) {
      var r = Ss({}, n);
      return delete r.ref, e(r, n.ref || null);
    }
    return (
      (t.$$typeof = Vm),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
      t
    );
  }
  var ws = function (e, t) {
      return e == null ? null : m.toChildArray(m.toChildArray(e).map(t));
    },
    Zn = {
      map: ws,
      forEach: ws,
      count: function (e) {
        return e ? m.toChildArray(e).length : 0;
      },
      only: function (e) {
        var t = m.toChildArray(e);
        if (t.length !== 1) throw 'Children.only';
        return t[0];
      },
      toArray: m.toChildArray,
    },
    Bm = m.options.__e;
  m.options.__e = function (e, t, n, r) {
    if (e.then) {
      for (var o, i = t; (i = i.__); )
        if ((o = i.__c) && o.__c) return t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), o.__c(e, t);
    }
    Bm(e, t, n, r);
  };
  var $s = m.options.unmount;
  function Es(e, t, n) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (r) {
            typeof r.__c == 'function' && r.__c();
          }),
          (e.__c.__H = null)),
        (e = Ss({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (r) {
            return Es(r, t, n);
          }))),
      e
    );
  }
  function Os(e, t, n) {
    return (
      e &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (r) {
            return Os(r, t, n);
          })),
        e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), (e.__c.__e = !0), (e.__c.__P = n))),
      e
    );
  }
  function Nr() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function _s(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function Is(e) {
    var t, n, r;
    function o(i) {
      if (
        (t ||
          (t = e()).then(
            function (a) {
              n = a.default || a;
            },
            function (a) {
              r = a;
            },
          ),
        r)
      )
        throw r;
      if (!n) throw t;
      return m.createElement(n, i);
    }
    return (o.displayName = 'Lazy'), (o.__f = !0), o;
  }
  function er() {
    (this.u = null), (this.o = null);
  }
  (m.options.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), $s && $s(e);
  }),
    ((Nr.prototype = new m.Component()).__c = function (e, t) {
      var n = t.__c,
        r = this;
      r.t == null && (r.t = []), r.t.push(n);
      var o = _s(r.__v),
        i = !1,
        a = function () {
          i || ((i = !0), (n.__R = null), o ? o(l) : l());
        };
      n.__R = a;
      var l = function () {
          if (!--r.__u) {
            if (r.state.__a) {
              var c = r.state.__a;
              r.__v.__k[0] = Os(c, c.__c.__P, c.__c.__O);
            }
            var u;
            for (r.setState({ __a: (r.__b = null) }); (u = r.t.pop()); ) u.forceUpdate();
          }
        },
        s = t.__h === !0;
      r.__u++ || s || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(a, a);
    }),
    (Nr.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (Nr.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement('div'),
            r = this.__v.__k[0].__c;
          this.__v.__k[0] = Es(this.__b, n, (r.__O = r.__P));
        }
        this.__b = null;
      }
      var o = t.__a && m.createElement(m.Fragment, null, e.fallback);
      return o && (o.__h = null), [m.createElement(m.Fragment, null, t.__a ? null : e.children), o];
    });
  var Ps = function (e, t, n) {
    if ((++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== 't' || !e.o.size)))
      for (n = e.u; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.u = n = n[2];
      }
  };
  function Wm(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function Um(e) {
    var t = this,
      n = e.i;
    (t.componentWillUnmount = function () {
      m.render(null, t.l), (t.l = null), (t.i = null);
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
              insertBefore: function (r, o) {
                this.childNodes.push(r), t.i.appendChild(r);
              },
              removeChild: function (r) {
                this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
              },
            })),
          m.render(m.createElement(Wm, { context: t.context }, e.__v), t.l))
        : t.l && t.componentWillUnmount();
  }
  function wo(e, t) {
    var n = m.createElement(Um, { __v: e, i: t });
    return (n.containerInfo = t), n;
  }
  ((er.prototype = new m.Component()).__a = function (e) {
    var t = this,
      n = _s(t.__v),
      r = t.o.get(e);
    return (
      r[0]++,
      function (o) {
        var i = function () {
          t.props.revealOrder ? (r.push(o), Ps(t, e, r)) : o();
        };
        n ? n(i) : i();
      }
    );
  }),
    (er.prototype.render = function (e) {
      (this.u = null), (this.o = new Map());
      var t = m.toChildArray(e.children);
      e.revealOrder && e.revealOrder[0] === 'b' && t.reverse();
      for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
      return e.children;
    }),
    (er.prototype.componentDidUpdate = er.prototype.componentDidMount =
      function () {
        var e = this;
        this.o.forEach(function (t, n) {
          Ps(e, n, t);
        });
      });
  var Rs = (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.element')) || 60103,
    Gm =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Km = typeof document < 'u',
    Xm = function (e) {
      return (typeof Symbol < 'u' && typeof Symbol() == 'symbol' ? /fil|che|rad/i : /fil|che|ra/i).test(e);
    };
  function Ts(e, t, n) {
    return t.__k == null && (t.textContent = ''), m.render(e, t), typeof n == 'function' && n(), e ? e.__c : null;
  }
  function Ms(e, t, n) {
    return m.hydrate(e, t), typeof n == 'function' && n(), e ? e.__c : null;
  }
  (m.Component.prototype.isReactComponent = {}),
    ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (e) {
      Object.defineProperty(m.Component.prototype, e, {
        configurable: !0,
        get: function () {
          return this['UNSAFE_' + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
        },
      });
    });
  var Ns = m.options.event;
  function qm() {}
  function Ym() {
    return this.cancelBubble;
  }
  function Qm() {
    return this.defaultPrevented;
  }
  m.options.event = function (e) {
    return (
      Ns && (e = Ns(e)),
      (e.persist = qm),
      (e.isPropagationStopped = Ym),
      (e.isDefaultPrevented = Qm),
      (e.nativeEvent = e)
    );
  };
  var Fs,
    As = {
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    zs = m.options.vnode;
  m.options.vnode = function (e) {
    var t = e.type,
      n = e.props,
      r = n;
    if (typeof t == 'string') {
      var o = t.indexOf('-') === -1;
      for (var i in ((r = {}), n)) {
        var a = n[i];
        (Km && i === 'children' && t === 'noscript') ||
          (i === 'value' && 'defaultValue' in n && a == null) ||
          (i === 'defaultValue' && 'value' in n && n.value == null
            ? (i = 'value')
            : i === 'download' && a === !0
            ? (a = '')
            : /ondoubleclick/i.test(i)
            ? (i = 'ondblclick')
            : /^onchange(textarea|input)/i.test(i + t) && !Xm(n.type)
            ? (i = 'oninput')
            : /^onfocus$/i.test(i)
            ? (i = 'onfocusin')
            : /^onblur$/i.test(i)
            ? (i = 'onfocusout')
            : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)
            ? (i = i.toLowerCase())
            : o && Gm.test(i)
            ? (i = i.replace(/[A-Z0-9]/g, '-$&').toLowerCase())
            : a === null && (a = void 0),
          /^oninput$/i.test(i) && ((i = i.toLowerCase()), r[i] && (i = 'oninputCapture')),
          (r[i] = a));
      }
      t == 'select' &&
        r.multiple &&
        Array.isArray(r.value) &&
        (r.value = m.toChildArray(n.children).forEach(function (l) {
          l.props.selected = r.value.indexOf(l.props.value) != -1;
        })),
        t == 'select' &&
          r.defaultValue != null &&
          (r.value = m.toChildArray(n.children).forEach(function (l) {
            l.props.selected = r.multiple
              ? r.defaultValue.indexOf(l.props.value) != -1
              : r.defaultValue == l.props.value;
          })),
        (e.props = r),
        n.class != n.className &&
          ((As.enumerable = 'className' in n),
          n.className != null && (r.class = n.className),
          Object.defineProperty(r, 'className', As));
    }
    (e.$$typeof = Rs), zs && zs(e);
  };
  var Ds = m.options.__r;
  m.options.__r = function (e) {
    Ds && Ds(e), (Fs = e.__c);
  };
  var js = {
      ReactCurrentDispatcher: {
        current: {
          readContext: function (e) {
            return Fs.__n[e.__c].props.value;
          },
        },
      },
    },
    Jm = '17.0.2';
  function Ls(e) {
    return m.createElement.bind(null, e);
  }
  function kt(e) {
    return !!e && e.$$typeof === Rs;
  }
  function gt(e) {
    return kt(e) ? m.cloneElement.apply(null, arguments) : e;
  }
  function Hs(e) {
    return !!e.__k && (m.render(null, e), !0);
  }
  function ks(e) {
    return (e && (e.base || (e.nodeType === 1 && e))) || null;
  }
  var Vs = function (e, t) {
      return e(t);
    },
    Bs = function (e, t) {
      return e(t);
    },
    Ws = m.Fragment;
  function Yi(e) {
    e();
  }
  function Us(e) {
    return e;
  }
  function Gs() {
    return [!1, Yi];
  }
  var Ks = xn;
  function Xs(e, t) {
    var n = t(),
      r = oe({ h: { __: n, v: t } }),
      o = r[0].h,
      i = r[1];
    return (
      xn(
        function () {
          (o.__ = n), (o.v = t), qi(o.__, t()) || i({ h: o });
        },
        [e, n, t],
      ),
      pe(
        function () {
          return (
            qi(o.__, o.v()) || i({ h: o }),
            e(function () {
              qi(o.__, o.v()) || i({ h: o });
            })
          );
        },
        [e],
      ),
      n
    );
  }
  var ie = {
    useState: oe,
    useId: vs,
    useReducer: So,
    useEffect: pe,
    useLayoutEffect: xn,
    useInsertionEffect: Ks,
    useTransition: Gs,
    useDeferredValue: Us,
    useSyncExternalStore: Xs,
    startTransition: Yi,
    useRef: L,
    useImperativeHandle: bt,
    useMemo: le,
    useCallback: ut,
    useContext: he,
    useDebugValue: hs,
    version: '17.0.2',
    Children: Zn,
    render: Ts,
    hydrate: Ms,
    unmountComponentAtNode: Hs,
    createPortal: wo,
    createElement: m.createElement,
    createContext: m.createContext,
    createFactory: Ls,
    cloneElement: gt,
    createRef: m.createRef,
    Fragment: m.Fragment,
    isValidElement: kt,
    findDOMNode: ks,
    Component: m.Component,
    PureComponent: xo,
    memo: Cs,
    forwardRef: ye,
    flushSync: Bs,
    unstable_batchedUpdates: Vs,
    StrictMode: Ws,
    Suspense: Nr,
    SuspenseList: er,
    lazy: Is,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: js,
  };
  const Qi = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Children: Zn,
        Component: m.Component,
        Fragment: m.Fragment,
        PureComponent: xo,
        StrictMode: Ws,
        Suspense: Nr,
        SuspenseList: er,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: js,
        cloneElement: gt,
        createContext: m.createContext,
        createElement: m.createElement,
        createFactory: Ls,
        createPortal: wo,
        createRef: m.createRef,
        default: ie,
        findDOMNode: ks,
        flushSync: Bs,
        forwardRef: ye,
        hydrate: Ms,
        isValidElement: kt,
        lazy: Is,
        memo: Cs,
        render: Ts,
        startTransition: Yi,
        unmountComponentAtNode: Hs,
        unstable_batchedUpdates: Vs,
        useCallback: ut,
        useContext: he,
        useDebugValue: hs,
        useDeferredValue: Us,
        useEffect: pe,
        useErrorBoundary: Lm,
        useId: vs,
        useImperativeHandle: bt,
        useInsertionEffect: Ks,
        useLayoutEffect: xn,
        useMemo: le,
        useReducer: So,
        useRef: L,
        useState: oe,
        useSyncExternalStore: Xs,
        useTransition: Gs,
        version: Jm,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
  var $o = {},
    Zm = {
      get exports() {
        return $o;
      },
      set exports(e) {
        $o = e;
      },
    },
    Ue = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var wt = typeof Symbol == 'function' && Symbol.for,
    Ji = wt ? Symbol.for('react.element') : 60103,
    Zi = wt ? Symbol.for('react.portal') : 60106,
    Eo = wt ? Symbol.for('react.fragment') : 60107,
    Oo = wt ? Symbol.for('react.strict_mode') : 60108,
    _o = wt ? Symbol.for('react.profiler') : 60114,
    Io = wt ? Symbol.for('react.provider') : 60109,
    Po = wt ? Symbol.for('react.context') : 60110,
    ea = wt ? Symbol.for('react.async_mode') : 60111,
    Ro = wt ? Symbol.for('react.concurrent_mode') : 60111,
    To = wt ? Symbol.for('react.forward_ref') : 60112,
    Mo = wt ? Symbol.for('react.suspense') : 60113,
    eg = wt ? Symbol.for('react.suspense_list') : 60120,
    No = wt ? Symbol.for('react.memo') : 60115,
    Fo = wt ? Symbol.for('react.lazy') : 60116,
    tg = wt ? Symbol.for('react.block') : 60121,
    ng = wt ? Symbol.for('react.fundamental') : 60117,
    rg = wt ? Symbol.for('react.responder') : 60118,
    og = wt ? Symbol.for('react.scope') : 60119;
  function Vt(e) {
    if (typeof e == 'object' && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Ji:
          switch (((e = e.type), e)) {
            case ea:
            case Ro:
            case Eo:
            case _o:
            case Oo:
            case Mo:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Po:
                case To:
                case Fo:
                case No:
                case Io:
                  return e;
                default:
                  return t;
              }
          }
        case Zi:
          return t;
      }
    }
  }
  function qs(e) {
    return Vt(e) === Ro;
  }
  (Ue.AsyncMode = ea),
    (Ue.ConcurrentMode = Ro),
    (Ue.ContextConsumer = Po),
    (Ue.ContextProvider = Io),
    (Ue.Element = Ji),
    (Ue.ForwardRef = To),
    (Ue.Fragment = Eo),
    (Ue.Lazy = Fo),
    (Ue.Memo = No),
    (Ue.Portal = Zi),
    (Ue.Profiler = _o),
    (Ue.StrictMode = Oo),
    (Ue.Suspense = Mo),
    (Ue.isAsyncMode = function (e) {
      return qs(e) || Vt(e) === ea;
    }),
    (Ue.isConcurrentMode = qs),
    (Ue.isContextConsumer = function (e) {
      return Vt(e) === Po;
    }),
    (Ue.isContextProvider = function (e) {
      return Vt(e) === Io;
    }),
    (Ue.isElement = function (e) {
      return typeof e == 'object' && e !== null && e.$$typeof === Ji;
    }),
    (Ue.isForwardRef = function (e) {
      return Vt(e) === To;
    }),
    (Ue.isFragment = function (e) {
      return Vt(e) === Eo;
    }),
    (Ue.isLazy = function (e) {
      return Vt(e) === Fo;
    }),
    (Ue.isMemo = function (e) {
      return Vt(e) === No;
    }),
    (Ue.isPortal = function (e) {
      return Vt(e) === Zi;
    }),
    (Ue.isProfiler = function (e) {
      return Vt(e) === _o;
    }),
    (Ue.isStrictMode = function (e) {
      return Vt(e) === Oo;
    }),
    (Ue.isSuspense = function (e) {
      return Vt(e) === Mo;
    }),
    (Ue.isValidElementType = function (e) {
      return (
        typeof e == 'string' ||
        typeof e == 'function' ||
        e === Eo ||
        e === Ro ||
        e === _o ||
        e === Oo ||
        e === Mo ||
        e === eg ||
        (typeof e == 'object' &&
          e !== null &&
          (e.$$typeof === Fo ||
            e.$$typeof === No ||
            e.$$typeof === Io ||
            e.$$typeof === Po ||
            e.$$typeof === To ||
            e.$$typeof === ng ||
            e.$$typeof === rg ||
            e.$$typeof === og ||
            e.$$typeof === tg))
      );
    }),
    (Ue.typeOf = Vt),
    (function (e) {
      e.exports = Ue;
    })(Zm);
  function mn(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [];
    return (
      ie.Children.forEach(e, function (r) {
        (r == null && !t.keepEmpty) ||
          (Array.isArray(r)
            ? (n = n.concat(mn(r)))
            : $o.isFragment(r) && r.props
            ? (n = n.concat(mn(r.props.children, t)))
            : n.push(r));
      }),
      n
    );
  }
  var Ys = {};
  function ig(e, t) {}
  function ag(e, t, n) {
    !t && !Ys[n] && (e(!1, n), (Ys[n] = !0));
  }
  function Qt(e, t) {
    ag(ig, e, t);
  }
  function ee(e, t, n) {
    return (
      (t = ls(t)),
      t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
      e
    );
  }
  function Qs(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (o) {
          return Object.getOwnPropertyDescriptor(e, o).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function F(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Qs(Object(n), !0).forEach(function (r) {
            ee(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qs(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function Ao(e, t, n) {
    var r = L({});
    return (
      (!('value' in r.current) || n(r.current.condition, t)) && ((r.current.value = e()), (r.current.condition = t)),
      r.current.value
    );
  }
  function ta(e, t) {
    typeof e == 'function' ? e(t) : De(e) === 'object' && e && 'current' in e && (e.current = t);
  }
  function tr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var r = t.filter(function (o) {
      return o;
    });
    return r.length <= 1
      ? r[0]
      : function (o) {
          t.forEach(function (i) {
            ta(i, o);
          });
        };
  }
  function na() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return Ao(
      function () {
        return tr.apply(void 0, t);
      },
      t,
      function (r, o) {
        return (
          r.length === o.length &&
          r.every(function (i, a) {
            return i === o[a];
          })
        );
      },
    );
  }
  function zo(e) {
    var t,
      n,
      r = $o.isMemo(e) ? e.type.type : e.type;
    return !(
      (typeof r == 'function' && !((t = r.prototype) !== null && t !== void 0 && t.render)) ||
      (typeof e == 'function' && !((n = e.prototype) !== null && n !== void 0 && n.render))
    );
  }
  function Do(e) {
    return e instanceof HTMLElement ? e : e instanceof ie.Component ? ie.findDOMNode(e) : null;
  }
  var Js = (function () {
      if (typeof Map < 'u') return Map;
      function e(t, n) {
        var r = -1;
        return (
          t.some(function (o, i) {
            return o[0] === n ? ((r = i), !0) : !1;
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
              o = this.__entries__[r];
            return o && o[1];
          }),
          (t.prototype.set = function (n, r) {
            var o = e(this.__entries__, n);
            ~o ? (this.__entries__[o][1] = r) : this.__entries__.push([n, r]);
          }),
          (t.prototype.delete = function (n) {
            var r = this.__entries__,
              o = e(r, n);
            ~o && r.splice(o, 1);
          }),
          (t.prototype.has = function (n) {
            return !!~e(this.__entries__, n);
          }),
          (t.prototype.clear = function () {
            this.__entries__.splice(0);
          }),
          (t.prototype.forEach = function (n, r) {
            r === void 0 && (r = null);
            for (var o = 0, i = this.__entries__; o < i.length; o++) {
              var a = i[o];
              n.call(r, a[1], a[0]);
            }
          }),
          t
        );
      })();
    })(),
    ra = typeof window < 'u' && typeof document < 'u' && window.document === document,
    jo = (function () {
      return typeof global < 'u' && global.Math === Math
        ? global
        : typeof self < 'u' && self.Math === Math
        ? self
        : typeof window < 'u' && window.Math === Math
        ? window
        : Function('return this')();
    })(),
    lg = (function () {
      return typeof requestAnimationFrame == 'function'
        ? requestAnimationFrame.bind(jo)
        : function (e) {
            return setTimeout(function () {
              return e(Date.now());
            }, 1e3 / 60);
          };
    })(),
    sg = 2;
  function cg(e, t) {
    var n = !1,
      r = !1,
      o = 0;
    function i() {
      n && ((n = !1), e()), r && l();
    }
    function a() {
      lg(i);
    }
    function l() {
      var s = Date.now();
      if (n) {
        if (s - o < sg) return;
        r = !0;
      } else (n = !0), (r = !1), setTimeout(a, t);
      o = s;
    }
    return l;
  }
  var ug = 20,
    dg = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
    fg = typeof MutationObserver < 'u',
    mg = (function () {
      function e() {
        (this.connected_ = !1),
          (this.mutationEventsAdded_ = !1),
          (this.mutationsObserver_ = null),
          (this.observers_ = []),
          (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
          (this.refresh = cg(this.refresh.bind(this), ug));
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
          !ra ||
            this.connected_ ||
            (document.addEventListener('transitionend', this.onTransitionEnd_),
            window.addEventListener('resize', this.refresh),
            fg
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
          !ra ||
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
            o = dg.some(function (i) {
              return !!~r.indexOf(i);
            });
          o && this.refresh();
        }),
        (e.getInstance = function () {
          return this.instance_ || (this.instance_ = new e()), this.instance_;
        }),
        (e.instance_ = null),
        e
      );
    })(),
    Zs = function (e, t) {
      for (var n = 0, r = Object.keys(t); n < r.length; n++) {
        var o = r[n];
        Object.defineProperty(e, o, { value: t[o], enumerable: !1, writable: !1, configurable: !0 });
      }
      return e;
    },
    nr = function (e) {
      var t = e && e.ownerDocument && e.ownerDocument.defaultView;
      return t || jo;
    },
    ec = Ho(0, 0, 0, 0);
  function Lo(e) {
    return parseFloat(e) || 0;
  }
  function tc(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function (r, o) {
      var i = e['border-' + o + '-width'];
      return r + Lo(i);
    }, 0);
  }
  function gg(e) {
    for (var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, o = t; r < o.length; r++) {
      var i = o[r],
        a = e['padding-' + i];
      n[i] = Lo(a);
    }
    return n;
  }
  function pg(e) {
    var t = e.getBBox();
    return Ho(0, 0, t.width, t.height);
  }
  function hg(e) {
    var t = e.clientWidth,
      n = e.clientHeight;
    if (!t && !n) return ec;
    var r = nr(e).getComputedStyle(e),
      o = gg(r),
      i = o.left + o.right,
      a = o.top + o.bottom,
      l = Lo(r.width),
      s = Lo(r.height);
    if (
      (r.boxSizing === 'border-box' &&
        (Math.round(l + i) !== t && (l -= tc(r, 'left', 'right') + i),
        Math.round(s + a) !== n && (s -= tc(r, 'top', 'bottom') + a)),
      !bg(e))
    ) {
      var c = Math.round(l + i) - t,
        u = Math.round(s + a) - n;
      Math.abs(c) !== 1 && (l -= c), Math.abs(u) !== 1 && (s -= u);
    }
    return Ho(o.left, o.top, l, s);
  }
  var vg = (function () {
    return typeof SVGGraphicsElement < 'u'
      ? function (e) {
          return e instanceof nr(e).SVGGraphicsElement;
        }
      : function (e) {
          return e instanceof nr(e).SVGElement && typeof e.getBBox == 'function';
        };
  })();
  function bg(e) {
    return e === nr(e).document.documentElement;
  }
  function yg(e) {
    return ra ? (vg(e) ? pg(e) : hg(e)) : ec;
  }
  function Sg(e) {
    var t = e.x,
      n = e.y,
      r = e.width,
      o = e.height,
      i = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
      a = Object.create(i.prototype);
    return Zs(a, { x: t, y: n, width: r, height: o, top: n, right: t + r, bottom: o + n, left: t }), a;
  }
  function Ho(e, t, n, r) {
    return { x: e, y: t, width: n, height: r };
  }
  var Cg = (function () {
      function e(t) {
        (this.broadcastWidth = 0), (this.broadcastHeight = 0), (this.contentRect_ = Ho(0, 0, 0, 0)), (this.target = t);
      }
      return (
        (e.prototype.isActive = function () {
          var t = yg(this.target);
          return (this.contentRect_ = t), t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
        }),
        (e.prototype.broadcastRect = function () {
          var t = this.contentRect_;
          return (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t;
        }),
        e
      );
    })(),
    xg = (function () {
      function e(t, n) {
        var r = Sg(n);
        Zs(this, { target: t, contentRect: r });
      }
      return e;
    })(),
    wg = (function () {
      function e(t, n, r) {
        if (((this.activeObservations_ = []), (this.observations_ = new Js()), typeof t != 'function'))
          throw new TypeError('The callback provided as parameter 1 is not a function.');
        (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
      }
      return (
        (e.prototype.observe = function (t) {
          if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
          if (!(typeof Element > 'u' || !(Element instanceof Object))) {
            if (!(t instanceof nr(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var n = this.observations_;
            n.has(t) || (n.set(t, new Cg(t)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }),
        (e.prototype.unobserve = function (t) {
          if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
          if (!(typeof Element > 'u' || !(Element instanceof Object))) {
            if (!(t instanceof nr(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
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
                return new xg(r.target, r.broadcastRect());
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
    nc = typeof WeakMap < 'u' ? new WeakMap() : new Js(),
    rc = (function () {
      function e(t) {
        if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        var n = mg.getInstance(),
          r = new wg(t, n, this);
        nc.set(this, r);
      }
      return e;
    })();
  ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    rc.prototype[e] = function () {
      var t;
      return (t = nc.get(this))[e].apply(t, arguments);
    };
  });
  var $g = (function () {
      return typeof jo.ResizeObserver < 'u' ? jo.ResizeObserver : rc;
    })(),
    wn = new Map();
  function Eg(e) {
    e.forEach(function (t) {
      var n,
        r = t.target;
      (n = wn.get(r)) === null ||
        n === void 0 ||
        n.forEach(function (o) {
          return o(r);
        });
    });
  }
  var oc = new $g(Eg);
  function Og(e, t) {
    wn.has(e) || (wn.set(e, new Set()), oc.observe(e)), wn.get(e).add(t);
  }
  function _g(e, t) {
    wn.has(e) && (wn.get(e).delete(t), wn.get(e).size || (oc.unobserve(e), wn.delete(e)));
  }
  var Ig = (function (e) {
      Fn(n, e);
      var t = An(n);
      function n() {
        return zt(this, n), t.apply(this, arguments);
      }
      return (
        Dt(n, [
          {
            key: 'render',
            value: function () {
              return this.props.children;
            },
          },
        ]),
        n
      );
    })(m.Component),
    oa = m.createContext(null);
  function Pg(e) {
    var t = e.children,
      n = e.onBatchResize,
      r = L(0),
      o = L([]),
      i = he(oa),
      a = ut(
        function (l, s, c) {
          r.current += 1;
          var u = r.current;
          o.current.push({ size: l, element: s, data: c }),
            Promise.resolve().then(function () {
              u === r.current && (n == null || n(o.current), (o.current = []));
            }),
            i == null || i(l, s, c);
        },
        [n, i],
      );
    return m.createElement(oa.Provider, { value: a }, t);
  }
  function Rg(e, t) {
    var n = e.children,
      r = e.disabled,
      o = L(null),
      i = L(null),
      a = he(oa),
      l = typeof n == 'function',
      s = l ? n(o) : n,
      c = L({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
      u = !l && kt(s) && zo(s),
      d = u ? s.ref : null,
      f = le(
        function () {
          return tr(d, o);
        },
        [d, o],
      ),
      g = function () {
        return Do(o.current) || Do(i.current);
      };
    bt(t, function () {
      return g();
    });
    var h = L(e);
    h.current = e;
    var p = ut(function (y) {
      var b = h.current,
        S = b.onResize,
        x = b.data,
        _ = y.getBoundingClientRect(),
        R = _.width,
        O = _.height,
        v = y.offsetWidth,
        C = y.offsetHeight,
        $ = Math.floor(R),
        E = Math.floor(O);
      if (
        c.current.width !== $ ||
        c.current.height !== E ||
        c.current.offsetWidth !== v ||
        c.current.offsetHeight !== C
      ) {
        var T = { width: $, height: E, offsetWidth: v, offsetHeight: C };
        c.current = T;
        var P = v === Math.round(R) ? R : v,
          w = C === Math.round(O) ? O : C,
          I = F(F({}, T), {}, { offsetWidth: P, offsetHeight: w });
        a == null || a(I, y, x),
          S &&
            Promise.resolve().then(function () {
              S(I, y);
            });
      }
    }, []);
    return (
      pe(
        function () {
          var y = g();
          return (
            y && !r && Og(y, p),
            function () {
              return _g(y, p);
            }
          );
        },
        [o.current, r],
      ),
      m.createElement(Ig, { ref: i }, u ? gt(s, { ref: f }) : s)
    );
  }
  var Tg = ye(Rg),
    Mg = 'rc-observer-key';
  function Ng(e, t) {
    var n = e.children,
      r = typeof n == 'function' ? [n] : mn(n);
    return r.map(function (o, i) {
      var a = (o == null ? void 0 : o.key) || ''.concat(Mg, '-').concat(i);
      return m.createElement(Tg, Ne({}, e, { key: a, ref: i === 0 ? t : void 0 }), o);
    });
  }
  var $n = ye(Ng);
  $n.Collection = Pg;
  function Fr(e, t) {
    var n = F({}, e);
    return (
      Array.isArray(t) &&
        t.forEach(function (r) {
          delete n[r];
        }),
      n
    );
  }
  function ia(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function Fg(e) {
    if (Array.isArray(e)) return ia(e);
  }
  function ic(e) {
    if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
  }
  function aa(e, t) {
    if (e) {
      if (typeof e == 'string') return ia(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
        return Array.from(e);
      if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ia(e, t);
    }
  }
  function Ag() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function fe(e) {
    return Fg(e) || ic(e) || aa(e) || Ag();
  }
  function la(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
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
    switch (o) {
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
  function zg(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      o,
      i;
    for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
  }
  function rt(e, t) {
    if (e == null) return {};
    var n = zg(e, t),
      r,
      o;
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (o = 0; o < i.length; o++)
        (r = i[o]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }
  function Dg(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      r = new Set();
    function o(i, a) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
        s = r.has(i);
      if ((Qt(!s, 'Warning: There may be circular references'), s)) return !1;
      if (i === a) return !0;
      if (n && l > 1) return !1;
      r.add(i);
      var c = l + 1;
      if (Array.isArray(i)) {
        if (!Array.isArray(a) || i.length !== a.length) return !1;
        for (var u = 0; u < i.length; u++) if (!o(i[u], a[u], c)) return !1;
        return !0;
      }
      if (i && a && De(i) === 'object' && De(a) === 'object') {
        var d = Object.keys(i);
        return d.length !== Object.keys(a).length
          ? !1
          : d.every(function (f) {
              return o(i[f], a[f], c);
            });
      }
      return !1;
    }
    return o(e, t);
  }
  var jg = (function () {
      function e() {
        zt(this, e), ee(this, 'cache', new Map());
      }
      return (
        Dt(e, [
          {
            key: 'get',
            value: function (n) {
              return this.cache.get(n.join('%')) || null;
            },
          },
          {
            key: 'update',
            value: function (n, r) {
              var o = n.join('%'),
                i = this.cache.get(o),
                a = r(i);
              a === null ? this.cache.delete(o) : this.cache.set(o, a);
            },
          },
        ]),
        e
      );
    })(),
    sa = 'data-token-hash',
    Dn = 'data-css-hash',
    Ar = '__cssinjs_instance__',
    ko = Math.random().toString(12).slice(2);
  function Lg() {
    if (typeof document < 'u' && document.head && document.body) {
      var e = document.body.querySelectorAll('style['.concat(Dn, ']')) || [],
        t = document.head.firstChild;
      Array.from(e).forEach(function (r) {
        (r[Ar] = r[Ar] || ko), document.head.insertBefore(r, t);
      });
      var n = {};
      Array.from(document.querySelectorAll('style['.concat(Dn, ']'))).forEach(function (r) {
        var o = r.getAttribute(Dn);
        if (n[o]) {
          if (r[Ar] === ko) {
            var i;
            (i = r.parentNode) === null || i === void 0 || i.removeChild(r);
          }
        } else n[o] = !0;
      });
    }
    return new jg();
  }
  var ac = m.createContext({ hashPriority: 'low', cache: Lg(), defaultCache: !0 });
  function lc(e) {
    if (Array.isArray(e)) return e;
  }
  function Hg(e, t) {
    var n = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (n != null) {
      var r,
        o,
        i,
        a,
        l = [],
        s = !0,
        c = !1;
      try {
        if (((i = (n = n.call(e)).next), t === 0)) {
          if (Object(n) !== n) return;
          s = !1;
        } else for (; !(s = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); s = !0);
      } catch (u) {
        (c = !0), (o = u);
      } finally {
        try {
          if (!s && n.return != null && ((a = n.return()), Object(a) !== a)) return;
        } finally {
          if (c) throw o;
        }
      }
      return l;
    }
  }
  function sc() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function V(e, t) {
    return lc(e) || Hg(e, t) || aa(e, t) || sc();
  }
  function cc(e, t, n, r) {
    var o = he(ac),
      i = o.cache,
      a = [e].concat(fe(t));
    return (
      le(
        function () {
          i.update(a, function (l) {
            var s = l || [],
              c = V(s, 2),
              u = c[0],
              d = u === void 0 ? 0 : u,
              f = c[1],
              g = f,
              h = g || n();
            return [d + 1, h];
          });
        },
        [a.join('_')],
      ),
      pe(function () {
        return function () {
          i.update(a, function (l) {
            var s = l || [],
              c = V(s, 2),
              u = c[0],
              d = u === void 0 ? 0 : u,
              f = c[1],
              g = d - 1;
            return g === 0 ? (r == null || r(f, !1), null) : [d - 1, f];
          });
        };
      }, a),
      i.get(a)[1]
    );
  }
  function Tt() {
    return !!(typeof window < 'u' && window.document && window.document.createElement);
  }
  function kg(e, t) {
    if (!e) return !1;
    if (e.contains) return e.contains(t);
    for (var n = t; n; ) {
      if (n === e) return !0;
      n = n.parentNode;
    }
    return !1;
  }
  var uc = 'data-rc-order',
    Vg = 'rc-util-key',
    ca = new Map();
  function dc() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.mark;
    return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : Vg;
  }
  function Vo(e) {
    if (e.attachTo) return e.attachTo;
    var t = document.querySelector('head');
    return t || document.body;
  }
  function Bg(e) {
    return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append';
  }
  function fc(e) {
    return Array.from((ca.get(e) || e).children).filter(function (t) {
      return t.tagName === 'STYLE';
    });
  }
  function mc(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Tt()) return null;
    var n = t.csp,
      r = t.prepend,
      o = document.createElement('style');
    o.setAttribute(uc, Bg(r)), n != null && n.nonce && (o.nonce = n == null ? void 0 : n.nonce), (o.innerHTML = e);
    var i = Vo(t),
      a = i.firstChild;
    if (r) {
      if (r === 'queue') {
        var l = fc(i).filter(function (s) {
          return ['prepend', 'prependQueue'].includes(s.getAttribute(uc));
        });
        if (l.length) return i.insertBefore(o, l[l.length - 1].nextSibling), o;
      }
      i.insertBefore(o, a);
    } else i.appendChild(o);
    return o;
  }
  function gc(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = Vo(t);
    return fc(n).find(function (r) {
      return r.getAttribute(dc(t)) === e;
    });
  }
  function Bo(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = gc(e, t);
    if (n) {
      var r = Vo(t);
      r.removeChild(n);
    }
  }
  function Wg(e, t) {
    var n = ca.get(e);
    if (!n || !kg(document, n)) {
      var r = mc('', t),
        o = r.parentNode;
      ca.set(e, o), e.removeChild(r);
    }
  }
  function rr(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      r = Vo(n);
    Wg(r, n);
    var o = gc(t, n);
    if (o) {
      var i, a;
      if (
        (i = n.csp) !== null &&
        i !== void 0 &&
        i.nonce &&
        o.nonce !== ((a = n.csp) === null || a === void 0 ? void 0 : a.nonce)
      ) {
        var l;
        o.nonce = (l = n.csp) === null || l === void 0 ? void 0 : l.nonce;
      }
      return o.innerHTML !== e && (o.innerHTML = e), o;
    }
    var s = mc(e, n);
    return s.setAttribute(dc(n), t), s;
  }
  function Wo(e) {
    var t = '';
    return (
      Object.keys(e).forEach(function (n) {
        var r = e[n];
        (t += n), r && De(r) === 'object' ? (t += Wo(r)) : (t += r);
      }),
      t
    );
  }
  function Ug(e, t) {
    return la(''.concat(t, '_').concat(Wo(e)));
  }
  var zr = 'layer-'.concat(Date.now(), '-').concat(Math.random()).replace(/\./g, ''),
    pc = '903px';
  function Gg(e, t) {
    if (Tt()) {
      var n;
      rr(e, zr);
      var r = document.createElement('div');
      (r.style.position = 'fixed'),
        (r.style.left = '0'),
        (r.style.top = '0'),
        t == null || t(r),
        document.body.appendChild(r);
      var o = getComputedStyle(r).width === pc;
      return (n = r.parentNode) === null || n === void 0 || n.removeChild(r), Bo(zr), o;
    }
    return !1;
  }
  var ua = void 0;
  function Kg() {
    return (
      ua === void 0 &&
        (ua = Gg('@layer '.concat(zr, ' { .').concat(zr, ' { width: ').concat(pc, '!important; } }'), function (e) {
          e.className = zr;
        })),
      ua
    );
  }
  var Xg = {},
    qg = 'css',
    jn = new Map();
  function Yg(e) {
    jn.set(e, (jn.get(e) || 0) + 1);
  }
  function Qg(e) {
    if (typeof document < 'u') {
      var t = document.querySelectorAll('style['.concat(sa, '="').concat(e, '"]'));
      t.forEach(function (n) {
        if (n[Ar] === ko) {
          var r;
          (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
        }
      });
    }
  }
  function Jg(e) {
    jn.set(e, (jn.get(e) || 0) - 1);
    var t = Array.from(jn.keys()),
      n = t.filter(function (r) {
        var o = jn.get(r) || 0;
        return o <= 0;
      });
    n.length < t.length &&
      n.forEach(function (r) {
        Qg(r), jn.delete(r);
      });
  }
  function Zg(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      r = n.salt,
      o = r === void 0 ? '' : r,
      i = n.override,
      a = i === void 0 ? Xg : i,
      l = n.formatToken,
      s = le(
        function () {
          return Object.assign.apply(Object, [{}].concat(fe(t)));
        },
        [t],
      ),
      c = le(
        function () {
          return Wo(s);
        },
        [s],
      ),
      u = le(
        function () {
          return Wo(a);
        },
        [a],
      ),
      d = cc(
        'token',
        [o, e.id, c, u],
        function () {
          var f = e.getDerivativeToken(s),
            g = F(F({}, f), a);
          l && (g = l(g));
          var h = Ug(g, o);
          (g._tokenKey = h), Yg(h);
          var p = ''.concat(qg, '-').concat(la(h));
          return (g._hashId = p), [g, p];
        },
        function (f) {
          Jg(f[0]._tokenKey);
        },
      );
    return d;
  }
  var ep = {
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
    hc = 'comm',
    vc = 'rule',
    bc = 'decl',
    tp = '@import',
    np = '@keyframes',
    rp = Math.abs,
    da = String.fromCharCode;
  function yc(e) {
    return e.trim();
  }
  function fa(e, t, n) {
    return e.replace(t, n);
  }
  function op(e, t) {
    return e.indexOf(t);
  }
  function Dr(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function jr(e, t, n) {
    return e.slice(t, n);
  }
  function En(e) {
    return e.length;
  }
  function Sc(e) {
    return e.length;
  }
  function Uo(e, t) {
    return t.push(e), e;
  }
  var Go = 1,
    or = 1,
    Cc = 0,
    Jt = 0,
    pt = 0,
    ir = '';
  function ma(e, t, n, r, o, i, a) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: i,
      line: Go,
      column: or,
      length: a,
      return: '',
    };
  }
  function ip() {
    return pt;
  }
  function ap() {
    return (pt = Jt > 0 ? Dr(ir, --Jt) : 0), or--, pt === 10 && ((or = 1), Go--), pt;
  }
  function on() {
    return (pt = Jt < Cc ? Dr(ir, Jt++) : 0), or++, pt === 10 && ((or = 1), Go++), pt;
  }
  function Ln() {
    return Dr(ir, Jt);
  }
  function Ko() {
    return Jt;
  }
  function Xo(e, t) {
    return jr(ir, e, t);
  }
  function ga(e) {
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
  function lp(e) {
    return (Go = or = 1), (Cc = En((ir = e))), (Jt = 0), [];
  }
  function sp(e) {
    return (ir = ''), e;
  }
  function pa(e) {
    return yc(Xo(Jt - 1, ha(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function cp(e) {
    for (; (pt = Ln()) && pt < 33; ) on();
    return ga(e) > 2 || ga(pt) > 3 ? '' : ' ';
  }
  function up(e, t) {
    for (; --t && on() && !(pt < 48 || pt > 102 || (pt > 57 && pt < 65) || (pt > 70 && pt < 97)); );
    return Xo(e, Ko() + (t < 6 && Ln() == 32 && on() == 32));
  }
  function ha(e) {
    for (; on(); )
      switch (pt) {
        case e:
          return Jt;
        case 34:
        case 39:
          e !== 34 && e !== 39 && ha(pt);
          break;
        case 40:
          e === 41 && ha(e);
          break;
        case 92:
          on();
          break;
      }
    return Jt;
  }
  function dp(e, t) {
    for (; on() && e + pt !== 57; ) if (e + pt === 84 && Ln() === 47) break;
    return '/*' + Xo(t, Jt - 1) + '*' + da(e === 47 ? e : on());
  }
  function fp(e) {
    for (; !ga(Ln()); ) on();
    return Xo(e, Jt);
  }
  function mp(e) {
    return sp(qo('', null, null, null, [''], (e = lp(e)), 0, [0], e));
  }
  function qo(e, t, n, r, o, i, a, l, s) {
    for (
      var c = 0, u = 0, d = a, f = 0, g = 0, h = 0, p = 1, y = 1, b = 1, S = 0, x = '', _ = o, R = i, O = r, v = x;
      y;

    )
      switch (((h = S), (S = on()))) {
        case 40:
          if (h != 108 && Dr(v, d - 1) == 58) {
            op((v += fa(pa(S), '&', '&\f')), '&\f') != -1 && (b = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          v += pa(S);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          v += cp(h);
          break;
        case 92:
          v += up(Ko() - 1, 7);
          continue;
        case 47:
          switch (Ln()) {
            case 42:
            case 47:
              Uo(gp(dp(on(), Ko()), t, n), s);
              break;
            default:
              v += '/';
          }
          break;
        case 123 * p:
          l[c++] = En(v) * b;
        case 125 * p:
        case 59:
        case 0:
          switch (S) {
            case 0:
            case 125:
              y = 0;
            case 59 + u:
              g > 0 && En(v) - d && Uo(g > 32 ? wc(v + ';', r, n, d - 1) : wc(fa(v, ' ', '') + ';', r, n, d - 2), s);
              break;
            case 59:
              v += ';';
            default:
              if ((Uo((O = xc(v, t, n, c, u, o, l, x, (_ = []), (R = []), d)), i), S === 123))
                if (u === 0) qo(v, t, O, O, _, i, d, l, R);
                else
                  switch (f === 99 && Dr(v, 3) === 110 ? 100 : f) {
                    case 100:
                    case 109:
                    case 115:
                      qo(e, O, O, r && Uo(xc(e, O, O, 0, 0, o, l, x, o, (_ = []), d), R), o, R, d, l, r ? _ : R);
                      break;
                    default:
                      qo(v, O, O, O, [''], R, 0, l, R);
                  }
          }
          (c = u = g = 0), (p = b = 1), (x = v = ''), (d = a);
          break;
        case 58:
          (d = 1 + En(v)), (g = h);
        default:
          if (p < 1) {
            if (S == 123) --p;
            else if (S == 125 && p++ == 0 && ap() == 125) continue;
          }
          switch (((v += da(S)), S * p)) {
            case 38:
              b = u > 0 ? 1 : ((v += '\f'), -1);
              break;
            case 44:
              (l[c++] = (En(v) - 1) * b), (b = 1);
              break;
            case 64:
              Ln() === 45 && (v += pa(on())), (f = Ln()), (u = d = En((x = v += fp(Ko())))), S++;
              break;
            case 45:
              h === 45 && En(v) == 2 && (p = 0);
          }
      }
    return i;
  }
  function xc(e, t, n, r, o, i, a, l, s, c, u) {
    for (var d = o - 1, f = o === 0 ? i : [''], g = Sc(f), h = 0, p = 0, y = 0; h < r; ++h)
      for (var b = 0, S = jr(e, d + 1, (d = rp((p = a[h])))), x = e; b < g; ++b)
        (x = yc(p > 0 ? f[b] + ' ' + S : fa(S, /&\f/g, f[b]))) && (s[y++] = x);
    return ma(e, t, n, o === 0 ? vc : l, s, c, u);
  }
  function gp(e, t, n) {
    return ma(e, t, n, hc, da(ip()), jr(e, 2, -2), 0);
  }
  function wc(e, t, n, r) {
    return ma(e, t, n, bc, jr(e, 0, r), jr(e, r + 1, -1), r);
  }
  function va(e, t) {
    for (var n = '', r = Sc(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
    return n;
  }
  function pp(e, t, n, r) {
    switch (e.type) {
      case tp:
      case bc:
        return (e.return = e.return || e.value);
      case hc:
        return '';
      case np:
        return (e.return = e.value + '{' + va(e.children, r) + '}');
      case vc:
        e.value = e.props.join(',');
    }
    return En((n = va(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
  }
  var $c = Tt(),
    hp = '_skip_check_';
  function Ec(e) {
    var t = va(mp(e), pp);
    return t.replace(/\{%%%\:[^;];}/g, ';');
  }
  function vp(e) {
    return De(e) === 'object' && e && hp in e;
  }
  function bp(e, t, n) {
    if (!t) return e;
    var r = '.'.concat(t),
      o = n === 'low' ? ':where('.concat(r, ')') : r,
      i = e.split(',').map(function (a) {
        var l,
          s = a.trim().split(/\s+/),
          c = s[0] || '',
          u = ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || '';
        return (c = ''.concat(u).concat(o).concat(c.slice(u.length))), [c].concat(fe(s.slice(1))).join(' ');
      });
    return i.join(',');
  }
  var Oc = new Set(),
    yp = function e(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { root: !0, parentSelectors: [] },
        o = r.root,
        i = r.injectHash,
        a = r.parentSelectors,
        l = n.hashId,
        s = n.layer;
      n.path;
      var c = n.hashPriority,
        u = n.transformers,
        d = u === void 0 ? [] : u;
      n.linters;
      var f = '',
        g = {};
      function h(x) {
        var _ = x.getName(l);
        if (!g[_]) {
          var R = e(x.style, n, { root: !1, parentSelectors: a }),
            O = V(R, 1),
            v = O[0];
          g[_] = '@keyframes '.concat(x.getName(l)).concat(v);
        }
      }
      function p(x) {
        var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        return (
          x.forEach(function (R) {
            Array.isArray(R) ? p(R, _) : R && _.push(R);
          }),
          _
        );
      }
      var y = p(Array.isArray(t) ? t : [t]);
      if (
        (y.forEach(function (x) {
          var _ = typeof x == 'string' && !o ? {} : x;
          if (typeof _ == 'string')
            f += ''.concat(
              _,
              `
`,
            );
          else if (_._keyframe) h(_);
          else {
            var R = d.reduce(function (O, v) {
              var C;
              return (v == null || (C = v.visit) === null || C === void 0 ? void 0 : C.call(v, O)) || O;
            }, _);
            Object.keys(R).forEach(function (O) {
              var v = R[O];
              if (De(v) === 'object' && v && (O !== 'animationName' || !v._keyframe) && !vp(v)) {
                var C = !1,
                  $ = O.trim(),
                  E = !1;
                (o || i) && l
                  ? $.startsWith('@')
                    ? (C = !0)
                    : ($ = bp(O, l, c))
                  : o && !l && ($ === '&' || $ === '') && (($ = ''), (E = !0));
                var T = e(v, n, { root: E, injectHash: C, parentSelectors: [].concat(fe(a), [$]) }),
                  P = V(T, 2),
                  w = P[0],
                  I = P[1];
                (g = F(F({}, g), I)), (f += ''.concat($).concat(w));
              } else {
                var M,
                  N = (M = v == null ? void 0 : v.value) !== null && M !== void 0 ? M : v,
                  A = O.replace(/[A-Z]/g, function (j) {
                    return '-'.concat(j.toLowerCase());
                  }),
                  D = N;
                !ep[O] && typeof D == 'number' && D !== 0 && (D = ''.concat(D, 'px')),
                  O === 'animationName' && v !== null && v !== void 0 && v._keyframe && (h(v), (D = v.getName(l))),
                  (f += ''.concat(A, ':').concat(D, ';'));
              }
            });
          }
        }),
        !o)
      )
        f = '{'.concat(f, '}');
      else if (s && Kg()) {
        var b = s.split(','),
          S = b[b.length - 1].trim();
        (f = '@layer '.concat(S, ' {').concat(f, '}')), b.length > 1 && (f = '@layer '.concat(s, '{%%%:%}').concat(f));
      }
      return [f, g];
    };
  function Sp(e, t) {
    return la(''.concat(e.join('%')).concat(t));
  }
  function Cp() {
    return null;
  }
  function ba(e, t) {
    var n = e.token,
      r = e.path,
      o = e.hashId,
      i = e.layer,
      a = he(ac),
      l = a.autoClear;
    a.mock;
    var s = a.defaultCache,
      c = a.hashPriority,
      u = a.container,
      d = a.ssrInline,
      f = a.transformers,
      g = a.linters,
      h = n._tokenKey,
      p = [h].concat(fe(r)),
      y = $c,
      b = cc(
        'style',
        p,
        function () {
          var O = t(),
            v = yp(O, { hashId: o, hashPriority: c, layer: i, path: r.join('-'), transformers: f, linters: g }),
            C = V(v, 2),
            $ = C[0],
            E = C[1],
            T = Ec($),
            P = Sp(p, T);
          if (y) {
            var w = rr(T, P, { mark: Dn, prepend: 'queue', attachTo: u });
            (w[Ar] = ko),
              w.setAttribute(sa, h),
              Object.keys(E).forEach(function (I) {
                Oc.has(I) ||
                  (Oc.add(I), rr(Ec(E[I]), '_effect-'.concat(I), { mark: Dn, prepend: 'queue', attachTo: u }));
              });
          }
          return [T, h, P];
        },
        function (O, v) {
          var C = V(O, 3),
            $ = C[2];
          (v || l) && $c && Bo($, { mark: Dn });
        },
      ),
      S = V(b, 3),
      x = S[0],
      _ = S[1],
      R = S[2];
    return function (O) {
      var v;
      if (!d || y || !s) v = m.createElement(Cp, null);
      else {
        var C;
        v = m.createElement(
          'style',
          Ne({}, ((C = {}), ee(C, sa, _), ee(C, Dn, R), C), { dangerouslySetInnerHTML: { __html: x } }),
        );
      }
      return m.createElement(m.Fragment, null, v, O);
    };
  }
  var Le = (function () {
    function e(t, n) {
      zt(this, e),
        ee(this, 'name', void 0),
        ee(this, 'style', void 0),
        ee(this, '_keyframe', !0),
        (this.name = t),
        (this.style = n);
    }
    return (
      Dt(e, [
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
  function xp(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  var ya = (function () {
    function e() {
      zt(this, e),
        ee(this, 'cache', void 0),
        ee(this, 'keys', void 0),
        ee(this, 'cacheCallTimes', void 0),
        (this.cache = new Map()),
        (this.keys = []),
        (this.cacheCallTimes = 0);
    }
    return (
      Dt(e, [
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
              o,
              i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
              a = { map: this.cache };
            return (
              n.forEach(function (l) {
                if (!a) a = void 0;
                else {
                  var s, c;
                  a = (s = a) === null || s === void 0 || (c = s.map) === null || c === void 0 ? void 0 : c.get(l);
                }
              }),
              (r = a) !== null && r !== void 0 && r.value && i && (a.value[1] = this.cacheCallTimes++),
              (o = a) === null || o === void 0 ? void 0 : o.value
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
            var o = this;
            if (!this.has(n)) {
              if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
                var i = this.keys.reduce(
                    function (c, u) {
                      var d = V(c, 2),
                        f = d[1];
                      return o.internalGet(u)[1] < f ? [u, o.internalGet(u)[1]] : c;
                    },
                    [this.keys[0], this.cacheCallTimes],
                  ),
                  a = V(i, 1),
                  l = a[0];
                this.delete(l);
              }
              this.keys.push(n);
            }
            var s = this.cache;
            n.forEach(function (c, u) {
              if (u === n.length - 1) s.set(c, { value: [r, o.cacheCallTimes++] });
              else {
                var d = s.get(c);
                d ? d.map || (d.map = new Map()) : s.set(c, { map: new Map() }), (s = s.get(c).map);
              }
            });
          },
        },
        {
          key: 'deleteByPath',
          value: function (n, r) {
            var o = n.get(r[0]);
            if (r.length === 1) {
              var i;
              return (
                o.map ? n.set(r[0], { map: o.map }) : n.delete(r[0]),
                (i = o.value) === null || i === void 0 ? void 0 : i[0]
              );
            }
            var a = this.deleteByPath(o.map, r.slice(1));
            return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), a;
          },
        },
        {
          key: 'delete',
          value: function (n) {
            if (this.has(n))
              return (
                (this.keys = this.keys.filter(function (r) {
                  return !xp(r, n);
                })),
                this.deleteByPath(this.cache, n)
              );
          },
        },
      ]),
      e
    );
  })();
  ee(ya, 'MAX_CACHE_SIZE', 20), ee(ya, 'MAX_CACHE_OFFSET', 5);
  var _c = 0,
    wp = (function () {
      function e(t) {
        zt(this, e),
          ee(this, 'derivatives', void 0),
          ee(this, 'id', void 0),
          (this.derivatives = Array.isArray(t) ? t : [t]),
          (this.id = _c),
          t.length === 0 && (t.length > 0, void 0),
          (_c += 1);
      }
      return (
        Dt(e, [
          {
            key: 'getDerivativeToken',
            value: function (n) {
              return this.derivatives.reduce(function (r, o) {
                return o(n, r);
              }, void 0);
            },
          },
        ]),
        e
      );
    })(),
    Sa = new ya();
  function Ic(e) {
    var t = Array.isArray(e) ? e : [e];
    return Sa.has(t) || Sa.set(t, new wp(t)), Sa.get(t);
  }
  function ar(e) {
    return (e.notSplit = !0), e;
  }
  ar(['borderTop', 'borderBottom']),
    ar(['borderTop']),
    ar(['borderBottom']),
    ar(['borderLeft', 'borderRight']),
    ar(['borderLeft']),
    ar(['borderRight']);
  var $p = m.createContext({});
  const Ca = $p;
  var Hn = 'RC_FORM_INTERNAL_HOOKS',
    Xe = function () {
      Qt(!1, 'Can not find FormContext. Please make sure you wrap Field under Form.');
    },
    lr = m.createContext({
      getFieldValue: Xe,
      getFieldsValue: Xe,
      getFieldError: Xe,
      getFieldWarning: Xe,
      getFieldsError: Xe,
      isFieldsTouched: Xe,
      isFieldTouched: Xe,
      isFieldValidating: Xe,
      isFieldsValidating: Xe,
      resetFields: Xe,
      setFields: Xe,
      setFieldValue: Xe,
      setFieldsValue: Xe,
      validateFields: Xe,
      submit: Xe,
      getInternalHooks: function () {
        return (
          Xe(),
          {
            dispatch: Xe,
            initEntityValue: Xe,
            registerField: Xe,
            useSubscribe: Xe,
            setInitialValues: Xe,
            destroyForm: Xe,
            setCallbacks: Xe,
            registerWatch: Xe,
            getFields: Xe,
            setValidateMessages: Xe,
            setPreserve: Xe,
            getInitialValue: Xe,
          }
        );
      },
    });
  function xa(e) {
    return e == null ? [] : Array.isArray(e) ? e : [e];
  }
  function gn() {
    gn = function () {
      return e;
    };
    var e = {},
      t = Object.prototype,
      n = t.hasOwnProperty,
      r =
        Object.defineProperty ||
        function (P, w, I) {
          P[w] = I.value;
        },
      o = typeof Symbol == 'function' ? Symbol : {},
      i = o.iterator || '@@iterator',
      a = o.asyncIterator || '@@asyncIterator',
      l = o.toStringTag || '@@toStringTag';
    function s(P, w, I) {
      return Object.defineProperty(P, w, { value: I, enumerable: !0, configurable: !0, writable: !0 }), P[w];
    }
    try {
      s({}, '');
    } catch {
      s = function (I, M, N) {
        return (I[M] = N);
      };
    }
    function c(P, w, I, M) {
      var N = w && w.prototype instanceof f ? w : f,
        A = Object.create(N.prototype),
        D = new $(M || []);
      return r(A, '_invoke', { value: R(P, I, D) }), A;
    }
    function u(P, w, I) {
      try {
        return { type: 'normal', arg: P.call(w, I) };
      } catch (M) {
        return { type: 'throw', arg: M };
      }
    }
    e.wrap = c;
    var d = {};
    function f() {}
    function g() {}
    function h() {}
    var p = {};
    s(p, i, function () {
      return this;
    });
    var y = Object.getPrototypeOf,
      b = y && y(y(E([])));
    b && b !== t && n.call(b, i) && (p = b);
    var S = (h.prototype = f.prototype = Object.create(p));
    function x(P) {
      ['next', 'throw', 'return'].forEach(function (w) {
        s(P, w, function (I) {
          return this._invoke(w, I);
        });
      });
    }
    function _(P, w) {
      function I(N, A, D, j) {
        var B = u(P[N], P, A);
        if (B.type !== 'throw') {
          var X = B.arg,
            Y = X.value;
          return Y && De(Y) == 'object' && n.call(Y, '__await')
            ? w.resolve(Y.__await).then(
                function (z) {
                  I('next', z, D, j);
                },
                function (z) {
                  I('throw', z, D, j);
                },
              )
            : w.resolve(Y).then(
                function (z) {
                  (X.value = z), D(X);
                },
                function (z) {
                  return I('throw', z, D, j);
                },
              );
        }
        j(B.arg);
      }
      var M;
      r(this, '_invoke', {
        value: function (A, D) {
          function j() {
            return new w(function (B, X) {
              I(A, D, B, X);
            });
          }
          return (M = M ? M.then(j, j) : j());
        },
      });
    }
    function R(P, w, I) {
      var M = 'suspendedStart';
      return function (N, A) {
        if (M === 'executing') throw new Error('Generator is already running');
        if (M === 'completed') {
          if (N === 'throw') throw A;
          return T();
        }
        for (I.method = N, I.arg = A; ; ) {
          var D = I.delegate;
          if (D) {
            var j = O(D, I);
            if (j) {
              if (j === d) continue;
              return j;
            }
          }
          if (I.method === 'next') I.sent = I._sent = I.arg;
          else if (I.method === 'throw') {
            if (M === 'suspendedStart') throw ((M = 'completed'), I.arg);
            I.dispatchException(I.arg);
          } else I.method === 'return' && I.abrupt('return', I.arg);
          M = 'executing';
          var B = u(P, w, I);
          if (B.type === 'normal') {
            if (((M = I.done ? 'completed' : 'suspendedYield'), B.arg === d)) continue;
            return { value: B.arg, done: I.done };
          }
          B.type === 'throw' && ((M = 'completed'), (I.method = 'throw'), (I.arg = B.arg));
        }
      };
    }
    function O(P, w) {
      var I = w.method,
        M = P.iterator[I];
      if (M === void 0)
        return (
          (w.delegate = null),
          (I === 'throw' &&
            P.iterator.return &&
            ((w.method = 'return'), (w.arg = void 0), O(P, w), w.method === 'throw')) ||
            (I !== 'return' &&
              ((w.method = 'throw'), (w.arg = new TypeError("The iterator does not provide a '" + I + "' method")))),
          d
        );
      var N = u(M, P.iterator, w.arg);
      if (N.type === 'throw') return (w.method = 'throw'), (w.arg = N.arg), (w.delegate = null), d;
      var A = N.arg;
      return A
        ? A.done
          ? ((w[P.resultName] = A.value),
            (w.next = P.nextLoc),
            w.method !== 'return' && ((w.method = 'next'), (w.arg = void 0)),
            (w.delegate = null),
            d)
          : A
        : ((w.method = 'throw'), (w.arg = new TypeError('iterator result is not an object')), (w.delegate = null), d);
    }
    function v(P) {
      var w = { tryLoc: P[0] };
      1 in P && (w.catchLoc = P[1]), 2 in P && ((w.finallyLoc = P[2]), (w.afterLoc = P[3])), this.tryEntries.push(w);
    }
    function C(P) {
      var w = P.completion || {};
      (w.type = 'normal'), delete w.arg, (P.completion = w);
    }
    function $(P) {
      (this.tryEntries = [{ tryLoc: 'root' }]), P.forEach(v, this), this.reset(!0);
    }
    function E(P) {
      if (P) {
        var w = P[i];
        if (w) return w.call(P);
        if (typeof P.next == 'function') return P;
        if (!isNaN(P.length)) {
          var I = -1,
            M = function N() {
              for (; ++I < P.length; ) if (n.call(P, I)) return (N.value = P[I]), (N.done = !1), N;
              return (N.value = void 0), (N.done = !0), N;
            };
          return (M.next = M);
        }
      }
      return { next: T };
    }
    function T() {
      return { value: void 0, done: !0 };
    }
    return (
      (g.prototype = h),
      r(S, 'constructor', { value: h, configurable: !0 }),
      r(h, 'constructor', { value: g, configurable: !0 }),
      (g.displayName = s(h, l, 'GeneratorFunction')),
      (e.isGeneratorFunction = function (P) {
        var w = typeof P == 'function' && P.constructor;
        return !!w && (w === g || (w.displayName || w.name) === 'GeneratorFunction');
      }),
      (e.mark = function (P) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(P, h) : ((P.__proto__ = h), s(P, l, 'GeneratorFunction')),
          (P.prototype = Object.create(S)),
          P
        );
      }),
      (e.awrap = function (P) {
        return { __await: P };
      }),
      x(_.prototype),
      s(_.prototype, a, function () {
        return this;
      }),
      (e.AsyncIterator = _),
      (e.async = function (P, w, I, M, N) {
        N === void 0 && (N = Promise);
        var A = new _(c(P, w, I, M), N);
        return e.isGeneratorFunction(w)
          ? A
          : A.next().then(function (D) {
              return D.done ? D.value : A.next();
            });
      }),
      x(S),
      s(S, l, 'Generator'),
      s(S, i, function () {
        return this;
      }),
      s(S, 'toString', function () {
        return '[object Generator]';
      }),
      (e.keys = function (P) {
        var w = Object(P),
          I = [];
        for (var M in w) I.push(M);
        return (
          I.reverse(),
          function N() {
            for (; I.length; ) {
              var A = I.pop();
              if (A in w) return (N.value = A), (N.done = !1), N;
            }
            return (N.done = !0), N;
          }
        );
      }),
      (e.values = E),
      ($.prototype = {
        constructor: $,
        reset: function (w) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = void 0),
            this.tryEntries.forEach(C),
            !w)
          )
            for (var I in this) I.charAt(0) === 't' && n.call(this, I) && !isNaN(+I.slice(1)) && (this[I] = void 0);
        },
        stop: function () {
          this.done = !0;
          var w = this.tryEntries[0].completion;
          if (w.type === 'throw') throw w.arg;
          return this.rval;
        },
        dispatchException: function (w) {
          if (this.done) throw w;
          var I = this;
          function M(X, Y) {
            return (D.type = 'throw'), (D.arg = w), (I.next = X), Y && ((I.method = 'next'), (I.arg = void 0)), !!Y;
          }
          for (var N = this.tryEntries.length - 1; N >= 0; --N) {
            var A = this.tryEntries[N],
              D = A.completion;
            if (A.tryLoc === 'root') return M('end');
            if (A.tryLoc <= this.prev) {
              var j = n.call(A, 'catchLoc'),
                B = n.call(A, 'finallyLoc');
              if (j && B) {
                if (this.prev < A.catchLoc) return M(A.catchLoc, !0);
                if (this.prev < A.finallyLoc) return M(A.finallyLoc);
              } else if (j) {
                if (this.prev < A.catchLoc) return M(A.catchLoc, !0);
              } else {
                if (!B) throw new Error('try statement without catch or finally');
                if (this.prev < A.finallyLoc) return M(A.finallyLoc);
              }
            }
          }
        },
        abrupt: function (w, I) {
          for (var M = this.tryEntries.length - 1; M >= 0; --M) {
            var N = this.tryEntries[M];
            if (N.tryLoc <= this.prev && n.call(N, 'finallyLoc') && this.prev < N.finallyLoc) {
              var A = N;
              break;
            }
          }
          A && (w === 'break' || w === 'continue') && A.tryLoc <= I && I <= A.finallyLoc && (A = null);
          var D = A ? A.completion : {};
          return (
            (D.type = w), (D.arg = I), A ? ((this.method = 'next'), (this.next = A.finallyLoc), d) : this.complete(D)
          );
        },
        complete: function (w, I) {
          if (w.type === 'throw') throw w.arg;
          return (
            w.type === 'break' || w.type === 'continue'
              ? (this.next = w.arg)
              : w.type === 'return'
              ? ((this.rval = this.arg = w.arg), (this.method = 'return'), (this.next = 'end'))
              : w.type === 'normal' && I && (this.next = I),
            d
          );
        },
        finish: function (w) {
          for (var I = this.tryEntries.length - 1; I >= 0; --I) {
            var M = this.tryEntries[I];
            if (M.finallyLoc === w) return this.complete(M.completion, M.afterLoc), C(M), d;
          }
        },
        catch: function (w) {
          for (var I = this.tryEntries.length - 1; I >= 0; --I) {
            var M = this.tryEntries[I];
            if (M.tryLoc === w) {
              var N = M.completion;
              if (N.type === 'throw') {
                var A = N.arg;
                C(M);
              }
              return A;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (w, I, M) {
          return (
            (this.delegate = { iterator: E(w), resultName: I, nextLoc: M }),
            this.method === 'next' && (this.arg = void 0),
            d
          );
        },
      }),
      e
    );
  }
  function Pc(e, t, n, r, o, i, a) {
    try {
      var l = e[i](a),
        s = l.value;
    } catch (c) {
      n(c);
      return;
    }
    l.done ? t(s) : Promise.resolve(s).then(r, o);
  }
  function Yo(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var i = e.apply(t, n);
        function a(s) {
          Pc(i, r, o, a, l, 'next', s);
        }
        function l(s) {
          Pc(i, r, o, a, l, 'throw', s);
        }
        a(void 0);
      });
    };
  }
  function kn() {
    return (
      (kn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      kn.apply(this, arguments)
    );
  }
  function Ep(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Lr(e, t);
  }
  function wa(e) {
    return (
      (wa = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          }),
      wa(e)
    );
  }
  function Lr(e, t) {
    return (
      (Lr = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, o) {
            return (r.__proto__ = o), r;
          }),
      Lr(e, t)
    );
  }
  function Op() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
      return !1;
    }
  }
  function Qo(e, t, n) {
    return (
      Op()
        ? (Qo = Reflect.construct.bind())
        : (Qo = function (o, i, a) {
            var l = [null];
            l.push.apply(l, i);
            var s = Function.bind.apply(o, l),
              c = new s();
            return a && Lr(c, a.prototype), c;
          }),
      Qo.apply(null, arguments)
    );
  }
  function _p(e) {
    return Function.toString.call(e).indexOf('[native code]') !== -1;
  }
  function $a(e) {
    var t = typeof Map == 'function' ? new Map() : void 0;
    return (
      ($a = function (r) {
        if (r === null || !_p(r)) return r;
        if (typeof r != 'function') throw new TypeError('Super expression must either be null or a function');
        if (typeof t < 'u') {
          if (t.has(r)) return t.get(r);
          t.set(r, o);
        }
        function o() {
          return Qo(r, arguments, wa(this).constructor);
        }
        return (
          (o.prototype = Object.create(r.prototype, {
            constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 },
          })),
          Lr(o, r)
        );
      }),
      $a(e)
    );
  }
  var Ip = /%[sdj%]/g,
    Pp = function () {};
  typeof process < 'u' && process.env;
  function Ea(e) {
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
  function Bt(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    var o = 0,
      i = n.length;
    if (typeof e == 'function') return e.apply(null, n);
    if (typeof e == 'string') {
      var a = e.replace(Ip, function (l) {
        if (l === '%%') return '%';
        if (o >= i) return l;
        switch (l) {
          case '%s':
            return String(n[o++]);
          case '%d':
            return Number(n[o++]);
          case '%j':
            try {
              return JSON.stringify(n[o++]);
            } catch {
              return '[Circular]';
            }
            break;
          default:
            return l;
        }
      });
      return a;
    }
    return e;
  }
  function Rp(e) {
    return e === 'string' || e === 'url' || e === 'hex' || e === 'email' || e === 'date' || e === 'pattern';
  }
  function yt(e, t) {
    return !!(e == null || (t === 'array' && Array.isArray(e) && !e.length) || (Rp(t) && typeof e == 'string' && !e));
  }
  function Tp(e, t, n) {
    var r = [],
      o = 0,
      i = e.length;
    function a(l) {
      r.push.apply(r, l || []), o++, o === i && n(r);
    }
    e.forEach(function (l) {
      t(l, a);
    });
  }
  function Rc(e, t, n) {
    var r = 0,
      o = e.length;
    function i(a) {
      if (a && a.length) {
        n(a);
        return;
      }
      var l = r;
      (r = r + 1), l < o ? t(e[l], i) : n([]);
    }
    i([]);
  }
  function Mp(e) {
    var t = [];
    return (
      Object.keys(e).forEach(function (n) {
        t.push.apply(t, e[n] || []);
      }),
      t
    );
  }
  var Tc = (function (e) {
    Ep(t, e);
    function t(n, r) {
      var o;
      return (o = e.call(this, 'Async Validation Error') || this), (o.errors = n), (o.fields = r), o;
    }
    return t;
  })($a(Error));
  function Np(e, t, n, r, o) {
    if (t.first) {
      var i = new Promise(function (f, g) {
        var h = function (b) {
            return r(b), b.length ? g(new Tc(b, Ea(b))) : f(o);
          },
          p = Mp(e);
        Rc(p, n, h);
      });
      return (
        i.catch(function (f) {
          return f;
        }),
        i
      );
    }
    var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
      l = Object.keys(e),
      s = l.length,
      c = 0,
      u = [],
      d = new Promise(function (f, g) {
        var h = function (y) {
          if ((u.push.apply(u, y), c++, c === s)) return r(u), u.length ? g(new Tc(u, Ea(u))) : f(o);
        };
        l.length || (r(u), f(o)),
          l.forEach(function (p) {
            var y = e[p];
            a.indexOf(p) !== -1 ? Rc(y, n, h) : Tp(y, n, h);
          });
      });
    return (
      d.catch(function (f) {
        return f;
      }),
      d
    );
  }
  function Fp(e) {
    return !!(e && e.message !== void 0);
  }
  function Ap(e, t) {
    for (var n = e, r = 0; r < t.length; r++) {
      if (n == null) return n;
      n = n[t[r]];
    }
    return n;
  }
  function Mc(e, t) {
    return function (n) {
      var r;
      return (
        e.fullFields ? (r = Ap(t, e.fullFields)) : (r = t[n.field || e.fullField]),
        Fp(n)
          ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
          : { message: typeof n == 'function' ? n() : n, fieldValue: r, field: n.field || e.fullField }
      );
    };
  }
  function Nc(e, t) {
    if (t) {
      for (var n in t)
        if (t.hasOwnProperty(n)) {
          var r = t[n];
          typeof r == 'object' && typeof e[n] == 'object' ? (e[n] = kn({}, e[n], r)) : (e[n] = r);
        }
    }
    return e;
  }
  var Fc = function (t, n, r, o, i, a) {
      t.required && (!r.hasOwnProperty(t.field) || yt(n, a || t.type)) && o.push(Bt(i.messages.required, t.fullField));
    },
    zp = function (t, n, r, o, i) {
      (/^\s+$/.test(n) || n === '') && o.push(Bt(i.messages.whitespace, t.fullField));
    },
    Jo,
    Dp = function () {
      if (Jo) return Jo;
      var e = '[a-fA-F\\d:]',
        t = function (_) {
          return _ && _.includeBoundaries ? '(?:(?<=\\s|^)(?=' + e + ')|(?<=' + e + ')(?=\\s|$))' : '';
        },
        n = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
        r = '[a-fA-F\\d]{1,4}',
        o = (
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
        i = new RegExp('(?:^' + n + '$)|(?:^' + o + '$)'),
        a = new RegExp('^' + n + '$'),
        l = new RegExp('^' + o + '$'),
        s = function (_) {
          return _ && _.exact ? i : new RegExp('(?:' + t(_) + n + t(_) + ')|(?:' + t(_) + o + t(_) + ')', 'g');
        };
      (s.v4 = function (x) {
        return x && x.exact ? a : new RegExp('' + t(x) + n + t(x), 'g');
      }),
        (s.v6 = function (x) {
          return x && x.exact ? l : new RegExp('' + t(x) + o + t(x), 'g');
        });
      var c = '(?:(?:[a-z]+:)?//)',
        u = '(?:\\S+(?::\\S*)?@)?',
        d = s.v4().source,
        f = s.v6().source,
        g = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
        h = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
        p = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
        y = '(?::\\d{2,5})?',
        b = '(?:[/?#][^\\s"]*)?',
        S = '(?:' + c + '|www\\.)' + u + '(?:localhost|' + d + '|' + f + '|' + g + h + p + ')' + y + b;
      return (Jo = new RegExp('(?:^' + S + '$)', 'i')), Jo;
    },
    Ac = {
      email:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
      hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
    },
    Hr = {
      integer: function (t) {
        return Hr.number(t) && parseInt(t, 10) === t;
      },
      float: function (t) {
        return Hr.number(t) && !Hr.integer(t);
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
        return typeof t == 'object' && !Hr.array(t);
      },
      method: function (t) {
        return typeof t == 'function';
      },
      email: function (t) {
        return typeof t == 'string' && t.length <= 320 && !!t.match(Ac.email);
      },
      url: function (t) {
        return typeof t == 'string' && t.length <= 2048 && !!t.match(Dp());
      },
      hex: function (t) {
        return typeof t == 'string' && !!t.match(Ac.hex);
      },
    },
    jp = function (t, n, r, o, i) {
      if (t.required && n === void 0) {
        Fc(t, n, r, o, i);
        return;
      }
      var a = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'],
        l = t.type;
      a.indexOf(l) > -1
        ? Hr[l](n) || o.push(Bt(i.messages.types[l], t.fullField, t.type))
        : l && typeof n !== t.type && o.push(Bt(i.messages.types[l], t.fullField, t.type));
    },
    Lp = function (t, n, r, o, i) {
      var a = typeof t.len == 'number',
        l = typeof t.min == 'number',
        s = typeof t.max == 'number',
        c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        u = n,
        d = null,
        f = typeof n == 'number',
        g = typeof n == 'string',
        h = Array.isArray(n);
      if ((f ? (d = 'number') : g ? (d = 'string') : h && (d = 'array'), !d)) return !1;
      h && (u = n.length),
        g && (u = n.replace(c, '_').length),
        a
          ? u !== t.len && o.push(Bt(i.messages[d].len, t.fullField, t.len))
          : l && !s && u < t.min
          ? o.push(Bt(i.messages[d].min, t.fullField, t.min))
          : s && !l && u > t.max
          ? o.push(Bt(i.messages[d].max, t.fullField, t.max))
          : l && s && (u < t.min || u > t.max) && o.push(Bt(i.messages[d].range, t.fullField, t.min, t.max));
    },
    sr = 'enum',
    Hp = function (t, n, r, o, i) {
      (t[sr] = Array.isArray(t[sr]) ? t[sr] : []),
        t[sr].indexOf(n) === -1 && o.push(Bt(i.messages[sr], t.fullField, t[sr].join(', ')));
    },
    kp = function (t, n, r, o, i) {
      if (t.pattern) {
        if (t.pattern instanceof RegExp)
          (t.pattern.lastIndex = 0),
            t.pattern.test(n) || o.push(Bt(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
        else if (typeof t.pattern == 'string') {
          var a = new RegExp(t.pattern);
          a.test(n) || o.push(Bt(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
        }
      }
    },
    Ae = { required: Fc, whitespace: zp, type: jp, range: Lp, enum: Hp, pattern: kp },
    Vp = function (t, n, r, o, i) {
      var a = [],
        l = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (l) {
        if (yt(n, 'string') && !t.required) return r();
        Ae.required(t, n, o, a, i, 'string'),
          yt(n, 'string') ||
            (Ae.type(t, n, o, a, i),
            Ae.range(t, n, o, a, i),
            Ae.pattern(t, n, o, a, i),
            t.whitespace === !0 && Ae.whitespace(t, n, o, a, i));
      }
      r(a);
    },
    Bp = function (t, n, r, o, i) {
      var a = [],
        l = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (l) {
        if (yt(n) && !t.required) return r();
        Ae.required(t, n, o, a, i), n !== void 0 && Ae.type(t, n, o, a, i);
      }
      r(a);
    },
    Wp = function (t, n, r, o, i) {
      var a = [],
        l = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (l) {
        if ((n === '' && (n = void 0), yt(n) && !t.required)) return r();
        Ae.required(t, n, o, a, i), n !== void 0 && (Ae.type(t, n, o, a, i), Ae.range(t, n, o, a, i));
      }
      r(a);
    },
    Up = function (t, n, r, o, i) {
      var a = [],
        l = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (l) {
        if (yt(n) && !t.required) return r();
        Ae.required(t, n, o, a, i), n !== void 0 && Ae.type(t, n, o, a, i);
      }
      r(a);
    },
    Gp = function (t, n, r, o, i) {
      var a = [],
        l = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (l) {
        if (yt(n) && !t.required) return r();
        Ae.required(t, n, o, a, i), yt(n) || Ae.type(t, n, o, a, i);
      }
      r(a);
    },
    Kp = function (t, n, r, o, i) {
      var a = [],
        l = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (l) {
        if (yt(n) && !t.required) return r();
        Ae.required(t, n, o, a, i), n !== void 0 && (Ae.type(t, n, o, a, i), Ae.range(t, n, o, a, i));
      }
      r(a);
    },
    Xp = function (t, n, r, o, i) {
      var a = [],
        l = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (l) {
        if (yt(n) && !t.required) return r();
        Ae.required(t, n, o, a, i), n !== void 0 && (Ae.type(t, n, o, a, i), Ae.range(t, n, o, a, i));
      }
      r(a);
    },
    qp = function (t, n, r, o, i) {
      var a = [],
        l = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (l) {
        if (n == null && !t.required) return r();
        Ae.required(t, n, o, a, i, 'array'), n != null && (Ae.type(t, n, o, a, i), Ae.range(t, n, o, a, i));
      }
      r(a);
    },
    Yp = function (t, n, r, o, i) {
      var a = [],
        l = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (l) {
        if (yt(n) && !t.required) return r();
        Ae.required(t, n, o, a, i), n !== void 0 && Ae.type(t, n, o, a, i);
      }
      r(a);
    },
    Qp = 'enum',
    Jp = function (t, n, r, o, i) {
      var a = [],
        l = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (l) {
        if (yt(n) && !t.required) return r();
        Ae.required(t, n, o, a, i), n !== void 0 && Ae[Qp](t, n, o, a, i);
      }
      r(a);
    },
    Zp = function (t, n, r, o, i) {
      var a = [],
        l = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (l) {
        if (yt(n, 'string') && !t.required) return r();
        Ae.required(t, n, o, a, i), yt(n, 'string') || Ae.pattern(t, n, o, a, i);
      }
      r(a);
    },
    eh = function (t, n, r, o, i) {
      var a = [],
        l = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (l) {
        if (yt(n, 'date') && !t.required) return r();
        if ((Ae.required(t, n, o, a, i), !yt(n, 'date'))) {
          var s;
          n instanceof Date ? (s = n) : (s = new Date(n)),
            Ae.type(t, s, o, a, i),
            s && Ae.range(t, s.getTime(), o, a, i);
        }
      }
      r(a);
    },
    th = function (t, n, r, o, i) {
      var a = [],
        l = Array.isArray(n) ? 'array' : typeof n;
      Ae.required(t, n, o, a, i, l), r(a);
    },
    Oa = function (t, n, r, o, i) {
      var a = t.type,
        l = [],
        s = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (s) {
        if (yt(n, a) && !t.required) return r();
        Ae.required(t, n, o, l, i, a), yt(n, a) || Ae.type(t, n, o, l, i);
      }
      r(l);
    },
    nh = function (t, n, r, o, i) {
      var a = [],
        l = t.required || (!t.required && o.hasOwnProperty(t.field));
      if (l) {
        if (yt(n) && !t.required) return r();
        Ae.required(t, n, o, a, i);
      }
      r(a);
    },
    kr = {
      string: Vp,
      method: Bp,
      number: Wp,
      boolean: Up,
      regexp: Gp,
      integer: Kp,
      float: Xp,
      array: qp,
      object: Yp,
      enum: Jp,
      pattern: Zp,
      date: eh,
      url: Oa,
      hex: Oa,
      email: Oa,
      required: th,
      any: nh,
    };
  function _a() {
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
  var Ia = _a(),
    Vr = (function () {
      function e(n) {
        (this.rules = null), (this._messages = Ia), this.define(n);
      }
      var t = e.prototype;
      return (
        (t.define = function (r) {
          var o = this;
          if (!r) throw new Error('Cannot configure a schema with no rules');
          if (typeof r != 'object' || Array.isArray(r)) throw new Error('Rules must be an object');
          (this.rules = {}),
            Object.keys(r).forEach(function (i) {
              var a = r[i];
              o.rules[i] = Array.isArray(a) ? a : [a];
            });
        }),
        (t.messages = function (r) {
          return r && (this._messages = Nc(_a(), r)), this._messages;
        }),
        (t.validate = function (r, o, i) {
          var a = this;
          o === void 0 && (o = {}), i === void 0 && (i = function () {});
          var l = r,
            s = o,
            c = i;
          if ((typeof s == 'function' && ((c = s), (s = {})), !this.rules || Object.keys(this.rules).length === 0))
            return c && c(null, l), Promise.resolve(l);
          function u(p) {
            var y = [],
              b = {};
            function S(_) {
              if (Array.isArray(_)) {
                var R;
                y = (R = y).concat.apply(R, _);
              } else y.push(_);
            }
            for (var x = 0; x < p.length; x++) S(p[x]);
            y.length ? ((b = Ea(y)), c(y, b)) : c(null, l);
          }
          if (s.messages) {
            var d = this.messages();
            d === Ia && (d = _a()), Nc(d, s.messages), (s.messages = d);
          } else s.messages = this.messages();
          var f = {},
            g = s.keys || Object.keys(this.rules);
          g.forEach(function (p) {
            var y = a.rules[p],
              b = l[p];
            y.forEach(function (S) {
              var x = S;
              typeof x.transform == 'function' && (l === r && (l = kn({}, l)), (b = l[p] = x.transform(b))),
                typeof x == 'function' ? (x = { validator: x }) : (x = kn({}, x)),
                (x.validator = a.getValidationMethod(x)),
                x.validator &&
                  ((x.field = p),
                  (x.fullField = x.fullField || p),
                  (x.type = a.getType(x)),
                  (f[p] = f[p] || []),
                  f[p].push({ rule: x, value: b, source: l, field: p }));
            });
          });
          var h = {};
          return Np(
            f,
            s,
            function (p, y) {
              var b = p.rule,
                S =
                  (b.type === 'object' || b.type === 'array') &&
                  (typeof b.fields == 'object' || typeof b.defaultField == 'object');
              (S = S && (b.required || (!b.required && p.value))), (b.field = p.field);
              function x(O, v) {
                return kn({}, v, {
                  fullField: b.fullField + '.' + O,
                  fullFields: b.fullFields ? [].concat(b.fullFields, [O]) : [O],
                });
              }
              function _(O) {
                O === void 0 && (O = []);
                var v = Array.isArray(O) ? O : [O];
                !s.suppressWarning && v.length && e.warning('async-validator:', v),
                  v.length && b.message !== void 0 && (v = [].concat(b.message));
                var C = v.map(Mc(b, l));
                if (s.first && C.length) return (h[b.field] = 1), y(C);
                if (!S) y(C);
                else {
                  if (b.required && !p.value)
                    return (
                      b.message !== void 0
                        ? (C = [].concat(b.message).map(Mc(b, l)))
                        : s.error && (C = [s.error(b, Bt(s.messages.required, b.field))]),
                      y(C)
                    );
                  var $ = {};
                  b.defaultField &&
                    Object.keys(p.value).map(function (P) {
                      $[P] = b.defaultField;
                    }),
                    ($ = kn({}, $, p.rule.fields));
                  var E = {};
                  Object.keys($).forEach(function (P) {
                    var w = $[P],
                      I = Array.isArray(w) ? w : [w];
                    E[P] = I.map(x.bind(null, P));
                  });
                  var T = new e(E);
                  T.messages(s.messages),
                    p.rule.options && ((p.rule.options.messages = s.messages), (p.rule.options.error = s.error)),
                    T.validate(p.value, p.rule.options || s, function (P) {
                      var w = [];
                      C && C.length && w.push.apply(w, C), P && P.length && w.push.apply(w, P), y(w.length ? w : null);
                    });
                }
              }
              var R;
              if (b.asyncValidator) R = b.asyncValidator(b, p.value, _, p.source, s);
              else if (b.validator) {
                try {
                  R = b.validator(b, p.value, _, p.source, s);
                } catch (O) {
                  console.error == null || console.error(O),
                    s.suppressValidatorError ||
                      setTimeout(function () {
                        throw O;
                      }, 0),
                    _(O.message);
                }
                R === !0
                  ? _()
                  : R === !1
                  ? _(
                      typeof b.message == 'function'
                        ? b.message(b.fullField || b.field)
                        : b.message || (b.fullField || b.field) + ' fails',
                    )
                  : R instanceof Array
                  ? _(R)
                  : R instanceof Error && _(R.message);
              }
              R &&
                R.then &&
                R.then(
                  function () {
                    return _();
                  },
                  function (O) {
                    return _(O);
                  },
                );
            },
            function (p) {
              u(p);
            },
            l,
          );
        }),
        (t.getType = function (r) {
          if (
            (r.type === void 0 && r.pattern instanceof RegExp && (r.type = 'pattern'),
            typeof r.validator != 'function' && r.type && !kr.hasOwnProperty(r.type))
          )
            throw new Error(Bt('Unknown rule type %s', r.type));
          return r.type || 'string';
        }),
        (t.getValidationMethod = function (r) {
          if (typeof r.validator == 'function') return r.validator;
          var o = Object.keys(r),
            i = o.indexOf('message');
          return (
            i !== -1 && o.splice(i, 1),
            o.length === 1 && o[0] === 'required' ? kr.required : kr[this.getType(r)] || void 0
          );
        }),
        e
      );
    })();
  (Vr.register = function (t, n) {
    if (typeof n != 'function') throw new Error('Cannot register a validator by type, validator is not a function');
    kr[t] = n;
  }),
    (Vr.warning = Pp),
    (Vr.messages = Ia),
    (Vr.validators = kr);
  var Wt = "'${name}' is not a valid ${type}",
    zc = {
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
        string: Wt,
        method: Wt,
        array: Wt,
        object: Wt,
        number: Wt,
        date: Wt,
        boolean: Wt,
        integer: Wt,
        float: Wt,
        regexp: Wt,
        email: Wt,
        url: Wt,
        hex: Wt,
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
  function Dc(e, t) {
    for (var n = e, r = 0; r < t.length; r += 1) {
      if (n == null) return;
      n = n[t[r]];
    }
    return n;
  }
  function jc(e) {
    return lc(e) || ic(e) || aa(e) || sc();
  }
  function Lc(e, t, n, r) {
    if (!t.length) return n;
    var o = jc(t),
      i = o[0],
      a = o.slice(1),
      l;
    return (
      !e && typeof i == 'number' ? (l = []) : Array.isArray(e) ? (l = fe(e)) : (l = F({}, e)),
      r && n === void 0 && a.length === 1 ? delete l[i][a[0]] : (l[i] = Lc(l[i], a, n, r)),
      l
    );
  }
  function rh(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    return t.length && r && n === void 0 && !Dc(e, t.slice(0, -1)) ? e : Lc(e, t, n, r);
  }
  function Zo(e) {
    return Array.isArray(e) ? ih(e) : De(e) === 'object' && e !== null ? oh(e) : e;
  }
  function oh(e) {
    if (Object.getPrototypeOf(e) === Object.prototype) {
      var t = {};
      for (var n in e) t[n] = Zo(e[n]);
      return t;
    }
    return e;
  }
  function ih(e) {
    return e.map(function (t) {
      return Zo(t);
    });
  }
  function dt(e) {
    return xa(e);
  }
  function On(e, t) {
    var n = Dc(e, t);
    return n;
  }
  function _n(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
      o = rh(e, t, n, r);
    return o;
  }
  function Hc(e, t) {
    var n = {};
    return (
      t.forEach(function (r) {
        var o = On(e, r);
        n = _n(n, r, o);
      }),
      n
    );
  }
  function Br(e, t) {
    return (
      e &&
      e.some(function (n) {
        return Bc(n, t);
      })
    );
  }
  function kc(e) {
    return De(e) === 'object' && e !== null && Object.getPrototypeOf(e) === Object.prototype;
  }
  function Vc(e, t) {
    var n = Array.isArray(e) ? fe(e) : F({}, e);
    return (
      t &&
        Object.keys(t).forEach(function (r) {
          var o = n[r],
            i = t[r],
            a = kc(o) && kc(i);
          n[r] = a ? Vc(o, i || {}) : Zo(i);
        }),
      n
    );
  }
  function Wr(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.reduce(function (o, i) {
      return Vc(o, i);
    }, e);
  }
  function Bc(e, t) {
    return !e || !t || e.length !== t.length
      ? !1
      : e.every(function (n, r) {
          return t[r] === n;
        });
  }
  function ah(e, t) {
    if (e === t) return !0;
    if ((!e && t) || (e && !t) || !e || !t || De(e) !== 'object' || De(t) !== 'object') return !1;
    var n = Object.keys(e),
      r = Object.keys(t),
      o = new Set([].concat(n, r));
    return fe(o).every(function (i) {
      var a = e[i],
        l = t[i];
      return typeof a == 'function' && typeof l == 'function' ? !0 : a === l;
    });
  }
  function lh(e) {
    var t = arguments.length <= 1 ? void 0 : arguments[1];
    return t && t.target && De(t.target) === 'object' && e in t.target ? t.target[e] : t;
  }
  function Wc(e, t, n) {
    var r = e.length;
    if (t < 0 || t >= r || n < 0 || n >= r) return e;
    var o = e[t],
      i = t - n;
    return i > 0
      ? [].concat(fe(e.slice(0, n)), [o], fe(e.slice(n, t)), fe(e.slice(t + 1, r)))
      : i < 0
      ? [].concat(fe(e.slice(0, t)), fe(e.slice(t + 1, n + 1)), [o], fe(e.slice(n + 1, r)))
      : e;
  }
  var sh = Vr;
  function ch(e, t) {
    return e.replace(/\$\{\w+\}/g, function (n) {
      var r = n.slice(2, -1);
      return t[r];
    });
  }
  var Uc = 'CODE_LOGIC_ERROR';
  function Pa(e, t, n, r, o) {
    return Ra.apply(this, arguments);
  }
  function Ra() {
    return (
      (Ra = Yo(
        gn().mark(function e(t, n, r, o, i) {
          var a, l, s, c, u, d, f, g, h;
          return gn().wrap(
            function (y) {
              for (;;)
                switch ((y.prev = y.next)) {
                  case 0:
                    return (
                      (a = F({}, r)),
                      delete a.ruleIndex,
                      a.validator &&
                        ((l = a.validator),
                        (a.validator = function () {
                          try {
                            return l.apply(void 0, arguments);
                          } catch (b) {
                            return console.error(b), Promise.reject(Uc);
                          }
                        })),
                      (s = null),
                      a && a.type === 'array' && a.defaultField && ((s = a.defaultField), delete a.defaultField),
                      (c = new sh(ee({}, t, [a]))),
                      (u = Wr({}, zc, o.validateMessages)),
                      c.messages(u),
                      (d = []),
                      (y.prev = 9),
                      (y.next = 12),
                      Promise.resolve(c.validate(ee({}, t, n), F({}, o)))
                    );
                  case 12:
                    y.next = 17;
                    break;
                  case 14:
                    (y.prev = 14),
                      (y.t0 = y.catch(9)),
                      y.t0.errors &&
                        (d = y.t0.errors.map(function (b, S) {
                          var x = b.message,
                            _ = x === Uc ? u.default : x;
                          return kt(_) ? gt(_, { key: 'error_'.concat(S) }) : _;
                        }));
                  case 17:
                    if (!(!d.length && s)) {
                      y.next = 22;
                      break;
                    }
                    return (
                      (y.next = 20),
                      Promise.all(
                        n.map(function (b, S) {
                          return Pa(''.concat(t, '.').concat(S), b, s, o, i);
                        }),
                      )
                    );
                  case 20:
                    return (
                      (f = y.sent),
                      y.abrupt(
                        'return',
                        f.reduce(function (b, S) {
                          return [].concat(fe(b), fe(S));
                        }, []),
                      )
                    );
                  case 22:
                    return (
                      (g = F(F({}, r), {}, { name: t, enum: (r.enum || []).join(', ') }, i)),
                      (h = d.map(function (b) {
                        return typeof b == 'string' ? ch(b, g) : b;
                      })),
                      y.abrupt('return', h)
                    );
                  case 25:
                  case 'end':
                    return y.stop();
                }
            },
            e,
            null,
            [[9, 14]],
          );
        }),
      )),
      Ra.apply(this, arguments)
    );
  }
  function uh(e, t, n, r, o, i) {
    var a = e.join('.'),
      l = n
        .map(function (u, d) {
          var f = u.validator,
            g = F(F({}, u), {}, { ruleIndex: d });
          return (
            f &&
              (g.validator = function (h, p, y) {
                var b = !1,
                  S = function () {
                    for (var R = arguments.length, O = new Array(R), v = 0; v < R; v++) O[v] = arguments[v];
                    Promise.resolve().then(function () {
                      Qt(!b, 'Your validator function has already return a promise. `callback` will be ignored.'),
                        b || y.apply(void 0, O);
                    });
                  },
                  x = f(h, p, S);
                (b = x && typeof x.then == 'function' && typeof x.catch == 'function'),
                  Qt(b, '`callback` is deprecated. Please return a promise instead.'),
                  b &&
                    x
                      .then(function () {
                        y();
                      })
                      .catch(function (_) {
                        y(_ || ' ');
                      });
              }),
            g
          );
        })
        .sort(function (u, d) {
          var f = u.warningOnly,
            g = u.ruleIndex,
            h = d.warningOnly,
            p = d.ruleIndex;
          return !!f == !!h ? g - p : f ? 1 : -1;
        }),
      s;
    if (o === !0)
      s = new Promise(
        (function () {
          var u = Yo(
            gn().mark(function d(f, g) {
              var h, p, y;
              return gn().wrap(function (S) {
                for (;;)
                  switch ((S.prev = S.next)) {
                    case 0:
                      h = 0;
                    case 1:
                      if (!(h < l.length)) {
                        S.next = 12;
                        break;
                      }
                      return (p = l[h]), (S.next = 5), Pa(a, t, p, r, i);
                    case 5:
                      if (((y = S.sent), !y.length)) {
                        S.next = 9;
                        break;
                      }
                      return g([{ errors: y, rule: p }]), S.abrupt('return');
                    case 9:
                      (h += 1), (S.next = 1);
                      break;
                    case 12:
                      f([]);
                    case 13:
                    case 'end':
                      return S.stop();
                  }
              }, d);
            }),
          );
          return function (d, f) {
            return u.apply(this, arguments);
          };
        })(),
      );
    else {
      var c = l.map(function (u) {
        return Pa(a, t, u, r, i).then(function (d) {
          return { errors: d, rule: u };
        });
      });
      s = (o ? fh(c) : dh(c)).then(function (u) {
        return Promise.reject(u);
      });
    }
    return (
      s.catch(function (u) {
        return u;
      }),
      s
    );
  }
  function dh(e) {
    return Ta.apply(this, arguments);
  }
  function Ta() {
    return (
      (Ta = Yo(
        gn().mark(function e(t) {
          return gn().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return r.abrupt(
                    'return',
                    Promise.all(t).then(function (o) {
                      var i,
                        a = (i = []).concat.apply(i, fe(o));
                      return a;
                    }),
                  );
                case 1:
                case 'end':
                  return r.stop();
              }
          }, e);
        }),
      )),
      Ta.apply(this, arguments)
    );
  }
  function fh(e) {
    return Ma.apply(this, arguments);
  }
  function Ma() {
    return (
      (Ma = Yo(
        gn().mark(function e(t) {
          var n;
          return gn().wrap(function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    (n = 0),
                    o.abrupt(
                      'return',
                      new Promise(function (i) {
                        t.forEach(function (a) {
                          a.then(function (l) {
                            l.errors.length && i([l]), (n += 1), n === t.length && i([]);
                          });
                        });
                      }),
                    )
                  );
                case 2:
                case 'end':
                  return o.stop();
              }
          }, e);
        }),
      )),
      Ma.apply(this, arguments)
    );
  }
  var mh = ['name'],
    Zt = [];
  function Gc(e, t, n, r, o, i) {
    return typeof e == 'function' ? e(t, n, 'source' in i ? { source: i.source } : {}) : r !== o;
  }
  var Na = (function (e) {
    Fn(n, e);
    var t = An(n);
    function n(r) {
      var o;
      if (
        (zt(this, n),
        (o = t.call(this, r)),
        (o.state = { resetCount: 0 }),
        (o.cancelRegisterFunc = null),
        (o.mounted = !1),
        (o.touched = !1),
        (o.dirty = !1),
        (o.validatePromise = null),
        (o.prevValidating = void 0),
        (o.errors = Zt),
        (o.warnings = Zt),
        (o.cancelRegister = function () {
          var s = o.props,
            c = s.preserve,
            u = s.isListField,
            d = s.name;
          o.cancelRegisterFunc && o.cancelRegisterFunc(u, c, dt(d)), (o.cancelRegisterFunc = null);
        }),
        (o.getNamePath = function () {
          var s = o.props,
            c = s.name,
            u = s.fieldContext,
            d = u.prefixName,
            f = d === void 0 ? [] : d;
          return c !== void 0 ? [].concat(fe(f), fe(c)) : [];
        }),
        (o.getRules = function () {
          var s = o.props,
            c = s.rules,
            u = c === void 0 ? [] : c,
            d = s.fieldContext;
          return u.map(function (f) {
            return typeof f == 'function' ? f(d) : f;
          });
        }),
        (o.refresh = function () {
          o.mounted &&
            o.setState(function (s) {
              var c = s.resetCount;
              return { resetCount: c + 1 };
            });
        }),
        (o.triggerMetaEvent = function (s) {
          var c = o.props.onMetaChange;
          c == null || c(F(F({}, o.getMeta()), {}, { destroy: s }));
        }),
        (o.onStoreChange = function (s, c, u) {
          var d = o.props,
            f = d.shouldUpdate,
            g = d.dependencies,
            h = g === void 0 ? [] : g,
            p = d.onReset,
            y = u.store,
            b = o.getNamePath(),
            S = o.getValue(s),
            x = o.getValue(y),
            _ = c && Br(c, b);
          switch (
            (u.type === 'valueUpdate' &&
              u.source === 'external' &&
              S !== x &&
              ((o.touched = !0),
              (o.dirty = !0),
              (o.validatePromise = null),
              (o.errors = Zt),
              (o.warnings = Zt),
              o.triggerMetaEvent()),
            u.type)
          ) {
            case 'reset':
              if (!c || _) {
                (o.touched = !1),
                  (o.dirty = !1),
                  (o.validatePromise = null),
                  (o.errors = Zt),
                  (o.warnings = Zt),
                  o.triggerMetaEvent(),
                  p == null || p(),
                  o.refresh();
                return;
              }
              break;
            case 'remove': {
              if (f) {
                o.reRender();
                return;
              }
              break;
            }
            case 'setField': {
              if (_) {
                var R = u.data;
                'touched' in R && (o.touched = R.touched),
                  'validating' in R &&
                    !('originRCField' in R) &&
                    (o.validatePromise = R.validating ? Promise.resolve([]) : null),
                  'errors' in R && (o.errors = R.errors || Zt),
                  'warnings' in R && (o.warnings = R.warnings || Zt),
                  (o.dirty = !0),
                  o.triggerMetaEvent(),
                  o.reRender();
                return;
              }
              if (f && !b.length && Gc(f, s, y, S, x, u)) {
                o.reRender();
                return;
              }
              break;
            }
            case 'dependenciesUpdate': {
              var O = h.map(dt);
              if (
                O.some(function (v) {
                  return Br(u.relatedFields, v);
                })
              ) {
                o.reRender();
                return;
              }
              break;
            }
            default:
              if (_ || ((!h.length || b.length || f) && Gc(f, s, y, S, x, u))) {
                o.reRender();
                return;
              }
              break;
          }
          f === !0 && o.reRender();
        }),
        (o.validateRules = function (s) {
          var c = o.getNamePath(),
            u = o.getValue(),
            d = Promise.resolve().then(function () {
              if (!o.mounted) return [];
              var f = o.props,
                g = f.validateFirst,
                h = g === void 0 ? !1 : g,
                p = f.messageVariables,
                y = s || {},
                b = y.triggerName,
                S = o.getRules();
              b &&
                (S = S.filter(function (_) {
                  return _;
                }).filter(function (_) {
                  var R = _.validateTrigger;
                  if (!R) return !0;
                  var O = xa(R);
                  return O.includes(b);
                }));
              var x = uh(c, u, S, s, h, p);
              return (
                x
                  .catch(function (_) {
                    return _;
                  })
                  .then(function () {
                    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zt;
                    if (o.validatePromise === d) {
                      var R;
                      o.validatePromise = null;
                      var O = [],
                        v = [];
                      (R = _.forEach) === null ||
                        R === void 0 ||
                        R.call(_, function (C) {
                          var $ = C.rule.warningOnly,
                            E = C.errors,
                            T = E === void 0 ? Zt : E;
                          $ ? v.push.apply(v, fe(T)) : O.push.apply(O, fe(T));
                        }),
                        (o.errors = O),
                        (o.warnings = v),
                        o.triggerMetaEvent(),
                        o.reRender();
                    }
                  }),
                x
              );
            });
          return (
            (o.validatePromise = d),
            (o.dirty = !0),
            (o.errors = Zt),
            (o.warnings = Zt),
            o.triggerMetaEvent(),
            o.reRender(),
            d
          );
        }),
        (o.isFieldValidating = function () {
          return !!o.validatePromise;
        }),
        (o.isFieldTouched = function () {
          return o.touched;
        }),
        (o.isFieldDirty = function () {
          if (o.dirty || o.props.initialValue !== void 0) return !0;
          var s = o.props.fieldContext,
            c = s.getInternalHooks(Hn),
            u = c.getInitialValue;
          return u(o.getNamePath()) !== void 0;
        }),
        (o.getErrors = function () {
          return o.errors;
        }),
        (o.getWarnings = function () {
          return o.warnings;
        }),
        (o.isListField = function () {
          return o.props.isListField;
        }),
        (o.isList = function () {
          return o.props.isList;
        }),
        (o.isPreserve = function () {
          return o.props.preserve;
        }),
        (o.getMeta = function () {
          o.prevValidating = o.isFieldValidating();
          var s = {
            touched: o.isFieldTouched(),
            validating: o.prevValidating,
            errors: o.errors,
            warnings: o.warnings,
            name: o.getNamePath(),
          };
          return s;
        }),
        (o.getOnlyChild = function (s) {
          if (typeof s == 'function') {
            var c = o.getMeta();
            return F(F({}, o.getOnlyChild(s(o.getControlled(), c, o.props.fieldContext))), {}, { isFunction: !0 });
          }
          var u = mn(s);
          return u.length !== 1 || !kt(u[0]) ? { child: u, isFunction: !1 } : { child: u[0], isFunction: !1 };
        }),
        (o.getValue = function (s) {
          var c = o.props.fieldContext.getFieldsValue,
            u = o.getNamePath();
          return On(s || c(!0), u);
        }),
        (o.getControlled = function () {
          var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            c = o.props,
            u = c.trigger,
            d = c.validateTrigger,
            f = c.getValueFromEvent,
            g = c.normalize,
            h = c.valuePropName,
            p = c.getValueProps,
            y = c.fieldContext,
            b = d !== void 0 ? d : y.validateTrigger,
            S = o.getNamePath(),
            x = y.getInternalHooks,
            _ = y.getFieldsValue,
            R = x(Hn),
            O = R.dispatch,
            v = o.getValue(),
            C =
              p ||
              function (P) {
                return ee({}, h, P);
              },
            $ = s[u],
            E = F(F({}, s), C(v));
          E[u] = function () {
            (o.touched = !0), (o.dirty = !0), o.triggerMetaEvent();
            for (var P, w = arguments.length, I = new Array(w), M = 0; M < w; M++) I[M] = arguments[M];
            f ? (P = f.apply(void 0, I)) : (P = lh.apply(void 0, [h].concat(I))),
              g && (P = g(P, v, _(!0))),
              O({ type: 'updateValue', namePath: S, value: P }),
              $ && $.apply(void 0, I);
          };
          var T = xa(b || []);
          return (
            T.forEach(function (P) {
              var w = E[P];
              E[P] = function () {
                w && w.apply(void 0, arguments);
                var I = o.props.rules;
                I && I.length && O({ type: 'validateField', namePath: S, triggerName: P });
              };
            }),
            E
          );
        }),
        r.fieldContext)
      ) {
        var i = r.fieldContext.getInternalHooks,
          a = i(Hn),
          l = a.initEntityValue;
        l(bo(o));
      }
      return o;
    }
    return (
      Dt(n, [
        {
          key: 'componentDidMount',
          value: function () {
            var o = this.props,
              i = o.shouldUpdate,
              a = o.fieldContext;
            if (((this.mounted = !0), a)) {
              var l = a.getInternalHooks,
                s = l(Hn),
                c = s.registerField;
              this.cancelRegisterFunc = c(this);
            }
            i === !0 && this.reRender();
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
            var o = this.state.resetCount,
              i = this.props.children,
              a = this.getOnlyChild(i),
              l = a.child,
              s = a.isFunction,
              c;
            return (
              s
                ? (c = l)
                : kt(l)
                ? (c = gt(l, this.getControlled(l.props)))
                : (Qt(!l, '`children` of Field is not validate ReactElement.'), (c = l)),
              m.createElement(m.Fragment, { key: o }, c)
            );
          },
        },
      ]),
      n
    );
  })(m.Component);
  (Na.contextType = lr), (Na.defaultProps = { trigger: 'onChange', valuePropName: 'value' });
  function Kc(e) {
    var t = e.name,
      n = rt(e, mh),
      r = he(lr),
      o = t !== void 0 ? dt(t) : void 0,
      i = 'keep';
    return (
      n.isListField || (i = '_'.concat((o || []).join('_'))),
      m.createElement(Na, Ne({ key: i, name: o }, n, { fieldContext: r }))
    );
  }
  var gh = m.createContext(null),
    ph = function (t) {
      var n = t.name,
        r = t.initialValue,
        o = t.children,
        i = t.rules,
        a = t.validateTrigger,
        l = he(lr),
        s = L({ keys: [], id: 0 }),
        c = s.current,
        u = le(
          function () {
            var h = dt(l.prefixName) || [];
            return [].concat(fe(h), fe(dt(n)));
          },
          [l.prefixName, n],
        ),
        d = le(
          function () {
            return F(F({}, l), {}, { prefixName: u });
          },
          [l, u],
        ),
        f = le(
          function () {
            return {
              getKey: function (p) {
                var y = u.length,
                  b = p[y];
                return [c.keys[b], p.slice(y + 1)];
              },
            };
          },
          [u],
        );
      if (typeof o != 'function') return Qt(!1, 'Form.List only accepts function as children.'), null;
      var g = function (p, y, b) {
        var S = b.source;
        return S === 'internal' ? !1 : p !== y;
      };
      return m.createElement(
        gh.Provider,
        { value: f },
        m.createElement(
          lr.Provider,
          { value: d },
          m.createElement(
            Kc,
            { name: [], shouldUpdate: g, rules: i, validateTrigger: a, initialValue: r, isList: !0 },
            function (h, p) {
              var y = h.value,
                b = y === void 0 ? [] : y,
                S = h.onChange,
                x = l.getFieldValue,
                _ = function () {
                  var C = x(u || []);
                  return C || [];
                },
                R = {
                  add: function (C, $) {
                    var E = _();
                    $ >= 0 && $ <= E.length
                      ? ((c.keys = [].concat(fe(c.keys.slice(0, $)), [c.id], fe(c.keys.slice($)))),
                        S([].concat(fe(E.slice(0, $)), [C], fe(E.slice($)))))
                      : ((c.keys = [].concat(fe(c.keys), [c.id])), S([].concat(fe(E), [C]))),
                      (c.id += 1);
                  },
                  remove: function (C) {
                    var $ = _(),
                      E = new Set(Array.isArray(C) ? C : [C]);
                    E.size <= 0 ||
                      ((c.keys = c.keys.filter(function (T, P) {
                        return !E.has(P);
                      })),
                      S(
                        $.filter(function (T, P) {
                          return !E.has(P);
                        }),
                      ));
                  },
                  move: function (C, $) {
                    if (C !== $) {
                      var E = _();
                      C < 0 || C >= E.length || $ < 0 || $ >= E.length || ((c.keys = Wc(c.keys, C, $)), S(Wc(E, C, $)));
                    }
                  },
                },
                O = b || [];
              return (
                Array.isArray(O) || (O = []),
                o(
                  O.map(function (v, C) {
                    var $ = c.keys[C];
                    return (
                      $ === void 0 && ((c.keys[C] = c.id), ($ = c.keys[C]), (c.id += 1)),
                      { name: C, key: $, isListField: !0 }
                    );
                  }),
                  R,
                  p,
                )
              );
            },
          ),
        ),
      );
    };
  function hh(e) {
    var t = !1,
      n = e.length,
      r = [];
    return e.length
      ? new Promise(function (o, i) {
          e.forEach(function (a, l) {
            a.catch(function (s) {
              return (t = !0), s;
            }).then(function (s) {
              (n -= 1), (r[l] = s), !(n > 0) && (t && i(r), o(r));
            });
          });
        })
      : Promise.resolve([]);
  }
  var Xc = '__@field_split__';
  function Fa(e) {
    return e
      .map(function (t) {
        return ''.concat(De(t), ':').concat(t);
      })
      .join(Xc);
  }
  var cr = (function () {
      function e() {
        zt(this, e), (this.kvs = new Map());
      }
      return (
        Dt(e, [
          {
            key: 'set',
            value: function (n, r) {
              this.kvs.set(Fa(n), r);
            },
          },
          {
            key: 'get',
            value: function (n) {
              return this.kvs.get(Fa(n));
            },
          },
          {
            key: 'update',
            value: function (n, r) {
              var o = this.get(n),
                i = r(o);
              i ? this.set(n, i) : this.delete(n);
            },
          },
          {
            key: 'delete',
            value: function (n) {
              this.kvs.delete(Fa(n));
            },
          },
          {
            key: 'map',
            value: function (n) {
              return fe(this.kvs.entries()).map(function (r) {
                var o = V(r, 2),
                  i = o[0],
                  a = o[1],
                  l = i.split(Xc);
                return n({
                  key: l.map(function (s) {
                    var c = s.match(/^([^:]*):(.*)$/),
                      u = V(c, 3),
                      d = u[1],
                      f = u[2];
                    return d === 'number' ? Number(f) : f;
                  }),
                  value: a,
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
                  var o = r.key,
                    i = r.value;
                  return (n[o.join('.')] = i), null;
                }),
                n
              );
            },
          },
        ]),
        e
      );
    })(),
    vh = ['name', 'errors'],
    bh = Dt(function e(t) {
      var n = this;
      zt(this, e),
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
          return r === Hn
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
            : (Qt(!1, '`getInternalHooks` is internal usage. Should not call directly.'), null);
        }),
        (this.useSubscribe = function (r) {
          n.subscribable = r;
        }),
        (this.prevWithoutPreserves = null),
        (this.setInitialValues = function (r, o) {
          if (((n.initialValues = r || {}), o)) {
            var i,
              a = Wr({}, r, n.store);
            (i = n.prevWithoutPreserves) === null ||
              i === void 0 ||
              i.map(function (l) {
                var s = l.key;
                a = _n(a, s, On(r, s));
              }),
              (n.prevWithoutPreserves = null),
              n.updateStore(a);
          }
        }),
        (this.destroyForm = function () {
          var r = new cr();
          n.getFieldEntities(!0).forEach(function (o) {
            n.isMergedPreserve(o.isPreserve()) || r.set(o.getNamePath(), !0);
          }),
            (n.prevWithoutPreserves = r);
        }),
        (this.getInitialValue = function (r) {
          var o = On(n.initialValues, r);
          return r.length ? Zo(o) : o;
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
              n.watchList = n.watchList.filter(function (o) {
                return o !== r;
              });
            }
          );
        }),
        (this.notifyWatch = function () {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          if (n.watchList.length) {
            var o = n.getFieldsValue();
            n.watchList.forEach(function (i) {
              i(o, r);
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
            ? n.fieldEntities.filter(function (o) {
                return o.getNamePath().length;
              })
            : n.fieldEntities;
        }),
        (this.getFieldsMap = function () {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
            o = new cr();
          return (
            n.getFieldEntities(r).forEach(function (i) {
              var a = i.getNamePath();
              o.set(a, i);
            }),
            o
          );
        }),
        (this.getFieldEntitiesForNamePathList = function (r) {
          if (!r) return n.getFieldEntities(!0);
          var o = n.getFieldsMap(!0);
          return r.map(function (i) {
            var a = dt(i);
            return o.get(a) || { INVALIDATE_NAME_PATH: dt(i) };
          });
        }),
        (this.getFieldsValue = function (r, o) {
          if ((n.warningUnhooked(), r === !0 && !o)) return n.store;
          var i = n.getFieldEntitiesForNamePathList(Array.isArray(r) ? r : null),
            a = [];
          return (
            i.forEach(function (l) {
              var s,
                c = 'INVALIDATE_NAME_PATH' in l ? l.INVALIDATE_NAME_PATH : l.getNamePath();
              if (!(!r && !((s = l.isListField) === null || s === void 0) && s.call(l)))
                if (!o) a.push(c);
                else {
                  var u = 'getMeta' in l ? l.getMeta() : null;
                  o(u) && a.push(c);
                }
            }),
            Hc(n.store, a.map(dt))
          );
        }),
        (this.getFieldValue = function (r) {
          n.warningUnhooked();
          var o = dt(r);
          return On(n.store, o);
        }),
        (this.getFieldsError = function (r) {
          n.warningUnhooked();
          var o = n.getFieldEntitiesForNamePathList(r);
          return o.map(function (i, a) {
            return i && !('INVALIDATE_NAME_PATH' in i)
              ? { name: i.getNamePath(), errors: i.getErrors(), warnings: i.getWarnings() }
              : { name: dt(r[a]), errors: [], warnings: [] };
          });
        }),
        (this.getFieldError = function (r) {
          n.warningUnhooked();
          var o = dt(r),
            i = n.getFieldsError([o])[0];
          return i.errors;
        }),
        (this.getFieldWarning = function (r) {
          n.warningUnhooked();
          var o = dt(r),
            i = n.getFieldsError([o])[0];
          return i.warnings;
        }),
        (this.isFieldsTouched = function () {
          n.warningUnhooked();
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
          var a = o[0],
            l = o[1],
            s,
            c = !1;
          o.length === 0
            ? (s = null)
            : o.length === 1
            ? Array.isArray(a)
              ? ((s = a.map(dt)), (c = !1))
              : ((s = null), (c = a))
            : ((s = a.map(dt)), (c = l));
          var u = n.getFieldEntities(!0),
            d = function (y) {
              return y.isFieldTouched();
            };
          if (!s) return c ? u.every(d) : u.some(d);
          var f = new cr();
          s.forEach(function (p) {
            f.set(p, []);
          }),
            u.forEach(function (p) {
              var y = p.getNamePath();
              s.forEach(function (b) {
                b.every(function (S, x) {
                  return y[x] === S;
                }) &&
                  f.update(b, function (S) {
                    return [].concat(fe(S), [p]);
                  });
              });
            });
          var g = function (y) {
              return y.some(d);
            },
            h = f.map(function (p) {
              var y = p.value;
              return y;
            });
          return c ? h.every(g) : h.some(g);
        }),
        (this.isFieldTouched = function (r) {
          return n.warningUnhooked(), n.isFieldsTouched([r]);
        }),
        (this.isFieldsValidating = function (r) {
          n.warningUnhooked();
          var o = n.getFieldEntities();
          if (!r)
            return o.some(function (a) {
              return a.isFieldValidating();
            });
          var i = r.map(dt);
          return o.some(function (a) {
            var l = a.getNamePath();
            return Br(i, l) && a.isFieldValidating();
          });
        }),
        (this.isFieldValidating = function (r) {
          return n.warningUnhooked(), n.isFieldsValidating([r]);
        }),
        (this.resetWithFieldInitialValue = function () {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            o = new cr(),
            i = n.getFieldEntities(!0);
          i.forEach(function (s) {
            var c = s.props.initialValue,
              u = s.getNamePath();
            if (c !== void 0) {
              var d = o.get(u) || new Set();
              d.add({ entity: s, value: c }), o.set(u, d);
            }
          });
          var a = function (c) {
              c.forEach(function (u) {
                var d = u.props.initialValue;
                if (d !== void 0) {
                  var f = u.getNamePath(),
                    g = n.getInitialValue(f);
                  if (g !== void 0)
                    Qt(
                      !1,
                      "Form already set 'initialValues' with path '".concat(
                        f.join('.'),
                        "'. Field can not overwrite it.",
                      ),
                    );
                  else {
                    var h = o.get(f);
                    if (h && h.size > 1)
                      Qt(
                        !1,
                        "Multiple Field with path '".concat(
                          f.join('.'),
                          "' set 'initialValue'. Can not decide which one to pick.",
                        ),
                      );
                    else if (h) {
                      var p = n.getFieldValue(f);
                      (!r.skipExist || p === void 0) && n.updateStore(_n(n.store, f, fe(h)[0].value));
                    }
                  }
                }
              });
            },
            l;
          r.entities
            ? (l = r.entities)
            : r.namePathList
            ? ((l = []),
              r.namePathList.forEach(function (s) {
                var c = o.get(s);
                if (c) {
                  var u;
                  (u = l).push.apply(
                    u,
                    fe(
                      fe(c).map(function (d) {
                        return d.entity;
                      }),
                    ),
                  );
                }
              }))
            : (l = i),
            a(l);
        }),
        (this.resetFields = function (r) {
          n.warningUnhooked();
          var o = n.store;
          if (!r) {
            n.updateStore(Wr({}, n.initialValues)),
              n.resetWithFieldInitialValue(),
              n.notifyObservers(o, null, { type: 'reset' }),
              n.notifyWatch();
            return;
          }
          var i = r.map(dt);
          i.forEach(function (a) {
            var l = n.getInitialValue(a);
            n.updateStore(_n(n.store, a, l));
          }),
            n.resetWithFieldInitialValue({ namePathList: i }),
            n.notifyObservers(o, i, { type: 'reset' }),
            n.notifyWatch(i);
        }),
        (this.setFields = function (r) {
          n.warningUnhooked();
          var o = n.store,
            i = [];
          r.forEach(function (a) {
            var l = a.name;
            a.errors;
            var s = rt(a, vh),
              c = dt(l);
            i.push(c),
              'value' in s && n.updateStore(_n(n.store, c, s.value)),
              n.notifyObservers(o, [c], { type: 'setField', data: a });
          }),
            n.notifyWatch(i);
        }),
        (this.getFields = function () {
          var r = n.getFieldEntities(!0),
            o = r.map(function (i) {
              var a = i.getNamePath(),
                l = i.getMeta(),
                s = F(F({}, l), {}, { name: a, value: n.getFieldValue(a) });
              return Object.defineProperty(s, 'originRCField', { value: !0 }), s;
            });
          return o;
        }),
        (this.initEntityValue = function (r) {
          var o = r.props.initialValue;
          if (o !== void 0) {
            var i = r.getNamePath(),
              a = On(n.store, i);
            a === void 0 && n.updateStore(_n(n.store, i, o));
          }
        }),
        (this.isMergedPreserve = function (r) {
          var o = r !== void 0 ? r : n.preserve;
          return o ?? !0;
        }),
        (this.registerField = function (r) {
          n.fieldEntities.push(r);
          var o = r.getNamePath();
          if ((n.notifyWatch([o]), r.props.initialValue !== void 0)) {
            var i = n.store;
            n.resetWithFieldInitialValue({ entities: [r], skipExist: !0 }),
              n.notifyObservers(i, [r.getNamePath()], { type: 'valueUpdate', source: 'internal' });
          }
          return function (a, l) {
            var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
            if (
              ((n.fieldEntities = n.fieldEntities.filter(function (d) {
                return d !== r;
              })),
              !n.isMergedPreserve(l) && (!a || s.length > 1))
            ) {
              var c = a ? void 0 : n.getInitialValue(o);
              if (
                o.length &&
                n.getFieldValue(o) !== c &&
                n.fieldEntities.every(function (d) {
                  return !Bc(d.getNamePath(), o);
                })
              ) {
                var u = n.store;
                n.updateStore(_n(u, o, c, !0)),
                  n.notifyObservers(u, [o], { type: 'remove' }),
                  n.triggerDependenciesUpdate(u, o);
              }
            }
            n.notifyWatch([o]);
          };
        }),
        (this.dispatch = function (r) {
          switch (r.type) {
            case 'updateValue': {
              var o = r.namePath,
                i = r.value;
              n.updateValue(o, i);
              break;
            }
            case 'validateField': {
              var a = r.namePath,
                l = r.triggerName;
              n.validateFields([a], { triggerName: l });
              break;
            }
          }
        }),
        (this.notifyObservers = function (r, o, i) {
          if (n.subscribable) {
            var a = F(F({}, i), {}, { store: n.getFieldsValue(!0) });
            n.getFieldEntities().forEach(function (l) {
              var s = l.onStoreChange;
              s(r, o, a);
            });
          } else n.forceRootUpdate();
        }),
        (this.triggerDependenciesUpdate = function (r, o) {
          var i = n.getDependencyChildrenFields(o);
          return (
            i.length && n.validateFields(i),
            n.notifyObservers(r, i, { type: 'dependenciesUpdate', relatedFields: [o].concat(fe(i)) }),
            i
          );
        }),
        (this.updateValue = function (r, o) {
          var i = dt(r),
            a = n.store;
          n.updateStore(_n(n.store, i, o)),
            n.notifyObservers(a, [i], { type: 'valueUpdate', source: 'internal' }),
            n.notifyWatch([i]);
          var l = n.triggerDependenciesUpdate(a, i),
            s = n.callbacks.onValuesChange;
          if (s) {
            var c = Hc(n.store, [i]);
            s(c, n.getFieldsValue());
          }
          n.triggerOnFieldsChange([i].concat(fe(l)));
        }),
        (this.setFieldsValue = function (r) {
          n.warningUnhooked();
          var o = n.store;
          if (r) {
            var i = Wr(n.store, r);
            n.updateStore(i);
          }
          n.notifyObservers(o, null, { type: 'valueUpdate', source: 'external' }), n.notifyWatch();
        }),
        (this.setFieldValue = function (r, o) {
          n.setFields([{ name: r, value: o }]);
        }),
        (this.getDependencyChildrenFields = function (r) {
          var o = new Set(),
            i = [],
            a = new cr();
          n.getFieldEntities().forEach(function (s) {
            var c = s.props.dependencies;
            (c || []).forEach(function (u) {
              var d = dt(u);
              a.update(d, function () {
                var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Set();
                return f.add(s), f;
              });
            });
          });
          var l = function s(c) {
            var u = a.get(c) || new Set();
            u.forEach(function (d) {
              if (!o.has(d)) {
                o.add(d);
                var f = d.getNamePath();
                d.isFieldDirty() && f.length && (i.push(f), s(f));
              }
            });
          };
          return l(r), i;
        }),
        (this.triggerOnFieldsChange = function (r, o) {
          var i = n.callbacks.onFieldsChange;
          if (i) {
            var a = n.getFields();
            if (o) {
              var l = new cr();
              o.forEach(function (c) {
                var u = c.name,
                  d = c.errors;
                l.set(u, d);
              }),
                a.forEach(function (c) {
                  c.errors = l.get(c.name) || c.errors;
                });
            }
            var s = a.filter(function (c) {
              var u = c.name;
              return Br(r, u);
            });
            i(s, a);
          }
        }),
        (this.validateFields = function (r, o) {
          n.warningUnhooked();
          var i = !!r,
            a = i ? r.map(dt) : [],
            l = [];
          n.getFieldEntities(!0).forEach(function (u) {
            if ((i || a.push(u.getNamePath()), o != null && o.recursive && i)) {
              var d = u.getNamePath();
              d.every(function (h, p) {
                return r[p] === h || r[p] === void 0;
              }) && a.push(d);
            }
            if (!(!u.props.rules || !u.props.rules.length)) {
              var f = u.getNamePath();
              if (!i || Br(a, f)) {
                var g = u.validateRules(F({ validateMessages: F(F({}, zc), n.validateMessages) }, o));
                l.push(
                  g
                    .then(function () {
                      return { name: f, errors: [], warnings: [] };
                    })
                    .catch(function (h) {
                      var p,
                        y = [],
                        b = [];
                      return (
                        (p = h.forEach) === null ||
                          p === void 0 ||
                          p.call(h, function (S) {
                            var x = S.rule.warningOnly,
                              _ = S.errors;
                            x ? b.push.apply(b, fe(_)) : y.push.apply(y, fe(_));
                          }),
                        y.length
                          ? Promise.reject({ name: f, errors: y, warnings: b })
                          : { name: f, errors: y, warnings: b }
                      );
                    }),
                );
              }
            }
          });
          var s = hh(l);
          (n.lastValidatePromise = s),
            s
              .catch(function (u) {
                return u;
              })
              .then(function (u) {
                var d = u.map(function (f) {
                  var g = f.name;
                  return g;
                });
                n.notifyObservers(n.store, d, { type: 'validateFinish' }), n.triggerOnFieldsChange(d, u);
              });
          var c = s
            .then(function () {
              return n.lastValidatePromise === s ? Promise.resolve(n.getFieldsValue(a)) : Promise.reject([]);
            })
            .catch(function (u) {
              var d = u.filter(function (f) {
                return f && f.errors.length;
              });
              return Promise.reject({
                values: n.getFieldsValue(a),
                errorFields: d,
                outOfDate: n.lastValidatePromise !== s,
              });
            });
          return (
            c.catch(function (u) {
              return u;
            }),
            c
          );
        }),
        (this.submit = function () {
          n.warningUnhooked(),
            n
              .validateFields()
              .then(function (r) {
                var o = n.callbacks.onFinish;
                if (o)
                  try {
                    o(r);
                  } catch (i) {
                    console.error(i);
                  }
              })
              .catch(function (r) {
                var o = n.callbacks.onFinishFailed;
                o && o(r);
              });
        }),
        (this.forceRootUpdate = t);
    });
  function qc(e) {
    var t = L(),
      n = oe({}),
      r = V(n, 2),
      o = r[1];
    if (!t.current)
      if (e) t.current = e;
      else {
        var i = function () {
            o({});
          },
          a = new bh(i);
        t.current = a.getForm();
      }
    return [t.current];
  }
  var Aa = m.createContext({
      triggerFormChange: function () {},
      triggerFormFinish: function () {},
      registerForm: function () {},
      unregisterForm: function () {},
    }),
    Yc = function (t) {
      var n = t.validateMessages,
        r = t.onFormChange,
        o = t.onFormFinish,
        i = t.children,
        a = he(Aa),
        l = L({});
      return m.createElement(
        Aa.Provider,
        {
          value: F(
            F({}, a),
            {},
            {
              validateMessages: F(F({}, a.validateMessages), n),
              triggerFormChange: function (c, u) {
                r && r(c, { changedFields: u, forms: l.current }), a.triggerFormChange(c, u);
              },
              triggerFormFinish: function (c, u) {
                o && o(c, { values: u, forms: l.current }), a.triggerFormFinish(c, u);
              },
              registerForm: function (c, u) {
                c && (l.current = F(F({}, l.current), {}, ee({}, c, u))), a.registerForm(c, u);
              },
              unregisterForm: function (c) {
                var u = F({}, l.current);
                delete u[c], (l.current = u), a.unregisterForm(c);
              },
            },
          ),
        },
        i,
      );
    },
    yh = [
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
    Sh = function (t, n) {
      var r = t.name,
        o = t.initialValues,
        i = t.fields,
        a = t.form,
        l = t.preserve,
        s = t.children,
        c = t.component,
        u = c === void 0 ? 'form' : c,
        d = t.validateMessages,
        f = t.validateTrigger,
        g = f === void 0 ? 'onChange' : f,
        h = t.onValuesChange,
        p = t.onFieldsChange,
        y = t.onFinish,
        b = t.onFinishFailed,
        S = rt(t, yh),
        x = he(Aa),
        _ = qc(a),
        R = V(_, 1),
        O = R[0],
        v = O.getInternalHooks(Hn),
        C = v.useSubscribe,
        $ = v.setInitialValues,
        E = v.setCallbacks,
        T = v.setValidateMessages,
        P = v.setPreserve,
        w = v.destroyForm;
      bt(n, function () {
        return O;
      }),
        pe(
          function () {
            return (
              x.registerForm(r, O),
              function () {
                x.unregisterForm(r);
              }
            );
          },
          [x, O, r],
        ),
        T(F(F({}, x.validateMessages), d)),
        E({
          onValuesChange: h,
          onFieldsChange: function (Y) {
            if ((x.triggerFormChange(r, Y), p)) {
              for (var z = arguments.length, Z = new Array(z > 1 ? z - 1 : 0), J = 1; J < z; J++)
                Z[J - 1] = arguments[J];
              p.apply(void 0, [Y].concat(Z));
            }
          },
          onFinish: function (Y) {
            x.triggerFormFinish(r, Y), y && y(Y);
          },
          onFinishFailed: b,
        }),
        P(l);
      var I = L(null);
      $(o, !I.current),
        I.current || (I.current = !0),
        pe(function () {
          return w;
        }, []);
      var M,
        N = typeof s == 'function';
      if (N) {
        var A = O.getFieldsValue(!0);
        M = s(A, O);
      } else M = s;
      C(!N);
      var D = L();
      pe(
        function () {
          ah(D.current || [], i || []) || O.setFields(i || []), (D.current = i);
        },
        [i, O],
      );
      var j = le(
          function () {
            return F(F({}, O), {}, { validateTrigger: g });
          },
          [O, g],
        ),
        B = m.createElement(lr.Provider, { value: j }, M);
      return u === !1
        ? B
        : m.createElement(
            u,
            Ne({}, S, {
              onSubmit: function (Y) {
                Y.preventDefault(), Y.stopPropagation(), O.submit();
              },
              onReset: function (Y) {
                var z;
                Y.preventDefault(), O.resetFields(), (z = S.onReset) === null || z === void 0 || z.call(S, Y);
              },
            }),
            B,
          );
    };
  function Qc(e) {
    try {
      return JSON.stringify(e);
    } catch {
      return Math.random();
    }
  }
  function Ch() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var r = t[0],
      o = r === void 0 ? [] : r,
      i = t[1],
      a = oe(),
      l = V(a, 2),
      s = l[0],
      c = l[1],
      u = le(
        function () {
          return Qc(s);
        },
        [s],
      ),
      d = L(u);
    d.current = u;
    var f = he(lr),
      g = i || f,
      h = g && g._init,
      p = dt(o),
      y = L(p);
    return (
      (y.current = p),
      pe(
        function () {
          if (h) {
            var b = g.getFieldsValue,
              S = g.getInternalHooks,
              x = S(Hn),
              _ = x.registerWatch,
              R = _(function (v) {
                var C = On(v, y.current),
                  $ = Qc(C);
                d.current !== $ && ((d.current = $), c(C));
              }),
              O = On(b(), y.current);
            return c(O), R;
          }
        },
        [h],
      ),
      s
    );
  }
  var xh = ye(Sh),
    Ur = xh;
  (Ur.FormProvider = Yc), (Ur.Field = Kc), (Ur.List = ph), (Ur.useForm = qc), (Ur.useWatch = Ch);
  const Jc = {
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
  var wh = {
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
  const Zc = { placeholder: 'Select time', rangePlaceholder: ['Start time', 'End time'] },
    eu = {
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
        wh,
      ),
      timePickerLocale: Object.assign({}, Zc),
    },
    Ut = '${label} is not a valid ${type}',
    Gr = {
      locale: 'en',
      Pagination: Jc,
      DatePicker: eu,
      TimePicker: Zc,
      Calendar: eu,
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
            string: Ut,
            method: Ut,
            array: Ut,
            object: Ut,
            number: Ut,
            date: Ut,
            boolean: Ut,
            integer: Ut,
            float: Ut,
            regexp: Ut,
            email: Ut,
            url: Ut,
            hex: Ut,
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
  let za = Object.assign({}, Gr.Modal);
  function tu(e) {
    e ? (za = Object.assign(Object.assign({}, za), e)) : (za = Object.assign({}, Gr.Modal));
  }
  const Da = m.createContext(void 0),
    $h = 'internalMark',
    Eh = (e) => {
      const { locale: t = {}, children: n, _ANT_MARK__: r } = e;
      pe(
        () => (
          tu(t && t.Modal),
          () => {
            tu();
          }
        ),
        [t],
      );
      const o = le(() => Object.assign(Object.assign({}, t), { exist: !0 }), [t]);
      return m.createElement(Da.Provider, { value: o }, n);
    },
    Oh = '5.3.0',
    ei = [
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
  function It(e, t) {
    _h(e) && (e = '100%');
    var n = Ih(e);
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
  function ti(e) {
    return Math.min(1, Math.max(0, e));
  }
  function _h(e) {
    return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
  }
  function Ih(e) {
    return typeof e == 'string' && e.indexOf('%') !== -1;
  }
  function nu(e) {
    return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
  }
  function ni(e) {
    return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
  }
  function Vn(e) {
    return e.length === 1 ? '0' + e : String(e);
  }
  function Ph(e, t, n) {
    return { r: It(e, 255) * 255, g: It(t, 255) * 255, b: It(n, 255) * 255 };
  }
  function ru(e, t, n) {
    (e = It(e, 255)), (t = It(t, 255)), (n = It(n, 255));
    var r = Math.max(e, t, n),
      o = Math.min(e, t, n),
      i = 0,
      a = 0,
      l = (r + o) / 2;
    if (r === o) (a = 0), (i = 0);
    else {
      var s = r - o;
      switch (((a = l > 0.5 ? s / (2 - r - o) : s / (r + o)), r)) {
        case e:
          i = (t - n) / s + (t < n ? 6 : 0);
          break;
        case t:
          i = (n - e) / s + 2;
          break;
        case n:
          i = (e - t) / s + 4;
          break;
      }
      i /= 6;
    }
    return { h: i, s: a, l };
  }
  function ja(e, t, n) {
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
  function Rh(e, t, n) {
    var r, o, i;
    if (((e = It(e, 360)), (t = It(t, 100)), (n = It(n, 100)), t === 0)) (o = n), (i = n), (r = n);
    else {
      var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
        l = 2 * n - a;
      (r = ja(l, a, e + 0.3333333333333333)), (o = ja(l, a, e)), (i = ja(l, a, e - 0.3333333333333333));
    }
    return { r: r * 255, g: o * 255, b: i * 255 };
  }
  function La(e, t, n) {
    (e = It(e, 255)), (t = It(t, 255)), (n = It(n, 255));
    var r = Math.max(e, t, n),
      o = Math.min(e, t, n),
      i = 0,
      a = r,
      l = r - o,
      s = r === 0 ? 0 : l / r;
    if (r === o) i = 0;
    else {
      switch (r) {
        case e:
          i = (t - n) / l + (t < n ? 6 : 0);
          break;
        case t:
          i = (n - e) / l + 2;
          break;
        case n:
          i = (e - t) / l + 4;
          break;
      }
      i /= 6;
    }
    return { h: i, s, v: a };
  }
  function Th(e, t, n) {
    (e = It(e, 360) * 6), (t = It(t, 100)), (n = It(n, 100));
    var r = Math.floor(e),
      o = e - r,
      i = n * (1 - t),
      a = n * (1 - o * t),
      l = n * (1 - (1 - o) * t),
      s = r % 6,
      c = [n, a, i, i, l, n][s],
      u = [l, n, n, a, i, i][s],
      d = [i, i, l, n, n, a][s];
    return { r: c * 255, g: u * 255, b: d * 255 };
  }
  function Ha(e, t, n, r) {
    var o = [Vn(Math.round(e).toString(16)), Vn(Math.round(t).toString(16)), Vn(Math.round(n).toString(16))];
    return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1))
      ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
      : o.join('');
  }
  function Mh(e, t, n, r, o) {
    var i = [Vn(Math.round(e).toString(16)), Vn(Math.round(t).toString(16)), Vn(Math.round(n).toString(16)), Vn(Nh(r))];
    return o &&
      i[0].startsWith(i[0].charAt(1)) &&
      i[1].startsWith(i[1].charAt(1)) &&
      i[2].startsWith(i[2].charAt(1)) &&
      i[3].startsWith(i[3].charAt(1))
      ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
      : i.join('');
  }
  function Nh(e) {
    return Math.round(parseFloat(e) * 255).toString(16);
  }
  function ou(e) {
    return Gt(e) / 255;
  }
  function Gt(e) {
    return parseInt(e, 16);
  }
  function Fh(e) {
    return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
  }
  var ka = {
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
  function ur(e) {
    var t = { r: 0, g: 0, b: 0 },
      n = 1,
      r = null,
      o = null,
      i = null,
      a = !1,
      l = !1;
    return (
      typeof e == 'string' && (e = Dh(e)),
      typeof e == 'object' &&
        (pn(e.r) && pn(e.g) && pn(e.b)
          ? ((t = Ph(e.r, e.g, e.b)), (a = !0), (l = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
          : pn(e.h) && pn(e.s) && pn(e.v)
          ? ((r = ni(e.s)), (o = ni(e.v)), (t = Th(e.h, r, o)), (a = !0), (l = 'hsv'))
          : pn(e.h) && pn(e.s) && pn(e.l) && ((r = ni(e.s)), (i = ni(e.l)), (t = Rh(e.h, r, i)), (a = !0), (l = 'hsl')),
        Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
      (n = nu(n)),
      {
        ok: a,
        format: e.format || l,
        r: Math.min(255, Math.max(t.r, 0)),
        g: Math.min(255, Math.max(t.g, 0)),
        b: Math.min(255, Math.max(t.b, 0)),
        a: n,
      }
    );
  }
  var Ah = '[-\\+]?\\d+%?',
    zh = '[-\\+]?\\d*\\.\\d+%?',
    In = '(?:'.concat(zh, ')|(?:').concat(Ah, ')'),
    Va = '[\\s|\\(]+('.concat(In, ')[,|\\s]+(').concat(In, ')[,|\\s]+(').concat(In, ')\\s*\\)?'),
    Ba = '[\\s|\\(]+('
      .concat(In, ')[,|\\s]+(')
      .concat(In, ')[,|\\s]+(')
      .concat(In, ')[,|\\s]+(')
      .concat(In, ')\\s*\\)?'),
    an = {
      CSS_UNIT: new RegExp(In),
      rgb: new RegExp('rgb' + Va),
      rgba: new RegExp('rgba' + Ba),
      hsl: new RegExp('hsl' + Va),
      hsla: new RegExp('hsla' + Ba),
      hsv: new RegExp('hsv' + Va),
      hsva: new RegExp('hsva' + Ba),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    };
  function Dh(e) {
    if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
    var t = !1;
    if (ka[e]) (e = ka[e]), (t = !0);
    else if (e === 'transparent') return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    var n = an.rgb.exec(e);
    return n
      ? { r: n[1], g: n[2], b: n[3] }
      : ((n = an.rgba.exec(e)),
        n
          ? { r: n[1], g: n[2], b: n[3], a: n[4] }
          : ((n = an.hsl.exec(e)),
            n
              ? { h: n[1], s: n[2], l: n[3] }
              : ((n = an.hsla.exec(e)),
                n
                  ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                  : ((n = an.hsv.exec(e)),
                    n
                      ? { h: n[1], s: n[2], v: n[3] }
                      : ((n = an.hsva.exec(e)),
                        n
                          ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                          : ((n = an.hex8.exec(e)),
                            n
                              ? { r: Gt(n[1]), g: Gt(n[2]), b: Gt(n[3]), a: ou(n[4]), format: t ? 'name' : 'hex8' }
                              : ((n = an.hex6.exec(e)),
                                n
                                  ? { r: Gt(n[1]), g: Gt(n[2]), b: Gt(n[3]), format: t ? 'name' : 'hex' }
                                  : ((n = an.hex4.exec(e)),
                                    n
                                      ? {
                                          r: Gt(n[1] + n[1]),
                                          g: Gt(n[2] + n[2]),
                                          b: Gt(n[3] + n[3]),
                                          a: ou(n[4] + n[4]),
                                          format: t ? 'name' : 'hex8',
                                        }
                                      : ((n = an.hex3.exec(e)),
                                        n
                                          ? {
                                              r: Gt(n[1] + n[1]),
                                              g: Gt(n[2] + n[2]),
                                              b: Gt(n[3] + n[3]),
                                              format: t ? 'name' : 'hex',
                                            }
                                          : !1)))))))));
  }
  function pn(e) {
    return Boolean(an.CSS_UNIT.exec(String(e)));
  }
  var St = (function () {
      function e(t, n) {
        t === void 0 && (t = ''), n === void 0 && (n = {});
        var r;
        if (t instanceof e) return t;
        typeof t == 'number' && (t = Fh(t)), (this.originalInput = t);
        var o = ur(t);
        (this.originalInput = t),
          (this.r = o.r),
          (this.g = o.g),
          (this.b = o.b),
          (this.a = o.a),
          (this.roundA = Math.round(100 * this.a) / 100),
          (this.format = (r = n.format) !== null && r !== void 0 ? r : o.format),
          (this.gradientType = n.gradientType),
          this.r < 1 && (this.r = Math.round(this.r)),
          this.g < 1 && (this.g = Math.round(this.g)),
          this.b < 1 && (this.b = Math.round(this.b)),
          (this.isValid = o.ok);
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
            o,
            i = t.r / 255,
            a = t.g / 255,
            l = t.b / 255;
          return (
            i <= 0.03928 ? (n = i / 12.92) : (n = Math.pow((i + 0.055) / 1.055, 2.4)),
            a <= 0.03928 ? (r = a / 12.92) : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
            l <= 0.03928 ? (o = l / 12.92) : (o = Math.pow((l + 0.055) / 1.055, 2.4)),
            0.2126 * n + 0.7152 * r + 0.0722 * o
          );
        }),
        (e.prototype.getAlpha = function () {
          return this.a;
        }),
        (e.prototype.setAlpha = function (t) {
          return (this.a = nu(t)), (this.roundA = Math.round(100 * this.a) / 100), this;
        }),
        (e.prototype.isMonochrome = function () {
          var t = this.toHsl().s;
          return t === 0;
        }),
        (e.prototype.toHsv = function () {
          var t = La(this.r, this.g, this.b);
          return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
        }),
        (e.prototype.toHsvString = function () {
          var t = La(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            o = Math.round(t.v * 100);
          return this.a === 1
            ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
            : 'hsva('.concat(n, ', ').concat(r, '%, ').concat(o, '%, ').concat(this.roundA, ')');
        }),
        (e.prototype.toHsl = function () {
          var t = ru(this.r, this.g, this.b);
          return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
        }),
        (e.prototype.toHslString = function () {
          var t = ru(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            o = Math.round(t.l * 100);
          return this.a === 1
            ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
            : 'hsla('.concat(n, ', ').concat(r, '%, ').concat(o, '%, ').concat(this.roundA, ')');
        }),
        (e.prototype.toHex = function (t) {
          return t === void 0 && (t = !1), Ha(this.r, this.g, this.b, t);
        }),
        (e.prototype.toHexString = function (t) {
          return t === void 0 && (t = !1), '#' + this.toHex(t);
        }),
        (e.prototype.toHex8 = function (t) {
          return t === void 0 && (t = !1), Mh(this.r, this.g, this.b, this.a, t);
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
            return ''.concat(Math.round(It(n, 255) * 100), '%');
          };
          return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
        }),
        (e.prototype.toPercentageRgbString = function () {
          var t = function (n) {
            return Math.round(It(n, 255) * 100);
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
          for (var t = '#' + Ha(this.r, this.g, this.b, !1), n = 0, r = Object.entries(ka); n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            if (t === a) return i;
          }
          return !1;
        }),
        (e.prototype.toString = function (t) {
          var n = Boolean(t);
          t = t ?? this.format;
          var r = !1,
            o = this.a < 1 && this.a >= 0,
            i = !n && o && (t.startsWith('hex') || t === 'name');
          return i
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
          return (n.l += t / 100), (n.l = ti(n.l)), new e(n);
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
          return (n.l -= t / 100), (n.l = ti(n.l)), new e(n);
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
          return (n.s -= t / 100), (n.s = ti(n.s)), new e(n);
        }),
        (e.prototype.saturate = function (t) {
          t === void 0 && (t = 10);
          var n = this.toHsl();
          return (n.s += t / 100), (n.s = ti(n.s)), new e(n);
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
            o = new e(t).toRgb(),
            i = n / 100,
            a = {
              r: (o.r - r.r) * i + r.r,
              g: (o.g - r.g) * i + r.g,
              b: (o.b - r.b) * i + r.b,
              a: (o.a - r.a) * i + r.a,
            };
          return new e(a);
        }),
        (e.prototype.analogous = function (t, n) {
          t === void 0 && (t = 6), n === void 0 && (n = 30);
          var r = this.toHsl(),
            o = 360 / n,
            i = [this];
          for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; ) (r.h = (r.h + o) % 360), i.push(new e(r));
          return i;
        }),
        (e.prototype.complement = function () {
          var t = this.toHsl();
          return (t.h = (t.h + 180) % 360), new e(t);
        }),
        (e.prototype.monochromatic = function (t) {
          t === void 0 && (t = 6);
          for (var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], l = 1 / t; t--; )
            a.push(new e({ h: r, s: o, v: i })), (i = (i + l) % 1);
          return a;
        }),
        (e.prototype.splitcomplement = function () {
          var t = this.toHsl(),
            n = t.h;
          return [this, new e({ h: (n + 72) % 360, s: t.s, l: t.l }), new e({ h: (n + 216) % 360, s: t.s, l: t.l })];
        }),
        (e.prototype.onBackground = function (t) {
          var n = this.toRgb(),
            r = new e(t).toRgb(),
            o = n.a + r.a * (1 - n.a);
          return new e({
            r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
            g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
            b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
            a: o,
          });
        }),
        (e.prototype.triad = function () {
          return this.polyad(3);
        }),
        (e.prototype.tetrad = function () {
          return this.polyad(4);
        }),
        (e.prototype.polyad = function (t) {
          for (var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1; a < t; a++)
            o.push(new e({ h: (r + a * i) % 360, s: n.s, l: n.l }));
          return o;
        }),
        (e.prototype.equals = function (t) {
          return this.toRgbString() === new e(t).toRgbString();
        }),
        e
      );
    })(),
    ri = 2,
    iu = 0.16,
    jh = 0.05,
    Lh = 0.05,
    Hh = 0.15,
    au = 5,
    lu = 4,
    kh = [
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
  function su(e) {
    var t = e.r,
      n = e.g,
      r = e.b,
      o = La(t, n, r);
    return { h: o.h * 360, s: o.s, v: o.v };
  }
  function oi(e) {
    var t = e.r,
      n = e.g,
      r = e.b;
    return '#'.concat(Ha(t, n, r, !1));
  }
  function Vh(e, t, n) {
    var r = n / 100,
      o = { r: (t.r - e.r) * r + e.r, g: (t.g - e.g) * r + e.g, b: (t.b - e.b) * r + e.b };
    return o;
  }
  function cu(e, t, n) {
    var r;
    return (
      Math.round(e.h) >= 60 && Math.round(e.h) <= 240
        ? (r = n ? Math.round(e.h) - ri * t : Math.round(e.h) + ri * t)
        : (r = n ? Math.round(e.h) + ri * t : Math.round(e.h) - ri * t),
      r < 0 ? (r += 360) : r >= 360 && (r -= 360),
      r
    );
  }
  function uu(e, t, n) {
    if (e.h === 0 && e.s === 0) return e.s;
    var r;
    return (
      n ? (r = e.s - iu * t) : t === lu ? (r = e.s + iu) : (r = e.s + jh * t),
      r > 1 && (r = 1),
      n && t === au && r > 0.1 && (r = 0.1),
      r < 0.06 && (r = 0.06),
      Number(r.toFixed(2))
    );
  }
  function du(e, t, n) {
    var r;
    return n ? (r = e.v + Lh * t) : (r = e.v - Hh * t), r > 1 && (r = 1), Number(r.toFixed(2));
  }
  function hn(e) {
    for (
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = ur(e), o = au;
      o > 0;
      o -= 1
    ) {
      var i = su(r),
        a = oi(ur({ h: cu(i, o, !0), s: uu(i, o, !0), v: du(i, o, !0) }));
      n.push(a);
    }
    n.push(oi(r));
    for (var l = 1; l <= lu; l += 1) {
      var s = su(r),
        c = oi(ur({ h: cu(s, l), s: uu(s, l), v: du(s, l) }));
      n.push(c);
    }
    return t.theme === 'dark'
      ? kh.map(function (u) {
          var d = u.index,
            f = u.opacity,
            g = oi(Vh(ur(t.backgroundColor || '#141414'), ur(n[d]), f * 100));
          return g;
        })
      : n;
  }
  var Wa = {
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
    ii = {},
    Ua = {};
  Object.keys(Wa).forEach(function (e) {
    (ii[e] = hn(Wa[e])),
      (ii[e].primary = ii[e][5]),
      (Ua[e] = hn(Wa[e], { theme: 'dark', backgroundColor: '#141414' })),
      (Ua[e].primary = Ua[e][5]);
  });
  var Bh = ii.gold;
  const fu = (e) => {
    const { controlHeight: t } = e;
    return { controlHeightSM: t * 0.75, controlHeightXS: t * 0.5, controlHeightLG: t * 1.25 };
  };
  function Wh(e) {
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
  const Ga = {
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
    ai = Object.assign(Object.assign({}, Ga), {
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
  function mu(e, t) {
    let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t;
    const {
        colorSuccess: o,
        colorWarning: i,
        colorError: a,
        colorInfo: l,
        colorPrimary: s,
        colorBgBase: c,
        colorTextBase: u,
      } = e,
      d = n(s),
      f = n(o),
      g = n(i),
      h = n(a),
      p = n(l),
      y = r(c, u);
    return Object.assign(Object.assign({}, y), {
      colorPrimaryBg: d[1],
      colorPrimaryBgHover: d[2],
      colorPrimaryBorder: d[3],
      colorPrimaryBorderHover: d[4],
      colorPrimaryHover: d[5],
      colorPrimary: d[6],
      colorPrimaryActive: d[7],
      colorPrimaryTextHover: d[8],
      colorPrimaryText: d[9],
      colorPrimaryTextActive: d[10],
      colorSuccessBg: f[1],
      colorSuccessBgHover: f[2],
      colorSuccessBorder: f[3],
      colorSuccessBorderHover: f[4],
      colorSuccessHover: f[4],
      colorSuccess: f[6],
      colorSuccessActive: f[7],
      colorSuccessTextHover: f[8],
      colorSuccessText: f[9],
      colorSuccessTextActive: f[10],
      colorErrorBg: h[1],
      colorErrorBgHover: h[2],
      colorErrorBorder: h[3],
      colorErrorBorderHover: h[4],
      colorErrorHover: h[5],
      colorError: h[6],
      colorErrorActive: h[7],
      colorErrorTextHover: h[8],
      colorErrorText: h[9],
      colorErrorTextActive: h[10],
      colorWarningBg: g[1],
      colorWarningBgHover: g[2],
      colorWarningBorder: g[3],
      colorWarningBorderHover: g[4],
      colorWarningHover: g[4],
      colorWarning: g[6],
      colorWarningActive: g[7],
      colorWarningTextHover: g[8],
      colorWarningText: g[9],
      colorWarningTextActive: g[10],
      colorInfoBg: p[1],
      colorInfoBgHover: p[2],
      colorInfoBorder: p[3],
      colorInfoBorderHover: p[4],
      colorInfoHover: p[4],
      colorInfo: p[6],
      colorInfoActive: p[7],
      colorInfoTextHover: p[8],
      colorInfoText: p[9],
      colorInfoTextActive: p[10],
      colorBgMask: new St('#000').setAlpha(0.45).toRgbString(),
      colorWhite: '#fff',
    });
  }
  const Uh = (e) => {
    let t = e,
      n = e,
      r = e,
      o = e;
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
      e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
      { borderRadius: e > 16 ? 16 : e, borderRadiusXS: r, borderRadiusSM: n, borderRadiusLG: t, borderRadiusOuter: o }
    );
  };
  function Gh(e) {
    const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: o } = e;
    return Object.assign(
      {
        motionDurationFast: `${(n + t).toFixed(1)}s`,
        motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
        motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
        lineWidthBold: o + 1,
      },
      Uh(r),
    );
  }
  const vn = (e, t) => new St(e).setAlpha(t).toRgbString(),
    Kr = (e, t) => new St(e).darken(t).toHexString(),
    Kh = (e) => {
      const t = hn(e);
      return { 1: t[0], 2: t[1], 3: t[2], 4: t[3], 5: t[4], 6: t[5], 7: t[6], 8: t[4], 9: t[5], 10: t[6] };
    },
    Xh = (e, t) => {
      const n = e || '#fff',
        r = t || '#000';
      return {
        colorBgBase: n,
        colorTextBase: r,
        colorText: vn(r, 0.88),
        colorTextSecondary: vn(r, 0.65),
        colorTextTertiary: vn(r, 0.45),
        colorTextQuaternary: vn(r, 0.25),
        colorFill: vn(r, 0.15),
        colorFillSecondary: vn(r, 0.06),
        colorFillTertiary: vn(r, 0.04),
        colorFillQuaternary: vn(r, 0.02),
        colorBgLayout: Kr(n, 4),
        colorBgContainer: Kr(n, 0),
        colorBgElevated: Kr(n, 0),
        colorBgSpotlight: vn(r, 0.85),
        colorBorder: Kr(n, 15),
        colorBorderSecondary: Kr(n, 6),
      };
    };
  function qh(e) {
    const t = new Array(10).fill(null).map((n, r) => {
      const o = r - 1,
        i = e * Math.pow(2.71828, o / 5),
        a = r > 1 ? Math.floor(i) : Math.ceil(i);
      return Math.floor(a / 2) * 2;
    });
    return (
      (t[1] = e),
      t.map((n) => {
        const r = n + 8;
        return { size: n, lineHeight: r / n };
      })
    );
  }
  const gu = (e) => {
    const t = qh(e),
      n = t.map((o) => o.size),
      r = t.map((o) => o.lineHeight);
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
  function li(e) {
    const t = Object.keys(Ga)
      .map((n) => {
        const r = hn(e[n]);
        return new Array(10)
          .fill(1)
          .reduce((o, i, a) => ((o[`${n}-${a + 1}`] = r[a]), (o[`${n}${a + 1}`] = r[a]), o), {});
      })
      .reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {});
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, e), t),
              mu(e, { generateColorPalettes: Kh, generateNeutralColorPalettes: Xh }),
            ),
            gu(e.fontSize),
          ),
          Wh(e),
        ),
        fu(e),
      ),
      Gh(e),
    );
  }
  function Ka(e) {
    return e >= 0 && e <= 255;
  }
  function si(e, t) {
    const { r: n, g: r, b: o, a: i } = new St(e).toRgb();
    if (i < 1) return e;
    const { r: a, g: l, b: s } = new St(t).toRgb();
    for (let c = 0.01; c <= 1; c += 0.01) {
      const u = Math.round((n - a * (1 - c)) / c),
        d = Math.round((r - l * (1 - c)) / c),
        f = Math.round((o - s * (1 - c)) / c);
      if (Ka(u) && Ka(d) && Ka(f)) return new St({ r: u, g: d, b: f, a: Math.round(c * 100) / 100 }).toRgbString();
    }
    return new St({ r: n, g: r, b: o, a: 1 }).toRgbString();
  }
  var Yh =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  function Qh(e) {
    const { override: t } = e,
      n = Yh(e, ['override']),
      r = Object.assign({}, t);
    Object.keys(ai).forEach((f) => {
      delete r[f];
    });
    const o = Object.assign(Object.assign({}, n), r),
      i = 480,
      a = 576,
      l = 768,
      s = 992,
      c = 1200,
      u = 1600;
    return Object.assign(
      Object.assign(Object.assign({}, o), {
        colorLink: o.colorInfoText,
        colorLinkHover: o.colorInfoHover,
        colorLinkActive: o.colorInfoActive,
        colorFillContent: o.colorFillSecondary,
        colorFillContentHover: o.colorFill,
        colorFillAlter: o.colorFillQuaternary,
        colorBgContainerDisabled: o.colorFillTertiary,
        colorBorderBg: o.colorBgContainer,
        colorSplit: si(o.colorBorderSecondary, o.colorBgContainer),
        colorTextPlaceholder: o.colorTextQuaternary,
        colorTextDisabled: o.colorTextQuaternary,
        colorTextHeading: o.colorText,
        colorTextLabel: o.colorTextSecondary,
        colorTextDescription: o.colorTextTertiary,
        colorTextLightSolid: o.colorWhite,
        colorHighlight: o.colorError,
        colorBgTextHover: o.colorFillSecondary,
        colorBgTextActive: o.colorFill,
        colorIcon: o.colorTextTertiary,
        colorIconHover: o.colorText,
        colorErrorOutline: si(o.colorErrorBg, o.colorBgContainer),
        colorWarningOutline: si(o.colorWarningBg, o.colorBgContainer),
        fontSizeIcon: o.fontSizeSM,
        lineWidthFocus: o.lineWidth * 4,
        lineWidth: o.lineWidth,
        controlOutlineWidth: o.lineWidth * 2,
        controlInteractiveSize: o.controlHeight / 2,
        controlItemBgHover: o.colorFillTertiary,
        controlItemBgActive: o.colorPrimaryBg,
        controlItemBgActiveHover: o.colorPrimaryBgHover,
        controlItemBgActiveDisabled: o.colorFill,
        controlTmpOutline: o.colorFillQuaternary,
        controlOutline: si(o.colorPrimaryBg, o.colorBgContainer),
        lineType: o.lineType,
        borderRadius: o.borderRadius,
        borderRadiusXS: o.borderRadiusXS,
        borderRadiusSM: o.borderRadiusSM,
        borderRadiusLG: o.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: 'none',
        linkHoverDecoration: 'none',
        linkFocusDecoration: 'none',
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: o.sizeXXS,
        paddingXS: o.sizeXS,
        paddingSM: o.sizeSM,
        padding: o.size,
        paddingMD: o.sizeMD,
        paddingLG: o.sizeLG,
        paddingXL: o.sizeXL,
        paddingContentHorizontalLG: o.sizeLG,
        paddingContentVerticalLG: o.sizeMS,
        paddingContentHorizontal: o.sizeMS,
        paddingContentVertical: o.sizeSM,
        paddingContentHorizontalSM: o.size,
        paddingContentVerticalSM: o.sizeXS,
        marginXXS: o.sizeXXS,
        marginXS: o.sizeXS,
        marginSM: o.sizeSM,
        margin: o.size,
        marginMD: o.sizeMD,
        marginLG: o.sizeLG,
        marginXL: o.sizeXL,
        marginXXL: o.sizeXXL,
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
        screenXS: i,
        screenXSMin: i,
        screenXSMax: a - 1,
        screenSM: a,
        screenSMMin: a,
        screenSMMax: l - 1,
        screenMD: l,
        screenMDMin: l,
        screenMDMax: s - 1,
        screenLG: s,
        screenLGMin: s,
        screenLGMax: c - 1,
        screenXL: c,
        screenXLMin: c,
        screenXLMax: u - 1,
        screenXXL: u,
        screenXXLMin: u,
        boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
        boxShadowCard: `
      0 1px 2px -2px ${new St('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new St('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new St('rgba(0, 0, 0, 0.09)').toRgbString()}
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
  const pu = (e) => ({
    color: e.colorLink,
    textDecoration: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: `color ${e.motionDurationSlow}`,
    '&:focus, &:hover': { color: e.colorLinkHover },
    '&:active': { color: e.colorLinkActive },
  });
  function Jh(e, t) {
    return ei.reduce((n, r) => {
      const o = e[`${r}1`],
        i = e[`${r}3`],
        a = e[`${r}6`],
        l = e[`${r}7`];
      return Object.assign(
        Object.assign({}, n),
        t(r, { lightColor: o, lightBorderColor: i, darkColor: a, textColor: l }),
      );
    }, {});
  }
  const Zh = (e, t, n, r, o) => {
      const i = e / 2,
        a = 0,
        l = i,
        s = (n * 1) / Math.sqrt(2),
        c = i - n * (1 - 1 / Math.sqrt(2)),
        u = i - t * (1 / Math.sqrt(2)),
        d = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)),
        f = 2 * i - u,
        g = d,
        h = 2 * i - s,
        p = c,
        y = 2 * i - a,
        b = l,
        S = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2);
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
          clipPath: `path('M ${a} ${l} A ${n} ${n} 0 0 0 ${s} ${c} L ${u} ${d} A ${t} ${t} 0 0 1 ${f} ${g} L ${h} ${p} A ${n} ${n} 0 0 0 ${y} ${b} Z')`,
          content: '""',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: S,
          height: S,
          bottom: 0,
          insetInline: 0,
          margin: 'auto',
          borderRadius: { _skip_check_: !0, value: `0 0 ${t}px 0` },
          transform: 'translateY(50%) rotate(-135deg)',
          boxShadow: o,
          zIndex: 0,
          background: 'transparent',
        },
      };
    },
    Xr = { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' },
    ln = (e) => ({
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      listStyle: 'none',
      fontFamily: e.fontFamily,
    }),
    Xa = () => ({
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
    ev = () => ({
      '&::before': { display: 'table', content: '""' },
      '&::after': { display: 'table', clear: 'both', content: '""' },
    }),
    tv = (e) => ({
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
    nv = (e, t) => {
      const { fontFamily: n, fontSize: r } = e,
        o = `[class^="${t}"], [class*=" ${t}"]`;
      return {
        [o]: {
          fontFamily: n,
          fontSize: r,
          boxSizing: 'border-box',
          '&::before, &::after': { boxSizing: 'border-box' },
          [o]: { boxSizing: 'border-box', '&::before, &::after': { boxSizing: 'border-box' } },
        },
      };
    },
    qa = (e) => ({
      outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
      outlineOffset: 1,
      transition: 'outline-offset 0s, outline 0s',
    }),
    rv = (e) => ({ '&:focus-visible': Object.assign({}, qa(e)) }),
    Ya = 'anticon',
    ov = (e, t) => t || (e ? `ant-${e}` : 'ant'),
    qe = m.createContext({ getPrefixCls: ov, iconPrefixCls: Ya });
  function jt(e, t, n) {
    return (r) => {
      const [o, i, a] = dr(),
        { getPrefixCls: l, iconPrefixCls: s } = he(qe),
        c = l();
      return (
        ba({ theme: o, token: i, hashId: a, path: ['Shared', c] }, () => [{ '&': tv(i) }]),
        [
          ba({ theme: o, token: i, hashId: a, path: [e, r, s] }, () => {
            const { token: u, flush: d } = av(i),
              f = typeof n == 'function' ? n(u) : n,
              g = Object.assign(Object.assign({}, f), i[e]),
              h = `.${r}`,
              p = it(u, { componentCls: h, prefixCls: r, iconCls: `.${s}`, antCls: `.${c}` }, g),
              y = t(p, { hashId: a, prefixCls: r, rootPrefixCls: c, iconPrefixCls: s, overrideComponentToken: i[e] });
            return d(e, g), [nv(i, r), y];
          }),
          a,
        ]
      );
    };
  }
  const hu = typeof CSSINJS_STATISTIC < 'u';
  let Qa = !0;
  function it() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    if (!hu) return Object.assign.apply(Object, [{}].concat(t));
    Qa = !1;
    const r = {};
    return (
      t.forEach((o) => {
        Object.keys(o).forEach((a) => {
          Object.defineProperty(r, a, { configurable: !0, enumerable: !0, get: () => o[a] });
        });
      }),
      (Qa = !0),
      r
    );
  }
  function iv() {}
  function av(e) {
    let t,
      n = e,
      r = iv;
    return (
      hu &&
        ((t = new Set()),
        (n = new Proxy(e, {
          get(o, i) {
            return Qa && t.add(i), o[i];
          },
        })),
        (r = (o, i) => {
          Array.from(t);
        })),
      { token: n, keys: t, flush: r }
    );
  }
  const lv = Ic(li),
    ci = { token: ai, hashed: !0 },
    vu = ie.createContext(ci);
  function dr() {
    const { token: e, hashed: t, theme: n, components: r } = ie.useContext(vu),
      o = `${Oh}-${t || ''}`,
      i = n || lv,
      [a, l] = Zg(i, [ai, e], { salt: o, override: Object.assign({ override: e }, r), formatToken: Qh });
    return [i, a, t ? l : ''];
  }
  const sv = `-ant-${Date.now()}-${Math.random()}`;
  function cv(e, t) {
    const n = {},
      r = (a, l) => {
        let s = a.clone();
        return (s = (l == null ? void 0 : l(s)) || s), s.toRgbString();
      },
      o = (a, l) => {
        const s = new St(a),
          c = hn(s.toRgbString());
        (n[`${l}-color`] = r(s)),
          (n[`${l}-color-disabled`] = c[1]),
          (n[`${l}-color-hover`] = c[4]),
          (n[`${l}-color-active`] = c[6]),
          (n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString()),
          (n[`${l}-color-deprecated-bg`] = c[0]),
          (n[`${l}-color-deprecated-border`] = c[2]);
      };
    if (t.primaryColor) {
      o(t.primaryColor, 'primary');
      const a = new St(t.primaryColor),
        l = hn(a.toRgbString());
      l.forEach((c, u) => {
        n[`primary-${u + 1}`] = c;
      }),
        (n['primary-color-deprecated-l-35'] = r(a, (c) => c.lighten(35))),
        (n['primary-color-deprecated-l-20'] = r(a, (c) => c.lighten(20))),
        (n['primary-color-deprecated-t-20'] = r(a, (c) => c.tint(20))),
        (n['primary-color-deprecated-t-50'] = r(a, (c) => c.tint(50))),
        (n['primary-color-deprecated-f-12'] = r(a, (c) => c.setAlpha(c.getAlpha() * 0.12)));
      const s = new St(l[0]);
      (n['primary-color-active-deprecated-f-30'] = r(s, (c) => c.setAlpha(c.getAlpha() * 0.3))),
        (n['primary-color-active-deprecated-d-02'] = r(s, (c) => c.darken(2)));
    }
    return (
      t.successColor && o(t.successColor, 'success'),
      t.warningColor && o(t.warningColor, 'warning'),
      t.errorColor && o(t.errorColor, 'error'),
      t.infoColor && o(t.infoColor, 'info'),
      `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()
    );
  }
  function uv(e, t) {
    const n = cv(e, t);
    Tt() && rr(n, `${sv}-dynamic-theme`);
  }
  const Ja = m.createContext(!1),
    dv = (e) => {
      let { children: t, disabled: n } = e;
      const r = he(Ja);
      return m.createElement(Ja.Provider, { value: n ?? r }, t);
    },
    Za = Ja,
    el = m.createContext(void 0),
    fv = (e) => {
      let { children: t, size: n } = e;
      const r = he(el);
      return m.createElement(el.Provider, { value: n || r }, t);
    },
    qr = el;
  function mv() {
    const e = he(Za),
      t = he(qr);
    return { componentDisabled: e, componentSize: t };
  }
  function gv(e, t) {
    const n = e || {},
      r = n.inherit === !1 || !t ? ci : t;
    return Ao(
      () => {
        if (!e) return t;
        const i = Object.assign({}, r.components);
        return (
          Object.keys(e.components || {}).forEach((a) => {
            i[a] = Object.assign(Object.assign({}, i[a]), e.components[a]);
          }),
          Object.assign(Object.assign(Object.assign({}, r), n), {
            token: Object.assign(Object.assign({}, r.token), n.token),
            components: i,
          })
        );
      },
      [n, r],
      (i, a) =>
        i.some((l, s) => {
          const c = a[s];
          return !Dg(l, c, !0);
        }),
    );
  }
  const pv = (e) => {
    const [t, n] = dr();
    return ba({ theme: t, token: n, hashId: '', path: ['ant-design-icons', e] }, () => [
      { [`.${e}`]: Object.assign(Object.assign({}, Xa()), { [`.${e} .${e}-icon`]: { display: 'block' } }) },
    ]);
  };
  var hv =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const vv = [
      'getTargetContainer',
      'getPopupContainer',
      'renderEmpty',
      'pageHeader',
      'input',
      'pagination',
      'form',
      'select',
    ],
    bv = 'ant';
  let ui, bu;
  function di() {
    return ui || bv;
  }
  function yv() {
    return bu || Ya;
  }
  const Sv = (e) => {
      let { prefixCls: t, iconPrefixCls: n, theme: r } = e;
      t !== void 0 && (ui = t), n !== void 0 && (bu = n), r && uv(di(), r);
    },
    yu = () => ({
      getPrefixCls: (e, t) => t || (e ? `${di()}-${e}` : di()),
      getIconPrefixCls: yv,
      getRootPrefixCls: () => ui || di(),
    }),
    Cv = (e) => {
      const {
          children: t,
          csp: n,
          autoInsertSpaceInButton: r,
          form: o,
          locale: i,
          componentSize: a,
          direction: l,
          space: s,
          virtual: c,
          dropdownMatchSelectWidth: u,
          legacyLocale: d,
          parentContext: f,
          iconPrefixCls: g,
          theme: h,
          componentDisabled: p,
        } = e,
        y = ut(
          (w, I) => {
            const { prefixCls: M } = e;
            if (I) return I;
            const N = M || f.getPrefixCls('');
            return w ? `${N}-${w}` : N;
          },
          [f.getPrefixCls, e.prefixCls],
        ),
        b = g || f.iconPrefixCls || Ya,
        S = b !== f.iconPrefixCls,
        x = n || f.csp,
        _ = pv(b),
        R = gv(h, f.theme),
        O = {
          csp: x,
          autoInsertSpaceInButton: r,
          locale: i || d,
          direction: l,
          space: s,
          virtual: c,
          dropdownMatchSelectWidth: u,
          getPrefixCls: y,
          iconPrefixCls: b,
          theme: R,
        },
        v = Object.assign({}, f);
      Object.keys(O).forEach((w) => {
        O[w] !== void 0 && (v[w] = O[w]);
      }),
        vv.forEach((w) => {
          const I = e[w];
          I && (v[w] = I);
        });
      const C = Ao(
          () => v,
          v,
          (w, I) => {
            const M = Object.keys(w),
              N = Object.keys(I);
            return M.length !== N.length || M.some((A) => w[A] !== I[A]);
          },
        ),
        $ = le(() => ({ prefixCls: b, csp: x }), [b, x]);
      let E = S ? _(t) : t;
      const T = le(() => {
        var w, I, M;
        return Wr(
          {},
          ((w = Gr.Form) === null || w === void 0 ? void 0 : w.defaultValidateMessages) || {},
          ((M = (I = C.locale) === null || I === void 0 ? void 0 : I.Form) === null || M === void 0
            ? void 0
            : M.defaultValidateMessages) || {},
          (o == null ? void 0 : o.validateMessages) || {},
        );
      }, [C, o == null ? void 0 : o.validateMessages]);
      Object.keys(T).length > 0 && (E = m.createElement(Yc, { validateMessages: T }, t)),
        i && (E = m.createElement(Eh, { locale: i, _ANT_MARK__: $h }, E)),
        (b || x) && (E = m.createElement(Ca.Provider, { value: $ }, E)),
        a && (E = m.createElement(fv, { size: a }, E));
      const P = le(() => {
        const w = R || {},
          { algorithm: I, token: M } = w,
          N = hv(w, ['algorithm', 'token']),
          A = I && (!Array.isArray(I) || I.length > 0) ? Ic(I) : void 0;
        return Object.assign(Object.assign({}, N), { theme: A, token: Object.assign(Object.assign({}, ai), M) });
      }, [R]);
      return (
        h && (E = m.createElement(vu.Provider, { value: P }, E)),
        p !== void 0 && (E = m.createElement(dv, { disabled: p }, E)),
        m.createElement(qe.Provider, { value: C }, E)
      );
    },
    fr = (e) => {
      const t = he(qe),
        n = he(Da);
      return m.createElement(Cv, Object.assign({ parentContext: t, legacyLocale: n }, e));
    };
  (fr.ConfigContext = qe),
    (fr.SizeContext = qr),
    (fr.config = Sv),
    (fr.useConfig = mv),
    Object.defineProperty(fr, 'SizeContext', { get: () => qr });
  const Su = fr;
  var Cu = function (t) {
      return +setTimeout(t, 16);
    },
    xu = function (t) {
      return clearTimeout(t);
    };
  typeof window < 'u' &&
    'requestAnimationFrame' in window &&
    ((Cu = function (t) {
      return window.requestAnimationFrame(t);
    }),
    (xu = function (t) {
      return window.cancelAnimationFrame(t);
    }));
  var wu = 0,
    tl = new Map();
  function $u(e) {
    tl.delete(e);
  }
  var Pt = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    wu += 1;
    var r = wu;
    function o(i) {
      if (i === 0) $u(r), t();
      else {
        var a = Cu(function () {
          o(i - 1);
        });
        tl.set(r, a);
      }
    }
    return o(n), r;
  };
  Pt.cancel = function (e) {
    var t = tl.get(e);
    return $u(t), xu(t);
  };
  var xv = {
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
  const wv = xv;
  function $v(e, t) {
    Qt(e, '[@ant-design/icons] '.concat(t));
  }
  function Eu(e) {
    return (
      De(e) === 'object' &&
      typeof e.name == 'string' &&
      typeof e.theme == 'string' &&
      (De(e.icon) === 'object' || typeof e.icon == 'function')
    );
  }
  function Ou() {
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
  function nl(e, t, n) {
    return n
      ? ie.createElement(
          e.tag,
          F(F({ key: t }, Ou(e.attrs)), n),
          (e.children || []).map(function (r, o) {
            return nl(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
          }),
        )
      : ie.createElement(
          e.tag,
          F({ key: t }, Ou(e.attrs)),
          (e.children || []).map(function (r, o) {
            return nl(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
          }),
        );
  }
  function _u(e) {
    return hn(e)[0];
  }
  function Iu(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
  }
  var Ev = `
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
    Ov = function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ev,
        n = he(Ca),
        r = n.csp,
        o = n.prefixCls,
        i = t;
      o && (i = i.replace(/anticon/g, o)),
        pe(function () {
          rr(i, '@ant-design-icons', { prepend: !0, csp: r });
        }, []);
    },
    _v = ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor'],
    Yr = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
  function Iv(e) {
    var t = e.primaryColor,
      n = e.secondaryColor;
    (Yr.primaryColor = t), (Yr.secondaryColor = n || _u(t)), (Yr.calculated = !!n);
  }
  function Pv() {
    return F({}, Yr);
  }
  var fi = function (t) {
    var n = t.icon,
      r = t.className,
      o = t.onClick,
      i = t.style,
      a = t.primaryColor,
      l = t.secondaryColor,
      s = rt(t, _v),
      c = Yr;
    if (
      (a && (c = { primaryColor: a, secondaryColor: l || _u(a) }),
      Ov(),
      $v(Eu(n), 'icon should be icon definiton, but got '.concat(n)),
      !Eu(n))
    )
      return null;
    var u = n;
    return (
      u && typeof u.icon == 'function' && (u = F(F({}, u), {}, { icon: u.icon(c.primaryColor, c.secondaryColor) })),
      nl(
        u.icon,
        'svg-'.concat(u.name),
        F(
          {
            className: r,
            onClick: o,
            style: i,
            'data-icon': u.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          s,
        ),
      )
    );
  };
  (fi.displayName = 'IconReact'), (fi.getTwoToneColors = Pv), (fi.setTwoToneColors = Iv);
  const rl = fi;
  function Pu(e) {
    var t = Iu(e),
      n = V(t, 2),
      r = n[0],
      o = n[1];
    return rl.setTwoToneColors({ primaryColor: r, secondaryColor: o });
  }
  function Rv() {
    var e = rl.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }
  var Tv = ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor'];
  Pu('#1890ff');
  var mi = ye(function (e, t) {
    var n,
      r = e.className,
      o = e.icon,
      i = e.spin,
      a = e.rotate,
      l = e.tabIndex,
      s = e.onClick,
      c = e.twoToneColor,
      u = rt(e, Tv),
      d = he(Ca),
      f = d.prefixCls,
      g = f === void 0 ? 'anticon' : f,
      h = d.rootClassName,
      p = Q(
        h,
        g,
        ((n = {}),
        ee(n, ''.concat(g, '-').concat(o.name), !!o.name),
        ee(n, ''.concat(g, '-spin'), !!i || o.name === 'loading'),
        n),
        r,
      ),
      y = l;
    y === void 0 && s && (y = -1);
    var b = a ? { msTransform: 'rotate('.concat(a, 'deg)'), transform: 'rotate('.concat(a, 'deg)') } : void 0,
      S = Iu(c),
      x = V(S, 2),
      _ = x[0],
      R = x[1];
    return m.createElement(
      'span',
      F(F({ role: 'img', 'aria-label': o.name }, u), {}, { ref: t, tabIndex: y, onClick: s, className: p }),
      m.createElement(rl, { icon: o, primaryColor: _, secondaryColor: R, style: b }),
    );
  });
  (mi.displayName = 'AntdIcon'), (mi.getTwoToneColor = Rv), (mi.setTwoToneColor = Pu);
  const $t = mi;
  var Ru = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: wv }));
  };
  Ru.displayName = 'CheckCircleFilled';
  const Mv = ye(Ru);
  var Nv = {
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
  const Fv = Nv;
  var Tu = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: Fv }));
  };
  Tu.displayName = 'CloseCircleFilled';
  const ol = ye(Tu);
  var Av = {
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
  const zv = Av;
  var Mu = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: zv }));
  };
  Mu.displayName = 'CloseOutlined';
  const il = ye(Mu);
  var Dv = {
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
  const jv = Dv;
  var Nu = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: jv }));
  };
  Nu.displayName = 'ExclamationCircleFilled';
  const Lv = ye(Nu);
  var Hv = {
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
  const kv = Hv;
  var Fu = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: kv }));
  };
  Fu.displayName = 'InfoCircleFilled';
  const Vv = ye(Fu);
  function Au(e, t) {
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
  function Bv(e, t) {
    var n = { animationend: Au('Animation', 'AnimationEnd'), transitionend: Au('Transition', 'TransitionEnd') };
    return (
      e &&
        ('AnimationEvent' in t || delete n.animationend.animation,
        'TransitionEvent' in t || delete n.transitionend.transition),
      n
    );
  }
  var Wv = Bv(Tt(), typeof window < 'u' ? window : {}),
    zu = {};
  if (Tt()) {
    var Uv = document.createElement('div');
    zu = Uv.style;
  }
  var gi = {};
  function Du(e) {
    if (gi[e]) return gi[e];
    var t = Wv[e];
    if (t)
      for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
        var i = n[o];
        if (Object.prototype.hasOwnProperty.call(t, i) && i in zu) return (gi[e] = t[i]), gi[e];
      }
    return '';
  }
  var ju = Du('animationend'),
    Lu = Du('transitionend'),
    Hu = !!(ju && Lu),
    ku = ju || 'animationend',
    Vu = Lu || 'transitionend';
  function Bu(e, t) {
    if (!e) return null;
    if (De(e) === 'object') {
      var n = t.replace(/-\w/g, function (r) {
        return r[1].toUpperCase();
      });
      return e[n];
    }
    return ''.concat(e, '-').concat(t);
  }
  var mr = 'none',
    pi = 'appear',
    hi = 'enter',
    vi = 'leave',
    Wu = 'none',
    bn = 'prepare',
    gr = 'start',
    pr = 'active',
    al = 'end';
  function Bn(e) {
    var t = L(!1),
      n = oe(e),
      r = V(n, 2),
      o = r[0],
      i = r[1];
    pe(function () {
      return (
        (t.current = !1),
        function () {
          t.current = !0;
        }
      );
    }, []);
    function a(l, s) {
      (s && t.current) || i(l);
    }
    return [o, a];
  }
  const Gv = function () {
    var e = L(null);
    function t() {
      Pt.cancel(e.current);
    }
    function n(r) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      t();
      var i = Pt(function () {
        o <= 1
          ? r({
              isCanceled: function () {
                return i !== e.current;
              },
            })
          : n(r, o - 1);
      });
      e.current = i;
    }
    return (
      pe(function () {
        return function () {
          t();
        };
      }, []),
      [n, t]
    );
  };
  var Uu = Tt() ? xn : pe,
    Gu = [bn, gr, pr, al],
    Ku = !1,
    Kv = !0;
  function Xu(e) {
    return e === pr || e === al;
  }
  const Xv = function (e, t) {
      var n = Bn(Wu),
        r = V(n, 2),
        o = r[0],
        i = r[1],
        a = Gv(),
        l = V(a, 2),
        s = l[0],
        c = l[1];
      function u() {
        i(bn, !0);
      }
      return (
        Uu(
          function () {
            if (o !== Wu && o !== al) {
              var d = Gu.indexOf(o),
                f = Gu[d + 1],
                g = t(o);
              g === Ku
                ? i(f, !0)
                : s(function (h) {
                    function p() {
                      h.isCanceled() || i(f, !0);
                    }
                    g === !0 ? p() : Promise.resolve(g).then(p);
                  });
            }
          },
          [e, o],
        ),
        pe(function () {
          return function () {
            c();
          };
        }, []),
        [u, o]
      );
    },
    qv = function (e) {
      var t = L(),
        n = L(e);
      n.current = e;
      var r = ut(function (a) {
        n.current(a);
      }, []);
      function o(a) {
        a && (a.removeEventListener(Vu, r), a.removeEventListener(ku, r));
      }
      function i(a) {
        t.current && t.current !== a && o(t.current),
          a && a !== t.current && (a.addEventListener(Vu, r), a.addEventListener(ku, r), (t.current = a));
      }
      return (
        pe(function () {
          return function () {
            o(t.current);
          };
        }, []),
        [i, o]
      );
    };
  function Yv(e, t, n, r) {
    var o = r.motionEnter,
      i = o === void 0 ? !0 : o,
      a = r.motionAppear,
      l = a === void 0 ? !0 : a,
      s = r.motionLeave,
      c = s === void 0 ? !0 : s,
      u = r.motionDeadline,
      d = r.motionLeaveImmediately,
      f = r.onAppearPrepare,
      g = r.onEnterPrepare,
      h = r.onLeavePrepare,
      p = r.onAppearStart,
      y = r.onEnterStart,
      b = r.onLeaveStart,
      S = r.onAppearActive,
      x = r.onEnterActive,
      _ = r.onLeaveActive,
      R = r.onAppearEnd,
      O = r.onEnterEnd,
      v = r.onLeaveEnd,
      C = r.onVisibleChanged,
      $ = Bn(),
      E = V($, 2),
      T = E[0],
      P = E[1],
      w = Bn(mr),
      I = V(w, 2),
      M = I[0],
      N = I[1],
      A = Bn(null),
      D = V(A, 2),
      j = D[0],
      B = D[1],
      X = L(!1),
      Y = L(null);
    function z() {
      return n();
    }
    var Z = L(!1);
    function J(q) {
      var H = z();
      if (!(q && !q.deadline && q.target !== H)) {
        var ue = Z.current,
          we;
        M === pi && ue
          ? (we = R == null ? void 0 : R(H, q))
          : M === hi && ue
          ? (we = O == null ? void 0 : O(H, q))
          : M === vi && ue && (we = v == null ? void 0 : v(H, q)),
          M !== mr && ue && we !== !1 && (N(mr, !0), B(null, !0));
      }
    }
    var K = qv(J),
      W = V(K, 1),
      ae = W[0],
      ce = le(
        function () {
          var q, H, ue;
          switch (M) {
            case pi:
              return (q = {}), ee(q, bn, f), ee(q, gr, p), ee(q, pr, S), q;
            case hi:
              return (H = {}), ee(H, bn, g), ee(H, gr, y), ee(H, pr, x), H;
            case vi:
              return (ue = {}), ee(ue, bn, h), ee(ue, gr, b), ee(ue, pr, _), ue;
            default:
              return {};
          }
        },
        [M],
      ),
      xe = Xv(M, function (q) {
        if (q === bn) {
          var H = ce[bn];
          return H ? H(z()) : Ku;
        }
        if (k in ce) {
          var ue;
          B(((ue = ce[k]) === null || ue === void 0 ? void 0 : ue.call(ce, z(), null)) || null);
        }
        return (
          k === pr &&
            (ae(z()),
            u > 0 &&
              (clearTimeout(Y.current),
              (Y.current = setTimeout(function () {
                J({ deadline: !0 });
              }, u)))),
          Kv
        );
      }),
      ve = V(xe, 2),
      se = ve[0],
      k = ve[1],
      de = Xu(k);
    (Z.current = de),
      Uu(
        function () {
          P(t);
          var q = X.current;
          if (((X.current = !0), !!e)) {
            var H;
            !q && t && l && (H = pi),
              q && t && i && (H = hi),
              ((q && !t && c) || (!q && d && !t && c)) && (H = vi),
              H && (N(H), se());
          }
        },
        [t],
      ),
      pe(
        function () {
          ((M === pi && !l) || (M === hi && !i) || (M === vi && !c)) && N(mr);
        },
        [l, i, c],
      ),
      pe(function () {
        return function () {
          (X.current = !1), clearTimeout(Y.current);
        };
      }, []);
    var me = L(!1);
    pe(
      function () {
        T && (me.current = !0),
          T !== void 0 && M === mr && ((me.current || T) && (C == null || C(T)), (me.current = !0));
      },
      [T, M],
    );
    var be = j;
    return ce[bn] && k === gr && (be = F({ transition: 'none' }, be)), [M, k, be, T ?? t];
  }
  var Qv = (function (e) {
    Fn(n, e);
    var t = An(n);
    function n() {
      return zt(this, n), t.apply(this, arguments);
    }
    return (
      Dt(n, [
        {
          key: 'render',
          value: function () {
            return this.props.children;
          },
        },
      ]),
      n
    );
  })(m.Component);
  function Jv(e) {
    var t = e;
    De(e) === 'object' && (t = e.transitionSupport);
    function n(o) {
      return !!(o.motionName && t);
    }
    var r = ye(function (o, i) {
      var a = o.visible,
        l = a === void 0 ? !0 : a,
        s = o.removeOnLeave,
        c = s === void 0 ? !0 : s,
        u = o.forceRender,
        d = o.children,
        f = o.motionName,
        g = o.leavedClassName,
        h = o.eventProps,
        p = n(o),
        y = L(),
        b = L();
      function S() {
        try {
          return y.current instanceof HTMLElement ? y.current : Do(b.current);
        } catch {
          return null;
        }
      }
      var x = Yv(p, l, S, o),
        _ = V(x, 4),
        R = _[0],
        O = _[1],
        v = _[2],
        C = _[3],
        $ = L(C);
      C && ($.current = !0);
      var E = ut(
          function (A) {
            (y.current = A), ta(i, A);
          },
          [i],
        ),
        T,
        P = F(F({}, h), {}, { visible: l });
      if (!d) T = null;
      else if (R === mr || !n(o))
        C
          ? (T = d(F({}, P), E))
          : !c && $.current && g
          ? (T = d(F(F({}, P), {}, { className: g }), E))
          : u || (!c && !g)
          ? (T = d(F(F({}, P), {}, { style: { display: 'none' } }), E))
          : (T = null);
      else {
        var w, I;
        O === bn ? (I = 'prepare') : Xu(O) ? (I = 'active') : O === gr && (I = 'start'),
          (T = d(
            F(
              F({}, P),
              {},
              {
                className: Q(
                  Bu(f, R),
                  ((w = {}), ee(w, Bu(f, ''.concat(R, '-').concat(I)), I), ee(w, f, typeof f == 'string'), w),
                ),
                style: v,
              },
            ),
            E,
          ));
      }
      if (kt(T) && zo(T)) {
        var M = T,
          N = M.ref;
        N || (T = gt(T, { ref: E }));
      }
      return m.createElement(Qv, { ref: b }, T);
    });
    return (r.displayName = 'CSSMotion'), r;
  }
  const Qr = Jv(Hu);
  var ll = 'add',
    sl = 'keep',
    cl = 'remove',
    ul = 'removed';
  function Zv(e) {
    var t;
    return e && De(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }), F(F({}, t), {}, { key: String(t.key) });
  }
  function dl() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return e.map(Zv);
  }
  function e0() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      n = [],
      r = 0,
      o = t.length,
      i = dl(e),
      a = dl(t);
    i.forEach(function (c) {
      for (var u = !1, d = r; d < o; d += 1) {
        var f = a[d];
        if (f.key === c.key) {
          r < d &&
            ((n = n.concat(
              a.slice(r, d).map(function (g) {
                return F(F({}, g), {}, { status: ll });
              }),
            )),
            (r = d)),
            n.push(F(F({}, f), {}, { status: sl })),
            (r += 1),
            (u = !0);
          break;
        }
      }
      u || n.push(F(F({}, c), {}, { status: cl }));
    }),
      r < o &&
        (n = n.concat(
          a.slice(r).map(function (c) {
            return F(F({}, c), {}, { status: ll });
          }),
        ));
    var l = {};
    n.forEach(function (c) {
      var u = c.key;
      l[u] = (l[u] || 0) + 1;
    });
    var s = Object.keys(l).filter(function (c) {
      return l[c] > 1;
    });
    return (
      s.forEach(function (c) {
        (n = n.filter(function (u) {
          var d = u.key,
            f = u.status;
          return d !== c || f !== cl;
        })),
          n.forEach(function (u) {
            u.key === c && (u.status = sl);
          });
      }),
      n
    );
  }
  var t0 = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
    n0 = ['status'],
    r0 = [
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
  function o0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qr,
      n = (function (r) {
        Fn(i, r);
        var o = An(i);
        function i() {
          var a;
          zt(this, i);
          for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++) s[c] = arguments[c];
          return (
            (a = o.call.apply(o, [this].concat(s))),
            ee(bo(a), 'state', { keyEntities: [] }),
            ee(bo(a), 'removeKey', function (u) {
              var d = a.state.keyEntities,
                f = d.map(function (g) {
                  return g.key !== u ? g : F(F({}, g), {}, { status: ul });
                });
              return (
                a.setState({ keyEntities: f }),
                f.filter(function (g) {
                  var h = g.status;
                  return h !== ul;
                }).length
              );
            }),
            a
          );
        }
        return (
          Dt(
            i,
            [
              {
                key: 'render',
                value: function () {
                  var l = this,
                    s = this.state.keyEntities,
                    c = this.props,
                    u = c.component,
                    d = c.children,
                    f = c.onVisibleChanged,
                    g = c.onAllRemoved,
                    h = rt(c, t0),
                    p = u || m.Fragment,
                    y = {};
                  return (
                    r0.forEach(function (b) {
                      (y[b] = h[b]), delete h[b];
                    }),
                    delete h.keys,
                    m.createElement(
                      p,
                      h,
                      s.map(function (b) {
                        var S = b.status,
                          x = rt(b, n0),
                          _ = S === ll || S === sl;
                        return m.createElement(
                          t,
                          Ne({}, y, {
                            key: x.key,
                            visible: _,
                            eventProps: x,
                            onVisibleChanged: function (O) {
                              if ((f == null || f(O, { key: x.key }), !O)) {
                                var v = l.removeKey(x.key);
                                v === 0 && g && g();
                              }
                            },
                          }),
                          d,
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
                value: function (l, s) {
                  var c = l.keys,
                    u = s.keyEntities,
                    d = dl(c),
                    f = e0(u, d);
                  return {
                    keyEntities: f.filter(function (g) {
                      var h = u.find(function (p) {
                        var y = p.key;
                        return g.key === y;
                      });
                      return !(h && h.status === ul && g.status === cl);
                    }),
                  };
                },
              },
            ],
          ),
          i
        );
      })(m.Component);
    return ee(n, 'defaultProps', { component: 'div' }), n;
  }
  const i0 = o0(Hu),
    { isValidElement: Jr } = Qi;
  function a0(e) {
    return e && Jr(e) && e.type === m.Fragment;
  }
  function l0(e, t, n) {
    return Jr(e) ? gt(e, typeof n == 'function' ? n(e.props || {}) : n) : t;
  }
  function hr(e, t) {
    return l0(e, e, t);
  }
  var U = {
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
        if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= U.F1 && n <= U.F12)) return !1;
        switch (n) {
          case U.ALT:
          case U.CAPS_LOCK:
          case U.CONTEXT_MENU:
          case U.CTRL:
          case U.DOWN:
          case U.END:
          case U.ESC:
          case U.HOME:
          case U.INSERT:
          case U.LEFT:
          case U.MAC_FF_META:
          case U.META:
          case U.NUMLOCK:
          case U.NUM_CENTER:
          case U.PAGE_DOWN:
          case U.PAGE_UP:
          case U.PAUSE:
          case U.PRINT_SCREEN:
          case U.RIGHT:
          case U.SHIFT:
          case U.UP:
          case U.WIN_KEY:
          case U.WIN_KEY_RIGHT:
            return !1;
          default:
            return !0;
        }
      },
      isCharacterKey: function (t) {
        if (
          (t >= U.ZERO && t <= U.NINE) ||
          (t >= U.NUM_ZERO && t <= U.NUM_MULTIPLY) ||
          (t >= U.A && t <= U.Z) ||
          (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
        )
          return !0;
        switch (t) {
          case U.SPACE:
          case U.QUESTION_MARK:
          case U.NUM_PLUS:
          case U.NUM_MINUS:
          case U.NUM_PERIOD:
          case U.NUM_DIVISION:
          case U.SEMICOLON:
          case U.DASH:
          case U.EQUALS:
          case U.COMMA:
          case U.PERIOD:
          case U.SLASH:
          case U.APOSTROPHE:
          case U.SINGLE_QUOTE:
          case U.OPEN_SQUARE_BRACKET:
          case U.BACKSLASH:
          case U.CLOSE_SQUARE_BRACKET:
            return !0;
          default:
            return !1;
        }
      },
    },
    s0 = ye(function (e, t) {
      var n = e.prefixCls,
        r = e.style,
        o = e.className,
        i = e.duration,
        a = i === void 0 ? 4.5 : i,
        l = e.eventKey,
        s = e.content,
        c = e.closable,
        u = e.closeIcon,
        d = u === void 0 ? 'x' : u,
        f = e.props,
        g = e.onClick,
        h = e.onNoticeClose,
        p = e.times,
        y = oe(!1),
        b = V(y, 2),
        S = b[0],
        x = b[1],
        _ = function () {
          h(l);
        },
        R = function (C) {
          (C.key === 'Enter' || C.code === 'Enter' || C.keyCode === U.ENTER) && _();
        };
      pe(
        function () {
          if (!S && a > 0) {
            var v = setTimeout(function () {
              _();
            }, a * 1e3);
            return function () {
              clearTimeout(v);
            };
          }
        },
        [a, S, p],
      );
      var O = ''.concat(n, '-notice');
      return m.createElement(
        'div',
        Ne({}, f, {
          ref: t,
          className: Q(O, o, ee({}, ''.concat(O, '-closable'), c)),
          style: r,
          onMouseEnter: function () {
            x(!0);
          },
          onMouseLeave: function () {
            x(!1);
          },
          onClick: g,
        }),
        m.createElement('div', { className: ''.concat(O, '-content') }, s),
        c &&
          m.createElement(
            'a',
            {
              tabIndex: 0,
              className: ''.concat(O, '-close'),
              onKeyDown: R,
              onClick: function (C) {
                C.preventDefault(), C.stopPropagation(), _();
              },
            },
            d,
          ),
      );
    });
  const qu = s0;
  var c0 = ye(function (e, t) {
      var n = e.prefixCls,
        r = n === void 0 ? 'rc-notification' : n,
        o = e.container,
        i = e.motion,
        a = e.maxCount,
        l = e.className,
        s = e.style,
        c = e.onAllRemoved,
        u = oe([]),
        d = V(u, 2),
        f = d[0],
        g = d[1],
        h = function (v) {
          var C,
            $ = f.find(function (E) {
              return E.key === v;
            });
          $ == null || (C = $.onClose) === null || C === void 0 || C.call($),
            g(function (E) {
              return E.filter(function (T) {
                return T.key !== v;
              });
            });
        };
      bt(t, function () {
        return {
          open: function (v) {
            g(function (C) {
              var $ = fe(C),
                E = $.findIndex(function (w) {
                  return w.key === v.key;
                }),
                T = F({}, v);
              if (E >= 0) {
                var P;
                (T.times = (((P = C[E]) === null || P === void 0 ? void 0 : P.times) || 0) + 1), ($[E] = T);
              } else (T.times = 0), $.push(T);
              return a > 0 && $.length > a && ($ = $.slice(-a)), $;
            });
          },
          close: function (v) {
            h(v);
          },
          destroy: function () {
            g([]);
          },
        };
      });
      var p = oe({}),
        y = V(p, 2),
        b = y[0],
        S = y[1];
      pe(
        function () {
          var O = {};
          f.forEach(function (v) {
            var C = v.placement,
              $ = C === void 0 ? 'topRight' : C;
            $ && ((O[$] = O[$] || []), O[$].push(v));
          }),
            Object.keys(b).forEach(function (v) {
              O[v] = O[v] || [];
            }),
            S(O);
        },
        [f],
      );
      var x = function (v) {
          S(function (C) {
            var $ = F({}, C),
              E = $[v] || [];
            return E.length || delete $[v], $;
          });
        },
        _ = L(!1);
      if (
        (pe(
          function () {
            Object.keys(b).length > 0 ? (_.current = !0) : _.current && (c == null || c(), (_.current = !1));
          },
          [b],
        ),
        !o)
      )
        return null;
      var R = Object.keys(b);
      return wo(
        m.createElement(
          m.Fragment,
          null,
          R.map(function (O) {
            var v = b[O],
              C = v.map(function (E) {
                return { config: E, key: E.key };
              }),
              $ = typeof i == 'function' ? i(O) : i;
            return m.createElement(
              i0,
              Ne(
                {
                  key: O,
                  className: Q(r, ''.concat(r, '-').concat(O), l == null ? void 0 : l(O)),
                  style: s == null ? void 0 : s(O),
                  keys: C,
                  motionAppear: !0,
                },
                $,
                {
                  onAllRemoved: function () {
                    x(O);
                  },
                },
              ),
              function (E, T) {
                var P = E.config,
                  w = E.className,
                  I = E.style,
                  M = P.key,
                  N = P.times,
                  A = P.className,
                  D = P.style;
                return m.createElement(
                  qu,
                  Ne({}, P, {
                    ref: T,
                    prefixCls: r,
                    className: Q(w, A),
                    style: F(F({}, I), D),
                    times: N,
                    key: M,
                    eventKey: M,
                    onNoticeClose: h,
                  }),
                );
              },
            );
          }),
        ),
        o,
      );
    }),
    u0 = ['getContainer', 'motion', 'prefixCls', 'maxCount', 'className', 'style', 'onAllRemoved'],
    d0 = function () {
      return document.body;
    },
    Yu = 0;
  function f0() {
    for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return (
      n.forEach(function (o) {
        o &&
          Object.keys(o).forEach(function (i) {
            var a = o[i];
            a !== void 0 && (e[i] = a);
          });
      }),
      e
    );
  }
  function m0() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.getContainer,
      n = t === void 0 ? d0 : t,
      r = e.motion,
      o = e.prefixCls,
      i = e.maxCount,
      a = e.className,
      l = e.style,
      s = e.onAllRemoved,
      c = rt(e, u0),
      u = oe(),
      d = V(u, 2),
      f = d[0],
      g = d[1],
      h = L(),
      p = m.createElement(c0, {
        container: f,
        ref: h,
        prefixCls: o,
        motion: r,
        maxCount: i,
        className: a,
        style: l,
        onAllRemoved: s,
      }),
      y = oe([]),
      b = V(y, 2),
      S = b[0],
      x = b[1],
      _ = le(function () {
        return {
          open: function (O) {
            var v = f0(c, O);
            (v.key === null || v.key === void 0) && ((v.key = 'rc-notification-'.concat(Yu)), (Yu += 1)),
              x(function (C) {
                return [].concat(fe(C), [{ type: 'open', config: v }]);
              });
          },
          close: function (O) {
            x(function (v) {
              return [].concat(fe(v), [{ type: 'close', key: O }]);
            });
          },
          destroy: function () {
            x(function (O) {
              return [].concat(fe(O), [{ type: 'destroy' }]);
            });
          },
        };
      }, []);
    return (
      pe(function () {
        g(n());
      }),
      pe(
        function () {
          h.current &&
            S.length &&
            (S.forEach(function (R) {
              switch (R.type) {
                case 'open':
                  h.current.open(R.config);
                  break;
                case 'close':
                  h.current.close(R.key);
                  break;
                case 'destroy':
                  h.current.destroy();
                  break;
              }
            }),
            x([]));
        },
        [S],
      ),
      [_, p]
    );
  }
  const g0 = (e) => {
      const {
          componentCls: t,
          iconCls: n,
          boxShadow: r,
          colorText: o,
          colorBgElevated: i,
          colorSuccess: a,
          colorError: l,
          colorWarning: s,
          colorInfo: c,
          fontSizeLG: u,
          motionEaseInOutCirc: d,
          motionDurationSlow: f,
          marginXS: g,
          paddingXS: h,
          borderRadiusLG: p,
          zIndexPopup: y,
          messageNoticeContentPadding: b,
        } = e,
        S = new Le('MessageMoveIn', {
          '0%': { padding: 0, transform: 'translateY(-100%)', opacity: 0 },
          '100%': { padding: h, transform: 'translateY(0)', opacity: 1 },
        }),
        x = new Le('MessageMoveOut', {
          '0%': { maxHeight: e.height, padding: h, opacity: 1 },
          '100%': { maxHeight: 0, padding: 0, opacity: 0 },
        });
      return [
        {
          [t]: Object.assign(Object.assign({}, ln(e)), {
            color: o,
            position: 'fixed',
            top: g,
            width: '100%',
            pointerEvents: 'none',
            zIndex: y,
            [`${t}-move-up`]: { animationFillMode: 'forwards' },
            [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: { animationName: S, animationDuration: f, animationPlayState: 'paused', animationTimingFunction: d },
            [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: { animationPlayState: 'running' },
            [`${t}-move-up-leave`]: {
              animationName: x,
              animationDuration: f,
              animationPlayState: 'paused',
              animationTimingFunction: d,
            },
            [`${t}-move-up-leave${t}-move-up-leave-active`]: { animationPlayState: 'running' },
            '&-rtl': { direction: 'rtl', span: { direction: 'rtl' } },
          }),
        },
        {
          [`${t}-notice`]: {
            padding: h,
            textAlign: 'center',
            [`${t}-custom-content > ${n}`]: { verticalAlign: 'text-bottom', marginInlineEnd: g, fontSize: u },
            [`${t}-notice-content`]: {
              display: 'inline-block',
              padding: b,
              background: i,
              borderRadius: p,
              boxShadow: r,
              pointerEvents: 'all',
            },
            [`${t}-success > ${n}`]: { color: a },
            [`${t}-error > ${n}`]: { color: l },
            [`${t}-warning > ${n}`]: { color: s },
            [`
        ${t}-info > ${n},
        ${t}-loading > ${n}`]: { color: c },
          },
        },
        { [`${t}-notice-pure-panel`]: { padding: 0, textAlign: 'start' } },
      ];
    },
    Qu = jt(
      'Message',
      (e) => {
        const t = it(e, {
          messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`,
        });
        return [g0(t)];
      },
      (e) => ({ height: 150, zIndexPopup: e.zIndexPopupBase + 10 }),
    );
  function p0(e, t) {
    return { motionName: t ?? `${e}-move-up` };
  }
  function fl(e) {
    let t;
    const n = new Promise((o) => {
        t = e(() => {
          o(!0);
        });
      }),
      r = () => {
        t == null || t();
      };
    return (r.then = (o, i) => n.then(o, i)), (r.promise = n), r;
  }
  var h0 = {
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
  const v0 = h0;
  var Ju = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: v0 }));
  };
  Ju.displayName = 'LoadingOutlined';
  const Zu = ye(Ju);
  var b0 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const y0 = {
    info: m.createElement(Vv, null),
    success: m.createElement(Mv, null),
    error: m.createElement(ol, null),
    warning: m.createElement(Lv, null),
    loading: m.createElement(Zu, null),
  };
  function ed(e) {
    let { prefixCls: t, type: n, icon: r, children: o } = e;
    return m.createElement(
      'div',
      { className: Q(`${t}-custom-content`, `${t}-${n}`) },
      r || y0[n],
      m.createElement('span', null, o),
    );
  }
  function S0(e) {
    const { prefixCls: t, className: n, type: r, icon: o, content: i } = e,
      a = b0(e, ['prefixCls', 'className', 'type', 'icon', 'content']),
      { getPrefixCls: l } = he(qe),
      s = t || l('message'),
      [, c] = Qu(s);
    return m.createElement(
      qu,
      Object.assign({}, a, {
        prefixCls: s,
        className: Q(n, c, `${s}-notice-pure-panel`),
        eventKey: 'pure',
        duration: null,
        content: m.createElement(ed, { prefixCls: s, type: r, icon: o }, i),
      }),
    );
  }
  var C0 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const x0 = 8,
    w0 = 3,
    $0 = ye((e, t) => {
      const {
          top: n,
          prefixCls: r,
          getContainer: o,
          maxCount: i,
          duration: a = w0,
          rtl: l,
          transitionName: s,
          onAllRemoved: c,
        } = e,
        { getPrefixCls: u, getPopupContainer: d } = he(qe),
        f = r || u('message'),
        [, g] = Qu(f),
        h = () => ({ left: '50%', transform: 'translateX(-50%)', top: n ?? x0 }),
        p = () => Q(g, l ? `${f}-rtl` : ''),
        y = () => p0(f, s),
        b = m.createElement(
          'span',
          { className: `${f}-close-x` },
          m.createElement(il, { className: `${f}-close-icon` }),
        ),
        [S, x] = m0({
          prefixCls: f,
          style: h,
          className: p,
          motion: y,
          closable: !1,
          closeIcon: b,
          duration: a,
          getContainer: () => (o == null ? void 0 : o()) || (d == null ? void 0 : d()) || document.body,
          maxCount: i,
          onAllRemoved: c,
        });
      return bt(t, () => Object.assign(Object.assign({}, S), { prefixCls: f, hashId: g })), x;
    });
  let td = 0;
  function nd(e) {
    const t = L(null);
    return [
      le(() => {
        const r = (s) => {
            var c;
            (c = t.current) === null || c === void 0 || c.close(s);
          },
          o = (s) => {
            if (!t.current) {
              const R = () => {};
              return (R.then = () => {}), R;
            }
            const { open: c, prefixCls: u, hashId: d } = t.current,
              f = `${u}-notice`,
              { content: g, icon: h, type: p, key: y, className: b, onClose: S } = s,
              x = C0(s, ['content', 'icon', 'type', 'key', 'className', 'onClose']);
            let _ = y;
            return (
              _ == null && ((td += 1), (_ = `antd-message-${td}`)),
              fl(
                (R) => (
                  c(
                    Object.assign(Object.assign({}, x), {
                      key: _,
                      content: m.createElement(ed, { prefixCls: u, type: p, icon: h }, g),
                      placement: 'top',
                      className: Q(p && `${f}-${p}`, d, b),
                      onClose: () => {
                        S == null || S(), R();
                      },
                    }),
                  ),
                  () => {
                    r(_);
                  }
                ),
              )
            );
          },
          a = {
            open: o,
            destroy: (s) => {
              var c;
              s !== void 0 ? r(s) : (c = t.current) === null || c === void 0 || c.destroy();
            },
          };
        return (
          ['info', 'success', 'warning', 'error', 'loading'].forEach((s) => {
            const c = (u, d, f) => {
              let g;
              u && typeof u == 'object' && 'content' in u ? (g = u) : (g = { content: u });
              let h, p;
              typeof d == 'function' ? (p = d) : ((h = d), (p = f));
              const y = Object.assign(Object.assign({ onClose: p, duration: h }, g), { type: s });
              return o(y);
            };
            a[s] = c;
          }),
          a
        );
      }, []),
      m.createElement($0, Object.assign({ key: 'message-holder' }, e, { ref: t })),
    ];
  }
  function E0(e) {
    return nd(e);
  }
  var Zr = F({}, Qi),
    O0 = Zr.version,
    _0 = Zr.render;
  Zr.unmountComponentAtNode;
  var ml;
  try {
    var I0 = Number((O0 || '').split('.')[0]);
    I0 >= 18 && (ml = Zr.createRoot);
  } catch {}
  function rd(e) {
    var t = Zr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    t && De(t) === 'object' && (t.usingClientEntryPoint = e);
  }
  var od = '__rc_react_root__';
  function P0(e, t) {
    rd(!0);
    var n = t[od] || ml(t);
    rd(!1), n.render(e), (t[od] = n);
  }
  function R0(e, t) {
    _0(e, t);
  }
  function T0(e, t) {
    if (ml) {
      P0(e, t);
      return;
    }
    R0(e, t);
  }
  const gl = (e, t) => {
      const n = he(Da),
        r = le(() => {
          var i;
          const a = t || Gr[e],
            l = (i = n == null ? void 0 : n[e]) !== null && i !== void 0 ? i : {};
          return Object.assign(Object.assign({}, typeof a == 'function' ? a() : a), l || {});
        }, [e, t, n]),
        o = le(() => {
          const i = n == null ? void 0 : n.locale;
          return n != null && n.exist && !i ? Gr.locale : i;
        }, [n]);
      return [r, o];
    },
    M0 = (e) => {
      const { componentCls: t } = e;
      return {
        [t]: {
          display: 'inline-flex',
          '&-block': { display: 'flex', width: '100%' },
          '&-vertical': { flexDirection: 'column' },
        },
      };
    },
    N0 = (e) => {
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
    id = jt('Space', (e) => [N0(e), M0(e)]);
  var ad =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const bi = m.createContext(null),
    F0 = (e, t) => {
      const n = he(bi),
        r = le(() => {
          if (!n) return '';
          const { compactDirection: o, isFirstItem: i, isLastItem: a } = n,
            l = o === 'vertical' ? '-vertical-' : '-';
          return Q({
            [`${e}-compact${l}item`]: !0,
            [`${e}-compact${l}first-item`]: i,
            [`${e}-compact${l}last-item`]: a,
            [`${e}-compact${l}item-rtl`]: t === 'rtl',
          });
        }, [e, t, n]);
      return {
        compactSize: n == null ? void 0 : n.compactSize,
        compactDirection: n == null ? void 0 : n.compactDirection,
        compactItemClassnames: r,
      };
    },
    A0 = (e) => {
      let { children: t } = e;
      return m.createElement(bi.Provider, { value: null }, t);
    },
    z0 = (e) => {
      var { children: t } = e,
        n = ad(e, ['children']);
      return m.createElement(bi.Provider, { value: n }, t);
    },
    D0 = (e) => {
      const { getPrefixCls: t, direction: n } = he(qe),
        { size: r = 'middle', direction: o, block: i, prefixCls: a, className: l, rootClassName: s, children: c } = e,
        u = ad(e, ['size', 'direction', 'block', 'prefixCls', 'className', 'rootClassName', 'children']),
        d = t('space-compact', a),
        [f, g] = id(d),
        h = Q(d, g, { [`${d}-rtl`]: n === 'rtl', [`${d}-block`]: i, [`${d}-vertical`]: o === 'vertical' }, l, s),
        p = he(bi),
        y = mn(c),
        b = le(
          () =>
            y.map((S, x) => {
              const _ = (S && S.key) || `${d}-item-${x}`;
              return m.createElement(
                z0,
                {
                  key: _,
                  compactSize: r,
                  compactDirection: o,
                  isFirstItem: x === 0 && (!p || (p == null ? void 0 : p.isFirstItem)),
                  isLastItem: x === y.length - 1 && (!p || (p == null ? void 0 : p.isLastItem)),
                },
                S,
              );
            }),
          [r, y, p],
        );
      return y.length === 0 ? null : f(m.createElement('div', Object.assign({ className: h }, u), b));
    };
  function j0(e, t, n) {
    const { focusElCls: r, focus: o, borderElCls: i } = n,
      a = i ? '> *' : '',
      l = ['hover', o ? 'focus' : null, 'active']
        .filter(Boolean)
        .map((s) => `&:${s} ${a}`)
        .join(',');
    return {
      [`&-item:not(${t}-last-item)`]: { marginInlineEnd: -e.lineWidth },
      '&-item': Object.assign(Object.assign({ [l]: { zIndex: 2 } }, r ? { [`&${r}`]: { zIndex: 2 } } : {}), {
        [`&[disabled] ${a}`]: { zIndex: 0 },
      }),
    };
  }
  function L0(e, t, n) {
    const { borderElCls: r } = n,
      o = r ? `> ${r}` : '';
    return {
      [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: { borderRadius: 0 },
      [`&-item:not(${t}-last-item)${t}-first-item`]: {
        [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
      },
      [`&-item:not(${t}-first-item)${t}-last-item`]: {
        [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
      },
    };
  }
  function ld(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { focus: !0 };
    const { componentCls: n } = e,
      r = `${n}-compact`;
    return { [r]: Object.assign(Object.assign({}, j0(e, r, t)), L0(n, r, t)) };
  }
  const H0 = (e) => (e !== void 0 && (e === 'topLeft' || e === 'topRight') ? 'slide-down' : 'slide-up'),
    yi = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`);
  var sd = m.createContext(null),
    tt = Tt() ? xn : pe,
    cd = function (t, n) {
      var r = L(!0);
      tt(function () {
        if (!r.current) return t();
      }, n),
        tt(function () {
          return (
            (r.current = !1),
            function () {
              r.current = !0;
            }
          );
        }, []);
    },
    ud = [];
  function k0(e, t) {
    var n = oe(function () {
        if (!Tt()) return null;
        var h = document.createElement('div');
        return h;
      }),
      r = V(n, 1),
      o = r[0],
      i = L(!1),
      a = he(sd),
      l = oe(ud),
      s = V(l, 2),
      c = s[0],
      u = s[1],
      d =
        a ||
        (i.current
          ? void 0
          : function (h) {
              u(function (p) {
                var y = [h].concat(fe(p));
                return y;
              });
            });
    function f() {
      o.parentElement || document.body.appendChild(o), (i.current = !0);
    }
    function g() {
      var h;
      (h = o.parentElement) === null || h === void 0 || h.removeChild(o), (i.current = !1);
    }
    return (
      tt(
        function () {
          return e ? (a ? a(f) : f()) : g(), g;
        },
        [e],
      ),
      tt(
        function () {
          c.length &&
            (c.forEach(function (h) {
              return h();
            }),
            u(ud));
        },
        [c],
      ),
      [o, d]
    );
  }
  var pl;
  function V0(e) {
    if (typeof document > 'u') return 0;
    if (e || pl === void 0) {
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
      var o = t.offsetWidth;
      n.style.overflow = 'scroll';
      var i = t.offsetWidth;
      o === i && (i = n.clientWidth), document.body.removeChild(n), (pl = o - i);
    }
    return pl;
  }
  function B0() {
    return (
      document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) &&
      window.innerWidth > document.body.offsetWidth
    );
  }
  var W0 = 'rc-util-locker-'.concat(Date.now()),
    dd = 0;
  function U0(e) {
    var t = !!e,
      n = oe(function () {
        return (dd += 1), ''.concat(W0, '_').concat(dd);
      }),
      r = V(n, 1),
      o = r[0];
    tt(
      function () {
        if (t) {
          var i = V0(),
            a = B0();
          rr(
            `
html body {
  overflow-y: hidden;
  `.concat(
              a ? 'width: calc(100% - '.concat(i, 'px);') : '',
              `
}`,
            ),
            o,
          );
        } else Bo(o);
        return function () {
          Bo(o);
        };
      },
      [t, o],
    );
  }
  var fd = !1;
  function G0(e) {
    return typeof e == 'boolean' && (fd = e), fd;
  }
  var md = function (t) {
      return t === !1
        ? !1
        : !Tt() || !t
        ? null
        : typeof t == 'string'
        ? document.querySelector(t)
        : typeof t == 'function'
        ? t()
        : t;
    },
    hl = ye(function (e, t) {
      var n = e.open,
        r = e.autoLock,
        o = e.getContainer;
      e.debug;
      var i = e.autoDestroy,
        a = i === void 0 ? !0 : i,
        l = e.children,
        s = oe(n),
        c = V(s, 2),
        u = c[0],
        d = c[1],
        f = u || n;
      pe(
        function () {
          (a || n) && d(n);
        },
        [n, a],
      );
      var g = oe(function () {
          return md(o);
        }),
        h = V(g, 2),
        p = h[0],
        y = h[1];
      pe(function () {
        var T = md(o);
        y(T ?? null);
      });
      var b = k0(f && !p),
        S = V(b, 2),
        x = S[0],
        _ = S[1],
        R = p ?? x;
      U0(r && n && Tt() && (R === x || R === document.body));
      var O = null;
      if (l && zo(l) && t) {
        var v = l;
        O = v.ref;
      }
      var C = na(O, t);
      if (!f || !Tt() || p === void 0) return null;
      var $ = R === !1 || G0(),
        E = l;
      return t && (E = gt(l, { ref: C })), m.createElement(sd.Provider, { value: _ }, $ ? E : wo(E, R));
    });
  function K0() {
    var e = F({}, Qi);
    return e.useId;
  }
  var gd = 0;
  function X0(e) {
    var t = oe('ssr-id'),
      n = V(t, 2),
      r = n[0],
      o = n[1],
      i = K0(),
      a = i == null ? void 0 : i();
    return (
      pe(function () {
        if (!i) {
          var l = gd;
          (gd += 1), o('rc_unique_'.concat(l));
        }
      }, []),
      e || a || r
    );
  }
  var q0 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    Y0 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
    Q0 = ''
      .concat(q0, ' ')
      .concat(Y0)
      .split(/[\s\n]+/),
    J0 = 'aria-',
    Z0 = 'data-';
  function pd(e, t) {
    return e.indexOf(t) === 0;
  }
  function Si(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      n;
    t === !1 ? (n = { aria: !0, data: !0, attr: !0 }) : t === !0 ? (n = { aria: !0 }) : (n = F({}, t));
    var r = {};
    return (
      Object.keys(e).forEach(function (o) {
        ((n.aria && (o === 'role' || pd(o, J0))) || (n.data && pd(o, Z0)) || (n.attr && Q0.includes(o))) &&
          (r[o] = e[o]);
      }),
      r
    );
  }
  const Ci = m.createContext({}),
    eb = (e) => {
      let { children: t, status: n, override: r } = e;
      const o = he(Ci),
        i = le(() => {
          const a = Object.assign({}, o);
          return r && delete a.isFormItemInput, n && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
        }, [n, r, o]);
      return m.createElement(Ci.Provider, { value: i }, t);
    };
  var hd = function (t) {
      if (Tt() && window.document.documentElement) {
        var n = Array.isArray(t) ? t : [t],
          r = window.document.documentElement;
        return n.some(function (o) {
          return o in r.style;
        });
      }
      return !1;
    },
    tb = function (t, n) {
      if (!hd(t)) return !1;
      var r = document.createElement('div'),
        o = r.style[t];
      return (r.style[t] = n), r.style[t] !== o;
    };
  function vd(e, t) {
    return !Array.isArray(e) && t !== void 0 ? tb(e, t) : hd(e);
  }
  const nb = () => Tt() && window.document.documentElement;
  let xi;
  const rb = () => {
      if (!nb()) return !1;
      if (xi !== void 0) return xi;
      const e = document.createElement('div');
      return (
        (e.style.display = 'flex'),
        (e.style.flexDirection = 'column'),
        (e.style.rowGap = '1px'),
        e.appendChild(document.createElement('div')),
        e.appendChild(document.createElement('div')),
        document.body.appendChild(e),
        (xi = e.scrollHeight === 1),
        document.body.removeChild(e),
        xi
      );
    },
    ob = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
    ib = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
    vl = function (e, t, n, r) {
      const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? '&' : '';
      return {
        [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, ob(r)), { animationPlayState: 'paused' }),
        [`${i}${e}-leave`]: Object.assign(Object.assign({}, ib(r)), { animationPlayState: 'paused' }),
        [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
        [`${i}${e}-leave${e}-leave-active`]: { animationName: n, animationPlayState: 'running', pointerEvents: 'none' },
      };
    },
    ab = new Le('antMoveDownIn', {
      '0%': { transform: 'translate3d(0, 100%, 0)', transformOrigin: '0 0', opacity: 0 },
      '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    }),
    lb = new Le('antMoveDownOut', {
      '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
      '100%': { transform: 'translate3d(0, 100%, 0)', transformOrigin: '0 0', opacity: 0 },
    }),
    sb = new Le('antMoveLeftIn', {
      '0%': { transform: 'translate3d(-100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
      '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    }),
    cb = new Le('antMoveLeftOut', {
      '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
      '100%': { transform: 'translate3d(-100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
    }),
    ub = new Le('antMoveRightIn', {
      '0%': { transform: 'translate3d(100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
      '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    }),
    db = new Le('antMoveRightOut', {
      '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
      '100%': { transform: 'translate3d(100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
    }),
    fb = new Le('antMoveUpIn', {
      '0%': { transform: 'translate3d(0, -100%, 0)', transformOrigin: '0 0', opacity: 0 },
      '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    }),
    mb = new Le('antMoveUpOut', {
      '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
      '100%': { transform: 'translate3d(0, -100%, 0)', transformOrigin: '0 0', opacity: 0 },
    }),
    gb = {
      'move-up': { inKeyframes: fb, outKeyframes: mb },
      'move-down': { inKeyframes: ab, outKeyframes: lb },
      'move-left': { inKeyframes: sb, outKeyframes: cb },
      'move-right': { inKeyframes: ub, outKeyframes: db },
    },
    bd = (e, t) => {
      const { antCls: n } = e,
        r = `${n}-${t}`,
        { inKeyframes: o, outKeyframes: i } = gb[t];
      return [
        vl(r, o, i, e.motionDurationMid),
        {
          [`
        ${r}-enter,
        ${r}-appear
      `]: { opacity: 0, animationTimingFunction: e.motionEaseOutCirc },
          [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
        },
      ];
    },
    yd = new Le('antSlideUpIn', {
      '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
      '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
    }),
    Sd = new Le('antSlideUpOut', {
      '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
      '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    }),
    Cd = new Le('antSlideDownIn', {
      '0%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
      '100%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
    }),
    xd = new Le('antSlideDownOut', {
      '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
      '100%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
    }),
    pb = new Le('antSlideLeftIn', {
      '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
      '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
    }),
    hb = new Le('antSlideLeftOut', {
      '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
      '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    }),
    vb = new Le('antSlideRightIn', {
      '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
      '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
    }),
    bb = new Le('antSlideRightOut', {
      '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
      '100%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
    }),
    yb = {
      'slide-up': { inKeyframes: yd, outKeyframes: Sd },
      'slide-down': { inKeyframes: Cd, outKeyframes: xd },
      'slide-left': { inKeyframes: pb, outKeyframes: hb },
      'slide-right': { inKeyframes: vb, outKeyframes: bb },
    },
    wd = (e, t) => {
      const { antCls: n } = e,
        r = `${n}-${t}`,
        { inKeyframes: o, outKeyframes: i } = yb[t];
      return [
        vl(r, o, i, e.motionDurationMid),
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
    Sb = new Le('antZoomIn', {
      '0%': { transform: 'scale(0.2)', opacity: 0 },
      '100%': { transform: 'scale(1)', opacity: 1 },
    }),
    Cb = new Le('antZoomOut', { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(0.2)', opacity: 0 } }),
    $d = new Le('antZoomBigIn', {
      '0%': { transform: 'scale(0.8)', opacity: 0 },
      '100%': { transform: 'scale(1)', opacity: 1 },
    }),
    Ed = new Le('antZoomBigOut', { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(0.8)', opacity: 0 } }),
    xb = new Le('antZoomUpIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
    }),
    wb = new Le('antZoomUpOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
    }),
    $b = new Le('antZoomLeftIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
    }),
    Eb = new Le('antZoomLeftOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
    }),
    Ob = new Le('antZoomRightIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
    }),
    _b = new Le('antZoomRightOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
    }),
    Ib = new Le('antZoomDownIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
    }),
    Pb = new Le('antZoomDownOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
    }),
    Rb = {
      zoom: { inKeyframes: Sb, outKeyframes: Cb },
      'zoom-big': { inKeyframes: $d, outKeyframes: Ed },
      'zoom-big-fast': { inKeyframes: $d, outKeyframes: Ed },
      'zoom-left': { inKeyframes: $b, outKeyframes: Eb },
      'zoom-right': { inKeyframes: Ob, outKeyframes: _b },
      'zoom-up': { inKeyframes: xb, outKeyframes: wb },
      'zoom-down': { inKeyframes: Ib, outKeyframes: Pb },
    },
    Tb = (e, t) => {
      const { antCls: n } = e,
        r = `${n}-${t}`,
        { inKeyframes: o, outKeyframes: i } = Rb[t];
      return [
        vl(r, o, i, t === 'zoom-big-fast' ? e.motionDurationFast : e.motionDurationMid),
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
  function vr(e) {
    var t = L();
    t.current = e;
    var n = ut(function () {
      for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i));
    }, []);
    return n;
  }
  function bl(e) {
    return e !== void 0;
  }
  function yn(e, t) {
    var n = t || {},
      r = n.defaultValue,
      o = n.value,
      i = n.onChange,
      a = n.postState,
      l = Bn(function () {
        return bl(o) ? o : bl(r) ? (typeof r == 'function' ? r() : r) : typeof e == 'function' ? e() : e;
      }),
      s = V(l, 2),
      c = s[0],
      u = s[1],
      d = o !== void 0 ? o : c,
      f = a ? a(d) : d,
      g = vr(i),
      h = Bn([d]),
      p = V(h, 2),
      y = p[0],
      b = p[1];
    cd(
      function () {
        var x = y[0];
        c !== x && g(c, x);
      },
      [y],
    ),
      cd(
        function () {
          bl(o) || u(o);
        },
        [o],
      );
    var S = vr(function (x, _) {
      u(x, _), b([d], _);
    });
    return [f, S];
  }
  const Mb = function () {
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
  var Od = m.createContext(null);
  function Nb() {
    return he(Od);
  }
  function Fb() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
      t = oe(!1),
      n = V(t, 2),
      r = n[0],
      o = n[1],
      i = L(null),
      a = function () {
        window.clearTimeout(i.current);
      };
    pe(function () {
      return a;
    }, []);
    var l = function (c, u) {
      a(),
        (i.current = window.setTimeout(function () {
          o(c), u && u();
        }, e));
    };
    return [r, l, a];
  }
  function _d() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250,
      t = L(null),
      n = L(null);
    pe(function () {
      return function () {
        window.clearTimeout(n.current);
      };
    }, []);
    function r(o) {
      (o || t.current === null) && (t.current = o),
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
  function Ab(e, t, n, r) {
    var o = L(null);
    (o.current = { open: t, triggerOpen: n, customizedTrigger: r }),
      pe(function () {
        function i(a) {
          var l;
          if (!((l = o.current) !== null && l !== void 0 && l.customizedTrigger)) {
            var s = a.target;
            s.shadowRoot && a.composed && (s = a.composedPath()[0] || s),
              o.current.open &&
                e()
                  .filter(function (c) {
                    return c;
                  })
                  .every(function (c) {
                    return !c.contains(s) && c !== s;
                  }) &&
                o.current.triggerOpen(!1);
          }
        }
        return (
          window.addEventListener('mousedown', i),
          function () {
            return window.removeEventListener('mousedown', i);
          }
        );
      }, []);
  }
  var zb = [
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
    br = void 0;
  function Db(e, t) {
    var n = e.prefixCls,
      r = e.invalidate,
      o = e.item,
      i = e.renderItem,
      a = e.responsive,
      l = e.responsiveDisabled,
      s = e.registerSize,
      c = e.itemKey,
      u = e.className,
      d = e.style,
      f = e.children,
      g = e.display,
      h = e.order,
      p = e.component,
      y = p === void 0 ? 'div' : p,
      b = rt(e, zb),
      S = a && !g;
    function x(C) {
      s(c, C);
    }
    pe(function () {
      return function () {
        x(null);
      };
    }, []);
    var _ = i && o !== br ? i(o) : f,
      R;
    r ||
      (R = {
        opacity: S ? 0 : 1,
        height: S ? 0 : br,
        overflowY: S ? 'hidden' : br,
        order: a ? h : br,
        pointerEvents: S ? 'none' : br,
        position: S ? 'absolute' : br,
      });
    var O = {};
    S && (O['aria-hidden'] = !0);
    var v = m.createElement(y, Ne({ className: Q(!r && n, u), style: F(F({}, R), d) }, O, b, { ref: t }), _);
    return (
      a &&
        (v = m.createElement(
          $n,
          {
            onResize: function ($) {
              var E = $.offsetWidth;
              x(E);
            },
            disabled: l,
          },
          v,
        )),
      v
    );
  }
  var eo = ye(Db);
  eo.displayName = 'Item';
  function jb() {
    var e = Bn({}),
      t = V(e, 2),
      n = t[1],
      r = L([]),
      o = 0,
      i = 0;
    function a(l) {
      var s = o;
      (o += 1), r.current.length < s + 1 && (r.current[s] = l);
      var c = r.current[s];
      function u(d) {
        (r.current[s] = typeof d == 'function' ? d(r.current[s]) : d),
          Pt.cancel(i),
          (i = Pt(function () {
            n({}, !0);
          }));
      }
      return [c, u];
    }
    return a;
  }
  var Lb = ['component'],
    Hb = ['className'],
    kb = ['className'],
    Vb = function (t, n) {
      var r = he(wi);
      if (!r) {
        var o = t.component,
          i = o === void 0 ? 'div' : o,
          a = rt(t, Lb);
        return m.createElement(i, Ne({}, a, { ref: n }));
      }
      var l = r.className,
        s = rt(r, Hb),
        c = t.className,
        u = rt(t, kb);
      return m.createElement(
        wi.Provider,
        { value: null },
        m.createElement(eo, Ne({ ref: n, className: Q(l, c) }, s, u)),
      );
    },
    Id = ye(Vb);
  Id.displayName = 'RawItem';
  var Bb = [
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
    wi = m.createContext(null),
    Pd = 'responsive',
    Rd = 'invalidate';
  function Wb(e) {
    return '+ '.concat(e.length, ' ...');
  }
  function Ub(e, t) {
    var n = e.prefixCls,
      r = n === void 0 ? 'rc-overflow' : n,
      o = e.data,
      i = o === void 0 ? [] : o,
      a = e.renderItem,
      l = e.renderRawItem,
      s = e.itemKey,
      c = e.itemWidth,
      u = c === void 0 ? 10 : c,
      d = e.ssr,
      f = e.style,
      g = e.className,
      h = e.maxCount,
      p = e.renderRest,
      y = e.renderRawRest,
      b = e.suffix,
      S = e.component,
      x = S === void 0 ? 'div' : S,
      _ = e.itemComponent,
      R = e.onVisibleChange,
      O = rt(e, Bb),
      v = jb(),
      C = d === 'full',
      $ = v(null),
      E = V($, 2),
      T = E[0],
      P = E[1],
      w = T || 0,
      I = v(new Map()),
      M = V(I, 2),
      N = M[0],
      A = M[1],
      D = v(0),
      j = V(D, 2),
      B = j[0],
      X = j[1],
      Y = v(0),
      z = V(Y, 2),
      Z = z[0],
      J = z[1],
      K = v(0),
      W = V(K, 2),
      ae = W[0],
      ce = W[1],
      xe = oe(null),
      ve = V(xe, 2),
      se = ve[0],
      k = ve[1],
      de = oe(null),
      me = V(de, 2),
      be = me[0],
      q = me[1],
      H = le(
        function () {
          return be === null && C ? Number.MAX_SAFE_INTEGER : be || 0;
        },
        [be, T],
      ),
      ue = oe(!1),
      we = V(ue, 2),
      He = we[0],
      Ge = we[1],
      Je = ''.concat(r, '-item'),
      Be = Math.max(B, Z),
      Ve = h === Pd,
      ze = i.length && Ve,
      st = h === Rd,
      Ze = ze || (typeof h == 'number' && i.length > h),
      Pe = le(
        function () {
          var G = i;
          return (
            ze
              ? T === null && C
                ? (G = i)
                : (G = i.slice(0, Math.min(i.length, w / u)))
              : typeof h == 'number' && (G = i.slice(0, h)),
            G
          );
        },
        [i, u, T, h, ze],
      ),
      Oe = le(
        function () {
          return ze ? i.slice(H + 1) : i.slice(Pe.length);
        },
        [i, Pe, ze, H],
      ),
      ct = ut(
        function (G, te) {
          var re;
          return typeof s == 'function'
            ? s(G)
            : (re = s && (G == null ? void 0 : G[s])) !== null && re !== void 0
            ? re
            : te;
        },
        [s],
      ),
      ht = ut(
        a ||
          function (G) {
            return G;
          },
        [a],
      );
    function Se(G, te, re) {
      (be === G && (te === void 0 || te === se)) ||
        (q(G), re || (Ge(G < i.length - 1), R == null || R(G)), te !== void 0 && k(te));
    }
    function _e(G, te) {
      P(te.clientWidth);
    }
    function Ye(G, te) {
      A(function (re) {
        var Ce = new Map(re);
        return te === null ? Ce.delete(G) : Ce.set(G, te), Ce;
      });
    }
    function Qe(G, te) {
      J(te), X(Z);
    }
    function We(G, te) {
      ce(te);
    }
    function at(G) {
      return N.get(ct(Pe[G], G));
    }
    tt(
      function () {
        if (w && Be && Pe) {
          var G = ae,
            te = Pe.length,
            re = te - 1;
          if (!te) {
            Se(0, null);
            return;
          }
          for (var Ce = 0; Ce < te; Ce += 1) {
            var Me = at(Ce);
            if ((C && (Me = Me || 0), Me === void 0)) {
              Se(Ce - 1, void 0, !0);
              break;
            }
            if (((G += Me), (re === 0 && G <= w) || (Ce === re - 1 && G + at(re) <= w))) {
              Se(re, null);
              break;
            } else if (G + Be > w) {
              Se(Ce - 1, G - Me - ae + Z);
              break;
            }
          }
          b && at(0) + ae > w && k(null);
        }
      },
      [w, N, Z, ae, ct, Pe],
    );
    var lt = He && !!Oe.length,
      ne = {};
    se !== null && ze && (ne = { position: 'absolute', left: se, top: 0 });
    var ge = { prefixCls: Je, responsive: ze, component: _, invalidate: st },
      je = l
        ? function (G, te) {
            var re = ct(G, te);
            return m.createElement(
              wi.Provider,
              {
                key: re,
                value: F(F({}, ge), {}, { order: te, item: G, itemKey: re, registerSize: Ye, display: te <= H }),
              },
              l(G, te),
            );
          }
        : function (G, te) {
            var re = ct(G, te);
            return m.createElement(
              eo,
              Ne({}, ge, {
                order: te,
                key: re,
                item: G,
                renderItem: ht,
                itemKey: re,
                registerSize: Ye,
                display: te <= H,
              }),
            );
          },
      Fe,
      ke = {
        order: lt ? H : Number.MAX_SAFE_INTEGER,
        className: ''.concat(Je, '-rest'),
        registerSize: Qe,
        display: lt,
      };
    if (y) y && (Fe = m.createElement(wi.Provider, { value: F(F({}, ge), ke) }, y(Oe)));
    else {
      var Et = p || Wb;
      Fe = m.createElement(eo, Ne({}, ge, ke), typeof Et == 'function' ? Et(Oe) : Et);
    }
    var ft = m.createElement(
      x,
      Ne({ className: Q(!st && r, g), style: f, ref: t }, O),
      Pe.map(je),
      Ze ? Fe : null,
      b &&
        m.createElement(
          eo,
          Ne({}, ge, {
            responsive: Ve,
            responsiveDisabled: !ze,
            order: H,
            className: ''.concat(Je, '-suffix'),
            registerSize: We,
            display: !0,
            style: ne,
          }),
          b,
        ),
    );
    return Ve && (ft = m.createElement($n, { onResize: _e, disabled: !ze }, ft)), ft;
  }
  var to = ye(Ub);
  (to.displayName = 'Overflow'), (to.Item = Id), (to.RESPONSIVE = Pd), (to.INVALIDATE = Rd);
  var $i = function (t) {
      var n = t.className,
        r = t.customizeIcon,
        o = t.customizeIconProps,
        i = t.onMouseDown,
        a = t.onClick,
        l = t.children,
        s;
      return (
        typeof r == 'function' ? (s = r(o)) : (s = r),
        m.createElement(
          'span',
          {
            className: n,
            onMouseDown: function (u) {
              u.preventDefault(), i && i(u);
            },
            style: { userSelect: 'none', WebkitUserSelect: 'none' },
            unselectable: 'on',
            onClick: a,
            'aria-hidden': !0,
          },
          s !== void 0
            ? s
            : m.createElement(
                'span',
                {
                  className: Q(
                    n.split(/\s+/).map(function (c) {
                      return ''.concat(c, '-icon');
                    }),
                  ),
                },
                l,
              ),
        )
      );
    },
    Gb = function (t, n) {
      var r,
        o,
        i = t.prefixCls,
        a = t.id,
        l = t.inputElement,
        s = t.disabled,
        c = t.tabIndex,
        u = t.autoFocus,
        d = t.autoComplete,
        f = t.editable,
        g = t.activeDescendantId,
        h = t.value,
        p = t.maxLength,
        y = t.onKeyDown,
        b = t.onMouseDown,
        S = t.onChange,
        x = t.onPaste,
        _ = t.onCompositionStart,
        R = t.onCompositionEnd,
        O = t.open,
        v = t.attrs,
        C = l || m.createElement('input', null),
        $ = C,
        E = $.ref,
        T = $.props,
        P = T.onKeyDown,
        w = T.onChange,
        I = T.onMouseDown,
        M = T.onCompositionStart,
        N = T.onCompositionEnd,
        A = T.style;
      return (
        'maxLength' in C.props,
        (C = gt(
          C,
          F(
            F(
              F({ type: 'search' }, T),
              {},
              {
                id: a,
                ref: tr(n, E),
                disabled: s,
                tabIndex: c,
                autoComplete: d || 'off',
                autoFocus: u,
                className: Q(
                  ''.concat(i, '-selection-search-input'),
                  (r = C) === null || r === void 0 || (o = r.props) === null || o === void 0 ? void 0 : o.className,
                ),
                role: 'combobox',
                'aria-expanded': O,
                'aria-haspopup': 'listbox',
                'aria-owns': ''.concat(a, '_list'),
                'aria-autocomplete': 'list',
                'aria-controls': ''.concat(a, '_list'),
                'aria-activedescendant': g,
              },
              v,
            ),
            {},
            {
              value: f ? h : '',
              maxLength: p,
              readOnly: !f,
              unselectable: f ? null : 'on',
              style: F(F({}, A), {}, { opacity: f ? null : 0 }),
              onKeyDown: function (j) {
                y(j), P && P(j);
              },
              onMouseDown: function (j) {
                b(j), I && I(j);
              },
              onChange: function (j) {
                S(j), w && w(j);
              },
              onCompositionStart: function (j) {
                _(j), M && M(j);
              },
              onCompositionEnd: function (j) {
                R(j), N && N(j);
              },
              onPaste: x,
            },
          ),
        )),
        C
      );
    },
    yl = ye(Gb);
  yl.displayName = 'Input';
  function Td(e) {
    return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
  }
  var Kb = typeof window < 'u' && window.document && window.document.documentElement,
    Xb = Kb;
  function qb(e) {
    return e != null;
  }
  function Md(e) {
    return ['string', 'number'].includes(De(e));
  }
  function Nd(e) {
    var t = void 0;
    return e && (Md(e.title) ? (t = e.title.toString()) : Md(e.label) && (t = e.label.toString())), t;
  }
  function Yb(e, t) {
    Xb ? xn(e, t) : pe(e, t);
  }
  function Qb(e) {
    var t;
    return (t = e.key) !== null && t !== void 0 ? t : e.value;
  }
  var Fd = function (t) {
      t.preventDefault(), t.stopPropagation();
    },
    Jb = function (t) {
      var n = t.id,
        r = t.prefixCls,
        o = t.values,
        i = t.open,
        a = t.searchValue,
        l = t.autoClearSearchValue,
        s = t.inputRef,
        c = t.placeholder,
        u = t.disabled,
        d = t.mode,
        f = t.showSearch,
        g = t.autoFocus,
        h = t.autoComplete,
        p = t.activeDescendantId,
        y = t.tabIndex,
        b = t.removeIcon,
        S = t.maxTagCount,
        x = t.maxTagTextLength,
        _ = t.maxTagPlaceholder,
        R =
          _ === void 0
            ? function (k) {
                return '+ '.concat(k.length, ' ...');
              }
            : _,
        O = t.tagRender,
        v = t.onToggleOpen,
        C = t.onRemove,
        $ = t.onInputChange,
        E = t.onInputPaste,
        T = t.onInputKeyDown,
        P = t.onInputMouseDown,
        w = t.onInputCompositionStart,
        I = t.onInputCompositionEnd,
        M = L(null),
        N = oe(0),
        A = V(N, 2),
        D = A[0],
        j = A[1],
        B = oe(!1),
        X = V(B, 2),
        Y = X[0],
        z = X[1],
        Z = ''.concat(r, '-selection'),
        J = i || (d === 'multiple' && l === !1) || d === 'tags' ? a : '',
        K = d === 'tags' || (d === 'multiple' && l === !1) || (f && (i || Y));
      Yb(
        function () {
          j(M.current.scrollWidth);
        },
        [J],
      );
      function W(k, de, me, be, q) {
        return m.createElement(
          'span',
          { className: Q(''.concat(Z, '-item'), ee({}, ''.concat(Z, '-item-disabled'), me)), title: Nd(k) },
          m.createElement('span', { className: ''.concat(Z, '-item-content') }, de),
          be &&
            m.createElement(
              $i,
              { className: ''.concat(Z, '-item-remove'), onMouseDown: Fd, onClick: q, customizeIcon: b },
              '×',
            ),
        );
      }
      function ae(k, de, me, be, q) {
        var H = function (we) {
          Fd(we), v(!i);
        };
        return m.createElement(
          'span',
          { onMouseDown: H },
          O({ label: de, value: k, disabled: me, closable: be, onClose: q }),
        );
      }
      function ce(k) {
        var de = k.disabled,
          me = k.label,
          be = k.value,
          q = !u && !de,
          H = me;
        if (typeof x == 'number' && (typeof me == 'string' || typeof me == 'number')) {
          var ue = String(H);
          ue.length > x && (H = ''.concat(ue.slice(0, x), '...'));
        }
        var we = function (Ge) {
          Ge && Ge.stopPropagation(), C(k);
        };
        return typeof O == 'function' ? ae(be, H, de, q, we) : W(k, H, de, q, we);
      }
      function xe(k) {
        var de = typeof R == 'function' ? R(k) : R;
        return W({ title: de }, de, !1);
      }
      var ve = m.createElement(
          'div',
          {
            className: ''.concat(Z, '-search'),
            style: { width: D },
            onFocus: function () {
              z(!0);
            },
            onBlur: function () {
              z(!1);
            },
          },
          m.createElement(yl, {
            ref: s,
            open: i,
            prefixCls: r,
            id: n,
            inputElement: null,
            disabled: u,
            autoFocus: g,
            autoComplete: h,
            editable: K,
            activeDescendantId: p,
            value: J,
            onKeyDown: T,
            onMouseDown: P,
            onChange: $,
            onPaste: E,
            onCompositionStart: w,
            onCompositionEnd: I,
            tabIndex: y,
            attrs: Si(t, !0),
          }),
          m.createElement('span', { ref: M, className: ''.concat(Z, '-search-mirror'), 'aria-hidden': !0 }, J, ' '),
        ),
        se = m.createElement(to, {
          prefixCls: ''.concat(Z, '-overflow'),
          data: o,
          renderItem: ce,
          renderRest: xe,
          suffix: ve,
          itemKey: Qb,
          maxCount: S,
        });
      return m.createElement(
        m.Fragment,
        null,
        se,
        !o.length && !J && m.createElement('span', { className: ''.concat(Z, '-placeholder') }, c),
      );
    },
    Zb = function (t) {
      var n = t.inputElement,
        r = t.prefixCls,
        o = t.id,
        i = t.inputRef,
        a = t.disabled,
        l = t.autoFocus,
        s = t.autoComplete,
        c = t.activeDescendantId,
        u = t.mode,
        d = t.open,
        f = t.values,
        g = t.placeholder,
        h = t.tabIndex,
        p = t.showSearch,
        y = t.searchValue,
        b = t.activeValue,
        S = t.maxLength,
        x = t.onInputKeyDown,
        _ = t.onInputMouseDown,
        R = t.onInputChange,
        O = t.onInputPaste,
        v = t.onInputCompositionStart,
        C = t.onInputCompositionEnd,
        $ = oe(!1),
        E = V($, 2),
        T = E[0],
        P = E[1],
        w = u === 'combobox',
        I = w || p,
        M = f[0],
        N = y || '';
      w && b && !T && (N = b),
        pe(
          function () {
            w && P(!1);
          },
          [w, b],
        );
      var A = u !== 'combobox' && !d && !p ? !1 : !!N,
        D = Nd(M),
        j = function () {
          if (M) return null;
          var X = A ? { visibility: 'hidden' } : void 0;
          return m.createElement('span', { className: ''.concat(r, '-selection-placeholder'), style: X }, g);
        };
      return m.createElement(
        m.Fragment,
        null,
        m.createElement(
          'span',
          { className: ''.concat(r, '-selection-search') },
          m.createElement(yl, {
            ref: i,
            prefixCls: r,
            id: o,
            open: d,
            inputElement: n,
            disabled: a,
            autoFocus: l,
            autoComplete: s,
            editable: I,
            activeDescendantId: c,
            value: N,
            onKeyDown: x,
            onMouseDown: _,
            onChange: function (X) {
              P(!0), R(X);
            },
            onPaste: O,
            onCompositionStart: v,
            onCompositionEnd: C,
            tabIndex: h,
            attrs: Si(t, !0),
            maxLength: w ? S : void 0,
          }),
        ),
        !w && M && !A && m.createElement('span', { className: ''.concat(r, '-selection-item'), title: D }, M.label),
        j(),
      );
    };
  function ey(e) {
    return ![
      U.ESC,
      U.SHIFT,
      U.BACKSPACE,
      U.TAB,
      U.WIN_KEY,
      U.ALT,
      U.META,
      U.WIN_KEY_RIGHT,
      U.CTRL,
      U.SEMICOLON,
      U.EQUALS,
      U.CAPS_LOCK,
      U.CONTEXT_MENU,
      U.F1,
      U.F2,
      U.F3,
      U.F4,
      U.F5,
      U.F6,
      U.F7,
      U.F8,
      U.F9,
      U.F10,
      U.F11,
      U.F12,
    ].includes(e);
  }
  var ty = function (t, n) {
      var r = L(null),
        o = L(!1),
        i = t.prefixCls,
        a = t.open,
        l = t.mode,
        s = t.showSearch,
        c = t.tokenWithEnter,
        u = t.autoClearSearchValue,
        d = t.onSearch,
        f = t.onSearchSubmit,
        g = t.onToggleOpen,
        h = t.onInputKeyDown,
        p = t.domRef;
      bt(n, function () {
        return {
          focus: function () {
            r.current.focus();
          },
          blur: function () {
            r.current.blur();
          },
        };
      });
      var y = _d(0),
        b = V(y, 2),
        S = b[0],
        x = b[1],
        _ = function (A) {
          var D = A.which;
          (D === U.UP || D === U.DOWN) && A.preventDefault(),
            h && h(A),
            D === U.ENTER && l === 'tags' && !o.current && !a && (f == null || f(A.target.value)),
            ey(D) && g(!0);
        },
        R = function () {
          x(!0);
        },
        O = L(null),
        v = function (A) {
          d(A, !0, o.current) !== !1 && g(!0);
        },
        C = function () {
          o.current = !0;
        },
        $ = function (A) {
          (o.current = !1), l !== 'combobox' && v(A.target.value);
        },
        E = function (A) {
          var D = A.target.value;
          if (c && O.current && /[\r\n]/.test(O.current)) {
            var j = O.current
              .replace(/[\r\n]+$/, '')
              .replace(/\r\n/g, ' ')
              .replace(/[\r\n]/g, ' ');
            D = D.replace(j, O.current);
          }
          (O.current = null), v(D);
        },
        T = function (A) {
          var D = A.clipboardData,
            j = D.getData('text');
          O.current = j;
        },
        P = function (A) {
          var D = A.target;
          if (D !== r.current) {
            var j = document.body.style.msTouchAction !== void 0;
            j
              ? setTimeout(function () {
                  r.current.focus();
                })
              : r.current.focus();
          }
        },
        w = function (A) {
          var D = S();
          A.target !== r.current && !D && l !== 'combobox' && A.preventDefault(),
            ((l !== 'combobox' && (!s || !D)) || !a) && (a && u !== !1 && d('', !0, !1), g());
        },
        I = {
          inputRef: r,
          onInputKeyDown: _,
          onInputMouseDown: R,
          onInputChange: E,
          onInputPaste: T,
          onInputCompositionStart: C,
          onInputCompositionEnd: $,
        },
        M = l === 'multiple' || l === 'tags' ? m.createElement(Jb, Ne({}, t, I)) : m.createElement(Zb, Ne({}, t, I));
      return m.createElement('div', { ref: p, className: ''.concat(i, '-selector'), onClick: P, onMouseDown: w }, M);
    },
    Ad = ye(ty);
  Ad.displayName = 'Selector';
  var zd = m.createContext(null);
  function Dd(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
  }
  function ny(e, t, n) {
    var r = Dd(t ?? e),
      o = Dd(n ?? e);
    return [new Set(r), new Set(o)];
  }
  function ry() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      n = arguments.length > 2 ? arguments[2] : void 0;
    return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
  }
  function oy(e, t, n, r) {
    for (var o = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
      var l,
        s = i[a];
      if (ry((l = e[s]) === null || l === void 0 ? void 0 : l.points, o, r))
        return ''.concat(t, '-placement-').concat(s);
    }
    return '';
  }
  function jd(e, t, n, r) {
    return t || (n ? { motionName: ''.concat(e, '-').concat(n) } : r ? { motionName: r } : null);
  }
  function Ei(e) {
    return e.ownerDocument.defaultView;
  }
  function Sl(e) {
    for (var t = [], n = e == null ? void 0 : e.parentElement, r = ['hidden', 'scroll', 'auto']; n; ) {
      var o = Ei(n).getComputedStyle(n),
        i = o.overflowX,
        a = o.overflowY;
      (r.includes(i) || r.includes(a)) && t.push(n), (n = n.parentElement);
    }
    return t;
  }
  function Oi(e) {
    return Number.isNaN(e) ? 1 : e;
  }
  function Ld() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    return [e[0], e[1]];
  }
  function yr(e, t) {
    var n = t[0],
      r = t[1],
      o,
      i;
    return (
      n === 't' ? (i = e.y) : n === 'b' ? (i = e.y + e.height) : (i = e.y + e.height / 2),
      r === 'l' ? (o = e.x) : r === 'r' ? (o = e.x + e.width) : (o = e.x + e.width / 2),
      { x: o, y: i }
    );
  }
  function Pn(e, t) {
    var n = { t: 'b', b: 't', l: 'r', r: 'l' };
    return e
      .map(function (r, o) {
        return o === t ? n[r] || 'c' : r;
      })
      .join('');
  }
  function iy(e, t, n, r, o, i, a) {
    var l = oe({ ready: !1, offsetX: 0, offsetY: 0, arrowX: 0, arrowY: 0, scaleX: 1, scaleY: 1, align: o[r] || {} }),
      s = V(l, 2),
      c = s[0],
      u = s[1],
      d = L(0),
      f = le(
        function () {
          return t ? Sl(t) : [];
        },
        [t],
      ),
      g = vr(function () {
        if (t && n && e) {
          var y = t,
            b = y.style.left,
            S = y.style.top,
            x = y.ownerDocument,
            _ = Ei(y),
            R = o[r] || i || {};
          (y.style.left = '0'), (y.style.top = '0');
          var O;
          if (Array.isArray(n)) O = { x: n[0], y: n[1], width: 0, height: 0 };
          else {
            var v = n.getBoundingClientRect();
            O = { x: v.x, y: v.y, width: v.width, height: v.height };
          }
          var C = y.getBoundingClientRect(),
            $ = _.getComputedStyle(y),
            E = $.width,
            T = $.height,
            P = x.documentElement,
            w = P.clientWidth,
            I = P.clientHeight,
            M = P.scrollWidth,
            N = P.scrollHeight,
            A = P.scrollTop,
            D = P.scrollLeft,
            j = C.height,
            B = C.width,
            X = O.height,
            Y = O.width,
            z =
              R.htmlRegion === 'scroll'
                ? { left: -D, top: -A, right: M - D, bottom: N - A }
                : { left: 0, top: 0, right: w, bottom: I };
          (f || []).forEach(function (Yt) {
            var Ot = Yt.getBoundingClientRect(),
              sn = Yt.offsetHeight,
              uo = Yt.clientHeight,
              Yn = Yt.offsetWidth,
              fo = Yt.clientWidth,
              Rr = Oi(Math.round((Ot.width / Yn) * 1e3) / 1e3),
              Qn = Oi(Math.round((Ot.height / sn) * 1e3) / 1e3),
              Tr = (Yn - fo) * Rr,
              mo = (sn - uo) * Qn,
              go = Ot.x + Ot.width - Tr,
              Mr = Ot.y + Ot.height - mo;
            (z.left = Math.max(z.left, Ot.left)),
              (z.top = Math.max(z.top, Ot.top)),
              (z.right = Math.min(z.right, go)),
              (z.bottom = Math.min(z.bottom, Mr));
          }),
            (y.style.left = b),
            (y.style.top = S);
          var Z = Oi(Math.round((B / parseFloat(E)) * 1e3) / 1e3),
            J = Oi(Math.round((j / parseFloat(T)) * 1e3) / 1e3);
          if (Z === 0 || J === 0) return;
          var K = R.offset,
            W = R.targetOffset,
            ae = K || [],
            ce = V(ae, 2),
            xe = ce[0],
            ve = xe === void 0 ? 0 : xe,
            se = ce[1],
            k = se === void 0 ? 0 : se,
            de = W || [],
            me = V(de, 2),
            be = me[0],
            q = be === void 0 ? 0 : be,
            H = me[1],
            ue = H === void 0 ? 0 : H;
          (O.x += q), (O.y += ue);
          var we = R.points || [],
            He = V(we, 2),
            Ge = He[0],
            Je = He[1],
            Be = Ld(Je),
            Ve = Ld(Ge),
            ze = yr(O, Be),
            st = yr(C, Ve),
            Ze = F({}, R),
            Pe = ze.x - st.x + ve,
            Oe = ze.y - st.y + k,
            ct = yr(O, ['t', 'l']),
            ht = yr(C, ['t', 'l']),
            Se = yr(O, ['b', 'r']),
            _e = yr(C, ['b', 'r']),
            Ye = R.overflow || {},
            Qe = Ye.adjustX,
            We = Ye.adjustY,
            at = Ye.shiftX,
            lt = Ye.shiftY,
            ne = function (Ot) {
              return typeof Ot == 'boolean' ? Ot : Ot >= 0;
            },
            ge = C.y + Oe,
            je = ge + j,
            Fe = ne(We),
            ke = Ve[0] === Be[0];
          Fe &&
            Ve[0] === 't' &&
            je > z.bottom &&
            (ke ? (Oe -= j - X) : (Oe = ct.y - _e.y - k), (Ze.points = [Pn(Ve, 0), Pn(Be, 0)])),
            Fe &&
              Ve[0] === 'b' &&
              ge < z.top &&
              (ke ? (Oe += j - X) : (Oe = Se.y - ht.y - k), (Ze.points = [Pn(Ve, 0), Pn(Be, 0)]));
          var Et = C.x + Pe,
            ft = Et + B,
            G = ne(Qe),
            te = Ve[1] === Be[1];
          G &&
            Ve[1] === 'l' &&
            ft > z.right &&
            (te ? (Pe -= B - Y) : (Pe = ct.x - _e.x - ve), (Ze.points = [Pn(Ve, 1), Pn(Be, 1)])),
            G &&
              Ve[1] === 'r' &&
              Et < z.left &&
              (te ? (Pe += B - Y) : (Pe = Se.x - ht.x - ve), (Ze.points = [Pn(Ve, 1), Pn(Be, 1)]));
          var re = at === !0 ? 0 : at;
          typeof re == 'number' &&
            (Et < z.left && ((Pe -= Et - z.left), O.x + Y < z.left + re && (Pe += O.x - z.left + Y - re)),
            ft > z.right && ((Pe -= ft - z.right), O.x > z.right - re && (Pe += O.x - z.right + re)));
          var Ce = lt === !0 ? 0 : lt;
          typeof Ce == 'number' &&
            (ge < z.top && ((Oe -= ge - z.top), O.y + X < z.top + Ce && (Oe += O.y - z.top + X - Ce)),
            je > z.bottom && ((Oe -= je - z.bottom), O.y > z.bottom - Ce && (Oe += O.y - z.bottom + Ce)));
          var Me = C.x + Pe,
            Ke = Me + B,
            Mt = C.y + Oe,
            Nt = Mt + j,
            Xt = O.x,
            mt = Xt + Y,
            Ft = O.y,
            Sn = Ft + X,
            At = Math.max(Me, Xt),
            _r = Math.min(Ke, mt),
            Lt = (At + _r) / 2,
            qt = Lt - Me,
            so = Math.max(Mt, Ft),
            Ir = Math.min(Nt, Sn),
            Pr = (so + Ir) / 2,
            co = Pr - Mt;
          a == null || a(t, Ze),
            u({
              ready: !0,
              offsetX: Pe / Z,
              offsetY: Oe / J,
              arrowX: qt / Z,
              arrowY: co / J,
              scaleX: Z,
              scaleY: J,
              align: Ze,
            });
        }
      }),
      h = function () {
        d.current += 1;
        var b = d.current;
        Promise.resolve().then(function () {
          d.current === b && g();
        });
      },
      p = function () {
        u(function (b) {
          return F(F({}, b), {}, { ready: !1 });
        });
      };
    return (
      tt(p, [r]),
      tt(
        function () {
          e || p();
        },
        [e],
      ),
      [c.ready, c.offsetX, c.offsetY, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, h]
    );
  }
  function ay(e, t, n, r) {
    tt(
      function () {
        if (e && t && n) {
          let u = function () {
            r();
          };
          var o = t,
            i = n,
            a = Sl(o),
            l = Sl(i),
            s = Ei(i),
            c = new Set([s].concat(fe(a), fe(l)));
          return (
            c.forEach(function (d) {
              d.addEventListener('scroll', u, { passive: !0 });
            }),
            s.addEventListener('resize', u, { passive: !0 }),
            r(),
            function () {
              c.forEach(function (d) {
                d.removeEventListener('scroll', u), s.removeEventListener('resize', u);
              });
            }
          );
        }
      },
      [e, t, n],
    );
  }
  function ly(e) {
    var t = e.prefixCls,
      n = e.align,
      r = e.arrowX,
      o = r === void 0 ? 0 : r,
      i = e.arrowY,
      a = i === void 0 ? 0 : i,
      l = L();
    if (!n || !n.points) return null;
    var s = { position: 'absolute' };
    if (n.autoArrow !== !1) {
      var c = n.points[0],
        u = n.points[1],
        d = c[0],
        f = c[1],
        g = u[0],
        h = u[1];
      d === g || !['t', 'b'].includes(d) ? (s.top = a) : d === 't' ? (s.top = 0) : (s.bottom = 0),
        f === h || !['l', 'r'].includes(f) ? (s.left = o) : f === 'l' ? (s.left = 0) : (s.right = 0);
    }
    return m.createElement('div', { ref: l, className: ''.concat(t, '-arrow'), style: s });
  }
  function sy(e) {
    var t = e.prefixCls,
      n = e.open,
      r = e.zIndex,
      o = e.mask,
      i = e.motion;
    return o
      ? React.createElement(Qr, Ne({}, i, { motionAppear: !0, visible: n, removeOnLeave: !0 }), function (a) {
          var l = a.className;
          return React.createElement('div', { style: { zIndex: r }, className: Q(''.concat(t, '-mask'), l) });
        })
      : null;
  }
  var cy = ye(function (e, t) {
      var n = e.popup,
        r = e.className,
        o = e.prefixCls,
        i = e.style,
        a = e.target,
        l = e.onVisibleChanged,
        s = e.open,
        c = e.keepDom,
        u = e.onClick,
        d = e.mask,
        f = e.arrow,
        g = e.align,
        h = e.arrowX,
        p = e.arrowY,
        y = e.motion,
        b = e.maskMotion,
        S = e.forceRender,
        x = e.getPopupContainer,
        _ = e.autoDestroy,
        R = e.portal,
        O = e.zIndex,
        v = e.onMouseEnter,
        C = e.onMouseLeave,
        $ = e.ready,
        E = e.offsetX,
        T = e.offsetY,
        P = e.onAlign,
        w = e.onPrepare,
        I = e.stretch,
        M = e.targetWidth,
        N = e.targetHeight,
        A = typeof n == 'function' ? n() : n,
        D = s || c,
        j = (x == null ? void 0 : x.length) > 0,
        B = oe(!x || !j),
        X = V(B, 2),
        Y = X[0],
        z = X[1];
      if (
        (tt(
          function () {
            !Y && j && a && z(!0);
          },
          [Y, j, a],
        ),
        !Y)
      )
        return null;
      var Z = $ || !s ? { left: E, top: T } : { left: '-1000vw', top: '-1000vh' },
        J = {};
      return (
        I &&
          (I.includes('height') && N ? (J.height = N) : I.includes('minHeight') && N && (J.minHeight = N),
          I.includes('width') && M ? (J.width = M) : I.includes('minWidth') && M && (J.minWidth = M)),
        s || (J.pointerEvents = 'none'),
        m.createElement(
          R,
          {
            open: S || D,
            getContainer:
              x &&
              function () {
                return x(a);
              },
            autoDestroy: _,
          },
          m.createElement(sy, { prefixCls: o, open: s, zIndex: O, mask: d, motion: b }),
          m.createElement($n, { onResize: P, disabled: !s }, function (K) {
            return m.createElement(
              Qr,
              Ne(
                {
                  motionAppear: !0,
                  motionEnter: !0,
                  motionLeave: !0,
                  removeOnLeave: !1,
                  forceRender: S,
                  leavedClassName: ''.concat(o, '-hidden'),
                },
                y,
                {
                  onAppearPrepare: w,
                  onEnterPrepare: w,
                  visible: s,
                  onVisibleChanged: function (ae) {
                    var ce;
                    y == null || (ce = y.onVisibleChanged) === null || ce === void 0 || ce.call(y, ae), l(ae);
                  },
                },
              ),
              function (W, ae) {
                var ce = W.className,
                  xe = W.style,
                  ve = Q(o, ce, r);
                return m.createElement(
                  'div',
                  {
                    ref: tr(K, t, ae),
                    className: ve,
                    style: F(F(F(F({}, Z), J), xe), {}, { boxSizing: 'border-box', zIndex: O }, i),
                    onMouseEnter: v,
                    onMouseLeave: C,
                    onClick: u,
                  },
                  f && m.createElement(ly, { prefixCls: o, align: g, arrowX: h, arrowY: p }),
                  A,
                );
              },
            );
          }),
        )
      );
    }),
    uy = ye(function (e, t) {
      var n = e.children,
        r = e.getTriggerDOMNode,
        o = zo(n),
        i = ut(
          function (l) {
            ta(t, r ? r(l) : l);
          },
          [r],
        ),
        a = na(i, n.ref);
      return o ? gt(n, { ref: a }) : n;
    }),
    dy = [
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
  function fy() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hl,
      t = ye(function (n, r) {
        var o = n.prefixCls,
          i = o === void 0 ? 'rc-trigger-popup' : o,
          a = n.children,
          l = n.action,
          s = l === void 0 ? 'hover' : l,
          c = n.showAction,
          u = n.hideAction,
          d = n.popupVisible,
          f = n.defaultPopupVisible,
          g = n.onPopupVisibleChange,
          h = n.afterPopupVisibleChange,
          p = n.mouseEnterDelay,
          y = n.mouseLeaveDelay,
          b = y === void 0 ? 0.1 : y,
          S = n.focusDelay,
          x = n.blurDelay,
          _ = n.mask,
          R = n.maskClosable,
          O = R === void 0 ? !0 : R,
          v = n.getPopupContainer,
          C = n.forceRender,
          $ = n.autoDestroy,
          E = n.destroyPopupOnHide,
          T = n.popup,
          P = n.popupClassName,
          w = n.popupStyle,
          I = n.popupPlacement,
          M = n.builtinPlacements,
          N = M === void 0 ? {} : M,
          A = n.popupAlign,
          D = n.zIndex,
          j = n.stretch,
          B = n.getPopupClassNameFromAlign,
          X = n.alignPoint,
          Y = n.onPopupClick,
          z = n.onPopupAlign,
          Z = n.arrow,
          J = n.popupMotion,
          K = n.maskMotion,
          W = n.popupTransitionName,
          ae = n.popupAnimation,
          ce = n.maskTransitionName,
          xe = n.maskAnimation,
          ve = n.className,
          se = n.getTriggerDOMNode,
          k = rt(n, dy),
          de = $ || E || !1,
          me = L({}),
          be = he(zd),
          q = le(
            function () {
              return {
                registerSubPopup: function (Ie, ot) {
                  (me.current[Ie] = ot), be == null || be.registerSubPopup(Ie, ot);
                },
              };
            },
            [be],
          ),
          H = X0(),
          ue = oe(null),
          we = V(ue, 2),
          He = we[0],
          Ge = we[1],
          Je = ut(function ($e) {
            $e instanceof HTMLElement && Ge($e), be == null || be.registerSubPopup(H, $e);
          }, []),
          Be = oe(null),
          Ve = V(Be, 2),
          ze = Ve[0],
          st = Ve[1],
          Ze = ut(function ($e) {
            $e instanceof HTMLElement && st($e);
          }, []),
          Pe = Zn.only(a),
          Oe = (Pe == null ? void 0 : Pe.props) || {},
          ct = {},
          ht = vr(function ($e) {
            var Ie = ze;
            return (
              (Ie == null ? void 0 : Ie.contains($e)) ||
              $e === Ie ||
              (He == null ? void 0 : He.contains($e)) ||
              $e === He ||
              Object.values(me.current).some(function (ot) {
                return ot.contains($e) || $e === ot;
              })
            );
          }),
          Se = jd(i, J, ae, W),
          _e = jd(i, K, xe, ce),
          Ye = yn(f || !1, { value: d }),
          Qe = V(Ye, 2),
          We = Qe[0],
          at = Qe[1],
          lt = L(We);
        lt.current = We;
        var ne = vr(function ($e) {
            We !== $e && (at($e), g == null || g($e));
          }),
          ge = L(),
          je = function () {
            clearTimeout(ge.current);
          },
          Fe = function (Ie) {
            var ot = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            je(),
              ot === 0
                ? ne(Ie)
                : (ge.current = setTimeout(function () {
                    ne(Ie);
                  }, ot * 1e3));
          };
        pe(function () {
          return je;
        }, []);
        var ke = oe(!1),
          Et = V(ke, 2),
          ft = Et[0],
          G = Et[1],
          te = L(!0);
        tt(
          function () {
            (!te.current || We) && G(!0), (te.current = !0);
          },
          [We],
        );
        var re = oe(null),
          Ce = V(re, 2),
          Me = Ce[0],
          Ke = Ce[1],
          Mt = oe([0, 0]),
          Nt = V(Mt, 2),
          Xt = Nt[0],
          mt = Nt[1],
          Ft = function (Ie) {
            mt([Ie.clientX, Ie.clientY]);
          },
          Sn = iy(We, He, X ? Xt : ze, I, N, A, z),
          At = V(Sn, 9),
          _r = At[0],
          Lt = At[1],
          qt = At[2],
          so = At[3],
          Ir = At[4],
          Pr = At[5],
          co = At[6],
          Yt = At[7],
          Ot = At[8],
          sn = vr(function () {
            ft || Ot();
          });
        ay(We, ze, He, sn),
          tt(
            function () {
              sn();
            },
            [Xt],
          ),
          tt(
            function () {
              We && !(N != null && N[I]) && sn();
            },
            [JSON.stringify(A)],
          );
        var uo = le(
          function () {
            var $e = oy(N, i, Yt, X);
            return Q($e, B == null ? void 0 : B(Yt));
          },
          [Yt, B, N, i, X],
        );
        bt(r, function () {
          return { forceAlign: sn };
        });
        var Yn = function (Ie) {
            G(!1), Ot(), h == null || h(Ie);
          },
          fo = function () {
            return new Promise(function (Ie) {
              Ke(function () {
                return Ie;
              });
            });
          };
        tt(
          function () {
            Me && (Ot(), Me(), Ke(null));
          },
          [Me],
        );
        var Rr = oe(0),
          Qn = V(Rr, 2),
          Tr = Qn[0],
          mo = Qn[1],
          go = oe(0),
          Mr = V(go, 2),
          Hi = Mr[0],
          po = Mr[1],
          Re = function (Ie, ot) {
            if ((sn(), j)) {
              var Rt = ot.getBoundingClientRect();
              mo(Rt.width), po(Rt.height);
            }
          },
          Ee = ny(s, c, u),
          Ct = V(Ee, 2),
          xt = Ct[0],
          nt = Ct[1],
          _t = function (Ie, ot, Rt, vt) {
            ct[Ie] = function (Rm) {
              var ki;
              vt == null || vt(Rm), Fe(ot, Rt);
              for (var is = arguments.length, Tm = new Array(is > 1 ? is - 1 : 0), Vi = 1; Vi < is; Vi++)
                Tm[Vi - 1] = arguments[Vi];
              (ki = Oe[Ie]) === null || ki === void 0 || ki.call.apply(ki, [Oe, Rm].concat(Tm));
            };
          },
          Ht = xt.has('click'),
          dn = nt.has('click') || nt.has('contextMenu');
        (Ht || dn) &&
          (ct.onClick = function ($e) {
            var Ie;
            lt.current && dn ? Fe(!1) : !lt.current && Ht && (Ft($e), Fe(!0));
            for (var ot = arguments.length, Rt = new Array(ot > 1 ? ot - 1 : 0), vt = 1; vt < ot; vt++)
              Rt[vt - 1] = arguments[vt];
            (Ie = Oe.onClick) === null || Ie === void 0 || Ie.call.apply(Ie, [Oe, $e].concat(Rt));
          }),
          pe(
            function () {
              if (dn && He && (!_ || O)) {
                var $e = function (Rt) {
                    var vt = Rt.target;
                    lt.current && !ht(vt) && Fe(!1);
                  },
                  Ie = Ei(He);
                return (
                  Ie.addEventListener('click', $e),
                  function () {
                    Ie.removeEventListener('click', $e);
                  }
                );
              }
            },
            [dn, He, _, O],
          );
        var fn = xt.has('hover'),
          Nn = nt.has('hover'),
          cn,
          ho;
        fn &&
          (_t('onMouseEnter', !0, p, function ($e) {
            Ft($e);
          }),
          (cn = function () {
            Fe(!0, p);
          }),
          X &&
            (ct.onMouseMove = function ($e) {
              var Ie;
              (Ie = Oe.onMouseMove) === null || Ie === void 0 || Ie.call(Oe, $e);
            })),
          Nn &&
            (_t('onMouseLeave', !1, b),
            (ho = function () {
              Fe(!1, b);
            })),
          xt.has('focus') && _t('onFocus', !0, S),
          nt.has('focus') && _t('onBlur', !1, x),
          xt.has('contextMenu') &&
            (ct.onContextMenu = function ($e) {
              var Ie;
              Ft($e), Fe(!0), $e.preventDefault();
              for (var ot = arguments.length, Rt = new Array(ot > 1 ? ot - 1 : 0), vt = 1; vt < ot; vt++)
                Rt[vt - 1] = arguments[vt];
              (Ie = Oe.onContextMenu) === null || Ie === void 0 || Ie.call.apply(Ie, [Oe, $e].concat(Rt));
            }),
          ve && (ct.className = Q(Oe.className, ve));
        var os = F(F({}, Oe), ct),
          Pm = {},
          w$ = [
            'onContextMenu',
            'onClick',
            'onMouseDown',
            'onTouchStart',
            'onMouseEnter',
            'onMouseLeave',
            'onFocus',
            'onBlur',
          ];
        w$.forEach(function ($e) {
          k[$e] &&
            (Pm[$e] = function () {
              for (var Ie, ot = arguments.length, Rt = new Array(ot), vt = 0; vt < ot; vt++) Rt[vt] = arguments[vt];
              (Ie = os[$e]) === null || Ie === void 0 || Ie.call.apply(Ie, [os].concat(Rt)), k[$e].apply(k, Rt);
            });
        });
        var $$ = gt(Pe, F(F({}, os), Pm));
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            $n,
            { disabled: !We, ref: Ze, onResize: Re },
            m.createElement(uy, { getTriggerDOMNode: se }, $$),
          ),
          m.createElement(
            zd.Provider,
            { value: q },
            m.createElement(cy, {
              portal: e,
              ref: Je,
              prefixCls: i,
              popup: T,
              className: Q(P, uo),
              style: w,
              target: ze,
              onMouseEnter: cn,
              onMouseLeave: ho,
              zIndex: D,
              open: We,
              keepDom: ft,
              onClick: Y,
              mask: _,
              motion: Se,
              maskMotion: _e,
              onVisibleChanged: Yn,
              onPrepare: fo,
              forceRender: C,
              autoDestroy: de,
              getPopupContainer: v,
              align: Yt,
              arrow: Z,
              ready: _r,
              offsetX: Lt,
              offsetY: qt,
              arrowX: so,
              arrowY: Ir,
              onAlign: sn,
              stretch: j,
              targetWidth: Tr / Pr,
              targetHeight: Hi / co,
            }),
          ),
        );
      });
    return t;
  }
  const Hd = fy(hl);
  var my = [
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
    gy = function (t) {
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
    py = function (t, n) {
      var r = t.prefixCls;
      t.disabled;
      var o = t.visible,
        i = t.children,
        a = t.popupElement,
        l = t.containerWidth,
        s = t.animation,
        c = t.transitionName,
        u = t.dropdownStyle,
        d = t.dropdownClassName,
        f = t.direction,
        g = f === void 0 ? 'ltr' : f,
        h = t.placement,
        p = t.dropdownMatchSelectWidth,
        y = t.dropdownRender,
        b = t.dropdownAlign,
        S = t.getPopupContainer,
        x = t.empty,
        _ = t.getTriggerDOMNode,
        R = t.onPopupVisibleChange,
        O = t.onPopupMouseEnter,
        v = rt(t, my),
        C = ''.concat(r, '-dropdown'),
        $ = a;
      y && ($ = y(a));
      var E = le(
          function () {
            return gy(p);
          },
          [p],
        ),
        T = s ? ''.concat(C, '-').concat(s) : c,
        P = L(null);
      bt(n, function () {
        return {
          getPopupElement: function () {
            return P.current;
          },
        };
      });
      var w = F({ minWidth: l }, u);
      return (
        typeof p == 'number' ? (w.width = p) : p && (w.width = l),
        m.createElement(
          Hd,
          Ne({}, v, {
            showAction: R ? ['click'] : [],
            hideAction: R ? ['click'] : [],
            popupPlacement: h || (g === 'rtl' ? 'bottomRight' : 'bottomLeft'),
            builtinPlacements: E,
            prefixCls: C,
            popupTransitionName: T,
            popup: m.createElement('div', { ref: P, onMouseEnter: O }, $),
            popupAlign: b,
            popupVisible: o,
            getPopupContainer: S,
            popupClassName: Q(d, ee({}, ''.concat(C, '-empty'), x)),
            popupStyle: w,
            getTriggerDOMNode: _,
            onPopupVisibleChange: R,
          }),
          i,
        )
      );
    },
    kd = ye(py);
  kd.displayName = 'SelectTrigger';
  function Vd(e, t) {
    var n = e.key,
      r;
    return 'value' in e && (r = e.value), n ?? (r !== void 0 ? r : 'rc-index-key-'.concat(t));
  }
  function Bd(e, t) {
    var n = e || {},
      r = n.label,
      o = n.value,
      i = n.options;
    return { label: r || (t ? 'children' : 'label'), value: o || 'value', options: i || 'options' };
  }
  function hy(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = t.fieldNames,
      r = t.childrenAsData,
      o = [],
      i = Bd(n, !1),
      a = i.label,
      l = i.value,
      s = i.options;
    function c(u, d) {
      u.forEach(function (f) {
        var g = f[a];
        if (d || !(s in f)) {
          var h = f[l];
          o.push({ key: Vd(f, o.length), groupOption: d, data: f, label: g, value: h });
        } else {
          var p = g;
          p === void 0 && r && (p = f.label),
            o.push({ key: Vd(f, o.length), group: !0, data: f, label: p }),
            c(f[s], !0);
        }
      });
    }
    return c(e, !1), o;
  }
  function Cl(e) {
    var t = F({}, e);
    return (
      'props' in t ||
        Object.defineProperty(t, 'props', {
          get: function () {
            return (
              Qt(
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
  function vy(e, t) {
    if (!t || !t.length) return null;
    var n = !1;
    function r(i, a) {
      var l = jc(a),
        s = l[0],
        c = l.slice(1);
      if (!s) return [i];
      var u = i.split(s);
      return (
        (n = n || u.length > 1),
        u
          .reduce(function (d, f) {
            return [].concat(fe(d), fe(r(f, c)));
          }, [])
          .filter(function (d) {
            return d;
          })
      );
    }
    var o = r(e, t);
    return n ? o : null;
  }
  var by = [
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
    yy = [
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
  function xl(e) {
    return e === 'tags' || e === 'multiple';
  }
  var Sy = ye(function (e, t) {
    var n,
      r,
      o = e.id,
      i = e.prefixCls,
      a = e.className,
      l = e.showSearch,
      s = e.tagRender,
      c = e.direction,
      u = e.omitDomProps,
      d = e.displayValues,
      f = e.onDisplayValuesChange,
      g = e.emptyOptions,
      h = e.notFoundContent,
      p = h === void 0 ? 'Not Found' : h,
      y = e.onClear,
      b = e.mode,
      S = e.disabled,
      x = e.loading,
      _ = e.getInputElement,
      R = e.getRawInputElement,
      O = e.open,
      v = e.defaultOpen,
      C = e.onDropdownVisibleChange,
      $ = e.activeValue,
      E = e.onActiveValueChange,
      T = e.activeDescendantId,
      P = e.searchValue,
      w = e.autoClearSearchValue,
      I = e.onSearch,
      M = e.onSearchSplit,
      N = e.tokenSeparators,
      A = e.allowClear,
      D = e.showArrow,
      j = e.inputIcon,
      B = e.clearIcon,
      X = e.OptionList,
      Y = e.animation,
      z = e.transitionName,
      Z = e.dropdownStyle,
      J = e.dropdownClassName,
      K = e.dropdownMatchSelectWidth,
      W = e.dropdownRender,
      ae = e.dropdownAlign,
      ce = e.placement,
      xe = e.getPopupContainer,
      ve = e.showAction,
      se = ve === void 0 ? [] : ve,
      k = e.onFocus,
      de = e.onBlur,
      me = e.onKeyUp,
      be = e.onKeyDown,
      q = e.onMouseDown,
      H = rt(e, by),
      ue = xl(b),
      we = (l !== void 0 ? l : ue) || b === 'combobox',
      He = F({}, H);
    yy.forEach(function (Re) {
      delete He[Re];
    }),
      u == null ||
        u.forEach(function (Re) {
          delete He[Re];
        });
    var Ge = oe(!1),
      Je = V(Ge, 2),
      Be = Je[0],
      Ve = Je[1];
    pe(function () {
      Ve(Mb());
    }, []);
    var ze = L(null),
      st = L(null),
      Ze = L(null),
      Pe = L(null),
      Oe = L(null),
      ct = Fb(),
      ht = V(ct, 3),
      Se = ht[0],
      _e = ht[1],
      Ye = ht[2];
    bt(t, function () {
      var Re, Ee;
      return {
        focus: (Re = Pe.current) === null || Re === void 0 ? void 0 : Re.focus,
        blur: (Ee = Pe.current) === null || Ee === void 0 ? void 0 : Ee.blur,
        scrollTo: function (xt) {
          var nt;
          return (nt = Oe.current) === null || nt === void 0 ? void 0 : nt.scrollTo(xt);
        },
      };
    });
    var Qe = le(
        function () {
          var Re;
          if (b !== 'combobox') return P;
          var Ee = (Re = d[0]) === null || Re === void 0 ? void 0 : Re.value;
          return typeof Ee == 'string' || typeof Ee == 'number' ? String(Ee) : '';
        },
        [P, b, d],
      ),
      We = (b === 'combobox' && typeof _ == 'function' && _()) || null,
      at = typeof R == 'function' && R(),
      lt = na(st, at == null || (n = at.props) === null || n === void 0 ? void 0 : n.ref),
      ne = yn(void 0, { defaultValue: v, value: O }),
      ge = V(ne, 2),
      je = ge[0],
      Fe = ge[1],
      ke = je,
      Et = !p && g;
    (S || (Et && ke && b === 'combobox')) && (ke = !1);
    var ft = Et ? !1 : ke,
      G = ut(
        function (Re) {
          var Ee = Re !== void 0 ? Re : !ke;
          S || (Fe(Ee), ke !== Ee && (C == null || C(Ee)));
        },
        [S, ke, Fe, C],
      ),
      te = le(
        function () {
          return (N || []).some(function (Re) {
            return [
              `
`,
              `\r
`,
            ].includes(Re);
          });
        },
        [N],
      ),
      re = function (Ee, Ct, xt) {
        var nt = !0,
          _t = Ee;
        E == null || E(null);
        var Ht = xt ? null : vy(Ee, N);
        return (
          b !== 'combobox' && Ht && ((_t = ''), M == null || M(Ht), G(!1), (nt = !1)),
          I && Qe !== _t && I(_t, { source: Ct ? 'typing' : 'effect' }),
          nt
        );
      },
      Ce = function (Ee) {
        !Ee || !Ee.trim() || I(Ee, { source: 'submit' });
      };
    pe(
      function () {
        !ke && !ue && b !== 'combobox' && re('', !1, !1);
      },
      [ke],
    ),
      pe(
        function () {
          je && S && Fe(!1), S && _e(!1);
        },
        [S],
      );
    var Me = _d(),
      Ke = V(Me, 2),
      Mt = Ke[0],
      Nt = Ke[1],
      Xt = function (Ee) {
        var Ct = Mt(),
          xt = Ee.which;
        if (
          (xt === U.ENTER && (b !== 'combobox' && Ee.preventDefault(), ke || G(!0)),
          Nt(!!Qe),
          xt === U.BACKSPACE && !Ct && ue && !Qe && d.length)
        ) {
          for (var nt = fe(d), _t = null, Ht = nt.length - 1; Ht >= 0; Ht -= 1) {
            var dn = nt[Ht];
            if (!dn.disabled) {
              nt.splice(Ht, 1), (_t = dn);
              break;
            }
          }
          _t && f(nt, { type: 'remove', values: [_t] });
        }
        for (var fn = arguments.length, Nn = new Array(fn > 1 ? fn - 1 : 0), cn = 1; cn < fn; cn++)
          Nn[cn - 1] = arguments[cn];
        if (ke && Oe.current) {
          var ho;
          (ho = Oe.current).onKeyDown.apply(ho, [Ee].concat(Nn));
        }
        be == null || be.apply(void 0, [Ee].concat(Nn));
      },
      mt = function (Ee) {
        for (var Ct = arguments.length, xt = new Array(Ct > 1 ? Ct - 1 : 0), nt = 1; nt < Ct; nt++)
          xt[nt - 1] = arguments[nt];
        if (ke && Oe.current) {
          var _t;
          (_t = Oe.current).onKeyUp.apply(_t, [Ee].concat(xt));
        }
        me == null || me.apply(void 0, [Ee].concat(xt));
      },
      Ft = function (Ee) {
        var Ct = d.filter(function (xt) {
          return xt !== Ee;
        });
        f(Ct, { type: 'remove', values: [Ee] });
      },
      Sn = L(!1),
      At = function () {
        _e(!0), S || (k && !Sn.current && k.apply(void 0, arguments), se.includes('focus') && G(!0)), (Sn.current = !0);
      },
      _r = function () {
        _e(!1, function () {
          (Sn.current = !1), G(!1);
        }),
          !S &&
            (Qe && (b === 'tags' ? I(Qe, { source: 'submit' }) : b === 'multiple' && I('', { source: 'blur' })),
            de && de.apply(void 0, arguments));
      },
      Lt = [];
    pe(function () {
      return function () {
        Lt.forEach(function (Re) {
          return clearTimeout(Re);
        }),
          Lt.splice(0, Lt.length);
      };
    }, []);
    var qt = function (Ee) {
        var Ct,
          xt = Ee.target,
          nt = (Ct = Ze.current) === null || Ct === void 0 ? void 0 : Ct.getPopupElement();
        if (nt && nt.contains(xt)) {
          var _t = setTimeout(function () {
            var Nn = Lt.indexOf(_t);
            if ((Nn !== -1 && Lt.splice(Nn, 1), Ye(), !Be && !nt.contains(document.activeElement))) {
              var cn;
              (cn = Pe.current) === null || cn === void 0 || cn.focus();
            }
          });
          Lt.push(_t);
        }
        for (var Ht = arguments.length, dn = new Array(Ht > 1 ? Ht - 1 : 0), fn = 1; fn < Ht; fn++)
          dn[fn - 1] = arguments[fn];
        q == null || q.apply(void 0, [Ee].concat(dn));
      },
      so = oe(null),
      Ir = V(so, 2),
      Pr = Ir[0],
      co = Ir[1],
      Yt = oe({}),
      Ot = V(Yt, 2),
      sn = Ot[1];
    function uo() {
      sn({});
    }
    tt(
      function () {
        if (ft) {
          var Re,
            Ee = Math.ceil((Re = ze.current) === null || Re === void 0 ? void 0 : Re.offsetWidth);
          Pr !== Ee && !Number.isNaN(Ee) && co(Ee);
        }
      },
      [ft],
    );
    var Yn;
    at &&
      (Yn = function (Ee) {
        G(Ee);
      }),
      Ab(
        function () {
          var Re;
          return [ze.current, (Re = Ze.current) === null || Re === void 0 ? void 0 : Re.getPopupElement()];
        },
        ft,
        G,
        !!at,
      );
    var fo = le(
        function () {
          return F(
            F({}, e),
            {},
            { notFoundContent: p, open: ke, triggerOpen: ft, id: o, showSearch: we, multiple: ue, toggleOpen: G },
          );
        },
        [e, p, ft, ke, o, we, ue, G],
      ),
      Rr = D !== void 0 ? D : x || (!ue && b !== 'combobox'),
      Qn;
    Rr &&
      (Qn = m.createElement($i, {
        className: Q(''.concat(i, '-arrow'), ee({}, ''.concat(i, '-arrow-loading'), x)),
        customizeIcon: j,
        customizeIconProps: { loading: x, searchValue: Qe, open: ke, focused: Se, showSearch: we },
      }));
    var Tr,
      mo = function () {
        var Ee;
        y == null || y(),
          (Ee = Pe.current) === null || Ee === void 0 || Ee.focus(),
          f([], { type: 'clear', values: d }),
          re('', !1, !1);
      };
    !S &&
      A &&
      (d.length || Qe) &&
      !(b === 'combobox' && Qe === '') &&
      (Tr = m.createElement($i, { className: ''.concat(i, '-clear'), onMouseDown: mo, customizeIcon: B }, '×'));
    var go = m.createElement(X, { ref: Oe }),
      Mr = Q(
        i,
        a,
        ((r = {}),
        ee(r, ''.concat(i, '-focused'), Se),
        ee(r, ''.concat(i, '-multiple'), ue),
        ee(r, ''.concat(i, '-single'), !ue),
        ee(r, ''.concat(i, '-allow-clear'), A),
        ee(r, ''.concat(i, '-show-arrow'), Rr),
        ee(r, ''.concat(i, '-disabled'), S),
        ee(r, ''.concat(i, '-loading'), x),
        ee(r, ''.concat(i, '-open'), ke),
        ee(r, ''.concat(i, '-customize-input'), We),
        ee(r, ''.concat(i, '-show-search'), we),
        r),
      ),
      Hi = m.createElement(
        kd,
        {
          ref: Ze,
          disabled: S,
          prefixCls: i,
          visible: ft,
          popupElement: go,
          containerWidth: Pr,
          animation: Y,
          transitionName: z,
          dropdownStyle: Z,
          dropdownClassName: J,
          direction: c,
          dropdownMatchSelectWidth: K,
          dropdownRender: W,
          dropdownAlign: ae,
          placement: ce,
          getPopupContainer: xe,
          empty: g,
          getTriggerDOMNode: function () {
            return st.current;
          },
          onPopupVisibleChange: Yn,
          onPopupMouseEnter: uo,
        },
        at
          ? gt(at, { ref: lt })
          : m.createElement(
              Ad,
              Ne({}, e, {
                domRef: st,
                prefixCls: i,
                inputElement: We,
                ref: Pe,
                id: o,
                showSearch: we,
                autoClearSearchValue: w,
                mode: b,
                activeDescendantId: T,
                tagRender: s,
                values: d,
                open: ke,
                onToggleOpen: G,
                activeValue: $,
                searchValue: Qe,
                onSearch: re,
                onSearchSubmit: Ce,
                onRemove: Ft,
                tokenWithEnter: te,
              }),
            ),
      ),
      po;
    return (
      at
        ? (po = Hi)
        : (po = m.createElement(
            'div',
            Ne({ className: Mr }, He, {
              ref: ze,
              onMouseDown: qt,
              onKeyDown: Xt,
              onKeyUp: mt,
              onFocus: At,
              onBlur: _r,
            }),
            Se &&
              !ke &&
              m.createElement(
                'span',
                {
                  style: { width: 0, height: 0, position: 'absolute', overflow: 'hidden', opacity: 0 },
                  'aria-live': 'polite',
                },
                ''.concat(
                  d
                    .map(function (Re) {
                      var Ee = Re.label,
                        Ct = Re.value;
                      return ['number', 'string'].includes(De(Ee)) ? Ee : Ct;
                    })
                    .join(', '),
                ),
              ),
            Hi,
            Qn,
            Tr,
          )),
      m.createElement(Od.Provider, { value: fo }, po)
    );
  });
  const Cy = function (e, t) {
    var n = L({ values: new Map(), options: new Map() }),
      r = le(
        function () {
          var i = n.current,
            a = i.values,
            l = i.options,
            s = e.map(function (d) {
              if (d.label === void 0) {
                var f;
                return F(F({}, d), {}, { label: (f = a.get(d.value)) === null || f === void 0 ? void 0 : f.label });
              }
              return d;
            }),
            c = new Map(),
            u = new Map();
          return (
            s.forEach(function (d) {
              c.set(d.value, d), u.set(d.value, t.get(d.value) || l.get(d.value));
            }),
            (n.current.values = c),
            (n.current.options = u),
            s
          );
        },
        [e, t],
      ),
      o = ut(
        function (i) {
          return t.get(i) || n.current.options.get(i);
        },
        [t],
      );
    return [r, o];
  };
  function wl(e, t) {
    return Td(e).join('').toUpperCase().includes(t);
  }
  const xy = function (e, t, n, r, o) {
    return le(
      function () {
        if (!n || r === !1) return e;
        var i = t.options,
          a = t.label,
          l = t.value,
          s = [],
          c = typeof r == 'function',
          u = n.toUpperCase(),
          d = c
            ? r
            : function (g, h) {
                return o ? wl(h[o], u) : h[i] ? wl(h[a !== 'children' ? a : 'label'], u) : wl(h[l], u);
              },
          f = c
            ? function (g) {
                return Cl(g);
              }
            : function (g) {
                return g;
              };
        return (
          e.forEach(function (g) {
            if (g[i]) {
              var h = d(n, f(g));
              if (h) s.push(g);
              else {
                var p = g[i].filter(function (y) {
                  return d(n, f(y));
                });
                p.length && s.push(F(F({}, g), {}, ee({}, i, p)));
              }
              return;
            }
            d(n, f(g)) && s.push(g);
          }),
          s
        );
      },
      [e, r, o, n, t],
    );
  };
  var Wd = 0,
    wy = Tt();
  function $y() {
    var e;
    return wy ? ((e = Wd), (Wd += 1)) : (e = 'TEST_OR_SSR'), e;
  }
  function Ey(e) {
    var t = oe(),
      n = V(t, 2),
      r = n[0],
      o = n[1];
    return (
      pe(function () {
        o('rc_select_'.concat($y()));
      }, []),
      e || r
    );
  }
  var Oy = ['children', 'value'],
    _y = ['children'];
  function Iy(e) {
    var t = e,
      n = t.key,
      r = t.props,
      o = r.children,
      i = r.value,
      a = rt(r, Oy);
    return F({ key: n, value: i !== void 0 ? i : n, children: o }, a);
  }
  function Ud(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return mn(e)
      .map(function (n, r) {
        if (!kt(n) || !n.type) return null;
        var o = n,
          i = o.type.isSelectOptGroup,
          a = o.key,
          l = o.props,
          s = l.children,
          c = rt(l, _y);
        return t || !i
          ? Iy(n)
          : F(F({ key: '__RC_SELECT_GRP__'.concat(a === null ? r : a, '__'), label: a }, c), {}, { options: Ud(s) });
      })
      .filter(function (n) {
        return n;
      });
  }
  function Py(e, t, n, r, o) {
    return le(
      function () {
        var i = e,
          a = !e;
        a && (i = Ud(t));
        var l = new Map(),
          s = new Map(),
          c = function (f, g, h) {
            h && typeof h == 'string' && f.set(g[h], g);
          };
        function u(d) {
          for (
            var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = 0;
            g < d.length;
            g += 1
          ) {
            var h = d[g];
            !h[n.options] || f ? (l.set(h[n.value], h), c(s, h, n.label), c(s, h, r), c(s, h, o)) : u(h[n.options], !0);
          }
        }
        return u(i), { options: i, valueOptions: l, labelOptions: s };
      },
      [e, t, n, r, o],
    );
  }
  function Gd(e) {
    var t = L();
    t.current = e;
    var n = ut(function () {
      return t.current.apply(t, arguments);
    }, []);
    return n;
  }
  var $l = function () {
    return null;
  };
  $l.isSelectOptGroup = !0;
  var El = function () {
    return null;
  };
  El.isSelectOption = !0;
  var Kd = ye(function (e, t) {
    var n = e.height,
      r = e.offset,
      o = e.children,
      i = e.prefixCls,
      a = e.onInnerResize,
      l = e.innerProps,
      s = {},
      c = { display: 'flex', flexDirection: 'column' };
    return (
      r !== void 0 &&
        ((s = { height: n, position: 'relative', overflow: 'hidden' }),
        (c = F(
          F({}, c),
          {},
          { transform: 'translateY('.concat(r, 'px)'), position: 'absolute', left: 0, right: 0, top: 0 },
        ))),
      m.createElement(
        'div',
        { style: s },
        m.createElement(
          $n,
          {
            onResize: function (d) {
              var f = d.offsetHeight;
              f && a && a();
            },
          },
          m.createElement(
            'div',
            Ne({ style: c, className: Q(ee({}, ''.concat(i, '-holder-inner'), i)), ref: t }, l),
            o,
          ),
        ),
      )
    );
  });
  Kd.displayName = 'Filler';
  var Ry = 20;
  function Xd(e) {
    return 'touches' in e ? e.touches[0].pageY : e.pageY;
  }
  var Ty = (function (e) {
    Fn(n, e);
    var t = An(n);
    function n() {
      var r;
      zt(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      return (
        (r = t.call.apply(t, [this].concat(i))),
        (r.moveRaf = null),
        (r.scrollbarRef = m.createRef()),
        (r.thumbRef = m.createRef()),
        (r.visibleTimeout = null),
        (r.state = { dragging: !1, pageY: null, startTop: null, visible: !1 }),
        (r.delayHidden = function () {
          clearTimeout(r.visibleTimeout),
            r.setState({ visible: !0 }),
            (r.visibleTimeout = setTimeout(function () {
              r.setState({ visible: !1 });
            }, 2e3));
        }),
        (r.onScrollbarTouchStart = function (l) {
          l.preventDefault();
        }),
        (r.onContainerMouseDown = function (l) {
          l.stopPropagation(), l.preventDefault();
        }),
        (r.patchEvents = function () {
          window.addEventListener('mousemove', r.onMouseMove),
            window.addEventListener('mouseup', r.onMouseUp),
            r.thumbRef.current.addEventListener('touchmove', r.onMouseMove),
            r.thumbRef.current.addEventListener('touchend', r.onMouseUp);
        }),
        (r.removeEvents = function () {
          var l;
          window.removeEventListener('mousemove', r.onMouseMove),
            window.removeEventListener('mouseup', r.onMouseUp),
            (l = r.scrollbarRef.current) === null ||
              l === void 0 ||
              l.removeEventListener('touchstart', r.onScrollbarTouchStart),
            r.thumbRef.current &&
              (r.thumbRef.current.removeEventListener('touchstart', r.onMouseDown),
              r.thumbRef.current.removeEventListener('touchmove', r.onMouseMove),
              r.thumbRef.current.removeEventListener('touchend', r.onMouseUp)),
            Pt.cancel(r.moveRaf);
        }),
        (r.onMouseDown = function (l) {
          var s = r.props.onStartMove;
          r.setState({ dragging: !0, pageY: Xd(l), startTop: r.getTop() }),
            s(),
            r.patchEvents(),
            l.stopPropagation(),
            l.preventDefault();
        }),
        (r.onMouseMove = function (l) {
          var s = r.state,
            c = s.dragging,
            u = s.pageY,
            d = s.startTop,
            f = r.props.onScroll;
          if ((Pt.cancel(r.moveRaf), c)) {
            var g = Xd(l) - u,
              h = d + g,
              p = r.getEnableScrollRange(),
              y = r.getEnableHeightRange(),
              b = y ? h / y : 0,
              S = Math.ceil(b * p);
            r.moveRaf = Pt(function () {
              f(S);
            });
          }
        }),
        (r.onMouseUp = function () {
          var l = r.props.onStopMove;
          r.setState({ dragging: !1 }), l(), r.removeEvents();
        }),
        (r.getSpinHeight = function () {
          var l = r.props,
            s = l.height,
            c = l.count,
            u = (s / c) * 10;
          return (u = Math.max(u, Ry)), (u = Math.min(u, s / 2)), Math.floor(u);
        }),
        (r.getEnableScrollRange = function () {
          var l = r.props,
            s = l.scrollHeight,
            c = l.height;
          return s - c || 0;
        }),
        (r.getEnableHeightRange = function () {
          var l = r.props.height,
            s = r.getSpinHeight();
          return l - s || 0;
        }),
        (r.getTop = function () {
          var l = r.props.scrollTop,
            s = r.getEnableScrollRange(),
            c = r.getEnableHeightRange();
          if (l === 0 || s === 0) return 0;
          var u = l / s;
          return u * c;
        }),
        (r.showScroll = function () {
          var l = r.props,
            s = l.height,
            c = l.scrollHeight;
          return c > s;
        }),
        r
      );
    }
    return (
      Dt(n, [
        {
          key: 'componentDidMount',
          value: function () {
            this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart),
              this.thumbRef.current.addEventListener('touchstart', this.onMouseDown);
          },
        },
        {
          key: 'componentDidUpdate',
          value: function (o) {
            o.scrollTop !== this.props.scrollTop && this.delayHidden();
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
            var o = this.state,
              i = o.dragging,
              a = o.visible,
              l = this.props.prefixCls,
              s = this.getSpinHeight(),
              c = this.getTop(),
              u = this.showScroll(),
              d = u && a;
            return m.createElement(
              'div',
              {
                ref: this.scrollbarRef,
                className: Q(''.concat(l, '-scrollbar'), ee({}, ''.concat(l, '-scrollbar-show'), u)),
                style: { width: 8, top: 0, bottom: 0, right: 0, position: 'absolute', display: d ? null : 'none' },
                onMouseDown: this.onContainerMouseDown,
                onMouseMove: this.delayHidden,
              },
              m.createElement('div', {
                ref: this.thumbRef,
                className: Q(''.concat(l, '-scrollbar-thumb'), ee({}, ''.concat(l, '-scrollbar-thumb-moving'), i)),
                style: {
                  width: '100%',
                  height: s,
                  top: c,
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
  })(m.Component);
  function My(e) {
    var t = e.children,
      n = e.setRef,
      r = ut(function (o) {
        n(o);
      }, []);
    return gt(t, { ref: r });
  }
  function Ny(e, t, n, r, o, i) {
    var a = i.getKey;
    return e.slice(t, n + 1).map(function (l, s) {
      var c = t + s,
        u = o(l, c, {}),
        d = a(l);
      return m.createElement(
        My,
        {
          key: d,
          setRef: function (g) {
            return r(l, g);
          },
        },
        u,
      );
    });
  }
  var Fy = (function () {
    function e() {
      zt(this, e), (this.maps = void 0), (this.maps = Object.create(null));
    }
    return (
      Dt(e, [
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
  function Ay(e, t, n) {
    var r = oe(0),
      o = V(r, 2),
      i = o[0],
      a = o[1],
      l = L(new Map()),
      s = L(new Fy()),
      c = L();
    function u() {
      Pt.cancel(c.current);
    }
    function d() {
      u(),
        (c.current = Pt(function () {
          l.current.forEach(function (g, h) {
            if (g && g.offsetParent) {
              var p = Do(g),
                y = p.offsetHeight;
              s.current.get(h) !== y && s.current.set(h, p.offsetHeight);
            }
          }),
            a(function (g) {
              return g + 1;
            });
        }));
    }
    function f(g, h) {
      var p = e(g),
        y = l.current.get(p);
      h ? (l.current.set(p, h), d()) : l.current.delete(p), !y != !h && (h ? t == null || t(g) : n == null || n(g));
    }
    return (
      pe(function () {
        return u;
      }, []),
      [f, d, s.current, i]
    );
  }
  function zy(e, t, n, r, o, i, a, l) {
    var s = L();
    return function (c) {
      if (c == null) {
        l();
        return;
      }
      if ((Pt.cancel(s.current), typeof c == 'number')) a(c);
      else if (c && De(c) === 'object') {
        var u,
          d = c.align;
        'index' in c
          ? (u = c.index)
          : (u = t.findIndex(function (p) {
              return o(p) === c.key;
            }));
        var f = c.offset,
          g = f === void 0 ? 0 : f,
          h = function p(y, b) {
            if (!(y < 0 || !e.current)) {
              var S = e.current.clientHeight,
                x = !1,
                _ = b;
              if (S) {
                for (var R = b || d, O = 0, v = 0, C = 0, $ = Math.min(t.length, u), E = 0; E <= $; E += 1) {
                  var T = o(t[E]);
                  v = O;
                  var P = n.get(T);
                  (C = v + (P === void 0 ? r : P)), (O = C), E === u && P === void 0 && (x = !0);
                }
                var w = null;
                switch (R) {
                  case 'top':
                    w = v - g;
                    break;
                  case 'bottom':
                    w = C - S + g;
                    break;
                  default: {
                    var I = e.current.scrollTop,
                      M = I + S;
                    v < I ? (_ = 'top') : C > M && (_ = 'bottom');
                  }
                }
                w !== null && w !== e.current.scrollTop && a(w);
              }
              s.current = Pt(function () {
                x && i(), p(y - 1, _);
              }, 2);
            }
          };
        h(3);
      }
    };
  }
  function Dy(e, t, n) {
    var r = e.length,
      o = t.length,
      i,
      a;
    if (r === 0 && o === 0) return null;
    r < o ? ((i = e), (a = t)) : ((i = t), (a = e));
    var l = { __EMPTY_ITEM__: !0 };
    function s(h) {
      return h !== void 0 ? n(h) : l;
    }
    for (var c = null, u = Math.abs(r - o) !== 1, d = 0; d < a.length; d += 1) {
      var f = s(i[d]),
        g = s(a[d]);
      if (f !== g) {
        (c = d), (u = u || f !== s(a[d + 1]));
        break;
      }
    }
    return c === null ? null : { index: c, multiple: u };
  }
  function jy(e, t, n) {
    var r = oe(e),
      o = V(r, 2),
      i = o[0],
      a = o[1],
      l = oe(null),
      s = V(l, 2),
      c = s[0],
      u = s[1];
    return (
      pe(
        function () {
          var d = Dy(i || [], e || [], t);
          (d == null ? void 0 : d.index) !== void 0 && (n == null || n(d.index), u(e[d.index])), a(e);
        },
        [e],
      ),
      [c]
    );
  }
  var Ly = (typeof navigator > 'u' ? 'undefined' : De(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
  const qd = function (e, t) {
    var n = L(!1),
      r = L(null);
    function o() {
      clearTimeout(r.current),
        (n.current = !0),
        (r.current = setTimeout(function () {
          n.current = !1;
        }, 50));
    }
    var i = L({ top: e, bottom: t });
    return (
      (i.current.top = e),
      (i.current.bottom = t),
      function (a) {
        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          s = (a < 0 && i.current.top) || (a > 0 && i.current.bottom);
        return l && s ? (clearTimeout(r.current), (n.current = !1)) : (!s || n.current) && o(), !n.current && s;
      }
    );
  };
  function Hy(e, t, n, r) {
    var o = L(0),
      i = L(null),
      a = L(null),
      l = L(!1),
      s = qd(t, n);
    function c(d) {
      if (e) {
        Pt.cancel(i.current);
        var f = d.deltaY;
        (o.current += f),
          (a.current = f),
          !s(f) &&
            (Ly || d.preventDefault(),
            (i.current = Pt(function () {
              var g = l.current ? 10 : 1;
              r(o.current * g), (o.current = 0);
            })));
      }
    }
    function u(d) {
      e && (l.current = d.detail === a.current);
    }
    return [c, u];
  }
  var ky = 14 / 15;
  function Vy(e, t, n) {
    var r = L(!1),
      o = L(0),
      i = L(null),
      a = L(null),
      l,
      s = function (f) {
        if (r.current) {
          var g = Math.ceil(f.touches[0].pageY),
            h = o.current - g;
          (o.current = g),
            n(h) && f.preventDefault(),
            clearInterval(a.current),
            (a.current = setInterval(function () {
              (h *= ky), (!n(h, !0) || Math.abs(h) <= 0.1) && clearInterval(a.current);
            }, 16));
        }
      },
      c = function () {
        (r.current = !1), l();
      },
      u = function (f) {
        l(),
          f.touches.length === 1 &&
            !r.current &&
            ((r.current = !0),
            (o.current = Math.ceil(f.touches[0].pageY)),
            (i.current = f.target),
            i.current.addEventListener('touchmove', s),
            i.current.addEventListener('touchend', c));
      };
    (l = function () {
      i.current && (i.current.removeEventListener('touchmove', s), i.current.removeEventListener('touchend', c));
    }),
      tt(
        function () {
          return (
            e && t.current.addEventListener('touchstart', u),
            function () {
              var d;
              (d = t.current) === null || d === void 0 || d.removeEventListener('touchstart', u),
                l(),
                clearInterval(a.current);
            }
          );
        },
        [e],
      );
  }
  var By = [
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
    Wy = [],
    Uy = { overflowY: 'auto', overflowAnchor: 'none' };
  function Gy(e, t) {
    var n = e.prefixCls,
      r = n === void 0 ? 'rc-virtual-list' : n,
      o = e.className,
      i = e.height,
      a = e.itemHeight,
      l = e.fullHeight,
      s = l === void 0 ? !0 : l,
      c = e.style,
      u = e.data,
      d = e.children,
      f = e.itemKey,
      g = e.virtual,
      h = e.component,
      p = h === void 0 ? 'div' : h,
      y = e.onScroll,
      b = e.onVisibleChange,
      S = e.innerProps,
      x = rt(e, By),
      _ = !!(g !== !1 && i && a),
      R = _ && u && a * u.length > i,
      O = oe(0),
      v = V(O, 2),
      C = v[0],
      $ = v[1],
      E = oe(!1),
      T = V(E, 2),
      P = T[0],
      w = T[1],
      I = Q(r, o),
      M = u || Wy,
      N = L(),
      A = L(),
      D = L(),
      j = ut(
        function (Se) {
          return typeof f == 'function' ? f(Se) : Se == null ? void 0 : Se[f];
        },
        [f],
      ),
      B = { getKey: j };
    function X(Se) {
      $(function (_e) {
        var Ye;
        typeof Se == 'function' ? (Ye = Se(_e)) : (Ye = Se);
        var Qe = we(Ye);
        return (N.current.scrollTop = Qe), Qe;
      });
    }
    var Y = L({ start: 0, end: M.length }),
      z = L(),
      Z = jy(M, j),
      J = V(Z, 1),
      K = J[0];
    z.current = K;
    var W = Ay(j, null, null),
      ae = V(W, 4),
      ce = ae[0],
      xe = ae[1],
      ve = ae[2],
      se = ae[3],
      k = le(
        function () {
          if (!_) return { scrollHeight: void 0, start: 0, end: M.length - 1, offset: void 0 };
          if (!R) {
            var Se;
            return {
              scrollHeight: ((Se = A.current) === null || Se === void 0 ? void 0 : Se.offsetHeight) || 0,
              start: 0,
              end: M.length - 1,
              offset: void 0,
            };
          }
          for (var _e = 0, Ye, Qe, We, at = M.length, lt = 0; lt < at; lt += 1) {
            var ne = M[lt],
              ge = j(ne),
              je = ve.get(ge),
              Fe = _e + (je === void 0 ? a : je);
            Fe >= C && Ye === void 0 && ((Ye = lt), (Qe = _e)), Fe > C + i && We === void 0 && (We = lt), (_e = Fe);
          }
          return (
            Ye === void 0 && ((Ye = 0), (Qe = 0), (We = Math.ceil(i / a))),
            We === void 0 && (We = M.length - 1),
            (We = Math.min(We + 1, M.length)),
            { scrollHeight: _e, start: Ye, end: We, offset: Qe }
          );
        },
        [R, _, C, M, se, i],
      ),
      de = k.scrollHeight,
      me = k.start,
      be = k.end,
      q = k.offset;
    (Y.current.start = me), (Y.current.end = be);
    var H = de - i,
      ue = L(H);
    ue.current = H;
    function we(Se) {
      var _e = Se;
      return Number.isNaN(ue.current) || (_e = Math.min(_e, ue.current)), (_e = Math.max(_e, 0)), _e;
    }
    var He = C <= 0,
      Ge = C >= H,
      Je = qd(He, Ge);
    function Be(Se) {
      var _e = Se;
      X(_e);
    }
    function Ve(Se) {
      var _e = Se.currentTarget.scrollTop;
      _e !== C && X(_e), y == null || y(Se);
    }
    var ze = Hy(_, He, Ge, function (Se) {
        X(function (_e) {
          var Ye = _e + Se;
          return Ye;
        });
      }),
      st = V(ze, 2),
      Ze = st[0],
      Pe = st[1];
    Vy(_, N, function (Se, _e) {
      return Je(Se, _e) ? !1 : (Ze({ preventDefault: function () {}, deltaY: Se }), !0);
    }),
      tt(
        function () {
          function Se(_e) {
            _ && _e.preventDefault();
          }
          return (
            N.current.addEventListener('wheel', Ze),
            N.current.addEventListener('DOMMouseScroll', Pe),
            N.current.addEventListener('MozMousePixelScroll', Se),
            function () {
              N.current &&
                (N.current.removeEventListener('wheel', Ze),
                N.current.removeEventListener('DOMMouseScroll', Pe),
                N.current.removeEventListener('MozMousePixelScroll', Se));
            }
          );
        },
        [_],
      );
    var Oe = zy(N, M, ve, a, j, xe, X, function () {
      var Se;
      (Se = D.current) === null || Se === void 0 || Se.delayHidden();
    });
    bt(t, function () {
      return { scrollTo: Oe };
    }),
      tt(
        function () {
          if (b) {
            var Se = M.slice(me, be + 1);
            b(Se, M);
          }
        },
        [me, be, M],
      );
    var ct = Ny(M, me, be, ce, d, B),
      ht = null;
    return (
      i &&
        ((ht = F(ee({}, s ? 'height' : 'maxHeight', i), Uy)),
        _ && ((ht.overflowY = 'hidden'), P && (ht.pointerEvents = 'none'))),
      m.createElement(
        'div',
        Ne({ style: F(F({}, c), {}, { position: 'relative' }), className: I }, x),
        m.createElement(
          p,
          { className: ''.concat(r, '-holder'), style: ht, ref: N, onScroll: Ve },
          m.createElement(Kd, { prefixCls: r, height: de, offset: q, onInnerResize: xe, ref: A, innerProps: S }, ct),
        ),
        _ &&
          m.createElement(Ty, {
            ref: D,
            prefixCls: r,
            scrollTop: C,
            height: i,
            scrollHeight: de,
            count: M.length,
            onScroll: Be,
            onStartMove: function () {
              w(!0);
            },
            onStopMove: function () {
              w(!1);
            },
          }),
      )
    );
  }
  var Yd = ye(Gy);
  Yd.displayName = 'List';
  var Qd = m.createContext(null);
  function Ky() {
    return /(mac\sos|macintosh)/i.test(navigator.appVersion);
  }
  var Xy = ['disabled', 'title', 'children', 'style', 'className'];
  function Jd(e) {
    return typeof e == 'string' || typeof e == 'number';
  }
  var qy = function (t, n) {
      var r = Nb(),
        o = r.prefixCls,
        i = r.id,
        a = r.open,
        l = r.multiple,
        s = r.mode,
        c = r.searchValue,
        u = r.toggleOpen,
        d = r.notFoundContent,
        f = r.onPopupScroll,
        g = he(Qd),
        h = g.flattenOptions,
        p = g.onActiveValue,
        y = g.defaultActiveFirstOption,
        b = g.onSelect,
        S = g.menuItemSelectedIcon,
        x = g.rawValues,
        _ = g.fieldNames,
        R = g.virtual,
        O = g.listHeight,
        v = g.listItemHeight,
        C = ''.concat(o, '-item'),
        $ = Ao(
          function () {
            return h;
          },
          [a, h],
          function (K, W) {
            return W[0] && K[1] !== W[1];
          },
        ),
        E = L(null),
        T = function (W) {
          W.preventDefault();
        },
        P = function (W) {
          E.current && E.current.scrollTo(typeof W == 'number' ? { index: W } : W);
        },
        w = function (W) {
          for (
            var ae = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, ce = $.length, xe = 0;
            xe < ce;
            xe += 1
          ) {
            var ve = (W + xe * ae + ce) % ce,
              se = $[ve],
              k = se.group,
              de = se.data;
            if (!k && !de.disabled) return ve;
          }
          return -1;
        },
        I = oe(function () {
          return w(0);
        }),
        M = V(I, 2),
        N = M[0],
        A = M[1],
        D = function (W) {
          var ae = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          A(W);
          var ce = { source: ae ? 'keyboard' : 'mouse' },
            xe = $[W];
          if (!xe) {
            p(null, -1, ce);
            return;
          }
          p(xe.value, W, ce);
        };
      pe(
        function () {
          D(y !== !1 ? w(0) : -1);
        },
        [$.length, c],
      );
      var j = ut(
        function (K) {
          return x.has(K) && s !== 'combobox';
        },
        [s, fe(x).toString(), x.size],
      );
      pe(
        function () {
          var K = setTimeout(function () {
            if (!l && a && x.size === 1) {
              var ae = Array.from(x)[0],
                ce = $.findIndex(function (xe) {
                  var ve = xe.data;
                  return ve.value === ae;
                });
              ce !== -1 && (D(ce), P(ce));
            }
          });
          if (a) {
            var W;
            (W = E.current) === null || W === void 0 || W.scrollTo(void 0);
          }
          return function () {
            return clearTimeout(K);
          };
        },
        [a, c, h.length],
      );
      var B = function (W) {
        W !== void 0 && b(W, { selected: !x.has(W) }), l || u(!1);
      };
      if (
        (bt(n, function () {
          return {
            onKeyDown: function (W) {
              var ae = W.which,
                ce = W.ctrlKey;
              switch (ae) {
                case U.N:
                case U.P:
                case U.UP:
                case U.DOWN: {
                  var xe = 0;
                  if (
                    (ae === U.UP
                      ? (xe = -1)
                      : ae === U.DOWN
                      ? (xe = 1)
                      : Ky() && ce && (ae === U.N ? (xe = 1) : ae === U.P && (xe = -1)),
                    xe !== 0)
                  ) {
                    var ve = w(N + xe, xe);
                    P(ve), D(ve, !0);
                  }
                  break;
                }
                case U.ENTER: {
                  var se = $[N];
                  se && !se.data.disabled ? B(se.value) : B(void 0), a && W.preventDefault();
                  break;
                }
                case U.ESC:
                  u(!1), a && W.stopPropagation();
              }
            },
            onKeyUp: function () {},
            scrollTo: function (W) {
              P(W);
            },
          };
        }),
        $.length === 0)
      )
        return m.createElement(
          'div',
          { role: 'listbox', id: ''.concat(i, '_list'), className: ''.concat(C, '-empty'), onMouseDown: T },
          d,
        );
      var X = Object.keys(_).map(function (K) {
          return _[K];
        }),
        Y = function (W) {
          return W.label;
        };
      function z(K, W) {
        var ae = K.group;
        return { role: ae ? 'presentation' : 'option', id: ''.concat(i, '_list_').concat(W) };
      }
      var Z = function (W) {
          var ae = $[W];
          if (!ae) return null;
          var ce = ae.data || {},
            xe = ce.value,
            ve = ae.group,
            se = Si(ce, !0),
            k = Y(ae);
          return ae
            ? m.createElement(
                'div',
                Ne({ 'aria-label': typeof k == 'string' && !ve ? k : null }, se, { key: W }, z(ae, W), {
                  'aria-selected': j(xe),
                }),
                xe,
              )
            : null;
        },
        J = { role: 'listbox', id: ''.concat(i, '_list') };
      return m.createElement(
        m.Fragment,
        null,
        R &&
          m.createElement(
            'div',
            Ne({}, J, { style: { height: 0, width: 0, overflow: 'hidden' } }),
            Z(N - 1),
            Z(N),
            Z(N + 1),
          ),
        m.createElement(
          Yd,
          {
            itemKey: 'key',
            ref: E,
            data: $,
            height: O,
            itemHeight: v,
            fullHeight: !1,
            onMouseDown: T,
            onScroll: f,
            virtual: R,
            innerProps: R ? null : J,
          },
          function (K, W) {
            var ae,
              ce = K.group,
              xe = K.groupOption,
              ve = K.data,
              se = K.label,
              k = K.value,
              de = ve.key;
            if (ce) {
              var me,
                be = (me = ve.title) !== null && me !== void 0 ? me : Jd(se) ? se.toString() : void 0;
              return m.createElement(
                'div',
                { className: Q(C, ''.concat(C, '-group')), title: be },
                se !== void 0 ? se : de,
              );
            }
            var q = ve.disabled,
              H = ve.title;
            ve.children;
            var ue = ve.style,
              we = ve.className,
              He = rt(ve, Xy),
              Ge = Fr(He, X),
              Je = j(k),
              Be = ''.concat(C, '-option'),
              Ve = Q(
                C,
                Be,
                we,
                ((ae = {}),
                ee(ae, ''.concat(Be, '-grouped'), xe),
                ee(ae, ''.concat(Be, '-active'), N === W && !q),
                ee(ae, ''.concat(Be, '-disabled'), q),
                ee(ae, ''.concat(Be, '-selected'), Je),
                ae),
              ),
              ze = Y(K),
              st = !S || typeof S == 'function' || Je,
              Ze = typeof ze == 'number' ? ze : ze || k,
              Pe = Jd(Ze) ? Ze.toString() : void 0;
            return (
              H !== void 0 && (Pe = H),
              m.createElement(
                'div',
                Ne({}, Si(Ge), R ? {} : z(K, W), {
                  'aria-selected': Je,
                  className: Ve,
                  title: Pe,
                  onMouseMove: function () {
                    N === W || q || D(W);
                  },
                  onClick: function () {
                    q || B(k);
                  },
                  style: ue,
                }),
                m.createElement('div', { className: ''.concat(Be, '-content') }, Ze),
                kt(S) || Je,
                st &&
                  m.createElement(
                    $i,
                    {
                      className: ''.concat(C, '-option-state'),
                      customizeIcon: S,
                      customizeIconProps: { isSelected: Je },
                    },
                    Je ? '✓' : null,
                  ),
              )
            );
          },
        ),
      );
    },
    Zd = ye(qy);
  Zd.displayName = 'OptionList';
  var Yy = [
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
    Qy = ['inputValue'];
  function Jy(e) {
    return !e || De(e) !== 'object';
  }
  var Zy = ye(function (e, t) {
      var n = e.id,
        r = e.mode,
        o = e.prefixCls,
        i = o === void 0 ? 'rc-select' : o,
        a = e.backfill,
        l = e.fieldNames,
        s = e.inputValue,
        c = e.searchValue,
        u = e.onSearch,
        d = e.autoClearSearchValue,
        f = d === void 0 ? !0 : d,
        g = e.onSelect,
        h = e.onDeselect,
        p = e.dropdownMatchSelectWidth,
        y = p === void 0 ? !0 : p,
        b = e.filterOption,
        S = e.filterSort,
        x = e.optionFilterProp,
        _ = e.optionLabelProp,
        R = e.options,
        O = e.children,
        v = e.defaultActiveFirstOption,
        C = e.menuItemSelectedIcon,
        $ = e.virtual,
        E = e.listHeight,
        T = E === void 0 ? 200 : E,
        P = e.listItemHeight,
        w = P === void 0 ? 20 : P,
        I = e.value,
        M = e.defaultValue,
        N = e.labelInValue,
        A = e.onChange,
        D = rt(e, Yy),
        j = Ey(n),
        B = xl(r),
        X = !!(!R && O),
        Y = le(
          function () {
            return b === void 0 && r === 'combobox' ? !1 : b;
          },
          [b, r],
        ),
        z = le(
          function () {
            return Bd(l, X);
          },
          [JSON.stringify(l), X],
        ),
        Z = yn('', {
          value: c !== void 0 ? c : s,
          postState: function (te) {
            return te || '';
          },
        }),
        J = V(Z, 2),
        K = J[0],
        W = J[1],
        ae = Py(R, O, z, x, _),
        ce = ae.valueOptions,
        xe = ae.labelOptions,
        ve = ae.options,
        se = ut(
          function (G) {
            var te = Td(G);
            return te.map(function (re) {
              var Ce, Me, Ke, Mt, Nt;
              if (Jy(re)) Ce = re;
              else {
                var Xt;
                (Ke = re.key), (Me = re.label), (Ce = (Xt = re.value) !== null && Xt !== void 0 ? Xt : Ke);
              }
              var mt = ce.get(Ce);
              if (mt) {
                var Ft;
                Me === void 0 && (Me = mt == null ? void 0 : mt[_ || z.label]),
                  Ke === void 0 && (Ke = (Ft = mt == null ? void 0 : mt.key) !== null && Ft !== void 0 ? Ft : Ce),
                  (Mt = mt == null ? void 0 : mt.disabled),
                  (Nt = mt == null ? void 0 : mt.title);
              }
              return { label: Me, value: Ce, key: Ke, disabled: Mt, title: Nt };
            });
          },
          [z, _, ce],
        ),
        k = yn(M, { value: I }),
        de = V(k, 2),
        me = de[0],
        be = de[1],
        q = le(
          function () {
            var G,
              te = se(me);
            return r === 'combobox' && !((G = te[0]) !== null && G !== void 0 && G.value) ? [] : te;
          },
          [me, se, r],
        ),
        H = Cy(q, ce),
        ue = V(H, 2),
        we = ue[0],
        He = ue[1],
        Ge = le(
          function () {
            if (!r && we.length === 1) {
              var G = we[0];
              if (G.value === null && (G.label === null || G.label === void 0)) return [];
            }
            return we.map(function (te) {
              var re;
              return F(F({}, te), {}, { label: (re = te.label) !== null && re !== void 0 ? re : te.value });
            });
          },
          [r, we],
        ),
        Je = le(
          function () {
            return new Set(
              we.map(function (G) {
                return G.value;
              }),
            );
          },
          [we],
        );
      pe(
        function () {
          if (r === 'combobox') {
            var G,
              te = (G = we[0]) === null || G === void 0 ? void 0 : G.value;
            W(qb(te) ? String(te) : '');
          }
        },
        [we],
      );
      var Be = Gd(function (G, te) {
          var re,
            Ce = te ?? G;
          return (re = {}), ee(re, z.value, G), ee(re, z.label, Ce), re;
        }),
        Ve = le(
          function () {
            if (r !== 'tags') return ve;
            var G = fe(ve),
              te = function (Ce) {
                return ce.has(Ce);
              };
            return (
              fe(we)
                .sort(function (re, Ce) {
                  return re.value < Ce.value ? -1 : 1;
                })
                .forEach(function (re) {
                  var Ce = re.value;
                  te(Ce) || G.push(Be(Ce, re.label));
                }),
              G
            );
          },
          [Be, ve, ce, we, r],
        ),
        ze = xy(Ve, z, K, Y, x),
        st = le(
          function () {
            return r !== 'tags' ||
              !K ||
              ze.some(function (G) {
                return G[x || 'value'] === K;
              })
              ? ze
              : [Be(K)].concat(fe(ze));
          },
          [Be, x, r, ze, K],
        ),
        Ze = le(
          function () {
            return S
              ? fe(st).sort(function (G, te) {
                  return S(G, te);
                })
              : st;
          },
          [st, S],
        ),
        Pe = le(
          function () {
            return hy(Ze, { fieldNames: z, childrenAsData: X });
          },
          [Ze, z, X],
        ),
        Oe = function (te) {
          var re = se(te);
          if (
            (be(re),
            A &&
              (re.length !== we.length ||
                re.some(function (Ke, Mt) {
                  var Nt;
                  return (
                    ((Nt = we[Mt]) === null || Nt === void 0 ? void 0 : Nt.value) !== (Ke == null ? void 0 : Ke.value)
                  );
                })))
          ) {
            var Ce = N
                ? re
                : re.map(function (Ke) {
                    return Ke.value;
                  }),
              Me = re.map(function (Ke) {
                return Cl(He(Ke.value));
              });
            A(B ? Ce : Ce[0], B ? Me : Me[0]);
          }
        },
        ct = oe(null),
        ht = V(ct, 2),
        Se = ht[0],
        _e = ht[1],
        Ye = oe(0),
        Qe = V(Ye, 2),
        We = Qe[0],
        at = Qe[1],
        lt = v !== void 0 ? v : r !== 'combobox',
        ne = ut(
          function (G, te) {
            var re = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
              Ce = re.source,
              Me = Ce === void 0 ? 'keyboard' : Ce;
            at(te), a && r === 'combobox' && G !== null && Me === 'keyboard' && _e(String(G));
          },
          [a, r],
        ),
        ge = function (te, re, Ce) {
          var Me = function () {
            var Lt,
              qt = He(te);
            return [
              N
                ? {
                    label: qt == null ? void 0 : qt[z.label],
                    value: te,
                    key: (Lt = qt == null ? void 0 : qt.key) !== null && Lt !== void 0 ? Lt : te,
                  }
                : te,
              Cl(qt),
            ];
          };
          if (re && g) {
            var Ke = Me(),
              Mt = V(Ke, 2),
              Nt = Mt[0],
              Xt = Mt[1];
            g(Nt, Xt);
          } else if (!re && h && Ce !== 'clear') {
            var mt = Me(),
              Ft = V(mt, 2),
              Sn = Ft[0],
              At = Ft[1];
            h(Sn, At);
          }
        },
        je = Gd(function (G, te) {
          var re,
            Ce = B ? te.selected : !0;
          Ce
            ? (re = B ? [].concat(fe(we), [G]) : [G])
            : (re = we.filter(function (Me) {
                return Me.value !== G;
              })),
            Oe(re),
            ge(G, Ce),
            r === 'combobox' ? _e('') : (!xl || f) && (W(''), _e(''));
        }),
        Fe = function (te, re) {
          Oe(te);
          var Ce = re.type,
            Me = re.values;
          (Ce === 'remove' || Ce === 'clear') &&
            Me.forEach(function (Ke) {
              ge(Ke.value, !1, Ce);
            });
        },
        ke = function (te, re) {
          if ((W(te), _e(null), re.source === 'submit')) {
            var Ce = (te || '').trim();
            if (Ce) {
              var Me = Array.from(new Set([].concat(fe(Je), [Ce])));
              Oe(Me), ge(Ce, !0), W('');
            }
            return;
          }
          re.source !== 'blur' && (r === 'combobox' && Oe(te), u == null || u(te));
        },
        Et = function (te) {
          var re = te;
          r !== 'tags' &&
            (re = te
              .map(function (Me) {
                var Ke = xe.get(Me);
                return Ke == null ? void 0 : Ke.value;
              })
              .filter(function (Me) {
                return Me !== void 0;
              }));
          var Ce = Array.from(new Set([].concat(fe(Je), fe(re))));
          Oe(Ce),
            Ce.forEach(function (Me) {
              ge(Me, !0);
            });
        },
        ft = le(
          function () {
            var G = $ !== !1 && y !== !1;
            return F(
              F({}, ae),
              {},
              {
                flattenOptions: Pe,
                onActiveValue: ne,
                defaultActiveFirstOption: lt,
                onSelect: je,
                menuItemSelectedIcon: C,
                rawValues: Je,
                fieldNames: z,
                virtual: G,
                listHeight: T,
                listItemHeight: w,
                childrenAsData: X,
              },
            );
          },
          [ae, Pe, ne, lt, je, C, Je, z, $, y, T, w, X],
        );
      return m.createElement(
        Qd.Provider,
        { value: ft },
        m.createElement(
          Sy,
          Ne({}, D, {
            id: j,
            prefixCls: i,
            ref: t,
            omitDomProps: Qy,
            mode: r,
            displayValues: Ge,
            onDisplayValuesChange: Fe,
            searchValue: K,
            onSearch: ke,
            autoClearSearchValue: f,
            onSearchSplit: Et,
            dropdownMatchSelectWidth: y,
            OptionList: Zd,
            emptyOptions: !Pe.length,
            activeValue: Se,
            activeDescendantId: ''.concat(j, '_list_').concat(We),
          }),
        ),
      );
    }),
    Ol = Zy;
  (Ol.Option = El), (Ol.OptGroup = $l);
  const e1 = () => {
      const [, e] = dr(),
        t = new St(e.colorBgBase);
      let n = {};
      return (
        t.toHsl().l < 0.5 && (n = { opacity: 0.65 }),
        m.createElement(
          'svg',
          { style: n, width: '184', height: '152', viewBox: '0 0 184 152', xmlns: 'http://www.w3.org/2000/svg' },
          m.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            m.createElement(
              'g',
              { transform: 'translate(24 31.67)' },
              m.createElement('ellipse', {
                fillOpacity: '.8',
                fill: '#F5F5F7',
                cx: '67.797',
                cy: '106.89',
                rx: '67.797',
                ry: '12.668',
              }),
              m.createElement('path', {
                d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
                fill: '#AEB8C2',
              }),
              m.createElement('path', {
                d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                fill: 'url(#linearGradient-1)',
                transform: 'translate(13.56)',
              }),
              m.createElement('path', {
                d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
                fill: '#F5F5F7',
              }),
              m.createElement('path', {
                d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
                fill: '#DCE0E6',
              }),
            ),
            m.createElement('path', {
              d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
              fill: '#DCE0E6',
            }),
            m.createElement(
              'g',
              { transform: 'translate(149.65 15.383)', fill: '#FFF' },
              m.createElement('ellipse', { cx: '20.654', cy: '3.167', rx: '2.849', ry: '2.815' }),
              m.createElement('path', { d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z' }),
            ),
          ),
        )
      );
    },
    t1 = () => {
      const [, e] = dr(),
        { colorFill: t, colorFillTertiary: n, colorFillQuaternary: r, colorBgContainer: o } = e,
        {
          borderColor: i,
          shadowColor: a,
          contentColor: l,
        } = le(
          () => ({
            borderColor: new St(t).onBackground(o).toHexShortString(),
            shadowColor: new St(n).onBackground(o).toHexShortString(),
            contentColor: new St(r).onBackground(o).toHexShortString(),
          }),
          [t, n, r, o],
        );
      return m.createElement(
        'svg',
        { width: '64', height: '41', viewBox: '0 0 64 41', xmlns: 'http://www.w3.org/2000/svg' },
        m.createElement(
          'g',
          { transform: 'translate(0 1)', fill: 'none', fillRule: 'evenodd' },
          m.createElement('ellipse', { fill: a, cx: '32', cy: '33', rx: '32', ry: '7' }),
          m.createElement(
            'g',
            { fillRule: 'nonzero', stroke: i },
            m.createElement('path', {
              d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
            }),
            m.createElement('path', {
              d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
              fill: l,
            }),
          ),
        ),
      );
    },
    n1 = (e) => {
      const { componentCls: t, margin: n, marginXS: r, marginXL: o, fontSize: i, lineHeight: a } = e;
      return {
        [t]: {
          marginInline: r,
          fontSize: i,
          lineHeight: a,
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
            marginBlock: o,
            color: e.colorTextDisabled,
            [`${t}-description`]: { color: e.colorTextDisabled },
            [`${t}-image`]: { height: e.emptyImgHeightMD },
          },
          '&-small': { marginBlock: r, color: e.colorTextDisabled, [`${t}-image`]: { height: e.emptyImgHeightSM } },
        },
      };
    },
    r1 = jt('Empty', (e) => {
      const { componentCls: t, controlHeightLG: n } = e,
        r = it(e, {
          emptyImgCls: `${t}-img`,
          emptyImgHeight: n * 2.5,
          emptyImgHeightMD: n,
          emptyImgHeightSM: n * 0.875,
        });
      return [n1(r)];
    });
  var o1 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const ef = m.createElement(e1, null),
    tf = m.createElement(t1, null),
    _l = (e) => {
      var {
          className: t,
          rootClassName: n,
          prefixCls: r,
          image: o = ef,
          description: i,
          children: a,
          imageStyle: l,
        } = e,
        s = o1(e, ['className', 'rootClassName', 'prefixCls', 'image', 'description', 'children', 'imageStyle']);
      const { getPrefixCls: c, direction: u } = he(qe),
        d = c('empty', r),
        [f, g] = r1(d),
        [h] = gl('Empty'),
        p = typeof i < 'u' ? i : h == null ? void 0 : h.description,
        y = typeof p == 'string' ? p : 'empty';
      let b = null;
      return (
        typeof o == 'string' ? (b = m.createElement('img', { alt: y, src: o })) : (b = o),
        f(
          m.createElement(
            'div',
            Object.assign({ className: Q(g, d, { [`${d}-normal`]: o === tf, [`${d}-rtl`]: u === 'rtl' }, t, n) }, s),
            m.createElement('div', { className: `${d}-image`, style: l }, b),
            p && m.createElement('div', { className: `${d}-description` }, p),
            a && m.createElement('div', { className: `${d}-footer` }, a),
          ),
        )
      );
    };
  (_l.PRESENTED_IMAGE_DEFAULT = ef), (_l.PRESENTED_IMAGE_SIMPLE = tf);
  const no = _l,
    nf = (e) => {
      const { componentName: t } = e,
        { getPrefixCls: n } = he(qe),
        r = n('empty');
      switch (t) {
        case 'Table':
        case 'List':
          return ie.createElement(no, { image: no.PRESENTED_IMAGE_SIMPLE });
        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
          return ie.createElement(no, { image: no.PRESENTED_IMAGE_SIMPLE, className: `${r}-small` });
        default:
          return ie.createElement(no, null);
      }
    };
  function Il(e, t, n) {
    return Q({
      [`${e}-status-success`]: t === 'success',
      [`${e}-status-warning`]: t === 'warning',
      [`${e}-status-error`]: t === 'error',
      [`${e}-status-validating`]: t === 'validating',
      [`${e}-has-feedback`]: n,
    });
  }
  const rf = (e, t) => t || e;
  var i1 = {
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
  const a1 = i1;
  var of = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: a1 }));
  };
  of.displayName = 'CheckOutlined';
  const af = ye(of);
  var l1 = {
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
  const s1 = l1;
  var lf = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: s1 }));
  };
  lf.displayName = 'DownOutlined';
  const c1 = ye(lf);
  var u1 = {
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
  const d1 = u1;
  var sf = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: d1 }));
  };
  sf.displayName = 'SearchOutlined';
  const f1 = ye(sf);
  function m1(e) {
    let {
      suffixIcon: t,
      clearIcon: n,
      menuItemSelectedIcon: r,
      removeIcon: o,
      loading: i,
      multiple: a,
      hasFeedback: l,
      prefixCls: s,
      showArrow: c,
      feedbackIcon: u,
    } = e;
    const d = n ?? m.createElement(ol, null),
      f = (y) => m.createElement(m.Fragment, null, c !== !1 && y, l && u);
    let g = null;
    if (t !== void 0) g = f(t);
    else if (i) g = f(m.createElement(Zu, { spin: !0 }));
    else {
      const y = `${s}-suffix`;
      g = (b) => {
        let { open: S, showSearch: x } = b;
        return f(S && x ? m.createElement(f1, { className: y }) : m.createElement(c1, { className: y }));
      };
    }
    let h = null;
    r !== void 0 ? (h = r) : a ? (h = m.createElement(af, null)) : (h = null);
    let p = null;
    return (
      o !== void 0 ? (p = o) : (p = m.createElement(il, null)),
      { clearIcon: d, suffixIcon: g, itemIcon: h, removeIcon: p }
    );
  }
  function g1(e, t, n) {
    return function (o) {
      const { prefixCls: i, style: a } = o,
        l = L(null),
        [s, c] = oe(0),
        [u, d] = oe(0),
        [f, g] = yn(!1, { value: o.open }),
        { getPrefixCls: h } = he(qe),
        p = h(t || 'select', i);
      return (
        pe(() => {
          if ((g(!0), typeof ResizeObserver < 'u')) {
            const y = new ResizeObserver((S) => {
                const x = S[0].target;
                c(x.offsetHeight + 8), d(x.offsetWidth);
              }),
              b = setInterval(() => {
                var S;
                const x = n ? `.${n(p)}` : `.${p}-dropdown`,
                  _ = (S = l.current) === null || S === void 0 ? void 0 : S.querySelector(x);
                _ && (clearInterval(b), y.observe(_));
              }, 10);
            return () => {
              clearInterval(b), y.disconnect();
            };
          }
        }, []),
        m.createElement(
          Su,
          {
            theme: { token: { motionDurationFast: '0.01s', motionDurationMid: '0.01s', motionDurationSlow: '0.01s' } },
          },
          m.createElement(
            'div',
            { ref: l, style: { paddingBottom: s, position: 'relative', width: 'fit-content', minWidth: u } },
            m.createElement(
              e,
              Object.assign({}, o, {
                style: Object.assign(Object.assign({}, a), { margin: 0 }),
                open: f,
                visible: f,
                getPopupContainer: () => l.current,
              }),
            ),
          ),
        )
      );
    };
  }
  const cf = (e) => {
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
    p1 = (e) => {
      const { antCls: t, componentCls: n } = e,
        r = `${n}-item`;
      return [
        {
          [`${n}-dropdown`]: Object.assign(Object.assign({}, ln(e)), {
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
          `]: { animationName: yd },
            [`
            &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-topLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-topLeft
          `]: { animationName: Cd },
            [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-bottomLeft`]: { animationName: Sd },
            [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-topLeft`]: { animationName: xd },
            '&-hidden': { display: 'none' },
            '&-empty': { color: e.colorTextDisabled },
            [`${r}-empty`]: Object.assign(Object.assign({}, cf(e)), { color: e.colorTextDisabled }),
            [`${r}`]: Object.assign(Object.assign({}, cf(e)), {
              cursor: 'pointer',
              transition: `background ${e.motionDurationSlow} ease`,
              borderRadius: e.borderRadiusSM,
              '&-group': { color: e.colorTextDescription, fontSize: e.fontSizeSM, cursor: 'default' },
              '&-option': {
                display: 'flex',
                '&-content': Object.assign(Object.assign({ flex: 'auto' }, Xr), { '> *': Object.assign({}, Xr) }),
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
        wd(e, 'slide-up'),
        wd(e, 'slide-down'),
        bd(e, 'move-up'),
        bd(e, 'move-down'),
      ];
    },
    Sr = 2;
  function uf(e) {
    let { controlHeightSM: t, controlHeight: n, lineWidth: r } = e;
    const o = (n - t) / 2 - r,
      i = Math.ceil(o / 2);
    return [o, i];
  }
  function Pl(e, t) {
    const { componentCls: n, iconCls: r } = e,
      o = `${n}-selection-overflow`,
      i = e.controlHeightSM,
      [a] = uf(e),
      l = t ? `${n}-${t}` : '';
    return {
      [`${n}-multiple${l}`]: {
        fontSize: e.fontSize,
        [o]: {
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
          padding: `${a - Sr}px ${Sr * 2}px`,
          borderRadius: e.borderRadius,
          [`${n}-show-search&`]: { cursor: 'text' },
          [`${n}-disabled&`]: { background: e.colorBgContainerDisabled, cursor: 'not-allowed' },
          '&:after': {
            display: 'inline-block',
            width: 0,
            margin: `${Sr}px 0`,
            lineHeight: `${i}px`,
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
          height: i,
          marginTop: Sr,
          marginBottom: Sr,
          lineHeight: `${i - e.lineWidth * 2}px`,
          background: e.colorFillSecondary,
          border: `${e.lineWidth}px solid ${e.colorSplit}`,
          borderRadius: e.borderRadiusSM,
          cursor: 'default',
          transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
          userSelect: 'none',
          marginInlineEnd: Sr * 2,
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
          '&-remove': Object.assign(Object.assign({}, Xa()), {
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
        [`${o}-item + ${o}-item`]: { [`${n}-selection-search`]: { marginInlineStart: 0 } },
        [`${n}-selection-search`]: {
          display: 'inline-flex',
          position: 'relative',
          maxWidth: '100%',
          marginInlineStart: e.inputPaddingHorizontalBase - a,
          [`
          &-input,
          &-mirror
        `]: { height: i, fontFamily: e.fontFamily, lineHeight: `${i}px`, transition: `all ${e.motionDurationSlow}` },
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
  function h1(e) {
    const { componentCls: t } = e,
      n = it(e, {
        controlHeight: e.controlHeightSM,
        controlHeightSM: e.controlHeightXS,
        borderRadius: e.borderRadiusSM,
        borderRadiusSM: e.borderRadiusXS,
      }),
      [, r] = uf(e);
    return [
      Pl(e),
      Pl(n, 'sm'),
      {
        [`${t}-multiple${t}-sm`]: {
          [`${t}-selection-placeholder`]: { insetInline: e.controlPaddingHorizontalSM - e.lineWidth },
          [`${t}-selection-search`]: { marginInlineStart: r },
        },
      },
      Pl(
        it(e, {
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
  function Rl(e, t) {
    const { componentCls: n, inputPaddingHorizontalBase: r, borderRadius: o } = e,
      i = e.controlHeight - e.lineWidth * 2,
      a = Math.ceil(e.fontSize * 1.25),
      l = t ? `${n}-${t}` : '';
    return {
      [`${n}-single${l}`]: {
        fontSize: e.fontSize,
        [`${n}-selector`]: Object.assign(Object.assign({}, ln(e)), {
          display: 'flex',
          borderRadius: o,
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
            lineHeight: `${i}px`,
            transition: `all ${e.motionDurationSlow}`,
            '@supports (-moz-appearance: meterbar)': { lineHeight: `${i}px` },
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
      `]: { paddingInlineEnd: a },
        [`&${n}-open ${n}-selection-item`]: { color: e.colorTextPlaceholder },
        [`&:not(${n}-customize-input)`]: {
          [`${n}-selector`]: {
            width: '100%',
            height: e.controlHeight,
            padding: `0 ${r}px`,
            [`${n}-selection-search-input`]: { height: i },
            '&:after': { lineHeight: `${i}px` },
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
  function v1(e) {
    const { componentCls: t } = e,
      n = e.controlPaddingHorizontalSM - e.lineWidth;
    return [
      Rl(e),
      Rl(it(e, { controlHeight: e.controlHeightSM, borderRadius: e.borderRadiusSM }), 'sm'),
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
      Rl(it(e, { controlHeight: e.controlHeightLG, fontSize: e.fontSizeLG, borderRadius: e.borderRadiusLG }), 'lg'),
    ];
  }
  const b1 = (e) => {
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
    Tl = function (e, t) {
      let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      const { componentCls: r, borderHoverColor: o, outlineColor: i, antCls: a } = t,
        l = n ? { [`${r}-selector`]: { borderColor: o } } : {};
      return {
        [e]: {
          [`&:not(${r}-disabled):not(${r}-customize-input):not(${a}-pagination-size-changer)`]: Object.assign(
            Object.assign({}, l),
            {
              [`${r}-focused& ${r}-selector`]: {
                borderColor: o,
                boxShadow: `0 0 0 ${t.controlOutlineWidth}px ${i}`,
                outline: 0,
              },
              [`&:hover ${r}-selector`]: { borderColor: o },
            },
          ),
        },
      };
    },
    y1 = (e) => {
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
    S1 = (e) => {
      const { componentCls: t, inputPaddingHorizontalBase: n, iconCls: r } = e;
      return {
        [t]: Object.assign(Object.assign({}, ln(e)), {
          position: 'relative',
          display: 'inline-block',
          cursor: 'pointer',
          [`&:not(${t}-customize-input) ${t}-selector`]: Object.assign(Object.assign({}, b1(e)), y1(e)),
          [`${t}-selection-item`]: Object.assign(Object.assign({ flex: 1, fontWeight: 'normal' }, Xr), {
            '> *': Object.assign({ lineHeight: 'inherit' }, Xr),
          }),
          [`${t}-selection-placeholder`]: Object.assign(Object.assign({}, Xr), {
            flex: 1,
            color: e.colorTextPlaceholder,
            pointerEvents: 'none',
          }),
          [`${t}-arrow`]: Object.assign(Object.assign({}, Xa()), {
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
    C1 = (e) => {
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
        S1(e),
        v1(e),
        h1(e),
        p1(e),
        { [`${t}-rtl`]: { direction: 'rtl' } },
        Tl(t, it(e, { borderHoverColor: e.colorPrimaryHover, outlineColor: e.controlOutline })),
        Tl(`${t}-status-error`, it(e, { borderHoverColor: e.colorErrorHover, outlineColor: e.colorErrorOutline }), !0),
        Tl(
          `${t}-status-warning`,
          it(e, { borderHoverColor: e.colorWarningHover, outlineColor: e.colorWarningOutline }),
          !0,
        ),
        ld(e, { borderElCls: `${t}-selector`, focusElCls: `${t}-focused` }),
      ];
    },
    x1 = jt(
      'Select',
      (e, t) => {
        let { rootPrefixCls: n } = t;
        const r = it(e, { rootPrefixCls: n, inputPaddingHorizontalBase: e.paddingSM - 1 });
        return [C1(r)];
      },
      (e) => ({ zIndexPopup: e.zIndexPopupBase + 50 }),
    );
  function w1(e) {
    return e ?? !0;
  }
  var $1 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const df = 'SECRET_COMBOBOX_MODE_DO_NOT_USE',
    Cr = ye((e, t) => {
      var {
          prefixCls: n,
          bordered: r = !0,
          className: o,
          rootClassName: i,
          getPopupContainer: a,
          popupClassName: l,
          dropdownClassName: s,
          listHeight: c = 256,
          placement: u,
          listItemHeight: d = 24,
          size: f,
          disabled: g,
          notFoundContent: h,
          status: p,
          showArrow: y,
        } = e,
        b = $1(e, [
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
          getPopupContainer: S,
          getPrefixCls: x,
          renderEmpty: _,
          direction: R,
          virtual: O,
          dropdownMatchSelectWidth: v,
          select: C,
        } = he(qe),
        $ = he(qr),
        E = x('select', n),
        T = x(),
        { compactSize: P, compactItemClassnames: w } = F0(E, R),
        [I, M] = x1(E),
        N = le(() => {
          const { mode: be } = b;
          if (be !== 'combobox') return be === df ? 'combobox' : be;
        }, [b.mode]),
        A = N === 'multiple' || N === 'tags',
        D = w1(y),
        { status: j, hasFeedback: B, isFormItemInput: X, feedbackIcon: Y } = he(Ci),
        z = rf(j, p);
      let Z;
      h !== void 0
        ? (Z = h)
        : N === 'combobox'
        ? (Z = null)
        : (Z = (_ == null ? void 0 : _('Select')) || m.createElement(nf, { componentName: 'Select' }));
      const {
          suffixIcon: J,
          itemIcon: K,
          removeIcon: W,
          clearIcon: ae,
        } = m1(
          Object.assign(Object.assign({}, b), {
            multiple: A,
            hasFeedback: B,
            feedbackIcon: Y,
            showArrow: D,
            prefixCls: E,
          }),
        ),
        ce = Fr(b, ['suffixIcon', 'itemIcon']),
        xe = Q(l || s, { [`${E}-dropdown-${R}`]: R === 'rtl' }, i, M),
        ve = P || f || $,
        se = he(Za),
        k = g ?? se,
        de = Q(
          {
            [`${E}-lg`]: ve === 'large',
            [`${E}-sm`]: ve === 'small',
            [`${E}-rtl`]: R === 'rtl',
            [`${E}-borderless`]: !r,
            [`${E}-in-form-item`]: X,
          },
          Il(E, z, B),
          w,
          o,
          i,
          M,
        ),
        me = () => (u !== void 0 ? u : R === 'rtl' ? 'bottomRight' : 'bottomLeft');
      return I(
        m.createElement(
          Ol,
          Object.assign(
            { ref: t, virtual: O, dropdownMatchSelectWidth: v, showSearch: C == null ? void 0 : C.showSearch },
            ce,
            {
              transitionName: yi(T, H0(u), b.transitionName),
              listHeight: c,
              listItemHeight: d,
              mode: N,
              prefixCls: E,
              placement: me(),
              direction: R,
              inputIcon: J,
              menuItemSelectedIcon: K,
              removeIcon: W,
              clearIcon: ae,
              notFoundContent: Z,
              className: de,
              getPopupContainer: a || S,
              dropdownClassName: xe,
              showArrow: B || D,
              disabled: k,
            },
          ),
        ),
      );
    }),
    E1 = g1(Cr);
  (Cr.SECRET_COMBOBOX_MODE_DO_NOT_USE = df),
    (Cr.Option = El),
    (Cr.OptGroup = $l),
    (Cr._InternalPanelDoNotUseOrYouWillBeFired = E1);
  const _i = Cr;
  function O1() {
    const [, e] = So((t) => t + 1, 0);
    return e;
  }
  const Wn = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
    _1 = (e) => ({
      xs: `(max-width: ${e.screenXSMax}px)`,
      sm: `(min-width: ${e.screenSM}px)`,
      md: `(min-width: ${e.screenMD}px)`,
      lg: `(min-width: ${e.screenLG}px)`,
      xl: `(min-width: ${e.screenXL}px)`,
      xxl: `(min-width: ${e.screenXXL}px)`,
    }),
    I1 = (e) => {
      const t = e,
        n = [].concat(Wn).reverse();
      return (
        n.forEach((r, o) => {
          const i = r.toUpperCase(),
            a = `screen${i}Min`,
            l = `screen${i}`;
          if (!(t[a] <= t[l])) throw new Error(`${a}<=${l} fails : !(${t[a]}<=${t[l]})`);
          if (o < n.length - 1) {
            const s = `screen${i}Max`;
            if (!(t[l] <= t[s])) throw new Error(`${l}<=${s} fails : !(${t[l]}<=${t[s]})`);
            const u = `screen${n[o + 1].toUpperCase()}Min`;
            if (!(t[s] <= t[u])) throw new Error(`${s}<=${u} fails : !(${t[s]}<=${t[u]})`);
          }
        }),
        e
      );
    };
  function ff() {
    const [, e] = dr(),
      t = _1(I1(e));
    return ie.useMemo(() => {
      const n = new Map();
      let r = -1,
        o = {};
      return {
        matchHandlers: {},
        dispatch(i) {
          return (o = i), n.forEach((a) => a(o)), n.size >= 1;
        },
        subscribe(i) {
          return n.size || this.register(), (r += 1), n.set(r, i), i(o), r;
        },
        unsubscribe(i) {
          n.delete(i), n.size || this.unregister();
        },
        unregister() {
          Object.keys(t).forEach((i) => {
            const a = t[i],
              l = this.matchHandlers[a];
            l == null || l.mql.removeListener(l == null ? void 0 : l.listener);
          }),
            n.clear();
        },
        register() {
          Object.keys(t).forEach((i) => {
            const a = t[i],
              l = (c) => {
                let { matches: u } = c;
                this.dispatch(Object.assign(Object.assign({}, o), { [i]: u }));
              },
              s = window.matchMedia(a);
            s.addListener(l), (this.matchHandlers[a] = { mql: s, listener: l }), l(s);
          });
        },
        responsiveMap: t,
      };
    }, [e]);
  }
  function mf() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    const t = L({}),
      n = O1(),
      r = ff();
    return (
      pe(() => {
        const o = r.subscribe((i) => {
          (t.current = i), e && n();
        });
        return () => r.unsubscribe(o);
      }, []),
      t.current
    );
  }
  var xr = { shiftX: 64, adjustY: 1 },
    wr = { adjustX: 1, shiftY: !0 },
    en = [0, 0],
    P1 = {
      left: { points: ['cr', 'cl'], overflow: wr, offset: [-4, 0], targetOffset: en },
      right: { points: ['cl', 'cr'], overflow: wr, offset: [4, 0], targetOffset: en },
      top: { points: ['bc', 'tc'], overflow: xr, offset: [0, -4], targetOffset: en },
      bottom: { points: ['tc', 'bc'], overflow: xr, offset: [0, 4], targetOffset: en },
      topLeft: { points: ['bl', 'tl'], overflow: xr, offset: [0, -4], targetOffset: en },
      leftTop: { points: ['tr', 'tl'], overflow: wr, offset: [-4, 0], targetOffset: en },
      topRight: { points: ['br', 'tr'], overflow: xr, offset: [0, -4], targetOffset: en },
      rightTop: { points: ['tl', 'tr'], overflow: wr, offset: [4, 0], targetOffset: en },
      bottomRight: { points: ['tr', 'br'], overflow: xr, offset: [0, 4], targetOffset: en },
      rightBottom: { points: ['bl', 'br'], overflow: wr, offset: [4, 0], targetOffset: en },
      bottomLeft: { points: ['tl', 'bl'], overflow: xr, offset: [0, 4], targetOffset: en },
      leftBottom: { points: ['br', 'bl'], overflow: wr, offset: [-4, 0], targetOffset: en },
    };
  function gf(e) {
    var t = e.children,
      n = e.prefixCls,
      r = e.id,
      o = e.overlayInnerStyle,
      i = e.className,
      a = e.style;
    return m.createElement(
      'div',
      { className: Q(''.concat(n, '-content'), i), style: a },
      m.createElement(
        'div',
        { className: ''.concat(n, '-inner'), id: r, role: 'tooltip', style: o },
        typeof t == 'function' ? t() : t,
      ),
    );
  }
  var R1 = [
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
    T1 = function (t, n) {
      var r = t.overlayClassName,
        o = t.trigger,
        i = o === void 0 ? ['hover'] : o,
        a = t.mouseEnterDelay,
        l = a === void 0 ? 0 : a,
        s = t.mouseLeaveDelay,
        c = s === void 0 ? 0.1 : s,
        u = t.overlayStyle,
        d = t.prefixCls,
        f = d === void 0 ? 'rc-tooltip' : d,
        g = t.children,
        h = t.onVisibleChange,
        p = t.afterVisibleChange,
        y = t.transitionName,
        b = t.animation,
        S = t.motion,
        x = t.placement,
        _ = x === void 0 ? 'right' : x,
        R = t.align,
        O = R === void 0 ? {} : R,
        v = t.destroyTooltipOnHide,
        C = v === void 0 ? !1 : v,
        $ = t.defaultVisible,
        E = t.getTooltipContainer,
        T = t.overlayInnerStyle;
      t.arrowContent;
      var P = t.overlay,
        w = t.id,
        I = t.showArrow,
        M = I === void 0 ? !0 : I,
        N = rt(t, R1),
        A = L(null);
      bt(n, function () {
        return A.current;
      });
      var D = F({}, N);
      'visible' in t && (D.popupVisible = t.visible);
      var j = function () {
        return m.createElement(gf, { key: 'content', prefixCls: f, id: w, overlayInnerStyle: T }, P);
      };
      return m.createElement(
        Hd,
        Ne(
          {
            popupClassName: r,
            prefixCls: f,
            popup: j,
            action: i,
            builtinPlacements: P1,
            popupPlacement: _,
            ref: A,
            popupAlign: O,
            getPopupContainer: E,
            onPopupVisibleChange: h,
            afterPopupVisibleChange: p,
            popupTransitionName: y,
            popupAnimation: b,
            popupMotion: S,
            defaultPopupVisible: $,
            autoDestroy: C,
            mouseLeaveDelay: c,
            popupStyle: u,
            mouseEnterDelay: l,
            arrow: M,
          },
          D,
        ),
        g,
      );
    };
  const M1 = ye(T1),
    Rn = (e, t) => new St(e).setAlpha(t).toRgbString(),
    $r = (e, t) => new St(e).lighten(t).toHexString(),
    N1 = (e) => {
      const t = hn(e, { theme: 'dark' });
      return { 1: t[0], 2: t[1], 3: t[2], 4: t[3], 5: t[6], 6: t[5], 7: t[4], 8: t[6], 9: t[5], 10: t[4] };
    },
    F1 = (e, t) => {
      const n = e || '#000',
        r = t || '#fff';
      return {
        colorBgBase: n,
        colorTextBase: r,
        colorText: Rn(r, 0.85),
        colorTextSecondary: Rn(r, 0.65),
        colorTextTertiary: Rn(r, 0.45),
        colorTextQuaternary: Rn(r, 0.25),
        colorFill: Rn(r, 0.18),
        colorFillSecondary: Rn(r, 0.12),
        colorFillTertiary: Rn(r, 0.08),
        colorFillQuaternary: Rn(r, 0.04),
        colorBgElevated: $r(n, 12),
        colorBgContainer: $r(n, 8),
        colorBgLayout: $r(n, 0),
        colorBgSpotlight: $r(n, 26),
        colorBorder: $r(n, 26),
        colorBorderSecondary: $r(n, 19),
      };
    },
    A1 = (e, t) => {
      const n = Object.keys(Ga)
          .map((o) => {
            const i = hn(e[o], { theme: 'dark' });
            return new Array(10)
              .fill(1)
              .reduce((a, l, s) => ((a[`${o}-${s + 1}`] = i[s]), (a[`${o}${s + 1}`] = i[s]), a), {});
          })
          .reduce((o, i) => ((o = Object.assign(Object.assign({}, o), i)), o), {}),
        r = t ?? li(e);
      return Object.assign(
        Object.assign(Object.assign({}, r), n),
        mu(e, { generateColorPalettes: N1, generateNeutralColorPalettes: F1 }),
      );
    };
  function z1(e) {
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
  const D1 = (e, t) => {
    const n = t ?? li(e),
      r = n.fontSizeSM,
      o = n.controlHeight - 4;
    return Object.assign(
      Object.assign(Object.assign(Object.assign(Object.assign({}, n), z1(t ?? e)), gu(r)), { controlHeight: o }),
      fu(Object.assign(Object.assign({}, n), { controlHeight: o })),
    );
  };
  function j1() {
    const [e, t, n] = dr();
    return { theme: e, token: t, hashId: n };
  }
  const L1 = {
      defaultConfig: ci,
      defaultSeed: ci.token,
      useToken: j1,
      defaultAlgorithm: li,
      darkAlgorithm: A1,
      compactAlgorithm: D1,
    },
    pf = 8;
  function hf(e) {
    const t = pf,
      { contentRadius: n, limitVerticalRadius: r } = e,
      o = n > 12 ? n + 2 : 12;
    return { dropdownArrowOffset: o, dropdownArrowOffsetVertical: r ? t : o };
  }
  function Ii(e, t) {
    return e ? t : {};
  }
  function H1(e, t) {
    const { componentCls: n, sizePopupArrow: r, borderRadiusXS: o, borderRadiusOuter: i, boxShadowPopoverArrow: a } = e,
      {
        colorBg: l,
        contentRadius: s = e.borderRadiusLG,
        limitVerticalRadius: c,
        arrowDistance: u = 0,
        arrowPlacement: d = { left: !0, right: !0, top: !0, bottom: !0 },
      } = t,
      { dropdownArrowOffsetVertical: f, dropdownArrowOffset: g } = hf({ contentRadius: s, limitVerticalRadius: c });
    return {
      [n]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {
                [`${n}-arrow`]: [
                  Object.assign(
                    Object.assign({ position: 'absolute', zIndex: 1, display: 'block' }, Zh(r, o, i, l, a)),
                    { '&:before': { background: l } },
                  ),
                ],
              },
              Ii(!!d.top, {
                [[
                  `&-placement-top ${n}-arrow`,
                  `&-placement-topLeft ${n}-arrow`,
                  `&-placement-topRight ${n}-arrow`,
                ].join(',')]: { bottom: u, transform: 'translateY(100%) rotate(180deg)' },
                [`&-placement-top ${n}-arrow`]: {
                  left: { _skip_check_: !0, value: '50%' },
                  transform: 'translateX(-50%) translateY(100%) rotate(180deg)',
                },
                [`&-placement-topLeft ${n}-arrow`]: { left: { _skip_check_: !0, value: g } },
                [`&-placement-topRight ${n}-arrow`]: { right: { _skip_check_: !0, value: g } },
              }),
            ),
            Ii(!!d.bottom, {
              [[
                `&-placement-bottom ${n}-arrow`,
                `&-placement-bottomLeft ${n}-arrow`,
                `&-placement-bottomRight ${n}-arrow`,
              ].join(',')]: { top: u, transform: 'translateY(-100%)' },
              [`&-placement-bottom ${n}-arrow`]: {
                left: { _skip_check_: !0, value: '50%' },
                transform: 'translateX(-50%) translateY(-100%)',
              },
              [`&-placement-bottomLeft ${n}-arrow`]: { left: { _skip_check_: !0, value: g } },
              [`&-placement-bottomRight ${n}-arrow`]: { right: { _skip_check_: !0, value: g } },
            }),
          ),
          Ii(!!d.left, {
            [[
              `&-placement-left ${n}-arrow`,
              `&-placement-leftTop ${n}-arrow`,
              `&-placement-leftBottom ${n}-arrow`,
            ].join(',')]: { right: { _skip_check_: !0, value: u }, transform: 'translateX(100%) rotate(90deg)' },
            [`&-placement-left ${n}-arrow`]: {
              top: { _skip_check_: !0, value: '50%' },
              transform: 'translateY(-50%) translateX(100%) rotate(90deg)',
            },
            [`&-placement-leftTop ${n}-arrow`]: { top: f },
            [`&-placement-leftBottom ${n}-arrow`]: { bottom: f },
          }),
        ),
        Ii(!!d.right, {
          [[
            `&-placement-right ${n}-arrow`,
            `&-placement-rightTop ${n}-arrow`,
            `&-placement-rightBottom ${n}-arrow`,
          ].join(',')]: { left: { _skip_check_: !0, value: u }, transform: 'translateX(-100%) rotate(-90deg)' },
          [`&-placement-right ${n}-arrow`]: {
            top: { _skip_check_: !0, value: '50%' },
            transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)',
          },
          [`&-placement-rightTop ${n}-arrow`]: { top: f },
          [`&-placement-rightBottom ${n}-arrow`]: { bottom: f },
        }),
      ),
    };
  }
  function k1(e, t, n, r) {
    if (r === !1) return { adjustX: !1, adjustY: !1 };
    const o = r && typeof r == 'object' ? r : {},
      i = {};
    switch (e) {
      case 'top':
      case 'bottom':
        i.shiftX = t.dropdownArrowOffset * 2 + n;
        break;
      case 'left':
      case 'right':
        i.shiftY = t.dropdownArrowOffsetVertical * 2 + n;
        break;
    }
    const a = Object.assign(Object.assign({}, i), o);
    return a.shiftX || (a.adjustX = !0), a.shiftY || (a.adjustY = !0), a;
  }
  const vf = {
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
    V1 = {
      topLeft: { points: ['bl', 'tc'] },
      leftTop: { points: ['tr', 'cl'] },
      topRight: { points: ['br', 'tc'] },
      rightTop: { points: ['tl', 'cr'] },
      bottomRight: { points: ['tr', 'bc'] },
      rightBottom: { points: ['bl', 'cr'] },
      bottomLeft: { points: ['tl', 'bc'] },
      leftBottom: { points: ['br', 'cl'] },
    },
    B1 = new Set([
      'topLeft',
      'topRight',
      'bottomLeft',
      'bottomRight',
      'leftTop',
      'leftBottom',
      'rightTop',
      'rightBottom',
    ]);
  function W1(e) {
    const { arrowWidth: t, autoAdjustOverflow: n, arrowPointAtCenter: r, offset: o, borderRadius: i } = e,
      a = t / 2,
      l = {};
    return (
      Object.keys(vf).forEach((s) => {
        const c = (r && V1[s]) || vf[s],
          u = Object.assign(Object.assign({}, c), { offset: [0, 0] });
        switch (((l[s] = u), B1.has(s) && (u.autoArrow = !1), s)) {
          case 'top':
          case 'topLeft':
          case 'topRight':
            u.offset[1] = -a - o;
            break;
          case 'bottom':
          case 'bottomLeft':
          case 'bottomRight':
            u.offset[1] = a + o;
            break;
          case 'left':
          case 'leftTop':
          case 'leftBottom':
            u.offset[0] = -a - o;
            break;
          case 'right':
          case 'rightTop':
          case 'rightBottom':
            u.offset[0] = a + o;
            break;
        }
        const d = hf({ contentRadius: i, limitVerticalRadius: !0 });
        if (r)
          switch (s) {
            case 'topLeft':
            case 'bottomLeft':
              u.offset[0] = -d.dropdownArrowOffset - a;
              break;
            case 'topRight':
            case 'bottomRight':
              u.offset[0] = d.dropdownArrowOffset + a;
              break;
            case 'leftTop':
            case 'rightTop':
              u.offset[1] = -d.dropdownArrowOffset - a;
              break;
            case 'leftBottom':
            case 'rightBottom':
              u.offset[1] = d.dropdownArrowOffset + a;
              break;
          }
        u.overflow = k1(s, d, t, n);
      }),
      l
    );
  }
  const U1 = (e) => {
      const {
        componentCls: t,
        tooltipMaxWidth: n,
        tooltipColor: r,
        tooltipBg: o,
        tooltipBorderRadius: i,
        zIndexPopup: a,
        controlHeight: l,
        boxShadowSecondary: s,
        paddingSM: c,
        paddingXS: u,
        tooltipRadiusOuter: d,
      } = e;
      return [
        {
          [t]: Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, ln(e)), {
                position: 'absolute',
                zIndex: a,
                display: 'block',
                width: 'max-content',
                maxWidth: n,
                visibility: 'visible',
                '&-hidden': { display: 'none' },
                '--antd-arrow-background-color': o,
                [`${t}-inner`]: {
                  minWidth: l,
                  minHeight: l,
                  padding: `${c / 2}px ${u}px`,
                  color: r,
                  textAlign: 'start',
                  textDecoration: 'none',
                  wordWrap: 'break-word',
                  backgroundColor: o,
                  borderRadius: i,
                  boxShadow: s,
                },
                [[
                  '&-placement-left',
                  '&-placement-leftTop',
                  '&-placement-leftBottom',
                  '&-placement-right',
                  '&-placement-rightTop',
                  '&-placement-rightBottom',
                ].join(',')]: { [`${t}-inner`]: { borderRadius: Math.min(i, pf) } },
                [`${t}-content`]: { position: 'relative' },
              }),
              Jh(e, (f, g) => {
                let { darkColor: h } = g;
                return {
                  [`&${t}-${f}`]: {
                    [`${t}-inner`]: { backgroundColor: h },
                    [`${t}-arrow`]: { '--antd-arrow-background-color': h },
                  },
                };
              }),
            ),
            { '&-rtl': { direction: 'rtl' } },
          ),
        },
        H1(it(e, { borderRadiusOuter: d }), {
          colorBg: 'var(--antd-arrow-background-color)',
          contentRadius: i,
          limitVerticalRadius: !0,
        }),
        { [`${t}-pure`]: { position: 'relative', maxWidth: 'none', margin: e.sizePopupArrow } },
      ];
    },
    bf = (e, t) =>
      jt(
        'Tooltip',
        (r) => {
          if (t === !1) return [];
          const { borderRadius: o, colorTextLightSolid: i, colorBgDefault: a, borderRadiusOuter: l } = r,
            s = it(r, {
              tooltipMaxWidth: 250,
              tooltipColor: i,
              tooltipBorderRadius: o,
              tooltipBg: a,
              tooltipRadiusOuter: l > 4 ? 4 : l,
            });
          return [U1(s), Tb(r, 'zoom-big-fast')];
        },
        (r) => {
          let { zIndexPopupBase: o, colorBgSpotlight: i } = r;
          return { zIndexPopup: o + 70, colorBgDefault: i };
        },
      )(e),
    G1 = ei.map((e) => `${e}-inverse`);
  function K1(e) {
    return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0)
      ? [].concat(fe(G1), fe(ei)).includes(e)
      : ei.includes(e);
  }
  function yf(e, t) {
    const n = K1(t),
      r = Q({ [`${e}-${t}`]: t && n }),
      o = {},
      i = {};
    return (
      t && !n && ((o.background = t), (i['--antd-arrow-background-color'] = t)),
      { className: r, overlayStyle: o, arrowStyle: i }
    );
  }
  function X1(e) {
    const { prefixCls: t, className: n, placement: r = 'top', title: o, color: i, overlayInnerStyle: a } = e,
      { getPrefixCls: l } = he(qe),
      s = l('tooltip', t),
      [c, u] = bf(s, !0),
      d = yf(s, i),
      f = Object.assign(Object.assign({}, a), d.overlayStyle),
      g = d.arrowStyle;
    return c(
      m.createElement(
        'div',
        { className: Q(u, s, `${s}-pure`, `${s}-placement-${r}`, n, d.className), style: g },
        m.createElement('div', { className: `${s}-arrow` }),
        m.createElement(gf, Object.assign({}, e, { className: u, prefixCls: s, overlayInnerStyle: f }), o),
      ),
    );
  }
  var q1 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const { useToken: Y1 } = L1,
    Q1 = (e, t) => {
      const n = {},
        r = Object.assign({}, e);
      return (
        t.forEach((o) => {
          e && o in e && ((n[o] = e[o]), delete r[o]);
        }),
        { picked: n, omitted: r }
      );
    };
  function J1(e, t) {
    const n = e.type;
    if (
      ((n.__ANT_BUTTON === !0 || e.type === 'button') && e.props.disabled) ||
      (n.__ANT_SWITCH === !0 && (e.props.disabled || e.props.loading)) ||
      (n.__ANT_RADIO === !0 && e.props.disabled)
    ) {
      const { picked: r, omitted: o } = Q1(e.props.style, [
          'position',
          'left',
          'right',
          'top',
          'bottom',
          'float',
          'display',
          'zIndex',
        ]),
        i = Object.assign(Object.assign({ display: 'inline-block' }, r), {
          cursor: 'not-allowed',
          width: e.props.block ? '100%' : void 0,
        }),
        a = Object.assign(Object.assign({}, o), { pointerEvents: 'none' }),
        l = hr(e, { style: a, className: null });
      return m.createElement(
        'span',
        { style: i, className: Q(e.props.className, `${t}-disabled-compatible-wrapper`) },
        l,
      );
    }
    return e;
  }
  const Sf = ye((e, t) => {
    var n, r;
    const {
        prefixCls: o,
        openClassName: i,
        getTooltipContainer: a,
        overlayClassName: l,
        color: s,
        overlayInnerStyle: c,
        children: u,
        afterOpenChange: d,
        afterVisibleChange: f,
        destroyTooltipOnHide: g,
        arrow: h = !0,
      } = e,
      p = !!h,
      { token: y } = Y1(),
      { getPopupContainer: b, getPrefixCls: S, direction: x } = he(qe),
      _ = L(null),
      R = () => {
        var k;
        (k = _.current) === null || k === void 0 || k.forceAlign();
      };
    bt(t, () => ({
      forceAlign: R,
      forcePopupAlign: () => {
        R();
      },
    }));
    const [O, v] = yn(!1, {
        value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
        defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible,
      }),
      C = () => {
        const { title: k, overlay: de } = e;
        return !k && !de && k !== 0;
      },
      $ = (k) => {
        var de, me;
        v(C() ? !1 : k),
          C() ||
            ((de = e.onOpenChange) === null || de === void 0 || de.call(e, k),
            (me = e.onVisibleChange) === null || me === void 0 || me.call(e, k));
      },
      E = () => {
        var k, de;
        const { builtinPlacements: me, arrowPointAtCenter: be = !1, autoAdjustOverflow: q = !0 } = e;
        let H = be;
        return (
          typeof h == 'object' &&
            (H =
              (de = (k = h.pointAtCenter) !== null && k !== void 0 ? k : h.arrowPointAtCenter) !== null && de !== void 0
                ? de
                : be),
          me ||
            W1({
              arrowPointAtCenter: H,
              autoAdjustOverflow: q,
              arrowWidth: p ? y.sizePopupArrow : 0,
              borderRadius: y.borderRadius,
              offset: y.marginXXS,
            })
        );
      },
      T = (k, de) => {
        const me = E(),
          be = Object.keys(me).find((q) => {
            var H, ue;
            return (
              me[q].points[0] === ((H = de.points) === null || H === void 0 ? void 0 : H[0]) &&
              me[q].points[1] === ((ue = de.points) === null || ue === void 0 ? void 0 : ue[1])
            );
          });
        if (be) {
          const q = k.getBoundingClientRect(),
            H = { top: '50%', left: '50%' };
          /top|Bottom/.test(be)
            ? (H.top = `${q.height - de.offset[1]}px`)
            : /Top|bottom/.test(be) && (H.top = `${-de.offset[1]}px`),
            /left|Right/.test(be)
              ? (H.left = `${q.width - de.offset[0]}px`)
              : /right|Left/.test(be) && (H.left = `${-de.offset[0]}px`),
            (k.style.transformOrigin = `${H.left} ${H.top}`);
        }
      },
      P = () => {
        const { title: k, overlay: de } = e;
        return k === 0 ? k : de || k || '';
      },
      {
        getPopupContainer: w,
        placement: I = 'top',
        mouseEnterDelay: M = 0.1,
        mouseLeaveDelay: N = 0.1,
        overlayStyle: A,
        rootClassName: D,
      } = e,
      j = q1(e, [
        'getPopupContainer',
        'placement',
        'mouseEnterDelay',
        'mouseLeaveDelay',
        'overlayStyle',
        'rootClassName',
      ]),
      B = S('tooltip', o),
      X = S(),
      Y = e['data-popover-inject'];
    let z = O;
    !('open' in e) && !('visible' in e) && C() && (z = !1);
    const Z = J1(Jr(u) && !a0(u) ? u : m.createElement('span', null, u), B),
      J = Z.props,
      K = !J.className || typeof J.className == 'string' ? Q(J.className, { [i || `${B}-open`]: !0 }) : J.className,
      [W, ae] = bf(B, !Y),
      ce = yf(B, s),
      xe = Object.assign(Object.assign({}, c), ce.overlayStyle),
      ve = ce.arrowStyle,
      se = Q(l, { [`${B}-rtl`]: x === 'rtl' }, ce.className, D, ae);
    return W(
      m.createElement(
        M1,
        Object.assign({}, j, {
          showArrow: p,
          placement: I,
          mouseEnterDelay: M,
          mouseLeaveDelay: N,
          prefixCls: B,
          overlayClassName: se,
          overlayStyle: Object.assign(Object.assign({}, ve), A),
          getTooltipContainer: w || a || b,
          ref: _,
          builtinPlacements: E(),
          overlay: P(),
          visible: z,
          onVisibleChange: $,
          afterVisibleChange: d ?? f,
          onPopupAlign: T,
          overlayInnerStyle: xe,
          arrowContent: m.createElement('span', { className: `${B}-arrow-content` }),
          motion: { motionName: yi(X, 'zoom-big-fast', e.transitionName), motionDeadline: 1e3 },
          destroyTooltipOnHide: !!g,
        }),
        z ? hr(Z, { className: K }) : Z,
      ),
    );
  });
  Sf._InternalPanelDoNotUseOrYouWillBeFired = X1;
  const Pi = Sf;
  var Z1 = {
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
  const eS = Z1;
  var Cf = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: eS }));
  };
  Cf.displayName = 'RightOutlined';
  const tS = ye(Cf);
  var nS = {
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
  const rS = nS;
  var xf = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: rS }));
  };
  xf.displayName = 'LeftOutlined';
  const oS = ye(xf),
    wf = () => {
      const [e, t] = oe(!1);
      return (
        pe(() => {
          t(rb());
        }, []),
        e
      );
    };
  function iS(e) {
    let { className: t, direction: n, index: r, marginDirection: o, children: i, split: a, wrap: l } = e;
    const { horizontalSize: s, verticalSize: c, latestIndex: u, supportFlexGap: d } = he($f);
    let f = {};
    return (
      d ||
        (n === 'vertical'
          ? r < u && (f = { marginBottom: s / (a ? 2 : 1) })
          : (f = Object.assign(Object.assign({}, r < u && { [o]: s / (a ? 2 : 1) }), l && { paddingBottom: c }))),
      i == null
        ? null
        : m.createElement(
            m.Fragment,
            null,
            m.createElement('div', { className: t, style: f }, i),
            r < u && a && m.createElement('span', { className: `${t}-split`, style: f }, a),
          )
    );
  }
  var aS =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const $f = m.createContext({ latestIndex: 0, horizontalSize: 0, verticalSize: 0, supportFlexGap: !1 }),
    lS = { small: 8, middle: 16, large: 24 };
  function sS(e) {
    return typeof e == 'string' ? lS[e] : e || 0;
  }
  const Ef = (e) => {
    const { getPrefixCls: t, space: n, direction: r } = he(qe),
      {
        size: o = (n == null ? void 0 : n.size) || 'small',
        align: i,
        className: a,
        rootClassName: l,
        children: s,
        direction: c = 'horizontal',
        prefixCls: u,
        split: d,
        style: f,
        wrap: g = !1,
      } = e,
      h = aS(e, [
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
      p = wf(),
      [y, b] = le(() => (Array.isArray(o) ? o : [o, o]).map((I) => sS(I)), [o]),
      S = mn(s, { keepEmpty: !0 }),
      x = i === void 0 && c === 'horizontal' ? 'center' : i,
      _ = t('space', u),
      [R, O] = id(_),
      v = Q(_, O, `${_}-${c}`, { [`${_}-rtl`]: r === 'rtl', [`${_}-align-${x}`]: x }, a, l),
      C = `${_}-item`,
      $ = r === 'rtl' ? 'marginLeft' : 'marginRight';
    let E = 0;
    const T = S.map((I, M) => {
        I != null && (E = M);
        const N = (I && I.key) || `${C}-${M}`;
        return m.createElement(
          iS,
          { className: C, key: N, direction: c, index: M, marginDirection: $, split: d, wrap: g },
          I,
        );
      }),
      P = le(() => ({ horizontalSize: y, verticalSize: b, latestIndex: E, supportFlexGap: p }), [y, b, E, p]);
    if (S.length === 0) return null;
    const w = {};
    return (
      g && ((w.flexWrap = 'wrap'), p || (w.marginBottom = -b)),
      p && ((w.columnGap = y), (w.rowGap = b)),
      R(
        m.createElement(
          'div',
          Object.assign({ className: v, style: Object.assign(Object.assign({}, w), f) }, h),
          m.createElement($f.Provider, { value: P }, T),
        ),
      )
    );
  };
  Ef.Compact = D0;
  const Of = Ef,
    cS = (e) => ({
      '&::-moz-placeholder': { opacity: 1 },
      '&::placeholder': { color: e, userSelect: 'none' },
      '&:placeholder-shown': { textOverflow: 'ellipsis' },
    }),
    Ml = (e) => ({ borderColor: e.inputBorderHoverColor, borderInlineEndWidth: e.lineWidth }),
    Nl = (e) => ({
      borderColor: e.inputBorderHoverColor,
      boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
      borderInlineEndWidth: e.lineWidth,
      outline: 0,
    }),
    _f = (e) => ({
      color: e.colorTextDisabled,
      backgroundColor: e.colorBgContainerDisabled,
      borderColor: e.colorBorder,
      boxShadow: 'none',
      cursor: 'not-allowed',
      opacity: 1,
      '&:hover': Object.assign({}, Ml(it(e, { inputBorderHoverColor: e.colorBorder }))),
    }),
    If = (e) => {
      const {
        inputPaddingVerticalLG: t,
        fontSizeLG: n,
        lineHeightLG: r,
        borderRadiusLG: o,
        inputPaddingHorizontalLG: i,
      } = e;
      return { padding: `${t}px ${i}px`, fontSize: n, lineHeight: r, borderRadius: o };
    },
    Fl = (e) => ({
      padding: `${e.inputPaddingVerticalSM}px ${e.controlPaddingHorizontalSM - 1}px`,
      borderRadius: e.borderRadiusSM,
    }),
    Pf = (e, t) => {
      const {
        componentCls: n,
        colorError: r,
        colorWarning: o,
        colorErrorOutline: i,
        colorWarningOutline: a,
        colorErrorBorderHover: l,
        colorWarningBorderHover: s,
      } = e;
      return {
        [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
          borderColor: r,
          '&:hover': { borderColor: l },
          '&:focus, &-focused': Object.assign(
            {},
            Nl(it(e, { inputBorderActiveColor: r, inputBorderHoverColor: r, controlOutline: i })),
          ),
          [`${n}-prefix, ${n}-suffix`]: { color: r },
        },
        [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
          borderColor: o,
          '&:hover': { borderColor: s },
          '&:focus, &-focused': Object.assign(
            {},
            Nl(it(e, { inputBorderActiveColor: o, inputBorderHoverColor: o, controlOutline: a })),
          ),
          [`${n}-prefix, ${n}-suffix`]: { color: o },
        },
      };
    },
    Al = (e) =>
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
          cS(e.colorTextPlaceholder),
        ),
        {
          '&:hover': Object.assign({}, Ml(e)),
          '&:focus, &-focused': Object.assign({}, Nl(e)),
          '&-disabled, &[disabled]': Object.assign({}, _f(e)),
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
          '&-lg': Object.assign({}, If(e)),
          '&-sm': Object.assign({}, Fl(e)),
          '&-rtl': { direction: 'rtl' },
          '&-textarea-rtl': { direction: 'rtl' },
        },
      ),
    uS = (e) => {
      const { componentCls: t, antCls: n } = e;
      return {
        position: 'relative',
        display: 'table',
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        ["&[class*='col-']"]: { paddingInlineEnd: e.paddingXS, '&:last-child': { paddingInlineEnd: 0 } },
        [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, If(e)),
        [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, Fl(e)),
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
        [`&${t}-group-compact`]: Object.assign(Object.assign({ display: 'block' }, ev()), {
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
    dS = (e) => {
      const { componentCls: t, controlHeightSM: n, lineWidth: r } = e,
        o = 16,
        i = (n - r * 2 - o) / 2;
      return {
        [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, ln(e)), Al(e)), Pf(e, t)), {
          '&[type="color"]': {
            height: e.controlHeight,
            [`&${t}-lg`]: { height: e.controlHeightLG },
            [`&${t}-sm`]: { height: n, paddingTop: i, paddingBottom: i },
          },
          '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
            '-webkit-appearance': 'none',
          },
        }),
      };
    },
    fS = (e) => {
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
    mS = (e) => {
      const {
        componentCls: t,
        inputAffixPadding: n,
        colorTextDescription: r,
        motionDurationSlow: o,
        colorIcon: i,
        colorIconHover: a,
        iconCls: l,
      } = e;
      return {
        [`${t}-affix-wrapper`]: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, Al(e)), {
                display: 'inline-flex',
                [`&:not(${t}-affix-wrapper-disabled):hover`]: Object.assign(Object.assign({}, Ml(e)), {
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
              fS(e),
            ),
            {
              [`${l}${t}-password-icon`]: {
                color: i,
                cursor: 'pointer',
                transition: `all ${o}`,
                '&:hover': { color: a },
              },
            },
          ),
          Pf(e, `${t}-affix-wrapper`),
        ),
      };
    },
    gS = (e) => {
      const { componentCls: t, colorError: n, colorWarning: r, borderRadiusLG: o, borderRadiusSM: i } = e;
      return {
        [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, ln(e)), uS(e)), {
          '&-rtl': { direction: 'rtl' },
          '&-wrapper': {
            display: 'inline-block',
            width: '100%',
            textAlign: 'start',
            verticalAlign: 'top',
            '&-rtl': { direction: 'rtl' },
            '&-lg': { [`${t}-group-addon`]: { borderRadius: o } },
            '&-sm': { [`${t}-group-addon`]: { borderRadius: i } },
            '&-status-error': { [`${t}-group-addon`]: { color: n, borderColor: n } },
            '&-status-warning': { [`${t}-group-addon`]: { color: r, borderColor: r } },
            '&-disabled': { [`${t}-group-addon`]: Object.assign({}, _f(e)) },
          },
        }),
      };
    },
    pS = (e) => {
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
  function zl(e) {
    return it(e, {
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
  const hS = (e) => {
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
    vS = jt('Input', (e) => {
      const t = zl(e);
      return [dS(t), hS(t), mS(t), gS(t), pS(t), ld(t)];
    });
  function bS(e, t, n) {
    var r = n || {},
      o = r.noTrailing,
      i = o === void 0 ? !1 : o,
      a = r.noLeading,
      l = a === void 0 ? !1 : a,
      s = r.debounceMode,
      c = s === void 0 ? void 0 : s,
      u,
      d = !1,
      f = 0;
    function g() {
      u && clearTimeout(u);
    }
    function h(y) {
      var b = y || {},
        S = b.upcomingOnly,
        x = S === void 0 ? !1 : S;
      g(), (d = !x);
    }
    function p() {
      for (var y = arguments.length, b = new Array(y), S = 0; S < y; S++) b[S] = arguments[S];
      var x = this,
        _ = Date.now() - f;
      if (d) return;
      function R() {
        (f = Date.now()), t.apply(x, b);
      }
      function O() {
        u = void 0;
      }
      !l && c && !u && R(),
        g(),
        c === void 0 && _ > e
          ? l
            ? ((f = Date.now()), i || (u = setTimeout(c ? O : R, e)))
            : R()
          : i !== !0 && (u = setTimeout(c ? O : R, c === void 0 ? e - _ : e));
    }
    return (p.cancel = h), p;
  }
  function yS(e, t, n) {
    var r = n || {},
      o = r.atBegin,
      i = o === void 0 ? !1 : o;
    return bS(e, t, { debounceMode: i !== !1 });
  }
  const Rf = m.createContext({}),
    SS = (e) => {
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
    CS = (e) => {
      const { componentCls: t } = e;
      return { [t]: { position: 'relative', maxWidth: '100%', minHeight: 1 } };
    },
    xS = (e, t) => {
      const { componentCls: n, gridColumns: r } = e,
        o = {};
      for (let i = r; i >= 0; i--)
        i === 0
          ? ((o[`${n}${t}-${i}`] = { display: 'none' }),
            (o[`${n}-push-${i}`] = { insetInlineStart: 'auto' }),
            (o[`${n}-pull-${i}`] = { insetInlineEnd: 'auto' }),
            (o[`${n}${t}-push-${i}`] = { insetInlineStart: 'auto' }),
            (o[`${n}${t}-pull-${i}`] = { insetInlineEnd: 'auto' }),
            (o[`${n}${t}-offset-${i}`] = { marginInlineEnd: 0 }),
            (o[`${n}${t}-order-${i}`] = { order: 0 }))
          : ((o[`${n}${t}-${i}`] = { display: 'block', flex: `0 0 ${(i / r) * 100}%`, maxWidth: `${(i / r) * 100}%` }),
            (o[`${n}${t}-push-${i}`] = { insetInlineStart: `${(i / r) * 100}%` }),
            (o[`${n}${t}-pull-${i}`] = { insetInlineEnd: `${(i / r) * 100}%` }),
            (o[`${n}${t}-offset-${i}`] = { marginInlineStart: `${(i / r) * 100}%` }),
            (o[`${n}${t}-order-${i}`] = { order: i }));
      return o;
    },
    Dl = (e, t) => xS(e, t),
    wS = (e, t, n) => ({ [`@media (min-width: ${t}px)`]: Object.assign({}, Dl(e, n)) }),
    $S = jt('Grid', (e) => [SS(e)]),
    ES = jt('Grid', (e) => {
      const t = it(e, { gridColumns: 24 }),
        n = {
          '-sm': t.screenSMMin,
          '-md': t.screenMDMin,
          '-lg': t.screenLGMin,
          '-xl': t.screenXLMin,
          '-xxl': t.screenXXLMin,
        };
      return [
        CS(t),
        Dl(t, ''),
        Dl(t, '-xs'),
        Object.keys(n)
          .map((r) => wS(t, n[r], r))
          .reduce((r, o) => Object.assign(Object.assign({}, r), o), {}),
      ];
    });
  var OS =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  function _S(e) {
    return typeof e == 'number' ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
  }
  const IS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    PS = ye((e, t) => {
      const { getPrefixCls: n, direction: r } = he(qe),
        { gutter: o, wrap: i, supportFlexGap: a } = he(Rf),
        {
          prefixCls: l,
          span: s,
          order: c,
          offset: u,
          push: d,
          pull: f,
          className: g,
          children: h,
          flex: p,
          style: y,
        } = e,
        b = OS(e, ['prefixCls', 'span', 'order', 'offset', 'push', 'pull', 'className', 'children', 'flex', 'style']),
        S = n('col', l),
        [x, _] = ES(S);
      let R = {};
      IS.forEach((C) => {
        let $ = {};
        const E = e[C];
        typeof E == 'number' ? ($.span = E) : typeof E == 'object' && ($ = E || {}),
          delete b[C],
          (R = Object.assign(Object.assign({}, R), {
            [`${S}-${C}-${$.span}`]: $.span !== void 0,
            [`${S}-${C}-order-${$.order}`]: $.order || $.order === 0,
            [`${S}-${C}-offset-${$.offset}`]: $.offset || $.offset === 0,
            [`${S}-${C}-push-${$.push}`]: $.push || $.push === 0,
            [`${S}-${C}-pull-${$.pull}`]: $.pull || $.pull === 0,
            [`${S}-rtl`]: r === 'rtl',
          }));
      });
      const O = Q(
          S,
          {
            [`${S}-${s}`]: s !== void 0,
            [`${S}-order-${c}`]: c,
            [`${S}-offset-${u}`]: u,
            [`${S}-push-${d}`]: d,
            [`${S}-pull-${f}`]: f,
          },
          g,
          R,
          _,
        ),
        v = {};
      if (o && o[0] > 0) {
        const C = o[0] / 2;
        (v.paddingLeft = C), (v.paddingRight = C);
      }
      if (o && o[1] > 0 && !a) {
        const C = o[1] / 2;
        (v.paddingTop = C), (v.paddingBottom = C);
      }
      return (
        p && ((v.flex = _S(p)), i === !1 && !v.minWidth && (v.minWidth = 0)),
        x(
          m.createElement(
            'div',
            Object.assign({}, b, { style: Object.assign(Object.assign({}, v), y), className: O, ref: t }),
            h,
          ),
        )
      );
    });
  var RS =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  function Tf(e, t) {
    const [n, r] = oe(typeof e == 'string' ? e : ''),
      o = () => {
        if ((typeof e == 'string' && r(e), typeof e == 'object'))
          for (let i = 0; i < Wn.length; i++) {
            const a = Wn[i];
            if (!t[a]) continue;
            const l = e[a];
            if (l !== void 0) {
              r(l);
              return;
            }
          }
      };
    return (
      pe(() => {
        o();
      }, [JSON.stringify(e), t]),
      n
    );
  }
  const TS = ye((e, t) => {
      const { prefixCls: n, justify: r, align: o, className: i, style: a, children: l, gutter: s = 0, wrap: c } = e,
        u = RS(e, ['prefixCls', 'justify', 'align', 'className', 'style', 'children', 'gutter', 'wrap']),
        { getPrefixCls: d, direction: f } = he(qe),
        [g, h] = oe({ xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 }),
        [p, y] = oe({ xs: !1, sm: !1, md: !1, lg: !1, xl: !1, xxl: !1 }),
        b = Tf(o, p),
        S = Tf(r, p),
        x = wf(),
        _ = L(s),
        R = ff();
      pe(() => {
        const D = R.subscribe((j) => {
          y(j);
          const B = _.current || 0;
          ((!Array.isArray(B) && typeof B == 'object') ||
            (Array.isArray(B) && (typeof B[0] == 'object' || typeof B[1] == 'object'))) &&
            h(j);
        });
        return () => R.unsubscribe(D);
      }, []);
      const O = () => {
          const D = [void 0, void 0];
          return (
            (Array.isArray(s) ? s : [s, void 0]).forEach((B, X) => {
              if (typeof B == 'object')
                for (let Y = 0; Y < Wn.length; Y++) {
                  const z = Wn[Y];
                  if (g[z] && B[z] !== void 0) {
                    D[X] = B[z];
                    break;
                  }
                }
              else D[X] = B;
            }),
            D
          );
        },
        v = d('row', n),
        [C, $] = $S(v),
        E = O(),
        T = Q(v, { [`${v}-no-wrap`]: c === !1, [`${v}-${S}`]: S, [`${v}-${b}`]: b, [`${v}-rtl`]: f === 'rtl' }, i, $),
        P = {},
        w = E[0] != null && E[0] > 0 ? E[0] / -2 : void 0,
        I = E[1] != null && E[1] > 0 ? E[1] / -2 : void 0;
      w && ((P.marginLeft = w), (P.marginRight = w)),
        x ? ([, P.rowGap] = E) : I && ((P.marginTop = I), (P.marginBottom = I));
      const [M, N] = E,
        A = le(() => ({ gutter: [M, N], wrap: c, supportFlexGap: x }), [M, N, c, x]);
      return C(
        m.createElement(
          Rf.Provider,
          { value: A },
          m.createElement(
            'div',
            Object.assign({}, u, { className: T, style: Object.assign(Object.assign({}, P), a), ref: t }),
            l,
          ),
        ),
      );
    }),
    MS = (e) => {
      const { componentCls: t, sizePaddingEdgeHorizontal: n, colorSplit: r, lineWidth: o } = e;
      return {
        [t]: Object.assign(Object.assign({}, ln(e)), {
          borderBlockStart: `${o}px solid ${r}`,
          '&-vertical': {
            position: 'relative',
            top: '-0.06em',
            display: 'inline-block',
            height: '0.9em',
            margin: `0 ${e.dividerVerticalGutterMargin}px`,
            verticalAlign: 'middle',
            borderTop: 0,
            borderInlineStart: `${o}px solid ${r}`,
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
              borderBlockStart: `${o}px solid transparent`,
              borderBlockStartColor: 'inherit',
              borderBlockEnd: 0,
              transform: 'translateY(50%)',
              content: "''",
            },
          },
          [`&-horizontal${t}-with-text-left`]: { '&::before': { width: '5%' }, '&::after': { width: '95%' } },
          [`&-horizontal${t}-with-text-right`]: { '&::before': { width: '95%' }, '&::after': { width: '5%' } },
          [`${t}-inner-text`]: { display: 'inline-block', padding: '0 1em' },
          '&-dashed': { background: 'none', borderColor: r, borderStyle: 'dashed', borderWidth: `${o}px 0 0` },
          [`&-horizontal${t}-with-text${t}-dashed`]: { '&::before, &::after': { borderStyle: 'dashed none none' } },
          [`&-vertical${t}-dashed`]: {
            borderInlineStart: o,
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
    NS = jt(
      'Divider',
      (e) => {
        const t = it(e, {
          dividerVerticalGutterMargin: e.marginXS,
          dividerHorizontalWithTextGutterMargin: e.margin,
          dividerHorizontalGutterMargin: e.marginLG,
        });
        return [MS(t)];
      },
      { sizePaddingEdgeHorizontal: 0 },
    );
  var FS =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const Mf = (e) => {
    const { getPrefixCls: t, direction: n } = he(qe),
      {
        prefixCls: r,
        type: o = 'horizontal',
        orientation: i = 'center',
        orientationMargin: a,
        className: l,
        rootClassName: s,
        children: c,
        dashed: u,
        plain: d,
      } = e,
      f = FS(e, [
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
      g = t('divider', r),
      [h, p] = NS(g),
      y = i.length > 0 ? `-${i}` : i,
      b = !!c,
      S = i === 'left' && a != null,
      x = i === 'right' && a != null,
      _ = Q(
        g,
        p,
        `${g}-${o}`,
        {
          [`${g}-with-text`]: b,
          [`${g}-with-text${y}`]: b,
          [`${g}-dashed`]: !!u,
          [`${g}-plain`]: !!d,
          [`${g}-rtl`]: n === 'rtl',
          [`${g}-no-default-orientation-margin-left`]: S,
          [`${g}-no-default-orientation-margin-right`]: x,
        },
        l,
        s,
      ),
      R = Object.assign(Object.assign({}, S && { marginLeft: a }), x && { marginRight: a });
    return h(
      m.createElement(
        'div',
        Object.assign({ className: _ }, f, { role: 'separator' }),
        c && o !== 'vertical' && m.createElement('span', { className: `${g}-inner-text`, style: R }, c),
      ),
    );
  };
  var AS = function (t) {
      var n = t.prefixCls,
        r = t.className,
        o = t.style,
        i = t.children,
        a = t.containerRef;
      return m.createElement(
        m.Fragment,
        null,
        m.createElement(
          'div',
          { className: Q(''.concat(n, '-content'), r), style: F({}, o), 'aria-modal': 'true', role: 'dialog', ref: a },
          i,
        ),
      );
    },
    Nf = m.createContext(null);
  function Ff(e) {
    return typeof e == 'string' && String(Number(e)) === e
      ? (Qt(!1, 'Invalid value type of `width` or `height` which should be number type instead.'), Number(e))
      : e;
  }
  var Af = { width: 0, height: 0, overflow: 'hidden', outline: 'none', position: 'absolute' };
  function zS(e, t) {
    var n,
      r,
      o,
      i,
      a = e.prefixCls,
      l = e.open,
      s = e.placement,
      c = e.inline,
      u = e.push,
      d = e.forceRender,
      f = e.autoFocus,
      g = e.keyboard,
      h = e.rootClassName,
      p = e.rootStyle,
      y = e.zIndex,
      b = e.className,
      S = e.style,
      x = e.motion,
      _ = e.width,
      R = e.height,
      O = e.children,
      v = e.contentWrapperStyle,
      C = e.mask,
      $ = e.maskClosable,
      E = e.maskMotion,
      T = e.maskClassName,
      P = e.maskStyle,
      w = e.afterOpenChange,
      I = e.onClose,
      M = L(),
      N = L(),
      A = L();
    bt(t, function () {
      return M.current;
    });
    var D = function (k) {
      var de = k.keyCode,
        me = k.shiftKey;
      switch (de) {
        case U.TAB: {
          if (de === U.TAB) {
            if (!me && document.activeElement === A.current) {
              var be;
              (be = N.current) === null || be === void 0 || be.focus({ preventScroll: !0 });
            } else if (me && document.activeElement === N.current) {
              var q;
              (q = A.current) === null || q === void 0 || q.focus({ preventScroll: !0 });
            }
          }
          break;
        }
        case U.ESC: {
          I && g && (k.stopPropagation(), I(k));
          break;
        }
      }
    };
    pe(
      function () {
        if (l && f) {
          var se;
          (se = M.current) === null || se === void 0 || se.focus({ preventScroll: !0 });
        }
      },
      [l],
    );
    var j = oe(!1),
      B = V(j, 2),
      X = B[0],
      Y = B[1],
      z = he(Nf),
      Z;
    u === !1 ? (Z = { distance: 0 }) : u === !0 ? (Z = {}) : (Z = u || {});
    var J =
        (n =
          (r = (o = Z) === null || o === void 0 ? void 0 : o.distance) !== null && r !== void 0
            ? r
            : z == null
            ? void 0
            : z.pushDistance) !== null && n !== void 0
          ? n
          : 180,
      K = le(
        function () {
          return {
            pushDistance: J,
            push: function () {
              Y(!0);
            },
            pull: function () {
              Y(!1);
            },
          };
        },
        [J],
      );
    pe(
      function () {
        if (l) {
          var se;
          z == null || (se = z.push) === null || se === void 0 || se.call(z);
        } else {
          var k;
          z == null || (k = z.pull) === null || k === void 0 || k.call(z);
        }
      },
      [l],
    ),
      pe(function () {
        return function () {
          var se;
          z == null || (se = z.pull) === null || se === void 0 || se.call(z);
        };
      }, []);
    var W =
        C &&
        m.createElement(Qr, Ne({ key: 'mask' }, E, { visible: l }), function (se, k) {
          var de = se.className,
            me = se.style;
          return m.createElement('div', {
            className: Q(''.concat(a, '-mask'), de, T),
            style: F(F({}, me), P),
            onClick: $ && l ? I : void 0,
            ref: k,
          });
        }),
      ae = typeof x == 'function' ? x(s) : x,
      ce = {};
    if (X && J)
      switch (s) {
        case 'top':
          ce.transform = 'translateY('.concat(J, 'px)');
          break;
        case 'bottom':
          ce.transform = 'translateY('.concat(-J, 'px)');
          break;
        case 'left':
          ce.transform = 'translateX('.concat(J, 'px)');
          break;
        default:
          ce.transform = 'translateX('.concat(-J, 'px)');
          break;
      }
    s === 'left' || s === 'right' ? (ce.width = Ff(_)) : (ce.height = Ff(R));
    var xe = m.createElement(
        Qr,
        Ne({ key: 'panel' }, ae, {
          visible: l,
          forceRender: d,
          onVisibleChanged: function (k) {
            w == null || w(k);
          },
          removeOnLeave: !1,
          leavedClassName: ''.concat(a, '-content-wrapper-hidden'),
        }),
        function (se, k) {
          var de = se.className,
            me = se.style;
          return m.createElement(
            'div',
            { className: Q(''.concat(a, '-content-wrapper'), de), style: F(F(F({}, ce), me), v) },
            m.createElement(AS, { containerRef: k, prefixCls: a, className: b, style: S }, O),
          );
        },
      ),
      ve = F({}, p);
    return (
      y && (ve.zIndex = y),
      m.createElement(
        Nf.Provider,
        { value: K },
        m.createElement(
          'div',
          {
            className: Q(
              a,
              ''.concat(a, '-').concat(s),
              h,
              ((i = {}), ee(i, ''.concat(a, '-open'), l), ee(i, ''.concat(a, '-inline'), c), i),
            ),
            style: ve,
            tabIndex: -1,
            ref: M,
            onKeyDown: D,
          },
          W,
          m.createElement('div', { tabIndex: 0, ref: N, style: Af, 'aria-hidden': 'true', 'data-sentinel': 'start' }),
          xe,
          m.createElement('div', { tabIndex: 0, ref: A, style: Af, 'aria-hidden': 'true', 'data-sentinel': 'end' }),
        ),
      )
    );
  }
  var DS = ye(zS),
    jS = function (t) {
      var n = t.open,
        r = n === void 0 ? !1 : n,
        o = t.prefixCls,
        i = o === void 0 ? 'rc-drawer' : o,
        a = t.placement,
        l = a === void 0 ? 'right' : a,
        s = t.autoFocus,
        c = s === void 0 ? !0 : s,
        u = t.keyboard,
        d = u === void 0 ? !0 : u,
        f = t.width,
        g = f === void 0 ? 378 : f,
        h = t.mask,
        p = h === void 0 ? !0 : h,
        y = t.maskClosable,
        b = y === void 0 ? !0 : y,
        S = t.getContainer,
        x = t.forceRender,
        _ = t.afterOpenChange,
        R = t.destroyOnClose,
        O = oe(!1),
        v = V(O, 2),
        C = v[0],
        $ = v[1],
        E = L(),
        T = L();
      tt(
        function () {
          r && (T.current = document.activeElement);
        },
        [r],
      );
      var P = function (M) {
        var N;
        if (
          ($(M),
          _ == null || _(M),
          !M && T.current && !(!((N = E.current) === null || N === void 0) && N.contains(T.current)))
        ) {
          var A;
          (A = T.current) === null || A === void 0 || A.focus();
        }
      };
      if (!x && !C && !r && R) return null;
      var w = F(
        F({}, t),
        {},
        {
          open: r,
          prefixCls: i,
          placement: l,
          autoFocus: c,
          keyboard: d,
          width: g,
          mask: p,
          maskClosable: b,
          inline: S === !1,
          afterOpenChange: P,
          ref: E,
        },
      );
      return m.createElement(
        hl,
        { open: r || x || C, autoDestroy: !1, getContainer: S, autoLock: p && (r || C) },
        m.createElement(DS, w),
      );
    };
  function zf(e) {
    const {
        prefixCls: t,
        title: n,
        footer: r,
        extra: o,
        closable: i = !0,
        closeIcon: a = m.createElement(il, null),
        onClose: l,
        headerStyle: s,
        drawerStyle: c,
        bodyStyle: u,
        footerStyle: d,
        children: f,
      } = e,
      g =
        i &&
        m.createElement('button', { type: 'button', onClick: l, 'aria-label': 'Close', className: `${t}-close` }, a);
    function h() {
      return !n && !i
        ? null
        : m.createElement(
            'div',
            { className: Q(`${t}-header`, { [`${t}-header-close-only`]: i && !n && !o }), style: s },
            m.createElement(
              'div',
              { className: `${t}-header-title` },
              g,
              n && m.createElement('div', { className: `${t}-title` }, n),
            ),
            o && m.createElement('div', { className: `${t}-extra` }, o),
          );
    }
    function p() {
      if (!r) return null;
      const y = `${t}-footer`;
      return m.createElement('div', { className: y, style: d }, r);
    }
    return m.createElement(
      'div',
      { className: `${t}-wrapper-body`, style: Object.assign({}, c) },
      h(),
      m.createElement('div', { className: `${t}-body`, style: u }, f),
      p(),
    );
  }
  const LS = (e) => {
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
    HS = (e) => {
      const {
          componentCls: t,
          zIndexPopup: n,
          colorBgMask: r,
          colorBgElevated: o,
          motionDurationSlow: i,
          motionDurationMid: a,
          padding: l,
          paddingLG: s,
          fontSizeLG: c,
          lineHeightLG: u,
          lineWidth: d,
          lineType: f,
          colorSplit: g,
          marginSM: h,
          colorIcon: p,
          colorIconHover: y,
          colorText: b,
          fontWeightStrong: S,
          drawerFooterPaddingVertical: x,
          drawerFooterPaddingHorizontal: _,
        } = e,
        R = `${t}-content-wrapper`;
      return {
        [t]: {
          position: 'fixed',
          inset: 0,
          zIndex: n,
          pointerEvents: 'none',
          '&-pure': {
            position: 'relative',
            background: o,
            [`&${t}-left`]: { boxShadow: e.boxShadowDrawerLeft },
            [`&${t}-right`]: { boxShadow: e.boxShadowDrawerRight },
            [`&${t}-top`]: { boxShadow: e.boxShadowDrawerUp },
            [`&${t}-bottom`]: { boxShadow: e.boxShadowDrawerDown },
          },
          '&-inline': { position: 'absolute' },
          [`${t}-mask`]: { position: 'absolute', inset: 0, zIndex: n, background: r, pointerEvents: 'auto' },
          [R]: { position: 'absolute', zIndex: n, transition: `all ${i}`, '&-hidden': { display: 'none' } },
          [`&-left > ${R}`]: {
            top: 0,
            bottom: 0,
            left: { _skip_check_: !0, value: 0 },
            boxShadow: e.boxShadowDrawerLeft,
          },
          [`&-right > ${R}`]: {
            top: 0,
            right: { _skip_check_: !0, value: 0 },
            bottom: 0,
            boxShadow: e.boxShadowDrawerRight,
          },
          [`&-top > ${R}`]: { top: 0, insetInline: 0, boxShadow: e.boxShadowDrawerUp },
          [`&-bottom > ${R}`]: { bottom: 0, insetInline: 0, boxShadow: e.boxShadowDrawerDown },
          [`${t}-content`]: { width: '100%', height: '100%', overflow: 'auto', background: o, pointerEvents: 'auto' },
          [`${t}-wrapper-body`]: { display: 'flex', flexDirection: 'column', width: '100%', height: '100%' },
          [`${t}-header`]: {
            display: 'flex',
            flex: 0,
            alignItems: 'center',
            padding: `${l}px ${s}px`,
            fontSize: c,
            lineHeight: u,
            borderBottom: `${d}px ${f} ${g}`,
            '&-title': { display: 'flex', flex: 1, alignItems: 'center', minWidth: 0, minHeight: 0 },
          },
          [`${t}-extra`]: { flex: 'none' },
          [`${t}-close`]: {
            display: 'inline-block',
            marginInlineEnd: h,
            color: p,
            fontWeight: S,
            fontSize: c,
            fontStyle: 'normal',
            lineHeight: 1,
            textAlign: 'center',
            textTransform: 'none',
            textDecoration: 'none',
            background: 'transparent',
            border: 0,
            outline: 0,
            cursor: 'pointer',
            transition: `color ${a}`,
            textRendering: 'auto',
            '&:focus, &:hover': { color: y, textDecoration: 'none' },
          },
          [`${t}-title`]: { flex: 1, margin: 0, color: b, fontWeight: e.fontWeightStrong, fontSize: c, lineHeight: u },
          [`${t}-body`]: { flex: 1, minWidth: 0, minHeight: 0, padding: s, overflow: 'auto' },
          [`${t}-footer`]: { flexShrink: 0, padding: `${x}px ${_}px`, borderTop: `${d}px ${f} ${g}` },
          '&-rtl': { direction: 'rtl' },
        },
      };
    },
    Df = jt(
      'Drawer',
      (e) => {
        const t = it(e, { drawerFooterPaddingVertical: e.paddingXS, drawerFooterPaddingHorizontal: e.padding });
        return [HS(t), LS(t)];
      },
      (e) => ({ zIndexPopup: e.zIndexPopupBase }),
    );
  var jf =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const kS = { distance: 180 };
  function jl(e) {
    const {
        rootClassName: t,
        width: n,
        height: r,
        size: o = 'default',
        mask: i = !0,
        push: a = kS,
        open: l,
        afterOpenChange: s,
        onClose: c,
        prefixCls: u,
        getContainer: d,
        visible: f,
        afterVisibleChange: g,
      } = e,
      h = jf(e, [
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
      { getPopupContainer: p, getPrefixCls: y, direction: b } = he(qe),
      S = y('drawer', u),
      [x, _] = Df(S),
      R = d === void 0 && p ? () => p(document.body) : d,
      O = Q({ 'no-mask': !i, [`${S}-rtl`]: b === 'rtl' }, t, _),
      v = le(() => n ?? (o === 'large' ? 736 : 378), [n, o]),
      C = le(() => r ?? (o === 'large' ? 736 : 378), [r, o]),
      $ = { motionName: yi(S, 'mask-motion'), motionAppear: !0, motionEnter: !0, motionLeave: !0, motionDeadline: 500 },
      E = (T) => ({
        motionName: yi(S, `panel-motion-${T}`),
        motionAppear: !0,
        motionEnter: !0,
        motionLeave: !0,
        motionDeadline: 500,
      });
    return x(
      m.createElement(
        A0,
        null,
        m.createElement(
          eb,
          { status: !0, override: !0 },
          m.createElement(
            jS,
            Object.assign({ prefixCls: S, onClose: c, maskMotion: $, motion: E }, h, {
              open: l ?? f,
              mask: i,
              push: a,
              width: v,
              height: C,
              rootClassName: O,
              getContainer: R,
              afterOpenChange: s ?? g,
            }),
            m.createElement(zf, Object.assign({ prefixCls: S }, h, { onClose: c })),
          ),
        ),
      ),
    );
  }
  function VS(e) {
    var { prefixCls: t, style: n, className: r, placement: o = 'right' } = e,
      i = jf(e, ['prefixCls', 'style', 'className', 'placement']);
    const { getPrefixCls: a } = he(qe),
      l = a('drawer', t),
      [s, c] = Df(l);
    return s(
      m.createElement(
        'div',
        { className: Q(l, `${l}-pure`, `${l}-${o}`, c, r), style: n },
        m.createElement(zf, Object.assign({ prefixCls: l }, i)),
      ),
    );
  }
  jl._InternalPanelDoNotUseOrYouWillBeFired = VS;
  function Ll(e) {
    return !!(e.addonBefore || e.addonAfter);
  }
  function BS(e) {
    return !!(e.prefix || e.suffix || e.allowClear);
  }
  function Hl(e, t, n, r) {
    if (n) {
      var o = t;
      if (t.type === 'click') {
        var i = e.cloneNode(!0);
        (o = Object.create(t, { target: { value: i }, currentTarget: { value: i } })), (i.value = ''), n(o);
        return;
      }
      if (r !== void 0) {
        (o = Object.create(t, { target: { value: e }, currentTarget: { value: e } })), (e.value = r), n(o);
        return;
      }
      n(o);
    }
  }
  function WS(e) {
    return typeof e > 'u' || e === null ? '' : String(e);
  }
  var US = function (t) {
    var n,
      r = t.inputElement,
      o = t.prefixCls,
      i = t.prefix,
      a = t.suffix,
      l = t.addonBefore,
      s = t.addonAfter,
      c = t.className,
      u = t.style,
      d = t.affixWrapperClassName,
      f = t.groupClassName,
      g = t.wrapperClassName,
      h = t.disabled,
      p = t.readOnly,
      y = t.focused,
      b = t.triggerFocus,
      S = t.allowClear,
      x = t.value,
      _ = t.handleReset,
      R = t.hidden,
      O = t.inputStyle,
      v = t.classes,
      C = L(null),
      $ = function (X) {
        var Y;
        (Y = C.current) !== null && Y !== void 0 && Y.contains(X.target) && (b == null || b());
      },
      E = function () {
        var X;
        if (!S) return null;
        var Y = !h && !p && x,
          z = ''.concat(o, '-clear-icon'),
          Z = De(S) === 'object' && S !== null && S !== void 0 && S.clearIcon ? S.clearIcon : '✖';
        return ie.createElement(
          'span',
          {
            onClick: _,
            onMouseDown: function (K) {
              return K.preventDefault();
            },
            className: Q(z, ((X = {}), ee(X, ''.concat(z, '-hidden'), !Y), ee(X, ''.concat(z, '-has-suffix'), !!a), X)),
            role: 'button',
            tabIndex: -1,
          },
          Z,
        );
      },
      T = gt(r, { value: x, hidden: R, style: F(F({}, (n = r.props) === null || n === void 0 ? void 0 : n.style), O) });
    if (BS(t)) {
      var P,
        w = ''.concat(o, '-affix-wrapper'),
        I = Q(
          w,
          ((P = {}),
          ee(P, ''.concat(w, '-disabled'), h),
          ee(P, ''.concat(w, '-focused'), y),
          ee(P, ''.concat(w, '-readonly'), p),
          ee(P, ''.concat(w, '-input-with-clear-btn'), a && S && x),
          P),
          !Ll(t) && c,
          d,
          v == null ? void 0 : v.affixWrapper,
        ),
        M = (a || S) && ie.createElement('span', { className: ''.concat(o, '-suffix') }, E(), a);
      T = ie.createElement(
        'span',
        { className: I, style: u, hidden: !Ll(t) && R, onClick: $, ref: C },
        i && ie.createElement('span', { className: ''.concat(o, '-prefix') }, i),
        gt(r, { style: O ?? null, value: x, hidden: null }),
        M,
      );
    }
    if (Ll(t)) {
      var N = ''.concat(o, '-group'),
        A = ''.concat(N, '-addon'),
        D = Q(''.concat(o, '-wrapper'), N, g, v == null ? void 0 : v.wrapper),
        j = Q(''.concat(o, '-group-wrapper'), c, f, v == null ? void 0 : v.group);
      return ie.createElement(
        'span',
        { className: j, style: u, hidden: R },
        ie.createElement(
          'span',
          { className: D },
          l && ie.createElement('span', { className: A }, l),
          gt(T, { style: O ?? null, hidden: null }),
          s && ie.createElement('span', { className: A }, s),
        ),
      );
    }
    return T;
  };
  globalThis && globalThis.__rest;
  function GS(e, t) {
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
  var KS = `
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
    XS = [
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
    kl = {},
    tn;
  function qS(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      n = e.getAttribute('id') || e.getAttribute('data-reactid') || e.getAttribute('name');
    if (t && kl[n]) return kl[n];
    var r = window.getComputedStyle(e),
      o =
        r.getPropertyValue('box-sizing') ||
        r.getPropertyValue('-moz-box-sizing') ||
        r.getPropertyValue('-webkit-box-sizing'),
      i = parseFloat(r.getPropertyValue('padding-bottom')) + parseFloat(r.getPropertyValue('padding-top')),
      a = parseFloat(r.getPropertyValue('border-bottom-width')) + parseFloat(r.getPropertyValue('border-top-width')),
      l = XS.map(function (c) {
        return ''.concat(c, ':').concat(r.getPropertyValue(c));
      }).join(';'),
      s = { sizingStyle: l, paddingSize: i, borderSize: a, boxSizing: o };
    return t && n && (kl[n] = s), s;
  }
  function YS(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
      r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    tn ||
      ((tn = document.createElement('textarea')),
      tn.setAttribute('tab-index', '-1'),
      tn.setAttribute('aria-hidden', 'true'),
      document.body.appendChild(tn)),
      e.getAttribute('wrap') ? tn.setAttribute('wrap', e.getAttribute('wrap')) : tn.removeAttribute('wrap');
    var o = qS(e, t),
      i = o.paddingSize,
      a = o.borderSize,
      l = o.boxSizing,
      s = o.sizingStyle;
    tn.setAttribute('style', ''.concat(s, ';').concat(KS)), (tn.value = e.value || e.placeholder || '');
    var c = void 0,
      u = void 0,
      d,
      f = tn.scrollHeight;
    if ((l === 'border-box' ? (f += a) : l === 'content-box' && (f -= i), n !== null || r !== null)) {
      tn.value = ' ';
      var g = tn.scrollHeight - i;
      n !== null && ((c = g * n), l === 'border-box' && (c = c + i + a), (f = Math.max(c, f))),
        r !== null &&
          ((u = g * r), l === 'border-box' && (u = u + i + a), (d = f > u ? '' : 'hidden'), (f = Math.min(u, f)));
    }
    var h = { height: f, overflowY: d, resize: 'none' };
    return c && (h.minHeight = c), u && (h.maxHeight = u), h;
  }
  var QS = [
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
    Vl = 0,
    Bl = 1,
    Wl = 2,
    JS = ye(function (e, t) {
      var n = e,
        r = n.prefixCls;
      n.onPressEnter;
      var o = n.defaultValue,
        i = n.value,
        a = n.autoSize,
        l = n.onResize,
        s = n.className,
        c = n.style,
        u = n.disabled,
        d = n.onChange;
      n.onInternalAutoSize;
      var f = rt(n, QS),
        g = yn(o, {
          value: i,
          postState: function (Z) {
            return Z ?? '';
          },
        }),
        h = V(g, 2),
        p = h[0],
        y = h[1],
        b = function (Z) {
          y(Z.target.value), d == null || d(Z);
        },
        S = L();
      bt(t, function () {
        return { textArea: S.current };
      });
      var x = le(
          function () {
            return a && De(a) === 'object' ? [a.minRows, a.maxRows] : [];
          },
          [a],
        ),
        _ = V(x, 2),
        R = _[0],
        O = _[1],
        v = !!a,
        C = function () {
          try {
            if (document.activeElement === S.current) {
              var Z = S.current,
                J = Z.selectionStart,
                K = Z.selectionEnd,
                W = Z.scrollTop;
              S.current.setSelectionRange(J, K), (S.current.scrollTop = W);
            }
          } catch {}
        },
        $ = oe(Wl),
        E = V($, 2),
        T = E[0],
        P = E[1],
        w = oe(),
        I = V(w, 2),
        M = I[0],
        N = I[1],
        A = function () {
          P(Vl);
        };
      tt(
        function () {
          v && A();
        },
        [i, R, O, v],
      ),
        tt(
          function () {
            if (T === Vl) P(Bl);
            else if (T === Bl) {
              var z = YS(S.current, !1, R, O);
              P(Wl), N(z);
            } else C();
          },
          [T],
        );
      var D = L(),
        j = function () {
          Pt.cancel(D.current);
        },
        B = function (Z) {
          T === Wl &&
            (l == null || l(Z),
            a &&
              (j(),
              (D.current = Pt(function () {
                A();
              }))));
        };
      pe(function () {
        return j;
      }, []);
      var X = v ? M : null,
        Y = F(F({}, c), X);
      return (
        (T === Vl || T === Bl) && ((Y.overflowY = 'hidden'), (Y.overflowX = 'hidden')),
        m.createElement(
          $n,
          { onResize: B, disabled: !(a || l) },
          m.createElement(
            'textarea',
            Ne({}, f, {
              ref: S,
              style: Y,
              className: Q(r, s, ee({}, ''.concat(r, '-disabled'), u)),
              disabled: u,
              value: p,
              onChange: b,
            }),
          ),
        )
      );
    }),
    ZS = [
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
  function Lf(e, t) {
    return fe(e || '')
      .slice(0, t)
      .join('');
  }
  function Hf(e, t, n, r) {
    var o = n;
    return e ? (o = Lf(n, r)) : fe(t || '').length < n.length && fe(n || '').length > r && (o = t), o;
  }
  var eC = ie.forwardRef(function (e, t) {
      var n = e.defaultValue,
        r = e.value,
        o = e.onChange,
        i = e.allowClear,
        a = e.maxLength,
        l = e.onCompositionStart,
        s = e.onCompositionEnd,
        c = e.suffix,
        u = e.prefixCls,
        d = u === void 0 ? 'rc-textarea' : u,
        f = e.classes,
        g = e.showCount,
        h = e.className,
        p = e.style,
        y = e.disabled,
        b = rt(e, ZS),
        S = yn(n, { value: r, defaultValue: n }),
        x = V(S, 2),
        _ = x[0],
        R = x[1],
        O = L(null),
        v = ie.useState(!1),
        C = V(v, 2),
        $ = C[0],
        E = C[1],
        T = ie.useRef(),
        P = ie.useRef(0),
        w = function () {
          O.current.textArea.focus();
        };
      bt(t, function () {
        return {
          resizableTextArea: O.current,
          focus: w,
          blur: function () {
            O.current.textArea.blur();
          },
        };
      });
      var I = Number(a) > 0,
        M = function (J) {
          E(!0), (T.current = _), (P.current = J.currentTarget.selectionStart), l == null || l(J);
        },
        N = function (J) {
          E(!1);
          var K = J.currentTarget.value;
          if (I) {
            var W,
              ae = P.current >= a + 1 || P.current === ((W = T.current) === null || W === void 0 ? void 0 : W.length);
            K = Hf(ae, T.current, K, a);
          }
          K !== _ && (R(K), Hl(J.currentTarget, J, o, K)), s == null || s(J);
        },
        A = function (J) {
          var K = J.target.value;
          if (!$ && I) {
            var W =
              J.target.selectionStart >= a + 1 || J.target.selectionStart === K.length || !J.target.selectionStart;
            K = Hf(W, _, K, a);
          }
          R(K), Hl(J.currentTarget, J, o, K);
        },
        D = function (J) {
          var K = b.onPressEnter,
            W = b.onKeyDown;
          J.key === 'Enter' && K && K(J), W == null || W(J);
        },
        j = function (J) {
          R(''), w(), Hl(O.current.textArea, J, o);
        },
        B = WS(_);
      !$ && I && r == null && (B = Lf(B, a));
      var X = ie.createElement(US, {
        value: B,
        allowClear: i,
        handleReset: j,
        suffix: c,
        prefixCls: d,
        classes: { affixWrapper: f == null ? void 0 : f.affixWrapper },
        disabled: y,
        style: p,
        inputStyle: { resize: p == null ? void 0 : p.resize },
        inputElement: ie.createElement(
          JS,
          Ne({}, b, {
            onKeyDown: D,
            onChange: A,
            onCompositionStart: M,
            onCompositionEnd: N,
            className: Q(g ? '' : h, f == null ? void 0 : f.textarea),
            style: !g && p,
            disabled: y,
            prefixCls: d,
            ref: O,
          }),
        ),
      });
      if (g) {
        var Y = fe(B).length,
          z;
        return (
          De(g) === 'object'
            ? (z = g.formatter({ value: B, count: Y, maxLength: a }))
            : (z = ''.concat(Y).concat(I ? ' / '.concat(a) : '')),
          ie.createElement(
            'div',
            {
              hidden: b.hidden,
              className: Q(''.concat(d, '-show-count'), h, f == null ? void 0 : f.countWrapper),
              style: p,
              'data-count': z,
            },
            X,
            ie.createElement('span', { className: ''.concat(d, '-data-count') }, z),
          )
        );
      }
      return X;
    }),
    tC =
      (globalThis && globalThis.__rest) ||
      function (e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
          for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
        return n;
      };
  const nC = ye((e, t) => {
    var { prefixCls: n, bordered: r = !0, size: o, disabled: i, status: a, allowClear: l } = e,
      s = tC(e, ['prefixCls', 'bordered', 'size', 'disabled', 'status', 'allowClear']);
    const { getPrefixCls: c, direction: u } = he(qe),
      d = he(qr),
      f = o || d,
      g = he(Za),
      h = i ?? g,
      { status: p, hasFeedback: y, feedbackIcon: b } = he(Ci),
      S = rf(p, a),
      x = L(null);
    bt(t, () => {
      var C;
      return {
        resizableTextArea: (C = x.current) === null || C === void 0 ? void 0 : C.resizableTextArea,
        focus: ($) => {
          var E, T;
          GS(
            (T = (E = x.current) === null || E === void 0 ? void 0 : E.resizableTextArea) === null || T === void 0
              ? void 0
              : T.textArea,
            $,
          );
        },
        blur: () => {
          var $;
          return ($ = x.current) === null || $ === void 0 ? void 0 : $.blur();
        },
      };
    });
    const _ = c('input', n);
    let R;
    typeof l == 'object' && l != null && l.clearIcon ? (R = l) : l && (R = { clearIcon: m.createElement(ol, null) });
    const [O, v] = vS(_);
    return O(
      m.createElement(
        eC,
        Object.assign({}, s, {
          disabled: h,
          allowClear: R,
          classes: {
            affixWrapper: Q(
              `${_}-textarea-affix-wrapper`,
              {
                [`${_}-affix-wrapper-rtl`]: u === 'rtl',
                [`${_}-affix-wrapper-borderless`]: !r,
                [`${_}-affix-wrapper-sm`]: f === 'small',
                [`${_}-affix-wrapper-lg`]: f === 'large',
              },
              Il(`${_}-affix-wrapper`, S),
              v,
            ),
            countWrapper: Q(`${_}-textarea`, `${_}-textarea-show-count`, v),
            textarea: Q(
              { [`${_}-borderless`]: !r, [`${_}-sm`]: f === 'small', [`${_}-lg`]: f === 'large' },
              Il(_, S),
              v,
            ),
          },
          prefixCls: _,
          suffix: y && m.createElement('span', { className: `${_}-textarea-suffix` }, b),
          ref: x,
        }),
      ),
    );
  });
  var rC = {
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
  const oC = rC;
  var kf = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: oC }));
  };
  kf.displayName = 'DoubleLeftOutlined';
  const iC = ye(kf);
  var aC = {
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
  const lC = aC;
  var Vf = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: lC }));
  };
  Vf.displayName = 'DoubleRightOutlined';
  const sC = ye(Vf);
  var ro = function (t) {
    var n,
      r = ''.concat(t.rootPrefixCls, '-item'),
      o = Q(
        r,
        ''.concat(r, '-').concat(t.page),
        ((n = {}),
        ee(n, ''.concat(r, '-active'), t.active),
        ee(n, ''.concat(r, '-disabled'), !t.page),
        ee(n, t.className, !!t.className),
        n),
      ),
      i = function () {
        t.onClick(t.page);
      },
      a = function (s) {
        t.onKeyPress(s, t.onClick, t.page);
      };
    return ie.createElement(
      'li',
      { title: t.showTitle ? t.page : null, className: o, onClick: i, onKeyPress: a, tabIndex: '0' },
      t.itemRender(t.page, 'page', ie.createElement('a', { rel: 'nofollow' }, t.page)),
    );
  };
  const Un = {
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
  var Bf = (function (e) {
    Fn(n, e);
    var t = An(n);
    function n() {
      var r;
      zt(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      return (
        (r = t.call.apply(t, [this].concat(i))),
        (r.state = { goInputText: '' }),
        (r.buildOptionText = function (l) {
          return ''.concat(l, ' ').concat(r.props.locale.items_per_page);
        }),
        (r.changeSize = function (l) {
          r.props.changeSize(Number(l));
        }),
        (r.handleChange = function (l) {
          r.setState({ goInputText: l.target.value });
        }),
        (r.handleBlur = function (l) {
          var s = r.props,
            c = s.goButton,
            u = s.quickGo,
            d = s.rootPrefixCls,
            f = r.state.goInputText;
          c ||
            f === '' ||
            (r.setState({ goInputText: '' }),
            !(
              l.relatedTarget &&
              (l.relatedTarget.className.indexOf(''.concat(d, '-item-link')) >= 0 ||
                l.relatedTarget.className.indexOf(''.concat(d, '-item')) >= 0)
            ) && u(r.getValidValue()));
        }),
        (r.go = function (l) {
          var s = r.state.goInputText;
          s !== '' &&
            (l.keyCode === Un.ENTER || l.type === 'click') &&
            (r.setState({ goInputText: '' }), r.props.quickGo(r.getValidValue()));
        }),
        r
      );
    }
    return (
      Dt(n, [
        {
          key: 'getValidValue',
          value: function () {
            var o = this.state.goInputText;
            return !o || isNaN(o) ? void 0 : Number(o);
          },
        },
        {
          key: 'getPageSizeOptions',
          value: function () {
            var o = this.props,
              i = o.pageSize,
              a = o.pageSizeOptions;
            return a.some(function (l) {
              return l.toString() === i.toString();
            })
              ? a
              : a.concat([i.toString()]).sort(function (l, s) {
                  var c = isNaN(Number(l)) ? 0 : Number(l),
                    u = isNaN(Number(s)) ? 0 : Number(s);
                  return c - u;
                });
          },
        },
        {
          key: 'render',
          value: function () {
            var o = this,
              i = this.props,
              a = i.pageSize,
              l = i.locale,
              s = i.rootPrefixCls,
              c = i.changeSize,
              u = i.quickGo,
              d = i.goButton,
              f = i.selectComponentClass,
              g = i.buildOptionText,
              h = i.selectPrefixCls,
              p = i.disabled,
              y = this.state.goInputText,
              b = ''.concat(s, '-options'),
              S = f,
              x = null,
              _ = null,
              R = null;
            if (!c && !u) return null;
            var O = this.getPageSizeOptions();
            if (c && S) {
              var v = O.map(function (C, $) {
                return ie.createElement(S.Option, { key: $, value: C.toString() }, (g || o.buildOptionText)(C));
              });
              x = ie.createElement(
                S,
                {
                  disabled: p,
                  prefixCls: h,
                  showSearch: !1,
                  className: ''.concat(b, '-size-changer'),
                  optionLabelProp: 'children',
                  dropdownMatchSelectWidth: !1,
                  value: (a || O[0]).toString(),
                  onChange: this.changeSize,
                  getPopupContainer: function ($) {
                    return $.parentNode;
                  },
                  'aria-label': l.page_size,
                  defaultOpen: !1,
                },
                v,
              );
            }
            return (
              u &&
                (d &&
                  (R =
                    typeof d == 'boolean'
                      ? ie.createElement(
                          'button',
                          {
                            type: 'button',
                            onClick: this.go,
                            onKeyUp: this.go,
                            disabled: p,
                            className: ''.concat(b, '-quick-jumper-button'),
                          },
                          l.jump_to_confirm,
                        )
                      : ie.createElement('span', { onClick: this.go, onKeyUp: this.go }, d)),
                (_ = ie.createElement(
                  'div',
                  { className: ''.concat(b, '-quick-jumper') },
                  l.jump_to,
                  ie.createElement('input', {
                    disabled: p,
                    type: 'text',
                    value: y,
                    onChange: this.handleChange,
                    onKeyUp: this.go,
                    onBlur: this.handleBlur,
                    'aria-label': l.page,
                  }),
                  l.page,
                  R,
                ))),
              ie.createElement('li', { className: ''.concat(b) }, x, _)
            );
          },
        },
      ]),
      n
    );
  })(ie.Component);
  Bf.defaultProps = { pageSizeOptions: ['10', '20', '50', '100'] };
  const cC = {
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
  function Ul() {}
  function Wf(e) {
    var t = Number(e);
    return typeof t == 'number' && !isNaN(t) && isFinite(t) && Math.floor(t) === t;
  }
  function uC(e, t, n) {
    return n;
  }
  function Tn(e, t, n) {
    var r = typeof e > 'u' ? t.pageSize : e;
    return Math.floor((n.total - 1) / r) + 1;
  }
  var Uf = (function (e) {
    Fn(n, e);
    var t = An(n);
    function n(r) {
      var o;
      zt(this, n),
        (o = t.call(this, r)),
        (o.getJumpPrevPage = function () {
          return Math.max(1, o.state.current - (o.props.showLessItems ? 3 : 5));
        }),
        (o.getJumpNextPage = function () {
          return Math.min(Tn(void 0, o.state, o.props), o.state.current + (o.props.showLessItems ? 3 : 5));
        }),
        (o.getItemIcon = function (c, u) {
          var d = o.props.prefixCls,
            f =
              c ||
              ie.createElement('button', { type: 'button', 'aria-label': u, className: ''.concat(d, '-item-link') });
          return typeof c == 'function' && (f = ie.createElement(c, F({}, o.props))), f;
        }),
        (o.savePaginationNode = function (c) {
          o.paginationNode = c;
        }),
        (o.isValid = function (c) {
          var u = o.props.total;
          return Wf(c) && c !== o.state.current && Wf(u) && u > 0;
        }),
        (o.shouldDisplayQuickJumper = function () {
          var c = o.props,
            u = c.showQuickJumper,
            d = c.total,
            f = o.state.pageSize;
          return d <= f ? !1 : u;
        }),
        (o.handleKeyDown = function (c) {
          (c.keyCode === Un.ARROW_UP || c.keyCode === Un.ARROW_DOWN) && c.preventDefault();
        }),
        (o.handleKeyUp = function (c) {
          var u = o.getValidValue(c),
            d = o.state.currentInputValue;
          u !== d && o.setState({ currentInputValue: u }),
            c.keyCode === Un.ENTER
              ? o.handleChange(u)
              : c.keyCode === Un.ARROW_UP
              ? o.handleChange(u - 1)
              : c.keyCode === Un.ARROW_DOWN && o.handleChange(u + 1);
        }),
        (o.handleBlur = function (c) {
          var u = o.getValidValue(c);
          o.handleChange(u);
        }),
        (o.changePageSize = function (c) {
          var u = o.state.current,
            d = Tn(c, o.state, o.props);
          (u = u > d ? d : u),
            d === 0 && (u = o.state.current),
            typeof c == 'number' &&
              ('pageSize' in o.props || o.setState({ pageSize: c }),
              'current' in o.props || o.setState({ current: u, currentInputValue: u })),
            o.props.onShowSizeChange(u, c),
            'onChange' in o.props && o.props.onChange && o.props.onChange(u, c);
        }),
        (o.handleChange = function (c) {
          var u = o.props,
            d = u.disabled,
            f = u.onChange,
            g = o.state,
            h = g.pageSize,
            p = g.current,
            y = g.currentInputValue;
          if (o.isValid(c) && !d) {
            var b = Tn(void 0, o.state, o.props),
              S = c;
            return (
              c > b ? (S = b) : c < 1 && (S = 1),
              'current' in o.props || o.setState({ current: S }),
              S !== y && o.setState({ currentInputValue: S }),
              f(S, h),
              S
            );
          }
          return p;
        }),
        (o.prev = function () {
          o.hasPrev() && o.handleChange(o.state.current - 1);
        }),
        (o.next = function () {
          o.hasNext() && o.handleChange(o.state.current + 1);
        }),
        (o.jumpPrev = function () {
          o.handleChange(o.getJumpPrevPage());
        }),
        (o.jumpNext = function () {
          o.handleChange(o.getJumpNextPage());
        }),
        (o.hasPrev = function () {
          return o.state.current > 1;
        }),
        (o.hasNext = function () {
          return o.state.current < Tn(void 0, o.state, o.props);
        }),
        (o.runIfEnter = function (c, u) {
          if (c.key === 'Enter' || c.charCode === 13) {
            for (var d = arguments.length, f = new Array(d > 2 ? d - 2 : 0), g = 2; g < d; g++) f[g - 2] = arguments[g];
            u.apply(void 0, f);
          }
        }),
        (o.runIfEnterPrev = function (c) {
          o.runIfEnter(c, o.prev);
        }),
        (o.runIfEnterNext = function (c) {
          o.runIfEnter(c, o.next);
        }),
        (o.runIfEnterJumpPrev = function (c) {
          o.runIfEnter(c, o.jumpPrev);
        }),
        (o.runIfEnterJumpNext = function (c) {
          o.runIfEnter(c, o.jumpNext);
        }),
        (o.handleGoTO = function (c) {
          (c.keyCode === Un.ENTER || c.type === 'click') && o.handleChange(o.state.currentInputValue);
        });
      var i = r.onChange !== Ul,
        a = 'current' in r;
      a &&
        !i &&
        console.warn(
          'Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.',
        );
      var l = r.defaultCurrent;
      'current' in r && (l = r.current);
      var s = r.defaultPageSize;
      return (
        'pageSize' in r && (s = r.pageSize),
        (l = Math.min(l, Tn(s, void 0, r))),
        (o.state = { current: l, currentInputValue: l, pageSize: s }),
        o
      );
    }
    return (
      Dt(
        n,
        [
          {
            key: 'componentDidUpdate',
            value: function (o, i) {
              var a = this.props.prefixCls;
              if (i.current !== this.state.current && this.paginationNode) {
                var l = this.paginationNode.querySelector('.'.concat(a, '-item-').concat(i.current));
                l && document.activeElement === l && l.blur();
              }
            },
          },
          {
            key: 'getValidValue',
            value: function (o) {
              var i = o.target.value,
                a = Tn(void 0, this.state, this.props),
                l = this.state.currentInputValue,
                s;
              return i === '' ? (s = i) : isNaN(Number(i)) ? (s = l) : i >= a ? (s = a) : (s = Number(i)), s;
            },
          },
          {
            key: 'getShowSizeChanger',
            value: function () {
              var o = this.props,
                i = o.showSizeChanger,
                a = o.total,
                l = o.totalBoundaryShowSizeChanger;
              return typeof i < 'u' ? i : a > l;
            },
          },
          {
            key: 'renderPrev',
            value: function (o) {
              var i = this.props,
                a = i.prevIcon,
                l = i.itemRender,
                s = l(o, 'prev', this.getItemIcon(a, 'prev page')),
                c = !this.hasPrev();
              return kt(s) ? gt(s, { disabled: c }) : s;
            },
          },
          {
            key: 'renderNext',
            value: function (o) {
              var i = this.props,
                a = i.nextIcon,
                l = i.itemRender,
                s = l(o, 'next', this.getItemIcon(a, 'next page')),
                c = !this.hasNext();
              return kt(s) ? gt(s, { disabled: c }) : s;
            },
          },
          {
            key: 'render',
            value: function () {
              var o = this,
                i = this.props,
                a = i.prefixCls,
                l = i.className,
                s = i.style,
                c = i.disabled,
                u = i.hideOnSinglePage,
                d = i.total,
                f = i.locale,
                g = i.showQuickJumper,
                h = i.showLessItems,
                p = i.showTitle,
                y = i.showTotal,
                b = i.simple,
                S = i.itemRender,
                x = i.showPrevNextJumpers,
                _ = i.jumpPrevIcon,
                R = i.jumpNextIcon,
                O = i.selectComponentClass,
                v = i.selectPrefixCls,
                C = i.pageSizeOptions,
                $ = this.state,
                E = $.current,
                T = $.pageSize,
                P = $.currentInputValue;
              if (u === !0 && d <= T) return null;
              var w = Tn(void 0, this.state, this.props),
                I = [],
                M = null,
                N = null,
                A = null,
                D = null,
                j = null,
                B = g && g.goButton,
                X = h ? 1 : 2,
                Y = E - 1 > 0 ? E - 1 : 0,
                z = E + 1 < w ? E + 1 : w,
                Z = Object.keys(this.props).reduce(function (q, H) {
                  return (
                    (H.substr(0, 5) === 'data-' || H.substr(0, 5) === 'aria-' || H === 'role') && (q[H] = o.props[H]), q
                  );
                }, {}),
                J =
                  y &&
                  ie.createElement(
                    'li',
                    { className: ''.concat(a, '-total-text') },
                    y(d, [d === 0 ? 0 : (E - 1) * T + 1, E * T > d ? d : E * T]),
                  );
              if (b)
                return (
                  B &&
                    (typeof B == 'boolean'
                      ? (j = ie.createElement(
                          'button',
                          { type: 'button', onClick: this.handleGoTO, onKeyUp: this.handleGoTO },
                          f.jump_to_confirm,
                        ))
                      : (j = ie.createElement('span', { onClick: this.handleGoTO, onKeyUp: this.handleGoTO }, B)),
                    (j = ie.createElement(
                      'li',
                      {
                        title: p ? ''.concat(f.jump_to).concat(E, '/').concat(w) : null,
                        className: ''.concat(a, '-simple-pager'),
                      },
                      j,
                    ))),
                  ie.createElement(
                    'ul',
                    Ne(
                      {
                        className: Q(a, ''.concat(a, '-simple'), ee({}, ''.concat(a, '-disabled'), c), l),
                        style: s,
                        ref: this.savePaginationNode,
                      },
                      Z,
                    ),
                    J,
                    ie.createElement(
                      'li',
                      {
                        title: p ? f.prev_page : null,
                        onClick: this.prev,
                        tabIndex: this.hasPrev() ? 0 : null,
                        onKeyPress: this.runIfEnterPrev,
                        className: Q(''.concat(a, '-prev'), ee({}, ''.concat(a, '-disabled'), !this.hasPrev())),
                        'aria-disabled': !this.hasPrev(),
                      },
                      this.renderPrev(Y),
                    ),
                    ie.createElement(
                      'li',
                      { title: p ? ''.concat(E, '/').concat(w) : null, className: ''.concat(a, '-simple-pager') },
                      ie.createElement('input', {
                        type: 'text',
                        value: P,
                        disabled: c,
                        onKeyDown: this.handleKeyDown,
                        onKeyUp: this.handleKeyUp,
                        onChange: this.handleKeyUp,
                        onBlur: this.handleBlur,
                        size: '3',
                      }),
                      ie.createElement('span', { className: ''.concat(a, '-slash') }, '/'),
                      w,
                    ),
                    ie.createElement(
                      'li',
                      {
                        title: p ? f.next_page : null,
                        onClick: this.next,
                        tabIndex: this.hasPrev() ? 0 : null,
                        onKeyPress: this.runIfEnterNext,
                        className: Q(''.concat(a, '-next'), ee({}, ''.concat(a, '-disabled'), !this.hasNext())),
                        'aria-disabled': !this.hasNext(),
                      },
                      this.renderNext(z),
                    ),
                    j,
                  )
                );
              if (w <= 3 + X * 2) {
                var K = {
                  locale: f,
                  rootPrefixCls: a,
                  onClick: this.handleChange,
                  onKeyPress: this.runIfEnter,
                  showTitle: p,
                  itemRender: S,
                };
                w ||
                  I.push(
                    ie.createElement(
                      ro,
                      Ne({}, K, { key: 'noPager', page: 1, className: ''.concat(a, '-item-disabled') }),
                    ),
                  );
                for (var W = 1; W <= w; W += 1) {
                  var ae = E === W;
                  I.push(ie.createElement(ro, Ne({}, K, { key: W, page: W, active: ae })));
                }
              } else {
                var ce = h ? f.prev_3 : f.prev_5,
                  xe = h ? f.next_3 : f.next_5;
                x &&
                  ((M = ie.createElement(
                    'li',
                    {
                      title: p ? ce : null,
                      key: 'prev',
                      onClick: this.jumpPrev,
                      tabIndex: '0',
                      onKeyPress: this.runIfEnterJumpPrev,
                      className: Q(''.concat(a, '-jump-prev'), ee({}, ''.concat(a, '-jump-prev-custom-icon'), !!_)),
                    },
                    S(this.getJumpPrevPage(), 'jump-prev', this.getItemIcon(_, 'prev page')),
                  )),
                  (N = ie.createElement(
                    'li',
                    {
                      title: p ? xe : null,
                      key: 'next',
                      tabIndex: '0',
                      onClick: this.jumpNext,
                      onKeyPress: this.runIfEnterJumpNext,
                      className: Q(''.concat(a, '-jump-next'), ee({}, ''.concat(a, '-jump-next-custom-icon'), !!R)),
                    },
                    S(this.getJumpNextPage(), 'jump-next', this.getItemIcon(R, 'next page')),
                  ))),
                  (D = ie.createElement(ro, {
                    locale: f,
                    last: !0,
                    rootPrefixCls: a,
                    onClick: this.handleChange,
                    onKeyPress: this.runIfEnter,
                    key: w,
                    page: w,
                    active: !1,
                    showTitle: p,
                    itemRender: S,
                  })),
                  (A = ie.createElement(ro, {
                    locale: f,
                    rootPrefixCls: a,
                    onClick: this.handleChange,
                    onKeyPress: this.runIfEnter,
                    key: 1,
                    page: 1,
                    active: !1,
                    showTitle: p,
                    itemRender: S,
                  }));
                var ve = Math.max(1, E - X),
                  se = Math.min(E + X, w);
                E - 1 <= X && (se = 1 + X * 2), w - E <= X && (ve = w - X * 2);
                for (var k = ve; k <= se; k += 1) {
                  var de = E === k;
                  I.push(
                    ie.createElement(ro, {
                      locale: f,
                      rootPrefixCls: a,
                      onClick: this.handleChange,
                      onKeyPress: this.runIfEnter,
                      key: k,
                      page: k,
                      active: de,
                      showTitle: p,
                      itemRender: S,
                    }),
                  );
                }
                E - 1 >= X * 2 &&
                  E !== 1 + 2 &&
                  ((I[0] = gt(I[0], { className: ''.concat(a, '-item-after-jump-prev') })), I.unshift(M)),
                  w - E >= X * 2 &&
                    E !== w - 2 &&
                    ((I[I.length - 1] = gt(I[I.length - 1], { className: ''.concat(a, '-item-before-jump-next') })),
                    I.push(N)),
                  ve !== 1 && I.unshift(A),
                  se !== w && I.push(D);
              }
              var me = !this.hasPrev() || !w,
                be = !this.hasNext() || !w;
              return ie.createElement(
                'ul',
                Ne(
                  { className: Q(a, l, ee({}, ''.concat(a, '-disabled'), c)), style: s, ref: this.savePaginationNode },
                  Z,
                ),
                J,
                ie.createElement(
                  'li',
                  {
                    title: p ? f.prev_page : null,
                    onClick: this.prev,
                    tabIndex: me ? null : 0,
                    onKeyPress: this.runIfEnterPrev,
                    className: Q(''.concat(a, '-prev'), ee({}, ''.concat(a, '-disabled'), me)),
                    'aria-disabled': me,
                  },
                  this.renderPrev(Y),
                ),
                I,
                ie.createElement(
                  'li',
                  {
                    title: p ? f.next_page : null,
                    onClick: this.next,
                    tabIndex: be ? null : 0,
                    onKeyPress: this.runIfEnterNext,
                    className: Q(''.concat(a, '-next'), ee({}, ''.concat(a, '-disabled'), be)),
                    'aria-disabled': be,
                  },
                  this.renderNext(z),
                ),
                ie.createElement(Bf, {
                  disabled: c,
                  locale: f,
                  rootPrefixCls: a,
                  selectComponentClass: O,
                  selectPrefixCls: v,
                  changeSize: this.getShowSizeChanger() ? this.changePageSize : null,
                  current: E,
                  pageSize: T,
                  pageSizeOptions: C,
                  quickGo: this.shouldDisplayQuickJumper() ? this.handleChange : null,
                  goButton: B,
                }),
              );
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function (o, i) {
              var a = {};
              if (
                ('current' in o &&
                  ((a.current = o.current), o.current !== i.current && (a.currentInputValue = a.current)),
                'pageSize' in o && o.pageSize !== i.pageSize)
              ) {
                var l = i.current,
                  s = Tn(o.pageSize, i, o);
                (l = l > s ? s : l),
                  'current' in o || ((a.current = l), (a.currentInputValue = l)),
                  (a.pageSize = o.pageSize);
              }
              return a;
            },
          },
        ],
      ),
      n
    );
  })(ie.Component);
  Uf.defaultProps = {
    defaultCurrent: 1,
    total: 0,
    defaultPageSize: 10,
    onChange: Ul,
    className: '',
    selectPrefixCls: 'rc-select',
    prefixCls: 'rc-pagination',
    selectComponentClass: null,
    hideOnSinglePage: !1,
    showPrevNextJumpers: !0,
    showQuickJumper: !1,
    showLessItems: !1,
    showTitle: !0,
    onShowSizeChange: Ul,
    locale: cC,
    style: {},
    itemRender: uC,
    totalBoundaryShowSizeChanger: 50,
  };
  const Gf = (e) => m.createElement(_i, Object.assign({}, e, { size: 'small' })),
    Kf = (e) => m.createElement(_i, Object.assign({}, e, { size: 'middle' }));
  (Gf.Option = _i.Option), (Kf.Option = _i.Option);
  const dC = (e) => {
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
    fC = (e) => {
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
            input: Object.assign(Object.assign({}, Fl(e)), {
              width: e.paginationMiniQuickJumperInputWidth,
              height: e.controlHeightSM,
            }),
          },
        },
      };
    },
    mC = (e) => {
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
    gC = (e) => {
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
            qa(e),
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
          [`&:focus-visible ${t}-item-link`]: Object.assign({}, qa(e)),
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
            input: Object.assign(Object.assign({}, Al(e)), {
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
    pC = (e) => {
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
            rv(e),
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
    hC = (e) => {
      const { componentCls: t } = e;
      return {
        [t]: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(Object.assign({}, ln(e)), {
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
                    pC(e),
                  ),
                  gC(e),
                ),
                mC(e),
              ),
              fC(e),
            ),
            dC(e),
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
    vC = (e) => {
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
    bC = jt('Pagination', (e) => {
      const t = it(
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
        zl(e),
      );
      return [hC(t), e.wireframe && vC(t)];
    });
  var yC =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const SC = (e) => {
      var {
          prefixCls: t,
          selectPrefixCls: n,
          className: r,
          rootClassName: o,
          size: i,
          locale: a,
          selectComponentClass: l,
          responsive: s,
          showSizeChanger: c,
        } = e,
        u = yC(e, [
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
      const { xs: d } = mf(s),
        { getPrefixCls: f, direction: g, pagination: h = {} } = he(qe),
        p = f('pagination', t),
        [y, b] = bC(p),
        S = c ?? h.showSizeChanger,
        x = () => {
          const $ = m.createElement('span', { className: `${p}-item-ellipsis` }, '•••');
          let E = m.createElement(
              'button',
              { className: `${p}-item-link`, type: 'button', tabIndex: -1 },
              m.createElement(oS, null),
            ),
            T = m.createElement(
              'button',
              { className: `${p}-item-link`, type: 'button', tabIndex: -1 },
              m.createElement(tS, null),
            ),
            P = m.createElement(
              'a',
              { className: `${p}-item-link` },
              m.createElement(
                'div',
                { className: `${p}-item-container` },
                m.createElement(iC, { className: `${p}-item-link-icon` }),
                $,
              ),
            ),
            w = m.createElement(
              'a',
              { className: `${p}-item-link` },
              m.createElement(
                'div',
                { className: `${p}-item-container` },
                m.createElement(sC, { className: `${p}-item-link-icon` }),
                $,
              ),
            );
          return (
            g === 'rtl' && (([E, T] = [T, E]), ([P, w] = [w, P])),
            { prevIcon: E, nextIcon: T, jumpPrevIcon: P, jumpNextIcon: w }
          );
        },
        [_] = gl('Pagination', Jc),
        R = Object.assign(Object.assign({}, _), a),
        O = i === 'small' || !!(d && !i && s),
        v = f('select', n),
        C = Q({ [`${p}-mini`]: O, [`${p}-rtl`]: g === 'rtl' }, r, o, b);
      return y(
        m.createElement(
          Uf,
          Object.assign({}, x(), u, {
            prefixCls: p,
            selectPrefixCls: v,
            className: C,
            selectComponentClass: l || (O ? Gf : Kf),
            locale: R,
            showSizeChanger: S,
          }),
        ),
      );
    },
    CC = new Le('antSpinMove', { to: { opacity: 1 } }),
    xC = new Le('antRotate', { to: { transform: 'rotate(405deg)' } }),
    wC = (e) => ({
      [`${e.componentCls}`]: Object.assign(Object.assign({}, ln(e)), {
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
            animationName: CC,
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
            animationName: xC,
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
    $C = jt(
      'Spin',
      (e) => {
        const t = it(e, {
          spinDotDefault: e.colorTextDescription,
          spinDotSize: e.controlHeightLG / 2,
          spinDotSizeSM: e.controlHeightLG * 0.35,
          spinDotSizeLG: e.controlHeight,
        });
        return [wC(t)];
      },
      { contentHeight: 400 },
    );
  var EC =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  let Ri = null;
  function OC(e, t) {
    const { indicator: n } = t,
      r = `${e}-dot`;
    return n === null
      ? null
      : Jr(n)
      ? hr(n, { className: Q(n.props.className, r) })
      : Jr(Ri)
      ? hr(Ri, { className: Q(Ri.props.className, r) })
      : m.createElement(
          'span',
          { className: Q(r, `${e}-dot-spin`) },
          m.createElement('i', { className: `${e}-dot-item` }),
          m.createElement('i', { className: `${e}-dot-item` }),
          m.createElement('i', { className: `${e}-dot-item` }),
          m.createElement('i', { className: `${e}-dot-item` }),
        );
  }
  function _C(e, t) {
    return !!e && !!t && !isNaN(Number(t));
  }
  const IC = (e) => {
      const {
          spinPrefixCls: t,
          spinning: n = !0,
          delay: r = 0,
          className: o,
          rootClassName: i,
          size: a = 'default',
          tip: l,
          wrapperClassName: s,
          style: c,
          children: u,
          hashId: d,
        } = e,
        f = EC(e, [
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
        [g, h] = oe(() => n && !_C(n, r));
      pe(() => {
        if (n) {
          const R = yS(r, () => {
            h(!0);
          });
          return (
            R(),
            () => {
              var O;
              (O = R == null ? void 0 : R.cancel) === null || O === void 0 || O.call(R);
            }
          );
        }
        h(!1);
      }, [r, n]);
      const p = le(() => typeof u < 'u', [u]),
        { direction: y } = he(qe),
        b = Q(
          t,
          {
            [`${t}-sm`]: a === 'small',
            [`${t}-lg`]: a === 'large',
            [`${t}-spinning`]: g,
            [`${t}-show-text`]: !!l,
            [`${t}-rtl`]: y === 'rtl',
          },
          o,
          i,
          d,
        ),
        S = Q(`${t}-container`, { [`${t}-blur`]: g }),
        x = Fr(f, ['indicator', 'prefixCls']),
        _ = m.createElement(
          'div',
          Object.assign({}, x, { style: c, className: b, 'aria-live': 'polite', 'aria-busy': g }),
          OC(t, e),
          l ? m.createElement('div', { className: `${t}-text` }, l) : null,
        );
      return p
        ? m.createElement(
            'div',
            Object.assign({}, x, { className: Q(`${t}-nested-loading`, s, d) }),
            g && m.createElement('div', { key: 'loading' }, _),
            m.createElement('div', { className: S, key: 'container' }, u),
          )
        : _;
    },
    Xf = (e) => {
      const { prefixCls: t } = e,
        { getPrefixCls: n } = he(qe),
        r = n('spin', t),
        [o, i] = $C(r),
        a = Object.assign(Object.assign({}, e), { spinPrefixCls: r, hashId: i });
      return o(m.createElement(IC, Object.assign({}, a)));
    };
  Xf.setDefaultIndicator = (e) => {
    Ri = e;
  };
  const PC = Xf;
  function RC() {
    const e = Object.assign({}, arguments.length <= 0 ? void 0 : arguments[0]);
    for (let t = 1; t < arguments.length; t++) {
      const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      n &&
        Object.keys(n).forEach((r) => {
          const o = n[r];
          o !== void 0 && (e[r] = o);
        });
    }
    return e;
  }
  var qf =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const TC = (e) => {
      var { prefixCls: t, className: n, avatar: r, title: o, description: i } = e,
        a = qf(e, ['prefixCls', 'className', 'avatar', 'title', 'description']);
      const { getPrefixCls: l } = he(qe),
        s = l('list', t),
        c = Q(`${s}-item-meta`, n),
        u = ie.createElement(
          'div',
          { className: `${s}-item-meta-content` },
          o && ie.createElement('h4', { className: `${s}-item-meta-title` }, o),
          i && ie.createElement('div', { className: `${s}-item-meta-description` }, i),
        );
      return ie.createElement(
        'div',
        Object.assign({}, a, { className: c }),
        r && ie.createElement('div', { className: `${s}-item-meta-avatar` }, r),
        (o || i) && u,
      );
    },
    Yf = ye((e, t) => {
      var { prefixCls: n, children: r, actions: o, extra: i, className: a, colStyle: l } = e,
        s = qf(e, ['prefixCls', 'children', 'actions', 'extra', 'className', 'colStyle']);
      const { grid: c, itemLayout: u } = he(Gl),
        { getPrefixCls: d } = he(qe),
        f = () => {
          let S;
          return (
            Zn.forEach(r, (x) => {
              typeof x == 'string' && (S = !0);
            }),
            S && Zn.count(r) > 1
          );
        },
        g = () => (u === 'vertical' ? !!i : !f()),
        h = d('list', n),
        p =
          o &&
          o.length > 0 &&
          ie.createElement(
            'ul',
            { className: `${h}-item-action`, key: 'actions' },
            o.map((S, x) =>
              ie.createElement(
                'li',
                { key: `${h}-item-action-${x}` },
                S,
                x !== o.length - 1 && ie.createElement('em', { className: `${h}-item-action-split` }),
              ),
            ),
          ),
        y = c ? 'div' : 'li',
        b = ie.createElement(
          y,
          Object.assign({}, s, c ? {} : { ref: t }, { className: Q(`${h}-item`, { [`${h}-item-no-flex`]: !g() }, a) }),
          u === 'vertical' && i
            ? [
                ie.createElement('div', { className: `${h}-item-main`, key: 'content' }, r, p),
                ie.createElement('div', { className: `${h}-item-extra`, key: 'extra' }, i),
              ]
            : [r, p, hr(i, { key: 'extra' })],
        );
      return c ? ie.createElement(PS, { ref: t, flex: 1, style: l }, b) : b;
    });
  Yf.Meta = TC;
  const MC = Yf,
    NC = (e) => {
      const {
        listBorderedCls: t,
        componentCls: n,
        paddingLG: r,
        margin: o,
        padding: i,
        listItemPaddingSM: a,
        marginLG: l,
        borderRadiusLG: s,
      } = e;
      return {
        [`${t}`]: {
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: s,
          [`${n}-header,${n}-footer,${n}-item`]: { paddingInline: r },
          [`${n}-pagination`]: { margin: `${o}px ${l}px` },
        },
        [`${t}${n}-sm`]: { [`${n}-item,${n}-header,${n}-footer`]: { padding: a } },
        [`${t}${n}-lg`]: { [`${n}-item,${n}-header,${n}-footer`]: { padding: `${i}px ${r}px` } },
      };
    },
    FC = (e) => {
      const { componentCls: t, screenSM: n, screenMD: r, marginLG: o, marginSM: i, margin: a } = e;
      return {
        [`@media screen and (max-width:${r})`]: {
          [`${t}`]: { [`${t}-item`]: { [`${t}-item-action`]: { marginInlineStart: o } } },
          [`${t}-vertical`]: { [`${t}-item`]: { [`${t}-item-extra`]: { marginInlineStart: o } } },
        },
        [`@media screen and (max-width: ${n})`]: {
          [`${t}`]: { [`${t}-item`]: { flexWrap: 'wrap', [`${t}-action`]: { marginInlineStart: i } } },
          [`${t}-vertical`]: {
            [`${t}-item`]: {
              flexWrap: 'wrap-reverse',
              [`${t}-item-main`]: { minWidth: e.contentWidth },
              [`${t}-item-extra`]: { margin: `auto auto ${a}px` },
            },
          },
        },
      };
    },
    AC = (e) => {
      const {
          componentCls: t,
          antCls: n,
          controlHeight: r,
          minHeight: o,
          paddingSM: i,
          marginLG: a,
          padding: l,
          listItemPadding: s,
          colorPrimary: c,
          listItemPaddingSM: u,
          listItemPaddingLG: d,
          paddingXS: f,
          margin: g,
          colorText: h,
          colorTextDescription: p,
          motionDurationSlow: y,
          lineWidth: b,
        } = e,
        S = {};
      return (
        ['start', 'center', 'end'].forEach((x) => {
          S[`&-align-${x}`] = { textAlign: x };
        }),
        {
          [`${t}`]: Object.assign(Object.assign({}, ln(e)), {
            position: 'relative',
            '*': { outline: 'none' },
            [`${t}-header, ${t}-footer`]: { background: 'transparent', paddingBlock: i },
            [`${t}-pagination`]: Object.assign(Object.assign({ marginBlockStart: a }, S), {
              [`${n}-pagination-options`]: { textAlign: 'start' },
            }),
            [`${t}-spin`]: { minHeight: o, textAlign: 'center' },
            [`${t}-items`]: { margin: 0, padding: 0, listStyle: 'none' },
            [`${t}-item`]: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: s,
              color: h,
              [`${t}-item-meta`]: {
                display: 'flex',
                flex: 1,
                alignItems: 'flex-start',
                maxWidth: '100%',
                [`${t}-item-meta-avatar`]: { marginInlineEnd: l },
                [`${t}-item-meta-content`]: { flex: '1 0', width: 0, color: h },
                [`${t}-item-meta-title`]: {
                  marginBottom: e.marginXXS,
                  color: h,
                  fontSize: e.fontSize,
                  lineHeight: e.lineHeight,
                  '> a': { color: h, transition: `all ${y}`, ['&:hover']: { color: c } },
                },
                [`${t}-item-meta-description`]: { color: p, fontSize: e.fontSize, lineHeight: e.lineHeight },
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
                  padding: `0 ${f}px`,
                  color: p,
                  fontSize: e.fontSize,
                  lineHeight: e.lineHeight,
                  textAlign: 'center',
                  ['&:first-child']: { paddingInlineStart: 0 },
                },
                [`${t}-item-action-split`]: {
                  position: 'absolute',
                  insetBlockStart: '50%',
                  insetInlineEnd: 0,
                  width: b,
                  height: Math.ceil(e.fontSize * e.lineHeight) - e.marginXXS * 2,
                  transform: 'translateY(-50%)',
                  backgroundColor: e.colorSplit,
                },
              },
            },
            [`${t}-empty`]: { padding: `${l}px 0`, color: p, fontSize: e.fontSizeSM, textAlign: 'center' },
            [`${t}-empty-text`]: { padding: l, color: e.colorTextDisabled, fontSize: e.fontSize, textAlign: 'center' },
            [`${t}-item-no-flex`]: { display: 'block' },
          }),
          [`${t}-grid ${n}-col > ${t}-item`]: {
            display: 'block',
            maxWidth: '100%',
            marginBlockEnd: g,
            paddingBlock: 0,
            borderBlockEnd: 'none',
          },
          [`${t}-vertical ${t}-item`]: {
            alignItems: 'initial',
            [`${t}-item-main`]: { display: 'block', flex: 1 },
            [`${t}-item-extra`]: { marginInlineStart: a },
            [`${t}-item-meta`]: {
              marginBlockEnd: l,
              [`${t}-item-meta-title`]: {
                marginBlockStart: 0,
                marginBlockEnd: i,
                color: h,
                fontSize: e.fontSizeLG,
                lineHeight: e.lineHeightLG,
              },
            },
            [`${t}-item-action`]: {
              marginBlockStart: l,
              marginInlineStart: 'auto',
              '> li': { padding: `0 ${l}px`, ['&:first-child']: { paddingInlineStart: 0 } },
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
          [`${t}-lg ${t}-item`]: { padding: d },
          [`${t}-sm ${t}-item`]: { padding: u },
          [`${t}:not(${t}-vertical)`]: { [`${t}-item-no-flex`]: { [`${t}-item-action`]: { float: 'right' } } },
        }
      );
    },
    zC = jt(
      'List',
      (e) => {
        const t = it(e, {
          listBorderedCls: `${e.componentCls}-bordered`,
          minHeight: e.controlHeightLG,
          listItemPadding: `${e.paddingContentVertical}px 0`,
          listItemPaddingSM: `${e.paddingContentVerticalSM}px ${e.paddingContentHorizontal}px`,
          listItemPaddingLG: `${e.paddingContentVerticalLG}px ${e.paddingContentHorizontalLG}px`,
        });
        return [AC(t), NC(t), FC(t)];
      },
      { contentWidth: 220 },
    );
  var DC =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const Gl = m.createContext({});
  Gl.Consumer;
  function Gn(e) {
    var t,
      {
        pagination: n = !1,
        prefixCls: r,
        bordered: o = !1,
        split: i = !0,
        className: a,
        rootClassName: l,
        children: s,
        itemLayout: c,
        loadMore: u,
        grid: d,
        dataSource: f = [],
        size: g,
        header: h,
        footer: p,
        loading: y = !1,
        rowKey: b,
        renderItem: S,
        locale: x,
      } = e,
      _ = DC(e, [
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
    const R = n && typeof n == 'object' ? n : {},
      [O, v] = oe(R.defaultCurrent || 1),
      [C, $] = oe(R.defaultPageSize || 10),
      { getPrefixCls: E, renderEmpty: T, direction: P } = he(qe),
      w = { current: 1, total: 0 },
      I = (q) => (H, ue) => {
        v(H), $(ue), n && n[q] && n[q](H, ue);
      },
      M = I('onChange'),
      N = I('onShowSizeChange'),
      A = (q, H) => {
        if (!S) return null;
        let ue;
        return (
          typeof b == 'function' ? (ue = b(q)) : b ? (ue = q[b]) : (ue = q.key),
          ue || (ue = `list-item-${H}`),
          m.createElement(m.Fragment, { key: ue }, S(q, H))
        );
      },
      D = () => !!(u || n || p),
      j = E('list', r),
      [B, X] = zC(j);
    let Y = y;
    typeof Y == 'boolean' && (Y = { spinning: Y });
    const z = Y && Y.spinning;
    let Z = '';
    switch (g) {
      case 'large':
        Z = 'lg';
        break;
      case 'small':
        Z = 'sm';
        break;
    }
    const J = Q(
        j,
        {
          [`${j}-vertical`]: c === 'vertical',
          [`${j}-${Z}`]: Z,
          [`${j}-split`]: i,
          [`${j}-bordered`]: o,
          [`${j}-loading`]: z,
          [`${j}-grid`]: !!d,
          [`${j}-something-after-last-item`]: D(),
          [`${j}-rtl`]: P === 'rtl',
        },
        a,
        l,
        X,
      ),
      K = RC(w, { total: f.length, current: O, pageSize: C }, n || {}),
      W = Math.ceil(K.total / K.pageSize);
    K.current > W && (K.current = W);
    const ae = n
      ? m.createElement(
          'div',
          {
            className: Q(
              `${j}-pagination`,
              `${j}-pagination-align-${(t = K == null ? void 0 : K.align) !== null && t !== void 0 ? t : 'end'}`,
            ),
          },
          m.createElement(SC, Object.assign({}, K, { onChange: M, onShowSizeChange: N })),
        )
      : null;
    let ce = fe(f);
    n && f.length > (K.current - 1) * K.pageSize && (ce = fe(f).splice((K.current - 1) * K.pageSize, K.pageSize));
    const xe = Object.keys(d || {}).some((q) => ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(q)),
      ve = mf(xe),
      se = le(() => {
        for (let q = 0; q < Wn.length; q += 1) {
          const H = Wn[q];
          if (ve[H]) return H;
        }
      }, [ve]),
      k = le(() => {
        if (!d) return;
        const q = se && d[se] ? d[se] : d.column;
        if (q) return { width: `${100 / q}%`, maxWidth: `${100 / q}%` };
      }, [d == null ? void 0 : d.column, se]);
    let de = z && m.createElement('div', { style: { minHeight: 53 } });
    if (ce.length > 0) {
      const q = ce.map((H, ue) => A(H, ue));
      de = d
        ? m.createElement(
            TS,
            { gutter: d.gutter },
            Zn.map(q, (H) => m.createElement('div', { key: H == null ? void 0 : H.key, style: k }, H)),
          )
        : m.createElement('ul', { className: `${j}-items` }, q);
    } else
      !s &&
        !z &&
        (de = m.createElement(
          'div',
          { className: `${j}-empty-text` },
          (x && x.emptyText) || (T == null ? void 0 : T('List')) || m.createElement(nf, { componentName: 'List' }),
        ));
    const me = K.position || 'bottom',
      be = le(() => ({ grid: d, itemLayout: c }), [JSON.stringify(d), c]);
    return B(
      m.createElement(
        Gl.Provider,
        { value: be },
        m.createElement(
          'div',
          Object.assign({ className: J }, _),
          (me === 'top' || me === 'both') && ae,
          h && m.createElement('div', { className: `${j}-header` }, h),
          m.createElement(PC, Object.assign({}, Y), de, s),
          p && m.createElement('div', { className: `${j}-footer` }, p),
          u || ((me === 'bottom' || me === 'both') && ae),
        ),
      ),
    );
  }
  Gn.Item = MC;
  let nn = null,
    Kn = (e) => e(),
    oo = [],
    Ti = {};
  function jC() {
    const { prefixCls: e, getContainer: t, duration: n, rtl: r, maxCount: o, top: i } = Ti,
      a = e ?? yu().getPrefixCls('message'),
      l = (t == null ? void 0 : t()) || document.body;
    return { prefixCls: a, container: l, duration: n, rtl: r, maxCount: o, top: i };
  }
  const LC = ye((e, t) => {
    const n = () => {
        const { prefixCls: d, container: f, maxCount: g, duration: h, rtl: p, top: y } = jC();
        return { prefixCls: d, getContainer: () => f, maxCount: g, duration: h, rtl: p, top: y };
      },
      [r, o] = oe(n),
      [i, a] = nd(r),
      l = yu(),
      s = l.getRootPrefixCls(),
      c = l.getIconPrefixCls(),
      u = () => {
        o(n);
      };
    return (
      pe(u, []),
      bt(t, () => {
        const d = Object.assign({}, i);
        return (
          Object.keys(d).forEach((f) => {
            d[f] = function () {
              return u(), i[f].apply(i, arguments);
            };
          }),
          { instance: d, sync: u }
        );
      }),
      m.createElement(Su, { prefixCls: s, iconPrefixCls: c }, a)
    );
  });
  function Mi() {
    if (!nn) {
      const e = document.createDocumentFragment(),
        t = { fragment: e };
      (nn = t),
        Kn(() => {
          T0(
            m.createElement(LC, {
              ref: (n) => {
                const { instance: r, sync: o } = n || {};
                Promise.resolve().then(() => {
                  !t.instance && r && ((t.instance = r), (t.sync = o), Mi());
                });
              },
            }),
            e,
          );
        });
      return;
    }
    nn.instance &&
      (oo.forEach((e) => {
        const { type: t, skipped: n } = e;
        if (!n)
          switch (t) {
            case 'open': {
              Kn(() => {
                const r = nn.instance.open(Object.assign(Object.assign({}, Ti), e.config));
                r == null || r.then(e.resolve), e.setCloseFn(r);
              });
              break;
            }
            case 'destroy':
              Kn(() => {
                nn == null || nn.instance.destroy(e.key);
              });
              break;
            default:
              Kn(() => {
                var r;
                const o = (r = nn.instance)[t].apply(r, fe(e.args));
                o == null || o.then(e.resolve), e.setCloseFn(o);
              });
          }
      }),
      (oo = []));
  }
  function HC(e) {
    (Ti = Object.assign(Object.assign({}, Ti), e)),
      Kn(() => {
        var t;
        (t = nn == null ? void 0 : nn.sync) === null || t === void 0 || t.call(nn);
      });
  }
  function kC(e) {
    const t = fl((n) => {
      let r;
      const o = {
        type: 'open',
        config: e,
        resolve: n,
        setCloseFn: (i) => {
          r = i;
        },
      };
      return (
        oo.push(o),
        () => {
          r
            ? Kn(() => {
                r();
              })
            : (o.skipped = !0);
        }
      );
    });
    return Mi(), t;
  }
  function VC(e, t) {
    const n = fl((r) => {
      let o;
      const i = {
        type: e,
        args: t,
        resolve: r,
        setCloseFn: (a) => {
          o = a;
        },
      };
      return (
        oo.push(i),
        () => {
          o
            ? Kn(() => {
                o();
              })
            : (i.skipped = !0);
        }
      );
    });
    return Mi(), n;
  }
  function BC(e) {
    oo.push({ type: 'destroy', key: e }), Mi();
  }
  const WC = ['success', 'info', 'warning', 'error', 'loading'],
    Qf = { open: kC, destroy: BC, config: HC, useMessage: E0, _InternalPanelDoNotUseOrYouWillBeFired: S0 };
  WC.forEach((e) => {
    Qf[e] = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return VC(e, n);
    };
  });
  const Kt = Qf;
  var UC = {
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
  const GC = UC;
  var Jf = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: GC }));
  };
  Jf.displayName = 'BugOutlined';
  const Zf = ye(Jf);
  var KC = {
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
  const XC = KC;
  var em = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: XC }));
  };
  em.displayName = 'CopyOutlined';
  const Kl = ye(em);
  var qC = {
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
  const YC = qC;
  var tm = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: YC }));
  };
  tm.displayName = 'EditOutlined';
  const QC = ye(tm);
  var JC = {
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
  const ZC = JC;
  var nm = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: ZC }));
  };
  nm.displayName = 'EnterOutlined';
  const ex = ye(nm);
  var tx = {
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
  const nx = tx;
  var rm = function (t, n) {
    return m.createElement($t, F(F({}, t), {}, { ref: n, icon: nx }));
  };
  rm.displayName = 'ReloadOutlined';
  const om = ye(rm);
  var rx =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const ox = { border: 0, background: 'transparent', padding: 0, lineHeight: 'inherit', display: 'inline-block' },
    im = ye((e, t) => {
      const n = (c) => {
          const { keyCode: u } = c;
          u === U.ENTER && c.preventDefault();
        },
        r = (c) => {
          const { keyCode: u } = c,
            { onClick: d } = e;
          u === U.ENTER && d && d();
        },
        { style: o, noStyle: i, disabled: a } = e,
        l = rx(e, ['style', 'noStyle', 'disabled']);
      let s = {};
      return (
        i || (s = Object.assign({}, ox)),
        a && (s.pointerEvents = 'none'),
        (s = Object.assign(Object.assign({}, s), o)),
        m.createElement(
          'div',
          Object.assign({ role: 'button', tabIndex: 0, ref: t }, l, { onKeyDown: n, onKeyUp: r, style: s }),
        )
      );
    });
  var ix = function () {
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
              n.forEach(function (o) {
                e.addRange(o);
              }),
            t && t.focus();
        }
      );
    },
    ax = ix,
    am = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' },
    lx = 'Copy to clipboard: #{key}, Enter';
  function sx(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
    return e.replace(/#{\s*key\s*}/g, t);
  }
  function cx(e, t) {
    var n,
      r,
      o,
      i,
      a,
      l,
      s = !1;
    t || (t = {}), (n = t.debug || !1);
    try {
      (o = ax()),
        (i = document.createRange()),
        (a = document.getSelection()),
        (l = document.createElement('span')),
        (l.textContent = e),
        (l.ariaHidden = 'true'),
        (l.style.all = 'unset'),
        (l.style.position = 'fixed'),
        (l.style.top = 0),
        (l.style.clip = 'rect(0, 0, 0, 0)'),
        (l.style.whiteSpace = 'pre'),
        (l.style.webkitUserSelect = 'text'),
        (l.style.MozUserSelect = 'text'),
        (l.style.msUserSelect = 'text'),
        (l.style.userSelect = 'text'),
        l.addEventListener('copy', function (u) {
          if ((u.stopPropagation(), t.format))
            if ((u.preventDefault(), typeof u.clipboardData > 'u')) {
              n && console.warn('unable to use e.clipboardData'),
                n && console.warn('trying IE specific stuff'),
                window.clipboardData.clearData();
              var d = am[t.format] || am.default;
              window.clipboardData.setData(d, e);
            } else u.clipboardData.clearData(), u.clipboardData.setData(t.format, e);
          t.onCopy && (u.preventDefault(), t.onCopy(u.clipboardData));
        }),
        document.body.appendChild(l),
        i.selectNodeContents(l),
        a.addRange(i);
      var c = document.execCommand('copy');
      if (!c) throw new Error('copy command was unsuccessful');
      s = !0;
    } catch (u) {
      n && console.error('unable to copy using execCommand: ', u), n && console.warn('trying IE specific stuff');
      try {
        window.clipboardData.setData(t.format || 'text', e), t.onCopy && t.onCopy(window.clipboardData), (s = !0);
      } catch (d) {
        n && console.error('unable to copy using clipboardData: ', d),
          n && console.error('falling back to prompt'),
          (r = sx('message' in t ? t.message : lx)),
          window.prompt(r, e);
      }
    } finally {
      a && (typeof a.removeRange == 'function' ? a.removeRange(i) : a.removeAllRanges()),
        l && document.body.removeChild(l),
        o();
    }
    return s;
  }
  var ux = cx;
  const dx = (e, t, n, r) => {
      const { sizeMarginHeadingVerticalEnd: o, fontWeightStrong: i } = r;
      return { marginBottom: o, color: n, fontWeight: i, fontSize: e, lineHeight: t };
    },
    fx = (e) => {
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
          ] = dx(e[`fontSizeHeading${r}`], e[`lineHeightHeading${r}`], e.colorTextHeading, e);
        }),
        n
      );
    },
    mx = (e) => {
      const { componentCls: t } = e;
      return {
        'a&, a': Object.assign(Object.assign({}, pu(e)), {
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
    gx = (e) => ({
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
      mark: { padding: 0, backgroundColor: Bh[2] },
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
    px = (e) => {
      const { componentCls: t } = e,
        r = zl(e).inputPaddingVertical + 1;
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
    hx = (e) => ({
      '&-copy-success': {
        [`
    &,
    &:hover,
    &:focus`]: { color: e.colorSuccess },
      },
    }),
    vx = () => ({
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
    bx = (e) => {
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
                          fx(e),
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
                      gx(e),
                    ),
                    mx(e),
                  ),
                  {
                    [`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, pu(e)), { marginInlineStart: e.marginXXS }),
                  },
                ),
                px(e),
              ),
              hx(e),
            ),
            vx(),
          ),
          { '&-rtl': { direction: 'rtl' } },
        ),
      };
    },
    lm = jt('Typography', (e) => [bx(e)], {
      sizeMarginHeadingVerticalStart: '1.2em',
      sizeMarginHeadingVerticalEnd: '0.5em',
    }),
    yx = (e) => {
      let {
        prefixCls: t,
        'aria-label': n,
        className: r,
        style: o,
        direction: i,
        maxLength: a,
        autoSize: l = !0,
        value: s,
        onSave: c,
        onCancel: u,
        onEnd: d,
        component: f,
        enterIcon: g = m.createElement(ex, null),
      } = e;
      const h = L(null),
        p = L(!1),
        y = L(),
        [b, S] = oe(s);
      pe(() => {
        S(s);
      }, [s]),
        pe(() => {
          if (h.current && h.current.resizableTextArea) {
            const { textArea: I } = h.current.resizableTextArea;
            I.focus();
            const { length: M } = I.value;
            I.setSelectionRange(M, M);
          }
        }, []);
      const x = (I) => {
          let { target: M } = I;
          S(M.value.replace(/[\n\r]/g, ''));
        },
        _ = () => {
          p.current = !0;
        },
        R = () => {
          p.current = !1;
        },
        O = (I) => {
          let { keyCode: M } = I;
          p.current || (y.current = M);
        },
        v = () => {
          c(b.trim());
        },
        C = (I) => {
          let { keyCode: M, ctrlKey: N, altKey: A, metaKey: D, shiftKey: j } = I;
          y.current === M &&
            !p.current &&
            !N &&
            !A &&
            !D &&
            !j &&
            (M === U.ENTER ? (v(), d == null || d()) : M === U.ESC && u());
        },
        $ = () => {
          v();
        },
        E = f ? `${t}-${f}` : '',
        [T, P] = lm(t),
        w = Q(t, `${t}-edit-content`, { [`${t}-rtl`]: i === 'rtl' }, r, E, P);
      return T(
        m.createElement(
          'div',
          { className: w, style: o },
          m.createElement(nC, {
            ref: h,
            maxLength: a,
            value: b,
            onChange: x,
            onKeyDown: O,
            onKeyUp: C,
            onCompositionStart: _,
            onCompositionEnd: R,
            onBlur: $,
            'aria-label': n,
            rows: 1,
            autoSize: l,
          }),
          g !== null ? hr(g, { className: `${t}-edit-content-confirm` }) : null,
        ),
      );
    };
  function Xl(e, t) {
    return le(() => {
      const n = !!e;
      return [n, Object.assign(Object.assign({}, t), n && typeof e == 'object' ? e : null)];
    }, [e]);
  }
  const Sx = (e, t) => {
    const n = L(!1);
    pe(() => {
      n.current ? e() : (n.current = !0);
    }, t);
  };
  var Cx =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const sm = ye((e, t) => {
    var {
        prefixCls: n,
        component: r = 'article',
        className: o,
        rootClassName: i,
        setContentRef: a,
        children: l,
        direction: s,
      } = e,
      c = Cx(e, ['prefixCls', 'component', 'className', 'rootClassName', 'setContentRef', 'children', 'direction']);
    const { getPrefixCls: u, direction: d } = he(qe),
      f = s ?? d;
    let g = t;
    a && (g = tr(t, a));
    const h = u('typography', n),
      [p, y] = lm(h),
      b = Q(h, { [`${h}-rtl`]: f === 'rtl' }, o, i, y);
    return p(m.createElement(r, Object.assign({ className: b, ref: g }, c), l));
  });
  function cm(e) {
    const t = typeof e;
    return t === 'string' || t === 'number';
  }
  function xx(e) {
    let t = 0;
    return (
      e.forEach((n) => {
        cm(n) ? (t += String(n).length) : (t += 1);
      }),
      t
    );
  }
  function um(e, t) {
    let n = 0;
    const r = [];
    for (let o = 0; o < e.length; o += 1) {
      if (n === t) return r;
      const i = e[o],
        l = cm(i) ? String(i).length : 1,
        s = n + l;
      if (s > t) {
        const c = t - n;
        return r.push(String(i).slice(0, c)), r;
      }
      r.push(i), (n = s);
    }
    return e;
  }
  const wx = 0,
    Ni = 1,
    dm = 2,
    ql = 3,
    fm = 4,
    $x = (e) => {
      let { enabledMeasure: t, children: n, text: r, width: o, fontSize: i, rows: a, onEllipsis: l } = e;
      const [[s, c, u], d] = oe([0, 0, 0]),
        [f, g] = oe(wx),
        [h, p] = oe(0),
        y = L(null),
        b = L(null),
        S = le(() => mn(r), [r]),
        x = le(() => xx(S), [S]),
        _ = le(() => (!t || f !== ql ? n(S, !1) : n(um(S, c), c < x)), [t, f, n, S, c, x]);
      tt(() => {
        t && o && i && x && (g(Ni), d([0, Math.ceil(x / 2), x]));
      }, [t, o, i, r, x, a]),
        tt(() => {
          var C;
          f === Ni && p(((C = y.current) === null || C === void 0 ? void 0 : C.offsetHeight) || 0);
        }, [f]),
        tt(() => {
          var C, $;
          if (h) {
            if (f === Ni) {
              const E = ((C = b.current) === null || C === void 0 ? void 0 : C.offsetHeight) || 0,
                T = a * h;
              E <= T ? (g(fm), l(!1)) : g(dm);
            } else if (f === dm)
              if (s !== u) {
                const E = (($ = b.current) === null || $ === void 0 ? void 0 : $.offsetHeight) || 0,
                  T = a * h;
                let P = s,
                  w = u;
                s === u - 1 ? (w = s) : E <= T ? (P = c) : (w = c);
                const I = Math.ceil((P + w) / 2);
                d([P, I, w]);
              } else g(ql), l(!0);
          }
        }, [f, s, u, a, h]);
      const R = { width: o, whiteSpace: 'normal', margin: 0, padding: 0 },
        O = (C, $, E) =>
          m.createElement(
            'span',
            {
              'aria-hidden': !0,
              ref: $,
              style: Object.assign(
                {
                  position: 'fixed',
                  display: 'block',
                  left: 0,
                  top: 0,
                  zIndex: -9999,
                  visibility: 'hidden',
                  pointerEvents: 'none',
                  fontSize: Math.floor(i / 2) * 2,
                },
                E,
              ),
            },
            C,
          ),
        v = (C, $) => {
          const E = um(S, C);
          return O(n(E, !0), $, R);
        };
      return m.createElement(
        m.Fragment,
        null,
        _,
        t &&
          f !== ql &&
          f !== fm &&
          m.createElement(
            m.Fragment,
            null,
            O('lg', y, { wordBreak: 'keep-all', whiteSpace: 'nowrap' }),
            f === Ni ? O(n(S, !1), b, R) : v(c, b),
          ),
      );
    },
    Ex = (e) => {
      let { enabledEllipsis: t, isEllipsis: n, children: r, tooltipProps: o } = e;
      return !(o != null && o.title) || !t ? r : m.createElement(Pi, Object.assign({ open: n ? void 0 : !1 }, o), r);
    };
  var Ox =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  function _x(e, t) {
    let { mark: n, code: r, underline: o, delete: i, strong: a, keyboard: l, italic: s } = e,
      c = t;
    function u(d, f) {
      f && (c = m.createElement(d, {}, c));
    }
    return u('strong', a), u('u', o), u('del', i), u('code', r), u('mark', n), u('kbd', l), u('i', s), c;
  }
  function Fi(e, t, n) {
    return e === !0 || e === void 0 ? t : e || (n && t);
  }
  function mm(e) {
    return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
  }
  const Ix = '...',
    Ai = ye((e, t) => {
      var n, r, o;
      const {
          prefixCls: i,
          className: a,
          style: l,
          type: s,
          disabled: c,
          children: u,
          ellipsis: d,
          editable: f,
          copyable: g,
          component: h,
          title: p,
        } = e,
        y = Ox(e, [
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
        { getPrefixCls: b, direction: S } = he(qe),
        [x] = gl('Text'),
        _ = L(null),
        R = L(null),
        O = b('typography', i),
        v = Fr(y, ['mark', 'code', 'delete', 'underline', 'strong', 'keyboard', 'italic']),
        [C, $] = Xl(f),
        [E, T] = yn(!1, { value: $.editing }),
        { triggerType: P = ['icon'] } = $,
        w = (ne) => {
          var ge;
          ne && ((ge = $.onStart) === null || ge === void 0 || ge.call($)), T(ne);
        };
      Sx(() => {
        var ne;
        E || (ne = R.current) === null || ne === void 0 || ne.focus();
      }, [E]);
      const I = (ne) => {
          ne == null || ne.preventDefault(), w(!0);
        },
        M = (ne) => {
          var ge;
          (ge = $.onChange) === null || ge === void 0 || ge.call($, ne), w(!1);
        },
        N = () => {
          var ne;
          (ne = $.onCancel) === null || ne === void 0 || ne.call($), w(!1);
        },
        [A, D] = Xl(g),
        [j, B] = oe(!1),
        X = L(),
        Y = {};
      D.format && (Y.format = D.format);
      const z = () => {
          window.clearTimeout(X.current);
        },
        Z = (ne) => {
          var ge;
          ne == null || ne.preventDefault(),
            ne == null || ne.stopPropagation(),
            ux(D.text || String(u) || '', Y),
            B(!0),
            z(),
            (X.current = window.setTimeout(() => {
              B(!1);
            }, 3e3)),
            (ge = D.onCopy) === null || ge === void 0 || ge.call(D, ne);
        };
      pe(() => z, []);
      const [J, K] = oe(!1),
        [W, ae] = oe(!1),
        [ce, xe] = oe(!1),
        [ve, se] = oe(!1),
        [k, de] = oe(!1),
        [me, be] = oe(!0),
        [q, H] = Xl(d, { expandable: !1 }),
        ue = q && !ce,
        { rows: we = 1 } = H,
        He = le(() => !ue || H.suffix !== void 0 || H.onEllipsis || H.expandable || C || A, [ue, H, C, A]);
      tt(() => {
        q && !He && (K(vd('webkitLineClamp')), ae(vd('textOverflow')));
      }, [He, q]);
      const Ge = le(() => (He ? !1 : we === 1 ? W : J), [He, W, J]),
        Je = ue && (Ge ? k : ve),
        Be = ue && we === 1 && Ge,
        Ve = ue && we > 1 && Ge,
        ze = (ne) => {
          var ge;
          xe(!0), (ge = H.onExpand) === null || ge === void 0 || ge.call(H, ne);
        },
        [st, Ze] = oe(0),
        [Pe, Oe] = oe(0),
        ct = (ne, ge) => {
          let { offsetWidth: je } = ne;
          var Fe;
          Ze(je),
            Oe(
              parseInt(
                (Fe = window.getComputedStyle) === null || Fe === void 0 ? void 0 : Fe.call(window, ge).fontSize,
                10,
              ) || 0,
            );
        },
        ht = (ne) => {
          var ge;
          se(ne), ve !== ne && ((ge = H.onEllipsis) === null || ge === void 0 || ge.call(H, ne));
        };
      pe(() => {
        const ne = _.current;
        if (q && Ge && ne) {
          const ge = Ve ? ne.offsetHeight < ne.scrollHeight : ne.offsetWidth < ne.scrollWidth;
          k !== ge && de(ge);
        }
      }, [q, Ge, u, Ve, me]),
        pe(() => {
          const ne = _.current;
          if (typeof IntersectionObserver > 'u' || !ne || !Ge || !ue) return;
          const ge = new IntersectionObserver(() => {
            be(!!ne.offsetParent);
          });
          return (
            ge.observe(ne),
            () => {
              ge.disconnect();
            }
          );
        }, [Ge, ue]);
      let Se = {};
      H.tooltip === !0
        ? (Se = { title: (n = $.text) !== null && n !== void 0 ? n : u })
        : kt(H.tooltip)
        ? (Se = { title: H.tooltip })
        : typeof H.tooltip == 'object'
        ? (Se = Object.assign({ title: (r = $.text) !== null && r !== void 0 ? r : u }, H.tooltip))
        : (Se = { title: H.tooltip });
      const _e = le(() => {
        const ne = (ge) => ['string', 'number'].includes(typeof ge);
        if (!(!q || Ge)) {
          if (ne($.text)) return $.text;
          if (ne(u)) return u;
          if (ne(p)) return p;
          if (ne(Se.title)) return Se.title;
        }
      }, [q, Ge, p, Se.title, Je]);
      if (E)
        return m.createElement(yx, {
          value: (o = $.text) !== null && o !== void 0 ? o : typeof u == 'string' ? u : '',
          onSave: M,
          onCancel: N,
          onEnd: $.onEnd,
          prefixCls: O,
          className: a,
          style: l,
          direction: S,
          component: h,
          maxLength: $.maxLength,
          autoSize: $.autoSize,
          enterIcon: $.enterIcon,
        });
      const Ye = () => {
          const { expandable: ne, symbol: ge } = H;
          if (!ne) return null;
          let je;
          return (
            ge ? (je = ge) : (je = x == null ? void 0 : x.expand),
            m.createElement(
              'a',
              { key: 'expand', className: `${O}-expand`, onClick: ze, 'aria-label': x == null ? void 0 : x.expand },
              je,
            )
          );
        },
        Qe = () => {
          if (!C) return;
          const { icon: ne, tooltip: ge } = $,
            je = mn(ge)[0] || (x == null ? void 0 : x.edit),
            Fe = typeof je == 'string' ? je : '';
          return P.includes('icon')
            ? m.createElement(
                Pi,
                { key: 'edit', title: ge === !1 ? '' : je },
                m.createElement(
                  im,
                  { ref: R, className: `${O}-edit`, onClick: I, 'aria-label': Fe },
                  ne || m.createElement(QC, { role: 'button' }),
                ),
              )
            : null;
        },
        We = () => {
          if (!A) return;
          const { tooltips: ne, icon: ge } = D,
            je = mm(ne),
            Fe = mm(ge),
            ke = j ? Fi(je[1], x == null ? void 0 : x.copied) : Fi(je[0], x == null ? void 0 : x.copy),
            Et = j ? (x == null ? void 0 : x.copied) : x == null ? void 0 : x.copy,
            ft = typeof ke == 'string' ? ke : Et;
          return m.createElement(
            Pi,
            { key: 'copy', title: ke },
            m.createElement(
              im,
              { className: Q(`${O}-copy`, j && `${O}-copy-success`), onClick: Z, 'aria-label': ft },
              j ? Fi(Fe[1], m.createElement(af, null), !0) : Fi(Fe[0], m.createElement(Kl, null), !0),
            ),
          );
        },
        at = (ne) => [ne && Ye(), Qe(), We()],
        lt = (ne) => [ne && m.createElement('span', { 'aria-hidden': !0, key: 'ellipsis' }, Ix), H.suffix, at(ne)];
      return m.createElement($n, { onResize: ct, disabled: !ue || Ge }, (ne) =>
        m.createElement(
          Ex,
          { tooltipProps: Se, enabledEllipsis: ue, isEllipsis: Je },
          m.createElement(
            sm,
            Object.assign(
              {
                className: Q(
                  {
                    [`${O}-${s}`]: s,
                    [`${O}-disabled`]: c,
                    [`${O}-ellipsis`]: q,
                    [`${O}-single-line`]: ue && we === 1,
                    [`${O}-ellipsis-single-line`]: Be,
                    [`${O}-ellipsis-multiple-line`]: Ve,
                  },
                  a,
                ),
                prefixCls: i,
                style: Object.assign(Object.assign({}, l), { WebkitLineClamp: Ve ? we : void 0 }),
                component: h,
                ref: tr(ne, _, t),
                direction: S,
                onClick: P.includes('text') ? I : void 0,
                'aria-label': _e == null ? void 0 : _e.toString(),
                title: p,
              },
              v,
            ),
            m.createElement(
              $x,
              { enabledMeasure: ue && !Ge, text: u, rows: we, width: st, fontSize: Pe, onEllipsis: ht },
              (ge, je) => {
                let Fe = ge;
                return (
                  ge.length &&
                    je &&
                    _e &&
                    (Fe = m.createElement('span', { key: 'show-content', 'aria-hidden': !0 }, Fe)),
                  _x(e, m.createElement(m.Fragment, null, Fe, lt(je)))
                );
              },
            ),
          ),
        ),
      );
    });
  var Px =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const Rx = ye((e, t) => {
      var { ellipsis: n, rel: r } = e,
        o = Px(e, ['ellipsis', 'rel']);
      const i = Object.assign(Object.assign({}, o), {
        rel: r === void 0 && o.target === '_blank' ? 'noopener noreferrer' : r,
      });
      return delete i.navigate, m.createElement(Ai, Object.assign({}, i, { ref: t, ellipsis: !!n, component: 'a' }));
    }),
    Tx = ye((e, t) => m.createElement(Ai, Object.assign({ ref: t }, e, { component: 'div' })));
  var Mx =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const Nx = ye((e, t) => {
    var { ellipsis: n } = e,
      r = Mx(e, ['ellipsis']);
    const o = le(() => (n && typeof n == 'object' ? Fr(n, ['expandable', 'rows']) : n), [n]);
    return m.createElement(Ai, Object.assign({ ref: t }, r, { ellipsis: o, component: 'span' }));
  });
  var Fx =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const Ax = [1, 2, 3, 4, 5],
    zx = ye((e, t) => {
      const { level: n = 1 } = e,
        r = Fx(e, ['level']);
      let o;
      return (
        Ax.includes(n) ? (o = `h${n}`) : (o = 'h1'), m.createElement(Ai, Object.assign({ ref: t }, r, { component: o }))
      );
    }),
    io = sm;
  (io.Text = Nx), (io.Link = Rx), (io.Title = zx), (io.Paragraph = Tx);
  const Mn = io;
  var Dx = 0;
  function Te(e, t, n, r, o, i) {
    var a,
      l,
      s = {};
    for (l in t) l == 'ref' ? (a = t[l]) : (s[l] = t[l]);
    var c = {
      type: e,
      props: s,
      key: n,
      ref: a,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: --Dx,
      __source: o,
      __self: i,
    };
    if (typeof e == 'function' && (a = e.defaultProps)) for (l in a) s[l] === void 0 && (s[l] = a[l]);
    return m.options.vnode && m.options.vnode(c), c;
  }
  const gm = ({ text: e, env: t }) => {
    const [n, r] = Kt.useMessage(),
      o = () => {
        (un.lib.mtop.config.prefix = ''),
          (un.lib.mtop.config.subDomain = t === 'pre' ? 'pre-acs-m' : 'acs-m'),
          (un.lib.mtop.config.mainDomain = 'miravia.es');
        const i = document.querySelector(
            '.module-detail-info .module-base-desc .module-attributes .module-desc-row div:nth-child(1) span:nth-child(2)',
          ).textContent,
          a = JSON.stringify(['ARISE_ES']),
          l = JSON.stringify([i ?? '']);
        un.lib.mtop
          .request({
            api: t === 'pre' ? 'mtop.arise.shop.component.cache.reset' : 'mtop.lazada.shop.component.cache.reset',
            v: t === 'pre' ? '2.0' : '1.0',
            method: 'GET',
            dataType: 'json',
            data: { tenantIds: a, componentKeys: l, isAll: !0 },
          })
          .then(
            function ({ retType: c, data: u, ret: d }) {
              console.log(c, u, d, 'resolve'),
                n.open({
                  type: 'success',
                  content: '清除缓存成功，3秒刷新当前页面',
                  duration: 3,
                  onClose: () => {
                    un.location.reload();
                  },
                });
            },
            function ({ retType: c, data: u, ret: d }) {
              console.log(c, u, d, 'reject'),
                n.open({
                  type: 'error',
                  content: d,
                  duration: 3,
                  onClose: () => {
                    un.location.reload();
                  },
                });
            },
          );
      };
    return Te(m.Fragment, { children: [r, Te('span', { class: 'next-btn-helper', onClick: o, children: e })] });
  };
  function jx() {
    const e = rn.$;
    Mm(
      () => {
        const t = e('.module-detail-info .module-base-desc .module-header .next-btn-group');
        return e(t).get(0);
      },
      (t) => {
        const n = t.querySelectorAll('.next-btn')[0],
          r = document.createElement('button'),
          o = document.createElement('button'),
          i = t.insertBefore(o, n);
        (o.className = 'next-btn next-medium next-btn-normal'),
          (o.style.margin = '0px 5px'),
          m.render(m.h(gm, { text: '预发缓存清除', env: 'pre' }), i);
        const a = t.insertBefore(r, n);
        (r.className = 'next-btn next-medium next-btn-secondary'),
          (r.style.margin = '0px 5px'),
          m.render(m.h(gm, { text: '线上缓存清除', env: 'prod' }), a);
      },
    );
  }
  var Lx = typeof global == 'object' && global && global.Object === Object && global;
  const Hx = Lx;
  var kx = typeof self == 'object' && self && self.Object === Object && self,
    Vx = Hx || kx || Function('return this')();
  const Yl = Vx;
  var Bx = Yl.Symbol;
  const Er = Bx;
  var pm = Object.prototype,
    Wx = pm.hasOwnProperty,
    Ux = pm.toString,
    ao = Er ? Er.toStringTag : void 0;
  function Gx(e) {
    var t = Wx.call(e, ao),
      n = e[ao];
    try {
      e[ao] = void 0;
      var r = !0;
    } catch {}
    var o = Ux.call(e);
    return r && (t ? (e[ao] = n) : delete e[ao]), o;
  }
  var Kx = Object.prototype,
    Xx = Kx.toString;
  function qx(e) {
    return Xx.call(e);
  }
  var Yx = '[object Null]',
    Qx = '[object Undefined]',
    hm = Er ? Er.toStringTag : void 0;
  function vm(e) {
    return e == null ? (e === void 0 ? Qx : Yx) : hm && hm in Object(e) ? Gx(e) : qx(e);
  }
  function Jx(e) {
    return e != null && typeof e == 'object';
  }
  var Zx = '[object Symbol]';
  function Ql(e) {
    return typeof e == 'symbol' || (Jx(e) && vm(e) == Zx);
  }
  function ew(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; ) o[n] = t(e[n], n, e);
    return o;
  }
  var tw = Array.isArray;
  const Jl = tw;
  var nw = 1 / 0,
    bm = Er ? Er.prototype : void 0,
    ym = bm ? bm.toString : void 0;
  function Sm(e) {
    if (typeof e == 'string') return e;
    if (Jl(e)) return ew(e, Sm) + '';
    if (Ql(e)) return ym ? ym.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -nw ? '-0' : t;
  }
  function Cm(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var rw = '[object AsyncFunction]',
    ow = '[object Function]',
    iw = '[object GeneratorFunction]',
    aw = '[object Proxy]';
  function lw(e) {
    if (!Cm(e)) return !1;
    var t = vm(e);
    return t == ow || t == iw || t == rw || t == aw;
  }
  var sw = Yl['__core-js_shared__'];
  const Zl = sw;
  var xm = (function () {
    var e = /[^.]+$/.exec((Zl && Zl.keys && Zl.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
  function cw(e) {
    return !!xm && xm in e;
  }
  var uw = Function.prototype,
    dw = uw.toString;
  function fw(e) {
    if (e != null) {
      try {
        return dw.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var mw = /[\\^$.*+?()[\]{}|]/g,
    gw = /^\[object .+?Constructor\]$/,
    pw = Function.prototype,
    hw = Object.prototype,
    vw = pw.toString,
    bw = hw.hasOwnProperty,
    yw = RegExp(
      '^' +
        vw
          .call(bw)
          .replace(mw, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$',
    );
  function Sw(e) {
    if (!Cm(e) || cw(e)) return !1;
    var t = lw(e) ? yw : gw;
    return t.test(fw(e));
  }
  function Cw(e, t) {
    return e == null ? void 0 : e[t];
  }
  function wm(e, t) {
    var n = Cw(e, t);
    return Sw(n) ? n : void 0;
  }
  function xw(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var ww = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    $w = /^\w*$/;
  function Ew(e, t) {
    if (Jl(e)) return !1;
    var n = typeof e;
    return n == 'number' || n == 'symbol' || n == 'boolean' || e == null || Ql(e)
      ? !0
      : $w.test(e) || !ww.test(e) || (t != null && e in Object(t));
  }
  var Ow = wm(Object, 'create');
  const lo = Ow;
  function _w() {
    (this.__data__ = lo ? lo(null) : {}), (this.size = 0);
  }
  function Iw(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var Pw = '__lodash_hash_undefined__',
    Rw = Object.prototype,
    Tw = Rw.hasOwnProperty;
  function Mw(e) {
    var t = this.__data__;
    if (lo) {
      var n = t[e];
      return n === Pw ? void 0 : n;
    }
    return Tw.call(t, e) ? t[e] : void 0;
  }
  var Nw = Object.prototype,
    Fw = Nw.hasOwnProperty;
  function Aw(e) {
    var t = this.__data__;
    return lo ? t[e] !== void 0 : Fw.call(t, e);
  }
  var zw = '__lodash_hash_undefined__';
  function Dw(e, t) {
    var n = this.__data__;
    return (this.size += this.has(e) ? 0 : 1), (n[e] = lo && t === void 0 ? zw : t), this;
  }
  function Xn(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (Xn.prototype.clear = _w),
    (Xn.prototype.delete = Iw),
    (Xn.prototype.get = Mw),
    (Xn.prototype.has = Aw),
    (Xn.prototype.set = Dw);
  function jw() {
    (this.__data__ = []), (this.size = 0);
  }
  function zi(e, t) {
    for (var n = e.length; n--; ) if (xw(e[n][0], t)) return n;
    return -1;
  }
  var Lw = Array.prototype,
    Hw = Lw.splice;
  function kw(e) {
    var t = this.__data__,
      n = zi(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : Hw.call(t, n, 1), --this.size, !0;
  }
  function Vw(e) {
    var t = this.__data__,
      n = zi(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function Bw(e) {
    return zi(this.__data__, e) > -1;
  }
  function Ww(e, t) {
    var n = this.__data__,
      r = zi(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  }
  function Or(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (Or.prototype.clear = jw),
    (Or.prototype.delete = kw),
    (Or.prototype.get = Vw),
    (Or.prototype.has = Bw),
    (Or.prototype.set = Ww);
  var Uw = wm(Yl, 'Map');
  const Gw = Uw;
  function Kw() {
    (this.size = 0), (this.__data__ = { hash: new Xn(), map: new (Gw || Or)(), string: new Xn() });
  }
  function Xw(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean' ? e !== '__proto__' : e === null;
  }
  function Di(e, t) {
    var n = e.__data__;
    return Xw(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
  }
  function qw(e) {
    var t = Di(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function Yw(e) {
    return Di(this, e).get(e);
  }
  function Qw(e) {
    return Di(this, e).has(e);
  }
  function Jw(e, t) {
    var n = Di(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  }
  function qn(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (qn.prototype.clear = Kw),
    (qn.prototype.delete = qw),
    (qn.prototype.get = Yw),
    (qn.prototype.has = Qw),
    (qn.prototype.set = Jw);
  var Zw = 'Expected a function';
  function es(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(Zw);
    var n = function () {
      var r = arguments,
        o = t ? t.apply(this, r) : r[0],
        i = n.cache;
      if (i.has(o)) return i.get(o);
      var a = e.apply(this, r);
      return (n.cache = i.set(o, a) || i), a;
    };
    return (n.cache = new (es.Cache || qn)()), n;
  }
  es.Cache = qn;
  var e$ = 500;
  function t$(e) {
    var t = es(e, function (r) {
        return n.size === e$ && n.clear(), r;
      }),
      n = t.cache;
    return t;
  }
  var n$ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    r$ = /\\(\\)?/g,
    o$ = t$(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(n$, function (n, r, o, i) {
          t.push(o ? i.replace(r$, '$1') : r || n);
        }),
        t
      );
    });
  const i$ = o$;
  function a$(e) {
    return e == null ? '' : Sm(e);
  }
  function l$(e, t) {
    return Jl(e) ? e : Ew(e, t) ? [e] : i$(a$(e));
  }
  var s$ = 1 / 0;
  function c$(e) {
    if (typeof e == 'string' || Ql(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -s$ ? '-0' : t;
  }
  function u$(e, t) {
    t = l$(t, e);
    for (var n = 0, r = t.length; e != null && n < r; ) e = e[c$(t[n++])];
    return n && n == r ? e : void 0;
  }
  function ji(e, t, n) {
    var r = e == null ? void 0 : u$(e, t);
    return r === void 0 ? n : r;
  }
  async function ts(e) {
    const t = { 'Content-Type': 'application/json', ...e.headers };
    return new Promise((n, r) => {
      Nm({
        method: 'GET',
        ...e,
        headers: t,
        onload: function (o) {
          if (o.status === 200) {
            const i = o.responseText;
            try {
              const a = JSON.parse(i);
              n(a);
            } catch (a) {
              r(a);
            }
          } else r(o);
        },
      });
    });
  }
  var ns = {},
    d$ = {
      get exports() {
        return ns;
      },
      set exports(e) {
        ns = e;
      },
    },
    rs,
    $m;
  function f$() {
    if ($m) return rs;
    $m = 1;
    var e = 1e3,
      t = e * 60,
      n = t * 60,
      r = n * 24,
      o = r * 7,
      i = r * 365.25;
    rs = function (u, d) {
      d = d || {};
      var f = typeof u;
      if (f === 'string' && u.length > 0) return a(u);
      if (f === 'number' && isFinite(u)) return d.long ? s(u) : l(u);
      throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(u));
    };
    function a(u) {
      if (((u = String(u)), !(u.length > 100))) {
        var d =
          /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
            u,
          );
        if (d) {
          var f = parseFloat(d[1]),
            g = (d[2] || 'ms').toLowerCase();
          switch (g) {
            case 'years':
            case 'year':
            case 'yrs':
            case 'yr':
            case 'y':
              return f * i;
            case 'weeks':
            case 'week':
            case 'w':
              return f * o;
            case 'days':
            case 'day':
            case 'd':
              return f * r;
            case 'hours':
            case 'hour':
            case 'hrs':
            case 'hr':
            case 'h':
              return f * n;
            case 'minutes':
            case 'minute':
            case 'mins':
            case 'min':
            case 'm':
              return f * t;
            case 'seconds':
            case 'second':
            case 'secs':
            case 'sec':
            case 's':
              return f * e;
            case 'milliseconds':
            case 'millisecond':
            case 'msecs':
            case 'msec':
            case 'ms':
              return f;
            default:
              return;
          }
        }
      }
    }
    function l(u) {
      var d = Math.abs(u);
      return d >= r
        ? Math.round(u / r) + 'd'
        : d >= n
        ? Math.round(u / n) + 'h'
        : d >= t
        ? Math.round(u / t) + 'm'
        : d >= e
        ? Math.round(u / e) + 's'
        : u + 'ms';
    }
    function s(u) {
      var d = Math.abs(u);
      return d >= r
        ? c(u, d, r, 'day')
        : d >= n
        ? c(u, d, n, 'hour')
        : d >= t
        ? c(u, d, t, 'minute')
        : d >= e
        ? c(u, d, e, 'second')
        : u + ' ms';
    }
    function c(u, d, f, g) {
      var h = d >= f * 1.5;
      return Math.round(u / f) + ' ' + g + (h ? 's' : '');
    }
    return rs;
  }
  function m$(e) {
    (n.debug = n),
      (n.default = n),
      (n.coerce = s),
      (n.disable = i),
      (n.enable = o),
      (n.enabled = a),
      (n.humanize = f$()),
      (n.destroy = c),
      Object.keys(e).forEach((u) => {
        n[u] = e[u];
      }),
      (n.names = []),
      (n.skips = []),
      (n.formatters = {});
    function t(u) {
      let d = 0;
      for (let f = 0; f < u.length; f++) (d = (d << 5) - d + u.charCodeAt(f)), (d |= 0);
      return n.colors[Math.abs(d) % n.colors.length];
    }
    n.selectColor = t;
    function n(u) {
      let d,
        f = null,
        g,
        h;
      function p(...y) {
        if (!p.enabled) return;
        const b = p,
          S = Number(new Date()),
          x = S - (d || S);
        (b.diff = x),
          (b.prev = d),
          (b.curr = S),
          (d = S),
          (y[0] = n.coerce(y[0])),
          typeof y[0] != 'string' && y.unshift('%O');
        let _ = 0;
        (y[0] = y[0].replace(/%([a-zA-Z%])/g, (O, v) => {
          if (O === '%%') return '%';
          _++;
          const C = n.formatters[v];
          if (typeof C == 'function') {
            const $ = y[_];
            (O = C.call(b, $)), y.splice(_, 1), _--;
          }
          return O;
        })),
          n.formatArgs.call(b, y),
          (b.log || n.log).apply(b, y);
      }
      return (
        (p.namespace = u),
        (p.useColors = n.useColors()),
        (p.color = n.selectColor(u)),
        (p.extend = r),
        (p.destroy = n.destroy),
        Object.defineProperty(p, 'enabled', {
          enumerable: !0,
          configurable: !1,
          get: () => (f !== null ? f : (g !== n.namespaces && ((g = n.namespaces), (h = n.enabled(u))), h)),
          set: (y) => {
            f = y;
          },
        }),
        typeof n.init == 'function' && n.init(p),
        p
      );
    }
    function r(u, d) {
      const f = n(this.namespace + (typeof d > 'u' ? ':' : d) + u);
      return (f.log = this.log), f;
    }
    function o(u) {
      n.save(u), (n.namespaces = u), (n.names = []), (n.skips = []);
      let d;
      const f = (typeof u == 'string' ? u : '').split(/[\s,]+/),
        g = f.length;
      for (d = 0; d < g; d++)
        f[d] &&
          ((u = f[d].replace(/\*/g, '.*?')),
          u[0] === '-' ? n.skips.push(new RegExp('^' + u.slice(1) + '$')) : n.names.push(new RegExp('^' + u + '$')));
    }
    function i() {
      const u = [...n.names.map(l), ...n.skips.map(l).map((d) => '-' + d)].join(',');
      return n.enable(''), u;
    }
    function a(u) {
      if (u[u.length - 1] === '*') return !0;
      let d, f;
      for (d = 0, f = n.skips.length; d < f; d++) if (n.skips[d].test(u)) return !1;
      for (d = 0, f = n.names.length; d < f; d++) if (n.names[d].test(u)) return !0;
      return !1;
    }
    function l(u) {
      return u
        .toString()
        .substring(2, u.toString().length - 2)
        .replace(/\.\*\?$/, '*');
    }
    function s(u) {
      return u instanceof Error ? u.stack || u.message : u;
    }
    function c() {
      console.warn(
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
      );
    }
    return n.enable(n.load()), n;
  }
  var g$ = m$;
  (function (e, t) {
    (t.formatArgs = r),
      (t.save = o),
      (t.load = i),
      (t.useColors = n),
      (t.storage = a()),
      (t.destroy = (() => {
        let s = !1;
        return () => {
          s ||
            ((s = !0),
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
    function r(s) {
      if (
        ((s[0] =
          (this.useColors ? '%c' : '') +
          this.namespace +
          (this.useColors ? ' %c' : ' ') +
          s[0] +
          (this.useColors ? '%c ' : ' ') +
          '+' +
          e.exports.humanize(this.diff)),
        !this.useColors)
      )
        return;
      const c = 'color: ' + this.color;
      s.splice(1, 0, c, 'color: inherit');
      let u = 0,
        d = 0;
      s[0].replace(/%[a-zA-Z%]/g, (f) => {
        f !== '%%' && (u++, f === '%c' && (d = u));
      }),
        s.splice(d, 0, c);
    }
    t.log = console.debug || console.log || (() => {});
    function o(s) {
      try {
        s ? t.storage.setItem('debug', s) : t.storage.removeItem('debug');
      } catch {}
    }
    function i() {
      let s;
      try {
        s = t.storage.getItem('debug');
      } catch {}
      return !s && typeof process < 'u' && 'env' in process && (s = process.env.DEBUG), s;
    }
    function a() {
      try {
        return localStorage;
      } catch {}
    }
    e.exports = g$(t);
    const { formatters: l } = e.exports;
    l.j = function (s) {
      try {
        return JSON.stringify(s);
      } catch (c) {
        return '[UnexpectedJSONParseError]: ' + c.message;
      }
    };
  })(d$, ns);
  async function Em(e) {
    const t = Kt.loading('Getting DEF info...');
    try {
      const n = await ts({ url: `https://work.def.alibaba-inc.com/api/search?q=${encodeURIComponent(e)}&t=app` }),
        r = ji(n, 'data.apps.0.id');
      rn.open(`https://work.def.alibaba-inc.com/app/${r}/index`);
    } catch (n) {
      console.log(n, 'xxx'), Kt.error(n.error);
    } finally {
      t();
    }
  }
  async function Om(e) {
    const t = Kt.loading('Getting Git info...');
    try {
      const n = await ts({ url: `https://work.def.alibaba-inc.com/api/search?q=${encodeURIComponent(e)}&t=app` }),
        r = ji(n, 'data.apps.0.group'),
        o = ji(n, 'data.apps.0.project');
      rn.open(`https://code.alibaba-inc.com/${r}/${o}`);
    } catch (n) {
      Kt.error(n.error);
    } finally {
      t();
    }
  }
  async function _m(e) {
    const t = Kt.loading('Getting Astore info...');
    try {
      const n = await ts({
          url: `https://astore.alibaba-inc.com/module/getMyModuleList?siteId=163&keyword=${encodeURIComponent(
            e,
          )}&pageSize=20&currentPage=1&moduleType=biz`,
        }),
        r = ji(n, 'data.dataList.0.id');
      console.log(n, r, 'xxx'), rn.open(`https://astore.alibaba-inc.com/?#/site/163/module/biz-module/${r}`);
    } catch (n) {
      Kt.error(n.error);
    } finally {
      t();
    }
  }
  const fE = '',
    p$ = Gn.Item,
    h$ = ({ moduleName: e, moduleAliasName: t, backgroundColor: n }) => {
      const [r, o] = oe(!1),
        i = () => {
          o(!0);
        },
        a = () => {
          o(!1);
        },
        l = () => {
          Em(t);
        },
        s = () => {
          Om(t);
        },
        c = () => {
          _m(e);
        },
        u = () => {
          const f = JSON.stringify(['ARISE_ES']),
            g = JSON.stringify([e ?? '']);
          un.lib.mtop
            .request({
              api: 'mtop.lazada.shop.component.cache.reset',
              v: '1.0',
              method: 'GET',
              dataType: 'json',
              data: { tenantIds: f, componentKeys: g, isAll: !0 },
            })
            .then(
              function ({ retType: p, data: y, ret: b }) {
                Kt.open({
                  type: 'success',
                  content: 'The module cache has been cleared, and the current page will be refreshed in 3 seconds',
                  duration: 3,
                  onClose: () => {
                    un.location.reload();
                  },
                });
              },
              function ({ retType: p, data: y, ret: b }) {
                Kt.open({ type: 'error', content: b, duration: 3 });
              },
            );
        },
        d = (f) => (g) => {
          const h = document.createElement('input');
          (h.value = f),
            document.body.appendChild(h),
            h.select(),
            document.execCommand('copy') &&
              (document.execCommand('copy'),
              Kt.open({ type: 'success', content: 'The field value has been copied', duration: 3 })),
            document.body.removeChild(h);
        };
      return Te(m.Fragment, {
        children: [
          Te('div', {
            class: 'store-dev-tools',
            'data-moduleName': e,
            style: { backgroundColor: n },
            children: [
              Te('div', { className: 'store-dev-tools-icon', children: Te(Zf, { onclick: i }) }),
              Te('div', { className: 'store-dev-tools-icon', children: Te(om, { onclick: u }) }),
            ],
          }),
          Te(jl, {
            className: 'store-drawer-container',
            title: 'Store Dev Tools',
            placement: 'right',
            onClose: a,
            open: r,
            children: [
              Te('div', {
                className: 'store-dev-tools-panel',
                children: Te(Of, {
                  split: Te(Mf, { type: 'vertical' }),
                  children: [
                    Te(Mn.Link, { onclick: l, children: 'DEF' }),
                    Te(Mn.Link, { onclick: s, children: 'GIT' }),
                    Te(Mn.Link, { onclick: c, children: 'Astore' }),
                    Te(Mn.Link, { onclick: u, children: 'Clear Cache' }),
                  ],
                }),
              }),
              Te(Gn, {
                className: 'store-dev-tools-list',
                size: 'small',
                bordered: !0,
                dataSource: [
                  { label: 'Module Name', title: e },
                  { label: 'Module Alias Name', title: t },
                ],
                renderItem: (f) =>
                  Te(p$, {
                    children: Te(Gn.Item.Meta, {
                      title: f.label,
                      description: Te('div', {
                        children: [' ', f.title, Te(Kl, { className: 'store-btn-copy', onclick: d(f.title) })],
                      }),
                    }),
                  }),
              }),
            ],
          }),
        ],
      });
    },
    mE = '',
    v$ = Gn.Item,
    b$ = ({ moduleName: e, moduleAliasName: t, backgroundColor: n }) => {
      const [r, o] = oe(!1),
        i = () => {
          o(!0);
        },
        a = () => {
          o(!1);
        },
        l = () => {
          Em(t);
        },
        s = () => {
          Om(t);
        },
        c = () => {
          _m(e);
        },
        u = () => {
          const f = JSON.stringify(['ARISE_ES']),
            g = JSON.stringify([e ?? '']);
          un.lib.mtop
            .request({
              api: 'mtop.lazada.shop.component.cache.reset',
              v: '1.0',
              method: 'GET',
              dataType: 'json',
              data: { tenantIds: f, componentKeys: g, isAll: !0 },
            })
            .then(
              function ({ retType: p, data: y, ret: b }) {
                Kt.open({
                  type: 'success',
                  content: 'The module cache has been cleared, and the current page will be refreshed in 3 seconds',
                  duration: 3,
                  onClose: () => {
                    un.location.reload();
                  },
                });
              },
              function ({ retType: p, data: y, ret: b }) {
                Kt.open({ type: 'error', content: b, duration: 3 });
              },
            );
        },
        d = (f) => (g) => {
          const h = document.createElement('input');
          (h.value = f),
            document.body.appendChild(h),
            h.select(),
            document.execCommand('copy') &&
              (document.execCommand('copy'),
              Kt.open({ type: 'success', content: 'The field value has been copied', duration: 3 })),
            document.body.removeChild(h);
        };
      return Te(m.Fragment, {
        children: [
          Te('div', {
            class: 'store-dev-tools',
            style: { backgroundColor: n },
            children: [
              Te('div', {
                className: 'store-dev-tools-icon',
                children: Te(Pi, { placement: 'left', title: e, children: Te(Zf, { onclick: i }) }),
              }),
              Te('div', { className: 'store-dev-tools-icon', children: Te(om, { onclick: u }) }),
            ],
          }),
          Te(jl, {
            className: 'store-drawer-container',
            title: 'Store Dev Tools',
            placement: 'right',
            onClose: a,
            open: r,
            children: [
              Te('div', {
                className: 'store-dev-tools-panel',
                children: Te(Of, {
                  split: Te(Mf, { type: 'vertical' }),
                  children: [
                    Te(Mn.Link, { onclick: l, children: 'DEF' }),
                    Te(Mn.Link, { onclick: s, children: 'GIT' }),
                    Te(Mn.Link, { onclick: c, children: 'Astore' }),
                    Te(Mn.Link, { onclick: u, children: 'Clear Cache' }),
                  ],
                }),
              }),
              Te(Gn, {
                className: 'store-dev-tools-list',
                size: 'small',
                bordered: !0,
                dataSource: [
                  { label: 'Module Name', title: e },
                  { label: 'Module Alias Name', title: t },
                ],
                renderItem: (f) =>
                  Te(v$, {
                    children: Te(Gn.Item.Meta, {
                      title: f.label,
                      description: Te('div', {
                        children: [' ', f.title, Te(Kl, { className: 'store-btn-copy', onclick: d(f.title) })],
                      }),
                    }),
                  }),
              }),
            ],
          }),
        ],
      });
    };
  var Li = {},
    y$ = {
      get exports() {
        return Li;
      },
      set exports(e) {
        Li = e;
      },
    };
  (function (e, t) {
    (function (n, r) {
      {
        var o = r();
        e && e.exports && (t = e.exports = o), (t.randomColor = o);
      }
    })(Dm, function () {
      var n = null,
        r = {};
      b();
      var o = [],
        i = function (v) {
          if (((v = v || {}), v.seed !== void 0 && v.seed !== null && v.seed === parseInt(v.seed, 10))) n = v.seed;
          else if (typeof v.seed == 'string') n = R(v.seed);
          else {
            if (v.seed !== void 0 && v.seed !== null)
              throw new TypeError('The seed value must be an integer or string');
            n = null;
          }
          var C, $, E;
          if (v.count !== null && v.count !== void 0) {
            for (var T = v.count, P = [], w = 0; w < v.count; w++) o.push(!1);
            for (v.count = null; T > P.length; ) {
              var I = i(v);
              n !== null && (v.seed = n), P.push(I);
            }
            return (v.count = T), P;
          }
          return (C = a(v)), ($ = l(C, v)), (E = s(C, $, v)), c([C, $, E], v);
        };
      function a(v) {
        if (o.length > 0) {
          var C = O(v.hue),
            $ = h(C),
            E = (C[1] - C[0]) / o.length,
            T = parseInt(($ - C[0]) / E);
          o[T] === !0 ? (T = (T + 2) % o.length) : (o[T] = !0);
          var P = (C[0] + T * E) % 359,
            w = (C[0] + (T + 1) * E) % 359;
          return (C = [P, w]), ($ = h(C)), $ < 0 && ($ = 360 + $), $;
        } else {
          var C = d(v.hue);
          return ($ = h(C)), $ < 0 && ($ = 360 + $), $;
        }
      }
      function l(v, C) {
        if (C.hue === 'monochrome') return 0;
        if (C.luminosity === 'random') return h([0, 100]);
        var $ = f(v),
          E = $[0],
          T = $[1];
        switch (C.luminosity) {
          case 'bright':
            E = 55;
            break;
          case 'dark':
            E = T - 10;
            break;
          case 'light':
            T = 55;
            break;
        }
        return h([E, T]);
      }
      function s(v, C, $) {
        var E = u(v, C),
          T = 100;
        switch ($.luminosity) {
          case 'dark':
            T = E + 20;
            break;
          case 'light':
            E = (T + E) / 2;
            break;
          case 'random':
            (E = 0), (T = 100);
            break;
        }
        return h([E, T]);
      }
      function c(v, C) {
        switch (C.format) {
          case 'hsvArray':
            return v;
          case 'hslArray':
            return _(v);
          case 'hsl':
            var $ = _(v);
            return 'hsl(' + $[0] + ', ' + $[1] + '%, ' + $[2] + '%)';
          case 'hsla':
            var E = _(v),
              w = C.alpha || Math.random();
            return 'hsla(' + E[0] + ', ' + E[1] + '%, ' + E[2] + '%, ' + w + ')';
          case 'rgbArray':
            return S(v);
          case 'rgb':
            var T = S(v);
            return 'rgb(' + T.join(', ') + ')';
          case 'rgba':
            var P = S(v),
              w = C.alpha || Math.random();
            return 'rgba(' + P.join(', ') + ', ' + w + ')';
          default:
            return p(v);
        }
      }
      function u(v, C) {
        for (var $ = g(v).lowerBounds, E = 0; E < $.length - 1; E++) {
          var T = $[E][0],
            P = $[E][1],
            w = $[E + 1][0],
            I = $[E + 1][1];
          if (C >= T && C <= w) {
            var M = (I - P) / (w - T),
              N = P - M * T;
            return M * C + N;
          }
        }
        return 0;
      }
      function d(v) {
        if (typeof parseInt(v) == 'number') {
          var C = parseInt(v);
          if (C < 360 && C > 0) return [C, C];
        }
        if (typeof v == 'string') {
          if (r[v]) {
            var $ = r[v];
            if ($.hueRange) return $.hueRange;
          } else if (v.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
            var E = x(v)[0];
            return [E, E];
          }
        }
        return [0, 360];
      }
      function f(v) {
        return g(v).saturationRange;
      }
      function g(v) {
        v >= 334 && v <= 360 && (v -= 360);
        for (var C in r) {
          var $ = r[C];
          if ($.hueRange && v >= $.hueRange[0] && v <= $.hueRange[1]) return r[C];
        }
        return 'Color not found';
      }
      function h(v) {
        if (n === null) {
          var C = 0.618033988749895,
            $ = Math.random();
          return ($ += C), ($ %= 1), Math.floor(v[0] + $ * (v[1] + 1 - v[0]));
        } else {
          var E = v[1] || 1,
            T = v[0] || 0;
          n = (n * 9301 + 49297) % 233280;
          var P = n / 233280;
          return Math.floor(T + P * (E - T));
        }
      }
      function p(v) {
        var C = S(v);
        function $(T) {
          var P = T.toString(16);
          return P.length == 1 ? '0' + P : P;
        }
        var E = '#' + $(C[0]) + $(C[1]) + $(C[2]);
        return E;
      }
      function y(v, C, $) {
        var E = $[0][0],
          T = $[$.length - 1][0],
          P = $[$.length - 1][1],
          w = $[0][1];
        r[v] = { hueRange: C, lowerBounds: $, saturationRange: [E, T], brightnessRange: [P, w] };
      }
      function b() {
        y('monochrome', null, [
          [0, 0],
          [100, 0],
        ]),
          y(
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
          y(
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
          y(
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
          y(
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
          y(
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
          y(
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
          y(
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
      function S(v) {
        var C = v[0];
        C === 0 && (C = 1), C === 360 && (C = 359), (C = C / 360);
        var $ = v[1] / 100,
          E = v[2] / 100,
          T = Math.floor(C * 6),
          P = C * 6 - T,
          w = E * (1 - $),
          I = E * (1 - P * $),
          M = E * (1 - (1 - P) * $),
          N = 256,
          A = 256,
          D = 256;
        switch (T) {
          case 0:
            (N = E), (A = M), (D = w);
            break;
          case 1:
            (N = I), (A = E), (D = w);
            break;
          case 2:
            (N = w), (A = E), (D = M);
            break;
          case 3:
            (N = w), (A = I), (D = E);
            break;
          case 4:
            (N = M), (A = w), (D = E);
            break;
          case 5:
            (N = E), (A = w), (D = I);
            break;
        }
        var j = [Math.floor(N * 255), Math.floor(A * 255), Math.floor(D * 255)];
        return j;
      }
      function x(v) {
        (v = v.replace(/^#/, '')), (v = v.length === 3 ? v.replace(/(.)/g, '$1$1') : v);
        var C = parseInt(v.substr(0, 2), 16) / 255,
          $ = parseInt(v.substr(2, 2), 16) / 255,
          E = parseInt(v.substr(4, 2), 16) / 255,
          T = Math.max(C, $, E),
          P = T - Math.min(C, $, E),
          w = T ? P / T : 0;
        switch (T) {
          case C:
            return [60 * ((($ - E) / P) % 6) || 0, w, T];
          case $:
            return [60 * ((E - C) / P + 2) || 0, w, T];
          case E:
            return [60 * ((C - $) / P + 4) || 0, w, T];
        }
      }
      function _(v) {
        var C = v[0],
          $ = v[1] / 100,
          E = v[2] / 100,
          T = (2 - $) * E;
        return [C, Math.round((($ * E) / (T < 1 ? T : 2 - T)) * 1e4) / 100, (T / 2) * 100];
      }
      function R(v) {
        for (var C = 0, $ = 0; $ !== v.length && !(C >= Number.MAX_SAFE_INTEGER); $++) C += v.charCodeAt($);
        return C;
      }
      function O(v) {
        if (isNaN(v)) {
          if (typeof v == 'string') {
            if (r[v]) {
              var $ = r[v];
              if ($.hueRange) return $.hueRange;
            } else if (v.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
              var E = x(v)[0];
              return g(E).hueRange;
            }
          }
        } else {
          var C = parseInt(v);
          if (C < 360 && C > 0) return g(v).hueRange;
        }
        return [0, 360];
      }
      return i;
    });
  })(y$, Li);
  const Im = Li;
  function S$() {
    const e = rn.$,
      t = rn.navigator.userAgent,
      r = t.includes('Mobile') || t.includes('Android') ? 'arise-wl-' : 'arise-pc-',
      o = e('*[data-spm-protocol="i"]'),
      i = Im({ count: 100, format: 'rgba', alpha: 0.7 });
    e(document).on('scroll', a), a();
    function a() {
      e(o)
        .children()
        .not('.module-tools-panel')
        .each((l, s) => {
          const c = e(s).attr('data-spm-module');
          if (!c) return;
          const u = m.render(m.h(h$, { moduleAliasName: r + c, moduleName: c, backgroundColor: i[l] }), s);
          e(s).height() > 20
            ? (e(s).addClass('module-tools-panel'), e(u).insertBefore(e(s).children().get(0)))
            : e(s).addClass('module-unuse-panel');
        });
    }
  }
  function C$() {
    const e = rn.$,
      t = rn.navigator.userAgent,
      r = t.includes('Mobile') || t.includes('Android') ? 'arise-wl-' : 'arise-pc-',
      o = e('.pi-layout-container'),
      i = Im({ count: 100, format: 'rgba', alpha: 0.7 });
    e(document).on('scroll', a), a();
    function a() {
      e(o)
        .find('*[data-modulename]')
        .not('.module-tools-panel')
        .each(async (l, s) => {
          const c = e(s).attr('data-modulename');
          if (!c) return null;
          e(s).height() > 20
            ? e(s).addClass('module-tools-panel').append('<div class="store-dev-tools"></div>')
            : e(s).addClass('module-unuse-panel'),
            await as(300),
            e(s).find('.store-dev-tools').get(0) &&
              m.render(
                m.h(b$, { moduleAliasName: r + c, moduleName: c, backgroundColor: i[l] }),
                e(s).find('.store-dev-tools').get(0),
              );
        });
    }
  }
  function x$() {
    const e = rn.navigator.userAgent;
    e.includes('Mobile') || e.includes('Android') ? S$() : C$();
  }
  return (async () => {
    jx(), x$();
  })();
})(preact);
