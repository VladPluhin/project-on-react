import React from 'react';
import classes from  './Form.module.scss';
import BtnPrimary from "../buttons/buttons";

const Form = (props) => {
    const inputs=props.form.filter(function(item) {
        if(item.typeInput === true) {
            return item;
        }
    });
    return (
        <form action="" className={classes.formSubscribe}>
            {inputs.map((i) =>
                <div className={classes.inputWrapper}>
                    <input type={i.type} placeholder={i.textPlaceholder}/>
                </div>
            )}
            <div className={classes.btnHolder}>
                <BtnPrimary btnText={props.form.map((f=>f.button))} />
            </div>
        </form>
    )
}


export default Form;
