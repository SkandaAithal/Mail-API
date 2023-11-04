const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "anp50675@gmail.com",
    pass: "xsnplkidhbeksqzv",
  },
});

let draftMail = async (name, emails, message, mobileNo) => {
  let mailOptions = {
    from: "anp50675@gmail.com",
    to: "anp50675@gmail.com",
    subject: "Query mail",
    html: `<h3>Hi team,</h3> <br/>
        We have received a query from ${name}, <br/>
        The query is as follows: ${message}.<br/>
        Mobile number: ${mobileNo}.<br/>
        Email: ${emails}`,
  };
  transporter.sendMail(mailOptions, () => {
    console.log(`mail sent successfully from email ${emails}`);
  });
};

module.exports = {
  draftMail,
};
