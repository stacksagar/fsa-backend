const { uid } = require("uid");

class Ticket {
  /**
   *
   * @param {string} username
   * @param {number} price
   */
  constructor(username, price) {
    this.id = uid();
    this.username = username;
    this.price = price;
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
  }
}

module.exports = Ticket;
