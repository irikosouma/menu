import React, {useState} from 'react'

//components
import Headers from './Header'
import MyDishes from './Content/index'

//styles 
import {WrapMenu} from './index.styles'
//data
import menu from '../data/menu'
export default function MenuComponent() {
    const [listDishes, setListDishes] = useState(menu)
    const [isRender, setIsRender] = useState(0);
    const handleList = () => {
        setListDishes(menu)
    }
    const handleBreakfast = () => {
        const newList = menu.filter((item) => item.text.includes('milkshake') || item.text.includes('coffee'))
        setListDishes(newList)
    }
    const handleLunch = () => {
        const newList = menu.filter((item) => item.text.includes('squid') || item.text.includes('slow-carb') || item.text.includes('vegan'))
        setListDishes(newList)
    }
    const handleShakes = () => {
        const newList = menu.filter((item) => item.title.includes('Milkshake') || item.title.includes('Oreo') || item.title.includes('Buddy'))
        setListDishes(newList)
    }
    return (
        <WrapMenu>
            <Headers/>
            <div className="menu-btn">
                <button className="btn success" onClick={handleList}>All</button>
                <button className="btn success" onClick={handleBreakfast}>Breakfast</button>
                <button className="btn success" onClick={handleLunch}>Lunch</button>
                <button className="btn success" onClick={handleShakes}>Shakes</button>
            </div>
            <div className="list-dishes">
                {listDishes.map((dish, index) => (
                    <MyDishes key={index} dish={dish} />
                ))}
            </div>
        </WrapMenu>
    )
}
