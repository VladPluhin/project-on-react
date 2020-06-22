import React from 'react';
import classes from  './buttons.module.scss';

const BtnPrimary = (props) => {
    const btnText = props.btnText;
  return (
      <div className={classes.btnHolder} >
          <a href="" className={classes.btnPrimary}>{btnText}</a>
      </div>
  );
}

export default BtnPrimary;
