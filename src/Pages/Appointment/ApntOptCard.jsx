import React from 'react';

const ApntOptCard = ({ appoint, i, treatment, setTreatment }) => {
  const { name, slots,price } = appoint;
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center">
      <div className="card-body justify-center items-center">
        <h2 className="card-title text-center text-primary sm:text-2xl">
          {name}
        </h2>
        <p>{slots?.length > 0 ? slots[0] : "No Slots"}</p>
        <p>
          {slots?.length > 0
            ? `${slots.length} spaces available`
            : "Please Try another day"}
        </p>
        <p className="text-lg font-semibold"> ${price}</p>
        <div className="card-actions justify-center">
          <label
            className="btn btn-primary text-white"
            htmlFor="my-modal-3"
            onClick={() => setTreatment(appoint)}
            disabled={slots?.length === 0}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default ApntOptCard;