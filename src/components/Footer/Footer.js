import React from 'react';
import classes from './footer.module.scss';
import Logo from "../logo/logo";
import logo from "../logo/logo.png";


const Footer = (props) => {
	return (
		<footer className ={ classes.footer}>
			<div className={classes.container}>
				<div className={classes.logo}>
					<Logo logo={logo}/>
				</div>
                <ul className={classes.navLists}>
                    {props.links.map((item) => {
                        const url ="/"+ item.link.toLowerCase().trim();
                        return (
                            <li>
                                <a href={url}>
                                    {item.label}
                                </a>
                            </li>
                        )
                        })}
                </ul>
			</div>
		</footer>
	)
}
export default Footer;
