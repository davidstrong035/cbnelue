var nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "thecentbn.com",
  secureConnection: true,
  port: 465,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: "noreply@thecentbn.com", // Generated eheereal User
    pass: "tw+F63L7Y0d;Pe", // Generated etheral pass
  },
});

function sendEmailNotification(mailOptions) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      console.log("(Confirmation) Message Sent: %s", info.messageId);
      resolve(info.messageId);
    });
  });
}

module.exports = sendEmailNotification;
