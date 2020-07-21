const express = require("express");
const router = express.Router();

// @routes  Get api/posts/test
// @desc    Test post route
// @access  Public
router.get("/test", (rep, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
