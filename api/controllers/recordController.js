const Controller = require("./baseController");
const { Record } = require("../../models");

class RecordController extends Controller {
	async getByYear(req, res, next) {
		let { year, limit } = req.query;

		year = year ? year : new Date().getFullYear();
		limit = limit ? limit : 50;

		try {
			res.json(await Record.getByYear(year, limit));
		} catch (err) {
			console.log(err);
			next({ message: "Unable to fetch records from the database." });
		}
	}

	async getByDocId(req, res, next) {
		const { doc_id } = req.params;

		try {
			res.json(await Record.getByDocId(doc_id));
		} catch (err) {
			next({ message: "Unable to fetch records from the database." });
		}
	}
}
module.exports = new RecordController();
