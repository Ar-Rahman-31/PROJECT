
const jwt = require('jsonwebtoken');

async function checkAuth(req, res, next) {


    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized access'
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.jwt_token
        );

        req.decoded = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            message: 'Invalid token'
        });
    }
}

module.exports = { checkAuth };
