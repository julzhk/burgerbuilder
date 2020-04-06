import React, {Component} from "react";
import Button from '../../../components/UI/Button/Button'
import klasses from './contactData.module.css'


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postcode: ''
        }
    }

    orderHander = () =>{

    }
    render() {
        return (
            <div className={klasses.ContactData}>
                <h3>Enter your delivery info</h3>
                <form>
                    <input className={klasses.ContactDataInput} type='text' name='name' placeholder='You'/>
                    <input className={klasses.ContactDataInput} type='text' name='email' placeholder='You@you'/>
                    <input className={klasses.ContactDataInput} type='text' name='street' placeholder='crib'/>
                    <input className={klasses.ContactDataInput} type='text' name='postcode' placeholder='postcode'/>
                    <Button btnType='Success' clicked={this.orderHander}>ORDER</Button>
                </form>
            </div>
        )
    }
}


export default ContactData