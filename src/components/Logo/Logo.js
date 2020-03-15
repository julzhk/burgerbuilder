import React from "react";
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

const klasses = classes
const logo = (props) =>(
    <div className={classes.Logo} style={{height:props.height || '100%'}}>
        <img src={burgerLogo}/>
    </div>
);

export default logo