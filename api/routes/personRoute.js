const { PersonController } = require("../controllers");

const router = require("express").Router();

router.get("/", PersonController.getAll);

router.use("*", PersonController.notFound);

module.exports = router;
