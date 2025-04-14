import React from "react";
import ReactMarkdown from 'react-markdown'
export default function IngredientList(props) {
  return (
    <section className="suggested-recipe">
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
      {/* <h2 className="suggested-recipe_title">Suggested recipe: </h2>
      <p className="suggested-recipe_description">
        Based on your available ingredients, I would recommend making a Creamy
        Garlic Parmesan Chicken dish. Here’s the recipe:
      </p>
      <div className="suggested-recipe_ingredients">
        <h3 className="suggested-recipe_subheading">Ingredients:</h3>
        <ul className="suggested-recipe_list">
          <li className="suggested-recipe_list-item">4 boneless, skinless chicken breasts</li>
          <li className="suggested-recipe_list-item">Salt and pepper to taste</li>
          <li className="suggested-recipe_list-item">2 tablespoons olive oil</li>
          <li className="suggested-recipe_list-item">4 cloves garlic, minced</li>
          <li className="suggested-recipe_list-item">1 cup heavy cream</li>
          <li className="suggested-recipe_list-item">1/2 cup chicken broth</li>

          <li className="list-item">Pineapple</li>
        </ul>
      </div>
      <div>
        <h3 className="suggested-recipe_subheading">Instructions:</h3>

        <p className="suggested-recipe_step">
          1. Season the Chicken: Season the chicken breasts with salt and pepper on both sides.
        </p>
        <p className="suggested-recipe_step">
          2. Cook the Chicken: In a large skillet, heat the olive oil over medium-high heat. Add the chicken breasts and cook for 5-7 minutes on each side, or until golden brown and cooked through. Remove the chicken from the skillet and set it aside.
        </p>
        <p className="suggested-recipe_step">
          3. Sauté Garlic:In the same skillet, reduce the heat to medium. Add the minced garlic and sauté for about 1 minute until fragrant.
        </p>
        <p className="suggested-recipe_step">
          4. Make the Sauce: Add the heavy cream, chicken broth, and Italian seasoning to the skillet. Stir to combine and bring the mixture to a simmer.
        </p>
      </div> */}
    </section>
  );
}
