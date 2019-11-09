const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");
const Movie = require("./model");

const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

const movieRouter = require("./router");
app.use(movieRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = Movie;
