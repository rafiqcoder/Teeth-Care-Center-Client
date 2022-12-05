import React,{ useState } from 'react';
import AppointBanner from '../AppointBanner';
import AvailAppoints from '../AvailAppoints';
const Appointment = () => {
  const [selected,setSelected] = useState(new Date());
  
    return (
      <div>
        <AppointBanner
          selected={selected}
          setSelected={setSelected}
        ></AppointBanner>

        <div>
          <AvailAppoints
            selected={selected}
            setSelected={setSelected}
          ></AvailAppoints>
          {/* The button to open modal */}
          

         
        </div>
      </div>
    );
};

export default Appointment;