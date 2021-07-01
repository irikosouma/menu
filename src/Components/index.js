import React, {useState, useEffect} from 'react'

//components
import Headers from './Header'
import MyDishes from './Content/index'

//styles 
import {WrapMenu} from './index.styles'
import { useSelector, useDispatch } from 'react-redux'
//data
// import menu from '../data/menu'
import { getAllMenu, getBreakfast, getLunch, getShakes } from '../redux/action'
export default function MenuComponent() {
    const listMenu = useSelector(state => state.menuList.listMenu)
    const dispatch = useDispatch()
    useEffect(() => {
        
    }, [])
    const handleList = () => {
        dispatch(getAllMenu())
    }
    const handleBreakfast = () => {
        dispatch(getBreakfast())
    }
    const handleLunch = () => {
        dispatch(getLunch())
    }
    const handleShakes = () => {
        dispatch(getShakes())
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
                {listMenu.map((dish, index) => (
                    <MyDishes key={index} dish={dish} />
                ))}
            </div>
        </WrapMenu>
    )
}
