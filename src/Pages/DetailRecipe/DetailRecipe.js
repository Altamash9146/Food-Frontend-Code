import React,{useState,useEffect} from 'react'
import './DetailRecipe.css'
import axios from '../../Generic/Api'
import { TfiDownload } from "react-icons/tfi";
import { FaRegBookmark ,FaBookmark} from "react-icons/fa";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsArrow90DegRight, BsCamera, BsEmojiSmileFill } from "react-icons/bs";
import { useNavigate, useParams} from 'react-router-dom'
import MoreRecipe from '../HomePageRender/HomePages/MoreRecipe/MoreRecipe';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from '../../Components/Auth/SignIn/SignIn';

const DetailRecipe = () => {
    const user = useSelector((state) => state.user)
    const nav = useNavigate()
   
    // console.log(email);
    
    const {detail} = useParams()
    const [recipes, setRecipes] = useState([]);
  
    // useEffect(() => {
    //   getRecipes();
    // }, [detail]);

    useEffect(() => {
      getRecipes();
    }, [detail]);
  
    const getRecipes = async () => {
      const response = await  axios.get(`/recipes/${detail}`)
      console.log(response.data);
      setRecipes(response.data);
    };

    // const handleBookmark = async (item) => {
    //   if(user){
    //   const email = user.email
    //   const response = await  axios.post(`/user/save`,{
    //     recipe : item.recipe,
    //     recipeName : item.recipe.label,
    //     email:email
    //   })
    //   toast.success('Recipe Sucessfully Bookmarked')
    //   console.log("data is saving");
    // }
    // else{
    //   console.log("data is not saving");
    // }
    //   // console.log(item.recipe)
    //   }

    const handleBookmark = async (item) => {
      if (!user) {
        // If the user is not authenticated, redirect to the signin page
        nav('/signin'); // Replace with your navigation logic
        return;
      }
    
      const email = user.email;
      try {
        const response = await axios.post(`/user/save`, {
          recipe: item.recipe,
          recipeName: item.recipe.label,
          email: email,
        });
        toast.success('Recipe Successfully Bookmarked');
      } catch (error) {
        console.error('Error bookmarking recipe:', error);
        toast.error('An error occurred while bookmarking the recipe');
      }
    };
    

    // console.log("recipes",recipes);

  return (
    <>
    <ToastContainer/>
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
    <div className='detail-recipe-main'>
  <h1 className='detail-recipe-heading'>{detail}</h1>
  {recipes.slice(0,1).map((item, index) => (
    <div key={index}> {/* Add a unique key */}
      <ul className='detail-recipe-action-icons'>
        <li className='action-icon'>
          <TfiDownload style={{ height: '1.5em', width: '2em' }} />
        </li>
        <li className='action-icon' onClick={()=>handleBookmark(item)}>
          <FaRegBookmark style={{ height: '1.5em', width: '2em' }}
          />
        </li>
        <li className='action-icon'>
          <AiOutlinePrinter style={{ height: '1.5em', width: '2em' }} />
        </li>
        <li className='action-icon'>
          <BsArrow90DegRight style={{ height: '1.5em', width: '2em' }} />
        </li>
        <div className='camera-icon'>
          <BsCamera style={{ height: '1.5em', width: '2em' }} />I MADE THIS
        </div>
      </ul>
      <img src={item.recipe.image} alt={item.recipe.label} className='detail-recipe-image' />
      

      <h3 className='detail-recipe-ingredients'>INGREDIENTS</h3>
      <ol style={{listStyleType:'none'}}>
        {item.recipe.ingredientLines.map((ingredient, i) => (
          <li key={i} className='detail-recipe-list'>{ingredient}</li>
        ))}
      </ol>
    </div>
  ))}
 
    </div>
    </div>
    <MoreRecipe/>
    </>
  )
}

export default DetailRecipe