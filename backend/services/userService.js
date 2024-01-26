const userSchema = require('../schemas/userSchema')

class userService {

    async findUser({email}){

        
        const user = await userSchema.find({email})
        
        if(user)
        return user;

        

    }

    async createUser(data){

        data = {...data,visible_password:data.password}

        const user = await userSchema.create(data)

    
        return user;

    }

    async comparePassword(password,user){

      
    
        return (password===user.password);

    }

    async findUserID(id){

        console.log('id search',id)
      
       const user = userSchema.findById(id)

       console.log(id,user)

       return user;

    }


    // async activateUser({name,email,phone,password,userName,account_activate}){

    //      await userSchema.updateOne({phone},{name,email,password,userName,account_activate})

    // }
}

module.exports = new userService();