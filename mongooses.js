const mongoose = require("mongoose");
await mongoose.connect("mongodb://localhost:27017/test");

const ProductShema = new mongoose.Schema({
    name: String,
    price: Number,
  });

const main = async () => {
const ProductsModel = mongoose.model("product", ProductShema);
  let data = new ProductsModel({ name: "lala",price:333 }); 
  let result = await data.save();
  console.log(result);
};
// schema created for the input string we prioded only that it will take and the model will help to coonect schem with the nodejs and mongodb
main();// use to save data in database


//update product with mongoosedb 

const updateProducts = async () => {
   const Products = mongoose.model("product", ProductShema);
    let data = await Products.updateOne({ name: "lala"},{
        $set:{price:900,name:"lala 10"}
    }); 
    // let result = await data.save();
    console.log(data);
  };

  updateProducts() // to update data in database 