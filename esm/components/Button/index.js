"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./index.scss");
const Button = ({ text, className = '' }) => {
    return (react_1.default.createElement("a", { className: `btn ${className}`, href: "#" }, text));
};
exports.default = Button;
//# sourceMappingURL=index.js.map