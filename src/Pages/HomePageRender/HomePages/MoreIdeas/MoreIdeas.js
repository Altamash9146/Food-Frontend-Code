import React from 'react'
import './MoreIdeas.css'

const MoreIdeas = () => {
  return (
   <>
     <div className='more-ideas-main-container'>
        <h1 className='home-pages-heading'>MORE IDEAS</h1>
        <div className='more-ideas-images-container'>
        <div className='carousel-container'>
        <div className='more-ideas-image-border'>
        <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/39/46/39/WM8rgRclQsGroxlo7eHA_0S9A3950.jpg' alt='Not-Found' className='more-ideas-image'/>
        <div className='more-ideas-images-caption'>CHICKEN TIKKA MASALA</div>
        </div>
        
        <div className='more-ideas-image-border' >
        <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/14/88/99/LlkHd9qlTpqOlaaYdJjy_0S9A6887.jpg' alt='Not-Found' className='more-ideas-image'/>
        <div className='more-ideas-images-caption'>VEGAN BACON</div>
        </div>

        <div className='more-ideas-image-border'>
        <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/42/94/38/fS29ttQnitOZ9fPVIvxA_0S9A5582.jpg' alt='Not-Found' className='more-ideas-image'/>
        <div className='more-ideas-images-caption'>COPYCAT MCDONALD'S BIG MAC SAUCE</div>
        </div>

        <div className='more-ideas-image-border'>
        <img src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/79/60/6/YY8R4MPARenL10feYOXj_0S9A2869.jpg' alt='Not-Found' className='more-ideas-image'/>
        <div className='more-ideas-images-caption'>DIRTY SHRIMP IN BUTTER-BEAR SAUCE</div>
        </div>
        </div>
        </div>
    </div>
   </>
  )
}

export default MoreIdeas
