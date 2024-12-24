const express = require("express");
const dbConnect = require('./mongodb')
const app = express();

app.use(express.json())
// for get the data from the database api 
app.get("/", async (req,res)=>{
    let data= await dbConnect();
    data = await data.find().toArray();
    console.log("data",data)
    res.send(data)
}); 

app.post("/",(req,res)=>{
    console.log("ddfdfr",req.body)
    res.send(req.body)
    res.send({name:"anil"})
});


app.post("/", async (req,res)=>{
    console.log("ddfdfr",req.body)
    let data = await dbConnect();
    let result = await data.insert(req.body)
    res.send(result)
})

app.post("/:name", async (req,res)=>{
    console.log("ddfdfr",req.body)
    let data = await dbConnect();
    let result = await data.updateOne({name:req.params.name},{$set:req.body})
    res.send(result)
})

app.post("/:id", async (req,res)=>{
    console.log("ddfdfr",req.params.id)
    let data = await dbConnect();
    let result = await data.deleteOne({name:req.body.id})
    res.send(result)
})




app.listen(8900);
