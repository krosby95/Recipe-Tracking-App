import React from "react"
function RecipeView({ recipe, deleteRecipe }) {

 
   return (
                 
          <tr> 
            <td>{recipe.name}</td>               
            <td>{recipe.cuisine}</td>
            <td className="photo"><img src={recipe.photo}/></td>   
            <td className="content_td"><p>{recipe.ingredients}</p></td> 
            <td className="content_td"><p>{recipe.preparation}</p></td> 
            <td><button name="delete" onClick={deleteRecipe}>delete</button></td> 
          </tr>
    );

}
export default RecipeView;