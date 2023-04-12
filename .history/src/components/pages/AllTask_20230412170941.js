/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const AllTask = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState(false);
  const [id, setId] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://3o4qnc8du3.execute-api.ap-south-1.amazonaws.com/dev/admingetallwork"
      );
      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function MyVerticallyCenteredModal(props) {
    const [workstatus, setW] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.put(
          `https://3o4qnc8du3.execute-api.ap-south-1.amazonaws.com/dev/admin/workstatus/${id}`,
          {
            workstatus,
          }
        );
        console.log(data);
        toast.success("Status Changed");
        fetchData();
        setModalShow(false);
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setW(e.target.value)}
            >
              <option>Change Status</option>
              <option value={"Ongoing"}>Ongoing</option>
              <option value={"Pending"}>Pending</option>
              <option value={"Success"}>Success</option>
            </Form.Select>
            <br />
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
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
            All Tasks
          </span>
        </div>

        <div style={{ overflowX: "auto", marginTop: "2%" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Shop</th>
                <th>Address</th>
                <th>Hour's</th>
                <th>Schedule Time</th>
                <th>Create Date/Time</th>
                <th>Partner</th>
                <th>Task</th>
                <th>No. of Partner's nedded</th>
                <th> Work Status</th>
                <th>Assign</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.customer?.map((i, index) => (
                <tr key={index}>
                  <td> {i.customerid} </td>
                  <td> {i.shopname} </td>
                  <td> {i.address} </td>
                  <td> {i.noofhours} </td>
                  <td> {i.sheduletime} </td>
                  <td> {i.createdateandtime} </td>
                  <td>
                    {" "}
                    {i.assignworktolabour?.map((a, index) => (
                      <p key={index}>{a.labourid}</p>
                    ))}{" "}
                  </td>
                  <td> {i.workdescription} </td>
                  <td> {i.noofworkers} </td>
                  <td> {i.workstatus} </td>
                  <td>
                    <Button
                      variant="outline-success"
                      onClick={() => navigate("/activeLabour")}
                    >
                      Assign
                    </Button>{" "}
                  </td>
                  <td>
                    <AiFillEdit
                      color="blue"
                      cursor={"pointer"}
                      onClick={() => {
                        setId(i._id);
                        setModalShow(true);
                      }}
                    />{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(AllTask);
