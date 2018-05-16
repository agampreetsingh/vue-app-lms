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


route.get('/courses',(request,response)=>{
  response.sendFile('courses.html',{root:'./public'});
})

route.get('/courses/:id/batches',(request,response)=>{
  response.sendFile('batches.html',{root:'./public'});
})

route.get('/courses/:c_id/batches/:b_id/lectures',(request,response)=>{
  response.sendFile('lectures.html',{root:'./public'});
})


module.exports=route;

