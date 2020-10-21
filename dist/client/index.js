"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./assets/favicon.svg");

require("./global.scss");

var _app = _interopRequireDefault(require("./components/app"));

var app = /*#__PURE__*/_react.default.createElement(_app.default, null);

_reactDom.default.render(app, document.getElementById('root'));