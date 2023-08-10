const express = require("express");
const body_parser = require("body-parser");
const connection = require("./database/connection")
require("dotenv").config({path: "config.env"});

const cors = require("cors");

const routes = require("./routes/ToDoRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(body_parser.urlencoded({extended:true}))



// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));