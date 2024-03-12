const { ApolloError } = require("apollo-server-express");
const { rule } = require("graphql-shield");
module.exports = rule()(async (parent, args, { user }, info) => {
  if (user) {
    return true;
  } else {
    return false
  }
});
