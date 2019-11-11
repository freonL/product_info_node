const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config'); // calling .env file


const app = express();

// Middlewares
app.use(bodyParser.json()); // handle every request body to json format
app.use(cors()); // allow CORS


// Routes
app.get('/', (req, res) => {
  console.log("get home");
  res.send("home")
});

const routeProduct= require('./api/routers/products');
app.use('/products', routeProduct);


// connect to DB
mongoose.connect( process.env.DB_CONNECTION, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }, () => {
    console.log('connected to DB')
  }
);

// listining request on server port; default port= 3000
app.listen(3000);
console.log("app.js running on http://localhost:3000");