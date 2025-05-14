const express = require('express');
const mainRouter = require('./routes'); 




const app = express()

app.use("/api",mainRouter)
// app.get("/",(req,res)=>{
//      res.json({
//         name:"asdad"
//     });
// });







module.exports =  app;