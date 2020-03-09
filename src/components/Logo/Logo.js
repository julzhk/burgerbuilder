import React from "react";
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

const klasses = classes
const logo = (props) =>(
    <div className='Logo'>
        <img src={burgerLogo}/>
    </div>
);

export default logo