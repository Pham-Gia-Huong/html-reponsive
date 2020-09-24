import React from 'react';
import './index.scss';
var Navigation = function () {
    return (React.createElement("nav", null,
        React.createElement("div", { className: "row" },
            React.createElement("img", { className: "logo", src: 'image/logo-white.png', alt: "hero image" }),
            React.createElement("ul", { className: "main-nav" },
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Food delivery")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "How it works"),
                    ' '),
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Our cities"),
                    ' '),
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Sign up"),
                    ' ')))));
};
export default Navigation;
//# sourceMappingURL=index.js.map