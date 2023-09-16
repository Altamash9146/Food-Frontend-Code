import React, { useState } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../../../Store/Feautures/UserSlice'
import './Navigation.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = () => {
  const user = useSelector((state)=>state.user)
  // console.log(user);
  const dispatch = useDispatch()
  const [showDropdown, setShowDropdown] = useState(false);

  const handleImageClick = () => {
    setShowDropdown(!showDropdown);
  };
  
  const [showRecipe, setShowRecipe] = useState(false)
  const [Popular, setPopular] = useState(false)
  const [Meat, setMeat] = useState(false)
  const [Diet, setDiet] = useState(false)
  const [Holidays, setHolidays] = useState(false)
  const [Cuisine, setCuisine] = useState(false)
  const [Seasonal, setSeasonal] = useState(false)

  const nav = useNavigate()
  
  const handleNav = ()=>{
    nav('/')
  }

  const displayLogin= ()=>{
    nav('/signin')
  }

  const displayRecipe = ()=>{
    nav('/search')
  }

  const handleLogout = ()=>{
    nav('/')
    dispatch(logout())
}


  const handleRecipeHover = ()=>{
    setShowRecipe(!showRecipe)
  }

  const handlePopularHover = ()=>{
    setPopular(!Popular)
  }

  const handleMeatHover = ()=>{
    setMeat(!Meat)
  }

  const handleDietHover = ()=>{
    setDiet(!Diet)
  }

  const handleHolidaysHover = ()=>{
    setHolidays(!Holidays)
  }

  const handleCuisineHover = ()=>{
    setCuisine(!Cuisine)
  }

  const handleSeasonalHover = ()=>{
    setSeasonal(!Seasonal)
  }

  const handleProfile = ()=>{
    nav('/profile')
    setShowDropdown(false)
  }

  return (
   <>
    <ToastContainer/>
    <div className='navigation-main-container'>

    <div className='heading' onClick={handleNav}>
          Food
          <span className='heading-bullet'>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                  <circle cx="5" cy="5" r="5" fill="yellow" />
                </svg>
          </span>
</div> 

    <div className='nav-item-container' >
  
    <li onMouseOver={() => setShowRecipe(true)}
          onClick={handleRecipeHover}
          onMouseLeave={() => setShowRecipe(false)}>
    <NavLink className='nav-item'>Recipes</NavLink>
  {showRecipe && 
    <ul className='dropdown' style={{ listStyleType: 'none' }}>
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Breakfast & Brunch Recipes`} className='common-nav-item-style'>Breakfast & Brunch Recipes</Link></li>
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Lunch Recipes`} className='common-nav-item-style'>Lunch Recipes</Link></li> 
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Appetizers & Snack Recipes`} className='common-nav-item-style'>Appetizers & Snack Recipes</Link></li>
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Dinner Recipes`} className='common-nav-item-style'>Dinner Recipes</Link></li>
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Dessert Recipes`} className='common-nav-item-style'>Dessert Recipes</Link></li>
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Drink & Cocktail Recipes`} className='common-nav-item-style'>Drink & Cocktail Recipes</Link></li>
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Side Dish Recipes`} className='common-nav-item-style'>Side Dish Recipes</Link></li>
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Grilling & BBQ Recipes`} className='common-nav-item-style'>Grilling & BBQ Recipes</Link></li>
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Microwave Recipes`} className='common-nav-item-style'>Microwave Recipes</Link></li>
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Quick & Easy Recipes`} className='common-nav-item-style'>Quick & Easy Recipes</Link></li>
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Slow-Cooker Recipes`} className='common-nav-item-style'>Slow-Cooker Recipes</Link></li>
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Air Fryer Recipes`} className='common-nav-item-style'>Air Fryer Recipes</Link></li>
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Instant Pot Recipes`} className='common-nav-item-style'>Instant Pot Recipes</Link></li>
      <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Baking Recipes`} className='common-nav-item-style'>Baking Recipes</Link></li>
      <li className='dropdown_item dropdown_item_last'><Link to={`/idea/Side Dish Recipes`} style={{color:'aquamarine', textDecoration:'none'}}>See More</Link></li>
    </ul>
  }
</li>

        <li onMouseOver={() => setPopular(true)}
         onClick={handlePopularHover}
          onMouseLeave={() => setPopular(false)}>
          <NavLink
           className='nav-item'
          >Popular</NavLink>
          {Popular && 
          <ul className='dropdown' style={{ listStyleType: 'none' }}>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Trending Now`} className='common-nav-item-style'>Trending Now</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Casserole Recipes`} className='common-nav-item-style'>Casserole Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Chili Recipes`} className='common-nav-item-style'>Chili Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Soup Recipes`} className='common-nav-item-style'>Soup Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Pasta Recipes`} className='common-nav-item-style'>Pasta Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Bread Recipes`} className='common-nav-item-style'>Bread Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Cookie Recipes`} className='common-nav-item-style'>Cookie Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Salad Recipes`} className='common-nav-item-style'>Salad Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Tofu Recipes`} className='common-nav-item-style'>Tofu Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Copycat Recipes`} className='common-nav-item-style'>Copycat Recipes</Link></li>
            <li  className='dropdown_item dropdown_item_last'><Link to={`/idea/Salad Recipes`} style={{color:'aquamarine', textDecoration:'none'}}>See More</Link></li>
          </ul>
}
        </li>

        <li onMouseOver={() => setMeat(true)}
         onClick={handleMeatHover}
          onMouseLeave={() => setMeat(false)}>        
           <NavLink className='nav-item'>Meat & Seafood</NavLink>
          {Meat && 
          <ul className='dropdown' style={{ listStyleType: 'none' }}>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Chicken Recipes`} className='common-nav-item-style'>Chicken Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Salmon Recipes`} className='common-nav-item-style'>Salmon Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Pork Chop Recipes`} className='common-nav-item-style'>Pork Chop Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Ground Beef Recipes`} className='common-nav-item-style'>Ground Beef Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Shrimp  Recipes`} className='common-nav-item-style'>Shrimp  Recipes</Link></li>

      
          </ul>
}
        </li>

        <li onMouseOver={() => setDiet(true)}
         onClick={handleDietHover}
          onMouseLeave={() => setDiet(false)}>     
           <NavLink className='nav-item' >Healthy & Diet</NavLink>
          {Diet && 
          <ul className='dropdown' style={{ listStyleType: 'none' }}>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Keto Now`} className='common-nav-item-style'>Keto Now</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Healthy  Recipes`} className='common-nav-item-style'>Healthy  Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Vegetarian Recipes`} className='common-nav-item-style'>Vegetarian Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Vegan Recipes`} className='common-nav-item-style'>Vegan Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Mediterranean Diet Recipes`} className='common-nav-item-style'>Mediterranean Diet Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Weight Watchers Recipes`} className='common-nav-item-style'>Weight Watchers Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Low-Carb Recipes`} className='common-nav-item-style'>Low-Carb Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Gluten-Free  Recipes`} className='common-nav-item-style'>Gluten-Free  Recipes</Link></li>
            <li  className='dropdown_item dropdown_item_last'><Link to={`/idea/Vegan Recipes`} style={{textDecoration:'none',color:'aquamarine'}}>See More</Link></li>
          </ul>
}
        </li>


        <li  onMouseOver={() => setHolidays(true)}
         onClick={handleHolidaysHover}
          onMouseLeave={() => setHolidays(false)}>
            <NavLink className={'nav-item'}>Holidays</NavLink>
          {Holidays && 
          <ul className='dropdown' style={{ listStyleType: 'none' }}>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Dinner Party Now`} className='common-nav-item-style'>Dinner Party Now</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Game Day Recipes`} className='common-nav-item-style'>Game Day Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Valentine's Day Recipes`} className='common-nav-item-style'>Valentine's Day Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/St. Patrick's Day Recipes`} className='common-nav-item-style'>St. Patrick's Day Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Easter Recipes`} className='common-nav-item-style'>Easter Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Cinco de Mayo Recipes`} className='common-nav-item-style'>Cinco de Mayo Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Mother's Day Recipes`} className='common-nav-item-style'>Mother's Day Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Memorial Day Recipes`} className='common-nav-item-style'>Memorial Day Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Juneteenth  Recipes`} className='common-nav-item-style'>Juneteenth  Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/4th of July Recipes`} className='common-nav-item-style'>4th of July Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Halloween Recipes`} className='common-nav-item-style'>Halloween Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Thanksgiving  Recipes`} className='common-nav-item-style'>Thanksgiving  Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Hanukkah Recipes`} className='common-nav-item-style'>Hanukkah Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Christmas Recipes`} className='common-nav-item-style'>Christmas Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/New Years's Recipes`} className='common-nav-item-style'>New Years's Recipes</Link></li>
          </ul>
}
        </li>

        <li onMouseOver={() => setCuisine(true)}
         onClick={handleCuisineHover}
          onMouseLeave={() => setCuisine(false)}>
            <NavLink className={'nav-item'}>Cuisine</NavLink>
          {Cuisine && 
          <ul className='dropdown' style={{ listStyleType: 'none' }}>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Mexican Now`} className='common-nav-item-style'>Mexican Now</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Italian Recipes`} className='common-nav-item-style'>Italian Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Indian Recipes`} className='common-nav-item-style'>Indian Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Thai Recipes`} className='common-nav-item-style'>Thai Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Korean Recipes`} className='common-nav-item-style'>Korean Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/French Recipes`} className='common-nav-item-style'>French Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Latin American Recipes`} className='common-nav-item-style'>Latin American Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Chinese  Recipes`} className='common-nav-item-style'>Chinese  Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Japanese Recipes`} className='common-nav-item-style'>Japanese Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Spanese Recipes`} className='common-nav-item-style'>Spanese Recipes</Link></li>
          </ul>
}
        </li>

        <li onMouseOver={() => setSeasonal(true)}
         onClick={handleSeasonalHover}
          onMouseLeave={() => setSeasonal(false)}>
         <NavLink className={'nav-item'}> Seasonal</NavLink>
          {Seasonal && 
          <ul className='dropdown' style={{ listStyleType: 'none' }}>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Spring Now`} className='common-nav-item-style'>Spring Now</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Summer Recipes`} className='common-nav-item-style'>Summer Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Fall Recipes`} className='common-nav-item-style'>Fall Recipes</Link></li>
            <li className='dropdown_item' style={{cursor:'pointer'}}><Link to={`/idea/Winter Recipes`} className='common-nav-item-style'>Winter Recipes</Link></li>
            <li  className='dropdown_item dropdown_item_last'><Link to={`/idea/Summer Recipes`} style={{textDecoration:'none',color:'aquamarine'}}>See More</Link></li>
          </ul>
}
        </li>
       
    </div> 
    <div className='icons-parent'>
            <svg width="22" height="24" viewBox="0 0 24 24" onClick={displayRecipe}>
            <path  
            d="M10.0780142,0 C15.091663,0 19.1560284,4.06436539 19.1560284,9.07801418 C19.1560284,11.7201597 18.0272767,14.0986712 16.2256822,15.7576398 L22.544153,22.0759308 C22.8985219,22.4302996 22.9052702,23.011836 22.5507517,23.3663545 L22.5507517,23.3663545 L22.4572086,23.4480573 C22.0993908,23.7199908 21.5886439,23.6880718 21.260328,23.3597559 L21.260328,23.3597559 L14.7580917,16.8582376 C13.3914568,17.6820838 11.7900833,18.1560284 10.0780142,18.1560284 C5.06436539,18.1560284 1,14.091663 1,9.07801418 C1,4.06436539 5.06436539,0 10.0780142,0 Z M10.0780142,1.81560284 C6.06709515,1.81560284 2.81560284,5.06709515 2.81560284,9.07801418 C2.81560284,13.0889332 6.06709515,16.3404255 10.0780142,16.3404255 C14.0889332,16.3404255 17.3404255,13.0889332 17.3404255,9.07801418 C17.3404255,5.06709515 14.0889332,1.81560284 10.0780142,1.81560284 Z" id="path-search"
            fill=""/>
            </svg>

            <svg width="18" height="24" viewBox="0 0 18 24"  
              onClick={() => {
                      if (!user) {
                        toast.warning('Please log in or sign up to bookmark');
                        return; 
                      }
                      nav('/saves');
                    }}>
            <path  
            d="M0.0222168 1C0.0222168 0.45999 0.459983 0.0222244 0.999995 0.0222244H17C17.54 0.0222244 17.9778 0.45999 17.9778 1V23C17.9778 23.3537 17.7868 23.6798 17.4783 23.8528C17.1698 24.0258 16.7919 24.0188 16.4901 23.8343L8.99999 19.257L1.50986 23.8343C1.20806 24.0188 0.830192 24.0258 0.521707 23.8528C0.213222 23.6798 0.0222168 23.3537 0.0222168 23V1ZM1.97777 1.97778V21.2566L8.49013 17.2768C8.80313 17.0855 9.19686 17.0855 9.50986 17.2768L16.0222 21.2566V1.97778H1.97777Z" 
            fill=""/>
            </svg>

               
  {user ? (
        <>
          <img
            src="https://img.sndimg.com/food/image/upload/v1/gk-static/gk/img/avatar/pasta.png"
            alt="Not-Found"
            style={{ width: '25px', height: '25px', borderRadius: '50%' }}
            onClick={handleImageClick}
          />
          {showDropdown && (

              <div
              className='nav-dropdown-logout'
            >
              <div style={{color:'white', }} onClick={handleProfile}>Profile</div>
              <div style={{color:'white' ,paddingTop:'10px'}}>Add a Recipe</div>
              <div style={{color:'white' ,paddingTop:'10px'}}>User Settings</div>
              <div
                onClick={handleLogout}
                className="logout-btn"
              >
                Log Out
                </div>
              
            </div>
          )}
        </>
      ) : 
              (
            <svg onClick={displayLogin} width="24px" height="24px" viewBox="0 0 24 24">
            <path
            d="M12.1439808,23.9836154 C9.46988462,23.9836154 6.97942308,23.5945962 5.13148077,22.8881538 C3.70296154,22.3420385 2,21.3434423 2,19.6875 C2,17.7075 2.51773077,15.7683462 3.49723077,14.07975 C4.45175,12.4340769 5.80244231,11.0907115 7.40328846,10.1948077 L7.52253846,10.1281154 L7.43778846,10.0209231 C6.57782692,8.93319231 6.10417308,7.55878846 6.10417308,6.15080769 C6.10417308,2.75925 8.81357692,0 12.1439808,0 C15.4742692,0 18.1837308,2.76161538 18.1837308,6.15611538 C18.1837308,7.56017308 17.7101346,8.93238462 16.8500577,10.02 L16.7653077,10.1271923 L16.8846154,10.1939423 C18.4854038,11.0897885 19.8360962,12.4333269 20.7906731,14.0792885 C21.7701731,15.7681154 22.2879038,17.7074423 22.2879038,19.6875 C22.2879038,21.3434423 20.585,22.3420385 19.1564231,22.8881538 C17.3084808,23.5945962 14.8180769,23.9836154 12.1439808,23.9836154 L12.1439808,23.9836154 Z M8.30282692,11.7359423 C5.53740385,13.2835385 3.81955769,16.3194231 3.81955769,19.6588846 C3.81955769,20.1660577 4.57873077,20.7763269 5.80082692,21.2514808 C7.41707692,21.8799231 9.72909615,22.2404423 12.1439808,22.2404423 C14.5588077,22.2404423 16.8708269,21.8799231 18.4870769,21.2514808 C19.7092308,20.7763269 20.4684038,20.1660577 20.4684038,19.6588846 C20.4684038,16.3194808 18.7504423,13.2835385 15.9850769,11.7359423 L14.0381346,10.6463654 L15.4140385,8.90619231 C16.0356154,8.12025 16.3641154,7.16676923 16.3641154,6.14896154 C16.3641154,3.74371154 14.4709423,1.78684615 12.1439808,1.78684615 C9.81690385,1.78684615 7.92373077,3.74371154 7.92373077,6.14896154 C7.92373077,7.16671154 8.25228846,8.12019231 8.87380769,8.90619231 L10.2497692,10.6463077 L8.30282692,11.7359423 L8.30282692,11.7359423 Z"
            fill=""
            />
            </svg> 
            
              )}   
              
            </div>
    </div>
              
   </>
  
  )
}

export default Navigation
