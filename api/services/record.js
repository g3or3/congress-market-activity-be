const { Record } = require("../../models");

const fetchByYear = async (year, limit) => {
	year = year ? year : new Date().getFullYear();
	limit = limit ? limit : 50;
	return await Record.getByYear(year, limit);
};

const fetchById = async (doc_id) => {
	return await Record.getByDocId(doc_id);
};

const fetchMostTransacted = async () => {
	const year = new Date().getFullYear();
	return await Record.getMostTransacted(year);
};

const fetchMostRecent = async () => {
	const year = new Date().getFullYear();
	return await Record.getMostRecent(year);
};

module.exports = {
	fetchByYear,
	fetchById,
	fetchMostTransacted,
	fetchMostRecent,
};
