import React from 'react';
import classes from  './TitleSection.scss';

const TitleSection = (props) => {
    return (
        <div className='titleHolder'>
            <h2>{props.title.map((f=>f.sectionTitle))}</h2>
            <div className={classes.text}>
                <p>{props.title.map((f=>f.text))}</p>
            </div>
        </div>

    )
}
export default TitleSection;
