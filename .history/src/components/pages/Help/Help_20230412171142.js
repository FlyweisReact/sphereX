/** @format */
import React, { useEffect, useState } from "react";
import { Button, Container, Table, Modal, Form } from "react-bootstrap";
import HOC from "../../layout/HOC";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";

const Help = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [data, setData] = useState([]);

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "https://3o4qnc8du3.execute-api.ap-south-1.amazonaws.com/dev/contact"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [address, setA] = useState("");
    const [email, setE] = useState("");
    const [phone, setP] = useState("");

    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.put(
          "https://3o4qnc8du3.execute-api.ap-south-1.amazonaws.com/dev/contact/63aaa8da8b8072204c0ac6b7",
          {
            address,
            email,
            phone,
          }
        );
        console.log(data);
        toast.success("Help&Support Updated");
        fetchHandler();
        setModalShow(false);
      } catch (err) {
        console.log(err);
      }
    };

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
            onSubmit={putHandler}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setA(e.target.value)}
              />
            </Form.Group>

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
            Customer's Help&Support
          </span>
        </div>
      </section>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Address</th>
              <th>Email</th>
              <th>Contact</th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data?.contact?.address}</td>
              <td>{data?.contact?.email}</td>
              <td>{data?.contact?.phone}</td>

              <td>
                <AiFillEdit
                  color="blue"
                  cursor={"pointer"}
                  onClick={() => {
                    setModalShow(true);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </Table>

        <section style={{marginTop : '5%'}}>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Partner's Help&Support
          </span>
        </div>
      </section>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Address</th>
              <th>Email</th>
              <th>Contact</th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>}</td>
              <td>{data?.contact?.email}</td>
              <td>{data?.contact?.phone}</td>

              <td>
                <AiFillEdit
                  color="blue"
                  cursor={"pointer"}
                  onClick={() => {
                    setModalShow(true);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
    </>
  );
};

export default HOC(Help);
