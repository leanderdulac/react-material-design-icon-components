"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconScreenLockRotation(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M46.51 25.54l-5.14-5.14-2.83 2.83 4.43 4.43-11.31 11.31L9.03 16.34 20.34 5.03l4.19 4.19 2.83-2.83-4.9-4.9c-1.17-1.17-3.07-1.17-4.24 0L5.49 14.22c-1.17 1.17-1.17 3.07 0 4.24L29.53 42.5c1.17 1.17 3.07 1.17 4.24 0L46.5 29.77c1.18-1.16 1.18-3.06.01-4.23zM16.93 40.97C10.4 37.87 5.71 31.52 5 24H2c1.02 12.32 11.32 22 23.9 22 .45 0 .88-.04 1.33-.07L19.6 38.3l-2.67 2.67zM32 18h10c1.11 0 2-.9 2-2V8c0-1.1-.89-2-2-2V5c0-2.76-2.24-5-5-5s-5 2.24-5 5v1c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2zm1.6-13c0-1.88 1.52-3.4 3.4-3.4s3.4 1.52 3.4 3.4v1h-6.8V5z" })
  );
}

module.exports = IconScreenLockRotation;