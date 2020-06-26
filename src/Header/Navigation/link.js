import React, {Component} from 'react';
import  './navigation.scss';
import Submenu from './../submenu/submenu'

export default class Link extends Component {
    state= {
        hover: false,
    };
    hoverOn=() => {
        this.setState({ hover: true });
    }
    hoverOff=() => {
        this.setState({ hover: false });
    }
    render() {
        const {hover}= this.state;
        if(this.props.navitem.opener==true && this.props.navitem.opener==true) {
            return (
                <li
                    className={hover ? 'hover' : ''}
                    onMouseEnter={this.hoverOn}
                    onMouseLeave={this.hoverOff}
                >
                    <a href={'/'+ this.props.navitem.link.toLowerCase().trim()} className={'opener'}>
                        {this.props.navitem.label}
                    </a>
                    <Submenu submenu={this.props.navitem.submenu}/>
                </li>
            )
        }else {
            return (
                <li>
                    <a href={'/'+ this.props.navitem.link.toLowerCase().trim()}>
                        {this.props.navitem.label}
                    </a>
                </li>
            )
        }


    }
}
