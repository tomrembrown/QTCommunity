'use strict';

let quote = require('../lib/quotes.js');
let expect = require('chai').expect;

suite('Quotes tests', function(){

	test('getQuote() should return a quote', function(){
		expect(typeof quote.getQuote() === 'object');
	});


});