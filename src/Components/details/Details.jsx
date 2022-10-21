import React from 'react'
import "../details/details.css"
import img1 from "../../assets/bikeFeature1.png"
import img2 from "../../assets/bikeFeature2.png"
import img3 from "../../assets/bikeFeature3.png"
import img4 from "../../assets/bikeFeature4.png"
import img5 from "../../assets/bikeFeature5.png"
import img6 from "../../assets/bikeFeature6.png"

export default function Details() {
  return (
    <div className="section3">
        <h2 className="section-title section-titleDetails">The Details</h2>

        <div className="section3--container">
          <div className="section3--container--imgcontainer">
            <img src={img1} alt="bikeFeature 1" className="bigImg"/>
            <img src={img2} alt="bikeFeature 2" className="small-Img"/>
          </div>
          <div className="section3--container--infoContainer">
            <h4 className="section3--container--infocontainer-title">
              Auto Unlock
            </h4>
            <p className="section3--container--infocontainer-text">
              The app senses when you're nearby to unlock automatically. GPS
              tracking so you know where your bike is and can track it anytime.
            </p>
          </div>
          <div className="section3--container--imgcontainer">
            <img src={img3} alt="bikeFeature 3" className="bigImg"/>
            <img src={img4} alt="bikeFeature 4" className="small-Img"/>
          </div>
          <div className="section3--container--infoContainer">
            <h4 className="section3--container--infocontainer-title">
              Range & Integrated lights
            </h4>
            <p className="section3--container--infocontainer-text">
              The removable battery has up to 70km battery autonomy and weighs
              only 2.4 kg. Lights integrated into the frame give you always-on
              visibility day and night.
            </p>
          </div>
          <div className="section3--container--imgcontainer">
            <img src={img5} alt="bikeFeature 5" className="small-Img"/>
            <img src={img6} alt="bikeFeature 6" className="bigImg"/>
          </div>
          <div className="section3--container--infoContainer">
            <h4 className="section3--container--infocontainer-title">
              Hydraulic disc brakes & Lightweight
            </h4>
            <p className="section3--container--infocontainer-text">
              Brakes with total stopping power the second you make contact. The
              removable battery has up to 70km battery autonomy and weighs only
              2.4 kg. Lights integrated into the frame give you always-on
              visibility day and night.
            </p>
          </div>
        </div>
        <div className="section3-btnContainer">
          <button className="btn">Explore</button>
        </div>
    </div>
  )
}
