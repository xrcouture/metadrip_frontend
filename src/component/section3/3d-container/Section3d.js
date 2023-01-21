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
    <div className='w-80 section3-2'>
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
        <div className="cross-header-content col-md-6 col-sm-6 col-lg-6 p-4">
            <div className='interoperability-content'>
          <h1 className="utility-content-header text-center section2-title-right">Interoperability Exists.</h1>
          <div className="cross-header-content-2-containe w-100">
          <p className="section2-subtitle text-center section2-title-right">
            Collectors get access to exclusive Metaverse Wearables, Private
            Events, Airdrops, an Engaging Community and more.
          </p>
          </div>
            </div>
        </div>
    </div>     
    </div>
   
  )
}

export default Section3d