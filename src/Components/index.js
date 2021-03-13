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
    return (
        <WrapMenu>
            <Headers/>
            <div className="menu-btn">
                <div>All</div>
                <div>Breakfast</div>
                <div>Lunch</div>
                <div>Shakes</div>
            </div>
            <div className="list-dishes">
                {listDishes.map((dish, index) => (
                    <MyDishes key={index} dish={dish} />
                ))}

            </div>
        </WrapMenu>
    )
}
