/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

const users = [
  {
    customerId: "Customer233",
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
    customerId: "Customer213",
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
       Create Partner ID
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group>
          <Form.Label>Customer ID</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}


const Customers = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [search, setNewSearch] = React.useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? users
    : users.filter((person) =>
        person?.customerId?.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Customers
          </span>
        </div>
      </section>

      <div
        style={{
          overflowX: "auto",
        }}
      >
        <input
          type="search"
          style={{
            border: "1px solid black",
            outline: "none",
            width: "30%",
            padding: "10px",
            borderRadius: "10px",
            float: "right",
            marginBottom: "3%",
            color: "black",
          }}
          placeholder="Search by LabourId"
          value={search}
          onChange={handleSearchChange}
        />
        <Table
          striped
          bordered
          hover
          style={{
            marginTop: "2%",
          }}
        >
          <thead>
            <tr>
              <th>Customer Id</th>
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
            {filtered.map((i, index) => (
              <tr key={index}>
                <td>
                  {" "}
                  {i.customerId ? (
                    i.customerId
                  ) : (
                    <Button variant="outline-success">Create </Button>
                  )}{" "}
                </td>
                <td> {i.name} </td>
                <td> {i.phone} </td>
                <td> {i.email} </td>
                <td> {i.Location} </td>
                <td> {i.shop} </td>
                <td> {i.GSTno} </td>
                <td> {i.workDescription} </td>
                <td> {i.noofWorker} </td>
                <td> {i.noofHour} </td>
                <td> {i.time} </td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <AiFillDelete
                      color="red"
                      cursor="pointer"
                      onClick={() =>
                        toast.success("Customer Deleted SuccessFully")
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Customers);
