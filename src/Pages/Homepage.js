import React from 'react'
import Slider from '../component/Swiper/Slider'
import '../App.css'
import 'swiper/swiper.min.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";  
import Footer from '../component/Footer/Footer';
import Community from '../component/community/Community';
import Header from '../component/header/Header';
import Section1 from '../component/section1/Section1';
import Section3 from '../component/section3/Section3';
import Roadmap from '../component/timeline/Roadmap';

// import ProductHeader from '../component/productHeader/ProductHeader';

function HomePage() {
  return (
    <div className="app-container" style={{overflow: "hidden"}}>
      <Header />
      {/* <ProductHeader /> */}
      <Section1 />
      <Slider />
      <Section3 />
      <Community />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default HomePage;
