const express = require("express");
const router = express.Router();
const _404 = require("../controllers/pageNotFound");

router.use(_404.pageNotFound);

module.exports = router;
