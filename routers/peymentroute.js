const express=require('express');
const peyment=express.Router();
 const peymentController=require('../controlers/peyment');
peyment.post('/peyment',peymentController.addpeyment);
peyment.get('/peyment',peymentController.getallpeyment)
peyment.get('/peyment/:id',peymentController.getpeymentbyid)
peyment.put('/peyment/:id',peymentController.updatepeyment);
peyment.delete('/peyment/:id',peymentController.deletepeyment)

module.exports=peyment;
