import React, { useEffect, useState } from 'react';
import Recipe from './recipe';
import './App.css';

const App = () => {

  const APP_ID = '2c989c15';
  const APP_KEY = '0238a467980c5c6c1179d40c0eb2f8a0'

  const [recipes, setRecipies] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chichen')

  useEffect(() => {
    getRecepies()
  }, [query]);

  const getRecepies = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipies(data.hits)
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'> Search </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.image}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
