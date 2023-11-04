const { draftMail } = require("../service/mailService");

let querymail = async (req, res, next) => {
  try {
    let { name, emails, message, mobileNo } = req.body;
    if (!emails) {
      res.status(404).json("email not sent");
    }

    draftMail(name, emails, message, mobileNo);
    res.status(200).json({ error: false, message: "mail sent" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  querymail,
};
