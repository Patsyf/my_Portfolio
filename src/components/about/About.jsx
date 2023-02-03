import React from 'react'
import './About.css'
import perfectMask from "../../img/perfectMask.jpeg"
import Award from "../../img/award.png"

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={perfectMask}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <p className="a-sub">
          It is a long established fact that every cosmetologist will see beauty products as a way to make others happy with their skin.
        </p>
        <p className="a-desc">
          A single mom growing her business as a brand Ambassador for youniQue company which has numerous beauty product and skin care. I am also a consultant for beauty product specific for different skin types.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">The IBI Awards </h4>
            <p className="a-award-desc">
              International Beauty Industry Award winner.
            </p>
          </div>
      </div>
      </div>
      </div>
  )
}

export default About