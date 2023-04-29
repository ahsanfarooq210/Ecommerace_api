import express from 'express'
import { verifyToken, verifyTokenAndAdmin, verifyTokenAuthorization } from './verifyToken.js'
import { deleteUser, editUser, getAllUsers, getUser, getUserStats } from '../controller/user.js'

const router = express.Router()

// UPDATE
router.put('/:id', verifyTokenAuthorization, editUser)

// DELETE
router.delete('/:id', verifyTokenAuthorization, deleteUser)

// GET USER
router.get('/find/:id', verifyTokenAndAdmin, getUser)

// GET ALL USER
router.get('/', verifyTokenAndAdmin, getAllUsers)

// GET USER STATS
router.get('/stats', verifyTokenAndAdmin, getUserStats)

export default router
