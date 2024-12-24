const express = require('express');
require("./congis");

const Product = require('./prodcutsMongoose');
const app = express();
app.use(express.json())
app.post("/create", async (req,res)=>{
    // console.log(req.body)
    let data = new Product(req.body);
    let result = await data.save();
    res.send("result",result)
    res.send(req.body)
})


 
app.listen(6700);