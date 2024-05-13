const express=require('express');
const loginRoute= express.Router();

const loginControler=require('../controlers/loginconroler')

loginRoute.post('/login',loginControler.createlogin);

loginRoute.get('/login',loginControler.getlogin)


module.exports=loginRoute;