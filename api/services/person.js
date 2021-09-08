const { Person } = require("../../models");

const fetchAllPeople = async (page, limit) => {
	const offset = (parseInt(page) - 1) * parseInt(limit);
	return await Person.getAllPeople(limit, offset);
};

const fetchRecordsByPersonId = (personId) => {
	return Person.getDocsByPersonId(personId);
};

module.exports = {
	fetchAllPeople,
	fetchRecordsByPersonId,
};
