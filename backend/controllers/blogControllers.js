const blogSchema = require('../schemas/blogSchema')
const blogService = require('../services/blogService.js')


exports.createBlog=async(req,res)=>{

    console.log('creating blogs',req.body)

    const {heading,text,category} = req.body;

    if(!heading || !text)
    {
        res.status(400).send({
            createBlog:false,
            message:"All fields required to create blog!"
        })

        return new Error('All fields required to create blog!')
    }

    try{

    const author = req.user.name
    const author_id = req.user._id

    
    await blogService.createBlog({heading,text,author,author_id,category})

    res.status(200).send({
        createBlog:true,
        message:'New blog created!'
    })

    }catch(error)
    {
        res.status(500).send({
            createBlog:false,
            message:`Unable to create blog due to ${error}`
        })

        return new Error(`Unable to create blog due to ${error}`)
    }





}



//deleting the blog
exports.deleteBlog = async(req,res)=>{

    console.log('deleting blog with ....id ',req.user,req.params)

    const blogTarget = await blogService.findBlog({blogId:req.params.id,author_id:req.user._id})

    if(blogTarget.length==0)
    {
        res.status(400).send({
            deleteBlog:false,
            message:`Target blog not found!`
        })

        return new Error('Target blog not found!')
    }


    try{

        await blogService.deleteBlog(blogTarget[0])

        res.status(200).send({
            deleteBlog:true,
            message:"Target blog is deleted!"
        })

    }catch(error)
    {
        res.status(500).send({
            deleteBlog:false,
            message:`Unable to delete the target blog due to ${error}`
        })

        return new Error(`Unable to delete the target blog due to ${error}`)
    }
}




// Get all blogs
exports.getAllBlog=async(req,res)=>{

    console.log('fetching all blogs')

    try
    {
        const Blogs = await blogService.getAllblogs()

        res.status(200).send({
            status:true,
            Blogs,
        })

    }catch(error)
    {
        res.status(500).send({
            status:false,
            message:`Unable to fetch all blogs due to ${error}`
        })

        return new Error(`Unable to fetch all blogs due to ${error}`)
    }
}


// get blog by particular id
exports.getBlogById = async(req,res)=>{

    console.log('fetching individual blog by id ',req.params.id)

    try{

        let blog = await blogService.findBlogByID(req.params.id)

        if(blog.length==0)
        {
            res.status(401).send({
                status:false,
                message:"Unable to get specific Blog!"
            })

            return new Error("Unable to get specific Blog!")
        }

        res.status(200).send({
            status:true,
            Blog:blog[0]
        })
    }catch(error)
    {
        res.status(500).send({
            status:false,
            message:`Unable to get particular blog due to ${error}`
        })

        return new Error(`Unable to get particular blog due to ${error}`)
    }
}