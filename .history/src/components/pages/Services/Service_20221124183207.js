/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { Button } from "react-bootstrap";
import {  Modal, Form } from "react-bootstrap";

const user = [
  {
    name: " React",
    subs: "New",
    tlt: 45,
  },
  {
    name: " React",
    subs: "New",
    tlt: 45,
  },
  {
    name: " React",
    subs: "New",
    tlt: 45,
  },
  {
    name: " React",
    subs: "New",
    tlt: 45,
  },
  {
    name: " React",
    subs: "New",
    tlt: 45,
  },
];

const Service = () => {
  



  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Subscription
          </span>

          {/* <input type='search' onKeyDownCapture={(e) => setSearch(e.target.value)}  className="searchBar" /> */}

          <Button variant="success" >
            Add Subscription
          </Button>
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
            <th>Subscription</th>
            <th>TLT</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((i) => (
            <tr>
              <td> {i.name}</td>
              <td>{i.subs} </td>
              <td> {i.tlt} </td>
              <td>
                <div
                  style={{ display: "flex", gap : '10px' }}
                >
                  {" "}
                  <AiOutlineEdit
                    color="blue"
                    cursor="pointer"
                  />
              
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
    </>
  );
};

export default HOC(Service);
