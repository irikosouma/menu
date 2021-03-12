import React from 'react'

//components
import Headers from './Header'
import MyMenu from './Content/index'

//styles 
import {WrapMenu} from './index.styles'

export default function MenuComponent() {
    return (
        <WrapMenu>
            <Headers/>
            <div className="menu-btn">
                <div>All</div>
                <div>Breakfast</div>
                <div>Lunch</div>
                <div>Shakes</div>
            </div>
            <MyMenu/>
        </WrapMenu>
    )
}
