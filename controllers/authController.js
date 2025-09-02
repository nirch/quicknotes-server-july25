const authModel = require("../models/authModel.js");
const jwt = require("jsonwebtoken");

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      next({ status: 400, message: "email or password missing" });
    }
    const user = await authModel.login(email, password);
    if (!user) {
      next({ status: 401, message: "invalid email or password" });
    }

    const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: "24h"});
    res.status(200).json({token, user});
  } catch (err) {
    next({ status: 401, message: err });
  }
}

module.exports = { login };
