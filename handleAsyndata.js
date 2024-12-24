let a = 30;
let b = 50;
console.log("value of a is ",a);


 let myWaiting =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(b=200);
        // b=100
        // console.log("valueof a and b",a+b)
    },3000)
 })

 myWaiting.then((data) => console.log("valueof a and b",a+data)).catch((error)=> console.log("got erro"))
// console.log("valueof a and b",a+b)
