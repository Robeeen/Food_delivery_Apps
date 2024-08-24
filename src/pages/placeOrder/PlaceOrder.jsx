import React from 'react'
import './PlaceOrder.css'


const PlaceOrder = () => {
  return (
    <div className="place-order">
      <div className="place-order-right">
        <h3 className="title">Delivery Information</h3>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-left">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Sub Total</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Deliver Fee</p>
            <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>{getTotalCartAmount() > 0 ? getTotalCartAmount() + 2 : 0}</p>
          </div>
          <button onClick={() => navigate('/order')}>Prceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder