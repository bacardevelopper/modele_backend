/* import modules */
const express = require("express");
const helmet = require("helmet");
const { print } = require("./useful_functions/console_log");

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
const routes = {
  logRoutes: require("./api_routes/log_routes"),
  businessRoutes: require("./api_routes/business_routes"),
};

// global middleware
main_express.use("/log", routes.logRoutes);
main_express.use("/crud", routes.businessRoutes);

// run
main_express.listen(PORT, () => {
  print("############################################");
  print(`# server running at: http://localhost:${PORT} #`);
  print("############################################");
});
