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

function Section3d() {
    const carouselItems = [
        {
          id: 0,
          carouselImage: image,
          indicator: decenterland,
          active: true,
        },
        {
          id: 1,
          carouselImage: image,
          indicator: oncyber,
          active: false,
        },
        {
          id: "3",
          carouselImage: image,
          indicator: rtfkt,
          active: false,
        },
        {
          id: "4",
          carouselImage: image,
          indicator: sandbox,
          active: false,
        },
        {
          id: "5",
          carouselImage: image,
          indicator: spatial,
          active: false,
        },
        {
          id: "6",
          carouselImage: image,
          indicator: unreal,
          active: false,
        },
        {
          id: "7",
          carouselImage: image,
          indicator: robolox,
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
                    <img src={image} alt="" width="100%" height="auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="cross-header-content col-md-5 col-sm-5 col-lg-5 p-4">
            <div className='interoperability-content'>
          <h1 className="section3-title-new-1 text-center section2-title-right" style={{fontFamily:"Clash Display Bold"}}>Interoperability Exists.</h1>
          <div className=" interoperability-content-subtitle">
          <p className="section3-subtitle-new-1 text-center section2-title-right" style={{fontFamily:"Clash Display"}}>
            Collectors get access to exclusive Metaverse Wearables, Private
            Events, Airdrops, an Engaging Community and more.
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