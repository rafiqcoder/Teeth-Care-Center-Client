import React from 'react';
import cavity from '../../../Assets/images/cavity.png'
import fluoride from "../../../Assets/images/fluoride.png";
import whitening from "../../../Assets/images/whitening.png";
import ServiceCard from './ServiceCard';

const ServiceArea = () => {
    const seviceDatas = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description:
                "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: fluoride,
        },
       
      {
        id: 2,
        name: "Cavity Filling",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        icon: cavity,
        
      },
      {
        id: 3,
        name: "Teetch Whitening",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        icon: whitening,
        
      },
    ];
    return (
      <div className="dark:bg-gray-900">
        <section className="mx-auto container py-20 ">
          <div className="flex justify-center items-center flex-col">
            <div className="  leading-10 text-center text-gray-800 dark:text-white">
              <p className="uppercase text-primary font-semibold">
                Our Services
              </p>
              <h1 className=" capitalize lg:text-4xl md:text-2xl text-xl">
                Services we provide
              </h1>
            </div>
            <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-6 lg:px-10 xl:px-0 ">
                        {seviceDatas.map(data =>(
                            <ServiceCard key={data.id} data={data}></ServiceCard>
                        )
                        )
                        }
            </div>
          </div>
        </section>
      </div>
    );
};

export default ServiceArea;