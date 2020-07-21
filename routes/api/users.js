const express = require("express");
const router = express.Router();

// @routes  Get api/users/test
// @desc    Test users route
// @access  Public
router.get("/test", (rep, res) => res.json({ msg: "Users Works" }));

module.exports = router;
