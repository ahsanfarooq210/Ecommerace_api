import Cart from "../models/Cart.js";


export const createCart=async (req,res)=>{
    
}

export const updateCart=async (req,res)=>{
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {new:true}
        )
        res.status(200).json(updatedCart)
    }catch (error){
        res.status(500).json(error.message)
    }
}

export const deleteCart=async (req,res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted successfully")
    }catch (error){
        res.status(500).json(error.message)
    }
}

export const getCart=async (req,res)=>{
    try {
        const cart = await Cart.findOne({userId: req.params.userid})
        res.status(200).json(cart)
    }catch (error){
        res.status(500).json(error.message)
    }
}

export const getAllCart =async (req,res)=>{
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    }
    catch (error){
        res.status(500).json(error.message)
    }
}