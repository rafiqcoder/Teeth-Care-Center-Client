import React from 'react';
import doctor from "../../../Assets/images/doctor-small.png";

const AppoinmentCalltoAction = () => {
    return (
      <div className="bg-base-200  bg_image w-full mt-20">
        <div className="flex-col card lg:flex-row bg-[#33304b21] relative justify-end pr-10">
          <img
            alt=""
            src={doctor}
            className=" rounded-lg lg:mr-20 sm:mr-0 w-5/12 absolute bottom-0 left-20 hidden sm:block"
          />
          <div className="sm:w-6/12 content-end py-20 pr-20">
            <h1 className="text-lg text-primary py-3">Appointment</h1>
            <h1 className="text-3xl text-white">Make an Appointment Today</h1>
            <p className="py-10 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary text-white">Get Started</button>

          </div>
        </div>
      </div>
    );
};

export default AppoinmentCalltoAction;