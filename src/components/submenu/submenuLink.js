import React, {Component} from 'react';
import  './submenu.scss';


export default class SubmenuLink extends Component {
    render() {
        return (
            <li>
                <a href={'/'+ this.props.navitem.link.toLowerCase().trim()}>
                    {this.props.navitem.label}
                </a>
            </li>
        )
    }
}
