import React from "react";
import classes from './BuildControls.css'

const klasses = classes
const buildControl = (props) => (
    <div className='BuildControl'>
        <div className='label'>{props.label}</div>
        <button className='less'
                onClick={props.removed}
                disabled={props.disabled}>Less
        </button>
        <button className='more' onClick={props.added}>More</button>
    </div>
)

export default buildControl;