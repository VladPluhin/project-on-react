import React from 'react';
import classes from './sectionProduct.module.scss';
import TitleSection from './../TitleSection/TitleSection';
import Products from './Products';

const SectionProduct = (props) => {
    return (
        <section className={classes.sectionPropduct}>
            <div className={classes.container}>
                <TitleSection title={props.productList}/>
                <div className={classes.cardWrapper}>
                    <Products productList={props.productList}/>
                </div>
            </div>
        </section>
    )
}

export default SectionProduct;
