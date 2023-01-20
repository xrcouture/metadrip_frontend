import React,{useState,useEffect} from 'react'
import './utility.css'
import image1 from '../../../assets/utility-bg.png'
import image2 from '../../../assets/section3-1.png'

function Utility() {
    const [img,setImg] = useState(image1)

    useEffect(()=>{
        if(window.innerWidth >= 768){
          setImg(image1)
        }else{
          setImg(image2)
        }
      },[window.innerHeight])


  return (
    <div className='utility'>
        <img src={img} alt="" className="utility-bg" />
        <div className='utility-container'>
        <h1 className='utility-content-header'>Utility</h1>
        <p className='utility-content-subtitle'>Collectors get access to exclusive Metaverse Wearables, Private
            Events, Airdrops, an Engaging Community and more.
        </p>
        </div>
    </div>
  )
}

export default Utility