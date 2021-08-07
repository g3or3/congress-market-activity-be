const knex = require("../config/knex");
const shapeRecords = require("./utils/shapeRecords");

class Record {
	async getByYear(year, limit) {
		let res = await knex
			.select("*")
			.from("record as r")
			.join("person_to_record as ptr", "r.doc_id", "ptr.doc_id")
			.join("person as p", "p.person_id", "ptr.person_id")
			.whereRaw(`EXTRACT(year from date) = ${year}`)
			.orderBy("date", "desc");

		res = shapeRecords(res, limit);

		return Object.values(res);
	}

	async getByDocId(doc_id) {
		const res = await knex
			.select("url", "r.*")
			.from("record as r")
			.join("person_to_record as ptr", "ptr.doc_id", "r.doc_id")
			.where("r.doc_id", `${doc_id}`);

		return {
			doc_id,
			url: res[0]?.url,
			data: res.map((record) => {
				delete record.doc_id;
				delete record.url;
				record.date = record.date.toLocaleDateString();
				return record;
			}),
		};
	}
}

module.exports = new Record();
