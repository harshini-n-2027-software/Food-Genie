const express = require("express");

const {
  addFood,
  getFoods,
  getFoodById,
  updateFood,
  deleteFood,
  searchFoods,
  bulkAddFoods,
  bulkUpdateFoods,
} = require("../controllers/foodController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Add food
router.post("/", protect, addFood);

// Get all foods
router.get("/", getFoods);

// Search foods
router.get("/search", searchFoods);

// Bulk add foods
router.post("/bulk", protect, bulkAddFoods);

// Bulk update foods
router.put("/bulk-update", protect, bulkUpdateFoods);

// Get single food
router.get("/:id", getFoodById);

// Update food
router.put("/:id", protect, updateFood);

// Delete food
router.delete("/:id", protect, deleteFood);

module.exports = router;