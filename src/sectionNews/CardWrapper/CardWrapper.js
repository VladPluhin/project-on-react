import React from 'react';
import classes from  './CardWrapper.module.scss';
import BtnPrimary from "../../components/buttons/btnPrimary";


const CardWrapper = (props) => {
    const newsCards= props.cards.filter(function(item){
        if(item.news===true) {
            return item;
        }
    });
  return (
      <div className={classes.cardWrapper}>
          {newsCards.map((item) => (
             <div className={classes.card} key={item.id}>
                  <div className={classes.imgholder}>
                      <img src={item.image} alt="image description"/>
                  </div>
                  <h3>{item.title}</h3>
                  <BtnPrimary btnText={item.button}/>
            </div>
          ))}
      </div>
  );
}

export default CardWrapper;
