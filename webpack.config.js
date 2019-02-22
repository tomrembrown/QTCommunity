'use strict';

const path = require('path');

const config = {
	entry: './client/main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	}
};

module.exports = config;