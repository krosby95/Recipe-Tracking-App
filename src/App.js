import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [posts, setPosts] = useState(RecipeData);
  
  
  const createPost = (newPost) =>
    setPosts((currentPost) => [...currentPost, newPost]);
  
  const deletePost = (indexToDelete) =>
    setPosts((currentPost) =>
      currentPost.filter((post, index) => index !== indexToDelete)
    );

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1 className="center">Delicious Food Recipes</h1></header>
      <br />
      <RecipeList posts={posts} deletePost={deletePost} />
      <RecipeCreate createPost={createPost}/>
    </div>
  );
}

export default App;
