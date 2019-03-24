'use strict';

const PAGE_SIZE = 50;
const LENGTH = 250;
const currencies = ['USD', 'JPY', 'EUR'];

const transactions = new Array(LENGTH).fill(null).map((_, i) => {
  return {
    name: `Person ${LENGTH - i}`,
    date: new Date(2018, 1, 1, -i),
    amount: i + 0.02,
    currency: currencies[i % currencies.length]
  }
});

class Database {

  async query({ page }) {
    const startIdx = page * PAGE_SIZE;
    return { transactions: transactions.slice(startIdx, startIdx + PAGE_SIZE) };
  }
}

module.exports = Database;
