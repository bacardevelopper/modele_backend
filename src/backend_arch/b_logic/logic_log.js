const { print } = require("../useful_functions/console_log");

exports.login_userControleur = (req, res, next) => {
  res.status(200).json({ message: "login path test" });
};
exports.create_userCotroleur = (req, res, next) => {
  print("singup path test");
  res.status(200).json({ message: "signup path test" });
};
