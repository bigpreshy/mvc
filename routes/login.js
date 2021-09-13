
const express = require('express');

//Customer model



const {registerView, loginView, registerUser, loginUser} = require('../controllers/loginController');
const {dashboardView } = require('../controllers/dashboardController');

const router = express.Router();

router.get('/register', registerView);
router.get('/login', loginView);
//Dashboard
router.get('/dashboard', dashboardView);

router.post('/register', registerUser);
router.post('/login', loginUser);


module.exports = router;