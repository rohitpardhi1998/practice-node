const express = require("express");
const path = require("path");
const requestFilters = require("./middleware");
const app = express();
 
const dirpath2 = path.join(__dirname,'publics');
// const filepath = `${dirpath2}/test.html`;   

//middleware  applyingon routes and application level 

// app.use(reqestFilter)//this is application level middleware
app.set("view engine ",'ejs')
app.get('',(req,res)=>{
res.send("hello this is example for express");
})

app.get('/profile',requestFilters,(req,res)=>{   /// this is for ejs render the dynamic page sfor the nodejs 
    res.render('profile');
    })

app.get('/about',requestFilters,(req,res)=>{
    res.send("hello this is about page ");
    })

    app.get('/login',(req,res)=>{
        res.send("hello this is login page ");
        })

    
app.get('/mypage',(req,res)=>{
    res.send(`
    <input type="text" placeholder="Enter email"/>
    <button type="button">Click Here</button>
    `);
    })

    // app.get('*',(req,res)=>{
    //     res.send("It is error page  ");
    //     })
    
     

app.use(express.static(dirpath2))

app.listen("4800");
