import React from 'react';
import bannerImg from "../../../Assets/images/chair.png";

const Banner = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div
          className={`hero-content flex-col lg:flex-row-reverse  justify-between w-full`}
        >
          <img
            alt=""
            src={bannerImg}
            className=" rounded-lg shadow-2xl sm:w-6/12"
          />
          <div className="sm:w-6/12 my-8">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn  bg-gradient-to-r from-primary to-secondary border-0 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;