const newUser = require("../model/user.model.js");

module.exports = (id, username, password) => {
  newUser(id, username, password);
};
