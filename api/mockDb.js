'use strict';

class Database {

  async query() {
    return {
      transactions: new Array(250).fill(null).map((_, i) => {
        return {
          name: `Person ${i}`,
          date: new Date(2018, 1, 1, i),
          amount: i + 0.02,
          currency: 'USD'
        }
      })
    };
  }
}

module.exports = Database;
