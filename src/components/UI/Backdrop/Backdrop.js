import React from 'react'
import classes from './Backdrop.css'

const klasses = classes

const backdrop = (props) => {
    console.log('bavkdrop')
    return (props.show ? <div className='Backdrop'>Y {props.show}</div> : <div>N{props.show}</div>)
}


export default backdrop;