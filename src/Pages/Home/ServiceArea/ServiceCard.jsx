import React from 'react';

const ServiceCard = ({data}) => {
    return (
      <div className="cursor-pointer shadow-lg py-6 xl:px-4 rounded-xl xl:w-96 w-60 flex justify-center items-center flex-col">
        <div className="mb-6">
         <img src={data.icon} alt="" className='w-10/12'/>
        </div>
        <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>{data.name}</h2>
        </div>
        <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
          <p>
            {data.description}
          </p>
        </div>
      </div>
    );
};

export default ServiceCard;