module.exports = (queryResults, limit) => {
	return queryResults.reduce((acc, curr, currIdx) => {
		if (currIdx < limit && curr.ticker && curr.company.length <= 20) {
			const { doc_id, first_name, last_name, url } = curr;

			const { id, ticker, company, asset, type, date, amount_range, description } = curr;

			const transaction = {
				id,
				ticker,
				company,
				asset,
				type,
				date: date.toLocaleDateString(),
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
};
