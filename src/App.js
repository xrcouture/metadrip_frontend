import React from 'react'
import Slider from './component/Swiper/Slider'
import './App.css'
import 'swiper/swiper.min.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";  
import Footer from './component/Footer/Footer';
import Community from './component/community/Community';
import Header from './component/header/Header';
import Section1 from './component/section1/Section1';
import Section3 from './component/section3/Section3';
import Roadmap from './component/timeline/Roadmap';
import 'react-toastify/dist/ReactToastify.css';
import ReactGA from 'react-ga';

function App() {

  const TRACKING_ID = 'G-DVSQY565V0'; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <div className="app-container" style={{overflow: "hidden"}}>
      <Header />
      <Section1 />
      <Slider />
      <Section3 />
      <Community />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
