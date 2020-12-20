import React from 'react';
import classes from  './Header.module.scss';
import Logo from "../logo/logo";
import Navigation from  './../Navigation/navigation'
import logoimg from "../logo/logo.png"


const Header = (props) => {
    return (
        <header className = {classes.header}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <Logo logo={logoimg}/>
                </div>
                <Navigation links={props.links}  submenu={props.submenu}/>
            </div>
        </header>
    )
}
export default Header;
