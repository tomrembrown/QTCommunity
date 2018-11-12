# Community Website - Queer Toronto

This will be a Single Page Application that has the code for a community website that provides a list of organizations and a calendar of events.  This is the Queer Toronto version of the web application.  It will be built using PostgreSQL, NodeJS, Express, VUE, and VueStrap (a variant of Bootstrap 4 that 
replaces the jQuery JS code with Vue JS code.)  Currently it just has NodeJS, Express, and BootStrap 4.  There is no database or Vue.js at the moment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
A Linux OS
NodeJS
NPM
Grunt
Vue CLI
```

### Installing

Clone GIT repository and download

```
git clone https://github.com/tomrembrown/QTCommunity
```

Build NPM script

```
npm install
```

Build PostgreSQL initial database.  Database to come in the future.

Start the Server

```
npm start
```

## Running the tests

Running the command 'grunt' in the project directory to run the tests.

### What the tests do

These tests handle linting with jshint, link checking, and some cross-page and unit tests.

## Built With

* [Node.JS](https://nodejs.org/) - JavaScript runtime that allows server-side JavaScript
* [Express](https://expressjs.com/) - Backend framework
* [PostgreSQL 10](https://www.postgresql.org/) - Database
* [Vue.js](https://vuejs.org/) - Frontend framework
* [VueStrap](https://wffranco.github.io/vue-strap/) - Bootstrap based responsive web framework

## Contributing

This is a proprietary project.  Please ask Tom Brown (tom@tomrembrown.com) to add you to the private github repository in order to contribute.

## Authors

* **Tom Brown** - *Initial work*

See also the list of [contributors](https://github.com/tomrembrown/QTCommunity/contributors) who participated in this project.

## License

This project is proprietary - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Following along Ethan Brown's book 'Web Development with Node & Express' was useful
* Watching the NodeJS - The Complete Guide by Maximilian Schwarzmuller on udemy.com was helpful to upgrade the node and express to the latest ES2016 code.
* The series "You Don't Know JS" by Kyle Simpson was helpful to make sure the JavaScript was coded properly.
* Super sweet David Yim has provided much advice, support and encouragement :-)
