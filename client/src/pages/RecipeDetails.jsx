import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================================
  // FOOD IMAGE
  // =====================================================

  const getFoodImage = (food) => {
    const name =
      food?.name?.toLowerCase().trim() || "";

    // Chicken Biryani
    if (name.includes("chicken biryani")) {
      return "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=1000&q=85";
    }

    // Mango Smoothie
    if (name.includes("mango smoothie")) {
      return "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=1000&q=85";
    }

    // Pancakes
    if (name.includes("pancake")) {
      return "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85";
    }

    // Margherita Pizza
    if (name.includes("margherita pizza")) {
      return "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85";
    }

    // Creamy Pasta
    if (name.includes("creamy pasta")) {
      return "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85";
    }

    // Other foods use database image
    return food?.image || "";
  };

  // =====================================================
  // FETCH RECIPE
  // =====================================================

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `http://localhost:5000/api/foods/${id}`
        );

        console.log(
          "Recipe Details API response:",
          response.data
        );

        const food =
          response.data?.food ||
          response.data;

        if (!food) {
          setError("Recipe not found.");
          return;
        }

        setRecipe(food);

      } catch (err) {
        console.error(
          "Error fetching recipe:",
          err
        );

        setError(
          "Unable to load this recipe."
        );

      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <main className="recipe-details-page">

        <div className="recipe-loading">

          <div className="recipe-loading-icon">
            🍳
          </div>

          <h2>
            Preparing your recipe...
          </h2>

          <p>
            Food Genie is getting everything ready
            for you.
          </p>

        </div>

      </main>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error || !recipe) {
    return (
      <main className="recipe-details-page">

        <div className="recipe-error">

          <div className="recipe-error-icon">
            🍽️
          </div>

          <h2>
            {error || "Recipe not found"}
          </h2>

          <button
            className="recipe-back-button"
            onClick={() => navigate(-1)}
          >
            ← Back to Recipes
          </button>

        </div>

      </main>
    );
  }

  // =====================================================
  // IMAGE
  // =====================================================

  const recipeImage = getFoodImage(recipe);

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <main className="recipe-details-page">

      {/* =================================================
          BACK BUTTON
      ================================================= */}

      <button
        className="recipe-back-button"
        onClick={() => navigate(-1)}
      >
        <span>←</span>
        Back to Recipes
      </button>


      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section className="recipe-hero">

        {/* =========================
            IMAGE
        ========================= */}

        <div className="recipe-hero-image-wrap">

          <img
            src={recipeImage}
            alt={recipe.name || "Food"}
            className="recipe-hero-image"
            onError={(event) => {

              event.currentTarget.onerror = null;

              if (
                recipe?.image &&
                event.currentTarget.src !== recipe.image
              ) {
                event.currentTarget.src =
                  recipe.image;
              }

            }}
          />

          <div className="image-overlay"></div>

        </div>


        {/* =========================
            INFORMATION
        ========================= */}

        <div className="recipe-hero-content">

          <div className="recipe-eyebrow">
            FOOD GENIE
          </div>

          <h1>
            {recipe.name}
          </h1>

          {recipe.description && (
            <p className="recipe-hero-description">
              {recipe.description}
            </p>
          )}


          {/* =========================
              RECIPE META
          ========================= */}

          <div className="recipe-meta-row">

            {/* COOKING TIME */}

            <div className="recipe-meta-item">

              <div className="recipe-meta-icon">
                ⏱
              </div>

              <div>

                <span>
                  Cooking Time
                </span>

                <strong>
                  {recipe.cookingTime || "N/A"}
                </strong>

              </div>

            </div>


            {/* CALORIES */}

            <div className="recipe-meta-item">

              <div className="recipe-meta-icon">
                🔥
              </div>

              <div>

                <span>
                  Calories
                </span>

                <strong>
                  {recipe.calories || 0} kcal
                </strong>

              </div>

            </div>


            {/* DIFFICULTY */}

            <div className="recipe-meta-item">

              <div className="recipe-meta-icon">
                ★
              </div>

              <div>

                <span>
                  Difficulty
                </span>

                <strong>
                  {recipe.difficulty || "Easy"}
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          RECIPE CONTENT
      ================================================= */}

      <div className="recipe-content">


        {/* =================================================
            INGREDIENTS
        ================================================= */}

        <section className="recipe-content-section">

          <div className="recipe-section-header">

            <div>

              <span className="recipe-section-label">
                WHAT YOU'LL NEED
              </span>

              <h2>
                Ingredients
              </h2>

            </div>

            <span className="recipe-section-count">
              {recipe.ingredients?.length || 0} items
            </span>

          </div>


          <div className="ingredients-list">

            {Array.isArray(recipe.ingredients) &&
            recipe.ingredients.length > 0 ? (

              recipe.ingredients.map(
                (ingredient, index) => {

                  let ingredientText = "";

                  if (
                    typeof ingredient === "string"
                  ) {
                    ingredientText =
                      ingredient;
                  } else if (
                    typeof ingredient === "object" &&
                    ingredient !== null
                  ) {
                    ingredientText =
                      ingredient.name ||
                      ingredient.ingredient ||
                      "";
                  }

                  return (
                    <div
                      className="ingredient-row"
                      key={index}
                    >

                      <span className="ingredient-number">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span className="ingredient-check">
                        ✓
                      </span>

                      <span className="ingredient-name">
                        {ingredientText}
                      </span>

                    </div>
                  );
                }

              )

            ) : (

              <p className="recipe-empty">
                No ingredients available.
              </p>

            )}

          </div>

        </section>


        {/* =================================================
            PREPARATION
        ================================================= */}

        <section className="recipe-content-section preparation-section">

          <div className="recipe-section-header">

            <div>

              <span className="recipe-section-label">
                STEP BY STEP
              </span>

              <h2>
                How to Make It
              </h2>

            </div>

            <span className="recipe-section-count">
              {recipe.steps?.length || 0} steps
            </span>

          </div>


          <div className="preparation-timeline">

            {Array.isArray(recipe.steps) &&
            recipe.steps.length > 0 ? (

              recipe.steps.map(
                (step, index) => (

                  <div
                    className="preparation-item"
                    key={index}
                  >

                    <div className="preparation-marker">

                      <span>
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                    </div>


                    <div className="preparation-content">

                      <span className="preparation-label">
                        STEP {index + 1}
                      </span>

                      <p>
                        {step}
                      </p>

                    </div>

                  </div>

                )
              )

            ) : (

              <p className="recipe-empty">
                No preparation instructions available.
              </p>

            )}

          </div>

        </section>


        {/* =================================================
            END MESSAGE
        ================================================= */}

        <div className="recipe-end">

          <span className="recipe-end-line"></span>

          <span>
            Enjoy your meal
          </span>

          <span className="recipe-end-symbol">
            ✦
          </span>

          <span className="recipe-end-line"></span>

        </div>

      </div>

    </main>
  );
};

export default RecipeDetails;