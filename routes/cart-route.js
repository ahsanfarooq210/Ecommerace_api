import express from "express";
import {
  verifyTokenAndAdmin,
  verifyTokenAuthorization,
} from "./verifyToken.js";
import {
  createCart,
  deleteCart,
  getAllCart,
  getCart,
  updateCart,
} from "../controller/cart-controller.js";

const router = express.Router();

//CREATE
router.post("/", verifyTokenAndAdmin, createCart);

// UPDATE
router.put("/:id", verifyTokenAuthorization, updateCart);

// DELETE
router.delete("/:id", verifyTokenAuthorization, deleteCart);

// GET CART
router.get("/find/:userid", getCart);

// GET ALL Cart
router.get("/", verifyTokenAndAdmin, getAllCart);

export default router;
