/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import axios from "axios";

const Dashboard = () => {
  const [customerCount, setCustomerCount] = useState("");
  const [ labourCount , setLabourCount ] = useState("")
  const [ ]

  const getAllCustomer = async () => {
    try{
      const { data } = await axios.get(`https://3o4qnc8du3.execute-api.ap-south-1.amazonaws.com/dev/admingetallcustomer`)
      setCustomerCount(data.customer.length)
    }catch(e) {
      console.log(e)
    }
  };

  const getAllLabours = async () => {
    try {
      const { data } = await axios.get(`https://3o4qnc8du3.execute-api.ap-south-1.amazonaws.com/dev/admingetalllabour`)
      setLabourCount(data.customer.length)
    }catch(e) { 
      console.log(e)
    }
  }

  const getAllTasks = async () => {
    try {
      const { data } = await axios.get(`https://3o4qnc8du3.execute-api.ap-south-1.amazonaws.com/dev/admingetallwork`)
      console.log(data.customer.length)
    }catch(e) { 
      console.log(e)
    }
  }

  useEffect(() => {
    getAllCustomer()
    getAllLabours()
    getAllTasks()
  },[])

  const card = [
    {
      progress: "bg-blue-400",
      title: "All Customers",
      number: customerCount,
      icon: <FaUserFriends className="text-2xl text-[rgb(241,147,48)]" />,
    },
    {
      progress: "bg-green-400",
      title: "All Patners",
      number: labourCount,
      icon: <FaUserFriends className="text-2xl text-[rgb(241,147,48)]" />,
    },
    {
      progress: "bg-yellow-400",
      title: "All Task",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(241,147,48)]" />
      ),
    },
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card) => {
          return (
            <div className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md">
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span className="tracking-widest text-gray-900">
                    {card.title}
                  </span>
                  <span className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold">
                    {card.number}
                  </span>
                </div>
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Dashboard);
