import { useState } from "react";
import "./App.css";
import Banner from "./Components/LandingBanner/Banner";
import OurRecipe from "./Components/Main/OurRecipe";
import RecipeSidebar from "./Components/Main/RecipeSidebar";
import Recipes from "./Components/Main/Recipes";
import Navbar from "./Components/Navbar/Navbar";
import toast, { Toaster } from "react-hot-toast";

function App() {
  function handleDuplicate(){
    toast('Recipe Already In Preparation',{
      duration: 1250,
    });
  }

  const [recipes, setWantToCook] = useState([]);
  const handleWantToCook = (recipe) => {
    if (recipes.includes(recipe)) {
      handleDuplicate();
    } else {
      setWantToCook((prevRecipes) => [...prevRecipes, recipe]);
    }
  };

  const [cooking, setCooking] = useState([]);
  const handlePreparing = (recipe) =>{
    setCooking((prevCooking) => [...prevCooking, recipe]);
    setWantToCook((prevRecipes) => prevRecipes.filter(recipes => recipes !== recipe));

  }
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Toaster position="top-right" reverseOrder={false} ></Toaster>
      <OurRecipe></OurRecipe>
      <div className="container mx-auto flex flex-col items-start gap-2 md:flex-row">
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <RecipeSidebar
          recipes={recipes}
          handlePreparing={handlePreparing}
          cooking={cooking}
        ></RecipeSidebar>
      </div>
      
    </>
  );
}

export default App;
