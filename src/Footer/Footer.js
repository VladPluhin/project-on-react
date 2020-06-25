import React from 'react';
import classes from './Footer.module.css';
import Logo from "../Header/logo/logo";
import logo from "../Header/logo/logo.png";


const Footer = (props) => {
	return (
		<footer className ={ classes.footer}>
			<div className={classes.container}>
				<div className={classes.logo}>
					<Logo logo={logo}/>
				</div>
                <ul className='navLists'>
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
