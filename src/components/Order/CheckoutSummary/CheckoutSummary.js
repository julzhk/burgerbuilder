import React from 'react';
import Burger from "../../Burger/Burger";
import button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Delicious!</h1>
            <div style={{width: '100%', margin: 'auth'}}>
                <Burger ingredients={props.ingredients}/>
                <button btnType='Danger' onClick={props.checkoutCancelled}>CANCEL</button>
                <button btnType='Success' onClick={props.checkoutContinued}>CONTINUE</button>
            </div>
        </div>
    )
}


export default checkoutSummary