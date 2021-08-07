module.exports = (server) => {
	server.use("/api/person", require("./personRoute"));
	server.use("/api/record", require("./recordRoute"));
	server.use("/", (req, res) => {
		res.status(200);
	});
};
