//const {auth}=require('../middlewares/auth.js')//importing auth function 
const logincontroller=require("../controllers/login.controller");

const router=require('express').Router();

router.post('/login',logincontroller.logindata);

module.exports=router;