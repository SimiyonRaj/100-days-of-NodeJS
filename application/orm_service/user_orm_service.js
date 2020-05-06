const models = require('../models');
const sequelize = require('sequelize');


/**
 * Function to get userdetails based on the ID
 */
const getUserDetails  = (id) =>{ 
   return  models.appUser.findOne().then(data=>data).catch(err => err);
  
}
module.exports = {
    getUserDetails
}