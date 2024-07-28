import React from 'react'

const Search = ({ingredient,handleInputChange,handleAddInput,ingredients,handleSearch}) => {
  return (
    <>
    <h1 className='heading'>Recipe App</h1>
      <div className='container'>
          <div className='input-group'>
              <input
                  type='text'
                  placeholder='Enter Ingredients'
                  className='input' 
                  value={ingredient}
                  onChange={handleInputChange}
              />
              <button className='btn' onClick={handleAddInput}>Add Ingredient</button>
          </div>
      </div>
          <div className='ingredients-list'>
            {ingredients.length >0 && (
                <><h5>Ingredients List:</h5>
              <ul>
                  {ingredients.map((item, index) => (
                      <li key={index}>{item}</li>
                  ))}
              </ul>
              </> 
            )}
          </div>
        <button className='recipebtn' onClick={handleSearch}>Search Recipe</button>
      </>
  )
}

export default Search
