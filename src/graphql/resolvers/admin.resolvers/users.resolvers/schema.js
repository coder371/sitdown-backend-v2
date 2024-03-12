const { formatters } = require("../../../../utilities/index.js");
const config = require("./config.js");
const { gql } = require("apollo-server-express");

const { prefix } = config;
const { Prefixer } = formatters;
Prefixer.setPrefix(prefix);

module.exports = gql`
    type Query {
        ${Prefixer.addPrefix('GetInfo')}(_id: String): User,
    }
    type Mutation {
        ${Prefixer.addPrefix('Create')}(fullname: String, password: String, phone: String): User
    }
`;
