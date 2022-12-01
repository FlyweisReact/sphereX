/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import { useState } from "react";

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
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setE] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            {edit ? "Edit Subscription" : "Add Subscription"}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {edit ? (
              ""
            ) : (
       
             <>
              
             </>
            )}
            <br />
         
            <Button variant="outline-success">Add</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Subscription
          </span>

          {/* <input type='search' onKeyDownCapture={(e) => setSearch(e.target.value)}  className="searchBar" /> */}

          <Button
            variant="success"
            onClick={() => {
              setE(false);
              setModalShow(true);
            }}
          >
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

export default HOC(Service);
