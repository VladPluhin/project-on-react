import React from 'react';
import classes from  './Header.module.scss';
import Logo from "./logo/logo";
import Navigation from "./Navigation/navigation";
import logo from "./logo/logo.png"


const Header = (props) => {
    return (
        <header className = {classes.header}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <Logo logo={logo}/>
                </div>
                <Navigation links={props.links}/>
            </div>
        </header>
    )
}
export default Header;
