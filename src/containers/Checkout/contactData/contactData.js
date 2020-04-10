import React, {Component} from "react";
import Button from '../../../components/UI/Button/Button'
import classes from './contactData.module.css'
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your name'
                },
                value: ''
            },
            email: {
                elementType: 'email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your email'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your crib'
                },
                value: ''
            },
            postcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Postcode'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'fast'},
                        {value: 'cheapest', displayValue: 'cheapest'},
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHander = (event) => {
        event.preventDefault()
        console.log(this.props)
        const formData = {}
        for (let key in this.state.orderForm) {
            formData[key] = this.state.orderForm[key].value
        }
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData: formData
        }
        axios.post('/orders.json', order)
            .then((response) => {
                    this.setState({
                        purchasing: false,
                        loading: false,
                    })
                    console.log(response)
                }
            ).catch(error => {
            this.setState({
                purchasing: false,
                loading: false
            })
            console.log(error)
        }).finally(
            this.props.history.push('/')
        );
    }
    inputChangedHandler = (event, elementKey) => {
        console.log(event)
        console.log(elementKey)
        //this is a shallow copy!
        const updatedForm = {...this.state.orderForm}
        //this is a how to deep copy
        const updatedFormElement = {...this.state.orderForm[elementKey]}
        updatedFormElement.value = event.target.value
        updatedForm[elementKey] = updatedFormElement
        this.setState({orderForm: updatedForm})
    }

    render() {
        const formElements = []
        for (let key in this.state.orderForm) {
            formElements.push(<Input elementType={this.state.orderForm[key].elementType}
                                     name={key}
                                     key={key}
                                     changed={(event) => {
                                         this.inputChangedHandler(event, key)
                                     }}
                                     value={this.state.orderForm[key].value}
                                     elementConfig={this.state.orderForm[key].elementConfig}
            />)
        }
        let contact_form = <form onSubmit={this.orderHander}>
            {formElements}
            <Button btnType='Success'>ORDER</Button>
        </form>;
        if (this.state.loading) {
            contact_form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h3>Enter your delivery info</h3>
                {contact_form}
            </div>
        )
    }
}


export default ContactData