// import modules
const axios = require("axios").default;
const { print } = require("../../useful_functions/console_log");

// config functions tests
function compareStatusCode(codeStatus, codeStatusComp) {
  if (codeStatus === codeStatusComp) {
    print("status code exact : " + codeStatus);
  } else {
    print("status code inexact echec test");
  }
}

function compareMessage(message, messageComp) {
  if (message === messageComp) {
    print("message exact : " + message);
  } else {
    print("message inexact echec test");
  }
}

// config function test
exports.testEndPoints = async ({ codeStatus, reponse, comment }) => {
    print(comment);
  // Make a request for a user with a given ID
  try {
    const response = await axios.post("http://localhost:8080/log/login");
    // ----- ----- -----
    let codeStatusInt = Number(response.status);
    let responseString = String(response["data"].message);
    // ----- ----- -----
    compareStatusCode(codeStatusInt, codeStatus);
    compareMessage(reponse, responseString);

    // ----- ----- -----
  } catch (error) {
    print(error.code);
  }
};

/*
// testEndPoints({ codeStatus: 200, reponse: "login path test" });
exports.testEndPoints;
*/
