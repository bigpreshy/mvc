
const User = require("../models/User");


//For Register Page
const dashboardView = (req, res) => {
  let title = "Dashboard";

  res.render("dashboard", {
    title: title,
  });
};


module.exports = {
  dashboardView,
};
