const db = require('../models');
const { sequelize } = require('../models');
const jwt = require('jsonwebtoken');
const users = db.users;
const cart = db.cart;
const bcrypt = require('bcrypt');

const logindata = async (req, res) => {
    try {
      const { id, name, email, mobile, gender, password } = { ...req.body };
  
      const userdata = await users.findOne({ where: { email: email } });
  
      if (userdata && (await bcrypt.compare(password, userdata.password))) {
        // Create token
        const token = jwt.sign(
          { id,name,email },
          "secret",
          {
            expiresIn: "2h",
          }
        );
        userdata.token = token;
        //res.cookie('authcookie', token, { maxAge: 2 * 60 * 60 * 1000, httpOnly: true });
        //req.session.user = userdata;
        //res.status(200).json(token);

        res.json({auth: true, token: token,id:userdata.id, email:userdata.email,name:userdata.name});
        //res.send(token,id,name,email)
      } else {
        res.status(401).send('Unauthenticated');
      }
    } catch (err) {
      return res.status(500).send("Internal Server Error");
    }
  }

  module.exports={
    logindata,
  }