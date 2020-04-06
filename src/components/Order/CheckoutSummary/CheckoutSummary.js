import React from 'react';
import Burger from "../../Burger/Burger";
import MyButton from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
    console.log(props.ingredients)
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Delicious!</h1>
            <div style={{width: '100%', margin: 'auth'}}>
                {props.ingredients ? <Burger ingredients={props.ingredients}/> : null}
                <MyButton btnType='Danger' clicked={props.checkoutCancelled}>CANCEL</MyButton>
                <MyButton btnType='Success' clicked={props.checkoutContinued}>CONTINUE</MyButton>
            </div>
        </div>
    )
}


export default checkoutSummary