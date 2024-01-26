const express = require('express')
const app = express();
// const BodyParser = require('body-parser')
app.use(express.json())

//    in latest version of express... inbuild bodyparser are not installed.
// due to which json data can't be convert in objects in API Calling
const cors = require('cors')
app.use(cors())

// app.use(BodyParser.json())
// app.use(BodyParser.urlencoded({extended:true}))


// using routes for User services
const UserRoutes = require('./routes/userRoutes')
app.use('/api/v1',UserRoutes)


// using routes for blog services
const blogRoutes = require('./routes/blogRoutes')
app.use('/api/v1',blogRoutes)


module.exports = app
