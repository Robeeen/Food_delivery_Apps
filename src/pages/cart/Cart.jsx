import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/context/StoreContext'


const Cart = () => {
  const { cartItems, food_list, removeCart } = useContext(StoreContext)

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if(cartItems[item._id] > 0){
              return (
                <>
                <div className='cart-item-title cart-item-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p className='cross' onClick={() => removeCart(item._id)}>X</p>
                  </div>
                  <hr />
                </>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default Cart