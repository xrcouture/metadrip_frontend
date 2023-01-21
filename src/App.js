import React from 'react'
import Slider from './component/Swiper/Slider'
import './App.css'
import 'swiper/swiper.min.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";  
import Cross from './component/cross/Cross'
import Footer from './component/Footer/Footer';
import Timeline from './component/timeline/Timeline';
import TimelineSlick from './component/timeline-demo/TimelineSlick';
import TimelineChrono from './component/timeline-demo/TimelineChrono';
import Section2 from './component/section2/Section2';
import Partners from './component/partners/Partners';
import Community from './component/community/Community';
import Header from './component/header/Header';
import Section1 from './component/section1/Section1';
import Countdown from './component/section1/Countdown';
import Utility from './component/section3/utility/Utility';
import Section3d from './component/section3/3d-container/Section3d';
import Social from './component/section3/socail/Social';
import Section3 from './component/section3/Section3';
import Roadmap from './component/timeline/Roadmap';


function App() {
  return (
    <div className="app-container" style={{overflow: "hidden"}}>
      <Header />
      <Section1 />
      <Slider />
      <Section3 />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
