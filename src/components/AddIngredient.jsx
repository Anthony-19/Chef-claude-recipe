import { useState } from "react";
import IngredientList from "./IngredientList";
import GetRecipe from "./GetRecipe";
import SuggestedRecipe from './SuggestedRecipe'
// import { getRecipeFromMistral } from "../../Recipess";
export default function AddIngredient() {
  // function handleSubmit(event){
  //     event.preventDefault()
  //     const formEl = event.currentTarget
  //     const formData = new FormData(formEl)
  //     const values = formData.get('ingredients')
  //     console.log(values)
  //     formEl.reset()
  // }

 

  const [ingredient, setIngredient] = useState([]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredients");
    if (newIngredient) {
      setIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
    }
  }

  const [recipe, setRecipe] = useState('')

  async function handleClick() {
    const response = await getRecipeFromMistral(ingredient)

    console.log(response)
    setRecipe(response)
  }


  const ingredientEL = ingredient.map((item) => {
    return <li key={ingredient[ingredient.length]} className="ingredient-list_list-item">{item}</li>;
  });

  return (
    <>
      <section className="add-ingredient">
        <form action={addIngredient} className="ingredient-form">
          <input type="text" name="ingredients" placeholder="e.g oregano" />
          <button className="add-button">+ Add Ingredient</button>
        </form>
      </section>
      {ingredient.length > 0 && <IngredientList ingredients={ingredientEL} />}
      {ingredient.length > 2 && <GetRecipe handleClick={handleClick}/>}
      <SuggestedRecipe recipe={recipe} />
    </>
  );
}
