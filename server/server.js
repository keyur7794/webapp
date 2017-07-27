const path=require('path');
const publicpath =path.join(__dirname,'../public');
console.log(__dirname+'/../public');

console.log(publicpath);
const express =require('express');

var app=express();
app.use(express.static(publicpath));

app.listen(3000,()=>console.log('server is up on 3000'));
