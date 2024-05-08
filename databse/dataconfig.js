const mongoose = require('mongoose');
const dataconfig=()=>{
  try {
    mongoose.connect('mongodb+srv://ruwaydaa510:123@cluster0.b6uyopb.mongodb.net/Dentalcare')
    console.log('connected to mongodb')
  } catch (error) {
    console.log('databse failed',error)
  }
}
module.exports=dataconfig