const lodash = require("lodash");
const authResolvers = require("./auth.resolvers/index.js");
module.exports = lodash.merge(
  authResolvers,
);
