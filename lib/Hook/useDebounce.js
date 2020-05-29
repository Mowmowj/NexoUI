import { useState, useEffect } from "react";
function useDebounce(value, delay) {
    if (delay === void 0) { delay = 300; }
    var _a = useState(value), debounceValue = _a[0], setdeDounceValue = _a[1];
    useEffect(function () {
        var timer = window.setTimeout(function () {
            setdeDounceValue(value);
        }, delay);
        return function () {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return debounceValue;
}
export default useDebounce;
