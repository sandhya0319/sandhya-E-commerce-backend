const db = require("../models");
const { sequelize } = require("../models");

const user_address = db.user_address;
const order = db.order;
const order_product = db.order_product;
const order_address = db.order_address;
const cart_product = db.cart_product;


const checkoutDetail = async (req, res) => {
    try {
        const id = req.params.user_id;
        const user_address_data = await user_address.findAll({ where: { user_id: id } });
        res.json(user_address_data);
    } catch (error) {
        res.send(error);
    }
};

const placeOrder = async (req, res) => {
    const t = await db.sequelize.transaction();

    try {
        const { user_id, products, order_address_data, totalAmount } = req.body;

        let userAddress = await user_address.findOrCreate({
            where: { user_id: user_id },
            defaults: {
                street: order_address_data.street,
                city: order_address_data.city,
                state: order_address_data.state,
                country: order_address_data.country,
                pincode: order_address_data.pincode,
            },
            transaction: t,
        });

        userAddress = userAddress[0];

        const orderAddress = await order_address.create(
            {
                street: order_address_data.street,
                city: order_address_data.city,
                state: order_address_data.state,
                country: order_address_data.country,
                pincode: order_address_data.pincode,
                user_id: user_id,
            },
            { transaction: t }
        );

        const createdOrder = await order.create(
            {
                quantity: products.reduce((sum, product) => sum + product.quantity, 0),
                total_price: totalAmount,
                order_address_id: orderAddress.id,
            },
            { transaction: t }
        );

        for (const product of products) {
            await order_product.create(
                {
                    order_id: createdOrder.id,
                    product_id: product.id,
                    user_id: user_id,
                },
                { transaction: t }
            );
        }

        await cart_product.destroy({ where: { user_id: user_id }, transaction: t });
        await t.commit();
        res.json({ message: "Order placed successfully" });
    } catch (error) {
        await t.rollback();

        res.send(error);
    }
};

const defaultaddress = async (req, res) => {
    try {
        const id = req.params.user_id;
        const data = await order_address.findAll({ where: { user_id: id } });
        res.json(data);
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    checkoutDetail,
    placeOrder,
    defaultaddress,
};