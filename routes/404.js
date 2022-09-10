const express = require("express");
const router = express.Router();
const _404 = require("../controllers/error");

router.use(_404.pageNotFound);

module.exports = router;
