import React from 'react';
import classes from  './buttons.module.scss';

const BtnCard = (props) => {
    const btnText = props.btnText;
  return (
      <div className={classes.btnHolder} >
          <a href="" className={classes.btnCard}>{btnText}
              <i className="fas fa-shopping-cart"></i>
          </a>
      </div>
  );
}

export default BtnCard;
