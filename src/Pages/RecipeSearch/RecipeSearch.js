import React,{useState,useEffect} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import {BsArrow90DegRight} from 'react-icons/bs'
import './RecipeSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from '../../Generic/Api'

const RecipeSearch = () => {
  const nav = useNavigate()
  const {detail} = useParams()
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query,detail]);

  const getRecipes = async () => {
    if(detail){
      const response = await  axios.get(`/recipes/${detail}`)
      console.log(response.data);
      setRecipes(response.data);
    }else{
      const response = await  axios.get(`/recipes/${query}`)
      console.log(response.data);
      setRecipes(response.data);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      nav(`/search/${search}`);
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
  <>
    <div className='search-box-main'>
    <div className='search-box'>
  <form onSubmit={getSearch}>
  <label className='search-name'>
        I WANT TO MAKE <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type='search'  className='search-input'  onChange={updateSearch} onKeyDown={handleKeyPress}/>
      
    </label>
  </form>
    <div className='border-bottom'></div>
    </div>
    </div>
    <main className="all_main">
        {/* <div>SearchPage</div> */}
        <header>{recipes.length} RESULTS</header>
        <section className="cntr_Main search_bc">
          <div className="search-page-cntnr">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                // title={recipe.recipe.label}
                className="search-page-card"

                // ingredients={recipe.recipe.ingredients}
              >
                <Link to={`/recipe/${recipe.recipe.label}`}><img src={recipe.recipe.image} alt={`${recipe.recipe.label}`} /></Link>
                <div className="search-page_details">
                  <div>
                    <h2 className="seacrch-card_label">
                      {recipe.recipe.label}
                    </h2>
                    <div className="seacrch-card_source">
                      By <span>{recipe.recipe.source}</span>
                    </div>
                  </div>
                  <div className="meta-data">
                    <div className="seacrch-card_stars"><span className="stars-mv"></span><span>({ Math.floor((Math.random())*100+1)})</span></div>
                    <div className="seacrch-card_duration">
                      {recipe.recipe.totalTime === 0
                        ? 55
                        : recipe.recipe.totalTime}{" "}
                      mins
                    </div>

                  </div>
{<div className="share-hover"><BsArrow90DegRight/> &nbsp; SHARE</div>}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
  </>
  )
}

export default RecipeSearch