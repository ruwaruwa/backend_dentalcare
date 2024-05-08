const joi =require('joi');
const patientmodel=require('../models/patientsmodel');
//validation 
const patientvalidation=(pvaldate)=>{
    const schemavalida=joi.object({
        pid:joi.number().required(),
        name:joi.string().required(),
        age:joi.number().required(),
        gender:joi.string().required(),
        address:joi.string().required(),
        phone:joi.number().required()
    })
    return schemavalida.validate(pvaldate);
}
const regesterpatient=async(req,res)=>{
    const {error}=patientvalidation(req.body);
    if(error){
        return res.status(400).send(error.message);
    }
        try {
            const addpatient =await patientmodel(req.body)
            const patient = await addpatient.save();
            if(patient){
                res.status(200).json({
                    message:"patient added successfully",patient:patient
                })
            }
            else{
                res.status(400).json({
                    message:"patient not added"
                })
            }
    }catch (error) {
        res.status(400).send('arror')
    }
    
} 
//get 

const getpatient=async(req,res)=>{
    try {
        const patient=await patientmodel.find();
        if(patient){
            res.status(200).json(patient)
        }
        else{
            res.status(400).json({
                message:"patient not found"
            })
        }
    } catch (error) {
        res.status(400).send('arror')
    }
}
     //update
     const updatepatient=async(req,res)=>{
        try {
            const patient=await patientmodel.updateOne(
            {_id:req.params.id},
            {$set: req.body}
            );
            if(patient){
                res.status(200).json({
                    message:"patient updated successfully",patient:patient
                })
            }
            else{
                res.status(400).json({
                    message:"patient not updated"
                })
            }
        } catch (error) {
            res.status(400).send('arror')
        }
    }   
    //get by id
const getByidpatient=async(req,res)=>{
    try {
        const patient=await patientmodel.find({_id:req.params.id});
        if(patient){
            res.status(200).json(patient)
        }
        else{
            res.status(400).json({
                message:"patient not found"
            })
        }
    } catch (error) {
        res.status(400).send('arror')
    }
}
    //delete
    const deletepatient=async(req,res)=>{
        try {
            const patient=await patientmodel.deleteOne({_id:req.params.id});
            if(patient){
                res.status(200).json({
                    message:"patient deleted successfully",patient:patient
                })
            }
            else{
                res.status(400).json({
                    message:"patient not deleted"
                })
            }
        } catch (error) {
            res.status(400).send('arror')
        }
    }
module.exports={
    regesterpatient,
    getpatient,
    updatepatient,
    getByidpatient,
    deletepatient

}