import React from 'react'

const Recipe = ({recipe}) => {
    const{label,image,url,ingredients}= recipe.recipe;
    return (
        <div className='recipe'>
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target='_blank' rel='noopener noreferrer'>Go to the recipe</a>
            <button>Ingredients</button>
        </div>
    )
}

export default Recipe
