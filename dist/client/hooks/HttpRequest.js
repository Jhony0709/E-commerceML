"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAxiosGet = useAxiosGet;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

function useAxiosGet(url) {
  var _useState = (0, _react.useState)({
    loading: false,
    data: null,
    error: false
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      request = _useState2[0],
      setRequest = _useState2[1];

  (0, _react.useEffect)(function () {
    setRequest({
      loading: true,
      data: null,
      error: false
    });

    _axios.default.get(url).then(function (response) {
      setRequest({
        loading: false,
        data: response.data,
        error: false
      });
    }).catch(function (error) {
      setRequest({
        loading: false,
        data: null,
        error: true
      });
    });
  }, [url]);
  return request;
}