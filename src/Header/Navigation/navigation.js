import React, {Component, useState} from 'react';
import  './navigation.scss';


export default class Navigation extends Component {
    state= {
        hover: false,
    };
  onLinkClick=() => {
      this.setState({
          hover: true
      })
  }
  render() {
    const {hover}= this.state;
    let classNames= '';
    if(hover){
        classNames += 'hover';
    }
    const menuLink = this.props.links.map(f => {
        const url ="/"+ f.link.toLowerCase().trim();
        return (
            <li key={ f.id} className={classNames}>
               <span onClick={this.onLinkClick} >
                    {f.label}
               </span>
            </li>
        )
    })
    return (
        <ul className={'navLists'}>
            {menuLink}
        </ul>
    )
  }
}



