import React,{useState,useEffect} from 'react'
import axios from '../../Generic/Api'
import './SubNav.css'
import { TfiDownload } from "react-icons/tfi";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsArrow90DegRight, BsCamera, BsEmojiSmileFill } from "react-icons/bs";
import { Link, useParams} from 'react-router-dom'
import MoreRecipe from '../HomePageRender/HomePages/MoreRecipe/MoreRecipe';

const SubNav = () => {
    const {detail} = useParams()
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      getRecipes();
    }, [detail]);
  
    const getRecipes = async () => {
      const response = await  axios.get(`/recipes/${detail}`)
      console.log(response.data);
      setRecipes(response.data);
    };

    console.log("recipes",recipes);


  return (
   <>
    <div className='sub-nav-parent'>
    <div className='sub-nav-main'>
    <h1 style={{textAlign:'center'}}>{detail}</h1>
    {recipes.map((item)=>(
        <>
          
            <Link to={`/recipe/${item.recipe.label}`} ><img src={item.recipe.image} alt={item.recipe.label} className='sub-nav-image'/></Link>
            <div className='sub-nav-label-container'>
            <h4>RECIPE</h4>
            <div className='sub-nav-image-label'>{item.recipe.label}</div>
            <div className='sub-nav-bottom-border'></div>
            </div>
            <br/> 
        </>
    ))}
   
   
 </div>
    </div>
    {/* <MoreRecipe/> */}
   </>
  )
}

export default SubNav