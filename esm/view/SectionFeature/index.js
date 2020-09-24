import React from 'react';
import SectionFeatureItem from './SectionItem/index';
import { LIST_ITEM_SECTION } from '../../contants/sectionFeature';
import './index.scss';
var SectionItem = function () {
    return (React.createElement(React.Fragment, null, LIST_ITEM_SECTION.map(function (item, key) {
        return (React.createElement(React.Fragment, { key: key },
            React.createElement(SectionFeatureItem, { textContent: item.content, textHeader: item.header, icon: item.icon, size: item.size, color: item.color })));
    })));
};
var SectionFeature = function () {
    return (React.createElement("section", { className: "section-feature" },
        React.createElement("div", { className: "row margin-bt-20" },
            React.createElement("h2", null, "Get food fast \u2014 not fast food"),
            React.createElement("p", { className: "text-first" }, "Hello, we\u2019re Omnifood, your new premium food delivery service. We know you\u2019re always busy. No time for cooking. So let us take care of that, we\u2019re really good at it, we promise!")),
        React.createElement("div", { className: "row" },
            React.createElement(SectionItem, null))));
};
export default SectionFeature;
//# sourceMappingURL=index.js.map