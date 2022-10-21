import React from 'react'
import "../compare-bikes/CompareBikes.css"

export default function CompareBikes(props) {
  return (
    <div className="section2">
      <div className="section2--cardsContainer">
        <div className="section2--card">
          <img src={props.img} alt="bikeModel1" />
          <p className="section2--card-name">{props.heading}</p>
          <p className="section2--card-text">{props.text} </p>
          <p className="section2--card-price">{props.price}</p>
        </div>
      </div>
    </div>
  )
}

