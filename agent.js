'use strict';

module.exports = agent => {
    console.log('agent.config.env =', agent.config.env);
    if (agent.config.sqlite3.agent) require('./lib/loader')(agent);
};