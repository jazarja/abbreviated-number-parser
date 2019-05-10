'use strict';

var expect = require('chai').expect;
var parser = require('../index');

describe('abbreviated-number-parser', function () {
    it('should parse abbreviated number', function () {
        var result = parser("100k");
        expect(result).to.equal(100000);
    });

    it('should parse abbreviated number (with decimal)', function () {
        var result = parser("100.5k");
        expect(result).to.equal(100500);
    });

    it('should parse abbreviated number (with decimal)', function () {
        var result = parser("30.0 M");
        expect(result).to.equal(30000000);
    });
});