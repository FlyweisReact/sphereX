/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const users = [
  {
   lab : 'Labour' , 
   cus : 'Customer' , 
   amount : 4500 , 
   date : '12/45/2004' ,
   
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

      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "2%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>Labour</th>
            <th> Customer </th>
            <th>Amount </th>
            <th>Date </th>
            <th>  Payment Mode   </th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td> {i.name} </td>
              <td> {i.phone} </td>
              <td> {i.email} </td>
              <td> {i.Location} </td>
              <td> {i.shop} </td>
              <td> {i.GSTno} </td>
              <td> {i.workDescription} </td>
              <td> {i.noofWorker} </td>
              <td> {i.noofHour} </td>
              <td> {i.time} </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() =>
                      toast.success("Customer Deleted SuccessFully")
                    }
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Payment);
