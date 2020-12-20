import React from 'react';
import classes from './sectionContact.module.scss';
import TitleSection from '../TitleSection/TitleSection';
import Form from '../Form/Form';
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
