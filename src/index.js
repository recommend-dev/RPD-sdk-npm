const http = require("https");

let APIURL = "https://api.recommend.co";
let APIKEY = "";

function initSdk(apiKey, customUrl)
{
    APIKEY = apiKey;
    if (customUrl != '') APIURL = customUrl;
}

function testApiConnection()
{
    console.log("checking API connection");

    const options = {
        "method": "POST",
        "hostname": APIURL,
        "port": null,
        "path": "/apikeys",
        "headers": {
          "Content-Type": "",
          "Accept": "",
          "Accept-Encoding": "",
          "Connection": ""
        }
      };
      
      const req = http.request(options, function (res) {
        const chunks = [];
      
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        res.on("end", function () {
          const body = Buffer.concat(chunks);
          console.log(body.toString());
        });
      });
      
      req.write(JSON.stringify({
        code: 'test-connection',
        apiToken: APIKEY,
        email: '',
        phone: ''
      }));
      req.end();
}

function referralCheck(code, email, phone)
{
    console.log("Checking code: " + code);
}

module.exports = 
{
    init: initSdk,
    testConnection: testApiConnection,
    checkReferral : referralCheck
}