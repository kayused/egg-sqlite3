'use strict';

module.exports = app => {
    console.log('app.config.env =', app.config.env);
    console.log('app.config.sqlite3 =', app.config.sqlite3);
    if (app.config.sqlite3.app) require('./lib/loader')(app);
};