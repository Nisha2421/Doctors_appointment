import React from "react";
import { useAppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useAppContext();
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b border-gray-200">My appointments</p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div  className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-gray-200" key={index}>
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs">{item?.address?.line1}</p>
              <p className="text-sm">{item?.address?.line2}</p>
              <p className="text-xs mt-1"><span className="text-sm text-neutral-700 font-medium">Date & Time:</span> 25, July, 2024 | 8:30 PM</p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border border-gray-200 rounded hover:bg-[#5f6FFF] hover:text-white transition-all duration-300">Pay Online</button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border border-gray-200 rounded hover:bg-red-600 hover:text-white transition-all duration-300">Cancle appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
