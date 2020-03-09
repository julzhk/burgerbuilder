import React from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

const klasses = classes
const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show}/>
        <div className='Modal'
             style={{
                 transform: props.show ? 'translateY(0)':'translateY(-200vh)'
             }} >
            {props.children}
        </div>
            </Aux>
    )
}

export default modal