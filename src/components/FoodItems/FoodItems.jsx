import React, { useState } from 'react'
import './FoodItems.css'
import { assets } from '../../assets/assets'

export const FoodItems = ({ id, name, description, price, image }) => {
    const [itemCount, setItemCount] = useState(0);

    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img src={image} className='food-item-image' alt="" />
                {
                    !itemCount ?
                        <img src={assets.add_icon_white} onClick={() => setItemCount(prev => prev + 1)} alt="" className='add' /> :
                        <div className='food-item-counter'>
                            <img src={assets.remove_icon_red} onClick={() => setItemCount(prev => prev -1)} alt="" className='green' />
                            {itemCount}
                            <img src={assets.add_icon_green} onClick={() => setItemCount(prev => prev + 1)} alt="" className='green' />
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
