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

  if (pageFrom != "contact" && pageFrom != "article") {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Bad request" }),
    };
  }

  const emailData = {
    name: body.name,
    lastname: body.lastname,
    phone: body.phone,
    email: body.email,
    country: body.country,
    state: body.state,
    city: body.city,
    company: body.company,
    source: body.source,
    comments: body.comments,
  };

  const subject = `Message from ${pageFrom} by ${emailData.name} ${emailData.lastname} (${emailData.language})`;
  const textBoyd = `
    Full name: ${emailData.name} ${emailData.lastname}
    phone: ${emailData.phone}
    email: ${emailData.email}
    country: ${emailData.country}
    state: ${emailData.state}
    city: ${emailData.city}
    company: ${emailData.company}
    How did you hear about NUTEC: ${emailData.name}
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
