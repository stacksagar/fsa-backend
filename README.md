# Lottery APIs `/api/v1/tickets`

- create/sell `ticket/tickets`

  - /sell `POST` `create ticket`
  - /sell-bulk `POST` `create multiple tickets`

- read/find `GET` `tickets`

  - /all `GET` `all tickets`
  - /t/:ticketId `GET` `read single ticket by ticket ID`
  - /u/:username `GET` `read single or multiple ticket by username`

- update ticket

  - /t/:ticketId `PUT` `update single ticket by id`
  - /u/:username `PUT` `update single or multiple ticket by username`

- delete lottery ticket

  - /t/:ticketId `DELETE` `delete single ticket by id`
  - /u/:username `DELETE` `delete single or multiple ticket by username`

- raffle draw
  - /draw?winnerCount=3 `GET` `get random few winners from tickets`

# Ticket Properties:

- number (unique)
- username
- price
- timestamp
  - createdAt
  - updatedAt
