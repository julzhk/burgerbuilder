import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const klasses = classes


const navigationItems = () => (
    <ul className='NavigationItems'>
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
);

export default navigationItems
