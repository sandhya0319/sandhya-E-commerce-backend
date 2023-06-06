const {auth}=require('../middlewares/auth.js')//importing auth function 
const registercontroller=require("../controllers/user.Register.controller.js");

const router=require('express').Router();

router.post('/adddata',registercontroller.adddata);
router.post('/login',registercontroller.logindata);

module.exports=router;