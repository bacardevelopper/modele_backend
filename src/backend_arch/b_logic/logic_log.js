const { print } = require("../fct_utiles_et_test/console_log");

exports.login_userControleur = (req, res, next) => {
  print("login path test");
  res.status(200).json({ 'message' : "login path test"});
};
exports.create_userCotroleur = (req, res, next) => {
  print("singup path test");
  res.status(200).json({ 'message' : "signup path test"});
};
