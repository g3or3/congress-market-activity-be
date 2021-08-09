const { RecordController } = require("../controllers");

const router = require("express").Router();

router.get("/", RecordController.getByYear);

router.get("/most_transacted", RecordController.getMostTransacted);

router.get("/:doc_id", RecordController.getByDocId);

router.use("*", RecordController.notFound);

module.exports = router;
