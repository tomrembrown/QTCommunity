'use strict';

module.exports = (grunt) => {
	// load plugins
	[
		'grunt-mocha-test',
		'grunt-contrib-jshint',
		'grunt-exec'
	].forEach(function(task){
		grunt.loadNpmTasks(task);
	});

	//configuree plugins
	grunt.initConfig({
		mochaTest: {
			test: {
				options: {
					report: 'spec'
				},
				src: ['qa/test-*.js']
			}
		},
		jshint: {
			app: ['index.js', 'public/js/**/*.js','lib/**/*.js'],
			qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
			options: {
				esversion: 6,
				strict: "global",
				node: true,
				globals: {
					"suite": true,
					"assert": true,
					"document": true,
					"test": true,
					"$": true
				}
			}
		}, 
		exec: {
			linkchecker: 
				{ cmd: 'linkchecker http://localhost:3000' }
		}

	});

	// register tasks
	grunt.registerTask('default', ['mochaTest','jshint','exec']);

};