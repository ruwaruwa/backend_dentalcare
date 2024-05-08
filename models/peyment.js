const mongoose =require('mongoose');

peymentSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    serviceid:{
    type:mongoose.Types.ObjectId,
required:true
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
    descrbtion:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },


})

module.exports=mongoose.model('peymentmodel',peymentSchema);