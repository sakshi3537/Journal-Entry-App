import mongoose from 'mongoose';
import cardModel from '../Models/cardsModel.js'


const fetchCards= async (req,res) => {
    try {
        const cards= await cardModel.find();
        cards.reverse();
        res.status(200).json(cards);
    } catch (error) {
        res.status(404).json(error);
    }
    
}


const createCard= async (req,res) => {
    const card = req.body;
    const newCard= new cardModel({title: card.title, creator: card.creator, tags: card.tags, caption: card.caption, imageFile: card.imageFile});
    //console.log(newCard);
    try {
        //console.log("yupp");
        await newCard.save();
        //console.log("hry");
        res.status(201).json(newCard);
    } catch (error) {
        
        res.status(409).json(error);
    }
}

/*const fetchCardById = async (req,res)=> {
    const {id} = req.params;
    try {
        const card= await cardModel.findById(id);
        res.status(200).json(card); 
    } catch (error) {
        res.status(404).json(error);
    }
}*/

const deleteCard = async (req,res) => {
    const {id}= req.params;
    try {
        await cardModel.findByIdAndRemove(id);
        res.status(200).json("Card Deleted Successfully");
    } catch (error) {
        res.status(404).json(error);
    }
}

const updateCard = async (req,res) => {
    const {id}= req.params;
    const card=req.body;
    try {
        //console.log("Hi");
        //console.log(card);
        //console.log(id);
        const updatedCard=await cardModel.findByIdAndUpdate(id,card,{new:true});
        res.status(200).json(updatedCard);
    } catch (error) {
        res.status(404).json(error);
    }
}

const likeCard = async (req,res)=>{
    const {id}= req.params;
    const card=await cardModel.findById(id);
    try {
        const updatedCard=await cardModel.findByIdAndUpdate(id,{likeCount:card.likeCount+1},{new:true});
        res.status(200).json(updatedCard);
    } catch (error) {
        res.status(404).json(error);
    }
}

export {fetchCards,createCard,deleteCard,updateCard,likeCard};