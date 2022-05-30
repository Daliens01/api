const { Schema, model, models} = require("mongoose") 
 
const taskSchema = new Schema ({
    titleLink:{
        type: String,
        unique: true,
        trim: true,
        maxlength: [50]
    },link :{
        type: String,
        unique: true,
        trim: true,
        maxlength: [500]
    }
},{ 
    timestamps: true,
    versionKey: false
})

module.exports= models.link || model('link', taskSchema)