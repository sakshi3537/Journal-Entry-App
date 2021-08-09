import express from 'express'
import auth from '../middleware/auth.js'
const router=express.Router();
import {fetchCards,createCard,deleteCard,updateCard,likeCard,fetchMyCards} from '../controllers/cards.js';


router.get('/',auth,fetchCards);
router.post('/',auth,createCard);
//router.get('/:id',fetchCardById);
router.delete('/:id',auth,deleteCard);
router.patch('/:id',auth,updateCard);
router.patch('/:id/like',auth,likeCard);
router.get('/myCards',auth,fetchMyCards);
export default router;