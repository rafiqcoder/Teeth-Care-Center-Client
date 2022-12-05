import React from 'react';
import clock from "../../../Assets/icons/clock.svg";
import marker from "../../../Assets/icons/marker.svg";
import phone from "../../../Assets/icons/phone.svg";
import InfoCard from './InfoCard';
const InfoCards = () => {
    const cardData = [
      {
        id: 1,
        name: "Opening Hours",
        description: "open 9 am to 5 pm every day",
        icon: clock,
        bgClass: "bg-gradient-to-r from-primary to-secondary",
      },
      {
        id: 2,
        name: "Visit Our Location",
        description: "Brooklyn, NY 10036, United States",
        icon: marker,
        bgClass: "bg-accent",
      },
      {
        id: 3,
        name: "Contact Us",
        description: "+000 123 456789",
        icon: phone,
        bgClass: "bg-gradient-to-r from-primary to-secondary",
      },
    ];
    return (
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3 px-2 my-10">
        {cardData.map((data) => (
          <InfoCard data={data} key={data.id}></InfoCard>
        ))}
      </div>
    );
};

export default InfoCards;