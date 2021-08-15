const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ManageDb/Users", {
  useNewUrlParser: true, // use params to pass deprication
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  id: Number,
  username: String,
  password: Number,
});

const modelUser = mongoose.model("User", USerSchema);

module.exports = function (id, username, password) {
  const newUser = new modelUser(id, username, password);
  newUser.save((err) => {
    if (err) throw err;
  });
};
