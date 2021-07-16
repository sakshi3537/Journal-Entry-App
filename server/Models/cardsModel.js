import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    title: String,
    creator: String,
    tags : [String],
    caption : String,
    imageFile: String,
    createdAt:{
        type: Date,
        default: Date.now
    },
    likeCount:{
        type: Number,
        default: 0
    }
});

const cardModel= mongoose.model('cardModel',cardSchema);

export default cardModel;