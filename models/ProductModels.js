const mongo=require("mongoose")
const ProductSchema=mongo.Schema({
    "name":String,
    "Details":String,
    "Price":Number,
    "userID":String
})
const ProductModel=mongo.model("Product",ProductSchema);
module.exports={
    ProductModel
}