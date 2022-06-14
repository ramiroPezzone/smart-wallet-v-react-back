const express = require("express");
const passport = require("passport");
const router = express.Router();
const rootUri = process.env.ROOT_URI
const welcomeUri = process.env.WELCOME_SCREEN

// @desc    Auth whit google
// @route   GET /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect(welcomeUri)
  }
);

// @desc    Logout
// @route   GET /auth/logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(rootUri);
});

module.exports = router;
