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
    noofWorker : 5 , 
    noofHour : 10 ,
    time : '1:00pm - 5:00pm',
    workDescription : 'This is the work description' , 
    Location : 'Delhi' , 
    shop : 'Shop' , 
    GSTno : '1245SGDST'
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
              <th> Phone Number </th>
              <th>Email </th>
              <th>Location </th>
              <th>Shop Name </th>
              <th>GST No. </th>
              <th>Work Description </th>
              <th> Number of Worker Required </th>
              <th> Number of Hour Needed </th>
              <th> Time Schedule </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((i , index) => (
              <tr key={index}>
                <td> {i.name} </td>
                <td> {i.phone} </td>
                <td> {i.email} </td>
                <td> {i.Location} </td>
                <td> {i.shop} </td>
                <td> {i.GSTno} </td>
                <td> {i.referStatus} </td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <AiFillDelete
                      color="red"
                      cursor="pointer"
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
