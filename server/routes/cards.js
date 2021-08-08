import express from 'express'
import auth from '../middleware/auth.js'
const router=express.Router();
import {fetchCards,createCard,deleteCard,updateCard,likeCard} from '../controllers/cards.js';


router.get('/',auth,fetchCards);
router.post('/',auth,createCard);
//router.get('/:id',fetchCardById);
router.delete('/:id',auth,deleteCard);
router.patch('/:id',auth,updateCard);
router.patch('/:id/like',auth,likeCard);
export default router;