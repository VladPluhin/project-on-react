import React from 'react';
import classes from './sectionContact.module.scss';
import TitleSection from './../components/TitleSection/TitleSection';
import Form from './../components/Form/Form';
const SectionContact = (props) => {
    return (
        <section className={classes.sectionContact}>
            <div className={classes.container}>
                <TitleSection title={props.contactInfo}/>
                <Form form={props.form}/>
            </div>
        </section>
    )
}

export default SectionContact;
