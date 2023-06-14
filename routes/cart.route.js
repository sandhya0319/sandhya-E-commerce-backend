const cartcontroller = require("../controllers/cart.controller.js");
// const verifyJWT = require("../middlewares/auth.js")
const verifyJWT=require("../middlewares/auth.js");

const router = require('express').Router();

router.post('/addtocart', cartcontroller.addtocart);
router.post('/updatecart',cartcontroller.updateCartQuantity);
router.get('/displaycart/:user_id',verifyJWT.verifyJWT, cartcontroller.displaycart);
router.delete('/removecartproduct', cartcontroller.removecartproduct);


module.exports = router;