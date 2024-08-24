import React from 'react'
import './PlaceOrder.css'


const PlaceOrder = () => {
  return (
    <div className="place-order">
      <div className="place-order-right">
        <h3 className="title">Delivery Information</h3>
        <div className="multi-fields">
          <input type="text" PlaceOrder="First Name" />
          <input type="text" PlaceOrder="Last Name" />
        </div>
        <input type="email" PlaceOrder="Email Address" />
        <input type="text" PlaceOrder="Street" />
        <div className="multi-fields">
          <input type="text" PlaceOrder="City" />
          <input type="text" PlaceOrder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" PlaceOrder="Zip Code" />
          <input type="text" PlaceOrder="Country" />
        </div>
      </div>
      <div className="place-order-left">

      </div>
    </div>
  )
}

export default PlaceOrder