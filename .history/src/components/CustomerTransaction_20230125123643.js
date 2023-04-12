/** @format */

import React from "react";
import Table from "react-bootstrap/Table";
import HOC from "./layout/HOC";

const users = [
  {
    lab: "Labour",
    labId : '1' ,
    cus: "Customer",
    cusid : '2' ,
    amount: 4500,
    date: "12/45/2004",
    pay: "Online",
  },
  {
    lab: "Labour2",
    labId : "2" , 
    cusid : '3',
    cus: "Customer2",
    amount: 8900,
    date: "12/45/2004",
    pay: "Online",
  },
];

const CustomerTransaction = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Customer Transactions
          </span>
        </div>
      </section>

    <div style={{overflowX : 'auto'}}>
    <Table
        striped
        bordered
        hover
        style={{
          marginTop: "1%"
        }}
      >
        <thead>
          <tr>
            <th>Partner</th>
            <th>PartnerId</th>
            <th>Amount </th>
            <th>Date </th>
            <th> Payment Mode </th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td> {i.lab} </td>
              <td> {i.labId} </td>
              <td> {i.amount} </td>
              <td> {i.date} </td>
              <td> {i.pay} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    
    </>
  );
};

export default HOC(CustomerTransaction);
