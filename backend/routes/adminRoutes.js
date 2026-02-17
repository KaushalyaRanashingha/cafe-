import express from "express";
import Item from "../models/item.js"; 
import User from "../models/User.js"; 

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 }).limit(5);
    const itemCount = await Item.countDocuments();
    const userCount = await User.countDocuments();

    res.render("admin/dashboard", {
      items,
      itemCount,
      userCount,
      activePage: "dashboard",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/items", async (req, res) => {
  const items = await Item.find();
  res.render("admin/items", { items, activePage: "items" });
});

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.render("admin/users", { users, activePage: "users" });
});

export default router;
