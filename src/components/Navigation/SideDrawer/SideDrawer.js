import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import classes from './SideDrawer.css'

const klasses = classes

const sideDrawer = (props) => {
    return (
        <div className='SideDrawer'>
            <div className='Logo'>

                <Logo height='60px'/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
}

export default sideDrawer