
    (function(h, g, c, j, d, k, l) { /*! Jssor */
      new(function() {});
      var e = {
        Ac: function(a) {
          return -c.cos(a * c.PI) / 2 + .5
        },
        Lc: function(a) {
          return a
        },
        Fe: function(a) {
          return a * a
        },
        Nc: function(a) {
          return -a * (a - 2)
        },
        ye: function(a) {
          return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
        },
        Oe: function(a) {
          return a * a * a
        },
        Te: function(a) {
          return (a -= 1) * a * a + 1
        },
        We: function(a) {
          return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
        },
        Ze: function(a) {
          return a * a * a * a
        },
        Wd: function(a) {
          return -((a -= 1) * a * a * a - 1)
        },
        Vd: function(a) {
          return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
        },
        Sd: function(a) {
          return a * a * a * a * a
        },
        Ud: function(a) {
          return (a -= 1) * a * a * a * a + 1
        },
        se: function(a) {
          return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
        },
        pe: function(a) {
          return 1 - c.cos(c.PI / 2 * a)
        },
        oe: function(a) {
          return c.sin(c.PI / 2 * a)
        },
        ne: function(a) {
          return -1 / 2 * (c.cos(c.PI * a) - 1)
        },
        me: function(a) {
          return a == 0 ? 0 : c.pow(2, 10 * (a - 1))
        },
        le: function(a) {
          return a == 1 ? 1 : -c.pow(2, -10 * a) + 1
        },
        ie: function(a) {
          return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.pow(2, 10 * (a - 1)) : 1 / 2 * (-c.pow(2, -10 * --a) + 2)
        },
        he: function(a) {
          return -(c.sqrt(1 - a * a) - 1)
        },
        nf: function(a) {
          return c.sqrt(1 - (a -= 1) * a)
        },
        zg: function(a) {
          return (a *= 2) < 1 ? -1 / 2 * (c.sqrt(1 - a * a) - 1) : 1 / 2 * (c.sqrt(1 - (a -= 2) * a) + 1)
        },
        xg: function(a) {
          if (!a || a == 1) return a;
          var b = .3,
          d = .075;
          return -(c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b))
        },
        wg: function(a) {
          if (!a || a == 1) return a;
          var b = .3,
          d = .075;
          return c.pow(2, -10 * a) * c.sin((a - d) * 2 * c.PI / b) + 1
        },
        yg: function(a) {
          if (!a || a == 1) return a;
          var b = .45,
          d = .1125;
          return (a *= 2) < 1 ? -.5 * c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) : c.pow(2, -10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) * .5 + 1
        },
        ig: function(a) {
          var b = 1.70158;
          return a * a * ((b + 1) * a - b)
        },
        jg: function(a) {
          var b = 1.70158;
          return (a -= 1) * a * ((b + 1) * a + b) + 1
        },
        lg: function(a) {
          var b = 1.70158;
          return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        },
        Mc: function(a) {
          return 1 - e.vc(1 - a)
        },
        vc: function(a) {
          return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        },
        vg: function(a) {
          return a < 1 / 2 ? e.Mc(a * 2) * .5 : e.vc(a * 2 - 1) * .5 + .5
        },
        Jg: function() {
          return 1 - c.abs(1)
        },
        fg: function(a) {
          return 1 - c.cos(a * c.PI * 2)
        },
        tg: function(a) {
          return c.sin(a * c.PI * 2)
        },
        sg: function(a) {
          return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
        },
        rg: function(a) {
          return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
        }
      },
      f = {
        kg: e.Ac,
        dg: e.Lc,
        Uc: e.Fe,
        Zc: e.Nc,
        Og: e.ye,
        Ig: e.Oe,
        Cg: e.Te,
        Bg: e.We,
        Ag: e.Ze,
        ag: e.Wd,
        yf: e.Vd,
        xf: e.Sd,
        qf: e.Ud,
        pf: e.se,
        of: e.pe,
        bg: e.oe,
        mf: e.ne,
        lf: e.me,
        kf: e.le,
        jf: e.ie,
        hf: e.he,
        ef: e.nf,
        df: e.zg,
        Af: e.xg,
        Vf: e.wg,
        ug: e.yg,
        bf: e.ig,
        Df: e.jg,
        Ef: e.lg,
        Ff: e.Mc,
        Gf: e.vc,
        Hf: e.vg,
        If: e.Jg,
        Jf: e.fg,
        Kf: e.tg,
        Lf: e.sg,
        Mf: e.rg
      };
      var b = new function() {
        var f = this,
        Ab = /\S+/g,
        F = 1,
        yb = 2,
        fb = 3,
        eb = 4,
        jb = 5,
        G, r = 0,
        i = 0,
        s = 0,
        X = 0,
        z = 0,
        I = navigator,
        ob = I.appName,
        o = I.userAgent,
        p = parseFloat;

        function Ib() {
          if (!G) {
            G = {
              Xf: "ontouchstart" in h || "createTouch" in g
            };
            var a;
            if (I.pointerEnabled || (a = I.msPointerEnabled)) G.pd = a ? "msTouchAction" : "touchAction"
          }
        return G
      }

      function v(j) {
        if (!r) {
          r = -1;
          if (ob == "Microsoft Internet Explorer" && !!h.attachEvent && !!h.ActiveXObject) {
            var e = o.indexOf("MSIE");
            r = F;
            s = p(o.substring(e + 5, o.indexOf(";", e))); /*@cc_on X=@_jscript_version@*/ ;
            i = g.documentMode || s
          } else if (ob == "Netscape" && !!h.addEventListener) {
            var d = o.indexOf("Firefox"),
            b = o.indexOf("Safari"),
            f = o.indexOf("Chrome"),
            c = o.indexOf("AppleWebKit");
            if (d >= 0) {
              r = yb;
              i = p(o.substring(d + 8))
            } else if (b >= 0) {
              var k = o.substring(0, b).lastIndexOf("/");
              r = f >= 0 ? eb : fb;
              i = p(o.substring(k + 1, b))
            } else {
              var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
              if (a) {
                r = F;
                i = s = p(a[1])
              }
            }
            if (c >= 0) z = p(o.substring(c + 12))
          } else {
            var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
            if (a) {
              r = jb;
              i = p(a[2])
            }
          }
        }
        return j == r
      }

      function q() {
        return v(F)
      }

      function Q() {
        return q() && (i < 6 || g.compatMode == "BackCompat")
      }

      function db() {
        return v(fb)
      }

      function ib() {
        return v(jb)
      }

      function vb() {
        return db() && z > 534 && z < 535
      }

      function J() {
        v();
        return z > 537 || i > 42 || r == F && i >= 11
      }

      function O() {
        return q() && i < 9
      }

      function wb(a) {
        var b, c;
        return function(f) {
          if (!b) {
            b = d;
            var e = a.substr(0, 1).toUpperCase() + a.substr(1);
            n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, d) {
              var b = a;
              if (d) b = g + e;
              if (f.style[b] != l) return c = b
            })
          }
          return c
        }
      }

      function ub(b) {
        var a;
        return function(c) {
          a = a || wb(b)(c) || b;
          return a
        }
      }
      var K = ub("transform");

      function nb(a) {
        return {}.toString.call(a)
      }
      var kb = {};
      n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
        kb["[object " + a + "]"] = a.toLowerCase()
      });

      function n(b, d) {
        var a, c;
        if (nb(b) == "[object Array]") {
          for (a = 0; a < b.length; a++)
            if (c = d(b[a], a, b)) return c
          } else
        for (a in b)
          if (c = d(b[a], a, b)) return c
        }

      function C(a) {
        return a == j ? String(a) : kb[nb(a)] || "object"
      }

      function lb(a) {
        for (var b in a) return d
      }

    function A(a) {
      try {
        return C(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
      } catch (b) {}
    }

    function u(a, b) {
      return {
        x: a,
        y: b
      }
    }

    function rb(b, a) {
      setTimeout(b, a || 0)
    }

    function H(b, d, c) {
      var a = !b || b == "inherit" ? "" : b;
      n(d, function(c) {
        var b = c.exec(a);
        if (b) {
          var d = a.substr(0, b.index),
          e = a.substr(b.index + b[0].length + 1, a.length - 1);
          a = d + e
        }
      });
      a = c + (!a.indexOf(" ") ? "" : " ") + a;
      return a
    }

    function tb(b, a) {
      if (i < 9) b.style.filter = a
    }
  f.Yf = Ib;
  f.od = q;
  f.Cf = db;
  f.md = ib;
  f.Bf = J;
  f.pb = O;
  wb("transform");
  f.Od = function() {
    return i
  };
  f.zf = function() {
    v();
    return z
  };
  f.P = rb;

  function Y(a) {
    a.constructor === Y.caller && a.Jd && a.Jd.apply(a, Y.caller.arguments)
  }
  f.Jd = Y;
  f.wb = function(a) {
    if (f.ff(a)) a = g.getElementById(a);
    return a
  };

  function t(a) {
    return a || h.event
  }
  f.Md = t;
  f.nc = function(b) {
    b = t(b);
    var a = b.target || b.srcElement || g;
    if (a.nodeType == 3) a = f.Ld(a);
    return a
  };
  f.Kd = function(a) {
    a = t(a);
    return {
      x: a.pageX || a.clientX || 0,
      y: a.pageY || a.clientY || 0
    }
  };

  function D(c, d, a) {
    if (a !== l) c.style[d] = a == l ? "" : a;
    else {
      var b = c.currentStyle || c.style;
      a = b[d];
      if (a == "" && h.getComputedStyle) {
        b = c.ownerDocument.defaultView.getComputedStyle(c, j);
        b && (a = b.getPropertyValue(d) || b[d])
      }
      return a
    }
  }

  function ab(b, c, a, d) {
    if (a !== l) {
      if (a == j) a = "";
      else d && (a += "px");
      D(b, c, a)
    } else return p(D(b, c))
  }

  function m(c, a) {
    var d = a ? ab : D,
    b;
    if (a & 4) b = ub(c);
    return function(e, f) {
      return d(e, b ? b(e) : c, f, a & 2)
    }
  }

  function Db(b) {
    if (q() && s < 9) {
      var a = /opacity=([^)]*)/.exec(b.style.filter || "");
      return a ? p(a[1]) / 100 : 1
    } else return p(b.style.opacity || "1")
  }

  function Fb(b, a, f) {
    if (q() && s < 9) {
      var h = b.style.filter || "",
      i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
      e = c.round(100 * a),
      d = "";
      if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
      var g = H(h, [i], d);
      tb(b, g)
    } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
  }
  var L = {
    Q: ["rotate"],
    ab: ["rotateX"],
    Z: ["rotateY"],
    Vb: ["skewX"],
    Kb: ["skewY"]
  };
  if (!J()) L = B(L, {
    F: ["scaleX", 2],
    G: ["scaleY", 2],
    Y: ["translateZ", 1]
  });

    function M(d, a) {
      var c = "";
      if (a) {
        if (q() && i && i < 10) {
          delete a.ab;
          delete a.Z;
          delete a.Y
        }
        b.a(a, function(d, b) {
          var a = L[b];
          if (a) {
            var e = a[1] || 0;
            if (N[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
          }
      });
        if (J()) {
          if (a.lb || a.jb || a.Y) c += " translate3d(" + (a.lb || 0) + "px," + (a.jb || 0) + "px," + (a.Y || 0) + "px)";
          if (a.F == l) a.F = 1;
          if (a.G == l) a.G = 1;
          if (a.F != 1 || a.G != 1) c += " scale3d(" + a.F + ", " + a.G + ", 1)"
        }
    }
    d.style[K(d)] = c
  }
  f.Gc = m("transformOrigin", 4);
  f.rf = m("backfaceVisibility", 4);
  f.sf = m("transformStyle", 4);
  f.tf = m("perspective", 6);
  f.uf = m("perspectiveOrigin", 4);
  f.vf = function(a, b) {
    if (q() && s < 9 || s < 10 && Q()) a.style.zoom = b == 1 ? "" : b;
    else {
      var c = K(a),
      f = "scale(" + b + ")",
      e = a.style[c],
      g = new RegExp(/[\s]*scale\(.*?\)/g),
      d = H(e, [g], f);
      a.style[c] = d
    }
  };
  f.wc = function(b, a) {
    return function(c) {
      c = t(c);
      var e = c.type,
      d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
      (!d || d !== a && !f.wf(a, d)) && b(c)
    }
  };
  f.e = function(a, d, b, c) {
    a = f.wb(a);
    if (a.addEventListener) {
      d == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
      a.addEventListener(d, b, c)
    } else if (a.attachEvent) {
      a.attachEvent("on" + d, b);
      c && a.setCapture && a.setCapture()
    }
  };
  f.U = function(a, c, d, b) {
    a = f.wb(a);
    if (a.removeEventListener) {
      c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
      a.removeEventListener(c, d, b)
    } else if (a.detachEvent) {
      a.detachEvent("on" + c, d);
      b && a.releaseCapture && a.releaseCapture()
    }
  };
  f.Xb = function(a) {
    a = t(a);
    a.preventDefault && a.preventDefault();
    a.cancel = d;
    a.returnValue = k
  };
  f.Nf = function(a) {
    a = t(a);
    a.stopPropagation && a.stopPropagation();
    a.cancelBubble = d
  };
  f.W = function(d, c) {
    var a = [].slice.call(arguments, 2),
    b = function() {
      var b = a.concat([].slice.call(arguments, 0));
      return c.apply(d, b)
    };
    return b
  };
  f.Xc = function(a, b) {
    if (b == l) return a.textContent || a.innerText;
    var c = g.createTextNode(b);
    f.xc(a);
    a.appendChild(c)
  };
  f.Ab = function(d, c) {
    for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
      return b
  };

  function mb(a, c, e, b) {
    b = b || "u";
    for (a = a ? a.firstChild : j; a; a = a.nextSibling)
      if (a.nodeType == 1) {
        if (U(a, b) == c) return a;
        if (!e) {
          var d = mb(a, c, e, b);
          if (d) return d
        }
    }
  }
  f.C = mb;

  function S(a, d, f, b) {
    b = b || "u";
    var c = [];
    for (a = a ? a.firstChild : j; a; a = a.nextSibling)
      if (a.nodeType == 1) {
        U(a, b) == d && c.push(a);
        if (!f) {
          var e = S(a, d, f, b);
          if (e.length) c = c.concat(e)
        }
    }
    return c
  }
  f.Dg = S;

  function gb(a, c, d) {
    for (a = a ? a.firstChild : j; a; a = a.nextSibling)
      if (a.nodeType == 1) {
        if (a.tagName == c) return a;
        if (!d) {
          var b = gb(a, c, d);
          if (b) return b
        }
    }
  }
  f.Fg = gb;

  function xb(a, c, e) {
    var b = [];
    for (a = a ? a.firstChild : j; a; a = a.nextSibling)
      if (a.nodeType == 1) {
        (!c || a.tagName == c) && b.push(a);
        if (!e) {
          var d = xb(a, c, e);
          if (d.length) b = b.concat(d)
        }
    }
    return b
  }
  f.Gg = xb;
  f.Hg = function(b, a) {
    return b.getElementsByTagName(a)
  };

  function B() {
    var e = arguments,
    d, c, b, a, g = 1 & e[0],
    f = 1 + g;
    d = e[f - 1] || {};
    for (; f < e.length; f++)
      if (c = e[f])
        for (b in c) {
          a = c[b];
          if (a !== l) {
            a = c[b];
            var h = d[b];
            d[b] = g && (A(h) || A(a)) ? B(g, {}, h, a) : a
          }
        }
        return d
      }
      f.s = B;

      function Z(f, g) {
        var d = {},
        c, a, b;
        for (c in f) {
          a = f[c];
          b = g[c];
          if (a !== b) {
            var e;
            if (A(a) && A(b)) {
              a = Z(a, b);
              e = !lb(a)
            }!e && (d[c] = a)
          }
        }
        return d
      }
      f.dd = function(a) {
        return C(a) == "function"
      };
      f.ff = function(a) {
        return C(a) == "string"
      };
      f.Lb = function(a) {
        return !isNaN(p(a)) && isFinite(a)
      };
      f.a = n;
      f.cd = A;

      function R(a) {
        return g.createElement(a)
      }
      f.zb = function() {
        return R("DIV")
      };
      f.Ng = function() {
        return R("SPAN")
      };
      f.bd = function() {};

      function V(b, c, a) {
        if (a == l) return b.getAttribute(c);
        b.setAttribute(c, a)
      }

      function U(a, b) {
        return V(a, b) || V(a, "data-" + b)
      }
      f.D = V;
      f.i = U;

      function x(b, a) {
        if (a == l) return b.className;
        b.className = a
      }
      f.id = x;

      function qb(b) {
        var a = {};
        n(b, function(b) {
          a[b] = b
        });
        return a
      }

      function sb(b, a) {
        return b.match(a || Ab)
      }

      function P(b, a) {
        return qb(sb(b || "", a))
      }
      f.Pg = sb;

      function bb(b, c) {
        var a = "";
        n(c, function(c) {
          a && (a += b);
          a += c
        });
        return a
      }

      function E(a, c, b) {
        x(a, bb(" ", B(Z(P(x(a)), P(c)), P(b))))
      }
      f.Ld = function(a) {
        return a.parentNode
      };
      f.X = function(a) {
        f.bb(a, "none")
      };
      f.B = function(a, b) {
        f.bb(a, b ? "none" : "")
      };
      f.hg = function(b, a) {
        b.removeAttribute(a)
      };
      f.ng = function() {
        return q() && i < 10
      };
      f.og = function(d, a) {
        if (a) d.style.clip = "rect(" + c.round(a.g || a.A || 0) + "px " + c.round(a.q) + "px " + c.round(a.p) + "px " + c.round(a.f || a.H || 0) + "px)";
        else if (a !== l) {
          var g = d.style.cssText,
          f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
          e = H(g, f, "");
          b.yb(d, e)
        }
      };
      f.db = function() {
        return +new Date
      };
      f.J = function(b, a) {
        b.appendChild(a)
      };
      f.Rb = function(b, a, c) {
        (c || a.parentNode).insertBefore(b, a)
      };
      f.Ub = function(b, a) {
        a = a || b.parentNode;
        a && a.removeChild(b)
      };
      f.pg = function(a, b) {
        n(a, function(a) {
          f.Ub(a, b)
        })
      };
      f.xc = function(a) {
        f.pg(f.Ab(a, d), a)
      };
      f.mg = function(a, b) {
        var c = f.Ld(a);
        b & 1 && f.K(a, (f.l(c) - f.l(a)) / 2);
        b & 2 && f.L(a, (f.m(c) - f.m(a)) / 2)
      };
      f.pc = function(b, a) {
        return parseInt(b, a || 10)
      };
      f.eg = p;
      f.wf = function(b, a) {
        var c = g.body;
        while (a && b !== a && c !== a) try {
          a = a.parentNode
        } catch (d) {
          return k
        }
        return b === a
      };

      function W(d, c, b) {
        var a = d.cloneNode(!c);
        !b && f.hg(a, "id");
        return a
      }
      f.cb = W;
      f.Eb = function(e, g) {
        var a = new Image;

        function b(e, d) {
          f.U(a, "load", b);
          f.U(a, "abort", c);
          f.U(a, "error", c);
          g && g(a, d)
        }

        function c(a) {
          b(a, d)
        }
        if (ib() && i < 11.6 || !e) b(!e);
        else {
          f.e(a, "load", b);
          f.e(a, "abort", c);
          f.e(a, "error", c);
          a.src = e
        }
      };
      f.Sg = function(d, a, e) {
        var c = d.length + 1;

        function b(b) {
          c--;
          if (a && b && b.src == a.src) a = b;
          !c && e && e(a)
        }
        n(d, function(a) {
          f.Eb(a.src, b)
        });
        b()
      };
      f.Qg = function(a, g, i, h) {
        if (h) a = W(a);
        var c = S(a, g);
        if (!c.length) c = b.Hg(a, g);
        for (var f = c.length - 1; f > -1; f--) {
          var d = c[f],
          e = W(i);
          x(e, x(d));
          b.yb(e, d.style.cssText);
          b.Rb(e, d);
          b.Ub(d)
        }
        return a
      };

      function Gb(a) {
        var k = this,
        p = "",
        r = ["av", "pv", "ds", "dn"],
        e = [],
        q, j = 0,
        h = 0,
        d = 0;

        function i() {
          E(a, q, e[d || j || h & 2 || h]);
          b.fb(a, "pointer-events", d ? "none" : "")
        }

        function c() {
          j = 0;
          i();
          f.U(g, "mouseup", c);
          f.U(g, "touchend", c);
          f.U(g, "touchcancel", c)
        }

        function o(a) {
          if (d) f.Xb(a);
          else {
            j = 4;
            i();
            f.e(g, "mouseup", c);
            f.e(g, "touchend", c);
            f.e(g, "touchcancel", c)
          }
        }
        k.cf = function(a) {
          if (a === l) return h;
          h = a & 2 || a & 1;
          i()
        };
        k.Dd = function(a) {
          if (a === l) return !d;
          d = a ? 0 : 3;
          i()
        };
        k.R = a = f.wb(a);
        var m = b.Pg(x(a));
        if (m) p = m.shift();
        n(r, function(a) {
          e.push(p + a)
        });
        q = bb(" ", e);
        e.unshift("");
        f.e(a, "mousedown", o);
        f.e(a, "touchstart", o)
      }
      f.zc = function(a) {
        return new Gb(a)
      };
      f.fb = D;
      f.Hb = m("overflow");
      f.L = m("top", 2);
      f.K = m("left", 2);
      f.l = m("width", 2);
      f.m = m("height", 2);
      f.fe = m("marginLeft", 2);
      f.ge = m("marginTop", 2);
      f.v = m("position");
      f.bb = m("display");
      f.z = m("zIndex", 1);
      f.Db = function(b, a, c) {
        if (a != l) Fb(b, a, c);
        else return Db(b)
      };
    f.yb = function(a, b) {
      if (b != l) a.style.cssText = b;
      else return a.style.cssText
    };
  var T = {
    M: f.Db,
    g: f.L,
    f: f.K,
    S: f.l,
    T: f.m,
    Cb: f.v,
    bh: f.bb,
    V: f.z
  };

  function w(g, k) {
    var e = O(),
    b = J(),
    d = vb(),
    h = K(g);

    function i(b, d, a) {
      var e = b.nb(u(-d / 2, -a / 2)),
      f = b.nb(u(d / 2, -a / 2)),
      g = b.nb(u(d / 2, a / 2)),
      h = b.nb(u(-d / 2, a / 2));
      b.nb(u(300, 300));
      return u(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
    }

    function a(d, a) {
      a = a || {};
      var n = a.Y || 0,
      p = (a.ab || 0) % 360,
      q = (a.Z || 0) % 360,
      u = (a.Q || 0) % 360,
      k = a.F,
      m = a.G,
      g = a.ah;
      if (k == l) k = 1;
      if (m == l) m = 1;
      if (g == l) g = 1;
      if (e) {
        n = 0;
        p = 0;
        q = 0;
        g = 0
      }
      var c = new Cb(a.lb, a.jb, n);
      c.ab(p);
      c.Z(q);
      c.Rd(u);
      c.Qd(a.Vb, a.Kb);
      c.oc(k, m, g);
      if (b) {
        c.qb(a.H, a.A);
        d.style[h] = c.Td()
      } else if (!X || X < 9) {
        var o = "",
        j = {
          x: 0,
          y: 0
        };
        if (a.ib) j = i(c, a.ib, a.mb);
        f.ge(d, j.y);
        f.fe(d, j.x);
        o = c.te();
        var s = d.style.filter,
        t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
        r = H(s, [t], o);
        tb(d, r)
      }
    }
    w = function(e, c) {
      c = c || {};
      var h = c.H,
      i = c.A,
      g;
      n(T, function(a, b) {
        g = c[b];
        g !== l && a(e, g)
      });
      f.og(e, c.c);
      if (!b) {
        h != l && f.K(e, (c.Sc || 0) + h);
        i != l && f.L(e, (c.Tc || 0) + i)
      }
      if (c.Ye)
        if (d) rb(f.W(j, M, e, c));
      else a(e, c)
    };
  f.Bb = M;
  if (d) f.Bb = w;
  if (e) f.Bb = a;
  else if (!b) a = M;
  f.O = w;
  w(g, k)
}
f.Bb = w;
f.O = w;

function Cb(i, k, o) {
  var d = this,
  b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, i || 0, k || 0, o || 0, 1],
  h = c.sin,
  g = c.cos,
  l = c.tan;

  function f(a) {
    return a * c.PI / 180
  }

  function n(a, b) {
    return {
      x: a,
      y: b
    }
  }

  function m(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k, a, g, i, n, p, q, s, v, x, y, B, D, F, d, h, j) {
    return [c * a + e * p + l * x + m * F, c * g + e * q + l * y + m * d, c * i + e * s + l * B + m * h, c * n + e * v + l * D + m * j, o * a + r * p + t * x + u * F, o * g + r * q + t * y + u * d, o * i + r * s + t * B +
    u * h, o * n + r * v + t * D + u * j, w * a + z * p + A * x + C * F, w * g + z * q + A * y + C * d, w * i + z * s + A * B + C * h, w * n + z * v + A * D + C * j, E * a + b * p + f * x + k * F, E * g + b * q +
    f * y + k * d, E * i + b * s + f * B + k * h, E * n + b * v + f * D + k * j
    ]
  }

  function e(c, a) {
    return m.apply(j, (a || b).concat(c))
  }
  d.oc = function(a, c, d) {
    if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
  };
d.qb = function(a, c, d) {
  b[12] += a || 0;
  b[13] += c || 0;
  b[14] += d || 0
};
d.ab = function(c) {
  if (c) {
    a = f(c);
    var d = g(a),
    i = h(a);
    b = e([1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0, 0, 1])
  }
};
d.Z = function(c) {
  if (c) {
    a = f(c);
    var d = g(a),
    i = h(a);
    b = e([d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0, 0, 1])
  }
};
d.Rd = function(c) {
  if (c) {
    a = f(c);
    var d = g(a),
    i = h(a);
    b = e([d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
  }
};
d.Qd = function(a, c) {
  if (a || c) {
    i = f(a);
    k = f(c);
    b = e([1, l(k), 0, 0, l(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
  }
};
d.nb = function(c) {
  var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
  return n(a[12], a[13])
};
d.Td = function() {
  return "matrix3d(" + b.join(",") + ")"
};
d.te = function() {
  return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
}
}
new function() {
  var a = this;

  function b(d, g) {
    for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
      for (var k = f[c] = [], b = 0; b < h; b++) {
        for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
          k[b] = e
      }
      return f
    }
    a.F = function(b, c) {
      return a.ad(b, c, 0)
    };
    a.G = function(b, c) {
      return a.ad(b, 0, c)
    };
    a.ad = function(a, c, d) {
      return b(a, [
        [c, 0],
        [0, d]
        ])
    };
    a.nb = function(d, c) {
      var a = b(d, [
        [c.x],
        [c.y]
        ]);
      return u(a[0][0], a[1][0])
    }
  };
  var N = {
    Sc: 0,
    Tc: 0,
    H: 0,
    A: 0,
    E: 1,
    F: 1,
    G: 1,
    Q: 0,
    ab: 0,
    Z: 0,
    lb: 0,
    jb: 0,
    Y: 0,
    Vb: 0,
    Kb: 0
  };
  f.mc = function(a) {
    var c = a || {};
    if (a)
      if (b.dd(a)) c = {
        bc: c
      };
      else if (b.dd(a.c)) c.c = {
        bc: a.c
      };
      return c
    };

    function pb(c, a) {
      var b = {};
      n(c, function(c, d) {
        var e = c;
        if (a[d] != l)
          if (f.Lb(c)) e = c + a[d];
        else e = pb(c, a[d]);
        b[d] = e
      });
      return b
    }
    f.Me = pb;
    f.fd = function(k, m, x, q, z, A, n) {
      var a = m;
      if (k) {
        a = {};
        for (var g in m) {
          var B = A[g] || 1,
          w = z[g] || [0, 1],
          f = (x - w[0]) / w[1];
          f = c.min(c.max(f, 0), 1);
          f = f * B;
          var u = c.floor(f);
          if (f != u) f -= u;
          var h = q.bc || e.Ac,
          i, C = k[g],
          o = m[g];
          if (b.Lb(o)) {
            h = q[g] || h;
            var y = h(f);
            i = C + o * y
          } else {
            i = b.s({
              Nb: {}
            }, k[g]);
            var v = q[g] || {};
            b.a(o.Nb || o, function(d, a) {
              h = v[a] || v.bc || h;
              var c = h(f),
              b = d * c;
              i.Nb[a] = b;
              i[a] += b
            })
          }
          a[g] = i
        }
        var t = b.a(m, function(b, a) {
          return N[a] != l
        });
        t && b.a(N, function(c, b) {
          if (a[b] == l && k[b] !== l) a[b] = k[b]
        });
        if (t) {
          if (a.E) a.F = a.G = a.E;
          a.ib = n.ib;
          a.mb = n.mb;
          a.Ye = d
        }
      }
      if (m.c && n.qb) {
        var p = a.c.Nb,
        s = (p.g || 0) + (p.p || 0),
        r = (p.f || 0) + (p.q || 0);
        a.f = (a.f || 0) + r;
        a.g = (a.g || 0) + s;
        a.c.f -= r;
        a.c.q -= r;
        a.c.g -= s;
        a.c.p -= s
      }
      if (a.c && b.ng() && !a.c.g && !a.c.f && !a.c.A && !a.c.H && a.c.q == n.ib && a.c.p == n.mb) a.c = j;
      return a
    }
  };

  function n() {
    var a = this,
    d = [];

    function i(a, b) {
      d.push({
        gc: a,
        hc: b
      })
    }

    function g(a, c) {
      b.a(d, function(b, e) {
        b.gc == a && b.hc === c && d.splice(e, 1)
      })
    }
    a.xb = a.addEventListener = i;
    a.removeEventListener = g;
    a.k = function(a) {
      var c = [].slice.call(arguments, 1);
      b.a(d, function(b) {
        b.gc == a && b.hc.apply(h, c)
      })
    }
  }
  var m = function(z, C, i, J, M, L) {
    z = z || 0;
    var a = this,
    q, n, o, u, A = 0,
    G, H, F, B, y = 0,
    g = 0,
    m = 0,
    D, l, f, e, p, w = [],
    x;

    function O(a) {
      f += a;
      e += a;
      l += a;
      g += a;
      m += a;
      y += a
    }

    function t(o) {
      var h = o;
      if (p && (h >= e || h <= f)) h = ((h - f) % p + p) % p + f;
      if (!D || u || g != h) {
        var j = c.min(h, e);
        j = c.max(j, f);
        if (!D || u || j != m) {
          if (L) {
            var k = (j - l) / (C || 1);
            if (i.Hc) k = 1 - k;
            var n = b.fd(M, L, k, G, F, H, i);
            if (x) b.a(n, function(b, a) {
              x[a] && x[a](J, b)
            });
              else b.O(J, n)
            }
          a.fc(m - l, j - l);
          m = j;
          b.a(w, function(b, c) {
            var a = o < g ? w[w.length - c - 1] : b;
            a.I(m - y)
          });
          var r = g,
          q = m;
          g = h;
          D = d;
          a.Mb(r, q)
        }
      }
    }

    function E(a, b, d) {
      b && a.Fb(e);
      if (!d) {
        f = c.min(f, a.Dc() + y);
        e = c.max(e, a.Ob() + y)
      }
      w.push(a)
    }
    var r = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.msRequestAnimationFrame;
    if (b.Cf() && b.Od() < 7) r = j;
    r = r || function(a) {
      b.P(a, i.gb)
    };

    function I() {
      if (q) {
        var d = b.db(),
        e = c.min(d - A, i.kd),
        a = g + e * o;
        A = d;
        if (a * o >= n * o) a = n;
        t(a);
        if (!u && a * o >= n * o) K(B);
        else r(I)
      }
  }

  function s(h, i, j) {
    if (!q) {
      q = d;
      u = j;
      B = i;
      h = c.max(h, f);
      h = c.min(h, e);
      n = h;
      o = n < g ? -1 : 1;
      a.Ic();
      A = b.db();
      r(I)
    }
  }

  function K(b) {
    if (q) {
      u = q = B = k;
      a.Fc();
      b && b()
    }
  }
  a.Jc = function(a, b, c) {
    s(a ? g + a : e, b, c)
  };
  a.Kc = s;
  a.rb = K;
  a.af = function(a) {
    s(a)
  };
  a.hb = function() {
    return g
  };
  a.Fd = function() {
    return n
  };
  a.vb = function() {
    return m
  };
  a.I = t;
  a.qb = function(a) {
    t(g + a)
  };
  a.Ed = function() {
    return q
  };
  a.Je = function(a) {
    p = a
  };
  a.Fb = O;
  a.tb = function(a, b) {
    E(a, 0, b)
  };
  a.ec = function(a) {
    E(a, 1)
  };
  a.Ae = function(a) {
    e += a
  };
  a.Dc = function() {
    return f
  };
  a.Ob = function() {
    return e
  };
  a.Mb = a.Ic = a.Fc = a.fc = b.bd;
  a.ic = b.db();
  i = b.s({
    gb: 16,
    kd: 50
  }, i);
  p = i.Pd;
  x = i.be;
  f = l = z;
  e = z + C;
  H = i.Cd || {};
  F = i.Bd || {};
  G = b.mc(i.u)
};
var o = new function() {
  var h = this,
  t = 1,
  q = 2,
  r = 4,
  s = 8,
  w = 256,
  x = 512,
  v = 1024,
  u = 2048,
  j = u + t,
  i = u + q,
  o = x + t,
  m = x + q,
  n = w + r,
  k = w + s,
  l = v + r,
  p = v + s;

  function y(a) {
    return (a & q) == q
  }

  function z(a) {
    return (a & r) == r
  }

  function g(b, a, c) {
    c.push(a);
    b[a] = b[a] || [];
    b[a].push(c)
  }
  h.Ne = function(q) {
    var u = q.j,
    v = q.n,
    e = q.rd,
    t = q.Ke,
    r = [],
    s = 0,
    c = 0,
    d = 0,
    f = u - 1,
    h = v - 1,
    w = t - 1;
    switch (e) {
      case j:
      case m:
      case o:
      case i:
      var a = 0,
      b = 0;
      break;
      case k:
      case l:
      case n:
      case p:
      var a = f,
      b = 0;
      break;
      default:
      e = p;
      var a = f,
      b = 0
    }
    c = a;
    d = b;
    while (s < t) {
      if (z(e) || y(e)) g(r, w - s++, [d, c]);
      else g(r, s++, [d, c]);
      switch (e) {
        case j:
        case m:
        c--;
        d++;
        break;
        case o:
        case i:
        c++;
        d--;
        break;
        case k:
        case l:
        c--;
        d--;
        break;
        case p:
        case n:
        default:
        c++;
        d++
      }
      if (c < 0 || d < 0 || c > f || d > h) {
        switch (e) {
          case j:
          case m:
          a++;
          break;
          case k:
          case l:
          case o:
          case i:
          b++;
          break;
          case p:
          case n:
          default:
          a--
        }
        if (a < 0 || b < 0 || a > f || b > h) {
          switch (e) {
            case j:
            case m:
            a = f;
            b++;
            break;
            case o:
            case i:
            b = h;
            a++;
            break;
            case k:
            case l:
            b = h;
            a--;
            break;
            case p:
            case n:
            default:
            a = 0;
            b++
          }
          if (b > h) b = h;
          else if (b < 0) b = 0;
          else if (a > f) a = f;
          else if (a < 0) a = 0
        }
      d = b;
      c = a
    }
  }
  return r
};
h.sd = function(i) {
  var a = i.j || 1,
  b = i.n || 1,
  j = [],
  d, e, f, h, k;
  f = a < b ? (b - a) / 2 : 0;
  h = a > b ? (a - b) / 2 : 0;
  k = c.round(c.max(a / 2, b / 2)) + 1;
  for (d = 0; d < a; d++)
    for (e = 0; e < b; e++) g(j, k - c.min(d + 1 + f, e + 1 + h, a - d + f, b - e + h), [e, d]);
      return j
  };
  h.Ue = function(d) {
    for (var e = [], a, b = 0; b < d.n; b++)
      for (a = 0; a < d.j; a++) g(e, c.ceil(1e5 * c.random()) % 13, [b, a]);
        return e
    }
  },
  s = function(l, s, q, u, z) {
    var f = this,
    v, g, a, y = 0,
    x = u.Yg,
    r, h = 8;

    function t(a) {
      if (a.g) a.A = a.g;
      if (a.f) a.H = a.f;
      b.a(a, function(a) {
        b.cd(a) && t(a)
      })
    }

    function i(g, f) {
      var a = {
        gb: f,
        ob: 1,
        P: 0,
        j: 1,
        n: 1,
        M: 0,
        E: 0,
        c: 0,
        qb: k,
        Qb: k,
        Hc: k,
        Pb: o.Ue,
        rd: 1032,
        xd: {
          ve: 0,
          re: 0
        },
        u: e.Ac,
        Cd: {},
        Jb: [],
        Bd: {}
      };
      b.s(a, g);
      t(a);
      a.Ke = a.j * a.n;
      a.u = b.mc(a.u);
      a.Zd = c.ceil(a.ob / a.gb);
      a.Xd = function(c, b) {
        c /= a.j;
        b /= a.n;
        var f = c + "x" + b;
        if (!a.Jb[f]) {
          a.Jb[f] = {
            S: c,
            T: b
          };
          for (var d = 0; d < a.j; d++)
            for (var e = 0; e < a.n; e++) a.Jb[f][e + "," + d] = {
              g: e * b,
              q: d * c + c,
              p: e * b + b,
              f: d * c
            }
          }
          return a.Jb[f]
        };
        if (a.sc) {
          a.sc = i(a.sc, f);
          a.Qb = d
        }
        return a
      }

      function p(B, h, a, w, o, m) {
        var z = this,
        u, v = {},
        i = {},
        n = [],
        f, e, s, q = a.xd.ve || 0,
        r = a.xd.re || 0,
        g = a.Xd(o, m),
        p = C(a),
        D = p.length - 1,
        t = a.ob + a.P * D,
        x = w + t,
        l = a.Qb,
        y;
        x += 50;

        function C(a) {
          var b = a.Pb(a);
          return a.Hc ? b.reverse() : b
        }
        z.yd = x;
        z.Yb = function(d) {
          d -= w;
          var e = d < t;
          if (e || y) {
            y = e;
            if (!l) d = t - d;
            var f = c.ceil(d / a.gb);
            b.a(i, function(a, e) {
              var d = c.max(f, a.ce);
              d = c.min(d, a.length - 1);
              if (a.zd != d) {
                if (!a.zd && !l) b.B(n[e]);
                else d == a.qe && l && b.X(n[e]);
                a.zd = d;
                b.O(n[e], a[d])
              }
            })
          }
        };
        h = b.cb(h);
        b.Bb(h, j);
        if (b.pb()) {
          var E = !h["no-image"],
          A = b.Gg(h);
          b.a(A, function(a) {
            (E || a["jssor-slider"]) && b.Db(a, b.Db(a), d)
          })
        }
        b.a(p, function(h, j) {
          b.a(h, function(G) {
            var K = G[0],
            J = G[1],
            t = K + "," + J,
            n = k,
            p = k,
            x = k;
            if (q && J % 2) {
              if (q & 3) n = !n;
              if (q & 12) p = !p;
              if (q & 16) x = !x
            }
          if (r && K % 2) {
            if (r & 3) n = !n;
            if (r & 12) p = !p;
            if (r & 16) x = !x
          }
        a.g = a.g || a.c & 4;
        a.p = a.p || a.c & 8;
        a.f = a.f || a.c & 1;
        a.q = a.q || a.c & 2;
        var E = p ? a.p : a.g,
        B = p ? a.g : a.p,
        D = n ? a.q : a.f,
        C = n ? a.f : a.q;
        a.c = E || B || D || C;
        s = {};
        e = {
          A: 0,
          H: 0,
          M: 1,
          S: o,
          T: m
        };
        f = b.s({}, e);
        u = b.s({}, g[t]);
        if (a.M) e.M = 2 - a.M;
        if (a.V) {
          e.V = a.V;
          f.V = 0
        }
        var I = a.j * a.n > 1 || a.c;
        if (a.E || a.Q) {
          var H = d;
          if (b.pb())
            if (a.j * a.n > 1) H = k;
          else I = k;
          if (H) {
            e.E = a.E ? a.E - 1 : 1;
            f.E = 1;
            if (b.pb() || b.md()) e.E = c.min(e.E, 2);
            var N = a.Q || 0;
            e.Q = N * 360 * (x ? -1 : 1);
            f.Q = 0
          }
        }
        if (I) {
          var h = u.Nb = {};
          if (a.c) {
            var w = a.Zg || 1;
            if (E && B) {
              h.g = g.T / 2 * w;
              h.p = -h.g
            } else if (E) h.p = -g.T * w;
            else if (B) h.g = g.T * w;
            if (D && C) {
              h.f = g.S / 2 * w;
              h.q = -h.f
            } else if (D) h.q = -g.S * w;
            else if (C) h.f = g.S * w
          }
        s.c = u;
        f.c = g[t]
      }
      var L = n ? 1 : -1,
      M = p ? 1 : -1;
      if (a.x) e.H += o * a.x * L;
      if (a.y) e.A += m * a.y * M;
      b.a(e, function(a, c) {
        if (b.Lb(a))
          if (a != f[c]) s[c] = a - f[c]
        });
      v[t] = l ? f : e;
      var F = a.Zd,
      A = c.round(j * a.P / a.gb);
      i[t] = new Array(A);
      i[t].ce = A;
      i[t].qe = A + F - 1;
      for (var z = 0; z <= F; z++) {
        var y = b.fd(f, s, z / F, a.u, a.Bd, a.Cd, {
          qb: a.qb,
          ib: o,
          mb: m
        });
        y.V = y.V || 1;
        i[t].push(y)
      }
    })
        });
        p.reverse();
        b.a(p, function(a) {
          b.a(a, function(c) {
            var f = c[0],
            e = c[1],
            d = f + "," + e,
            a = h;
            if (e || f) a = b.cb(h);
            b.O(a, v[d]);
            b.Hb(a, "hidden");
            b.v(a, "absolute");
            B.ke(a);
            n[d] = a;
            b.B(a, !l)
          })
        })
      }

      function w() {
        var b = this,
        c = 0;
        m.call(b, 0, v);
        b.Mb = function(d, b) {
          if (b - c > h) {
            c = b;
            a && a.Yb(b);
            g && g.Yb(b)
          }
        };
        b.qc = r
      }
      f.je = function() {
        var a = 0,
        b = u.eb,
        d = b.length;
        if (x) a = y++ % d;
        else a = c.floor(c.random() * d);
        b[a] && (b[a].kb = a);
        return b[a]
      };
      f.cg = function(w, x, k, m, b) {
        r = b;
        b = i(b, h);
        var j = m.Ad,
        e = k.Ad;
        j["no-image"] = !m.yc;
        e["no-image"] = !k.yc;
        var n = j,
        o = e,
        u = b,
        d = b.sc || i({}, h);
        if (!b.Qb) {
          n = e;
          o = j
        }
        var t = d.Fb || 0;
        g = new p(l, o, d, c.max(t - d.gb, 0), s, q);
        a = new p(l, n, u, c.max(d.gb - t, 0), s, q);
        g.Yb(0);
        a.Yb(0);
        v = c.max(g.yd, a.yd);
        f.kb = w
      };
      f.sb = function() {
        l.sb();
        g = j;
        a = j
      };
      f.ue = function() {
        var b = j;
        if (a) b = new w;
        return b
      };
      if (b.pb() || b.md() || z && b.zf() < 537) h = 16;
      n.call(f);
      m.call(f, -1e7, 1e7)
    },
    i = function(o, fc) {
      var f = this;

      function Bc() {
        var a = this;
        m.call(a, -1e8, 2e8);
        a.Ve = function() {
          var b = a.vb(),
          d = c.floor(b),
          f = t(d),
          e = b - c.floor(b);
          return {
            kb: f,
            Qe: d,
            Cb: e
          }
        };
        a.Mb = function(b, a) {
          var e = c.floor(a);
          if (e != a && a > b) e++;
          Tb(e, d);
          f.k(i.Le, t(a), t(b), a, b)
        }
      }

      function Ac() {
        var a = this;
        m.call(a, 0, 0, {
          Pd: r
        });
        b.a(C, function(b) {
          D & 1 && b.Je(r);
          a.ec(b);
          b.Fb(kb / bc)
        })
      }

      function zc() {
        var a = this,
        b = Ub.R;
        m.call(a, -1, 2, {
          u: e.Lc,
          be: {
            Cb: Zb
          },
          Pd: r
        }, b, {
          Cb: 1
        }, {
          Cb: -2
        });
        a.dc = b
      }

      function mc(o, n) {
        var b = this,
        e, g, h, l, c;
        m.call(b, -1e8, 2e8, {
          kd: 100
        });
        b.Ic = function() {
          M = d;
          R = j;
          f.k(i.Ie, t(w.hb()), w.hb())
        };
        b.Fc = function() {
          M = k;
          l = k;
          var a = w.Ve();
          f.k(i.He, t(w.hb()), w.hb());
          !a.Cb && Dc(a.Qe, s)
        };
        b.Mb = function(i, f) {
          var b;
          if (l) b = c;
          else {
            b = g;
            if (h) {
              var d = f / h;
              b = a.Ge(d) * (g - e) + e
            }
          }
          w.I(b)
        };
        b.Sb = function(a, d, c, f) {
          e = a;
          g = d;
          h = c;
          w.I(a);
          b.I(0);
          b.Kc(c, f)
        };
        b.Be = function(a) {
          l = d;
          c = a;
          b.Jc(a, j, d)
        };
        b.xe = function(a) {
          c = a
        };
        w = new Bc;
        w.tb(o);
        w.tb(n)
      }

      function oc() {
        var c = this,
        a = Xb();
        b.z(a, 0);
        b.fb(a, "pointerEvents", "none");
        c.R = a;
        c.ke = function(c) {
          b.J(a, c);
          b.B(a)
        };
        c.sb = function() {
          b.X(a);
          b.xc(a)
        }
      }

      function xc(o, g) {
        var e = this,
        q, L, v, l, y = [],
        x, B, W, G, Q, F, h, w, p;
        m.call(e, -u, u + 1, {});

        function E(a) {
          q && q.Id();
          T(o, a, 0);
          F = d;
          q = new I.N(o, I, b.eg(b.i(o, "idle")) || lc);
          q.I(0)
        }

        function Z() {
          q.ic < I.ic && E()
        }

        function M(p, r, o) {
          if (!G) {
            G = d;
            if (l && o) {
              var h = o.width,
              c = o.height,
              n = h,
              m = c;
              if (h && c && a.ub) {
                if (a.ub & 3 && (!(a.ub & 4) || h > K || c > J)) {
                  var j = k,
                  q = K / J * c / h;
                  if (a.ub & 1) j = q > 1;
                  else if (a.ub & 2) j = q < 1;
                  n = j ? h * J / c : K;
                  m = j ? J : c * K / h
                }
                b.l(l, n);
                b.m(l, m);
                b.L(l, (J - m) / 2);
                b.K(l, (K - n) / 2)
              }
              b.v(l, "absolute");
              f.k(i.Yd, g)
            }
          }
          b.X(r);
          p && p(e)
        }

        function Y(b, c, d, f) {
          if (f == R && s == g && N)
            if (!Cc) {
              var a = t(b);
              A.cg(a, g, c, e, d);
              c.Pe();
              U.Fb(a - U.Dc() - 1);
              U.I(a);
              z.Sb(b, b, 0)
            }
          }

          function bb(b) {
            if (b == R && s == g) {
              if (!h) {
                var a = j;
                if (A)
                  if (A.kb == g) a = A.ue();
                else A.sb();
                Z();
                h = new vc(o, g, a, q);
                h.jd(p)
              }!h.Ed() && h.Cc()
            }
          }

          function S(d, f, l) {
            if (d == g) {
              if (d != f) C[f] && C[f].Xe();
              else !l && h && h.we();
              p && p.Dd();
              var m = R = b.db();
              e.Eb(b.W(j, bb, m))
            } else {
              var k = c.min(g, d),
              i = c.max(g, d),
              o = c.min(i - k, k + r - i),
              n = u + a.ze - 1;
              (!Q || o <= n) && e.Eb()
            }
          }

          function db() {
            if (s == g && h) {
              h.rb();
              p && p.De();
              p && p.Ee();
              h.gd()
            }
          }

          function eb() {
            s == g && h && h.rb()
          }

          function ab(a) {
            !P && f.k(i.Re, g, a)
          }

          function O() {
            p = w.pInstance;
            h && h.jd(p)
          }
          e.Eb = function(c, a) {
            a = a || v;
            if (y.length && !G) {
              b.B(a);
              if (!W) {
                W = d;
                f.k(i.Se, g);
                b.a(y, function(a) {
                  if (!b.D(a, "src")) {
                    a.src = b.i(a, "src2");
                    b.bb(a, a["display-origin"])
                  }
                })
              }
              b.Sg(y, l, b.W(j, M, c, a))
            } else M(c, a)
          };
          e.ae = function() {
            var h = g;
            if (a.Qc < 0) h -= r;
            var d = h + a.Qc * tc;
            if (D & 2) d = t(d);
            if (!(D & 1) && !ib) d = c.max(0, c.min(d, r - u));
            if (d != g) {
              if (A) {
                var e = A.je(r);
                if (e) {
                  var i = R = b.db(),
                  f = C[t(d)];
                  return f.Eb(b.W(j, Y, d, f, e, i), v)
                }
              }
              cb(d)
            }
          };
          e.rc = function() {
            S(g, g, d)
          };
          e.Xe = function() {
            p && p.De();
            p && p.Ee();
            e.Oc();
            h && h.ee();
            h = j;
            E()
          };
          e.Pe = function() {
            b.X(o)
          };
          e.Oc = function() {
            b.B(o)
          };
          e.de = function() {
            p && p.Dd()
          };

          function T(a, c, e) {
            if (b.D(a, "jssor-slider")) return;
            if (!F) {
              if (a.tagName == "IMG") {
                y.push(a);
                if (!b.D(a, "src")) {
                  Q = d;
                  a["display-origin"] = b.bb(a);
                  b.X(a)
                }
              }
              b.pb() && b.z(a, (b.z(a) || 0) + 1)
            }
            var f = b.Ab(a);
            b.a(f, function(f) {
              var h = f.tagName,
              i = b.i(f, "u");
              if (i == "player" && !w) {
                w = f;
                if (w.pInstance) O();
                else b.e(w, "dataavailable", O)
              }
            if (i == "caption") {
              if (c) {
                b.Gc(f, b.i(f, "to"));
                b.rf(f, b.i(f, "bf"));
                b.i(f, "3d") && b.sf(f, "preserve-3d")
              } else if (!b.od()) {
                var g = b.cb(f, k, d);
                b.Rb(g, f, a);
                b.Ub(f, a);
                f = g;
                c = d
              }
            } else if (!F && !e && !l) {
              if (h == "A") {
                if (b.i(f, "u") == "image") l = b.Fg(f, "IMG");
                else l = b.C(f, "image", d);
                if (l) {
                  x = f;
                  b.bb(x, "block");
                  b.O(x, V);
                  B = b.cb(x, d);
                  b.v(x, "relative");
                  b.Db(B, 0);
                  b.fb(B, "backgroundColor", "#000")
                }
              } else if (h == "IMG" && b.i(f, "u") == "image") l = f;
              if (l) {
                l.border = 0;
                b.O(l, V)
              }
            }
            T(f, c, e + 1)
          })
          }
          e.fc = function(c, b) {
            var a = u - b;
            Zb(L, a)
          };
          e.kb = g;
          n.call(e);
          b.tf(o, b.i(o, "p"));
          b.uf(o, b.i(o, "po"));
          var H = b.C(o, "thumb", d);
          if (H) {
            b.cb(H);
            b.X(H)
          }
          b.B(o);
          v = b.cb(gb);
          b.z(v, 1e3);
          b.e(o, "click", ab);
          E(d);
          e.yc = l;
          e.Pc = B;
          e.Ad = o;
          e.dc = L = o;
          b.J(L, v);
          f.xb(203, S);
          f.xb(28, eb);
          f.xb(24, db)
        }

        function vc(y, g, p, q) {
          var a = this,
          n = 0,
          u = 0,
          h, j, e, c, l, t, r, o = C[g];
          m.call(a, 0, 0);

          function v() {
            b.xc(L);
            cc && l && o.Pc && b.J(L, o.Pc);
            b.B(L, !l && o.yc)
          }

          function w() {
            a.Cc()
          }

          function x(b) {
            r = b;
            a.rb();
            a.Cc()
          }
          a.Cc = function() {
            var b = a.vb();
            if (!B && !M && !r && s == g) {
              if (!b) {
                if (h && !l) {
                  l = d;
                  a.gd(d);
                  f.k(i.qg, g, n, u, h, c)
                }
                v()
              }
              var k, p = i.Rc;
              if (b != c)
                if (b == e) k = c;
              else if (b == j) k = e;
              else if (!b) k = j;
              else k = a.Fd();
              f.k(p, g, b, n, j, e, c);
              var m = N && (!E || F);
              if (b == c)(e != c && !(E & 12) || m) && o.ae();
              else(m || b != e) && a.Kc(k, w)
            }
        };
        a.we = function() {
          e == c && e == a.vb() && a.I(j)
        };
        a.ee = function() {
          A && A.kb == g && A.sb();
          var b = a.vb();
          b < c && f.k(i.Rc, g, -b - 1, n, j, e, c)
        };
        a.gd = function(a) {
          p && b.Hb(lb, a && p.qc.Xg ? "" : "hidden")
        };
        a.fc = function(b, a) {
          if (l && a >= h) {
            l = k;
            v();
            o.Oc();
            A.sb();
            f.k(i.gg, g, n, u, h, c)
          }
          f.k(i.Eg, g, a, n, j, e, c)
        };
        a.jd = function(a) {
          if (a && !t) {
            t = a;
            a.xb($JssorPlayer$.Ce, x)
          }
        };
        p && a.ec(p);
        h = a.Ob();
        a.ec(q);
        j = h + q.Vc;
        e = h + q.Wc;
        c = a.Ob()
      }

      function Kb(a, c, d) {
        b.K(a, c);
        b.L(a, d)
      }

      function Zb(c, b) {
        var a = x > 0 ? x : fb,
        d = zb * b * (a & 1),
        e = Ab * b * (a >> 1 & 1);
        Kb(c, d, e)
      }

      function Pb() {
        qb = M;
        Ib = z.Fd();
        G = w.hb()
      }

      function gc() {
        Pb();
        if (B || !F && E & 12) {
          z.rb();
          f.k(i.Kg)
        }
      }

      function ec(f) {
        if (!B && (F || !(E & 12)) && !z.Ed()) {
          var d = w.hb(),
          b = c.ceil(G);
          if (f && c.abs(H) >= a.Yc) {
            b = c.ceil(d);
            b += jb
          }
          if (!(D & 1)) b = c.min(r - u, c.max(b, 0));
          var e = c.abs(b - d);
          e = 1 - c.pow(1 - e, 5);
          if (!P && qb) z.af(Ib);
          else if (d == b) {
            tb.de();
            tb.rc()
          } else z.Sb(d, b, e * Vb)
        }
      }

      function Hb(a) {
        !b.i(b.nc(a), "nodrag") && b.Xb(a)
      }

      function rc(a) {
        Yb(a, 1)
      }

      function Yb(a, c) {
        a = b.Md(a);
        var l = b.nc(a);
        if (!O && !b.i(l, "nodrag") && sc() && (!c || a.touches.length == 1)) {
          B = d;
          yb = k;
          R = j;
          b.e(g, c ? "touchmove" : "mousemove", Bb);
          b.db();
          P = 0;
          gc();
          if (!qb) x = 0;
          if (c) {
            var h = a.touches[0];
            ub = h.clientX;
            vb = h.clientY
          } else {
            var e = b.Kd(a);
            ub = e.x;
            vb = e.y
          }
          H = 0;
          hb = 0;
          jb = 0;
          f.k(i.Mg, t(G), G, a)
        }
      }

      function Bb(e) {
        if (B) {
          e = b.Md(e);
          var f;
          if (e.type != "mousemove") {
            var l = e.touches[0];
            f = {
              x: l.clientX,
              y: l.clientY
            }
          } else f = b.Kd(e);
          if (f) {
            var j = f.x - ub,
            k = f.y - vb;
            if (c.floor(G) != G) x = x || fb & O;
            if ((j || k) && !x) {
              if (O == 3)
                if (c.abs(k) > c.abs(j)) x = 2;
              else x = 1;
              else x = O;
              if (ob && x == 1 && c.abs(k) - c.abs(j) > 3) yb = d
            }
          if (x) {
            var a = k,
            i = Ab;
            if (x == 1) {
              a = j;
              i = zb
            }
            if (!(D & 1)) {
              if (a > 0) {
                var g = i * s,
                h = a - g;
                if (h > 0) a = g + c.sqrt(h) * 5
              }
            if (a < 0) {
              var g = i * (r - u - s),
              h = -a - g;
              if (h > 0) a = -g - c.sqrt(h) * 5
            }
        }
        if (H - hb < -2) jb = 0;
        else if (H - hb > 2) jb = -1;
        hb = H;
        H = a;
        sb = G - H / i / (Y || 1);
        if (H && x && !yb) {
          b.Xb(e);
          if (!M) z.Be(sb);
          else z.xe(sb)
        }
    }
  }
}
}

function bb() {
  qc();
  if (B) {
    B = k;
    b.db();
    b.U(g, "mousemove", Bb);
    b.U(g, "touchmove", Bb);
    P = H;
    z.rb();
    var a = w.hb();
    f.k(i.Lg, t(a), a, t(G), G);
    E & 12 && Pb();
    ec(d)
  }
}

function jc(c) {
  if (P) {
    b.Nf(c);
    var a = b.nc(c);
    while (a && v !== a) {
      a.tagName == "A" && b.Xb(c);
      try {
        a = a.parentNode
      } catch (d) {
        break
      }
    }
  }
}

function Jb(a) {
  C[s];
  s = t(a);
  tb = C[s];
  Tb(a);
  return s
}

function Dc(a, b) {
  x = 0;
  Jb(a);
  f.k(i.Rg, t(a), b)
}

function Tb(a, c) {
  wb = a;
  b.a(S, function(b) {
    b.lc(t(a), a, c)
  })
}

function sc() {
  var b = i.ed || 0,
  a = X;
  if (ob) a & 1 && (a &= 1);
  i.ed |= a;
  return O = a & ~b
}

function qc() {
  if (O) {
    i.ed &= ~X;
    O = 0
  }
}

function Xb() {
  var a = b.zb();
  b.O(a, V);
  b.v(a, "absolute");
  return a
}

function t(a) {
  return (a % r + r) % r
}

function kc(b, d) {
  if (d)
    if (!D) {
      b = c.min(c.max(b + wb, 0), r - u);
      d = k
    } else if (D & 2) {
      b = t(b + wb);
      d = k
    }
    cb(b, a.jc, d)
  }

  function xb() {
    b.a(S, function(a) {
      a.kc(a.Wb.Wg <= F)
    })
  }

  function hc() {
    if (!F) {
      F = 1;
      xb();
      if (!B) {
        E & 12 && ec();
        E & 3 && C[s].rc()
      }
    }
  }

  function Ec() {
    if (F) {
      F = 0;
      xb();
      B || !(E & 12) || gc()
    }
  }

  function ic() {
    V = {
      S: K,
      T: J,
      g: 0,
      f: 0
    };
    b.a(T, function(a) {
      b.O(a, V);
      b.v(a, "absolute");
      b.Hb(a, "hidden");
      b.X(a)
    });
    b.O(gb, V)
  }

  function ab(b, a) {
    cb(b, a, d)
  }

  function cb(g, f, j) {
    if (Rb && (!B && (F || !(E & 12)) || a.hd)) {
      M = d;
      B = k;
      z.rb();
      if (f == l) f = Vb;
      var e = Cb.vb(),
      b = g;
      if (j) {
        b = e + g;
        if (g > 0) b = c.ceil(b);
        else b = c.floor(b)
      }
    if (D & 2) b = t(b);
    if (!(D & 1)) b = c.max(0, c.min(b, r - u));
    var i = (b - e) % r;
    b = e + i;
    var h = e == b ? 0 : f * c.abs(i);
    h = c.min(h, f * u * 1.5);
    z.Sb(e, b, h || 1)
  }
}
f.Jc = function() {
  if (!N) {
    N = d;
    C[s] && C[s].rc()
  }
};

function W() {
  return b.l(y || o)
}

function nb() {
  return b.m(y || o)
}
f.ib = W;
f.mb = nb;

function Eb(c, d) {
  if (c == l) return b.l(o);
  if (!y) {
    var a = b.zb(g);
    b.id(a, b.id(o));
    b.yb(a, b.yb(o));
    b.bb(a, "block");
    b.v(a, "relative");
    b.L(a, 0);
    b.K(a, 0);
    b.Hb(a, "visible");
    y = b.zb(g);
    b.v(y, "absolute");
    b.L(y, 0);
    b.K(y, 0);
    b.l(y, b.l(o));
    b.m(y, b.m(o));
    b.Gc(y, "0 0");
    b.J(y, a);
    var h = b.Ab(o);
    b.J(o, y);
    b.fb(o, "backgroundImage", "");
    b.a(h, function(c) {
      b.J(b.i(c, "noscale") ? o : a, c);
      b.i(c, "autocenter") && Lb.push(c)
    })
  }
  Y = c / (d ? b.m : b.l)(y);
  b.vf(y, Y);
  var f = d ? Y * W() : c,
  e = d ? c : Y * nb();
  b.l(o, f);
  b.m(o, e);
  b.a(Lb, function(a) {
    var c = b.pc(b.i(a, "autocenter"));
    b.mg(a, c)
  })
}
f.Wf = Eb;
n.call(f);
f.R = o = b.wb(o);
var a = b.s({
  ub: 0,
  ze: 1,
  ac: 1,
  cc: 0,
  Zb: k,
  Tb: 1,
  Gb: d,
  hd: d,
  Qc: 1,
  td: 3e3,
  ud: 1,
  jc: 500,
  Ge: e.Nc,
  Yc: 20,
  ld: 0,
  j: 1,
  vd: 0,
  Uf: 1,
  Bc: 1,
  wd: 1
}, fc);
a.Gb = a.Gb && b.Bf();
if (a.Tf != l) a.td = a.Tf;
if (a.Sf != l) a.vd = a.Sf;
var fb = a.Bc & 3,
tc = (a.Bc & 4) / -4 || 1,
mb = a.gf,
I = b.s({
  N: q,
  Gb: a.Gb
}, a.Rf);
I.eb = I.eb || I.Ug;
var Fb = a.Qf,
Z = a.Pf,
eb = a.Vg,
Q = !a.Uf,
y, v = b.C(o, "slides", Q),
gb = b.C(o, "loading", Q) || b.zb(g),
Nb = b.C(o, "navigator", Q),
dc = b.C(o, "arrowleft", Q),
ac = b.C(o, "arrowright", Q),
Mb = b.C(o, "thumbnavigator", Q),
pc = b.l(v),
nc = b.m(v),
V, T = [],
uc = b.Ab(v);
b.a(uc, function(a) {
  if (a.tagName == "DIV" && !b.i(a, "u")) T.push(a);
  else b.pb() && b.z(a, (b.z(a) || 0) + 1)
});
var s = -1,
wb, tb, r = T.length,
K = a.Zf || pc,
J = a.Of || nc,
Wb = a.ld,
zb = K + Wb,
Ab = J + Wb,
bc = fb & 1 ? zb : Ab,
u = c.min(a.j, r),
lb, x, O, yb, S = [],
Qb, Sb, Ob, cc, Cc, N, E = a.ud,
lc = a.td,
Vb = a.jc,
rb, ib, kb, Rb = u < r,
D = Rb ? a.Tb : 0,
X, P, F = 1,
M, B, R, ub = 0,
vb = 0,
H, hb, jb, Cb, w, U, z, Ub = new oc,
Y, Lb = [];
if (r) {
  if (a.Gb) Kb = function(a, c, d) {
    b.Bb(a, {
      lb: c,
      jb: d
    })
  };
  N = a.Zb;
  f.Wb = fc;
  ic();
  b.D(o, "jssor-slider", d);
  b.z(v, b.z(v) || 0);
  b.v(v, "absolute");
  lb = b.cb(v, d);
  b.Rb(lb, v);
  if (mb) {
    cc = mb.Tg;
    rb = mb.N;
    ib = u == 1 && r > 1 && rb && (!b.od() || b.Od() >= 8)
  }
  kb = ib || u >= r || !(D & 1) ? 0 : a.vd;
  X = (u > 1 || kb ? fb : -1) & a.wd;
  var Gb = v,
  C = [],
  A, L, Db = b.Yf(),
  ob = Db.Xf,
  G, qb, Ib, sb;
  Db.pd && b.fb(Gb, Db.pd, ([j, "pan-y", "pan-x", "none"])[X] || "");
  U = new zc;
  if (ib) A = new rb(Ub, K, J, mb, ob);
  b.J(lb, U.dc);
  b.Hb(v, "hidden");
  L = Xb();
  b.fb(L, "backgroundColor", "#000");
  b.Db(L, 0);
  b.Rb(L, Gb.firstChild, Gb);
  for (var db = 0; db < T.length; db++) {
    var wc = T[db],
    yc = new xc(wc, db);
    C.push(yc)
  }
  b.X(gb);
  Cb = new Ac;
  z = new mc(Cb, U);
  b.e(v, "click", jc, d);
  b.e(o, "mouseout", b.wc(hc, o));
  b.e(o, "mouseover", b.wc(Ec, o));
  if (X) {
    b.e(v, "mousedown", Yb);
    b.e(v, "touchstart", rc);
    b.e(v, "dragstart", Hb);
    b.e(v, "selectstart", Hb);
    b.e(g, "mouseup", bb);
    b.e(g, "touchend", bb);
    b.e(g, "touchcancel", bb);
    b.e(h, "blur", bb)
  }
  E &= ob ? 10 : 5;
  if (Nb && Fb) {
    Qb = new Fb.N(Nb, Fb, W(), nb());
    S.push(Qb)
  }
  if (Z && dc && ac) {
    Z.Tb = D;
    Z.j = u;
    Sb = new Z.N(dc, ac, Z, W(), nb());
    S.push(Sb)
  }
  if (Mb && eb) {
    eb.cc = a.cc;
    Ob = new eb.N(Mb, eb);
    S.push(Ob)
  }
  b.a(S, function(a) {
    a.uc(r, C, gb);
    a.xb(p.tc, kc)
  });
  b.fb(o, "visibility", "visible");
  Eb(W());
  xb();
  a.ac && b.e(g, "keydown", function(b) {
    if (b.keyCode == 37) ab(-a.ac);
    else b.keyCode == 39 && ab(a.ac)
  });
  var pb = a.cc;
  if (!(D & 1)) pb = c.max(0, c.min(pb, r - u));
  z.Sb(pb, pb, 0)
}
};
i.Re = 21;
i.Mg = 22;
i.Lg = 23;
i.Ie = 24;
i.He = 25;
i.Se = 26;
i.Yd = 27;
i.Kg = 28;
i.Le = 202;
i.Rg = 203;
i.qg = 206;
i.gg = 207;
i.Eg = 208;
i.Rc = 209;
var p = {
  tc: 1
},
r = function(e, C) {
  var f = this;
  n.call(f);
  e = b.wb(e);
  var s, A, z, r, l = 0,
  a, m, i, w, x, h, g, q, o, B = [],
  y = [];

  function v(a) {
    a != -1 && y[a].cf(a == l)
  }

  function t(a) {
    f.k(p.tc, a * m)
  }
  f.R = e;
  f.lc = function(a) {
    if (a != r) {
      var d = l,
      b = c.floor(a / m);
      l = b;
      r = a;
      v(d);
      v(b)
    }
  };
  f.kc = function(a) {
    b.B(e, a)
  };
  var u;
  f.uc = function(D) {
    if (!u) {
      s = c.ceil(D / m);
      l = 0;
      var p = q + w,
      r = o + x,
      n = c.ceil(s / i) - 1;
      A = q + p * (!h ? n : i - 1);
      z = o + r * (h ? n : i - 1);
      b.l(e, A);
      b.m(e, z);
      for (var f = 0; f < s; f++) {
        var C = b.Ng();
        b.Xc(C, f + 1);
        var k = b.Qg(g, "numbertemplate", C, d);
        b.v(k, "absolute");
        var v = f % (n + 1);
        b.K(k, !h ? p * v : f % i * p);
        b.L(k, h ? r * v : c.floor(f / (n + 1)) * r);
        b.J(e, k);
        B[f] = k;
        a.Ec & 1 && b.e(k, "click", b.W(j, t, f));
        a.Ec & 2 && b.e(k, "mouseover", b.wc(b.W(j, t, f), k));
        y[f] = b.zc(k)
      }
      u = d
    }
  };
  f.Wb = a = b.s({
    Nd: 10,
    Hd: 10,
    nd: 1,
    Ec: 1
  }, C);
  g = b.C(e, "prototype");
  q = b.l(g);
  o = b.m(g);
  b.Ub(g, e);
  m = a.qd || 1;
  i = a.n || 1;
  w = a.Nd;
  x = a.Hd;
  h = a.nd - 1;
  a.oc == k && b.D(e, "noscale", d);
  a.Ib && b.D(e, "autocenter", a.Ib)
},
t = function(a, g, h) {
  var c = this;
  n.call(c);
  var r, q, e, f, i;
  b.l(a);
  b.m(a);

  function l(a) {
    c.k(p.tc, a, d)
  }

  function o(c) {
    b.B(a, c || !h.Tb && e == 0);
    b.B(g, c || !h.Tb && e >= q - h.j);
    r = c
  }
  c.lc = function(b, a, c) {
    if (c) e = a;
    else {
      e = b;
      o(r)
    }
  };
  c.kc = o;
  var m;
  c.uc = function(c) {
    q = c;
    e = 0;
    if (!m) {
      b.e(a, "click", b.W(j, l, -i));
      b.e(g, "click", b.W(j, l, i));
      b.zc(a);
      b.zc(g);
      m = d
    }
  };
  c.Wb = f = b.s({
    qd: 1
  }, h);
  i = f.qd;
  if (f.oc == k) {
    b.D(a, "noscale", d);
    b.D(g, "noscale", d)
  }
  if (f.Ib) {
    b.D(a, "autocenter", f.Ib);
    b.D(g, "autocenter", f.Ib)
  }
};

function q(e, d, c) {
  var a = this;
  m.call(a, 0, c);
  a.Id = b.bd;
  a.Vc = 0;
  a.Wc = c
}
var u = function(n, g, l) {
  var a = this,
  o, h = {},
  i = g.eb,
  c = new m(0, 0);
  m.call(a, 0, 0);

  function j(d, c) {
    var a = {};
    b.a(d, function(d, f) {
      var e = h[f];
      if (e) {
        if (b.cd(d)) d = j(d, c || f == "e");
        else if (c)
          if (b.Lb(d)) d = o[d];
        a[e] = d
      }
    });
    return a
  }

  function k(e, c) {
    var a = [],
    d = b.Ab(e);
    b.a(d, function(d) {
      var h = b.i(d, "u") == "caption";
      if (h) {
        var e = b.i(d, "t"),
        g = i[b.pc(e)] || i[e],
        f = {
          R: d,
          qc: g
        };
        a.push(f)
      }
      if (c < 5) a = a.concat(k(d, c + 1))
    });
    return a
  }

  function r(e, f, a) {
    b.a(f, function(h) {
      var f = b.s(d, {}, j(h)),
      g = b.mc(f.u);
      delete f.u;
      if (f.f) {
        f.H = f.f;
        g.H = g.f;
        delete f.f
      }
      if (f.g) {
        f.A = f.g;
        g.A = g.g;
        delete f.g
      }
      var k = {
        u: g,
        ib: a.S,
        mb: a.T
      },
      i = new m(h.b, h.d, k, e, a, f);
      c.tb(i);
      a = b.Me(a, f)
    });
    return a
  }

  function q(a) {
    b.a(a, function(d) {
      var a = d.R,
      f = b.l(a),
      e = b.m(a),
      c = {
        f: b.K(a),
        g: b.L(a),
        H: 0,
        A: 0,
        M: 1,
        V: b.z(a) || 0,
        Q: 0,
        ab: 0,
        Z: 0,
        F: 1,
        G: 1,
        lb: 0,
        jb: 0,
        Y: 0,
        Vb: 0,
        Kb: 0,
        S: f,
        T: e,
        c: {
          g: 0,
          q: f,
          p: e,
          f: 0
        }
      };
      c.Sc = c.f;
      c.Tc = c.g;
      r(a, d.qc, c)
    })
  }

  function t(g, f, h) {
    var e = g.b - f;
    if (e) {
      var b = new m(f, e);
      b.tb(c, d);
      b.Fb(h);
      a.tb(b)
    }
    a.Ae(g.d);
    return e
  }

  function s(f) {
    var d = c.Dc(),
    e = 0;
    b.a(f, function(c, f) {
      c = b.s({
        d: l
      }, c);
      t(c, d, e);
      d = c.b;
      e += c.d;
      if (!f || c.t == 2) {
        a.Vc = d;
        a.Wc = d + c.d
      }
    })
  }
  a.Id = function() {
    a.I(-1, d)
  };
  o = [f.kg, f.dg, f.Uc, f.Zc, f.Og, f.Ig, f.Cg, f.Bg, f.Ag, f.ag, f.yf, f.xf, f.qf, f.pf, f.of, f.bg, f.mf, f.lf, f.kf, f.jf, f.hf, f.ef, f.df, f.Af, f.Vf, f.ug, f.bf, f.Df, f.Ef, f.Ff, f.Gf, f.Hf, f.If, f.Jf, f.Kf, f.Lf, f.Mf];
  var u = {
    g: "y",
    f: "x",
    p: "m",
    q: "t",
    Q: "r",
    ab: "rX",
    Z: "rY",
    F: "sX",
    G: "sY",
    lb: "tX",
    jb: "tY",
    Y: "tZ",
    Vb: "kX",
    Kb: "kY",
    M: "o",
    u: "e",
    V: "i",
    c: "c"
  };
  b.a(u, function(b, a) {
    h[b] = a
  });
  q(k(n, 1));
  c.I(-1);
  var p = g.ch || [],
  e = [].concat(p[b.pc(b.i(n, "b"))] || []);
  e.push({
    b: c.Ob(),
    d: e.length ? 0 : l
  });
  s(e);
  a.I(-1)
};
jssor_1_slider_init = function() {
  var g = [{
    ob: 1e3,
    P: 80,
    j: 8,
    n: 4,
    M: 2
  }, {
    ob: 800,
    P: 30,
    j: 8,
    n: 4,
    Pb: o.Ne,
    rd: 2050,
    M: 2
  }, {
    ob: 800,
    P: 300,
    j: 8,
    n: 4,
    c: 15,
    Qb: d,
    Pb: o.sd,
    u: f.Zc
  }, {
    ob: 800,
    P: 300,
    j: 8,
    n: 4,
    c: 15,
    Pb: o.sd,
    u: f.Uc
  }],
  j = [
  [{
    b: -1,
    d: 1,
    o: -1
  }, {
    b: 0,
    d: 800,
    x: -636,
    y: -4,
    o: 1
  }],
  [{
    b: -1,
    d: 1,
    o: -1
  }, {
    b: 0,
    d: 600,
    x: -1,
    y: -8,
    o: 1,
    sX: 1,
    sY: 1
  }, {
    b: 600,
    d: 400,
    x: 1,
    y: 8,
    sX: -1,
    sY: -1
  }],
  [{
    b: -1,
    d: 1,
    o: -1,
    r: 180
  }, {
    b: 0,
    d: 1e3,
    o: 1,
    r: -180
  }]
  ],
  k = {
    Zb: d,
    gf: {
      N: s,
      eb: g
    },
    Rf: {
      N: u,
      eb: j
    },
    Pf: {
      N: t
    },
    Qf: {
      N: r
    }
  },
  e = new i("jssor_1", k);

  function l() {
    var d = b.Dg(e.R, "slides");
    if (d) {
      var c = d[1];
      if (c) {
        var a = b.C(c, "add");
        if (!a) {
          a = b.zb();
          b.yb(a, "position:absolute;top:0px;right:0px;width:80px;height:20px;background-color:rgba(255,255,140,0.5);font-size: 12px;line-height: 20px;text-align:center;");
          b.Xc(a, "Jssor Slider");
          b.J(c, a)
        }
      }
    }
  }
  l();

  function a() {
    var b = e.R.parentNode.clientWidth;
    if (b) {
      b = c.min(b, 1200);
      e.Wf(b)
    } else h.setTimeout(a, 30)
  }
  a();
  b.e(h, "load", a);
  b.e(h, "resize", a);
  b.e(h, "orientationchange", a)
}
})(window, document, Math, null, true, false)
