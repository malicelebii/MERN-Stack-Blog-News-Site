const router = require("express").Router();
const New = require("../models/New");

router.get("/:id", async (req, res) => {
  let post = await New.findById(req.params.id)
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

module.exports = router;
