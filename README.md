# Recommend API SDK

This is SDK for connecting with [Recommend, Inc. platform](https://www.recommend.co/). If you need any support contact support@recommend.co

# Using the SDK

First, you need to obtain your API key [here](https://www.recommend.co/partners/api-keys).  When you have obtained your API key, you can use our SDK, either built from source here (from master branch) or using [NPM package](https://www.npmjs.com/package/@recommendworld/rpd-npm-sdk). We have other integration options too - for details, please check our [developer documentation](https://about.recommend.co/api-docs/).

## Initializing SDK

### When you have added package reference, you can initialize the SDK like this:

    const rcmnd = require("@recommendworld/rpd-npm-sdk")
    rcmnd.initSdk("0fe42cff-9151-4125-a2ed-133c6f3e55eb");

### You can test connection to our platform like this:

    var r = await rcmnd.testApiConnection();

### To send us referral information, when conversion occurs, send it like this:

    var conversion = await rcmnd.referralCheck("d49c3395-6e14-4a28-a9e7-3330508d77ed", "", "");

Parameters for conversion are referral code, email (optional), phone number (optional), order number (optional), cart total (optional) and session id (from query string received with referral code - optional).


### Conversion can be approved or rejected using API:

    var approveResult = await rcmnd.approveConversion(conversionIdYouReceivedFromReferralCheck);
    var rejectResult = await rcmnd.rejectConversion(conversionIdYouReceivedFromReferralCheck);