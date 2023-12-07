import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
//import hero_image from "../Assets/hero_image.png";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Little</p>
                    </div>
                    <p>Changes</p>
                    <p>by L</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Products</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            {/* <div className='hero-right'></div> */}
        </div>
    );
};

export default Hero;
