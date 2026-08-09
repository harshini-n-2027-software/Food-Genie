import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
const navigate = useNavigate();

// =====================================================
// GET CORRECT FOOD IMAGE
// =====================================================

const getFoodImage = () => {
const name = recipe?.name?.toLowerCase().trim() || "";


if (name.includes("chicken biryani")) {
  return "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=900&q=85";
}

if (name.includes("mango smoothie")) {
  return "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=85";
}

if (name.includes("pancake")) {
  return "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85";
}

return recipe?.image || "";

};

// =====================================================
// GET CATEGORY CLASS
// =====================================================

const getCategoryClass = () => {
const category =
recipe?.category?.toLowerCase().trim() || "";


if (
  category.includes("indian") ||
  category.includes("biryani") ||
  category.includes("curry")
) {
  return "category-indian";
}

if (
  category.includes("italian") ||
  category.includes("pizza") ||
  category.includes("pasta")
) {
  return "category-italian";
}

if (
  category.includes("dessert") ||
  category.includes("sweet")
) {
  return "category-dessert";
}

if (
  category.includes("healthy") ||
  category.includes("salad")
) {
  return "category-healthy";
}

if (
  category.includes("breakfast")
) {
  return "category-breakfast";
}

return "category-default";


};

// =====================================================
// VIEW RECIPE
// =====================================================

const handleViewRecipe = () => {
if (!recipe?._id) {
console.error(
"Recipe ID is missing:",
recipe
);
return;
}


navigate(`/recipe/${recipe._id}`);


};

// =====================================================
// IMAGE FALLBACK
// =====================================================

const handleImageError = (event) => {
event.currentTarget.onerror = null;


if (
  recipe?.image &&
  event.currentTarget.src !== recipe.image
) {
  event.currentTarget.src = recipe.image;
  return;
}

event.currentTarget.src =
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85";


};

// =====================================================
// COMPONENT
// =====================================================

return ( <article className="recipe-card">


  {/* =================================================
      FOOD IMAGE
  ================================================= */}

  <div className="recipe-image-wrapper">

    <img
      src={getFoodImage()}
      alt={recipe?.name || "Food"}
      className="recipe-image"
      onError={handleImageError}
    />

    <div className="image-overlay"></div>

    <div className="recipe-image-shine"></div>


    {/* =================================================
        CATEGORY BADGE
    ================================================= */}

    {recipe?.category && (
      <div
        className={`recipe-category ${getCategoryClass()}`}
      >
        {recipe.category}
      </div>
    )}

  </div>


  {/* =================================================
      CARD CONTENT
  ================================================= */}

  <div className="recipe-content">

    {/* =================================================
        TITLE
    ================================================= */}

    <div className="recipe-title-row">

      <h2>
        {recipe?.name || "Untitled Recipe"}
      </h2>

      <span className="recipe-star">
        ★
      </span>

    </div>


    {/* =================================================
        DESCRIPTION
    ================================================= */}

    {recipe?.description && (
      <p className="recipe-description">
        {recipe.description}
      </p>
    )}


    {/* =================================================
        RECIPE INFORMATION
    ================================================= */}

    <div className="recipe-info">

      {/* COOKING TIME */}

      {recipe?.cookingTime && (
        <div className="recipe-detail time-detail">

          <span className="detail-icon">
            ⏱
          </span>

          <div className="detail-text">

            <span className="detail-label">
              Time
            </span>

            <span className="detail-value">
              {recipe.cookingTime}
            </span>

          </div>

        </div>
      )}


      {/* DIFFICULTY */}

      {recipe?.difficulty && (
        <div className="recipe-detail difficulty-detail">

          <span className="detail-icon">
            ◈
          </span>

          <div className="detail-text">

            <span className="detail-label">
              Difficulty
            </span>

            <span className="detail-value">
              {recipe.difficulty}
            </span>

          </div>

        </div>
      )}


      {/* CALORIES */}

      {recipe?.calories > 0 && (
        <div className="recipe-detail calories-detail">

          <span className="detail-icon">
            🔥
          </span>

          <div className="detail-text">

            <span className="detail-label">
              Calories
            </span>

            <span className="detail-value">
              {recipe.calories} kcal
            </span>

          </div>

        </div>
      )}

    </div>


    {/* =================================================
        VIEW RECIPE BUTTON
    ================================================= */}

    <button
      type="button"
      className="view-recipe-btn"
      onClick={handleViewRecipe}
    >

      <span>
        View Recipe
      </span>

      <span className="button-arrow">
        →
      </span>

    </button>

  </div>

</article>


);
}

export default RecipeCard;
