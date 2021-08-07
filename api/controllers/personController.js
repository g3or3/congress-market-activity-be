const Controller = require("./baseController");
const { Person } = require("../../models");

class PersonController extends Controller {
	async getAll(req, res, next) {
		let { page, limit } = req.query;

		const offset = (parseInt(page) - 1) * parseInt(limit);

		try {
			res.json(await Person.getAllPeople(limit, offset));
		} catch (err) {
			next({ message: "Unable to fetch people from the database." });
		}
	}

	async getByPersonId(req, res) {
		const { person_id } = req.params;

		res.json(await Person.getDocsByPersonId(person_id));
	}
}

module.exports = new PersonController();
