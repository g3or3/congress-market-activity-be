const { PersonController } = require("../controllers");

const router = require("express").Router();

router.get("/", PersonController.getAll);

router.get("/:person_id", PersonController.getByPersonId);

router.use("*", PersonController.notFound);

module.exports = router;
