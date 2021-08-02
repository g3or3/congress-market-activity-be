module.exports = (server) => {
	server.use("/api/person", require("./personRoute"));
	server.use("/api/record", require("./recordRoute"));
};
