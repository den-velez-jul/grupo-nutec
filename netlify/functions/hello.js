const nodemailer = require("nodemailer");

exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ error: "Hello Nutec" }),
  };
};
