const userOrmService = require('../orm_service/user_orm_service');
const jwt = require('jsonwebtoken');
const config = require('../config/util');


const login = (req,res)=>{

        let username = req.body.username;
        let password = req.body.password;
        // For the given username fetch user from DB
        let mockedUsername = 'admin';
        let mockedPassword = 'password';
    
        if (username && password) {
          if (username === mockedUsername && password === mockedPassword) {
            let token = jwt.sign({username: username},
                config.SECRETKEY,
              { expiresIn: '2h' // expires in 24 hours
              }
            );
            // return the JWT token for the future API calls
            res.json({
              success: true,
              message: 'Authentication successful!',
              token: token
            });
          } else {
            res.statusCode = 402;
             res.json({
              success: false,
              message: 'Incorrect username or password'
            });
          }
        } else {
            res.statusCode = 400;
          res.json({
            success: false,
            message: 'Authentication failed! Please check the request'
          });
        }
      
    };
const getProfileDetails = async (req,res)=>{
    const mockResponse = await userOrmService.getUserDetails(1);
    res.json({status:'success',data:mockResponse});
};

    module.exports = {
        login,
        getProfileDetails
    }