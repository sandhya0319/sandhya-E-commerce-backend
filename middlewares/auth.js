 const jwt =require('jsonwebtoken');

// function auth(req,res,next){

//     const authcookie = req.cookies.authcookie;
    
//     const authHeader=req.header('Authorization');
//     console.log(authHeader,"aaaaa")

//     //check token
//     if(authHeader==null){
//         return res.status(401).json({error:"Access-denied"});
//     }

//     //check validity
//     try{
//         const verified=jwt.verify(authHeader,"secret");
//         console.log(verified,"vvvvvvv")
//         req.id={name:verified.name}; //if verified the token will be decoded and the username of the user will be extracted and passed.
//         next();

//     }catch (e){
//         res.status(401).json({error:"Invalid-token"});
//     }

// }
// module.exports={auth}

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];   
     if (!token) {
        res.send("We need a token, please give it to us next time");
    } else {
        jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
                console.log(err);
                res.json({ auth: false, message: "you are failed to authenticate"});
            } else {
                req.id = decoded.id;
                next();
            }
        });
    }
};

module.exports={
    verifyJWT
}