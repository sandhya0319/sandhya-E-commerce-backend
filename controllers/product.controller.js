//const { sequelize } = require("../models");
const db =require('../models');
const {sequelize}=require('../models');

const product=db.product;
// const category=db.category;

const displaydata=async(req,res)=>{
    const t = await db.sequelize.transaction();
    try {
        const data=await product.findAll({});
        res.send(data); 
        await t.commit();

    } catch (error) {
        res.send(error);
        await t.rollback();
    }
}

module.exports={
    displaydata,
}