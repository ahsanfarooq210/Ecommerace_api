import express from "express";
import {
  verifyTokenAndAdmin,
  verifyTokenAuthorization,
} from "./verifyToken.js";
import { createOrder, deleteOrder, getAllOrders, getOrder, updateOrder } from "../controller/order-controller.js";

const router = express.Router();

//CREATE
router.post("/", verifyTokenAndAdmin, createOrder);

// UPDATE
router.put("/:id", verifyTokenAuthorization, updateOrder);

// DELETE
router.delete("/:id", verifyTokenAuthorization, deleteOrder);

// GET CART
router.get("/find/:userid", getOrder);

// GET ALL Cart
router.get("/", verifyTokenAndAdmin, getAllOrders);

export default router;
