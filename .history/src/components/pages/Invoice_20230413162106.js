/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Table, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";
import ReactHTMLtoPDF from 'react-html-to-pdf';


const Invoice = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState([]);

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "https://n6chil41tk.execute-api.ap-south-1.amazonaws.com/dev/admin/getinvoice"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const customerHandler = async () => {
    try {
      const { data } = await axios.get(
        "https://n6chil41tk.execute-api.ap-south-1.amazonaws.com/dev/admingetallcustomer"
      );
      setCustomer(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHandler();
    customerHandler();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [cuestomerId, setId] = useState("");
    const [InNumber, setIN] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [address, setA] = useState("");
    const [total, setT] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.post(
          "https://n6chil41tk.execute-api.ap-south-1.amazonaws.com/dev/admin/addInvoice",
          {
            cuestomerId,
            InNumber,
            desc,
            date,
            address,
            total,
          }
        );
        console.log(data);
        toast.success("Invoice Created");
        fetchHandler();
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
            Create Invoice
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Select Customer Id</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setId(e.target.value)}
              >
                <option>--Select--</option>
                {customer?.customer?.map((i, index) =>
                  i.customerId ? (
                    <option key={index} value={i._id}>
                      {i.customerId}
                    </option>
                  ) : (
                    ""
                  )
                )}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Select Order Id</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>--Select--</option>
                <option>4512</option>
                <option>7845</option>
              </Form.Select>
            </Form.Group>

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
            Invoice
          </span>
          <Button
            variant="outline-success"
            onClick={() => setModalShow(true)}
            style={{ borderRadius: "0px" }}
          >
            Create Invoice
          </Button>
        </div>

        <ReactHTMLtoPDF>
    <div>
      <h1>Hello, World!</h1>
    </div>
  </ReactHTMLtoPDF>

        <Container style={{ overflowX: "auto", marginTop: "2%" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Customer</th>
                <th>invoice Number</th>
                <th>Description</th>
                <th>Date of issue</th>
                <th>Address</th>
                <th>Total</th>
                <th>Send</th>
              </tr>
            </thead>
            <tbody>
              {data?.message?.map((i, index) => (
                <tr key={index}>
                  <td>{i.name} </td>
                  <td>{i.InNumber} </td>
                  <td>{i.desc} </td>
                  <td>{i.DOB} </td>
                  <td>{i.address} </td>
                  <td>{i.total} </td>
                  <td>
                    <Button variant="outline-success">Send</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </section>
    </>
  );
};
export default HOC(Invoice);
