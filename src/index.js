const express = require("express");
const app = express();
const userController = require("./users/controller/user.cotroller");

app.get("/", function (req, res) {
  res.sendStatus(200);
});

app.post("/", function (req, res) {
  const body = req.body.name;
});

app.post("/user/:id/:u_name/:u_passwd", (req, res) => {
  const id = req.params.id;
  const u_name = req.params.u_name;
  const u_passwd = req.params.u_passwd;
  userController(id, u_name, u_passwd);
});
app.listen(25200, function () {
  console.log("app listening at port ");
});
