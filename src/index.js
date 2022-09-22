const axios = require("axios");

let APIURL = "https://api.recommend.io";
let APIKEY = "";

function initSdk(apiKey, customUrl) {
  APIKEY = apiKey;
  if (customUrl != '') {
    console.log("Recommend SDK is using custom URL: " + customUrl);
    APIURL = customUrl;
  }
}

async function testApiConnection() {
  console.log("Checking API connection");

  const data = {
    code: 'test-connection',
    apiToken: APIKEY,
    email: '',
    phone: ''
  };

  axios.post(APIURL + "/apikeys", data)
    .then((res) => {
      return res.status == 200;
    }).catch((err) => {
      console.error(err);
      return false;
    });
}

function referralCheck(code, email, phone) {
  const data = {
    code: code,
    apiToken: APIKEY,
    email: email,
    phone: phone
  };

  axios.post(APIURL + "/apikeys", data)
    .then((res) => {
      return res.status == 200;
    }).catch((err) => {
      console.error(err);
      return false;
    });
}

module.exports =
{
  init: initSdk,
  testConnection: testApiConnection,
  checkReferral: referralCheck
}