const { shield } = require("graphql-shield");
const lodash = require("lodash");
const appsPermissions = require('./resolvers/app.resolvers/premissions')

const permissions = lodash.merge(appsPermissions);
module.exports = shield(permissions);
