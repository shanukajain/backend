const jwt= require("jsonwebtoken");
require("dotenv").config();
const key=process.env.key;
const authenticate=(req,res,next)=>{
    // console.log(req.body)
    try {
        let token=req.headers.authorization;
        // console.log(token);
       let decoded=jwt.verify(token, key);
       if(decoded){
    //    let userID=decoded;
       req.body.userID=decoded.userID
    //    console.log(decoded);
       next();
       }
       else{
        res.send({"msg":"login first....."})
       }
    } catch (error) {
        console.log(error);
        res.send({"msg":"login first....."})
    }
}
module.exports={
    authenticate
}