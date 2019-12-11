const express = require("express");
const db = require("./postDb");
const router = express.Router();

router.get("/", (req, res) => {
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
      res.status(500).json({
        message: "Error Retrieving post."
      });
    });
});

router.get("/:id", (req, res) => {
  // do your magic!
});

router.delete("/:id", (req, res) => {
  // do your magic!
});

router.put("/:id", (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
