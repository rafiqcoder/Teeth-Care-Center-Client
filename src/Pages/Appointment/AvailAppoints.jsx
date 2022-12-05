import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../../Context/Context';
import ApntOptCard from './ApntOptCard';
import BookModal from './BookModal';

const AvailAppoints = ({ selected,setSelected }) => {
    // const [availAppoints,setavailAppoints] = useState([]);
  const {user} = useContext(UserContext);
  const [treatment,setTreatment] = useState(null);
  const date = format(selected,"PP");
  
  const { data: availAppoints=[] , refetch} = useQuery({
    queryKey: ["appointOptions"],
    queryFn: async () => {
      const response = await fetch(`https://teeth-cares-server.vercel.app/appointments?date=${date}`);
      const data = await response.json();
      return data;
    },
  });

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = date;
    }
    console.log(availAppoints.price);
    const handleModal = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
      const email = form.email.value;
      const slot = form.slot.value;
      const price = form.price.value;
      const appoint = {
        slot,
        patientName: name,
        phone,
        email,
        treatmentName: treatment.name,
        AppointedDate: date,
        price,
      };
      fetch(`https://teeth-cares-server.vercel.app/appointments?date=${date}&&email=${user.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appoint),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Appointment booked successfully");
            refetch();
          }else{
            toast.error("You already have an appointment on this date");
          }
        });
        
        
        setTreatment(null);
        
    };
   
    return (
      <div className="">
        <h2 className="text-center text-primary font-semibold my-10">
          Available Appointment on {footer}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 my-10 justify-center items-center content-center">
          {availAppoints.map((appoint, i) => (
            <ApntOptCard
              appoint={appoint}
              i={i}
              treatment={treatment}
              setTreatment={setTreatment}
                  key={appoint._id}
                  
            />
          ))}
          {treatment && (
            <BookModal
                        htmlFor="my-modal-3"
                        treatment={treatment}
                        selected={selected}
                        handleModal={handleModal}
            />
          )}
        </div>
      </div>
    );
};

export default AvailAppoints;