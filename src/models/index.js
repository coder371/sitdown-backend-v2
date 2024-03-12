const { default: mongoose } = require("mongoose");
const {
  userSchema,
} = require("./schemas");

module.exports = {
  UsersModel: mongoose.model("User", userSchema),
};
