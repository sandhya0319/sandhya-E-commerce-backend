const {verifyJWT}=require('../middlewares/auth.js')//importing auth function 
const registercontroller=require("../controllers/Register.controller.js");
const validator=require('../middlewares/validator')
const router=require('express').Router();

router.post('/adddata',registercontroller.adddata);
//router.post('/adddata',validator('register.joi.validation.js'),registercontroller.adddata);

router.get('/displayusers',registercontroller.displayusers);

module.exports=router;