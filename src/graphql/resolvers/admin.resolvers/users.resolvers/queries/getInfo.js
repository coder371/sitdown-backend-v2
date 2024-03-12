const { ApolloError } = require("apollo-server-express");

module.exports = async (_, args) => {
    const query = {};
    const { id } = args;
    try {
        return {};
    }
    catch (error) {
        throw new ApolloError("خطأ أثناء جلب المستخدم");
    }
};
