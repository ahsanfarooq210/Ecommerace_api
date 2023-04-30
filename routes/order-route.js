import express from "express";
import {
  verifyTokenAndAdmin,
  verifyTokenAuthorization,
} from "./verifyToken.js";
import { createOrder, deleteOrder, getAllOrders, getMontlyIncome, getUserOrders, updateOrder } from "../controller/order-controller.js";

const router = express.Router();

//CREATE
router.post("/", verifyTokenAndAdmin, createOrder);

// UPDATE
router.put("/:id", verifyTokenAuthorization, updateOrder);

// DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

// GET USER CART
router.get("/find/:userid", getUserOrders);

// GET ALL Cart
router.get("/", verifyTokenAndAdmin, getAllOrders);

//GET MONTHLY INCOME
router.get('/income',verifyTokenAndAdmin,getMontlyIncome)

export default router;
