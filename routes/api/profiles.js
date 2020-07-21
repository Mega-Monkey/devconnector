const express = require("express");
const router = express.Router();

// @routes  Get api/profiles/test
// @desc    Test profiles route
// @access  Public
router.get("/test", (rep, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
