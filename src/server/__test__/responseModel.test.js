import * as chai from 'chai';

const expect = chai.expect;
const fs = require('fs')
const responseModel = require('../responseModel');
let data = {},
    data2 = {},
    expected = {};

describe('Response Model code test', ()=>{
    describe('ItemResponseModel', () => {
        beforeEach (() => {
            data = JSON.parse(fs.readFileSync(__dirname + '/../__mockData__/itemsResponse.json'));
            expected = JSON.parse(fs.readFileSync(__dirname + '/../__mockData__/itemsExpected.json'));
        });

        it("should set model to response", () => {
            expect(responseModel.itemResponseModel(data)).to.be.deep.equal(expected);
        });

        it("should return empty categories", () => {
            data.filters = [];
            expected.categories = [];
            expect(responseModel.itemResponseModel(data)).to.be.deep.equal(expected);
        });
    });

    describe('detailResponseModel', () => {
        beforeEach (() => {
            data = JSON.parse(fs.readFileSync(__dirname + '/../__mockData__/detailResponse.json'));
            data2 = JSON.parse(fs.readFileSync(__dirname + '/../__mockData__/descriptionResponse.json'));
            expected = JSON.parse(fs.readFileSync(__dirname + '/../__mockData__/detailDescriptionExpected.json'));
        });

        it("should set model to response", () => {
            expect(responseModel.detailResponseModel(data, data2)).to.be.deep.equal(expected);
        });
    });
});