const crypto = require('crypto');

// Encrypt data using the secret key
module.exports = () => {
    const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, null);
    let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');
    return decryptedData;
}
