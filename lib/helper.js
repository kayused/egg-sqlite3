'use strict';

const sqlite3 = require('sqlite3').verbose();

class helper {
    constructor(database) {
        this.database = database;
        this.db = new sqlite3.Database(this.database);
    };

    close() {
        return new Promise((resolve, reject)=>{
            this.db.close();
        });
    };

    run(sql, paramArray) {
        return new Promise((resolve, reject)=>{
            this.db.run(sql, paramArray, (err)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(this);
                }
            });
        });
    };

    get(sql, paramArray) {
        return new Promise((resolve, reject)=>{
            this.db.get(sql, paramArray, (err, row)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    };

    all(sql, paramArray) {
        return new Promise((resolve, reject)=>{
            this.db.all(sql, paramArray, (err, rows)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    };

    prepare(sql, paramArray) {
        return new Promise((resolve, reject)=>{
            this.db.prepare(sql, paramArray, (err, rows)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    };
};

module.exports = helper;