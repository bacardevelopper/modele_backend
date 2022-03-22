/* les imports */
const express = require("express");
const helmet = require("helmet");
const { print } = require("./fct_utiles_et_test/console_log");

/* config */
let port_config = 8080;
const main_express = express();
const PORT = process.env.PORT || port_config;

main_express.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

main_express.use(helmet());
main_express.use(express.json());

// routes
const routes = [
  require("./api_routes/log_routes"),
  require("./api_routes/business_routes"),
];

// global middleware
main_express.use("/log", routes[0]);
main_express.use("/crud", routes[1]);

// run
main_express.listen(PORT, () => {
  print(`server running at : http://localhost:${PORT}`);
});
