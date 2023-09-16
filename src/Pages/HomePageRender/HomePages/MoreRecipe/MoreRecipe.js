import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../../../../Generic/Api';
import './MoreRecipe.css'

const MoreRecipe = () => {
  const nav = useNavigate()
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if(query){
      getRecipes();
    }
  }, [query]);

  const getRecipes = async () => {
    const response = await  axios.get(`/recipes/${query}`)
    console.log(response.data);
    setRecipes(response.data);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // console.log(e);
      nav(`/search/${search}`);
    }
  };

const handlesearchPress = (e) => {
    nav(`/search/${search}`);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    nav(`/recipes/${query}`)
  };
  return (
        <>
           <div className='more-recipe-search-bar-container'>
           <h1 className='more-recipe-heading'>Find More Recipe</h1>
           <form onSubmit={getSearch}>
            <input type='search' 
            placeholder="I'am craving..." 
            className='recipe-search-bar'
            onChange={updateSearch}
            onKeyDown={handleKeyPress}
            />
            </form>
            <button className='recipe-search-btn' onClick={handlesearchPress}>SEARCH</button>
           </div>
        </>
  )
}

export default MoreRecipe
