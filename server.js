// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// To serve static content
app.use(express.static(path.join(__dirname, "app/public")));


// Linking routes
// require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });