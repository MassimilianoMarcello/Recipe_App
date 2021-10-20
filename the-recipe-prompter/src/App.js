import React, { useState } from "react";
import logo from "./logorecipe.svg";
import "./App.css";
import Axios from "axios";
import{v4 as uuidv4}from'uuid';
import Recipe from './components/Recipe';

function App() {
  const [query, setQuery] = useState("");
const[recipes,setRecipes]=useState([])
  // data from edamam.com
  const APP_ID = "65268f1f";
  const APP_KEY = "d7809ab1d3c1a8e99f1957eec0970e27";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  // fetch api with axios
  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits)
    console.log(result);
    setQuery("");
  };
  // change the query
  const onChange=e=>{
    setQuery(e.target.value)
  }

  // return data when you click search
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>App suggesting dishes to create</p>
        <form className="search-form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter Ingredient"
            autoComplete="off"
            onChange={onChange}
            value={query}
          />
          <input type="submit" value="Search" />
        </form>
      </header>
      <article className='recipes'>
{recipes !==[] && recipes.map (recipe=>
 <Recipe  key={uuidv4} recipe={recipe}/>
  )}
      </article>
    </div>
  );
}

export default App;
