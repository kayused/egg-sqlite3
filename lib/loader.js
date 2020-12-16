'use strict';

const helper = require('./helper');

module.exports = app => {
    app.addSingleton('sqlite3', createOneClient);
};

async function createOneClient(config, app) {
    return new helper(config.file);
}