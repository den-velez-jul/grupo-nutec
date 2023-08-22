// import { SMTPClient } from 'emailjs'

exports.handler = async function() {

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'uno' })
  }
}

  // const data = JSON.parse(event.body)

  // const client = new SMTPClient({
  //   user: process.env.SENDER_EMAIL,
  //   password: process.env.SENDER_EMAIL_PASSWORD,
  //   host: process.env.SENDER_EMAIL_HOST,
  //   ssl: true,
  // })
  
  // try {
  //   client.send(
  //     {
  //       text: emailText || '',
  //       from: process.env.SENDER_EMAIL || '',
  //       to: process.env.RECEIVER_EMAIL || '',
  //       subject: subject || '',
  //     },
  //     (err) => {
  //       if (err) return console.log('Error: Email did not send')
  //     }
  //   )
  // } catch (e) {
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({ message: 'Error in the server' })
  //   }
  // }
  

