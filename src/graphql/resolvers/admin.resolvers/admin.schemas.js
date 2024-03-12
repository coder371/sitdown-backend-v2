const { gql } = require("apollo-server-express");
const usersSchema = require("./users.resolvers/schema.js");

module.exports = gql`
    ${usersSchema}
`;
