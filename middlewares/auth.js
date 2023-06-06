const jwt =require('jsonwebtoken');

function auth(req,res,next){

    const authHeader=req.header('Authorization');
    console.log(authHeader,"aaaaa")

    //check token
    if(authHeader==null){
        return res.status(401).json({error:"Access-denied"});
    }

    //check validity
    try{
        const verified=jwt.verify(authHeader,"secret");
        console.log(verified,"vvvvvvv")
        req.id={name:verified.name}; //if verified the token will be decoded and the username of the user will be extracted and passed.
        next();

    }catch (e){
        res.status(401).json({error:"Invalid-token"});
    }

}

module.exports={auth}