import React from 'react';

const InfoCard = ({data}) => {
    return (
      <div className={`flex  space-x-4 rounded-lg md:space-x-1 p-3 ${data.bgClass} dark:text-gray-100 text-white`}>
        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-blue-400">
          <img src={data.icon} alt="" />
        </div>
        <div className="flex flex-col justify-center align-middle">
                <p className="text-2xl font-semibold leading-none">{data.name}</p>
                <p className="capitalize">{data.description}</p>
        </div>
      </div>
    );
};

export default InfoCard;