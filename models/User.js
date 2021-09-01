const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {   
     type: String,    
     default: "New York", 
      },
  date: {
    type: Date,
    default: Date.now,
  },
 
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
