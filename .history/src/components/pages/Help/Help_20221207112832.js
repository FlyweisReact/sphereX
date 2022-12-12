/** @format */

import axios from "axios";
import React from "react";
import {
  Button,
  Container,
  Table,
  Modal,
  Form, 
} from "react-bootstrap";
import HOC from "../../layout/HOC";
import {  AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const Help = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [id, setId] = React.useState(""); 



  function MyVerticallyCenteredModal(props) {

    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Edit Help&Support  
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
            onSubmit={  editHandler  }
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email" 
                onChange={(e) => setE(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="Number"
                onChange={(e) => setP(e.target.value)}
              />
            </Form.Group>

            <Button variant="outline-success" type="submit">
              Submit
            </Button>
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
            All Help&Support
          </span>
     
        </div>
      </section>

      <Container style={{ marginTop: "2%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Phone</th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
               <tr >
                <td>{data?.contact?.email}</td>
                <td>{data?.contact?.phone}</td>
                <td style={{ display: "flex", gap: "10px" }}>
                 
                  <AiFillEdit
                    color="blue"
                    cursor={"pointer"}
                    onClick={() => {
                      setId(data?.contact?._id);
                      setModalShow(true);
                    }}
                  />
                </td>
              </tr>
          
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default HOC(Help);
