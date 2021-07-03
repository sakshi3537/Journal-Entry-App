import mongoose from 'mongoose';
import cardModel from '../Models/cardsModel.js'


const fetchCards= async (req,res) => {
    try {
        const cards= await cardModel.find();
        res.status(200).json(cards);
        console.log(cards);
    } catch (error) {
        res.status(404).json(error);
    }
    
}
// lets see what happens
const createCard= async (req,res) => {
    const card = req.body;
    const newCard= new cardModel(card);
    try {
        await newCard.save();
        res.status(201);
    } catch (error) {
        
        res.status(409).json(error);
    }
}

const fetchCardById = async (req,res)=> {
    const {id} = req.params;
    try {
        const card= await cardModel.find(id);
        res.status(200).json(card); 
    } catch (error) {
        res.status(404).json(error);
    }
}

const deleteCard = async (req,res) => {
    const {id}= req.params;
    try {
        await cardModel.findByIdAndRemove(id);
        res.status(200);
    } catch (error) {
        res.status(404).json(error);
    }
}

const updateCard = async (req,res) => {
    const {id}= req.params;
    const card=req.body;
    try {
        const updatedCard=cardModel.findByIdAndUpdate(id,card,{new:true});
        res.status(200);
    } catch (error) {
        res.status(404).json(error);
    }
}

const likeCard = async (req,res)=>{
    const {id}= req.params;
    const card=cardModel.findById(id);
    try {
        const updatedCard=cardModel.findByIdAndUpdate(id,{likeCount:card.likeCount+1},{new:true});
        res.status(200);
    } catch (error) {
        res.status(404).json(error);
    }
}

export {fetchCards,createCard,fetchCardById,deleteCard,updateCard,likeCard};