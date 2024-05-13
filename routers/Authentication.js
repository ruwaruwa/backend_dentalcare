const jwt= require('jsonwebtoken');
const bycrtp= require('bcrypt');
const usermodel= require('../models/usersmodel');
const authentication=(userROLes)=>{
    return async(req,res,next)=>{
        const tokenheader= req.header['autherization'];

        if(!tokenheader) return res.status(401).send('access token is not provider, authorization denied');
            const token=tokenheader.split(' ')[1];
            //break
            console.log('token ayaad heshay',token)
        
        try{
            const verified=jwt.verify(token,process.env.SECRET_KEY);
            const user=await usermodel.findOne(verified.id);
            console.log("token data",verified.id)
            if(!user) return res.status(404).send('user not found');
            if(user)
            if(!userROLes.includes(user.role))return res.status(401).send('you are not allowed to access this role');
            console.log(user.role)
            // req.user=verified;
            next();
        }catch(err){
            res.status(400).json({msg:'token is not valid'});
        }
    }
}

module.exports=authentication;