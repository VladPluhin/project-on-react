import React from 'react';
import classes from './Video.module.scss';
import Lightgallery from "./../LightboxView/LightboxView";

const Video = (props) => {
    const bg =props.video.map((item) => (item.bg));
    return (
        <div className={classes.videoHolder} style ={ { backgroundImage: "url("+bg+")" } }>
             <Lightgallery channel={props.video.channel}  video={props.video}/>
        </div>
    )
}

export default Video;
