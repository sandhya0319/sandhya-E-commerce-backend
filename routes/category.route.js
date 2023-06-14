const categorycontroller=require("../controllers/category.controller.js");

const router=require('express').Router();

router.get('/displaycategories',categorycontroller.displaycategories);

module.exports=router;