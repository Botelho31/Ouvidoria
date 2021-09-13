const jwt = require('jsonwebtoken');
const util = require('util');

const SECRET_KEY = '557cc1c5eb92c2a3df8a15bbe55e48ce9a0cfe7218a7668a5f661e3e931927bf68d074ab6aaadccb5e34bc5052db8be1ca906ffa017617862f6917b6361f2bbf';

module.exports = {
  generateAccessToken(user) {
    return jwt.sign(user, SECRET_KEY, { expiresIn: '7d' });
  },
  async authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    try {
      const verifyFunc = util.promisify(jwt.verify);
      const user = await verifyFunc(token, SECRET_KEY);
      req.user = user;
      return next();
    } catch (err) {
      return res.sendStatus(403);
    }
  },
};
