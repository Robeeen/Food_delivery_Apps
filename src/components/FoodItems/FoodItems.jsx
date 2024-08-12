import React from 'react'
import './FoodItems.css'
import { assets } from '../../assets/assets'

export const FoodItems = ({id, name, description, price, image}) => {
  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img src={image} className='food-item-image' alt="" />
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
