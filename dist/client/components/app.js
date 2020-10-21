"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _header = _interopRequireDefault(require("./header"));

var _Products = _interopRequireDefault(require("./Products"));

var _NotFound = _interopRequireDefault(require("./NotFound"));

var _ProductDetail = _interopRequireDefault(require("./ProductDetail"));

var _reactRouterDom = require("react-router-dom");

var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_header.default, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/products/"
  }, /*#__PURE__*/_react.default.createElement(_Products.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/product/:id",
    render: function render(props) {
      return /*#__PURE__*/_react.default.createElement(_ProductDetail.default, props);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, null, /*#__PURE__*/_react.default.createElement(_NotFound.default, null)))));
};

var _default = App;
exports.default = _default;