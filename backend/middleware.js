const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("./config");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    try {
        if (token == null) {
            return res.sendStatus(401).json({});
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;

        next();
    }
    catch (err) {
        return res.status(401).json({});
    }
}

module.exports = {
    authMiddleware
}