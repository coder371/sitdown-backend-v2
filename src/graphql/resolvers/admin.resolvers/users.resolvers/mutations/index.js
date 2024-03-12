const create = require("./create.js");
const config = require("../config.js");
const { formatters } = require("../../../../../utilities/index.js");

const { prefix } = config;
const { Prefixer } = formatters;
Prefixer.setPrefix(prefix);

module.exports = {
    [Prefixer.addPrefix('Create')]: create,
};
