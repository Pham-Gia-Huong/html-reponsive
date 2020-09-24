import React from 'react';
import './index.scss';
import { Button } from 'components';
var Content = function () {
    return (React.createElement("div", { className: "header-content" },
        React.createElement("h1", null,
            "Goodbye junk food.",
            React.createElement("br", null),
            " Hello super healthy meals."),
        React.createElement(Button, { text: 'I’m hungry', className: "btn-full" }),
        React.createElement(Button, { text: 'Show me more', className: "btn-ghost" })));
};
export default Content;
//# sourceMappingURL=index.js.map