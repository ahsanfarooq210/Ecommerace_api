import express from 'express'
import { verifyTokenAndAdmin, verifyTokenAuthorization } from './verifyToken.js'
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    updateProduct
} from './../controller/product-controller.js';


const router = express.Router()

//CREATE
router.post("/",verifyTokenAndAdmin,createProduct)

// UPDATE
router.put('/:id', verifyTokenAndAdmin, updateProduct)

// DELETE
router.delete('/:id', verifyTokenAuthorization, deleteProduct)

// GET Product
router.get('/find/:id', getProduct)

// GET ALL PRODUCTS
router.get('/', verifyTokenAndAdmin, getAllProducts)


export default router
