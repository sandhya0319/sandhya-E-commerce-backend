//const { sequelize } = require("../models");
const db = require('../models');
const { sequelize } = require('../models');
const cart_product = require('../models/cart_product');

const product = db.product;
// const category=db.category;
const cart = db.cart;



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
    const t = await db.sequelize.transaction();
    try {
        const data = await product.findAll({});

        const newData = data.map(item => {
            const imageUrl = `/images/${item.product_img}`; 
            return {...item.toJSON(),imageUrl
            };
        });


        res.json(newData);
        await t.commit();

    } catch (error) {
        res.send(error);
        await t.rollback();
    }
}

const deleteproduct=async(req,res)=>{
    const t = await db.sequelize.transaction();
    const id=req.params.id;
    try {
         
        await product.destroy({where:{id:id}});
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