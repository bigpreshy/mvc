//For Register Page
const dashboardView = (req, res) => {

  res.render("dashboard", {
    user: req.user
  });
};

module.exports = {
  dashboardView,
};
