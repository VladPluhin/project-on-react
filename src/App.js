import React from 'react';
import Header from './Header/Header.js';
import SectionMain from './sectionMain/sectionMain';
import  SectionVideo from './sectionVideo/sectionVideo';
import SectionNews from "./sectionNews/sectionNews";
import SectionContact from './sectionContact/sectionContact';
import SectionProduct from './sectionProduct/sectionProduct';
import Footer from './Footer/Footer';

const App = (props) => {
  return (
      <div className='wrapper' >
        <Header links={props.data.links} logo={props.logo}/>
        <SectionMain  sliderContent={props.data.sliderContent}/>
        <SectionVideo card={props.data.card} video={props.data.video}/>
        <SectionNews cards={props.data.newsContent}/>
        <SectionContact form={props.data.form} contactInfo={props.data.contactInfo}/>
        <SectionProduct  productList={props.data.description}/>
        <Footer links={props.data.links} logo={props.logo}/>
      </div>
  );
}

export default App;
