"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./index.scss");
require("./index.css");
const SectionFeatureItem = ({ icon, textHeader, textContent, }) => {
    return (react_1.default.createElement("div", { className: "col grid-1-4 box" },
        react_1.default.createElement("i", { className: `${icon}` }),
        react_1.default.createElement("h3", { className: "hehe" }, textHeader),
        react_1.default.createElement("p", null, textContent)));
};
exports.default = SectionFeatureItem;
//# sourceMappingURL=index.js.map