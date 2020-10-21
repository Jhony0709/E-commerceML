"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Loader;

var _react = _interopRequireDefault(require("react"));

function Loader() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loader--container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "loader"
  }));
}