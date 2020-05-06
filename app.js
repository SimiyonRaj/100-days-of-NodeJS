import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser'; 
import router from './application/routs/router';
 const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 // parse application/json
app.use(bodyParser.json());
app.use('/v1',router);
app.listen(process.env.PORT,()=>{
    console.log('Application is open in the Port: ', process.env.PORT);
});