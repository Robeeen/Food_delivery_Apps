import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
import { FoodItems } from '../FoodItems/FoodItems';

export const FoodDisplay = () => {
    const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dish near you</h2>
        <div className="food-display-list">
            {
                food_list.map((item, index) => {
                    return <FoodItems />
                })
            }
        </div>

    </div>
  )
}
