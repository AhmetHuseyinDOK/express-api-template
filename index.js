require('dotenv').config(); 
const express = require('express')
const app = express();
const port =  process.env.PORT || 3000;
const bodyParser = require('body-parser');
//import utils here if you wanna change protypes
const WelcomeController = require('./controllers/welcome');
const WordsController = require('./controllers/words');
const logger = require('./middlewares/logger');
//register middlewares here
app.use(bodyParser.json());
app.use(logger.log);
//routes can be registered here
app.get('/', WelcomeController.index);
app.get('/random',WordsController.random);
app.get('/word',WordsController.get);
app.post('/word',WordsController.post);
app.post('/error',(req,res)=>{res.status(500).send(JSON.stringify({error:"err"}))})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))