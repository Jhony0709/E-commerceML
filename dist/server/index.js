"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _axios = _interopRequireDefault(require("axios"));

var _path = _interopRequireDefault(require("path"));

var _responseModel = require("./responseModel");

var app = (0, _express.default)();
app.use('/static', _express.default.static(_path.default.join(__dirname, '..', '..', 'dist', 'static')));

var meliApi = _axios.default.create({
  baseURL: "https://api.mercadolibre.com/"
});

var search = "sites/MLA/search";
var productsLimit = 4;
app.get('/api/items', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res, next) {
    var response, filters, data;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return meliApi.get("".concat(search, "?q=").concat(req.query.q, "&limit=").concat(productsLimit));

          case 3:
            response = _context.sent;

            if (!(response.data.length === 0)) {
              _context.next = 7;
              break;
            }

            res.json({});
            return _context.abrupt("return");

          case 7:
            filters = response.data.filters;
            data = {
              results: response.data.results,
              filters: filters.length ? filters[0].values[0].path_from_root : []
            };
            res.header("Access-Control-Allow-Origin", "*");
            res.send((0, _responseModel.itemResponseModel)(data));
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            next(new Error(_context.t0));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
app.get('/api/items/:id', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res, next) {
    var _yield$Promise$all, _yield$Promise$all2, item, itemDescription;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return Promise.all([meliApi.get("items/".concat(req.params.id)), meliApi.get("items/".concat(req.params.id, "/description"))]);

          case 3:
            _yield$Promise$all = _context2.sent;
            _yield$Promise$all2 = (0, _slicedToArray2.default)(_yield$Promise$all, 2);
            item = _yield$Promise$all2[0];
            itemDescription = _yield$Promise$all2[1];
            res.header("Access-Control-Allow-Origin", "*");
            res.send((0, _responseModel.detailResponseModel)(item.data, itemDescription.data));
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            next(new Error(_context2.t0));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
app.listen(3001, function () {
  return console.log('Server ready port: 3001');
});