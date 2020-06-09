import React from 'react';

const Recipe = (props) => {
  return(
    <div className='recipe-container'>
     {props.recipes.map((item) => {
       return (
      <div className='recipe-card'>
        <img className='recipe-card_img'src={item.recipe.image}/>
        <a href={item.recipe.url} target='_blank'><h3>{item.recipe.label}</h3></a>
        <div>Calories: {Math.floor(item.recipe.calories)}</div>
      </div>
       )
     })}
    </div>
  )
}

export default Recipe;