import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../Pages/HomePageRender/Home'
import Navigation from '../Components/Navigation/MainNavigation/Navigation'
import ResponsiveNavigation from '../Components/Navigation/ResponsiveNavigation/ResponsiveNavigation'
import SignIn from '../Components/Auth/SignIn/SignIn'
import Signup from '../Components/Auth/Signup/Signup'
import { useSelector } from 'react-redux'
import RecipeSearch from '../Pages/RecipeSearch/RecipeSearch'
import DetailRecipe from '../Pages/DetailRecipe/DetailRecipe'
import SubNav from '../Pages/SubNav/SubNav'
import Bookmark from '../Pages/Bookmark/Bookmark'
import Profile from '../Pages/Profile/Profile'

const Routers = () => {

  const user = useSelector((state)=>state.user)
  // console.log("route",user);

  return (
    <>
      <BrowserRouter>
      <Navigation/>
      <ResponsiveNavigation/>
      <Routes>
      <Route path='/' element={ <Home/>} />  
      <Route path='/search' element={<RecipeSearch/>}/>
      <Route path='/search/:detail' element={<RecipeSearch/>}/>
      <Route path='/recipe/:detail' element={<DetailRecipe/>}/>
      <Route path='/idea/:detail' element={<SubNav/>}/>
      <Route path='/saves' element={<Bookmark/>}/>
      <Route path='/profile' element={<Profile/>}/>

      
      {!user && (<>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </>)}

      </Routes> 
      {/* <Footer/>      */}
     </BrowserRouter>
    
    </>
  )
}

export default Routers
