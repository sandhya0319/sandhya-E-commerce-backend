const ordercontroller=require('../controllers/order.controller.js')

const router = require('express').Router();

router.get('/myorders/:user_id', ordercontroller.orderDetail);

module.exports=router;