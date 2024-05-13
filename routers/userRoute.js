const express=require('express')
const users=express.Router()
const userContoler=require('../controlers/usercontroler')
const auth=require('../routers/Authentication')
users.get('/user',userContoler.getallusers);

users.get('/user/:id',userContoler.getbyidusers);

users.post('/user',userContoler.createuser);

users.put('/user/:id',userContoler.updateusers);

users.delete('/user/:id',userContoler.deleteusers);

module.exports=users;