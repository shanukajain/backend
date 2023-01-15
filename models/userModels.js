const mongo=require("mongoose")
const UserSchema=mongo.Schema({
    "name":String,
    "pass":{type:String, required:true},
    "Username":{type:String, required:true},
    "email":String,
    "gender":String
})
const UserModel=mongo.model("user",UserSchema);
module.exports={
    UserModel
}