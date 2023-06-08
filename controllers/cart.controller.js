//const { sequelize } = require("../models");
const db =require('../models');
const {sequelize}=require('../models');

const cart=db.cart;
const users=db.users;
const cart_product=db.cart_product;

const addtocart=async(req,res)=>{
    const t = await db.sequelize.transaction();
    try {
        //const id=req.body.cart_id;
        console.log(cart_id,"ccccc")
        const { user_id,product_id,cart_id } = { ...req.body };
  
        const cartdata = await cart.findAll({ where: { user_id:user_id } });

        console.log("cardid",cartdata[0].id);


        const data=await cart_product.create({product_id:req.body.product_id,
            quantity:req.body.quantity,
            cart_id:cartdata[0].id,
            user_id:req.body.user_id,
         })

        // const addtocart = await cartmodel.findAll({
        //     where: {
        //     user_id: req.body.user_id,
        //     },
        //     raw: true,
        //     });
        //     console.log(addtocart[0].id, "log");
        //     const addtocartproduct = await cartproductmodel.create({
        //     product_id: req.body.product_id,
        //     quantity: req.body.quantity,
            
        //     cart_id: addtocart[0].id,
        //     });
            
        //     res.json({ success: true, message: addtocart });
        //     };

        //console.log(data)
        //const cart=await cart.findOne({where:{id:id}});

        //console.log(cart_id,"ccccc")
        // const userdata=await users.findOne({where:{id:id}});
        // console.log("userdata",userdata);
        

        res.send(data); 
        await t.commit();

    } catch (error) {
        res.send(error);
        await t.rollback();
    }
}

// const displaydata=async(req,res)=>{
//     const t = await db.sequelize.transaction();
//     try {
//         const data=await cart.findAll({});
//         res.send(data); 
//         await t.commit();

//     } catch (error) {
//         res.send(error);
//         await t.rollback();
//     }
// }

module.exports={
    addtocart,
}