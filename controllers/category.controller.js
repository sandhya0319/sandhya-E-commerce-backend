const db = require('../models');
const { sequelize } = require('../models');

const category = db.category;

const displaycategories=async(req,res)=>{
    try {

        //const id = req.params.id;
        const categoryData = await category.findAll({});

        res.json(categoryData);
    } catch (error) {
        res.send(error);
        await t.rollback();
    }
}

module.exports={
    displaycategories,
}