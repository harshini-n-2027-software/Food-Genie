import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./TopRecipes.css";

function TopRecipes() {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // =====================================================
  // FETCH RECIPES FROM BACKEND
  // =====================================================

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://food-genie-iwl7.onrender.com/api/foods"
        );

        console.log("Top Recipes API response:", response.data);

        const foodData = Array.isArray(response.data)
          ? response.data
          : response.data?.foods;

        if (Array.isArray(foodData)) {
          setRecipes(foodData);
        } else {
          console.error(
            "Foods were not found:",
            response.data
          );

          setRecipes([]);
        }
      } catch (error) {
        console.error(
          "Error fetching top recipes:",
          error
        );

        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // =====================================================
  // FIND TOP RECIPES
  // =====================================================

  const topRecipeNames = [
    "chicken biryani",
    "margherita pizza",
    "creamy pasta"
  ];

  const topRecipes = topRecipeNames
    .map((recipeName) => {
      return recipes.find((recipe) => {
        const name =
          recipe?.name?.toLowerCase().trim() || "";

        return name === recipeName;
      });
    })
    .filter(Boolean);

  // =====================================================
  // FOOD IMAGES
  // =====================================================

  const getFoodImage = (recipe) => {
    const name =
      recipe?.name?.toLowerCase().trim() || "";

    // Chicken Biryani
    if (name.includes("chicken biryani")) {
      return "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=900&q=85";
    }

    // Margherita Pizza
    if (name.includes("margherita pizza")) {
      return "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85";
    }

    // Creamy Pasta
    if (name.includes("creamy pasta")) {
      return "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85";
    }

    // Other foods
    return recipe?.image || "";
  };

  // =====================================================
  // VIEW RECIPE
  // =====================================================

  const handleViewRecipe = (recipe) => {
    console.log(
      "Opening recipe:",
      recipe?.name,
      "ID:",
      recipe?._id
    );

    if (!recipe?._id) {
      console.error(
        "Recipe does not have a MongoDB ID:",
        recipe
      );

      alert("Unable to open this recipe.");
      return;
    }

    navigate(`/recipe/${recipe._id}`);
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <main className="top-recipes-page">

        <section className="top-recipes-header">

          <p className="top-recipes-label">
            ✨ FOOD GENIE COLLECTION
          </p>

          <h1>
            Top <span>Recipes</span>
          </h1>

          <p className="top-recipes-description">
            Loading delicious recipes...
          </p>

        </section>

      </main>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <main className="top-recipes-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <section className="top-recipes-header">

        <p className="top-recipes-label">
          ✨ FOOD GENIE COLLECTION
        </p>

        <h1>
          Top <span>Recipes</span>
        </h1>

        <p className="top-recipes-description">
          Explore delicious recipes and discover your next
          favourite meal.
        </p>

      </section>


      {/* =================================================
          RECIPES GRID
      ================================================= */}

      <section className="top-recipes-grid">

        {topRecipes.length > 0 ? (

          topRecipes.map((recipe) => (

            <article
              className="recipe-card"
              key={recipe._id}
            >

              {/* ================================
                  IMAGE
              ================================= */}

              <div className="recipe-image">

                <img
                  src={getFoodImage(recipe)}
                  alt={recipe?.name || "Recipe"}
                  onError={(event) => {

                    event.currentTarget.onerror = null;

                    if (recipe?.image) {
                      event.currentTarget.src =
                        recipe.image;
                    }

                  }}
                />

              </div>


              {/* ================================
                  CONTENT
              ================================= */}

              <div className="recipe-content">

                <span className="recipe-category">
                  {recipe?.category || "Recipe"}
                </span>


                <h2>
                  {recipe?.name || "Untitled Recipe"}
                </h2>


                <p>
                  {recipe?.description ||
                    "Discover this delicious recipe with Food Genie."}
                </p>


                {/* ================================
                    VIEW RECIPE
                ================================= */}

                <button
                  type="button"
                  onClick={() =>
                    handleViewRecipe(recipe)
                  }
                >
                  View Recipe
                  <span>→</span>
                </button>

              </div>

            </article>

          ))

        ) : (

          <div className="top-recipes-empty">

            <div>
              🍽️
            </div>

            <h2>
              Top recipes are unavailable
            </h2>

            <p>
              Make sure Chicken Biryani, Margherita Pizza,
              and Creamy Pasta exist in your database.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

export default TopRecipes;