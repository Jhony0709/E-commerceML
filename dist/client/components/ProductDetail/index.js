"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _HttpRequest = require("../../hooks/HttpRequest");

var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));

function ProductDetail(props) {
  var _useParams = (0, _reactRouterDom.useParams)(),
      id = _useParams.id;

  var url = "http://localhost:3001/api/items/".concat(id);
  var content = null;
  var product = (0, _HttpRequest.useAxiosGet)(url);

  if (product.error) {
    content = /*#__PURE__*/_react.default.createElement("p", null, "Ups, hubo un error...");
  }

  if (product.loading) {
    content = /*#__PURE__*/_react.default.createElement("p", null, "...loading");
  }

  if (product.data) {
    console.log(product.data);
    var data = product.data;
    var item = data.item;
    content = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: item.picture
    }), /*#__PURE__*/_react.default.createElement("p", null, item.condition, " - ", item.sold_quantity, " vendidos"), /*#__PURE__*/_react.default.createElement("h1", null, item.title), /*#__PURE__*/_react.default.createElement("h2", null, "$ ", item.price.amount + (item.price.decimals !== null ? item.price.decimals : '')), /*#__PURE__*/_react.default.createElement("h2", null, "Descripci\xF3n del producto"), /*#__PURE__*/_react.default.createElement("p", null, item.description));
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, {
    categories: props.location.state.categories
  }), /*#__PURE__*/_react.default.createElement("div", null, content));
}

var _default = ProductDetail;
exports.default = _default;