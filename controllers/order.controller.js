const db = require("../models");
const { sequelize } = require("../models");

const user_address = db.user_address;
const order = db.order;
const order_product = db.order_product;
const order_address = db.order_address;
const cart_product = db.cart_product;


const orderDetail = async (req, res) => {
    try {
        const id = req.params.user_id;
        const addressdata=await order.findAll({include:[{model:order_address,where:{user_id:id}}
           ]})
        // const order_address_user=addressdata[0].user_id;
        // const order_address_id=addressdata[0].id

        // //const orderid = req.params.order_address_id;
        // const data = await order.findAll({ where: { order_address_id: order_address_id } });
        res.json(addressdata);
    } catch (error) {
        res.send(error);
    }
};

module.exports={
    orderDetail,
}