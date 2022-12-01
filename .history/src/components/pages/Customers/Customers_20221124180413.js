/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const users = [
  {
    name: "React",
    phone: 1234568790,
    email: "react@gmail.com",
    Role: "user",
  },
  {
    name: "Nodejs",
    phone: 1234568790,
    email: "Node@gmail.com",
    Role: "user",
  },
  {
    name: "Java",
    phone: 1234568790,
    email: "Java@gmail.com",
    Role: "user",
  },
  {
    name: "Python",
    phone: 1234568790,
    email: "python@gmail.com",
    Role: "user",
  },
];

const Customers = () => {
  const navigate = useNavigate();


  const deleteService = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.delete(
        `https://nikhil-backend.herokuapp.com/api/v1/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchData();
      toast.success("User Deleted SuccessFully");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Users (Total : {data?.results})
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
            <th>Name</th>
            <th>Phone </th>
            <th> Email </th>
            <th> Role </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i) => (
            <tr>
              <td> {i.name} </td>
              <td> {i.phone} </td>
              <td> {i.email} </td>
              <td> {i.Role} </td>
              <td>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  {" "}
                  <AiOutlineEdit
                    color="black"
                    cursor="pointer"
                    onClick={() => navigate(`/editCustomer/${i._id}`)}
                  />
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() => deleteService(i._id)}
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

export default HOC(Customers);
