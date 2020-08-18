"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./index.scss");
const components_1 = require("components");
const Content = () => {
    return (react_1.default.createElement("div", { className: "header-content" },
        react_1.default.createElement("h1", null,
            "Goodbye junk food.",
            react_1.default.createElement("br", null),
            " Hello super healthy meals."),
        react_1.default.createElement(components_1.Button, { text: 'I’m hungry', className: "btn-full" }),
        react_1.default.createElement(components_1.Button, { text: 'Show me more', className: "btn-ghost" })));
};
exports.default = Content;
//# sourceMappingURL=index.js.map