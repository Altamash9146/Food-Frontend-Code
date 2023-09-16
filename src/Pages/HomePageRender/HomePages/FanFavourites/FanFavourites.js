import React from 'react'
import './FanFavourites.css'

const FanFavourites = () => {

    const imageSources =[
        // first set
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/30/32/45/19L2ucjQneoEANPzyfiQ_0S9A6363.jpg",
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/30/97/7/7GmgWw4TTUCCw7xGKQAP_0S9A6434.jpg",
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/54/75/2/wc0parMsS9OTwRMHrOch_0S9A6332.jpg",
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/90/54/QgpKo1rxQpSiZmN5F5jj_untitled-4303.jpg",

        // second set
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/35/16/31/TW8kFVRNTwKckUevzMv7_sea-bass-recipe-5393.jpg",
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/99/47/6/j7L11nRQNeKACth1WJkg_easy-beef-broccoli-stir-fry-6106.jpg",
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/63/78/6/NrPa79ZESEOqMlMoFDos_fajitas-3.jpg",
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/39/01/3/aeAtoOWHSeWQh9UD7W3K_0S9A6192.jpg",

        // third set
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/13/37/51/IrDuUPieR1GP9vviVyiM_restaurant-teriyaki-sauce-133751_-5.jpg",
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/11/05/48/N7DcpuhBRW2ahWsyzNAw_0S9A6275.jpg",
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/48/66/41/aB9Ar2MzTy2CIyxoINma_b.jpg",
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/10/58/65/G9Ez7rFmQOmtdHERTPgK_AWC%25204%2520-%2520final_2.png",

        // fourth set
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/63/07/1/Oey61BTvKAEV0tVQz4gU_untitled-1868.jpg",
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/16/52/54/XE7h7mpTK69lpb05OhGB_broil-perfect-steak_4984.jpg",
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/40/49/7/iUlxb54sSWaD9Zp44kfP_FGgWFV4mSVq8aISp1eQG_baked%2520wings%2520(1%2520of%25204).jpg",
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/29/41/96/AwMJ2h3lQp2SodD7s7UJ_0S9A5997.jpg"
    ] 

    const imageTexts = [
      "OVEN-BAKED RIBS",
      "MOZZARELLA STICKS",
      "TURKEY MEATLOAF",
      "LEFTOVER MASHED POTATO PAN CAKES",
      "SIMPLE OVEN BAKED SEA BASS",
      "BEEF & BROCCOLI STIR-FRY",
      "FAJITAS",
      "WHIPPED CREAM FROSTING",
      "RESTAURANT TERIYAKI SAUCE",
      "SKYLINE CHILLI",
      "BANANA NUT BREAD",
      "AWARD WINING CHILLI",
      "THE BEST BELGIAN WAFFLES",
      "BROILED STEAK",
      "OVEN CRISP CHICKEN WINGS",
      "PERFECT RUMP ROAST"
    ]

  return (
    <>
      <div className='fan-favourites-main-container'>
        <div className='fan-favourites-heading-container'>
          <h1 className='fan-heading'>FAN FAVOURITES</h1>
          <div className='view-all'>View All</div>
        </div>
        <div className='fan-favourites-images-container'>
          <div className='carousel-container'>
          {imageSources.map((src, index) => (
            <div key={index} className="fan-favourite-item">
              <div className="image-container">
                <img
                  src={src}
                  alt={`Description for Image ${index + 1}`}
                  className="fan-favourite-image"
                />
                <div className="fan-image-caption">{imageTexts[index]}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default FanFavourites
