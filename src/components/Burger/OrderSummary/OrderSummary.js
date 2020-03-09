import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from "../../UI/Button/Button";

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
            <strong>Total Price: ${props.price.toFixed(2)}</strong>
            <p>Checkout?</p>
            <Button btnType='Danger'  clicked={props.purchaseCancelled} >CANCEL</Button>
            <Button btnType='Success'  clicked={props.purchaseContinues}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary