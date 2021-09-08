const { RecordController } = require("../controllers");

const router = require("express").Router();

router.get("/", RecordController.getByYear);

router.get("/most-transacted", RecordController.getMostTransacted);

router.get("/most-recent", RecordController.getMostRecent);

router.get("/:docId", RecordController.getByDocId);

router.use("*", RecordController.notFound);

module.exports = router;
