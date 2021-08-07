const knex = require("../config/knex");

class Person {
	async getAllPeople(limit, offset) {
		let res = knex("person").distinctOn("last_name").orderBy("last_name");

		if (limit) res = res.limit(limit).offset(offset);

		return await res;
	}

	async getDocsByPersonId(person_id) {
		const res = await knex
			.select("ptr.doc_id", "date")
			.from("person_to_record as ptr")
			.join("record as r", "r.doc_id", "ptr.doc_id")
			.where({ person_id });

		return res.map((record) => {
			record.date = record.date.toLocaleDateString();
			return record;
		});
	}
}

module.exports = new Person();
