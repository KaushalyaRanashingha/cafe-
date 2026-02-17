import express from "express";
import Item from "../models/Item.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "./public/uploads";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Get all items (frontend)
router.get("/", async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin page (renders EJS)
router.get("/admin", async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.render("admin/item", { items });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add item
router.post("/admin/add", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file ? "/uploads/" + req.file.filename : null;

    const newItem = new Item({ name, price, description, image });
    await newItem.save();
    res.json({ success: true, item: newItem });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Edit item
router.put("/admin/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const updateData = { name, price, description };
    if (req.file) updateData.image = "/uploads/" + req.file.filename;

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json({ success: true, item: updatedItem });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete item
router.delete("/admin/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
