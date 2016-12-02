"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLocationDisabled(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M41.88 22.17C40.96 13.83 34.34 7.21 26 6.29V2.17h-4v4.12c-2.26.25-4.38.93-6.31 1.94l3 3c1.64-.67 3.43-1.05 5.31-1.05 7.73 0 14 6.27 14 14 0 1.88-.38 3.67-1.05 5.31l3 3c1.01-1.93 1.68-4.05 1.93-6.31H46v-4h-4.12zM6 8.72l4.07 4.07c-2.14 2.62-3.57 5.84-3.96 9.38H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88v4.12h4v-4.12c3.54-.39 6.76-1.82 9.38-3.96l4.08 4.08L42 39.63 8.55 6.17 6 8.72zm26.53 26.53c-2.36 1.82-5.32 2.92-8.53 2.92-7.73 0-14-6.27-14-14 0-3.22 1.1-6.17 2.92-8.53l19.61 19.61z" })
  );
}

module.exports = IconLocationDisabled;