import React from 'react';
import classes from './Products.module.scss';
import BtnPrimary from "../../components/buttons/buttons";

const Products = (props) => {
    const product= props.productList.filter(function(item){
        if(item.product === true) {
            return item;
        }
    });
    return (
        <div className={classes.cardWrapper}>
            {product.map((item) => (
                <div className={classes.card} key={item.id}>
                    <div className={classes.imageholder}>
                        <img src={item.image} alt="image description"/>
                    </div>
                    <h3>{item.title}</h3>
                    <div className={classes.text}>
                        <p>{item.description}</p>
                    </div>
                    <BtnPrimary btnText={item.button}/>
                </div>
            ))}
        </div>
    );
}

export default Products;
