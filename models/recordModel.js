const knex = require("../config/knex");

class Record {
	async getByYear(year, limit) {
		let res = await knex
			.select("*")
			.from("person as p")
			.join("record as r", "r.doc_id", "p.doc_id")
			.whereRaw(`EXTRACT(year from date) = ${year}`)
			.orderBy("date", "desc");

		res = res.reduce((acc, curr, currIdx) => {
			if (currIdx < limit && curr.ticker && curr.company.length <= 20) {
				const { doc_id, first_name, last_name, url } = curr;

				const { id, ticker, company, asset, type, date, amount_range, description } =
					curr;

				const transaction = {
					id,
					ticker,
					company,
					asset,
					type,
					date,
					amount_range,
					description,
				};

				if (acc[doc_id]) {
					acc[doc_id].transactions.push(transaction);
				} else {
					acc[doc_id] = {
						doc_id,
						first_name,
						last_name,
						url,
						transactions: [transaction],
					};
				}
			}
			return acc;
		}, {});

		return Object.values(res);
	}
	async getByDocId(doc_id) {
		const res = await knex
			.select("url", "r.*")
			.from("record as r")
			.join("person as p", "p.doc_id", "r.doc_id")
			.where("r.doc_id", `${doc_id}`);

		return {
			doc_id,
			url: res[0]?.url,
			data: res.map((transaction) => {
				delete transaction.doc_id;
				delete transaction.url;
				return transaction;
			}),
		};
	}
}

module.exports = new Record();
