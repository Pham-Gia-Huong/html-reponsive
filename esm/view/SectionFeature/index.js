"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const index_1 = require("./SectionItem/index");
const sectionFeature_1 = require("../../contants/sectionFeature");
require("./index.scss");
const SectionItem = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null, sectionFeature_1.LIST_ITEM_SECTION.map((item) => (react_1.default.createElement(index_1.default, { textContent: item.content, textHeader: item.header, icon: item.icon })))));
};
const SectionFeature = () => {
    return (react_1.default.createElement("section", { className: "section-feature" },
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("h2", null, "Get food fast \u2014 not fast food"),
            react_1.default.createElement("p", { className: "text-first" }, "Hello, we\u2019re Omnifood, your new premium food delivery service. We know you\u2019re always busy. No time for cooking. So let us take care of that, we\u2019re really good at it, we promise!")),
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement(SectionItem, null))));
};
exports.default = SectionFeature;
//# sourceMappingURL=index.js.map