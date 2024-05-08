const mongoonse=require('mongoose');
const patientSchema=mongoonse.Schema({
    pid:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },

},{timestamo:true})

module.exports=mongoonse.model('patientmodel',patientSchema)
