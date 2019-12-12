module.exports = (req, res, next) => {
  let today = new Date();
  let date = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;
  let time = `${today.getHours()}:${today.getMinutes()}`;
  console.log(`${req.method} - ${req.url} - ${date} - ${time}`);
  next();
};
