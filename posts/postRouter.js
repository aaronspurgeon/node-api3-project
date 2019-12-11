const express = require("express");
const db = require("./postDb");
const { validatePostId, validatePostData } = require("../middleware/validate");
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

router.delete("/:id", validatePostId(), (req, res, next) => {
  // do your magic!
  db.remove(req.post.id)
    .then(count => {
      res.status(200).json({
        message: "The post has been deleted"
      });
    })
    .catch(err => {
      next(err);
    });
});

router.put("/:id", validatePostData(), validatePostId(), (req, res) => {
  // do your magic!
  db.update(req.post.id, req.body)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      next(err);
    });
});

// custom middleware

module.exports = router;
