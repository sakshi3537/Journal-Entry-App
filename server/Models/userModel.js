import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    profilePic: String,
    friends : {
        type: [String],
        default: []
    }
});

const userModel= mongoose.model('userModel',userSchema);

export default userModel;