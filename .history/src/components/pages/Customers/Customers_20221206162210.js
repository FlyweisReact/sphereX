/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";

const users = [
  {
    name : 'Customer' , 
    phone : 1234567890 , 
    email : 'customer@gmail.com' , 
    work : 'Labour' , 
    noofWorker : 5 , 
    noofHour : 10 ,
    time : '1:00pc - 5:00pm'
  }
]


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
      <Container>
        <Table
          striped
          bordered
          hover
          style={{
            marginTop: "5%",
            scrollBehavior: "smooth",
            overflow: "scroll",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th> Email </th>
              <th> Refer Status </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.Users?.map((i , index) => (
              <tr key={index}>
                <td> {i.username} </td>
                <td> {i.email} </td>
                <td> {i.referStatus} </td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <AiFillDelete
                      color="red"
                      cursor="pointer"
                      onClick={() => deleteData(i._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default HOC(Customers);
