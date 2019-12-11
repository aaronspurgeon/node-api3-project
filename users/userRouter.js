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

router.get("/:id/posts", (req, res) => {
  // do your magic!
});

router.delete("/:id", (req, res) => {
  // do your magic!
});

router.put("/:id", (req, res) => {
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

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
