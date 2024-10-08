import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'



const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis perferendis voluptatem quidem molestias!
                Eius ad perspiciatis nemo, distinctio rem reprehenderit
                odio temporibus beatae dicta nisi in harum sed soluta rerum!</p>
            <div className="explore-menu-list">
                {
                    menu_list.map((item, index) => {
                        return (
                            <div key={index}
                                onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                                className='explore-menu-list-item'>
                                {console.log(category)}
                                <img className={category === item.menu_name ? "active" : ""}
                                    src={item.menu_image}
                                    alt="menu images" />
                                <p className={category === item.menu_name ? "para" : ""}>{item.menu_name}</p>
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