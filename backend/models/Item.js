import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
}, { timestamps: true });

// Check if model already exists before creating it
const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
