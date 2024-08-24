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
        <input type="text" PlaceOrder="Phone" />
      </div>
      <div className="place-order-left">

      </div>
    </div>
  )
}

export default PlaceOrder