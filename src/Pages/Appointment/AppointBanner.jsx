import { format } from 'date-fns';
import React from 'react';

import { DayPicker } from "react-day-picker";
import bannerImg from "../../Assets/images/chair.png";
const AppointBanner = ({ selected, setSelected }) => {
  

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div
        className={`hero-content flex-col lg:flex-row-reverse  justify-around w-full`}
      >
        <img
          alt=""
          src={bannerImg}
          className=" rounded-lg shadow-2xl sm:w-6/12"
        />
        <div className="">
          <DayPicker
            className=" my-8 bg-white rounded-lg p-4"
            mode="single"
            selected={selected}
            onSelect={(data) => {
              if (data) {
                setSelected(data);
              }
            }}
            footer={footer}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointBanner;