const express=require('express');
const report=express.Router()

const reportControler=require('../controlers/reportcontroler')

report.get('/report',reportControler.findtDates);
module.exports = report