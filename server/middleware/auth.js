const jwt = require('jsonwebtoken');

module.exports.authencation = function (req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ 'message': 'unauthorized' });



    try {
        const decoded = jwt.verify(token, 'jwtPrivateKey')
        req.users = decoded

        next()
    }

    catch (ex) {
        res.status(400).json({ 'message': 'invalid token' });
    }
}