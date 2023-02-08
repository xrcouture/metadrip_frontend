import React from 'react'

const VideoContainer = (props) => {
  return (
    <video autoPlay={props.data.autoplay} loop muted className={props.data.classnames}>
      <source src={props.data.src}/>
    </video>
  )
}

export default VideoContainer