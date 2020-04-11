import React from 'react'
import classes from './Button.module.css'

const klasses = classes
const MyButton = (props) => (
    <button
        disabled={props.disabled}
        className={classes.Button + ' ' + props.btnType}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default MyButton