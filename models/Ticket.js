const { uid } = require("uid");

class Ticket {
  constructor(username, price) {
    this.id = uid();
    this.username = username;
    this.price = price;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Ticket;
