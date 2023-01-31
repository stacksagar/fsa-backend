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
    return this.ticket;
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
  draw(winners_count) {
    const index_of_winners = new Array(winners_count);

    for (let i = 0; i < index_of_winners.length; i++) {
      let random_index = Math.floor(Math.random() * this.tickets.length);
      while (index_of_winners.indexOf(random_index) > -1) {
        random_index = Math.floor(Math.random() * this.tickets.length);
      }
      index_of_winners.push(random_index);
    }

    return index_of_winners.map((index) => this.tickets[index]);
  }

  //
}

const myDB = new MyDB();
module.exports = myDB;
