const asyncHandler = require("express-async-handler");
const User = require("../models/signupModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")

const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(401);
      throw new Error("all fields are mandatory");
    }
    const user = await User.findOne({ email });
    if(!user){
        res.status(404).json({message: "user not found"})
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true
      }

      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user
      })
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = { login };
