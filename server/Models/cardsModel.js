import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    title: String,
    name: String,
    creator: String,
    tags : [String],
    caption : String,
    imageFile: String,
    createdAt:{
        type: Date,
        default: Date.now
    },
    likes:{
        type: [String],
        default: []
    }
});

const cardModel= mongoose.model('cardModel',cardSchema);

export default cardModel;