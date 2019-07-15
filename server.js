//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

//Intialize Express app
let app = express();

//Set PORT
const PORT = process.env.PORT || 8080

// Static directory
app.use(express.static("public"));

//Sync with db
let db = require('./models');

//Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Sync Sequelize Models and Start Express app after
db.sequelize.sync( {force: true} ).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });