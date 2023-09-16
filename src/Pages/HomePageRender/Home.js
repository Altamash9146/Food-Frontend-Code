import React from 'react'
import './Home.css'
import Craving from './HomePages/Craving/Craving'
import Explore from './HomePages/Explore/Explore'
import Trending from './HomePages/Trending/Trending'
import DontMiss from './HomePages/DontMiss/DontMiss'
import MoreIdeas from './HomePages/MoreIdeas/MoreIdeas'
import Collection from './HomePages/Collection/Collection'
import FanFavourites from './HomePages/FanFavourites/FanFavourites'
import MoreRecipe from './HomePages/MoreRecipe/MoreRecipe'

const Home = () => {
  return (
    <>
     <div className='home-container'>
     <div className='top-image-container'>
      <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg' 
      alt='not-found'
      className='top-image'
      />

      <div className='top-image-text-container'>
        <h1 className='top-image-text-title'>56 Grilled chicken recipe</h1>
        <button className='top-image-text-btn'>See them All</button>
      </div>
      </div>

      <Craving/>
      <Explore/>
      <Trending/>
      <DontMiss/>
      <MoreIdeas/>
      <Collection/>
      <FanFavourites/>
      <MoreRecipe/>
     </div>
    </>
  )
}

export default Home
