import React from "react";
import ModalVideo from 'react-modal-video';

import  './LightboxView.scss';
import classes from './LightboxView.module.scss';
class Lightgallery extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({isOpen: true})
    }


    render() {
        const videoLink= this.props.video.map(item => item.videoId);
        return (
            <div className={classes.btnHolder}>
                <ModalVideo channel={this.props.channel} isOpen={this.state.isOpen} videoId={videoLink}
                            onClose={() => this.setState({isOpen: false})}/>
                <button onClick={this.openModal} className={classes.btnOpen}></button>
            </div>
        )
    }
}

export default Lightgallery;
