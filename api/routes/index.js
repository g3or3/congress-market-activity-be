module.exports = (server) => {
	server.use("/api/person", require("./person"));
	server.use("/api/record", require("./record"));

	server.use(require("../middleware/errorHandler"));

	server.use("/", (req, res) => {
		res.json({ message: "Server is running." });
	});
};
