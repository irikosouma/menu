import React , {useState} from 'react'
import {WrapContent} from './index.styles'
export default function MyDishes({dish}) {
    return (
        <WrapContent>
            <div className="wrap-image">
                <img src={dish.image} alt="hinh-minh-hoa" className="image-style" />
            </div>
            
            <div className="bound-content">
                <div className="title-price">
                    <p>{dish.title}</p>
                    <p>${dish.price}</p>
                </div>
                <p className="desc">{dish.text}</p>
            </div>
            
        </WrapContent>
    )
}
