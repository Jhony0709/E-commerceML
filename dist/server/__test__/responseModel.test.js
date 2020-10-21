"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var chai = _interopRequireWildcard(require("chai"));

var expect = chai.expect;

var fs = require('fs');

var responseModel = require('../responseModel');

var data = {},
    data2 = {},
    expected = {};
describe('Response Model code test', function () {
  describe('ItemResponseModel', function () {
    beforeEach(function () {
      data = JSON.parse(fs.readFileSync(__dirname + '/../__mockData__/itemsResponse.json'));
      expected = JSON.parse(fs.readFileSync(__dirname + '/../__mockData__/itemsExpected.json'));
    });
    it("should set model to response", function () {
      expect(responseModel.itemResponseModel(data)).to.be.deep.equal(expected);
    });
    it("should return empty categories", function () {
      data.filters = [];
      expected.categories = [];
      expect(responseModel.itemResponseModel(data)).to.be.deep.equal(expected);
    });
  });
  describe('detailResponseModel', function () {
    beforeEach(function () {
      data = JSON.parse(fs.readFileSync(__dirname + '/../__mockData__/detailResponse.json'));
      data2 = JSON.parse(fs.readFileSync(__dirname + '/../__mockData__/descriptionResponse.json'));
      expected = JSON.parse(fs.readFileSync(__dirname + '/../__mockData__/detailDescriptionExpected.json'));
    });
    it("should set model to response", function () {
      expect(responseModel.detailResponseModel(data, data2)).to.be.deep.equal(expected);
    });
  });
});