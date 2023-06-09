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

    // if(product_id){
    //     res.json('product already in cart');
    // }
    // else{
    const data = await cart_product.create({
      product_id: product_id,
      quantity: quantity,
      cart_id: cart_id,
      user_id: user_id,
    });
    // }

    res.send(data);
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }
};

const displaycart = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    //const { user_id } = { ...req.body };
    //const data=await product.findAll({where:{}})
    const user_id = req.params.user_id;
    //const product_id=req.body.id;
    //const data=await product.findAll({})
    const cart_data = await cart_product.findAll(
      { where: { user_id: user_id } }
      // {include:{model:product}},
    );

    //const productid = cart_data[0].product_id;
    let datas = [];
    for(let d of cart_data) {
      const product_id = d.product_id;
      console.log("=====", product_id);
      const productdata = await product.findAll({
        where: { id: product_id },
      });
      datas.push(productdata);
    };

    //cart_data={...cart_data,...productdata}

    res.send({ cart_data, datas });
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }
};

const removecartproduct=async(req,res)=>{
    const product_id=req.body.product_id;
    //await cart_product.destroy({where:{product_id:product_id}})
}

module.exports = {
  addtocart,
  displaycart,
  removecartproduct,
};
