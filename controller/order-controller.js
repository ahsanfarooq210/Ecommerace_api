import Order from "../models/Order";
import Orders from "../models/Order";

export const createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Orders.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder)
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteOrder = async (req, res) => {
    try {
        await Orders.findByIdAndDelete(req.params.id)
        res.status(200).json("Order Deleted")
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const getUserOrders = async (req, res) => {
    try {
        const orders = await Orders.find({ userId: req.params.id });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Orders.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const getMontlyIncome=async(req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth=new Date(new Date().setMonth(lastMonth.getMonth()-1))
    try {
      const order = await Orders.aggregate([
        {
          $match: {
            createdAt: { $gt: previousMonth },
          },
        },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales:"$amount"
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: '$sales' },
          },
        },
      ]);
      res.status(200).json(order)
    } catch (error) {
      res.status(500).json(error);
    }
}
