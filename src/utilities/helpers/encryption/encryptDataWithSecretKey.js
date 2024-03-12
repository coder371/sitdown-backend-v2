const crypto = require('crypto');

// Encrypt data using the secret key
module.exports = ({secretKey,data}) => {
    const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, null);
    let encryptedData = cipher.update(data, 'utf8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
}
