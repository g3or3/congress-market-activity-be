const Controller = require("./baseController");
const {
	fetchByYear,
	fetchById,
	fetchMostTransacted,
	fetchMostRecent,
} = require("../services/record");

class RecordController extends Controller {
	constructor() {
		super();
		this.errMsg = "Unable to fetch records from the database.";
	}

	getByYear = async (req, res, next) => {
		const { year, limit } = req.query;

		try {
			res.json(await fetchByYear(year, limit));
		} catch (err) {
			next({ message: this.errMsg });
		}
	};

	getByDocId = async (req, res, next) => {
		const { docId } = req.params;

		try {
			res.json(await fetchById(docId));
		} catch (err) {
			next({ message: this.errMsg });
		}
	};

	getMostTransacted = async (req, res, next) => {
		try {
			res.json(await fetchMostTransacted());
		} catch (err) {
			next({ message: this.errMsg });
		}
	};

	getMostRecent = async (req, res, next) => {
		try {
			res.json(await fetchMostRecent());
		} catch (err) {
			next({ message: this.errMsg });
		}
	};
}
module.exports = new RecordController();
