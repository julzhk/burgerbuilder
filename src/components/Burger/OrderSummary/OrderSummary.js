import React, {Component} from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from "../../UI/Button/Button";

class OrderSummary extends Component  {

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((igKey) => {
            return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>
                {igKey}
            </span>:
                {this.props.ingredients[igKey]}
            </li>)
        })
    console.log(ingredientSummary)
        return(
        <Aux>
            <h3>
                Your Order:
            </h3>
            <p>Delivering a burger with these ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
            <p>Checkout?</p>
            <Button btnType='Danger'  clicked={this.props.purchaseCancelled} >CANCEL</Button>
            <Button btnType='Success'  clicked={this.props.purchaseContinues}>CONTINUE</Button>
        </Aux>
    )
    }
}

export default OrderSummary