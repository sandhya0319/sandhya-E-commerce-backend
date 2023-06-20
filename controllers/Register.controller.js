const db = require('../models');
const { sequelize } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = db.users;
const cart = db.cart;


const adddata = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    const { name, email, mobile, gender, password } = { ...req.body };
    const oldUser = await users.findOne({ where: { email } });
    if (oldUser) {
      return res.status(409).json({ error: "User Already Exists. Please Login" });
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const data = await users.create({ ...req.body, password: encryptedPassword },
      { include: { model: cart } },
    );

    res.send(data);
    await t.commit();

  } catch (error) {
    res.send(error);
    await t.rollback();
  }
}

const displayusers = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    //const { name, email,mobile,gender, password } = {...req.body};
    const userdata = await users.findAll({});
    console.log("userdata", userdata)


    res.send(userdata);
    await t.commit();

  } catch (error) {
    res.send(error);
    await t.rollback();
  }
}




module.exports = {
  adddata,
  displayusers,
}