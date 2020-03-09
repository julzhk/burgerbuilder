import React from 'react'
import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>
                {igKey}
            </span>:
                {props.ingredients[igKey]}
            </li>)
        })
    console.log(ingredientSummary)

    return (
        <Aux>
            <h3>
                Your Order:
            </h3>
            <p>Delivering a burger with these ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Checkout</p>
        </Aux>
    )
}

export default orderSummary