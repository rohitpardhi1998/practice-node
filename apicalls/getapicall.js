const express = require("express");
const dbConnect = require("./dbdb");
const mogodbB = require('mongodb')
const app = express();
app.get("/", async (req, res) => {
  let data = dbConnect();
  data = await (await data).find().toArray();

  console.log("hh");
  // res.send("helele")
  res.send(data);
});

app.use(express.json());

app.post("/", async (req, res) => {
  let data = await dbConnect();
  let results = await data.insertOne(req.body);

  console.log("Dd", req.body);
  res.send(results);
});

app.put("/:name", async (req, res) => {
  let data = await dbConnect();
  let result = await data.updateOne({name:req.params.name}, { $set: req.body });
  console.log("Dd", result);
  res.send(result);
});
app.delete("/:id", async (req, res) => {
    let data = await dbConnect();
    let result = await data.deleteOne({_id:new mogodbB.ObjectId(req.params.id)});
    console.log("Dd", result);
    res.send(result);
  });

app.listen(8800);
