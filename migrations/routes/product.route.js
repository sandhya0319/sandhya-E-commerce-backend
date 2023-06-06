const productcontroller=require("../controllers/product.controller");

const router=require('express').Router();

router.get('/displaydata',productcontroller.displaydata);


module.exports=router;