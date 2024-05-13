const crypto = require('crypto');
const sectretKey=crypto.randomBytes(32).toString('hex')
console.log('secret key', sectretKey)

//module.exports=sectretKey