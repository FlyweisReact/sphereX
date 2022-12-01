import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";


const land = [
   {
    address : 'Delhi' , 
    size : 450 , 
    price : 50000 
   },
   {
    address : 'South' , 
    size : 323 , 
    price : 123213 
   },
   {
    address : 'North' , 
    size : 4587 , 
    price : 4545000 
   },
   {
    address : 'Tamil' , 
    size : 100 , 
    price : 50000000
   },
]


const Inventory = () => {


  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Bookings
          </span>
        </div>
      </section>

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
            <th>Address</th>
            <th>Size</th>
            <th>Price.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

        {land.map((i , index) => (
          <tr key={index}>
              <td> {i.address}  </td>
              <td> {i.size} sqm  </td>
         
              <td> ₹{i?.price}  </td>
              <td>
              <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <AiOutlineEdit
                    color="blue"
                    cursor="pointer"
                    onClick={() => {
                      setE(true);
                      setModalShow(true);
                    }}
                  />
                  <AiFillDelete color="red" cursor="pointer" />
                </div>
              </td>
          </tr>
        ))}
        </tbody>
      </Table>
    </>
  );
};

  export default HOC(Inventory);
