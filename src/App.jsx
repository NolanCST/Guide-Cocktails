import "./App.css";
import { useState, useEffect } from "react";
import RenderCoctail from "./components/RenderCoctail";

function App() {
   const [cocktailArray, setCocktailArray] = useState([]);

   const getCocktail = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`);
      const data = await response.json();
      setCocktailArray(data.drinks);
      console.log(cocktailArray);
   };

   useEffect(() => {
      getCocktail();
   }, []);

   const renderCocktailArray = () => {
      return cocktailArray?.map((element, index) => {
         return <RenderCoctail />;
      });
   };

   console.log(cocktailArray);

   return (
      <>
         <div></div>
      </>
   );
}

export default App;
