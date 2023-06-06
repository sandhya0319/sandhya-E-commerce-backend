const db =require('../models');
const {sequelize}=require('../models');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const users=db.users;
const cart=db.cart;
//const env=require('dotenv')
// const category=db.category;

const adddata=async(req,res)=>{
    const t = await db.sequelize.transaction();
    try {
        const { name, email,mobile,gender, password } = {...req.body};
        //const oldUser = await users.findOne({ email });
        console.log(req.body)
        // if (oldUser) {
        //   return res.status(409).send("User Already Exist. Please Login");
        // }
    
        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        //console.log(encryptedPassword,"===")
       
        const data=await users.create({...req.body,password:encryptedPassword},
            { include: { model: cart } },
        );

        res.send(data); 
        await t.commit();

    } catch (error) {
        res.send(error);
        await t.rollback();
    }
}

const logindata=async(req,res)=>{
    try {
        // Get user input
        const { id,email, password,name,mobile,gender } = req.body;
    
        // Validate user input
        if (!(email && password)) {
          res.status(400).send("All input is required");
        }

        // Validate if user exist in our database
        const userdata = await users.findOne({where:{email:email}});
        console.log("userdata",userdata)
    
        if (email==userdata.email && (await bcrypt.compare(password, userdata.password))) {
          // Create token
          const token = jwt.sign(
            { id, email,name,mobile,gender },
            "secret",
            {
              expiresIn: "2h",
            }
          );
            console.log("ttt",token)
          // save user token
          userdata.token = token;
            //console.log(userdata.token,"----")
          // user
          res.status(200).json(token);
        }
        res.status(400).send("Invalid Credentials");
      } catch (err) {
        console.log(err);
      }
    }


module.exports={
    adddata,
    logindata,
    //displaydata,
}