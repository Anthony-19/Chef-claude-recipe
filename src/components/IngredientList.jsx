import React from 'react'
export default function IngredientList(props){
    return(
        <section action className="ingredient-list">
            <h2 className='ingredient-list_title'>Ingredients on hand: </h2>
            <ul className='ingredient-list_list-group'>
                {props.ingredients}
            </ul>
        </section>
    )
}