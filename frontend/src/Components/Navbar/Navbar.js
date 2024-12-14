import React from 'react'
import "./Navbar.css"
import Menubar from '../Menubar/Menubar'
import Mainmenu from '../Mainmenu/Mainmenu'
import Home from '../Home/Home'
import Corefocus from '../Corefocus/Corefocus'
import Subscribe from '../subscribe/Subscribe'
import Learn from '../Learn/Learn'
import Footer from '../Footer/Footer'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <div className='navbar1'>
      <div className='navbar2'>
      <div><i class="fa-brands fa-facebook" style={{color: "#74C0FC"}}></i></div>
      <div><i class="fa-brands fa-twitter" style={{color: "#74C0FC"}}></i></div>
      <div><i class="fa-brands fa-linkedin" style={{color: "#74C0FC"}}></i></div>
      <div><i class="fa-brands fa-instagram" style={{color: "#74C0FC"}}></i></div>
      </div>
      <div className='navbar3'>
        <i class="fa-regular fa-envelope" style={{color: "#74C0FC"}}></i>
        <p>Email Us</p>
      </div>
      </div>
    </div>
    <Menubar/>
    <Mainmenu/>
    <Home/>
    <Corefocus/>
    <Subscribe/>
    <Learn/>
    <Footer/>
    </>
  )
}

export default Navbar
