import React from 'react';
import Header from './Header';
import SectionFeature from './SectionFeature';
import SectionMeals from './SectionMeals';
import SectionSteps from './SectionSteps';
import './index.scss';
import './grid.scss';
var App = function () {
    return (React.createElement("div", { className: "app-container" },
        React.createElement(Header, null),
        React.createElement(SectionFeature, null),
        React.createElement(SectionMeals, null),
        React.createElement(SectionSteps, null)));
};
export default App;
//# sourceMappingURL=index.js.map