//const { sequelize } = require("../models");
const db = require("../models");
const { sequelize } = require("../models");

const cart = db.cart;
const users = db.users;
const product = db.product;
const cart_product = db.cart_product;

const addtocart = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    const { user_id, product_id, quantity } = { ...req.body };
    const cartdata = await cart.findAll({ where: { user_id: user_id } });
    const cart_id = cartdata[0].id;

    const data = await cart_product.create({
      product_id: product_id,
      quantity: quantity,
      cart_id: cart_id,
      user_id: user_id,
    });

    res.send(data);
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }
};

const updateCartQuantity = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    const { user_id, product_id, quantity } = req.body;
    const cartData = await cart.findOne({ where: { user_id: user_id } });
    const cart_id = cartData.id;

    if (quantity < 1) {
      await cart_product.destroy({
        where: { cart_id: cart_id, product_id: product_id }
      });
      res.json({ message: 'Product removed from cart' });
      await t.commit();
      return;
    }

    const cartProduct = await cart_product.findOne({
      where: { cart_id: cart_id, product_id: product_id }
    });

    if (!cartProduct) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    cartProduct.quantity = quantity;
    await cartProduct.save();

    res.json({ message: 'Cart quantity updated successfully' });
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }
};


const displaycart = async (req, res) => {

  // const token = req.headers["authorization"];   
  // console.log(token,"-====token")
  const t = await db.sequelize.transaction();
  try {
    const user_id = req.params.user_id;

    const cart_data = await cart_product.findAll({
      where: { user_id: user_id },
      include: [
        { model: product }
      ]
    });

    const newData = cart_data.map(item => {
      const imageUrl = `/images/${item.product.product_img}`;
      return {
        ...item.toJSON(),
        imageUrl,
      };
    });

    res.send(newData);
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }
};

const removecartproduct = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    const { cart_id, product_id } = { ...req.body };
    await cart_product.destroy({
      where: { cart_id: cart_id, product_id: product_id },
      transaction: t
    });
    res.json({ message: 'Product removed from cart' });
    await t.commit();
    return;
  } catch (error) {
    await t.rollback();
    res.status(500).json({ error: 'Failed to remove product from cart' });
  }
}

module.exports = {
  addtocart,
  displaycart,
  updateCartQuantity,
  removecartproduct,
};
