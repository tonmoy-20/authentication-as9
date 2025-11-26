import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const findResult = services.find((service) => service.serviceId == id);

  console.log(findResult);
  if (loading) {
    return <p>Loading.....</p>;
  }

  return (
    <div className="flex flex-col items-center mt-5 mb-5 px-[145px]">
      {/* <img className="h-[400px] mt-5" alt="" /> */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={findResult?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">
            {findResult?.serviceName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Provider Name : {findResult?.providerName}</p>
          <p>{findResult?.description}</p>
          <p className="font-semibold">Contact - {findResult?.providerEmail}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{findResult?.category}</div>
            <div className="badge badge-outline">
              Available Slot - {findResult?.slotsAvailable}
            </div>

            <div className="badge badge-outline">$ {findResult?.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
