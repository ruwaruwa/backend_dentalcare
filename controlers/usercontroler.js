const usermodel=require('../models/usersmodel')
const joi =require('joi')
const bcrtp = require('bcrypt')
//get users

const getallusers= async (req, res) => {
    try {
        const users = await usermodel.find();
        res.status(200).send(users);

    } catch (err) {
        res.status(400).send(err.message);
    }
}
//get byid

const getbyidusers= async (req, res) => {
    try {
        const users = await usermodel.findOne({_id:req.params.id});
        res.status(200).send(users);

    } catch (err) {
        res.status(400).send(err.message);
    }
}
//user validation 

const validateusers = (valid) => {
    const schema = joi.object({
        name: joi.string().min(3).required(),
        email: joi.string().min(3).required().email(),
        password: joi.string().min(2).max(10).required(),
        role: joi.string().min(3)
    });
    return schema.validate(valid);
}
//create user

// const createuser= async (req, res) => {
//     const {error}=validateusers(req.body);
//     if (error) return res.status(405).send(error.message);
//     //nst aadnewuser =
//     try {
//         const addedusers = await usermodel(req.body)
//         addedusers.password= await bcrtp.hash(addedusers.password,10);
//         //hadii ow hore u jiray
//         const alluse=await usermodel.find({email:req.body.email})
//         if(alluse.length>0){
//             res.status(409).json({
//                 status:false,
//                 message:"this user already exist"
//             })
//         }
//         const users = await addedusers.save();
//         if(users){
//             res.status(200).send(users);
//         }
//         else{
//             res.send({ message: "error" });
//         }
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// }

const  createuser = async(req,res) => {
    const newAdmin =  usermodel(req.body)
    const saveAdmin = await newAdmin.save()

    if (saveAdmin){
      res.send(newAdmin)
    }else{
      res.send({error:"error"})
    }
    
}
//update users

const updateusers= async (req, res) => {
    try {
        const users = await usermodel.updateOne(
            {_id:req.params.id},
            {$set:req.body});
        if(users){
            res.status(200).send(users);
        }
        else{
            res.status(400).json({
                message:"users not updated"
            })
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}
//delete

const deleteusers= async (req, res) => {
    try {
        const users = await usermodel.deleteOne({_id:req.params.id});
        if(users){
            res.status(200).send(users);
        }
        else{
            res.status(400).json({
                message:"users not deleted"
            })
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}
// finding existing user in the database
const loginAdmin = async(req, res) => {
    const AdminData = await usermodel.findOne({
      email: req.body.email,
      password: req.body.password
    })
    if(AdminData){  
      res.send(AdminData)
  }else{
    res.send({error: "Not Found"})
  }
  }

module.exports={
    getallusers,
    getbyidusers,
    createuser,
    updateusers,
    deleteusers,
    loginAdmin,
}