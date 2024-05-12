import React from 'react'
import ReactPlayer from 'react-player'
import "./CartCategories.css"

const CartCategories = ()=> {
    return(
      <>
      <center>
      <div>
         <h1 className='new-arrivals'>New Arrivals</h1>
         <button className='view-btn'>View all</button>

      </div>
      </center>
      
      
      <div>
       <div className="cart-items-container">


            <div className="item">
               <div><img src="https://img.freepik.com/free-photo/portrait-young-japanese-woman-with-jacket_23-2148870732.jpg?t=st=1715272618~exp=1715276218~hmac=05d4b6aec1bdd297a425d104b123a4e5d2bb09f5e8710747aaa940497505d1ab&w=360"  className="img"/></div>
               <div>
                <h1 className="item-name">Short jersey top</h1>
                <p className="price">Rs.5020</p>
                <p className="new-item">New</p>
               </div>


            </div>
           

            <div className="item">
               <div><img src="https://img.freepik.com/free-photo/young-woman-sunglasses-hat-black-leather-jacket-posing-outdoor_231208-13405.jpg?t=st=1715272625~exp=1715276225~hmac=c9eba5b79f2f19ea9aefa06c5572f07c78a521361a2a349e35cbe7a420a5ffbf&w=360" className="img"/></div>
               <div>
                <h1 className="item-name">Black solid cotton blend<br/> boxy top</h1>
                <p className="price">Rs.4990</p>
                <p className="new-item">New</p>
               </div>


            </div>

            <div className="item">
               <div><img src="https://img.freepik.com/free-photo/high-angle-girl-holding-basketball-ball_23-2148478711.jpg?t=st=1715274508~exp=1715278108~hmac=3a712edb83a6897572208e95044e0d436924478fbe473e707b0ff6ab33396de5&w=360" className="img"/></div>
               <div>
                <h1 className="item-name">Woven V Neck Sweater</h1>
                <p className="price">Rs.4530</p>
                <p className="new-item">New</p>
               </div>


            </div>

            <div className="item">
               <div><img src="https://img.freepik.com/free-photo/high-angle-girl-holding-basketball-ball_23-2148478711.jpg?t=st=1715274508~exp=1715278108~hmac=3a712edb83a6897572208e95044e0d436924478fbe473e707b0ff6ab33396de5&w=360" className="img"/></div>
               <div>
                <h1 className="item-name">Woven V Neck Sweater</h1>
                <p className="price">Rs.4530</p>
                <p className="new-item">New</p>
               </div>


            </div>


            <div className="item">
               <div><img src="https://img.freepik.com/free-photo/high-angle-girl-holding-basketball-ball_23-2148478711.jpg?t=st=1715274508~exp=1715278108~hmac=3a712edb83a6897572208e95044e0d436924478fbe473e707b0ff6ab33396de5&w=360" className="img"/></div>
               <div>
                <h1 className="item-name">Woven V Neck Sweater</h1>
                <p className="price">Rs.4530</p>
                <p className="new-item">New</p>
               </div>


            </div>



           


            <div className="item">
               <div><img src="https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2683.jpg?t=st=1715273301~exp=1715276901~hmac=516ec82b7f0f6c37279dacbf92428de357cc52a6b8e64c113182d76284bec1a8&w=360" className="img"/></div>
               <div>
                <h1 className="item-name">Single-Breasted Blazer</h1>
                <p className="price">Rs.5300</p>
                <p className="new-item">New</p>
               </div>


            </div>
          </div>


       <center>
        <h1 className="categories">Categories</h1>
       </center>


     <div  className="categories-flex">
       
       <div className="it">
            <div>
            <img src="https://img.freepik.com/free-photo/girl-wearing-grey-t-shirt-posing-studio_23-2149333500.jpg?t=st=1715277324~exp=1715280924~hmac=73e3ca0474378d1e9ea3686ed0ca9df6532967c61b2783a124013baf6dc0f095&w=360" className="img"/></div>
           <div>
            <button  className="btn">Tops</button>
           </div> 
       </div>
       

       <div className="it">
            <div>
            <img src="https://img.freepik.com/free-photo/full-height-attractive-beautiful-woman-wearing-overalls-with-sunglasses-smiling-with-happy-joyful_231208-5610.jpg?t=st=1715277440~exp=1715281040~hmac=c54008fce1e628fa6c93a0b6bbb4bab301cb7842527f69728690055bb893edcd&w=360" className="img"/></div>
           <div>
            <button  className="btn">Jumpsuits</button>
           </div> 
       </div>

       <div className="it">
            <div>
            <img src="https://img.freepik.com/free-photo/young-female-model-jumping_23-2148883724.jpg?t=st=1715278417~exp=1715282017~hmac=9dd92e482bc44914d5c86c662294e058d6882d13ad89af1ece77951033a83f84&w=360" className="img"/></div>
           <div>
            <button  className="btn">Bottoms</button>
           </div> 
       </div>

       <div className="it">
            <div>
            <img src="https://img.freepik.com/free-photo/portrait-fashionable-confident-business-woman_329181-3854.jpg?t=st=1715279132~exp=1715282732~hmac=e73d019073fabe7772e3b67885c69f51487956ff1a968f124c8d77a534a46f35&w=360" className="img"/></div>
           <div>
            <button  className="btn">Co-Ords</button>
           </div> 
       </div>

     </div>


 <div className='video-player'>

 <ReactPlayer url='https://youtu.be/ShjzEckueZU?feature=shared' height={"240px"} width={"90%"}/>
 </div>



       </div>
      </>
    )
}

export default CartCategories