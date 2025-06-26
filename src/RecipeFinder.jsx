import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';
function RecipeFinder({ listOfItmes, ingredientsList, excludeList }) {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRecipes();
    }, [listOfItmes]);

    const fetchRecipes = async () => {
        setLoading(true);
        setError(null);

        const ingredients = listOfItmes['ingredients'].map(index => ingredientsList[index]).join(',');
        const exclude = listOfItmes['exclude'].map(index => excludeList[index]).join(',');
        console.log(exclude)
 
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients`, {
                params: {
                    ingredients: ingredients,
                    excludeIngredients: exclude,
                    number:40,apiKey: import.meta.env.VITE_API_KEY_SPOON,
               
                },
            });
            
            console.log(response.data)
           
            setRecipes(response.data);
        } catch (err) {
            console.log(err)
            setError('Failed to fetch recipes. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=' grid grid-cols-3 gap-4 p-4 w-auto h-auto place-items-center"'>
{recipes.length > 0 ? (
    recipes.map(recipe => (
        <Card key={recipe.id} op={recipe}/>
    ))
) :  error && <p>{error}</p>}

           
            
            
        </div>
    );
}

export default RecipeFinder;
