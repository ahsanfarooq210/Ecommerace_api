import express from 'express'
import { getUserTest, userPostTest } from '../controller/user.js'

const router=express.Router()

router.get('/usertest',getUserTest)

router.post('/userposttest',userPostTest)

export default router


