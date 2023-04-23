import express from 'express'
import { registerUser, userLogin } from '../controller/auth-controller.js'

const router=express.Router()


//REGISTER
router.post("/register",registerUser)

//LOGIN
router.post('/login',userLogin)


export default router


