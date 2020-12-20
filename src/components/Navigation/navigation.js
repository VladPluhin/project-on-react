import React from 'react';
import  './navigation.scss';
import Link from './link';


const  Navigation= (props) => {
    return (
        <ul className='navLists'>
            {props.links.map((f, i) => {
                   return (<Link key={i} navitem={f} />)
                })
            }
        </ul>
    )
}

export default Navigation;