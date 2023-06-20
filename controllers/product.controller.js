const db = require('../models');
const { sequelize } = require('../models');
const cart = db.cart;
const cart_product = db.cart_product;
// const cart_product = require('../models/cart_product');
const product = db.product;
 const seller = db.seller;
// const category=db.category;



const addproduct = async (req, res) => {
    const t = await db.sequelize.transaction();

    try {
        const img = req.file.filename;

        //console.log(img,"iiiii")
        const data = await product.create({
            title: req.body.title,
            description: req.body.description,
            product_img: img,
            product_status: req.body.product_status,
            price: req.body.price
        });

        res.send(data);
        await t.commit();

    } catch (error) {
        res.send(error);
        await t.rollback();
    }
}

const displaydata = async (req, res) => {
    try {

        const id = req.params.id;
        const cartData = await cart_product.findAll({
            where: { user_id: id },
            attributes: ['product_id', 'quantity']
        });

        const productData = await product.findAll({});

        const newData = productData.map(item => {
            const imageUrl = `/images/${item.product_img}`;
            const isInCart = cartData.some(cartItem => cartItem.product_id === item.id);
            const quantity = isInCart ? cartData.find(cartItem => cartItem.product_id === item.id).quantity : 0;
            return {
                ...item.toJSON(),
                imageUrl,
                isInCart,
                quantity: quantity || 0
            };
        });

        res.json(newData);
    } catch (error) {
        res.send(error);
        await t.rollback();
    }
}

const deleteproduct = async (req, res) => {
    const t = await db.sequelize.transaction();
    const id = req.params.id;
    try {

        await product.destroy({ where: { id: id } });
        res.send('record deleted successfully..')
        await t.commit();

    } catch (error) {
        res.send(error);
        await t.rollback();
    }
}

module.exports = {
    addproduct,
    displaydata,
    deleteproduct,
}