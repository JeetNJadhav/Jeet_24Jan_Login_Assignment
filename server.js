const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  if (name === "1" && password === "1") {
    res.render("success", {
      username: name,
    });
  } else {
    res.render("error");
  }
});

app.listen(8080, () => {
  console.log("server started on port 8080");
});
