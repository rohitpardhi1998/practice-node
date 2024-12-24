const reqestFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("prlease provide age ")
    }else{
        next();
    }
} 

module.exports= reqestFilter;