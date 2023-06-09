const cartcontroller = require("../controllers/cart.controller.js");

const router = require('express').Router();

router.post('/addtocart', cartcontroller.addtocart);
router.get('/displaycart/:user_id', cartcontroller.displaycart);
router.delete('/removecartproduct/:product_id', cartcontroller.removecartproduct);


module.exports = router;