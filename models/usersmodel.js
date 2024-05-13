const mongoose=require('mongoose');
const userchema=mongoose.Schema({
    // id:{
    //     type:String,
    //     required:true
    // },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        // required:true,
        default:"admin",
         enum:['superadmin','user']
    }
})

module.exports=mongoose.model('usermodel',userchema);