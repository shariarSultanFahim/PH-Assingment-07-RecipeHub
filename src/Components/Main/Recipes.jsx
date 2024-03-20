import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";

const Recipes = ({handleWantToCook}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("Recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6 md:w-3/5">
      {recipes.map((recipe, idx) => (
        <Recipe key={idx} recipe={recipe} handleWantToCook={handleWantToCook} ></Recipe>
      ))}
    </div>
  );
};

Recipes.propTypes={
    handleWantToCook: PropTypes.func
  };

export default Recipes;
