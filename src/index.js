const axios = require("axios");

let APIURL = "https://api.recommend.co";
let APIKEY = "";

function initSdk(apiKey, customUrl) {
  APIKEY = apiKey;
  if (customUrl != '' && customUrl != undefined) {
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
    phone: '',
    orderNumber: '',
    cartTotal: ''
  };

  try {
    var response = await axios.post(APIURL + "/apikeys", data);
    console.info(response);
    if (response.status == 200) {
      return true;
    }
    else {
      return false;
    }
  }
  catch (ex) {
    console.error(ex);
    return false;
  }

}
async function referralCheck(code, email, phone, orderNumber, cartTotal) {
  const data = {
    code: code,
    apiToken: APIKEY,
    email: email,
    phone: phone,
    orderNumber: orderNumber,
    cartTotal: cartTotal
  };

  try {
    var response = await axios.post(APIURL + "/apikeys", data);
    console.info(response);
    if (response.status == 200) {
      return true;
    }
    else {
      return false;
    }
  }
  catch (ex) {
    console.error(ex);
    return false;
  }
}

module.exports =
{
  initSdk,
  testApiConnection,
  referralCheck
}