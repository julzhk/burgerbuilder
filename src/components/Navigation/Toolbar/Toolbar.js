import React from "react";
import classes from './Toolbar.css'
import Logo from "../../Logo/Logo";

const klasses = classes
const toolbar = (props) => (
    <header className='Toolbar'>
        <div>
            MENU
        </div>
        <div>
            <Logo />
        </div>
        <nav>
            <ul>
                <li>
                    destination
                </li>
            </ul>
        </nav>
    </header>
);

export default toolbar