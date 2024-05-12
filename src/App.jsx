import { useState } from 'react'
import NavBar from './assets/components/navBar/NavBar'
import CartCategories from './assets/components/cartCategories/CartCategories'
import Footer from './assets/components/footer/Footer'



const App = () => {
  return(
    <>
     <div>
     <NavBar/>
     <CartCategories/>
     <Footer/>
     </div>

    </>
     
  )
}

export default App