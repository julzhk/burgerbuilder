import React from "react";
import classes from './NavigationItem.css'

const klasses = classes

const navigationItem = (props) => (
    <li className='NavigationItem'>
        <a href={props.link} className={props.active ? 'active':null }>
            {props.children}
        </a>
    </li>
);

export default navigationItem