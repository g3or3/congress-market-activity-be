const { PersonController } = require("../controllers");

const router = require("express").Router();

router.get("/", PersonController.getAll);

router.get("/:personId", PersonController.getByPersonId);

router.use("*", PersonController.notFound);

module.exports = router;
