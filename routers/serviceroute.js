const express =require('express');
const service= express.Router();
const servicecontroler=require('../controlers/serviceContorler')

service.get('/service',servicecontroler.getAllservice);

service.get('/service/:id',servicecontroler.getByidserviceid);

service.post('/service',servicecontroler.addservice);

service.put('/service/:id',servicecontroler.updateservice);

service.delete('/service/:id',servicecontroler.deleteservice);

module.exports=service;