import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [ curState, setCurState ] = useState("Login");

  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{ curState }</h2>
                <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
            </div>
            <div className='login-popup-input'>
                { curState==="Login" ? <></> : <input type='text' placeholder='Your name' required /> }                
                <input type='email' placeholder='Your Email' required />
                <input type='password' placeholder='Password' required />
            </div>
            <button>{ curState==="Sign Up" ? "Create Account" : "Login" }</button>
        </form>
    </div>
  )
}

export default LoginPopup