const express = require("express");
const bodyParser = require("body-parser");

/* include services */
const todoService = require("./services/todoService");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/* Routes */
app.get('/todos', todoService.list);

app.listen(3000);