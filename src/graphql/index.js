const typeDefs = require("./typeDefs.js");
const resolvers = require("./resolvers/index.js");
const permissionsComplex = require("./permissionsComplex.js");
const permissions = require("./permissions/index.js");

module.exports = { typeDefs, resolvers, permissionsComplex, permissions };


