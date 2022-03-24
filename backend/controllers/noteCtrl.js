const Note = require('../models/noteModel')

const noteCtrl = {
    getNotes: async (req,res) =>{
        try{
            const notes = await notes.find({user_id: req.user.id})
            res.json(notes)
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },createNote: async(req,res)=>{
        try{
            const {title,content,date} = req.body;
            
            const newNote = new Note({
                title,
                content,
                date,
                user_id: req.user.id,
                name: req.user.name
            })
          await newNote.save()
         res.json({msg: "Created a Note"})
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    deleteNote: async(req,res)=>{
        try{
            await Notes.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Note"})

        }catch(err){
             return res.status(500).json({msg: err.message})
        }
    },
    updateNote: async(req,res)=>{
        try{
            const {title,content,date} = req.body;
            await Notes.findOneAndUpdate({id: req.params.id},{
                title,
                content,
                date
            })

        }catch (err){
            return res.status(500).json({msg: err.message})
        }
    },
    getNote: async(req,res)=>{
        try{
            const note = await Note.findById(req.params.id)
            res.json(note)

        }catch (err){
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = noteCtrl