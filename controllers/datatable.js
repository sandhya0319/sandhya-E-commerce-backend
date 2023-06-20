const db = require('../models');
const { sequelize } = require('../models');
const cart = db.cart;
const cart_product = db.cart_product;
// const cart_product = require('../models/cart_product');
const product = db.product;
 const seller = db.seller;
// const category=db.category;



const displaydata = async (req, res) => {
    try {

        // const id = req.params.id;
        // const cartData = await cart_product.findAll({
        //     where: { user_id: id },
        //     attributes: ['product_id', 'quantity']
        // });
        const title=req.body.title;
        const price=req.body.price
        //seacrhing

        // const productData = await product.findAll({
        //     [Op.or]: [
        //       {
        //         title: {
        //           [Op.like]: `%${title}%`
        //         }
        //       },
        //       {
        //         description: {
        //           [Op.like]: `%${price}%`
        //         }
        //       }
        //     ]
        //   });

        //sorting
        //  const productData = await product.findAll({
        //     order: [
        //         // will return `username` DESC
        //         ['title', 'DESC'],
        //         ['price','DESC'],
        //         ['description','DESC']
        //     ]
        //   });

        //pagination

          const productData = await product.findAll({
                offset: 0, limit: 2
              });
          


        // const newData = productData.map(item => {
        //     const imageUrl = `/images/${item.product_img}`;
        //     const isInCart = cartData.some(cartItem => cartItem.product_id === item.id);
        //     const quantity = isInCart ? cartData.find(cartItem => cartItem.product_id === item.id).quantity : 0;
        //     return {
        //         ...item.toJSON(),
        //         imageUrl,
        //         isInCart,
        //         quantity: quantity || 0
        //     };
        // });

        res.json(productData);
    } catch (error) {
        res.send(error);
        //await t.rollback();
    }
}


module.exports = {
    displaydata,
}