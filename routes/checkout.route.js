const checkoutcontroller = require("../controllers/checkout.controller.js");

const router = require('express').Router();

router.get('/checkoutDetail/:user_id', checkoutcontroller.checkoutDetail);
router.post('/placeOrder', checkoutcontroller.placeOrder);
router.get('/checkoutaddress/:user_id', checkoutcontroller.defaultaddress);

module.exports = router;