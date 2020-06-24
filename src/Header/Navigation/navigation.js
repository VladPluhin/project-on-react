import React, {Component, useState} from 'react';
import  './navigation.scss';


export default class Navigation extends Component {
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
    const menuLink = this.props.links.map(f => {
        const url ="/"+ f.link.toLowerCase().trim();
        return (
            <li key={f.id}
                className={hover ? 'hover' : ''}>

               <span  className={'opener'}
                      onMouseEnter={this.hoverOn}
                      onMouseLeave={this.hoverOff} >
                    {f.label}
               </span>

            </li>
        )
    })
    return (
        <ul className={'navLists'}>
            {menuLink }
        </ul>
    )
  }
}



