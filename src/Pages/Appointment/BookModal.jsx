import { format } from 'date-fns';
import React,{ useContext } from 'react';
import { UserContext } from '../../Context/Context';

const BookModal = ({ treatment,selected,handleModal }) => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal justify-center text-center">
        <form className="modal-box relative" onSubmit={handleModal}>
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <h3 className="text-lg font-bold mt-5 text-primary sm:text-2xl">
              {treatment.name}
            </h3>
            <input
              type="text"
              placeholder="Type here"
              name="date"
              className="input input-bordered w-full max-w-xs mt-5"
              defaultValue={format(selected, "PP")}
              disabled
            />
            <input
              type="text"
              placeholder="Type here"
              name="slot"
              className="input input-bordered w-full max-w-xs mt-5"
              defaultValue={treatment.slots[0]}
              disabled
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              defaultValue={user.email}
              disabled
              className="input input-bordered w-full max-w-xs mt-2"
              required
            />
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              defaultValue={user.displayName}
              className="input input-bordered w-full max-w-xs mt-2"
              required
            />

            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              className="input input-bordered w-full max-w-xs mt-2"
              required
            />
            <input
              type="number"
              defaultValue={treatment.price}
              name="price" disabled
              className="input input-bordered w-full max-w-xs mt-2"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-5 text-white">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookModal;