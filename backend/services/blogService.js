const blogSchema = require('../schemas/blogSchema')

class blogService{

    async createBlog(body){

        console.log('creating blog ',body)

        let user = await blogSchema.create(body);

        return user
    }

    async findBlog({blogId,author_id}){

        console.log(`finding blog with id ${blogId} and author Id ${author_id}`)

        let blog = await blogSchema.find({_id:blogId,author_id});

        return blog
    }

    async deleteBlog(targetBlog){

        await targetBlog.deleteOne()
    }

    async getAllblogs(){

        return await blogSchema.find()
    }



    async findBlogByID(id){

        return await blogSchema.find({_id:id})
    }


}

module.exports = new blogService();