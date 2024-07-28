import React from 'react';
import RecipeDetails from './RecipeDetails';

const RecipeList = ({ recipes, handleDescription, selectedDescription }) => {
    return (
        <div className='recipe-list'>
            {recipes.length > 0 && (
                <>
                    <h2>Recipes:</h2>
                    <ul>
                        {recipes.map((recipe) => (
                            <li key={recipe.id} className='recipe-item'>
                                <div className='recipe-title'>
                                    <span>{recipe.title}</span>
                                    <button onClick={() => handleDescription(recipe.id)}>Description</button>
                                </div>
                                {selectedDescription && selectedDescription.id === recipe.id && (
                                    <RecipeDetails description={selectedDescription.description}
                                        readyInMinutes={selectedDescription.readyInMinutes}
                                        image={selectedDescription.image}
                                        dishTypes={selectedDescription.dishTypes}
                                        vegetarian={selectedDescription.vegetarian} />
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default RecipeList;
