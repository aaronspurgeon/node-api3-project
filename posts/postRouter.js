const express = require("express");
const db = require("./postDb");
const { validatePostId } = require("../middleware/validate");
const router = express.Router();

router.get("/", (req, res, next) => {
  // do your magic!
  const opts = {
    limit: req.query.limit,
    sortby: req.query.sortby,
    sortdir: req.query.sortdir
  };

  db.get()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      // res.status(500).json({
      //   message: "Error Retrieving post."
      // });
      next(err);
    });
});

router.get("/:id", validatePostId(), (req, res) => {
  // do your magic!
  res.json(req.post);
});

router.delete("/:id", (req, res) => {
  // do your magic!
});

router.put("/:id", (req, res) => {
  // do your magic!
});

// custom middleware

module.exports = router;
