const { gql } = require("apollo-server-express");
const authSchema = require("./auth.resolvers/schems.js");

module.exports = gql`
  ${authSchema}
`;

