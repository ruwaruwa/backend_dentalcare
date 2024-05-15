const servicemodel=require('../models/Servicemodel')
const joi =require('joi')
//validation
const servicevalida=(val)=>{
    const servalidat=joi.object({
        date:joi.string().required(),
        name:joi.string().required(),
        
id:joi.string().required()
    })
    return servalidat.validate(val)
}
//post
const addservice=async(req,res)=>{
    const {error}=servicevalida(req.body)
    if(error){
       return res.status(400).send( error.message )
    }
try {
    const addnewservice= await  servicemodel(req.body)
    const services= await addnewservice.save()
    if(services){
        res.status(200).json({
            message:"service added successfully",
            service:services
        })

    }
    else{
        res.status(400).json({
            message:"service not added"
        })
    }
}
    catch (error) {
        console.log(error)
    }
}
    //get by id
   const getByidserviceid=async(req,res)=>{
    try {
        const getservice=await servicemodel.findOne({_id:req.params.id})
        if(getservice){
            res.status(200).json(getservice)
        }
        else{
            res.status(400).json({
                message:"service not found"
            })
        }
    } catch (error) {
        console.log(error)
    }
   }
   //get 
   const getAllservice=async(req,res)=>{
    try {
        const getallservice=await servicemodel.find()
        if(getallservice){
            res.status(200).send(getallservice)
        }
        else{
            res.status(400).send({
                message:"service not found"
            })
        }
    } catch (error) {
        console.log(error)
    }
   }
   //update
   const updateservice=async(req,res)=>{
    try {
        const update=await servicemodel.findOneAndUpdate({_id:req.params.id},
            {$set:req.body})
        if(update){
            res.status(200).json(update)
        }
        else{
            res.status(400).json({
                message:"service not found"
            })
        }
    } catch (error) {
        console.log(error)
    }
   }
   //delete
   const deleteservice=async(req,res)=>{
    try {
        const deleteone=await servicemodel.deleteOne({_id:req.params.id})
        if(deleteone){
            res.status(200).json(deleteone)
        }
        else{
            res.status(400).json({
                message:"service not found"
            })
        }
    } catch (error) {
        console.log(error)
    }
   }
module.exports={
    addservice,
    getByidserviceid,
    getAllservice,
    updateservice,
    deleteservice
}
