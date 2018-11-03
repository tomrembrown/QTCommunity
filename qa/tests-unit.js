'use strict';

const quote = require('../lib/quotes.js');
const expect = require('chai').expect;

suite('Quotes tests', () => {

	test('getQuote() should return a quote', () => {
		expect(typeof quote.getQuote() === 'object');
	});


});