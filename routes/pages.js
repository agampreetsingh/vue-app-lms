const express=require('express');
const route=express();

route.get('/students',(request,response)=>{
   response.sendFile('students.html',{root:'./public'});
})


route.get('/teachers',(request,response)=>{
  response.sendFile('teachers.html',{root:'./public'});
})


route.get('/subjects',(request,response)=>{
  response.sendFile('subjects.html',{root:'./public'});
})


module.exports=route;

