import React from "react";
import Luxury from "../Images/icon-luxury.svg";
import Sedans from "../Images/icon-sedans.svg";
import Suvs from "../Images/icon-suvs.svg";

const Card = () => {
  return (
    <div className="container flex flex-row justify-center items-center gap-0">
      <div className="box1">
        <img className="icon" src={Sedans} alt="luxury"></img>
        <h1 className="heading">SEDANS</h1>
        <p className="description">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="learn-btn1">Learn More</button>
      </div>
      <div className="box2">
        <img className="icon" src={Suvs} alt="luxury"></img>
        <h1 className="heading">SUVS</h1>
        <p className="description">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button className="learn-btn2">Learn More</button>
      </div>
      <div className="box3">
        <img className="icon" src={Luxury} alt="luxury"></img>

        <h1 className="heading">LUXURY</h1>
        <p className="description">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="learn-btn3">Learn More</button>
      </div>
    </div>
  );
};

export default Card;
