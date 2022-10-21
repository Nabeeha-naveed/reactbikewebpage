import React from 'react'
import CompareBikes from '../Components/compare-bikes/CompareBikes.jsx'
import bike1 from "../assets/bike1.png"
import bike2 from "../assets/bike2.png"
import bike3 from "../assets/bike3.png"
import "../App.css"

export default function CompareBikesMain() {
  return (
    <div className='mainBikes'>
      <CompareBikes
        img= {bike1}
        heading= "Sporty 4"
        text= "The iconic frame brought to a new performance height as a sporty, active ride."
        price= "$ 2590"  
      />
      <CompareBikes
        img= {bike2}
        heading= "Ride in town ST"
        text= "An open frame for an upright riding position as the most comfortable ride in town."
        price= "$ 2590" 
      />
      <CompareBikes
        img= {bike3}
        heading= "Agile ride 3"
        text= "The lightweight frame that has earned its street tread as a sleek, agile ride."
        price= "$ 2090" 
      />
    </div>
  )
}
