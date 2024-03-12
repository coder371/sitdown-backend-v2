const { allow } = require("graphql-shield");
const { prefix } = require("./config.js");
const permissions = require("../../../permissions/index.js");
const { formatters } = require("../../../../utilities/index.js");

const { settings, users } = permissions.appsPermissions;
const { isExistApp } = settings;
const { Prefixer } = formatters;

Prefixer.setPrefix(prefix);

module.exports = {
    Query: {
        [Prefixer.addPrefix('GetAll')]: allow,
    },
    Mutation: {
        [Prefixer.addPrefix('Create')]: isExistApp
    }
};
