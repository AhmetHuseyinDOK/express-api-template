require('dotenv').config(); 
const express = require('express')
const app = express();
const port =  process.env.PORT || 3000;
const bodyParser = require('body-parser');
//import utils here if you wanna change protypes
const WelcomeController = require('./controllers/welcome');
//register middlewares here
app.use(bodyParser.json());
//routes can be registered here
app.get('/', WelcomeController.index);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))