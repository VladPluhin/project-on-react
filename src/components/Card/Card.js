import React from 'react';
import classes from  './Card.module.scss';
import BtnPrimary from './../../components/buttons/buttons'

const Card = (props) => {
    const videoInfo= props.card.filter(function(item){
        if(item.videoInfo == true) {
            return item;
        }
    });

  return (
      <div className={classes.card} >
          <span className={classes.subtitle}>{videoInfo.map((f=>f.subtitle))}</span>
          <h2 className={classes.title}>{videoInfo.map((f=>f.title))}</h2>
          <div className={classes.title}>
              <p>{videoInfo.map((f=>f.text))}</p>
          </div>
          <BtnPrimary btnText={videoInfo.map((f=>f.button))} />
      </div>
  );
}

export default Card
