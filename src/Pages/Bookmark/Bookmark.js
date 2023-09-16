import React, { useState, useEffect } from "react";
import './Bookmark.css'
import { BsSearch } from "react-icons/bs";
import axios from "../../Generic/Api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Bookmark() {
const [showSearchBar, setShowSearchBar] = useState(false)
const [savesData,setSavesData]= useState([])
const [searchQuery, setSearchQuery] = useState('');


const handleShowSearchBar = ()=>{
  setShowSearchBar(!showSearchBar)
}

const user = useSelector(state => state.user)
const email = user.email

useEffect(()=>{
  const response = axios.get(`/user/fetch-recipe/${email}`)
  .then(response=>setSavesData(response.data))
  .catch(err=>console.log(err))
},[])


  return (
    <div>
           <div className="save_navBar">
      
        <div className="save_box-cntr">
          { !showSearchBar &&
           <div className="save_box-saves">
           <div className="saves_text">Saves</div>

              <div className="save-btn-cntnr">
                <div>
                  <BsSearch style={{ fontWeight:"900"}} onClick={handleShowSearchBar}  />
                </div>
                <span>|</span>
                <div className="edit-btn">
                    edit
                </div>
        </div>
            </div>
 }

            { showSearchBar &&
                <div  className="save_box-search">
                    <div className="save-search-box">
                    <BsSearch style={{ fontWeight:"900"}} />

                <input type="text" placeholder="Search for Recipes in saves" 
                value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}/>
                <button onClick={handleShowSearchBar}  className="saves_cancel-button">cancel</button>
                    </div>
            </div> 
            
            }
                        <div className="save_flex">
                        <ul className="sub_flex_cntr">
                            <li className="saves_common_cntr ">RECIPES</li>
                        </ul>
                        </div>


                <main className="saves-cntnr_outline">

                <div className="saves-card-cntnrs">
                    <div className="add-card saves-card">
                    <div className="singleCard-content">
                    <Link to={`/idea/Healthy & Diet`}><button>+</button></Link>
                    <div className="discover"><Link to={`/idea/Healthy & Diet`}>Discover recipes</Link></div>
                    </div>

                    </div>
                    {savesData[0]?.saves
                .filter((item) =>
                  item.recipeName.toLowerCase().includes(searchQuery.toLowerCase()) // Step 3: Filter items
                )
                .map((item) => {
                  return (
                    <div
                      className="fetched-card saves-card"
                      key={item._id}
                    >
                      <div className="card-firstHalf">
                        <Link to={`/recipe/${item.recipe[0].label}`}><img
                          src={item.recipe[0].image}
                          alt={item.recipe[0].label}
                        /></Link>
                      </div>
                      <div className="card-secondHalf">
                        <h2 className="save-card_label">
                          {item.recipeName}
                        </h2>
                        <div className="save-card_source">
                          By <span>
                            {item.recipe[0].source}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </main>
        </div>
      </div>
    </div>

  )
}

export default Bookmark