const express = require("express");
const router = express.Router();
const go = require("../controllers/controllers");

router.get("/", go.root);

router.get("/user", go.user)

module.exports = router;
