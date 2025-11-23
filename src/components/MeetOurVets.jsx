import React from "react";
import Dr1 from "../assets/dr.1.jpg";
import Dr2 from "../assets/de.2.jpg";
import Dr3 from "../assets/dr.3.jpg";

const MeetOurVets = () => {
  const vets = [
    {
      id: 1,
      img: Dr3,
      name: "Dr. Alisa Snow",
      specialty: "Winter Dermatology & Pet Care",
      exp: "8 Years+ Exp.",
    },
    {
      id: 2,
      img: Dr2,
      name: "Dr. Rose Roja",
      specialty: " Warm & Pet Care",
      exp: "7 Years+ Exp.",
    },
    {
      id: 3,
      img: Dr1,
      name: "Dr. Vector",
      specialty: " Vaccination & Pet Care",
      exp: "5 Years+ Exp.",
    },
  ];

  return (
    <div className="mt-10 px-4 md:px-20 py-12 bg-base-100">
      <h3 className="font-bold mb-8 text-3xl text-purple-600 text-center">
        Meet Our Expert Vets
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {vets.map((v) => (
          <div
            key={v.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={v.img}
              className="h-56 w-full object-cover"
              alt={v.name}
            />
            <div className="p-5">
              <h2 className="text-xl font-bold">{v.name}</h2>
              <p className="font-medium text-gray-700 mt-1">{v.specialty}</p>
              <p className="text-gray-400 font-semibold">{v.exp}</p>

              <button className="btn w-full mt-4 bg-purple-600 text-white hover:bg-purple-700">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurVets;
