const express = require("express");

const server = express();

server.use(express.json());

server.use(require("cors")());

require("./routes")(server);

module.exports = server;
