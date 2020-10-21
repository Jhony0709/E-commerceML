"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SearchForm;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function SearchForm() {
  var _React$createElement;

  var searchInput = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      searchProduct = _useState4[0],
      setSearchProduct = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      queryString = _useState6[0],
      setQueryString = _useState6[1];

  var searchAction = function searchAction(e) {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      setQueryString("/products?q=".concat(inputValue));
      setSearchProduct(true);
    }
  };

  (0, _react.useEffect)(function () {
    searchInput.current.focus();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, searchProduct ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: queryString
  }) : '', /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: searchAction,
    className: "form__main-search"
  }, /*#__PURE__*/_react.default.createElement("input", (_React$createElement = {
    type: "text",
    className: "input input--main-search",
    placeholder: "Nunca dejes de buscar"
  }, (0, _defineProperty2.default)(_React$createElement, "type", "text"), (0, _defineProperty2.default)(_React$createElement, "ref", searchInput), (0, _defineProperty2.default)(_React$createElement, "value", inputValue), (0, _defineProperty2.default)(_React$createElement, "onChange", function onChange(e) {
    return setInputValue(e.target.value);
  }), _React$createElement)), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn--ico btn--ico-default",
    type: "submit"
  })));
}