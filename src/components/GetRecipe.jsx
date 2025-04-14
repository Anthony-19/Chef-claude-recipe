export default function GetRecipe(props){
    
    return(
        <section className="get-recipe">
            <div className='get-recipe-container'>
                <div className="recipe-generator_intro">
                    <h3 className="recipe-generator_heading">Ready for a recipe ?</h3>
                    <p className="recipe-generator_description">Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.handleClick} className='get-button'>Get a Recipe</button>
            </div>
        </section>
    )
}