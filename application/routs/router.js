'use strict'; 
const authHandler = require('../auth/auth');
const router = require('express').Router();
const routs  = require('./routs');
const userOrchestration = require('../orchestration_service/user_orchestration_service');

/**
 * Login to the application
 * 
 */
router.post(routs.login,userOrchestration.login);

/**
 * Getting profile details
 * 
 */
router.get(routs.getProfileDetails,authHandler.authenticate,userOrchestration.getProfileDetails);

module.exports = router;
