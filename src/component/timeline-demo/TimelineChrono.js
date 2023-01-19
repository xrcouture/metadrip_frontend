import React from 'react'
import { Chrono } from "react-chrono";
import data from './data'
import './timeline.css'

function TimelineChrono() {
  return (
    <div className='container'>
        <div style={{ width: "100%", height: "100%" }}>
                <Chrono items={data} mode="HORIZONTAL"  showAllCardsHorizontal
                />
            </div>
    </div>
        )
}

export default TimelineChrono