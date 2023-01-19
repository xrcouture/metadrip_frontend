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
import Section2 from './component/section/Section2';
import Partners from './component/partners/Partners';
import Community from './component/community/Community';
import Header from './component/header/Header';


function App() {

  return (
    <div className='app-container'>
      {/* <Header /> */}
      {/* <Slider /> */}
      {/* <Section2 /> */}
      <Cross />
      {/* <Partners /> */}
      <Community />
      {/* <Timeline /> */}
      <Footer />
    </div>
  )
}

export default App