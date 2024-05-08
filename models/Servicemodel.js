const mongoose =require('mongoose');

serviceSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('servicemodel',serviceSchema);