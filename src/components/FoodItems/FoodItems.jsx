import React, { useContext } from 'react'
import './FoodItems.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext';


export const FoodItems = ({ id, name, description, price, image }) => {
   
    const { cartItems, addToCart, removeCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img src={image} className='food-item-image' alt="" />
                {
                    !cartItems[id] ?
                        <img src={assets.add_icon_white} onClick={() => addToCart(id)} alt="" className='add' /> :
                        <div className='food-item-counter'>
                            <img src={assets.remove_icon_red} onClick={() => removeCart(id)} alt="" className='green' />
                            {cartItems[id]}
                            <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" className='green' />
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-description">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>

        </div>
    )
}
