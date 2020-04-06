import React, {Component} from "react";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends Component {
    state = {ingredients: null}

    checkoutContinuedHandler = () => {
        console.log('xxx')
        this.props.history.replace('/checkout/contact-data')

    }
    checkoutCancelledHandler = () => {
        console.log('yyy')
        this.props.history.goBack()
    }

    componentDidMount() {
        console.log(this.props.location.search)
        const query = new URLSearchParams(this.props.location.search)
        let ingredients = {}
        for (let param of query.entries()){
            console.log(param)
            ingredients[param[0]] = +param[1]
        }
        console.log(ingredients)
        this.setState({ingredients:ingredients})
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutContinued={this.checkoutContinuedHandler}
                    checkoutCancelled={this.checkoutCancelledHandler}
                />
            </div>
        )
    }
}

export default Checkout;