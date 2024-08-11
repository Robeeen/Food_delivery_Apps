import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis perferendis voluptatem quidem molestias! Eius ad perspiciatis nemo, distinctio rem reprehenderit odio temporibus beatae dicta nisi in harum sed soluta rerum!</p>
        <div className="explore-menu-list">
            {
                menu_list.map((item, index) => {
                    return (
                        <div key={index} className='explore-menu-list-item'>
                            <img src={item.menu_image} alt="menu images" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu