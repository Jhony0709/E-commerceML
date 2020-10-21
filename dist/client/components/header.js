"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Logo_ML = _interopRequireDefault(require("../assets/images/Logo_ML.png"));

var _SearchForm = _interopRequireDefault(require("./SearchForm"));

function header() {
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav__content max-width"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _Logo_ML.default,
    className: "App-logo",
    alt: "logo"
  }))), /*#__PURE__*/_react.default.createElement(_SearchForm.default, null)));
}

var _default = header;
exports.default = _default;