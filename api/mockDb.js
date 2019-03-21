'use strict';

const data = require('./mockData.json');

class Database {

  async query() {
    return data;
  }
}

module.exports = Database;
