const express= require('express');
const app= express();

app.get("/",(req,res)=>{
    res.json({message:'hello from docker , dev'});
})

app.listen(3000,()=>console.log('Server Running at 3000'));
