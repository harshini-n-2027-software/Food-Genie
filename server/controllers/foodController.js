const Food = require("../models/Food");

// =====================================================
// ADD A NEW FOOD
// =====================================================

const addFood = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      image,
      available,
      cookingTime,
      calories,
      difficulty,
      ingredients,
      steps,
    } = req.body;

    const food = await Food.create({
      name,
      description,
      price,
      category,
      image,
      available,
      cookingTime,
      calories,
      difficulty,
      ingredients,
      steps,
    });

    res.status(201).json({
      message: "Food added successfully",
      food,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =====================================================
// GET ALL FOODS
// =====================================================

const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();

    res.status(200).json({
      message: "Foods fetched successfully",
      foods,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =====================================================
// GET ONE FOOD BY ID
// =====================================================

const getFoodById = async (req, res) => {
  try {
    const { id } = req.params;

    const food = await Food.findById(id);

    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    res.status(200).json({
      message: "Food fetched successfully",
      food,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =====================================================
// UPDATE ONE FOOD
// =====================================================

const updateFood = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFood = await Food.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedFood) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    res.status(200).json({
      message: "Food updated successfully",
      food: updatedFood,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =====================================================
// DELETE ONE FOOD
// =====================================================

const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedFood = await Food.findByIdAndDelete(id);

    if (!deletedFood) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    res.status(200).json({
      message: "Food deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =====================================================
// SEARCH FOODS
// =====================================================

const searchFoods = async (req, res) => {
  try {
    const { keyword } = req.query;

    if (!keyword || keyword.trim() === "") {
      return res.status(400).json({
        message: "Please provide a search keyword",
      });
    }

    const foods = await Food.find({
      $or: [
        {
          name: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          category: {
            $regex: keyword,
            $options: "i",
          },
        },
      ],
    });

    res.status(200).json({
      message: "Search results",
      foods,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =====================================================
// BULK ADD FOODS
// =====================================================

const bulkAddFoods = async (req, res) => {
  try {
    const { foods } = req.body;

    if (!Array.isArray(foods) || foods.length === 0) {
      return res.status(400).json({
        message: "Please provide a non-empty foods array",
      });
    }

    const createdFoods = await Food.insertMany(foods);

    res.status(201).json({
      message: "Foods added successfully",
      count: createdFoods.length,
      foods: createdFoods,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =====================================================
// BULK UPDATE FOODS
// =====================================================

const bulkUpdateFoods = async (req, res) => {
  try {
    const { foods } = req.body;

    if (!Array.isArray(foods) || foods.length === 0) {
      return res.status(400).json({
        message: "Please provide a non-empty foods array",
      });
    }

    const updatedFoods = [];

    for (const food of foods) {
      const updatedFood = await Food.findOneAndUpdate(
        {
          name: food.name,
        },
        {
          category: food.category,
          image: food.image,
          cookingTime: food.cookingTime,
          calories: food.calories,
          difficulty: food.difficulty,
          ingredients: food.ingredients,
          steps: food.steps,
        },
        {
          new: true,
          runValidators: true,
        }
      );

      if (updatedFood) {
        updatedFoods.push(updatedFood);
      }
    }

    res.status(200).json({
      message: "Foods updated successfully",
      count: updatedFoods.length,
      foods: updatedFoods,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =====================================================
// EXPORT ALL CONTROLLERS
// =====================================================

module.exports = {
  addFood,
  getFoods,
  getFoodById,
  updateFood,
  deleteFood,
  searchFoods,
  bulkAddFoods,
  bulkUpdateFoods,
};