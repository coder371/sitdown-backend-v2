
const {helpers} = require('../../utilities/index');
module.exports = async (req, res, next) => {
    const token = req.headers['authorization'];
    const data = await helpers.encryption.jwtVerfy(token);
    if (data) {
        const userData = await UsersModel.findById(data._id);
        req.user = userData;
    }
    next();
};
