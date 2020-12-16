'use strict';

/**
 * egg-sqlite3 default config
 * @member Config#sqlite3
 * @property {String} SOME_KEY - some description
 */
exports.sqlite3 = {
    client: {
        file: 'sqlite.db',
    },
    app: true,
    agent: false,
};
