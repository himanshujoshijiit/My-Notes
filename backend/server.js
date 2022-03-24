require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const noteRouter = require('./routes/noteRouter')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/users',userRouter)
app.use('/api/notes',noteRouter)

app.get('/',(req,res)=>{
    res.json('hello everyone this is my notes app')
})
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log('server is running on port',PORT)
})

//connect to mongodb

const URI = process.env.MONGODB_URL
mongoose.connect(URI,{
     
    useUnifiedTopology: true
},err =>{
    if(err) throw err;
    console.log('Connected to MongoDB') 
})