const Controller = require("./baseController");
const { fetchAllPeople, fetchRecordsByPersonId } = require("../services/person");

class PersonController extends Controller {
	constructor() {
		super();
		this.errMsg = "Unable to fetch people from the database.";
	}

	getAll = async (req, res, next) => {
		let { page, limit } = req.query;

		try {
			res.json(await fetchAllPeople(page, limit));
		} catch (err) {
			next({ message: this.errMsg });
		}
	};

	getByPersonId = async (req, res, next) => {
		const { personId } = req.params;

		try {
			res.json(await fetchRecordsByPersonId(personId));
		} catch (err) {
			next({ message: this.errMsg });
		}
	};
}

module.exports = new PersonController();
