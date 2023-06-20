const db = require("../models");
const { sequelize } = require("../models");

const user_address = db.user_address;
const order = db.order;
const order_product = db.order_product;
const order_address = db.order_address;
const cart_product = db.cart_product;
const product = db.product;


const orderDetail = async (req, res) => {
    try {
        const id = req.params.user_id;
        const addressData = await order.findAll({
            include: [
                {
                    model: order_address,
                    where: { user_id: id },
                },
                {
                    model: order_product,
                    include: [product], 
                },
            ],
        });
        res.json(addressData);
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    orderDetail,
}