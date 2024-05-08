const express=require('express');
const patientRoute=express.Router()
const patientContorler=require('../controlers/patientControler')
patientRoute.get('/patient',patientContorler.getpatient)

patientRoute.get('/patient/:id',patientContorler.getByidpatient)

patientRoute.put('/patient/:id',patientContorler.updatepatient)

patientRoute.delete('/patient/:id',patientContorler.deletepatient)
patientRoute.post('/patient',patientContorler.regesterpatient)

module.exports=patientRoute;