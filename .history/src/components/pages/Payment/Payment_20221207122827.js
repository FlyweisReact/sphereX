/** @format */

import React from "react";
import HOC from "../../layout/HOC";


const users = [
    {
      name: "Customer",
      phone: 1234567890,
      email: "customer@gmail.com",
      noofWorker: 5,
      noofHour: 10,
      time: "1:00pm - 5:00pm",
      workDescription: "This is the work description",
      Location: "Delhi",
      shop: "Shop",
      GSTno: "1245SGDST",
    },
    {
      name: "Customer",
      phone: 1234567890,
      email: "customer@gmail.com",
      noofWorker: 5,
      noofHour: 10,
      time: "1:00pm - 5:00pm",
      workDescription: "This is the work description",
      Location: "Delhi",
      shop: "Shop",
      GSTno: "1245SGDST",
    },
  ];
  

const Payment = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Transactions
          </span>
        </div>
      </section>
    </>
  );
};

export default HOC(Payment);
