import React, { useState } from "react";

function RecipeCreate({createPost}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  // const [recipeName, setRecipeName] = useState("");
  
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo:"",
    ingredients:"",
    preparation:"",
  };
  
 const [formData, setFormData] = useState({ ...initialFormState });
  
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  
//CHANGES
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    setFormData({ ...initialFormState });
    createPost(formData)
  }
   
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td> {/*NAME-------------*/}
            <label htmlFor="name"></label>
              
              <input name="name"
              id="name"
              names="name"
              type="text"
              required={true}
              rows={1}
                placeHolder="name"
              onChange={handleChange}
              value={formData.name}
            />
            </td>
            
            <td>{/*CUISINE----------*/}
            <label htmlFor="cuisine"></label>
              <input name="cuisine"
              id="cuisine"
              names="cuisine"
              type="text"
              required={true}
              rows={1}
                placeHolder="cuisine"
              onChange={handleChange}
              value={formData.cuisine}
            />
            </td>
            
            <td>{/*PHOTO----------*/}
            <label htmlFor="photo"></label>
              <input name="photo"
              id="photo"
              names="photo"
              type="url"
              required={false}
              rows={1}
                placeHolder="photo"
              onChange={handleChange}
              value={formData.photo}
            />
            </td>
            
            <td>{/*INGREDIENTS----------*/}
            <label htmlFor="ingredients"></label>
              <textarea name="ingredients"
              id="ingredients"
              names="ingredients"
              type="text"
              required={true}
              rows={1}
                PlaceHolder="ingredients"
              onChange={handleChange}
              value={formData.ingredients}
            />
            </td>
            
            <td>{/*PREPERATION----------*/}
            <label htmlFor="preparation"></label>
              <textarea name="preparation"
              id="preparation"
              names="preparation"
              type="text"
              required={true}
              rows={1}
                placeHolder="preparation"
              onChange={handleChange}
              value={formData.preperation}
            />
            </td>
           
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
