// !function (D, u) {
//   "object" == typeof exports && "undefined" != typeof module ? u(exports) : "function" == typeof define && define.amd ? define(["exports"], u) : u((D = D || self).window = D.window || {})
// }(this, function (e) {
//   "use strict";
//   var S = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
//
//   function m(D) {
//     X = document, F = window, (n = n || D || F.gsap || console.warn("Please gsap.registerPlugin(SplitText)")) && (d = n.utils.toArray, r = n.core.context || function () {
//     }, i = 1)
//   }
//
//   function p() {
//     return String.fromCharCode.apply(null, arguments)
//   }
//
//   function s(D) {
//     return F.getComputedStyle(D)
//   }
//
//   function t(D) {
//     return "absolute" === D.position || !0 === D.absolute
//   }
//
//   function u(D, u) {
//     for (var e, t = u.length; -1 < --t;) if (e = u[t], D.substr(0, e.length) === e) return e.length
//   }
//
//   function w(D, u) {
//     void 0 === D && (D = "");
//     var e = ~D.indexOf("++"), t = 1;
//     return e && (D = D.split("++").join("")), function () {
//       return "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
//     }
//   }
//
//   function x(D, u, e) {
//     var t = D.nodeType;
//     if (1 === t || 9 === t || 11 === t) for (D = D.firstChild; D; D = D.nextSibling) x(D, u, e); else 3 !== t && 4 !== t || (D.nodeValue = D.nodeValue.split(u).join(e))
//   }
//
//   function y(D, u) {
//     for (var e = u.length; -1 < --e;) D.push(u[e])
//   }
//
//   function z(D, u, e) {
//     for (var t; D && D !== u;) {
//       if (t = D._next || D.nextSibling) return t.textContent.charAt(0) === e;
//       D = D.parentNode || D._parent
//     }
//   }
//
//   function A(D) {
//     var u, e, t = d(D.childNodes), F = t.length;
//     for (u = 0; u < F; u++) (e = t[u])._isSplit ? A(e) : u && e.previousSibling && 3 === e.previousSibling.nodeType ? (e.previousSibling.nodeValue += 3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue, D.removeChild(e)) : 3 !== e.nodeType && (D.insertBefore(e.firstChild, e), D.removeChild(e))
//   }
//
//   function B(D, u) {
//     return parseFloat(u[D]) || 0
//   }
//
//   function C(D, u, e, F, i, C, n) {
//     var E, r, o, l, p, d, a, h, f, c, g, v, w = s(D), S = B("paddingLeft", w), _ = -999,
//       b = B("borderBottomWidth", w) + B("borderTopWidth", w), m = B("borderLeftWidth", w) + B("borderRightWidth", w),
//       T = B("paddingTop", w) + B("paddingBottom", w), N = B("paddingLeft", w) + B("paddingRight", w),
//       L = B("fontSize", w) * (u.lineThreshold || .2), W = w.textAlign, O = [], H = [], k = [],
//       V = u.wordDelimiter || " ", j = u.tag ? u.tag : u.span ? "span" : "div",
//       M = u.type || u.split || "chars,words,lines", R = i && ~M.indexOf("lines") ? [] : null, P = ~M.indexOf("words"),
//       q = ~M.indexOf("chars"), G = t(u), I = u.linesClass, J = ~(I || "").indexOf("++"), K = [],
//       Q = "flex" === w.display, U = D.style.display;
//     for (J && (I = I.split("++").join("")), Q && (D.style.display = "block"), o = (r = D.getElementsByTagName("*")).length, p = [], E = 0; E < o; E++) p[E] = r[E];
//     if (R || G) for (E = 0; E < o; E++) ((d = (l = p[E]).parentNode === D) || G || q && !P) && (v = l.offsetTop, R && d && Math.abs(v - _) > L && ("BR" !== l.nodeName || 0 === E) && (a = [], R.push(a), _ = v), G && (l._x = l.offsetLeft, l._y = v, l._w = l.offsetWidth, l._h = l.offsetHeight), R && ((l._isSplit && d || !q && d || P && d || !P && l.parentNode.parentNode === D && !l.parentNode._isSplit) && (a.push(l), l._x -= S, z(l, D, V) && (l._wordEnd = !0)), "BR" === l.nodeName && (l.nextSibling && "BR" === l.nextSibling.nodeName || 0 === E) && R.push([])));
//     for (E = 0; E < o; E++) if (d = (l = p[E]).parentNode === D, "BR" !== l.nodeName) if (G && (f = l.style, P || d || (l._x += l.parentNode._x, l._y += l.parentNode._y), f.left = l._x + "px", f.top = l._y + "px", f.position = "absolute", f.display = "block", f.width = l._w + 1 + "px", f.height = l._h + "px"), !P && q) if (l._isSplit) for (l._next = r = l.nextSibling, l.parentNode.appendChild(l); r && 3 === r.nodeType && " " === r.textContent;) l._next = r.nextSibling, l.parentNode.appendChild(r), r = r.nextSibling; else l.parentNode._isSplit ? (l._parent = l.parentNode, !l.previousSibling && l.firstChild && (l.firstChild._isFirst = !0), l.nextSibling && " " === l.nextSibling.textContent && !l.nextSibling.nextSibling && K.push(l.nextSibling), l._next = l.nextSibling && l.nextSibling._isFirst ? null : l.nextSibling, l.parentNode.removeChild(l), p.splice(E--, 1), o--) : d || (v = !l.nextSibling && z(l.parentNode, D, V), l.parentNode._parent && l.parentNode._parent.appendChild(l), v && l.parentNode.appendChild(X.createTextNode(" ")), "span" === j && (l.style.display = "inline"), O.push(l)); else l.parentNode._isSplit && !l._isSplit && "" !== l.innerHTML ? H.push(l) : q && !l._isSplit && ("span" === j && (l.style.display = "inline"), O.push(l)); else R || G ? (l.parentNode && l.parentNode.removeChild(l), p.splice(E--, 1), o--) : P || D.appendChild(l);
//     for (E = K.length; -1 < --E;) K[E].parentNode.removeChild(K[E]);
//     if (R) {
//       for (G && (c = X.createElement(j), D.appendChild(c), g = c.offsetWidth + "px", v = c.offsetParent === D ? 0 : D.offsetLeft, D.removeChild(c)), f = D.style.cssText, D.style.cssText = "display:none;"; D.firstChild;) D.removeChild(D.firstChild);
//       for (h = " " === V && (!G || !P && !q), E = 0; E < R.length; E++) {
//         for (a = R[E], (c = X.createElement(j)).style.cssText = "display:block;text-align:" + W + ";position:" + (G ? "absolute;" : "relative;"), I && (c.className = I + (J ? E + 1 : "")), k.push(c), o = a.length, r = 0; r < o; r++) "BR" !== a[r].nodeName && (l = a[r], c.appendChild(l), h && l._wordEnd && c.appendChild(X.createTextNode(" ")), G && (0 === r && (c.style.top = l._y + "px", c.style.left = S + v + "px"), l.style.top = "0px", v && (l.style.left = l._x - v + "px")));
//         0 === o ? c.innerHTML = "&nbsp;" : P || q || (A(c), x(c, String.fromCharCode(160), " ")), G && (c.style.width = g, c.style.height = l._h + "px"), D.appendChild(c)
//       }
//       D.style.cssText = f
//     }
//     G && (n > D.clientHeight && (D.style.height = n - T + "px", D.clientHeight < n && (D.style.height = n + b + "px")), C > D.clientWidth && (D.style.width = C - N + "px", D.clientWidth < C && (D.style.width = C + m + "px"))), Q && (U ? D.style.display = U : D.style.removeProperty("display")), y(e, O), P && y(F, H), y(i, k)
//   }
//
//   function D(D, e, F, i) {
//     var C, n, s, E, r, o, l, p, d = e.tag ? e.tag : e.span ? "span" : "div",
//       a = ~(e.type || e.split || "chars,words,lines").indexOf("chars"), h = t(e), f = e.wordDelimiter || " ",
//       B = " " !== f ? "" : h ? "&#173; " : " ", c = "</" + d + ">", A = 1,
//       g = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : u : null, y = X.createElement("div"),
//       v = D.parentNode;
//     for (v.insertBefore(y, D), y.textContent = D.nodeValue, v.removeChild(D), l = -1 !== (C = function getText(D) {
//       var u = D.nodeType, e = "";
//       if (1 === u || 9 === u || 11 === u) {
//         if ("string" == typeof D.textContent) return D.textContent;
//         for (D = D.firstChild; D; D = D.nextSibling) e += getText(D)
//       } else if (3 === u || 4 === u) return D.nodeValue;
//       return e
//     }(D = y)).indexOf("<"), !1 !== e.reduceWhiteSpace && (C = C.replace(b, " ").replace(_, "")), l && (C = C.split("<").join("{{LT}}")), r = C.length, n = (" " === C.charAt(0) ? B : "") + F(), s = 0; s < r; s++) if (o = C.charAt(s), g && (p = g(C.substr(s), e.specialChars))) o = C.substr(s, p || 1), n += a && " " !== o ? i() + o + "</" + d + ">" : o, s += p - 1; else if (o === f && C.charAt(s - 1) !== f && s) {
//       for (n += A ? c : "", A = 0; C.charAt(s + 1) === f;) n += B, s++;
//       s === r - 1 ? n += B : ")" !== C.charAt(s + 1) && (n += B + F(), A = 1)
//     } else "{" === o && "{{LT}}" === C.substr(s, 6) ? (n += a ? i() + "{{LT}}</" + d + ">" : "{{LT}}", s += 5) : 55296 <= o.charCodeAt(0) && o.charCodeAt(0) <= 56319 || 65024 <= C.charCodeAt(s + 1) && C.charCodeAt(s + 1) <= 65039 ? (E = ((C.substr(s, 12).split(S) || [])[1] || "").length || 2, n += a && " " !== o ? i() + C.substr(s, E) + "</" + d + ">" : C.substr(s, E), s += E - 1) : n += a && " " !== o ? i() + o + "</" + d + ">" : o;
//     D.outerHTML = n + (A ? c : ""), l && x(v, "{{LT}}", "<")
//   }
//
//   function E(u, e, F, i) {
//     var C, n, r = d(u.childNodes), o = r.length, l = t(e);
//     if (3 !== u.nodeType || 1 < o) {
//       for (e.absolute = !1, C = 0; C < o; C++) (n = r[C])._next = n._isFirst = n._parent = n._wordEnd = null, 3 === n.nodeType && !/\S+/.test(n.nodeValue) || (l && 3 !== n.nodeType && "inline" === s(n).display && (n.style.display = "inline-block", n.style.position = "relative"), n._isSplit = !0, E(n, e, F, i));
//       return e.absolute = l, void (u._isSplit = !0)
//     }
//     D(u, e, F, i)
//   }
//
//   var X, F, i, n, r, d, o, _ = /(?:\r|\n|\t\t)/g, b = /(?:\s\s+)/g, l = "SplitText",
//     a = p(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), h = function (D) {
//       var u = "undefined" != typeof window,
//         e = 0 === (u ? window.location.href : "").indexOf(p(102, 105, 108, 101, 58, 47, 47)) || -1 !== D.indexOf(p(108, 111, 99, 97, 108, 104, 111, 115, 116)) || -1 !== D.indexOf(p(49, 50, 55, 46, 48, 32, 48, 46, 49)),
//         t = [a, p(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), p(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), p(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), p(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), p(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), p(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), p(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), p(99, 100, 112, 110, 46, 105, 111), p(112, 101, 110, 115, 46, 105, 111), p(103, 97, 110, 110, 111, 110, 46, 116, 118), p(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), p(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), p(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), p(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), p(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), p(112, 108, 110, 107, 114, 46, 99, 111), p(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), p(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), p(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), p(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), p(99, 115, 98, 46, 97, 112, 112), p(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), p(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), p(99, 111, 100, 105, 101, 114, 46, 105, 111), p(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), p(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), p(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), p(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), p(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), p(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
//         F = t.length;
//       for (setTimeout(function checkWarn() {
//         u && ("loading" === document.readyState || "interactive" === document.readyState ? document.addEventListener("readystatechange", checkWarn) : (document.removeEventListener("readystatechange", checkWarn), u && window.console && !window._gsapWarned && "object" == typeof window.gsap && !1 !== window.gsap.config().trialWarn && (console.log(p(37, 99, 87, 97, 114, 110, 105, 110, 103), p(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)), console.log(p(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + l + p(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(p(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), p(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)), window._gsapWarned = 1)))
//       }, 50); -1 < --F;) if (-1 !== D.indexOf(t[F])) return !0;
//       return e || !setTimeout(function () {
//         u && (window.location.href = p(104, 116, 116, 112, 115, 58, 47, 47) + a + p(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=" + l + "&source=trial")
//       }, 3e3)
//     }("undefined" != typeof window ? window.location.host : ""),
//     f = ((o = SplitText.prototype).split = function split(D) {
//       this.isSplit && this.revert(), this.vars = D = D || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
//       for (var u, e, t, F = this.elements.length, i = D.tag ? D.tag : D.span ? "span" : "div", n = w(D.wordsClass, i), s = w(D.charsClass, i); -1 < --F;) t = this.elements[F], this._originals[F] = t.innerHTML, u = t.clientHeight, e = t.clientWidth, E(t, D, n, s), C(t, D, this.chars, this.words, this.lines, e, u);
//       return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
//     }, o.revert = function revert() {
//       var e = this._originals;
//       if (!e) throw"revert() call wasn't scoped properly.";
//       return this.elements.forEach(function (D, u) {
//         return D.innerHTML = e[u]
//       }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
//     }, SplitText.create = function create(D, u) {
//       return new SplitText(D, u)
//     }, SplitText);
//
//   function SplitText(D, u) {
//     i || m(), this.elements = d(D), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = u || {}, r(this), h && this.split(u)
//   }
//
//   f.version = "3.11.4", f.register = m, e.SplitText = f, e.default = f;
//   if (typeof (window) === "undefined" || window !== e) {
//     Object.defineProperty(e, "__esModule", {value: !0})
//   } else {
//     delete e.default
//   }
// });
// transform this code on es6
