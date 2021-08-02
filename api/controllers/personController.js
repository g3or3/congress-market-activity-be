const Controller = require("./baseController");
const { Person } = require("../../models");

class PersonController extends Controller {
	async getAll(req, res, next) {
		const { page, limit } = req.query;
		const offset = (parseInt(page) - 1) * parseInt(limit);

		try {
			res.json(await Person.findAll(limit, offset));
		} catch (err) {
			next({ message: "Unable to fetch people from the database." });
		}
	}
}

module.exports = new PersonController();
