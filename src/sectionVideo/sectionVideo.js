import React from 'react';
import classes from './sectionVideo.module.scss';
import Card from './../components/Card/Card';
import Video from './Video/Video';

const SectionVideo = (props) => {
    return (
        <section className={classes.videoSection}>
            <div className={classes.container}>
                <Card card= {props.card}/>
                <Video video={props.video}/>
            </div>
        </section>
    )
}

export default SectionVideo;
