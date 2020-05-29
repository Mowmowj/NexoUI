import React from 'react';
import MenuItem from './components/Menu/menuItem';
import Menu from "./components/Menu/menu";
import SubMenu from "./components/Menu/subMenu";
import Icon from './components/Icon/icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
var App = function () {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Icon, { icon: "coffee", theme: 'primary', size: '10x' }),
            React.createElement(Icon, { icon: 'arrow-down', theme: 'danger', size: '10x' }),
            React.createElement(Menu, { defaultIndex: '0', onSelect: function (index) { alert(index); }, mode: 'vertical', defaultOpenSubMenus: ['2'] },
                React.createElement(MenuItem, { disabled: true }, "home page"),
                React.createElement(MenuItem, null, "about page"),
                React.createElement(SubMenu, { title: 'MenuWithSubMenu' },
                    React.createElement(MenuItem, null, "submenu"),
                    React.createElement(MenuItem, null, "submenu")),
                React.createElement(MenuItem, null, "other page"),
                React.createElement(SubMenu, { title: 'MenuWithSubMenu2' },
                    React.createElement(MenuItem, null, "submenu"),
                    React.createElement(MenuItem, null, "submenu"),
                    React.createElement(MenuItem, null, "submenu"),
                    React.createElement(MenuItem, null, "submenu"))))));
};
export default App;
