'use strict';

const LENGTH = 250;
const currencies = ['USD', 'JPY', 'EUR'];

class Database {

  async query() {
    return {
      transactions: new Array(LENGTH).fill(null).map((_, i) => {
        return {
          name: `Person ${LENGTH - i}`,
          date: new Date(2018, 1, 1, -i),
          amount: i + 0.02,
          currency: currencies[i % currencies.length]
        }
      })
    };
  }
}

module.exports = Database;
