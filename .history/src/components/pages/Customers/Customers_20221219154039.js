/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const users = [
  {
    customerId: "Customer233",
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
    customerId: "Customer213",
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

const Customers = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Customers
          </span>
        </div>
      </section>
      
      <div>

      </div>
    
    </>
  );
};

export default HOC(Customers);
