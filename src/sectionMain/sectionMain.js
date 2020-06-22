import React from 'react';
import Slider from './slider/slider';
import 'react-animated-slider/build/horizontal.css';
import './slider/slider.scss';
import classes from './sectionMain.module.scss';
import BtnPrimary from "../components/buttons/buttons";

const SectionMain = (props) => {
    return (
        <section className = {classes.sectionMain}>
            <Slider className="slider-wrapper">
                {props.sliderContent.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <BtnPrimary btnText={item.button} />

                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}
export default SectionMain;
