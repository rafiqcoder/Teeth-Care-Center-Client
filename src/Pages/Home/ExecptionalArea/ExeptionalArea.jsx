import React from 'react';
import treatment from '../../../Assets/images/treatment.png';
const ExeptionalArea = () => {
    return (
      <div className="hero  bg-base-200">
        <div
          className="hero-content flex-col lg:flex-row w-full my-20" 
        >
          <img 
            alt=""
            src={treatment}
            className="max-w-sm rounded-lg shadow-2xl w-6/12 lg:mr-20 sm:mr-0 "
          />
          <div className="w-6/12">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default ExeptionalArea;