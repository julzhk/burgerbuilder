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
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            },
            email: {
                elementType: 'email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your email'
                },
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }

            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your crib'
                },
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }

            },
            postcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Postcode'
                },
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 8
                }

            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'fast'},
                        {value: 'cheapest', displayValue: 'cheapest'},
                    ]
                },
                value: 'cheapest',
                valid: true,
                touched: false,
                validation: {}
            }
        },
        loading: false,
        formValid: false
    }

    checkValidity(value, rules) {
        let isValid = true
        console.log(value, rules)
        if (rules.required) {
            console.log(value.trim(value))
            isValid = (value.trim(value) !== '')
        }
        if (rules.minLength) {
            isValid = (value.length >= rules.minLength) && isValid
        }
        if (rules.maxLength) {
            isValid = (value.length <= rules.maxLength) && isValid
        }
        console.log(isValid)
        return isValid
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
        //this is a shallow copy!
        const updatedForm = {...this.state.orderForm}
        //this is a how to deep copy
        const updatedFormElement = {...this.state.orderForm[elementKey]}
        updatedFormElement.value = event.target.value
        updatedFormElement.touched = true
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        const allValids = []
        for (let ele in updatedForm) {
            console.log(ele)
            allValids.push(updatedForm[ele].valid)
        }
        console.log(allValids)
        const formValid = allValids.every(i => i)

        updatedForm[elementKey] = updatedFormElement
        this.setState({
            orderForm: updatedForm,
            formValid: formValid
        })
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
                                     touched={this.state.orderForm[key].touched}
                                     valid={this.state.orderForm[key].valid}
                                     elementConfig={this.state.orderForm[key].elementConfig}
            />)
        }
        let contact_form = <form onSubmit={this.orderHander}>
            {this.state.formValid ? 'VALID form' : 'invalid form'}
            {formElements}
            <Button btnType='Success' disabled={!this.state.formValid}>ORDER</Button>
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