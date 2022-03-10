const express = require("express");
const app = express();
const dotenv = require("dotenv");


dotenv.config({path:"./config.env"})


require("./db/conn");

app.use(express.json());
app.use(require("./router/auth"));

const user = require("./model/dataSchema");

module.exports=app;