import express from 'express'
const router=express.Router();
import {fetchCards,createCard,deleteCard,updateCard,likeCard} from '../controllers/cards.js';

router.get('/',fetchCards);
router.post('/',createCard);
//router.get('/:id',fetchCardById);
router.delete('/:id',deleteCard);
router.patch('/:id',updateCard);
router.patch('/:id/like',likeCard);

export default router;