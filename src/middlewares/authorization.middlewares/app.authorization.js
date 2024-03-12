const { AppsModel } = require("@models");

module.exports = async (req, res, next) => {
    const secretKey = req.headers['x-secret-key'];
    const result = await AppsModel.findOne({ secretKey: secretKey });
    if (result) {
        req.app = result;
        next();
    } else {
        res.status(403).json({
            status: "403",
            message: "this app is not able to access"
        });
    }
};
