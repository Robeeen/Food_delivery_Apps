import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [ menu, setMenu ] = useState("Home");


  return (
    <div className='navbar'>
        <img src={assets.logo} alt='Logo' className='logo' />
        <ul className='navbar-menu'>
          <ul onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</ul>
          <ul onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</ul>
          <ul onClick={() => setMenu("Mobile-apps")} className={menu === "Mobile-apps" ? "active" : ""}>Mobile-apps</ul>
          <ul onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""} >Contact us</ul>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt="" />
          <div className='navbar-search-icon' >
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
          </div>
          <button>SignIn</button>
        </div>
    </div>
  )
}

export default Navbar