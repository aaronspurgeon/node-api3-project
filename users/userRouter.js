const express = require("express");
const db = require("./userDb");
const router = express.Router();

// get,
//   getById,
//   getUserPosts,
//   insert,
//   update,
//   remove,

router.post("/", (req, res) => {
  // do your magic!
});

router.post("/:id/posts", (req, res) => {
  // do your magic!
});

router.get("/", (req, res, next) => {
  // do your magic!
  db.get()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/:id", validateUserId(), (req, res, next) => {
  // do your magic!
  res.json(req.user);
});

router.get("/:id/posts", validateUserId(), (req, res, next) => {
  // do your magic!
  db.getUserPosts(req.params.id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      next(err);
    });
});

router.delete("/:id", validateUserId(), (req, res) => {
  // do your magic!
});

router.put("/:id", validateUserId(), (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId() {
  // do your magic!
  return (req, res, next) => {
    db.getById(req.params.id)
      .then(user => {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(404).json({
            message: "Invalid user ID"
          });
        }
      })
      .catch(err => {
        next(err);
      });
  };
}

function validateUser() {
  // do your magic!
  return (req, res, next) => {
    if (!req.body) {
      return res.status(400).json({
        message: "missing user data"
      });
    } else if (!req.body.name) {
      return res.status(400).json({
        message: "missing required name field"
      });
    }
    next();
  };
}

function validatePost() {
  // do your magic!
  return (req, res, next) => {
    if (!req.body) {
      return res.status(400).json({
        message: "missing post data"
      });
    } else if (!req.body.text) {
      return res.status(400).json({
        message: "missing required text field"
      });
    }
    next();
  };
}

module.exports = router;
