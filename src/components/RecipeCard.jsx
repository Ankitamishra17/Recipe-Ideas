import React from "react";

function RecipeCard({ meal, onClick }) {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer"
      onClick={() => onClick(meal.idMeal)}
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{meal.strMeal}</h3>
      </div>
    </div>
  );
}

export default RecipeCard;
