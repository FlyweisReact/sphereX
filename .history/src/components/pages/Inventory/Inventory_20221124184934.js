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
    price : 50000 
   },
   {
    address : 'Delhi' , 
    size : 450 , 
    price : 50000 
   },
   {
    address : 'Delhi' , 
    size : 450 , 
    price : 50000 
   },
]


const Inventory = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://nikhil-backend.herokuapp.com/api/v1/payment/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchData()
  },[axios , token])

  const navigate = useNavigate();

  const deleteData = async (id) => {
    try {
      const data = await axios.delete(
        `https://admil-panel2.herokuapp.com/inventory/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Deleted Successfully");
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

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

        {data?.data?.map((i , index) => (
          <tr key={index}>
              <td> {i?.user?.Name}  </td>
              <td> {i?.user?.companyName}  </td>
              <td> {i?.user?.phoneNumber}  </td>
              <td> {i?.user?.companyEmail}  </td>
              <td> {i?.cart?.services?.map((i , index) => (
                <p key={index} > {i?.serviceId}   </p>
              ))}  </td>
              <td> ₹{i?.price}  </td>
          </tr>
        ))}
        </tbody>
      </Table>
    </>
  );
};

  export default HOC(Inventory);
