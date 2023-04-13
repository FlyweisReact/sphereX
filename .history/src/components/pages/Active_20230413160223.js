/** @format */

import React, { useEffect } from "react";
import HOC from "../layout/HOC";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Button , Modal , Form } from "react-bootstrap";
import axios from "axios";

const Active = () => {
  const [search, setNewSearch] = useState("");
  const [data, setData] = useState([]);
  const[ modalShow , setModalShow] = useState(false)

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://n6chil41tk.execute-api.ap-south-1.amazonaws.com/dev/active"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? data?.result
    : data?.filter((person) =>
        person?.LabourId?.toLowerCase().includes(search.toLowerCase())
      );


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
               Assign Task
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <Form>
              <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
              </Form.Group>
             </Form>
            </Modal.Body>
          </Modal>
        );
      }
      


  return (
    <>
    <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(true)} />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold">
            All Active Partner's
          </span>
        </div>
      </section>

      <div>
        <input
          type="search"
          style={{
            border: "1px solid black",
            outline: "none",
            width: "300px",
            padding: "5px",
            borderRadius: "0px",
            color: "black",
            marginBottom: "20px",
          }}
          placeholder="Search by PartnerId"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div
        style={{
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th> Partner Id </th>
              <th> mobile Number </th>
              <th> Type of Work </th>
              <th> Longitude </th>
              <th> Latitude </th>
              <th> Assign Task </th>
            </tr>
          </thead>
          <tbody>
            {filtered?.map((i, index) => (
              <tr key={index}>
                <td> {i?.userId?.fullname} </td>
                <td> {i?.userId?.addresstype} </td>
                <td> {i?.userId?.patnerId} </td>
                <td> {i?.userId?.mobilenumber} </td>
                <td> {i?.userId?.typesofwork} </td>
                <td> {i?.userId?.location?.longitude} </td>
                <td> {i?.userId?.location?.latitude} </td>
                <td>
                  <Button variant="outline-success" onClick={() => setModalShow(true)} >Assign</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Active);
