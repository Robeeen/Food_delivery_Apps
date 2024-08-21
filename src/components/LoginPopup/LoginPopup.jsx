import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [ curState, setCurState ] = useState("Sign up")
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{curState}</h2>
                <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
            </div>
        </form>
    </div>
  )
}

export default LoginPopup