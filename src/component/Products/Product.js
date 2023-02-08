import React from 'react'
import './Products.css'
import { items } from "../../data's/utility"
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import HoverVideoPlayer from 'react-hover-video-player';
import image1 from '../../assets/image-1.png'
import ProductHeader from '../productHeader/ProductHeader'
import bg from "../../assets/bg.png"

function Product() {
    var itemsAll = ["Chrome_Heart","Flora_Flamboyance","Puffy_Crossroads","Oyster_Spell","Vibrance_Splash","Rufflanza","Star_Cloak","Celestial_Dream","Pop_Kiss","Dazzling_Devil","Comic_Boom","Human_Masquerade"]
  return (
    <>
    <ProductHeader />
    <div className='products-container pb-4 d-flex flex-column align-items-center'>
        <img src={bg} className="bg-product-img" alt="gradient-bg"/>
        <h2 className='text-center mb-4' style={{fontFamily: "Clash Display Medium", color: "#fff"}}>EXPLORE METADRIP</h2>
        <div className='row mt-4'>
            {itemsAll.map(item=>(
                <div className='col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center mb-4' key={item}>
                    <div className='product-item d-flex align-items-center flex-column'>
                        <Link to={`/${item}`}>
                        <HoverVideoPlayer
                                videoSrc={items[item].video}
                                style={{width:"100%"}}
                                pausedOverlay={
                                <video src={items[item].video} className="" style={{width:"100%"}} alt={item} loop muted/>             
                                }
                                loadingOverlay={
                                    <div className="loading-overlay">
                                    <div className="loading-spinner" />
                                    </div>
                                }
                                />
                        <h3 className='text-center mt-4 mb-2' style={{fontFamily:"Clash Display Medium" ,color:"#fff"}}>{items[item].name}</h3>
                        <p className='text-white text-center' style={{fontFamily:"Clash Display Medium"}}>Designed by- <span style={{color:"#D19CFB",fontFamily:"Clash Display Medium"}}>{items[item].designed_by}</span></p>
                       </Link>
                        </div>
                        </div>
            ))}
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Product