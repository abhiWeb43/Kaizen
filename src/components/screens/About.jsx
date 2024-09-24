import React from 'react'
import Nav from './Nav';
import MusashiBg from '../assets/images/musashi-bg.png';


const About = () => {
  return (
    <section>
      <Nav />
      <section id="main">
        <div className="the-goals">
          <div className="goals-text">
            <h1 className="main-goals">Our <span>Goals</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure ex ducimus, culpa voluptatum, quos omnis, eaque modi sit quasi necessitatibus quisquam. Ipsa, sint. Nesciunt aliquid iusto praesentium debitis, ipsum nam?</p>
          </div>
          <div className="goals-img">
            <img src={MusashiBg} alt="samurai with sword" />
          </div>
        </div>
      </section>
    </section>
  )
}

export default About
