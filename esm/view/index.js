"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Header_1 = require("./Header");
const SectionFeature_1 = require("./SectionFeature");
require("./index.scss");
const App = () => {
    return (react_1.default.createElement("div", { className: "app-container" },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(SectionFeature_1.default, null)));
};
exports.default = App;
//# sourceMappingURL=index.js.map