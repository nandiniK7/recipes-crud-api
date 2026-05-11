require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const recipeRoutes = require("./routes/recipeRoutes");

const app = express();


// Connect Database
connectDB();


// Middlewares
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/recipes", recipeRoutes);


// Default Route
app.get("/", (req, res) => {
  res.send("Recipes API is running");
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});