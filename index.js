const express = require("express");
const fs = require("fs");
const path = require("node:path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) =>
  res.render('index', {prova: 'UAUAUAUAUAUAAU'}));

app.get("/about", (req, res) =>
    res.render('about'));

app.get("/contact-me", (req, res) =>
    res.render('contact-me'));

app.all("*", (req, res) => {
    res.render('404')});

const PORT = 3000;
app.listen(PORT, () => console.log(`server listening on port ${PORT}!`));
