/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const users = [
  {
    name: "Labour1",
    L
    phone: 1234567890,
    workDescription: "Labour",
    Location: "Delhi",
    status : 'Online'
  },
  {
    name: "Labour2",
    phone: 1234567890,
    workDescription: "Labour",
    Location: "Delhi",
    status : 'Offline'
  },
];

const Labour = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Labours
          </span>
        </div>
      </section>
      =
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
            <th>Name</th>
            <th> Phone Number </th>
            <th> Address </th>
            <th> Type of Work </th>
            <th> Status </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td> {i.name} </td>
              <td> {i.phone} </td>
              <td> {i.Location} </td>
              <td> {i.workDescription} </td>
              <td> {i.status} </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() =>
                      toast.success("Labour Deleted SuccessFully")
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

export default HOC(Labour);
