import "./App.css";
import { useState, useEffect } from "react";
import RenderCoctail from "./components/RenderCoctail";
import { Box, Button, Grid, TextField } from "@mui/material";

function App() {
   const [cocktailArray, setCocktailArray] = useState([]);
   const [search, setSearch] = useState("");

   const handleInputChange = (e) => {
      setSearch(e.target.value);
   };

   const getCocktail = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
      const data = await response.json();
      setCocktailArray(data.drinks);
   };

   const renderCocktailArray = () => {
      return cocktailArray?.map((element, index) => {
         return (
            <Grid item display="flex" alignItems="center" justifyContent="center" sm={5} key={index} mt={10}>
               <RenderCoctail
                  title={element.strDrink}
                  image={element.strDrinkThumb}
                  instruction={element.strInstructions}
                  ingredients1={element.strIngredient1}
                  ingredients2={element.strIngredient2}
                  ingredients3={element.strIngredient3}
                  ingredients4={element.strIngredient4}
                  ingredients5={element.strIngredient5}
                  ingredients6={element.strIngredient6}
                  ingredients7={element.strIngredient7}
                  ingredients8={element.strIngredient8}
                  ingredients9={element.strIngredient9}
                  ingredients10={element.strIngredient10}
                  ingredients11={element.strIngredient11}
                  ingredients12={element.strIngredient12}
                  ingredients13={element.strIngredient13}
                  ingredients14={element.strIngredient14}
                  ingredients15={element.strIngredient15}
                  mesure1={element.strMeasure1}
                  mesure2={element.strMeasure2}
                  mesure3={element.strMeasure3}
                  mesure4={element.strMeasure4}
                  mesure5={element.strMeasure5}
                  mesure6={element.strMeasure6}
                  mesure7={element.strMeasure7}
                  mesure8={element.strMeasure8}
                  mesure9={element.strMeasure9}
                  mesure10={element.strMeasure10}
                  mesure11={element.strMeasure11}
                  mesure12={element.strMeasure12}
                  mesure13={element.strMeasure13}
                  mesure14={element.strMeasure14}
                  mesure15={element.strMeasure15}
               />
            </Grid>
         );
      });
   };

   return (
      <>
         <Box display="flex" flexDirection="column" alignItems="center">
            <div className="baniere">
               <h1>Les cocktails de Nono</h1>
               <div>
                  <TextField onChange={handleInputChange} id="outlined-basic" label="Quelle recette voulez-vous ?" variant="outlined" />
                  <Button onClick={getCocktail} variant="outlined">
                     Rechercher
                  </Button>
               </div>
            </div>
            <Grid container justifyContent="center">
               {renderCocktailArray()}
            </Grid>
         </Box>
      </>
   );
}

export default App;
