
const express = require('express');

//Customer model



const {registerView, loginView, registerUser} = require('../controllers/loginController');

const router = express.Router();

router.get('/register', registerView);
router.get('/login', loginView);

router.post('/register', registerUser);


module.exports = router;