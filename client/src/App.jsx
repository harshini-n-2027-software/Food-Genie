import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TopRecipes from "./pages/TopRecipes";
import RecipeDetails from "./pages/RecipeDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/top-recipes"
          element={<TopRecipes />}
        />

        <Route
          path="/recipe/:id"
          element={<RecipeDetails />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;