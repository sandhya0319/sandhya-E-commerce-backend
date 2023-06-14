 const jwt =require('jsonwebtoken');

 const validation=require('../validators/index.js')

const verifyJWT = (req, res, next) => {
    // console.log(req.headers,"===")
     const token = req.headers["authorization"];   
     console.log(token,"-====token")
     if (!token) {
        res.send("We need a token, please give it to us next time");
    } else {
        next();
        // jwt.verify(token, "secret", (err, decoded) => {
        //     if (err) {
        //         console.log(err);
        //         res.json({ auth: false, message: "you are failed to authenticate"});
        //     } 
        //     else {
        //         req.id = decoded.id;
        //         next();
        //     }
        //     // next();
        // });
    }
};

module.exports={
    verifyJWT
}