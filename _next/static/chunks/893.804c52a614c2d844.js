"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [893], {
        40893: function (e, n, r) {
            r.r(n);
            var s = r(85893);
            r(67294);
            var l = r(67160),
                a = r(10721),
                c = r(39969);
            n.default = () => {
                let e = (0, a.CG)(e => e.layout.incorrect_network_modal_open),
                    n = (0, a.TL)();
                return e ? (0, s.jsx)(l.u, {
                    onClose: () => n((0, c.bN)(!1)),
                    children: (0, s.jsxs)("div", {
                        className: "text-left",
                        children: [(0, s.jsx)("h1", {
                            className: "my-3",
                            children: (0, s.jsx)("strong", {
                                children: "INCORRECT NETWORK"
                            })
                        }), (0, s.jsx)("p", {
                            className: "my-3",
                            children: "We currently use Binance Smart Chain. Please change network and retry to connect."
                        })]
                    })
                }) : null
            }
        }
    }
]);