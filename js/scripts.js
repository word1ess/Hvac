/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (ie, e) {
  "use strict";
  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat
      ? function (e) {
          return oe.flat.call(e);
        }
      : function (e) {
          return oe.concat.apply([], e);
        },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (((o.text = e), t))
      for (r in u)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[i.call(e)] || "object"
      : typeof e;
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !v(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (ce.fn = ce.prototype =
    {
      jquery: t,
      constructor: ce,
      length: 0,
      toArray: function () {
        return ae.call(this);
      },
      get: function (e) {
        return null == e
          ? ae.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = ce.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return ce.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          ce.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(ae.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: oe.sort,
      splice: oe.splice,
    }),
    (ce.extend = ce.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || v(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || ce.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = ce.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    ce.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== i.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = ue.call(t, "constructor") && t.constructor) &&
              o.call(n) === a))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        m(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (c(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (!i) while ((t = e[r++])) n += ce.text(t);
        return 1 === i || 11 === i
          ? e.textContent
          : 9 === i
          ? e.documentElement.textContent
          : 3 === i || 4 === i
          ? e.nodeValue
          : n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (c(Object(e))
              ? ce.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : se.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !l.test(t || (n && n.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (c(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: le,
    }),
    "function" == typeof Symbol &&
      (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t
      ? "\0" === e
        ? "\ufffd"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !(function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0;
      },
      f =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        ge +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p =
        "\\[" +
        ge +
        "*(" +
        t +
        ")(?:" +
        ge +
        "*([*^$|!~]?=)" +
        ge +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        t +
        "))|)" +
        ge +
        "*\\]",
      g =
        ":(" +
        t +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        p +
        ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ge +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ge +
            "*(?:([+-]|)" +
            ge +
            "*(\\d+)|))" +
            ge +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ge +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ge +
            "*((?:-\\d)?\\d*)" +
            ge +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      M = function () {
        V();
      },
      R = J(
        function (e) {
          return !0 === e.disabled && fe(e, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      k.apply((oe = ae.call(ye.childNodes)), ye.childNodes),
        oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t));
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1));
        },
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (V(e), (e = e || T), C)) {
        if (11 !== p && (u = L.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return k.call(n, a), n;
            } else if (
              f &&
              (a = f.getElementById(i)) &&
              I.contains(e, a) &&
              a.id === i
            )
              return k.call(n, a), n;
          } else {
            if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && e.getElementsByClassName)
              return k.apply(n, e.getElementsByClassName(i)), n;
          }
        if (!(h[t + " "] || (d && d.test(t)))) {
          if (((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))) {
            ((f = (H.test(t) && U(e.parentNode)) || e) == e && le.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = ce.escapeSelector(s))
                : e.setAttribute("id", (s = S))),
              (o = (l = Y(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function F(e) {
      return (e[S] = !0), e;
    }
    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }
    function z(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && R(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function X(a) {
      return F(function (o) {
        return (
          (o = +o),
          F(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function U(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return (
        n != T &&
          9 === n.nodeType &&
          n.documentElement &&
          ((r = (T = n).documentElement),
          (C = !ce.isXMLDoc(T)),
          (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
          r.msMatchesSelector &&
            ye != T &&
            (t = T.defaultView) &&
            t.top !== t &&
            t.addEventListener("unload", M),
          (le.getById = $(function (e) {
            return (
              (r.appendChild(e).id = ce.expando),
              !T.getElementsByName || !T.getElementsByName(ce.expando).length
            );
          })),
          (le.disconnectedMatch = $(function (e) {
            return i.call(e, "*");
          })),
          (le.scope = $(function () {
            return T.querySelectorAll(":scope");
          })),
          (le.cssHas = $(function () {
            try {
              return T.querySelector(":has(*,:jqfake)"), !1;
            } catch (e) {
              return !0;
            }
          })),
          le.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(O, P);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(O, P);
                return function (e) {
                  var t =
                    "undefined" != typeof e.getAttributeNode &&
                    e.getAttributeNode("id");
                  return t && t.value === n;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e)
                      return [o];
                    (i = t.getElementsByName(e)), (r = 0);
                    while ((o = i[r++]))
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (b.find.TAG = function (e, t) {
            return "undefined" != typeof t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          }),
          (b.find.CLASS = function (e, t) {
            if ("undefined" != typeof t.getElementsByClassName && C)
              return t.getElementsByClassName(e);
          }),
          (d = []),
          $(function (e) {
            var t;
            (r.appendChild(e).innerHTML =
              "<a id='" +
              S +
              "' href='' disabled='disabled'></a><select id='" +
              S +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length ||
                d.push("\\[" + ge + "*(?:value|" + f + ")"),
              e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="),
              e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || d.push(":checked"),
              (t = T.createElement("input")).setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (r.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(":disabled").length &&
                d.push(":enabled", ":disabled"),
              (t = T.createElement("input")).setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
          }),
          le.cssHas || d.push(":has"),
          (d = d.length && new RegExp(d.join("|"))),
          (l = function (e, t) {
            if (e === t) return (a = !0), 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              n ||
              (1 &
                (n =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!le.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === T || (e.ownerDocument == ye && I.contains(ye, e))
                  ? -1
                  : t === T || (t.ownerDocument == ye && I.contains(ye, t))
                  ? 1
                  : o
                  ? se.call(o, e) - se.call(o, t)
                  : 0
                : 4 & n
                ? -1
                : 1)
            );
          })),
        T
      );
    }
    for (e in ((I.matches = function (e, t) {
      return I(e, null, null, t);
    }),
    (I.matchesSelector = function (e, t) {
      if ((V(e), C && !h[t + " "] && (!d || !d.test(t))))
        try {
          var n = i.call(e, t);
          if (
            n ||
            le.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          h(t, !0);
        }
      return 0 < I(t, T, null, [e]).length;
    }),
    (I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }),
    (I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((a = !le.sortStable),
        (o = !le.sortStable && ae.call(e, 0)),
        de.call(e, l),
        a)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return (o = null), e;
    }),
    (ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }),
    ((b = ce.expr =
      {
        cacheLength: 50,
        createPseudo: F,
        match: D,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(O, P)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(O, P)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || I.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && I.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return D.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    j.test(n) &&
                    (t = Y(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(O, P).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return fe(e, t);
                };
          },
          CLASS: function (e) {
            var t = s[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) &&
                s(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = I.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var v = "nth" !== d.slice(0, 3),
              y = "last" !== d.slice(-4),
              m = "of-type" === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1;
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e;
                        while ((o = o[u]))
                          if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                        s = u = "only" === d && !s && "nextSibling";
                      }
                      return !0;
                    }
                    if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                      (p =
                        (a =
                          (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E &&
                          r[1]) && r[2]),
                        (o = a && l.childNodes[a]);
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (1 === o.nodeType && ++p && o === e) {
                          i[d] = [E, a, p];
                          break;
                        }
                    } else if (
                      (f &&
                        (p = a =
                          (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E &&
                          r[1]),
                      !1 === p)
                    )
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (
                          (m ? fe(o, c) : 1 === o.nodeType) &&
                          ++p &&
                          (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]),
                          o === e)
                        )
                          break;
                    return (p -= g) === h || (p % h == 0 && 0 <= p / h);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                I.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? F(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: F(function (e) {
            var r = [],
              i = [],
              s = ne(e.replace(ve, "$1"));
            return s[S]
              ? F(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: F(function (t) {
            return function (e) {
              return 0 < I(t, e).length;
            };
          }),
          contains: F(function (t) {
            return (
              (t = t.replace(O, P)),
              function (e) {
                return -1 < (e.textContent || ce.text(e)).indexOf(t);
              }
            );
          }),
          lang: F(function (n) {
            return (
              A.test(n || "") || I.error("unsupported lang: " + n),
              (n = n.replace(O, P).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = ie.location && ie.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return T.activeElement;
                  } catch (e) {}
                })() &&
              T.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: z(!1),
          disabled: z(!0),
          checked: function (e) {
            return (
              (fe(e, "input") && !!e.checked) ||
              (fe(e, "option") && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return q.test(e.nodeName);
          },
          input: function (e) {
            return N.test(e.nodeName);
          },
          button: function (e) {
            return (fe(e, "input") && "button" === e.type) || fe(e, "button");
          },
          text: function (e) {
            var t;
            return (
              fe(e, "input") &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: X(function () {
            return [0];
          }),
          last: X(function (e, t) {
            return [t - 1];
          }),
          eq: X(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: X(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: X(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: X(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: X(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = B(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      (a = e), (s = []), (u = b.preFilter);
      while (a) {
        for (o in ((n && !(r = y.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = m.exec(a)) &&
          ((n = r.shift()),
          i.push({ value: n, type: r[0].replace(ve, " ") }),
          (a = a.slice(n.length))),
        b.filter))
          !(r = D[o].exec(a)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({ value: n, type: o, matches: r }),
            (a = a.slice(n.length)));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [E, f];
            if (n) {
              while ((e = e[s]))
                if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
            } else
              while ((e = e[s]))
                if (1 === e.nodeType || c)
                  if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e;
                  else {
                    if ((r = i[l]) && r[0] === E && r[1] === f)
                      return (o[2] = r[2]);
                    if (((i[l] = o)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function K(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = ee(v)),
        y && !y[S] && (y = ee(y, e)),
        F(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : Z(f, u, d, n, r);
          if (
            (g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)
          ) {
            (i = Z(s, l)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = s.length);
                while (o--) (a = s[o]) && i.push((p[o] = a));
                y(null, (s = []), i, r);
              }
              o = s.length;
              while (o--)
                (a = s[o]) &&
                  -1 < (i = y ? se.call(e, a) : u[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (s = Z(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : k.apply(t, s);
        })
      );
    }
    function te(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = J(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = J(
            function (e) {
              return -1 < se.call(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t != w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [J(K(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return ee(
              1 < s && K(c),
              1 < s &&
                Q(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(ve, "$1"),
              t,
              s < n && te(e.slice(s, n)),
              n < r && te((e = e.slice(n))),
              n < r && Q(e)
            );
          }
          c.push(t);
        }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), (n = t.length);
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(
          e,
          ((v = o),
          (m = 0 < (y = i).length),
          (x = 0 < v.length),
          (r = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || (x && b.find.TAG("*", i)),
              h = (E += null == p ? 1 : Math.random() || 0.1),
              g = d.length;
            for (
              i && (w = t == T || t || i);
              l !== g && null != (o = d[l]);
              l++
            ) {
              if (x && o) {
                (a = 0), t || o.ownerDocument == T || (V(o), (n = !C));
                while ((s = v[a++]))
                  if (s(o, t || T, n)) {
                    k.call(r, o);
                    break;
                  }
                i && (E = h);
              }
              m && ((o = !s && o) && u--, e && c.push(o));
            }
            if (((u += l), m && l !== u)) {
              a = 0;
              while ((s = y[a++])) s(c, f, t, n);
              if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                f = Z(f);
              }
              k.apply(r, f),
                i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
            }
            return i && ((E = h), (w = p)), c;
          }),
          m ? F(r) : r)
        )).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y((e = l.selector || e));
      if (((n = n || []), 1 === c.length)) {
        if (
          2 < (o = c[0] = c[0].slice(0)).length &&
          "ID" === (a = o[0]).type &&
          9 === t.nodeType &&
          C &&
          b.relative[o[1].type]
        ) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
            return n;
          l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (((a = o[i]), b.relative[(s = a.type)])) break;
          if (
            (u = b.find[s]) &&
            (r = u(
              a.matches[0].replace(O, P),
              (H.test(o[0].type) && U(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && Q(o))))
              return k.apply(n, r), n;
            break;
          }
        }
      }
      return (
        (l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && U(t.parentNode)) || t),
        n
      );
    }
    (G.prototype = b.filters = b.pseudos),
      (b.setFilters = new G()),
      (le.sortStable = S.split("").sort(l).join("") === S),
      V(),
      (le.sortDetached = $(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
      })),
      (ce.find = I),
      (ce.expr[":"] = ce.expr.pseudos),
      (ce.unique = ce.uniqueSort),
      (I.compile = ne),
      (I.select = re),
      (I.setDocument = V),
      (I.tokenize = Y),
      (I.escape = ce.escapeSelector),
      (I.getText = ce.text),
      (I.isXML = ce.isXMLDoc),
      (I.selectors = ce.expr),
      (I.support = ce.support),
      (I.uniqueSort = ce.uniqueSort);
  })();
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && ce(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n)
      ? ce.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? ce.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? ce.grep(e, function (e) {
          return -1 < se.call(n, e) !== r;
        })
      : ce.filter(n, e, r);
  }
  (ce.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? ce.find.matchesSelector(r, e)
          ? [r]
          : []
        : ce.find.matches(
            e,
            ce.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    ce.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            ce(e).filter(function () {
              for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
        return 1 < r ? ce.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(T(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(T(this, e || [], !0));
      },
      is: function (e) {
        return !!T(
          this,
          "string" == typeof e && b.test(e) ? ce(e) : e || [],
          !1
        ).length;
      },
    });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || k), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : S.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof ce ? t[0] : t),
          ce.merge(
            this,
            ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
          ),
          w.test(r[1]) && ce.isPlainObject(t))
        )
          for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : v(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(ce)
      : ce.makeArray(e, this);
  }).prototype = ce.fn),
    (k = ce(C));
  var E = /^(?:parents|prev(?:Until|All))/,
    j = { children: !0, contents: !0, next: !0, prev: !0 };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && ce.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? se.call(ce(e), this[0])
          : se.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ce.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return d(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return d(e, "parentNode", n);
        },
        next: function (e) {
          return A(e, "nextSibling");
        },
        prev: function (e) {
          return A(e, "previousSibling");
        },
        nextAll: function (e) {
          return d(e, "nextSibling");
        },
        prevAll: function (e) {
          return d(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return d(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return d(e, "previousSibling", n);
        },
        siblings: function (e) {
          return h((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return h(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (fe(e, "template") && (e = e.content || e),
              ce.merge([], e.childNodes));
        },
      },
      function (r, i) {
        ce.fn[r] = function (e, t) {
          var n = ce.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ce.filter(t, n)),
            1 < this.length &&
              (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && v((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (ce.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                ce.each(e, function (e, t) {
                  v(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== x(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            ce.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = ce.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    ce.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              ce.Callbacks("memory"),
              ce.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return ce
                .Deferred(function (r) {
                  ce.each(o, function (e, t) {
                    var n = v(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && v(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          v(t)
                            ? s
                              ? t.call(e, l(u, o, N, s), l(u, o, q, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, N, s),
                                  l(u, o, q, s),
                                  l(u, o, N, o.notifyWith)
                                ))
                            : (a !== N && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            ce.Deferred.exceptionHook &&
                              ce.Deferred.exceptionHook(e, t.error),
                              u <= i + 1 &&
                                (a !== q && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (ce.Deferred.getErrorHook
                        ? (t.error = ce.Deferred.getErrorHook())
                        : ce.Deferred.getStackHook &&
                          (t.error = ce.Deferred.getStackHook()),
                      ie.setTimeout(t));
                };
              }
              return ce
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                    o[1][3].add(l(0, e, v(t) ? t : N)),
                    o[2][3].add(l(0, e, v(n) ? n : q));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ce.extend(e, a) : a;
            },
          },
          s = {};
        return (
          ce.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = ae.call(arguments),
          o = ce.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? ae.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (L(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || v(i[t] && i[t].then))
        )
          return o.then();
        while (t--) L(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (ce.Deferred.exceptionHook = function (e, t) {
    ie.console &&
      ie.console.warn &&
      e &&
      H.test(e.name) &&
      ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (ce.readyException = function (e) {
      ie.setTimeout(function () {
        throw e;
      });
    });
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P),
      ie.removeEventListener("load", P),
      ce.ready();
  }
  (ce.fn.ready = function (e) {
    return (
      O.then(e)["catch"](function (e) {
        ce.readyException(e);
      }),
      this
    );
  }),
    ce.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --ce.readyWait : ce.isReady) ||
          ((ce.isReady = !0) !== e && 0 < --ce.readyWait) ||
          O.resolveWith(C, [ce]);
      },
    }),
    (ce.ready.then = O.then),
    "complete" === C.readyState ||
    ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? ie.setTimeout(ce.ready)
      : (C.addEventListener("DOMContentLoaded", P),
        ie.addEventListener("load", P));
  var M = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n))
        for (s in ((i = !0), n)) M(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        v(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ce(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    R = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(R, "ms-").replace(I, W);
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  (B.uid = 1),
    (B.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            $(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[F(t)] = n;
        else for (r in t) i[F(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][F(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(F)
              : (t = F(t)) in r
              ? [t]
              : t.match(D) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || ce.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ce.isEmptyObject(t);
      },
    });
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(U, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : X.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        z.set(e, t, n);
      } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function (e) {
      return z.hasData(e) || _.hasData(e);
    },
    data: function (e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function (e, t) {
      z.remove(e, t);
    },
    _data: function (e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function (e, t) {
      _.remove(e, t);
    },
  }),
    ce.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = z.get(o)), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = F(r.slice(5))), V(o, r, i[r]));
            _.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              z.set(this, n);
            })
          : M(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = z.get(o, n))
                    ? t
                    : void 0 !== (t = V(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  z.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          z.remove(this, e);
        });
      },
    }),
    ce.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = _.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = _.access(e, t, ce.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ce.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ce._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                ce.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          _.get(e, n) ||
          _.access(e, n, {
            empty: ce.Callbacks("once memory").add(function () {
              _.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    ce.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? ce.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ce.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ce.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = _.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = { composed: !0 };
  J.getRootNode &&
    (K = function (e) {
      return (
        ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
      );
    });
  var ee = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && K(e) && "none" === ce.css(e, "display"))
    );
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return ce.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (ce.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (ce.cssNumber[t] || ("px" !== l && +u)) &&
        Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        ce.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), ce.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = _.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ee(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ne[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = ce.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ne[s] = u)))))
          : "none" !== n && ((l[c] = "none"), _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? ce(this).show() : ce(this).hide();
          });
    },
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  (xe = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (be = C.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    xe.appendChild(be),
    (le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (xe.innerHTML = "<textarea>x</textarea>"),
    (le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
    (xe.innerHTML = "<option></option>"),
    (le.option = !!xe.lastChild);
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function Se(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
    );
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  (ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
    (ke.th = ke.td),
    le.option ||
      (ke.optgroup = ke.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
        else if (je.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (Te.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ke[s] || ke._default),
            (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < ce.inArray(o, r)) i && i.push(o);
      else if (
        ((l = K(o)), (a = Se(f.appendChild(o), "script")), l && Ee(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) Ce.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Le(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = qe;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return ce().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = ce.guid++))),
      e.each(function () {
        ce.event.add(this, t, i, r, n);
      })
    );
  }
  function He(e, r, t) {
    t
      ? (_.set(e, r, !1),
        ce.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n = _.get(this, r);
            if (1 & e.isTrigger && this[r]) {
              if (n)
                (ce.event.special[r] || {}).delegateType && e.stopPropagation();
              else if (
                ((n = ae.call(arguments)),
                _.set(this, r, n),
                this[r](),
                (t = _.get(this, r)),
                _.set(this, r, !1),
                n !== t)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), t;
            } else
              n &&
                (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = Ne));
          },
        }))
      : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  (ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && ce.find.matchesSelector(J, i),
          n.guid || (n.guid = ce.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof ce && ce.event.triggered !== e.type
                  ? ce.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(D) || [""]).length);
        while (l--)
          (d = g = (s = De.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = ce.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ce.event.special[d] || {}),
              (c = ce.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ce.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (ce.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = De.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = ce.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                ce.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = ce.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (ce.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < ce(i, this).index(l)
                  : ce.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (we.test(t.type) &&
              t.click &&
              fe(t, "input") &&
              _.get(t, "click")) ||
            fe(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (ce.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ce.Event = function (e, t) {
      if (!(this instanceof ce.Event)) return new ce.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ne
              : qe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ce.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ce.expando] = !0);
    }),
    (ce.Event.prototype = {
      constructor: ce.Event,
      isDefaultPrevented: qe,
      isPropagationStopped: qe,
      isImmediatePropagationStopped: qe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ne),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ne),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ne),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ce.each(
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
      ce.event.addProp
    ),
    ce.each({ focus: "focusin", blur: "focusout" }, function (r, i) {
      function o(e) {
        if (C.documentMode) {
          var t = _.get(this, "handle"),
            n = ce.event.fix(e);
          (n.type = "focusin" === e.type ? "focus" : "blur"),
            (n.isSimulated = !0),
            t(e),
            n.target === n.currentTarget && t(n);
        } else ce.event.simulate(i, e.target, ce.event.fix(e));
      }
      (ce.event.special[r] = {
        setup: function () {
          var e;
          if ((He(this, r, !0), !C.documentMode)) return !1;
          (e = _.get(this, i)) || this.addEventListener(i, o),
            _.set(this, i, (e || 0) + 1);
        },
        trigger: function () {
          return He(this, r), !0;
        },
        teardown: function () {
          var e;
          if (!C.documentMode) return !1;
          (e = _.get(this, i) - 1)
            ? _.set(this, i, e)
            : (this.removeEventListener(i, o), _.remove(this, i));
        },
        _default: function (e) {
          return _.get(e.target, r);
        },
        delegateType: i,
      }),
        (ce.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i);
            n ||
              (C.documentMode
                ? this.addEventListener(i, o)
                : e.addEventListener(r, o, !0)),
              _.set(t, i, (n || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i) - 1;
            n
              ? _.set(t, i, n)
              : (C.documentMode
                  ? this.removeEventListener(i, o)
                  : e.removeEventListener(r, o, !0),
                _.remove(t, i));
          },
        });
    }),
    ce.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        ce.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || ce.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    ce.fn.extend({
      on: function (e, t, n, r) {
        return Le(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Le(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ce(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = qe),
          this.each(function () {
            ce.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e, t) {
    return (
      (fe(e, "table") &&
        fe(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        ce(e).children("tbody")[0]) ||
      e
    );
  }
  function Ie(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function We(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events))
        for (i in (_.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && ((o = z.access(e)), (a = ce.extend({}, o)), z.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || (1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (
          l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0;
          c < s;
          c++
        )
          (u = a[c]),
            Ce.test(u.type || "") &&
              !_.access(u, "globalEval") &&
              ce.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? ce._evalUrl &&
                  !u.noModule &&
                  ce._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : m(u.textContent.replace(Me, ""), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ce.cleanData(Se(r)),
        r.parentNode &&
          (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (
        !(
          le.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          ce.isXMLDoc(e)
        )
      )
        for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)
            Fe(o[r], a[r]);
        else Fe(e, c);
      return (
        0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if ($(n)) {
          if ((t = n[_.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
            n[_.expando] = void 0;
          }
          n[z.expando] && (n[z.expando] = void 0);
        }
    },
  }),
    ce.fn.extend({
      detach: function (e) {
        return Be(this, e, !0);
      },
      remove: function (e) {
        return Be(this, e);
      },
      text: function (e) {
        return M(
          this,
          function (e) {
            return void 0 === e
              ? ce.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return $e(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Re(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return $e(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Re(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ce.cleanData(Se(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ce.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return M(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Oe.test(e) &&
              !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = ce.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ce.cleanData(Se(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return $e(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            ce.inArray(this, n) < 0 &&
              (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    ce.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        ce.fn[e] = function (e) {
          for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              ce(r[o])[a](t),
              s.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = ie), t.getComputedStyle(e);
    },
    Ue = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style;
    return (
      (n = n || Xe(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(ve, "$1") || void 0),
        "" !== a || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() &&
          _e.test(a) &&
          Ve.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          J.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (le.clearCloneStyle = "content-box" === l.style.backgroundClip),
      ce.extend(le, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = C.createElement("table")),
              (t = C.createElement("tr")),
              (n = C.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "box-sizing:content-box;border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              J.appendChild(e).appendChild(t).appendChild(n),
              (r = ie.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              J.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return (
      t ||
      (e in Je
        ? e
        : (Ke[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
              while (n--) if ((e = Qe[n] + t) in Je) return e;
            })(e) || e))
    );
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = { position: "absolute", visibility: "hidden", display: "block" },
    nt = { letterSpacing: "0", fontWeight: "400" };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += ce.css(e, n + Q[a], !0, i)),
        r
          ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)),
            "margin" !== n &&
              (u -= ce.css(e, "border" + Q[a] + "Width", !0, i)))
          : ((u += ce.css(e, "padding" + Q[a], !0, i)),
            "padding" !== n
              ? (u += ce.css(e, "border" + Q[a] + "Width", !0, i))
              : (s += ce.css(e, "border" + Q[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u + l
    );
  }
  function ot(e, t, n) {
    var r = Xe(e),
      i =
        (!le.boxSizingReliable() || n) &&
        "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!le.boxSizingReliable() && i) ||
        (!le.reliableTrDimensions() && fe(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === ce.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === ce.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        it(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
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
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style;
        if (
          (u || (t = Ze(s)),
          (a = ce.cssHooks[t] || ce.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = Y.exec(n)) &&
          i[1] &&
          ((n = te(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (ce.cssNumber[s] ? "" : "px")),
            le.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return (
        ze.test(t) || (t = Ze(s)),
        (a = ce.cssHooks[t] || ce.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Ge(e, t, r)),
        "normal" === i && t in nt && (i = nt[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    ce.each(["height", "width"], function (e, u) {
      ce.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !et.test(ce.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, u, n)
              : Ue(e, tt, function () {
                  return ot(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Xe(e),
            o = !le.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
            s = n ? it(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  it(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = Y.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = ce.css(e, u))),
            rt(0, t, s)
          );
        },
      };
    }),
    (ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ge(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ue(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    ce.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (ce.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (ce.cssHooks[i + o].set = rt);
    }),
    ce.fn.extend({
      css: function (e, t) {
        return M(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Xe(e), i = t.length; a < i; a++)
                o[t[a]] = ce.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((ce.Tween = at).prototype = {
      constructor: at,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || ce.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ce.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = at.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                ce.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : at.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = at.prototype),
    ((at.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          ce.fx.step[e.prop]
            ? ce.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : ce.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = at.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (ce.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (ce.fx = at.prototype.init),
    (ce.fx.step = {});
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut &&
      (!1 === C.hidden && ie.requestAnimationFrame
        ? ie.requestAnimationFrame(dt)
        : ie.setTimeout(dt, ce.fx.interval),
      ce.fx.tick());
  }
  function ht() {
    return (
      ie.setTimeout(function () {
        st = void 0;
      }),
      (st = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (
      var r,
        i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = st || ht(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(
          !0,
          { specialEasing: {}, easing: ce.easing._default },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = F(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = ce.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
        return (
          v(n.stop) &&
            (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      ce.map(c, vt, l),
      v(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      ce.fx.timer(ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return te(n.elem, e, Y.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      v(e) ? ((t = e), (e = ["*"])) : (e = e.match(D));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (yt.tweeners[n] = yt.tweeners[n] || []),
          yt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ee(e),
          v = _.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = ce._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || ce.style(e, r);
          }
        if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = _.get(e, "display")),
            "none" === (c = ce.css(e, "display")) &&
              (l
                ? (c = l)
                : (re([e], !0),
                  (l = e.style.display || l),
                  (c = ce.css(e, "display")),
                  re([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === ce.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = _.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && re([e], !0),
              p.done(function () {
                for (r in (g || re([e]), _.remove(e, "fxshow"), d))
                  ce.style(e, r, d[r]);
              })),
              (u = vt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    },
  })),
    (ce.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ce.extend({}, e)
          : {
              complete: n || (!n && t) || (v(e) && e),
              duration: e,
              easing: (n && t) || (t && !v(t) && t),
            };
      return (
        ce.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in ce.fx.speeds
              ? (r.duration = ce.fx.speeds[r.duration])
              : (r.duration = ce.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
        }),
        r
      );
    }),
    ce.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = ce.isEmptyObject(t),
          o = ce.speed(e, n, r),
          a = function () {
            var e = yt(this, ce.extend({}, t), o);
            (i || _.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = ce.timers,
              r = _.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || ce.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = _.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = ce.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                ce.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    ce.each(["toggle", "show", "hide"], function (e, r) {
      var i = ce.fn[r];
      ce.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n);
      };
    }),
    ce.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        ce.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (ce.timers = []),
    (ce.fx.tick = function () {
      var e,
        t = 0,
        n = ce.timers;
      for (st = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || ce.fx.stop(), (st = void 0);
    }),
    (ce.fx.timer = function (e) {
      ce.timers.push(e), ce.fx.start();
    }),
    (ce.fx.interval = 13),
    (ce.fx.start = function () {
      ut || ((ut = !0), dt());
    }),
    (ce.fx.stop = function () {
      ut = null;
    }),
    (ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ce.fn.delay = function (r, e) {
      return (
        (r = (ce.fx && ce.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = ie.setTimeout(e, r);
          t.stop = function () {
            ie.clearTimeout(n);
          };
        })
      );
    }),
    (lt = C.createElement("input")),
    (ct = C.createElement("select").appendChild(C.createElement("option"))),
    (lt.type = "checkbox"),
    (le.checkOn = "" !== lt.value),
    (le.optSelected = ct.selected),
    ((lt = C.createElement("input")).value = "t"),
    (lt.type = "radio"),
    (le.radioValue = "t" === lt.value);
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function (e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    },
  }),
    ce.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? ce.prop(e, t, n)
            : ((1 === o && ce.isXMLDoc(e)) ||
                (i =
                  ce.attrHooks[t.toLowerCase()] ||
                  (ce.expr.match.bool.test(t) ? mt : void 0)),
              void 0 !== n
                ? null === n
                  ? void ce.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = ce.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!le.radioValue && "radio" === t && fe(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(D);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (mt = {
      set: function (e, t, n) {
        return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || ce.find.attr;
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = xt[o]),
            (xt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (xt[o] = i)),
          r
        );
      };
    });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(D)) || [];
  }
  ce.fn.extend({
    prop: function (e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    },
  }),
    ce.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ce.isXMLDoc(e)) ||
              ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ce.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    le.optSelected ||
      (ce.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    ce.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ce.propFix[this.toLowerCase()] = this;
      }
    ),
    ce.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).addClass(t.call(this, e, Ct(this)));
            })
          : (e = kt(t)).length
          ? this.each(function () {
              if (
                ((r = Ct(this)), (n = 1 === this.nodeType && " " + Tt(r) + " "))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (a = Tt(n)), r !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).removeClass(t.call(this, e, Ct(this)));
            })
          : arguments.length
          ? (e = kt(t)).length
            ? this.each(function () {
                if (
                  ((r = Ct(this)),
                  (n = 1 === this.nodeType && " " + Tt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(" " + i + " "))
                      n = n.replace(" " + i + " ", " ");
                  }
                  (a = Tt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = "string" === a || Array.isArray(t);
        return v(t)
          ? this.each(function (e) {
              ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
            })
          : "boolean" == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = kt(t)),
            this.each(function () {
              if (s)
                for (o = ce(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== t && "boolean" !== a) ||
                  ((r = Ct(this)) && _.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === t ? "" : _.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var St = /\r/g;
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = v(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, ce(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = ce.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                ce.valHooks[this.type] ||
                ce.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(St, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    ce.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ce.find.attr(e, "value");
            return null != t ? t : Tt(ce.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))
              ) {
                if (((t = ce(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = ce.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    ce.each(["radio", "checkbox"], function () {
      (ce.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < ce.inArray(ce(e).val(), t));
        },
      }),
        le.checkOn ||
          (ce.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Et = ie.location,
    jt = { guid: Date.now() },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        ce.error(
          "Invalid XML: " +
            (n
              ? ce
                  .map(n.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : e)
        ),
      t
    );
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Dt.test(d + ce.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[ce.expando]
            ? e
            : new ce.Event(d, "object" == typeof e && e)).isTrigger = r
            ? 2
            : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : ce.makeArray(t, [e])),
          (c = ce.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !y(n)) {
          for (
            s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || C) &&
            p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (_.get(o, "events") || Object.create(null))[e.type] &&
              _.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              $(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !$(n) ||
            (u &&
              v(n[d]) &&
              !y(n) &&
              ((a = n[u]) && (n[u] = null),
              (ce.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Nt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Nt),
              (ce.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, { type: e, isSimulated: !0 });
      ce.event.trigger(r, null, t);
    },
  }),
    ce.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ce.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ce.event.trigger(e, t, n, !0);
      },
    });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      ce.each(e, function (e, t) {
        r || qt.test(n)
          ? i(n, t)
          : Pt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== x(e)) i(n, e);
    else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  (ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
      ce.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }),
    ce.fn.extend({
      serialize: function () {
        return ce.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ce.prop(this, "elements");
          return e ? ce.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !ce(this).is(":disabled") &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !we.test(e))
            );
          })
          .map(function (e, t) {
            var n = ce(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? ce.map(n, function (e) {
                  return { name: t.name, value: e.replace(Lt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Lt, "\r\n") };
          })
          .get();
      },
    });
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a");
  function Ut(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        ce.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  (Xt.href = Et.href),
    ce.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": zt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": ce.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
      },
      ajaxPrefilter: Ut(Bt),
      ajaxTransport: Ut(_t),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = ce.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
          x = ce.Deferred(),
          b = ce.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Wt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            $t,
            Et.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""]),
          null == v.crossDomain)
        ) {
          r = C.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = ce.param(v.data, v.traditional)),
          Vt(Bt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = ce.event && v.global) &&
          0 == ce.active++ &&
          ce.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ft.test(v.type)),
        (f = v.url.replace(Rt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Mt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (At.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(It, "$1")),
              (o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (ce.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", ce.lastModified[f]),
          ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Vt(_t, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = ie.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && ie.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < ce.inArray("script", v.dataTypes) &&
              ce.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (ce.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --ce.active || ce.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return ce.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ce.get(e, void 0, t, "script");
      },
    }),
    ce.each(["get", "post"], function (e, i) {
      ce[i] = function (e, t, n, r) {
        return (
          v(t) && ((r = r || n), (n = t), (t = void 0)),
          ce.ajax(
            ce.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              ce.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    ce.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (ce._evalUrl = function (e, t, n) {
      return ce.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          ce.globalEval(e, t, n);
        },
      });
    }),
    ce.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (v(e) && (e = e.call(this[0])),
            (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return v(n)
          ? this.each(function (e) {
              ce(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = ce(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = v(t);
        return this.each(function (e) {
          ce(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ce(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (ce.expr.pseudos.hidden = function (e) {
      return !ce.expr.pseudos.visible(e);
    }),
    (ce.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (ce.ajaxSettings.xhr = function () {
      try {
        return new ie.XMLHttpRequest();
      } catch (e) {}
    });
  var Yt = { 0: 200, 1223: 204 },
    Qt = ce.ajaxSettings.xhr();
  (le.cors = !!Qt && "withCredentials" in Qt),
    (le.ajax = Qt = !!Qt),
    ce.ajaxTransport(function (i) {
      var o, a;
      if (le.cors || (Qt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Yt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      ie.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    ce.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    ce.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return ce.globalEval(e), e;
        },
      },
    }),
    ce.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    ce.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = ce("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return (this[e] = !0), e;
    },
  }),
    ce.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Zt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Zt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Zt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || ce.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = ie[r]),
          (ie[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)),
              o && v(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (le.createHTMLDocument =
      (((Jt = C.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Jt.childNodes.length)),
    (ce.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (le.createHTMLDocument
              ? (((r = (t =
                  C.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = C.location.href),
                t.head.appendChild(r))
              : (t = C)),
          (o = !n && []),
          (i = w.exec(e))
            ? [t.createElement(i[1])]
            : ((i = Ae([e], t, o)),
              o && o.length && ce(o).remove(),
              ce.merge([], i.childNodes)));
      var r, i, o;
    }),
    (ce.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        v(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          ce
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (ce.expr.pseudos.animated = function (t) {
      return ce.grep(ce.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (ce.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = ce.css(e, "position"),
          c = ce(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = ce.css(e, "top")),
          (u = ce.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          v(t) && (t = t.call(e, n, ce.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    ce.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ce.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === ce.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0)),
              (i.left += ce.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - ce.css(r, "marginTop", !0),
            left: t.left - i.left - ce.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
          return e || J;
        });
      },
    }),
    ce.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function (e) {
          return M(
            this,
            function (e, t, n) {
              var r;
              if (
                (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    ce.each(["top", "left"], function (e, n) {
      ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
        if (t)
          return (t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + "px" : t;
      });
    }),
    ce.each({ Height: "height", Width: "width" }, function (a, s) {
      ce.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          ce.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return M(
              this,
              function (e, t, n) {
                var r;
                return y(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? ce.css(e, t, i)
                  : ce.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    ce.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ce.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    ce.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      },
    }),
    ce.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        ce.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (ce.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
      return (
        (r = ae.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(ae.call(arguments)));
        }).guid = e.guid =
          e.guid || ce.guid++),
        i
      );
  }),
    (ce.holdReady = function (e) {
      e ? ce.readyWait++ : ce.ready(!0);
    }),
    (ce.isArray = Array.isArray),
    (ce.parseJSON = JSON.parse),
    (ce.nodeName = fe),
    (ce.isFunction = v),
    (ce.isWindow = y),
    (ce.camelCase = F),
    (ce.type = x),
    (ce.now = Date.now),
    (ce.isNumeric = function (e) {
      var t = ce.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (ce.trim = function (e) {
      return null == e ? "" : (e + "").replace(en, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ce;
      });
  var tn = ie.jQuery,
    nn = ie.$;
  return (
    (ce.noConflict = function (e) {
      return (
        ie.$ === ce && (ie.$ = nn),
        e && ie.jQuery === ce && (ie.jQuery = tn),
        ce
      );
    }),
    "undefined" == typeof e && (ie.jQuery = ie.$ = ce),
    ce
  );
});
/**
 * Swiper 11.0.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 22, 2023
 */

var Swiper = (function () {
  "use strict";

  /**
   * SSR Window 4.0.2
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2021, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: December 13, 2021
   */
  /* eslint-disable no-param-reassign */
  function isObject$1(obj) {
    return (
      obj !== null &&
      typeof obj === "object" &&
      "constructor" in obj &&
      obj.constructor === Object
    );
  }
  function extend$1(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach((key) => {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (
        isObject$1(src[key]) &&
        isObject$1(target[key]) &&
        Object.keys(src[key]).length > 0
      ) {
        extend$1(target[key], src[key]);
      }
    });
  }
  const ssrDocument = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
      blur() {},
      nodeName: "",
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {},
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend$1(doc, ssrDocument);
    return doc;
  }
  const ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: "",
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: {
      replaceState() {},
      pushState() {},
      go() {},
      back() {},
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    },
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend$1(win, ssrWindow);
    return win;
  }

  function classesToTokens(classes) {
    if (classes === void 0) {
      classes = "";
    }
    return classes
      .trim()
      .split(" ")
      .filter((c) => !!c.trim());
  }

  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
        // no getter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle$1(el) {
    const window = getWindow();
    let style;
    if (window.getComputedStyle) {
      style = window.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    const window = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle$1(el);
    if (window.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform
          .split(", ")
          .map((a) => a.replace(",", "."))
          .join(", ");
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new window.WebKitCSSMatrix(
        curTransform === "none" ? "" : curTransform
      );
    } else {
      transformMatrix =
        curStyle.MozTransform ||
        curStyle.OTransform ||
        curStyle.MsTransform ||
        curStyle.msTransform ||
        curStyle.transform ||
        curStyle
          .getPropertyValue("transform")
          .replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject(o) {
    return (
      typeof o === "object" &&
      o !== null &&
      o.constructor &&
      Object.prototype.toString.call(o).slice(8, -1) === "Object"
    );
  }
  function isNode(node) {
    // eslint-disable-next-line
    if (
      typeof window !== "undefined" &&
      typeof window.HTMLElement !== "undefined"
    ) {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend() {
    const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const nextSource =
        i < 0 || arguments.length <= i ? undefined : arguments[i];
      if (
        nextSource !== undefined &&
        nextSource !== null &&
        !isNode(nextSource)
      ) {
        const keysArray = Object.keys(Object(nextSource)).filter(
          (key) => noExtend.indexOf(key) < 0
        );
        for (
          let nextIndex = 0, len = keysArray.length;
          nextIndex < len;
          nextIndex += 1
        ) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else if (
              !isObject(to[nextKey]) &&
              isObject(nextSource[nextKey])
            ) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let { swiper, targetPosition, side } = _ref;
    const window = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return (
        (dir === "next" && current >= target) ||
        (dir === "prev" && current <= target)
      );
    };
    const animate = () => {
      time = new Date().getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition =
        startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition,
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition,
          });
        });
        window.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window.requestAnimationFrame(animate);
    };
    animate();
  }
  function getSlideTransformEl(slideEl) {
    return (
      slideEl.querySelector(".swiper-slide-transform") ||
      (slideEl.shadowRoot &&
        slideEl.shadowRoot.querySelector(".swiper-slide-transform")) ||
      slideEl
    );
  }
  function elementChildren(element, selector) {
    if (selector === void 0) {
      selector = "";
    }
    return [...element.children].filter((el) => el.matches(selector));
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
      // err
    }
  }
  function createElement(tag, classes) {
    if (classes === void 0) {
      classes = [];
    }
    const el = document.createElement(tag);
    el.classList.add(
      ...(Array.isArray(classes) ? classes : classesToTokens(classes))
    );
    return el;
  }
  function elementOffset(el) {
    const window = getWindow();
    const document = getDocument();
    const box = el.getBoundingClientRect();
    const body = document.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window ? window.scrollY : el.scrollTop;
    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft,
    };
  }
  function elementPrevAll(el, selector) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if (prev.matches(selector)) prevEls.push(prev);
      } else prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if (next.matches(selector)) nextEls.push(next);
      } else nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window = getWindow();
    return window.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }
      return i;
    }
    return undefined;
  }
  function elementParents(el, selector) {
    const parents = []; // eslint-disable-line
    let parent = el.parentElement; // eslint-disable-line
    while (parent) {
      if (selector) {
        if (parent.matches(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
      if (e.target !== el) return;
      callback.call(el, e);
      el.removeEventListener("transitionend", fireCallBack);
    }
    if (callback) {
      el.addEventListener("transitionend", fireCallBack);
    }
  }
  function elementOuterSize(el, size, includeMargins) {
    const window = getWindow();
    if (includeMargins) {
      return (
        el[size === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          window
            .getComputedStyle(el, null)
            .getPropertyValue(size === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          window
            .getComputedStyle(el, null)
            .getPropertyValue(
              size === "width" ? "margin-left" : "margin-bottom"
            )
        )
      );
    }
    return el.offsetWidth;
  }

  let support;
  function calcSupport() {
    const window = getWindow();
    const document = getDocument();
    return {
      smoothScroll:
        document.documentElement &&
        document.documentElement.style &&
        "scrollBehavior" in document.documentElement.style,
      touch: !!(
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)
      ),
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }

  let deviceCached;
  function calcDevice(_temp) {
    let { userAgent } = _temp === void 0 ? {} : _temp;
    const support = getSupport();
    const window = getWindow();
    const platform = window.navigator.platform;
    const ua = userAgent || window.navigator.userAgent;
    const device = {
      ios: false,
      android: false,
    };
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";

    // iPadOs 13 fix
    const iPadScreens = [
      "1024x1366",
      "1366x1024",
      "834x1194",
      "1194x834",
      "834x1112",
      "1112x834",
      "768x1024",
      "1024x768",
      "820x1180",
      "1180x820",
      "810x1080",
      "1080x810",
    ];
    if (
      !ipad &&
      macos &&
      support.touch &&
      iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0
    ) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, "13_0_0"];
      macos = false;
    }

    // Android
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }

    // Export object
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }

  let browser;
  function calcBrowser() {
    const window = getWindow();
    let needPerspectiveFix = false;
    function isSafari() {
      const ua = window.navigator.userAgent.toLowerCase();
      return (
        ua.indexOf("safari") >= 0 &&
        ua.indexOf("chrome") < 0 &&
        ua.indexOf("android") < 0
      );
    }
    if (isSafari()) {
      const ua = String(window.navigator.userAgent);
      if (ua.includes("Version/")) {
        const [major, minor] = ua
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((num) => Number(num));
        needPerspectiveFix = major < 16 || (major === 16 && minor < 2);
      }
    }
    return {
      isSafari: needPerspectiveFix || isSafari(),
      needPerspectiveFix,
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        window.navigator.userAgent
      ),
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }

  function Resize(_ref) {
    let { swiper, on, emit } = _ref;
    const window = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window.requestAnimationFrame(() => {
          const { width, height } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach((_ref2) => {
            let { contentBoxSize, contentRect, target } = _ref2;
            if (target && target !== swiper.el) return;
            newWidth = contentRect
              ? contentRect.width
              : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect
              ? contentRect.height
              : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("orientationchange");
    };
    on("init", () => {
      if (
        swiper.params.resizeObserver &&
        typeof window.ResizeObserver !== "undefined"
      ) {
        createObserver();
        return;
      }
      window.addEventListener("resize", resizeHandler);
      window.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", () => {
      removeObserver();
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }

  function Observer(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    const observers = [];
    const window = getWindow();
    const attach = function (target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc =
        window.MutationObserver || window.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (swiper.__preventObserver__) return;
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate() {
          emit("observerUpdate", mutations[0]);
        };
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(observerUpdate);
        } else {
          window.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes:
          typeof options.attributes === "undefined" ? true : options.attributes,
        childList:
          typeof options.childList === "undefined" ? true : options.childList,
        characterData:
          typeof options.characterData === "undefined"
            ? true
            : options.characterData,
      });
      observers.push(observer);
    };
    const init = () => {
      if (!swiper.params.observer) return;
      if (swiper.params.observeParents) {
        const containerParents = elementParents(swiper.hostEl);
        for (let i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      }
      // Observe container
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren,
      });

      // Observe wrapper
      attach(swiper.wrapperEl, {
        attributes: false,
      });
    };
    const destroy = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    });
    on("init", init);
    on("destroy", destroy);
  }

  /* eslint-disable no-underscore-dangle */

  var eventsEmitter = {
    on(events, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== "function") return self;
      const method = priority ? "unshift" : "push";
      events.split(" ").forEach((event) => {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    },
    once(events, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== "function") return self;
      function onceHandler() {
        self.off(events, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }
        handler.apply(self, args);
      }
      onceHandler.__emitterProxy = handler;
      return self.on(events, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== "function") return self;
      const method = priority ? "unshift" : "push";
      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }
      return self;
    },
    offAny(handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsAnyListeners) return self;
      const index = self.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }
      return self;
    },
    off(events, handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      events.split(" ").forEach((event) => {
        if (typeof handler === "undefined") {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event]) {
          self.eventsListeners[event].forEach((eventHandler, index) => {
            if (
              eventHandler === handler ||
              (eventHandler.__emitterProxy &&
                eventHandler.__emitterProxy === handler)
            ) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit() {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      let events;
      let data;
      let context;
      for (
        var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }
      data.unshift(context);
      const eventsArray = Array.isArray(events) ? events : events.split(" ");
      eventsArray.forEach((event) => {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context, [event, ...data]);
          });
        }
        if (self.eventsListeners && self.eventsListeners[event]) {
          self.eventsListeners[event].forEach((eventHandler) => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    },
  };

  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (
      typeof swiper.params.width !== "undefined" &&
      swiper.params.width !== null
    ) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (
      typeof swiper.params.height !== "undefined" &&
      swiper.params.height !== null
    ) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (
      (width === 0 && swiper.isHorizontal()) ||
      (height === 0 && swiper.isVertical())
    ) {
      return;
    }

    // Subtract paddings
    width =
      width -
      parseInt(elementStyle(el, "padding-left") || 0, 10) -
      parseInt(elementStyle(el, "padding-right") || 0, 10);
    height =
      height -
      parseInt(elementStyle(el, "padding-top") || 0, 10) -
      parseInt(elementStyle(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height,
    });
  }

  function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(
        node.getPropertyValue(swiper.getDirectionLabel(label)) || 0
      );
    }
    const params = swiper.params;
    const {
      wrapperEl,
      slidesEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL,
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual
      ? swiper.virtual.slides.length
      : swiper.slides.length;
    const slides = elementChildren(
      slidesEl,
      `.${swiper.params.slideClass}, swiper-slide`
    );
    const slidesLength = isVirtual
      ? swiper.virtual.slides.length
      : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween =
        (parseFloat(spaceBetween.replace("%", "")) / 100) * swiperSize;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween;

    // reset margins
    slides.forEach((slideEl) => {
      if (rtl) {
        slideEl.style.marginLeft = "";
      } else {
        slideEl.style.marginRight = "";
      }
      slideEl.style.marginBottom = "";
      slideEl.style.marginTop = "";
    });

    // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
      swiper.grid.unsetSlides();
    }

    // Calc slides
    let slideSize;
    const shouldResetSlideSize =
      params.slidesPerView === "auto" &&
      params.breakpoints &&
      Object.keys(params.breakpoints).filter((key) => {
        return typeof params.breakpoints[key].slidesPerView !== "undefined";
      }).length > 0;
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      let slide;
      if (slides[i]) slide = slides[i];
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide, slides);
      }
      if (slides[i] && elementStyle(slide, "display") === "none") continue; // eslint-disable-line

      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i].style[swiper.getDirectionLabel("width")] = ``;
        }
        const slideStyles = getComputedStyle(slide);
        const currentTransform = slide.style.transform;
        const currentWebKitTransform = slide.style.webkitTransform;
        if (currentTransform) {
          slide.style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide.style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? elementOuterSize(slide, "width", true)
            : elementOuterSize(slide, "height", true);
        } else {
          // eslint-disable-next-line
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(
            slideStyles,
            "padding-left"
          );
          const paddingRight = getDirectionPropertyValue(
            slideStyles,
            "padding-right"
          );
          const marginLeft = getDirectionPropertyValue(
            slideStyles,
            "margin-left"
          );
          const marginRight = getDirectionPropertyValue(
            slideStyles,
            "margin-right"
          );
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const { clientWidth, offsetWidth } = slide;
            slideSize =
              width +
              paddingLeft +
              paddingRight +
              marginLeft +
              marginRight +
              (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize =
          (swiperSize - (params.slidesPerView - 1) * spaceBetween) /
          params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition =
          slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (
          (index - Math.min(swiper.params.slidesPerGroupSkip, index)) %
            swiper.params.slidesPerGroup ===
          0
        )
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (
      rtl &&
      wrongRTL &&
      (params.effect === "slide" || params.effect === "coverflow")
    ) {
      wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper.getDirectionLabel("width")] = `${
        swiper.virtualSize + spaceBetween
      }px`;
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (
        Math.floor(swiper.virtualSize - swiperSize) -
          Math.floor(snapGrid[snapGrid.length - 1]) >
        1
      ) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil(
          (swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) /
            params.slidesPerGroup
        );
        const groupSize = size * params.slidesPerGroup;
        for (let i = 0; i < groups; i += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (
        let i = 0;
        i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter;
        i += 1
      ) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0) snapGrid = [0];
    if (spaceBetween !== 0) {
      const key =
        swiper.isHorizontal() && rtl
          ? "marginLeft"
          : swiper.getDirectionLabel("marginRight");
      slides
        .filter((_, slideIndex) => {
          if (!params.cssMode || params.loop) return true;
          if (slideIndex === slides.length - 1) {
            return false;
          }
          return true;
        })
        .forEach((slideEl) => {
          slideEl.style[key] = `${spaceBetween}px`;
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map((snap) => {
        if (snap <= 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      if (allSlidesSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid,
    });
    if (
      params.centeredSlides &&
      params.cssMode &&
      !params.centeredSlidesBounds
    ) {
      setCSSProperty(
        wrapperEl,
        "--swiper-centered-offset-before",
        `${-snapGrid[0]}px`
      );
      setCSSProperty(
        wrapperEl,
        "--swiper-centered-offset-after",
        `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`
      );
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    swiper.emit("slidesUpdated");
    if (
      !isVirtual &&
      !params.cssMode &&
      (params.effect === "slide" || params.effect === "fade")
    ) {
      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
      const hasClassBackfaceClassAdded =
        swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded)
          swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }

  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index) => {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    // Find slides currently in view
    if (
      swiper.params.slidesPerView !== "auto" &&
      swiper.params.slidesPerView > 1
    ) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach((slide) => {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          const index = swiper.activeIndex + i;
          if (index > swiper.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight || newHeight === 0)
      swiper.wrapperEl.style.height = `${newHeight}px`;
  }

  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    // eslint-disable-next-line
    const minusOffset = swiper.isElement
      ? swiper.isHorizontal()
        ? swiper.wrapperEl.offsetLeft
        : swiper.wrapperEl.offsetTop
      : 0;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset =
        (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) -
        minusOffset -
        swiper.cssOverflowAdjustment();
    }
  }

  function updateSlidesProgress(translate) {
    if (translate === void 0) {
      translate = (this && this.translate) || 0;
    }
    const swiper = this;
    const params = swiper.params;
    const { slides, rtlTranslate: rtl, snapGrid } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined")
      swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate;

    // Visible Slides
    slides.forEach((slideEl) => {
      slideEl.classList.remove(
        params.slideVisibleClass,
        params.slideFullyVisibleClass
      );
    });
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween =
        (parseFloat(spaceBetween.replace("%", "")) / 100) * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slide = slides[i];
      let slideOffset = slide.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress =
        (offsetCenter +
          (params.centeredSlides ? swiper.minTranslate() : 0) -
          slideOffset) /
        (slide.swiperSlideSize + spaceBetween);
      const originalSlideProgress =
        (offsetCenter -
          snapGrid[0] +
          (params.centeredSlides ? swiper.minTranslate() : 0) -
          slideOffset) /
        (slide.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isFullyVisible =
        slideBefore >= 0 &&
        slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
      const isVisible =
        (slideBefore >= 0 && slideBefore < swiper.size - 1) ||
        (slideAfter > 1 && slideAfter <= swiper.size) ||
        (slideBefore <= 0 && slideAfter >= swiper.size);
      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides[i].classList.add(params.slideVisibleClass);
      }
      if (isFullyVisible) {
        slides[i].classList.add(params.slideFullyVisibleClass);
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
      slide.originalProgress = rtl
        ? -originalSlideProgress
        : originalSlideProgress;
    }
  }

  function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      // eslint-disable-next-line
      translate =
        (swiper && swiper.translate && swiper.translate * multiplier) || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress, isBeginning, isEnd, progressLoop } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      const isBeginningRounded =
        Math.abs(translate - swiper.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded) progress = 0;
      if (isEndRounded) progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper.getSlideIndexByData(0);
      const lastSlideIndex = swiper.getSlideIndexByData(
        swiper.slides.length - 1
      );
      const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop =
          (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress,
      progressLoop,
      isBeginning,
      isEnd,
    });
    if (
      params.watchSlidesProgress ||
      (params.centeredSlides && params.autoHeight)
    )
      swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }

  function updateSlidesClasses() {
    const swiper = this;
    const { slides, params, slidesEl, activeIndex } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector) => {
      return elementChildren(
        slidesEl,
        `.${params.slideClass}${selector}, swiper-slide${selector}`
      )[0];
    };
    slides.forEach((slideEl) => {
      slideEl.classList.remove(
        params.slideActiveClass,
        params.slideNextClass,
        params.slidePrevClass
      );
    });
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0)
          slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length)
          slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide(
          `[data-swiper-slide-index="${slideIndex}"]`
        );
      } else {
        activeSlide = getFilteredSlide(
          `[data-swiper-slide-index="${activeIndex}"]`
        );
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.filter(
          (slideEl) => slideEl.column === activeIndex
        )[0];
        nextSlide = slides.filter(
          (slideEl) => slideEl.column === activeIndex + 1
        )[0];
        prevSlide = slides.filter(
          (slideEl) => slideEl.column === activeIndex - 1
        )[0];
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      // Active classes
      activeSlide.classList.add(params.slideActiveClass);
      if (gridEnabled) {
        if (nextSlide) {
          nextSlide.classList.add(params.slideNextClass);
        }
        if (prevSlide) {
          prevSlide.classList.add(params.slidePrevClass);
        }
      } else {
        // Next Slide
        nextSlide = elementNextAll(
          activeSlide,
          `.${params.slideClass}, swiper-slide`
        )[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        if (nextSlide) {
          nextSlide.classList.add(params.slideNextClass);
        }

        // Prev Slide
        prevSlide = elementPrevAll(
          activeSlide,
          `.${params.slideClass}, swiper-slide`
        )[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
        if (prevSlide) {
          prevSlide.classList.add(params.slidePrevClass);
        }
      }
    }
    swiper.emitSlidesClasses();
  }

  const processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = () =>
      swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(
        `.${swiper.params.lazyPreloaderClass}`
      );
      if (!lazyEl && swiper.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(
            `.${swiper.params.lazyPreloaderClass}`
          );
        } else {
          // init later
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(
                `.${swiper.params.lazyPreloaderClass}`
              );
              if (lazyEl) lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl) lazyEl.remove();
    }
  };
  const unlazy = (swiper, index) => {
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute("loading");
  };
  const preload = (swiper) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView =
      swiper.params.slidesPerView === "auto"
        ? swiper.slidesPerViewDynamic()
        : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(
        ...Array.from({
          length: amount,
        }).map((_, i) => {
          return activeColumn + slidesPerView + i;
        })
      );
      swiper.slides.forEach((slideEl, i) => {
        if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
      for (
        let i = activeIndex - amount;
        i <= slideIndexLastInView + amount;
        i += 1
      ) {
        const realIndex = ((i % len) + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView)
          unlazy(swiper, realIndex);
      }
    } else {
      for (
        let i = Math.max(activeIndex - amount, 0);
        i <= Math.min(slideIndexLastInView + amount, len - 1);
        i += 1
      ) {
        if (
          i !== activeIndex &&
          (i > slideIndexLastInView || i < activeIndex)
        ) {
          unlazy(swiper, i);
        }
      }
    }
  };

  function getActiveIndexByTranslate(swiper) {
    const { slidesGrid, params } = swiper;
    const translate = swiper.rtlTranslate
      ? swiper.translate
      : -swiper.translate;
    let activeIndex;
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (
          translate >= slidesGrid[i] &&
          translate <
            slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2
        ) {
          activeIndex = i;
        } else if (
          translate >= slidesGrid[i] &&
          translate < slidesGrid[i + 1]
        ) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined")
        activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate
      ? swiper.translate
      : -swiper.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex,
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
      let realIndex = aIndex - swiper.virtual.slidesBefore;
      if (realIndex < 0) {
        realIndex = swiper.virtual.slides.length + realIndex;
      }
      if (realIndex >= swiper.virtual.slides.length) {
        realIndex -= swiper.virtual.slides.length;
      }
      return realIndex;
    };
    if (typeof activeIndex === "undefined") {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex =
        skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    if (
      activeIndex === previousIndex &&
      swiper.params.loop &&
      swiper.virtual &&
      swiper.params.virtual.enabled
    ) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

    // Get real index
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper.slides.filter(
        (slideEl) => slideEl.column === activeIndex
      )[0];
      let activeSlideIndex = parseInt(
        firstSlideInColumn.getAttribute("data-swiper-slide-index"),
        10
      );
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(
          swiper.slides.indexOf(firstSlideInColumn),
          0
        );
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
      const slideIndex = swiper.slides[activeIndex].getAttribute(
        "data-swiper-slide-index"
      );
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex,
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper.emit("realIndexChange");
      }
      swiper.emit("slideChange");
    }
  }

  function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide = el.closest(`.${params.slideClass}, swiper-slide`);
    if (
      !slide &&
      swiper.isElement &&
      path &&
      path.length > 1 &&
      path.includes(el)
    ) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (
          !slide &&
          pathEl.matches &&
          pathEl.matches(`.${params.slideClass}, swiper-slide`)
        ) {
          slide = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(
          slide.getAttribute("data-swiper-slide-index"),
          10
        );
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (
      params.slideToClickedSlide &&
      swiper.clickedIndex !== undefined &&
      swiper.clickedIndex !== swiper.activeIndex
    ) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide,
  };

  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    const swiper = this;
    const { params, rtlTranslate: rtl, translate, wrapperEl } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    if (params.cssMode) {
      return translate;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }

  function setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl, params, wrapperEl, progress } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] =
        swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x -= swiper.cssOverflowAdjustment();
      } else {
        y -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }

    // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }

  function minTranslate() {
    return -this.snapGrid[0];
  }

  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  function translateTo(
    translate,
    speed,
    runCallbacks,
    translateBounds,
    internal
  ) {
    if (translate === void 0) {
      translate = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper = this;
    const { params, wrapperEl } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate)
      newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate)
      newTranslate = maxTranslate;
    else newTranslate = translate;

    // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top",
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth",
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener(
              "transitionend",
              swiper.onTranslateToWrapperTransitionEnd
            );
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.wrapperEl.addEventListener(
          "transitionend",
          swiper.onTranslateToWrapperTransitionEnd
        );
      }
    }
    return true;
  }

  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo,
  };

  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
      swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
    }
    swiper.emit("setTransition", duration, byController);
  }

  function transitionEmit(_ref) {
    let { swiper, runCallbacks, direction, step } = _ref;
    const { activeIndex, previousIndex } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = "next";
      else if (activeIndex < previousIndex) dir = "prev";
      else dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit(`slideResetTransition${step}`);
        return;
      }
      swiper.emit(`slideChangeTransition${step}`);
      if (dir === "next") {
        swiper.emit(`slideNextTransition${step}`);
      } else {
        swiper.emit(`slidePrevTransition${step}`);
      }
    }
  }

  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const { params } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start",
    });
  }

  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const { params } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End",
    });
  }

  var transition = {
    setTransition,
    transitionStart,
    transitionEnd,
  };

  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled,
    } = swiper;
    if (
      (swiper.animating && params.preventInteractionOnTransition) ||
      (!enabled && !internal && !initial)
    ) {
      return false;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex =
      skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate = -snapGrid[snapIndex];
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (
            normalizedTranslate >= normalizedGrid &&
            normalizedTranslate <
              normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2
          ) {
            slideIndex = i;
          } else if (
            normalizedTranslate >= normalizedGrid &&
            normalizedTranslate < normalizedGridNext
          ) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (
        !swiper.allowSlideNext &&
        (rtl
          ? translate > swiper.translate && translate > swiper.minTranslate()
          : translate < swiper.translate && translate < swiper.minTranslate())
      ) {
        return false;
      }
      if (
        !swiper.allowSlidePrev &&
        translate > swiper.translate &&
        translate > swiper.maxTranslate()
      ) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }

    // Update progress
    swiper.updateProgress(translate);
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset";

    // Update Index
    if (
      (rtl && -translate === swiper.translate) ||
      (!rtl && translate === swiper.translate)
    ) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t = rtl ? translate : -translate;
      if (speed === 0) {
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        if (
          isVirtual &&
          !swiper._cssModeVirtualInitialSet &&
          swiper.params.initialSlide > 0
        ) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
          });
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t,
            side: isH ? "left" : "top",
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t,
          behavior: "smooth",
        });
      }
      return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener(
            "transitionend",
            swiper.onSlideToWrapperTransitionEnd
          );
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener(
        "transitionend",
        swiper.onSlideToWrapperTransitionEnd
      );
    }
    return true;
  }

  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper = this;
    const gridEnabled =
      swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        // eslint-disable-next-line
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          targetSlideIndex = swiper.slides.filter(
            (slideEl) =>
              slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex
          )[0].column;
        } else {
          targetSlideIndex = swiper.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled
          ? Math.ceil(swiper.slides.length / swiper.params.grid.rows)
          : swiper.slides.length;
        const { centeredSlides } = swiper.params;
        let slidesPerView = swiper.params.slidesPerView;
        if (slidesPerView === "auto") {
          slidesPerView = swiper.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(
            parseFloat(swiper.params.slidesPerView, 10)
          );
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix =
            needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (needLoopFix) {
          const direction = centeredSlides
            ? targetSlideIndex < swiper.activeIndex
              ? "prev"
              : "next"
            : targetSlideIndex - swiper.activeIndex - 1 <
              swiper.params.slidesPerView
            ? "next"
            : "prev";
          swiper.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex:
              direction === "next"
                ? targetSlideIndex + 1
                : targetSlideIndex - cols + 1,
            slideRealIndex: direction === "next" ? swiper.realIndex : undefined,
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          newIndex = swiper.slides.filter(
            (slideEl) =>
              slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex
          )[0].column;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
  }

  /* eslint no-unused-vars: "off" */
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const { enabled, params, animating } = swiper;
    if (!enabled) return swiper;
    let perGroup = params.slidesPerGroup;
    if (
      params.slidesPerView === "auto" &&
      params.slidesPerGroup === 1 &&
      params.slidesPerGroupAuto
    ) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment =
      swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: "next",
      });
      // eslint-disable-next-line
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper.slideTo(
            swiper.activeIndex + increment,
            speed,
            runCallbacks,
            internal
          );
        });
        return true;
      }
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(
      swiper.activeIndex + increment,
      speed,
      runCallbacks,
      internal
    );
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const { params, snapGrid, slidesGrid, rtlTranslate, enabled, animating } =
      swiper;
    if (!enabled) return swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: "prev",
      });
      // eslint-disable-next-line
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    let prevSnap =
      snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          // prevSnap = snap;
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap =
          snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      if (
        params.slidesPerView === "auto" &&
        params.slidesPerGroup === 1 &&
        params.slidesPerGroupAuto
      ) {
        prevIndex =
          prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex =
        swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual
          ? swiper.virtual.slides.length - 1
          : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex =
      skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate
      ? swiper.translate
      : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
      // The current translate is on or after the current snap index, so the choice
      // is between the current index and the one after it.
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      // The current translate is before the current snap index, so the choice
      // is between the current index and the one before it.
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide() {
    const swiper = this;
    const { params, slidesEl } = swiper;
    const slidesPerView =
      params.slidesPerView === "auto"
        ? swiper.slidesPerViewDynamic()
        : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement
      ? `swiper-slide`
      : `.${params.slideClass}`;
    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt(
        swiper.clickedSlide.getAttribute("data-swiper-slide-index"),
        10
      );
      if (params.centeredSlides) {
        if (
          slideToIndex < swiper.loopedSlides - slidesPerView / 2 ||
          slideToIndex >
            swiper.slides.length - swiper.loopedSlides + slidesPerView / 2
        ) {
          swiper.loopFix();
          slideToIndex = swiper.getSlideIndex(
            elementChildren(
              slidesEl,
              `${slideSelector}[data-swiper-slide-index="${realIndex}"]`
            )[0]
          );
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(
          elementChildren(
            slidesEl,
            `${slideSelector}[data-swiper-slide-index="${realIndex}"]`
          )[0]
        );
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide,
  };

  function loopCreate(slideRealIndex) {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (!params.loop || (swiper.virtual && swiper.params.virtual.enabled))
      return;
    const initSlides = () => {
      const slides = elementChildren(
        slidesEl,
        `.${params.slideClass}, swiper-slide`
      );
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup =
      params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid =
      gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
      for (let i = 0; i < amountOfSlides; i += 1) {
        const slideEl = swiper.isElement
          ? createElement("swiper-slide", [params.slideBlankClass])
          : createElement("div", [params.slideClass, params.slideBlankClass]);
        swiper.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd =
          slidesPerGroup - (swiper.slides.length % slidesPerGroup);
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd =
          params.grid.rows - (swiper.slides.length % params.grid.rows);
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning(
          "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper.loopFix({
      slideRealIndex,
      direction: params.centeredSlides ? undefined : "next",
    });
  }

  function loopFix(_temp) {
    let {
      slideRealIndex,
      slideTo = true,
      direction,
      setTranslate,
      activeSlideIndex,
      byController,
      byMousewheel,
    } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit("beforeLoopFix");
    const { slides, allowSlidePrev, allowSlideNext, slidesEl, params } = swiper;
    const { centeredSlides } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo) {
        if (!params.centeredSlides && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (
          params.centeredSlides &&
          swiper.snapIndex < params.slidesPerView
        ) {
          swiper.slideTo(
            swiper.virtual.slides.length + swiper.snapIndex,
            0,
            false,
            true
          );
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit("loopFix");
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = swiper.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto
      ? slidesPerView
      : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - (loopedSlides % slidesPerGroup);
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) {
      showWarning(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      );
    } else if (gridEnabled && params.grid.fill === "row") {
      showWarning(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") {
      activeSlideIndex = swiper.getSlideIndex(
        slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]
      );
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled
      ? Math.ceil(slides.length / params.grid.rows)
      : slides.length;
    const activeColIndex = gridEnabled
      ? slides[activeSlideIndex].column
      : activeSlideIndex;
    const activeColIndexWithShift =
      activeColIndex +
      (centeredSlides && typeof setTranslate === "undefined"
        ? -slidesPerView / 2 + 0.5
        : 0);
    // prepend last slides before start
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(
        loopedSlides - activeColIndexWithShift,
        slidesPerGroup
      );
      for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i = slides.length - 1; i >= 0; i -= 1) {
            if (slides[i].column === colIndexToPrepend)
              prependSlidesIndexes.push(i);
          }
          // slides.forEach((slide, slideIndex) => {
          //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
          // });
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(
        activeColIndexWithShift - (cols - loopedSlides * 2),
        slidesPerGroup
      );
      for (let i = 0; i < slidesAppended; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide, slideIndex) => {
            if (slide.column === index) appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
    if (isPrev) {
      prependSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") {
      swiper.updateSlides();
    } else if (
      gridEnabled &&
      ((prependSlidesIndexes.length > 0 && isPrev) ||
        (appendSlidesIndexes.length > 0 && isNext))
    ) {
      swiper.slides.forEach((slide, slideIndex) => {
        swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate =
            swiper.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
            if (setTranslate) {
              swiper.touchEventsData.startTranslate =
                swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate =
                swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate) {
            const shift = gridEnabled
              ? prependSlidesIndexes.length / params.grid.rows
              : prependSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate =
            swiper.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate) {
              swiper.touchEventsData.startTranslate =
                swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate =
                swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled
            ? appendSlidesIndexes.length / params.grid.rows
            : appendSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate,
        activeSlideIndex,
        byController: true,
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach((c) => {
          if (!c.destroyed && c.params.loop)
            c.loopFix({
              ...loopParams,
              slideTo:
                c.params.slidesPerView === params.slidesPerView
                  ? slideTo
                  : false,
            });
        });
      } else if (
        swiper.controller.control instanceof swiper.constructor &&
        swiper.controller.control.params.loop
      ) {
        swiper.controller.control.loopFix({
          ...loopParams,
          slideTo:
            swiper.controller.control.params.slidesPerView ===
            params.slidesPerView
              ? slideTo
              : false,
        });
      }
    }
    swiper.emit("loopFix");
  }

  function loopDestroy() {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (!params.loop || (swiper.virtual && swiper.params.virtual.enabled))
      return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl) => {
      const index =
        typeof slideEl.swiperSlideIndex === "undefined"
          ? slideEl.getAttribute("data-swiper-slide-index") * 1
          : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl) => {
      slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }

  var loop = {
    loopCreate,
    loopFix,
    loopDestroy,
  };

  function setGrabCursor(moving) {
    const swiper = this;
    if (
      !swiper.params.simulateTouch ||
      (swiper.params.watchOverflow && swiper.isLocked) ||
      swiper.params.cssMode
    )
      return;
    const el =
      swiper.params.touchEventsTarget === "container"
        ? swiper.el
        : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }

  function unsetGrabCursor() {
    const swiper = this;
    if (
      (swiper.params.watchOverflow && swiper.isLocked) ||
      swiper.params.cssMode
    ) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[
      swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }

  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor,
  };

  // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow()) return null;
      if (el.assignedSlot) el = el.assignedSlot;
      const found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper, event, startX) {
    const window = getWindow();
    const { params } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (
      edgeSwipeDetection &&
      (startX <= edgeSwipeThreshold ||
        startX >= window.innerWidth - edgeSwipeThreshold)
    ) {
      if (edgeSwipeDetection === "prevent") {
        event.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event) {
    const swiper = this;
    const document = getDocument();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    const data = swiper.touchEventsData;
    if (e.type === "pointerdown") {
      if (data.pointerId !== null && data.pointerId !== e.pointerId) {
        return;
      }
      data.pointerId = e.pointerId;
    } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
      data.touchId = e.targetTouches[0].identifier;
    }
    if (e.type === "touchstart") {
      // don't proceed touch event
      preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
      return;
    }
    const { params, touches, enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === "mouse") return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let targetEl = e.target;
    if (params.touchEventsTarget === "wrapper") {
      if (!swiper.wrapperEl.contains(targetEl)) return;
    }
    if ("which" in e && e.which === 3) return;
    if ("button" in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;

    // change target el for shadow root component
    const swipingClassHasValue =
      !!params.noSwipingClass && params.noSwipingClass !== "";
    // eslint-disable-next-line
    const eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector
      ? params.noSwipingSelector
      : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);

    // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (
      params.noSwiping &&
      (isTargetShadow
        ? closestElement(noSwipingSelector, targetEl)
        : targetEl.closest(noSwipingSelector))
    ) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

    if (!preventEdgeSwipe(swiper, e, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (
      document.activeElement &&
      document.activeElement.matches(data.focusableElements) &&
      document.activeElement !== targetEl
    ) {
      document.activeElement.blur();
    }
    const shouldPreventDefault =
      preventDefault &&
      swiper.allowTouchMove &&
      params.touchStartPreventDefault;
    if (
      (params.touchStartForcePreventDefault || shouldPreventDefault) &&
      !targetEl.isContentEditable
    ) {
      e.preventDefault();
    }
    if (
      params.freeMode &&
      params.freeMode.enabled &&
      swiper.freeMode &&
      swiper.animating &&
      !params.cssMode
    ) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit("touchStart", e);
  }

  function onTouchMove(event) {
    const document = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl, enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === "mouse") return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (e.type === "pointermove") {
      if (data.touchId !== null) return; // return from pointer if we use touch
      const id = e.pointerId;
      if (id !== data.pointerId) return;
    }
    let targetTouch;
    if (e.type === "touchmove") {
      targetTouch = [...e.changedTouches].filter(
        (t) => t.identifier === data.touchId
      )[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    } else {
      targetTouch = e;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (
          (pageY < touches.startY &&
            swiper.translate <= swiper.maxTranslate()) ||
          (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
        (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (document.activeElement) {
      if (
        e.target === document.activeElement &&
        e.target.matches(data.focusableElements)
      ) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (
      swiper.params.threshold &&
      Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold
    )
      return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (
        (swiper.isHorizontal() && touches.currentY === touches.startY) ||
        (swiper.isVertical() && touches.currentX === touches.startX)
      ) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle =
            (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal()
            ? touchAngle > params.touchAngle
            : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data.startMoving === "undefined") {
      if (
        touches.currentX !== touches.startX ||
        touches.currentY !== touches.startY
      ) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal()
      ? touches.currentX - touches.previousX
      : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix =
      (swiper.touchesDirection === "next" && swiper.allowSlideNext) ||
      (swiper.touchesDirection === "prev" && swiper.allowSlidePrev);
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper.loopFix({
          direction: swiper.swipeDirection,
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true,
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (
        params.grabCursor &&
        (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
      ) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    let loopFixed;
    new Date().getTime();
    if (
      data.isMoved &&
      data.allowThresholdMove &&
      prevTouchesDirection !== swiper.touchesDirection &&
      isLoop &&
      allowLoopFix &&
      Math.abs(diff) >= 1
    ) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate,
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (
        isLoop &&
        allowLoopFix &&
        !loopFixed &&
        data.allowThresholdMove &&
        data.currentTranslate >
          (params.centeredSlides
            ? swiper.minTranslate() -
              swiper.slidesSizesGrid[swiper.activeIndex + 1]
            : swiper.minTranslate())
      ) {
        swiper.loopFix({
          direction: "prev",
          setTranslate: true,
          activeSlideIndex: 0,
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate =
            swiper.minTranslate() -
            1 +
            (-swiper.minTranslate() + data.startTranslate + diff) **
              resistanceRatio;
        }
      }
    } else if (diff < 0) {
      if (
        isLoop &&
        allowLoopFix &&
        !loopFixed &&
        data.allowThresholdMove &&
        data.currentTranslate <
          (params.centeredSlides
            ? swiper.maxTranslate() +
              swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1]
            : swiper.maxTranslate())
      ) {
        swiper.loopFix({
          direction: "next",
          setTranslate: true,
          activeSlideIndex:
            swiper.slides.length -
            (params.slidesPerView === "auto"
              ? swiper.slidesPerViewDynamic()
              : Math.ceil(parseFloat(params.slidesPerView, 10))),
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate =
            swiper.maxTranslate() +
            1 -
            (swiper.maxTranslate() - data.startTranslate - diff) **
              resistanceRatio;
        }
      }
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (
      !swiper.allowSlideNext &&
      swiper.swipeDirection === "next" &&
      data.currentTranslate < data.startTranslate
    ) {
      data.currentTranslate = data.startTranslate;
    }
    if (
      !swiper.allowSlidePrev &&
      swiper.swipeDirection === "prev" &&
      data.currentTranslate > data.startTranslate
    ) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }

    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal()
            ? touches.currentX - touches.startX
            : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode) return;

    // Update active index in free mode
    if (
      (params.freeMode && params.freeMode.enabled && swiper.freeMode) ||
      params.watchSlidesProgress
    ) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let targetTouch;
    const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
    if (!isTouchEvent) {
      if (data.touchId !== null) return; // return from pointer if we use touch
      if (e.pointerId !== data.pointerId) return;
      targetTouch = e;
    } else {
      targetTouch = [...e.changedTouches].filter(
        (t) => t.identifier === data.touchId
      )[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        e.type
      )
    ) {
      const proceed =
        ["pointercancel", "contextmenu"].includes(e.type) &&
        (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === "mouse") return;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }

    // Return Grab Cursor
    if (
      params.grabCursor &&
      data.isMoved &&
      data.isTouched &&
      (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
    ) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      const pathTree = e.path || (e.composedPath && e.composedPath());
      swiper.updateClickedSlide(
        (pathTree && pathTree[0]) || e.target,
        pathTree
      );
      swiper.emit("tap click", e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (
      !data.isTouched ||
      !data.isMoved ||
      !swiper.swipeDirection ||
      (touches.diff === 0 && !data.loopSwapReset) ||
      (data.currentTranslate === data.startTranslate && !data.loopSwapReset)
    ) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos,
      });
      return;
    }

    // Find current slide
    const swipeToLast =
      currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (
      let i = 0;
      i < slidesGrid.length;
      i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup
    ) {
      const increment =
        i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + increment] !== "undefined") {
        if (
          swipeToLast ||
          (currentPos >= slidesGrid[i] &&
            currentPos < slidesGrid[i + increment])
        ) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment] - slidesGrid[i];
        }
      } else if (swipeToLast || currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize =
          slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex =
          params.virtual && params.virtual.enabled && swiper.virtual
            ? swiper.virtual.slides.length - 1
            : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment =
      stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio)
          swiper.slideTo(
            params.rewind && swiper.isEnd
              ? rewindFirstIndex
              : stopIndex + increment
          );
        else swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (
          rewindLastIndex !== null &&
          ratio < 0 &&
          Math.abs(ratio) > params.longSwipesRatio
        ) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget =
        swiper.navigation &&
        (e.target === swiper.navigation.nextEl ||
          e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(
            rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment
          );
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(
            rewindLastIndex !== null ? rewindLastIndex : stopIndex
          );
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize() {
    const swiper = this;
    const { params, el } = swiper;
    if (el && el.offsetWidth === 0) return;

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if (
      (params.slidesPerView === "auto" || params.slidesPerView > 1) &&
      swiper.isEnd &&
      !swiper.isBeginning &&
      !swiper.params.centeredSlides &&
      !isVirtualLoop
    ) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(() => {
        if (
          swiper.autoplay &&
          swiper.autoplay.running &&
          swiper.autoplay.paused
        ) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function onScroll() {
    const swiper = this;
    const { wrapperEl, rtlTranslate, enabled } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    // eslint-disable-next-line
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(
        rtlTranslate ? -swiper.translate : swiper.translate
      );
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }

  function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    if (
      swiper.params.cssMode ||
      (swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight)
    ) {
      return;
    }
    swiper.update();
  }

  function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded) return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
      swiper.el.style.touchAction = "auto";
    }
  }

  const events = (swiper, method) => {
    const document = getDocument();
    const { params, el, wrapperEl, device } = swiper;
    const capture = !!params.nested;
    const domMethod =
      method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;

    // Touch Events
    document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
      passive: false,
      capture,
    });
    el[domMethod]("touchstart", swiper.onTouchStart, {
      passive: false,
    });
    el[domMethod]("pointerdown", swiper.onTouchStart, {
      passive: false,
    });
    document[domMethod]("touchmove", swiper.onTouchMove, {
      passive: false,
      capture,
    });
    document[domMethod]("pointermove", swiper.onTouchMove, {
      passive: false,
      capture,
    });
    document[domMethod]("touchend", swiper.onTouchEnd, {
      passive: true,
    });
    document[domMethod]("pointerup", swiper.onTouchEnd, {
      passive: true,
    });
    document[domMethod]("pointercancel", swiper.onTouchEnd, {
      passive: true,
    });
    document[domMethod]("touchcancel", swiper.onTouchEnd, {
      passive: true,
    });
    document[domMethod]("pointerout", swiper.onTouchEnd, {
      passive: true,
    });
    document[domMethod]("pointerleave", swiper.onTouchEnd, {
      passive: true,
    });
    document[domMethod]("contextmenu", swiper.onTouchEnd, {
      passive: true,
    });

    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }

    // Resize handler
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](
        device.ios || device.android
          ? "resize orientationchange observerUpdate"
          : "resize observerUpdate",
        onResize,
        true
      );
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }

    // Images loader
    el[domMethod]("load", swiper.onLoad, {
      capture: true,
    });
  };
  function attachEvents() {
    const swiper = this;
    const { params } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  var events$1 = {
    attachEvents,
    detachEvents,
  };

  const isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const { realIndex, initialized, params, el } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0))
      return;

    // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(
      breakpoints,
      swiper.params.breakpointsBase,
      swiper.el
    );
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams =
      breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(
        `${params.containerModifierClass}grid`,
        `${params.containerModifierClass}grid-column`
      );
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (
        (breakpointParams.grid.fill &&
          breakpointParams.grid.fill === "column") ||
        (!breakpointParams.grid.fill && params.grid.fill === "column")
      ) {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }

    // Toggle navigation, pagination, scrollbar
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      if (typeof breakpointParams[prop] === "undefined") return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled =
        breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged =
      breakpointParams.direction &&
      breakpointParams.direction !== params.direction;
    const needsReLoop =
      params.loop &&
      (breakpointParams.slidesPerView !== params.slidesPerView ||
        directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper.loopDestroy();
      }
    }
    swiper.emit("breakpoint", breakpointParams);
  }

  function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints || (base === "container" && !containerEl))
      return undefined;
    let breakpoint = false;
    const window = getWindow();
    const currentHeight =
      base === "window" ? window.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point,
        };
      }
      return {
        value: point,
        point,
      };
    });
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i = 0; i < points.length; i += 1) {
      const { point, value } = points[i];
      if (base === "window") {
        if (window.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }

  var breakpoints = {
    setBreakpoint,
    getBreakpoint,
  };

  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const { classNames, params, rtl, el, device } = swiper;
    // prettier-ignore
    const suffixes = prepareClasses(['initialized', params.direction, {
        'free-mode': swiper.params.freeMode && params.freeMode.enabled
      }, {
        'autoheight': params.autoHeight
      }, {
        'rtl': rtl
      }, {
        'grid': params.grid && params.grid.rows > 1
      }, {
        'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
      }, {
        'android': device.android
      }, {
        'ios': device.ios
      }, {
        'css-mode': params.cssMode
      }, {
        'centered': params.cssMode && params.centeredSlides
      }, {
        'watch-progress': params.watchSlidesProgress
      }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
  }

  function removeClasses() {
    const swiper = this;
    const { el, classNames } = swiper;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
  }

  var classes = {
    addClasses,
    removeClasses,
  };

  function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked, params } = swiper;
    const { slidesOffsetBefore } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge =
        swiper.slidesGrid[lastSlideIndex] +
        swiper.slidesSizesGrid[lastSlideIndex] +
        slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  var checkOverflow$1 = {
    checkOverflow,
  };

  var defaults = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false,
  };

  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true,
        };
      }
      if (
        moduleParamName === "navigation" &&
        params[moduleParamName] &&
        params[moduleParamName].enabled &&
        !params[moduleParamName].prevEl &&
        !params[moduleParamName].nextEl
      ) {
        params[moduleParamName].auto = true;
      }
      if (
        ["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 &&
        params[moduleParamName] &&
        params[moduleParamName].enabled &&
        !params[moduleParamName].el
      ) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend(allModulesParams, obj);
        return;
      }
      if (
        typeof params[moduleParamName] === "object" &&
        !("enabled" in params[moduleParamName])
      ) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName])
        params[moduleParamName] = {
          enabled: false,
        };
      extend(allModulesParams, obj);
    };
  }

  /* eslint no-param-reassign: "off" */
  const prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes,
  };
  const extendedDefaults = {};
  class Swiper {
    constructor() {
      let el;
      let params;
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }
      if (
        args.length === 1 &&
        args[0].constructor &&
        Object.prototype.toString.call(args[0]).slice(8, -1) === "Object"
      ) {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params) params = {};
      params = extend({}, params);
      if (el && !params.el) params.el = el;
      const document = getDocument();
      if (
        params.el &&
        typeof params.el === "string" &&
        document.querySelectorAll(params.el).length > 1
      ) {
        const swipers = [];
        document.querySelectorAll(params.el).forEach((containerEl) => {
          const newParams = extend({}, params, {
            el: containerEl,
          });
          swipers.push(new Swiper(newParams));
        });
        // eslint-disable-next-line no-constructor-return
        return swipers;
      }

      // Swiper Instance
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent,
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          params,
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper),
        });
      });

      // Extend defaults with modules params
      const swiperParams = extend({}, defaults, allModulesParams);

      // Extend defaults with passed params
      swiper.params = extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend({}, swiper.params);
      swiper.passedParams = extend({}, params);

      // add event listeners
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }

      // Extend Swiper
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          // Returns 0 unless `translate` is > 2**23
          // Should be subtracted from css values to prevent overflow
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          startMoving: undefined,
          pointerId: null,
          touchId: null,
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0,
      });
      swiper.emit("_swiper");

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      // eslint-disable-next-line no-constructor-return
      return swiper;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      // prettier-ignore
      return {
          'width': 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          'marginRight': 'marginBottom'
        }[property];
    }
    getSlideIndex(slideEl) {
      const { slidesEl, params } = this;
      const slides = elementChildren(
        slidesEl,
        `.${params.slideClass}, swiper-slide`
      );
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(
        this.slides.filter(
          (slideEl) =>
            slideEl.getAttribute("data-swiper-slide-index") * 1 === index
        )[0]
      );
    }
    recalcSlides() {
      const swiper = this;
      const { slidesEl, params } = swiper;
      swiper.slides = elementChildren(
        slidesEl,
        `.${params.slideClass}, swiper-slide`
      );
    }
    enable() {
      const swiper = this;
      if (swiper.enabled) return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled) return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return (
          className.indexOf("swiper") === 0 ||
          className.indexOf(swiper.params.containerModifierClass) === 0
        );
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed) return "";
      return slideEl.className
        .split(" ")
        .filter((className) => {
          return (
            className.indexOf("swiper-slide") === 0 ||
            className.indexOf(swiper.params.slideClass) === 0
          );
        })
        .join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const updates = [];
      swiper.slides.forEach((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames,
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = "current";
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex,
      } = swiper;
      let spv = 1;
      if (typeof params.slidesPerView === "number") return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex]
          ? slides[activeIndex].swiperSlideSize
          : 0;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        // eslint-disable-next-line
        if (view === "current") {
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            const slideInView = exact
              ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] <
                swiperSize
              : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          // previous
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            const slideInView =
              slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed) return;
      const { snapGrid, params } = swiper;
      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        }
      });
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate() {
        const translateValue = swiper.rtlTranslate
          ? swiper.translate * -1
          : swiper.translate;
        const newTranslate = Math.min(
          Math.max(translateValue, swiper.maxTranslate()),
          swiper.minTranslate()
        );
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate();
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if (
          (params.slidesPerView === "auto" || params.slidesPerView > 1) &&
          swiper.isEnd &&
          !params.centeredSlides
        ) {
          const slides =
            swiper.virtual && params.virtual.enabled
              ? swiper.virtual.slides
              : swiper.slides;
          translated = swiper.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        // eslint-disable-next-line
        newDirection =
          currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (
        newDirection === currentDirection ||
        (newDirection !== "horizontal" && newDirection !== "vertical")
      ) {
        return swiper;
      }
      swiper.el.classList.remove(
        `${swiper.params.containerModifierClass}${currentDirection}`
      );
      swiper.el.classList.add(
        `${swiper.params.containerModifierClass}${newDirection}`
      );
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.forEach((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate) swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (
        (swiper.rtl && direction === "rtl") ||
        (!swiper.rtl && direction === "ltr")
      )
        return;
      swiper.rtl = direction === "rtl";
      swiper.rtlTranslate =
        swiper.params.direction === "horizontal" && swiper.rtl;
      if (swiper.rtl) {
        swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "rtl";
      } else {
        swiper.el.classList.remove(
          `${swiper.params.containerModifierClass}rtl`
        );
        swiper.el.dir = "ltr";
      }
      swiper.update();
    }
    mount(element) {
      const swiper = this;
      if (swiper.mounted) return true;

      // Find el
      let el = element || swiper.params.el;
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      if (
        el.parentNode &&
        el.parentNode.host &&
        el.parentNode.host.nodeName === "SWIPER-CONTAINER"
      ) {
        swiper.isElement = true;
      }
      const getWrapperSelector = () => {
        return `.${(swiper.params.wrapperClass || "")
          .trim()
          .split(" ")
          .join(".")}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          // Children needs to return slot items
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      // Find Wrapper
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper.params.createElements) {
        wrapperEl = createElement("div", swiper.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, `.${swiper.params.slideClass}`).forEach(
          (slideEl) => {
            wrapperEl.append(slideEl);
          }
        );
      }
      Object.assign(swiper, {
        el,
        wrapperEl,
        slidesEl:
          swiper.isElement && !el.parentNode.host.slideSlots
            ? el.parentNode.host
            : wrapperEl,
        hostEl: swiper.isElement ? el.parentNode.host : el,
        mounted: true,
        // RTL
        rtl:
          el.dir.toLowerCase() === "rtl" ||
          elementStyle(el, "direction") === "rtl",
        rtlTranslate:
          swiper.params.direction === "horizontal" &&
          (el.dir.toLowerCase() === "rtl" ||
            elementStyle(el, "direction") === "rtl"),
        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box",
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized) return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false) return swiper;
      swiper.emit("beforeInit");

      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Add Classes
      swiper.addClasses();

      // Update size
      swiper.updateSize();

      // Update slides
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      // Set Grab Cursor
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }

      // Slide To Initial Slide
      if (
        swiper.params.loop &&
        swiper.virtual &&
        swiper.params.virtual.enabled
      ) {
        swiper.slideTo(
          swiper.params.initialSlide + swiper.virtual.slidesBefore,
          0,
          swiper.params.runCallbacksOnInit,
          false,
          true
        );
      } else {
        swiper.slideTo(
          swiper.params.initialSlide,
          0,
          swiper.params.runCallbacksOnInit,
          false,
          true
        );
      }

      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }

      // Attach events
      swiper.attachEvents();
      const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
      if (swiper.isElement) {
        lazyElements.push(
          ...swiper.hostEl.querySelectorAll('[loading="lazy"]')
        );
      }
      lazyElements.forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        } else {
          imageEl.addEventListener("load", (e) => {
            processLazyPreloader(swiper, e.target);
          });
        }
      });
      preload(swiper);

      // Init Flag
      swiper.initialized = true;
      preload(swiper);

      // Emit
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper = this;
      const { params, el, wrapperEl, slides } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");

      // Init Flag
      swiper.initialized = false;

      // Detach events
      swiper.detachEvents();

      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }

      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        el.removeAttribute("style");
        wrapperEl.removeAttribute("style");
        if (slides && slides.length) {
          slides.forEach((slideEl) => {
            slideEl.classList.remove(
              params.slideVisibleClass,
              params.slideFullyVisibleClass,
              params.slideActiveClass,
              params.slideNextClass,
              params.slidePrevClass
            );
            slideEl.removeAttribute("style");
            slideEl.removeAttribute("data-swiper-slide-index");
          });
        }
      }
      swiper.emit("destroy");

      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper.el.swiper = null;
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(mod) {
      if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
      const modules = Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m) => Swiper.installModule(m));
        return Swiper;
      }
      Swiper.installModule(module);
      return Swiper;
    }
  }
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);

  function Virtual(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    extendParams({
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: true,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    });
    let cssModeTimeout;
    const document = getDocument();
    swiper.virtual = {
      cache: {},
      from: undefined,
      to: undefined,
      slides: [],
      offset: 0,
      slidesGrid: [],
    };
    const tempDOM = document.createElement("div");
    function renderSlide(slide, index) {
      const params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      // eslint-disable-next-line
      let slideEl;
      if (params.renderSlide) {
        slideEl = params.renderSlide.call(swiper, slide, index);
        if (typeof slideEl === "string") {
          tempDOM.innerHTML = slideEl;
          slideEl = tempDOM.children[0];
        }
      } else if (swiper.isElement) {
        slideEl = createElement("swiper-slide");
      } else {
        slideEl = createElement("div", swiper.params.slideClass);
      }
      slideEl.setAttribute("data-swiper-slide-index", index);
      if (!params.renderSlide) {
        slideEl.innerHTML = slide;
      }
      if (params.cache) {
        swiper.virtual.cache[index] = slideEl;
      }
      return slideEl;
    }
    function update(force) {
      const {
        slidesPerView,
        slidesPerGroup,
        centeredSlides,
        loop: isLoop,
      } = swiper.params;
      const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
      const {
        from: previousFrom,
        to: previousTo,
        slides,
        slidesGrid: previousSlidesGrid,
        offset: previousOffset,
      } = swiper.virtual;
      if (!swiper.params.cssMode) {
        swiper.updateActiveIndex();
      }
      const activeIndex = swiper.activeIndex || 0;
      let offsetProp;
      if (swiper.rtlTranslate) offsetProp = "right";
      else offsetProp = swiper.isHorizontal() ? "left" : "top";
      let slidesAfter;
      let slidesBefore;
      if (centeredSlides) {
        slidesAfter =
          Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        slidesBefore =
          Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
        slidesBefore =
          (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
      }
      let from = activeIndex - slidesBefore;
      let to = activeIndex + slidesAfter;
      if (!isLoop) {
        from = Math.max(from, 0);
        to = Math.min(to, slides.length - 1);
      }
      let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
      if (isLoop && activeIndex >= slidesBefore) {
        from -= slidesBefore;
        if (!centeredSlides) offset += swiper.slidesGrid[0];
      } else if (isLoop && activeIndex < slidesBefore) {
        from = -slidesBefore;
        if (centeredSlides) offset += swiper.slidesGrid[0];
      }
      Object.assign(swiper.virtual, {
        from,
        to,
        offset,
        slidesGrid: swiper.slidesGrid,
        slidesBefore,
        slidesAfter,
      });
      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        emit("virtualUpdate");
      }
      if (previousFrom === from && previousTo === to && !force) {
        if (
          swiper.slidesGrid !== previousSlidesGrid &&
          offset !== previousOffset
        ) {
          swiper.slides.forEach((slideEl) => {
            slideEl.style[offsetProp] = `${
              offset - Math.abs(swiper.cssOverflowAdjustment())
            }px`;
          });
        }
        swiper.updateProgress();
        emit("virtualUpdate");
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset,
          from,
          to,
          slides: (function getSlides() {
            const slidesToRender = [];
            for (let i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          })(),
        });
        if (swiper.params.virtual.renderExternalUpdate) {
          onRendered();
        } else {
          emit("virtualUpdate");
        }
        return;
      }
      const prependIndexes = [];
      const appendIndexes = [];
      const getSlideIndex = (index) => {
        let slideIndex = index;
        if (index < 0) {
          slideIndex = slides.length + index;
        } else if (slideIndex >= slides.length) {
          // eslint-disable-next-line
          slideIndex = slideIndex - slides.length;
        }
        return slideIndex;
      };
      if (force) {
        swiper.slides
          .filter((el) =>
            el.matches(`.${swiper.params.slideClass}, swiper-slide`)
          )
          .forEach((slideEl) => {
            slideEl.remove();
          });
      } else {
        for (let i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            const slideIndex = getSlideIndex(i);
            swiper.slides
              .filter((el) =>
                el.matches(
                  `.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`
                )
              )
              .forEach((slideEl) => {
                slideEl.remove();
              });
          }
        }
      }
      const loopFrom = isLoop ? -slides.length : 0;
      const loopTo = isLoop ? slides.length * 2 : slides.length;
      for (let i = loopFrom; i < loopTo; i += 1) {
        if (i >= from && i <= to) {
          const slideIndex = getSlideIndex(i);
          if (typeof previousTo === "undefined" || force) {
            appendIndexes.push(slideIndex);
          } else {
            if (i > previousTo) appendIndexes.push(slideIndex);
            if (i < previousFrom) prependIndexes.push(slideIndex);
          }
        }
      }
      appendIndexes.forEach((index) => {
        swiper.slidesEl.append(renderSlide(slides[index], index));
      });
      if (isLoop) {
        for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
          const index = prependIndexes[i];
          swiper.slidesEl.prepend(renderSlide(slides[index], index));
        }
      } else {
        prependIndexes.sort((a, b) => b - a);
        prependIndexes.forEach((index) => {
          swiper.slidesEl.prepend(renderSlide(slides[index], index));
        });
      }
      elementChildren(swiper.slidesEl, ".swiper-slide, swiper-slide").forEach(
        (slideEl) => {
          slideEl.style[offsetProp] = `${
            offset - Math.abs(swiper.cssOverflowAdjustment())
          }px`;
        }
      );
      onRendered();
    }
    function appendSlide(slides) {
      if (typeof slides === "object" && "length" in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.push(slides[i]);
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      update(true);
    }
    function prependSlide(slides) {
      const activeIndex = swiper.activeIndex;
      let newActiveIndex = activeIndex + 1;
      let numberOfNewSlides = 1;
      if (Array.isArray(slides)) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        const cache = swiper.virtual.cache;
        const newCache = {};
        Object.keys(cache).forEach((cachedIndex) => {
          const cachedEl = cache[cachedIndex];
          const cachedElIndex = cachedEl.getAttribute(
            "data-swiper-slide-index"
          );
          if (cachedElIndex) {
            cachedEl.setAttribute(
              "data-swiper-slide-index",
              parseInt(cachedElIndex, 10) + numberOfNewSlides
            );
          }
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
        });
        swiper.virtual.cache = newCache;
      }
      update(true);
      swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
      if (typeof slidesIndexes === "undefined" || slidesIndexes === null)
        return;
      let activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
            // shift cache indexes
            Object.keys(swiper.virtual.cache).forEach((key) => {
              if (key > slidesIndexes) {
                swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                swiper.virtual.cache[key - 1].setAttribute(
                  "data-swiper-slide-index",
                  key - 1
                );
                delete swiper.virtual.cache[key];
              }
            });
          }
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
          // shift cache indexes
          Object.keys(swiper.virtual.cache).forEach((key) => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute(
                "data-swiper-slide-index",
                key - 1
              );
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (slidesIndexes < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
      update(true);
      swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      update(true);
      swiper.slideTo(0, 0);
    }
    on("beforeInit", () => {
      if (!swiper.params.virtual.enabled) return;
      let domSlidesAssigned;
      if (typeof swiper.passedParams.virtual.slides === "undefined") {
        const slides = [...swiper.slidesEl.children].filter((el) =>
          el.matches(`.${swiper.params.slideClass}, swiper-slide`)
        );
        if (slides && slides.length) {
          swiper.virtual.slides = [...slides];
          domSlidesAssigned = true;
          slides.forEach((slideEl, slideIndex) => {
            slideEl.setAttribute("data-swiper-slide-index", slideIndex);
            swiper.virtual.cache[slideIndex] = slideEl;
            slideEl.remove();
          });
        }
      }
      if (!domSlidesAssigned) {
        swiper.virtual.slides = swiper.params.virtual.slides;
      }
      swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
      update();
    });
    on("setTranslate", () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode && !swiper._immediateVirtual) {
        clearTimeout(cssModeTimeout);
        cssModeTimeout = setTimeout(() => {
          update();
        }, 100);
      } else {
        update();
      }
    });
    on("init update resize", () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode) {
        setCSSProperty(
          swiper.wrapperEl,
          "--swiper-virtual-size",
          `${swiper.virtualSize}px`
        );
      }
    });
    Object.assign(swiper.virtual, {
      appendSlide,
      prependSlide,
      removeSlide,
      removeAllSlides,
      update,
    });
  }

  /* eslint-disable consistent-return */
  function Keyboard(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    const document = getDocument();
    const window = getWindow();
    swiper.keyboard = {
      enabled: false,
    };
    extendParams({
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true,
      },
    });
    function handle(event) {
      if (!swiper.enabled) return;
      const { rtlTranslate: rtl } = swiper;
      let e = event;
      if (e.originalEvent) e = e.originalEvent; // jquery fix
      const kc = e.keyCode || e.charCode;
      const pageUpDown = swiper.params.keyboard.pageUpDown;
      const isPageUp = pageUpDown && kc === 33;
      const isPageDown = pageUpDown && kc === 34;
      const isArrowLeft = kc === 37;
      const isArrowRight = kc === 39;
      const isArrowUp = kc === 38;
      const isArrowDown = kc === 40;
      // Directions locks
      if (
        !swiper.allowSlideNext &&
        ((swiper.isHorizontal() && isArrowRight) ||
          (swiper.isVertical() && isArrowDown) ||
          isPageDown)
      ) {
        return false;
      }
      if (
        !swiper.allowSlidePrev &&
        ((swiper.isHorizontal() && isArrowLeft) ||
          (swiper.isVertical() && isArrowUp) ||
          isPageUp)
      ) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (
        document.activeElement &&
        document.activeElement.nodeName &&
        (document.activeElement.nodeName.toLowerCase() === "input" ||
          document.activeElement.nodeName.toLowerCase() === "textarea")
      ) {
        return undefined;
      }
      if (
        swiper.params.keyboard.onlyInViewport &&
        (isPageUp ||
          isPageDown ||
          isArrowLeft ||
          isArrowRight ||
          isArrowUp ||
          isArrowDown)
      ) {
        let inView = false;
        // Check that swiper should be inside of visible area of window
        if (
          elementParents(
            swiper.el,
            `.${swiper.params.slideClass}, swiper-slide`
          ).length > 0 &&
          elementParents(swiper.el, `.${swiper.params.slideActiveClass}`)
            .length === 0
        ) {
          return undefined;
        }
        const el = swiper.el;
        const swiperWidth = el.clientWidth;
        const swiperHeight = el.clientHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const swiperOffset = elementOffset(el);
        if (rtl) swiperOffset.left -= el.scrollLeft;
        const swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiperWidth, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiperHeight],
          [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight],
        ];
        for (let i = 0; i < swiperCoord.length; i += 1) {
          const point = swiperCoord[i];
          if (
            point[0] >= 0 &&
            point[0] <= windowWidth &&
            point[1] >= 0 &&
            point[1] <= windowHeight
          ) {
            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
            inView = true;
          }
        }
        if (!inView) return undefined;
      }
      if (swiper.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }
        if (
          ((isPageDown || isArrowRight) && !rtl) ||
          ((isPageUp || isArrowLeft) && rtl)
        )
          swiper.slideNext();
        if (
          ((isPageUp || isArrowLeft) && !rtl) ||
          ((isPageDown || isArrowRight) && rtl)
        )
          swiper.slidePrev();
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }
        if (isPageDown || isArrowDown) swiper.slideNext();
        if (isPageUp || isArrowUp) swiper.slidePrev();
      }
      emit("keyPress", kc);
      return undefined;
    }
    function enable() {
      if (swiper.keyboard.enabled) return;
      document.addEventListener("keydown", handle);
      swiper.keyboard.enabled = true;
    }
    function disable() {
      if (!swiper.keyboard.enabled) return;
      document.removeEventListener("keydown", handle);
      swiper.keyboard.enabled = false;
    }
    on("init", () => {
      if (swiper.params.keyboard.enabled) {
        enable();
      }
    });
    on("destroy", () => {
      if (swiper.keyboard.enabled) {
        disable();
      }
    });
    Object.assign(swiper.keyboard, {
      enable,
      disable,
    });
  }

  /* eslint-disable consistent-return */
  function Mousewheel(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    const window = getWindow();
    extendParams({
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: "swiper-no-mousewheel",
      },
    });
    swiper.mousewheel = {
      enabled: false,
    };
    let timeout;
    let lastScrollTime = now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
      // Reasonable defaults
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;
      let sX = 0;
      let sY = 0; // spinX, spinY
      let pX = 0;
      let pY = 0; // pixelX, pixelY

      // Legacy
      if ("detail" in e) {
        sY = e.detail;
      }
      if ("wheelDelta" in e) {
        sY = -e.wheelDelta / 120;
      }
      if ("wheelDeltaY" in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ("wheelDeltaX" in e) {
        sX = -e.wheelDeltaX / 120;
      }

      // side scrolling on FF with DOMMouseScroll
      if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ("deltaY" in e) {
        pY = e.deltaY;
      }
      if ("deltaX" in e) {
        pX = e.deltaX;
      }
      if (e.shiftKey && !pX) {
        // if user scrolls with shift he wants horizontal scroll
        pX = pY;
        pY = 0;
      }
      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }

      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    }
    function handleMouseEnter() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
      if (
        swiper.params.mousewheel.thresholdDelta &&
        newEvent.delta < swiper.params.mousewheel.thresholdDelta
      ) {
        // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
      }
      if (
        swiper.params.mousewheel.thresholdTime &&
        now() - lastScrollTime < swiper.params.mousewheel.thresholdTime
      ) {
        // Prevent if time between scrolls is below configured threshold
        return false;
      }

      // If the movement is NOT big enough and
      // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
      //   Don't go any further (avoid insignificant scroll movement).
      if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
        // Return false as a default
        return true;
      }
      // If user is scrolling towards the end:
      //   If the slider hasn't hit the latest slide or
      //   if the slider is a loop and
      //   if the slider isn't moving right now:
      //     Go to next slide and
      //     emit a scroll event.
      // Else (the user is scrolling towards the beginning) and
      // if the slider hasn't hit the first slide or
      // if the slider is a loop and
      // if the slider isn't moving right now:
      //   Go to prev slide and
      //   emit a scroll event.
      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          emit("scroll", newEvent.raw);
        }
      } else if (
        (!swiper.isBeginning || swiper.params.loop) &&
        !swiper.animating
      ) {
        swiper.slidePrev();
        emit("scroll", newEvent.raw);
      }
      // If you got here is because an animation has been triggered so store the current time
      lastScrollTime = new window.Date().getTime();
      // Return false as a default
      return false;
    }
    function releaseScroll(newEvent) {
      const params = swiper.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }
      } else if (
        swiper.isBeginning &&
        !swiper.params.loop &&
        params.releaseOnEdges
      ) {
        // Return true to animate scroll on edges
        return true;
      }
      return false;
    }
    function handle(event) {
      let e = event;
      let disableParentSwiper = true;
      if (!swiper.enabled) return;

      // Ignore event if the target or its parents have the swiper-no-mousewheel class
      if (
        event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)
      )
        return;
      const params = swiper.params.mousewheel;
      if (swiper.params.cssMode) {
        e.preventDefault();
      }
      let targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        targetEl = document.querySelector(
          swiper.params.mousewheel.eventsTarget
        );
      }
      const targetElContainsTarget = targetEl && targetEl.contains(e.target);
      if (
        !swiper.mouseEntered &&
        !targetElContainsTarget &&
        !params.releaseOnEdges
      )
        return true;
      if (e.originalEvent) e = e.originalEvent; // jquery fix
      let delta = 0;
      const rtlFactor = swiper.rtlTranslate ? -1 : 1;
      const data = normalize(e);
      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY))
            delta = -data.pixelX * rtlFactor;
          else return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX))
          delta = -data.pixelY;
        else return true;
      } else {
        delta =
          Math.abs(data.pixelX) > Math.abs(data.pixelY)
            ? -data.pixelX * rtlFactor
            : -data.pixelY;
      }
      if (delta === 0) return true;
      if (params.invert) delta = -delta;

      // Get the scroll positions
      let positions = swiper.getTranslate() + delta * params.sensitivity;
      if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
      if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

      // When loop is true:
      //     the disableParentSwiper will be true.
      // When loop is false:
      //     if the scroll positions is not on edge,
      //     then the disableParentSwiper will be true.
      //     if the scroll on edge positions,
      //     then the disableParentSwiper will be false.
      disableParentSwiper = swiper.params.loop
        ? true
        : !(
            positions === swiper.minTranslate() ||
            positions === swiper.maxTranslate()
          );
      if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
      if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
        // Register the new event in a variable which stores the relevant data
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event,
        };

        // Keep the most recent events
        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift(); // only store the last N events
        }

        const prevEvent = recentWheelEvents.length
          ? recentWheelEvents[recentWheelEvents.length - 1]
          : undefined;
        recentWheelEvents.push(newEvent);

        // If there is at least one previous recorded event:
        //   If direction has changed or
        //   if the scroll is quicker than the previous one:
        //     Animate the slider.
        // Else (this is the first time the wheel is moved):
        //     Animate the slider.
        if (prevEvent) {
          if (
            newEvent.direction !== prevEvent.direction ||
            newEvent.delta > prevEvent.delta ||
            newEvent.time > prevEvent.time + 150
          ) {
            animateSlider(newEvent);
          }
        } else {
          animateSlider(newEvent);
        }

        // If it's time to release the scroll:
        //   Return now so you don't hit the preventDefault.
        if (releaseScroll(newEvent)) {
          return true;
        }
      } else {
        // Freemode or scrollContainer:

        // If we recently snapped after a momentum scroll, then ignore wheel events
        // to give time for the deceleration to finish. Stop ignoring after 500 msecs
        // or if it's a new scroll (larger delta or inverse sign as last event before
        // an end-of-momentum snap).
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
        };
        const ignoreWheelEvents =
          lastEventBeforeSnap &&
          newEvent.time < lastEventBeforeSnap.time + 500 &&
          newEvent.delta <= lastEventBeforeSnap.delta &&
          newEvent.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          lastEventBeforeSnap = undefined;
          let position = swiper.getTranslate() + delta * params.sensitivity;
          const wasBeginning = swiper.isBeginning;
          const wasEnd = swiper.isEnd;
          if (position >= swiper.minTranslate())
            position = swiper.minTranslate();
          if (position <= swiper.maxTranslate())
            position = swiper.maxTranslate();
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
          if (
            (!wasBeginning && swiper.isBeginning) ||
            (!wasEnd && swiper.isEnd)
          ) {
            swiper.updateSlidesClasses();
          }
          if (swiper.params.loop) {
            swiper.loopFix({
              direction: newEvent.direction < 0 ? "next" : "prev",
              byMousewheel: true,
            });
          }
          if (swiper.params.freeMode.sticky) {
            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
            // the end of a momentum scroll by storing recent (N=15?) wheel events.
            // 1. do all N events have decreasing or same (absolute value) delta?
            // 2. did all N events arrive in the last M (M=500?) msecs?
            // 3. does the earliest event have an (absolute value) delta that's
            //    at least P (P=1?) larger than the most recent event's delta?
            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
            // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
            // Snap immediately and ignore remaining wheel events in this scroll.
            // See comment above for "remaining wheel events in this scroll" determination.
            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
            clearTimeout(timeout);
            timeout = undefined;
            if (recentWheelEvents.length >= 15) {
              recentWheelEvents.shift(); // only store the last N events
            }

            const prevEvent = recentWheelEvents.length
              ? recentWheelEvents[recentWheelEvents.length - 1]
              : undefined;
            const firstEvent = recentWheelEvents[0];
            recentWheelEvents.push(newEvent);
            if (
              prevEvent &&
              (newEvent.delta > prevEvent.delta ||
                newEvent.direction !== prevEvent.direction)
            ) {
              // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
              recentWheelEvents.splice(0);
            } else if (
              recentWheelEvents.length >= 15 &&
              newEvent.time - firstEvent.time < 500 &&
              firstEvent.delta - newEvent.delta >= 1 &&
              newEvent.delta <= 6
            ) {
              // We're at the end of the deceleration of a momentum scroll, so there's no need
              // to wait for more events. Snap ASAP on the next tick.
              // Also, because there's some remaining momentum we'll bias the snap in the
              // direction of the ongoing scroll because it's better UX for the scroll to snap
              // in the same direction as the scroll instead of reversing to snap.  Therefore,
              // if it's already scrolled more than 20% in the current direction, keep going.
              const snapToThreshold = delta > 0 ? 0.8 : 0.2;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              timeout = nextTick(() => {
                swiper.slideToClosest(
                  swiper.params.speed,
                  true,
                  undefined,
                  snapToThreshold
                );
              }, 0); // no delay; move on next tick
            }

            if (!timeout) {
              // if we get here, then we haven't detected the end of a momentum scroll, so
              // we'll consider a scroll "complete" when there haven't been any wheel events
              // for 500ms.
              timeout = nextTick(() => {
                const snapToThreshold = 0.5;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                swiper.slideToClosest(
                  swiper.params.speed,
                  true,
                  undefined,
                  snapToThreshold
                );
              }, 500);
            }
          }

          // Emit event
          if (!ignoreWheelEvents) emit("scroll", e);

          // Stop autoplay
          if (
            swiper.params.autoplay &&
            swiper.params.autoplayDisableOnInteraction
          )
            swiper.autoplay.stop();
          // Return page scroll on edge positions
          if (
            params.releaseOnEdges &&
            (position === swiper.minTranslate() ||
              position === swiper.maxTranslate())
          ) {
            return true;
          }
        }
      }
      if (e.preventDefault) e.preventDefault();
      else e.returnValue = false;
      return false;
    }
    function events(method) {
      let targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        targetEl = document.querySelector(
          swiper.params.mousewheel.eventsTarget
        );
      }
      targetEl[method]("mouseenter", handleMouseEnter);
      targetEl[method]("mouseleave", handleMouseLeave);
      targetEl[method]("wheel", handle);
    }
    function enable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener("wheel", handle);
        return true;
      }
      if (swiper.mousewheel.enabled) return false;
      events("addEventListener");
      swiper.mousewheel.enabled = true;
      return true;
    }
    function disable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, handle);
        return true;
      }
      if (!swiper.mousewheel.enabled) return false;
      events("removeEventListener");
      swiper.mousewheel.enabled = false;
      return true;
    }
    on("init", () => {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        disable();
      }
      if (swiper.params.mousewheel.enabled) enable();
    });
    on("destroy", () => {
      if (swiper.params.cssMode) {
        enable();
      }
      if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
      enable,
      disable,
    });
  }

  function createElementIfNotDefined(
    swiper,
    originalParams,
    params,
    checkProps
  ) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
          if (!element) {
            element = createElement("div", checkProps[key]);
            element.className = checkProps[key];
            swiper.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  function Navigation(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    });
    swiper.navigation = {
      nextEl: null,
      prevEl: null,
    };
    const makeElementsArray = (el) =>
      (Array.isArray(el) ? el : [el]).filter((e) => !!e);
    function getEl(el) {
      let res;
      if (el && typeof el === "string" && swiper.isElement) {
        res = swiper.el.querySelector(el);
        if (res) return res;
      }
      if (el) {
        if (typeof el === "string") res = [...document.querySelectorAll(el)];
        if (
          swiper.params.uniqueNavElements &&
          typeof el === "string" &&
          res.length > 1 &&
          swiper.el.querySelectorAll(el).length === 1
        ) {
          res = swiper.el.querySelector(el);
        }
      }
      if (el && !res) return el;
      // if (Array.isArray(res) && res.length === 1) res = res[0];
      return res;
    }
    function toggleEl(el, disabled) {
      const params = swiper.params.navigation;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (subEl) {
          subEl.classList[disabled ? "add" : "remove"](
            ...params.disabledClass.split(" ")
          );
          if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
          if (swiper.params.watchOverflow && swiper.enabled) {
            subEl.classList[swiper.isLocked ? "add" : "remove"](
              params.lockClass
            );
          }
        }
      });
    }
    function update() {
      // Update Navigation Buttons
      const { nextEl, prevEl } = swiper.navigation;
      if (swiper.params.loop) {
        toggleEl(prevEl, false);
        toggleEl(nextEl, false);
        return;
      }
      toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
        return;
      swiper.slidePrev();
      emit("navigationPrev");
    }
    function onNextClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slideNext();
      emit("navigationNext");
    }
    function init() {
      const params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(
        swiper,
        swiper.originalParams.navigation,
        swiper.params.navigation,
        {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        }
      );
      if (!(params.nextEl || params.prevEl)) return;
      let nextEl = getEl(params.nextEl);
      let prevEl = getEl(params.prevEl);
      Object.assign(swiper.navigation, {
        nextEl,
        prevEl,
      });
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const initButton = (el, dir) => {
        if (el) {
          el.addEventListener(
            "click",
            dir === "next" ? onNextClick : onPrevClick
          );
        }
        if (!swiper.enabled && el) {
          el.classList.add(...params.lockClass.split(" "));
        }
      };
      nextEl.forEach((el) => initButton(el, "next"));
      prevEl.forEach((el) => initButton(el, "prev"));
    }
    function destroy() {
      let { nextEl, prevEl } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const destroyButton = (el, dir) => {
        el.removeEventListener(
          "click",
          dir === "next" ? onNextClick : onPrevClick
        );
        el.classList.remove(
          ...swiper.params.navigation.disabledClass.split(" ")
        );
      };
      nextEl.forEach((el) => destroyButton(el, "next"));
      prevEl.forEach((el) => destroyButton(el, "prev"));
    }
    on("init", () => {
      if (swiper.params.navigation.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        update();
      }
    });
    on("toEdge fromEdge lock unlock", () => {
      update();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let { nextEl, prevEl } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (swiper.enabled) {
        update();
        return;
      }
      [...nextEl, ...prevEl]
        .filter((el) => !!el)
        .forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
    });
    on("click", (_s, e) => {
      let { nextEl, prevEl } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const targetEl = e.target;
      if (
        swiper.params.navigation.hideOnClick &&
        !prevEl.includes(targetEl) &&
        !nextEl.includes(targetEl)
      ) {
        if (
          swiper.pagination &&
          swiper.params.pagination &&
          swiper.params.pagination.clickable &&
          (swiper.pagination.el === targetEl ||
            swiper.pagination.el.contains(targetEl))
        )
          return;
        let isHidden;
        if (nextEl.length) {
          isHidden = nextEl[0].classList.contains(
            swiper.params.navigation.hiddenClass
          );
        } else if (prevEl.length) {
          isHidden = prevEl[0].classList.contains(
            swiper.params.navigation.hiddenClass
          );
        }
        if (isHidden === true) {
          emit("navigationShow");
        } else {
          emit("navigationHide");
        }
        [...nextEl, ...prevEl]
          .filter((el) => !!el)
          .forEach((el) =>
            el.classList.toggle(swiper.params.navigation.hiddenClass)
          );
      }
    });
    const enable = () => {
      swiper.el.classList.remove(
        ...swiper.params.navigation.navigationDisabledClass.split(" ")
      );
      init();
      update();
    };
    const disable = () => {
      swiper.el.classList.add(
        ...swiper.params.navigation.navigationDisabledClass.split(" ")
      );
      destroy();
    };
    Object.assign(swiper.navigation, {
      enable,
      disable,
      update,
      init,
      destroy,
    });
  }

  function classesToSelector(classes) {
    if (classes === void 0) {
      classes = "";
    }
    return `.${classes
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1") // eslint-disable-line
      .replace(/ /g, ".")}`;
  }

  function Pagination(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    const pfx = "swiper-pagination";
    extendParams({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: `${pfx}-bullet`,
        bulletActiveClass: `${pfx}-bullet-active`,
        modifierClass: `${pfx}-`,
        currentClass: `${pfx}-current`,
        totalClass: `${pfx}-total`,
        hiddenClass: `${pfx}-hidden`,
        progressbarFillClass: `${pfx}-progressbar-fill`,
        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
        clickableClass: `${pfx}-clickable`,
        lockClass: `${pfx}-lock`,
        horizontalClass: `${pfx}-horizontal`,
        verticalClass: `${pfx}-vertical`,
        paginationDisabledClass: `${pfx}-disabled`,
      },
    });
    swiper.pagination = {
      el: null,
      bullets: [],
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    const makeElementsArray = (el) =>
      (Array.isArray(el) ? el : [el]).filter((e) => !!e);
    function isPaginationDisabled() {
      return (
        !swiper.params.pagination.el ||
        !swiper.pagination.el ||
        (Array.isArray(swiper.pagination.el) &&
          swiper.pagination.el.length === 0)
      );
    }
    function setSideBullets(bulletEl, position) {
      const { bulletActiveClass } = swiper.params.pagination;
      if (!bulletEl) return;
      bulletEl =
        bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}`);
        bulletEl =
          bulletEl[
            `${position === "prev" ? "previous" : "next"}ElementSibling`
          ];
        if (bulletEl) {
          bulletEl.classList.add(
            `${bulletActiveClass}-${position}-${position}`
          );
        }
      }
    }
    function onBulletClick(e) {
      const bulletEl = e.target.closest(
        classesToSelector(swiper.params.pagination.bulletClass)
      );
      if (!bulletEl) {
        return;
      }
      e.preventDefault();
      const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
      if (swiper.params.loop) {
        if (swiper.realIndex === index) return;
        swiper.slideToLoop(index);
      } else {
        swiper.slideTo(index);
      }
    }
    function update() {
      // Render || Update Pagination bullets/items
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      // Current/Total
      let current;
      let previousIndex;
      const slidesLength =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.virtual.slides.length
          : swiper.slides.length;
      const total = swiper.params.loop
        ? Math.ceil(slidesLength / swiper.params.slidesPerGroup)
        : swiper.snapGrid.length;
      if (swiper.params.loop) {
        previousIndex = swiper.previousRealIndex || 0;
        current =
          swiper.params.slidesPerGroup > 1
            ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup)
            : swiper.realIndex;
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
        previousIndex = swiper.previousSnapIndex;
      } else {
        previousIndex = swiper.previousIndex || 0;
        current = swiper.activeIndex || 0;
      }
      // Types
      if (
        params.type === "bullets" &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length > 0
      ) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = elementOuterSize(
            bullets[0],
            swiper.isHorizontal() ? "width" : "height",
            true
          );
          el.forEach((subEl) => {
            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${
              bulletSize * (params.dynamicMainBullets + 4)
            }px`;
          });
          if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
            dynamicBulletIndex += current - (previousIndex || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex =
            firstIndex +
            (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.forEach((bulletEl) => {
          const classesToRemove = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (suffix) => `${params.bulletActiveClass}${suffix}`
            ),
          ]
            .map((s) =>
              typeof s === "string" && s.includes(" ") ? s.split(" ") : s
            )
            .flat();
          bulletEl.classList.remove(...classesToRemove);
        });
        if (el.length > 1) {
          bullets.forEach((bullet) => {
            const bulletIndex = elementIndex(bullet);
            if (bulletIndex === current) {
              bullet.classList.add(...params.bulletActiveClass.split(" "));
            } else if (swiper.isElement) {
              bullet.setAttribute("part", "bullet");
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                bullet.classList.add(
                  ...`${params.bulletActiveClass}-main`.split(" ")
                );
              }
              if (bulletIndex === firstIndex) {
                setSideBullets(bullet, "prev");
              }
              if (bulletIndex === lastIndex) {
                setSideBullets(bullet, "next");
              }
            }
          });
        } else {
          const bullet = bullets[current];
          if (bullet) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          }
          if (swiper.isElement) {
            bullets.forEach((bulletEl, bulletIndex) => {
              bulletEl.setAttribute(
                "part",
                bulletIndex === current ? "bullet-active" : "bullet"
              );
            });
          }
          if (params.dynamicBullets) {
            const firstDisplayedBullet = bullets[firstIndex];
            const lastDisplayedBullet = bullets[lastIndex];
            for (let i = firstIndex; i <= lastIndex; i += 1) {
              if (bullets[i]) {
                bullets[i].classList.add(
                  ...`${params.bulletActiveClass}-main`.split(" ")
                );
              }
            }
            setSideBullets(firstDisplayedBullet, "prev");
            setSideBullets(lastDisplayedBullet, "next");
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(
            bullets.length,
            params.dynamicMainBullets + 4
          );
          const bulletsOffset =
            (bulletSize * dynamicBulletsLength - bulletSize) / 2 -
            midIndex * bulletSize;
          const offsetProp = rtl ? "right" : "left";
          bullets.forEach((bullet) => {
            bullet.style[
              swiper.isHorizontal() ? offsetProp : "top"
            ] = `${bulletsOffset}px`;
          });
        }
      }
      el.forEach((subEl, subElIndex) => {
        if (params.type === "fraction") {
          subEl
            .querySelectorAll(classesToSelector(params.currentClass))
            .forEach((fractionEl) => {
              fractionEl.textContent = params.formatFractionCurrent(
                current + 1
              );
            });
          subEl
            .querySelectorAll(classesToSelector(params.totalClass))
            .forEach((totalEl) => {
              totalEl.textContent = params.formatFractionTotal(total);
            });
        }
        if (params.type === "progressbar") {
          let progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal()
              ? "vertical"
              : "horizontal";
          } else {
            progressbarDirection = swiper.isHorizontal()
              ? "horizontal"
              : "vertical";
          }
          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;
          if (progressbarDirection === "horizontal") {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          subEl
            .querySelectorAll(classesToSelector(params.progressbarFillClass))
            .forEach((progressEl) => {
              progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
              progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
            });
        }
        if (params.type === "custom" && params.renderCustom) {
          subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
          if (subElIndex === 0) emit("paginationRender", subEl);
        } else {
          if (subElIndex === 0) emit("paginationRender", subEl);
          emit("paginationUpdate", subEl);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      });
    }
    function render() {
      // Render Container
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.virtual.slides.length
          : swiper.grid && swiper.params.grid.rows > 1
          ? swiper.slides.length / Math.ceil(swiper.params.grid.rows)
          : swiper.slides.length;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let paginationHTML = "";
      if (params.type === "bullets") {
        let numberOfBullets = swiper.params.loop
          ? Math.ceil(slidesLength / swiper.params.slidesPerGroup)
          : swiper.snapGrid.length;
        if (
          swiper.params.freeMode &&
          swiper.params.freeMode.enabled &&
          numberOfBullets > slidesLength
        ) {
          numberOfBullets = slidesLength;
        }
        for (let i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(
              swiper,
              i,
              params.bulletClass
            );
          } else {
            // prettier-ignore
            paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
          }
        }
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(
            swiper,
            params.currentClass,
            params.totalClass
          );
        } else {
          paginationHTML =
            `<span class="${params.currentClass}"></span>` +
            " / " +
            `<span class="${params.totalClass}"></span>`;
        }
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(
            swiper,
            params.progressbarFillClass
          );
        } else {
          paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
      }
      swiper.pagination.bullets = [];
      el.forEach((subEl) => {
        if (params.type !== "custom") {
          subEl.innerHTML = paginationHTML || "";
        }
        if (params.type === "bullets") {
          swiper.pagination.bullets.push(
            ...subEl.querySelectorAll(classesToSelector(params.bulletClass))
          );
        }
      });
      if (params.type !== "custom") {
        emit("paginationRender", el[0]);
      }
    }
    function init() {
      swiper.params.pagination = createElementIfNotDefined(
        swiper,
        swiper.originalParams.pagination,
        swiper.params.pagination,
        {
          el: "swiper-pagination",
        }
      );
      const params = swiper.params.pagination;
      if (!params.el) return;
      let el;
      if (typeof params.el === "string" && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = [...document.querySelectorAll(params.el)];
      }
      if (!el) {
        el = params.el;
      }
      if (!el || el.length === 0) return;
      if (
        swiper.params.uniqueNavElements &&
        typeof params.el === "string" &&
        Array.isArray(el) &&
        el.length > 1
      ) {
        el = [...swiper.el.querySelectorAll(params.el)];
        // check if it belongs to another nested Swiper
        if (el.length > 1) {
          el = el.filter((subEl) => {
            if (elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
            return true;
          })[0];
        }
      }
      if (Array.isArray(el) && el.length === 1) el = el[0];
      Object.assign(swiper.pagination, {
        el,
      });
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (params.type === "bullets" && params.clickable) {
          subEl.classList.add(...(params.clickableClass || "").split(" "));
        }
        subEl.classList.add(params.modifierClass + params.type);
        subEl.classList.add(
          swiper.isHorizontal() ? params.horizontalClass : params.verticalClass
        );
        if (params.type === "bullets" && params.dynamicBullets) {
          subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === "progressbar" && params.progressbarOpposite) {
          subEl.classList.add(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          subEl.addEventListener("click", onBulletClick);
        }
        if (!swiper.enabled) {
          subEl.classList.add(params.lockClass);
        }
      });
    }
    function destroy() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          subEl.classList.remove(params.hiddenClass);
          subEl.classList.remove(params.modifierClass + params.type);
          subEl.classList.remove(
            swiper.isHorizontal()
              ? params.horizontalClass
              : params.verticalClass
          );
          if (params.clickable) {
            subEl.classList.remove(...(params.clickableClass || "").split(" "));
            subEl.removeEventListener("click", onBulletClick);
          }
        });
      }
      if (swiper.pagination.bullets)
        swiper.pagination.bullets.forEach((subEl) =>
          subEl.classList.remove(...params.bulletActiveClass.split(" "))
        );
    }
    on("changeDirection", () => {
      if (!swiper.pagination || !swiper.pagination.el) return;
      const params = swiper.params.pagination;
      let { el } = swiper.pagination;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(
          swiper.isHorizontal() ? params.horizontalClass : params.verticalClass
        );
      });
    });
    on("init", () => {
      if (swiper.params.pagination.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        render();
        update();
      }
    });
    on("activeIndexChange", () => {
      if (typeof swiper.snapIndex === "undefined") {
        update();
      }
    });
    on("snapIndexChange", () => {
      update();
    });
    on("snapGridLengthChange", () => {
      render();
      update();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let { el } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) =>
          subEl.classList[swiper.enabled ? "remove" : "add"](
            swiper.params.pagination.lockClass
          )
        );
      }
    });
    on("lock unlock", () => {
      update();
    });
    on("click", (_s, e) => {
      const targetEl = e.target;
      const el = makeElementsArray(swiper.pagination.el);
      if (
        swiper.params.pagination.el &&
        swiper.params.pagination.hideOnClick &&
        el &&
        el.length > 0 &&
        !targetEl.classList.contains(swiper.params.pagination.bulletClass)
      ) {
        if (
          swiper.navigation &&
          ((swiper.navigation.nextEl &&
            targetEl === swiper.navigation.nextEl) ||
            (swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
        )
          return;
        const isHidden = el[0].classList.contains(
          swiper.params.pagination.hiddenClass
        );
        if (isHidden === true) {
          emit("paginationShow");
        } else {
          emit("paginationHide");
        }
        el.forEach((subEl) =>
          subEl.classList.toggle(swiper.params.pagination.hiddenClass)
        );
      }
    });
    const enable = () => {
      swiper.el.classList.remove(
        swiper.params.pagination.paginationDisabledClass
      );
      let { el } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) =>
          subEl.classList.remove(
            swiper.params.pagination.paginationDisabledClass
          )
        );
      }
      init();
      render();
      update();
    };
    const disable = () => {
      swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
      let { el } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) =>
          subEl.classList.add(swiper.params.pagination.paginationDisabledClass)
        );
      }
      destroy();
    };
    Object.assign(swiper.pagination, {
      enable,
      disable,
      render,
      update,
      init,
      destroy,
    });
  }

  function Scrollbar(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    const document = getDocument();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: `swiper-scrollbar-horizontal`,
        verticalClass: `swiper-scrollbar-vertical`,
      },
    });
    swiper.scrollbar = {
      el: null,
      dragEl: null,
    };
    function setTranslate() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const { scrollbar, rtlTranslate: rtl } = swiper;
      const { dragEl, el } = scrollbar;
      const params = swiper.params.scrollbar;
      const progress = swiper.params.loop
        ? swiper.progressLoop
        : swiper.progress;
      let newSize = dragSize;
      let newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
        dragEl.style.width = `${newSize}px`;
      } else {
        dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
        dragEl.style.height = `${newSize}px`;
      }
      if (params.hide) {
        clearTimeout(timeout);
        el.style.opacity = 1;
        timeout = setTimeout(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = "400ms";
        }, 1000);
      }
    }
    function setTransition(duration) {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
    }
    function updateSize() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const { scrollbar } = swiper;
      const { dragEl, el } = scrollbar;
      dragEl.style.width = "";
      dragEl.style.height = "";
      trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
      divider =
        swiper.size /
        (swiper.virtualSize +
          swiper.params.slidesOffsetBefore -
          (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
      if (swiper.params.scrollbar.dragSize === "auto") {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }
      if (swiper.isHorizontal()) {
        dragEl.style.width = `${dragSize}px`;
      } else {
        dragEl.style.height = `${dragSize}px`;
      }
      if (divider >= 1) {
        el.style.display = "none";
      } else {
        el.style.display = "";
      }
      if (swiper.params.scrollbar.hide) {
        el.style.opacity = 0;
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](
          swiper.params.scrollbar.lockClass
        );
      }
    }
    function getPointerPosition(e) {
      return swiper.isHorizontal() ? e.clientX : e.clientY;
    }
    function setDragPosition(e) {
      const { scrollbar, rtlTranslate: rtl } = swiper;
      const { el } = scrollbar;
      let positionRatio;
      positionRatio =
        (getPointerPosition(e) -
          elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] -
          (dragStartPos !== null ? dragStartPos : dragSize / 2)) /
        (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
      const position =
        swiper.minTranslate() +
        (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
      const params = swiper.params.scrollbar;
      const { scrollbar, wrapperEl } = swiper;
      const { el, dragEl } = scrollbar;
      isTouched = true;
      dragStartPos =
        e.target === dragEl
          ? getPointerPosition(e) -
            e.target.getBoundingClientRect()[
              swiper.isHorizontal() ? "left" : "top"
            ]
          : null;
      e.preventDefault();
      e.stopPropagation();
      wrapperEl.style.transitionDuration = "100ms";
      dragEl.style.transitionDuration = "100ms";
      setDragPosition(e);
      clearTimeout(dragTimeout);
      el.style.transitionDuration = "0ms";
      if (params.hide) {
        el.style.opacity = 1;
      }
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style["scroll-snap-type"] = "none";
      }
      emit("scrollbarDragStart", e);
    }
    function onDragMove(e) {
      const { scrollbar, wrapperEl } = swiper;
      const { el, dragEl } = scrollbar;
      if (!isTouched) return;
      if (e.preventDefault) e.preventDefault();
      else e.returnValue = false;
      setDragPosition(e);
      wrapperEl.style.transitionDuration = "0ms";
      el.style.transitionDuration = "0ms";
      dragEl.style.transitionDuration = "0ms";
      emit("scrollbarDragMove", e);
    }
    function onDragEnd(e) {
      const params = swiper.params.scrollbar;
      const { scrollbar, wrapperEl } = swiper;
      const { el } = scrollbar;
      if (!isTouched) return;
      isTouched = false;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style["scroll-snap-type"] = "";
        wrapperEl.style.transitionDuration = "";
      }
      if (params.hide) {
        clearTimeout(dragTimeout);
        dragTimeout = nextTick(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = "400ms";
        }, 1000);
      }
      emit("scrollbarDragEnd", e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    }
    function events(method) {
      const { scrollbar, params } = swiper;
      const el = scrollbar.el;
      if (!el) return;
      const target = el;
      const activeListener = params.passiveListeners
        ? {
            passive: false,
            capture: false,
          }
        : false;
      const passiveListener = params.passiveListeners
        ? {
            passive: true,
            capture: false,
          }
        : false;
      if (!target) return;
      const eventMethod =
        method === "on" ? "addEventListener" : "removeEventListener";
      target[eventMethod]("pointerdown", onDragStart, activeListener);
      document[eventMethod]("pointermove", onDragMove, activeListener);
      document[eventMethod]("pointerup", onDragEnd, passiveListener);
    }
    function enableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events("on");
    }
    function disableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events("off");
    }
    function init() {
      const { scrollbar, el: swiperEl } = swiper;
      swiper.params.scrollbar = createElementIfNotDefined(
        swiper,
        swiper.originalParams.scrollbar,
        swiper.params.scrollbar,
        {
          el: "swiper-scrollbar",
        }
      );
      const params = swiper.params.scrollbar;
      if (!params.el) return;
      let el;
      if (typeof params.el === "string" && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = document.querySelectorAll(params.el);
        if (!el.length) return;
      } else if (!el) {
        el = params.el;
      }
      if (
        swiper.params.uniqueNavElements &&
        typeof params.el === "string" &&
        el.length > 1 &&
        swiperEl.querySelectorAll(params.el).length === 1
      ) {
        el = swiperEl.querySelector(params.el);
      }
      if (el.length > 0) el = el[0];
      el.classList.add(
        swiper.isHorizontal() ? params.horizontalClass : params.verticalClass
      );
      let dragEl;
      if (el) {
        dragEl = el.querySelector(
          classesToSelector(swiper.params.scrollbar.dragClass)
        );
        if (!dragEl) {
          dragEl = createElement("div", swiper.params.scrollbar.dragClass);
          el.append(dragEl);
        }
      }
      Object.assign(scrollbar, {
        el,
        dragEl,
      });
      if (params.draggable) {
        enableDraggable();
      }
      if (el) {
        el.classList[swiper.enabled ? "remove" : "add"](
          ...classesToTokens(swiper.params.scrollbar.lockClass)
        );
      }
    }
    function destroy() {
      const params = swiper.params.scrollbar;
      const el = swiper.scrollbar.el;
      if (el) {
        el.classList.remove(
          ...classesToTokens(
            swiper.isHorizontal()
              ? params.horizontalClass
              : params.verticalClass
          )
        );
      }
      disableDraggable();
    }
    on("init", () => {
      if (swiper.params.scrollbar.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        updateSize();
        setTranslate();
      }
    });
    on("update resize observerUpdate lock unlock", () => {
      updateSize();
    });
    on("setTranslate", () => {
      setTranslate();
    });
    on("setTransition", (_s, duration) => {
      setTransition(duration);
    });
    on("enable disable", () => {
      const { el } = swiper.scrollbar;
      if (el) {
        el.classList[swiper.enabled ? "remove" : "add"](
          ...classesToTokens(swiper.params.scrollbar.lockClass)
        );
      }
    });
    on("destroy", () => {
      destroy();
    });
    const enable = () => {
      swiper.el.classList.remove(
        ...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass)
      );
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.remove(
          ...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass)
        );
      }
      init();
      updateSize();
      setTranslate();
    };
    const disable = () => {
      swiper.el.classList.add(
        ...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass)
      );
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.add(
          ...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass)
        );
      }
      destroy();
    };
    Object.assign(swiper.scrollbar, {
      enable,
      disable,
      updateSize,
      setTranslate,
      init,
      destroy,
    });
  }

  function Parallax(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
      parallax: {
        enabled: false,
      },
    });
    const elementsSelector =
      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]";
    const setTransform = (el, progress) => {
      const { rtl } = swiper;
      const rtlFactor = rtl ? -1 : 1;
      const p = el.getAttribute("data-swiper-parallax") || "0";
      let x = el.getAttribute("data-swiper-parallax-x");
      let y = el.getAttribute("data-swiper-parallax-y");
      const scale = el.getAttribute("data-swiper-parallax-scale");
      const opacity = el.getAttribute("data-swiper-parallax-opacity");
      const rotate = el.getAttribute("data-swiper-parallax-rotate");
      if (x || y) {
        x = x || "0";
        y = y || "0";
      } else if (swiper.isHorizontal()) {
        x = p;
        y = "0";
      } else {
        y = p;
        x = "0";
      }
      if (x.indexOf("%") >= 0) {
        x = `${parseInt(x, 10) * progress * rtlFactor}%`;
      } else {
        x = `${x * progress * rtlFactor}px`;
      }
      if (y.indexOf("%") >= 0) {
        y = `${parseInt(y, 10) * progress}%`;
      } else {
        y = `${y * progress}px`;
      }
      if (typeof opacity !== "undefined" && opacity !== null) {
        const currentOpacity =
          opacity - (opacity - 1) * (1 - Math.abs(progress));
        el.style.opacity = currentOpacity;
      }
      let transform = `translate3d(${x}, ${y}, 0px)`;
      if (typeof scale !== "undefined" && scale !== null) {
        const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        transform += ` scale(${currentScale})`;
      }
      if (rotate && typeof rotate !== "undefined" && rotate !== null) {
        const currentRotate = rotate * progress * -1;
        transform += ` rotate(${currentRotate}deg)`;
      }
      el.style.transform = transform;
    };
    const setTranslate = () => {
      const { el, slides, progress, snapGrid, isElement } = swiper;
      const elements = elementChildren(el, elementsSelector);
      if (swiper.isElement) {
        elements.push(...elementChildren(swiper.hostEl, elementsSelector));
      }
      elements.forEach((subEl) => {
        setTransform(subEl, progress);
      });
      slides.forEach((slideEl, slideIndex) => {
        let slideProgress = slideEl.progress;
        if (
          swiper.params.slidesPerGroup > 1 &&
          swiper.params.slidesPerView !== "auto"
        ) {
          slideProgress +=
            Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        slideEl
          .querySelectorAll(
            `${elementsSelector}, [data-swiper-parallax-rotate]`
          )
          .forEach((subEl) => {
            setTransform(subEl, slideProgress);
          });
      });
    };
    const setTransition = function (duration) {
      if (duration === void 0) {
        duration = swiper.params.speed;
      }
      const { el, hostEl } = swiper;
      const elements = [...el.querySelectorAll(elementsSelector)];
      if (swiper.isElement) {
        elements.push(...hostEl.querySelectorAll(elementsSelector));
      }
      elements.forEach((parallaxEl) => {
        let parallaxDuration =
          parseInt(
            parallaxEl.getAttribute("data-swiper-parallax-duration"),
            10
          ) || duration;
        if (duration === 0) parallaxDuration = 0;
        parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
      });
    };
    on("beforeInit", () => {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    });
    on("init", () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate();
    });
    on("setTranslate", () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate();
    });
    on("setTransition", (_swiper, duration) => {
      if (!swiper.params.parallax.enabled) return;
      setTransition(duration);
    });
  }

  function Zoom(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    const window = getWindow();
    extendParams({
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed",
      },
    });
    swiper.zoom = {
      enabled: false,
    };
    let currentScale = 1;
    let isScaling = false;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const evCache = [];
    const gesture = {
      originX: 0,
      originY: 0,
      slideEl: undefined,
      slideWidth: undefined,
      slideHeight: undefined,
      imageEl: undefined,
      imageWrapEl: undefined,
      maxRatio: 3,
    };
    const image = {
      isTouched: undefined,
      isMoved: undefined,
      currentX: undefined,
      currentY: undefined,
      minX: undefined,
      minY: undefined,
      maxX: undefined,
      maxY: undefined,
      width: undefined,
      height: undefined,
      startX: undefined,
      startY: undefined,
      touchesStart: {},
      touchesCurrent: {},
    };
    const velocity = {
      x: undefined,
      y: undefined,
      prevPositionX: undefined,
      prevPositionY: undefined,
      prevTime: undefined,
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, "scale", {
      get() {
        return scale;
      },
      set(value) {
        if (scale !== value) {
          const imageEl = gesture.imageEl;
          const slideEl = gesture.slideEl;
          emit("zoomChange", value, imageEl, slideEl);
        }
        scale = value;
      },
    });
    function getDistanceBetweenTouches() {
      if (evCache.length < 2) return 1;
      const x1 = evCache[0].pageX;
      const y1 = evCache[0].pageY;
      const x2 = evCache[1].pageX;
      const y2 = evCache[1].pageY;
      const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      return distance;
    }
    function getScaleOrigin() {
      if (evCache.length < 2)
        return {
          x: null,
          y: null,
        };
      const box = gesture.imageEl.getBoundingClientRect();
      return [
        (evCache[0].pageX +
          (evCache[1].pageX - evCache[0].pageX) / 2 -
          box.x -
          window.scrollX) /
          currentScale,
        (evCache[0].pageY +
          (evCache[1].pageY - evCache[0].pageY) / 2 -
          box.y -
          window.scrollY) /
          currentScale,
      ];
    }
    function getSlideSelector() {
      return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    }
    function eventWithinSlide(e) {
      const slideSelector = getSlideSelector();
      if (e.target.matches(slideSelector)) return true;
      if (
        swiper.slides.filter((slideEl) => slideEl.contains(e.target)).length > 0
      )
        return true;
      return false;
    }
    function eventWithinZoomContainer(e) {
      const selector = `.${swiper.params.zoom.containerClass}`;
      if (e.target.matches(selector)) return true;
      if (
        [...swiper.hostEl.querySelectorAll(selector)].filter((containerEl) =>
          containerEl.contains(e.target)
        ).length > 0
      )
        return true;
      return false;
    }

    // Events
    function onGestureStart(e) {
      if (e.pointerType === "mouse") {
        evCache.splice(0, evCache.length);
      }
      if (!eventWithinSlide(e)) return;
      const params = swiper.params.zoom;
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      evCache.push(e);
      if (evCache.length < 2) {
        return;
      }
      fakeGestureTouched = true;
      gesture.scaleStart = getDistanceBetweenTouches();
      if (!gesture.slideEl) {
        gesture.slideEl = e.target.closest(
          `.${swiper.params.slideClass}, swiper-slide`
        );
        if (!gesture.slideEl)
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        let imageEl = gesture.slideEl.querySelector(
          `.${params.containerClass}`
        );
        if (imageEl) {
          imageEl = imageEl.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(
            gesture.imageEl,
            `.${params.containerClass}`
          )[0];
        } else {
          gesture.imageWrapEl = undefined;
        }
        if (!gesture.imageWrapEl) {
          gesture.imageEl = undefined;
          return;
        }
        gesture.maxRatio =
          gesture.imageWrapEl.getAttribute("data-swiper-zoom") ||
          params.maxRatio;
      }
      if (gesture.imageEl) {
        const [originX, originY] = getScaleOrigin();
        gesture.originX = originX;
        gesture.originY = originY;
        gesture.imageEl.style.transitionDuration = "0ms";
      }
      isScaling = true;
    }
    function onGestureChange(e) {
      if (!eventWithinSlide(e)) return;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const pointerIndex = evCache.findIndex(
        (cachedEv) => cachedEv.pointerId === e.pointerId
      );
      if (pointerIndex >= 0) evCache[pointerIndex] = e;
      if (evCache.length < 2) {
        return;
      }
      fakeGestureMoved = true;
      gesture.scaleMove = getDistanceBetweenTouches();
      if (!gesture.imageEl) {
        return;
      }
      zoom.scale = (gesture.scaleMove / gesture.scaleStart) * currentScale;
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale =
          gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale =
          params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
      }
      gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function onGestureEnd(e) {
      if (!eventWithinSlide(e)) return;
      if (e.pointerType === "mouse" && e.type === "pointerout") return;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const pointerIndex = evCache.findIndex(
        (cachedEv) => cachedEv.pointerId === e.pointerId
      );
      if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
      if (!fakeGestureTouched || !fakeGestureMoved) {
        return;
      }
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      if (!gesture.imageEl) return;
      zoom.scale = Math.max(
        Math.min(zoom.scale, gesture.maxRatio),
        params.minRatio
      );
      gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
      gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
      currentScale = zoom.scale;
      isScaling = false;
      if (zoom.scale > 1 && gesture.slideEl) {
        gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
      } else if (zoom.scale <= 1 && gesture.slideEl) {
        gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
      }
      if (zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
        gesture.slideEl = undefined;
      }
    }
    function onTouchStart(e) {
      const device = swiper.device;
      if (!gesture.imageEl) return;
      if (image.isTouched) return;
      if (device.android && e.cancelable) e.preventDefault();
      image.isTouched = true;
      const event = evCache.length > 0 ? evCache[0] : e;
      image.touchesStart.x = event.pageX;
      image.touchesStart.y = event.pageY;
    }
    function onTouchMove(e) {
      if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
      const zoom = swiper.zoom;
      if (!gesture.imageEl) return;
      if (!image.isTouched || !gesture.slideEl) return;
      if (!image.isMoved) {
        image.width = gesture.imageEl.offsetWidth;
        image.height = gesture.imageEl.offsetHeight;
        image.startX = getTranslate(gesture.imageWrapEl, "x") || 0;
        image.startY = getTranslate(gesture.imageWrapEl, "y") || 0;
        gesture.slideWidth = gesture.slideEl.offsetWidth;
        gesture.slideHeight = gesture.slideEl.offsetHeight;
        gesture.imageWrapEl.style.transitionDuration = "0ms";
      }
      // Define if we need image drag
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      if (
        scaledWidth < gesture.slideWidth &&
        scaledHeight < gesture.slideHeight
      )
        return;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
      image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
      const touchesDiff = Math.max(
        Math.abs(image.touchesCurrent.x - image.touchesStart.x),
        Math.abs(image.touchesCurrent.y - image.touchesStart.y)
      );
      if (touchesDiff > 5) {
        swiper.allowClick = false;
      }
      if (!image.isMoved && !isScaling) {
        if (
          swiper.isHorizontal() &&
          ((Math.floor(image.minX) === Math.floor(image.startX) &&
            image.touchesCurrent.x < image.touchesStart.x) ||
            (Math.floor(image.maxX) === Math.floor(image.startX) &&
              image.touchesCurrent.x > image.touchesStart.x))
        ) {
          image.isTouched = false;
          return;
        }
        if (
          !swiper.isHorizontal() &&
          ((Math.floor(image.minY) === Math.floor(image.startY) &&
            image.touchesCurrent.y < image.touchesStart.y) ||
            (Math.floor(image.maxY) === Math.floor(image.startY) &&
              image.touchesCurrent.y > image.touchesStart.y))
        ) {
          image.isTouched = false;
          return;
        }
      }
      if (e.cancelable) {
        e.preventDefault();
      }
      e.stopPropagation();
      image.isMoved = true;
      const scaleRatio =
        (zoom.scale - currentScale) /
        (gesture.maxRatio - swiper.params.zoom.minRatio);
      const { originX, originY } = gesture;
      image.currentX =
        image.touchesCurrent.x -
        image.touchesStart.x +
        image.startX +
        scaleRatio * (image.width - originX * 2);
      image.currentY =
        image.touchesCurrent.y -
        image.touchesStart.y +
        image.startY +
        scaleRatio * (image.height - originY * 2);
      if (image.currentX < image.minX) {
        image.currentX =
          image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
      }
      if (image.currentX > image.maxX) {
        image.currentX =
          image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
      }
      if (image.currentY < image.minY) {
        image.currentY =
          image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
      }
      if (image.currentY > image.maxY) {
        image.currentY =
          image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
      }

      // Velocity
      if (!velocity.prevPositionX)
        velocity.prevPositionX = image.touchesCurrent.x;
      if (!velocity.prevPositionY)
        velocity.prevPositionY = image.touchesCurrent.y;
      if (!velocity.prevTime) velocity.prevTime = Date.now();
      velocity.x =
        (image.touchesCurrent.x - velocity.prevPositionX) /
        (Date.now() - velocity.prevTime) /
        2;
      velocity.y =
        (image.touchesCurrent.y - velocity.prevPositionY) /
        (Date.now() - velocity.prevTime) /
        2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2)
        velocity.x = 0;
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2)
        velocity.y = 0;
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTouchEnd() {
      const zoom = swiper.zoom;
      if (!gesture.imageEl) return;
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      let momentumDurationX = 300;
      let momentumDurationY = 300;
      const momentumDistanceX = velocity.x * momentumDurationX;
      const newPositionX = image.currentX + momentumDistanceX;
      const momentumDistanceY = velocity.y * momentumDurationY;
      const newPositionY = image.currentY + momentumDistanceY;

      // Fix duration
      if (velocity.x !== 0)
        momentumDurationX = Math.abs(
          (newPositionX - image.currentX) / velocity.x
        );
      if (velocity.y !== 0)
        momentumDurationY = Math.abs(
          (newPositionY - image.currentY) / velocity.y
        );
      const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY;
      // Define if we need image drag
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(
        Math.min(image.currentX, image.maxX),
        image.minX
      );
      image.currentY = Math.max(
        Math.min(image.currentY, image.maxY),
        image.minY
      );
      gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
      gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTransitionEnd() {
      const zoom = swiper.zoom;
      if (
        gesture.slideEl &&
        swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)
      ) {
        if (gesture.imageEl) {
          gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
        }
        if (gesture.imageWrapEl) {
          gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
        }
        gesture.slideEl.classList.remove(
          `${swiper.params.zoom.zoomedSlideClass}`
        );
        zoom.scale = 1;
        currentScale = 1;
        gesture.slideEl = undefined;
        gesture.imageEl = undefined;
        gesture.imageWrapEl = undefined;
        gesture.originX = 0;
        gesture.originY = 0;
      }
    }
    function zoomIn(e) {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.slideEl) {
        if (e && e.target) {
          gesture.slideEl = e.target.closest(
            `.${swiper.params.slideClass}, swiper-slide`
          );
        }
        if (!gesture.slideEl) {
          if (
            swiper.params.virtual &&
            swiper.params.virtual.enabled &&
            swiper.virtual
          ) {
            gesture.slideEl = elementChildren(
              swiper.slidesEl,
              `.${swiper.params.slideActiveClass}`
            )[0];
          } else {
            gesture.slideEl = swiper.slides[swiper.activeIndex];
          }
        }
        let imageEl = gesture.slideEl.querySelector(
          `.${params.containerClass}`
        );
        if (imageEl) {
          imageEl = imageEl.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(
            gesture.imageEl,
            `.${params.containerClass}`
          )[0];
        } else {
          gesture.imageWrapEl = undefined;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.touchAction = "none";
      }
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
      let touchX;
      let touchY;
      let offsetX;
      let offsetY;
      let diffX;
      let diffY;
      let translateX;
      let translateY;
      let imageWidth;
      let imageHeight;
      let scaledWidth;
      let scaledHeight;
      let translateMinX;
      let translateMinY;
      let translateMaxX;
      let translateMaxY;
      let slideWidth;
      let slideHeight;
      if (typeof image.touchesStart.x === "undefined" && e) {
        touchX = e.pageX;
        touchY = e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }
      const forceZoomRatio = typeof e === "number" ? e : null;
      if (currentScale === 1 && forceZoomRatio) {
        touchX = undefined;
        touchY = undefined;
      }
      zoom.scale =
        forceZoomRatio ||
        gesture.imageWrapEl.getAttribute("data-swiper-zoom") ||
        params.maxRatio;
      currentScale =
        forceZoomRatio ||
        gesture.imageWrapEl.getAttribute("data-swiper-zoom") ||
        params.maxRatio;
      if (e && !(currentScale === 1 && forceZoomRatio)) {
        slideWidth = gesture.slideEl.offsetWidth;
        slideHeight = gesture.slideEl.offsetHeight;
        offsetX = elementOffset(gesture.slideEl).left + window.scrollX;
        offsetY = elementOffset(gesture.slideEl).top + window.scrollY;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.imageEl.offsetWidth;
        imageHeight = gesture.imageEl.offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }
        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      if (forceZoomRatio && zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
      }
      gesture.imageWrapEl.style.transitionDuration = "300ms";
      gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
      gesture.imageEl.style.transitionDuration = "300ms";
      gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function zoomOut() {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.slideEl) {
        if (
          swiper.params.virtual &&
          swiper.params.virtual.enabled &&
          swiper.virtual
        ) {
          gesture.slideEl = elementChildren(
            swiper.slidesEl,
            `.${swiper.params.slideActiveClass}`
          )[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
        let imageEl = gesture.slideEl.querySelector(
          `.${params.containerClass}`
        );
        if (imageEl) {
          imageEl = imageEl.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(
            gesture.imageEl,
            `.${params.containerClass}`
          )[0];
        } else {
          gesture.imageWrapEl = undefined;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.style.touchAction = "";
      }
      zoom.scale = 1;
      currentScale = 1;
      gesture.imageWrapEl.style.transitionDuration = "300ms";
      gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
      gesture.imageEl.style.transitionDuration = "300ms";
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
      gesture.slideEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }

    // Toggle Zoom
    function zoomToggle(e) {
      const zoom = swiper.zoom;
      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoomOut();
      } else {
        // Zoom In
        zoomIn(e);
      }
    }
    function getListeners() {
      const passiveListener = swiper.params.passiveListeners
        ? {
            passive: true,
            capture: false,
          }
        : false;
      const activeListenerWithCapture = swiper.params.passiveListeners
        ? {
            passive: false,
            capture: true,
          }
        : true;
      return {
        passiveListener,
        activeListenerWithCapture,
      };
    }

    // Attach/Detach Events
    function enable() {
      const zoom = swiper.zoom;
      if (zoom.enabled) return;
      zoom.enabled = true;
      const { passiveListener, activeListenerWithCapture } = getListeners();

      // Scale image
      swiper.wrapperEl.addEventListener(
        "pointerdown",
        onGestureStart,
        passiveListener
      );
      swiper.wrapperEl.addEventListener(
        "pointermove",
        onGestureChange,
        activeListenerWithCapture
      );
      ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
        swiper.wrapperEl.addEventListener(
          eventName,
          onGestureEnd,
          passiveListener
        );
      });

      // Move image
      swiper.wrapperEl.addEventListener(
        "pointermove",
        onTouchMove,
        activeListenerWithCapture
      );
    }
    function disable() {
      const zoom = swiper.zoom;
      if (!zoom.enabled) return;
      zoom.enabled = false;
      const { passiveListener, activeListenerWithCapture } = getListeners();

      // Scale image
      swiper.wrapperEl.removeEventListener(
        "pointerdown",
        onGestureStart,
        passiveListener
      );
      swiper.wrapperEl.removeEventListener(
        "pointermove",
        onGestureChange,
        activeListenerWithCapture
      );
      ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
        swiper.wrapperEl.removeEventListener(
          eventName,
          onGestureEnd,
          passiveListener
        );
      });

      // Move image
      swiper.wrapperEl.removeEventListener(
        "pointermove",
        onTouchMove,
        activeListenerWithCapture
      );
    }
    on("init", () => {
      if (swiper.params.zoom.enabled) {
        enable();
      }
    });
    on("destroy", () => {
      disable();
    });
    on("touchStart", (_s, e) => {
      if (!swiper.zoom.enabled) return;
      onTouchStart(e);
    });
    on("touchEnd", (_s, e) => {
      if (!swiper.zoom.enabled) return;
      onTouchEnd();
    });
    on("doubleTap", (_s, e) => {
      if (
        !swiper.animating &&
        swiper.params.zoom.enabled &&
        swiper.zoom.enabled &&
        swiper.params.zoom.toggle
      ) {
        zoomToggle(e);
      }
    });
    on("transitionEnd", () => {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        onTransitionEnd();
      }
    });
    on("slideChange", () => {
      if (
        swiper.zoom.enabled &&
        swiper.params.zoom.enabled &&
        swiper.params.cssMode
      ) {
        onTransitionEnd();
      }
    });
    Object.assign(swiper.zoom, {
      enable,
      disable,
      in: zoomIn,
      out: zoomOut,
      toggle: zoomToggle,
    });
  }

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
  function Controller(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
      controller: {
        control: undefined,
        inverse: false,
        by: "slide", // or 'container'
      },
    });

    swiper.controller = {
      control: undefined,
    };
    function LinearSpline(x, y) {
      const binarySearch = (function search() {
        let maxIndex;
        let minIndex;
        let guess;
        return (array, val) => {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = (maxIndex + minIndex) >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      })();
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      let i1;
      let i3;
      this.interpolate = function interpolate(x2) {
        if (!x2) return 0;

        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;

        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (
          ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) /
            (this.x[i3] - this.x[i1]) +
          this.y[i1]
        );
      };
      return this;
    }
    function getInterpolateFunction(c) {
      swiper.controller.spline = swiper.params.loop
        ? new LinearSpline(swiper.slidesGrid, c.slidesGrid)
        : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
      const controlled = swiper.controller.control;
      let multiplier;
      let controlledTranslate;
      const Swiper = swiper.constructor;
      function setControlledTranslate(c) {
        if (c.destroyed) return;

        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        const translate = swiper.rtlTranslate
          ? -swiper.translate
          : swiper.translate;
        if (swiper.params.controller.by === "slide") {
          getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(
            -translate
          );
        }
        if (
          !controlledTranslate ||
          swiper.params.controller.by === "container"
        ) {
          multiplier =
            (c.maxTranslate() - c.minTranslate()) /
            (swiper.maxTranslate() - swiper.minTranslate());
          if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
            multiplier = 1;
          }
          controlledTranslate =
            (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
        }
        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (let i = 0; i < controlled.length; i += 1) {
          if (
            controlled[i] !== byController &&
            controlled[i] instanceof Swiper
          ) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    }
    function setTransition(duration, byController) {
      const Swiper = swiper.constructor;
      const controlled = swiper.controller.control;
      let i;
      function setControlledTransition(c) {
        if (c.destroyed) return;
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            nextTick(() => {
              c.updateAutoHeight();
            });
          }
          elementTransitionEnd(c.wrapperEl, () => {
            if (!controlled) return;
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (
            controlled[i] !== byController &&
            controlled[i] instanceof Swiper
          ) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    }
    function removeSpline() {
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    }
    on("beforeInit", () => {
      if (
        typeof window !== "undefined" &&
        // eslint-disable-line
        (typeof swiper.params.controller.control === "string" ||
          swiper.params.controller.control instanceof HTMLElement)
      ) {
        const controlElement = document.querySelector(
          swiper.params.controller.control
        );
        if (controlElement && controlElement.swiper) {
          swiper.controller.control = controlElement.swiper;
        } else if (controlElement) {
          const onControllerSwiper = (e) => {
            swiper.controller.control = e.detail[0];
            swiper.update();
            controlElement.removeEventListener("init", onControllerSwiper);
          };
          controlElement.addEventListener("init", onControllerSwiper);
        }
        return;
      }
      swiper.controller.control = swiper.params.controller.control;
    });
    on("update", () => {
      removeSpline();
    });
    on("resize", () => {
      removeSpline();
    });
    on("observerUpdate", () => {
      removeSpline();
    });
    on("setTranslate", (_s, translate, byController) => {
      if (!swiper.controller.control || swiper.controller.control.destroyed)
        return;
      swiper.controller.setTranslate(translate, byController);
    });
    on("setTransition", (_s, duration, byController) => {
      if (!swiper.controller.control || swiper.controller.control.destroyed)
        return;
      swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
      setTranslate,
      setTransition,
    });
  }

  function A11y(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
      a11y: {
        enabled: true,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null,
      },
    });
    swiper.a11y = {
      clicked: false,
    };
    let liveRegion = null;
    function notify(message) {
      const notification = liveRegion;
      if (notification.length === 0) return;
      notification.innerHTML = "";
      notification.innerHTML = message;
    }
    const makeElementsArray = (el) =>
      (Array.isArray(el) ? el : [el]).filter((e) => !!e);
    function getRandomNumber(size) {
      if (size === void 0) {
        size = 16;
      }
      const randomChar = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("tabIndex", "0");
      });
    }
    function makeElNotFocusable(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("tabIndex", "-1");
      });
    }
    function addElRole(el, role) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("role", role);
      });
    }
    function addElRoleDescription(el, description) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-roledescription", description);
      });
    }
    function addElControls(el, controls) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-controls", controls);
      });
    }
    function addElLabel(el, label) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-label", label);
      });
    }
    function addElId(el, id) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("id", id);
      });
    }
    function addElLive(el, live) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-live", live);
      });
    }
    function disableEl(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-disabled", true);
      });
    }
    function enableEl(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-disabled", false);
      });
    }
    function onEnterOrSpaceKey(e) {
      if (e.keyCode !== 13 && e.keyCode !== 32) return;
      const params = swiper.params.a11y;
      const targetEl = e.target;
      if (
        swiper.pagination &&
        swiper.pagination.el &&
        (targetEl === swiper.pagination.el ||
          swiper.pagination.el.contains(e.target))
      ) {
        if (
          !e.target.matches(
            classesToSelector(swiper.params.pagination.bulletClass)
          )
        )
          return;
      }
      if (
        swiper.navigation &&
        swiper.navigation.nextEl &&
        targetEl === swiper.navigation.nextEl
      ) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (
        swiper.navigation &&
        swiper.navigation.prevEl &&
        targetEl === swiper.navigation.prevEl
      ) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
      if (
        swiper.pagination &&
        targetEl.matches(
          classesToSelector(swiper.params.pagination.bulletClass)
        )
      ) {
        targetEl.click();
      }
    }
    function updateNavigation() {
      if (swiper.params.loop || swiper.params.rewind || !swiper.navigation)
        return;
      const { nextEl, prevEl } = swiper.navigation;
      if (prevEl) {
        if (swiper.isBeginning) {
          disableEl(prevEl);
          makeElNotFocusable(prevEl);
        } else {
          enableEl(prevEl);
          makeElFocusable(prevEl);
        }
      }
      if (nextEl) {
        if (swiper.isEnd) {
          disableEl(nextEl);
          makeElNotFocusable(nextEl);
        } else {
          enableEl(nextEl);
          makeElFocusable(nextEl);
        }
      }
    }
    function hasPagination() {
      return (
        swiper.pagination &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      );
    }
    function hasClickablePagination() {
      return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
      const params = swiper.params.a11y;
      if (!hasPagination()) return;
      swiper.pagination.bullets.forEach((bulletEl) => {
        if (swiper.params.pagination.clickable) {
          makeElFocusable(bulletEl);
          if (!swiper.params.pagination.renderBullet) {
            addElRole(bulletEl, "button");
            addElLabel(
              bulletEl,
              params.paginationBulletMessage.replace(
                /\{\{index\}\}/,
                elementIndex(bulletEl) + 1
              )
            );
          }
        }
        if (
          bulletEl.matches(
            classesToSelector(swiper.params.pagination.bulletActiveClass)
          )
        ) {
          bulletEl.setAttribute("aria-current", "true");
        } else {
          bulletEl.removeAttribute("aria-current");
        }
      });
    }
    const initNavEl = (el, wrapperId, message) => {
      makeElFocusable(el);
      if (el.tagName !== "BUTTON") {
        addElRole(el, "button");
        el.addEventListener("keydown", onEnterOrSpaceKey);
      }
      addElLabel(el, message);
      addElControls(el, wrapperId);
    };
    const handlePointerDown = () => {
      swiper.a11y.clicked = true;
    };
    const handlePointerUp = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!swiper.destroyed) {
            swiper.a11y.clicked = false;
          }
        });
      });
    };
    const handleFocus = (e) => {
      if (swiper.a11y.clicked) return;
      const slideEl = e.target.closest(
        `.${swiper.params.slideClass}, swiper-slide`
      );
      if (!slideEl || !swiper.slides.includes(slideEl)) return;
      const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
      const isVisible =
        swiper.params.watchSlidesProgress &&
        swiper.visibleSlides &&
        swiper.visibleSlides.includes(slideEl);
      if (isActive || isVisible) return;
      if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
      if (swiper.isHorizontal()) {
        swiper.el.scrollLeft = 0;
      } else {
        swiper.el.scrollTop = 0;
      }
      swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
    };
    const initSlides = () => {
      const params = swiper.params.a11y;
      if (params.itemRoleDescriptionMessage) {
        addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
      }
      if (params.slideRole) {
        addElRole(swiper.slides, params.slideRole);
      }
      const slidesLength = swiper.slides.length;
      if (params.slideLabelMessage) {
        swiper.slides.forEach((slideEl, index) => {
          const slideIndex = swiper.params.loop
            ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10)
            : index;
          const ariaLabelMessage = params.slideLabelMessage
            .replace(/\{\{index\}\}/, slideIndex + 1)
            .replace(/\{\{slidesLength\}\}/, slidesLength);
          addElLabel(slideEl, ariaLabelMessage);
        });
      }
    };
    const init = () => {
      const params = swiper.params.a11y;
      swiper.el.append(liveRegion);

      // Container
      const containerEl = swiper.el;
      if (params.containerRoleDescriptionMessage) {
        addElRoleDescription(
          containerEl,
          params.containerRoleDescriptionMessage
        );
      }
      if (params.containerMessage) {
        addElLabel(containerEl, params.containerMessage);
      }

      // Wrapper
      const wrapperEl = swiper.wrapperEl;
      const wrapperId =
        params.id ||
        wrapperEl.getAttribute("id") ||
        `swiper-wrapper-${getRandomNumber(16)}`;
      const live =
        swiper.params.autoplay && swiper.params.autoplay.enabled
          ? "off"
          : "polite";
      addElId(wrapperEl, wrapperId);
      addElLive(wrapperEl, live);

      // Slide
      initSlides();

      // Navigation
      let { nextEl, prevEl } = swiper.navigation ? swiper.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach((el) =>
          initNavEl(el, wrapperId, params.nextSlideMessage)
        );
      }
      if (prevEl) {
        prevEl.forEach((el) =>
          initNavEl(el, wrapperId, params.prevSlideMessage)
        );
      }

      // Pagination
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper.pagination.el);
        paginationEl.forEach((el) => {
          el.addEventListener("keydown", onEnterOrSpaceKey);
        });
      }

      // Tab focus
      swiper.el.addEventListener("focus", handleFocus, true);
      swiper.el.addEventListener("pointerdown", handlePointerDown, true);
      swiper.el.addEventListener("pointerup", handlePointerUp, true);
    };
    function destroy() {
      if (liveRegion) liveRegion.remove();
      let { nextEl, prevEl } = swiper.navigation ? swiper.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach((el) =>
          el.removeEventListener("keydown", onEnterOrSpaceKey)
        );
      }
      if (prevEl) {
        prevEl.forEach((el) =>
          el.removeEventListener("keydown", onEnterOrSpaceKey)
        );
      }

      // Pagination
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper.pagination.el);
        paginationEl.forEach((el) => {
          el.removeEventListener("keydown", onEnterOrSpaceKey);
        });
      }

      // Tab focus
      swiper.el.removeEventListener("focus", handleFocus, true);
      swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
      swiper.el.removeEventListener("pointerup", handlePointerUp, true);
    }
    on("beforeInit", () => {
      liveRegion = createElement("span", swiper.params.a11y.notificationClass);
      liveRegion.setAttribute("aria-live", "assertive");
      liveRegion.setAttribute("aria-atomic", "true");
    });
    on("afterInit", () => {
      if (!swiper.params.a11y.enabled) return;
      init();
    });
    on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      if (!swiper.params.a11y.enabled) return;
      initSlides();
    });
    on("fromEdge toEdge afterInit lock unlock", () => {
      if (!swiper.params.a11y.enabled) return;
      updateNavigation();
    });
    on("paginationUpdate", () => {
      if (!swiper.params.a11y.enabled) return;
      updatePagination();
    });
    on("destroy", () => {
      if (!swiper.params.a11y.enabled) return;
      destroy();
    });
  }

  function History(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
      history: {
        enabled: false,
        root: "",
        replaceState: false,
        key: "slides",
        keepQuery: false,
      },
    });
    let initialized = false;
    let paths = {};
    const slugify = (text) => {
      return text
        .toString()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    };
    const getPathValues = (urlOverride) => {
      const window = getWindow();
      let location;
      if (urlOverride) {
        location = new URL(urlOverride);
      } else {
        location = window.location;
      }
      const pathArray = location.pathname
        .slice(1)
        .split("/")
        .filter((part) => part !== "");
      const total = pathArray.length;
      const key = pathArray[total - 2];
      const value = pathArray[total - 1];
      return {
        key,
        value,
      };
    };
    const setHistory = (key, index) => {
      const window = getWindow();
      if (!initialized || !swiper.params.history.enabled) return;
      let location;
      if (swiper.params.url) {
        location = new URL(swiper.params.url);
      } else {
        location = window.location;
      }
      const slide = swiper.slides[index];
      let value = slugify(slide.getAttribute("data-history"));
      if (swiper.params.history.root.length > 0) {
        let root = swiper.params.history.root;
        if (root[root.length - 1] === "/")
          root = root.slice(0, root.length - 1);
        value = `${root}/${key ? `${key}/` : ""}${value}`;
      } else if (!location.pathname.includes(key)) {
        value = `${key ? `${key}/` : ""}${value}`;
      }
      if (swiper.params.history.keepQuery) {
        value += location.search;
      }
      const currentState = window.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        window.history.replaceState(
          {
            value,
          },
          null,
          value
        );
      } else {
        window.history.pushState(
          {
            value,
          },
          null,
          value
        );
      }
    };
    const scrollToSlide = (speed, value, runCallbacks) => {
      if (value) {
        for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
          const slide = swiper.slides[i];
          const slideHistory = slugify(slide.getAttribute("data-history"));
          if (slideHistory === value) {
            const index = swiper.getSlideIndex(slide);
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    };
    const setHistoryPopState = () => {
      paths = getPathValues(swiper.params.url);
      scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = () => {
      const window = getWindow();
      if (!swiper.params.history) return;
      if (!window.history || !window.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      initialized = true;
      paths = getPathValues(swiper.params.url);
      if (!paths.key && !paths.value) {
        if (!swiper.params.history.replaceState) {
          window.addEventListener("popstate", setHistoryPopState);
        }
        return;
      }
      scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        window.addEventListener("popstate", setHistoryPopState);
      }
    };
    const destroy = () => {
      const window = getWindow();
      if (!swiper.params.history.replaceState) {
        window.removeEventListener("popstate", setHistoryPopState);
      }
    };
    on("init", () => {
      if (swiper.params.history.enabled) {
        init();
      }
    });
    on("destroy", () => {
      if (swiper.params.history.enabled) {
        destroy();
      }
    });
    on("transitionEnd _freeModeNoMomentumRelease", () => {
      if (initialized) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
    on("slideChange", () => {
      if (initialized && swiper.params.cssMode) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
  }

  function HashNavigation(_ref) {
    let { swiper, extendParams, emit, on } = _ref;
    let initialized = false;
    const document = getDocument();
    const window = getWindow();
    extendParams({
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
        getSlideIndex(_s, hash) {
          if (swiper.virtual && swiper.params.virtual.enabled) {
            const slideWithHash = swiper.slides.filter(
              (slideEl) => slideEl.getAttribute("data-hash") === hash
            )[0];
            if (!slideWithHash) return 0;
            const index = parseInt(
              slideWithHash.getAttribute("data-swiper-slide-index"),
              10
            );
            return index;
          }
          return swiper.getSlideIndex(
            elementChildren(
              swiper.slidesEl,
              `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`
            )[0]
          );
        },
      },
    });
    const onHashChange = () => {
      emit("hashChange");
      const newHash = document.location.hash.replace("#", "");
      const activeSlideEl =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.slidesEl.querySelector(
              `[data-swiper-slide-index="${swiper.activeIndex}"]`
            )
          : swiper.slides[swiper.activeIndex];
      const activeSlideHash = activeSlideEl
        ? activeSlideEl.getAttribute("data-hash")
        : "";
      if (newHash !== activeSlideHash) {
        const newIndex = swiper.params.hashNavigation.getSlideIndex(
          swiper,
          newHash
        );
        if (typeof newIndex === "undefined" || Number.isNaN(newIndex)) return;
        swiper.slideTo(newIndex);
      }
    };
    const setHash = () => {
      if (!initialized || !swiper.params.hashNavigation.enabled) return;
      const activeSlideEl =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.slidesEl.querySelector(
              `[data-swiper-slide-index="${swiper.activeIndex}"]`
            )
          : swiper.slides[swiper.activeIndex];
      const activeSlideHash = activeSlideEl
        ? activeSlideEl.getAttribute("data-hash") ||
          activeSlideEl.getAttribute("data-history")
        : "";
      if (
        swiper.params.hashNavigation.replaceState &&
        window.history &&
        window.history.replaceState
      ) {
        window.history.replaceState(null, null, `#${activeSlideHash}` || "");
        emit("hashSet");
      } else {
        document.location.hash = activeSlideHash || "";
        emit("hashSet");
      }
    };
    const init = () => {
      if (
        !swiper.params.hashNavigation.enabled ||
        (swiper.params.history && swiper.params.history.enabled)
      )
        return;
      initialized = true;
      const hash = document.location.hash.replace("#", "");
      if (hash) {
        const speed = 0;
        const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
        swiper.slideTo(
          index || 0,
          speed,
          swiper.params.runCallbacksOnInit,
          true
        );
      }
      if (swiper.params.hashNavigation.watchState) {
        window.addEventListener("hashchange", onHashChange);
      }
    };
    const destroy = () => {
      if (swiper.params.hashNavigation.watchState) {
        window.removeEventListener("hashchange", onHashChange);
      }
    };
    on("init", () => {
      if (swiper.params.hashNavigation.enabled) {
        init();
      }
    });
    on("destroy", () => {
      if (swiper.params.hashNavigation.enabled) {
        destroy();
      }
    });
    on("transitionEnd _freeModeNoMomentumRelease", () => {
      if (initialized) {
        setHash();
      }
    });
    on("slideChange", () => {
      if (initialized && swiper.params.cssMode) {
        setHash();
      }
    });
  }

  /* eslint no-underscore-dangle: "off" */
  /* eslint no-use-before-define: "off" */
  function Autoplay(_ref) {
    let { swiper, extendParams, on, emit, params } = _ref;
    swiper.autoplay = {
      running: false,
      paused: false,
      timeLeft: 0,
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false,
      },
    });
    let timeout;
    let raf;
    let autoplayDelayTotal =
      params && params.autoplay ? params.autoplay.delay : 3000;
    let autoplayDelayCurrent =
      params && params.autoplay ? params.autoplay.delay : 3000;
    let autoplayTimeLeft;
    let autoplayStartTime = new Date().getTime();
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    let pausedByPointerEnter;
    function onTransitionEnd(e) {
      if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
      if (e.target !== swiper.wrapperEl) return;
      swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
      if (pausedByPointerEnter) {
        return;
      }
      resume();
    }
    const calcTimeLeft = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.autoplay.paused) {
        wasPaused = true;
      } else if (wasPaused) {
        autoplayDelayCurrent = autoplayTimeLeft;
        wasPaused = false;
      }
      const timeLeft = swiper.autoplay.paused
        ? autoplayTimeLeft
        : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
      swiper.autoplay.timeLeft = timeLeft;
      emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
      raf = requestAnimationFrame(() => {
        calcTimeLeft();
      });
    };
    const getSlideDelay = () => {
      let activeSlideEl;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        activeSlideEl = swiper.slides.filter((slideEl) =>
          slideEl.classList.contains("swiper-slide-active")
        )[0];
      } else {
        activeSlideEl = swiper.slides[swiper.activeIndex];
      }
      if (!activeSlideEl) return undefined;
      const currentSlideDelay = parseInt(
        activeSlideEl.getAttribute("data-swiper-autoplay"),
        10
      );
      return currentSlideDelay;
    };
    const run = (delayForce) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      cancelAnimationFrame(raf);
      calcTimeLeft();
      let delay =
        typeof delayForce === "undefined"
          ? swiper.params.autoplay.delay
          : delayForce;
      autoplayDelayTotal = swiper.params.autoplay.delay;
      autoplayDelayCurrent = swiper.params.autoplay.delay;
      const currentSlideDelay = getSlideDelay();
      if (
        !Number.isNaN(currentSlideDelay) &&
        currentSlideDelay > 0 &&
        typeof delayForce === "undefined"
      ) {
        delay = currentSlideDelay;
        autoplayDelayTotal = currentSlideDelay;
        autoplayDelayCurrent = currentSlideDelay;
      }
      autoplayTimeLeft = delay;
      const speed = swiper.params.speed;
      const proceed = () => {
        if (!swiper || swiper.destroyed) return;
        if (swiper.params.autoplay.reverseDirection) {
          if (
            !swiper.isBeginning ||
            swiper.params.loop ||
            swiper.params.rewind
          ) {
            swiper.slidePrev(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
            emit("autoplay");
          }
        } else {
          if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
            swiper.slideNext(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(0, speed, true, true);
            emit("autoplay");
          }
        }
        if (swiper.params.cssMode) {
          autoplayStartTime = new Date().getTime();
          requestAnimationFrame(() => {
            run();
          });
        }
      };
      if (delay > 0) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          proceed();
        }, delay);
      } else {
        requestAnimationFrame(() => {
          proceed();
        });
      }

      // eslint-disable-next-line
      return delay;
    };
    const start = () => {
      autoplayStartTime = new Date().getTime();
      swiper.autoplay.running = true;
      run();
      emit("autoplayStart");
    };
    const stop = () => {
      swiper.autoplay.running = false;
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
      emit("autoplayStop");
    };
    const pause = (internal, reset) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      clearTimeout(timeout);
      if (!internal) {
        pausedByInteraction = true;
      }
      const proceed = () => {
        emit("autoplayPause");
        if (swiper.params.autoplay.waitForTransition) {
          swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
        } else {
          resume();
        }
      };
      swiper.autoplay.paused = true;
      if (reset) {
        if (slideChanged) {
          autoplayTimeLeft = swiper.params.autoplay.delay;
        }
        slideChanged = false;
        proceed();
        return;
      }
      const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
      autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
      if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
      proceed();
    };
    const resume = () => {
      if (
        (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) ||
        swiper.destroyed ||
        !swiper.autoplay.running
      )
        return;
      autoplayStartTime = new Date().getTime();
      if (pausedByInteraction) {
        pausedByInteraction = false;
        run(autoplayTimeLeft);
      } else {
        run();
      }
      swiper.autoplay.paused = false;
      emit("autoplayResume");
    };
    const onVisibilityChange = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      const document = getDocument();
      if (document.visibilityState === "hidden") {
        pausedByInteraction = true;
        pause(true);
      }
      if (document.visibilityState === "visible") {
        resume();
      }
    };
    const onPointerEnter = (e) => {
      if (e.pointerType !== "mouse") return;
      pausedByInteraction = true;
      pausedByPointerEnter = true;
      if (swiper.animating || swiper.autoplay.paused) return;
      pause(true);
    };
    const onPointerLeave = (e) => {
      if (e.pointerType !== "mouse") return;
      pausedByPointerEnter = false;
      if (swiper.autoplay.paused) {
        resume();
      }
    };
    const attachMouseEvents = () => {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.el.addEventListener("pointerenter", onPointerEnter);
        swiper.el.addEventListener("pointerleave", onPointerLeave);
      }
    };
    const detachMouseEvents = () => {
      swiper.el.removeEventListener("pointerenter", onPointerEnter);
      swiper.el.removeEventListener("pointerleave", onPointerLeave);
    };
    const attachDocumentEvents = () => {
      const document = getDocument();
      document.addEventListener("visibilitychange", onVisibilityChange);
    };
    const detachDocumentEvents = () => {
      const document = getDocument();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
    on("init", () => {
      if (swiper.params.autoplay.enabled) {
        attachMouseEvents();
        attachDocumentEvents();
        start();
      }
    });
    on("destroy", () => {
      detachMouseEvents();
      detachDocumentEvents();
      if (swiper.autoplay.running) {
        stop();
      }
    });
    on("_freeModeStaticRelease", () => {
      if (pausedByTouch || pausedByInteraction) {
        resume();
      }
    });
    on("_freeModeNoMomentumRelease", () => {
      if (!swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on("beforeTransitionStart", (_s, speed, internal) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on("sliderFirstMove", () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
        return;
      }
      isTouched = true;
      pausedByTouch = false;
      pausedByInteraction = false;
      touchStartTimeout = setTimeout(() => {
        pausedByInteraction = true;
        pausedByTouch = true;
        pause(true);
      }, 200);
    });
    on("touchEnd", () => {
      if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
      clearTimeout(touchStartTimeout);
      clearTimeout(timeout);
      if (swiper.params.autoplay.disableOnInteraction) {
        pausedByTouch = false;
        isTouched = false;
        return;
      }
      if (pausedByTouch && swiper.params.cssMode) resume();
      pausedByTouch = false;
      isTouched = false;
    });
    on("slideChange", () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      slideChanged = true;
    });
    Object.assign(swiper.autoplay, {
      start,
      stop,
      pause,
      resume,
    });
  }

  function Thumb(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs",
      },
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
      swiper: null,
    };
    function onThumbClick() {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const clickedIndex = thumbsSwiper.clickedIndex;
      const clickedSlide = thumbsSwiper.clickedSlide;
      if (
        clickedSlide &&
        clickedSlide.classList.contains(
          swiper.params.thumbs.slideThumbActiveClass
        )
      )
        return;
      if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
      let slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt(
          thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        );
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        swiper.slideToLoop(slideToIndex);
      } else {
        swiper.slideTo(slideToIndex);
      }
    }
    function init() {
      const { thumbs: thumbsParams } = swiper.params;
      if (initialized) return false;
      initialized = true;
      const SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Object.assign(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        Object.assign(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        swiper.thumbs.swiper.update();
      } else if (isObject(thumbsParams.swiper)) {
        const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
        Object.assign(thumbsSwiperParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
        swiperCreated = true;
      }
      swiper.thumbs.swiper.el.classList.add(
        swiper.params.thumbs.thumbsContainerClass
      );
      swiper.thumbs.swiper.on("tap", onThumbClick);
      return true;
    }
    function update(initial) {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const slidesPerView =
        thumbsSwiper.params.slidesPerView === "auto"
          ? thumbsSwiper.slidesPerViewDynamic()
          : thumbsSwiper.params.slidesPerView;

      // Activate thumbs
      let thumbsToActivate = 1;
      const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }
      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }
      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsSwiper.slides.forEach((slideEl) =>
        slideEl.classList.remove(thumbActiveClass)
      );
      if (
        thumbsSwiper.params.loop ||
        (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)
      ) {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          elementChildren(
            thumbsSwiper.slidesEl,
            `[data-swiper-slide-index="${swiper.realIndex + i}"]`
          ).forEach((slideEl) => {
            slideEl.classList.add(thumbActiveClass);
          });
        }
      } else {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          if (thumbsSwiper.slides[swiper.realIndex + i]) {
            thumbsSwiper.slides[swiper.realIndex + i].classList.add(
              thumbActiveClass
            );
          }
        }
      }
      const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
      const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
        const currentThumbsIndex = thumbsSwiper.activeIndex;
        let newThumbsIndex;
        let direction;
        if (thumbsSwiper.params.loop) {
          const newThumbsSlide = thumbsSwiper.slides.filter(
            (slideEl) =>
              slideEl.getAttribute("data-swiper-slide-index") ===
              `${swiper.realIndex}`
          )[0];
          newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
          direction =
            swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
        } else {
          newThumbsIndex = swiper.realIndex;
          direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
        }
        if (useOffset) {
          newThumbsIndex +=
            direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
        }
        if (
          thumbsSwiper.visibleSlidesIndexes &&
          thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0
        ) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex =
                newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex =
                newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (
            newThumbsIndex > currentThumbsIndex &&
            thumbsSwiper.params.slidesPerGroup === 1
          );
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }
    }
    on("beforeInit", () => {
      const { thumbs } = swiper.params;
      if (!thumbs || !thumbs.swiper) return;
      if (
        typeof thumbs.swiper === "string" ||
        thumbs.swiper instanceof HTMLElement
      ) {
        const document = getDocument();
        const getThumbsElementAndInit = () => {
          const thumbsElement =
            typeof thumbs.swiper === "string"
              ? document.querySelector(thumbs.swiper)
              : thumbs.swiper;
          if (thumbsElement && thumbsElement.swiper) {
            thumbs.swiper = thumbsElement.swiper;
            init();
            update(true);
          } else if (thumbsElement) {
            const onThumbsSwiper = (e) => {
              thumbs.swiper = e.detail[0];
              thumbsElement.removeEventListener("init", onThumbsSwiper);
              init();
              update(true);
              thumbs.swiper.update();
              swiper.update();
            };
            thumbsElement.addEventListener("init", onThumbsSwiper);
          }
          return thumbsElement;
        };
        const watchForThumbsToAppear = () => {
          if (swiper.destroyed) return;
          const thumbsElement = getThumbsElementAndInit();
          if (!thumbsElement) {
            requestAnimationFrame(watchForThumbsToAppear);
          }
        };
        requestAnimationFrame(watchForThumbsToAppear);
      } else {
        init();
        update(true);
      }
    });
    on("slideChange update resize observerUpdate", () => {
      update();
    });
    on("setTransition", (_s, duration) => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      thumbsSwiper.setTransition(duration);
    });
    on("beforeDestroy", () => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      if (swiperCreated) {
        thumbsSwiper.destroy();
      }
    });
    Object.assign(swiper.thumbs, {
      init,
      update,
    });
  }

  function freeMode(_ref) {
    let { swiper, extendParams, emit, once } = _ref;
    extendParams({
      freeMode: {
        enabled: false,
        momentum: true,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: false,
        minimumVelocity: 0.02,
      },
    });
    function onTouchStart() {
      if (swiper.params.cssMode) return;
      const translate = swiper.getTranslate();
      swiper.setTranslate(translate);
      swiper.setTransition(0);
      swiper.touchEventsData.velocities.length = 0;
      swiper.freeMode.onTouchEnd({
        currentPos: swiper.rtl ? swiper.translate : -swiper.translate,
      });
    }
    function onTouchMove() {
      if (swiper.params.cssMode) return;
      const { touchEventsData: data, touches } = swiper;
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? "startX" : "startY"],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
        time: now(),
      });
    }
    function onTouchEnd(_ref2) {
      let { currentPos } = _ref2;
      if (swiper.params.cssMode) return;
      const {
        params,
        wrapperEl,
        rtlTranslate: rtl,
        snapGrid,
        touchEventsData: data,
      } = swiper;
      // Time diff
      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime;
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }
      if (params.freeMode.momentum) {
        if (data.velocities.length > 1) {
          const lastMoveEvent = data.velocities.pop();
          const velocityEvent = data.velocities.pop();
          const distance = lastMoveEvent.position - velocityEvent.position;
          const time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeMode.momentumVelocityRatio;
        data.velocities.length = 0;
        let momentumDuration = 1000 * params.freeMode.momentumRatio;
        const momentumDistance = swiper.velocity * momentumDuration;
        let newPosition = swiper.translate + momentumDistance;
        if (rtl) newPosition = -newPosition;
        let doBounce = false;
        let afterBouncePosition;
        const bounceAmount =
          Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
        let needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (params.freeMode.sticky) {
          let nextSlide;
          for (let j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }
          if (
            Math.abs(snapGrid[nextSlide] - newPosition) <
              Math.abs(snapGrid[nextSlide - 1] - newPosition) ||
            swiper.swipeDirection === "next"
          ) {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          once("transitionEnd", () => {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs(
              (-newPosition - swiper.translate) / swiper.velocity
            );
          } else {
            momentumDuration = Math.abs(
              (newPosition - swiper.translate) / swiper.velocity
            );
          }
          if (params.freeMode.sticky) {
            // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
            // It's easy to see this when simulating touch with mouse events. To fix this,
            // limit single-slide swipes to the default slide duration. This also has the
            // nice side effect of matching slide speed if the user stopped moving before
            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
            // For faster swipes, also apply limits (albeit higher ones).
            const moveDistance = Math.abs(
              (rtl ? -newPosition : newPosition) - swiper.translate
            );
            const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeMode.sticky) {
          swiper.slideToClosest();
          return;
        }
        if (params.freeMode.momentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          elementTransitionEnd(wrapperEl, () => {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce)
              return;
            emit("momentumBounce");
            swiper.setTransition(params.speed);
            setTimeout(() => {
              swiper.setTranslate(afterBouncePosition);
              elementTransitionEnd(wrapperEl, () => {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          emit("_freeModeNoMomentumRelease");
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      } else if (params.freeMode) {
        emit("_freeModeNoMomentumRelease");
      }
      if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
        emit("_freeModeStaticRelease");
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
    }
    Object.assign(swiper, {
      freeMode: {
        onTouchStart,
        onTouchMove,
        onTouchEnd,
      },
    });
  }

  function Grid(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
      grid: {
        rows: 1,
        fill: "column",
      },
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    let wasMultiRow;
    const getSpaceBetween = () => {
      let spaceBetween = swiper.params.spaceBetween;
      if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
        spaceBetween =
          (parseFloat(spaceBetween.replace("%", "")) / 100) * swiper.size;
      } else if (typeof spaceBetween === "string") {
        spaceBetween = parseFloat(spaceBetween);
      }
      return spaceBetween;
    };
    const initSlides = (slides) => {
      const { slidesPerView } = swiper.params;
      const { rows, fill } = swiper.params.grid;
      const slidesLength =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.virtual.slides.length
          : slides.length;
      numFullColumns = Math.floor(slidesLength / rows);
      if (Math.floor(slidesLength / rows) === slidesLength / rows) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
      }
      if (slidesPerView !== "auto" && fill === "row") {
        slidesNumberEvenToRows = Math.max(
          slidesNumberEvenToRows,
          slidesPerView * rows
        );
      }
      slidesPerRow = slidesNumberEvenToRows / rows;
    };
    const unsetSlides = () => {
      if (swiper.slides) {
        swiper.slides.forEach((slide) => {
          if (slide.swiperSlideGridSet) {
            slide.style.height = "";
            slide.style[swiper.getDirectionLabel("margin-top")] = "";
          }
        });
      }
    };
    const updateSlide = (i, slide, slides) => {
      const { slidesPerGroup } = swiper.params;
      const spaceBetween = getSpaceBetween();
      const { rows, fill } = swiper.params.grid;
      const slidesLength =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.virtual.slides.length
          : slides.length;
      // Set slides order
      let newSlideOrderIndex;
      let column;
      let row;
      if (fill === "row" && slidesPerGroup > 1) {
        const groupIndex = Math.floor(i / (slidesPerGroup * rows));
        const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
        const columnsInGroup =
          groupIndex === 0
            ? slidesPerGroup
            : Math.min(
                Math.ceil(
                  (slidesLength - groupIndex * rows * slidesPerGroup) / rows
                ),
                slidesPerGroup
              );
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column =
          slideIndexInGroup -
          row * columnsInGroup +
          groupIndex * slidesPerGroup;
        newSlideOrderIndex = column + (row * slidesNumberEvenToRows) / rows;
        slide.style.order = newSlideOrderIndex;
      } else if (fill === "column") {
        column = Math.floor(i / rows);
        row = i - column * rows;
        if (
          column > numFullColumns ||
          (column === numFullColumns && row === rows - 1)
        ) {
          row += 1;
          if (row >= rows) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }
      slide.row = row;
      slide.column = column;
      slide.style.height = `calc((100% - ${
        (rows - 1) * spaceBetween
      }px) / ${rows})`;
      slide.style[swiper.getDirectionLabel("margin-top")] =
        row !== 0 ? spaceBetween && `${spaceBetween}px` : "";
      slide.swiperSlideGridSet = true;
    };
    const updateWrapperSize = (slideSize, snapGrid) => {
      const { centeredSlides, roundLengths } = swiper.params;
      const spaceBetween = getSpaceBetween();
      const { rows } = swiper.params.grid;
      swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
      if (!swiper.params.cssMode) {
        swiper.wrapperEl.style[swiper.getDirectionLabel("width")] = `${
          swiper.virtualSize + spaceBetween
        }px`;
      }
      if (centeredSlides) {
        const newSlidesGrid = [];
        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[i] < swiper.virtualSize + snapGrid[0])
            newSlidesGrid.push(slidesGridItem);
        }
        snapGrid.splice(0, snapGrid.length);
        snapGrid.push(...newSlidesGrid);
      }
    };
    const onInit = () => {
      wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
    };
    const onUpdate = () => {
      const { params, el } = swiper;
      const isMultiRow = params.grid && params.grid.rows > 1;
      if (wasMultiRow && !isMultiRow) {
        el.classList.remove(
          `${params.containerModifierClass}grid`,
          `${params.containerModifierClass}grid-column`
        );
        numFullColumns = 1;
        swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        el.classList.add(`${params.containerModifierClass}grid`);
        if (params.grid.fill === "column") {
          el.classList.add(`${params.containerModifierClass}grid-column`);
        }
        swiper.emitContainerClasses();
      }
      wasMultiRow = isMultiRow;
    };
    on("init", onInit);
    on("update", onUpdate);
    swiper.grid = {
      initSlides,
      unsetSlides,
      updateSlide,
      updateWrapperSize,
    };
  }

  function appendSlide(slides) {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    const appendElement = (slideEl) => {
      if (typeof slideEl === "string") {
        const tempDOM = document.createElement("div");
        tempDOM.innerHTML = slideEl;
        slidesEl.append(tempDOM.children[0]);
        tempDOM.innerHTML = "";
      } else {
        slidesEl.append(slideEl);
      }
    };
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) appendElement(slides[i]);
      }
    } else {
      appendElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
  }

  function prependSlide(slides) {
    const swiper = this;
    const { params, activeIndex, slidesEl } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndex + 1;
    const prependElement = (slideEl) => {
      if (typeof slideEl === "string") {
        const tempDOM = document.createElement("div");
        tempDOM.innerHTML = slideEl;
        slidesEl.prepend(tempDOM.children[0]);
        tempDOM.innerHTML = "";
      } else {
        slidesEl.prepend(slideEl);
      }
    };
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) prependElement(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      prependElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide(index, slides) {
    const swiper = this;
    const { params, activeIndex, slidesEl } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.recalcSlides();
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    let newActiveIndex =
      activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for (let i = baseLength - 1; i >= index; i -= 1) {
      const currentSlide = swiper.slides[i];
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) slidesEl.append(slides[i]);
      }
      newActiveIndex =
        activeIndexBuffer > index
          ? activeIndexBuffer + slides.length
          : activeIndexBuffer;
    } else {
      slidesEl.append(slides);
    }
    for (let i = 0; i < slidesBuffer.length; i += 1) {
      slidesEl.append(slidesBuffer[i]);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide(slidesIndexes) {
    const swiper = this;
    const { params, activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
      for (let i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for (let i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  function Manipulation(_ref) {
    let { swiper } = _ref;
    Object.assign(swiper, {
      appendSlide: appendSlide.bind(swiper),
      prependSlide: prependSlide.bind(swiper),
      addSlide: addSlide.bind(swiper),
      removeSlide: removeSlide.bind(swiper),
      removeAllSlides: removeAllSlides.bind(swiper),
    });
  }

  function effectInit(params) {
    const {
      effect,
      swiper,
      on,
      setTranslate,
      setTransition,
      overwriteParams,
      perspective,
      recreateShadows,
      getEffectParams,
    } = params;
    on("beforeInit", () => {
      if (swiper.params.effect !== effect) return;
      swiper.classNames.push(
        `${swiper.params.containerModifierClass}${effect}`
      );
      if (perspective && perspective()) {
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      }
      const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper.params, overwriteParamsResult);
      Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on("setTranslate", () => {
      if (swiper.params.effect !== effect) return;
      setTranslate();
    });
    on("setTransition", (_s, duration) => {
      if (swiper.params.effect !== effect) return;
      setTransition(duration);
    });
    on("transitionEnd", () => {
      if (swiper.params.effect !== effect) return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows) return;
        // remove shadows
        swiper.slides.forEach((slideEl) => {
          slideEl
            .querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .forEach((shadowEl) => shadowEl.remove());
        });
        // create new one
        recreateShadows();
      }
    });
    let requireUpdateOnVirtual;
    on("virtualUpdate", () => {
      if (swiper.params.effect !== effect) return;
      if (!swiper.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }

  function effectTarget(effectParams, slideEl) {
    const transformEl = getSlideTransformEl(slideEl);
    if (transformEl !== slideEl) {
      transformEl.style.backfaceVisibility = "hidden";
      transformEl.style["-webkit-backface-visibility"] = "hidden";
    }
    return transformEl;
  }

  function effectVirtualTransitionEnd(_ref) {
    let { swiper, duration, transformElements, allSlides } = _ref;
    const { activeIndex } = swiper;
    const getSlide = (el) => {
      if (!el.parentElement) {
        // assume shadow root
        const slide = swiper.slides.filter(
          (slideEl) =>
            slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode
        )[0];
        return slide;
      }
      return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      let transitionEndTarget;
      if (allSlides) {
        transitionEndTarget = transformElements;
      } else {
        transitionEndTarget = transformElements.filter((transformEl) => {
          const el = transformEl.classList.contains("swiper-slide-transform")
            ? getSlide(transformEl)
            : transformEl;
          return swiper.getSlideIndex(el) === activeIndex;
        });
      }
      transitionEndTarget.forEach((el) => {
        elementTransitionEnd(el, () => {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          const evt = new window.CustomEvent("transitionend", {
            bubbles: true,
            cancelable: true,
          });
          swiper.wrapperEl.dispatchEvent(evt);
        });
      });
    }
  }

  function EffectFade(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
      fadeEffect: {
        crossFade: false,
      },
    });
    const setTranslate = () => {
      const { slides } = swiper;
      const params = swiper.params.fadeEffect;
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = swiper.slides[i];
        const offset = slideEl.swiperSlideOffset;
        let tx = -offset;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs(slideEl.progress), 0)
          : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.opacity = slideOpacity;
        targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
      }
    };
    const setTransition = (duration) => {
      const transformElements = swiper.slides.map((slideEl) =>
        getSlideTransformEl(slideEl)
      );
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: true,
      });
    };
    effectInit({
      effect: "fade",
      swiper,
      on,
      setTranslate,
      setTransition,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode,
      }),
    });
  }

  function EffectCube(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    const createSlideShadows = (slideEl, progress, isHorizontal) => {
      let shadowBefore = isHorizontal
        ? slideEl.querySelector(".swiper-slide-shadow-left")
        : slideEl.querySelector(".swiper-slide-shadow-top");
      let shadowAfter = isHorizontal
        ? slideEl.querySelector(".swiper-slide-shadow-right")
        : slideEl.querySelector(".swiper-slide-shadow-bottom");
      if (!shadowBefore) {
        shadowBefore = createElement(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            isHorizontal ? "left" : "top"
          }`.split(" ")
        );
        slideEl.append(shadowBefore);
      }
      if (!shadowAfter) {
        shadowAfter = createElement(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            isHorizontal ? "right" : "bottom"
          }`.split(" ")
        );
        slideEl.append(shadowAfter);
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      // create new ones
      const isHorizontal = swiper.isHorizontal();
      swiper.slides.forEach((slideEl) => {
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        createSlideShadows(slideEl, progress, isHorizontal);
      });
    };
    const setTranslate = () => {
      const {
        el,
        wrapperEl,
        slides,
        width: swiperWidth,
        height: swiperHeight,
        rtlTranslate: rtl,
        size: swiperSize,
        browser,
      } = swiper;
      const params = swiper.params.cubeEffect;
      const isHorizontal = swiper.isHorizontal();
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let wrapperRotate = 0;
      let cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl = swiper.wrapperEl.querySelector(".swiper-cube-shadow");
          if (!cubeShadowEl) {
            cubeShadowEl = createElement("div", "swiper-cube-shadow");
            swiper.wrapperEl.append(cubeShadowEl);
          }
          cubeShadowEl.style.height = `${swiperWidth}px`;
        } else {
          cubeShadowEl = el.querySelector(".swiper-cube-shadow");
          if (!cubeShadowEl) {
            cubeShadowEl = createElement("div", "swiper-cube-shadow");
            el.append(cubeShadowEl);
          }
        }
      }
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        let slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt(
            slideEl.getAttribute("data-swiper-slide-index"),
            10
          );
        }
        let slideAngle = slideIndex * 90;
        let round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        let tx = 0;
        let ty = 0;
        let tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }
        if (rtl) {
          tx = -tx;
        }
        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }
        const transform = `rotateX(${
          isHorizontal ? 0 : -slideAngle
        }deg) rotateY(${
          isHorizontal ? slideAngle : 0
        }deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
          if (
            swiper.browser &&
            swiper.browser.isSafari &&
            (Math.abs(wrapperRotate) / 90) % 2 === 1
          ) {
            wrapperRotate += 0.001;
          }
        }
        slideEl.style.transform = transform;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress, isHorizontal);
        }
      }
      wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
      wrapperEl.style["-webkit-transform-origin"] = `50% 50% -${
        swiperSize / 2
      }px`;
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl.style.transform = `translate3d(0px, ${
            swiperWidth / 2 + params.shadowOffset
          }px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
            params.shadowScale
          })`;
        } else {
          const shadowAngle =
            Math.abs(wrapperRotate) -
            Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          const multiplier =
            1.5 -
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 +
              Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
          const scale1 = params.shadowScale;
          const scale2 = params.shadowScale / multiplier;
          const offset = params.shadowOffset;
          cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${
            swiperHeight / 2 + offset
          }px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
        }
      }
      const zFactor =
        (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix
          ? -swiperSize / 2
          : 0;
      wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${
        swiper.isHorizontal() ? 0 : wrapperRotate
      }deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
      wrapperEl.style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
    };
    const setTransition = (duration) => {
      const { el, slides } = swiper;
      slides.forEach((slideEl) => {
        slideEl.style.transitionDuration = `${duration}ms`;
        slideEl
          .querySelectorAll(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .forEach((subEl) => {
            subEl.style.transitionDuration = `${duration}ms`;
          });
      });
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        const shadowEl = el.querySelector(".swiper-cube-shadow");
        if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
      }
    };
    effectInit({
      effect: "cube",
      swiper,
      on,
      setTranslate,
      setTransition,
      recreateShadows,
      getEffectParams: () => swiper.params.cubeEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true,
      }),
    });
  }

  function createShadow(suffix, slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${
      suffix ? ` swiper-slide-shadow-${suffix}` : ""
    }`;
    const shadowContainer = getSlideTransformEl(slideEl);
    let shadowEl = shadowContainer.querySelector(
      `.${shadowClass.split(" ").join(".")}`
    );
    if (!shadowEl) {
      shadowEl = createElement("div", shadowClass.split(" "));
      shadowContainer.append(shadowEl);
    }
    return shadowEl;
  }

  function EffectFlip(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    });
    const createSlideShadows = (slideEl, progress) => {
      let shadowBefore = swiper.isHorizontal()
        ? slideEl.querySelector(".swiper-slide-shadow-left")
        : slideEl.querySelector(".swiper-slide-shadow-top");
      let shadowAfter = swiper.isHorizontal()
        ? slideEl.querySelector(".swiper-slide-shadow-right")
        : slideEl.querySelector(".swiper-slide-shadow-bottom");
      if (!shadowBefore) {
        shadowBefore = createShadow(
          "flip",
          slideEl,
          swiper.isHorizontal() ? "left" : "top"
        );
      }
      if (!shadowAfter) {
        shadowAfter = createShadow(
          "flip",
          slideEl,
          swiper.isHorizontal() ? "right" : "bottom"
        );
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      // Set shadows
      swiper.params.flipEffect;
      swiper.slides.forEach((slideEl) => {
        let progress = slideEl.progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        createSlideShadows(slideEl, progress);
      });
    };
    const setTranslate = () => {
      const { slides, rtlTranslate: rtl } = swiper;
      const params = swiper.params.flipEffect;
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        let progress = slideEl.progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        const offset = slideEl.swiperSlideOffset;
        const rotate = -180 * progress;
        let rotateY = rotate;
        let rotateX = 0;
        let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }
        if (swiper.browser && swiper.browser.isSafari) {
          if ((Math.abs(rotateY) / 90) % 2 === 1) {
            rotateY += 0.001;
          }
          if ((Math.abs(rotateX) / 90) % 2 === 1) {
            rotateX += 0.001;
          }
        }
        slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress);
        }
        const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    const setTransition = (duration) => {
      const transformElements = swiper.slides.map((slideEl) =>
        getSlideTransformEl(slideEl)
      );
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
        el.querySelectorAll(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        ).forEach((shadowEl) => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
      });
    };
    effectInit({
      effect: "flip",
      swiper,
      on,
      setTranslate,
      setTransition,
      recreateShadows,
      getEffectParams: () => swiper.params.flipEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode,
      }),
    });
  }

  function EffectCoverflow(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true,
      },
    });
    const setTranslate = () => {
      const {
        width: swiperWidth,
        height: swiperHeight,
        slides,
        slidesSizesGrid,
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform = swiper.translate;
      const center = isHorizontal
        ? -transform + swiperWidth / 2
        : -transform + swiperHeight / 2;
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate = params.depth;
      // Each slide offset from center
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const slideEl = slides[i];
        const slideSize = slidesSizesGrid[i];
        const slideOffset = slideEl.swiperSlideOffset;
        const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
        const offsetMultiplier =
          typeof params.modifier === "function"
            ? params.modifier(centerOffset)
            : centerOffset * params.modifier;
        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        let translateZ = -translate * Math.abs(offsetMultiplier);
        let stretch = params.stretch;
        // Allow percentage to make a relative stretch for responsive sliders
        if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
          stretch = (parseFloat(params.stretch) / 100) * slideSize;
        }
        let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
        let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
        let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        if (Math.abs(scale) < 0.001) scale = 0;
        if (swiper.browser && swiper.browser.isSafari) {
          if ((Math.abs(rotateY) / 90) % 2 === 1) {
            rotateY += 0.001;
          }
          if ((Math.abs(rotateX) / 90) % 2 === 1) {
            rotateX += 0.001;
          }
        }
        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = slideTransform;
        slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          let shadowBeforeEl = isHorizontal
            ? slideEl.querySelector(".swiper-slide-shadow-left")
            : slideEl.querySelector(".swiper-slide-shadow-top");
          let shadowAfterEl = isHorizontal
            ? slideEl.querySelector(".swiper-slide-shadow-right")
            : slideEl.querySelector(".swiper-slide-shadow-bottom");
          if (!shadowBeforeEl) {
            shadowBeforeEl = createShadow(
              "coverflow",
              slideEl,
              isHorizontal ? "left" : "top"
            );
          }
          if (!shadowAfterEl) {
            shadowAfterEl = createShadow(
              "coverflow",
              slideEl,
              isHorizontal ? "right" : "bottom"
            );
          }
          if (shadowBeforeEl)
            shadowBeforeEl.style.opacity =
              offsetMultiplier > 0 ? offsetMultiplier : 0;
          if (shadowAfterEl)
            shadowAfterEl.style.opacity =
              -offsetMultiplier > 0 ? -offsetMultiplier : 0;
        }
      }
    };
    const setTransition = (duration) => {
      const transformElements = swiper.slides.map((slideEl) =>
        getSlideTransformEl(slideEl)
      );
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
        el.querySelectorAll(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        ).forEach((shadowEl) => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      });
    };
    effectInit({
      effect: "coverflow",
      swiper,
      on,
      setTranslate,
      setTransition,
      perspective: () => true,
      overwriteParams: () => ({
        watchSlidesProgress: true,
      }),
    });
  }

  function EffectCreative(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
      creativeEffect: {
        limitProgress: 1,
        shadowPerProgress: false,
        progressMultiplier: 1,
        perspective: true,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1,
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1,
        },
      },
    });
    const getTranslateValue = (value) => {
      if (typeof value === "string") return value;
      return `${value}px`;
    };
    const setTranslate = () => {
      const { slides, wrapperEl, slidesSizesGrid } = swiper;
      const params = swiper.params.creativeEffect;
      const { progressMultiplier: multiplier } = params;
      const isCenteredSlides = swiper.params.centeredSlides;
      if (isCenteredSlides) {
        const margin =
          slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
        wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
      }
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        const slideProgress = slideEl.progress;
        const progress = Math.min(
          Math.max(slideEl.progress, -params.limitProgress),
          params.limitProgress
        );
        let originalProgress = progress;
        if (!isCenteredSlides) {
          originalProgress = Math.min(
            Math.max(slideEl.originalProgress, -params.limitProgress),
            params.limitProgress
          );
        }
        const offset = slideEl.swiperSlideOffset;
        const t = [
          swiper.params.cssMode ? -offset - swiper.translate : -offset,
          0,
          0,
        ];
        const r = [0, 0, 0];
        let custom = false;
        if (!swiper.isHorizontal()) {
          t[1] = t[0];
          t[0] = 0;
        }
        let data = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1,
        };
        if (progress < 0) {
          data = params.next;
          custom = true;
        } else if (progress > 0) {
          data = params.prev;
          custom = true;
        }
        // set translate
        t.forEach((value, index) => {
          t[index] = `calc(${value}px + (${getTranslateValue(
            data.translate[index]
          )} * ${Math.abs(progress * multiplier)}))`;
        });
        // set rotates
        r.forEach((value, index) => {
          let val = data.rotate[index] * Math.abs(progress * multiplier);
          if (
            swiper.browser &&
            swiper.browser.isSafari &&
            (Math.abs(val) / 90) % 2 === 1
          ) {
            val += 0.001;
          }
          r[index] = val;
        });
        slideEl.style.zIndex =
          -Math.abs(Math.round(slideProgress)) + slides.length;
        const translateString = t.join(", ");
        const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
        const scaleString =
          originalProgress < 0
            ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})`
            : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
        const opacityString =
          originalProgress < 0
            ? 1 + (1 - data.opacity) * originalProgress * multiplier
            : 1 - (1 - data.opacity) * originalProgress * multiplier;
        const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

        // Set shadows
        if ((custom && data.shadow) || !custom) {
          let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
          if (!shadowEl && data.shadow) {
            shadowEl = createShadow("creative", slideEl);
          }
          if (shadowEl) {
            const shadowOpacity = params.shadowPerProgress
              ? progress * (1 / params.limitProgress)
              : progress;
            shadowEl.style.opacity = Math.min(
              Math.max(Math.abs(shadowOpacity), 0),
              1
            );
          }
        }
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
        targetEl.style.opacity = opacityString;
        if (data.origin) {
          targetEl.style.transformOrigin = data.origin;
        }
      }
    };
    const setTransition = (duration) => {
      const transformElements = swiper.slides.map((slideEl) =>
        getSlideTransformEl(slideEl)
      );
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
        el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: true,
      });
    };
    effectInit({
      effect: "creative",
      swiper,
      on,
      setTranslate,
      setTransition,
      perspective: () => swiper.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: true,
        virtualTranslate: !swiper.params.cssMode,
      }),
    });
  }

  function EffectCards(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
      cardsEffect: {
        slideShadows: true,
        rotate: true,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    });
    const setTranslate = () => {
      const { slides, activeIndex, rtlTranslate: rtl } = swiper;
      const params = swiper.params.cardsEffect;
      const { startTranslate, isTouched } = swiper.touchEventsData;
      const currentTranslate = rtl ? -swiper.translate : swiper.translate;
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        const slideProgress = slideEl.progress;
        const progress = Math.min(Math.max(slideProgress, -4), 4);
        let offset = slideEl.swiperSlideOffset;
        if (swiper.params.centeredSlides && !swiper.params.cssMode) {
          swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
        }
        if (swiper.params.centeredSlides && swiper.params.cssMode) {
          offset -= slides[0].swiperSlideOffset;
        }
        let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        let tY = 0;
        const tZ = -100 * Math.abs(progress);
        let scale = 1;
        let rotate = -params.perSlideRotate * progress;
        let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
        const slideIndex =
          swiper.virtual && swiper.params.virtual.enabled
            ? swiper.virtual.from + i
            : i;
        const isSwipeToNext =
          (slideIndex === activeIndex || slideIndex === activeIndex - 1) &&
          progress > 0 &&
          progress < 1 &&
          (isTouched || swiper.params.cssMode) &&
          currentTranslate < startTranslate;
        const isSwipeToPrev =
          (slideIndex === activeIndex || slideIndex === activeIndex + 1) &&
          progress < 0 &&
          progress > -1 &&
          (isTouched || swiper.params.cssMode) &&
          currentTranslate > startTranslate;
        if (isSwipeToNext || isSwipeToPrev) {
          const subProgress =
            (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
          rotate += -28 * progress * subProgress;
          scale += -0.5 * subProgress;
          tXAdd += 96 * subProgress;
          tY = `${-25 * subProgress * Math.abs(progress)}%`;
        }
        if (progress < 0) {
          // next
          tX = `calc(${tX}px ${rtl ? "-" : "+"} (${
            tXAdd * Math.abs(progress)
          }%))`;
        } else if (progress > 0) {
          // prev
          tX = `calc(${tX}px ${rtl ? "-" : "+"} (-${
            tXAdd * Math.abs(progress)
          }%))`;
        } else {
          tX = `${tX}px`;
        }
        if (!swiper.isHorizontal()) {
          const prevY = tY;
          tY = tX;
          tX = prevY;
        }
        const scaleString =
          progress < 0
            ? `${1 + (1 - scale) * progress}`
            : `${1 - (1 - scale) * progress}`;

        /* eslint-disable */
        const transform = `
          translate3d(${tX}, ${tY}, ${tZ}px)
          rotateZ(${params.rotate ? (rtl ? -rotate : rotate) : 0}deg)
          scale(${scaleString})
        `;
        /* eslint-enable */

        if (params.slideShadows) {
          // Set shadows
          let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
          if (!shadowEl) {
            shadowEl = createShadow("cards", slideEl);
          }
          if (shadowEl)
            shadowEl.style.opacity = Math.min(
              Math.max((Math.abs(progress) - 0.5) / 0.5, 0),
              1
            );
        }
        slideEl.style.zIndex =
          -Math.abs(Math.round(slideProgress)) + slides.length;
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    const setTransition = (duration) => {
      const transformElements = swiper.slides.map((slideEl) =>
        getSlideTransformEl(slideEl)
      );
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
        el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
      });
    };
    effectInit({
      effect: "cards",
      swiper,
      on,
      setTranslate,
      setTransition,
      perspective: () => true,
      overwriteParams: () => ({
        watchSlidesProgress: true,
        virtualTranslate: !swiper.params.cssMode,
      }),
    });
  }

  /**
   * Swiper 11.0.5
   * Most modern mobile touch slider and framework with hardware accelerated transitions
   * https://swiperjs.com
   *
   * Copyright 2014-2023 Vladimir Kharlampidi
   *
   * Released under the MIT License
   *
   * Released on: November 22, 2023
   */

  // Swiper Class
  const modules = [
    Virtual,
    Keyboard,
    Mousewheel,
    Navigation,
    Pagination,
    Scrollbar,
    Parallax,
    Zoom,
    Controller,
    A11y,
    History,
    HashNavigation,
    Autoplay,
    Thumb,
    freeMode,
    Grid,
    Manipulation,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    EffectCreative,
    EffectCards,
  ];
  Swiper.use(modules);

  return Swiper;
})();

/*! jQuery UI - v1.13.2 - 2022-07-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

!(function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (V) {
  "use strict";
  V.ui = V.ui || {};
  V.ui.version = "1.13.2";
  var n,
    i = 0,
    a = Array.prototype.hasOwnProperty,
    r = Array.prototype.slice;
  (V.cleanData =
    ((n = V.cleanData),
    function (t) {
      for (var e, i, s = 0; null != (i = t[s]); s++)
        (e = V._data(i, "events")) && e.remove && V(i).triggerHandler("remove");
      n(t);
    })),
    (V.widget = function (t, i, e) {
      var s,
        n,
        o,
        a = {},
        r = t.split(".")[0],
        l = r + "-" + (t = t.split(".")[1]);
      return (
        e || ((e = i), (i = V.Widget)),
        Array.isArray(e) && (e = V.extend.apply(null, [{}].concat(e))),
        (V.expr.pseudos[l.toLowerCase()] = function (t) {
          return !!V.data(t, l);
        }),
        (V[r] = V[r] || {}),
        (s = V[r][t]),
        (n = V[r][t] =
          function (t, e) {
            if (!this || !this._createWidget) return new n(t, e);
            arguments.length && this._createWidget(t, e);
          }),
        V.extend(n, s, {
          version: e.version,
          _proto: V.extend({}, e),
          _childConstructors: [],
        }),
        ((o = new i()).options = V.widget.extend({}, o.options)),
        V.each(e, function (e, s) {
          function n() {
            return i.prototype[e].apply(this, arguments);
          }
          function o(t) {
            return i.prototype[e].apply(this, t);
          }
          a[e] =
            "function" == typeof s
              ? function () {
                  var t,
                    e = this._super,
                    i = this._superApply;
                  return (
                    (this._super = n),
                    (this._superApply = o),
                    (t = s.apply(this, arguments)),
                    (this._super = e),
                    (this._superApply = i),
                    t
                  );
                }
              : s;
        }),
        (n.prototype = V.widget.extend(
          o,
          { widgetEventPrefix: (s && o.widgetEventPrefix) || t },
          a,
          { constructor: n, namespace: r, widgetName: t, widgetFullName: l }
        )),
        s
          ? (V.each(s._childConstructors, function (t, e) {
              var i = e.prototype;
              V.widget(i.namespace + "." + i.widgetName, n, e._proto);
            }),
            delete s._childConstructors)
          : i._childConstructors.push(n),
        V.widget.bridge(t, n),
        n
      );
    }),
    (V.widget.extend = function (t) {
      for (var e, i, s = r.call(arguments, 1), n = 0, o = s.length; n < o; n++)
        for (e in s[n])
          (i = s[n][e]),
            a.call(s[n], e) &&
              void 0 !== i &&
              (V.isPlainObject(i)
                ? (t[e] = V.isPlainObject(t[e])
                    ? V.widget.extend({}, t[e], i)
                    : V.widget.extend({}, i))
                : (t[e] = i));
      return t;
    }),
    (V.widget.bridge = function (o, e) {
      var a = e.prototype.widgetFullName || o;
      V.fn[o] = function (i) {
        var t = "string" == typeof i,
          s = r.call(arguments, 1),
          n = this;
        return (
          t
            ? this.length || "instance" !== i
              ? this.each(function () {
                  var t,
                    e = V.data(this, a);
                  return "instance" === i
                    ? ((n = e), !1)
                    : e
                    ? "function" != typeof e[i] || "_" === i.charAt(0)
                      ? V.error(
                          "no such method '" +
                            i +
                            "' for " +
                            o +
                            " widget instance"
                        )
                      : (t = e[i].apply(e, s)) !== e && void 0 !== t
                      ? ((n = t && t.jquery ? n.pushStack(t.get()) : t), !1)
                      : void 0
                    : V.error(
                        "cannot call methods on " +
                          o +
                          " prior to initialization; attempted to call method '" +
                          i +
                          "'"
                      );
                })
              : (n = void 0)
            : (s.length && (i = V.widget.extend.apply(null, [i].concat(s))),
              this.each(function () {
                var t = V.data(this, a);
                t
                  ? (t.option(i || {}), t._init && t._init())
                  : V.data(this, a, new e(i, this));
              })),
          n
        );
      };
    }),
    (V.Widget = function () {}),
    (V.Widget._childConstructors = []),
    (V.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (t, e) {
        (e = V(e || this.defaultElement || this)[0]),
          (this.element = V(e)),
          (this.uuid = i++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = V()),
          (this.hoverable = V()),
          (this.focusable = V()),
          (this.classesElementLookup = {}),
          e !== this &&
            (V.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === e && this.destroy();
              },
            }),
            (this.document = V(e.style ? e.ownerDocument : e.document || e)),
            (this.window = V(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = V.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: V.noop,
      _create: V.noop,
      _init: V.noop,
      destroy: function () {
        var i = this;
        this._destroy(),
          V.each(this.classesElementLookup, function (t, e) {
            i._removeClass(e, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: V.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, e) {
        var i,
          s,
          n,
          o = t;
        if (0 === arguments.length) return V.widget.extend({}, this.options);
        if ("string" == typeof t)
          if (((o = {}), (t = (i = t.split(".")).shift()), i.length)) {
            for (
              s = o[t] = V.widget.extend({}, this.options[t]), n = 0;
              n < i.length - 1;
              n++
            )
              (s[i[n]] = s[i[n]] || {}), (s = s[i[n]]);
            if (((t = i.pop()), 1 === arguments.length))
              return void 0 === s[t] ? null : s[t];
            s[t] = e;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[t] ? null : this.options[t];
            o[t] = e;
          }
        return this._setOptions(o), this;
      },
      _setOptions: function (t) {
        for (var e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          "classes" === t && this._setOptionClasses(e),
          (this.options[t] = e),
          "disabled" === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (t) {
        var e, i, s;
        for (e in t)
          (s = this.classesElementLookup[e]),
            t[e] !== this.options.classes[e] &&
              s &&
              s.length &&
              ((i = V(s.get())),
              this._removeClass(s, e),
              i.addClass(
                this._classes({ element: i, keys: e, classes: t, add: !0 })
              ));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (n) {
        var o = [],
          a = this;
        function t(t, e) {
          for (var i, s = 0; s < t.length; s++)
            (i = a.classesElementLookup[t[s]] || V()),
              (i = n.add
                ? ((function () {
                    var i = [];
                    n.element.each(function (t, e) {
                      V.map(a.classesElementLookup, function (t) {
                        return t;
                      }).some(function (t) {
                        return t.is(e);
                      }) || i.push(e);
                    }),
                      a._on(V(i), { remove: "_untrackClassesElement" });
                  })(),
                  V(V.uniqueSort(i.get().concat(n.element.get()))))
                : V(i.not(n.element).get())),
              (a.classesElementLookup[t[s]] = i),
              o.push(t[s]),
              e && n.classes[t[s]] && o.push(n.classes[t[s]]);
        }
        return (
          (n = V.extend(
            { element: this.element, classes: this.options.classes || {} },
            n
          )).keys && t(n.keys.match(/\S+/g) || [], !0),
          n.extra && t(n.extra.match(/\S+/g) || []),
          o.join(" ")
        );
      },
      _untrackClassesElement: function (i) {
        var s = this;
        V.each(s.classesElementLookup, function (t, e) {
          -1 !== V.inArray(i.target, e) &&
            (s.classesElementLookup[t] = V(e.not(i.target).get()));
        }),
          this._off(V(i.target));
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, s) {
        var n = "string" == typeof t || null === t,
          i = {
            extra: n ? e : i,
            keys: n ? t : e,
            element: n ? this.element : t,
            add: (s = "boolean" == typeof s ? s : i),
          };
        return i.element.toggleClass(this._classes(i), s), this;
      },
      _on: function (n, o, t) {
        var a,
          r = this;
        "boolean" != typeof n && ((t = o), (o = n), (n = !1)),
          t
            ? ((o = a = V(o)), (this.bindings = this.bindings.add(o)))
            : ((t = o), (o = this.element), (a = this.widget())),
          V.each(t, function (t, e) {
            function i() {
              if (
                n ||
                (!0 !== r.options.disabled &&
                  !V(this).hasClass("ui-state-disabled"))
              )
                return ("string" == typeof e ? r[e] : e).apply(r, arguments);
            }
            "string" != typeof e &&
              (i.guid = e.guid = e.guid || i.guid || V.guid++);
            var s = t.match(/^([\w:-]*)\s*(.*)$/),
              t = s[1] + r.eventNamespace,
              s = s[2];
            s ? a.on(t, s, i) : o.on(t, i);
          });
      },
      _off: function (t, e) {
        (e =
          (e || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          t.off(e),
          (this.bindings = V(this.bindings.not(t).get())),
          (this.focusable = V(this.focusable.not(t).get())),
          (this.hoverable = V(this.hoverable.not(t).get()));
      },
      _delay: function (t, e) {
        var i = this;
        return setTimeout(function () {
          return ("string" == typeof t ? i[t] : t).apply(i, arguments);
        }, e || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              this._addClass(V(t.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function (t) {
              this._removeClass(V(t.currentTarget), null, "ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              this._addClass(V(t.currentTarget), null, "ui-state-focus");
            },
            focusout: function (t) {
              this._removeClass(V(t.currentTarget), null, "ui-state-focus");
            },
          });
      },
      _trigger: function (t, e, i) {
        var s,
          n,
          o = this.options[t];
        if (
          ((i = i || {}),
          ((e = V.Event(e)).type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (e.target = this.element[0]),
          (n = e.originalEvent))
        )
          for (s in n) s in e || (e[s] = n[s]);
        return (
          this.element.trigger(e, i),
          !(
            ("function" == typeof o &&
              !1 === o.apply(this.element[0], [e].concat(i))) ||
            e.isDefaultPrevented()
          )
        );
      },
    }),
    V.each({ show: "fadeIn", hide: "fadeOut" }, function (o, a) {
      V.Widget.prototype["_" + o] = function (e, t, i) {
        var s,
          n = (t = "string" == typeof t ? { effect: t } : t)
            ? (!0 !== t && "number" != typeof t && t.effect) || a
            : o;
        "number" == typeof (t = t || {})
          ? (t = { duration: t })
          : !0 === t && (t = {}),
          (s = !V.isEmptyObject(t)),
          (t.complete = i),
          t.delay && e.delay(t.delay),
          s && V.effects && V.effects.effect[n]
            ? e[o](t)
            : n !== o && e[n]
            ? e[n](t.duration, t.easing, i)
            : e.queue(function (t) {
                V(this)[o](), i && i.call(e[0]), t();
              });
      };
    });
  var s, x, k, o, l, h, c, u, C;
  V.widget;
  function D(t, e, i) {
    return [
      parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1),
      parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1),
    ];
  }
  function I(t, e) {
    return parseInt(V.css(t, e), 10) || 0;
  }
  function T(t) {
    return null != t && t === t.window;
  }
  (x = Math.max),
    (k = Math.abs),
    (o = /left|center|right/),
    (l = /top|center|bottom/),
    (h = /[\+\-]\d+(\.[\d]+)?%?/),
    (c = /^\w+/),
    (u = /%$/),
    (C = V.fn.position),
    (V.position = {
      scrollbarWidth: function () {
        if (void 0 !== s) return s;
        var t,
          e = V(
            "<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"
          ),
          i = e.children()[0];
        return (
          V("body").append(e),
          (t = i.offsetWidth),
          e.css("overflow", "scroll"),
          t === (i = i.offsetWidth) && (i = e[0].clientWidth),
          e.remove(),
          (s = t - i)
        );
      },
      getScrollInfo: function (t) {
        var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
          i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
          e =
            "scroll" === e ||
            ("auto" === e && t.width < t.element[0].scrollWidth);
        return {
          width:
            "scroll" === i ||
            ("auto" === i && t.height < t.element[0].scrollHeight)
              ? V.position.scrollbarWidth()
              : 0,
          height: e ? V.position.scrollbarWidth() : 0,
        };
      },
      getWithinInfo: function (t) {
        var e = V(t || window),
          i = T(e[0]),
          s = !!e[0] && 9 === e[0].nodeType;
        return {
          element: e,
          isWindow: i,
          isDocument: s,
          offset: !i && !s ? V(t).offset() : { left: 0, top: 0 },
          scrollLeft: e.scrollLeft(),
          scrollTop: e.scrollTop(),
          width: e.outerWidth(),
          height: e.outerHeight(),
        };
      },
    }),
    (V.fn.position = function (u) {
      if (!u || !u.of) return C.apply(this, arguments);
      var d,
        p,
        f,
        g,
        m,
        t,
        _ =
          "string" == typeof (u = V.extend({}, u)).of
            ? V(document).find(u.of)
            : V(u.of),
        v = V.position.getWithinInfo(u.within),
        b = V.position.getScrollInfo(v),
        y = (u.collision || "flip").split(" "),
        w = {},
        e =
          9 === (t = (e = _)[0]).nodeType
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: 0, left: 0 },
              }
            : T(t)
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: e.scrollTop(), left: e.scrollLeft() },
              }
            : t.preventDefault
            ? { width: 0, height: 0, offset: { top: t.pageY, left: t.pageX } }
            : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset(),
              };
      return (
        _[0].preventDefault && (u.at = "left top"),
        (p = e.width),
        (f = e.height),
        (m = V.extend({}, (g = e.offset))),
        V.each(["my", "at"], function () {
          var t,
            e,
            i = (u[this] || "").split(" ");
          ((i =
            1 === i.length
              ? o.test(i[0])
                ? i.concat(["center"])
                : l.test(i[0])
                ? ["center"].concat(i)
                : ["center", "center"]
              : i)[0] = o.test(i[0]) ? i[0] : "center"),
            (i[1] = l.test(i[1]) ? i[1] : "center"),
            (t = h.exec(i[0])),
            (e = h.exec(i[1])),
            (w[this] = [t ? t[0] : 0, e ? e[0] : 0]),
            (u[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]);
        }),
        1 === y.length && (y[1] = y[0]),
        "right" === u.at[0]
          ? (m.left += p)
          : "center" === u.at[0] && (m.left += p / 2),
        "bottom" === u.at[1]
          ? (m.top += f)
          : "center" === u.at[1] && (m.top += f / 2),
        (d = D(w.at, p, f)),
        (m.left += d[0]),
        (m.top += d[1]),
        this.each(function () {
          var i,
            t,
            a = V(this),
            r = a.outerWidth(),
            l = a.outerHeight(),
            e = I(this, "marginLeft"),
            s = I(this, "marginTop"),
            n = r + e + I(this, "marginRight") + b.width,
            o = l + s + I(this, "marginBottom") + b.height,
            h = V.extend({}, m),
            c = D(w.my, a.outerWidth(), a.outerHeight());
          "right" === u.my[0]
            ? (h.left -= r)
            : "center" === u.my[0] && (h.left -= r / 2),
            "bottom" === u.my[1]
              ? (h.top -= l)
              : "center" === u.my[1] && (h.top -= l / 2),
            (h.left += c[0]),
            (h.top += c[1]),
            (i = { marginLeft: e, marginTop: s }),
            V.each(["left", "top"], function (t, e) {
              V.ui.position[y[t]] &&
                V.ui.position[y[t]][e](h, {
                  targetWidth: p,
                  targetHeight: f,
                  elemWidth: r,
                  elemHeight: l,
                  collisionPosition: i,
                  collisionWidth: n,
                  collisionHeight: o,
                  offset: [d[0] + c[0], d[1] + c[1]],
                  my: u.my,
                  at: u.at,
                  within: v,
                  elem: a,
                });
            }),
            u.using &&
              (t = function (t) {
                var e = g.left - h.left,
                  i = e + p - r,
                  s = g.top - h.top,
                  n = s + f - l,
                  o = {
                    target: {
                      element: _,
                      left: g.left,
                      top: g.top,
                      width: p,
                      height: f,
                    },
                    element: {
                      element: a,
                      left: h.left,
                      top: h.top,
                      width: r,
                      height: l,
                    },
                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                    vertical: n < 0 ? "top" : 0 < s ? "bottom" : "middle",
                  };
                p < r && k(e + i) < p && (o.horizontal = "center"),
                  f < l && k(s + n) < f && (o.vertical = "middle"),
                  x(k(e), k(i)) > x(k(s), k(n))
                    ? (o.important = "horizontal")
                    : (o.important = "vertical"),
                  u.using.call(this, t, o);
              }),
            a.offset(V.extend(h, { using: t }));
        })
      );
    }),
    (V.ui.position = {
      fit: {
        left: function (t, e) {
          var i = e.within,
            s = i.isWindow ? i.scrollLeft : i.offset.left,
            n = i.width,
            o = t.left - e.collisionPosition.marginLeft,
            a = s - o,
            r = o + e.collisionWidth - n - s;
          e.collisionWidth > n
            ? 0 < a && r <= 0
              ? ((i = t.left + a + e.collisionWidth - n - s), (t.left += a - i))
              : (t.left =
                  !(0 < r && a <= 0) && r < a ? s + n - e.collisionWidth : s)
            : 0 < a
            ? (t.left += a)
            : 0 < r
            ? (t.left -= r)
            : (t.left = x(t.left - o, t.left));
        },
        top: function (t, e) {
          var i = e.within,
            s = i.isWindow ? i.scrollTop : i.offset.top,
            n = e.within.height,
            o = t.top - e.collisionPosition.marginTop,
            a = s - o,
            r = o + e.collisionHeight - n - s;
          e.collisionHeight > n
            ? 0 < a && r <= 0
              ? ((i = t.top + a + e.collisionHeight - n - s), (t.top += a - i))
              : (t.top =
                  !(0 < r && a <= 0) && r < a ? s + n - e.collisionHeight : s)
            : 0 < a
            ? (t.top += a)
            : 0 < r
            ? (t.top -= r)
            : (t.top = x(t.top - o, t.top));
        },
      },
      flip: {
        left: function (t, e) {
          var i = e.within,
            s = i.offset.left + i.scrollLeft,
            n = i.width,
            o = i.isWindow ? i.scrollLeft : i.offset.left,
            a = t.left - e.collisionPosition.marginLeft,
            r = a - o,
            l = a + e.collisionWidth - n - o,
            h =
              "left" === e.my[0]
                ? -e.elemWidth
                : "right" === e.my[0]
                ? e.elemWidth
                : 0,
            i =
              "left" === e.at[0]
                ? e.targetWidth
                : "right" === e.at[0]
                ? -e.targetWidth
                : 0,
            a = -2 * e.offset[0];
          r < 0
            ? ((s = t.left + h + i + a + e.collisionWidth - n - s) < 0 ||
                s < k(r)) &&
              (t.left += h + i + a)
            : 0 < l &&
              (0 <
                (o = t.left - e.collisionPosition.marginLeft + h + i + a - o) ||
                k(o) < l) &&
              (t.left += h + i + a);
        },
        top: function (t, e) {
          var i = e.within,
            s = i.offset.top + i.scrollTop,
            n = i.height,
            o = i.isWindow ? i.scrollTop : i.offset.top,
            a = t.top - e.collisionPosition.marginTop,
            r = a - o,
            l = a + e.collisionHeight - n - o,
            h =
              "top" === e.my[1]
                ? -e.elemHeight
                : "bottom" === e.my[1]
                ? e.elemHeight
                : 0,
            i =
              "top" === e.at[1]
                ? e.targetHeight
                : "bottom" === e.at[1]
                ? -e.targetHeight
                : 0,
            a = -2 * e.offset[1];
          r < 0
            ? ((s = t.top + h + i + a + e.collisionHeight - n - s) < 0 ||
                s < k(r)) &&
              (t.top += h + i + a)
            : 0 < l &&
              (0 <
                (o = t.top - e.collisionPosition.marginTop + h + i + a - o) ||
                k(o) < l) &&
              (t.top += h + i + a);
        },
      },
      flipfit: {
        left: function () {
          V.ui.position.flip.left.apply(this, arguments),
            V.ui.position.fit.left.apply(this, arguments);
        },
        top: function () {
          V.ui.position.flip.top.apply(this, arguments),
            V.ui.position.fit.top.apply(this, arguments);
        },
      },
    });
  V.ui.position,
    V.extend(V.expr.pseudos, {
      data: V.expr.createPseudo
        ? V.expr.createPseudo(function (e) {
            return function (t) {
              return !!V.data(t, e);
            };
          })
        : function (t, e, i) {
            return !!V.data(t, i[3]);
          },
    }),
    V.fn.extend({
      disableSelection:
        ((t =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown"),
        function () {
          return this.on(t + ".ui-disableSelection", function (t) {
            t.preventDefault();
          });
        }),
      enableSelection: function () {
        return this.off(".ui-disableSelection");
      },
    });
  var t,
    d = V,
    p = {},
    e = p.toString,
    f = /^([\-+])=\s*(\d+\.?\d*)/,
    g = [
      {
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function (t) {
          return [t[1], t[2], t[3], t[4]];
        },
      },
      {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function (t) {
          return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
        },
      },
      {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,
        parse: function (t) {
          return [
            parseInt(t[1], 16),
            parseInt(t[2], 16),
            parseInt(t[3], 16),
            t[4] ? (parseInt(t[4], 16) / 255).toFixed(2) : 1,
          ];
        },
      },
      {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,
        parse: function (t) {
          return [
            parseInt(t[1] + t[1], 16),
            parseInt(t[2] + t[2], 16),
            parseInt(t[3] + t[3], 16),
            t[4] ? (parseInt(t[4] + t[4], 16) / 255).toFixed(2) : 1,
          ];
        },
      },
      {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function (t) {
          return [t[1], t[2] / 100, t[3] / 100, t[4]];
        },
      },
    ],
    m = (d.Color = function (t, e, i, s) {
      return new d.Color.fn.parse(t, e, i, s);
    }),
    _ = {
      rgba: {
        props: {
          red: { idx: 0, type: "byte" },
          green: { idx: 1, type: "byte" },
          blue: { idx: 2, type: "byte" },
        },
      },
      hsla: {
        props: {
          hue: { idx: 0, type: "degrees" },
          saturation: { idx: 1, type: "percent" },
          lightness: { idx: 2, type: "percent" },
        },
      },
    },
    v = {
      byte: { floor: !0, max: 255 },
      percent: { max: 1 },
      degrees: { mod: 360, floor: !0 },
    },
    b = (m.support = {}),
    y = d("<p>")[0],
    w = d.each;
  function P(t) {
    return null == t
      ? t + ""
      : "object" == typeof t
      ? p[e.call(t)] || "object"
      : typeof t;
  }
  function M(t, e, i) {
    var s = v[e.type] || {};
    return null == t
      ? i || !e.def
        ? null
        : e.def
      : ((t = s.floor ? ~~t : parseFloat(t)),
        isNaN(t)
          ? e.def
          : s.mod
          ? (t + s.mod) % s.mod
          : Math.min(s.max, Math.max(0, t)));
  }
  function S(s) {
    var n = m(),
      o = (n._rgba = []);
    return (
      (s = s.toLowerCase()),
      w(g, function (t, e) {
        var i = e.re.exec(s),
          i = i && e.parse(i),
          e = e.space || "rgba";
        if (i)
          return (
            (i = n[e](i)),
            (n[_[e].cache] = i[_[e].cache]),
            (o = n._rgba = i._rgba),
            !1
          );
      }),
      o.length
        ? ("0,0,0,0" === o.join() && d.extend(o, B.transparent), n)
        : B[s]
    );
  }
  function H(t, e, i) {
    return 6 * (i = (i + 1) % 1) < 1
      ? t + (e - t) * i * 6
      : 2 * i < 1
      ? e
      : 3 * i < 2
      ? t + (e - t) * (2 / 3 - i) * 6
      : t;
  }
  (y.style.cssText = "background-color:rgba(1,1,1,.5)"),
    (b.rgba = -1 < y.style.backgroundColor.indexOf("rgba")),
    w(_, function (t, e) {
      (e.cache = "_" + t),
        (e.props.alpha = { idx: 3, type: "percent", def: 1 });
    }),
    d.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (t, e) {
        p["[object " + e + "]"] = e.toLowerCase();
      }
    ),
    ((m.fn = d.extend(m.prototype, {
      parse: function (n, t, e, i) {
        if (void 0 === n) return (this._rgba = [null, null, null, null]), this;
        (n.jquery || n.nodeType) && ((n = d(n).css(t)), (t = void 0));
        var o = this,
          s = P(n),
          a = (this._rgba = []);
        return (
          void 0 !== t && ((n = [n, t, e, i]), (s = "array")),
          "string" === s
            ? this.parse(S(n) || B._default)
            : "array" === s
            ? (w(_.rgba.props, function (t, e) {
                a[e.idx] = M(n[e.idx], e);
              }),
              this)
            : "object" === s
            ? (w(
                _,
                n instanceof m
                  ? function (t, e) {
                      n[e.cache] && (o[e.cache] = n[e.cache].slice());
                    }
                  : function (t, i) {
                      var s = i.cache;
                      w(i.props, function (t, e) {
                        if (!o[s] && i.to) {
                          if ("alpha" === t || null == n[t]) return;
                          o[s] = i.to(o._rgba);
                        }
                        o[s][e.idx] = M(n[t], e, !0);
                      }),
                        o[s] &&
                          d.inArray(null, o[s].slice(0, 3)) < 0 &&
                          (null == o[s][3] && (o[s][3] = 1),
                          i.from && (o._rgba = i.from(o[s])));
                    }
              ),
              this)
            : void 0
        );
      },
      is: function (t) {
        var n = m(t),
          o = !0,
          a = this;
        return (
          w(_, function (t, e) {
            var i,
              s = n[e.cache];
            return (
              s &&
                ((i = a[e.cache] || (e.to && e.to(a._rgba)) || []),
                w(e.props, function (t, e) {
                  if (null != s[e.idx]) return (o = s[e.idx] === i[e.idx]);
                })),
              o
            );
          }),
          o
        );
      },
      _space: function () {
        var i = [],
          s = this;
        return (
          w(_, function (t, e) {
            s[e.cache] && i.push(t);
          }),
          i.pop()
        );
      },
      transition: function (t, a) {
        var e = (h = m(t))._space(),
          i = _[e],
          t = 0 === this.alpha() ? m("transparent") : this,
          r = t[i.cache] || i.to(t._rgba),
          l = r.slice(),
          h = h[i.cache];
        return (
          w(i.props, function (t, e) {
            var i = e.idx,
              s = r[i],
              n = h[i],
              o = v[e.type] || {};
            null !== n &&
              (null === s
                ? (l[i] = n)
                : (o.mod &&
                    (n - s > o.mod / 2
                      ? (s += o.mod)
                      : s - n > o.mod / 2 && (s -= o.mod)),
                  (l[i] = M((n - s) * a + s, e))));
          }),
          this[e](l)
        );
      },
      blend: function (t) {
        if (1 === this._rgba[3]) return this;
        var e = this._rgba.slice(),
          i = e.pop(),
          s = m(t)._rgba;
        return m(
          d.map(e, function (t, e) {
            return (1 - i) * s[e] + i * t;
          })
        );
      },
      toRgbaString: function () {
        var t = "rgba(",
          e = d.map(this._rgba, function (t, e) {
            return null != t ? t : 2 < e ? 1 : 0;
          });
        return 1 === e[3] && (e.pop(), (t = "rgb(")), t + e.join() + ")";
      },
      toHslaString: function () {
        var t = "hsla(",
          e = d.map(this.hsla(), function (t, e) {
            return (
              null == t && (t = 2 < e ? 1 : 0),
              (t = e && e < 3 ? Math.round(100 * t) + "%" : t)
            );
          });
        return 1 === e[3] && (e.pop(), (t = "hsl(")), t + e.join() + ")";
      },
      toHexString: function (t) {
        var e = this._rgba.slice(),
          i = e.pop();
        return (
          t && e.push(~~(255 * i)),
          "#" +
            d
              .map(e, function (t) {
                return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t;
              })
              .join("")
        );
      },
      toString: function () {
        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
      },
    })).parse.prototype = m.fn),
    (_.hsla.to = function (t) {
      if (null == t[0] || null == t[1] || null == t[2])
        return [null, null, null, t[3]];
      var e = t[0] / 255,
        i = t[1] / 255,
        s = t[2] / 255,
        n = t[3],
        o = Math.max(e, i, s),
        a = Math.min(e, i, s),
        r = o - a,
        l = o + a,
        t = 0.5 * l,
        i =
          a === o
            ? 0
            : e === o
            ? (60 * (i - s)) / r + 360
            : i === o
            ? (60 * (s - e)) / r + 120
            : (60 * (e - i)) / r + 240,
        l = 0 == r ? 0 : t <= 0.5 ? r / l : r / (2 - l);
      return [Math.round(i) % 360, l, t, null == n ? 1 : n];
    }),
    (_.hsla.from = function (t) {
      if (null == t[0] || null == t[1] || null == t[2])
        return [null, null, null, t[3]];
      var e = t[0] / 360,
        i = t[1],
        s = t[2],
        t = t[3],
        i = s <= 0.5 ? s * (1 + i) : s + i - s * i,
        s = 2 * s - i;
      return [
        Math.round(255 * H(s, i, e + 1 / 3)),
        Math.round(255 * H(s, i, e)),
        Math.round(255 * H(s, i, e - 1 / 3)),
        t,
      ];
    }),
    w(_, function (l, t) {
      var e = t.props,
        o = t.cache,
        a = t.to,
        r = t.from;
      (m.fn[l] = function (t) {
        if ((a && !this[o] && (this[o] = a(this._rgba)), void 0 === t))
          return this[o].slice();
        var i = P(t),
          s = "array" === i || "object" === i ? t : arguments,
          n = this[o].slice();
        return (
          w(e, function (t, e) {
            t = s["object" === i ? t : e.idx];
            null == t && (t = n[e.idx]), (n[e.idx] = M(t, e));
          }),
          r ? (((t = m(r(n)))[o] = n), t) : m(n)
        );
      }),
        w(e, function (a, r) {
          m.fn[a] ||
            (m.fn[a] = function (t) {
              var e,
                i = P(t),
                s = "alpha" === a ? (this._hsla ? "hsla" : "rgba") : l,
                n = this[s](),
                o = n[r.idx];
              return "undefined" === i
                ? o
                : ("function" === i && (i = P((t = t.call(this, o)))),
                  null == t && r.empty
                    ? this
                    : ("string" === i &&
                        (e = f.exec(t)) &&
                        (t = o + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)),
                      (n[r.idx] = t),
                      this[s](n)));
            });
        });
    }),
    (m.hook = function (t) {
      t = t.split(" ");
      w(t, function (t, o) {
        (d.cssHooks[o] = {
          set: function (t, e) {
            var i,
              s,
              n = "";
            if ("transparent" !== e && ("string" !== P(e) || (i = S(e)))) {
              if (((e = m(i || e)), !b.rgba && 1 !== e._rgba[3])) {
                for (
                  s = "backgroundColor" === o ? t.parentNode : t;
                  ("" === n || "transparent" === n) && s && s.style;

                )
                  try {
                    (n = d.css(s, "backgroundColor")), (s = s.parentNode);
                  } catch (t) {}
                e = e.blend(n && "transparent" !== n ? n : "_default");
              }
              e = e.toRgbaString();
            }
            try {
              t.style[o] = e;
            } catch (t) {}
          },
        }),
          (d.fx.step[o] = function (t) {
            t.colorInit ||
              ((t.start = m(t.elem, o)),
              (t.end = m(t.end)),
              (t.colorInit = !0)),
              d.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos));
          });
      });
    })(
      "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"
    ),
    (d.cssHooks.borderColor = {
      expand: function (i) {
        var s = {};
        return (
          w(["Top", "Right", "Bottom", "Left"], function (t, e) {
            s["border" + e + "Color"] = i;
          }),
          s
        );
      },
    });
  var z,
    A,
    O,
    N,
    E,
    W,
    F,
    L,
    R,
    Y,
    B = (d.Color.names = {
      aqua: "#00ffff",
      black: "#000000",
      blue: "#0000ff",
      fuchsia: "#ff00ff",
      gray: "#808080",
      green: "#008000",
      lime: "#00ff00",
      maroon: "#800000",
      navy: "#000080",
      olive: "#808000",
      purple: "#800080",
      red: "#ff0000",
      silver: "#c0c0c0",
      teal: "#008080",
      white: "#ffffff",
      yellow: "#ffff00",
      transparent: [null, null, null, 0],
      _default: "#ffffff",
    }),
    j = "ui-effects-",
    q = "ui-effects-style",
    K = "ui-effects-animated";
  function U(t) {
    var e,
      i,
      s = t.ownerDocument.defaultView
        ? t.ownerDocument.defaultView.getComputedStyle(t, null)
        : t.currentStyle,
      n = {};
    if (s && s.length && s[0] && s[s[0]])
      for (i = s.length; i--; )
        "string" == typeof s[(e = s[i])] &&
          (n[
            e.replace(/-([\da-z])/gi, function (t, e) {
              return e.toUpperCase();
            })
          ] = s[e]);
    else for (e in s) "string" == typeof s[e] && (n[e] = s[e]);
    return n;
  }
  function X(t, e, i, s) {
    return (
      (t = { effect: (t = V.isPlainObject(t) ? (e = t).effect : t) }),
      "function" == typeof (e = null == e ? {} : e) &&
        ((s = e), (i = null), (e = {})),
      ("number" != typeof e && !V.fx.speeds[e]) || ((s = i), (i = e), (e = {})),
      "function" == typeof i && ((s = i), (i = null)),
      e && V.extend(t, e),
      (i = i || e.duration),
      (t.duration = V.fx.off
        ? 0
        : "number" == typeof i
        ? i
        : i in V.fx.speeds
        ? V.fx.speeds[i]
        : V.fx.speeds._default),
      (t.complete = s || e.complete),
      t
    );
  }
  function $(t) {
    return (
      !t ||
      "number" == typeof t ||
      V.fx.speeds[t] ||
      ("string" == typeof t && !V.effects.effect[t]) ||
      "function" == typeof t ||
      ("object" == typeof t && !t.effect)
    );
  }
  function G(t, e) {
    var i = e.outerWidth(),
      e = e.outerHeight(),
      t =
        /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(
          t
        ) || ["", 0, i, e, 0];
    return {
      top: parseFloat(t[1]) || 0,
      right: "auto" === t[2] ? i : parseFloat(t[2]),
      bottom: "auto" === t[3] ? e : parseFloat(t[3]),
      left: parseFloat(t[4]) || 0,
    };
  }
  (V.effects = { effect: {} }),
    (N = ["add", "remove", "toggle"]),
    (E = {
      border: 1,
      borderBottom: 1,
      borderColor: 1,
      borderLeft: 1,
      borderRight: 1,
      borderTop: 1,
      borderWidth: 1,
      margin: 1,
      padding: 1,
    }),
    V.each(
      [
        "borderLeftStyle",
        "borderRightStyle",
        "borderBottomStyle",
        "borderTopStyle",
      ],
      function (t, e) {
        V.fx.step[e] = function (t) {
          (("none" !== t.end && !t.setAttr) || (1 === t.pos && !t.setAttr)) &&
            (d.style(t.elem, e, t.end), (t.setAttr = !0));
        };
      }
    ),
    V.fn.addBack ||
      (V.fn.addBack = function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      }),
    (V.effects.animateClass = function (n, t, e, i) {
      var o = V.speed(t, e, i);
      return this.queue(function () {
        var i = V(this),
          t = i.attr("class") || "",
          e = (e = o.children ? i.find("*").addBack() : i).map(function () {
            return { el: V(this), start: U(this) };
          }),
          s = function () {
            V.each(N, function (t, e) {
              n[e] && i[e + "Class"](n[e]);
            });
          };
        s(),
          (e = e.map(function () {
            return (
              (this.end = U(this.el[0])),
              (this.diff = (function (t, e) {
                var i,
                  s,
                  n = {};
                for (i in e)
                  (s = e[i]),
                    t[i] !== s &&
                      (E[i] ||
                        (!V.fx.step[i] && isNaN(parseFloat(s))) ||
                        (n[i] = s));
                return n;
              })(this.start, this.end)),
              this
            );
          })),
          i.attr("class", t),
          (e = e.map(function () {
            var t = this,
              e = V.Deferred(),
              i = V.extend({}, o, {
                queue: !1,
                complete: function () {
                  e.resolve(t);
                },
              });
            return this.el.animate(this.diff, i), e.promise();
          })),
          V.when.apply(V, e.get()).done(function () {
            s(),
              V.each(arguments, function () {
                var e = this.el;
                V.each(this.diff, function (t) {
                  e.css(t, "");
                });
              }),
              o.complete.call(i[0]);
          });
      });
    }),
    V.fn.extend({
      addClass:
        ((O = V.fn.addClass),
        function (t, e, i, s) {
          return e
            ? V.effects.animateClass.call(this, { add: t }, e, i, s)
            : O.apply(this, arguments);
        }),
      removeClass:
        ((A = V.fn.removeClass),
        function (t, e, i, s) {
          return 1 < arguments.length
            ? V.effects.animateClass.call(this, { remove: t }, e, i, s)
            : A.apply(this, arguments);
        }),
      toggleClass:
        ((z = V.fn.toggleClass),
        function (t, e, i, s, n) {
          return "boolean" == typeof e || void 0 === e
            ? i
              ? V.effects.animateClass.call(
                  this,
                  e ? { add: t } : { remove: t },
                  i,
                  s,
                  n
                )
              : z.apply(this, arguments)
            : V.effects.animateClass.call(this, { toggle: t }, e, i, s);
        }),
      switchClass: function (t, e, i, s, n) {
        return V.effects.animateClass.call(
          this,
          { add: e, remove: t },
          i,
          s,
          n
        );
      },
    }),
    V.expr &&
      V.expr.pseudos &&
      V.expr.pseudos.animated &&
      (V.expr.pseudos.animated =
        ((W = V.expr.pseudos.animated),
        function (t) {
          return !!V(t).data(K) || W(t);
        })),
    !1 !== V.uiBackCompat &&
      V.extend(V.effects, {
        save: function (t, e) {
          for (var i = 0, s = e.length; i < s; i++)
            null !== e[i] && t.data(j + e[i], t[0].style[e[i]]);
        },
        restore: function (t, e) {
          for (var i, s = 0, n = e.length; s < n; s++)
            null !== e[s] && ((i = t.data(j + e[s])), t.css(e[s], i));
        },
        setMode: function (t, e) {
          return (e = "toggle" === e ? (t.is(":hidden") ? "show" : "hide") : e);
        },
        createWrapper: function (i) {
          if (i.parent().is(".ui-effects-wrapper")) return i.parent();
          var s = {
              width: i.outerWidth(!0),
              height: i.outerHeight(!0),
              float: i.css("float"),
            },
            t = V("<div></div>").addClass("ui-effects-wrapper").css({
              fontSize: "100%",
              background: "transparent",
              border: "none",
              margin: 0,
              padding: 0,
            }),
            e = { width: i.width(), height: i.height() },
            n = document.activeElement;
          try {
            n.id;
          } catch (t) {
            n = document.body;
          }
          return (
            i.wrap(t),
            (i[0] !== n && !V.contains(i[0], n)) || V(n).trigger("focus"),
            (t = i.parent()),
            "static" === i.css("position")
              ? (t.css({ position: "relative" }),
                i.css({ position: "relative" }))
              : (V.extend(s, {
                  position: i.css("position"),
                  zIndex: i.css("z-index"),
                }),
                V.each(["top", "left", "bottom", "right"], function (t, e) {
                  (s[e] = i.css(e)),
                    isNaN(parseInt(s[e], 10)) && (s[e] = "auto");
                }),
                i.css({
                  position: "relative",
                  top: 0,
                  left: 0,
                  right: "auto",
                  bottom: "auto",
                })),
            i.css(e),
            t.css(s).show()
          );
        },
        removeWrapper: function (t) {
          var e = document.activeElement;
          return (
            t.parent().is(".ui-effects-wrapper") &&
              (t.parent().replaceWith(t),
              (t[0] !== e && !V.contains(t[0], e)) || V(e).trigger("focus")),
            t
          );
        },
      }),
    V.extend(V.effects, {
      version: "1.13.2",
      define: function (t, e, i) {
        return (
          i || ((i = e), (e = "effect")),
          (V.effects.effect[t] = i),
          (V.effects.effect[t].mode = e),
          i
        );
      },
      scaledDimensions: function (t, e, i) {
        if (0 === e)
          return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
        var s = "horizontal" !== i ? (e || 100) / 100 : 1,
          e = "vertical" !== i ? (e || 100) / 100 : 1;
        return {
          height: t.height() * e,
          width: t.width() * s,
          outerHeight: t.outerHeight() * e,
          outerWidth: t.outerWidth() * s,
        };
      },
      clipToBox: function (t) {
        return {
          width: t.clip.right - t.clip.left,
          height: t.clip.bottom - t.clip.top,
          left: t.clip.left,
          top: t.clip.top,
        };
      },
      unshift: function (t, e, i) {
        var s = t.queue();
        1 < e && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue();
      },
      saveStyle: function (t) {
        t.data(q, t[0].style.cssText);
      },
      restoreStyle: function (t) {
        (t[0].style.cssText = t.data(q) || ""), t.removeData(q);
      },
      mode: function (t, e) {
        t = t.is(":hidden");
        return (
          "toggle" === e && (e = t ? "show" : "hide"),
          (e = (t ? "hide" === e : "show" === e) ? "none" : e)
        );
      },
      getBaseline: function (t, e) {
        var i, s;
        switch (t[0]) {
          case "top":
            i = 0;
            break;
          case "middle":
            i = 0.5;
            break;
          case "bottom":
            i = 1;
            break;
          default:
            i = t[0] / e.height;
        }
        switch (t[1]) {
          case "left":
            s = 0;
            break;
          case "center":
            s = 0.5;
            break;
          case "right":
            s = 1;
            break;
          default:
            s = t[1] / e.width;
        }
        return { x: s, y: i };
      },
      createPlaceholder: function (t) {
        var e,
          i = t.css("position"),
          s = t.position();
        return (
          t
            .css({
              marginTop: t.css("marginTop"),
              marginBottom: t.css("marginBottom"),
              marginLeft: t.css("marginLeft"),
              marginRight: t.css("marginRight"),
            })
            .outerWidth(t.outerWidth())
            .outerHeight(t.outerHeight()),
          /^(static|relative)/.test(i) &&
            ((i = "absolute"),
            (e = V("<" + t[0].nodeName + ">")
              .insertAfter(t)
              .css({
                display: /^(inline|ruby)/.test(t.css("display"))
                  ? "inline-block"
                  : "block",
                visibility: "hidden",
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight"),
                float: t.css("float"),
              })
              .outerWidth(t.outerWidth())
              .outerHeight(t.outerHeight())
              .addClass("ui-effects-placeholder")),
            t.data(j + "placeholder", e)),
          t.css({ position: i, left: s.left, top: s.top }),
          e
        );
      },
      removePlaceholder: function (t) {
        var e = j + "placeholder",
          i = t.data(e);
        i && (i.remove(), t.removeData(e));
      },
      cleanUp: function (t) {
        V.effects.restoreStyle(t), V.effects.removePlaceholder(t);
      },
      setTransition: function (s, t, n, o) {
        return (
          (o = o || {}),
          V.each(t, function (t, e) {
            var i = s.cssUnit(e);
            0 < i[0] && (o[e] = i[0] * n + i[1]);
          }),
          o
        );
      },
    }),
    V.fn.extend({
      effect: function () {
        function t(t) {
          var e = V(this),
            i = V.effects.mode(e, r) || o;
          e.data(K, !0),
            l.push(i),
            o && ("show" === i || (i === o && "hide" === i)) && e.show(),
            (o && "none" === i) || V.effects.saveStyle(e),
            "function" == typeof t && t();
        }
        var s = X.apply(this, arguments),
          n = V.effects.effect[s.effect],
          o = n.mode,
          e = s.queue,
          i = e || "fx",
          a = s.complete,
          r = s.mode,
          l = [];
        return V.fx.off || !n
          ? r
            ? this[r](s.duration, a)
            : this.each(function () {
                a && a.call(this);
              })
          : !1 === e
          ? this.each(t).each(h)
          : this.queue(i, t).queue(i, h);
        function h(t) {
          var e = V(this);
          function i() {
            "function" == typeof a && a.call(e[0]),
              "function" == typeof t && t();
          }
          (s.mode = l.shift()),
            !1 === V.uiBackCompat || o
              ? "none" === s.mode
                ? (e[r](), i())
                : n.call(e[0], s, function () {
                    e.removeData(K),
                      V.effects.cleanUp(e),
                      "hide" === s.mode && e.hide(),
                      i();
                  })
              : (e.is(":hidden") ? "hide" === r : "show" === r)
              ? (e[r](), i())
              : n.call(e[0], s, i);
        }
      },
      show:
        ((R = V.fn.show),
        function (t) {
          if ($(t)) return R.apply(this, arguments);
          t = X.apply(this, arguments);
          return (t.mode = "show"), this.effect.call(this, t);
        }),
      hide:
        ((L = V.fn.hide),
        function (t) {
          if ($(t)) return L.apply(this, arguments);
          t = X.apply(this, arguments);
          return (t.mode = "hide"), this.effect.call(this, t);
        }),
      toggle:
        ((F = V.fn.toggle),
        function (t) {
          if ($(t) || "boolean" == typeof t) return F.apply(this, arguments);
          t = X.apply(this, arguments);
          return (t.mode = "toggle"), this.effect.call(this, t);
        }),
      cssUnit: function (t) {
        var i = this.css(t),
          s = [];
        return (
          V.each(["em", "px", "%", "pt"], function (t, e) {
            0 < i.indexOf(e) && (s = [parseFloat(i), e]);
          }),
          s
        );
      },
      cssClip: function (t) {
        return t
          ? this.css(
              "clip",
              "rect(" +
                t.top +
                "px " +
                t.right +
                "px " +
                t.bottom +
                "px " +
                t.left +
                "px)"
            )
          : G(this.css("clip"), this);
      },
      transfer: function (t, e) {
        var i = V(this),
          s = V(t.to),
          n = "fixed" === s.css("position"),
          o = V("body"),
          a = n ? o.scrollTop() : 0,
          r = n ? o.scrollLeft() : 0,
          o = s.offset(),
          o = {
            top: o.top - a,
            left: o.left - r,
            height: s.innerHeight(),
            width: s.innerWidth(),
          },
          s = i.offset(),
          l = V("<div class='ui-effects-transfer'></div>");
        l.appendTo("body")
          .addClass(t.className)
          .css({
            top: s.top - a,
            left: s.left - r,
            height: i.innerHeight(),
            width: i.innerWidth(),
            position: n ? "fixed" : "absolute",
          })
          .animate(o, t.duration, t.easing, function () {
            l.remove(), "function" == typeof e && e();
          });
      },
    }),
    (V.fx.step.clip = function (t) {
      t.clipInit ||
        ((t.start = V(t.elem).cssClip()),
        "string" == typeof t.end && (t.end = G(t.end, t.elem)),
        (t.clipInit = !0)),
        V(t.elem).cssClip({
          top: t.pos * (t.end.top - t.start.top) + t.start.top,
          right: t.pos * (t.end.right - t.start.right) + t.start.right,
          bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
          left: t.pos * (t.end.left - t.start.left) + t.start.left,
        });
    }),
    (Y = {}),
    V.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
      Y[t] = function (t) {
        return Math.pow(t, e + 2);
      };
    }),
    V.extend(Y, {
      Sine: function (t) {
        return 1 - Math.cos((t * Math.PI) / 2);
      },
      Circ: function (t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      Elastic: function (t) {
        return 0 === t || 1 === t
          ? t
          : -Math.pow(2, 8 * (t - 1)) *
              Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
      },
      Back: function (t) {
        return t * t * (3 * t - 2);
      },
      Bounce: function (t) {
        for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; );
        return (
          1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        );
      },
    }),
    V.each(Y, function (t, e) {
      (V.easing["easeIn" + t] = e),
        (V.easing["easeOut" + t] = function (t) {
          return 1 - e(1 - t);
        }),
        (V.easing["easeInOut" + t] = function (t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2;
        });
    });
  (y = V.effects),
    V.effects.define("blind", "hide", function (t, e) {
      var i = {
          up: ["bottom", "top"],
          vertical: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          horizontal: ["right", "left"],
          right: ["left", "right"],
        },
        s = V(this),
        n = t.direction || "up",
        o = s.cssClip(),
        a = { clip: V.extend({}, o) },
        r = V.effects.createPlaceholder(s);
      (a.clip[i[n][0]] = a.clip[i[n][1]]),
        "show" === t.mode &&
          (s.cssClip(a.clip), r && r.css(V.effects.clipToBox(a)), (a.clip = o)),
        r && r.animate(V.effects.clipToBox(a), t.duration, t.easing),
        s.animate(a, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: e,
        });
    }),
    V.effects.define("bounce", function (t, e) {
      var i,
        s,
        n = V(this),
        o = t.mode,
        a = "hide" === o,
        r = "show" === o,
        l = t.direction || "up",
        h = t.distance,
        c = t.times || 5,
        o = 2 * c + (r || a ? 1 : 0),
        u = t.duration / o,
        d = t.easing,
        p = "up" === l || "down" === l ? "top" : "left",
        f = "up" === l || "left" === l,
        g = 0,
        t = n.queue().length;
      for (
        V.effects.createPlaceholder(n),
          l = n.css(p),
          h = h || n["top" == p ? "outerHeight" : "outerWidth"]() / 3,
          r &&
            (((s = { opacity: 1 })[p] = l),
            n
              .css("opacity", 0)
              .css(p, f ? 2 * -h : 2 * h)
              .animate(s, u, d)),
          a && (h /= Math.pow(2, c - 1)),
          (s = {})[p] = l;
        g < c;
        g++
      )
        ((i = {})[p] = (f ? "-=" : "+=") + h),
          n.animate(i, u, d).animate(s, u, d),
          (h = a ? 2 * h : h / 2);
      a &&
        (((i = { opacity: 0 })[p] = (f ? "-=" : "+=") + h), n.animate(i, u, d)),
        n.queue(e),
        V.effects.unshift(n, t, 1 + o);
    }),
    V.effects.define("clip", "hide", function (t, e) {
      var i = {},
        s = V(this),
        n = t.direction || "vertical",
        o = "both" === n,
        a = o || "horizontal" === n,
        o = o || "vertical" === n,
        n = s.cssClip();
      (i.clip = {
        top: o ? (n.bottom - n.top) / 2 : n.top,
        right: a ? (n.right - n.left) / 2 : n.right,
        bottom: o ? (n.bottom - n.top) / 2 : n.bottom,
        left: a ? (n.right - n.left) / 2 : n.left,
      }),
        V.effects.createPlaceholder(s),
        "show" === t.mode && (s.cssClip(i.clip), (i.clip = n)),
        s.animate(i, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: e,
        });
    }),
    V.effects.define("drop", "hide", function (t, e) {
      var i = V(this),
        s = "show" === t.mode,
        n = t.direction || "left",
        o = "up" === n || "down" === n ? "top" : "left",
        a = "up" === n || "left" === n ? "-=" : "+=",
        r = "+=" == a ? "-=" : "+=",
        l = { opacity: 0 };
      V.effects.createPlaceholder(i),
        (n =
          t.distance || i["top" == o ? "outerHeight" : "outerWidth"](!0) / 2),
        (l[o] = a + n),
        s && (i.css(l), (l[o] = r + n), (l.opacity = 1)),
        i.animate(l, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: e,
        });
    }),
    V.effects.define("explode", "hide", function (t, e) {
      var i,
        s,
        n,
        o,
        a,
        r,
        l = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
        h = l,
        c = V(this),
        u = "show" === t.mode,
        d = c.show().css("visibility", "hidden").offset(),
        p = Math.ceil(c.outerWidth() / h),
        f = Math.ceil(c.outerHeight() / l),
        g = [];
      function m() {
        g.push(this),
          g.length === l * h &&
            (c.css({ visibility: "visible" }), V(g).remove(), e());
      }
      for (i = 0; i < l; i++)
        for (o = d.top + i * f, r = i - (l - 1) / 2, s = 0; s < h; s++)
          (n = d.left + s * p),
            (a = s - (h - 1) / 2),
            c
              .clone()
              .appendTo("body")
              .wrap("<div></div>")
              .css({
                position: "absolute",
                visibility: "visible",
                left: -s * p,
                top: -i * f,
              })
              .parent()
              .addClass("ui-effects-explode")
              .css({
                position: "absolute",
                overflow: "hidden",
                width: p,
                height: f,
                left: n + (u ? a * p : 0),
                top: o + (u ? r * f : 0),
                opacity: u ? 0 : 1,
              })
              .animate(
                {
                  left: n + (u ? 0 : a * p),
                  top: o + (u ? 0 : r * f),
                  opacity: u ? 1 : 0,
                },
                t.duration || 500,
                t.easing,
                m
              );
    }),
    V.effects.define("fade", "toggle", function (t, e) {
      var i = "show" === t.mode;
      V(this)
        .css("opacity", i ? 0 : 1)
        .animate(
          { opacity: i ? 1 : 0 },
          { queue: !1, duration: t.duration, easing: t.easing, complete: e }
        );
    }),
    V.effects.define("fold", "hide", function (e, t) {
      var i = V(this),
        s = e.mode,
        n = "show" === s,
        o = "hide" === s,
        a = e.size || 15,
        r = /([0-9]+)%/.exec(a),
        l = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
        h = e.duration / 2,
        c = V.effects.createPlaceholder(i),
        u = i.cssClip(),
        d = { clip: V.extend({}, u) },
        p = { clip: V.extend({}, u) },
        f = [u[l[0]], u[l[1]]],
        s = i.queue().length;
      r && (a = (parseInt(r[1], 10) / 100) * f[o ? 0 : 1]),
        (d.clip[l[0]] = a),
        (p.clip[l[0]] = a),
        (p.clip[l[1]] = 0),
        n &&
          (i.cssClip(p.clip), c && c.css(V.effects.clipToBox(p)), (p.clip = u)),
        i
          .queue(function (t) {
            c &&
              c
                .animate(V.effects.clipToBox(d), h, e.easing)
                .animate(V.effects.clipToBox(p), h, e.easing),
              t();
          })
          .animate(d, h, e.easing)
          .animate(p, h, e.easing)
          .queue(t),
        V.effects.unshift(i, s, 4);
    }),
    V.effects.define("highlight", "show", function (t, e) {
      var i = V(this),
        s = { backgroundColor: i.css("backgroundColor") };
      "hide" === t.mode && (s.opacity = 0),
        V.effects.saveStyle(i),
        i
          .css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99",
          })
          .animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e,
          });
    }),
    V.effects.define("size", function (s, e) {
      var n,
        i = V(this),
        t = ["fontSize"],
        o = [
          "borderTopWidth",
          "borderBottomWidth",
          "paddingTop",
          "paddingBottom",
        ],
        a = [
          "borderLeftWidth",
          "borderRightWidth",
          "paddingLeft",
          "paddingRight",
        ],
        r = s.mode,
        l = "effect" !== r,
        h = s.scale || "both",
        c = s.origin || ["middle", "center"],
        u = i.css("position"),
        d = i.position(),
        p = V.effects.scaledDimensions(i),
        f = s.from || p,
        g = s.to || V.effects.scaledDimensions(i, 0);
      V.effects.createPlaceholder(i),
        "show" === r && ((r = f), (f = g), (g = r)),
        (n = {
          from: { y: f.height / p.height, x: f.width / p.width },
          to: { y: g.height / p.height, x: g.width / p.width },
        }),
        ("box" !== h && "both" !== h) ||
          (n.from.y !== n.to.y &&
            ((f = V.effects.setTransition(i, o, n.from.y, f)),
            (g = V.effects.setTransition(i, o, n.to.y, g))),
          n.from.x !== n.to.x &&
            ((f = V.effects.setTransition(i, a, n.from.x, f)),
            (g = V.effects.setTransition(i, a, n.to.x, g)))),
        ("content" !== h && "both" !== h) ||
          (n.from.y !== n.to.y &&
            ((f = V.effects.setTransition(i, t, n.from.y, f)),
            (g = V.effects.setTransition(i, t, n.to.y, g)))),
        c &&
          ((c = V.effects.getBaseline(c, p)),
          (f.top = (p.outerHeight - f.outerHeight) * c.y + d.top),
          (f.left = (p.outerWidth - f.outerWidth) * c.x + d.left),
          (g.top = (p.outerHeight - g.outerHeight) * c.y + d.top),
          (g.left = (p.outerWidth - g.outerWidth) * c.x + d.left)),
        delete f.outerHeight,
        delete f.outerWidth,
        i.css(f),
        ("content" !== h && "both" !== h) ||
          ((o = o.concat(["marginTop", "marginBottom"]).concat(t)),
          (a = a.concat(["marginLeft", "marginRight"])),
          i.find("*[width]").each(function () {
            var t = V(this),
              e = V.effects.scaledDimensions(t),
              i = {
                height: e.height * n.from.y,
                width: e.width * n.from.x,
                outerHeight: e.outerHeight * n.from.y,
                outerWidth: e.outerWidth * n.from.x,
              },
              e = {
                height: e.height * n.to.y,
                width: e.width * n.to.x,
                outerHeight: e.height * n.to.y,
                outerWidth: e.width * n.to.x,
              };
            n.from.y !== n.to.y &&
              ((i = V.effects.setTransition(t, o, n.from.y, i)),
              (e = V.effects.setTransition(t, o, n.to.y, e))),
              n.from.x !== n.to.x &&
                ((i = V.effects.setTransition(t, a, n.from.x, i)),
                (e = V.effects.setTransition(t, a, n.to.x, e))),
              l && V.effects.saveStyle(t),
              t.css(i),
              t.animate(e, s.duration, s.easing, function () {
                l && V.effects.restoreStyle(t);
              });
          })),
        i.animate(g, {
          queue: !1,
          duration: s.duration,
          easing: s.easing,
          complete: function () {
            var t = i.offset();
            0 === g.opacity && i.css("opacity", f.opacity),
              l ||
                (i.css("position", "static" === u ? "relative" : u).offset(t),
                V.effects.saveStyle(i)),
              e();
          },
        });
    }),
    V.effects.define("scale", function (t, e) {
      var i = V(this),
        s = t.mode,
        s =
          parseInt(t.percent, 10) ||
          (0 === parseInt(t.percent, 10) || "effect" !== s ? 0 : 100),
        s = V.extend(
          !0,
          {
            from: V.effects.scaledDimensions(i),
            to: V.effects.scaledDimensions(i, s, t.direction || "both"),
            origin: t.origin || ["middle", "center"],
          },
          t
        );
      t.fade && ((s.from.opacity = 1), (s.to.opacity = 0)),
        V.effects.effect.size.call(this, s, e);
    }),
    V.effects.define("puff", "hide", function (t, e) {
      t = V.extend(!0, {}, t, {
        fade: !0,
        percent: parseInt(t.percent, 10) || 150,
      });
      V.effects.effect.scale.call(this, t, e);
    }),
    V.effects.define("pulsate", "show", function (t, e) {
      var i = V(this),
        s = t.mode,
        n = "show" === s,
        o = 2 * (t.times || 5) + (n || "hide" === s ? 1 : 0),
        a = t.duration / o,
        r = 0,
        l = 1,
        s = i.queue().length;
      for (
        (!n && i.is(":visible")) || (i.css("opacity", 0).show(), (r = 1));
        l < o;
        l++
      )
        i.animate({ opacity: r }, a, t.easing), (r = 1 - r);
      i.animate({ opacity: r }, a, t.easing),
        i.queue(e),
        V.effects.unshift(i, s, 1 + o);
    }),
    V.effects.define("shake", function (t, e) {
      var i = 1,
        s = V(this),
        n = t.direction || "left",
        o = t.distance || 20,
        a = t.times || 3,
        r = 2 * a + 1,
        l = Math.round(t.duration / r),
        h = "up" === n || "down" === n ? "top" : "left",
        c = "up" === n || "left" === n,
        u = {},
        d = {},
        p = {},
        n = s.queue().length;
      for (
        V.effects.createPlaceholder(s),
          u[h] = (c ? "-=" : "+=") + o,
          d[h] = (c ? "+=" : "-=") + 2 * o,
          p[h] = (c ? "-=" : "+=") + 2 * o,
          s.animate(u, l, t.easing);
        i < a;
        i++
      )
        s.animate(d, l, t.easing).animate(p, l, t.easing);
      s
        .animate(d, l, t.easing)
        .animate(u, l / 2, t.easing)
        .queue(e),
        V.effects.unshift(s, n, 1 + r);
    }),
    V.effects.define("slide", "show", function (t, e) {
      var i,
        s,
        n = V(this),
        o = {
          up: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          right: ["left", "right"],
        },
        a = t.mode,
        r = t.direction || "left",
        l = "up" === r || "down" === r ? "top" : "left",
        h = "up" === r || "left" === r,
        c = t.distance || n["top" == l ? "outerHeight" : "outerWidth"](!0),
        u = {};
      V.effects.createPlaceholder(n),
        (i = n.cssClip()),
        (s = n.position()[l]),
        (u[l] = (h ? -1 : 1) * c + s),
        (u.clip = n.cssClip()),
        (u.clip[o[r][1]] = u.clip[o[r][0]]),
        "show" === a &&
          (n.cssClip(u.clip), n.css(l, u[l]), (u.clip = i), (u[l] = s)),
        n.animate(u, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: e,
        });
    }),
    (y =
      !1 !== V.uiBackCompat
        ? V.effects.define("transfer", function (t, e) {
            V(this).transfer(t, e);
          })
        : y);
  (V.ui.focusable = function (t, e) {
    var i,
      s,
      n,
      o,
      a = t.nodeName.toLowerCase();
    return "area" === a
      ? ((s = (i = t.parentNode).name),
        !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) &&
          0 < (s = V("img[usemap='#" + s + "']")).length &&
          s.is(":visible"))
      : (/^(input|select|textarea|button|object)$/.test(a)
          ? (n = !t.disabled) &&
            (o = V(t).closest("fieldset")[0]) &&
            (n = !o.disabled)
          : (n = ("a" === a && t.href) || e),
        n &&
          V(t).is(":visible") &&
          (function (t) {
            var e = t.css("visibility");
            for (; "inherit" === e; )
              (t = t.parent()), (e = t.css("visibility"));
            return "visible" === e;
          })(V(t)));
  }),
    V.extend(V.expr.pseudos, {
      focusable: function (t) {
        return V.ui.focusable(t, null != V.attr(t, "tabindex"));
      },
    });
  var Q, J;
  V.ui.focusable,
    (V.fn._form = function () {
      return "string" == typeof this[0].form
        ? this.closest("form")
        : V(this[0].form);
    }),
    (V.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = V(this);
        setTimeout(function () {
          var t = e.data("ui-form-reset-instances");
          V.each(t, function () {
            this.refresh();
          });
        });
      },
      _bindFormResetHandler: function () {
        var t;
        (this.form = this.element._form()),
          this.form.length &&
            ((t = this.form.data("ui-form-reset-instances") || []).length ||
              this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t));
      },
      _unbindFormResetHandler: function () {
        var t;
        this.form.length &&
          ((t = this.form.data("ui-form-reset-instances")).splice(
            V.inArray(this, t),
            1
          ),
          t.length
            ? this.form.data("ui-form-reset-instances", t)
            : this.form
                .removeData("ui-form-reset-instances")
                .off("reset.ui-form-reset"));
      },
    });
  V.expr.pseudos || (V.expr.pseudos = V.expr[":"]),
    V.uniqueSort || (V.uniqueSort = V.unique),
    V.escapeSelector ||
      ((Q = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g),
      (J = function (t, e) {
        return e
          ? "\0" === t
            ? "�"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      }),
      (V.escapeSelector = function (t) {
        return (t + "").replace(Q, J);
      })),
    (V.fn.even && V.fn.odd) ||
      V.fn.extend({
        even: function () {
          return this.filter(function (t) {
            return t % 2 == 0;
          });
        },
        odd: function () {
          return this.filter(function (t) {
            return t % 2 == 1;
          });
        },
      });
  var Z;
  (V.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38,
  }),
    (V.fn.labels = function () {
      var t, e, i;
      return this.length
        ? this[0].labels && this[0].labels.length
          ? this.pushStack(this[0].labels)
          : ((e = this.eq(0).parents("label")),
            (t = this.attr("id")) &&
              ((i = (i = this.eq(0).parents().last()).add(
                (i.length ? i : this).siblings()
              )),
              (t = "label[for='" + V.escapeSelector(t) + "']"),
              (e = e.add(i.find(t).addBack(t)))),
            this.pushStack(e))
        : this.pushStack([]);
    }),
    (V.fn.scrollParent = function (t) {
      var e = this.css("position"),
        i = "absolute" === e,
        s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        t = this.parents()
          .filter(function () {
            var t = V(this);
            return (
              (!i || "static" !== t.css("position")) &&
              s.test(
                t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")
              )
            );
          })
          .eq(0);
      return "fixed" !== e && t.length
        ? t
        : V(this[0].ownerDocument || document);
    }),
    V.extend(V.expr.pseudos, {
      tabbable: function (t) {
        var e = V.attr(t, "tabindex"),
          i = null != e;
        return (!i || 0 <= e) && V.ui.focusable(t, i);
      },
    }),
    V.fn.extend({
      uniqueId:
        ((Z = 0),
        function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++Z);
          });
        }),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && V(this).removeAttr("id");
        });
      },
    }),
    V.widget("ui.accordion", {
      version: "1.13.2",
      options: {
        active: 0,
        animate: {},
        classes: {
          "ui-accordion-header": "ui-corner-top",
          "ui-accordion-header-collapsed": "ui-corner-all",
          "ui-accordion-content": "ui-corner-bottom",
        },
        collapsible: !1,
        event: "click",
        header: function (t) {
          return t.find("> li > :first-child").add(t.find("> :not(li)").even());
        },
        heightStyle: "auto",
        icons: {
          activeHeader: "ui-icon-triangle-1-s",
          header: "ui-icon-triangle-1-e",
        },
        activate: null,
        beforeActivate: null,
      },
      hideProps: {
        borderTopWidth: "hide",
        borderBottomWidth: "hide",
        paddingTop: "hide",
        paddingBottom: "hide",
        height: "hide",
      },
      showProps: {
        borderTopWidth: "show",
        borderBottomWidth: "show",
        paddingTop: "show",
        paddingBottom: "show",
        height: "show",
      },
      _create: function () {
        var t = this.options;
        (this.prevShow = this.prevHide = V()),
          this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
          this.element.attr("role", "tablist"),
          t.collapsible ||
            (!1 !== t.active && null != t.active) ||
            (t.active = 0),
          this._processPanels(),
          t.active < 0 && (t.active += this.headers.length),
          this._refresh();
      },
      _getCreateEventData: function () {
        return {
          header: this.active,
          panel: this.active.length ? this.active.next() : V(),
        };
      },
      _createIcons: function () {
        var t,
          e = this.options.icons;
        e &&
          ((t = V("<span>")),
          this._addClass(t, "ui-accordion-header-icon", "ui-icon " + e.header),
          t.prependTo(this.headers),
          (t = this.active.children(".ui-accordion-header-icon")),
          this._removeClass(t, e.header)
            ._addClass(t, null, e.activeHeader)
            ._addClass(this.headers, "ui-accordion-icons"));
      },
      _destroyIcons: function () {
        this._removeClass(this.headers, "ui-accordion-icons"),
          this.headers.children(".ui-accordion-header-icon").remove();
      },
      _destroy: function () {
        var t;
        this.element.removeAttr("role"),
          this.headers
            .removeAttr(
              "role aria-expanded aria-selected aria-controls tabIndex"
            )
            .removeUniqueId(),
          this._destroyIcons(),
          (t = this.headers
            .next()
            .css("display", "")
            .removeAttr("role aria-hidden aria-labelledby")
            .removeUniqueId()),
          "content" !== this.options.heightStyle && t.css("height", "");
      },
      _setOption: function (t, e) {
        "active" !== t
          ? ("event" === t &&
              (this.options.event &&
                this._off(this.headers, this.options.event),
              this._setupEvents(e)),
            this._super(t, e),
            "collapsible" !== t ||
              e ||
              !1 !== this.options.active ||
              this._activate(0),
            "icons" === t && (this._destroyIcons(), e && this._createIcons()))
          : this._activate(e);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr("aria-disabled", t),
          this._toggleClass(null, "ui-state-disabled", !!t),
          this._toggleClass(
            this.headers.add(this.headers.next()),
            null,
            "ui-state-disabled",
            !!t
          );
      },
      _keydown: function (t) {
        if (!t.altKey && !t.ctrlKey) {
          var e = V.ui.keyCode,
            i = this.headers.length,
            s = this.headers.index(t.target),
            n = !1;
          switch (t.keyCode) {
            case e.RIGHT:
            case e.DOWN:
              n = this.headers[(s + 1) % i];
              break;
            case e.LEFT:
            case e.UP:
              n = this.headers[(s - 1 + i) % i];
              break;
            case e.SPACE:
            case e.ENTER:
              this._eventHandler(t);
              break;
            case e.HOME:
              n = this.headers[0];
              break;
            case e.END:
              n = this.headers[i - 1];
          }
          n &&
            (V(t.target).attr("tabIndex", -1),
            V(n).attr("tabIndex", 0),
            V(n).trigger("focus"),
            t.preventDefault());
        }
      },
      _panelKeyDown: function (t) {
        t.keyCode === V.ui.keyCode.UP &&
          t.ctrlKey &&
          V(t.currentTarget).prev().trigger("focus");
      },
      refresh: function () {
        var t = this.options;
        this._processPanels(),
          (!1 === t.active && !0 === t.collapsible) || !this.headers.length
            ? ((t.active = !1), (this.active = V()))
            : !1 === t.active
            ? this._activate(0)
            : this.active.length && !V.contains(this.element[0], this.active[0])
            ? this.headers.length ===
              this.headers.find(".ui-state-disabled").length
              ? ((t.active = !1), (this.active = V()))
              : this._activate(Math.max(0, t.active - 1))
            : (t.active = this.headers.index(this.active)),
          this._destroyIcons(),
          this._refresh();
      },
      _processPanels: function () {
        var t = this.headers,
          e = this.panels;
        "function" == typeof this.options.header
          ? (this.headers = this.options.header(this.element))
          : (this.headers = this.element.find(this.options.header)),
          this._addClass(
            this.headers,
            "ui-accordion-header ui-accordion-header-collapsed",
            "ui-state-default"
          ),
          (this.panels = this.headers
            .next()
            .filter(":not(.ui-accordion-content-active)")
            .hide()),
          this._addClass(
            this.panels,
            "ui-accordion-content",
            "ui-helper-reset ui-widget-content"
          ),
          e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
      },
      _refresh: function () {
        var i,
          t = this.options,
          e = t.heightStyle,
          s = this.element.parent();
        (this.active = this._findActive(t.active)),
          this._addClass(
            this.active,
            "ui-accordion-header-active",
            "ui-state-active"
          )._removeClass(this.active, "ui-accordion-header-collapsed"),
          this._addClass(this.active.next(), "ui-accordion-content-active"),
          this.active.next().show(),
          this.headers
            .attr("role", "tab")
            .each(function () {
              var t = V(this),
                e = t.uniqueId().attr("id"),
                i = t.next(),
                s = i.uniqueId().attr("id");
              t.attr("aria-controls", s), i.attr("aria-labelledby", e);
            })
            .next()
            .attr("role", "tabpanel"),
          this.headers
            .not(this.active)
            .attr({
              "aria-selected": "false",
              "aria-expanded": "false",
              tabIndex: -1,
            })
            .next()
            .attr({ "aria-hidden": "true" })
            .hide(),
          this.active.length
            ? this.active
                .attr({
                  "aria-selected": "true",
                  "aria-expanded": "true",
                  tabIndex: 0,
                })
                .next()
                .attr({ "aria-hidden": "false" })
            : this.headers.eq(0).attr("tabIndex", 0),
          this._createIcons(),
          this._setupEvents(t.event),
          "fill" === e
            ? ((i = s.height()),
              this.element.siblings(":visible").each(function () {
                var t = V(this),
                  e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
              }),
              this.headers.each(function () {
                i -= V(this).outerHeight(!0);
              }),
              this.headers
                .next()
                .each(function () {
                  V(this).height(
                    Math.max(0, i - V(this).innerHeight() + V(this).height())
                  );
                })
                .css("overflow", "auto"))
            : "auto" === e &&
              ((i = 0),
              this.headers
                .next()
                .each(function () {
                  var t = V(this).is(":visible");
                  t || V(this).show(),
                    (i = Math.max(i, V(this).css("height", "").height())),
                    t || V(this).hide();
                })
                .height(i));
      },
      _activate: function (t) {
        t = this._findActive(t)[0];
        t !== this.active[0] &&
          ((t = t || this.active[0]),
          this._eventHandler({
            target: t,
            currentTarget: t,
            preventDefault: V.noop,
          }));
      },
      _findActive: function (t) {
        return "number" == typeof t ? this.headers.eq(t) : V();
      },
      _setupEvents: function (t) {
        var i = { keydown: "_keydown" };
        t &&
          V.each(t.split(" "), function (t, e) {
            i[e] = "_eventHandler";
          }),
          this._off(this.headers.add(this.headers.next())),
          this._on(this.headers, i),
          this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
          this._hoverable(this.headers),
          this._focusable(this.headers);
      },
      _eventHandler: function (t) {
        var e = this.options,
          i = this.active,
          s = V(t.currentTarget),
          n = s[0] === i[0],
          o = n && e.collapsible,
          a = o ? V() : s.next(),
          r = i.next(),
          a = {
            oldHeader: i,
            oldPanel: r,
            newHeader: o ? V() : s,
            newPanel: a,
          };
        t.preventDefault(),
          (n && !e.collapsible) ||
            !1 === this._trigger("beforeActivate", t, a) ||
            ((e.active = !o && this.headers.index(s)),
            (this.active = n ? V() : s),
            this._toggle(a),
            this._removeClass(
              i,
              "ui-accordion-header-active",
              "ui-state-active"
            ),
            e.icons &&
              ((i = i.children(".ui-accordion-header-icon")),
              this._removeClass(i, null, e.icons.activeHeader)._addClass(
                i,
                null,
                e.icons.header
              )),
            n ||
              (this._removeClass(s, "ui-accordion-header-collapsed")._addClass(
                s,
                "ui-accordion-header-active",
                "ui-state-active"
              ),
              e.icons &&
                ((n = s.children(".ui-accordion-header-icon")),
                this._removeClass(n, null, e.icons.header)._addClass(
                  n,
                  null,
                  e.icons.activeHeader
                )),
              this._addClass(s.next(), "ui-accordion-content-active")));
      },
      _toggle: function (t) {
        var e = t.newPanel,
          i = this.prevShow.length ? this.prevShow : t.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0),
          (this.prevShow = e),
          (this.prevHide = i),
          this.options.animate
            ? this._animate(e, i, t)
            : (i.hide(), e.show(), this._toggleComplete(t)),
          i.attr({ "aria-hidden": "true" }),
          i.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }),
          e.length && i.length
            ? i.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
            : e.length &&
              this.headers
                .filter(function () {
                  return 0 === parseInt(V(this).attr("tabIndex"), 10);
                })
                .attr("tabIndex", -1),
          e.attr("aria-hidden", "false").prev().attr({
            "aria-selected": "true",
            "aria-expanded": "true",
            tabIndex: 0,
          });
      },
      _animate: function (t, i, e) {
        var s,
          n,
          o,
          a = this,
          r = 0,
          l = t.css("box-sizing"),
          h = t.length && (!i.length || t.index() < i.index()),
          c = this.options.animate || {},
          u = (h && c.down) || c,
          h = function () {
            a._toggleComplete(e);
          };
        return (
          (n = (n = "string" == typeof u ? u : n) || u.easing || c.easing),
          (o = (o = "number" == typeof u ? u : o) || u.duration || c.duration),
          i.length
            ? t.length
              ? ((s = t.show().outerHeight()),
                i.animate(this.hideProps, {
                  duration: o,
                  easing: n,
                  step: function (t, e) {
                    e.now = Math.round(t);
                  },
                }),
                void t.hide().animate(this.showProps, {
                  duration: o,
                  easing: n,
                  complete: h,
                  step: function (t, e) {
                    (e.now = Math.round(t)),
                      "height" !== e.prop
                        ? "content-box" === l && (r += e.now)
                        : "content" !== a.options.heightStyle &&
                          ((e.now = Math.round(s - i.outerHeight() - r)),
                          (r = 0));
                  },
                }))
              : i.animate(this.hideProps, o, n, h)
            : t.animate(this.showProps, o, n, h)
        );
      },
      _toggleComplete: function (t) {
        var e = t.oldPanel,
          i = e.prev();
        this._removeClass(e, "ui-accordion-content-active"),
          this._removeClass(i, "ui-accordion-header-active")._addClass(
            i,
            "ui-accordion-header-collapsed"
          ),
          e.length && (e.parent()[0].className = e.parent()[0].className),
          this._trigger("activate", null, t);
      },
    }),
    (V.ui.safeActiveElement = function (e) {
      var i;
      try {
        i = e.activeElement;
      } catch (t) {
        i = e.body;
      }
      return (i = !(i = i || e.body).nodeName ? e.body : i);
    }),
    V.widget("ui.menu", {
      version: "1.13.2",
      defaultElement: "<ul>",
      delay: 300,
      options: {
        icons: { submenu: "ui-icon-caret-1-e" },
        items: "> *",
        menus: "ul",
        position: { my: "left top", at: "right top" },
        role: "menu",
        blur: null,
        focus: null,
        select: null,
      },
      _create: function () {
        (this.activeMenu = this.element),
          (this.mouseHandled = !1),
          (this.lastMousePosition = { x: null, y: null }),
          this.element
            .uniqueId()
            .attr({ role: this.options.role, tabIndex: 0 }),
          this._addClass("ui-menu", "ui-widget ui-widget-content"),
          this._on({
            "mousedown .ui-menu-item": function (t) {
              t.preventDefault(), this._activateItem(t);
            },
            "click .ui-menu-item": function (t) {
              var e = V(t.target),
                i = V(V.ui.safeActiveElement(this.document[0]));
              !this.mouseHandled &&
                e.not(".ui-state-disabled").length &&
                (this.select(t),
                t.isPropagationStopped() || (this.mouseHandled = !0),
                e.has(".ui-menu").length
                  ? this.expand(t)
                  : !this.element.is(":focus") &&
                    i.closest(".ui-menu").length &&
                    (this.element.trigger("focus", [!0]),
                    this.active &&
                      1 === this.active.parents(".ui-menu").length &&
                      clearTimeout(this.timer)));
            },
            "mouseenter .ui-menu-item": "_activateItem",
            "mousemove .ui-menu-item": "_activateItem",
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function (t, e) {
              var i = this.active || this._menuItems().first();
              e || this.focus(t, i);
            },
            blur: function (t) {
              this._delay(function () {
                V.contains(
                  this.element[0],
                  V.ui.safeActiveElement(this.document[0])
                ) || this.collapseAll(t);
              });
            },
            keydown: "_keydown",
          }),
          this.refresh(),
          this._on(this.document, {
            click: function (t) {
              this._closeOnDocumentClick(t) && this.collapseAll(t, !0),
                (this.mouseHandled = !1);
            },
          });
      },
      _activateItem: function (t) {
        var e, i;
        this.previousFilter ||
          (t.clientX === this.lastMousePosition.x &&
            t.clientY === this.lastMousePosition.y) ||
          ((this.lastMousePosition = { x: t.clientX, y: t.clientY }),
          (e = V(t.target).closest(".ui-menu-item")),
          (i = V(t.currentTarget)),
          e[0] === i[0] &&
            (i.is(".ui-state-active") ||
              (this._removeClass(
                i.siblings().children(".ui-state-active"),
                null,
                "ui-state-active"
              ),
              this.focus(t, i))));
      },
      _destroy: function () {
        var t = this.element
          .find(".ui-menu-item")
          .removeAttr("role aria-disabled")
          .children(".ui-menu-item-wrapper")
          .removeUniqueId()
          .removeAttr("tabIndex role aria-haspopup");
        this.element
          .removeAttr("aria-activedescendant")
          .find(".ui-menu")
          .addBack()
          .removeAttr(
            "role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex"
          )
          .removeUniqueId()
          .show(),
          t.children().each(function () {
            var t = V(this);
            t.data("ui-menu-submenu-caret") && t.remove();
          });
      },
      _keydown: function (t) {
        var e,
          i,
          s,
          n = !0;
        switch (t.keyCode) {
          case V.ui.keyCode.PAGE_UP:
            this.previousPage(t);
            break;
          case V.ui.keyCode.PAGE_DOWN:
            this.nextPage(t);
            break;
          case V.ui.keyCode.HOME:
            this._move("first", "first", t);
            break;
          case V.ui.keyCode.END:
            this._move("last", "last", t);
            break;
          case V.ui.keyCode.UP:
            this.previous(t);
            break;
          case V.ui.keyCode.DOWN:
            this.next(t);
            break;
          case V.ui.keyCode.LEFT:
            this.collapse(t);
            break;
          case V.ui.keyCode.RIGHT:
            this.active &&
              !this.active.is(".ui-state-disabled") &&
              this.expand(t);
            break;
          case V.ui.keyCode.ENTER:
          case V.ui.keyCode.SPACE:
            this._activate(t);
            break;
          case V.ui.keyCode.ESCAPE:
            this.collapse(t);
            break;
          default:
            (e = this.previousFilter || ""),
              (s = n = !1),
              (i =
                96 <= t.keyCode && t.keyCode <= 105
                  ? (t.keyCode - 96).toString()
                  : String.fromCharCode(t.keyCode)),
              clearTimeout(this.filterTimer),
              i === e ? (s = !0) : (i = e + i),
              (e = this._filterMenuItems(i)),
              (e =
                s && -1 !== e.index(this.active.next())
                  ? this.active.nextAll(".ui-menu-item")
                  : e).length ||
                ((i = String.fromCharCode(t.keyCode)),
                (e = this._filterMenuItems(i))),
              e.length
                ? (this.focus(t, e),
                  (this.previousFilter = i),
                  (this.filterTimer = this._delay(function () {
                    delete this.previousFilter;
                  }, 1e3)))
                : delete this.previousFilter;
        }
        n && t.preventDefault();
      },
      _activate: function (t) {
        this.active &&
          !this.active.is(".ui-state-disabled") &&
          (this.active.children("[aria-haspopup='true']").length
            ? this.expand(t)
            : this.select(t));
      },
      refresh: function () {
        var t,
          e,
          s = this,
          n = this.options.icons.submenu,
          i = this.element.find(this.options.menus);
        this._toggleClass(
          "ui-menu-icons",
          null,
          !!this.element.find(".ui-icon").length
        ),
          (e = i
            .filter(":not(.ui-menu)")
            .hide()
            .attr({
              role: this.options.role,
              "aria-hidden": "true",
              "aria-expanded": "false",
            })
            .each(function () {
              var t = V(this),
                e = t.prev(),
                i = V("<span>").data("ui-menu-submenu-caret", !0);
              s._addClass(i, "ui-menu-icon", "ui-icon " + n),
                e.attr("aria-haspopup", "true").prepend(i),
                t.attr("aria-labelledby", e.attr("id"));
            })),
          this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"),
          (t = i.add(this.element).find(this.options.items))
            .not(".ui-menu-item")
            .each(function () {
              var t = V(this);
              s._isDivider(t) &&
                s._addClass(t, "ui-menu-divider", "ui-widget-content");
            }),
          (i = (e = t.not(".ui-menu-item, .ui-menu-divider"))
            .children()
            .not(".ui-menu")
            .uniqueId()
            .attr({ tabIndex: -1, role: this._itemRole() })),
          this._addClass(e, "ui-menu-item")._addClass(
            i,
            "ui-menu-item-wrapper"
          ),
          t.filter(".ui-state-disabled").attr("aria-disabled", "true"),
          this.active &&
            !V.contains(this.element[0], this.active[0]) &&
            this.blur();
      },
      _itemRole: function () {
        return { menu: "menuitem", listbox: "option" }[this.options.role];
      },
      _setOption: function (t, e) {
        var i;
        "icons" === t &&
          ((i = this.element.find(".ui-menu-icon")),
          this._removeClass(i, null, this.options.icons.submenu)._addClass(
            i,
            null,
            e.submenu
          )),
          this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr("aria-disabled", String(t)),
          this._toggleClass(null, "ui-state-disabled", !!t);
      },
      focus: function (t, e) {
        var i;
        this.blur(t, t && "focus" === t.type),
          this._scrollIntoView(e),
          (this.active = e.first()),
          (i = this.active.children(".ui-menu-item-wrapper")),
          this._addClass(i, null, "ui-state-active"),
          this.options.role &&
            this.element.attr("aria-activedescendant", i.attr("id")),
          (i = this.active
            .parent()
            .closest(".ui-menu-item")
            .children(".ui-menu-item-wrapper")),
          this._addClass(i, null, "ui-state-active"),
          t && "keydown" === t.type
            ? this._close()
            : (this.timer = this._delay(function () {
                this._close();
              }, this.delay)),
          (i = e.children(".ui-menu")).length &&
            t &&
            /^mouse/.test(t.type) &&
            this._startOpening(i),
          (this.activeMenu = e.parent()),
          this._trigger("focus", t, { item: e });
      },
      _scrollIntoView: function (t) {
        var e, i, s;
        this._hasScroll() &&
          ((i = parseFloat(V.css(this.activeMenu[0], "borderTopWidth")) || 0),
          (s = parseFloat(V.css(this.activeMenu[0], "paddingTop")) || 0),
          (e = t.offset().top - this.activeMenu.offset().top - i - s),
          (i = this.activeMenu.scrollTop()),
          (s = this.activeMenu.height()),
          (t = t.outerHeight()),
          e < 0
            ? this.activeMenu.scrollTop(i + e)
            : s < e + t && this.activeMenu.scrollTop(i + e - s + t));
      },
      blur: function (t, e) {
        e || clearTimeout(this.timer),
          this.active &&
            (this._removeClass(
              this.active.children(".ui-menu-item-wrapper"),
              null,
              "ui-state-active"
            ),
            this._trigger("blur", t, { item: this.active }),
            (this.active = null));
      },
      _startOpening: function (t) {
        clearTimeout(this.timer),
          "true" === t.attr("aria-hidden") &&
            (this.timer = this._delay(function () {
              this._close(), this._open(t);
            }, this.delay));
      },
      _open: function (t) {
        var e = V.extend({ of: this.active }, this.options.position);
        clearTimeout(this.timer),
          this.element
            .find(".ui-menu")
            .not(t.parents(".ui-menu"))
            .hide()
            .attr("aria-hidden", "true"),
          t
            .show()
            .removeAttr("aria-hidden")
            .attr("aria-expanded", "true")
            .position(e);
      },
      collapseAll: function (e, i) {
        clearTimeout(this.timer),
          (this.timer = this._delay(
            function () {
              var t = i
                ? this.element
                : V(e && e.target).closest(this.element.find(".ui-menu"));
              t.length || (t = this.element),
                this._close(t),
                this.blur(e),
                this._removeClass(
                  t.find(".ui-state-active"),
                  null,
                  "ui-state-active"
                ),
                (this.activeMenu = t);
            },
            i ? 0 : this.delay
          ));
      },
      _close: function (t) {
        (t = t || (this.active ? this.active.parent() : this.element))
          .find(".ui-menu")
          .hide()
          .attr("aria-hidden", "true")
          .attr("aria-expanded", "false");
      },
      _closeOnDocumentClick: function (t) {
        return !V(t.target).closest(".ui-menu").length;
      },
      _isDivider: function (t) {
        return !/[^\-\u2014\u2013\s]/.test(t.text());
      },
      collapse: function (t) {
        var e =
          this.active &&
          this.active.parent().closest(".ui-menu-item", this.element);
        e && e.length && (this._close(), this.focus(t, e));
      },
      expand: function (t) {
        var e =
          this.active &&
          this._menuItems(this.active.children(".ui-menu")).first();
        e &&
          e.length &&
          (this._open(e.parent()),
          this._delay(function () {
            this.focus(t, e);
          }));
      },
      next: function (t) {
        this._move("next", "first", t);
      },
      previous: function (t) {
        this._move("prev", "last", t);
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length;
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length;
      },
      _menuItems: function (t) {
        return (t || this.element)
          .find(this.options.items)
          .filter(".ui-menu-item");
      },
      _move: function (t, e, i) {
        var s;
        ((s = this.active
          ? "first" === t || "last" === t
            ? this.active["first" === t ? "prevAll" : "nextAll"](
                ".ui-menu-item"
              ).last()
            : this.active[t + "All"](".ui-menu-item").first()
          : s) &&
          s.length &&
          this.active) ||
          (s = this._menuItems(this.activeMenu)[e]()),
          this.focus(i, s);
      },
      nextPage: function (t) {
        var e, i, s;
        this.active
          ? this.isLastItem() ||
            (this._hasScroll()
              ? ((i = this.active.offset().top),
                (s = this.element.innerHeight()),
                0 === V.fn.jquery.indexOf("3.2.") &&
                  (s +=
                    this.element[0].offsetHeight - this.element.outerHeight()),
                this.active.nextAll(".ui-menu-item").each(function () {
                  return (e = V(this)).offset().top - i - s < 0;
                }),
                this.focus(t, e))
              : this.focus(
                  t,
                  this._menuItems(this.activeMenu)[
                    this.active ? "last" : "first"
                  ]()
                ))
          : this.next(t);
      },
      previousPage: function (t) {
        var e, i, s;
        this.active
          ? this.isFirstItem() ||
            (this._hasScroll()
              ? ((i = this.active.offset().top),
                (s = this.element.innerHeight()),
                0 === V.fn.jquery.indexOf("3.2.") &&
                  (s +=
                    this.element[0].offsetHeight - this.element.outerHeight()),
                this.active.prevAll(".ui-menu-item").each(function () {
                  return 0 < (e = V(this)).offset().top - i + s;
                }),
                this.focus(t, e))
              : this.focus(t, this._menuItems(this.activeMenu).first()))
          : this.next(t);
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight");
      },
      select: function (t) {
        this.active = this.active || V(t.target).closest(".ui-menu-item");
        var e = { item: this.active };
        this.active.has(".ui-menu").length || this.collapseAll(t, !0),
          this._trigger("select", t, e);
      },
      _filterMenuItems: function (t) {
        var t = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          e = new RegExp("^" + t, "i");
        return this.activeMenu
          .find(this.options.items)
          .filter(".ui-menu-item")
          .filter(function () {
            return e.test(
              String.prototype.trim.call(
                V(this).children(".ui-menu-item-wrapper").text()
              )
            );
          });
      },
    });
  V.widget("ui.autocomplete", {
    version: "1.13.2",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: { my: "left top", at: "left bottom", collision: "none" },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null,
    },
    requestIndex: 0,
    pending: 0,
    liveRegionTimer: null,
    _create: function () {
      var i,
        s,
        n,
        t = this.element[0].nodeName.toLowerCase(),
        e = "textarea" === t,
        t = "input" === t;
      (this.isMultiLine = e || (!t && this._isContentEditable(this.element))),
        (this.valueMethod = this.element[e || t ? "val" : "text"]),
        (this.isNewMenu = !0),
        this._addClass("ui-autocomplete-input"),
        this.element.attr("autocomplete", "off"),
        this._on(this.element, {
          keydown: function (t) {
            if (this.element.prop("readOnly")) s = n = i = !0;
            else {
              s = n = i = !1;
              var e = V.ui.keyCode;
              switch (t.keyCode) {
                case e.PAGE_UP:
                  (i = !0), this._move("previousPage", t);
                  break;
                case e.PAGE_DOWN:
                  (i = !0), this._move("nextPage", t);
                  break;
                case e.UP:
                  (i = !0), this._keyEvent("previous", t);
                  break;
                case e.DOWN:
                  (i = !0), this._keyEvent("next", t);
                  break;
                case e.ENTER:
                  this.menu.active &&
                    ((i = !0), t.preventDefault(), this.menu.select(t));
                  break;
                case e.TAB:
                  this.menu.active && this.menu.select(t);
                  break;
                case e.ESCAPE:
                  this.menu.element.is(":visible") &&
                    (this.isMultiLine || this._value(this.term),
                    this.close(t),
                    t.preventDefault());
                  break;
                default:
                  (s = !0), this._searchTimeout(t);
              }
            }
          },
          keypress: function (t) {
            if (i)
              return (
                (i = !1),
                void (
                  (this.isMultiLine && !this.menu.element.is(":visible")) ||
                  t.preventDefault()
                )
              );
            if (!s) {
              var e = V.ui.keyCode;
              switch (t.keyCode) {
                case e.PAGE_UP:
                  this._move("previousPage", t);
                  break;
                case e.PAGE_DOWN:
                  this._move("nextPage", t);
                  break;
                case e.UP:
                  this._keyEvent("previous", t);
                  break;
                case e.DOWN:
                  this._keyEvent("next", t);
              }
            }
          },
          input: function (t) {
            if (n) return (n = !1), void t.preventDefault();
            this._searchTimeout(t);
          },
          focus: function () {
            (this.selectedItem = null), (this.previous = this._value());
          },
          blur: function (t) {
            clearTimeout(this.searching), this.close(t), this._change(t);
          },
        }),
        this._initSource(),
        (this.menu = V("<ul>")
          .appendTo(this._appendTo())
          .menu({ role: null })
          .hide()
          .attr({ unselectable: "on" })
          .menu("instance")),
        this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
        this._on(this.menu.element, {
          mousedown: function (t) {
            t.preventDefault();
          },
          menufocus: function (t, e) {
            var i, s;
            if (
              this.isNewMenu &&
              ((this.isNewMenu = !1),
              t.originalEvent && /^mouse/.test(t.originalEvent.type))
            )
              return (
                this.menu.blur(),
                void this.document.one("mousemove", function () {
                  V(t.target).trigger(t.originalEvent);
                })
              );
            (s = e.item.data("ui-autocomplete-item")),
              !1 !== this._trigger("focus", t, { item: s }) &&
                t.originalEvent &&
                /^key/.test(t.originalEvent.type) &&
                this._value(s.value),
              (i = e.item.attr("aria-label") || s.value) &&
                String.prototype.trim.call(i).length &&
                (clearTimeout(this.liveRegionTimer),
                (this.liveRegionTimer = this._delay(function () {
                  this.liveRegion.html(V("<div>").text(i));
                }, 100)));
          },
          menuselect: function (t, e) {
            var i = e.item.data("ui-autocomplete-item"),
              s = this.previous;
            this.element[0] !== V.ui.safeActiveElement(this.document[0]) &&
              (this.element.trigger("focus"),
              (this.previous = s),
              this._delay(function () {
                (this.previous = s), (this.selectedItem = i);
              })),
              !1 !== this._trigger("select", t, { item: i }) &&
                this._value(i.value),
              (this.term = this._value()),
              this.close(t),
              (this.selectedItem = i);
          },
        }),
        (this.liveRegion = V("<div>", {
          role: "status",
          "aria-live": "assertive",
          "aria-relevant": "additions",
        }).appendTo(this.document[0].body)),
        this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
        this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr("autocomplete");
          },
        });
    },
    _destroy: function () {
      clearTimeout(this.searching),
        this.element.removeAttr("autocomplete"),
        this.menu.element.remove(),
        this.liveRegion.remove();
    },
    _setOption: function (t, e) {
      this._super(t, e),
        "source" === t && this._initSource(),
        "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
        "disabled" === t && e && this.xhr && this.xhr.abort();
    },
    _isEventTargetInWidget: function (t) {
      var e = this.menu.element[0];
      return (
        t.target === this.element[0] ||
        t.target === e ||
        V.contains(e, t.target)
      );
    },
    _closeOnClickOutside: function (t) {
      this._isEventTargetInWidget(t) || this.close();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return (t = !(t =
        !(t =
          t && (t.jquery || t.nodeType ? V(t) : this.document.find(t).eq(0))) ||
        !t[0]
          ? this.element.closest(".ui-front, dialog")
          : t).length
        ? this.document[0].body
        : t);
    },
    _initSource: function () {
      var i,
        s,
        n = this;
      Array.isArray(this.options.source)
        ? ((i = this.options.source),
          (this.source = function (t, e) {
            e(V.ui.autocomplete.filter(i, t.term));
          }))
        : "string" == typeof this.options.source
        ? ((s = this.options.source),
          (this.source = function (t, e) {
            n.xhr && n.xhr.abort(),
              (n.xhr = V.ajax({
                url: s,
                data: t,
                dataType: "json",
                success: function (t) {
                  e(t);
                },
                error: function () {
                  e([]);
                },
              }));
          }))
        : (this.source = this.options.source);
    },
    _searchTimeout: function (s) {
      clearTimeout(this.searching),
        (this.searching = this._delay(function () {
          var t = this.term === this._value(),
            e = this.menu.element.is(":visible"),
            i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;
          (t && (e || i)) || ((this.selectedItem = null), this.search(null, s));
        }, this.options.delay));
    },
    search: function (t, e) {
      return (
        (t = null != t ? t : this._value()),
        (this.term = this._value()),
        t.length < this.options.minLength
          ? this.close(e)
          : !1 !== this._trigger("search", e)
          ? this._search(t)
          : void 0
      );
    },
    _search: function (t) {
      this.pending++,
        this._addClass("ui-autocomplete-loading"),
        (this.cancelSearch = !1),
        this.source({ term: t }, this._response());
    },
    _response: function () {
      var e = ++this.requestIndex;
      return function (t) {
        e === this.requestIndex && this.__response(t),
          this.pending--,
          this.pending || this._removeClass("ui-autocomplete-loading");
      }.bind(this);
    },
    __response: function (t) {
      (t = t && this._normalize(t)),
        this._trigger("response", null, { content: t }),
        !this.options.disabled && t && t.length && !this.cancelSearch
          ? (this._suggest(t), this._trigger("open"))
          : this._close();
    },
    close: function (t) {
      (this.cancelSearch = !0), this._close(t);
    },
    _close: function (t) {
      this._off(this.document, "mousedown"),
        this.menu.element.is(":visible") &&
          (this.menu.element.hide(),
          this.menu.blur(),
          (this.isNewMenu = !0),
          this._trigger("close", t));
    },
    _change: function (t) {
      this.previous !== this._value() &&
        this._trigger("change", t, { item: this.selectedItem });
    },
    _normalize: function (t) {
      return t.length && t[0].label && t[0].value
        ? t
        : V.map(t, function (t) {
            return "string" == typeof t
              ? { label: t, value: t }
              : V.extend({}, t, {
                  label: t.label || t.value,
                  value: t.value || t.label,
                });
          });
    },
    _suggest: function (t) {
      var e = this.menu.element.empty();
      this._renderMenu(e, t),
        (this.isNewMenu = !0),
        this.menu.refresh(),
        e.show(),
        this._resizeMenu(),
        e.position(V.extend({ of: this.element }, this.options.position)),
        this.options.autoFocus && this.menu.next(),
        this._on(this.document, { mousedown: "_closeOnClickOutside" });
    },
    _resizeMenu: function () {
      var t = this.menu.element;
      t.outerWidth(
        Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())
      );
    },
    _renderMenu: function (i, t) {
      var s = this;
      V.each(t, function (t, e) {
        s._renderItemData(i, e);
      });
    },
    _renderItemData: function (t, e) {
      return this._renderItem(t, e).data("ui-autocomplete-item", e);
    },
    _renderItem: function (t, e) {
      return V("<li>").append(V("<div>").text(e.label)).appendTo(t);
    },
    _move: function (t, e) {
      if (this.menu.element.is(":visible"))
        return (this.menu.isFirstItem() && /^previous/.test(t)) ||
          (this.menu.isLastItem() && /^next/.test(t))
          ? (this.isMultiLine || this._value(this.term), void this.menu.blur())
          : void this.menu[t](e);
      this.search(null, e);
    },
    widget: function () {
      return this.menu.element;
    },
    _value: function () {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function (t, e) {
      (this.isMultiLine && !this.menu.element.is(":visible")) ||
        (this._move(t, e), e.preventDefault());
    },
    _isContentEditable: function (t) {
      if (!t.length) return !1;
      var e = t.prop("contentEditable");
      return "inherit" === e
        ? this._isContentEditable(t.parent())
        : "true" === e;
    },
  }),
    V.extend(V.ui.autocomplete, {
      escapeRegex: function (t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      },
      filter: function (t, e) {
        var i = new RegExp(V.ui.autocomplete.escapeRegex(e), "i");
        return V.grep(t, function (t) {
          return i.test(t.label || t.value || t);
        });
      },
    }),
    V.widget("ui.autocomplete", V.ui.autocomplete, {
      options: {
        messages: {
          noResults: "No search results.",
          results: function (t) {
            return (
              t +
              (1 < t ? " results are" : " result is") +
              " available, use up and down arrow keys to navigate."
            );
          },
        },
      },
      __response: function (t) {
        var e;
        this._superApply(arguments),
          this.options.disabled ||
            this.cancelSearch ||
            ((e =
              t && t.length
                ? this.options.messages.results(t.length)
                : this.options.messages.noResults),
            clearTimeout(this.liveRegionTimer),
            (this.liveRegionTimer = this._delay(function () {
              this.liveRegion.html(V("<div>").text(e));
            }, 100)));
      },
    });
  V.ui.autocomplete;
  var tt = /ui-corner-([a-z]){2,6}/g;
  V.widget("ui.controlgroup", {
    version: "1.13.2",
    defaultElement: "<div>",
    options: {
      direction: "horizontal",
      disabled: null,
      onlyVisible: !0,
      items: {
        button:
          "input[type=button], input[type=submit], input[type=reset], button, a",
        controlgroupLabel: ".ui-controlgroup-label",
        checkboxradio: "input[type='checkbox'], input[type='radio']",
        selectmenu: "select",
        spinner: ".ui-spinner-input",
      },
    },
    _create: function () {
      this._enhance();
    },
    _enhance: function () {
      this.element.attr("role", "toolbar"), this.refresh();
    },
    _destroy: function () {
      this._callChildMethod("destroy"),
        this.childWidgets.removeData("ui-controlgroup-data"),
        this.element.removeAttr("role"),
        this.options.items.controlgroupLabel &&
          this.element
            .find(this.options.items.controlgroupLabel)
            .find(".ui-controlgroup-label-contents")
            .contents()
            .unwrap();
    },
    _initWidgets: function () {
      var o = this,
        a = [];
      V.each(this.options.items, function (s, t) {
        var e,
          n = {};
        if (t)
          return "controlgroupLabel" === s
            ? ((e = o.element.find(t)).each(function () {
                var t = V(this);
                t.children(".ui-controlgroup-label-contents").length ||
                  t
                    .contents()
                    .wrapAll(
                      "<span class='ui-controlgroup-label-contents'></span>"
                    );
              }),
              o._addClass(
                e,
                null,
                "ui-widget ui-widget-content ui-state-default"
              ),
              void (a = a.concat(e.get())))
            : void (
                V.fn[s] &&
                ((n = o["_" + s + "Options"]
                  ? o["_" + s + "Options"]("middle")
                  : { classes: {} }),
                o.element.find(t).each(function () {
                  var t = V(this),
                    e = t[s]("instance"),
                    i = V.widget.extend({}, n);
                  ("button" === s && t.parent(".ui-spinner").length) ||
                    ((e = e || t[s]()[s]("instance")) &&
                      (i.classes = o._resolveClassesValues(i.classes, e)),
                    t[s](i),
                    (i = t[s]("widget")),
                    V.data(i[0], "ui-controlgroup-data", e || t[s]("instance")),
                    a.push(i[0]));
                }))
              );
      }),
        (this.childWidgets = V(V.uniqueSort(a))),
        this._addClass(this.childWidgets, "ui-controlgroup-item");
    },
    _callChildMethod: function (e) {
      this.childWidgets.each(function () {
        var t = V(this).data("ui-controlgroup-data");
        t && t[e] && t[e]();
      });
    },
    _updateCornerClass: function (t, e) {
      e = this._buildSimpleOptions(e, "label").classes.label;
      this._removeClass(
        t,
        null,
        "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"
      ),
        this._addClass(t, null, e);
    },
    _buildSimpleOptions: function (t, e) {
      var i = "vertical" === this.options.direction,
        s = { classes: {} };
      return (
        (s.classes[e] = {
          middle: "",
          first: "ui-corner-" + (i ? "top" : "left"),
          last: "ui-corner-" + (i ? "bottom" : "right"),
          only: "ui-corner-all",
        }[t]),
        s
      );
    },
    _spinnerOptions: function (t) {
      t = this._buildSimpleOptions(t, "ui-spinner");
      return (
        (t.classes["ui-spinner-up"] = ""),
        (t.classes["ui-spinner-down"] = ""),
        t
      );
    },
    _buttonOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-button");
    },
    _checkboxradioOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-checkboxradio-label");
    },
    _selectmenuOptions: function (t) {
      var e = "vertical" === this.options.direction;
      return {
        width: e && "auto",
        classes: {
          middle: {
            "ui-selectmenu-button-open": "",
            "ui-selectmenu-button-closed": "",
          },
          first: {
            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left"),
          },
          last: {
            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
            "ui-selectmenu-button-closed":
              "ui-corner-" + (e ? "bottom" : "right"),
          },
          only: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all",
          },
        }[t],
      };
    },
    _resolveClassesValues: function (i, s) {
      var n = {};
      return (
        V.each(i, function (t) {
          var e = s.options.classes[t] || "",
            e = String.prototype.trim.call(e.replace(tt, ""));
          n[t] = (e + " " + i[t]).replace(/\s+/g, " ");
        }),
        n
      );
    },
    _setOption: function (t, e) {
      "direction" === t &&
        this._removeClass("ui-controlgroup-" + this.options.direction),
        this._super(t, e),
        "disabled" !== t
          ? this.refresh()
          : this._callChildMethod(e ? "disable" : "enable");
    },
    refresh: function () {
      var n,
        o = this;
      this._addClass(
        "ui-controlgroup ui-controlgroup-" + this.options.direction
      ),
        "horizontal" === this.options.direction &&
          this._addClass(null, "ui-helper-clearfix"),
        this._initWidgets(),
        (n = this.childWidgets),
        (n = this.options.onlyVisible ? n.filter(":visible") : n).length &&
          (V.each(["first", "last"], function (t, e) {
            var i,
              s = n[e]().data("ui-controlgroup-data");
            s && o["_" + s.widgetName + "Options"]
              ? (((i = o["_" + s.widgetName + "Options"](
                  1 === n.length ? "only" : e
                )).classes = o._resolveClassesValues(i.classes, s)),
                s.element[s.widgetName](i))
              : o._updateCornerClass(n[e](), e);
          }),
          this._callChildMethod("refresh"));
    },
  });
  V.widget("ui.checkboxradio", [
    V.ui.formResetMixin,
    {
      version: "1.13.2",
      options: {
        disabled: null,
        label: null,
        icon: !0,
        classes: {
          "ui-checkboxradio-label": "ui-corner-all",
          "ui-checkboxradio-icon": "ui-corner-all",
        },
      },
      _getCreateOptions: function () {
        var t,
          e = this._super() || {};
        return (
          this._readType(),
          (t = this.element.labels()),
          (this.label = V(t[t.length - 1])),
          this.label.length ||
            V.error("No label found for checkboxradio widget"),
          (this.originalLabel = ""),
          (t = this.label.contents().not(this.element[0])).length &&
            (this.originalLabel += t
              .clone()
              .wrapAll("<div></div>")
              .parent()
              .html()),
          this.originalLabel && (e.label = this.originalLabel),
          null != (t = this.element[0].disabled) && (e.disabled = t),
          e
        );
      },
      _create: function () {
        var t = this.element[0].checked;
        this._bindFormResetHandler(),
          null == this.options.disabled &&
            (this.options.disabled = this.element[0].disabled),
          this._setOption("disabled", this.options.disabled),
          this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
          this._addClass(
            this.label,
            "ui-checkboxradio-label",
            "ui-button ui-widget"
          ),
          "radio" === this.type &&
            this._addClass(this.label, "ui-checkboxradio-radio-label"),
          this.options.label && this.options.label !== this.originalLabel
            ? this._updateLabel()
            : this.originalLabel && (this.options.label = this.originalLabel),
          this._enhance(),
          t &&
            this._addClass(
              this.label,
              "ui-checkboxradio-checked",
              "ui-state-active"
            ),
          this._on({
            change: "_toggleClasses",
            focus: function () {
              this._addClass(
                this.label,
                null,
                "ui-state-focus ui-visual-focus"
              );
            },
            blur: function () {
              this._removeClass(
                this.label,
                null,
                "ui-state-focus ui-visual-focus"
              );
            },
          });
      },
      _readType: function () {
        var t = this.element[0].nodeName.toLowerCase();
        (this.type = this.element[0].type),
          ("input" === t && /radio|checkbox/.test(this.type)) ||
            V.error(
              "Can't create checkboxradio on element.nodeName=" +
                t +
                " and element.type=" +
                this.type
            );
      },
      _enhance: function () {
        this._updateIcon(this.element[0].checked);
      },
      widget: function () {
        return this.label;
      },
      _getRadioGroup: function () {
        var t = this.element[0].name,
          e = "input[name='" + V.escapeSelector(t) + "']";
        return t
          ? (this.form.length
              ? V(this.form[0].elements).filter(e)
              : V(e).filter(function () {
                  return 0 === V(this)._form().length;
                })
            ).not(this.element)
          : V([]);
      },
      _toggleClasses: function () {
        var t = this.element[0].checked;
        this._toggleClass(
          this.label,
          "ui-checkboxradio-checked",
          "ui-state-active",
          t
        ),
          this.options.icon &&
            "checkbox" === this.type &&
            this._toggleClass(
              this.icon,
              null,
              "ui-icon-check ui-state-checked",
              t
            )._toggleClass(this.icon, null, "ui-icon-blank", !t),
          "radio" === this.type &&
            this._getRadioGroup().each(function () {
              var t = V(this).checkboxradio("instance");
              t &&
                t._removeClass(
                  t.label,
                  "ui-checkboxradio-checked",
                  "ui-state-active"
                );
            });
      },
      _destroy: function () {
        this._unbindFormResetHandler(),
          this.icon && (this.icon.remove(), this.iconSpace.remove());
      },
      _setOption: function (t, e) {
        if ("label" !== t || e) {
          if ((this._super(t, e), "disabled" === t))
            return (
              this._toggleClass(this.label, null, "ui-state-disabled", e),
              void (this.element[0].disabled = e)
            );
          this.refresh();
        }
      },
      _updateIcon: function (t) {
        var e = "ui-icon ui-icon-background ";
        this.options.icon
          ? (this.icon ||
              ((this.icon = V("<span>")),
              (this.iconSpace = V("<span> </span>")),
              this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
            "checkbox" === this.type
              ? ((e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank"),
                this._removeClass(
                  this.icon,
                  null,
                  t ? "ui-icon-blank" : "ui-icon-check"
                ))
              : (e += "ui-icon-blank"),
            this._addClass(this.icon, "ui-checkboxradio-icon", e),
            t ||
              this._removeClass(
                this.icon,
                null,
                "ui-icon-check ui-state-checked"
              ),
            this.icon.prependTo(this.label).after(this.iconSpace))
          : void 0 !== this.icon &&
            (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
      },
      _updateLabel: function () {
        var t = this.label.contents().not(this.element[0]);
        this.icon && (t = t.not(this.icon[0])),
          (t = this.iconSpace ? t.not(this.iconSpace[0]) : t).remove(),
          this.label.append(this.options.label);
      },
      refresh: function () {
        var t = this.element[0].checked,
          e = this.element[0].disabled;
        this._updateIcon(t),
          this._toggleClass(
            this.label,
            "ui-checkboxradio-checked",
            "ui-state-active",
            t
          ),
          null !== this.options.label && this._updateLabel(),
          e !== this.options.disabled && this._setOptions({ disabled: e });
      },
    },
  ]);
  var et;
  V.ui.checkboxradio;
  V.widget("ui.button", {
    version: "1.13.2",
    defaultElement: "<button>",
    options: {
      classes: { "ui-button": "ui-corner-all" },
      disabled: null,
      icon: null,
      iconPosition: "beginning",
      label: null,
      showLabel: !0,
    },
    _getCreateOptions: function () {
      var t,
        e = this._super() || {};
      return (
        (this.isInput = this.element.is("input")),
        null != (t = this.element[0].disabled) && (e.disabled = t),
        (this.originalLabel = this.isInput
          ? this.element.val()
          : this.element.html()),
        this.originalLabel && (e.label = this.originalLabel),
        e
      );
    },
    _create: function () {
      !this.option.showLabel & !this.options.icon &&
        (this.options.showLabel = !0),
        null == this.options.disabled &&
          (this.options.disabled = this.element[0].disabled || !1),
        (this.hasTitle = !!this.element.attr("title")),
        this.options.label &&
          this.options.label !== this.originalLabel &&
          (this.isInput
            ? this.element.val(this.options.label)
            : this.element.html(this.options.label)),
        this._addClass("ui-button", "ui-widget"),
        this._setOption("disabled", this.options.disabled),
        this._enhance(),
        this.element.is("a") &&
          this._on({
            keyup: function (t) {
              t.keyCode === V.ui.keyCode.SPACE &&
                (t.preventDefault(),
                this.element[0].click
                  ? this.element[0].click()
                  : this.element.trigger("click"));
            },
          });
    },
    _enhance: function () {
      this.element.is("button") || this.element.attr("role", "button"),
        this.options.icon &&
          (this._updateIcon("icon", this.options.icon), this._updateTooltip());
    },
    _updateTooltip: function () {
      (this.title = this.element.attr("title")),
        this.options.showLabel ||
          this.title ||
          this.element.attr("title", this.options.label);
    },
    _updateIcon: function (t, e) {
      var i = "iconPosition" !== t,
        s = i ? this.options.iconPosition : e,
        t = "top" === s || "bottom" === s;
      this.icon
        ? i && this._removeClass(this.icon, null, this.options.icon)
        : ((this.icon = V("<span>")),
          this._addClass(this.icon, "ui-button-icon", "ui-icon"),
          this.options.showLabel || this._addClass("ui-button-icon-only")),
        i && this._addClass(this.icon, null, e),
        this._attachIcon(s),
        t
          ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
            this.iconSpace && this.iconSpace.remove())
          : (this.iconSpace ||
              ((this.iconSpace = V("<span> </span>")),
              this._addClass(this.iconSpace, "ui-button-icon-space")),
            this._removeClass(this.icon, null, "ui-wiget-icon-block"),
            this._attachIconSpace(s));
    },
    _destroy: function () {
      this.element.removeAttr("role"),
        this.icon && this.icon.remove(),
        this.iconSpace && this.iconSpace.remove(),
        this.hasTitle || this.element.removeAttr("title");
    },
    _attachIconSpace: function (t) {
      this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
    },
    _attachIcon: function (t) {
      this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
    },
    _setOptions: function (t) {
      var e = (void 0 === t.showLabel ? this.options : t).showLabel,
        i = (void 0 === t.icon ? this.options : t).icon;
      e || i || (t.showLabel = !0), this._super(t);
    },
    _setOption: function (t, e) {
      "icon" === t &&
        (e
          ? this._updateIcon(t, e)
          : this.icon &&
            (this.icon.remove(), this.iconSpace && this.iconSpace.remove())),
        "iconPosition" === t && this._updateIcon(t, e),
        "showLabel" === t &&
          (this._toggleClass("ui-button-icon-only", null, !e),
          this._updateTooltip()),
        "label" === t &&
          (this.isInput
            ? this.element.val(e)
            : (this.element.html(e),
              this.icon &&
                (this._attachIcon(this.options.iconPosition),
                this._attachIconSpace(this.options.iconPosition)))),
        this._super(t, e),
        "disabled" === t &&
          (this._toggleClass(null, "ui-state-disabled", e),
          (this.element[0].disabled = e) && this.element.trigger("blur"));
    },
    refresh: function () {
      var t = this.element.is("input, button")
        ? this.element[0].disabled
        : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOptions({ disabled: t }),
        this._updateTooltip();
    },
  }),
    !1 !== V.uiBackCompat &&
      (V.widget("ui.button", V.ui.button, {
        options: { text: !0, icons: { primary: null, secondary: null } },
        _create: function () {
          this.options.showLabel &&
            !this.options.text &&
            (this.options.showLabel = this.options.text),
            !this.options.showLabel &&
              this.options.text &&
              (this.options.text = this.options.showLabel),
            this.options.icon ||
            (!this.options.icons.primary && !this.options.icons.secondary)
              ? this.options.icon &&
                (this.options.icons.primary = this.options.icon)
              : this.options.icons.primary
              ? (this.options.icon = this.options.icons.primary)
              : ((this.options.icon = this.options.icons.secondary),
                (this.options.iconPosition = "end")),
            this._super();
        },
        _setOption: function (t, e) {
          "text" !== t
            ? ("showLabel" === t && (this.options.text = e),
              "icon" === t && (this.options.icons.primary = e),
              "icons" === t &&
                (e.primary
                  ? (this._super("icon", e.primary),
                    this._super("iconPosition", "beginning"))
                  : e.secondary &&
                    (this._super("icon", e.secondary),
                    this._super("iconPosition", "end"))),
              this._superApply(arguments))
            : this._super("showLabel", e);
        },
      }),
      (V.fn.button =
        ((et = V.fn.button),
        function (i) {
          var t = "string" == typeof i,
            s = Array.prototype.slice.call(arguments, 1),
            n = this;
          return (
            t
              ? this.length || "instance" !== i
                ? this.each(function () {
                    var t = V(this).attr("type"),
                      e = V.data(
                        this,
                        "ui-" +
                          ("checkbox" !== t && "radio" !== t
                            ? "button"
                            : "checkboxradio")
                      );
                    return "instance" === i
                      ? ((n = e), !1)
                      : e
                      ? "function" != typeof e[i] || "_" === i.charAt(0)
                        ? V.error(
                            "no such method '" +
                              i +
                              "' for button widget instance"
                          )
                        : (t = e[i].apply(e, s)) !== e && void 0 !== t
                        ? ((n = t && t.jquery ? n.pushStack(t.get()) : t), !1)
                        : void 0
                      : V.error(
                          "cannot call methods on button prior to initialization; attempted to call method '" +
                            i +
                            "'"
                        );
                  })
                : (n = void 0)
              : (s.length && (i = V.widget.extend.apply(null, [i].concat(s))),
                this.each(function () {
                  var t = V(this).attr("type"),
                    e =
                      "checkbox" !== t && "radio" !== t
                        ? "button"
                        : "checkboxradio",
                    t = V.data(this, "ui-" + e);
                  t
                    ? (t.option(i || {}), t._init && t._init())
                    : "button" != e
                    ? V(this).checkboxradio(V.extend({ icon: !1 }, i))
                    : et.call(V(this), i);
                })),
            n
          );
        })),
      (V.fn.buttonset = function () {
        return (
          V.ui.controlgroup || V.error("Controlgroup widget missing"),
          "option" === arguments[0] && "items" === arguments[1] && arguments[2]
            ? this.controlgroup.apply(this, [
                arguments[0],
                "items.button",
                arguments[2],
              ])
            : "option" === arguments[0] && "items" === arguments[1]
            ? this.controlgroup.apply(this, [arguments[0], "items.button"])
            : ("object" == typeof arguments[0] &&
                arguments[0].items &&
                (arguments[0].items = { button: arguments[0].items }),
              this.controlgroup.apply(this, arguments))
        );
      }));
  var it;
  V.ui.button;
  function st() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = "ui-datepicker-div"),
      (this._inlineClass = "ui-datepicker-inline"),
      (this._appendClass = "ui-datepicker-append"),
      (this._triggerClass = "ui-datepicker-trigger"),
      (this._dialogClass = "ui-datepicker-dialog"),
      (this._disableClass = "ui-datepicker-disabled"),
      (this._unselectableClass = "ui-datepicker-unselectable"),
      (this._currentClass = "ui-datepicker-current-day"),
      (this._dayOverClass = "ui-datepicker-days-cell-over"),
      (this.regional = []),
      (this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthNamesShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        dayNames: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: "",
        selectMonthLabel: "Select month",
        selectYearLabel: "Select year",
      }),
      (this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        onUpdateDatepicker: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1,
      }),
      V.extend(this._defaults, this.regional[""]),
      (this.regional.en = V.extend(!0, {}, this.regional[""])),
      (this.regional["en-US"] = V.extend(!0, {}, this.regional.en)),
      (this.dpDiv = nt(
        V(
          "<div id='" +
            this._mainDivId +
            "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
        )
      ));
  }
  function nt(t) {
    var e =
      "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return t
      .on("mouseout", e, function () {
        V(this).removeClass("ui-state-hover"),
          -1 !== this.className.indexOf("ui-datepicker-prev") &&
            V(this).removeClass("ui-datepicker-prev-hover"),
          -1 !== this.className.indexOf("ui-datepicker-next") &&
            V(this).removeClass("ui-datepicker-next-hover");
      })
      .on("mouseover", e, ot);
  }
  function ot() {
    V.datepicker._isDisabledDatepicker(
      (it.inline ? it.dpDiv.parent() : it.input)[0]
    ) ||
      (V(this)
        .parents(".ui-datepicker-calendar")
        .find("a")
        .removeClass("ui-state-hover"),
      V(this).addClass("ui-state-hover"),
      -1 !== this.className.indexOf("ui-datepicker-prev") &&
        V(this).addClass("ui-datepicker-prev-hover"),
      -1 !== this.className.indexOf("ui-datepicker-next") &&
        V(this).addClass("ui-datepicker-next-hover"));
  }
  function at(t, e) {
    for (var i in (V.extend(t, e), e)) null == e[i] && (t[i] = e[i]);
    return t;
  }
  V.extend(V.ui, { datepicker: { version: "1.13.2" } }),
    V.extend(st.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (t) {
        return at(this._defaults, t || {}), this;
      },
      _attachDatepicker: function (t, e) {
        var i,
          s = t.nodeName.toLowerCase(),
          n = "div" === s || "span" === s;
        t.id || ((this.uuid += 1), (t.id = "dp" + this.uuid)),
          ((i = this._newInst(V(t), n)).settings = V.extend({}, e || {})),
          "input" === s
            ? this._connectDatepicker(t, i)
            : n && this._inlineDatepicker(t, i);
      },
      _newInst: function (t, e) {
        return {
          id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
          input: t,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: e,
          dpDiv: e
            ? nt(
                V(
                  "<div class='" +
                    this._inlineClass +
                    " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                )
              )
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (t, e) {
        var i = V(t);
        (e.append = V([])),
          (e.trigger = V([])),
          i.hasClass(this.markerClassName) ||
            (this._attachments(i, e),
            i
              .addClass(this.markerClassName)
              .on("keydown", this._doKeyDown)
              .on("keypress", this._doKeyPress)
              .on("keyup", this._doKeyUp),
            this._autoSize(e),
            V.data(t, "datepicker", e),
            e.settings.disabled && this._disableDatepicker(t));
      },
      _attachments: function (t, e) {
        var i,
          s = this._get(e, "appendText"),
          n = this._get(e, "isRTL");
        e.append && e.append.remove(),
          s &&
            ((e.append = V("<span>").addClass(this._appendClass).text(s)),
            t[n ? "before" : "after"](e.append)),
          t.off("focus", this._showDatepicker),
          e.trigger && e.trigger.remove(),
          ("focus" !== (i = this._get(e, "showOn")) && "both" !== i) ||
            t.on("focus", this._showDatepicker),
          ("button" !== i && "both" !== i) ||
            ((s = this._get(e, "buttonText")),
            (i = this._get(e, "buttonImage")),
            this._get(e, "buttonImageOnly")
              ? (e.trigger = V("<img>")
                  .addClass(this._triggerClass)
                  .attr({ src: i, alt: s, title: s }))
              : ((e.trigger = V("<button type='button'>").addClass(
                  this._triggerClass
                )),
                i
                  ? e.trigger.html(
                      V("<img>").attr({ src: i, alt: s, title: s })
                    )
                  : e.trigger.text(s)),
            t[n ? "before" : "after"](e.trigger),
            e.trigger.on("click", function () {
              return (
                V.datepicker._datepickerShowing &&
                V.datepicker._lastInput === t[0]
                  ? V.datepicker._hideDatepicker()
                  : (V.datepicker._datepickerShowing &&
                      V.datepicker._lastInput !== t[0] &&
                      V.datepicker._hideDatepicker(),
                    V.datepicker._showDatepicker(t[0])),
                !1
              );
            }));
      },
      _autoSize: function (t) {
        var e, i, s, n, o, a;
        this._get(t, "autoSize") &&
          !t.inline &&
          ((o = new Date(2009, 11, 20)),
          (a = this._get(t, "dateFormat")).match(/[DM]/) &&
            ((e = function (t) {
              for (n = s = i = 0; n < t.length; n++)
                t[n].length > i && ((i = t[n].length), (s = n));
              return s;
            }),
            o.setMonth(
              e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))
            ),
            o.setDate(
              e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                20 -
                o.getDay()
            )),
          t.input.attr("size", this._formatDate(t, o).length));
      },
      _inlineDatepicker: function (t, e) {
        var i = V(t);
        i.hasClass(this.markerClassName) ||
          (i.addClass(this.markerClassName).append(e.dpDiv),
          V.data(t, "datepicker", e),
          this._setDate(e, this._getDefaultDate(e), !0),
          this._updateDatepicker(e),
          this._updateAlternate(e),
          e.settings.disabled && this._disableDatepicker(t),
          e.dpDiv.css("display", "block"));
      },
      _dialogDatepicker: function (t, e, i, s, n) {
        var o,
          a = this._dialogInst;
        return (
          a ||
            ((this.uuid += 1),
            (o = "dp" + this.uuid),
            (this._dialogInput = V(
              "<input type='text' id='" +
                o +
                "' style='position: absolute; top: -100px; width: 0px;'/>"
            )),
            this._dialogInput.on("keydown", this._doKeyDown),
            V("body").append(this._dialogInput),
            ((a = this._dialogInst =
              this._newInst(this._dialogInput, !1)).settings = {}),
            V.data(this._dialogInput[0], "datepicker", a)),
          at(a.settings, s || {}),
          (e = e && e.constructor === Date ? this._formatDate(a, e) : e),
          this._dialogInput.val(e),
          (this._pos = n ? (n.length ? n : [n.pageX, n.pageY]) : null),
          this._pos ||
            ((o = document.documentElement.clientWidth),
            (s = document.documentElement.clientHeight),
            (e =
              document.documentElement.scrollLeft || document.body.scrollLeft),
            (n = document.documentElement.scrollTop || document.body.scrollTop),
            (this._pos = [o / 2 - 100 + e, s / 2 - 150 + n])),
          this._dialogInput
            .css("left", this._pos[0] + 20 + "px")
            .css("top", this._pos[1] + "px"),
          (a.settings.onSelect = i),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          V.blockUI && V.blockUI(this.dpDiv),
          V.data(this._dialogInput[0], "datepicker", a),
          this
        );
      },
      _destroyDatepicker: function (t) {
        var e,
          i = V(t),
          s = V.data(t, "datepicker");
        i.hasClass(this.markerClassName) &&
          ((e = t.nodeName.toLowerCase()),
          V.removeData(t, "datepicker"),
          "input" === e
            ? (s.append.remove(),
              s.trigger.remove(),
              i
                .removeClass(this.markerClassName)
                .off("focus", this._showDatepicker)
                .off("keydown", this._doKeyDown)
                .off("keypress", this._doKeyPress)
                .off("keyup", this._doKeyUp))
            : ("div" !== e && "span" !== e) ||
              i.removeClass(this.markerClassName).empty(),
          it === s && ((it = null), (this._curInst = null)));
      },
      _enableDatepicker: function (e) {
        var t,
          i = V(e),
          s = V.data(e, "datepicker");
        i.hasClass(this.markerClassName) &&
          ("input" === (t = e.nodeName.toLowerCase())
            ? ((e.disabled = !1),
              s.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !1;
                })
                .end()
                .filter("img")
                .css({ opacity: "1.0", cursor: "" }))
            : ("div" !== t && "span" !== t) ||
              ((i = i.children("." + this._inlineClass))
                .children()
                .removeClass("ui-state-disabled"),
              i
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !1)),
          (this._disabledInputs = V.map(this._disabledInputs, function (t) {
            return t === e ? null : t;
          })));
      },
      _disableDatepicker: function (e) {
        var t,
          i = V(e),
          s = V.data(e, "datepicker");
        i.hasClass(this.markerClassName) &&
          ("input" === (t = e.nodeName.toLowerCase())
            ? ((e.disabled = !0),
              s.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !0;
                })
                .end()
                .filter("img")
                .css({ opacity: "0.5", cursor: "default" }))
            : ("div" !== t && "span" !== t) ||
              ((i = i.children("." + this._inlineClass))
                .children()
                .addClass("ui-state-disabled"),
              i
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !0)),
          (this._disabledInputs = V.map(this._disabledInputs, function (t) {
            return t === e ? null : t;
          })),
          (this._disabledInputs[this._disabledInputs.length] = e));
      },
      _isDisabledDatepicker: function (t) {
        if (!t) return !1;
        for (var e = 0; e < this._disabledInputs.length; e++)
          if (this._disabledInputs[e] === t) return !0;
        return !1;
      },
      _getInst: function (t) {
        try {
          return V.data(t, "datepicker");
        } catch (t) {
          throw "Missing instance data for this datepicker";
        }
      },
      _optionDatepicker: function (t, e, i) {
        var s,
          n,
          o = this._getInst(t);
        if (2 === arguments.length && "string" == typeof e)
          return "defaults" === e
            ? V.extend({}, V.datepicker._defaults)
            : o
            ? "all" === e
              ? V.extend({}, o.settings)
              : this._get(o, e)
            : null;
        (s = e || {}),
          "string" == typeof e && ((s = {})[e] = i),
          o &&
            (this._curInst === o && this._hideDatepicker(),
            (n = this._getDateDatepicker(t, !0)),
            (e = this._getMinMaxDate(o, "min")),
            (i = this._getMinMaxDate(o, "max")),
            at(o.settings, s),
            null !== e &&
              void 0 !== s.dateFormat &&
              void 0 === s.minDate &&
              (o.settings.minDate = this._formatDate(o, e)),
            null !== i &&
              void 0 !== s.dateFormat &&
              void 0 === s.maxDate &&
              (o.settings.maxDate = this._formatDate(o, i)),
            "disabled" in s &&
              (s.disabled
                ? this._disableDatepicker(t)
                : this._enableDatepicker(t)),
            this._attachments(V(t), o),
            this._autoSize(o),
            this._setDate(o, n),
            this._updateAlternate(o),
            this._updateDatepicker(o));
      },
      _changeDatepicker: function (t, e, i) {
        this._optionDatepicker(t, e, i);
      },
      _refreshDatepicker: function (t) {
        t = this._getInst(t);
        t && this._updateDatepicker(t);
      },
      _setDateDatepicker: function (t, e) {
        t = this._getInst(t);
        t &&
          (this._setDate(t, e),
          this._updateDatepicker(t),
          this._updateAlternate(t));
      },
      _getDateDatepicker: function (t, e) {
        t = this._getInst(t);
        return (
          t && !t.inline && this._setDateFromField(t, e),
          t ? this._getDate(t) : null
        );
      },
      _doKeyDown: function (t) {
        var e,
          i,
          s = V.datepicker._getInst(t.target),
          n = !0,
          o = s.dpDiv.is(".ui-datepicker-rtl");
        if (((s._keyEvent = !0), V.datepicker._datepickerShowing))
          switch (t.keyCode) {
            case 9:
              V.datepicker._hideDatepicker(), (n = !1);
              break;
            case 13:
              return (
                (i = V(
                  "td." +
                    V.datepicker._dayOverClass +
                    ":not(." +
                    V.datepicker._currentClass +
                    ")",
                  s.dpDiv
                ))[0] &&
                  V.datepicker._selectDay(
                    t.target,
                    s.selectedMonth,
                    s.selectedYear,
                    i[0]
                  ),
                (e = V.datepicker._get(s, "onSelect"))
                  ? ((i = V.datepicker._formatDate(s)),
                    e.apply(s.input ? s.input[0] : null, [i, s]))
                  : V.datepicker._hideDatepicker(),
                !1
              );
            case 27:
              V.datepicker._hideDatepicker();
              break;
            case 33:
              V.datepicker._adjustDate(
                t.target,
                t.ctrlKey
                  ? -V.datepicker._get(s, "stepBigMonths")
                  : -V.datepicker._get(s, "stepMonths"),
                "M"
              );
              break;
            case 34:
              V.datepicker._adjustDate(
                t.target,
                t.ctrlKey
                  ? +V.datepicker._get(s, "stepBigMonths")
                  : +V.datepicker._get(s, "stepMonths"),
                "M"
              );
              break;
            case 35:
              (t.ctrlKey || t.metaKey) && V.datepicker._clearDate(t.target),
                (n = t.ctrlKey || t.metaKey);
              break;
            case 36:
              (t.ctrlKey || t.metaKey) && V.datepicker._gotoToday(t.target),
                (n = t.ctrlKey || t.metaKey);
              break;
            case 37:
              (t.ctrlKey || t.metaKey) &&
                V.datepicker._adjustDate(t.target, o ? 1 : -1, "D"),
                (n = t.ctrlKey || t.metaKey),
                t.originalEvent.altKey &&
                  V.datepicker._adjustDate(
                    t.target,
                    t.ctrlKey
                      ? -V.datepicker._get(s, "stepBigMonths")
                      : -V.datepicker._get(s, "stepMonths"),
                    "M"
                  );
              break;
            case 38:
              (t.ctrlKey || t.metaKey) &&
                V.datepicker._adjustDate(t.target, -7, "D"),
                (n = t.ctrlKey || t.metaKey);
              break;
            case 39:
              (t.ctrlKey || t.metaKey) &&
                V.datepicker._adjustDate(t.target, o ? -1 : 1, "D"),
                (n = t.ctrlKey || t.metaKey),
                t.originalEvent.altKey &&
                  V.datepicker._adjustDate(
                    t.target,
                    t.ctrlKey
                      ? +V.datepicker._get(s, "stepBigMonths")
                      : +V.datepicker._get(s, "stepMonths"),
                    "M"
                  );
              break;
            case 40:
              (t.ctrlKey || t.metaKey) &&
                V.datepicker._adjustDate(t.target, 7, "D"),
                (n = t.ctrlKey || t.metaKey);
              break;
            default:
              n = !1;
          }
        else
          36 === t.keyCode && t.ctrlKey
            ? V.datepicker._showDatepicker(this)
            : (n = !1);
        n && (t.preventDefault(), t.stopPropagation());
      },
      _doKeyPress: function (t) {
        var e,
          i = V.datepicker._getInst(t.target);
        if (V.datepicker._get(i, "constrainInput"))
          return (
            (e = V.datepicker._possibleChars(
              V.datepicker._get(i, "dateFormat")
            )),
            (i = String.fromCharCode(
              null == t.charCode ? t.keyCode : t.charCode
            )),
            t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i)
          );
      },
      _doKeyUp: function (t) {
        t = V.datepicker._getInst(t.target);
        if (t.input.val() !== t.lastVal)
          try {
            V.datepicker.parseDate(
              V.datepicker._get(t, "dateFormat"),
              t.input ? t.input.val() : null,
              V.datepicker._getFormatConfig(t)
            ) &&
              (V.datepicker._setDateFromField(t),
              V.datepicker._updateAlternate(t),
              V.datepicker._updateDatepicker(t));
          } catch (t) {}
        return !0;
      },
      _showDatepicker: function (t) {
        var e, i, s, n;
        "input" !== (t = t.target || t).nodeName.toLowerCase() &&
          (t = V("input", t.parentNode)[0]),
          V.datepicker._isDisabledDatepicker(t) ||
            V.datepicker._lastInput === t ||
            ((n = V.datepicker._getInst(t)),
            V.datepicker._curInst &&
              V.datepicker._curInst !== n &&
              (V.datepicker._curInst.dpDiv.stop(!0, !0),
              n &&
                V.datepicker._datepickerShowing &&
                V.datepicker._hideDatepicker(V.datepicker._curInst.input[0])),
            !1 !==
              (i = (s = V.datepicker._get(n, "beforeShow"))
                ? s.apply(t, [t, n])
                : {}) &&
              (at(n.settings, i),
              (n.lastVal = null),
              (V.datepicker._lastInput = t),
              V.datepicker._setDateFromField(n),
              V.datepicker._inDialog && (t.value = ""),
              V.datepicker._pos ||
                ((V.datepicker._pos = V.datepicker._findPos(t)),
                (V.datepicker._pos[1] += t.offsetHeight)),
              (e = !1),
              V(t)
                .parents()
                .each(function () {
                  return !(e |= "fixed" === V(this).css("position"));
                }),
              (s = { left: V.datepicker._pos[0], top: V.datepicker._pos[1] }),
              (V.datepicker._pos = null),
              n.dpDiv.empty(),
              n.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px",
              }),
              V.datepicker._updateDatepicker(n),
              (s = V.datepicker._checkOffset(n, s, e)),
              n.dpDiv.css({
                position:
                  V.datepicker._inDialog && V.blockUI
                    ? "static"
                    : e
                    ? "fixed"
                    : "absolute",
                display: "none",
                left: s.left + "px",
                top: s.top + "px",
              }),
              n.inline ||
                ((i = V.datepicker._get(n, "showAnim")),
                (s = V.datepicker._get(n, "duration")),
                n.dpDiv.css(
                  "z-index",
                  (function (t) {
                    for (var e, i; t.length && t[0] !== document; ) {
                      if (
                        ("absolute" === (e = t.css("position")) ||
                          "relative" === e ||
                          "fixed" === e) &&
                        ((i = parseInt(t.css("zIndex"), 10)),
                        !isNaN(i) && 0 !== i)
                      )
                        return i;
                      t = t.parent();
                    }
                    return 0;
                  })(V(t)) + 1
                ),
                (V.datepicker._datepickerShowing = !0),
                V.effects && V.effects.effect[i]
                  ? n.dpDiv.show(i, V.datepicker._get(n, "showOptions"), s)
                  : n.dpDiv[i || "show"](i ? s : null),
                V.datepicker._shouldFocusInput(n) && n.input.trigger("focus"),
                (V.datepicker._curInst = n))));
      },
      _updateDatepicker: function (t) {
        (this.maxRows = 4),
          (it = t).dpDiv.empty().append(this._generateHTML(t)),
          this._attachHandlers(t);
        var e,
          i = this._getNumberOfMonths(t),
          s = i[1],
          n = t.dpDiv.find("." + this._dayOverClass + " a"),
          o = V.datepicker._get(t, "onUpdateDatepicker");
        0 < n.length && ot.apply(n.get(0)),
          t.dpDiv
            .removeClass(
              "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
            )
            .width(""),
          1 < s &&
            t.dpDiv
              .addClass("ui-datepicker-multi-" + s)
              .css("width", 17 * s + "em"),
          t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"](
            "ui-datepicker-multi"
          ),
          t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"](
            "ui-datepicker-rtl"
          ),
          t === V.datepicker._curInst &&
            V.datepicker._datepickerShowing &&
            V.datepicker._shouldFocusInput(t) &&
            t.input.trigger("focus"),
          t.yearshtml &&
            ((e = t.yearshtml),
            setTimeout(function () {
              e === t.yearshtml &&
                t.yearshtml &&
                t.dpDiv
                  .find("select.ui-datepicker-year")
                  .first()
                  .replaceWith(t.yearshtml),
                (e = t.yearshtml = null);
            }, 0)),
          o && o.apply(t.input ? t.input[0] : null, [t]);
      },
      _shouldFocusInput: function (t) {
        return (
          t.input &&
          t.input.is(":visible") &&
          !t.input.is(":disabled") &&
          !t.input.is(":focus")
        );
      },
      _checkOffset: function (t, e, i) {
        var s = t.dpDiv.outerWidth(),
          n = t.dpDiv.outerHeight(),
          o = t.input ? t.input.outerWidth() : 0,
          a = t.input ? t.input.outerHeight() : 0,
          r =
            document.documentElement.clientWidth +
            (i ? 0 : V(document).scrollLeft()),
          l =
            document.documentElement.clientHeight +
            (i ? 0 : V(document).scrollTop());
        return (
          (e.left -= this._get(t, "isRTL") ? s - o : 0),
          (e.left -=
            i && e.left === t.input.offset().left
              ? V(document).scrollLeft()
              : 0),
          (e.top -=
            i && e.top === t.input.offset().top + a
              ? V(document).scrollTop()
              : 0),
          (e.left -= Math.min(
            e.left,
            e.left + s > r && s < r ? Math.abs(e.left + s - r) : 0
          )),
          (e.top -= Math.min(
            e.top,
            e.top + n > l && n < l ? Math.abs(n + a) : 0
          )),
          e
        );
      },
      _findPos: function (t) {
        for (
          var e = this._getInst(t), i = this._get(e, "isRTL");
          t &&
          ("hidden" === t.type || 1 !== t.nodeType || V.expr.pseudos.hidden(t));

        )
          t = t[i ? "previousSibling" : "nextSibling"];
        return [(e = V(t).offset()).left, e.top];
      },
      _hideDatepicker: function (t) {
        var e,
          i,
          s = this._curInst;
        !s ||
          (t && s !== V.data(t, "datepicker")) ||
          (this._datepickerShowing &&
            ((e = this._get(s, "showAnim")),
            (i = this._get(s, "duration")),
            (t = function () {
              V.datepicker._tidyDialog(s);
            }),
            V.effects && (V.effects.effect[e] || V.effects[e])
              ? s.dpDiv.hide(e, V.datepicker._get(s, "showOptions"), i, t)
              : s.dpDiv[
                  "slideDown" === e
                    ? "slideUp"
                    : "fadeIn" === e
                    ? "fadeOut"
                    : "hide"
                ](e ? i : null, t),
            e || t(),
            (this._datepickerShowing = !1),
            (t = this._get(s, "onClose")) &&
              t.apply(s.input ? s.input[0] : null, [
                s.input ? s.input.val() : "",
                s,
              ]),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px",
              }),
              V.blockUI && (V.unblockUI(), V("body").append(this.dpDiv))),
            (this._inDialog = !1)));
      },
      _tidyDialog: function (t) {
        t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
      },
      _checkExternalClick: function (t) {
        var e;
        V.datepicker._curInst &&
          ((e = V(t.target)),
          (t = V.datepicker._getInst(e[0])),
          ((e[0].id === V.datepicker._mainDivId ||
            0 !== e.parents("#" + V.datepicker._mainDivId).length ||
            e.hasClass(V.datepicker.markerClassName) ||
            e.closest("." + V.datepicker._triggerClass).length ||
            !V.datepicker._datepickerShowing ||
            (V.datepicker._inDialog && V.blockUI)) &&
            (!e.hasClass(V.datepicker.markerClassName) ||
              V.datepicker._curInst === t)) ||
            V.datepicker._hideDatepicker());
      },
      _adjustDate: function (t, e, i) {
        var s = V(t),
          t = this._getInst(s[0]);
        this._isDisabledDatepicker(s[0]) ||
          (this._adjustInstDate(t, e, i), this._updateDatepicker(t));
      },
      _gotoToday: function (t) {
        var e = V(t),
          i = this._getInst(e[0]);
        this._get(i, "gotoCurrent") && i.currentDay
          ? ((i.selectedDay = i.currentDay),
            (i.drawMonth = i.selectedMonth = i.currentMonth),
            (i.drawYear = i.selectedYear = i.currentYear))
          : ((t = new Date()),
            (i.selectedDay = t.getDate()),
            (i.drawMonth = i.selectedMonth = t.getMonth()),
            (i.drawYear = i.selectedYear = t.getFullYear())),
          this._notifyChange(i),
          this._adjustDate(e);
      },
      _selectMonthYear: function (t, e, i) {
        var s = V(t),
          t = this._getInst(s[0]);
        (t["selected" + ("M" === i ? "Month" : "Year")] = t[
          "draw" + ("M" === i ? "Month" : "Year")
        ] =
          parseInt(e.options[e.selectedIndex].value, 10)),
          this._notifyChange(t),
          this._adjustDate(s);
      },
      _selectDay: function (t, e, i, s) {
        var n = V(t);
        V(s).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(n[0]) ||
          (((n = this._getInst(n[0])).selectedDay = n.currentDay =
            parseInt(V("a", s).attr("data-date"))),
          (n.selectedMonth = n.currentMonth = e),
          (n.selectedYear = n.currentYear = i),
          this._selectDate(
            t,
            this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)
          ));
      },
      _clearDate: function (t) {
        t = V(t);
        this._selectDate(t, "");
      },
      _selectDate: function (t, e) {
        var i = V(t),
          t = this._getInst(i[0]);
        (e = null != e ? e : this._formatDate(t)),
          t.input && t.input.val(e),
          this._updateAlternate(t),
          (i = this._get(t, "onSelect"))
            ? i.apply(t.input ? t.input[0] : null, [e, t])
            : t.input && t.input.trigger("change"),
          t.inline
            ? this._updateDatepicker(t)
            : (this._hideDatepicker(),
              (this._lastInput = t.input[0]),
              "object" != typeof t.input[0] && t.input.trigger("focus"),
              (this._lastInput = null));
      },
      _updateAlternate: function (t) {
        var e,
          i,
          s = this._get(t, "altField");
        s &&
          ((e = this._get(t, "altFormat") || this._get(t, "dateFormat")),
          (i = this._getDate(t)),
          (t = this.formatDate(e, i, this._getFormatConfig(t))),
          V(document).find(s).val(t));
      },
      noWeekends: function (t) {
        t = t.getDay();
        return [0 < t && t < 6, ""];
      },
      iso8601Week: function (t) {
        var e = new Date(t.getTime());
        return (
          e.setDate(e.getDate() + 4 - (e.getDay() || 7)),
          (t = e.getTime()),
          e.setMonth(0),
          e.setDate(1),
          Math.floor(Math.round((t - e) / 864e5) / 7) + 1
        );
      },
      parseDate: function (e, n, t) {
        if (null == e || null == n) throw "Invalid arguments";
        if ("" === (n = "object" == typeof n ? n.toString() : n + ""))
          return null;
        for (
          var i,
            s,
            o,
            a = 0,
            r =
              (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            r =
              "string" != typeof r
                ? r
                : (new Date().getFullYear() % 100) + parseInt(r, 10),
            l = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
            h = (t ? t.dayNames : null) || this._defaults.dayNames,
            c =
              (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
            u = (t ? t.monthNames : null) || this._defaults.monthNames,
            d = -1,
            p = -1,
            f = -1,
            g = -1,
            m = !1,
            _ = function (t) {
              t = w + 1 < e.length && e.charAt(w + 1) === t;
              return t && w++, t;
            },
            v = function (t) {
              var e = _(t),
                e =
                  "@" === t
                    ? 14
                    : "!" === t
                    ? 20
                    : "y" === t && e
                    ? 4
                    : "o" === t
                    ? 3
                    : 2,
                e = new RegExp("^\\d{" + ("y" === t ? e : 1) + "," + e + "}"),
                e = n.substring(a).match(e);
              if (!e) throw "Missing number at position " + a;
              return (a += e[0].length), parseInt(e[0], 10);
            },
            b = function (t, e, i) {
              var s = -1,
                e = V.map(_(t) ? i : e, function (t, e) {
                  return [[e, t]];
                }).sort(function (t, e) {
                  return -(t[1].length - e[1].length);
                });
              if (
                (V.each(e, function (t, e) {
                  var i = e[1];
                  if (n.substr(a, i.length).toLowerCase() === i.toLowerCase())
                    return (s = e[0]), (a += i.length), !1;
                }),
                -1 !== s)
              )
                return s + 1;
              throw "Unknown name at position " + a;
            },
            y = function () {
              if (n.charAt(a) !== e.charAt(w))
                throw "Unexpected literal at position " + a;
              a++;
            },
            w = 0;
          w < e.length;
          w++
        )
          if (m) "'" !== e.charAt(w) || _("'") ? y() : (m = !1);
          else
            switch (e.charAt(w)) {
              case "d":
                f = v("d");
                break;
              case "D":
                b("D", l, h);
                break;
              case "o":
                g = v("o");
                break;
              case "m":
                p = v("m");
                break;
              case "M":
                p = b("M", c, u);
                break;
              case "y":
                d = v("y");
                break;
              case "@":
                (d = (o = new Date(v("@"))).getFullYear()),
                  (p = o.getMonth() + 1),
                  (f = o.getDate());
                break;
              case "!":
                (d = (o = new Date(
                  (v("!") - this._ticksTo1970) / 1e4
                )).getFullYear()),
                  (p = o.getMonth() + 1),
                  (f = o.getDate());
                break;
              case "'":
                _("'") ? y() : (m = !0);
                break;
              default:
                y();
            }
        if (a < n.length && ((s = n.substr(a)), !/^\s+/.test(s)))
          throw "Extra/unparsed characters found in date: " + s;
        if (
          (-1 === d
            ? (d = new Date().getFullYear())
            : d < 100 &&
              (d +=
                new Date().getFullYear() -
                (new Date().getFullYear() % 100) +
                (d <= r ? 0 : -100)),
          -1 < g)
        )
          for (p = 1, f = g; ; ) {
            if (f <= (i = this._getDaysInMonth(d, p - 1))) break;
            p++, (f -= i);
          }
        if (
          (o = this._daylightSavingAdjust(
            new Date(d, p - 1, f)
          )).getFullYear() !== d ||
          o.getMonth() + 1 !== p ||
          o.getDate() !== f
        )
          throw "Invalid date";
        return o;
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970:
        24 *
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
        60 *
        60 *
        1e7,
      formatDate: function (e, t, i) {
        if (!t) return "";
        function s(t, e, i) {
          var s = "" + e;
          if (c(t)) for (; s.length < i; ) s = "0" + s;
          return s;
        }
        function n(t, e, i, s) {
          return (c(t) ? s : i)[e];
        }
        var o,
          a = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          r = (i ? i.dayNames : null) || this._defaults.dayNames,
          l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          h = (i ? i.monthNames : null) || this._defaults.monthNames,
          c = function (t) {
            t = o + 1 < e.length && e.charAt(o + 1) === t;
            return t && o++, t;
          },
          u = "",
          d = !1;
        if (t)
          for (o = 0; o < e.length; o++)
            if (d)
              "'" !== e.charAt(o) || c("'") ? (u += e.charAt(o)) : (d = !1);
            else
              switch (e.charAt(o)) {
                case "d":
                  u += s("d", t.getDate(), 2);
                  break;
                case "D":
                  u += n("D", t.getDay(), a, r);
                  break;
                case "o":
                  u += s(
                    "o",
                    Math.round(
                      (new Date(
                        t.getFullYear(),
                        t.getMonth(),
                        t.getDate()
                      ).getTime() -
                        new Date(t.getFullYear(), 0, 0).getTime()) /
                        864e5
                    ),
                    3
                  );
                  break;
                case "m":
                  u += s("m", t.getMonth() + 1, 2);
                  break;
                case "M":
                  u += n("M", t.getMonth(), l, h);
                  break;
                case "y":
                  u += c("y")
                    ? t.getFullYear()
                    : (t.getFullYear() % 100 < 10 ? "0" : "") +
                      (t.getFullYear() % 100);
                  break;
                case "@":
                  u += t.getTime();
                  break;
                case "!":
                  u += 1e4 * t.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  c("'") ? (u += "'") : (d = !0);
                  break;
                default:
                  u += e.charAt(o);
              }
        return u;
      },
      _possibleChars: function (e) {
        for (
          var t = "",
            i = !1,
            s = function (t) {
              t = n + 1 < e.length && e.charAt(n + 1) === t;
              return t && n++, t;
            },
            n = 0;
          n < e.length;
          n++
        )
          if (i) "'" !== e.charAt(n) || s("'") ? (t += e.charAt(n)) : (i = !1);
          else
            switch (e.charAt(n)) {
              case "d":
              case "m":
              case "y":
              case "@":
                t += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                s("'") ? (t += "'") : (i = !0);
                break;
              default:
                t += e.charAt(n);
            }
        return t;
      },
      _get: function (t, e) {
        return (void 0 !== t.settings[e] ? t.settings : this._defaults)[e];
      },
      _setDateFromField: function (t, e) {
        if (t.input.val() !== t.lastVal) {
          var i = this._get(t, "dateFormat"),
            s = (t.lastVal = t.input ? t.input.val() : null),
            n = this._getDefaultDate(t),
            o = n,
            a = this._getFormatConfig(t);
          try {
            o = this.parseDate(i, s, a) || n;
          } catch (t) {
            s = e ? "" : s;
          }
          (t.selectedDay = o.getDate()),
            (t.drawMonth = t.selectedMonth = o.getMonth()),
            (t.drawYear = t.selectedYear = o.getFullYear()),
            (t.currentDay = s ? o.getDate() : 0),
            (t.currentMonth = s ? o.getMonth() : 0),
            (t.currentYear = s ? o.getFullYear() : 0),
            this._adjustInstDate(t);
        }
      },
      _getDefaultDate: function (t) {
        return this._restrictMinMax(
          t,
          this._determineDate(t, this._get(t, "defaultDate"), new Date())
        );
      },
      _determineDate: function (r, t, e) {
        var i,
          s,
          t =
            null == t || "" === t
              ? e
              : "string" == typeof t
              ? (function (t) {
                  try {
                    return V.datepicker.parseDate(
                      V.datepicker._get(r, "dateFormat"),
                      t,
                      V.datepicker._getFormatConfig(r)
                    );
                  } catch (t) {}
                  for (
                    var e =
                        (t.toLowerCase().match(/^c/)
                          ? V.datepicker._getDate(r)
                          : null) || new Date(),
                      i = e.getFullYear(),
                      s = e.getMonth(),
                      n = e.getDate(),
                      o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                      a = o.exec(t);
                    a;

                  ) {
                    switch (a[2] || "d") {
                      case "d":
                      case "D":
                        n += parseInt(a[1], 10);
                        break;
                      case "w":
                      case "W":
                        n += 7 * parseInt(a[1], 10);
                        break;
                      case "m":
                      case "M":
                        (s += parseInt(a[1], 10)),
                          (n = Math.min(n, V.datepicker._getDaysInMonth(i, s)));
                        break;
                      case "y":
                      case "Y":
                        (i += parseInt(a[1], 10)),
                          (n = Math.min(n, V.datepicker._getDaysInMonth(i, s)));
                    }
                    a = o.exec(t);
                  }
                  return new Date(i, s, n);
                })(t)
              : "number" == typeof t
              ? isNaN(t)
                ? e
                : ((i = t), (s = new Date()).setDate(s.getDate() + i), s)
              : new Date(t.getTime());
        return (
          (t = t && "Invalid Date" === t.toString() ? e : t) &&
            (t.setHours(0),
            t.setMinutes(0),
            t.setSeconds(0),
            t.setMilliseconds(0)),
          this._daylightSavingAdjust(t)
        );
      },
      _daylightSavingAdjust: function (t) {
        return t
          ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t)
          : null;
      },
      _setDate: function (t, e, i) {
        var s = !e,
          n = t.selectedMonth,
          o = t.selectedYear,
          e = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
        (t.selectedDay = t.currentDay = e.getDate()),
          (t.drawMonth = t.selectedMonth = t.currentMonth = e.getMonth()),
          (t.drawYear = t.selectedYear = t.currentYear = e.getFullYear()),
          (n === t.selectedMonth && o === t.selectedYear) ||
            i ||
            this._notifyChange(t),
          this._adjustInstDate(t),
          t.input && t.input.val(s ? "" : this._formatDate(t));
      },
      _getDate: function (t) {
        return !t.currentYear || (t.input && "" === t.input.val())
          ? null
          : this._daylightSavingAdjust(
              new Date(t.currentYear, t.currentMonth, t.currentDay)
            );
      },
      _attachHandlers: function (t) {
        var e = this._get(t, "stepMonths"),
          i = "#" + t.id.replace(/\\\\/g, "\\");
        t.dpDiv.find("[data-handler]").map(function () {
          var t = {
            prev: function () {
              V.datepicker._adjustDate(i, -e, "M");
            },
            next: function () {
              V.datepicker._adjustDate(i, +e, "M");
            },
            hide: function () {
              V.datepicker._hideDatepicker();
            },
            today: function () {
              V.datepicker._gotoToday(i);
            },
            selectDay: function () {
              return (
                V.datepicker._selectDay(
                  i,
                  +this.getAttribute("data-month"),
                  +this.getAttribute("data-year"),
                  this
                ),
                !1
              );
            },
            selectMonth: function () {
              return V.datepicker._selectMonthYear(i, this, "M"), !1;
            },
            selectYear: function () {
              return V.datepicker._selectMonthYear(i, this, "Y"), !1;
            },
          };
          V(this).on(
            this.getAttribute("data-event"),
            t[this.getAttribute("data-handler")]
          );
        });
      },
      _generateHTML: function (t) {
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          c,
          u,
          d,
          p,
          f,
          g,
          m,
          _,
          v,
          b,
          y,
          w,
          x,
          k,
          C,
          D,
          I,
          T,
          P,
          M,
          S,
          H,
          z,
          A = new Date(),
          O = this._daylightSavingAdjust(
            new Date(A.getFullYear(), A.getMonth(), A.getDate())
          ),
          N = this._get(t, "isRTL"),
          E = this._get(t, "showButtonPanel"),
          W = this._get(t, "hideIfNoPrevNext"),
          F = this._get(t, "navigationAsDateFormat"),
          L = this._getNumberOfMonths(t),
          R = this._get(t, "showCurrentAtPos"),
          A = this._get(t, "stepMonths"),
          Y = 1 !== L[0] || 1 !== L[1],
          B = this._daylightSavingAdjust(
            t.currentDay
              ? new Date(t.currentYear, t.currentMonth, t.currentDay)
              : new Date(9999, 9, 9)
          ),
          j = this._getMinMaxDate(t, "min"),
          q = this._getMinMaxDate(t, "max"),
          K = t.drawMonth - R,
          U = t.drawYear;
        if ((K < 0 && ((K += 12), U--), q))
          for (
            e = this._daylightSavingAdjust(
              new Date(
                q.getFullYear(),
                q.getMonth() - L[0] * L[1] + 1,
                q.getDate()
              )
            ),
              e = j && e < j ? j : e;
            this._daylightSavingAdjust(new Date(U, K, 1)) > e;

          )
            --K < 0 && ((K = 11), U--);
        for (
          t.drawMonth = K,
            t.drawYear = U,
            R = this._get(t, "prevText"),
            R = F
              ? this.formatDate(
                  R,
                  this._daylightSavingAdjust(new Date(U, K - A, 1)),
                  this._getFormatConfig(t)
                )
              : R,
            i = this._canAdjustMonth(t, -1, U, K)
              ? V("<a>")
                  .attr({
                    class: "ui-datepicker-prev ui-corner-all",
                    "data-handler": "prev",
                    "data-event": "click",
                    title: R,
                  })
                  .append(
                    V("<span>")
                      .addClass(
                        "ui-icon ui-icon-circle-triangle-" + (N ? "e" : "w")
                      )
                      .text(R)
                  )[0].outerHTML
              : W
              ? ""
              : V("<a>")
                  .attr({
                    class: "ui-datepicker-prev ui-corner-all ui-state-disabled",
                    title: R,
                  })
                  .append(
                    V("<span>")
                      .addClass(
                        "ui-icon ui-icon-circle-triangle-" + (N ? "e" : "w")
                      )
                      .text(R)
                  )[0].outerHTML,
            R = this._get(t, "nextText"),
            R = F
              ? this.formatDate(
                  R,
                  this._daylightSavingAdjust(new Date(U, K + A, 1)),
                  this._getFormatConfig(t)
                )
              : R,
            s = this._canAdjustMonth(t, 1, U, K)
              ? V("<a>")
                  .attr({
                    class: "ui-datepicker-next ui-corner-all",
                    "data-handler": "next",
                    "data-event": "click",
                    title: R,
                  })
                  .append(
                    V("<span>")
                      .addClass(
                        "ui-icon ui-icon-circle-triangle-" + (N ? "w" : "e")
                      )
                      .text(R)
                  )[0].outerHTML
              : W
              ? ""
              : V("<a>")
                  .attr({
                    class: "ui-datepicker-next ui-corner-all ui-state-disabled",
                    title: R,
                  })
                  .append(
                    V("<span>")
                      .attr(
                        "class",
                        "ui-icon ui-icon-circle-triangle-" + (N ? "w" : "e")
                      )
                      .text(R)
                  )[0].outerHTML,
            A = this._get(t, "currentText"),
            W = this._get(t, "gotoCurrent") && t.currentDay ? B : O,
            A = F ? this.formatDate(A, W, this._getFormatConfig(t)) : A,
            R = "",
            t.inline ||
              (R = V("<button>")
                .attr({
                  type: "button",
                  class:
                    "ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all",
                  "data-handler": "hide",
                  "data-event": "click",
                })
                .text(this._get(t, "closeText"))[0].outerHTML),
            F = "",
            E &&
              (F = V("<div class='ui-datepicker-buttonpane ui-widget-content'>")
                .append(N ? R : "")
                .append(
                  this._isInRange(t, W)
                    ? V("<button>")
                        .attr({
                          type: "button",
                          class:
                            "ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all",
                          "data-handler": "today",
                          "data-event": "click",
                        })
                        .text(A)
                    : ""
                )
                .append(N ? "" : R)[0].outerHTML),
            n = parseInt(this._get(t, "firstDay"), 10),
            n = isNaN(n) ? 0 : n,
            o = this._get(t, "showWeek"),
            a = this._get(t, "dayNames"),
            r = this._get(t, "dayNamesMin"),
            l = this._get(t, "monthNames"),
            h = this._get(t, "monthNamesShort"),
            c = this._get(t, "beforeShowDay"),
            u = this._get(t, "showOtherMonths"),
            d = this._get(t, "selectOtherMonths"),
            p = this._getDefaultDate(t),
            f = "",
            m = 0;
          m < L[0];
          m++
        ) {
          for (_ = "", this.maxRows = 4, v = 0; v < L[1]; v++) {
            if (
              ((b = this._daylightSavingAdjust(new Date(U, K, t.selectedDay))),
              (y = " ui-corner-all"),
              (w = ""),
              Y)
            ) {
              if (((w += "<div class='ui-datepicker-group"), 1 < L[1]))
                switch (v) {
                  case 0:
                    (w += " ui-datepicker-group-first"),
                      (y = " ui-corner-" + (N ? "right" : "left"));
                    break;
                  case L[1] - 1:
                    (w += " ui-datepicker-group-last"),
                      (y = " ui-corner-" + (N ? "left" : "right"));
                    break;
                  default:
                    (w += " ui-datepicker-group-middle"), (y = "");
                }
              w += "'>";
            }
            for (
              w +=
                "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                y +
                "'>" +
                (/all|left/.test(y) && 0 === m ? (N ? s : i) : "") +
                (/all|right/.test(y) && 0 === m ? (N ? i : s) : "") +
                this._generateMonthYearHeader(
                  t,
                  K,
                  U,
                  j,
                  q,
                  0 < m || 0 < v,
                  l,
                  h
                ) +
                "</div><table class='ui-datepicker-calendar'><thead><tr>",
                x = o
                  ? "<th class='ui-datepicker-week-col'>" +
                    this._get(t, "weekHeader") +
                    "</th>"
                  : "",
                g = 0;
              g < 7;
              g++
            )
              x +=
                "<th scope='col'" +
                (5 <= (g + n + 6) % 7
                  ? " class='ui-datepicker-week-end'"
                  : "") +
                "><span title='" +
                a[(k = (g + n) % 7)] +
                "'>" +
                r[k] +
                "</span></th>";
            for (
              w += x + "</tr></thead><tbody>",
                D = this._getDaysInMonth(U, K),
                U === t.selectedYear &&
                  K === t.selectedMonth &&
                  (t.selectedDay = Math.min(t.selectedDay, D)),
                C = (this._getFirstDayOfMonth(U, K) - n + 7) % 7,
                D = Math.ceil((C + D) / 7),
                I = Y && this.maxRows > D ? this.maxRows : D,
                this.maxRows = I,
                T = this._daylightSavingAdjust(new Date(U, K, 1 - C)),
                P = 0;
              P < I;
              P++
            ) {
              for (
                w += "<tr>",
                  M = o
                    ? "<td class='ui-datepicker-week-col'>" +
                      this._get(t, "calculateWeek")(T) +
                      "</td>"
                    : "",
                  g = 0;
                g < 7;
                g++
              )
                (S = c ? c.apply(t.input ? t.input[0] : null, [T]) : [!0, ""]),
                  (z =
                    ((H = T.getMonth() !== K) && !d) ||
                    !S[0] ||
                    (j && T < j) ||
                    (q && q < T)),
                  (M +=
                    "<td class='" +
                    (5 <= (g + n + 6) % 7 ? " ui-datepicker-week-end" : "") +
                    (H ? " ui-datepicker-other-month" : "") +
                    ((T.getTime() === b.getTime() &&
                      K === t.selectedMonth &&
                      t._keyEvent) ||
                    (p.getTime() === T.getTime() && p.getTime() === b.getTime())
                      ? " " + this._dayOverClass
                      : "") +
                    (z
                      ? " " + this._unselectableClass + " ui-state-disabled"
                      : "") +
                    (H && !u
                      ? ""
                      : " " +
                        S[1] +
                        (T.getTime() === B.getTime()
                          ? " " + this._currentClass
                          : "") +
                        (T.getTime() === O.getTime()
                          ? " ui-datepicker-today"
                          : "")) +
                    "'" +
                    ((H && !u) || !S[2]
                      ? ""
                      : " title='" + S[2].replace(/'/g, "&#39;") + "'") +
                    (z
                      ? ""
                      : " data-handler='selectDay' data-event='click' data-month='" +
                        T.getMonth() +
                        "' data-year='" +
                        T.getFullYear() +
                        "'") +
                    ">" +
                    (H && !u
                      ? "&#xa0;"
                      : z
                      ? "<span class='ui-state-default'>" +
                        T.getDate() +
                        "</span>"
                      : "<a class='ui-state-default" +
                        (T.getTime() === O.getTime()
                          ? " ui-state-highlight"
                          : "") +
                        (T.getTime() === B.getTime()
                          ? " ui-state-active"
                          : "") +
                        (H ? " ui-priority-secondary" : "") +
                        "' href='#' aria-current='" +
                        (T.getTime() === B.getTime() ? "true" : "false") +
                        "' data-date='" +
                        T.getDate() +
                        "'>" +
                        T.getDate() +
                        "</a>") +
                    "</td>"),
                  T.setDate(T.getDate() + 1),
                  (T = this._daylightSavingAdjust(T));
              w += M + "</tr>";
            }
            11 < ++K && ((K = 0), U++),
              (_ += w +=
                "</tbody></table>" +
                (Y
                  ? "</div>" +
                    (0 < L[0] && v === L[1] - 1
                      ? "<div class='ui-datepicker-row-break'></div>"
                      : "")
                  : ""));
          }
          f += _;
        }
        return (f += F), (t._keyEvent = !1), f;
      },
      _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
        var l,
          h,
          c,
          u,
          d,
          p,
          f = this._get(t, "changeMonth"),
          g = this._get(t, "changeYear"),
          m = this._get(t, "showMonthAfterYear"),
          _ = this._get(t, "selectMonthLabel"),
          v = this._get(t, "selectYearLabel"),
          b = "<div class='ui-datepicker-title'>",
          y = "";
        if (o || !f)
          y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
        else {
          for (
            l = s && s.getFullYear() === i,
              h = n && n.getFullYear() === i,
              y +=
                "<select class='ui-datepicker-month' aria-label='" +
                _ +
                "' data-handler='selectMonth' data-event='change'>",
              c = 0;
            c < 12;
            c++
          )
            (!l || c >= s.getMonth()) &&
              (!h || c <= n.getMonth()) &&
              (y +=
                "<option value='" +
                c +
                "'" +
                (c === e ? " selected='selected'" : "") +
                ">" +
                r[c] +
                "</option>");
          y += "</select>";
        }
        if ((m || (b += y + (!o && f && g ? "" : "&#xa0;")), !t.yearshtml))
          if (((t.yearshtml = ""), o || !g))
            b += "<span class='ui-datepicker-year'>" + i + "</span>";
          else {
            for (
              a = this._get(t, "yearRange").split(":"),
                u = new Date().getFullYear(),
                d = (_ = function (t) {
                  t = t.match(/c[+\-].*/)
                    ? i + parseInt(t.substring(1), 10)
                    : t.match(/[+\-].*/)
                    ? u + parseInt(t, 10)
                    : parseInt(t, 10);
                  return isNaN(t) ? u : t;
                })(a[0]),
                p = Math.max(d, _(a[1] || "")),
                d = s ? Math.max(d, s.getFullYear()) : d,
                p = n ? Math.min(p, n.getFullYear()) : p,
                t.yearshtml +=
                  "<select class='ui-datepicker-year' aria-label='" +
                  v +
                  "' data-handler='selectYear' data-event='change'>";
              d <= p;
              d++
            )
              t.yearshtml +=
                "<option value='" +
                d +
                "'" +
                (d === i ? " selected='selected'" : "") +
                ">" +
                d +
                "</option>";
            (t.yearshtml += "</select>"),
              (b += t.yearshtml),
              (t.yearshtml = null);
          }
        return (
          (b += this._get(t, "yearSuffix")),
          m && (b += (!o && f && g ? "" : "&#xa0;") + y),
          (b += "</div>")
        );
      },
      _adjustInstDate: function (t, e, i) {
        var s = t.selectedYear + ("Y" === i ? e : 0),
          n = t.selectedMonth + ("M" === i ? e : 0),
          e =
            Math.min(t.selectedDay, this._getDaysInMonth(s, n)) +
            ("D" === i ? e : 0),
          e = this._restrictMinMax(
            t,
            this._daylightSavingAdjust(new Date(s, n, e))
          );
        (t.selectedDay = e.getDate()),
          (t.drawMonth = t.selectedMonth = e.getMonth()),
          (t.drawYear = t.selectedYear = e.getFullYear()),
          ("M" !== i && "Y" !== i) || this._notifyChange(t);
      },
      _restrictMinMax: function (t, e) {
        var i = this._getMinMaxDate(t, "min"),
          t = this._getMinMaxDate(t, "max"),
          e = i && e < i ? i : e;
        return t && t < e ? t : e;
      },
      _notifyChange: function (t) {
        var e = this._get(t, "onChangeMonthYear");
        e &&
          e.apply(t.input ? t.input[0] : null, [
            t.selectedYear,
            t.selectedMonth + 1,
            t,
          ]);
      },
      _getNumberOfMonths: function (t) {
        t = this._get(t, "numberOfMonths");
        return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
      },
      _getMinMaxDate: function (t, e) {
        return this._determineDate(t, this._get(t, e + "Date"), null);
      },
      _getDaysInMonth: function (t, e) {
        return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
      },
      _getFirstDayOfMonth: function (t, e) {
        return new Date(t, e, 1).getDay();
      },
      _canAdjustMonth: function (t, e, i, s) {
        var n = this._getNumberOfMonths(t),
          n = this._daylightSavingAdjust(
            new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1)
          );
        return (
          e < 0 &&
            n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())),
          this._isInRange(t, n)
        );
      },
      _isInRange: function (t, e) {
        var i = this._getMinMaxDate(t, "min"),
          s = this._getMinMaxDate(t, "max"),
          n = null,
          o = null,
          a = this._get(t, "yearRange");
        return (
          a &&
            ((t = a.split(":")),
            (a = new Date().getFullYear()),
            (n = parseInt(t[0], 10)),
            (o = parseInt(t[1], 10)),
            t[0].match(/[+\-].*/) && (n += a),
            t[1].match(/[+\-].*/) && (o += a)),
          (!i || e.getTime() >= i.getTime()) &&
            (!s || e.getTime() <= s.getTime()) &&
            (!n || e.getFullYear() >= n) &&
            (!o || e.getFullYear() <= o)
        );
      },
      _getFormatConfig: function (t) {
        var e = this._get(t, "shortYearCutoff");
        return {
          shortYearCutoff: (e =
            "string" != typeof e
              ? e
              : (new Date().getFullYear() % 100) + parseInt(e, 10)),
          dayNamesShort: this._get(t, "dayNamesShort"),
          dayNames: this._get(t, "dayNames"),
          monthNamesShort: this._get(t, "monthNamesShort"),
          monthNames: this._get(t, "monthNames"),
        };
      },
      _formatDate: function (t, e, i, s) {
        e ||
          ((t.currentDay = t.selectedDay),
          (t.currentMonth = t.selectedMonth),
          (t.currentYear = t.selectedYear));
        e = e
          ? "object" == typeof e
            ? e
            : this._daylightSavingAdjust(new Date(s, i, e))
          : this._daylightSavingAdjust(
              new Date(t.currentYear, t.currentMonth, t.currentDay)
            );
        return this.formatDate(
          this._get(t, "dateFormat"),
          e,
          this._getFormatConfig(t)
        );
      },
    }),
    (V.fn.datepicker = function (t) {
      if (!this.length) return this;
      V.datepicker.initialized ||
        (V(document).on("mousedown", V.datepicker._checkExternalClick),
        (V.datepicker.initialized = !0)),
        0 === V("#" + V.datepicker._mainDivId).length &&
          V("body").append(V.datepicker.dpDiv);
      var e = Array.prototype.slice.call(arguments, 1);
      return ("string" == typeof t &&
        ("isDisabled" === t || "getDate" === t || "widget" === t)) ||
        ("option" === t &&
          2 === arguments.length &&
          "string" == typeof arguments[1])
        ? V.datepicker["_" + t + "Datepicker"].apply(
            V.datepicker,
            [this[0]].concat(e)
          )
        : this.each(function () {
            "string" == typeof t
              ? V.datepicker["_" + t + "Datepicker"].apply(
                  V.datepicker,
                  [this].concat(e)
                )
              : V.datepicker._attachDatepicker(this, t);
          });
    }),
    (V.datepicker = new st()),
    (V.datepicker.initialized = !1),
    (V.datepicker.uuid = new Date().getTime()),
    (V.datepicker.version = "1.13.2");
  V.datepicker,
    (V.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
  var rt = !1;
  V(document).on("mouseup", function () {
    rt = !1;
  });
  V.widget("ui.mouse", {
    version: "1.13.2",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0,
    },
    _mouseInit: function () {
      var e = this;
      this.element
        .on("mousedown." + this.widgetName, function (t) {
          return e._mouseDown(t);
        })
        .on("click." + this.widgetName, function (t) {
          if (!0 === V.data(t.target, e.widgetName + ".preventClickEvent"))
            return (
              V.removeData(t.target, e.widgetName + ".preventClickEvent"),
              t.stopImmediatePropagation(),
              !1
            );
        }),
        (this.started = !1);
    },
    _mouseDestroy: function () {
      this.element.off("." + this.widgetName),
        this._mouseMoveDelegate &&
          this.document
            .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .off("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function (t) {
      if (!rt) {
        (this._mouseMoved = !1),
          this._mouseStarted && this._mouseUp(t),
          (this._mouseDownEvent = t);
        var e = this,
          i = 1 === t.which,
          s =
            !("string" != typeof this.options.cancel || !t.target.nodeName) &&
            V(t.target).closest(this.options.cancel).length;
        return i && !s && this._mouseCapture(t)
          ? ((this.mouseDelayMet = !this.options.delay),
            this.mouseDelayMet ||
              (this._mouseDelayTimer = setTimeout(function () {
                e.mouseDelayMet = !0;
              }, this.options.delay)),
            this._mouseDistanceMet(t) &&
            this._mouseDelayMet(t) &&
            ((this._mouseStarted = !1 !== this._mouseStart(t)),
            !this._mouseStarted)
              ? (t.preventDefault(), !0)
              : (!0 ===
                  V.data(t.target, this.widgetName + ".preventClickEvent") &&
                  V.removeData(
                    t.target,
                    this.widgetName + ".preventClickEvent"
                  ),
                (this._mouseMoveDelegate = function (t) {
                  return e._mouseMove(t);
                }),
                (this._mouseUpDelegate = function (t) {
                  return e._mouseUp(t);
                }),
                this.document
                  .on("mousemove." + this.widgetName, this._mouseMoveDelegate)
                  .on("mouseup." + this.widgetName, this._mouseUpDelegate),
                t.preventDefault(),
                (rt = !0)))
          : !0;
      }
    },
    _mouseMove: function (t) {
      if (this._mouseMoved) {
        if (
          V.ui.ie &&
          (!document.documentMode || document.documentMode < 9) &&
          !t.button
        )
          return this._mouseUp(t);
        if (!t.which)
          if (
            t.originalEvent.altKey ||
            t.originalEvent.ctrlKey ||
            t.originalEvent.metaKey ||
            t.originalEvent.shiftKey
          )
            this.ignoreMissingWhich = !0;
          else if (!this.ignoreMissingWhich) return this._mouseUp(t);
      }
      return (
        (t.which || t.button) && (this._mouseMoved = !0),
        this._mouseStarted
          ? (this._mouseDrag(t), t.preventDefault())
          : (this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              ((this._mouseStarted =
                !1 !== this._mouseStart(this._mouseDownEvent, t)),
              this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
      );
    },
    _mouseUp: function (t) {
      this.document
        .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
        .off("mouseup." + this.widgetName, this._mouseUpDelegate),
        this._mouseStarted &&
          ((this._mouseStarted = !1),
          t.target === this._mouseDownEvent.target &&
            V.data(t.target, this.widgetName + ".preventClickEvent", !0),
          this._mouseStop(t)),
        this._mouseDelayTimer &&
          (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
        (this.ignoreMissingWhich = !1),
        (rt = !1),
        t.preventDefault();
    },
    _mouseDistanceMet: function (t) {
      return (
        Math.max(
          Math.abs(this._mouseDownEvent.pageX - t.pageX),
          Math.abs(this._mouseDownEvent.pageY - t.pageY)
        ) >= this.options.distance
      );
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet;
    },
    _mouseStart: function () {},
    _mouseDrag: function () {},
    _mouseStop: function () {},
    _mouseCapture: function () {
      return !0;
    },
  }),
    (V.ui.plugin = {
      add: function (t, e, i) {
        var s,
          n = V.ui[t].prototype;
        for (s in i)
          (n.plugins[s] = n.plugins[s] || []), n.plugins[s].push([e, i[s]]);
      },
      call: function (t, e, i, s) {
        var n,
          o = t.plugins[e];
        if (
          o &&
          (s ||
            (t.element[0].parentNode &&
              11 !== t.element[0].parentNode.nodeType))
        )
          for (n = 0; n < o.length; n++)
            t.options[o[n][0]] && o[n][1].apply(t.element, i);
      },
    }),
    (V.ui.safeBlur = function (t) {
      t && "body" !== t.nodeName.toLowerCase() && V(t).trigger("blur");
    });
  V.widget("ui.draggable", V.ui.mouse, {
    version: "1.13.2",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null,
    },
    _create: function () {
      "original" === this.options.helper && this._setPositionRelative(),
        this.options.addClasses && this._addClass("ui-draggable"),
        this._setHandleClassName(),
        this._mouseInit();
    },
    _setOption: function (t, e) {
      this._super(t, e),
        "handle" === t &&
          (this._removeHandleClassName(), this._setHandleClassName());
    },
    _destroy: function () {
      (this.helper || this.element).is(".ui-draggable-dragging")
        ? (this.destroyOnClear = !0)
        : (this._removeHandleClassName(), this._mouseDestroy());
    },
    _mouseCapture: function (t) {
      var e = this.options;
      return (
        !(
          this.helper ||
          e.disabled ||
          0 < V(t.target).closest(".ui-resizable-handle").length
        ) &&
        ((this.handle = this._getHandle(t)),
        !!this.handle &&
          (this._blurActiveElement(t),
          this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix),
          !0))
      );
    },
    _blockFrames: function (t) {
      this.iframeBlocks = this.document.find(t).map(function () {
        var t = V(this);
        return V("<div>")
          .css("position", "absolute")
          .appendTo(t.parent())
          .outerWidth(t.outerWidth())
          .outerHeight(t.outerHeight())
          .offset(t.offset())[0];
      });
    },
    _unblockFrames: function () {
      this.iframeBlocks &&
        (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _blurActiveElement: function (t) {
      var e = V.ui.safeActiveElement(this.document[0]);
      V(t.target).closest(e).length || V.ui.safeBlur(e);
    },
    _mouseStart: function (t) {
      var e = this.options;
      return (
        (this.helper = this._createHelper(t)),
        this._addClass(this.helper, "ui-draggable-dragging"),
        this._cacheHelperProportions(),
        V.ui.ddmanager && (V.ui.ddmanager.current = this),
        this._cacheMargins(),
        (this.cssPosition = this.helper.css("position")),
        (this.scrollParent = this.helper.scrollParent(!0)),
        (this.offsetParent = this.helper.offsetParent()),
        (this.hasFixedAncestor =
          0 <
          this.helper.parents().filter(function () {
            return "fixed" === V(this).css("position");
          }).length),
        (this.positionAbs = this.element.offset()),
        this._refreshOffsets(t),
        (this.originalPosition = this.position = this._generatePosition(t, !1)),
        (this.originalPageX = t.pageX),
        (this.originalPageY = t.pageY),
        e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt),
        this._setContainment(),
        !1 === this._trigger("start", t)
          ? (this._clear(), !1)
          : (this._cacheHelperProportions(),
            V.ui.ddmanager &&
              !e.dropBehaviour &&
              V.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            V.ui.ddmanager && V.ui.ddmanager.dragStart(this, t),
            !0)
      );
    },
    _refreshOffsets: function (t) {
      (this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset(),
      }),
        (this.offset.click = {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top,
        });
    },
    _mouseDrag: function (t, e) {
      if (
        (this.hasFixedAncestor &&
          (this.offset.parent = this._getParentOffset()),
        (this.position = this._generatePosition(t, !0)),
        (this.positionAbs = this._convertPositionTo("absolute")),
        !e)
      ) {
        e = this._uiHash();
        if (!1 === this._trigger("drag", t, e))
          return this._mouseUp(new V.Event("mouseup", t)), !1;
        this.position = e.position;
      }
      return (
        (this.helper[0].style.left = this.position.left + "px"),
        (this.helper[0].style.top = this.position.top + "px"),
        V.ui.ddmanager && V.ui.ddmanager.drag(this, t),
        !1
      );
    },
    _mouseStop: function (t) {
      var e = this,
        i = !1;
      return (
        V.ui.ddmanager &&
          !this.options.dropBehaviour &&
          (i = V.ui.ddmanager.drop(this, t)),
        this.dropped && ((i = this.dropped), (this.dropped = !1)),
        ("invalid" === this.options.revert && !i) ||
        ("valid" === this.options.revert && i) ||
        !0 === this.options.revert ||
        ("function" == typeof this.options.revert &&
          this.options.revert.call(this.element, i))
          ? V(this.helper).animate(
              this.originalPosition,
              parseInt(this.options.revertDuration, 10),
              function () {
                !1 !== e._trigger("stop", t) && e._clear();
              }
            )
          : !1 !== this._trigger("stop", t) && this._clear(),
        !1
      );
    },
    _mouseUp: function (t) {
      return (
        this._unblockFrames(),
        V.ui.ddmanager && V.ui.ddmanager.dragStop(this, t),
        this.handleElement.is(t.target) && this.element.trigger("focus"),
        V.ui.mouse.prototype._mouseUp.call(this, t)
      );
    },
    cancel: function () {
      return (
        this.helper.is(".ui-draggable-dragging")
          ? this._mouseUp(new V.Event("mouseup", { target: this.element[0] }))
          : this._clear(),
        this
      );
    },
    _getHandle: function (t) {
      return (
        !this.options.handle ||
        !!V(t.target).closest(this.element.find(this.options.handle)).length
      );
    },
    _setHandleClassName: function () {
      (this.handleElement = this.options.handle
        ? this.element.find(this.options.handle)
        : this.element),
        this._addClass(this.handleElement, "ui-draggable-handle");
    },
    _removeHandleClassName: function () {
      this._removeClass(this.handleElement, "ui-draggable-handle");
    },
    _createHelper: function (t) {
      var e = this.options,
        i = "function" == typeof e.helper,
        t = i
          ? V(e.helper.apply(this.element[0], [t]))
          : "clone" === e.helper
          ? this.element.clone().removeAttr("id")
          : this.element;
      return (
        t.parents("body").length ||
          t.appendTo(
            "parent" === e.appendTo ? this.element[0].parentNode : e.appendTo
          ),
        i && t[0] === this.element[0] && this._setPositionRelative(),
        t[0] === this.element[0] ||
          /(fixed|absolute)/.test(t.css("position")) ||
          t.css("position", "absolute"),
        t
      );
    },
    _setPositionRelative: function () {
      /^(?:r|a|f)/.test(this.element.css("position")) ||
        (this.element[0].style.position = "relative");
    },
    _adjustOffsetFromHelper: function (t) {
      "string" == typeof t && (t = t.split(" ")),
        "left" in
          (t = Array.isArray(t) ? { left: +t[0], top: +t[1] || 0 } : t) &&
          (this.offset.click.left = t.left + this.margins.left),
        "right" in t &&
          (this.offset.click.left =
            this.helperProportions.width - t.right + this.margins.left),
        "top" in t && (this.offset.click.top = t.top + this.margins.top),
        "bottom" in t &&
          (this.offset.click.top =
            this.helperProportions.height - t.bottom + this.margins.top);
    },
    _isRootNode: function (t) {
      return /(html|body)/i.test(t.tagName) || t === this.document[0];
    },
    _getParentOffset: function () {
      var t = this.offsetParent.offset(),
        e = this.document[0];
      return (
        "absolute" === this.cssPosition &&
          this.scrollParent[0] !== e &&
          V.contains(this.scrollParent[0], this.offsetParent[0]) &&
          ((t.left += this.scrollParent.scrollLeft()),
          (t.top += this.scrollParent.scrollTop())),
        {
          top:
            (t = this._isRootNode(this.offsetParent[0])
              ? { top: 0, left: 0 }
              : t).top +
            (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
          left:
            t.left +
            (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
        }
      );
    },
    _getRelativeOffset: function () {
      if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
      var t = this.element.position(),
        e = this._isRootNode(this.scrollParent[0]);
      return {
        top:
          t.top -
          (parseInt(this.helper.css("top"), 10) || 0) +
          (e ? 0 : this.scrollParent.scrollTop()),
        left:
          t.left -
          (parseInt(this.helper.css("left"), 10) || 0) +
          (e ? 0 : this.scrollParent.scrollLeft()),
      };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight(),
      };
    },
    _setContainment: function () {
      var t,
        e,
        i,
        s = this.options,
        n = this.document[0];
      (this.relativeContainer = null),
        s.containment
          ? "window" !== s.containment
            ? "document" !== s.containment
              ? s.containment.constructor !== Array
                ? ("parent" === s.containment &&
                    (s.containment = this.helper[0].parentNode),
                  (i = (e = V(s.containment))[0]) &&
                    ((t = /(scroll|auto)/.test(e.css("overflow"))),
                    (this.containment = [
                      (parseInt(e.css("borderLeftWidth"), 10) || 0) +
                        (parseInt(e.css("paddingLeft"), 10) || 0),
                      (parseInt(e.css("borderTopWidth"), 10) || 0) +
                        (parseInt(e.css("paddingTop"), 10) || 0),
                      (t
                        ? Math.max(i.scrollWidth, i.offsetWidth)
                        : i.offsetWidth) -
                        (parseInt(e.css("borderRightWidth"), 10) || 0) -
                        (parseInt(e.css("paddingRight"), 10) || 0) -
                        this.helperProportions.width -
                        this.margins.left -
                        this.margins.right,
                      (t
                        ? Math.max(i.scrollHeight, i.offsetHeight)
                        : i.offsetHeight) -
                        (parseInt(e.css("borderBottomWidth"), 10) || 0) -
                        (parseInt(e.css("paddingBottom"), 10) || 0) -
                        this.helperProportions.height -
                        this.margins.top -
                        this.margins.bottom,
                    ]),
                    (this.relativeContainer = e)))
                : (this.containment = s.containment)
              : (this.containment = [
                  0,
                  0,
                  V(n).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  (V(n).height() || n.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ])
            : (this.containment = [
                V(window).scrollLeft() -
                  this.offset.relative.left -
                  this.offset.parent.left,
                V(window).scrollTop() -
                  this.offset.relative.top -
                  this.offset.parent.top,
                V(window).scrollLeft() +
                  V(window).width() -
                  this.helperProportions.width -
                  this.margins.left,
                V(window).scrollTop() +
                  (V(window).height() || n.body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top,
              ])
          : (this.containment = null);
    },
    _convertPositionTo: function (t, e) {
      e = e || this.position;
      var i = "absolute" === t ? 1 : -1,
        t = this._isRootNode(this.scrollParent[0]);
      return {
        top:
          e.top +
          this.offset.relative.top * i +
          this.offset.parent.top * i -
          ("fixed" === this.cssPosition
            ? -this.offset.scroll.top
            : t
            ? 0
            : this.offset.scroll.top) *
            i,
        left:
          e.left +
          this.offset.relative.left * i +
          this.offset.parent.left * i -
          ("fixed" === this.cssPosition
            ? -this.offset.scroll.left
            : t
            ? 0
            : this.offset.scroll.left) *
            i,
      };
    },
    _generatePosition: function (t, e) {
      var i,
        s = this.options,
        n = this._isRootNode(this.scrollParent[0]),
        o = t.pageX,
        a = t.pageY;
      return (
        (n && this.offset.scroll) ||
          (this.offset.scroll = {
            top: this.scrollParent.scrollTop(),
            left: this.scrollParent.scrollLeft(),
          }),
        e &&
          (this.containment &&
            ((i = this.relativeContainer
              ? ((i = this.relativeContainer.offset()),
                [
                  this.containment[0] + i.left,
                  this.containment[1] + i.top,
                  this.containment[2] + i.left,
                  this.containment[3] + i.top,
                ])
              : this.containment),
            t.pageX - this.offset.click.left < i[0] &&
              (o = i[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < i[1] &&
              (a = i[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > i[2] &&
              (o = i[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > i[3] &&
              (a = i[3] + this.offset.click.top)),
          s.grid &&
            ((t = s.grid[1]
              ? this.originalPageY +
                Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1]
              : this.originalPageY),
            (a =
              !i ||
              t - this.offset.click.top >= i[1] ||
              t - this.offset.click.top > i[3]
                ? t
                : t - this.offset.click.top >= i[1]
                ? t - s.grid[1]
                : t + s.grid[1]),
            (t = s.grid[0]
              ? this.originalPageX +
                Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0]
              : this.originalPageX),
            (o =
              !i ||
              t - this.offset.click.left >= i[0] ||
              t - this.offset.click.left > i[2]
                ? t
                : t - this.offset.click.left >= i[0]
                ? t - s.grid[0]
                : t + s.grid[0])),
          "y" === s.axis && (o = this.originalPageX),
          "x" === s.axis && (a = this.originalPageY)),
        {
          top:
            a -
            this.offset.click.top -
            this.offset.relative.top -
            this.offset.parent.top +
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.top
              : n
              ? 0
              : this.offset.scroll.top),
          left:
            o -
            this.offset.click.left -
            this.offset.relative.left -
            this.offset.parent.left +
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.left
              : n
              ? 0
              : this.offset.scroll.left),
        }
      );
    },
    _clear: function () {
      this._removeClass(this.helper, "ui-draggable-dragging"),
        this.helper[0] === this.element[0] ||
          this.cancelHelperRemoval ||
          this.helper.remove(),
        (this.helper = null),
        (this.cancelHelperRemoval = !1),
        this.destroyOnClear && this.destroy();
    },
    _trigger: function (t, e, i) {
      return (
        (i = i || this._uiHash()),
        V.ui.plugin.call(this, t, [e, i, this], !0),
        /^(drag|start|stop)/.test(t) &&
          ((this.positionAbs = this._convertPositionTo("absolute")),
          (i.offset = this.positionAbs)),
        V.Widget.prototype._trigger.call(this, t, e, i)
      );
    },
    plugins: {},
    _uiHash: function () {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs,
      };
    },
  }),
    V.ui.plugin.add("draggable", "connectToSortable", {
      start: function (e, t, i) {
        var s = V.extend({}, t, { item: i.element });
        (i.sortables = []),
          V(i.options.connectToSortable).each(function () {
            var t = V(this).sortable("instance");
            t &&
              !t.options.disabled &&
              (i.sortables.push(t),
              t.refreshPositions(),
              t._trigger("activate", e, s));
          });
      },
      stop: function (e, t, i) {
        var s = V.extend({}, t, { item: i.element });
        (i.cancelHelperRemoval = !1),
          V.each(i.sortables, function () {
            var t = this;
            t.isOver
              ? ((t.isOver = 0),
                (i.cancelHelperRemoval = !0),
                (t.cancelHelperRemoval = !1),
                (t._storedCSS = {
                  position: t.placeholder.css("position"),
                  top: t.placeholder.css("top"),
                  left: t.placeholder.css("left"),
                }),
                t._mouseStop(e),
                (t.options.helper = t.options._helper))
              : ((t.cancelHelperRemoval = !0), t._trigger("deactivate", e, s));
          });
      },
      drag: function (i, s, n) {
        V.each(n.sortables, function () {
          var t = !1,
            e = this;
          (e.positionAbs = n.positionAbs),
            (e.helperProportions = n.helperProportions),
            (e.offset.click = n.offset.click),
            e._intersectsWith(e.containerCache) &&
              ((t = !0),
              V.each(n.sortables, function () {
                return (
                  (this.positionAbs = n.positionAbs),
                  (this.helperProportions = n.helperProportions),
                  (this.offset.click = n.offset.click),
                  (t =
                    this !== e &&
                    this._intersectsWith(this.containerCache) &&
                    V.contains(e.element[0], this.element[0])
                      ? !1
                      : t)
                );
              })),
            t
              ? (e.isOver ||
                  ((e.isOver = 1),
                  (n._parent = s.helper.parent()),
                  (e.currentItem = s.helper
                    .appendTo(e.element)
                    .data("ui-sortable-item", !0)),
                  (e.options._helper = e.options.helper),
                  (e.options.helper = function () {
                    return s.helper[0];
                  }),
                  (i.target = e.currentItem[0]),
                  e._mouseCapture(i, !0),
                  e._mouseStart(i, !0, !0),
                  (e.offset.click.top = n.offset.click.top),
                  (e.offset.click.left = n.offset.click.left),
                  (e.offset.parent.left -=
                    n.offset.parent.left - e.offset.parent.left),
                  (e.offset.parent.top -=
                    n.offset.parent.top - e.offset.parent.top),
                  n._trigger("toSortable", i),
                  (n.dropped = e.element),
                  V.each(n.sortables, function () {
                    this.refreshPositions();
                  }),
                  (n.currentItem = n.element),
                  (e.fromOutside = n)),
                e.currentItem && (e._mouseDrag(i), (s.position = e.position)))
              : e.isOver &&
                ((e.isOver = 0),
                (e.cancelHelperRemoval = !0),
                (e.options._revert = e.options.revert),
                (e.options.revert = !1),
                e._trigger("out", i, e._uiHash(e)),
                e._mouseStop(i, !0),
                (e.options.revert = e.options._revert),
                (e.options.helper = e.options._helper),
                e.placeholder && e.placeholder.remove(),
                s.helper.appendTo(n._parent),
                n._refreshOffsets(i),
                (s.position = n._generatePosition(i, !0)),
                n._trigger("fromSortable", i),
                (n.dropped = !1),
                V.each(n.sortables, function () {
                  this.refreshPositions();
                }));
        });
      },
    }),
    V.ui.plugin.add("draggable", "cursor", {
      start: function (t, e, i) {
        var s = V("body"),
          i = i.options;
        s.css("cursor") && (i._cursor = s.css("cursor")),
          s.css("cursor", i.cursor);
      },
      stop: function (t, e, i) {
        i = i.options;
        i._cursor && V("body").css("cursor", i._cursor);
      },
    }),
    V.ui.plugin.add("draggable", "opacity", {
      start: function (t, e, i) {
        (e = V(e.helper)), (i = i.options);
        e.css("opacity") && (i._opacity = e.css("opacity")),
          e.css("opacity", i.opacity);
      },
      stop: function (t, e, i) {
        i = i.options;
        i._opacity && V(e.helper).css("opacity", i._opacity);
      },
    }),
    V.ui.plugin.add("draggable", "scroll", {
      start: function (t, e, i) {
        i.scrollParentNotHidden ||
          (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
          i.scrollParentNotHidden[0] !== i.document[0] &&
            "HTML" !== i.scrollParentNotHidden[0].tagName &&
            (i.overflowOffset = i.scrollParentNotHidden.offset());
      },
      drag: function (t, e, i) {
        var s = i.options,
          n = !1,
          o = i.scrollParentNotHidden[0],
          a = i.document[0];
        o !== a && "HTML" !== o.tagName
          ? ((s.axis && "x" === s.axis) ||
              (i.overflowOffset.top + o.offsetHeight - t.pageY <
              s.scrollSensitivity
                ? (o.scrollTop = n = o.scrollTop + s.scrollSpeed)
                : t.pageY - i.overflowOffset.top < s.scrollSensitivity &&
                  (o.scrollTop = n = o.scrollTop - s.scrollSpeed)),
            (s.axis && "y" === s.axis) ||
              (i.overflowOffset.left + o.offsetWidth - t.pageX <
              s.scrollSensitivity
                ? (o.scrollLeft = n = o.scrollLeft + s.scrollSpeed)
                : t.pageX - i.overflowOffset.left < s.scrollSensitivity &&
                  (o.scrollLeft = n = o.scrollLeft - s.scrollSpeed)))
          : ((s.axis && "x" === s.axis) ||
              (t.pageY - V(a).scrollTop() < s.scrollSensitivity
                ? (n = V(a).scrollTop(V(a).scrollTop() - s.scrollSpeed))
                : V(window).height() - (t.pageY - V(a).scrollTop()) <
                    s.scrollSensitivity &&
                  (n = V(a).scrollTop(V(a).scrollTop() + s.scrollSpeed))),
            (s.axis && "y" === s.axis) ||
              (t.pageX - V(a).scrollLeft() < s.scrollSensitivity
                ? (n = V(a).scrollLeft(V(a).scrollLeft() - s.scrollSpeed))
                : V(window).width() - (t.pageX - V(a).scrollLeft()) <
                    s.scrollSensitivity &&
                  (n = V(a).scrollLeft(V(a).scrollLeft() + s.scrollSpeed)))),
          !1 !== n &&
            V.ui.ddmanager &&
            !s.dropBehaviour &&
            V.ui.ddmanager.prepareOffsets(i, t);
      },
    }),
    V.ui.plugin.add("draggable", "snap", {
      start: function (t, e, i) {
        var s = i.options;
        (i.snapElements = []),
          V(
            s.snap.constructor !== String
              ? s.snap.items || ":data(ui-draggable)"
              : s.snap
          ).each(function () {
            var t = V(this),
              e = t.offset();
            this !== i.element[0] &&
              i.snapElements.push({
                item: this,
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: e.top,
                left: e.left,
              });
          });
      },
      drag: function (t, e, i) {
        for (
          var s,
            n,
            o,
            a,
            r,
            l,
            h,
            c,
            u,
            d = i.options,
            p = d.snapTolerance,
            f = e.offset.left,
            g = f + i.helperProportions.width,
            m = e.offset.top,
            _ = m + i.helperProportions.height,
            v = i.snapElements.length - 1;
          0 <= v;
          v--
        )
          (l =
            (r = i.snapElements[v].left - i.margins.left) +
            i.snapElements[v].width),
            (c =
              (h = i.snapElements[v].top - i.margins.top) +
              i.snapElements[v].height),
            g < r - p ||
            l + p < f ||
            _ < h - p ||
            c + p < m ||
            !V.contains(
              i.snapElements[v].item.ownerDocument,
              i.snapElements[v].item
            )
              ? (i.snapElements[v].snapping &&
                  i.options.snap.release &&
                  i.options.snap.release.call(
                    i.element,
                    t,
                    V.extend(i._uiHash(), { snapItem: i.snapElements[v].item })
                  ),
                (i.snapElements[v].snapping = !1))
              : ("inner" !== d.snapMode &&
                  ((s = Math.abs(h - _) <= p),
                  (n = Math.abs(c - m) <= p),
                  (o = Math.abs(r - g) <= p),
                  (a = Math.abs(l - f) <= p),
                  s &&
                    (e.position.top = i._convertPositionTo("relative", {
                      top: h - i.helperProportions.height,
                      left: 0,
                    }).top),
                  n &&
                    (e.position.top = i._convertPositionTo("relative", {
                      top: c,
                      left: 0,
                    }).top),
                  o &&
                    (e.position.left = i._convertPositionTo("relative", {
                      top: 0,
                      left: r - i.helperProportions.width,
                    }).left),
                  a &&
                    (e.position.left = i._convertPositionTo("relative", {
                      top: 0,
                      left: l,
                    }).left)),
                (u = s || n || o || a),
                "outer" !== d.snapMode &&
                  ((s = Math.abs(h - m) <= p),
                  (n = Math.abs(c - _) <= p),
                  (o = Math.abs(r - f) <= p),
                  (a = Math.abs(l - g) <= p),
                  s &&
                    (e.position.top = i._convertPositionTo("relative", {
                      top: h,
                      left: 0,
                    }).top),
                  n &&
                    (e.position.top = i._convertPositionTo("relative", {
                      top: c - i.helperProportions.height,
                      left: 0,
                    }).top),
                  o &&
                    (e.position.left = i._convertPositionTo("relative", {
                      top: 0,
                      left: r,
                    }).left),
                  a &&
                    (e.position.left = i._convertPositionTo("relative", {
                      top: 0,
                      left: l - i.helperProportions.width,
                    }).left)),
                !i.snapElements[v].snapping &&
                  (s || n || o || a || u) &&
                  i.options.snap.snap &&
                  i.options.snap.snap.call(
                    i.element,
                    t,
                    V.extend(i._uiHash(), { snapItem: i.snapElements[v].item })
                  ),
                (i.snapElements[v].snapping = s || n || o || a || u));
      },
    }),
    V.ui.plugin.add("draggable", "stack", {
      start: function (t, e, i) {
        var s,
          i = i.options,
          i = V.makeArray(V(i.stack)).sort(function (t, e) {
            return (
              (parseInt(V(t).css("zIndex"), 10) || 0) -
              (parseInt(V(e).css("zIndex"), 10) || 0)
            );
          });
        i.length &&
          ((s = parseInt(V(i[0]).css("zIndex"), 10) || 0),
          V(i).each(function (t) {
            V(this).css("zIndex", s + t);
          }),
          this.css("zIndex", s + i.length));
      },
    }),
    V.ui.plugin.add("draggable", "zIndex", {
      start: function (t, e, i) {
        (e = V(e.helper)), (i = i.options);
        e.css("zIndex") && (i._zIndex = e.css("zIndex")),
          e.css("zIndex", i.zIndex);
      },
      stop: function (t, e, i) {
        i = i.options;
        i._zIndex && V(e.helper).css("zIndex", i._zIndex);
      },
    });
  V.ui.draggable;
  V.widget("ui.resizable", V.ui.mouse, {
    version: "1.13.2",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" },
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null,
    },
    _num: function (t) {
      return parseFloat(t) || 0;
    },
    _isNumber: function (t) {
      return !isNaN(parseFloat(t));
    },
    _hasScroll: function (t, e) {
      if ("hidden" === V(t).css("overflow")) return !1;
      var i = e && "left" === e ? "scrollLeft" : "scrollTop",
        e = !1;
      if (0 < t[i]) return !0;
      try {
        (t[i] = 1), (e = 0 < t[i]), (t[i] = 0);
      } catch (t) {}
      return e;
    },
    _create: function () {
      var t,
        e = this.options,
        i = this;
      this._addClass("ui-resizable"),
        V.extend(this, {
          _aspectRatio: !!e.aspectRatio,
          aspectRatio: e.aspectRatio,
          originalElement: this.element,
          _proportionallyResizeElements: [],
          _helper:
            e.helper || e.ghost || e.animate
              ? e.helper || "ui-resizable-helper"
              : null,
        }),
        this.element[0].nodeName.match(
          /^(canvas|textarea|input|select|button|img)$/i
        ) &&
          (this.element.wrap(
            V("<div class='ui-wrapper'></div>").css({
              overflow: "hidden",
              position: this.element.css("position"),
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
              top: this.element.css("top"),
              left: this.element.css("left"),
            })
          ),
          (this.element = this.element
            .parent()
            .data("ui-resizable", this.element.resizable("instance"))),
          (this.elementIsWrapper = !0),
          (t = {
            marginTop: this.originalElement.css("marginTop"),
            marginRight: this.originalElement.css("marginRight"),
            marginBottom: this.originalElement.css("marginBottom"),
            marginLeft: this.originalElement.css("marginLeft"),
          }),
          this.element.css(t),
          this.originalElement.css("margin", 0),
          (this.originalResizeStyle = this.originalElement.css("resize")),
          this.originalElement.css("resize", "none"),
          this._proportionallyResizeElements.push(
            this.originalElement.css({
              position: "static",
              zoom: 1,
              display: "block",
            })
          ),
          this.originalElement.css(t),
          this._proportionallyResize()),
        this._setupHandles(),
        e.autoHide &&
          V(this.element)
            .on("mouseenter", function () {
              e.disabled ||
                (i._removeClass("ui-resizable-autohide"), i._handles.show());
            })
            .on("mouseleave", function () {
              e.disabled ||
                i.resizing ||
                (i._addClass("ui-resizable-autohide"), i._handles.hide());
            }),
        this._mouseInit();
    },
    _destroy: function () {
      this._mouseDestroy(), this._addedHandles.remove();
      function t(t) {
        V(t)
          .removeData("resizable")
          .removeData("ui-resizable")
          .off(".resizable");
      }
      var e;
      return (
        this.elementIsWrapper &&
          (t(this.element),
          (e = this.element),
          this.originalElement
            .css({
              position: e.css("position"),
              width: e.outerWidth(),
              height: e.outerHeight(),
              top: e.css("top"),
              left: e.css("left"),
            })
            .insertAfter(e),
          e.remove()),
        this.originalElement.css("resize", this.originalResizeStyle),
        t(this.originalElement),
        this
      );
    },
    _setOption: function (t, e) {
      switch ((this._super(t, e), t)) {
        case "handles":
          this._removeHandles(), this._setupHandles();
          break;
        case "aspectRatio":
          this._aspectRatio = !!e;
      }
    },
    _setupHandles: function () {
      var t,
        e,
        i,
        s,
        n,
        o = this.options,
        a = this;
      if (
        ((this.handles =
          o.handles ||
          (V(".ui-resizable-handle", this.element).length
            ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw",
              }
            : "e,s,se")),
        (this._handles = V()),
        (this._addedHandles = V()),
        this.handles.constructor === String)
      )
        for (
          "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
            i = this.handles.split(","),
            this.handles = {},
            e = 0;
          e < i.length;
          e++
        )
          (s = "ui-resizable-" + (t = String.prototype.trim.call(i[e]))),
            (n = V("<div>")),
            this._addClass(n, "ui-resizable-handle " + s),
            n.css({ zIndex: o.zIndex }),
            (this.handles[t] = ".ui-resizable-" + t),
            this.element.children(this.handles[t]).length ||
              (this.element.append(n),
              (this._addedHandles = this._addedHandles.add(n)));
      (this._renderAxis = function (t) {
        var e, i, s;
        for (e in ((t = t || this.element), this.handles))
          this.handles[e].constructor === String
            ? (this.handles[e] = this.element
                .children(this.handles[e])
                .first()
                .show())
            : (this.handles[e].jquery || this.handles[e].nodeType) &&
              ((this.handles[e] = V(this.handles[e])),
              this._on(this.handles[e], { mousedown: a._mouseDown })),
            this.elementIsWrapper &&
              this.originalElement[0].nodeName.match(
                /^(textarea|input|select|button)$/i
              ) &&
              ((i = V(this.handles[e], this.element)),
              (s = /sw|ne|nw|se|n|s/.test(e)
                ? i.outerHeight()
                : i.outerWidth()),
              (i = [
                "padding",
                /ne|nw|n/.test(e)
                  ? "Top"
                  : /se|sw|s/.test(e)
                  ? "Bottom"
                  : /^e$/.test(e)
                  ? "Right"
                  : "Left",
              ].join("")),
              t.css(i, s),
              this._proportionallyResize()),
            (this._handles = this._handles.add(this.handles[e]));
      }),
        this._renderAxis(this.element),
        (this._handles = this._handles.add(
          this.element.find(".ui-resizable-handle")
        )),
        this._handles.disableSelection(),
        this._handles.on("mouseover", function () {
          a.resizing ||
            (this.className &&
              (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
            (a.axis = n && n[1] ? n[1] : "se"));
        }),
        o.autoHide &&
          (this._handles.hide(), this._addClass("ui-resizable-autohide"));
    },
    _removeHandles: function () {
      this._addedHandles.remove();
    },
    _mouseCapture: function (t) {
      var e,
        i,
        s = !1;
      for (e in this.handles)
        ((i = V(this.handles[e])[0]) !== t.target &&
          !V.contains(i, t.target)) ||
          (s = !0);
      return !this.options.disabled && s;
    },
    _mouseStart: function (t) {
      var e,
        i,
        s = this.options,
        n = this.element;
      return (
        (this.resizing = !0),
        this._renderProxy(),
        (e = this._num(this.helper.css("left"))),
        (i = this._num(this.helper.css("top"))),
        s.containment &&
          ((e += V(s.containment).scrollLeft() || 0),
          (i += V(s.containment).scrollTop() || 0)),
        (this.offset = this.helper.offset()),
        (this.position = { left: e, top: i }),
        (this.size = this._helper
          ? { width: this.helper.width(), height: this.helper.height() }
          : { width: n.width(), height: n.height() }),
        (this.originalSize = this._helper
          ? { width: n.outerWidth(), height: n.outerHeight() }
          : { width: n.width(), height: n.height() }),
        (this.sizeDiff = {
          width: n.outerWidth() - n.width(),
          height: n.outerHeight() - n.height(),
        }),
        (this.originalPosition = { left: e, top: i }),
        (this.originalMousePosition = { left: t.pageX, top: t.pageY }),
        (this.aspectRatio =
          "number" == typeof s.aspectRatio
            ? s.aspectRatio
            : this.originalSize.width / this.originalSize.height || 1),
        (s = V(".ui-resizable-" + this.axis).css("cursor")),
        V("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
        this._addClass("ui-resizable-resizing"),
        this._propagate("start", t),
        !0
      );
    },
    _mouseDrag: function (t) {
      var e = this.originalMousePosition,
        i = this.axis,
        s = t.pageX - e.left || 0,
        e = t.pageY - e.top || 0,
        i = this._change[i];
      return (
        this._updatePrevProperties(),
        i &&
          ((e = i.apply(this, [t, s, e])),
          this._updateVirtualBoundaries(t.shiftKey),
          (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)),
          (e = this._respectSize(e, t)),
          this._updateCache(e),
          this._propagate("resize", t),
          (e = this._applyChanges()),
          !this._helper &&
            this._proportionallyResizeElements.length &&
            this._proportionallyResize(),
          V.isEmptyObject(e) ||
            (this._updatePrevProperties(),
            this._trigger("resize", t, this.ui()),
            this._applyChanges())),
        !1
      );
    },
    _mouseStop: function (t) {
      this.resizing = !1;
      var e,
        i,
        s,
        n = this.options,
        o = this;
      return (
        this._helper &&
          ((s =
            (e =
              (i = this._proportionallyResizeElements).length &&
              /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left")
              ? 0
              : o.sizeDiff.height),
          (i = e ? 0 : o.sizeDiff.width),
          (e = { width: o.helper.width() - i, height: o.helper.height() - s }),
          (i =
            parseFloat(o.element.css("left")) +
              (o.position.left - o.originalPosition.left) || null),
          (s =
            parseFloat(o.element.css("top")) +
              (o.position.top - o.originalPosition.top) || null),
          n.animate || this.element.css(V.extend(e, { top: s, left: i })),
          o.helper.height(o.size.height),
          o.helper.width(o.size.width),
          this._helper && !n.animate && this._proportionallyResize()),
        V("body").css("cursor", "auto"),
        this._removeClass("ui-resizable-resizing"),
        this._propagate("stop", t),
        this._helper && this.helper.remove(),
        !1
      );
    },
    _updatePrevProperties: function () {
      (this.prevPosition = {
        top: this.position.top,
        left: this.position.left,
      }),
        (this.prevSize = { width: this.size.width, height: this.size.height });
    },
    _applyChanges: function () {
      var t = {};
      return (
        this.position.top !== this.prevPosition.top &&
          (t.top = this.position.top + "px"),
        this.position.left !== this.prevPosition.left &&
          (t.left = this.position.left + "px"),
        this.size.width !== this.prevSize.width &&
          (t.width = this.size.width + "px"),
        this.size.height !== this.prevSize.height &&
          (t.height = this.size.height + "px"),
        this.helper.css(t),
        t
      );
    },
    _updateVirtualBoundaries: function (t) {
      var e,
        i,
        s = this.options,
        n = {
          minWidth: this._isNumber(s.minWidth) ? s.minWidth : 0,
          maxWidth: this._isNumber(s.maxWidth) ? s.maxWidth : 1 / 0,
          minHeight: this._isNumber(s.minHeight) ? s.minHeight : 0,
          maxHeight: this._isNumber(s.maxHeight) ? s.maxHeight : 1 / 0,
        };
      (this._aspectRatio || t) &&
        ((e = n.minHeight * this.aspectRatio),
        (i = n.minWidth / this.aspectRatio),
        (s = n.maxHeight * this.aspectRatio),
        (t = n.maxWidth / this.aspectRatio),
        e > n.minWidth && (n.minWidth = e),
        i > n.minHeight && (n.minHeight = i),
        s < n.maxWidth && (n.maxWidth = s),
        t < n.maxHeight && (n.maxHeight = t)),
        (this._vBoundaries = n);
    },
    _updateCache: function (t) {
      (this.offset = this.helper.offset()),
        this._isNumber(t.left) && (this.position.left = t.left),
        this._isNumber(t.top) && (this.position.top = t.top),
        this._isNumber(t.height) && (this.size.height = t.height),
        this._isNumber(t.width) && (this.size.width = t.width);
    },
    _updateRatio: function (t) {
      var e = this.position,
        i = this.size,
        s = this.axis;
      return (
        this._isNumber(t.height)
          ? (t.width = t.height * this.aspectRatio)
          : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
        "sw" === s && ((t.left = e.left + (i.width - t.width)), (t.top = null)),
        "nw" === s &&
          ((t.top = e.top + (i.height - t.height)),
          (t.left = e.left + (i.width - t.width))),
        t
      );
    },
    _respectSize: function (t) {
      var e = this._vBoundaries,
        i = this.axis,
        s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
        n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
        o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
        a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
        r = this.originalPosition.left + this.originalSize.width,
        l = this.originalPosition.top + this.originalSize.height,
        h = /sw|nw|w/.test(i),
        i = /nw|ne|n/.test(i);
      return (
        o && (t.width = e.minWidth),
        a && (t.height = e.minHeight),
        s && (t.width = e.maxWidth),
        n && (t.height = e.maxHeight),
        o && h && (t.left = r - e.minWidth),
        s && h && (t.left = r - e.maxWidth),
        a && i && (t.top = l - e.minHeight),
        n && i && (t.top = l - e.maxHeight),
        t.width || t.height || t.left || !t.top
          ? t.width || t.height || t.top || !t.left || (t.left = null)
          : (t.top = null),
        t
      );
    },
    _getPaddingPlusBorderDimensions: function (t) {
      for (
        var e = 0,
          i = [],
          s = [
            t.css("borderTopWidth"),
            t.css("borderRightWidth"),
            t.css("borderBottomWidth"),
            t.css("borderLeftWidth"),
          ],
          n = [
            t.css("paddingTop"),
            t.css("paddingRight"),
            t.css("paddingBottom"),
            t.css("paddingLeft"),
          ];
        e < 4;
        e++
      )
        (i[e] = parseFloat(s[e]) || 0), (i[e] += parseFloat(n[e]) || 0);
      return { height: i[0] + i[2], width: i[1] + i[3] };
    },
    _proportionallyResize: function () {
      if (this._proportionallyResizeElements.length)
        for (
          var t, e = 0, i = this.helper || this.element;
          e < this._proportionallyResizeElements.length;
          e++
        )
          (t = this._proportionallyResizeElements[e]),
            this.outerDimensions ||
              (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
            t.css({
              height: i.height() - this.outerDimensions.height || 0,
              width: i.width() - this.outerDimensions.width || 0,
            });
    },
    _renderProxy: function () {
      var t = this.element,
        e = this.options;
      (this.elementOffset = t.offset()),
        this._helper
          ? ((this.helper =
              this.helper || V("<div></div>").css({ overflow: "hidden" })),
            this._addClass(this.helper, this._helper),
            this.helper.css({
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
              position: "absolute",
              left: this.elementOffset.left + "px",
              top: this.elementOffset.top + "px",
              zIndex: ++e.zIndex,
            }),
            this.helper.appendTo("body").disableSelection())
          : (this.helper = this.element);
    },
    _change: {
      e: function (t, e) {
        return { width: this.originalSize.width + e };
      },
      w: function (t, e) {
        var i = this.originalSize;
        return { left: this.originalPosition.left + e, width: i.width - e };
      },
      n: function (t, e, i) {
        var s = this.originalSize;
        return { top: this.originalPosition.top + i, height: s.height - i };
      },
      s: function (t, e, i) {
        return { height: this.originalSize.height + i };
      },
      se: function (t, e, i) {
        return V.extend(
          this._change.s.apply(this, arguments),
          this._change.e.apply(this, [t, e, i])
        );
      },
      sw: function (t, e, i) {
        return V.extend(
          this._change.s.apply(this, arguments),
          this._change.w.apply(this, [t, e, i])
        );
      },
      ne: function (t, e, i) {
        return V.extend(
          this._change.n.apply(this, arguments),
          this._change.e.apply(this, [t, e, i])
        );
      },
      nw: function (t, e, i) {
        return V.extend(
          this._change.n.apply(this, arguments),
          this._change.w.apply(this, [t, e, i])
        );
      },
    },
    _propagate: function (t, e) {
      V.ui.plugin.call(this, t, [e, this.ui()]),
        "resize" !== t && this._trigger(t, e, this.ui());
    },
    plugins: {},
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition,
      };
    },
  }),
    V.ui.plugin.add("resizable", "animate", {
      stop: function (e) {
        var i = V(this).resizable("instance"),
          t = i.options,
          s = i._proportionallyResizeElements,
          n = s.length && /textarea/i.test(s[0].nodeName),
          o = n && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
          a = n ? 0 : i.sizeDiff.width,
          n = { width: i.size.width - a, height: i.size.height - o },
          a =
            parseFloat(i.element.css("left")) +
              (i.position.left - i.originalPosition.left) || null,
          o =
            parseFloat(i.element.css("top")) +
              (i.position.top - i.originalPosition.top) || null;
        i.element.animate(V.extend(n, o && a ? { top: o, left: a } : {}), {
          duration: t.animateDuration,
          easing: t.animateEasing,
          step: function () {
            var t = {
              width: parseFloat(i.element.css("width")),
              height: parseFloat(i.element.css("height")),
              top: parseFloat(i.element.css("top")),
              left: parseFloat(i.element.css("left")),
            };
            s && s.length && V(s[0]).css({ width: t.width, height: t.height }),
              i._updateCache(t),
              i._propagate("resize", e);
          },
        });
      },
    }),
    V.ui.plugin.add("resizable", "containment", {
      start: function () {
        var i,
          s,
          n = V(this).resizable("instance"),
          t = n.options,
          e = n.element,
          o = t.containment,
          a =
            o instanceof V
              ? o.get(0)
              : /parent/.test(o)
              ? e.parent().get(0)
              : o;
        a &&
          ((n.containerElement = V(a)),
          /document/.test(o) || o === document
            ? ((n.containerOffset = { left: 0, top: 0 }),
              (n.containerPosition = { left: 0, top: 0 }),
              (n.parentData = {
                element: V(document),
                left: 0,
                top: 0,
                width: V(document).width(),
                height:
                  V(document).height() || document.body.parentNode.scrollHeight,
              }))
            : ((i = V(a)),
              (s = []),
              V(["Top", "Right", "Left", "Bottom"]).each(function (t, e) {
                s[t] = n._num(i.css("padding" + e));
              }),
              (n.containerOffset = i.offset()),
              (n.containerPosition = i.position()),
              (n.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1],
              }),
              (t = n.containerOffset),
              (e = n.containerSize.height),
              (o = n.containerSize.width),
              (o = n._hasScroll(a, "left") ? a.scrollWidth : o),
              (e = n._hasScroll(a) ? a.scrollHeight : e),
              (n.parentData = {
                element: a,
                left: t.left,
                top: t.top,
                width: o,
                height: e,
              })));
      },
      resize: function (t) {
        var e = V(this).resizable("instance"),
          i = e.options,
          s = e.containerOffset,
          n = e.position,
          o = e._aspectRatio || t.shiftKey,
          a = { top: 0, left: 0 },
          r = e.containerElement,
          t = !0;
        r[0] !== document && /static/.test(r.css("position")) && (a = s),
          n.left < (e._helper ? s.left : 0) &&
            ((e.size.width =
              e.size.width +
              (e._helper
                ? e.position.left - s.left
                : e.position.left - a.left)),
            o && ((e.size.height = e.size.width / e.aspectRatio), (t = !1)),
            (e.position.left = i.helper ? s.left : 0)),
          n.top < (e._helper ? s.top : 0) &&
            ((e.size.height =
              e.size.height +
              (e._helper ? e.position.top - s.top : e.position.top)),
            o && ((e.size.width = e.size.height * e.aspectRatio), (t = !1)),
            (e.position.top = e._helper ? s.top : 0)),
          (i = e.containerElement.get(0) === e.element.parent().get(0)),
          (n = /relative|absolute/.test(e.containerElement.css("position"))),
          i && n
            ? ((e.offset.left = e.parentData.left + e.position.left),
              (e.offset.top = e.parentData.top + e.position.top))
            : ((e.offset.left = e.element.offset().left),
              (e.offset.top = e.element.offset().top)),
          (n = Math.abs(
            e.sizeDiff.width +
              (e._helper ? e.offset.left - a.left : e.offset.left - s.left)
          )),
          (s = Math.abs(
            e.sizeDiff.height +
              (e._helper ? e.offset.top - a.top : e.offset.top - s.top)
          )),
          n + e.size.width >= e.parentData.width &&
            ((e.size.width = e.parentData.width - n),
            o && ((e.size.height = e.size.width / e.aspectRatio), (t = !1))),
          s + e.size.height >= e.parentData.height &&
            ((e.size.height = e.parentData.height - s),
            o && ((e.size.width = e.size.height * e.aspectRatio), (t = !1))),
          t ||
            ((e.position.left = e.prevPosition.left),
            (e.position.top = e.prevPosition.top),
            (e.size.width = e.prevSize.width),
            (e.size.height = e.prevSize.height));
      },
      stop: function () {
        var t = V(this).resizable("instance"),
          e = t.options,
          i = t.containerOffset,
          s = t.containerPosition,
          n = t.containerElement,
          o = V(t.helper),
          a = o.offset(),
          r = o.outerWidth() - t.sizeDiff.width,
          o = o.outerHeight() - t.sizeDiff.height;
        t._helper &&
          !e.animate &&
          /relative/.test(n.css("position")) &&
          V(this).css({ left: a.left - s.left - i.left, width: r, height: o }),
          t._helper &&
            !e.animate &&
            /static/.test(n.css("position")) &&
            V(this).css({
              left: a.left - s.left - i.left,
              width: r,
              height: o,
            });
      },
    }),
    V.ui.plugin.add("resizable", "alsoResize", {
      start: function () {
        var t = V(this).resizable("instance").options;
        V(t.alsoResize).each(function () {
          var t = V(this);
          t.data("ui-resizable-alsoresize", {
            width: parseFloat(t.width()),
            height: parseFloat(t.height()),
            left: parseFloat(t.css("left")),
            top: parseFloat(t.css("top")),
          });
        });
      },
      resize: function (t, i) {
        var e = V(this).resizable("instance"),
          s = e.options,
          n = e.originalSize,
          o = e.originalPosition,
          a = {
            height: e.size.height - n.height || 0,
            width: e.size.width - n.width || 0,
            top: e.position.top - o.top || 0,
            left: e.position.left - o.left || 0,
          };
        V(s.alsoResize).each(function () {
          var t = V(this),
            s = V(this).data("ui-resizable-alsoresize"),
            n = {},
            e = t.parents(i.originalElement[0]).length
              ? ["width", "height"]
              : ["width", "height", "top", "left"];
          V.each(e, function (t, e) {
            var i = (s[e] || 0) + (a[e] || 0);
            i && 0 <= i && (n[e] = i || null);
          }),
            t.css(n);
        });
      },
      stop: function () {
        V(this).removeData("ui-resizable-alsoresize");
      },
    }),
    V.ui.plugin.add("resizable", "ghost", {
      start: function () {
        var t = V(this).resizable("instance"),
          e = t.size;
        (t.ghost = t.originalElement.clone()),
          t.ghost.css({
            opacity: 0.25,
            display: "block",
            position: "relative",
            height: e.height,
            width: e.width,
            margin: 0,
            left: 0,
            top: 0,
          }),
          t._addClass(t.ghost, "ui-resizable-ghost"),
          !1 !== V.uiBackCompat &&
            "string" == typeof t.options.ghost &&
            t.ghost.addClass(this.options.ghost),
          t.ghost.appendTo(t.helper);
      },
      resize: function () {
        var t = V(this).resizable("instance");
        t.ghost &&
          t.ghost.css({
            position: "relative",
            height: t.size.height,
            width: t.size.width,
          });
      },
      stop: function () {
        var t = V(this).resizable("instance");
        t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
      },
    }),
    V.ui.plugin.add("resizable", "grid", {
      resize: function () {
        var t,
          e = V(this).resizable("instance"),
          i = e.options,
          s = e.size,
          n = e.originalSize,
          o = e.originalPosition,
          a = e.axis,
          r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
          l = r[0] || 1,
          h = r[1] || 1,
          c = Math.round((s.width - n.width) / l) * l,
          u = Math.round((s.height - n.height) / h) * h,
          d = n.width + c,
          p = n.height + u,
          f = i.maxWidth && i.maxWidth < d,
          g = i.maxHeight && i.maxHeight < p,
          m = i.minWidth && i.minWidth > d,
          s = i.minHeight && i.minHeight > p;
        (i.grid = r),
          m && (d += l),
          s && (p += h),
          f && (d -= l),
          g && (p -= h),
          /^(se|s|e)$/.test(a)
            ? ((e.size.width = d), (e.size.height = p))
            : /^(ne)$/.test(a)
            ? ((e.size.width = d),
              (e.size.height = p),
              (e.position.top = o.top - u))
            : /^(sw)$/.test(a)
            ? ((e.size.width = d),
              (e.size.height = p),
              (e.position.left = o.left - c))
            : ((p - h <= 0 || d - l <= 0) &&
                (t = e._getPaddingPlusBorderDimensions(this)),
              0 < p - h
                ? ((e.size.height = p), (e.position.top = o.top - u))
                : ((p = h - t.height),
                  (e.size.height = p),
                  (e.position.top = o.top + n.height - p)),
              0 < d - l
                ? ((e.size.width = d), (e.position.left = o.left - c))
                : ((d = l - t.width),
                  (e.size.width = d),
                  (e.position.left = o.left + n.width - d)));
      },
    });
  V.ui.resizable;
  V.widget("ui.dialog", {
    version: "1.13.2",
    options: {
      appendTo: "body",
      autoOpen: !0,
      buttons: [],
      classes: {
        "ui-dialog": "ui-corner-all",
        "ui-dialog-titlebar": "ui-corner-all",
      },
      closeOnEscape: !0,
      closeText: "Close",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        using: function (t) {
          var e = V(this).css(t).offset().top;
          e < 0 && V(this).css("top", t.top - e);
        },
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null,
    },
    sizeRelatedOptions: {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0,
    },
    resizableRelatedOptions: {
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
    },
    _create: function () {
      (this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height,
      }),
        (this.originalPosition = {
          parent: this.element.parent(),
          index: this.element.parent().children().index(this.element),
        }),
        (this.originalTitle = this.element.attr("title")),
        null == this.options.title &&
          null != this.originalTitle &&
          (this.options.title = this.originalTitle),
        this.options.disabled && (this.options.disabled = !1),
        this._createWrapper(),
        this.element.show().removeAttr("title").appendTo(this.uiDialog),
        this._addClass("ui-dialog-content", "ui-widget-content"),
        this._createTitlebar(),
        this._createButtonPane(),
        this.options.draggable && V.fn.draggable && this._makeDraggable(),
        this.options.resizable && V.fn.resizable && this._makeResizable(),
        (this._isOpen = !1),
        this._trackFocus();
    },
    _init: function () {
      this.options.autoOpen && this.open();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return t && (t.jquery || t.nodeType)
        ? V(t)
        : this.document.find(t || "body").eq(0);
    },
    _destroy: function () {
      var t,
        e = this.originalPosition;
      this._untrackInstance(),
        this._destroyOverlay(),
        this.element.removeUniqueId().css(this.originalCss).detach(),
        this.uiDialog.remove(),
        this.originalTitle && this.element.attr("title", this.originalTitle),
        (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0]
          ? t.before(this.element)
          : e.parent.append(this.element);
    },
    widget: function () {
      return this.uiDialog;
    },
    disable: V.noop,
    enable: V.noop,
    close: function (t) {
      var e = this;
      this._isOpen &&
        !1 !== this._trigger("beforeClose", t) &&
        ((this._isOpen = !1),
        (this._focusedElement = null),
        this._destroyOverlay(),
        this._untrackInstance(),
        this.opener.filter(":focusable").trigger("focus").length ||
          V.ui.safeBlur(V.ui.safeActiveElement(this.document[0])),
        this._hide(this.uiDialog, this.options.hide, function () {
          e._trigger("close", t);
        }));
    },
    isOpen: function () {
      return this._isOpen;
    },
    moveToTop: function () {
      this._moveToTop();
    },
    _moveToTop: function (t, e) {
      var i = !1,
        s = this.uiDialog
          .siblings(".ui-front:visible")
          .map(function () {
            return +V(this).css("z-index");
          })
          .get(),
        s = Math.max.apply(null, s);
      return (
        s >= +this.uiDialog.css("z-index") &&
          (this.uiDialog.css("z-index", s + 1), (i = !0)),
        i && !e && this._trigger("focus", t),
        i
      );
    },
    open: function () {
      var t = this;
      this._isOpen
        ? this._moveToTop() && this._focusTabbable()
        : ((this._isOpen = !0),
          (this.opener = V(V.ui.safeActiveElement(this.document[0]))),
          this._size(),
          this._position(),
          this._createOverlay(),
          this._moveToTop(null, !0),
          this.overlay &&
            this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
          this._show(this.uiDialog, this.options.show, function () {
            t._focusTabbable(), t._trigger("focus");
          }),
          this._makeFocusTarget(),
          this._trigger("open"));
    },
    _focusTabbable: function () {
      var t = this._focusedElement;
      (t = !(t = !(t = !(t = !(t = t || this.element.find("[autofocus]")).length
        ? this.element.find(":tabbable")
        : t).length
        ? this.uiDialogButtonPane.find(":tabbable")
        : t).length
        ? this.uiDialogTitlebarClose.filter(":tabbable")
        : t).length
        ? this.uiDialog
        : t)
        .eq(0)
        .trigger("focus");
    },
    _restoreTabbableFocus: function () {
      var t = V.ui.safeActiveElement(this.document[0]);
      this.uiDialog[0] === t ||
        V.contains(this.uiDialog[0], t) ||
        this._focusTabbable();
    },
    _keepFocus: function (t) {
      t.preventDefault(),
        this._restoreTabbableFocus(),
        this._delay(this._restoreTabbableFocus);
    },
    _createWrapper: function () {
      (this.uiDialog = V("<div>")
        .hide()
        .attr({ tabIndex: -1, role: "dialog" })
        .appendTo(this._appendTo())),
        this._addClass(
          this.uiDialog,
          "ui-dialog",
          "ui-widget ui-widget-content ui-front"
        ),
        this._on(this.uiDialog, {
          keydown: function (t) {
            if (
              this.options.closeOnEscape &&
              !t.isDefaultPrevented() &&
              t.keyCode &&
              t.keyCode === V.ui.keyCode.ESCAPE
            )
              return t.preventDefault(), void this.close(t);
            var e, i, s;
            t.keyCode !== V.ui.keyCode.TAB ||
              t.isDefaultPrevented() ||
              ((e = this.uiDialog.find(":tabbable")),
              (i = e.first()),
              (s = e.last()),
              (t.target !== s[0] && t.target !== this.uiDialog[0]) || t.shiftKey
                ? (t.target !== i[0] && t.target !== this.uiDialog[0]) ||
                  !t.shiftKey ||
                  (this._delay(function () {
                    s.trigger("focus");
                  }),
                  t.preventDefault())
                : (this._delay(function () {
                    i.trigger("focus");
                  }),
                  t.preventDefault()));
          },
          mousedown: function (t) {
            this._moveToTop(t) && this._focusTabbable();
          },
        }),
        this.element.find("[aria-describedby]").length ||
          this.uiDialog.attr({
            "aria-describedby": this.element.uniqueId().attr("id"),
          });
    },
    _createTitlebar: function () {
      var t;
      (this.uiDialogTitlebar = V("<div>")),
        this._addClass(
          this.uiDialogTitlebar,
          "ui-dialog-titlebar",
          "ui-widget-header ui-helper-clearfix"
        ),
        this._on(this.uiDialogTitlebar, {
          mousedown: function (t) {
            V(t.target).closest(".ui-dialog-titlebar-close") ||
              this.uiDialog.trigger("focus");
          },
        }),
        (this.uiDialogTitlebarClose = V("<button type='button'></button>")
          .button({
            label: V("<a>").text(this.options.closeText).html(),
            icon: "ui-icon-closethick",
            showLabel: !1,
          })
          .appendTo(this.uiDialogTitlebar)),
        this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"),
        this._on(this.uiDialogTitlebarClose, {
          click: function (t) {
            t.preventDefault(), this.close(t);
          },
        }),
        (t = V("<span>").uniqueId().prependTo(this.uiDialogTitlebar)),
        this._addClass(t, "ui-dialog-title"),
        this._title(t),
        this.uiDialogTitlebar.prependTo(this.uiDialog),
        this.uiDialog.attr({ "aria-labelledby": t.attr("id") });
    },
    _title: function (t) {
      this.options.title ? t.text(this.options.title) : t.html("&#160;");
    },
    _createButtonPane: function () {
      (this.uiDialogButtonPane = V("<div>")),
        this._addClass(
          this.uiDialogButtonPane,
          "ui-dialog-buttonpane",
          "ui-widget-content ui-helper-clearfix"
        ),
        (this.uiButtonSet = V("<div>").appendTo(this.uiDialogButtonPane)),
        this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
        this._createButtons();
    },
    _createButtons: function () {
      var s = this,
        t = this.options.buttons;
      this.uiDialogButtonPane.remove(),
        this.uiButtonSet.empty(),
        V.isEmptyObject(t) || (Array.isArray(t) && !t.length)
          ? this._removeClass(this.uiDialog, "ui-dialog-buttons")
          : (V.each(t, function (t, e) {
              var i;
              (e = V.extend(
                { type: "button" },
                (e = "function" == typeof e ? { click: e, text: t } : e)
              )),
                (i = e.click),
                (t = {
                  icon: e.icon,
                  iconPosition: e.iconPosition,
                  showLabel: e.showLabel,
                  icons: e.icons,
                  text: e.text,
                }),
                delete e.click,
                delete e.icon,
                delete e.iconPosition,
                delete e.showLabel,
                delete e.icons,
                "boolean" == typeof e.text && delete e.text,
                V("<button></button>", e)
                  .button(t)
                  .appendTo(s.uiButtonSet)
                  .on("click", function () {
                    i.apply(s.element[0], arguments);
                  });
            }),
            this._addClass(this.uiDialog, "ui-dialog-buttons"),
            this.uiDialogButtonPane.appendTo(this.uiDialog));
    },
    _makeDraggable: function () {
      var n = this,
        o = this.options;
      function a(t) {
        return { position: t.position, offset: t.offset };
      }
      this.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function (t, e) {
          n._addClass(V(this), "ui-dialog-dragging"),
            n._blockFrames(),
            n._trigger("dragStart", t, a(e));
        },
        drag: function (t, e) {
          n._trigger("drag", t, a(e));
        },
        stop: function (t, e) {
          var i = e.offset.left - n.document.scrollLeft(),
            s = e.offset.top - n.document.scrollTop();
          (o.position = {
            my: "left top",
            at:
              "left" +
              (0 <= i ? "+" : "") +
              i +
              " top" +
              (0 <= s ? "+" : "") +
              s,
            of: n.window,
          }),
            n._removeClass(V(this), "ui-dialog-dragging"),
            n._unblockFrames(),
            n._trigger("dragStop", t, a(e));
        },
      });
    },
    _makeResizable: function () {
      var n = this,
        o = this.options,
        t = o.resizable,
        e = this.uiDialog.css("position"),
        t = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
      function a(t) {
        return {
          originalPosition: t.originalPosition,
          originalSize: t.originalSize,
          position: t.position,
          size: t.size,
        };
      }
      this.uiDialog
        .resizable({
          cancel: ".ui-dialog-content",
          containment: "document",
          alsoResize: this.element,
          maxWidth: o.maxWidth,
          maxHeight: o.maxHeight,
          minWidth: o.minWidth,
          minHeight: this._minHeight(),
          handles: t,
          start: function (t, e) {
            n._addClass(V(this), "ui-dialog-resizing"),
              n._blockFrames(),
              n._trigger("resizeStart", t, a(e));
          },
          resize: function (t, e) {
            n._trigger("resize", t, a(e));
          },
          stop: function (t, e) {
            var i = n.uiDialog.offset(),
              s = i.left - n.document.scrollLeft(),
              i = i.top - n.document.scrollTop();
            (o.height = n.uiDialog.height()),
              (o.width = n.uiDialog.width()),
              (o.position = {
                my: "left top",
                at:
                  "left" +
                  (0 <= s ? "+" : "") +
                  s +
                  " top" +
                  (0 <= i ? "+" : "") +
                  i,
                of: n.window,
              }),
              n._removeClass(V(this), "ui-dialog-resizing"),
              n._unblockFrames(),
              n._trigger("resizeStop", t, a(e));
          },
        })
        .css("position", e);
    },
    _trackFocus: function () {
      this._on(this.widget(), {
        focusin: function (t) {
          this._makeFocusTarget(), (this._focusedElement = V(t.target));
        },
      });
    },
    _makeFocusTarget: function () {
      this._untrackInstance(), this._trackingInstances().unshift(this);
    },
    _untrackInstance: function () {
      var t = this._trackingInstances(),
        e = V.inArray(this, t);
      -1 !== e && t.splice(e, 1);
    },
    _trackingInstances: function () {
      var t = this.document.data("ui-dialog-instances");
      return t || this.document.data("ui-dialog-instances", (t = [])), t;
    },
    _minHeight: function () {
      var t = this.options;
      return "auto" === t.height
        ? t.minHeight
        : Math.min(t.minHeight, t.height);
    },
    _position: function () {
      var t = this.uiDialog.is(":visible");
      t || this.uiDialog.show(),
        this.uiDialog.position(this.options.position),
        t || this.uiDialog.hide();
    },
    _setOptions: function (t) {
      var i = this,
        s = !1,
        n = {};
      V.each(t, function (t, e) {
        i._setOption(t, e),
          t in i.sizeRelatedOptions && (s = !0),
          t in i.resizableRelatedOptions && (n[t] = e);
      }),
        s && (this._size(), this._position()),
        this.uiDialog.is(":data(ui-resizable)") &&
          this.uiDialog.resizable("option", n);
    },
    _setOption: function (t, e) {
      var i,
        s = this.uiDialog;
      "disabled" !== t &&
        (this._super(t, e),
        "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
        "buttons" === t && this._createButtons(),
        "closeText" === t &&
          this.uiDialogTitlebarClose.button({
            label: V("<a>")
              .text("" + this.options.closeText)
              .html(),
          }),
        "draggable" === t &&
          ((i = s.is(":data(ui-draggable)")) && !e && s.draggable("destroy"),
          !i && e && this._makeDraggable()),
        "position" === t && this._position(),
        "resizable" === t &&
          ((i = s.is(":data(ui-resizable)")) && !e && s.resizable("destroy"),
          i && "string" == typeof e && s.resizable("option", "handles", e),
          i || !1 === e || this._makeResizable()),
        "title" === t &&
          this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
    },
    _size: function () {
      var t,
        e,
        i,
        s = this.options;
      this.element
        .show()
        .css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
        s.minWidth > s.width && (s.width = s.minWidth),
        (t = this.uiDialog
          .css({ height: "auto", width: s.width })
          .outerHeight()),
        (e = Math.max(0, s.minHeight - t)),
        (i =
          "number" == typeof s.maxHeight
            ? Math.max(0, s.maxHeight - t)
            : "none"),
        "auto" === s.height
          ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" })
          : this.element.height(Math.max(0, s.height - t)),
        this.uiDialog.is(":data(ui-resizable)") &&
          this.uiDialog.resizable("option", "minHeight", this._minHeight());
    },
    _blockFrames: function () {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var t = V(this);
        return V("<div>")
          .css({
            position: "absolute",
            width: t.outerWidth(),
            height: t.outerHeight(),
          })
          .appendTo(t.parent())
          .offset(t.offset())[0];
      });
    },
    _unblockFrames: function () {
      this.iframeBlocks &&
        (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _allowInteraction: function (t) {
      return (
        !!V(t.target).closest(".ui-dialog").length ||
        !!V(t.target).closest(".ui-datepicker").length
      );
    },
    _createOverlay: function () {
      var i, s;
      this.options.modal &&
        ((i = V.fn.jquery.substring(0, 4)),
        (s = !0),
        this._delay(function () {
          s = !1;
        }),
        this.document.data("ui-dialog-overlays") ||
          this.document.on(
            "focusin.ui-dialog",
            function (t) {
              var e;
              s ||
                (e = this._trackingInstances()[0])._allowInteraction(t) ||
                (t.preventDefault(),
                e._focusTabbable(),
                ("3.4." !== i && "3.5." !== i) ||
                  e._delay(e._restoreTabbableFocus));
            }.bind(this)
          ),
        (this.overlay = V("<div>").appendTo(this._appendTo())),
        this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
        this._on(this.overlay, { mousedown: "_keepFocus" }),
        this.document.data(
          "ui-dialog-overlays",
          (this.document.data("ui-dialog-overlays") || 0) + 1
        ));
    },
    _destroyOverlay: function () {
      var t;
      this.options.modal &&
        this.overlay &&
        ((t = this.document.data("ui-dialog-overlays") - 1)
          ? this.document.data("ui-dialog-overlays", t)
          : (this.document.off("focusin.ui-dialog"),
            this.document.removeData("ui-dialog-overlays")),
        this.overlay.remove(),
        (this.overlay = null));
    },
  }),
    !1 !== V.uiBackCompat &&
      V.widget("ui.dialog", V.ui.dialog, {
        options: { dialogClass: "" },
        _createWrapper: function () {
          this._super(), this.uiDialog.addClass(this.options.dialogClass);
        },
        _setOption: function (t, e) {
          "dialogClass" === t &&
            this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
            this._superApply(arguments);
        },
      });
  V.ui.dialog;
  function lt(t, e, i) {
    return e <= t && t < e + i;
  }
  V.widget("ui.droppable", {
    version: "1.13.2",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      addClasses: !0,
      greedy: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null,
    },
    _create: function () {
      var t,
        e = this.options,
        i = e.accept;
      (this.isover = !1),
        (this.isout = !0),
        (this.accept =
          "function" == typeof i
            ? i
            : function (t) {
                return t.is(i);
              }),
        (this.proportions = function () {
          if (!arguments.length)
            return (t = t || {
              width: this.element[0].offsetWidth,
              height: this.element[0].offsetHeight,
            });
          t = arguments[0];
        }),
        this._addToManager(e.scope),
        e.addClasses && this._addClass("ui-droppable");
    },
    _addToManager: function (t) {
      (V.ui.ddmanager.droppables[t] = V.ui.ddmanager.droppables[t] || []),
        V.ui.ddmanager.droppables[t].push(this);
    },
    _splice: function (t) {
      for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1);
    },
    _destroy: function () {
      var t = V.ui.ddmanager.droppables[this.options.scope];
      this._splice(t);
    },
    _setOption: function (t, e) {
      var i;
      "accept" === t
        ? (this.accept =
            "function" == typeof e
              ? e
              : function (t) {
                  return t.is(e);
                })
        : "scope" === t &&
          ((i = V.ui.ddmanager.droppables[this.options.scope]),
          this._splice(i),
          this._addToManager(e)),
        this._super(t, e);
    },
    _activate: function (t) {
      var e = V.ui.ddmanager.current;
      this._addActiveClass(), e && this._trigger("activate", t, this.ui(e));
    },
    _deactivate: function (t) {
      var e = V.ui.ddmanager.current;
      this._removeActiveClass(),
        e && this._trigger("deactivate", t, this.ui(e));
    },
    _over: function (t) {
      var e = V.ui.ddmanager.current;
      e &&
        (e.currentItem || e.element)[0] !== this.element[0] &&
        this.accept.call(this.element[0], e.currentItem || e.element) &&
        (this._addHoverClass(), this._trigger("over", t, this.ui(e)));
    },
    _out: function (t) {
      var e = V.ui.ddmanager.current;
      e &&
        (e.currentItem || e.element)[0] !== this.element[0] &&
        this.accept.call(this.element[0], e.currentItem || e.element) &&
        (this._removeHoverClass(), this._trigger("out", t, this.ui(e)));
    },
    _drop: function (e, t) {
      var i = t || V.ui.ddmanager.current,
        s = !1;
      return (
        !(!i || (i.currentItem || i.element)[0] === this.element[0]) &&
        (this.element
          .find(":data(ui-droppable)")
          .not(".ui-draggable-dragging")
          .each(function () {
            var t = V(this).droppable("instance");
            if (
              t.options.greedy &&
              !t.options.disabled &&
              t.options.scope === i.options.scope &&
              t.accept.call(t.element[0], i.currentItem || i.element) &&
              V.ui.intersect(
                i,
                V.extend(t, { offset: t.element.offset() }),
                t.options.tolerance,
                e
              )
            )
              return !(s = !0);
          }),
        !s &&
          !!this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this._removeActiveClass(),
          this._removeHoverClass(),
          this._trigger("drop", e, this.ui(i)),
          this.element))
      );
    },
    ui: function (t) {
      return {
        draggable: t.currentItem || t.element,
        helper: t.helper,
        position: t.position,
        offset: t.positionAbs,
      };
    },
    _addHoverClass: function () {
      this._addClass("ui-droppable-hover");
    },
    _removeHoverClass: function () {
      this._removeClass("ui-droppable-hover");
    },
    _addActiveClass: function () {
      this._addClass("ui-droppable-active");
    },
    _removeActiveClass: function () {
      this._removeClass("ui-droppable-active");
    },
  }),
    (V.ui.intersect = function (t, e, i, s) {
      if (!e.offset) return !1;
      var n = (t.positionAbs || t.position.absolute).left + t.margins.left,
        o = (t.positionAbs || t.position.absolute).top + t.margins.top,
        a = n + t.helperProportions.width,
        r = o + t.helperProportions.height,
        l = e.offset.left,
        h = e.offset.top,
        c = l + e.proportions().width,
        u = h + e.proportions().height;
      switch (i) {
        case "fit":
          return l <= n && a <= c && h <= o && r <= u;
        case "intersect":
          return (
            l < n + t.helperProportions.width / 2 &&
            a - t.helperProportions.width / 2 < c &&
            h < o + t.helperProportions.height / 2 &&
            r - t.helperProportions.height / 2 < u
          );
        case "pointer":
          return (
            lt(s.pageY, h, e.proportions().height) &&
            lt(s.pageX, l, e.proportions().width)
          );
        case "touch":
          return (
            ((h <= o && o <= u) || (h <= r && r <= u) || (o < h && u < r)) &&
            ((l <= n && n <= c) || (l <= a && a <= c) || (n < l && c < a))
          );
        default:
          return !1;
      }
    }),
    !(V.ui.ddmanager = {
      current: null,
      droppables: { default: [] },
      prepareOffsets: function (t, e) {
        var i,
          s,
          n = V.ui.ddmanager.droppables[t.options.scope] || [],
          o = e ? e.type : null,
          a = (t.currentItem || t.element)
            .find(":data(ui-droppable)")
            .addBack();
        t: for (i = 0; i < n.length; i++)
          if (
            !(
              n[i].options.disabled ||
              (t &&
                !n[i].accept.call(n[i].element[0], t.currentItem || t.element))
            )
          ) {
            for (s = 0; s < a.length; s++)
              if (a[s] === n[i].element[0]) {
                n[i].proportions().height = 0;
                continue t;
              }
            (n[i].visible = "none" !== n[i].element.css("display")),
              n[i].visible &&
                ("mousedown" === o && n[i]._activate.call(n[i], e),
                (n[i].offset = n[i].element.offset()),
                n[i].proportions({
                  width: n[i].element[0].offsetWidth,
                  height: n[i].element[0].offsetHeight,
                }));
          }
      },
      drop: function (t, e) {
        var i = !1;
        return (
          V.each(
            (V.ui.ddmanager.droppables[t.options.scope] || []).slice(),
            function () {
              this.options &&
                (!this.options.disabled &&
                  this.visible &&
                  V.ui.intersect(t, this, this.options.tolerance, e) &&
                  (i = this._drop.call(this, e) || i),
                !this.options.disabled &&
                  this.visible &&
                  this.accept.call(
                    this.element[0],
                    t.currentItem || t.element
                  ) &&
                  ((this.isout = !0),
                  (this.isover = !1),
                  this._deactivate.call(this, e)));
            }
          ),
          i
        );
      },
      dragStart: function (t, e) {
        t.element.parentsUntil("body").on("scroll.droppable", function () {
          t.options.refreshPositions || V.ui.ddmanager.prepareOffsets(t, e);
        });
      },
      drag: function (n, o) {
        n.options.refreshPositions && V.ui.ddmanager.prepareOffsets(n, o),
          V.each(V.ui.ddmanager.droppables[n.options.scope] || [], function () {
            var t, e, i, s;
            this.options.disabled ||
              this.greedyChild ||
              !this.visible ||
              ((s =
                !(i = V.ui.intersect(n, this, this.options.tolerance, o)) &&
                this.isover
                  ? "isout"
                  : i && !this.isover
                  ? "isover"
                  : null) &&
                (this.options.greedy &&
                  ((e = this.options.scope),
                  (i = this.element
                    .parents(":data(ui-droppable)")
                    .filter(function () {
                      return V(this).droppable("instance").options.scope === e;
                    })).length &&
                    ((t = V(i[0]).droppable("instance")).greedyChild =
                      "isover" === s)),
                t &&
                  "isover" === s &&
                  ((t.isover = !1), (t.isout = !0), t._out.call(t, o)),
                (this[s] = !0),
                (this["isout" === s ? "isover" : "isout"] = !1),
                this["isover" === s ? "_over" : "_out"].call(this, o),
                t &&
                  "isout" === s &&
                  ((t.isout = !1), (t.isover = !0), t._over.call(t, o))));
          });
      },
      dragStop: function (t, e) {
        t.element.parentsUntil("body").off("scroll.droppable"),
          t.options.refreshPositions || V.ui.ddmanager.prepareOffsets(t, e);
      },
    }) !== V.uiBackCompat &&
      V.widget("ui.droppable", V.ui.droppable, {
        options: { hoverClass: !1, activeClass: !1 },
        _addActiveClass: function () {
          this._super(),
            this.options.activeClass &&
              this.element.addClass(this.options.activeClass);
        },
        _removeActiveClass: function () {
          this._super(),
            this.options.activeClass &&
              this.element.removeClass(this.options.activeClass);
        },
        _addHoverClass: function () {
          this._super(),
            this.options.hoverClass &&
              this.element.addClass(this.options.hoverClass);
        },
        _removeHoverClass: function () {
          this._super(),
            this.options.hoverClass &&
              this.element.removeClass(this.options.hoverClass);
        },
      });
  V.ui.droppable,
    V.widget("ui.progressbar", {
      version: "1.13.2",
      options: {
        classes: {
          "ui-progressbar": "ui-corner-all",
          "ui-progressbar-value": "ui-corner-left",
          "ui-progressbar-complete": "ui-corner-right",
        },
        max: 100,
        value: 0,
        change: null,
        complete: null,
      },
      min: 0,
      _create: function () {
        (this.oldValue = this.options.value = this._constrainedValue()),
          this.element.attr({ role: "progressbar", "aria-valuemin": this.min }),
          this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
          (this.valueDiv = V("<div>").appendTo(this.element)),
          this._addClass(
            this.valueDiv,
            "ui-progressbar-value",
            "ui-widget-header"
          ),
          this._refreshValue();
      },
      _destroy: function () {
        this.element.removeAttr(
          "role aria-valuemin aria-valuemax aria-valuenow"
        ),
          this.valueDiv.remove();
      },
      value: function (t) {
        if (void 0 === t) return this.options.value;
        (this.options.value = this._constrainedValue(t)), this._refreshValue();
      },
      _constrainedValue: function (t) {
        return (
          void 0 === t && (t = this.options.value),
          (this.indeterminate = !1 === t),
          "number" != typeof t && (t = 0),
          !this.indeterminate &&
            Math.min(this.options.max, Math.max(this.min, t))
        );
      },
      _setOptions: function (t) {
        var e = t.value;
        delete t.value,
          this._super(t),
          (this.options.value = this._constrainedValue(e)),
          this._refreshValue();
      },
      _setOption: function (t, e) {
        "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr("aria-disabled", t),
          this._toggleClass(null, "ui-state-disabled", !!t);
      },
      _percentage: function () {
        return this.indeterminate
          ? 100
          : (100 * (this.options.value - this.min)) /
              (this.options.max - this.min);
      },
      _refreshValue: function () {
        var t = this.options.value,
          e = this._percentage();
        this.valueDiv
          .toggle(this.indeterminate || t > this.min)
          .width(e.toFixed(0) + "%"),
          this._toggleClass(
            this.valueDiv,
            "ui-progressbar-complete",
            null,
            t === this.options.max
          )._toggleClass(
            "ui-progressbar-indeterminate",
            null,
            this.indeterminate
          ),
          this.indeterminate
            ? (this.element.removeAttr("aria-valuenow"),
              this.overlayDiv ||
                ((this.overlayDiv = V("<div>").appendTo(this.valueDiv)),
                this._addClass(this.overlayDiv, "ui-progressbar-overlay")))
            : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t,
              }),
              this.overlayDiv &&
                (this.overlayDiv.remove(), (this.overlayDiv = null))),
          this.oldValue !== t && ((this.oldValue = t), this._trigger("change")),
          t === this.options.max && this._trigger("complete");
      },
    }),
    V.widget("ui.selectable", V.ui.mouse, {
      version: "1.13.2",
      options: {
        appendTo: "body",
        autoRefresh: !0,
        distance: 0,
        filter: "*",
        tolerance: "touch",
        selected: null,
        selecting: null,
        start: null,
        stop: null,
        unselected: null,
        unselecting: null,
      },
      _create: function () {
        var i = this;
        this._addClass("ui-selectable"),
          (this.dragged = !1),
          (this.refresh = function () {
            (i.elementPos = V(i.element[0]).offset()),
              (i.selectees = V(i.options.filter, i.element[0])),
              i._addClass(i.selectees, "ui-selectee"),
              i.selectees.each(function () {
                var t = V(this),
                  e = t.offset(),
                  e = {
                    left: e.left - i.elementPos.left,
                    top: e.top - i.elementPos.top,
                  };
                V.data(this, "selectable-item", {
                  element: this,
                  $element: t,
                  left: e.left,
                  top: e.top,
                  right: e.left + t.outerWidth(),
                  bottom: e.top + t.outerHeight(),
                  startselected: !1,
                  selected: t.hasClass("ui-selected"),
                  selecting: t.hasClass("ui-selecting"),
                  unselecting: t.hasClass("ui-unselecting"),
                });
              });
          }),
          this.refresh(),
          this._mouseInit(),
          (this.helper = V("<div>")),
          this._addClass(this.helper, "ui-selectable-helper");
      },
      _destroy: function () {
        this.selectees.removeData("selectable-item"), this._mouseDestroy();
      },
      _mouseStart: function (i) {
        var s = this,
          t = this.options;
        (this.opos = [i.pageX, i.pageY]),
          (this.elementPos = V(this.element[0]).offset()),
          this.options.disabled ||
            ((this.selectees = V(t.filter, this.element[0])),
            this._trigger("start", i),
            V(t.appendTo).append(this.helper),
            this.helper.css({
              left: i.pageX,
              top: i.pageY,
              width: 0,
              height: 0,
            }),
            t.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function () {
              var t = V.data(this, "selectable-item");
              (t.startselected = !0),
                i.metaKey ||
                  i.ctrlKey ||
                  (s._removeClass(t.$element, "ui-selected"),
                  (t.selected = !1),
                  s._addClass(t.$element, "ui-unselecting"),
                  (t.unselecting = !0),
                  s._trigger("unselecting", i, { unselecting: t.element }));
            }),
            V(i.target)
              .parents()
              .addBack()
              .each(function () {
                var t,
                  e = V.data(this, "selectable-item");
                if (e)
                  return (
                    (t =
                      (!i.metaKey && !i.ctrlKey) ||
                      !e.$element.hasClass("ui-selected")),
                    s
                      ._removeClass(
                        e.$element,
                        t ? "ui-unselecting" : "ui-selected"
                      )
                      ._addClass(
                        e.$element,
                        t ? "ui-selecting" : "ui-unselecting"
                      ),
                    (e.unselecting = !t),
                    (e.selecting = t),
                    (e.selected = t)
                      ? s._trigger("selecting", i, { selecting: e.element })
                      : s._trigger("unselecting", i, {
                          unselecting: e.element,
                        }),
                    !1
                  );
              }));
      },
      _mouseDrag: function (s) {
        if (((this.dragged = !0), !this.options.disabled)) {
          var t,
            n = this,
            o = this.options,
            a = this.opos[0],
            r = this.opos[1],
            l = s.pageX,
            h = s.pageY;
          return (
            l < a && ((t = l), (l = a), (a = t)),
            h < r && ((t = h), (h = r), (r = t)),
            this.helper.css({ left: a, top: r, width: l - a, height: h - r }),
            this.selectees.each(function () {
              var t = V.data(this, "selectable-item"),
                e = !1,
                i = {};
              t &&
                t.element !== n.element[0] &&
                ((i.left = t.left + n.elementPos.left),
                (i.right = t.right + n.elementPos.left),
                (i.top = t.top + n.elementPos.top),
                (i.bottom = t.bottom + n.elementPos.top),
                "touch" === o.tolerance
                  ? (e = !(
                      i.left > l ||
                      i.right < a ||
                      i.top > h ||
                      i.bottom < r
                    ))
                  : "fit" === o.tolerance &&
                    (e =
                      i.left > a && i.right < l && i.top > r && i.bottom < h),
                e
                  ? (t.selected &&
                      (n._removeClass(t.$element, "ui-selected"),
                      (t.selected = !1)),
                    t.unselecting &&
                      (n._removeClass(t.$element, "ui-unselecting"),
                      (t.unselecting = !1)),
                    t.selecting ||
                      (n._addClass(t.$element, "ui-selecting"),
                      (t.selecting = !0),
                      n._trigger("selecting", s, { selecting: t.element })))
                  : (t.selecting &&
                      ((s.metaKey || s.ctrlKey) && t.startselected
                        ? (n._removeClass(t.$element, "ui-selecting"),
                          (t.selecting = !1),
                          n._addClass(t.$element, "ui-selected"),
                          (t.selected = !0))
                        : (n._removeClass(t.$element, "ui-selecting"),
                          (t.selecting = !1),
                          t.startselected &&
                            (n._addClass(t.$element, "ui-unselecting"),
                            (t.unselecting = !0)),
                          n._trigger("unselecting", s, {
                            unselecting: t.element,
                          }))),
                    t.selected &&
                      (s.metaKey ||
                        s.ctrlKey ||
                        t.startselected ||
                        (n._removeClass(t.$element, "ui-selected"),
                        (t.selected = !1),
                        n._addClass(t.$element, "ui-unselecting"),
                        (t.unselecting = !0),
                        n._trigger("unselecting", s, {
                          unselecting: t.element,
                        })))));
            }),
            !1
          );
        }
      },
      _mouseStop: function (e) {
        var i = this;
        return (
          (this.dragged = !1),
          V(".ui-unselecting", this.element[0]).each(function () {
            var t = V.data(this, "selectable-item");
            i._removeClass(t.$element, "ui-unselecting"),
              (t.unselecting = !1),
              (t.startselected = !1),
              i._trigger("unselected", e, { unselected: t.element });
          }),
          V(".ui-selecting", this.element[0]).each(function () {
            var t = V.data(this, "selectable-item");
            i
              ._removeClass(t.$element, "ui-selecting")
              ._addClass(t.$element, "ui-selected"),
              (t.selecting = !1),
              (t.selected = !0),
              (t.startselected = !0),
              i._trigger("selected", e, { selected: t.element });
          }),
          this._trigger("stop", e),
          this.helper.remove(),
          !1
        );
      },
    }),
    V.widget("ui.selectmenu", [
      V.ui.formResetMixin,
      {
        version: "1.13.2",
        defaultElement: "<select>",
        options: {
          appendTo: null,
          classes: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all",
          },
          disabled: null,
          icons: { button: "ui-icon-triangle-1-s" },
          position: { my: "left top", at: "left bottom", collision: "none" },
          width: !1,
          change: null,
          close: null,
          focus: null,
          open: null,
          select: null,
        },
        _create: function () {
          var t = this.element.uniqueId().attr("id");
          (this.ids = { element: t, button: t + "-button", menu: t + "-menu" }),
            this._drawButton(),
            this._drawMenu(),
            this._bindFormResetHandler(),
            (this._rendered = !1),
            (this.menuItems = V());
        },
        _drawButton: function () {
          var t,
            e = this,
            i = this._parseOption(
              this.element.find("option:selected"),
              this.element[0].selectedIndex
            );
          (this.labels = this.element.labels().attr("for", this.ids.button)),
            this._on(this.labels, {
              click: function (t) {
                this.button.trigger("focus"), t.preventDefault();
              },
            }),
            this.element.hide(),
            (this.button = V("<span>", {
              tabindex: this.options.disabled ? -1 : 0,
              id: this.ids.button,
              role: "combobox",
              "aria-expanded": "false",
              "aria-autocomplete": "list",
              "aria-owns": this.ids.menu,
              "aria-haspopup": "true",
              title: this.element.attr("title"),
            }).insertAfter(this.element)),
            this._addClass(
              this.button,
              "ui-selectmenu-button ui-selectmenu-button-closed",
              "ui-button ui-widget"
            ),
            (t = V("<span>").appendTo(this.button)),
            this._addClass(
              t,
              "ui-selectmenu-icon",
              "ui-icon " + this.options.icons.button
            ),
            (this.buttonItem = this._renderButtonItem(i).appendTo(this.button)),
            !1 !== this.options.width && this._resizeButton(),
            this._on(this.button, this._buttonEvents),
            this.button.one("focusin", function () {
              e._rendered || e._refreshMenu();
            });
        },
        _drawMenu: function () {
          var i = this;
          (this.menu = V("<ul>", {
            "aria-hidden": "true",
            "aria-labelledby": this.ids.button,
            id: this.ids.menu,
          })),
            (this.menuWrap = V("<div>").append(this.menu)),
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
            this.menuWrap.appendTo(this._appendTo()),
            (this.menuInstance = this.menu
              .menu({
                classes: { "ui-menu": "ui-corner-bottom" },
                role: "listbox",
                select: function (t, e) {
                  t.preventDefault(),
                    i._setSelection(),
                    i._select(e.item.data("ui-selectmenu-item"), t);
                },
                focus: function (t, e) {
                  e = e.item.data("ui-selectmenu-item");
                  null != i.focusIndex &&
                    e.index !== i.focusIndex &&
                    (i._trigger("focus", t, { item: e }),
                    i.isOpen || i._select(e, t)),
                    (i.focusIndex = e.index),
                    i.button.attr(
                      "aria-activedescendant",
                      i.menuItems.eq(e.index).attr("id")
                    );
                },
              })
              .menu("instance")),
            this.menuInstance._off(this.menu, "mouseleave"),
            (this.menuInstance._closeOnDocumentClick = function () {
              return !1;
            }),
            (this.menuInstance._isDivider = function () {
              return !1;
            });
        },
        refresh: function () {
          this._refreshMenu(),
            this.buttonItem.replaceWith(
              (this.buttonItem = this._renderButtonItem(
                this._getSelectedItem().data("ui-selectmenu-item") || {}
              ))
            ),
            null === this.options.width && this._resizeButton();
        },
        _refreshMenu: function () {
          var t = this.element.find("option");
          this.menu.empty(),
            this._parseOptions(t),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            (this.menuItems = this.menu
              .find("li")
              .not(".ui-selectmenu-optgroup")
              .find(".ui-menu-item-wrapper")),
            (this._rendered = !0),
            t.length &&
              ((t = this._getSelectedItem()),
              this.menuInstance.focus(null, t),
              this._setAria(t.data("ui-selectmenu-item")),
              this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function (t) {
          this.options.disabled ||
            (this._rendered
              ? (this._removeClass(
                  this.menu.find(".ui-state-active"),
                  null,
                  "ui-state-active"
                ),
                this.menuInstance.focus(null, this._getSelectedItem()))
              : this._refreshMenu(),
            this.menuItems.length &&
              ((this.isOpen = !0),
              this._toggleAttr(),
              this._resizeMenu(),
              this._position(),
              this._on(this.document, this._documentClick),
              this._trigger("open", t)));
        },
        _position: function () {
          this.menuWrap.position(
            V.extend({ of: this.button }, this.options.position)
          );
        },
        close: function (t) {
          this.isOpen &&
            ((this.isOpen = !1),
            this._toggleAttr(),
            (this.range = null),
            this._off(this.document),
            this._trigger("close", t));
        },
        widget: function () {
          return this.button;
        },
        menuWidget: function () {
          return this.menu;
        },
        _renderButtonItem: function (t) {
          var e = V("<span>");
          return (
            this._setText(e, t.label),
            this._addClass(e, "ui-selectmenu-text"),
            e
          );
        },
        _renderMenu: function (s, t) {
          var n = this,
            o = "";
          V.each(t, function (t, e) {
            var i;
            e.optgroup !== o &&
              ((i = V("<li>", { text: e.optgroup })),
              n._addClass(
                i,
                "ui-selectmenu-optgroup",
                "ui-menu-divider" +
                  (e.element.parent("optgroup").prop("disabled")
                    ? " ui-state-disabled"
                    : "")
              ),
              i.appendTo(s),
              (o = e.optgroup)),
              n._renderItemData(s, e);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data("ui-selectmenu-item", e);
        },
        _renderItem: function (t, e) {
          var i = V("<li>"),
            s = V("<div>", { title: e.element.attr("title") });
          return (
            e.disabled && this._addClass(i, null, "ui-state-disabled"),
            this._setText(s, e.label),
            i.append(s).appendTo(t)
          );
        },
        _setText: function (t, e) {
          e ? t.text(e) : t.html("&#160;");
        },
        _move: function (t, e) {
          var i,
            s = ".ui-menu-item";
          this.isOpen
            ? (i = this.menuItems.eq(this.focusIndex).parent("li"))
            : ((i = this.menuItems
                .eq(this.element[0].selectedIndex)
                .parent("li")),
              (s += ":not(.ui-state-disabled)")),
            (s =
              "first" === t || "last" === t
                ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1)
                : i[t + "All"](s).eq(0)).length &&
              this.menuInstance.focus(e, s);
        },
        _getSelectedItem: function () {
          return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function (t) {
          this[this.isOpen ? "close" : "open"](t);
        },
        _setSelection: function () {
          var t;
          this.range &&
            (window.getSelection
              ? ((t = window.getSelection()).removeAllRanges(),
                t.addRange(this.range))
              : this.range.select(),
            this.button.trigger("focus"));
        },
        _documentClick: {
          mousedown: function (t) {
            this.isOpen &&
              (V(t.target).closest(
                ".ui-selectmenu-menu, #" + V.escapeSelector(this.ids.button)
              ).length ||
                this.close(t));
          },
        },
        _buttonEvents: {
          mousedown: function () {
            var t;
            window.getSelection
              ? (t = window.getSelection()).rangeCount &&
                (this.range = t.getRangeAt(0))
              : (this.range = document.selection.createRange());
          },
          click: function (t) {
            this._setSelection(), this._toggle(t);
          },
          keydown: function (t) {
            var e = !0;
            switch (t.keyCode) {
              case V.ui.keyCode.TAB:
              case V.ui.keyCode.ESCAPE:
                this.close(t), (e = !1);
                break;
              case V.ui.keyCode.ENTER:
                this.isOpen && this._selectFocusedItem(t);
                break;
              case V.ui.keyCode.UP:
                t.altKey ? this._toggle(t) : this._move("prev", t);
                break;
              case V.ui.keyCode.DOWN:
                t.altKey ? this._toggle(t) : this._move("next", t);
                break;
              case V.ui.keyCode.SPACE:
                this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                break;
              case V.ui.keyCode.LEFT:
                this._move("prev", t);
                break;
              case V.ui.keyCode.RIGHT:
                this._move("next", t);
                break;
              case V.ui.keyCode.HOME:
              case V.ui.keyCode.PAGE_UP:
                this._move("first", t);
                break;
              case V.ui.keyCode.END:
              case V.ui.keyCode.PAGE_DOWN:
                this._move("last", t);
                break;
              default:
                this.menu.trigger(t), (e = !1);
            }
            e && t.preventDefault();
          },
        },
        _selectFocusedItem: function (t) {
          var e = this.menuItems.eq(this.focusIndex).parent("li");
          e.hasClass("ui-state-disabled") ||
            this._select(e.data("ui-selectmenu-item"), t);
        },
        _select: function (t, e) {
          var i = this.element[0].selectedIndex;
          (this.element[0].selectedIndex = t.index),
            this.buttonItem.replaceWith(
              (this.buttonItem = this._renderButtonItem(t))
            ),
            this._setAria(t),
            this._trigger("select", e, { item: t }),
            t.index !== i && this._trigger("change", e, { item: t }),
            this.close(e);
        },
        _setAria: function (t) {
          t = this.menuItems.eq(t.index).attr("id");
          this.button.attr({
            "aria-labelledby": t,
            "aria-activedescendant": t,
          }),
            this.menu.attr("aria-activedescendant", t);
        },
        _setOption: function (t, e) {
          var i;
          "icons" === t &&
            ((i = this.button.find("span.ui-icon")),
            this._removeClass(i, null, this.options.icons.button)._addClass(
              i,
              null,
              e.button
            )),
            this._super(t, e),
            "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
            "width" === t && this._resizeButton();
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.menuInstance.option("disabled", t),
            this.button.attr("aria-disabled", t),
            this._toggleClass(this.button, null, "ui-state-disabled", t),
            this.element.prop("disabled", t),
            t
              ? (this.button.attr("tabindex", -1), this.close())
              : this.button.attr("tabindex", 0);
        },
        _appendTo: function () {
          var t = this.options.appendTo;
          return (t = !(t =
            !(t =
              t &&
              (t.jquery || t.nodeType ? V(t) : this.document.find(t).eq(0))) ||
            !t[0]
              ? this.element.closest(".ui-front, dialog")
              : t).length
            ? this.document[0].body
            : t);
        },
        _toggleAttr: function () {
          this.button.attr("aria-expanded", this.isOpen),
            this._removeClass(
              this.button,
              "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open")
            )
              ._addClass(
                this.button,
                "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed")
              )
              ._toggleClass(
                this.menuWrap,
                "ui-selectmenu-open",
                null,
                this.isOpen
              ),
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function () {
          var t = this.options.width;
          !1 !== t
            ? (null === t &&
                ((t = this.element.show().outerWidth()), this.element.hide()),
              this.button.outerWidth(t))
            : this.button.css("width", "");
        },
        _resizeMenu: function () {
          this.menu.outerWidth(
            Math.max(
              this.button.outerWidth(),
              this.menu.width("").outerWidth() + 1
            )
          );
        },
        _getCreateOptions: function () {
          var t = this._super();
          return (t.disabled = this.element.prop("disabled")), t;
        },
        _parseOptions: function (t) {
          var i = this,
            s = [];
          t.each(function (t, e) {
            e.hidden || s.push(i._parseOption(V(e), t));
          }),
            (this.items = s);
        },
        _parseOption: function (t, e) {
          var i = t.parent("optgroup");
          return {
            element: t,
            index: e,
            value: t.val(),
            label: t.text(),
            optgroup: i.attr("label") || "",
            disabled: i.prop("disabled") || t.prop("disabled"),
          };
        },
        _destroy: function () {
          this._unbindFormResetHandler(),
            this.menuWrap.remove(),
            this.button.remove(),
            this.element.show(),
            this.element.removeUniqueId(),
            this.labels.attr("for", this.ids.element);
        },
      },
    ]),
    V.widget("ui.slider", V.ui.mouse, {
      version: "1.13.2",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        classes: {
          "ui-slider": "ui-corner-all",
          "ui-slider-handle": "ui-corner-all",
          "ui-slider-range": "ui-corner-all ui-widget-header",
        },
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this._addClass(
            "ui-slider ui-slider-" + this.orientation,
            "ui-widget ui-widget-content"
          ),
          this._refresh(),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var t,
          e = this.options,
          i = this.element.find(".ui-slider-handle"),
          s = [],
          n = (e.values && e.values.length) || 1;
        for (
          i.length > n && (i.slice(n).remove(), (i = i.slice(0, n))),
            t = i.length;
          t < n;
          t++
        )
          s.push("<span tabindex='0'></span>");
        (this.handles = i.add(V(s.join("")).appendTo(this.element))),
          this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (t) {
            V(this).data("ui-slider-handle-index", t).attr("tabIndex", 0);
          });
      },
      _createRange: function () {
        var t = this.options;
        t.range
          ? (!0 === t.range &&
              (t.values
                ? t.values.length && 2 !== t.values.length
                  ? (t.values = [t.values[0], t.values[0]])
                  : Array.isArray(t.values) && (t.values = t.values.slice(0))
                : (t.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? (this._removeClass(
                  this.range,
                  "ui-slider-range-min ui-slider-range-max"
                ),
                this.range.css({ left: "", bottom: "" }))
              : ((this.range = V("<div>").appendTo(this.element)),
                this._addClass(this.range, "ui-slider-range")),
            ("min" !== t.range && "max" !== t.range) ||
              this._addClass(this.range, "ui-slider-range-" + t.range))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range && this.range.remove(),
          this._mouseDestroy();
      },
      _mouseCapture: function (t) {
        var i,
          s,
          n,
          o,
          e,
          a,
          r = this,
          l = this.options;
        return (
          !l.disabled &&
          ((this.elementSize = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
          }),
          (this.elementOffset = this.element.offset()),
          (a = { x: t.pageX, y: t.pageY }),
          (i = this._normValueFromMouse(a)),
          (s = this._valueMax() - this._valueMin() + 1),
          this.handles.each(function (t) {
            var e = Math.abs(i - r.values(t));
            (e < s ||
              (s === e &&
                (t === r._lastChangedValue || r.values(t) === l.min))) &&
              ((s = e), (n = V(this)), (o = t));
          }),
          !1 !== this._start(t, o) &&
            ((this._mouseSliding = !0),
            (this._handleIndex = o),
            this._addClass(n, null, "ui-state-active"),
            n.trigger("focus"),
            (e = n.offset()),
            (a = !V(t.target).parents().addBack().is(".ui-slider-handle")),
            (this._clickOffset = a
              ? { left: 0, top: 0 }
              : {
                  left: t.pageX - e.left - n.width() / 2,
                  top:
                    t.pageY -
                    e.top -
                    n.height() / 2 -
                    (parseInt(n.css("borderTopWidth"), 10) || 0) -
                    (parseInt(n.css("borderBottomWidth"), 10) || 0) +
                    (parseInt(n.css("marginTop"), 10) || 0),
                }),
            this.handles.hasClass("ui-state-hover") || this._slide(t, o, i),
            (this._animateOff = !0)))
        );
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (t) {
        var e = { x: t.pageX, y: t.pageY },
          e = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, e), !1;
      },
      _mouseStop: function (t) {
        return (
          this._removeClass(this.handles, null, "ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1)
        );
      },
      _detectOrientation: function () {
        this.orientation =
          "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (t) {
        var e,
          t =
            "horizontal" === this.orientation
              ? ((e = this.elementSize.width),
                t.x -
                  this.elementOffset.left -
                  (this._clickOffset ? this._clickOffset.left : 0))
              : ((e = this.elementSize.height),
                t.y -
                  this.elementOffset.top -
                  (this._clickOffset ? this._clickOffset.top : 0)),
          t = t / e;
        return (
          (t = 1 < t ? 1 : t) < 0 && (t = 0),
          "vertical" === this.orientation && (t = 1 - t),
          (e = this._valueMax() - this._valueMin()),
          (e = this._valueMin() + t * e),
          this._trimAlignValue(e)
        );
      },
      _uiHash: function (t, e, i) {
        var s = {
          handle: this.handles[t],
          handleIndex: t,
          value: void 0 !== e ? e : this.value(),
        };
        return (
          this._hasMultipleValues() &&
            ((s.value = void 0 !== e ? e : this.values(t)),
            (s.values = i || this.values())),
          s
        );
      },
      _hasMultipleValues: function () {
        return this.options.values && this.options.values.length;
      },
      _start: function (t, e) {
        return this._trigger("start", t, this._uiHash(e));
      },
      _slide: function (t, e, i) {
        var s,
          n = this.value(),
          o = this.values();
        this._hasMultipleValues() &&
          ((s = this.values(e ? 0 : 1)),
          (n = this.values(e)),
          2 === this.options.values.length &&
            !0 === this.options.range &&
            (i = 0 === e ? Math.min(s, i) : Math.max(s, i)),
          (o[e] = i)),
          i !== n &&
            !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) &&
            (this._hasMultipleValues() ? this.values(e, i) : this.value(i));
      },
      _stop: function (t, e) {
        this._trigger("stop", t, this._uiHash(e));
      },
      _change: function (t, e) {
        this._keySliding ||
          this._mouseSliding ||
          ((this._lastChangedValue = e),
          this._trigger("change", t, this._uiHash(e)));
      },
      value: function (t) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(t)),
            this._refreshValue(),
            void this._change(null, 0))
          : this._value();
      },
      values: function (t, e) {
        var i, s, n;
        if (1 < arguments.length)
          return (
            (this.options.values[t] = this._trimAlignValue(e)),
            this._refreshValue(),
            void this._change(null, t)
          );
        if (!arguments.length) return this._values();
        if (!Array.isArray(t))
          return this._hasMultipleValues() ? this._values(t) : this.value();
        for (i = this.options.values, s = t, n = 0; n < i.length; n += 1)
          (i[n] = this._trimAlignValue(s[n])), this._change(null, n);
        this._refreshValue();
      },
      _setOption: function (t, e) {
        var i,
          s = 0;
        switch (
          ("range" === t &&
            !0 === this.options.range &&
            ("min" === e
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : "max" === e &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          Array.isArray(this.options.values) &&
            (s = this.options.values.length),
          this._super(t, e),
          t)
        ) {
          case "orientation":
            this._detectOrientation(),
              this._removeClass(
                "ui-slider-horizontal ui-slider-vertical"
              )._addClass("ui-slider-" + this.orientation),
              this._refreshValue(),
              this.options.range && this._refreshRange(e),
              this.handles.css("horizontal" === e ? "bottom" : "left", "");
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), i = s - 1;
              0 <= i;
              i--
            )
              this._change(null, i);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            (this._animateOff = !0),
              this._calculateNewMax(),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _setOptionDisabled: function (t) {
        this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
      },
      _value: function () {
        var t = this.options.value;
        return (t = this._trimAlignValue(t));
      },
      _values: function (t) {
        var e, i;
        if (arguments.length)
          return (t = this.options.values[t]), (t = this._trimAlignValue(t));
        if (this._hasMultipleValues()) {
          for (e = this.options.values.slice(), i = 0; i < e.length; i += 1)
            e[i] = this._trimAlignValue(e[i]);
          return e;
        }
        return [];
      },
      _trimAlignValue: function (t) {
        if (t <= this._valueMin()) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = 0 < this.options.step ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          t = t - i;
        return (
          2 * Math.abs(i) >= e && (t += 0 < i ? e : -e),
          parseFloat(t.toFixed(5))
        );
      },
      _calculateNewMax: function () {
        var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step;
        (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i),
          (this.max = parseFloat(t.toFixed(this._precision())));
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (t =
          null !== this.options.min
            ? Math.max(t, this._precisionOf(this.options.min))
            : t);
      },
      _precisionOf: function (t) {
        var e = t.toString(),
          t = e.indexOf(".");
        return -1 === t ? 0 : e.length - t - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshRange: function (t) {
        "vertical" === t && this.range.css({ width: "", left: "" }),
          "horizontal" === t && this.range.css({ height: "", bottom: "" });
      },
      _refreshValue: function () {
        var e,
          i,
          t,
          s,
          n,
          o = this.options.range,
          a = this.options,
          r = this,
          l = !this._animateOff && a.animate,
          h = {};
        this._hasMultipleValues()
          ? this.handles.each(function (t) {
              (i =
                ((r.values(t) - r._valueMin()) /
                  (r._valueMax() - r._valueMin())) *
                100),
                (h["horizontal" === r.orientation ? "left" : "bottom"] =
                  i + "%"),
                V(this).stop(1, 1)[l ? "animate" : "css"](h, a.animate),
                !0 === r.options.range &&
                  ("horizontal" === r.orientation
                    ? (0 === t &&
                        r.range
                          .stop(1, 1)
                          [l ? "animate" : "css"]({ left: i + "%" }, a.animate),
                      1 === t &&
                        r.range[l ? "animate" : "css"](
                          { width: i - e + "%" },
                          { queue: !1, duration: a.animate }
                        ))
                    : (0 === t &&
                        r.range
                          .stop(1, 1)
                          [l ? "animate" : "css"](
                            { bottom: i + "%" },
                            a.animate
                          ),
                      1 === t &&
                        r.range[l ? "animate" : "css"](
                          { height: i - e + "%" },
                          { queue: !1, duration: a.animate }
                        ))),
                (e = i);
            })
          : ((t = this.value()),
            (s = this._valueMin()),
            (n = this._valueMax()),
            (i = n !== s ? ((t - s) / (n - s)) * 100 : 0),
            (h["horizontal" === this.orientation ? "left" : "bottom"] =
              i + "%"),
            this.handle.stop(1, 1)[l ? "animate" : "css"](h, a.animate),
            "min" === o &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ width: i + "%" }, a.animate),
            "max" === o &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ width: 100 - i + "%" }, a.animate),
            "min" === o &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ height: i + "%" }, a.animate),
            "max" === o &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ height: 100 - i + "%" }, a.animate));
      },
      _handleEvents: {
        keydown: function (t) {
          var e,
            i,
            s,
            n = V(t.target).data("ui-slider-handle-index");
          switch (t.keyCode) {
            case V.ui.keyCode.HOME:
            case V.ui.keyCode.END:
            case V.ui.keyCode.PAGE_UP:
            case V.ui.keyCode.PAGE_DOWN:
            case V.ui.keyCode.UP:
            case V.ui.keyCode.RIGHT:
            case V.ui.keyCode.DOWN:
            case V.ui.keyCode.LEFT:
              if (
                (t.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  this._addClass(V(t.target), null, "ui-state-active"),
                  !1 === this._start(t, n)))
              )
                return;
          }
          switch (
            ((s = this.options.step),
            (e = i = this._hasMultipleValues() ? this.values(n) : this.value()),
            t.keyCode)
          ) {
            case V.ui.keyCode.HOME:
              i = this._valueMin();
              break;
            case V.ui.keyCode.END:
              i = this._valueMax();
              break;
            case V.ui.keyCode.PAGE_UP:
              i = this._trimAlignValue(
                e + (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case V.ui.keyCode.PAGE_DOWN:
              i = this._trimAlignValue(
                e - (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case V.ui.keyCode.UP:
            case V.ui.keyCode.RIGHT:
              if (e === this._valueMax()) return;
              i = this._trimAlignValue(e + s);
              break;
            case V.ui.keyCode.DOWN:
            case V.ui.keyCode.LEFT:
              if (e === this._valueMin()) return;
              i = this._trimAlignValue(e - s);
          }
          this._slide(t, n, i);
        },
        keyup: function (t) {
          var e = V(t.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(t, e),
            this._change(t, e),
            this._removeClass(V(t.target), null, "ui-state-active"));
        },
      },
    }),
    V.widget("ui.sortable", V.ui.mouse, {
      version: "1.13.2",
      widgetEventPrefix: "sort",
      ready: !1,
      options: {
        appendTo: "parent",
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        items: "> *",
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: "default",
        tolerance: "intersect",
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null,
      },
      _isOverAxis: function (t, e, i) {
        return e <= t && t < e + i;
      },
      _isFloating: function (t) {
        return (
          /left|right/.test(t.css("float")) ||
          /inline|table-cell/.test(t.css("display"))
        );
      },
      _create: function () {
        (this.containerCache = {}),
          this._addClass("ui-sortable"),
          this.refresh(),
          (this.offset = this.element.offset()),
          this._mouseInit(),
          this._setHandleClassName(),
          (this.ready = !0);
      },
      _setOption: function (t, e) {
        this._super(t, e), "handle" === t && this._setHandleClassName();
      },
      _setHandleClassName: function () {
        var t = this;
        this._removeClass(
          this.element.find(".ui-sortable-handle"),
          "ui-sortable-handle"
        ),
          V.each(this.items, function () {
            t._addClass(
              this.instance.options.handle
                ? this.item.find(this.instance.options.handle)
                : this.item,
              "ui-sortable-handle"
            );
          });
      },
      _destroy: function () {
        this._mouseDestroy();
        for (var t = this.items.length - 1; 0 <= t; t--)
          this.items[t].item.removeData(this.widgetName + "-item");
        return this;
      },
      _mouseCapture: function (t, e) {
        var i = null,
          s = !1,
          n = this;
        return (
          !this.reverting &&
          !this.options.disabled &&
          "static" !== this.options.type &&
          (this._refreshItems(t),
          V(t.target)
            .parents()
            .each(function () {
              if (V.data(this, n.widgetName + "-item") === n)
                return (i = V(this)), !1;
            }),
          !!(i =
            V.data(t.target, n.widgetName + "-item") === n ? V(t.target) : i) &&
            !(
              this.options.handle &&
              !e &&
              (V(this.options.handle, i)
                .find("*")
                .addBack()
                .each(function () {
                  this === t.target && (s = !0);
                }),
              !s)
            ) &&
            ((this.currentItem = i), this._removeCurrentsFromItems(), !0))
        );
      },
      _mouseStart: function (t, e, i) {
        var s,
          n,
          o = this.options;
        if (
          ((this.currentContainer = this).refreshPositions(),
          (this.appendTo = V(
            "parent" !== o.appendTo ? o.appendTo : this.currentItem.parent()
          )),
          (this.helper = this._createHelper(t)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.offset = this.currentItem.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          V.extend(this.offset, {
            click: {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top,
            },
            relative: this._getRelativeOffset(),
          }),
          this.helper.css("position", "absolute"),
          (this.cssPosition = this.helper.css("position")),
          o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt),
          (this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0],
          }),
          this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          (this.scrollParent = this.placeholder.scrollParent()),
          V.extend(this.offset, { parent: this._getParentOffset() }),
          o.containment && this._setContainment(),
          o.cursor &&
            "auto" !== o.cursor &&
            ((n = this.document.find("body")),
            (this.storedCursor = n.css("cursor")),
            n.css("cursor", o.cursor),
            (this.storedStylesheet = V(
              "<style>*{ cursor: " + o.cursor + " !important; }</style>"
            ).appendTo(n))),
          o.zIndex &&
            (this.helper.css("zIndex") &&
              (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", o.zIndex)),
          o.opacity &&
            (this.helper.css("opacity") &&
              (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", o.opacity)),
          this.scrollParent[0] !== this.document[0] &&
            "HTML" !== this.scrollParent[0].tagName &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger("start", t, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !i)
        )
          for (s = this.containers.length - 1; 0 <= s; s--)
            this.containers[s]._trigger("activate", t, this._uiHash(this));
        return (
          V.ui.ddmanager && (V.ui.ddmanager.current = this),
          V.ui.ddmanager &&
            !o.dropBehaviour &&
            V.ui.ddmanager.prepareOffsets(this, t),
          (this.dragging = !0),
          this._addClass(this.helper, "ui-sortable-helper"),
          this.helper.parent().is(this.appendTo) ||
            (this.helper.detach().appendTo(this.appendTo),
            (this.offset.parent = this._getParentOffset())),
          (this.position = this.originalPosition = this._generatePosition(t)),
          (this.originalPageX = t.pageX),
          (this.originalPageY = t.pageY),
          (this.lastPositionAbs = this.positionAbs =
            this._convertPositionTo("absolute")),
          this._mouseDrag(t),
          !0
        );
      },
      _scroll: function (t) {
        var e = this.options,
          i = !1;
        return (
          this.scrollParent[0] !== this.document[0] &&
          "HTML" !== this.scrollParent[0].tagName
            ? (this.overflowOffset.top +
                this.scrollParent[0].offsetHeight -
                t.pageY <
              e.scrollSensitivity
                ? (this.scrollParent[0].scrollTop = i =
                    this.scrollParent[0].scrollTop + e.scrollSpeed)
                : t.pageY - this.overflowOffset.top < e.scrollSensitivity &&
                  (this.scrollParent[0].scrollTop = i =
                    this.scrollParent[0].scrollTop - e.scrollSpeed),
              this.overflowOffset.left +
                this.scrollParent[0].offsetWidth -
                t.pageX <
              e.scrollSensitivity
                ? (this.scrollParent[0].scrollLeft = i =
                    this.scrollParent[0].scrollLeft + e.scrollSpeed)
                : t.pageX - this.overflowOffset.left < e.scrollSensitivity &&
                  (this.scrollParent[0].scrollLeft = i =
                    this.scrollParent[0].scrollLeft - e.scrollSpeed))
            : (t.pageY - this.document.scrollTop() < e.scrollSensitivity
                ? (i = this.document.scrollTop(
                    this.document.scrollTop() - e.scrollSpeed
                  ))
                : this.window.height() - (t.pageY - this.document.scrollTop()) <
                    e.scrollSensitivity &&
                  (i = this.document.scrollTop(
                    this.document.scrollTop() + e.scrollSpeed
                  )),
              t.pageX - this.document.scrollLeft() < e.scrollSensitivity
                ? (i = this.document.scrollLeft(
                    this.document.scrollLeft() - e.scrollSpeed
                  ))
                : this.window.width() - (t.pageX - this.document.scrollLeft()) <
                    e.scrollSensitivity &&
                  (i = this.document.scrollLeft(
                    this.document.scrollLeft() + e.scrollSpeed
                  ))),
          i
        );
      },
      _mouseDrag: function (t) {
        var e,
          i,
          s,
          n,
          o = this.options;
        for (
          this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            (this.options.axis && "y" === this.options.axis) ||
              (this.helper[0].style.left = this.position.left + "px"),
            (this.options.axis && "x" === this.options.axis) ||
              (this.helper[0].style.top = this.position.top + "px"),
            o.scroll &&
              !1 !== this._scroll(t) &&
              (this._refreshItemPositions(!0),
              V.ui.ddmanager &&
                !o.dropBehaviour &&
                V.ui.ddmanager.prepareOffsets(this, t)),
            this.dragDirection = {
              vertical: this._getDragVerticalDirection(),
              horizontal: this._getDragHorizontalDirection(),
            },
            e = this.items.length - 1;
          0 <= e;
          e--
        )
          if (
            ((s = (i = this.items[e]).item[0]),
            (n = this._intersectsWithPointer(i)) &&
              i.instance === this.currentContainer &&
              !(
                s === this.currentItem[0] ||
                this.placeholder[1 === n ? "next" : "prev"]()[0] === s ||
                V.contains(this.placeholder[0], s) ||
                ("semi-dynamic" === this.options.type &&
                  V.contains(this.element[0], s))
              ))
          ) {
            if (
              ((this.direction = 1 === n ? "down" : "up"),
              "pointer" !== this.options.tolerance &&
                !this._intersectsWithSides(i))
            )
              break;
            this._rearrange(t, i), this._trigger("change", t, this._uiHash());
            break;
          }
        return (
          this._contactContainers(t),
          V.ui.ddmanager && V.ui.ddmanager.drag(this, t),
          this._trigger("sort", t, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        );
      },
      _mouseStop: function (t, e) {
        var i, s, n, o;
        if (t)
          return (
            V.ui.ddmanager &&
              !this.options.dropBehaviour &&
              V.ui.ddmanager.drop(this, t),
            this.options.revert
              ? ((s = (i = this).placeholder.offset()),
                (o = {}),
                ((n = this.options.axis) && "x" !== n) ||
                  (o.left =
                    s.left -
                    this.offset.parent.left -
                    this.margins.left +
                    (this.offsetParent[0] === this.document[0].body
                      ? 0
                      : this.offsetParent[0].scrollLeft)),
                (n && "y" !== n) ||
                  (o.top =
                    s.top -
                    this.offset.parent.top -
                    this.margins.top +
                    (this.offsetParent[0] === this.document[0].body
                      ? 0
                      : this.offsetParent[0].scrollTop)),
                (this.reverting = !0),
                V(this.helper).animate(
                  o,
                  parseInt(this.options.revert, 10) || 500,
                  function () {
                    i._clear(t);
                  }
                ))
              : this._clear(t, e),
            !1
          );
      },
      cancel: function () {
        if (this.dragging) {
          this._mouseUp(new V.Event("mouseup", { target: null })),
            "original" === this.options.helper
              ? (this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper"))
              : this.currentItem.show();
          for (var t = this.containers.length - 1; 0 <= t; t--)
            this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
              this.containers[t].containerCache.over &&
                (this.containers[t]._trigger("out", null, this._uiHash(this)),
                (this.containers[t].containerCache.over = 0));
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode &&
              this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper &&
              this.helper &&
              this.helper[0].parentNode &&
              this.helper.remove(),
            V.extend(this, {
              helper: null,
              dragging: !1,
              reverting: !1,
              _noFinalSort: null,
            }),
            this.domPosition.prev
              ? V(this.domPosition.prev).after(this.currentItem)
              : V(this.domPosition.parent).prepend(this.currentItem)),
          this
        );
      },
      serialize: function (e) {
        var t = this._getItemsAsjQuery(e && e.connected),
          i = [];
        return (
          (e = e || {}),
          V(t).each(function () {
            var t = (V(e.item || this).attr(e.attribute || "id") || "").match(
              e.expression || /(.+)[\-=_](.+)/
            );
            t &&
              i.push(
                (e.key || t[1] + "[]") +
                  "=" +
                  (e.key && e.expression ? t[1] : t[2])
              );
          }),
          !i.length && e.key && i.push(e.key + "="),
          i.join("&")
        );
      },
      toArray: function (t) {
        var e = this._getItemsAsjQuery(t && t.connected),
          i = [];
        return (
          (t = t || {}),
          e.each(function () {
            i.push(V(t.item || this).attr(t.attribute || "id") || "");
          }),
          i
        );
      },
      _intersectsWith: function (t) {
        var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          l = r + t.height,
          h = this.offset.click.top,
          c = this.offset.click.left,
          h = "x" === this.options.axis || (r < s + h && s + h < l),
          c = "y" === this.options.axis || (o < e + c && e + c < a);
        return "pointer" === this.options.tolerance ||
          this.options.forcePointerForContainers ||
          ("pointer" !== this.options.tolerance &&
            this.helperProportions[this.floating ? "width" : "height"] >
              t[this.floating ? "width" : "height"])
          ? h && c
          : o < e + this.helperProportions.width / 2 &&
              i - this.helperProportions.width / 2 < a &&
              r < s + this.helperProportions.height / 2 &&
              n - this.helperProportions.height / 2 < l;
      },
      _intersectsWithPointer: function (t) {
        var e =
            "x" === this.options.axis ||
            this._isOverAxis(
              this.positionAbs.top + this.offset.click.top,
              t.top,
              t.height
            ),
          t =
            "y" === this.options.axis ||
            this._isOverAxis(
              this.positionAbs.left + this.offset.click.left,
              t.left,
              t.width
            );
        return (
          !(!e || !t) &&
          ((e = this.dragDirection.vertical),
          (t = this.dragDirection.horizontal),
          this.floating
            ? "right" === t || "down" === e
              ? 2
              : 1
            : e && ("down" === e ? 2 : 1))
        );
      },
      _intersectsWithSides: function (t) {
        var e = this._isOverAxis(
            this.positionAbs.top + this.offset.click.top,
            t.top + t.height / 2,
            t.height
          ),
          i = this._isOverAxis(
            this.positionAbs.left + this.offset.click.left,
            t.left + t.width / 2,
            t.width
          ),
          s = this.dragDirection.vertical,
          t = this.dragDirection.horizontal;
        return this.floating && t
          ? ("right" === t && i) || ("left" === t && !i)
          : s && (("down" === s && e) || ("up" === s && !e));
      },
      _getDragVerticalDirection: function () {
        var t = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 != t && (0 < t ? "down" : "up");
      },
      _getDragHorizontalDirection: function () {
        var t = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 != t && (0 < t ? "right" : "left");
      },
      refresh: function (t) {
        return (
          this._refreshItems(t),
          this._setHandleClassName(),
          this.refreshPositions(),
          this
        );
      },
      _connectWith: function () {
        var t = this.options;
        return t.connectWith.constructor === String
          ? [t.connectWith]
          : t.connectWith;
      },
      _getItemsAsjQuery: function (t) {
        var e,
          i,
          s,
          n,
          o = [],
          a = [],
          r = this._connectWith();
        if (r && t)
          for (e = r.length - 1; 0 <= e; e--)
            for (i = (s = V(r[e], this.document[0])).length - 1; 0 <= i; i--)
              (n = V.data(s[i], this.widgetFullName)) &&
                n !== this &&
                !n.options.disabled &&
                a.push([
                  "function" == typeof n.options.items
                    ? n.options.items.call(n.element)
                    : V(n.options.items, n.element)
                        .not(".ui-sortable-helper")
                        .not(".ui-sortable-placeholder"),
                  n,
                ]);
        function l() {
          o.push(this);
        }
        for (
          a.push([
            "function" == typeof this.options.items
              ? this.options.items.call(this.element, null, {
                  options: this.options,
                  item: this.currentItem,
                })
              : V(this.options.items, this.element)
                  .not(".ui-sortable-helper")
                  .not(".ui-sortable-placeholder"),
            this,
          ]),
            e = a.length - 1;
          0 <= e;
          e--
        )
          a[e][0].each(l);
        return V(o);
      },
      _removeCurrentsFromItems: function () {
        var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = V.grep(this.items, function (t) {
          for (var e = 0; e < i.length; e++) if (i[e] === t.item[0]) return !1;
          return !0;
        });
      },
      _refreshItems: function (t) {
        (this.items = []), (this.containers = [this]);
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          l,
          h = this.items,
          c = [
            [
              "function" == typeof this.options.items
                ? this.options.items.call(this.element[0], t, {
                    item: this.currentItem,
                  })
                : V(this.options.items, this.element),
              this,
            ],
          ],
          u = this._connectWith();
        if (u && this.ready)
          for (e = u.length - 1; 0 <= e; e--)
            for (i = (s = V(u[e], this.document[0])).length - 1; 0 <= i; i--)
              (n = V.data(s[i], this.widgetFullName)) &&
                n !== this &&
                !n.options.disabled &&
                (c.push([
                  "function" == typeof n.options.items
                    ? n.options.items.call(n.element[0], t, {
                        item: this.currentItem,
                      })
                    : V(n.options.items, n.element),
                  n,
                ]),
                this.containers.push(n));
        for (e = c.length - 1; 0 <= e; e--)
          for (o = c[e][1], l = (a = c[e][(i = 0)]).length; i < l; i++)
            (r = V(a[i])).data(this.widgetName + "-item", o),
              h.push({
                item: r,
                instance: o,
                width: 0,
                height: 0,
                left: 0,
                top: 0,
              });
      },
      _refreshItemPositions: function (t) {
        for (var e, i, s = this.items.length - 1; 0 <= s; s--)
          (e = this.items[s]),
            (this.currentContainer &&
              e.instance !== this.currentContainer &&
              e.item[0] !== this.currentItem[0]) ||
              ((i = this.options.toleranceElement
                ? V(this.options.toleranceElement, e.item)
                : e.item),
              t || ((e.width = i.outerWidth()), (e.height = i.outerHeight())),
              (i = i.offset()),
              (e.left = i.left),
              (e.top = i.top));
      },
      refreshPositions: function (t) {
        var e, i;
        if (
          ((this.floating =
            !!this.items.length &&
            ("x" === this.options.axis ||
              this._isFloating(this.items[0].item))),
          this.offsetParent &&
            this.helper &&
            (this.offset.parent = this._getParentOffset()),
          this._refreshItemPositions(t),
          this.options.custom && this.options.custom.refreshContainers)
        )
          this.options.custom.refreshContainers.call(this);
        else
          for (e = this.containers.length - 1; 0 <= e; e--)
            (i = this.containers[e].element.offset()),
              (this.containers[e].containerCache.left = i.left),
              (this.containers[e].containerCache.top = i.top),
              (this.containers[e].containerCache.width =
                this.containers[e].element.outerWidth()),
              (this.containers[e].containerCache.height =
                this.containers[e].element.outerHeight());
        return this;
      },
      _createPlaceholder: function (i) {
        var s,
          n,
          o = (i = i || this).options;
        (o.placeholder && o.placeholder.constructor !== String) ||
          ((s = o.placeholder),
          (n = i.currentItem[0].nodeName.toLowerCase()),
          (o.placeholder = {
            element: function () {
              var t = V("<" + n + ">", i.document[0]);
              return (
                i
                  ._addClass(
                    t,
                    "ui-sortable-placeholder",
                    s || i.currentItem[0].className
                  )
                  ._removeClass(t, "ui-sortable-helper"),
                "tbody" === n
                  ? i._createTrPlaceholder(
                      i.currentItem.find("tr").eq(0),
                      V("<tr>", i.document[0]).appendTo(t)
                    )
                  : "tr" === n
                  ? i._createTrPlaceholder(i.currentItem, t)
                  : "img" === n && t.attr("src", i.currentItem.attr("src")),
                s || t.css("visibility", "hidden"),
                t
              );
            },
            update: function (t, e) {
              (s && !o.forcePlaceholderSize) ||
                ((e.height() &&
                  (!o.forcePlaceholderSize || ("tbody" !== n && "tr" !== n))) ||
                  e.height(
                    i.currentItem.innerHeight() -
                      parseInt(i.currentItem.css("paddingTop") || 0, 10) -
                      parseInt(i.currentItem.css("paddingBottom") || 0, 10)
                  ),
                e.width() ||
                  e.width(
                    i.currentItem.innerWidth() -
                      parseInt(i.currentItem.css("paddingLeft") || 0, 10) -
                      parseInt(i.currentItem.css("paddingRight") || 0, 10)
                  ));
            },
          })),
          (i.placeholder = V(
            o.placeholder.element.call(i.element, i.currentItem)
          )),
          i.currentItem.after(i.placeholder),
          o.placeholder.update(i, i.placeholder);
      },
      _createTrPlaceholder: function (t, e) {
        var i = this;
        t.children().each(function () {
          V("<td>&#160;</td>", i.document[0])
            .attr("colspan", V(this).attr("colspan") || 1)
            .appendTo(e);
        });
      },
      _contactContainers: function (t) {
        for (
          var e,
            i,
            s,
            n,
            o,
            a,
            r,
            l,
            h,
            c = null,
            u = null,
            d = this.containers.length - 1;
          0 <= d;
          d--
        )
          V.contains(this.currentItem[0], this.containers[d].element[0]) ||
            (this._intersectsWith(this.containers[d].containerCache)
              ? (c &&
                  V.contains(this.containers[d].element[0], c.element[0])) ||
                ((c = this.containers[d]), (u = d))
              : this.containers[d].containerCache.over &&
                (this.containers[d]._trigger("out", t, this._uiHash(this)),
                (this.containers[d].containerCache.over = 0)));
        if (c)
          if (1 === this.containers.length)
            this.containers[u].containerCache.over ||
              (this.containers[u]._trigger("over", t, this._uiHash(this)),
              (this.containers[u].containerCache.over = 1));
          else {
            for (
              i = 1e4,
                s = null,
                n = (l = c.floating || this._isFloating(this.currentItem))
                  ? "left"
                  : "top",
                o = l ? "width" : "height",
                h = l ? "pageX" : "pageY",
                e = this.items.length - 1;
              0 <= e;
              e--
            )
              V.contains(
                this.containers[u].element[0],
                this.items[e].item[0]
              ) &&
                this.items[e].item[0] !== this.currentItem[0] &&
                ((a = this.items[e].item.offset()[n]),
                (r = !1),
                t[h] - a > this.items[e][o] / 2 && (r = !0),
                Math.abs(t[h] - a) < i &&
                  ((i = Math.abs(t[h] - a)),
                  (s = this.items[e]),
                  (this.direction = r ? "up" : "down")));
            (s || this.options.dropOnEmpty) &&
              (this.currentContainer !== this.containers[u]
                ? (s
                    ? this._rearrange(t, s, null, !0)
                    : this._rearrange(t, null, this.containers[u].element, !0),
                  this._trigger("change", t, this._uiHash()),
                  this.containers[u]._trigger("change", t, this._uiHash(this)),
                  (this.currentContainer = this.containers[u]),
                  this.options.placeholder.update(
                    this.currentContainer,
                    this.placeholder
                  ),
                  (this.scrollParent = this.placeholder.scrollParent()),
                  this.scrollParent[0] !== this.document[0] &&
                    "HTML" !== this.scrollParent[0].tagName &&
                    (this.overflowOffset = this.scrollParent.offset()),
                  this.containers[u]._trigger("over", t, this._uiHash(this)),
                  (this.containers[u].containerCache.over = 1))
                : this.currentContainer.containerCache.over ||
                  (this.containers[u]._trigger("over", t, this._uiHash()),
                  (this.currentContainer.containerCache.over = 1)));
          }
      },
      _createHelper: function (t) {
        var e = this.options,
          t =
            "function" == typeof e.helper
              ? V(e.helper.apply(this.element[0], [t, this.currentItem]))
              : "clone" === e.helper
              ? this.currentItem.clone()
              : this.currentItem;
        return (
          t.parents("body").length || this.appendTo[0].appendChild(t[0]),
          t[0] === this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css("position"),
              top: this.currentItem.css("top"),
              left: this.currentItem.css("left"),
            }),
          (t[0].style.width && !e.forceHelperSize) ||
            t.width(this.currentItem.width()),
          (t[0].style.height && !e.forceHelperSize) ||
            t.height(this.currentItem.height()),
          t
        );
      },
      _adjustOffsetFromHelper: function (t) {
        "string" == typeof t && (t = t.split(" ")),
          "left" in
            (t = Array.isArray(t) ? { left: +t[0], top: +t[1] || 0 } : t) &&
            (this.offset.click.left = t.left + this.margins.left),
          "right" in t &&
            (this.offset.click.left =
              this.helperProportions.width - t.right + this.margins.left),
          "top" in t && (this.offset.click.top = t.top + this.margins.top),
          "bottom" in t &&
            (this.offset.click.top =
              this.helperProportions.height - t.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var t = this.offsetParent.offset();
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== this.document[0] &&
            V.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((t.left += this.scrollParent.scrollLeft()),
            (t.top += this.scrollParent.scrollTop())),
          {
            top:
              (t =
                this.offsetParent[0] === this.document[0].body ||
                (this.offsetParent[0].tagName &&
                  "html" === this.offsetParent[0].tagName.toLowerCase() &&
                  V.ui.ie)
                  ? { top: 0, left: 0 }
                  : t).top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              t.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
        var t = this.currentItem.position();
        return {
          top:
            t.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            this.scrollParent.scrollTop(),
          left:
            t.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            this.scrollParent.scrollLeft(),
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
          top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var t,
          e,
          i = this.options;
        "parent" === i.containment &&
          (i.containment = this.helper[0].parentNode),
          ("document" !== i.containment && "window" !== i.containment) ||
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              "document" === i.containment
                ? this.document.width()
                : this.window.width() -
                  this.helperProportions.width -
                  this.margins.left,
              ("document" === i.containment
                ? this.document.height() ||
                  document.body.parentNode.scrollHeight
                : this.window.height() ||
                  this.document[0].body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top,
            ]),
          /^(document|window|parent)$/.test(i.containment) ||
            ((t = V(i.containment)[0]),
            (e = V(i.containment).offset()),
            (i = "hidden" !== V(t).css("overflow")),
            (this.containment = [
              e.left +
                (parseInt(V(t).css("borderLeftWidth"), 10) || 0) +
                (parseInt(V(t).css("paddingLeft"), 10) || 0) -
                this.margins.left,
              e.top +
                (parseInt(V(t).css("borderTopWidth"), 10) || 0) +
                (parseInt(V(t).css("paddingTop"), 10) || 0) -
                this.margins.top,
              e.left +
                (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) -
                (parseInt(V(t).css("borderLeftWidth"), 10) || 0) -
                (parseInt(V(t).css("paddingRight"), 10) || 0) -
                this.helperProportions.width -
                this.margins.left,
              e.top +
                (i
                  ? Math.max(t.scrollHeight, t.offsetHeight)
                  : t.offsetHeight) -
                (parseInt(V(t).css("borderTopWidth"), 10) || 0) -
                (parseInt(V(t).css("paddingBottom"), 10) || 0) -
                this.helperProportions.height -
                this.margins.top,
            ]));
      },
      _convertPositionTo: function (t, e) {
        e = e || this.position;
        var i = "absolute" === t ? 1 : -1,
          s =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              V.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          t = /(html|body)/i.test(s[0].tagName);
        return {
          top:
            e.top +
            this.offset.relative.top * i +
            this.offset.parent.top * i -
            ("fixed" === this.cssPosition
              ? -this.scrollParent.scrollTop()
              : t
              ? 0
              : s.scrollTop()) *
              i,
          left:
            e.left +
            this.offset.relative.left * i +
            this.offset.parent.left * i -
            ("fixed" === this.cssPosition
              ? -this.scrollParent.scrollLeft()
              : t
              ? 0
              : s.scrollLeft()) *
              i,
        };
      },
      _generatePosition: function (t) {
        var e = this.options,
          i = t.pageX,
          s = t.pageY,
          n =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              V.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName);
        return (
          "relative" !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              this.scrollParent[0] !== this.offsetParent[0]) ||
            (this.offset.relative = this._getRelativeOffset()),
          this.originalPosition &&
            (this.containment &&
              (t.pageX - this.offset.click.left < this.containment[0] &&
                (i = this.containment[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < this.containment[1] &&
                (s = this.containment[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > this.containment[2] &&
                (i = this.containment[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > this.containment[3] &&
                (s = this.containment[3] + this.offset.click.top)),
            e.grid &&
              ((t =
                this.originalPageY +
                Math.round((s - this.originalPageY) / e.grid[1]) * e.grid[1]),
              (s =
                !this.containment ||
                (t - this.offset.click.top >= this.containment[1] &&
                  t - this.offset.click.top <= this.containment[3])
                  ? t
                  : t - this.offset.click.top >= this.containment[1]
                  ? t - e.grid[1]
                  : t + e.grid[1]),
              (t =
                this.originalPageX +
                Math.round((i - this.originalPageX) / e.grid[0]) * e.grid[0]),
              (i =
                !this.containment ||
                (t - this.offset.click.left >= this.containment[0] &&
                  t - this.offset.click.left <= this.containment[2])
                  ? t
                  : t - this.offset.click.left >= this.containment[0]
                  ? t - e.grid[0]
                  : t + e.grid[0]))),
          {
            top:
              s -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : o
                ? 0
                : n.scrollTop()),
            left:
              i -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : o
                ? 0
                : n.scrollLeft()),
          }
        );
      },
      _rearrange: function (t, e, i, s) {
        i
          ? i[0].appendChild(this.placeholder[0])
          : e.item[0].parentNode.insertBefore(
              this.placeholder[0],
              "down" === this.direction ? e.item[0] : e.item[0].nextSibling
            ),
          (this.counter = this.counter ? ++this.counter : 1);
        var n = this.counter;
        this._delay(function () {
          n === this.counter && this.refreshPositions(!s);
        });
      },
      _clear: function (t, e) {
        this.reverting = !1;
        var i,
          s = [];
        if (
          (!this._noFinalSort &&
            this.currentItem.parent().length &&
            this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] === this.currentItem[0])
        ) {
          for (i in this._storedCSS)
            ("auto" !== this._storedCSS[i] &&
              "static" !== this._storedCSS[i]) ||
              (this._storedCSS[i] = "");
          this.currentItem.css(this._storedCSS),
            this._removeClass(this.currentItem, "ui-sortable-helper");
        } else this.currentItem.show();
        function n(e, i, s) {
          return function (t) {
            s._trigger(e, t, i._uiHash(i));
          };
        }
        for (
          this.fromOutside &&
            !e &&
            s.push(function (t) {
              this._trigger("receive", t, this._uiHash(this.fromOutside));
            }),
            (!this.fromOutside &&
              this.domPosition.prev ===
                this.currentItem.prev().not(".ui-sortable-helper")[0] &&
              this.domPosition.parent === this.currentItem.parent()[0]) ||
              e ||
              s.push(function (t) {
                this._trigger("update", t, this._uiHash());
              }),
            this !== this.currentContainer &&
              (e ||
                (s.push(function (t) {
                  this._trigger("remove", t, this._uiHash());
                }),
                s.push(
                  function (e) {
                    return function (t) {
                      e._trigger("receive", t, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ),
                s.push(
                  function (e) {
                    return function (t) {
                      e._trigger("update", t, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ))),
            i = this.containers.length - 1;
          0 <= i;
          i--
        )
          e || s.push(n("deactivate", this, this.containers[i])),
            this.containers[i].containerCache.over &&
              (s.push(n("out", this, this.containers[i])),
              (this.containers[i].containerCache.over = 0));
        if (
          (this.storedCursor &&
            (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
          this._storedOpacity &&
            this.helper.css("opacity", this._storedOpacity),
          this._storedZIndex &&
            this.helper.css(
              "zIndex",
              "auto" === this._storedZIndex ? "" : this._storedZIndex
            ),
          (this.dragging = !1),
          e || this._trigger("beforeStop", t, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.cancelHelperRemoval ||
            (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            (this.helper = null)),
          !e)
        ) {
          for (i = 0; i < s.length; i++) s[i].call(this, t);
          this._trigger("stop", t, this._uiHash());
        }
        return (this.fromOutside = !1), !this.cancelHelperRemoval;
      },
      _trigger: function () {
        !1 === V.Widget.prototype._trigger.apply(this, arguments) &&
          this.cancel();
      },
      _uiHash: function (t) {
        var e = t || this;
        return {
          helper: e.helper,
          placeholder: e.placeholder || V([]),
          position: e.position,
          originalPosition: e.originalPosition,
          offset: e.positionAbs,
          item: e.currentItem,
          sender: t ? t.element : null,
        };
      },
    });
  function ht(e) {
    return function () {
      var t = this.element.val();
      e.apply(this, arguments),
        this._refresh(),
        t !== this.element.val() && this._trigger("change");
    };
  }
  V.widget("ui.spinner", {
    version: "1.13.2",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
      classes: {
        "ui-spinner": "ui-corner-all",
        "ui-spinner-down": "ui-corner-br",
        "ui-spinner-up": "ui-corner-tr",
      },
      culture: null,
      icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null,
    },
    _create: function () {
      this._setOption("max", this.options.max),
        this._setOption("min", this.options.min),
        this._setOption("step", this.options.step),
        "" !== this.value() && this._value(this.element.val(), !0),
        this._draw(),
        this._on(this._events),
        this._refresh(),
        this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr("autocomplete");
          },
        });
    },
    _getCreateOptions: function () {
      var s = this._super(),
        n = this.element;
      return (
        V.each(["min", "max", "step"], function (t, e) {
          var i = n.attr(e);
          null != i && i.length && (s[e] = i);
        }),
        s
      );
    },
    _events: {
      keydown: function (t) {
        this._start(t) && this._keydown(t) && t.preventDefault();
      },
      keyup: "_stop",
      focus: function () {
        this.previous = this.element.val();
      },
      blur: function (t) {
        this.cancelBlur
          ? delete this.cancelBlur
          : (this._stop(),
            this._refresh(),
            this.previous !== this.element.val() && this._trigger("change", t));
      },
      mousewheel: function (t, e) {
        var i = V.ui.safeActiveElement(this.document[0]);
        if (this.element[0] === i && e) {
          if (!this.spinning && !this._start(t)) return !1;
          this._spin((0 < e ? 1 : -1) * this.options.step, t),
            clearTimeout(this.mousewheelTimer),
            (this.mousewheelTimer = this._delay(function () {
              this.spinning && this._stop(t);
            }, 100)),
            t.preventDefault();
        }
      },
      "mousedown .ui-spinner-button": function (t) {
        var e;
        function i() {
          this.element[0] === V.ui.safeActiveElement(this.document[0]) ||
            (this.element.trigger("focus"),
            (this.previous = e),
            this._delay(function () {
              this.previous = e;
            }));
        }
        (e =
          this.element[0] === V.ui.safeActiveElement(this.document[0])
            ? this.previous
            : this.element.val()),
          t.preventDefault(),
          i.call(this),
          (this.cancelBlur = !0),
          this._delay(function () {
            delete this.cancelBlur, i.call(this);
          }),
          !1 !== this._start(t) &&
            this._repeat(
              null,
              V(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
              t
            );
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function (t) {
        if (V(t.currentTarget).hasClass("ui-state-active"))
          return (
            !1 !== this._start(t) &&
            void this._repeat(
              null,
              V(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
              t
            )
          );
      },
      "mouseleave .ui-spinner-button": "_stop",
    },
    _enhance: function () {
      this.uiSpinner = this.element
        .attr("autocomplete", "off")
        .wrap("<span>")
        .parent()
        .append("<a></a><a></a>");
    },
    _draw: function () {
      this._enhance(),
        this._addClass(
          this.uiSpinner,
          "ui-spinner",
          "ui-widget ui-widget-content"
        ),
        this._addClass("ui-spinner-input"),
        this.element.attr("role", "spinbutton"),
        (this.buttons = this.uiSpinner
          .children("a")
          .attr("tabIndex", -1)
          .attr("aria-hidden", !0)
          .button({ classes: { "ui-button": "" } })),
        this._removeClass(this.buttons, "ui-corner-all"),
        this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"),
        this._addClass(
          this.buttons.last(),
          "ui-spinner-button ui-spinner-down"
        ),
        this.buttons
          .first()
          .button({ icon: this.options.icons.up, showLabel: !1 }),
        this.buttons
          .last()
          .button({ icon: this.options.icons.down, showLabel: !1 }),
        this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) &&
          0 < this.uiSpinner.height() &&
          this.uiSpinner.height(this.uiSpinner.height());
    },
    _keydown: function (t) {
      var e = this.options,
        i = V.ui.keyCode;
      switch (t.keyCode) {
        case i.UP:
          return this._repeat(null, 1, t), !0;
        case i.DOWN:
          return this._repeat(null, -1, t), !0;
        case i.PAGE_UP:
          return this._repeat(null, e.page, t), !0;
        case i.PAGE_DOWN:
          return this._repeat(null, -e.page, t), !0;
      }
      return !1;
    },
    _start: function (t) {
      return (
        !(!this.spinning && !1 === this._trigger("start", t)) &&
        (this.counter || (this.counter = 1), (this.spinning = !0))
      );
    },
    _repeat: function (t, e, i) {
      (t = t || 500),
        clearTimeout(this.timer),
        (this.timer = this._delay(function () {
          this._repeat(40, e, i);
        }, t)),
        this._spin(e * this.options.step, i);
    },
    _spin: function (t, e) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1),
        (i = this._adjustValue(i + t * this._increment(this.counter))),
        (this.spinning && !1 === this._trigger("spin", e, { value: i })) ||
          (this._value(i), this.counter++);
    },
    _increment: function (t) {
      var e = this.options.incremental;
      return e
        ? "function" == typeof e
          ? e(t)
          : Math.floor((t * t * t) / 5e4 - (t * t) / 500 + (17 * t) / 200 + 1)
        : 1;
    },
    _precision: function () {
      var t = this._precisionOf(this.options.step);
      return (t =
        null !== this.options.min
          ? Math.max(t, this._precisionOf(this.options.min))
          : t);
    },
    _precisionOf: function (t) {
      var e = t.toString(),
        t = e.indexOf(".");
      return -1 === t ? 0 : e.length - t - 1;
    },
    _adjustValue: function (t) {
      var e = this.options,
        i = null !== e.min ? e.min : 0,
        s = t - i;
      return (
        (t = i + Math.round(s / e.step) * e.step),
        (t = parseFloat(t.toFixed(this._precision()))),
        null !== e.max && t > e.max
          ? e.max
          : null !== e.min && t < e.min
          ? e.min
          : t
      );
    },
    _stop: function (t) {
      this.spinning &&
        (clearTimeout(this.timer),
        clearTimeout(this.mousewheelTimer),
        (this.counter = 0),
        (this.spinning = !1),
        this._trigger("stop", t));
    },
    _setOption: function (t, e) {
      var i;
      if ("culture" === t || "numberFormat" === t)
        return (
          (i = this._parse(this.element.val())),
          (this.options[t] = e),
          void this.element.val(this._format(i))
        );
      ("max" !== t && "min" !== t && "step" !== t) ||
        ("string" == typeof e && (e = this._parse(e))),
        "icons" === t &&
          ((i = this.buttons.first().find(".ui-icon")),
          this._removeClass(i, null, this.options.icons.up),
          this._addClass(i, null, e.up),
          (i = this.buttons.last().find(".ui-icon")),
          this._removeClass(i, null, this.options.icons.down),
          this._addClass(i, null, e.down)),
        this._super(t, e);
    },
    _setOptionDisabled: function (t) {
      this._super(t),
        this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
        this.element.prop("disabled", !!t),
        this.buttons.button(t ? "disable" : "enable");
    },
    _setOptions: ht(function (t) {
      this._super(t);
    }),
    _parse: function (t) {
      return "" ===
        (t =
          "string" == typeof t && "" !== t
            ? window.Globalize && this.options.numberFormat
              ? Globalize.parseFloat(t, 10, this.options.culture)
              : +t
            : t) || isNaN(t)
        ? null
        : t;
    },
    _format: function (t) {
      return "" === t
        ? ""
        : window.Globalize && this.options.numberFormat
        ? Globalize.format(t, this.options.numberFormat, this.options.culture)
        : t;
    },
    _refresh: function () {
      this.element.attr({
        "aria-valuemin": this.options.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._parse(this.element.val()),
      });
    },
    isValid: function () {
      var t = this.value();
      return null !== t && t === this._adjustValue(t);
    },
    _value: function (t, e) {
      var i;
      "" !== t &&
        null !== (i = this._parse(t)) &&
        (e || (i = this._adjustValue(i)), (t = this._format(i))),
        this.element.val(t),
        this._refresh();
    },
    _destroy: function () {
      this.element
        .prop("disabled", !1)
        .removeAttr(
          "autocomplete role aria-valuemin aria-valuemax aria-valuenow"
        ),
        this.uiSpinner.replaceWith(this.element);
    },
    stepUp: ht(function (t) {
      this._stepUp(t);
    }),
    _stepUp: function (t) {
      this._start() && (this._spin((t || 1) * this.options.step), this._stop());
    },
    stepDown: ht(function (t) {
      this._stepDown(t);
    }),
    _stepDown: function (t) {
      this._start() &&
        (this._spin((t || 1) * -this.options.step), this._stop());
    },
    pageUp: ht(function (t) {
      this._stepUp((t || 1) * this.options.page);
    }),
    pageDown: ht(function (t) {
      this._stepDown((t || 1) * this.options.page);
    }),
    value: function (t) {
      if (!arguments.length) return this._parse(this.element.val());
      ht(this._value).call(this, t);
    },
    widget: function () {
      return this.uiSpinner;
    },
  }),
    !1 !== V.uiBackCompat &&
      V.widget("ui.spinner", V.ui.spinner, {
        _enhance: function () {
          this.uiSpinner = this.element
            .attr("autocomplete", "off")
            .wrap(this._uiSpinnerHtml())
            .parent()
            .append(this._buttonHtml());
        },
        _uiSpinnerHtml: function () {
          return "<span>";
        },
        _buttonHtml: function () {
          return "<a></a><a></a>";
        },
      });
  var ct;
  V.ui.spinner;
  V.widget("ui.tabs", {
    version: "1.13.2",
    delay: 300,
    options: {
      active: null,
      classes: {
        "ui-tabs": "ui-corner-all",
        "ui-tabs-nav": "ui-corner-all",
        "ui-tabs-panel": "ui-corner-bottom",
        "ui-tabs-tab": "ui-corner-top",
      },
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null,
    },
    _isLocal:
      ((ct = /#.*$/),
      function (t) {
        var e = t.href.replace(ct, ""),
          i = location.href.replace(ct, "");
        try {
          e = decodeURIComponent(e);
        } catch (t) {}
        try {
          i = decodeURIComponent(i);
        } catch (t) {}
        return 1 < t.hash.length && e === i;
      }),
    _create: function () {
      var e = this,
        t = this.options;
      (this.running = !1),
        this._addClass("ui-tabs", "ui-widget ui-widget-content"),
        this._toggleClass("ui-tabs-collapsible", null, t.collapsible),
        this._processTabs(),
        (t.active = this._initialActive()),
        Array.isArray(t.disabled) &&
          (t.disabled = V.uniqueSort(
            t.disabled.concat(
              V.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t);
              })
            )
          ).sort()),
        !1 !== this.options.active && this.anchors.length
          ? (this.active = this._findActive(t.active))
          : (this.active = V()),
        this._refresh(),
        this.active.length && this.load(t.active);
    },
    _initialActive: function () {
      var i = this.options.active,
        t = this.options.collapsible,
        s = location.hash.substring(1);
      return (
        null === i &&
          (s &&
            this.tabs.each(function (t, e) {
              if (V(e).attr("aria-controls") === s) return (i = t), !1;
            }),
          (null !==
            (i =
              null === i
                ? this.tabs.index(this.tabs.filter(".ui-tabs-active"))
                : i) &&
            -1 !== i) ||
            (i = !!this.tabs.length && 0)),
        !1 !== i &&
          -1 === (i = this.tabs.index(this.tabs.eq(i))) &&
          (i = !t && 0),
        (i = !t && !1 === i && this.anchors.length ? 0 : i)
      );
    },
    _getCreateEventData: function () {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : V(),
      };
    },
    _tabKeydown: function (t) {
      var e = V(V.ui.safeActiveElement(this.document[0])).closest("li"),
        i = this.tabs.index(e),
        s = !0;
      if (!this._handlePageNav(t)) {
        switch (t.keyCode) {
          case V.ui.keyCode.RIGHT:
          case V.ui.keyCode.DOWN:
            i++;
            break;
          case V.ui.keyCode.UP:
          case V.ui.keyCode.LEFT:
            (s = !1), i--;
            break;
          case V.ui.keyCode.END:
            i = this.anchors.length - 1;
            break;
          case V.ui.keyCode.HOME:
            i = 0;
            break;
          case V.ui.keyCode.SPACE:
            return (
              t.preventDefault(),
              clearTimeout(this.activating),
              void this._activate(i)
            );
          case V.ui.keyCode.ENTER:
            return (
              t.preventDefault(),
              clearTimeout(this.activating),
              void this._activate(i !== this.options.active && i)
            );
          default:
            return;
        }
        t.preventDefault(),
          clearTimeout(this.activating),
          (i = this._focusNextTab(i, s)),
          t.ctrlKey ||
            t.metaKey ||
            (e.attr("aria-selected", "false"),
            this.tabs.eq(i).attr("aria-selected", "true"),
            (this.activating = this._delay(function () {
              this.option("active", i);
            }, this.delay)));
      }
    },
    _panelKeydown: function (t) {
      this._handlePageNav(t) ||
        (t.ctrlKey &&
          t.keyCode === V.ui.keyCode.UP &&
          (t.preventDefault(), this.active.trigger("focus")));
    },
    _handlePageNav: function (t) {
      return t.altKey && t.keyCode === V.ui.keyCode.PAGE_UP
        ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0)
        : t.altKey && t.keyCode === V.ui.keyCode.PAGE_DOWN
        ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0)
        : void 0;
    },
    _findNextTab: function (t, e) {
      var i = this.tabs.length - 1;
      for (
        ;
        -1 !==
        V.inArray((t = (t = i < t ? 0 : t) < 0 ? i : t), this.options.disabled);

      )
        t = e ? t + 1 : t - 1;
      return t;
    },
    _focusNextTab: function (t, e) {
      return (t = this._findNextTab(t, e)), this.tabs.eq(t).trigger("focus"), t;
    },
    _setOption: function (t, e) {
      "active" !== t
        ? (this._super(t, e),
          "collapsible" === t &&
            (this._toggleClass("ui-tabs-collapsible", null, e),
            e || !1 !== this.options.active || this._activate(0)),
          "event" === t && this._setupEvents(e),
          "heightStyle" === t && this._setupHeightStyle(e))
        : this._activate(e);
    },
    _sanitizeSelector: function (t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    },
    refresh: function () {
      var t = this.options,
        e = this.tablist.children(":has(a[href])");
      (t.disabled = V.map(e.filter(".ui-state-disabled"), function (t) {
        return e.index(t);
      })),
        this._processTabs(),
        !1 !== t.active && this.anchors.length
          ? this.active.length && !V.contains(this.tablist[0], this.active[0])
            ? this.tabs.length === t.disabled.length
              ? ((t.active = !1), (this.active = V()))
              : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1))
            : (t.active = this.tabs.index(this.active))
          : ((t.active = !1), (this.active = V())),
        this._refresh();
    },
    _refresh: function () {
      this._setOptionDisabled(this.options.disabled),
        this._setupEvents(this.options.event),
        this._setupHeightStyle(this.options.heightStyle),
        this.tabs.not(this.active).attr({
          "aria-selected": "false",
          "aria-expanded": "false",
          tabIndex: -1,
        }),
        this.panels
          .not(this._getPanelForTab(this.active))
          .hide()
          .attr({ "aria-hidden": "true" }),
        this.active.length
          ? (this.active.attr({
              "aria-selected": "true",
              "aria-expanded": "true",
              tabIndex: 0,
            }),
            this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
            this._getPanelForTab(this.active)
              .show()
              .attr({ "aria-hidden": "false" }))
          : this.tabs.eq(0).attr("tabIndex", 0);
    },
    _processTabs: function () {
      var l = this,
        t = this.tabs,
        e = this.anchors,
        i = this.panels;
      (this.tablist = this._getList().attr("role", "tablist")),
        this._addClass(
          this.tablist,
          "ui-tabs-nav",
          "ui-helper-reset ui-helper-clearfix ui-widget-header"
        ),
        this.tablist
          .on("mousedown" + this.eventNamespace, "> li", function (t) {
            V(this).is(".ui-state-disabled") && t.preventDefault();
          })
          .on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
            V(this).closest("li").is(".ui-state-disabled") && this.blur();
          }),
        (this.tabs = this.tablist
          .find("> li:has(a[href])")
          .attr({ role: "tab", tabIndex: -1 })),
        this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
        (this.anchors = this.tabs
          .map(function () {
            return V("a", this)[0];
          })
          .attr({ tabIndex: -1 })),
        this._addClass(this.anchors, "ui-tabs-anchor"),
        (this.panels = V()),
        this.anchors.each(function (t, e) {
          var i,
            s,
            n,
            o = V(e).uniqueId().attr("id"),
            a = V(e).closest("li"),
            r = a.attr("aria-controls");
          l._isLocal(e)
            ? ((n = (i = e.hash).substring(1)),
              (s = l.element.find(l._sanitizeSelector(i))))
            : ((n = a.attr("aria-controls") || V({}).uniqueId()[0].id),
              (s = l.element.find((i = "#" + n))).length ||
                (s = l._createPanel(n)).insertAfter(
                  l.panels[t - 1] || l.tablist
                ),
              s.attr("aria-live", "polite")),
            s.length && (l.panels = l.panels.add(s)),
            r && a.data("ui-tabs-aria-controls", r),
            a.attr({ "aria-controls": n, "aria-labelledby": o }),
            s.attr("aria-labelledby", o);
        }),
        this.panels.attr("role", "tabpanel"),
        this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
        t &&
          (this._off(t.not(this.tabs)),
          this._off(e.not(this.anchors)),
          this._off(i.not(this.panels)));
    },
    _getList: function () {
      return this.tablist || this.element.find("ol, ul").eq(0);
    },
    _createPanel: function (t) {
      return V("<div>").attr("id", t).data("ui-tabs-destroy", !0);
    },
    _setOptionDisabled: function (t) {
      var e, i;
      for (
        Array.isArray(t) &&
          (t.length ? t.length === this.anchors.length && (t = !0) : (t = !1)),
          i = 0;
        (e = this.tabs[i]);
        i++
      )
        (e = V(e)),
          !0 === t || -1 !== V.inArray(i, t)
            ? (e.attr("aria-disabled", "true"),
              this._addClass(e, null, "ui-state-disabled"))
            : (e.removeAttr("aria-disabled"),
              this._removeClass(e, null, "ui-state-disabled"));
      (this.options.disabled = t),
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !0 === t
        );
    },
    _setupEvents: function (t) {
      var i = {};
      t &&
        V.each(t.split(" "), function (t, e) {
          i[e] = "_eventHandler";
        }),
        this._off(this.anchors.add(this.tabs).add(this.panels)),
        this._on(!0, this.anchors, {
          click: function (t) {
            t.preventDefault();
          },
        }),
        this._on(this.anchors, i),
        this._on(this.tabs, { keydown: "_tabKeydown" }),
        this._on(this.panels, { keydown: "_panelKeydown" }),
        this._focusable(this.tabs),
        this._hoverable(this.tabs);
    },
    _setupHeightStyle: function (t) {
      var i,
        e = this.element.parent();
      "fill" === t
        ? ((i = e.height()),
          (i -= this.element.outerHeight() - this.element.height()),
          this.element.siblings(":visible").each(function () {
            var t = V(this),
              e = t.css("position");
            "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
          }),
          this.element
            .children()
            .not(this.panels)
            .each(function () {
              i -= V(this).outerHeight(!0);
            }),
          this.panels
            .each(function () {
              V(this).height(
                Math.max(0, i - V(this).innerHeight() + V(this).height())
              );
            })
            .css("overflow", "auto"))
        : "auto" === t &&
          ((i = 0),
          this.panels
            .each(function () {
              i = Math.max(i, V(this).height("").height());
            })
            .height(i));
    },
    _eventHandler: function (t) {
      var e = this.options,
        i = this.active,
        s = V(t.currentTarget).closest("li"),
        n = s[0] === i[0],
        o = n && e.collapsible,
        a = o ? V() : this._getPanelForTab(s),
        r = i.length ? this._getPanelForTab(i) : V(),
        i = { oldTab: i, oldPanel: r, newTab: o ? V() : s, newPanel: a };
      t.preventDefault(),
        s.hasClass("ui-state-disabled") ||
          s.hasClass("ui-tabs-loading") ||
          this.running ||
          (n && !e.collapsible) ||
          !1 === this._trigger("beforeActivate", t, i) ||
          ((e.active = !o && this.tabs.index(s)),
          (this.active = n ? V() : s),
          this.xhr && this.xhr.abort(),
          r.length ||
            a.length ||
            V.error("jQuery UI Tabs: Mismatching fragment identifier."),
          a.length && this.load(this.tabs.index(s), t),
          this._toggle(t, i));
    },
    _toggle: function (t, e) {
      var i = this,
        s = e.newPanel,
        n = e.oldPanel;
      function o() {
        (i.running = !1), i._trigger("activate", t, e);
      }
      function a() {
        i._addClass(
          e.newTab.closest("li"),
          "ui-tabs-active",
          "ui-state-active"
        ),
          s.length && i.options.show
            ? i._show(s, i.options.show, o)
            : (s.show(), o());
      }
      (this.running = !0),
        n.length && this.options.hide
          ? this._hide(n, this.options.hide, function () {
              i._removeClass(
                e.oldTab.closest("li"),
                "ui-tabs-active",
                "ui-state-active"
              ),
                a();
            })
          : (this._removeClass(
              e.oldTab.closest("li"),
              "ui-tabs-active",
              "ui-state-active"
            ),
            n.hide(),
            a()),
        n.attr("aria-hidden", "true"),
        e.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }),
        s.length && n.length
          ? e.oldTab.attr("tabIndex", -1)
          : s.length &&
            this.tabs
              .filter(function () {
                return 0 === V(this).attr("tabIndex");
              })
              .attr("tabIndex", -1),
        s.attr("aria-hidden", "false"),
        e.newTab.attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0,
        });
    },
    _activate: function (t) {
      var t = this._findActive(t);
      t[0] !== this.active[0] &&
        ((t = (t = !t.length ? this.active : t).find(".ui-tabs-anchor")[0]),
        this._eventHandler({
          target: t,
          currentTarget: t,
          preventDefault: V.noop,
        }));
    },
    _findActive: function (t) {
      return !1 === t ? V() : this.tabs.eq(t);
    },
    _getIndex: function (t) {
      return (t =
        "string" == typeof t
          ? this.anchors.index(
              this.anchors.filter("[href$='" + V.escapeSelector(t) + "']")
            )
          : t);
    },
    _destroy: function () {
      this.xhr && this.xhr.abort(),
        this.tablist.removeAttr("role").off(this.eventNamespace),
        this.anchors.removeAttr("role tabIndex").removeUniqueId(),
        this.tabs.add(this.panels).each(function () {
          V.data(this, "ui-tabs-destroy")
            ? V(this).remove()
            : V(this).removeAttr(
                "role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded"
              );
        }),
        this.tabs.each(function () {
          var t = V(this),
            e = t.data("ui-tabs-aria-controls");
          e
            ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls")
            : t.removeAttr("aria-controls");
        }),
        this.panels.show(),
        "content" !== this.options.heightStyle && this.panels.css("height", "");
    },
    enable: function (i) {
      var t = this.options.disabled;
      !1 !== t &&
        ((t =
          void 0 !== i &&
          ((i = this._getIndex(i)),
          Array.isArray(t)
            ? V.map(t, function (t) {
                return t !== i ? t : null;
              })
            : V.map(this.tabs, function (t, e) {
                return e !== i ? e : null;
              }))),
        this._setOptionDisabled(t));
    },
    disable: function (t) {
      var e = this.options.disabled;
      if (!0 !== e) {
        if (void 0 === t) e = !0;
        else {
          if (((t = this._getIndex(t)), -1 !== V.inArray(t, e))) return;
          e = Array.isArray(e) ? V.merge([t], e).sort() : [t];
        }
        this._setOptionDisabled(e);
      }
    },
    load: function (t, s) {
      t = this._getIndex(t);
      function n(t, e) {
        "abort" === e && o.panels.stop(!1, !0),
          o._removeClass(i, "ui-tabs-loading"),
          a.removeAttr("aria-busy"),
          t === o.xhr && delete o.xhr;
      }
      var o = this,
        i = this.tabs.eq(t),
        t = i.find(".ui-tabs-anchor"),
        a = this._getPanelForTab(i),
        r = { tab: i, panel: a };
      this._isLocal(t[0]) ||
        ((this.xhr = V.ajax(this._ajaxSettings(t, s, r))),
        this.xhr &&
          "canceled" !== this.xhr.statusText &&
          (this._addClass(i, "ui-tabs-loading"),
          a.attr("aria-busy", "true"),
          this.xhr
            .done(function (t, e, i) {
              setTimeout(function () {
                a.html(t), o._trigger("load", s, r), n(i, e);
              }, 1);
            })
            .fail(function (t, e) {
              setTimeout(function () {
                n(t, e);
              }, 1);
            })));
    },
    _ajaxSettings: function (t, i, s) {
      var n = this;
      return {
        url: t.attr("href").replace(/#.*$/, ""),
        beforeSend: function (t, e) {
          return n._trigger(
            "beforeLoad",
            i,
            V.extend({ jqXHR: t, ajaxSettings: e }, s)
          );
        },
      };
    },
    _getPanelForTab: function (t) {
      t = V(t).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + t));
    },
  }),
    !1 !== V.uiBackCompat &&
      V.widget("ui.tabs", V.ui.tabs, {
        _processTabs: function () {
          this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
        },
      });
  V.ui.tabs;
  V.widget("ui.tooltip", {
    version: "1.13.2",
    options: {
      classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" },
      content: function () {
        var t = V(this).attr("title");
        return V("<a>").text(t).html();
      },
      hide: !0,
      items: "[title]:not([disabled])",
      position: {
        my: "left top+15",
        at: "left bottom",
        collision: "flipfit flip",
      },
      show: !0,
      track: !1,
      close: null,
      open: null,
    },
    _addDescribedBy: function (t, e) {
      var i = (t.attr("aria-describedby") || "").split(/\s+/);
      i.push(e),
        t
          .data("ui-tooltip-id", e)
          .attr("aria-describedby", String.prototype.trim.call(i.join(" ")));
    },
    _removeDescribedBy: function (t) {
      var e = t.data("ui-tooltip-id"),
        i = (t.attr("aria-describedby") || "").split(/\s+/),
        e = V.inArray(e, i);
      -1 !== e && i.splice(e, 1),
        t.removeData("ui-tooltip-id"),
        (i = String.prototype.trim.call(i.join(" ")))
          ? t.attr("aria-describedby", i)
          : t.removeAttr("aria-describedby");
    },
    _create: function () {
      this._on({ mouseover: "open", focusin: "open" }),
        (this.tooltips = {}),
        (this.parents = {}),
        (this.liveRegion = V("<div>")
          .attr({
            role: "log",
            "aria-live": "assertive",
            "aria-relevant": "additions",
          })
          .appendTo(this.document[0].body)),
        this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
        (this.disabledTitles = V([]));
    },
    _setOption: function (t, e) {
      var i = this;
      this._super(t, e),
        "content" === t &&
          V.each(this.tooltips, function (t, e) {
            i._updateContent(e.element);
          });
    },
    _setOptionDisabled: function (t) {
      this[t ? "_disable" : "_enable"]();
    },
    _disable: function () {
      var s = this;
      V.each(this.tooltips, function (t, e) {
        var i = V.Event("blur");
        (i.target = i.currentTarget = e.element[0]), s.close(i, !0);
      }),
        (this.disabledTitles = this.disabledTitles.add(
          this.element
            .find(this.options.items)
            .addBack()
            .filter(function () {
              var t = V(this);
              if (t.is("[title]"))
                return t
                  .data("ui-tooltip-title", t.attr("title"))
                  .removeAttr("title");
            })
        ));
    },
    _enable: function () {
      this.disabledTitles.each(function () {
        var t = V(this);
        t.data("ui-tooltip-title") &&
          t.attr("title", t.data("ui-tooltip-title"));
      }),
        (this.disabledTitles = V([]));
    },
    open: function (t) {
      var i = this,
        e = V(t ? t.target : this.element).closest(this.options.items);
      e.length &&
        !e.data("ui-tooltip-id") &&
        (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")),
        e.data("ui-tooltip-open", !0),
        t &&
          "mouseover" === t.type &&
          e.parents().each(function () {
            var t,
              e = V(this);
            e.data("ui-tooltip-open") &&
              (((t = V.Event("blur")).target = t.currentTarget = this),
              i.close(t, !0)),
              e.attr("title") &&
                (e.uniqueId(),
                (i.parents[this.id] = {
                  element: this,
                  title: e.attr("title"),
                }),
                e.attr("title", ""));
          }),
        this._registerCloseHandlers(t, e),
        this._updateContent(e, t));
    },
    _updateContent: function (e, i) {
      var t = this.options.content,
        s = this,
        n = i ? i.type : null;
      if ("string" == typeof t || t.nodeType || t.jquery)
        return this._open(i, e, t);
      (t = t.call(e[0], function (t) {
        s._delay(function () {
          e.data("ui-tooltip-open") && (i && (i.type = n), this._open(i, e, t));
        });
      })) && this._open(i, e, t);
    },
    _open: function (t, e, i) {
      var s,
        n,
        o,
        a = V.extend({}, this.options.position);
      function r(t) {
        (a.of = t), n.is(":hidden") || n.position(a);
      }
      i &&
        ((s = this._find(e))
          ? s.tooltip.find(".ui-tooltip-content").html(i)
          : (e.is("[title]") &&
              (t && "mouseover" === t.type
                ? e.attr("title", "")
                : e.removeAttr("title")),
            (s = this._tooltip(e)),
            (n = s.tooltip),
            this._addDescribedBy(e, n.attr("id")),
            n.find(".ui-tooltip-content").html(i),
            this.liveRegion.children().hide(),
            (i = V("<div>").html(n.find(".ui-tooltip-content").html()))
              .removeAttr("name")
              .find("[name]")
              .removeAttr("name"),
            i.removeAttr("id").find("[id]").removeAttr("id"),
            i.appendTo(this.liveRegion),
            this.options.track && t && /^mouse/.test(t.type)
              ? (this._on(this.document, { mousemove: r }), r(t))
              : n.position(V.extend({ of: e }, this.options.position)),
            n.hide(),
            this._show(n, this.options.show),
            this.options.track &&
              this.options.show &&
              this.options.show.delay &&
              (o = this.delayedShow =
                setInterval(function () {
                  n.is(":visible") && (r(a.of), clearInterval(o));
                }, 13)),
            this._trigger("open", t, { tooltip: n })));
    },
    _registerCloseHandlers: function (t, e) {
      var i = {
        keyup: function (t) {
          t.keyCode === V.ui.keyCode.ESCAPE &&
            (((t = V.Event(t)).currentTarget = e[0]), this.close(t, !0));
        },
      };
      e[0] !== this.element[0] &&
        (i.remove = function () {
          var t = this._find(e);
          t && this._removeTooltip(t.tooltip);
        }),
        (t && "mouseover" !== t.type) || (i.mouseleave = "close"),
        (t && "focusin" !== t.type) || (i.focusout = "close"),
        this._on(!0, e, i);
    },
    close: function (t) {
      var e,
        i = this,
        s = V(t ? t.currentTarget : this.element),
        n = this._find(s);
      n
        ? ((e = n.tooltip),
          n.closing ||
            (clearInterval(this.delayedShow),
            s.data("ui-tooltip-title") &&
              !s.attr("title") &&
              s.attr("title", s.data("ui-tooltip-title")),
            this._removeDescribedBy(s),
            (n.hiding = !0),
            e.stop(!0),
            this._hide(e, this.options.hide, function () {
              i._removeTooltip(V(this));
            }),
            s.removeData("ui-tooltip-open"),
            this._off(s, "mouseleave focusout keyup"),
            s[0] !== this.element[0] && this._off(s, "remove"),
            this._off(this.document, "mousemove"),
            t &&
              "mouseleave" === t.type &&
              V.each(this.parents, function (t, e) {
                V(e.element).attr("title", e.title), delete i.parents[t];
              }),
            (n.closing = !0),
            this._trigger("close", t, { tooltip: e }),
            n.hiding || (n.closing = !1)))
        : s.removeData("ui-tooltip-open");
    },
    _tooltip: function (t) {
      var e = V("<div>").attr("role", "tooltip"),
        i = V("<div>").appendTo(e),
        s = e.uniqueId().attr("id");
      return (
        this._addClass(i, "ui-tooltip-content"),
        this._addClass(e, "ui-tooltip", "ui-widget ui-widget-content"),
        e.appendTo(this._appendTo(t)),
        (this.tooltips[s] = { element: t, tooltip: e })
      );
    },
    _find: function (t) {
      t = t.data("ui-tooltip-id");
      return t ? this.tooltips[t] : null;
    },
    _removeTooltip: function (t) {
      clearInterval(this.delayedShow),
        t.remove(),
        delete this.tooltips[t.attr("id")];
    },
    _appendTo: function (t) {
      t = t.closest(".ui-front, dialog");
      return (t = !t.length ? this.document[0].body : t);
    },
    _destroy: function () {
      var s = this;
      V.each(this.tooltips, function (t, e) {
        var i = V.Event("blur"),
          e = e.element;
        (i.target = i.currentTarget = e[0]),
          s.close(i, !0),
          V("#" + t).remove(),
          e.data("ui-tooltip-title") &&
            (e.attr("title") || e.attr("title", e.data("ui-tooltip-title")),
            e.removeData("ui-tooltip-title"));
      }),
        this.liveRegion.remove();
    },
  }),
    !1 !== V.uiBackCompat &&
      V.widget("ui.tooltip", V.ui.tooltip, {
        options: { tooltipClass: null },
        _tooltip: function () {
          var t = this._superApply(arguments);
          return (
            this.options.tooltipClass &&
              t.tooltip.addClass(this.options.tooltipClass),
            t
          );
        },
      });
  V.ui.tooltip;
});

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!(function (a) {
  function f(a, b) {
    if (!(a.originalEvent.touches.length > 1)) {
      a.preventDefault();
      var c = a.originalEvent.changedTouches[0],
        d = document.createEvent("MouseEvents");
      d.initMouseEvent(
        b,
        !0,
        !0,
        window,
        1,
        c.screenX,
        c.screenY,
        c.clientX,
        c.clientY,
        !1,
        !1,
        !1,
        !1,
        0,
        null
      ),
        a.target.dispatchEvent(d);
    }
  }
  if (((a.support.touch = "ontouchend" in document), a.support.touch)) {
    var e,
      b = a.ui.mouse.prototype,
      c = b._mouseInit,
      d = b._mouseDestroy;
    (b._touchStart = function (a) {
      var b = this;
      !e &&
        b._mouseCapture(a.originalEvent.changedTouches[0]) &&
        ((e = !0),
        (b._touchMoved = !1),
        f(a, "mouseover"),
        f(a, "mousemove"),
        f(a, "mousedown"));
    }),
      (b._touchMove = function (a) {
        e && ((this._touchMoved = !0), f(a, "mousemove"));
      }),
      (b._touchEnd = function (a) {
        e &&
          (f(a, "mouseup"),
          f(a, "mouseout"),
          this._touchMoved || f(a, "click"),
          (e = !1));
      }),
      (b._mouseInit = function () {
        var b = this;
        b.element.bind({
          touchstart: a.proxy(b, "_touchStart"),
          touchmove: a.proxy(b, "_touchMove"),
          touchend: a.proxy(b, "_touchEnd"),
        }),
          c.call(b);
      }),
      (b._mouseDestroy = function () {
        var b = this;
        b.element.unbind({
          touchstart: a.proxy(b, "_touchStart"),
          touchmove: a.proxy(b, "_touchMove"),
          touchend: a.proxy(b, "_touchEnd"),
        }),
          d.call(b);
      });
  }
})(jQuery);



// меню бургер
$(".header__burger").click(function name(event) {
  $(".header__burger, .header__menu").toggleClass("burger-active");
});
$(".submenu").prev().addClass("has-submenu");
if (window.screen.width < 992) {
  $(".block__title").click(function name(event) {
    $(this).toggleClass("footer-active").next().slideToggle(300);
  });
  $(".has-submenu").click(function (e) {
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
  });
} else {
  $(".header__link").hover(
    function (e) {
      $(".has-submenu").addClass("active");
      $(".has-submenu").next().addClass("active");
    },
    function (e) {
      $(".has-submenu").removeClass("active");
      $(".has-submenu").next().removeClass("active");
    }
  );
  $(".submenu").hover(function (e) {
    $(this).addClass("active");
  });
}

$(".ui-slider-handle").draggable();

// Удаление активных классов
function removeActiveClass(arr, activeClass) {
  arr.forEach((el) => {
    el.classList.remove(activeClass);
  });
}
// Табы
function tabs(linksTab, blocksTab, activeClass) {
  linksTab.forEach((link) => {
    link.addEventListener("click", clickTab);
  });
  linksTab[0].classList.add(activeClass);
  blocksTab[0].classList.add(activeClass);

  function clickTab(e) {
    removeActiveClass(linksTab, activeClass);
    removeActiveClass(blocksTab, activeClass);
    this.classList.add(activeClass);
    blocksTab[linksTab.indexOf(this)].classList.add(activeClass);
  }
}

// откртыие попапа по клику
function openClickPopup(parent, clickedBlock, hiddenBlock) {
  $(clickedBlock).click(function (e) {
    $(hiddenBlock).toggleClass("active");
    $(this).toggleClass("active");
  });
  $(".close").click(function (e) {
    $(hiddenBlock).removeClass("active");
    $(clickedBlock).removeClass("active");
  });
  $(document).mouseup(function (e) {
    if ($(parent).has(e.target).length === 0) {
      $(hiddenBlock).removeClass("active");
      $(clickedBlock).removeClass("active");
    }
  });
}

function clickForCustomSelect(parent) {
  const header = parent.querySelector(".custom-select__header");
  const body = parent.querySelector(".custom-select__body");
  const options = Array.from(body.querySelectorAll(".custom-select__option"));

  header.addEventListener("click", (e) => {
    header.classList.toggle("active");
    body.classList.toggle("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      parent.dataset.curroption = option.textContent;
      header.textContent = option.textContent;
      header.classList.remove("active");
      body.classList.remove("active");
    });
  });
}

const customSelects = Array.from(document.querySelectorAll(".custom-select"));

customSelects[0] &&
  customSelects.forEach((select) => {
    clickForCustomSelect(select);
  });

document.querySelector(".video-reviews__link") &&
  tabs(
    Array.from(document.querySelectorAll(".video-reviews__link")),
    Array.from(document.querySelectorAll(".video-reviews__block")),
    "active"
  );
document.querySelector(".write-review__link") &&
  tabs(
    Array.from(document.querySelectorAll(".write-review__link")),
    Array.from(document.querySelectorAll(".write-review__block")),
    "active"
  );
document.querySelector(".location__link") &&
  tabs(
    Array.from(document.querySelectorAll(".location__link")),
    Array.from(document.querySelectorAll(".location__block")),
    "active"
  );
document.querySelector(".equipment__link") &&
  tabs(
    Array.from(document.querySelectorAll(".equipment__link")),
    Array.from(document.querySelectorAll(".equipment__block")),
    "active"
  );
document.querySelector(".item-info__block") &&
  tabs(
    Array.from(document.querySelectorAll(".item-info__link")),
    Array.from(document.querySelectorAll(".item-info__block")),
    "active"
  );
document.querySelector(".filter") &&
  openClickPopup(".filter", ".filter__show", ".filter__hidden");
document.querySelector(".write-review__row") &&
  openClickPopup(
    ".write-review__row",
    ".write-review__button",
    ".write-review"
  );
document.querySelector(".more-popup") &&
  openClickPopup(".more-popup", ".more-btn", ".more-popup");

$(".header__address").hover(
  function (e) {
    $(".header__address-hover").addClass("active");
  },
  function (e) {
    $(".header__address-hover").removeClass("active");
  }
);

function rangeSLiderSettings(slider, min, max) {
  if ($(slider)) {
    let minValue = $(slider).data("min");
    let maxValue = $(slider).data("max");
    $(slider).slider({
      values: [minValue, maxValue],
      range: true,
      create: setInputsFrom2Slider,
      slide: setInputsFrom2Slider,
      stop: setInputsFrom2Slider,
      min: minValue,
      max: maxValue,
    });

    function setInputsFrom2Slider() {
      $(`#${min}`).val($(slider).slider("values", 0));
      $(`#${max}`).val($(slider).slider("values", 1));
    }

    $("input").change(function (e) {
      switch (this.id) {
        case min:
        case max:
          let index = this.id == max ? 1 : 0;
          if (
            ($(this).val() < minValue || $(this).val() > maxValue) &&
            index === 0
          ) {
            $(slider).slider("values", index, $(this).val(minValue));
          } else if (
            ($(this).val() < minValue || $(this).val() > maxValue) &&
            index === 1
          ) {
            $(slider).slider("values", index, $(this).val(maxValue));
          } else {
            $(slider).slider("values", index, $(this).val());
          }
          break;
        case "slideVal":
          $("#slider").slider("value", $(this).val());
          break;
      }
    });
  }
}
rangeSLiderSettings(".rangeslider", "rangeMin", "rangeMax");

const customFile = document.querySelector(".custom-file");

customFile && readFile(customFile);

function readFile(parent) {
  let input = parent.querySelector(".file");
  let reader = new FileReader();
  let closeBtn = parent.querySelector(".close");
  parent.querySelector(".place").classList.toggle("active");

  input.onchange = () => {
    reader.readAsDataURL(input.files[0]);
    reader.onload = function () {
      let video = document.createElement("video");
      video.controls = true;
      video.src = reader.result;
      parent.appendChild(video);
      video.classList.toggle("active");
      parent.querySelector(".place").classList.toggle("active");
      closeBtn.classList.toggle("active");

      closeBtn.addEventListener("click", () => {
        parent.removeChild(video);
        parent.querySelector(".place").classList.toggle("active");
        closeBtn.classList.toggle("active");
      });
    };
  };
}

$(".equipment__filter").click(function (e) {
  $(this).next().slideToggle(100);
});

function swiperGrid(slider, slides, space, rows, prev, next) {
  new Swiper(slider, {
    spaceBetween: space,

    slidesPerView: 2,
    grid: {
      rows: 4,
    },

    navigation: {
      nextEl: next,
      prevEl: prev,
    },

    breakpoints: {
      577: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
      769: {
        slidesPerView: slides,
        grid: {
          rows: rows,
        },
      },
    },
  });
}

swiperGrid(
  ".swiper-grid-three",
  3,
  20,
  3,
  ".swiper-grid-three-prev",
  ".swiper-grid-three-next"
);
swiperGrid(
  ".swiper-grid-two",
  3,
  20,
  2,
  ".swiper-grid-two-prev",
  ".swiper-grid-two-next"
);

function defaultSwiper(
  slider,
  slidesPerView,
  spaceBetween,
  centeredSlides = false,
  loop = false,
  prevEl,
  nextEl,
  direction = "horizontal",
  releaseOnEdges = false,
  pag = ""
) {
  new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides,
    loop,
    navigation: {
      nextEl,
      prevEl,
    },
    pagination: {
      el: pag,
    },
    direction,
    mousewheel: {
      releaseOnEdges,
    },
    breakpoints: {
      577: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      769: {
        slidesPerView,
        spaceBetween,
      },
    },
  });
}

defaultSwiper(
  ".swiper-video",
  2.6,
  120,
  true,
  true,
  "",
  "",
  "horizontal",
  false,
  ".swiper-video-pagination"
);
defaultSwiper(
  ".swiper-video",
  2.9,
  120,
  true,
  true,
  ".swiper-video-prev",
  ".swiper-video-next",
  "horizontal",
  false
);

$(".close-btn").click(function (e) {
  $(this).parent().removeClass("active");
});

new Swiper(".swiper-recently", {
  slidesPerView: 2.1,
  spaceBetween: 5,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: "",
    prevEl: "",
  },
  breakpoints: {
    577: {
      slidesPerView: 2.3,
      spaceBetween: 30,
      navigation: {
        nextEl: "",
        prevEl: "",
      },
    },
    993: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false,
      navigation: {
        nextEl: ".swiper-recently-next",
        prevEl: ".swiper-recently-prev",
      },
    },
  },
});

new Swiper(".swiper-similar", {
  slidesPerView: 2.3,
  spaceBetween: 15,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: "",
    prevEl: "",
  },
  breakpoints: {
    577: {
      slidesPerView: 2.3,
      spaceBetween: 30,
      navigation: {
        nextEl: "",
        prevEl: "",
      },
    },
    993: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false,
      navigation: {
        nextEl: ".swiper-similar-next",
        prevEl: ".swiper-similar-prev",
      },
    },
  },
});

defaultSwiper(
  ".swiper-mounth",
  1,
  0,
  true,
  true,
  ".swiper-mounth-prev",
  ".swiper-mounth-next"
);

defaultSwiper(
  ".swiper-day",
  5,
  20,
  true,
  true,
  ".swiper-day-prev",
  ".swiper-day-next"
);

new Swiper(".swiper-vertical-three", {
  slidesPerView: 1.5,
  spaceBetween: 25,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: null,
    prevEl: null,
  },
  direction: "horizontal",
  breakpoints: {
    993: {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: false,
      loop: false,
      navigation: {
        nextEl: ".swiper-vertical-three-prev",
        prevEl: ".swiper-vertical-three-next",
      },
    },
  },
});

new Swiper(".swiper-time", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  loop: false,
  direction: "vertical",
  mousewheel: {
    releaseOnEdges: true,
  },
});

const itemSlider = document.querySelector(".item-slider");
const lgContainer = document.getElementById("lg-swipper");
const thumbsForItemSlider = document.querySelector(".thumbs-slides");

if (itemSlider) {
  new Swiper(thumbsForItemSlider, {
    spaceBetween: 0,
    slidesPerView: 1,

    breakpoints: {
      993: {
        spaceBetween: 15,
        slidesPerView: 3,
        navigation: {
          nextEl: ".swiper-thumbs-next",
          prevEl: ".swiper-thumbs-prev",
        },
      },
    },
  });
  const slider = new Swiper(itemSlider, {
    thumbs: {
      swiper: thumbsForItemSlider,
    },
  });
}
