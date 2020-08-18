"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./index.scss");
const Navigation = () => {
    return (react_1.default.createElement("nav", null,
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("img", { className: "logo", src: 'image/logo-white.png', alt: "hero image" }),
            react_1.default.createElement("ul", { className: "main-nav" },
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#" }, "Food delivery")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#" }, "How it works"),
                    ' '),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#" }, "Our cities"),
                    ' '),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#" }, "Sign up"),
                    ' ')))));
};
exports.default = Navigation;
//# sourceMappingURL=index.js.map