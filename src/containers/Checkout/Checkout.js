import React, {Component} from "react";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactData from "./contactData/contactData";
import klasses from './contactData/contactData.module.css'

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }

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
        let price = 0
        for (let param of query.entries()) {
            if (param[0] == 'price') {
                price = +param[1]
            } else {
                console.log(param)
                ingredients[param[0]] = +param[1]
            }
        }
        console.log(ingredients)
        this.setState({ingredients: ingredients, totalPrice: price})
    }

    render() {
        return (
            <div className={klasses.ContactData}>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutContinued={this.checkoutContinuedHandler}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    totalPrice={this.state.totalPrice}
                />
                <Route path='/checkout/contact-data' render={(props) => (
                    <ContactData
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        {...props}
                    />)}
                />
                {/*    spread props to pass props.history*/}
            </div>
        )
    }
}

export default Checkout;