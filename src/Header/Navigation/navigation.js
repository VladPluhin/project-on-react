import React, { useState } from 'react';
import classes from  './navigation.module.scss';


const Navigation = (props) => {

    const menuLink = props.links.map(f => {
        const url ="/"+ f.link.toLowerCase().trim();
        return (
            <li key={f.id}>
                <a href={url}>{ f.label} </a>
            </li>
        )
    })
    return (
        <ul className={classes.navLists}>
            {menuLink}
        </ul>
    )

}

export default  Navigation;
