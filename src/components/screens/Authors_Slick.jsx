import React from 'react';
import Slider from "react-slick";
import miyo from "../assets/images/miyamoto-musashi-portrait.jpg";
import tzu from "../assets/images/sun_tzu.jpg";
import zeno from "../assets/images/zeno.jpg";
import marcus from "../assets/images/marcus.jpg";

export default function Authors_Slick() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="slick-container">
      <Slider {...settings}>
        <div>
          <img src={miyo} alt="Miyamoto Musashi" />
          <h3>Miyamoto Musashi</h3>
        </div>

        <div>
          <img src={zeno} alt="Zeno" />
          <h3>Zeno of Citium</h3>
        </div>

        <div>
          <img src={marcus} alt="Marcus Aurelius" />
          <h3>Marcus Aurelius</h3>
        </div>

        <div>
          <img src={tzu} alt="Sun Tzu" />
          <h3>Sun Tzu</h3>
        </div>

        <div>
          <img src={miyo} alt="Miyamoto Musashi" />
          <h3>Miyamoto Musashi</h3>
        </div>

        <div>
          <img src={miyo} alt="Miyamoto Musashi" />
          <h3>Miyamoto Musashi</h3>
        </div>
      </Slider>
    </div>
  )
}

