const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  // create
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  // create multiple tickets
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  // find all tickets
  find() {
    return this.tickets;
  }

  // find single ticket
  findById(ticketID) {
    const ticket = this.tickets.find(
      /**
       * @param {Ticket} ticket
       * @returns {Ticket} */
      (ticket) => ticket.id === ticketID
    );

    return ticket;
  }

  // find multiple by username
  findByUsername(username) {
    return this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === username
    );
  }

  // update by id
  updateById(ticketID, username, price) {
    const ticket = this.findById(ticketID);
    ticket.username = username || ticket.username;
    ticket.price = price || ticket.price;
    ticket.updatedAt = Date.now();

    return ticket;
  }

  // delete by id
  deleteById(ticketID) {
    const index = this.tickets.findIndex(
      /**
       *
       * @param {Ticket} t
       */
      (t) => t.id === ticketID
    );

    if (index > -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  // Find Winner Raffle Draw
  draw(winnerCount) {
    const winnersIndexes = [];

    while (winnersIndexes.length < winnerCount) {
      let newWinner = Math.floor(Math.random() * this.tickets.length);
      if (winnersIndexes.includes(newWinner)) {
        continue;
      }
      winnersIndexes.push(newWinner);
    }

    return winnersIndexes.map((index) => this.tickets[index]);
  }
}

const myDB = new MyDB();
module.exports = myDB;
