import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";

function Home() {
  const [recipes, setRecipes] = useState([]);      // Search results
  const [loading, setLoading] = useState(false);   // Loading state
  const [error, setError] = useState("");          // Error message
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Recipe details modal

  // Fetch recipes by ingredient
  const fetchRecipes = async (ingredient) => {
    try {
      setLoading(true);
      setError("");
      setRecipes([]);

      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();

      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setError("No recipes found for this ingredient.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch full recipe details when user clicks a card
  const fetchRecipeDetails = async (idMeal) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await res.json();
      if (data.meals && data.meals.length > 0) {
        setSelectedRecipe(data.meals[0]);
      }
    } catch (err) {
      setError("Unable to load recipe details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Search Input */}
      <SearchBar onSearch={fetchRecipes} />

      {/* Loading & Error Messages */}
      {loading && <p className="text-center text-teal-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Recipe Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {recipes.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} onClick={fetchRecipeDetails} />
        ))}
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default Home;
