import React from 'react';
import './index.scss';
var SectionFeatureItem = function (_a) {
    var icon = _a.icon, textHeader = _a.textHeader, textContent = _a.textContent, _b = _a.size, size = _b === void 0 ? '' : _b, _c = _a.color, color = _c === void 0 ? '' : _c;
    return (React.createElement("div", { className: "col grid-1-4 box" },
        React.createElement("i", { style: { color: color }, className: icon + " " + size }),
        React.createElement("h3", null, textHeader),
        React.createElement("p", null, textContent)));
};
export default SectionFeatureItem;
//# sourceMappingURL=index.js.map