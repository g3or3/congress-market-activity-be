class Controller {
	constructor() {
		this.errMsg = "That resource does not exist.";
	}

	notFound = (req, res, next) => {
		next({ status: 403, message: this.errMsg });
	};
}

module.exports = Controller;
