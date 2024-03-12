const { formatters: { Prefixer }, } = require("../../../../utilities/index.js");
const { prefix } = require("./config.js");
const { gql } = require("apollo-server-express");

Prefixer.setPrefix(prefix);

module.exports = gql`
    input LoginInput {
        phoneNumber: String,         
        password: String
    }
    type userData  {
        _id:ID
        phoneNumber: String!
        avatarUrl: String
        token:String
        fullname:String
    }
    type Mutation {
        ${Prefixer.addPrefix("Login")}(loginData: LoginInput): userData,
    }
`;
