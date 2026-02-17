import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use("/uploads", express.static("public/uploads"));
app.use(express.static("public"));

// Routes
app.use("/api/users", userRoutes);
app.use("/admin", adminRoutes); // dashboard, etc.
app.use("/items", itemRoutes);  // frontend items + admin add/edit/delete

// EJS setup
app.set("view engine", "ejs");
app.set("views", "./views");

// Test
app.get("/", (req, res) => res.send("Backend is running"));

// Start
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
