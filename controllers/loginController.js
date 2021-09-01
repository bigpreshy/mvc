const User = require("../models/User");
const bcrypt = require("bcryptjs");

//For Register Page
const registerView = (req, res) => {
  let title = "Register";

  res.render("register", {
    title: title,
  });
};

//Post Request for Register

const registerUser = (req, res) => {
  const { name, email, location, password, confirm } = req.body;

  if (!name || !email || !password || !confirm) {
    console.log("Fill empty fields");
  }

  //Confirm Passwords

  if (password !== confirm) {
    console.log("Password must match");
  } else {
    //Validation
    User.findOne({ email: email }).then((user) => {
      if (user) {
        console.log("email exists");
        res.render("register", {
          name,
          email,
          password,
          confirm,
        });
      } else {
        //Validation
        const newUser = new User({
          name,
          email,
          location,
          password,
        });
        //Password Hashing
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            newUser
              .save()
              .then(res.redirect("/login"))
              .catch((err) => console.log(err));
          })
        );
      }
    });
  }
};

// For View
const loginView = (req, res) => {
  let title = "Login";

  res.render("login", {
    title: title,
  });
};

module.exports = {
  registerView,
  loginView,
  registerUser,
};
