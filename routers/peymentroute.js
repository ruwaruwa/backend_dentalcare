const express=require('express');
const peyment=express.Router();
 const peymentController=require('../controlers/peyment');
peyment.post('/peyment',peymentController.addpeyment);
peyment.get('/peyment',peymentController.getallpeyment)
peyment.put('/peyment',peymentController.updatepeyment);

