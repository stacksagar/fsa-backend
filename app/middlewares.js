const morgan = require("morgan");
const cors = require("cors");
const express = require("express");

const middlewares = [morgan("dev"), cors(), express.json()];

module.exports = middlewares;
