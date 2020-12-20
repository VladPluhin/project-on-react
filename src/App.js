import React from 'react';
import Header from './components/Header/Header.js';
import SectionMain from './components/sectionMain/sectionMain';
import SectionVideo from './components/sectionVideo/sectionVideo';
import SectionNews from "./components/sectionNews/sectionNews";
import SectionContact from './components/sectionContact/sectionContact';
import SectionProduct from './components/sectionProduct/sectionProduct';
import Footer from './components/Footer/Footer';

const App = (props) => {
  return (
      <div className='wrapper'>
        <Header links={props.data.links} logo={props.logo} submenu={props.data.submenu}/>
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
