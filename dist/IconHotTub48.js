"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHotTub(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("circle", { cx: "14", cy: "12", r: "4" }),
    _react2.default.createElement("path", { d: "M22.3 24c-.61-.45-1.17-.93-1.64-1.44l-2.8-3.1c-.38-.42-.86-.76-1.38-1-.58-.28-1.24-.46-1.92-.46h-.06c-2.48 0-4.5 2.02-4.5 4.5V24H4v16c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V24H22.3zM14 40h-4V28h4v12zm8 0h-4V28h4v12zm8 0h-4V28h4v12zm8 0h-4V28h4v12zm-.69-28.29l-.14-.13c-1.15-1.23-1.63-2.82-1.34-4.39L36 6h-3.78l-.13.85c-.41 2.72.54 5.43 2.6 7.43l.13.12c1.15 1.23 1.64 2.83 1.35 4.4l-.22 1.2h3.83l.13-.85c.4-2.72-.54-5.43-2.6-7.44zm-8 0l-.14-.13c-1.15-1.23-1.63-2.82-1.34-4.39L28 6h-3.78l-.13.85c-.41 2.72.54 5.43 2.6 7.43l.13.12c1.15 1.23 1.64 2.83 1.35 4.4l-.22 1.2h3.83l.13-.85c.4-2.72-.54-5.43-2.6-7.44z" })
  );
}

module.exports = IconHotTub;