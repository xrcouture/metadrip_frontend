import React from 'react'
import './section3d.css'
import image from "../../../assets/demo.png";
import decenterland from "../../../assets/decentraland.png";
import rtfkt from "../../../assets/unreal-engine.png";
import oncyber from "../../../assets/oncyber.png";
import robolox from "../../../assets/robolox.png";
import sandbox from "../../../assets/sandbox.png";
import unreal from "../../../assets/unreal.png";
import spatial from "../../../assets/spatial.png";
import zepeto from "../../../assets/zepeto.png";
import decenterlandlg from '../../../assets/cross/Decentraland.png'
import rtfktlg from '../../../assets/cross/MetaHUman.png'
import oncyberlg from '../../../assets/cross/Oncybr.png'
import roboloxlg from '../../../assets/cross/Roblox.png'
import sandboxlg from '../../../assets/cross/Sandbox.png'
import zepetolg from '../../../assets/cross/Zepeto.png'
import clonexlg from '../../../assets/cross/CloneX.png'
import spatiallg from '../../../assets/cross/Spatial.png'


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
          <div className="cross-header-image-container w-80">
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
        <div className="cross-header-content col-md-5 col-sm-5 col-lg-5 p-4">
            <div className='interoperability-content'>
          <h1 className="section3-title-new-1 text-center section2-title-right" style={{fontFamily:"Clash Display Bold"}}>Cross-Platform usage</h1>
          <div className=" interoperability-content-subtitle">
          <p className="section3-subtitle-new-1 text-center section2-title-right" style={{fontFamily:"Clash Display Light", marginTop: "2vw", padding: "0rem  0rem 0rem 2.5vw"}}>
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