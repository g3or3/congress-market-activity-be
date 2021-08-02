const knex = require("../config/knex");

class Person {
	async findAll(limit, offset) {
		return await knex("person")
			.distinctOn("last_name")
			.orderBy("last_name")
			.limit(limit)
			.offset(offset);
	}
}

module.exports = new Person();
