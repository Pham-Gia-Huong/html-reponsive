"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Content_1 = require("./Content");
const Nav_1 = require("./Nav");
require("./index.scss");
const Header = () => {
    return (react_1.default.createElement("header", null,
        react_1.default.createElement(Nav_1.default, null),
        react_1.default.createElement(Content_1.default, null)));
};
exports.default = Header;
//# sourceMappingURL=index.js.map