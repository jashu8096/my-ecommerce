import { FaShippingFast } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { GiCardExchange } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import './Footer.css'

const Footer = ()=> {
    return(
        <>
        <div>

          <div className="brands-container">
            <h1 className="brands-heading">As Featured In</h1>
            
            <img src='https://cdn.shopify.com/s/files/1/0551/7475/8480/files/vogue.svg?v=1664361775' className='brand1'/>
            <img src='https://cdn.shopify.com/s/files/1/0551/7475/8480/files/established_b66cc5fb-e76b-4dd7-97ea-9ee1af7b3e75.svg?v=1664361986' className='brand2'/>
            <img src='https://cdn.shopify.com/s/files/1/0551/7475/8480/files/elle.svg?v=1664361775' className='brand3'/>

          </div>



        <div className="shipping-flex">
           <div className="flexx">
            <span className="text">Free Shipping Within India </span>
            <FaShippingFast className="icon-1"/>
           </div>
           

           <div className="flexx">
              
            <span className="text">World-wide Shipping </span>
            <GiWorld className="icon-1" />
           </div>


           <div className="flexx">
            <span className="text">Free Exchanges & Returns </span>
            <GiCardExchange  className="icon-1"/>
           </div>

        </div>



           

         <div className="footer">
            <div className="subscribe-container">
                <span className="subscribe-heading">We send fun emails! Sign up.</span>
               <input type="search"  className="input" placeholder="Enter your Email"/>
               <button className="subscribe-button">Subscribe</button>
            </div>
            
            
         </div>  
            


         <div className="footer-2">

           <div className="a">
            <h1 className="footer-heading">About Us</h1>
            <h1 className="footer-heading">Press</h1>
            <h1 className="footer-heading">FAQs</h1>
            <h1 className="footer-heading">Contact Us</h1>
            <h1 className="footer-heading">Gift Card</h1>
            <h1 className="footer-heading">Terms & Conditions</h1>
            <h1 className="footer-heading">Exchanges & Refunds</h1>
           </div>

           <div className="a">
               <h1 className="footer-heading">Folloe us</h1>
               <div>
               <FaInstagram className="icon-2"/>
               <FaFacebookSquare className="icon-2"/>
              </div>
           </div>

         </div>



















        </div>
        </>
    )
}

export default Footer