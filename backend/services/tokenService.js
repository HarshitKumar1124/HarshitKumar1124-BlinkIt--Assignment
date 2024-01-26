const jwt = require('jsonwebtoken')


class tokenService{

    async generateToken(userId){

        console.log('generate token for id',userId)

        return jwt.sign({id:userId},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRES,
        })

    }
}

module.exports = new tokenService();