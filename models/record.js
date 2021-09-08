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

	async getByDocId(docId) {
		const res = await knex
			.select("url", "r.*")
			.from("record as r")
			.join("person_to_record as ptr", "ptr.doc_id", "r.doc_id")
			.where("r.doc_id", `${docId}`);

		return {
			docId,
			url: res[0]?.url,
			transactions: res.map((record) => {
				delete record.doc_id;
				delete record.url;
				record.date = record.date.toLocaleDateString();
				return record;
			}),
		};
	}

	async getMostTransacted(year) {
		return await knex
			.distinct("company", "ticker")
			.count("company as total")
			.from("record")
			.whereRaw(`EXTRACT(year from date) = ${year}`)
			.groupBy("company", "ticker")
			.orderBy("total", "desc")
			.limit(25);
	}

	async getMostRecent(year) {
		const res = await knex
			.select(
				"ptr.doc_id",
				"r.record_id",
				"first_name",
				"last_name",
				"ticker",
				"company",
				"asset",
				"type",
				"date",
				"amount_range",
				"description",
				"url"
			)
			.from("record as r")
			.join("person_to_record as ptr", "ptr.doc_id", "r.doc_id")
			.join("person as p", "p.person_id", "ptr.person_id")
			.whereRaw(`EXTRACT(year from date) = ${year}`)
			.orderBy("date", "desc")
			.limit(200);

		return res.map((record) => {
			record.date = record.date.toLocaleDateString();
			return record;
		});
	}
}

module.exports = new Record();
