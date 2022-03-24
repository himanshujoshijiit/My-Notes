const monggose = require('mongoose')


const noteSchema = new monggose.Schema({

    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    user_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true

})


module.exports = monggose.model('Notes',noteSchema)