import mongoose from 'mongoose';
import userModel from '../Models/userModel.js'

const fetchAllUsers= async (req,res) => {
    try {
        const users= await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json(error);
    }
    
}


const fetchUsers= async (req,res) => {
    try {
        const {searchQuery}= req.params;
        const users = await userModel.find();
        const query = users.filter((user)=> user.name.includes(searchQuery));
        res.status(200).json(query);
    } catch (error) {
        res.status(404).json(error);
    }
    
}


const addFriend= async (req,res) => {
    if (!req.userId) {
        res.json({ message: "Unauthenticated" });
      }
      else{
    
    const {id}= req.params;
    try {
        const user = await userModel.findById(req.userId);
        const index = user.friends.findIndex((tid) => tid ===String(id));
            if (index === -1) {
                user.friends.push(id);
            } else {
                user.friends = user.friends.filter((tid) => tid !== String(id));
              }
            
        const updatedUser=await userModel.findByIdAndUpdate(id,user,{new:true});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json(error);
    }
}
    
}
export {fetchAllUsers,fetchUsers,addFriend};