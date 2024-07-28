import React from 'react'

const RecipeDetails = ({ description, readyInMinutes, image, dishTypes, vegetarian }) => {
    return (
        <div className='recipe-details'>
            {description && (
                <>
                    <h3>Recipe Details</h3>
                    <p><strong>Ready in:</strong> {readyInMinutes} minutes</p>
                    <p><strong>Vegetarian:</strong> {vegetarian ? 'Yes' : 'No'}</p>
                    <p><strong>Dish Types:</strong> {dishTypes.join(', ')}</p>
                    <img src={image} alt="Recipe" style={{ width: '100%', borderRadius: '10px', margin: '10px 0' }} />
                    <ol dangerouslySetInnerHTML={{ __html: description }} />
                </>
            )}
        </div>
    )
}

export default RecipeDetails
