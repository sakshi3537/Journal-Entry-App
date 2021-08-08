import express from 'express'
import auth from '../middleware/auth.js'
const router=express.Router();
import {fetchAllUsers,fetchUsers,addFriend} from '../controllers/users.js';

router.get('/allUsers',auth,fetchAllUsers);

router.get('/users/:searchQuery',auth,fetchUsers);
router.patch('/addFriend/:id',auth,addFriend);
export default router;