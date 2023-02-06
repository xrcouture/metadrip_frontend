import React from 'react'
import './section3d.css'
import image from "../../../assets/demo.png";
// COMPRESSED_WEBP
import decenterland from "../../../assets/decentraland.png";
import rtfkt from "../../../assets/unreal-engine.png";
import oncyber from "../../../assets/oncyber.png";
import robolox from "../../../assets/robolox.png";
import sandbox from "../../../assets/sandbox.png";
import unreal from "../../../assets/unreal.png";
import spatial from "../../../assets/spatial.png";
import zepeto from "../../../assets/zepeto.png";
// import decenterlandlg from '../../../assets/cross/Decentraland.png'
import decenterlandlg from '../../../assets/cross/Decentraland.webp'
// import rtfktlg from '../../../assets/cross/MetaHUman.png'
import rtfktlg from '../../../assets/cross/MetaHUman.webp'
// import oncyberlg from '../../../assets/cross/Oncybr.png'
import oncyberlg from '../../../assets/cross/Oncybr.webp'
// import roboloxlg from '../../../assets/cross/Roblox.png'
import roboloxlg from '../../../assets/cross/Roblox.webp'
// import sandboxlg from '../../../assets/cross/Sandbox.png'
import sandboxlg from '../../../assets/cross/Sandbox.webp'
// import zepetolg from '../../../assets/cross/Zepeto.png'
import zepetolg from '../../../assets/cross/Zepeto.webp'
// import clonexlg from '../../../assets/cross/CloneX.png'
import clonexlg from '../../../assets/cross/CloneX.webp'
// import spatiallg from '../../../assets/cross/Spatial.png'
import spatiallg from '../../../assets/cross/Spatial.webp'


function Section3d() {
    const carouselItems = [
        {
          id: "0",
          carouselImage: decenterlandlg,
          indicator: decenterland,
          active: true,
        },
        {
          id: "1",
          carouselImage: oncyberlg,
          indicator: oncyber,
          active: false,
        },
        {
          id: "3",
          carouselImage: rtfktlg,
          indicator: rtfkt,
          active: false,
        },
        {
          id: "4",
          carouselImage: sandboxlg,
          indicator: sandbox,
          active: false,
        },
        {
          id: "5",
          carouselImage: spatiallg,
          indicator: spatial,
          active: false,
        },
        {
          id: "6",
          carouselImage: clonexlg,
          indicator: unreal,
          active: false,
        },
        {
          id: "7",
          carouselImage: roboloxlg,
          indicator: robolox,
          active: false,
        },
        {
          id: "8",
          carouselImage: zepetolg,
          indicator: zepeto,
          active: false,
        },
      ];

  return (
    <div className='w-100 section3-2'>
    <div className='row'>
        <div className="col-md-6 col-lg-6 cross-left-container">
          <div className="cross-header-image-container">
            <div
              id="carousel-example-generic"
              class="carousel slide carousel-fade"
              data-ride="carousel"
              data-interval="2000"
            >
              <ol class="carousel-indicators carousel-indicators--thumbnails">
                {carouselItems.map((i, index) => (
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to={index}
                    className={`${i.active === true ? "active" : ""}`}
                  >
                    <div class="thumbnail">
                      <img src={i.indicator} alt="" class="img-responsive" />
                    </div>
                  </li>
                ))}
              </ol>

              <div class="carousel-inner" role="listbox">
                {carouselItems.map((i) => (
                  <div class={`item ${i.active === true ? "active" : ""}`}>
                    <img src={i.carouselImage} alt="" width="100%" height="auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="cross-header-content col-md-5 col-lg-5 p-4">
            <div className='interoperability-content'>
          <h1 className="section3-title-new-1 text-center section2-title-right utility-title p-0" style={{fontFamily:"Clash Display Bold"}}>Cross-Platform Usage</h1>
          <div className=" interoperability-content-subtitle">
          <p className="text-center section2-title-right utility-subtitle cross-platform-subtitle text-center mobile-subtitle" style={{fontFamily:"Clash Display Light"}}>
          Our aim is to partner with as many Metaverse, Gaming, Avatar, AR/VR platforms as possible to offer cross-platform usage.
          </p>
          </div>
            </div>
        </div>
        {/* <div  className='col-md-1'></div> */}
    </div>     
    </div>
   
  )
}

export default Section3d