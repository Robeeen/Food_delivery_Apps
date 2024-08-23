import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

const Navbar = ({setShowLogin}) => {
  const [ menu, setMenu ] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt='Logo' className='logo' /></Link>
        <ul className='navbar-menu'>
          <ul onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}><Link to='/'>Home</Link></ul>
          <ul onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</ul>
          <ul onClick={() => setMenu("Mobile-apps")} className={menu === "Mobile-apps" ? "active" : ""}>Mobile-apps</ul>
          <ul onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""} >Contact us</ul>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt="" />
          <div className='navbar-search-icon' >
            <Link to='/Cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount() == 0 ? "" : "dot"}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>SignIn</button>
        </div>
    </div>
  )
}

export default Navbar