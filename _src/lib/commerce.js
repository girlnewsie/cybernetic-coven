require("dotenv").config();

const CommerceSDK = require("@chec/commerce.js");

exports.client = new CommerceSDK(
  process.env.CHEC_PUBLIC_KEY
);
