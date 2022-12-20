const models = require("../models");

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;
  console.log("-- enter in authCon")
  console.log("Mail " ,email)
  models.user
    .findByEmailWithPassword(email)
    .then(([users]) => {
      console.log(users)
      if (users[0]) {
        [req.user] = users;
        next();
      } else res.sendStatus(401);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
};
