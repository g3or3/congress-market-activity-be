class Controller {
	notFound(req, res, next) {
		next({ status: 403, message: "That resource does not exist." });
	}
}

module.exports = Controller;
