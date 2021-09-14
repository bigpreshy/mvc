const express = require("express");

const {
  registerView,
  loginView,
  registerUser,
  loginUser,
} = require("../controllers/loginController");
const { dashboardView } = require("../controllers/dashboardController");
const { protectRoute } = require("../auth/protect");

const router = express.Router();

router.get("/register", registerView);
router.get("/login", loginView);
//Dashboard
router.get("/dashboard", protectRoute, dashboardView);

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
