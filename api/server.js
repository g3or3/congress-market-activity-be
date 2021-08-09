const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const server = express();

server.use(express.json());
server.use(cors());

require("./routes")(server);

server.use(errorHandler);

module.exports = server;
