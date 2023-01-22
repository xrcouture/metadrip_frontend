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
      },[])


  return (
    <div className='utility'>
        <img src={img} alt="" className="utility-bg" />
        <div className='utility-container'>
        <h1 className='section2-title text-right section2-title-left' style={{fontFamily:"Clash Display Bold"}}>Utility</h1>
        <p className='section2-subtitle text-right section2-subtitle-left' style={{fontFamily:"Clash Display"}}>Collectors get access to exclusive Metaverse wearables, private events, airdrops, an engaging community and more.
        </p>
        </div>
    </div>
  )
}

export default Utility