const axios = require("axios").default;
const { print } = require("../useful_functions/console_log");

// config functions tests
const testEndPoints = async ({ codeStatus, reponse }) => {
  // Make a request for a user with a given ID
  try {
    const response = await axios.post("http://localhost:8080/log/login");
    // ----- ----- -----
    let codeStatusInt = Number(response.status);
    let responseString = String(response["data"].message);
    // ----- ----- -----
    print(response.status);
    print(response["data"].message);

    if (codeStatus == codeStatusInt) {
      print("status code exact : "+codeStatus);
    } else {
      print("status code inexact echec test");
    }
  } catch (error) {
    print(error);
  }
};

testEndPoints({ codeStatus: 200, reponse: "login path test" });
