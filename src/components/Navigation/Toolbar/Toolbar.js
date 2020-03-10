import React from "react";
import classes from './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const klasses = classes
const toolbar = (props) => (
    <header className='Toolbar'>
        <div>
            MENU
        </div>
        <div className='Logo' >
            <Logo />
        </div>
        <nav className='DesktopOnly'>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar