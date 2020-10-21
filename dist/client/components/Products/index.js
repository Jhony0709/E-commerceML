"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProductListElement = _interopRequireDefault(require("../ProductListElement"));

var _HttpRequest = require("../../hooks/HttpRequest");

var _reactRouterDom = require("react-router-dom");

var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));

var Products = function Products(location, listen) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search).get('q');
  var url = "http://localhost:3001/api/items?q=".concat(query);
  var products = (0, _HttpRequest.useAxiosGet)(url);
  var categories = [];
  var content = null;

  if (products.error) {
    content = /*#__PURE__*/_react.default.createElement("p", null, "Ups, hubo un error...");
  }

  if (products.loading) {
    content = /*#__PURE__*/_react.default.createElement("p", null, "...loading");
  }

  if (products.data) {
    var data = products.data;
    categories = data.categories;
    content = data.items.map(function (product, i) {
      return /*#__PURE__*/_react.default.createElement(_ProductListElement.default, {
        categories: categories,
        product: product,
        key: i
      });
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "products"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, {
    categories: categories
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "products--container"
  }, content));
};

var _default = Products;
exports.default = _default;