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

module.exports = {
  validatePostId
};
