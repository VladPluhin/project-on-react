import React, { useState } from 'react';
import classes from  './navigation.module.scss';


const Navigation = (props) => {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    const menuLink = props.links.map(f => {
        const url ="/"+ f.link.toLowerCase().trim();
        return (
            <li  className={hovered ? 'pulse animated' : ''}
                 onMouseEnter={toggleHover}
                 onMouseLeave={toggleHover}>
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
