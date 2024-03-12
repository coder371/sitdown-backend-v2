const lodash = require("lodash");
const usersResolvers = require("./users.resolvers/index.js");

module.exports = lodash.merge(
    usersResolvers
);
