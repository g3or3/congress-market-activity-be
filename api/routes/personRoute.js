const { PersonController } = require("../controllers");

const router = require("express").Router();

router.get("/", PersonController.getOne);

router.use("*", PersonController.notFound);

module.exports = router;
