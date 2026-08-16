import { useEffect, useState } from "react";
import axios from "axios";

import RecipeCard from "../components/RecipeCard";
import "./Home.css";

function Home() {
  // =====================================================
  // STATES
  // =====================================================

  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchResults, setSearchResults] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================================
  // FETCH FOODS FROM BACKEND
  // =====================================================

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          "https://food-genie-iwl7.onrender.com/api/foods"
        );

        console.log("Food API response:", response.data);

        // Backend may return:
        // { foods: [...] }
        // OR directly [...]
        const foodData = Array.isArray(response.data)
          ? response.data
          : response.data?.foods;

        if (Array.isArray(foodData)) {
          console.log("Foods received:", foodData);

          setRecipes(foodData);
        } else {
          console.error(
            "Foods array not found in response:",
            response.data
          );

          setRecipes([]);

          setError(
            "Food data could not be loaded from the server."
          );
        }
      } catch (err) {
        console.error("Error fetching foods:", err);

        setRecipes([]);

        setError(
          "Unable to connect to the Food Genie server."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // =====================================================
  // SEARCH
  // =====================================================

  const handleSearch = () => {
    const searchText = ingredients.trim().toLowerCase();

    // Empty search
    if (searchText === "") {
      setSearchResults(null);
      setSelectedCategory("All");
      return;
    }

    const matchingRecipes = recipes.filter((recipe) => {
      const name =
        recipe?.name?.toLowerCase() || "";

      const description =
        recipe?.description?.toLowerCase() || "";

      const recipeIngredients = Array.isArray(
        recipe?.ingredients
      )
        ? recipe.ingredients
            .map((item) => {
              if (typeof item === "string") {
                return item.toLowerCase();
              }

              if (
                typeof item === "object" &&
                item !== null
              ) {
                return (
                  item.name ||
                  item.ingredient ||
                  ""
                ).toLowerCase();
              }

              return "";
            })
            .join(" ")
        : "";

      return (
        name.includes(searchText) ||
        description.includes(searchText) ||
        recipeIngredients.includes(searchText)
      );
    });

    console.log(
      "Search:",
      searchText,
      "Results:",
      matchingRecipes
    );

    if (matchingRecipes.length === 0) {
      alert(
        `No recipes found using "${ingredients}".`
      );

      return;
    }

    setSearchResults(matchingRecipes);
    setSelectedCategory("All");

    // Scroll to recipes
    setTimeout(() => {
      document
        .getElementById("recipes")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  // =====================================================
  // CLEAR SEARCH
  // =====================================================

  const clearSearch = () => {
    setIngredients("");
    setSearchResults(null);
    setSelectedCategory("All");
  };

  // =====================================================
  // CATEGORIES
  // =====================================================

  const categories = [
    "All",
    "Starters",
    "Main Course",
    "Fast Food",
    "Rice & Noodles",
    "Beverages",
    "Desserts",
    "Healthy",
    "Snacks",
  ];

  // =====================================================
  // DATA TO DISPLAY
  // =====================================================

  const foodsToDisplay =
    searchResults !== null
      ? searchResults
      : recipes;

  // =====================================================
  // CATEGORY FILTER
  // =====================================================

  const filteredRecipes =
    selectedCategory === "All"
      ? foodsToDisplay
      : foodsToDisplay.filter(
          (recipe) =>
            recipe?.category === selectedCategory
        );

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <main>

      {/* =================================================
          HERO
      ================================================= */}

      <section className="hero">

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="hero-content">

          {/* TAG */}

          <p className="hero-tag">
            ✨ Your AI-powered food companion
          </p>

          {/* HEADING */}

          <h1>
            What are you
            <span>
              craving today?
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="hero-description">
            Turn the ingredients you already have
            into delicious meals, with a little help
            from Food Genie.
          </p>

          {/* SEARCH BOX */}

          <div className="search-box">

            <input
              type="text"
              value={ingredients}
              onChange={(event) =>
                setIngredients(event.target.value)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="e.g. chicken, tomato, rice..."
            />

            <button onClick={handleSearch}>
              <span className="search-button-icon">
                🍽️
              </span>

              Find My Food
            </button>

          </div>

          {/* SEARCH HINT */}

          <p className="search-hint">
            Try: chicken · rice · tomato · paneer
          </p>

          {/* CLEAR SEARCH */}

          {searchResults !== null && (
            <button
              onClick={clearSearch}
              style={{
                marginTop: "15px",
                background: "transparent",
                border: "none",
                color: "#00b4d8",
                fontFamily:
                  '"Playfair Display", Georgia, serif',
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              ← Show all foods
            </button>
          )}

        </div>

        {/* =================================================
            HERO VISUAL
        ================================================= */}

        <div className="hero-visual">

          <div className="food-circle">

            <img
              src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85"
              alt="Delicious fried rice"
            />

          </div>

          {/* FLOATING CARD 1 */}

          <div className="floating-card card-one">
            ✨ AI Powered
            <span>
              Smart Recipe Ideas
            </span>
          </div>

          {/* FLOATING CARD 2 */}

          <div className="floating-card card-two">
            🥕 Your Ingredients
            <span>
              Turn them into meals
            </span>
          </div>

          {/* FLOATING CARD 3 */}

          <div className="floating-card card-three">
            🍽️ Food Genie
            <span>
              Discover delicious recipes
            </span>
          </div>

        </div>

      </section>

      {/* =================================================
          RECIPES SECTION
      ================================================= */}

      <section
        className="recipes-section"
        id="recipes"
      >

        {/* LABEL */}

        <p className="recommended-label">
          ✨ Recommended for you
        </p>

        {/* TITLE */}

        <h2>
          Today's Food Inspiration
        </h2>

        {/* DESCRIPTION */}

        <span className="recipes-description">
          Discover something delicious to try today.
        </span>

        {/* =================================================
            CATEGORIES
        ================================================= */}

        <div className="categories">

          {categories.map((category) => (

            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => {
                setSelectedCategory(category);

                if (category !== "All") {
                  setSearchResults(null);
                }
              }}
            >
              {category}
            </button>

          ))}

        </div>

        {/* =================================================
            FOOD GRID
        ================================================= */}

        <div className="recipes-grid">

          {/* =================================================
              LOADING
          ================================================= */}

          {loading ? (

            <div className="no-foods">

              <div className="no-food-icon">
                🍳
              </div>

              <h3>
                Loading delicious foods...
              </h3>

              <p>
                Food Genie is getting your recipes ready.
              </p>

            </div>

          ) : error ? (

            /* =================================================
                ERROR
            ================================================= */

            <div className="no-foods">

              <div className="no-food-icon">
                ⚠️
              </div>

              <h3>
                Unable to load foods
              </h3>

              <p>
                {error}
              </p>

              <p
                style={{
                  marginTop: "12px",
                  color: "#00b4d8",
                }}
              >
                Make sure your backend is running on
                port 5000.
              </p>

            </div>

          ) : filteredRecipes.length > 0 ? (

            /* =================================================
                FOOD CARDS
            ================================================= */

            filteredRecipes.map((recipe) => (

              <RecipeCard
                key={recipe._id}
                recipe={recipe}
              />

            ))

          ) : (

            /* =================================================
                NO FOODS
            ================================================= */

            <div className="no-foods">

              <div className="no-food-icon">
                🍽️
              </div>

              <h3>
                No foods found
              </h3>

              <p>
                Food Genie couldn't find any foods
                matching your search.
              </p>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default Home;