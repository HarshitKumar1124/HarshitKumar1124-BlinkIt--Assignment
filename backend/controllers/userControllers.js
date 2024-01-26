const userService = require('../services/userService.js')
const fs = require('fs')
const tokenService = require('../services/tokenService.js')





// create new user 
exports.createUser = async(req,res)=>{

    console.log('create user')

    const {email,name,password} = req.body;

    console.log(req.body)

    let user = await userService.findUser(req.body);

    console.log('user search - ',user)

    if(user.length!=0)
    {
        res.status(400).send({
            register:false,
            message:"Account with similar Email already exists!"
        })
    }

    if(user.length==0)
    {


        try{

            user = await userService.createUser(req.body)

            accessToken = await tokenService.generateToken(user._id);

            console.log('token',accessToken)


             // storing token in file/cookies

            fs.writeFileSync('cookie_local_storage.txt',accessToken,function (err) {
                if (err) throw err;
                else
                console.log('Cookie saved!');
            })

        res.status(200).send({
            register:true,
            accessToken,
            message:"Account has been created!"
        })

        }
        catch(error)
        {
            res.status(500).send({
                register:false,
                message:`Unable to create User account due to ${error}`
            })

            console.log(new Error('Internal Server Error'))

            return new Error('Internal Server Error')
        }
        
    }


}

// existing user
exports.loginUser = async (req,res)=>{

    console.log('login karo',req.body)

    const {email,password} = req.body;

    if(!email || !password)
    {
        res.status(400).send({
            login:false,
            message:"All fields required!"
        })

        return new Error(`All fields required!`)
    }


    try{
    
    let target = await userService.findUser(req.body)

    console.log('after finding user',target)

    if(target.length==0)
    {
        res.status(401).send({
            login:false,
            message:"Account credentails are e invalid!"
        })

        return new Error(`Account credentails are invalid!`)
    }

    const value = await userService.comparePassword(password,target[0])

    if(!value){

        res.status(401).send({
            login:false,
            message:"Account creadentials are p invalid!"
        })

        return new Error(`Account credentails are p invalid!`)
    }


    accessToken = await tokenService.generateToken(target[0]._id)

    console.log('loogin accesstoken',accessToken)

    // storing token in file/cookies

    fs.writeFileSync('cookie_local_storage.txt',accessToken,function (err) {
        if (err) throw err;
        else
        console.log('Cookie saved!');
    })
    
    res.status(200).send({
        register:true,
        accessToken,
        message:"Account has been logged in!"
    })





}catch(error)
{
    res.status(500).send({
        login:false,
        message: `Unable to login the account due to ${error}`
    })

    console.log(new Error(`Unable to login the account due to ${error}`))

    return new Error(`Unable to login the account due to ${error}`)
}

 


}


// logged in user
exports.logoutUser = async (req,res)=>{

    console.log('logout karo')

    fs.writeFileSync("cookie_local_storage.txt","",(err)=>{
        if(err)throw err;
    })

    res.status(200).json({
        logout:true,
        message:"Logged out user successfully!"
    })
}


// logged in user
exports.loadUser = async (req,res)=>{

    // console.log('load user karo',req)

   
    res.status(200).send({
        loadUser:true,
        user:req.user
    })

}