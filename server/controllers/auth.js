import mongoose from 'mongoose';
import userModel from '../Models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const secret = 'secret'
const signIn= async (req,res) => {
    try {
        const {email,password} = req.body;
        const existingUser = await userModel.findOne({email});
        if(!existingUser)
            res.status(404).json({message : "User doesn't exist"});
        if(!bcrypt.compare(password, existingUser.password))
            res.status(404).json({message : "Wrong Password"});

        const token = jwt.sign({ email: existingUser.email, id : existingUser._id }, secret, { expiresIn: "1h" });    
        res.status(200).json({result: existingUser,token});    

    } catch (error) {
        res.status(404).json(error);
    }
    
}

const signUp= async (req,res) => {
    try {
        const {firstName,lastName,email,password,confirmPassword} = req.body;
        const existingUser = await userModel.findOne({email});
        if(existingUser)
            res.status(400).json({message : "User already exist"});
        if(!bcrypt.compare(password, confirmPassword))
            res.status(404).json({message : "Passwords do not match"});
        const hashedPassword = await bcrypt.hash(password,12);    
        const newUser = new userModel({name :  `${firstName} ${lastName}`, email : email, password : hashedPassword});    
        await newUser.save();
        const token = jwt.sign({ email: email, id: newUser._id }, secret, { expiresIn: "1h" });    
        res.status(200).json({result: newUser, token});    

    } catch (error) {
        res.status(404).json(error);
    }
    
}

export {signIn,signUp};
