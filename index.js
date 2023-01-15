const express =require("express");
const { connection } = require("./config/db");
const { ProdcutRouter } = require("./route/poroduct");
const { userRouter } = require("./route/userRoute");
const cors=require("cors");
require("dotenv").config();
const port=process.env.port;
console.log(port)

const app=express();
app.use("/",userRouter);
app.use("/product",ProdcutRouter)
app.use(cors());






app.listen(port,async()=>{
try {
    await connection
    console.log("connected at port ",port)
} catch (error) {
    console.log(error)
}
})