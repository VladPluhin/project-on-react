import React from 'react';
import classes from './sectionNews.module.scss';
import CardWrapper from  './CardWrapper/CardWrapper';
import TitleSection from './../components/TitleSection/TitleSection';

const SectionNews = (props) => {
    return (
        <section className={classes.sectionNews}>
            <div className={classes.container}>
                <TitleSection title={props.cards}/>
                <CardWrapper cards={props.cards}/>
            </div>
        </section>
    )
}
export default SectionNews;
