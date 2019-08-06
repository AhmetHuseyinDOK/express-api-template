require('dotenv').config(); 
const express = require('express')
const app = express();
const port =  process.env.PORT || 3000;
//import utils here if you wanna change protypes
const WelcomeController = require('./controllers/welcome');

//routes can be registered here
app.get('/', WelcomeController.index);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))