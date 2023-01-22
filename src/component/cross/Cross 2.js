import React, { useEffect, useState } from "react";
import cross1 from "../../assets/cross-1.png";
import "./cross.css";
import image from "../../assets/image-1.png";
import decenterland from "../../assets/decentraland.png";
import rtfkt from "../../assets/unreal-engine.png";
import oncyber from "../../assets/oncyber.png";
import robolox from "../../assets/robolox.png";
import sandbox from "../../assets/sandbox.png";
import unreal from "../../assets/unreal.png";
import spatial from "../../assets/spatial.png";
import dbackground from "../../assets/3dbackground.png";
import threed from "../../assets/3d.png";
import icon3d from '../../assets/3d-icon.png'
import section3_1 from '../../assets/section3-1.png'

function Cross() {
  const [img,setImg] = useState(section3_1)
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
  useEffect(()=>{
    if(window.innerWidth >= 768){
      setImg(cross1)
    }else{
      setImg(section3_1)
    }
  },[window.innerHeight])
  console.log(window.innerWidth)
  return (
    <div className="cross-container">
      <img src={img} alt="" className="cross-img" />
      <div className="cross-header row">
        <div className="cross-header-content col-md-6 col-sm-6 col-lg-6">
          <h1 className="cross-header-content-1">Cross Platform </h1>
          <div className="cross-header-content-2-containe w-80">
          <p className="cross-header-content-2">
            Collectors get access to exclusive Metaverse Wearables, Private
            Events, Airdrops, an Engaging Community and more.
          </p>
          </div>
        </div>
        <div className="col-md-6  col-lg-6 cross-left-container">
          <div className="cross-header-image-container w-100">
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
                    <img src={image} alt="" width="800" height="400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-3d">
        <div className="row position-relative">
          <div className="col-md-6  col-lg-6 position-relative">
            <div>

            <img src={dbackground} alt="" className="background-for-3d" />
            {/* <div className="circle-icon-3d">
              <img src={icon3d} className="icon-3d" />
            </div> */}
            </div>
            <img src={threed} alt="" className="image-3d" />
          </div>
          <div className="col-md-6  col-lg-6 content-container-3d d-flex flex-column">
            <h1 className="content-container-header-3d">Social Integrations.</h1>
            <p className="content-container-subtitle-3d">
              Create reels with <b>Snapchat AR,</b>
                <br />wear it on your photos and even<br /> on
              video calls. Get custom<br /> <b>‘virtual-fitting’</b> on a photograph to<br/>
              flaunt on your social media <br />platforms.
            </p>
          </div>
        </div>
        <div className="row position-relative carousel-container-video">
                <div className="col-md-6  col-lg-6">
                    {/* <h1>Empty</h1> */}
                </div>
                <div className="col-md-6  col-lg-6  position-relative video-container">
                    <div className="car" >

                    </div>
                    
                </div>
        </div>
      </div>
      
    </div>
  );
}

export default Cross;
