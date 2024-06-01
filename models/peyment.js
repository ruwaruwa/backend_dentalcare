const mongoose =require('mongoose');

peymentSchema=mongoose.Schema({
    // id:{
    //     type:String,
    //     required:true
    // },
    serviceid:{
    type:mongoose.Types.ObjectId,
// required:true,
ref:"servicemodel"
    },
    amount:{
        type:Number,
        // required:true
    },
    paid:{
        type:Number,
        // required:true
    },
    rest:{
        type:Number,
        // required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
  

    },


})

module.exports=mongoose.model('peymentmodel',peymentSchema);