"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSignalCellularConnectedNoInternet_2Bar(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "24", height: "24", viewBox: "0 0 24 24" }),
    _react2.default.createElement("path", { fillOpacity: ".3", d: "M22 8V2L2 22h16V8z" }),
    _react2.default.createElement("path", { d: "M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z" })
  );
}

module.exports = IconSignalCellularConnectedNoInternet_2Bar;