const express = require('express');
const app = express();


app.set('view engine', 'ejs');


//Routes
app.use('/', require('./routes/login'));

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Server has started at port " + PORT))
