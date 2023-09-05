const postmark = require("postmark");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Bad request, method not allowed" }),
    };
  }

  const payload = JSON.parse(event.body);
  const body = payload.payload;

  const pageFrom = body.page;

  if (pageFrom != "career") {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Bad request" }),
    };
  }

  const emailData = {
    name: body.name,
    country: body.country,
    email: body.email,
    phone: body.phone,
    comments: body.comments,
  };

  const subject = `Message from ${pageFrom} by ${emailData.name} ${emailData.lastname}`;
  const textBoyd = `
    Full name: ${emailData.name}
    country: ${emailData.country}
    email: ${emailData.email}
    phone: ${emailData.phone}
    commets: ${emailData.name}
  `;

  try {
    const client = new postmark.ServerClient(process.env.API_KEY);

    const response = await client.sendEmail({
      From: process.env.SENDER_EMAIL,
      To: process.env.RECEIVER_EMAIL,
      Subject: subject,
      TextBody: textBoyd,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred while sending the email",
      }),
    };
  }
};
