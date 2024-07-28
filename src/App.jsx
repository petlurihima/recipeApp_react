import './App.css';
import Search from './components/Search';
import RecipeList from './components/RecipeList';
import { useState } from 'react';

function App() {
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedDescription, setSelectedDescription] = useState({ id: null, description: '' });

  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleAddInput = () => {
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
      setIngredient('');
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(',')}&apiKey=your_api_key_here`);
      const data = await response.json();
      setRecipes(data);
    } catch (e) {
      console.error("Error while fetching:", e);
    }
  };

  const handleDescription = async (id) => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=your_api_key_here`);
      const data = await response.json();
      setSelectedDescription({ 
        id, 
        description: data.instructions ,
        readyInMinutes: data.readyInMinutes,
        image: data.image,
        dishTypes: data.dishTypes,
        vegetarian: data.vegetarian,
      });
      console.log(data.instructions);
    } catch (e) {
      console.error("Error while fetching ", e);
    }
  };

  return (
    <>
      <Search
        ingredient={ingredient}
        handleInputChange={handleInputChange}
        handleAddInput={handleAddInput}
        ingredients={ingredients}
        handleSearch={handleSearch}
      />
      <RecipeList
        recipes={recipes}
        handleDescription={handleDescription}
        selectedDescription={selectedDescription}
      />
    </>
  );
}

export default App;
