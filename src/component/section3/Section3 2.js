import React from 'react'
import Utility from './utility/Utility'
import Section3d from './3d-container/Section3d'
import Social from './socail/Social'

function Section3() {
  return (
    <div className='section3-overall'>
        <Utility />
        <Section3d />
        <Social />
    </div>
  )
}

export default Section3