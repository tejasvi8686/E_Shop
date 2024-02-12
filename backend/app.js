const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler")
const app = express();
const cookiParser = require("cookie-parser");
const bodyparser = require("body-parser");
const fileupload = require("express-fileupload");

app.use(express.json());
app.use(cookiParser());
app.use(bodyparser.urlencoded({extended:true}));
app.use(fileupload({useTempFiles: true}));

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

//It's for errorHandling
app.use(ErrorHandler);

module.exports = app;


