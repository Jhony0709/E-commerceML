"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductListElement;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ic_shipping = _interopRequireDefault(require("../../assets/images/ic_shipping.png"));

function ProductListElement(props) {
  var item = props.product;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      shouldRedirect = _useState2[0],
      setShouldRedirect = _useState2[1];

  var handleClick = function handleClick() {
    setShouldRedirect(true);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, shouldRedirect ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: {
      pathname: "/product/".concat(item.id),
      state: {
        categories: props.categories
      }
    }
  }) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: "product"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product--img"
  }, /*#__PURE__*/_react.default.createElement("img", {
    onClick: handleClick,
    src: item.picture
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "product--description"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "product--description-price",
    onClick: handleClick
  }, "$ ", item.price.amount + (item.price.decimals !== null ? item.price.decimals : ''), item.free_shipping ? /*#__PURE__*/_react.default.createElement("img", {
    src: _ic_shipping.default,
    alt: "Env\xEDo gratis"
  }) : null), /*#__PURE__*/_react.default.createElement("h2", {
    className: "product--description-title",
    onClick: handleClick
  }, item.title)), /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  })));
}