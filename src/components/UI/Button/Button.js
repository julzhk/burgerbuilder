import React from 'react'
import classes from './Button.css'

const klasses = classes
const button = (props) => (
    <button className={'Button '+ props.btnType } onClick={props.clicked}>
        {props.children}
    </button>
)

export default button