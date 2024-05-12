import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { ImLocation2 } from "react-icons/im";
//import { useState } from "react";
import './NavBar.css'


const NavBar = () => {
    return(
        <>
       <div> 
     <div>
         <div className="nav-bar">
             <div>
              <img src="https://res.cloudinary.com/dvwqbrydn/image/upload/v1715249652/gpdaxv0yxgn2jcz1y7gf.png" alt="logo" className="logo"/>
              </div>
            
            
            <div className="search-bar">
               <input type="search"  className="search" placeholder="Search for Products"/>
               <button className="search-button"><IoSearch  className="search-icon"/></button>
            </div>
            <div className="location">
                <ImLocation2 className="location-icon" />
                <div>
                    
                    <p className="location-text">Delivering to Hyderabad 500038</p>
                    {/* <p className="update-location">Update location</p> */}
                </div>
                
            </div>
        



            <div className="cart-signin">

               <div><MdOutlineShoppingCart  className="cart"/></div>
                <div className="sign">
                 <VscAccount className="signin-logo" />
                 <span className="span">Sign In</span>
                </div>
            </div>

         </div>
           <div className="back-size">

            
              <div className="background-img" id="back-img">

                <div className="caption-div">

                       <div className="caption-flex">
                            <div>
                            <h1 className="caption">Fashion isn't just about what you wear, 
                            <br/>It's about how you wear it.
                            <br/> Find your flair with us</h1>
                            </div>
                    
                            <div>
                            <button className="shop-now-btn">Shop now</button>
                            </div>
                        </div>
                </div>

              </div>

            </div>

         </div>
                

    </div> 
         
        </>
    )
}

export default NavBar