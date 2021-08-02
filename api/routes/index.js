module.exports = (server) => {
	server.use("/", (req, res) => {
		res.send("working");
	});
	server.use("/api/person", require("./personRoute"));
	server.use("/api/record", require("./recordRoute"));
};
