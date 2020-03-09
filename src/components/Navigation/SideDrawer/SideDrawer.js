import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import classes from './SideDrawer.css'
const klasses = classes

const sideDrawer = (props) => {
    return (
        <div className='SideDrawer'>
            <Logo height='60px'/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
}

export default sideDrawer