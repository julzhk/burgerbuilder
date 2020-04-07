import React from "react";
import klasses from './Order.module.css'

const order = (props) =>(
    <div className={klasses.Order}>
        <p>Ingredients: Salad(1)</p>
        <p>Price: $44,44</p>
    </div>
)
export default order;