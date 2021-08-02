const express = require("express");

const server = express();

server.use(express.json());

require("./routes")(server);

server.use(require("./middleware/errorHandler"));

module.exports = server;
