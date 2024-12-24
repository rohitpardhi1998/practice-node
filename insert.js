const dbConnect = require("./mongodb")


const mains =async()=>{
 let data= await dbConnect();
 let result = await data.insertOne({name:"ola",age66})
console.log("result",result);
}

mains();

//this is for update the data 
const mains2 =async()=>{
    let data= await dbConnect();
    let result = await data.updateOne({name:"aman"},{$set :age=88})
   console.log("result",result);
   }
   
   mains2();

   // delete the data from database
   
//this is for update the data 
const mains3 =async()=>{
    let data= await dbConnect();
    let result = await data.deleteOne({name:"aman"})
   console.log("result",result);
   if(result.acknowledged){
    console.log("record got deleted");
   }
   }

   
   mains3();