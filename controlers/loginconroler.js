
const usermodel=require('../models/usersmodel');

const joi =require('joi')
const jwt=require('jsonwebtoken')
const bycrtp=require('bcrypt')
//validation



//post login

const createlogin=async(req,res)=>{
try {
    const loginDATACHECK= await usermodel.findOne({emeil:req.body.emeil})
    if(!loginDATACHECK)return res.json("invalid username")

const checkpassword= await bycrtp.compare(req.body.password,loginDATACHECK.password)
if(checkpassword) return res.send({status:"error",message:"invalid username or password"})

//tokens login
const token=jwt.sign({
    id:loginDATACHECK._id,
    email:loginDATACHECK.emeil,
    password:loginDATACHECK.password
},"superkey")
res.header("token",token).json(
    {status:"success",
    message:"login successfully",
    token:token})
} catch (error) {
  res.status(400).send(error.message)  
}
//logim get


}
const getlogin=async(req,res)=>{
    try {
        const getlogin=await usermodel.find()
        if(getlogin){
            res.status(200).json(getlogin)
        }
        else{
            res.status(400).json({
                message:"login not found"
            })
        }
    } catch (error) {
        res.status(400).send('arror')
    }
}

module.exports ={
    createlogin,
    getlogin
}