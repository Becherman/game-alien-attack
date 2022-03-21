(() => {
  "use strict";
  var n,
    e,
    t,
    r,
    o,
    a,
    i,
    s,
    c,
    l,
    p,
    u,
    d,
    f,
    v = {
      918: (n, e, t) => {
        t.d(e, { Z: () => d });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a),
          s = t(667),
          c = t.n(s),
          l = new URL(t(461), t.b),
          p = i()(o()),
          u = c()(l);
        p.push([
          n.id,
          "@font-face {\n  font-family: Retro;\n  src: url(" +
            u +
            ");\n}\n\n:root {\n  --black: rgba(0,0,0,1);\n  --green: rgb(97 170 8);\n  --green-light: rgb(44 255 21);\n  --yellow: #F6EB14;\n  --red: #EF4423;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: Retro, serif;\n}\n\n.wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.app {\n  width: 200px;\n  margin: 0 auto;\n  padding: 1rem;\n  text-transform: uppercase;\n  border-radius: 4px;\n  background: linear-gradient(326deg, var(--black) 0%, var(--green) 100%);\n}\n\n.header {\n  text-align: center;\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n  color: var(--yellow);\n  text-shadow: 2px 2px 2px var(--green);\n}\n\n.game-object {\n  position: absolute;\n}\n\n.display {\n  height: 200px;\n  background-color: var(--black);\n  position: relative;\n  overflow: hidden;\n  border: 1px solid var(--green);\n  box-shadow: 2px 2px 6px 1px var(--black);\n}\n\n.display__earth {\n  border: 2px dotted var(--yellow);\n  height: 35%;\n  border-radius: 50%;\n  position: absolute;\n  width: 100%;\n  top: 85%;\n}\n\n.display__ship {\n  bottom: 0;\n  left: 85px;\n}\n\n.display__shot {\n  bottom: 55px;\n  left: 95px;\n}\n\n.display__alien {\n  top: 35px;\n  right: 135px;\n}\n\n.stats {\n  display: flex;\n  flex-direction: column;\n  font-size: 0.6rem;\n  padding: 0.6rem;\n  text-align: center;\n  color: var(--yellow);\n}\n\n.controls {\n  display: flex;\n  justify-content: space-between;\n}\n\n.controls > * {\n  width: 30%;\n  font-size: 0.75rem;\n  outline: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.controls__input {\n  padding: 0.25rem;\n  color: var(--yellow);\n  border: 2px solid var(--green);\n  background-color: var(--black);\n}\n\n.controls__input:focus {\n  outline: none;\n}\n\n.controls__shot {\n  color: var(--black);\n  border: 2px solid var(--green-light);\n  background: var(--yellow);\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n\n.controls__shot:hover {\n  animation-name: alarm;\n}\n\n@keyframes alarm {\n  from {\n    background: var(--yellow);\n  }\n  to {\n    background: var(--red);\n  }\n}",
          "",
        ]);
        const d = p;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var p = [].concat(n[l]);
                (r && i[p[0]]) ||
                  (void 0 !== a &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = a)),
                  t &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = t))
                      : (p[2] = t)),
                  o &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = o))
                      : (p[4] = "".concat(o))),
                  e.push(p));
              }
            }),
            e
          );
        };
      },
      667: (n) => {
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : n)
              : n
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], s = 0; s < n.length; s++) {
            var c = n[s],
              l = r.base ? c[0] + r.base : c[0],
              p = a[l] || 0,
              u = "".concat(l, " ").concat(p);
            a[l] = p + 1;
            var d = t(u),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== d) e[d].references++, e[d].updater(f);
            else {
              var v = o(f, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: u, updater: v, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              e[s].references--;
            }
            for (var c = r(n, o), l = 0; l < a.length; l++) {
              var p = t(a[l]);
              0 === e[p].references && (e[p].updater(), e.splice(p, 1));
            }
            a = c;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      461: (n, e, t) => {
        n.exports = t.p + "d3aa5fc07030eb5f05a3.ttf";
      },
    },
    h = {};
  function m(n) {
    var e = h[n];
    if (void 0 !== e) return e.exports;
    var t = (h[n] = { id: n, exports: {} });
    return v[n](t, t.exports, m), t.exports;
  }
  (m.m = v),
    (m.n = (n) => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return m.d(e, { a: e }), e;
    }),
    (m.d = (n, e) => {
      for (var t in e)
        m.o(e, t) &&
          !m.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
    }),
    (m.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (m.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n;
      m.g.importScripts && (n = m.g.location + "");
      var e = m.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var t = e.getElementsByTagName("script");
        t.length && (n = t[t.length - 1].src);
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (m.p = n);
    })(),
    (m.b = document.baseURI || self.location.href),
    (n = m(379)),
    (e = m.n(n)),
    (t = m(795)),
    (r = m.n(t)),
    (o = m(569)),
    (a = m.n(o)),
    (i = m(565)),
    (s = m.n(i)),
    (c = m(216)),
    (l = m.n(c)),
    (p = m(589)),
    (u = m.n(p)),
    (d = m(918)),
    ((f = {}).styleTagTransform = u()),
    (f.setAttributes = s()),
    (f.insert = a().bind(null, "head")),
    (f.domAPI = r()),
    (f.insertStyleElement = l()),
    e()(d.Z, f),
    d.Z && d.Z.locals && d.Z.locals,
    console.log(132);
})();
