import React from 'react';
import classes from './Footer.module.css';
import Logo from "../Header/logo/logo";
import logo from "../Header/logo/logo.png";
import Navigation from "../Header/Navigation/navigation";

const Footer = (props) => {
	return (
		<footer className ={ classes.footer}>
			<div className={classes.container}>
				<div className={classes.logo}>
					<Logo logo={logo}/>
				</div>
				<Navigation links={props.links}/>
			</div>
		</footer>
	)
}
export default Footer;
