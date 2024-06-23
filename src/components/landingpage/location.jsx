import React from "react";
import LhrImg from "../../assets/images/lhr.jpg";
import GrwImg from "../../assets/images/grw.jpeg";
import IsdImg from "../../assets/images/isd2.jpeg";
import KhiImg from "../../assets/images/khi.jpg";

const Location = () => {
  const locations = [
    { name: "Gujranwala", image: GrwImg },
    { name: "Lahore", image: LhrImg },
    { name: "Islamabad", image: IsdImg },
    { name: "Karachi", image: KhiImg },
  ];

  return (
    <div className="px-6 md:px-8 lg:px-14 py-4 bg-green-50">
      <p className="text-center mb-16 text-lg font-medium"> Select by Location </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {locations.map((location) => (
          <div
            key={location.name}
            className="relative overflow-hidden rounded-md shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
          >
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-lg font-bold">{location.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
