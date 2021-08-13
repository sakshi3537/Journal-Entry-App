import mongoose from 'mongoose';
import userModel from '../Models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import validateEmail from '../authUtilities.js'

const secret = 'secret'
const signIn= async (req,res) => {
    try {
        let {Email,Password} = req.body;
        Email=Email.trim();Email=Email.toLowerCase();
        const existingUser = await userModel.findOne({email:Email});
        if(!existingUser)
            res.status(200).json( "User doesn't exist");
        else{
        bcrypt.compare(Password, existingUser.password)
        .then((r) => {
            if(!r){
            res.status(200).json( "Wrong Password");
            }
            else{
                const token = jwt.sign({ email: existingUser.email, id : existingUser._id }, secret);    
                res.status(200).json({result: existingUser,token});    
            }
        })
        .catch(() => {console.log("Exception thrown")});
    }
    } catch (error) {
        res.status(404).json(error);
    }
    
}

const signUp= async (req,res) => {
    try {
        let {FirstName,LastName,Email,Password,ConfirmPassword,profilePic} = req.body;
        Email=Email.trim();Email=Email.toLowerCase();
        if(!validateEmail(Email)){
            res.status(200).json("Invalid Email");
        }
        else{
        const existingUser = await userModel.findOne({email:Email});
        if(existingUser)
            res.status(200).json( "User Already exists");
        else if(ConfirmPassword!==Password)
            res.status(200).json("Passwords do not match");
        else{
            const hashedPassword= await bcrypt.hash(Password,12);
            const newUser = new userModel({name :  `${FirstName} ${LastName}`, email : Email, password : hashedPassword,profilePic:profilePic});  
            newUser.friends.push(newUser._id);  
            await newUser.save();
            const token = jwt.sign({ email: Email, id: newUser._id }, secret);    
            res.status(200).json({result: newUser, token}); 
        }
    }
    } catch (error) {
        res.status(404).json(error);
    }
    
}

export {signIn,signUp};
