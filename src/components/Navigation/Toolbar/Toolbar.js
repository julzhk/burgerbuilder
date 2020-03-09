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
        <div>
            <Logo height='60px'/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar