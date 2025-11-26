import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-5 mb-5 md:px-40 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div className="card bg-base-100 w-full  shadow-sm">
            <figure>
              <img
                className="w-full h-[300px] object-cover"
                src={service?.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service?.serviceName}</h2>
              <div className="flex justify-between items-center gap-10">
                <p>Price: ${service?.price}</p>
                <p>Rating: {service?.rating}</p>
              </div>
              <div className="card-actions justify-end">
                <Link to={`/details/${service?.serviceId}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
