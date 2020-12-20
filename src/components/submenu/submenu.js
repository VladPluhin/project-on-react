import React from 'react';
import SubmenuLink from './submenuLink';

const  Submenu= ({submenu}) => {
    return (
        <ul className='submenu'>
            {submenu.map((f, i) => {
                    return (<SubmenuLink key={i} navitem={f} />)
                })
            }
        </ul>
    )
}

export default Submenu;