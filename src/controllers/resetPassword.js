const express = require("express");
const router = express.Router();
const User = require("../models/login");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { email, oldPassword, newPassword, confirmPassword } = req.body;

  try {
    // Check if the provided email and old password match
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(oldPassword, user.password))) {
      return res.status(400).json({ message: "Invalid email or old password" });
    }

    // Check if the new password and confirm password match
    if (newPassword !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "New password and confirm password do not match" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;