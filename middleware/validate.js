const posts = require("../posts/postDb");

function validatePostId() {
  return (req, res, next) => {
    posts
      .getById(req.params.id)
      .then(post => {
        if (post) {
          req.post = post;
          next();
        } else {
          res.status(404).json({
            message: "Post not found"
          });
        }
      })
      .catch(err => {
        next(err);
      });
  };
}

function validatePostData() {
  return (req, res, next) => {
    if (!req.body.text) {
      return res.status(400).json({
        message: "Missing input fields."
      });
    }
    next();
  };
}

module.exports = {
  validatePostId,
  validatePostData
};
