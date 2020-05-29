var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Input from '../Input/input';
import { Icon } from "../Icon/icon";
import useDebounce from "../../Hook/useDebounce";
export var SearchBox = function (props) {
    var searchSuggestions = props.searchSuggestions, onSelect = props.onSelect, value = props.value, renderModel = props.renderModel, restProps = __rest(props, ["searchSuggestions", "onSelect", "value", "renderModel"]);
    var _a = useState(value), inputValue = _a[0], setInputValue = _a[1]; //搜索框内容
    var _b = useState([]), suggestions = _b[0], setSuggestions = _b[1]; //下拉框内容
    var _c = useState(false), isLoading = _c[0], setisLoading = _c[1];
    var _d = useState(-8), hightlightInex = _d[0], sethightlightInex = _d[1];
    var toggleSearch = useRef(false);
    var debounceValue = useDebounce(inputValue, 500); //自定义函数防抖hook
    useEffect(function () {
        if (!!debounceValue && toggleSearch.current) {
            var searchResult = searchSuggestions(debounceValue);
            if (searchResult instanceof Promise) {
                // console.log('promise');
                setisLoading(true);
                searchResult.then(function (data) {
                    setisLoading(false);
                    setSuggestions(data);
                });
            }
            else {
                setSuggestions(searchResult);
            }
        }
        else {
            setSuggestions([]);
        }
        sethightlightInex(-8);
    }, [debounceValue, searchSuggestions]);
    var handleChange = function (e) {
        var value = e.target.value.trim();
        toggleSearch.current = true;
        setInputValue(value);
    };
    var selectList = function (index) {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length)
            index = suggestions.length - 1;
        sethightlightInex(index);
    };
    var handleKeyDown = function (e) {
        switch (e.keyCode) {
            case 13:
                if (suggestions[hightlightInex]) {
                    handleSelect(suggestions[hightlightInex]);
                }
                break;
            case 38:
                selectList(hightlightInex - 1);
                break;
            case 40:
                selectList(hightlightInex + 1);
                break;
            case 27:
                setSuggestions([]);
                break;
            default:
                break;
        }
    };
    var renderSetting = function (item) {
        return renderModel ? renderModel(item) : item.value;
    };
    var handleSelect = function (item) {
        setInputValue(item.value);
        toggleSearch.current = false;
        setSuggestions([]);
        if (onSelect) {
            onSelect(item);
        }
    };
    var dropDown = function () {
        return (React.createElement("ul", { className: "nexo-suggestion-list" }, suggestions.map(function (item, index) {
            var classname = classNames('suggestion-item', {
                'is-active': index === hightlightInex
            });
            return (React.createElement("li", { key: index, className: classname, onClick: function () { return handleSelect(item); } }, renderSetting(item)));
        })));
    };
    return (React.createElement("div", { className: 'nexo-searchbox' },
        React.createElement(Input, __assign({ value: inputValue }, restProps, { onChange: handleChange, onKeyDown: handleKeyDown })),
        React.createElement("div", { className: "suggstions-loading-icon" }, isLoading && React.createElement("ul", null,
            React.createElement(Icon, { icon: "spinner", spin: true }))),
        !!suggestions && dropDown()));
};
export default SearchBox;
