const jwt = require('jsonwebtoken')
const userService = require('../services/userService')
const fs = require('fs')

exports.IsAuthenticate = async(req,res,next) =>{

    // fetching stored token

    const fetchedToken = fs.readFileSync("cookie_local_storage.txt","utf8")


    console.log('isAuth',fetchedToken)

    if(!fetchedToken){
        res.status(400).send({
            auth:false,
            message:"User not authenticated!"
        })

        return new Error('User not authenticated!')
    }

   try{

    const decodeData = jwt.verify(fetchedToken,process.env.JWT_SECRET)

    console.log('dECODED',decodeData)

    const User = await userService.findUserID(decodeData.id);

    req.user=User;

    console.log('authenticate load',decodeData,User,req.user)

    next();

   }
   catch(error)
   {
        res.status(401).send({
            auth:false,
            message:`Not authenticated due to ${error}`

        })

        return new Error(`Not authenticated due to ${error}`)
   }

    
}