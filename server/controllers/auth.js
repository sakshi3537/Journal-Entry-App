import mongoose from 'mongoose';
import userModel from '../Models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const secret = 'secret'
const signIn= async (req,res) => {
    try {
        const {Email,Password} = req.body;
        const existingUser = await userModel.findOne({email:Email});
        if(!existingUser)
            res.status(200).json( "User doesn't exist");
        bcrypt.compare(Password, existingUser.password)
        .then((r) => {
            if(!r){
            res.status(200).json( "Wrong Password");
            }
            else{
                const token = jwt.sign({ email: existingUser.email, id : existingUser._id }, secret, { expiresIn: "1h" });    
                res.status(200).json({result: existingUser,token});    
            }
        })
        .catch(() => {console.log("Exception thrown")});
    } catch (error) {
        res.status(404).json(error);
    }
    
}

const signUp= async (req,res) => {
    try {
        const {FirstName,LastName,Email,Password,ConfirmPassword} = req.body;
        const existingUser = await userModel.findOne({Email});
        if(existingUser)
            res.status(400).json({message : "User already exist"});
        if(!bcrypt.compare(Password, ConfirmPassword))
            res.status(404).json({message : "Passwords do not match"});
        const hashedPassword = await bcrypt.hash(Password,12);    
        const newUser = new userModel({name :  `${FirstName} ${LastName}`, email : Email, password : hashedPassword});    
        //console.log(newUser);
        await newUser.save();
        const token = jwt.sign({ email: Email, id: newUser._id }, secret, { expiresIn: "1h" });    
        res.status(200).json({result: newUser, token});    

    } catch (error) {
        res.status(404).json(error);
    }
    
}

export {signIn,signUp};
