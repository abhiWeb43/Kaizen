import React from 'react';
import Nav from './UserNav';
import MusashiBg from '../assets/images/musashi-bg.png';
import Footer from './Footer';

const AboutUser = () => {
  return (
    <>
      <section>
        <Nav />
        <section id="main">
          <div className="the-goals">
            <div className="goals-text">
              <h1 className="main-goals">Our <span>Goals</span></h1>
              <p>
                Embark on a journey of self-discovery and growth. Like a sword shaped by fire, we are refined by daily actions and dedication. At Kaizen, find the insights and principles to guide you toward becoming your best self, one step at a time.
              </p>
            </div>
            <div className="goals-img">
              <img src={MusashiBg} alt="samurai with sword" />
            </div>
          </div>

          <div className="the-goals">
            <div className="goals-img">
              <img src={MusashiBg} alt="samurai with sword" />
            </div>
            <div className="goals-text">
              <h1 className="main-goals">Our <span>Vision</span></h1>
              <p>
                At Kaizen, we envision a world where personal growth and continuous improvement are at the forefront of our daily lives. We believe that every individual has the potential to achieve greatness through small, consistent actions. Our platform aims to inspire and empower you to pursue your passions and unlock your true potential.
              </p>
            </div>

          </div>

          <div className="the-goals">
            <div className="goals-text">
              <h1 className="main-goals">Our <span>Values</span></h1>
              <p>
                We are committed to the values of integrity, respect, and resilience. At Kaizen, we foster a community where individuals support one another in their quests for self-improvement. We believe in sharing knowledge, learning from our experiences, and growing together.
              </p>
            </div>
            <div className="goals-img">
              <img src={MusashiBg} alt="samurai with sword" />
            </div>
          </div>

          <div className="the-goals">
            <div className="goals-img">
              <img src={MusashiBg} alt="samurai with sword" />
            </div>
            <div className="goals-text">
              <h1 className="main-goals"><span>Join</span> Us</h1>
              <p>
                We invite you to explore our resources, engage with our community, and embrace the philosophy of Kaizen. Together, let's take the steps necessary to create a better version of ourselves, every single day. Your journey starts here!
              </p>
            </div>

          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default AboutUser
