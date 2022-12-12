/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";\

const users = [
  {
    lab: "Labour",
    cus: "Customer",
    amount: 4500,
    date: "12/45/2004",
    pay: "Online",
  },
  {
    lab: "Labour2",
    cus: "Customer2",
    amount: 8900,
    date: "12/45/2004",
    pay: "Online",
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
            <th> Payment Mode </th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td> {i.lab} </td>
              <td> {i.cus} </td>
              <td> {i.amount} </td>
              <td> {i.date} </td>
              <td> {i.pay} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Payment);
