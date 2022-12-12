import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const users = [
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


const Labour = () => {
  return (
    <div>Labour</div>
  )
}

export default HOC(Labour)