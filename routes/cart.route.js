const cartcontroller=require("../controllers/cart.controller.js");

const router=require('express').Router();

router.post('/addtocart',cartcontroller.addtocart);
//router.get('/displaydata',productcontroller.displaydata);


module.exports=router;