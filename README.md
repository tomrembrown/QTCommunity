# Community Website - Queer Toronto

This IS a Single Page Application that has the code for a community website that provides a list of organizations and a calendar of events.  This is the Queer Toronto version of the web application.  It is built using PostgreSQL 10, NodeJS, Express, VUE, and BootStrap-VUE (a variant of Bootstrap 4 that replaces the jQuery JS code with Vue JS code.)  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
A Linux OS
NodeJS
NPM
Grunt
Vue CLI
PostgreSQL 10 with postgresql-contrib
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

Create environment file (copy either .env_prod or .env_dev)

```
cp .env_development .env
```

Determine port postgres runs on

```
sudo netstat -plunt |grep postgres
```

Adjust parameters in .env as necessary (such as postgres port)

Build PostgreSQL initial database and add extension. 

```
su - postgres (enter postgres user password)
psql --port (port determined for postgresql server)
CREATE DATABASE queer_toronto;
CREATE ROLE qt_computer_access WITH ENCRYPTED PASSWORD (enter password here);
GRANT ALL PRIVILEGES ON DATABASE queer_toronto TO qt_computer_access;
ALTER ROLE "qt_computer_access" WITH LOGIN;
CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;
\c queer_toronto
CREATE EXTENSION IF NOT EXISTS citext;
```

Create the database tables

```
npm run createDatabase
```

Increase the number of watches allowed for nodemon to work properly

```
echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

For development mode, start the server

```
npm run dev
```

In development mode, run webpack-dev server in browser at localhost:8080

For production mode, first build the bundles

```
npm run build
```

In development mode, run the node-express server at localhost:3000

## Running the tests

Running the command 'grunt' in the project directory to run the tests.

### What the tests do

These tests handle linting with jshint, link checking, and some cross-page and unit tests.

## Built With

* [Node.JS](https://nodejs.org/) - JavaScript runtime that allows server-side JavaScript
* [Express](https://expressjs.com/) - Backend framework
* [PostgreSQL 11](https://www.postgresql.org/) - Database
* [Vue.js](https://vuejs.org/) - Frontend framework
* [Bootstrap + Vue](https://bootstrap-vue.js.org/) - Bootstrap based responsive web framework

## Contributing

This is a proprietary project.  Please ask Tom Brown (tom@tomrembrown.com) to add you to the private github repository in order to contribute.

## Authors

* **Tom Brown** - *Initial work*
* **David Yim** - *Access APIs to gather event data automatically*

See also the list of [contributors](https://github.com/tomrembrown/QTCommunity/contributors) who participated in this project.

## License

This project is proprietary - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Following along Ethan Brown's book 'Web Development with Node & Express' was useful
* Watching the NodeJS - The Complete Guide by Maximilian Schwarzmuller on udemy.com was helpful to upgrade the node and express to the latest ES2016 code.
* The series "You Don't Know JS" by Kyle Simpson was helpful to make sure the JavaScript was coded properly.
* Super sweet David Yim has provided much advice, support and encouragement :-)
