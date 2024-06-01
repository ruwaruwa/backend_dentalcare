const express=require('express')
const users=express.Router()
const userContoler=require('../controlers/usercontroler')
const auth=require('../routers/Authentication')
users.get('/user',userContoler.getAllusers);

users.get('/user/:id',userContoler.getSingleone);

users.post('/user',userContoler.RegisterAdmin);

users.put('/user/:id',userContoler.UpdateData);

users.delete('/user/:id',userContoler.dELETEData);
users.post('/user/login',userContoler.loginAdmin)

module.exports=users;