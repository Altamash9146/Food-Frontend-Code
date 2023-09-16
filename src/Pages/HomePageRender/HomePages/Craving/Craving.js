import React from 'react'
import './Craving.css'

const Craving = () => {
  return (
   <>
  <div className='craving-main-container'>
  <h1 className='home-pages-heading'>WHAT WE'RE CRAVING</h1>
    <div className='craving-images-container'>
    <div className='c-image-container'>
      <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/79/94/4/MDUNtFdSSheVHJJwGTqC_0S9A0331.jpg' alt='Not-Found' className='craving-image'/>
      <div className='image-text'><div className='collection-word'>COLLECTION</div>24 FREEZER-FRIENDLY MEALS</div>
    </div>
    <div className='c-image-container'>
      <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/22/92/27/kz2OEDD3Su7NHGSwqkJX_0S9A9846.jpg' alt='Not-Found' className='craving-image'/>
      <div className='image-text'><div className='collection-word'>COLLECTION</div>50 LUNCH IDEAS FOR KIDS &nbsp; &nbsp;</div>
    </div>
    <div className='c-image-container'>
      <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/16/53/87/Z4xnvsOaR6yTYMT7u5LL_corn%20fritters-2.jpg' alt='Not-Found' className='craving-image'/>
      <div className='image-text'><div className='collection-word'>COLLECTION</div>24 BEST CORN RECIPES</div>
    </div>
    </div>
  </div>
   
   </>
  )
}

export default Craving
