"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Breadcrumb;

var _react = _interopRequireDefault(require("react"));

function Breadcrumb(_ref) {
  var categories = _ref.categories;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "breadcrumb"
  }, categories.length ? /*#__PURE__*/_react.default.createElement("ul", {
    className: "max-width"
  }, categories.map(function (category, key) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: key
    }, category);
  })) : null);
}