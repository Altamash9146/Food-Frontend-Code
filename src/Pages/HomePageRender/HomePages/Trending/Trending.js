import React from 'react'
import './Trending.css'

const Trending = () => {
  return (
    <>
    <div className='trending-main-container'>
        <h1 className='home-pages-heading'>TRENDING NOW</h1>
        <div className='trending-images-container'>
          <div className='trending-carousel-container'>
          <div className='trending-image-border'>
          <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/93/50/dKELoTKxTcW3dfYDAe1g_0S9A2821.jpg' alt='Not-Found' className='trending-image'/>
            <div className='trending-images-caption'>PINEAPPLE ZUCCHINI BREAD</div>
          </div>

          <div  className='trending-image-border'>
          <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/53/77/36/S6eFhnRWSRIOG3LIFJtA_spicy%2520keto%2520broccoli%2520cheddar%2520soup%2520537736-8.jpg' alt='Not-Found' className='trending-image'/>
            <div className='trending-images-caption'>SPICY BROCCOLI CHEDDAR SOUP</div>
          </div>

          <div  className='trending-image-border'>
          <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/75/75/8/NxhOU2TMa2ZhvnHCoobQ_0S9A8180.jpg' alt='Not-Found' className='trending-image'/>
            <div className='trending-images-caption'>QUICK & CHICKEN ENCHILADAS</div>
          </div>

          <div  className='trending-image-border'>
          <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/22/19/56/X74FgabSS2udIgXN7gSk_lemonade%20scones%20SITE.jpg' alt='Not-Found' className='trending-image'/>
          <div className='trending-images-caption'>GLUTEN-FREE LEMONADE SCONES</div>
         </div>
         </div>
        </div>
    </div>


  
    </>
  )
}

export default Trending
