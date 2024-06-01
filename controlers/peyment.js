const joi = require('joi');
const peymentmodel = require('../models/peyment')
//get all

const getallpeyment= async (req, res) => {
    try {
        const peyment = await peymentmodel.find().populate({
            path:'serviceid',
            model:'servicemodel',
  select:" name id"
        });
        res.json(peyment);
    } catch (err) {
        res.json({ message: err });
    }
}
//get by id

const getpeymentbyid = async (req, res) => {
    try {
        const peyment = await peymentmodel.findOne({_id:req.params.id});
        res.json(peyment);
    } catch (err) {
        res.json({ message: err });
    }
}
//validation

const validatepeyment = (valid) => {
    const schema = joi.object({
        //  id:joi.string().required(),
        serviceid: joi.string().required(),
        amount: joi.number().required(),
        paid: joi.number(),
        rest: joi.number(),
        description: joi.string().required(),
        date: joi.string().required(),
    });
    return  schema.validate(valid);
  
}
//post
const addpeyment = async (req, res) => {
    const { error } = validatepeyment(req.body);
    if (error) return res.status(400).send(error.message);
    try {
        
        const addpement=await peymentmodel(req.body)
        const peyment = await addpement.save();
        if(peyment){
            res.send(peyment);
        }
        else{
            res.send(error.message);
        }
    } catch (error) {
        res.json(error.message);
    }
}
//update

const updatepeyment = async (req, res) => {
    try {
        const peyment = await peymentmodel.updateOne({_id:req.params.id},
            {$set:req.body});
        res.json(peyment);
    } catch (err) {
        res.json({ message: err });
    }
}
//delete

const deletepeyment = async (req, res) => {
    try {
        const peyment = await peymentmodel.deleteOne({_id:req.params.id});
        res.json(peyment);
    } catch (err) {
        res.json({ message: err });
    }
}

module.exports = {
    getallpeyment,
    getpeymentbyid,
    addpeyment,
    updatepeyment,
    deletepeyment,
}
