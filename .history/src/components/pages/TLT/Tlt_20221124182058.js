/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { Button, Modal, Form } from "react-bootstrap";

const users = [
  {
    name: "React",
    TLT: 23,
  },
  {
    name: "Nodejs",
    TLT: 12,
  },
  {
    name: "Java",
    TLT: 54,
  },
  {
    name: "Python",
    TLT: 2002,
  },
];



const Tlt = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setE] = useState(false);
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All TLT's
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setE(true);
              setModalShow(true);
            }}
          >
            {" "}
            Add TLT
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
            <th>User</th>
            <th>TLT </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i) => (
            <tr>
              <td> {i.name} </td>
              <td> {i.TLT} </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <AiOutlineEdit
                    color="blue"
                    cursor="pointer"
                    onClick={() => {
                      setE(false);
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

export default HOC(Tlt);
