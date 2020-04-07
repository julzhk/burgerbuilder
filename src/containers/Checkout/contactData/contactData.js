import React, {Component} from "react";
import Button from '../../../components/UI/Button/Button'
import classes from './contactData.module.css'
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postcode: ''
        },
        loading:false
    }

    orderHander = (event) => {
        event.preventDefault()
        console.log(this.props)
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'self self2',
                address: {
                    street: 'high street',
                    country: 'uk'
                },
                email: 'self@example.com',
                deliveryMethod: 'fastest'
            }
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

    render() {
        let contact_form = <form>
            <input className={classes.ContactDataInput} type='text' name='name' placeholder='You'/>
            <input className={classes.ContactDataInput} type='text' name='email' placeholder='You@you'/>
            <input className={classes.ContactDataInput} type='text' name='street' placeholder='crib'/>
            <input className={classes.ContactDataInput} type='text' name='postcode' placeholder='postcode'/>
            <Button btnType='Success' clicked={this.orderHander}>ORDER</Button>
        </form>;
        if (this.state.loading){
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