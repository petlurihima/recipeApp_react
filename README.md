# Recipe App

## Description
The Recipe App is a web application that allows users to search for recipes based on ingredients they have. Users can view the details of each recipe, including instructions, preparation time, image, dish types, and whether the recipe is vegetarian.

## Features
- Add ingredients to search for recipes.
- Display a list of recipes based on the searched ingredients.
- View detailed instructions for each recipe.
- Display additional recipe details including preparation time, image, dish types, and vegetarian status.

## Technologies Used
- React
- Vite
- Spoonacular API

## Installation

1. Clone the repository:
    ```bash
    git clone [https://github.com/petlurihima/recipeApp_react.git]
    cd recipe-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Open the application in your browser. The default address is `http://localhost:3000`.
2. Enter ingredients in the search bar and click "Add".
3. Click the "Search" button to fetch recipes based on the added ingredients.
4. Click the "Description" button next to a recipe to view its detailed instructions and other details.

## Components

### `App.jsx`
The main component that holds the state and integrates all other components.

### `Search.jsx`
A component to input ingredients and initiate the search for recipes.

### `RecipeList.jsx`
A component that displays a list of recipes based on the searched ingredients.

### `RecipeDetails.jsx`
A component that displays detailed instructions and additional details for a selected recipe.

## API
This project uses the [Spoonacular API](https://spoonacular.com/food-api) to fetch recipes based on ingredients and to get detailed information about specific recipes.


