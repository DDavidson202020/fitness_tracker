// Require packages needed
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// Create connection with database using mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// Require all the routes from routes folder
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));
// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });