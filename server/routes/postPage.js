const router = require("express").Router();
const New = require("../models/New");

router.get("/", async (req, res) => {
  console.log(req.params.id);
  // let post = await New.findById(req.params.id);
  // .then(data => res.json(data))
  // .catch(err => res.json(err))
});

module.exports = router;
