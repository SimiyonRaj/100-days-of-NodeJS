  const jwt = require('jsonwebtoken');
  const config = require('../config/util');

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token && token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }
  
    if (token) {
      jwt.verify(token, config.SECRETKEY, (err, decoded) => {
        if (err) {
        res.statusCode=403;
          return res.json({
            success: false,
            message: 'Token is not valid'
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
        res.statusCode=403;
      return res.json({
        success: false,
        message: 'Auth token is not supplied'
      });
    }
  };

 module.exports = {
     authenticate:checkToken
};