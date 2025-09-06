import React from "react";

function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{recipe.strMeal}</h2>
          <button
            className="text-red-500 font-bold text-lg"
            onClick={onClose}
          >
            ✖
          </button>
        </div>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-60 object-cover"
        />
        <div className="p-4 space-y-2">
          <p>
            <strong>Category:</strong> {recipe.strCategory}
          </p>
          <p>
            <strong>Area:</strong> {recipe.strArea}
          </p>
          <h3 className="font-semibold mt-4">Instructions:</h3>
          <p className="text-sm leading-relaxed">{recipe.strInstructions}</p>
        </div>
        {recipe.strYoutube && (
          <div className="p-4">
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Watch on YouTube
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeModal;
